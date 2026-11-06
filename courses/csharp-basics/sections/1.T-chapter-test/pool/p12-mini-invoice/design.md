# p12, Mini invoice (Family C, model and format)

**Integrates:** `const` + `int`/`double` + compute `+` and `*` (1.3) + tab-aligned output (1.2).

## Statement (student-facing)
A mini invoice. A flat service fee of `4` applies. The job is `3` hours at an hourly rate of `20.5`. Use a
`const` for the service fee. Compute labour (hours times rate) and total (labour plus fee). Print three
tab-separated label lines:

```
Labour:	61.5
Fee:	4
Total:	65.5
```

Use `Write` for the label (ending with `\t`) and `WriteLine` for the value.

## Why it belongs in the boss
The heaviest kind of model-and-format: a named `const`, mixed `int`/`double`, two computations (`*` then
`+`), and tab-aligned output with fractional results. A value-varied variant.
