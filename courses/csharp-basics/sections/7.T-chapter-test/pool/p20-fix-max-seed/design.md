# Pool p20, Fix the max seed (7.3)

**Family F, fix the broken program.** The program should print the largest element but is wrong when every
element is negative. The bug is `int max = 0;`; the fix seeds `max = a[0]` and loops from index 1. An
all-negative case proves it. Inputs have `n >= 1`.
