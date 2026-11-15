using System.Security.Claims;
using System.Web;
using Backend.Data;
using Backend.Email;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Backend.Auth;

public static class AuthEndpoints
{
    public static void MapAuthEndpoints(this WebApplication app)
    {
        // POST /api/auth/register
        app.MapPost("/api/auth/register", async (
            RegisterRequest req,
            UserManager<IdentityUser> userManager,
            SignInManager<IdentityUser> signInManager) =>
        {
            if (string.IsNullOrWhiteSpace(req.Email) || string.IsNullOrWhiteSpace(req.Password))
                return Results.BadRequest(new { error = "Email and password are required." });

            var user = new IdentityUser
            {
                UserName = req.Email,
                Email = req.Email,
            };

            var result = await userManager.CreateAsync(user, req.Password);
            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(e => e.Description);
                return Results.BadRequest(new { errors });
            }

            await signInManager.SignInAsync(user, isPersistent: true);
            return Results.Ok(ToMeResponse(user));
        });

        // POST /api/auth/login
        app.MapPost("/api/auth/login", async (
            LoginRequest req,
            SignInManager<IdentityUser> signInManager,
            UserManager<IdentityUser> userManager) =>
        {
            if (string.IsNullOrWhiteSpace(req.Email) || string.IsNullOrWhiteSpace(req.Password))
                return Results.BadRequest(new { error = "Email and password are required." });

            var result = await signInManager.PasswordSignInAsync(
                req.Email, req.Password,
                isPersistent: true,
                lockoutOnFailure: false);

            if (!result.Succeeded)
                return Results.Unauthorized();

            var user = await userManager.FindByEmailAsync(req.Email);
            return user is null ? Results.Unauthorized() : Results.Ok(ToMeResponse(user));
        });

        // POST /api/auth/logout
        app.MapPost("/api/auth/logout", async (SignInManager<IdentityUser> signInManager) =>
        {
            await signInManager.SignOutAsync();
            return Results.Ok(new { ok = true });
        });

        // GET /api/auth/me
        app.MapGet("/api/auth/me", async (
            ClaimsPrincipal principal,
            UserManager<IdentityUser> userManager) =>
        {
            if (principal.Identity?.IsAuthenticated != true)
                return Results.Unauthorized();

            var user = await userManager.GetUserAsync(principal);
            return user is null ? Results.Unauthorized() : Results.Ok(ToMeResponse(user));
        });

        // GET /api/auth/providers
        app.MapGet("/api/auth/providers", (IConfiguration config) =>
        {
            var providers = new List<string>();
            if (!string.IsNullOrEmpty(config["Authentication:Google:ClientId"])) providers.Add("google");
            if (!string.IsNullOrEmpty(config["Authentication:GitHub:ClientId"])) providers.Add("github");
            return Results.Ok(providers);
        });

        // GET /api/auth/login/google
        app.MapGet("/api/auth/login/google", (string? returnUrl, LinkGenerator links, HttpContext ctx) =>
        {
            var redirectUri = links.GetUriByName(ctx, "CallbackGoogle")
                ?? $"{ctx.Request.Scheme}://{ctx.Request.Host}/api/auth/callback/google";
            var props = new AuthenticationProperties
            {
                RedirectUri = redirectUri,
                Items = { ["returnUrl"] = returnUrl ?? "/" }
            };
            return Results.Challenge(props, ["Google"]);
        });

        // GET /api/auth/callback/google
        app.MapGet("/api/auth/callback/google", async (
            HttpContext ctx,
            UserManager<IdentityUser> userManager,
            SignInManager<IdentityUser> signInManager) =>
            await HandleOAuthCallback(ctx, userManager, signInManager, "Google"))
        .WithName("CallbackGoogle");

        // GET /api/auth/login/github
        app.MapGet("/api/auth/login/github", (string? returnUrl, LinkGenerator links, HttpContext ctx) =>
        {
            var redirectUri = links.GetUriByName(ctx, "CallbackGitHub")
                ?? $"{ctx.Request.Scheme}://{ctx.Request.Host}/api/auth/callback/github";
            var props = new AuthenticationProperties
            {
                RedirectUri = redirectUri,
                Items = { ["returnUrl"] = returnUrl ?? "/" }
            };
            return Results.Challenge(props, ["GitHub"]);
        });

        // GET /api/auth/callback/github
        app.MapGet("/api/auth/callback/github", async (
            HttpContext ctx,
            UserManager<IdentityUser> userManager,
            SignInManager<IdentityUser> signInManager) =>
            await HandleOAuthCallback(ctx, userManager, signInManager, "GitHub"))
        .WithName("CallbackGitHub");

        // PUT /api/auth/display-name
        app.MapPut("/api/auth/display-name", async (
            DisplayNameRequest req,
            ClaimsPrincipal principal,
            UserManager<IdentityUser> userManager,
            AppDbContext db) =>
        {
            var userId = principal.Identity?.IsAuthenticated == true
                ? principal.FindFirstValue(ClaimTypes.NameIdentifier)
                : null;
            if (userId is null) return Results.Unauthorized();

            var name = req.DisplayName?.Trim() ?? "";
            if (name.Length == 0 || name.Length > 40)
                return Results.BadRequest(new { error = "Display name must be 1 to 40 characters." });

            var profile = await db.UserProfiles.FirstOrDefaultAsync(p => p.UserId == userId);
            if (profile is null)
            {
                db.UserProfiles.Add(new UserProfile
                {
                    UserId      = userId,
                    DisplayName = name,
                    UpdatedAt   = DateTimeOffset.UtcNow,
                });
            }
            else
            {
                profile.DisplayName = name;
                profile.UpdatedAt   = DateTimeOffset.UtcNow;
            }
            await db.SaveChangesAsync();

            var user = await userManager.FindByIdAsync(userId);
            return Results.Ok(ToMeResponse(user!, name));
        }).RequireAuthorization();
        // POST /api/auth/forgot-password
        // Sends a password reset link to the given email. Always returns 200
        // (no account enumeration).
        app.MapPost("/api/auth/forgot-password", async (
            ForgotPasswordRequest req,
            UserManager<IdentityUser> userManager,
            EmailService emailService,
            IConfiguration config,
            HttpContext ctx) =>
        {
            if (string.IsNullOrWhiteSpace(req.Email))
                return Results.BadRequest(new { error = "Email is required." });

            var user = await userManager.FindByEmailAsync(req.Email);
            if (user is not null)
            {
                var token     = await userManager.GeneratePasswordResetTokenAsync(user);
                var encoded   = HttpUtility.UrlEncode(token);
                var origin    = config["Frontend:BaseUrl"]
                                ?? $"{ctx.Request.Scheme}://localhost:5173";
                var resetUrl  = $"{origin}/auth/reset-password?email={HttpUtility.UrlEncode(req.Email)}&token={encoded}";
                try { await emailService.SendPasswordResetAsync(req.Email, resetUrl); }
                catch { /* log happens inside EmailService; don't surface to caller */ }
            }

            // Always 200 — do not reveal whether the email exists
            return Results.Ok(new { ok = true });
        });

        // POST /api/auth/reset-password
        app.MapPost("/api/auth/reset-password", async (
            ResetPasswordRequest req,
            UserManager<IdentityUser> userManager) =>
        {
            if (string.IsNullOrWhiteSpace(req.Email) ||
                string.IsNullOrWhiteSpace(req.Token)  ||
                string.IsNullOrWhiteSpace(req.NewPassword))
                return Results.BadRequest(new { error = "Email, token, and new password are required." });

            var user = await userManager.FindByEmailAsync(req.Email);
            if (user is null)
                return Results.BadRequest(new { error = "Invalid reset link." });

            var result = await userManager.ResetPasswordAsync(user, req.Token, req.NewPassword);
            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(e => e.Description);
                return Results.BadRequest(new { errors });
            }

            return Results.Ok(new { ok = true });
        });
    }

    // ── OAuth callback handler (shared for Google + GitHub) ──────────────────

    private static async Task<IResult> HandleOAuthCallback(
        HttpContext ctx,
        UserManager<IdentityUser> userManager,
        SignInManager<IdentityUser> signInManager,
        string provider)
    {
        var info = await signInManager.GetExternalLoginInfoAsync();
        if (info is null)
            return Results.Redirect("//auth/login?error=callback_failed");

        // Try sign in with existing external login record
        var signInResult = await signInManager.ExternalLoginSignInAsync(
            info.LoginProvider, info.ProviderKey,
            isPersistent: true, bypassTwoFactor: true);

        if (signInResult.Succeeded)
            return Results.Redirect(GetReturnUrl(info));

        // No external login record — look up by verified email (link-by-verified-email)
        var email = info.Principal.FindFirstValue(ClaimTypes.Email);
        if (email is null)
            return Results.Redirect("//auth/login?error=no_email");

        var user = await userManager.FindByEmailAsync(email);

        if (user is null)
        {
            // Create a new account
            user = new IdentityUser { UserName = email, Email = email, EmailConfirmed = true };
            var createResult = await userManager.CreateAsync(user);
            if (!createResult.Succeeded)
                return Results.Redirect("//auth/login?error=account_creation_failed");
        }

        // Attach the external login to the account
        var addResult = await userManager.AddLoginAsync(user, info);
        if (!addResult.Succeeded)
            return Results.Redirect("//auth/login?error=login_link_failed");

        await signInManager.SignInAsync(user, isPersistent: true);
        return Results.Redirect(GetReturnUrl(info));
    }

    private static string GetReturnUrl(ExternalLoginInfo info)
    {
        string? url = null;
        info.AuthenticationProperties?.Items.TryGetValue("returnUrl", out url);
        // Guard against open redirect — only allow relative paths
        return !string.IsNullOrEmpty(url) && url.StartsWith('/') ? url : "/";
    }

    private static MeResponse ToMeResponse(IdentityUser user, string? displayName = null)
    {
        var name = !string.IsNullOrWhiteSpace(displayName)
            ? displayName
            : user.Email!.Split('@')[0];
        return new MeResponse(user.Id, user.Email!, name);
    }
}

// ── Request / response shapes ──────────────────────────────────────────────────

record RegisterRequest(string Email, string Password);
record LoginRequest(string Email, string Password);
record MeResponse(string Id, string Email, string DisplayName);
record ForgotPasswordRequest(string Email);
record DisplayNameRequest(string DisplayName);
record ResetPasswordRequest(string Email, string Token, string NewPassword);
