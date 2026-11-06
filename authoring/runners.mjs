// Language runners, "recipes", mirroring the execution adapter's shape
// (architecture §3: the engine shape is identical; only the toolchain changes).
//
// A runner knows how to, for ONE language:
//   prepare(workdir, solutionFiles)  -> compile once into `workdir`
//   run(stdin)                       -> run the compiled artifact against stdin, return raw stdout
//   cleanup()                        -> tear down
//
// The CLI compiles a solution ONCE per problem, then runs it per test case
// (compiling per-case would be painfully slow).

import { spawnSync } from "node:child_process";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync, copyFileSync, readFileSync } from "node:fs";
import { join, basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Build/run work happens in a LOCAL, git-ignored dir (not the OS temp dir).
// Reason: some Windows Application Control policies (Smart App Control / WDAC)
// intermittently block executing a freshly built .dll out of %TEMP%
// (error 0x800711C7). A workspace-local dir avoids that.
const WORK_BASE = join(dirname(fileURLToPath(import.meta.url)), ".khwork");

// --- shared helpers -------------------------------------------------------

function runProcess(cmd, args, { cwd, input, env } = {}) {
  const res = spawnSync(cmd, args, {
    cwd,
    input: input ?? "",
    encoding: "utf8",
    maxBuffer: 16 * 1024 * 1024,
    shell: false,
    env: env ? { ...process.env, ...env } : process.env,
  });
  if (res.error) {
    throw new Error(`failed to spawn '${cmd}': ${res.error.message}`);
  }
  return { stdout: res.stdout ?? "", stderr: res.stderr ?? "", code: res.status };
}

// Run solutions as the production sandbox does: INVARIANT culture (dot as the
// decimal separator, no locale surprises) and English tool output. Without
// this, an authoring machine in a comma-decimal locale would both misparse
// "4.99" and format doubles differently from the real (invariant) runtime,
// baking machine-specific expecteds. Judge0 runs invariant by default, so this
// matches it.
const CS_ENV = {
  DOTNET_SYSTEM_GLOBALIZATION_INVARIANT: "1",
  DOTNET_CLI_UI_LANGUAGE: "en",
};

// --- C# runner ------------------------------------------------------------
//
// Strategy: create a throwaway `dotnet` console project, drop the solution
// file(s) in, `dotnet build` ONCE, then run per case via `dotnet run
// --no-build` with stdin piped. Fast: one compile, N cheap runs.
//
// NOTE (Windows Smart App Control): with SAC enabled, Windows intermittently
// blocks executing freshly built, unsigned .dll files (error 0x800711C7). This
// is a machine policy with no per-app allowlist; the supported fix is to turn
// SAC off (Settings > Privacy & Security > Windows Security > App & Browser
// control > Smart App Control). Running via `dotnet run` reduces how often it
// trips but does not fully prevent it. See authoring/README.md.

function csharpRunner() {
  let workdir = null;

  return {
    language: "csharp",
    ext: "cs",

    stageAssets(assetPaths) {
      // Copy read-only asset files (e.g. data.txt for 8.6 file-I/O problems) into
      // the working directory so the solution can open them by name.
      // Called after prepare() and before any run(). Additive: problems without
      // asset_files never call this and are completely unaffected.
      if (!workdir) throw new Error("stageAssets called before prepare()");
      for (const p of assetPaths) {
        copyFileSync(p, join(workdir, basename(p)));
      }
    },

    prepare(solutionPaths) {
      mkdirSync(WORK_BASE, { recursive: true });
      workdir = mkdtempSync(join(WORK_BASE, "cs-"));

      // Minimal console project. Nullable off + implicit usings off so the
      // authored solution controls exactly what it declares.
      const csproj = `<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net10.0</TargetFramework>
    <ImplicitUsings>disable</ImplicitUsings>
    <Nullable>disable</Nullable>
    <AssemblyName>sol</AssemblyName>
    <RootNamespace>sol</RootNamespace>
    <EnableDefaultCompileItems>false</EnableDefaultCompileItems>
  </PropertyGroup>
  <ItemGroup>
${solutionPaths.map((p) => `    <Compile Include="${basename(p)}" />`).join("\n")}
  </ItemGroup>
</Project>
`;
      writeFileSync(join(workdir, "sol.csproj"), csproj, "utf8");
      for (const p of solutionPaths) {
        copyFileSync(p, join(workdir, basename(p)));
      }

      // Build once up front so per-case runs can use --no-build (fast).
      const build = runProcess(
        "dotnet",
        ["build", "-c", "Release", "-v", "quiet", "--nologo"],
        { cwd: workdir, env: CS_ENV }
      );
      if (build.code !== 0) {
        throw new Error(
          `C# build failed:\n${build.stdout}\n${build.stderr}`.trim()
        );
      }
    },

    run(stdin) {
      // Execute via `dotnet run` (through the trusted dotnet host) rather than
      // launching the built sol.dll directly, which Smart App Control is more
      // likely to block (see the SAC note at the top of this file).
      // --no-build reuses prepare()'s build so this stays fast.
      // cwd: workdir ensures the process's working directory is the project
      // folder, so solutions can open files by name (e.g. "data.txt" in 8.6).
      const res = runProcess(
        "dotnet",
        ["run", "-c", "Release", "--no-build", "--project", workdir],
        { input: stdin, cwd: workdir, env: CS_ENV }
      );
      if (res.code !== 0) {
        throw new Error(
          `solution exited non-zero (${res.code}) on stdin=${JSON.stringify(
            stdin
          )}\nstderr: ${res.stderr}`
        );
      }
      return res.stdout;
    },

    cleanup() {
      if (workdir) {
        try {
          rmSync(workdir, { recursive: true, force: true });
        } catch {
          /* best effort */
        }
        workdir = null;
      }
    },
  };
}

// Registry, add java/python/cpp here later as recipes.
const RUNNERS = {
  csharp: csharpRunner,
};

export function getRunner(language) {
  const factory = RUNNERS[language];
  if (!factory) {
    throw new Error(
      `no runner for language '${language}' (have: ${Object.keys(RUNNERS).join(
        ", "
      )})`
    );
  }
  return factory();
}

export function supportedLanguages() {
  return Object.keys(RUNNERS);
}
