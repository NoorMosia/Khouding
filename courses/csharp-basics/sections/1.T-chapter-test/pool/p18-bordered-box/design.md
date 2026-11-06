# p18, Bordered box (Family E, reproduce the exact report)

**Integrates:** 1.2 output precision; interior spacing is significant.

## Statement (student-facing)
Print this box exactly. The spaces inside the middle line matter:

```
+--------+
| READY  |
+--------+
```

## Why it belongs in the boss
Pure precision: the top and bottom borders are 10 characters wide, and the middle line must be padded so
the closing `|` lines up. One wrong space fails. A value-varied reproduce-the-report variant.
