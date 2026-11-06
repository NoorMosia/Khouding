# p11, Name tag (Family C, model and format)

**Integrates:** `const string` + `string` + `char` (1.3/1.4) + tab-aligned output (1.2) + naming (1.5).

## Statement (student-facing)
A visitor pass. Use a `const string` for the heading `VISITOR PASS`. The visitor is `Dana`, in zone `B` (a
single character). Print the heading, then two tab-separated label lines:

```
VISITOR PASS
Name:	Dana
Zone:	B
```

Use `Write` for each label (ending with `\t`) and `WriteLine` for the value.

## Why it belongs in the boss
A `const string` heading, a `string`, and a `char`, laid out with tabs. A value-varied variant.
