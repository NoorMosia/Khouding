# Pool p19, Fix the loop bound (7.2)

**Family F, fix the broken program.** The program should print every element, one per line, but it crashes with
`IndexOutOfRangeException`. The bug is `i <= a.Length`; the fix is `i < a.Length`. Cases vary values and length
incl. 1. The committed solution stays in bounds.
