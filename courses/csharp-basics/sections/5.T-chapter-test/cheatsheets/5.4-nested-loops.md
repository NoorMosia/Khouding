# Cheatsheet, 5.4 Nested loops

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## A loop inside a loop
The inner loop runs fully on every outer pass. Outer = rows, inner = columns.
```csharp
for (int row = 1; row <= n; row++)
{
    for (int col = 1; col <= m; col++)
    {
        Console.Write("*");    // stay on the row
    }
    Console.WriteLine();       // end the row
}
```

## Counting
An `a` by `b` nest runs the inner body `a * b` times. The inner counter resets to its init value on every
outer pass.

## Write vs WriteLine (the row structure)
| Where | Effect |
|-------|--------|
| `Write` in the inner loop | characters stay on the current row |
| `WriteLine()` after the inner loop | ends the row, once per outer pass |
| `WriteLine` **inside** the inner loop | every item on its own line (grid lost) |
| no `WriteLine` after the inner loop | all rows merge onto one line |

## Inner bound depending on the outer
A triangle: row `r` has `r` items.
```csharp
for (int r = 1; r <= n; r++)
{
    for (int c = 1; c <= r; c++) { Console.Write("*"); }
    Console.WriteLine();
}
```

## Clean separators (no trailing space)
Print the separator before every value except the first in the row.
```csharp
for (int c = 1; c <= m; c++)
{
    if (c > 1) { Console.Write(" "); }
    Console.Write(row * c);
}
Console.WriteLine();
```

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `CS1513: } expected` | a loop body was opened and never closed (two loops, two sets of braces) | add the missing `}`; write both braces before filling the body |
| (no error) rows merge or split wrongly | `WriteLine` inside the inner loop, or no `WriteLine` after it | `Write` inside, one `WriteLine` after the inner loop |
| (no error) a stray trailing space fails the match | a separator printed after the last value | print the separator before each value except the first |

The row-structure and trailing-space bugs are silent: the program runs but the exact output is off. When a 2D
output does not match, check where the line ends and whether a trailing space crept in.
