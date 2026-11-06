# Nested loops

## A loop inside a loop

A loop body is just a block, and a block can contain another loop. That is a nested loop: an outer loop whose
each pass runs a whole inner loop from start to finish. It is how you work in two dimensions, rows and
columns.

```csharp
for (int row = 1; row <= 2; row++)
{
    for (int col = 1; col <= 3; col++)
    {
        Console.Write("*");
    }
    Console.WriteLine();
}
```

The output is:

```
***
***
```

The outer loop runs twice, once per row. On each outer pass, the inner loop runs fully, printing three `*`
with `Console.Write` (no newline), and then `Console.WriteLine()` ends the row. Two rows of three stars. The
inner loop finishes completely before the outer loop moves to its next pass.

## Counting the passes

If the outer loop runs `a` times and the inner loop runs `b` times per outer pass, the inner body runs `a * b`
times in total. The grid above is 2 by 3, so the inner `Write` runs 6 times. The inner counter starts over
from its init value on every outer pass, that reset is what makes each row look the same.

## Rows and columns: Write vs WriteLine

The row structure comes entirely from where you print and where you end the line. Use `Console.Write` inside
the inner loop to stay on the current row, and one `Console.WriteLine()` after the inner loop to end it. Mixing
these up is the most common nested-loop mistake:

- `Write` in the inner loop, `WriteLine` after it: a proper grid.
- `WriteLine` in the inner loop: every character lands on its own line.
- no `WriteLine` after the inner loop: all rows run together on one line.

## The inner bound can depend on the outer

The inner loop's bound does not have to be fixed. When it depends on the outer counter, you get a shape that
changes per row. A right triangle prints `row` stars on row `row`:

```csharp
for (int row = 1; row <= 4; row++)
{
    for (int col = 1; col <= row; col++)
    {
        Console.Write("*");
    }
    Console.WriteLine();
}
```

The output is:

```
*
**
***
****
```

On row 1 the inner loop runs once, on row 2 twice, and so on. The inner condition `col <= row` ties the row
width to the outer counter.

## A grid of values

The cell does not have to be a fixed character. It can be a computed value, like a multiplication table. To
keep columns readable, separate values with a single space and avoid a trailing space by printing the
separator before every value except the first in the row:

```csharp
for (int row = 1; row <= 3; row++)
{
    for (int col = 1; col <= 3; col++)
    {
        if (col > 1)
        {
            Console.Write(" ");
        }
        Console.Write(row * col);
    }
    Console.WriteLine();
}
```

The output is:

```
1 2 3
2 4 6
3 6 9
```

Each row prints `row * col` for the columns, separated by single spaces, with no space at the end of a row.
The space-before-every-value-but-the-first trick keeps the output clean, which matters because grading is
exact: a stray trailing space would be a mismatch.

## When it does not compile

Nested loops are ordinary loops, so the errors are the usual ones. The extra risk is that two loops mean two
sets of braces, so a missing `}` is easy. When one is missing, the compiler reaches the end of the file still
expecting it:

```
Program.cs(14,1): error CS1513: } expected
```

That means a block was opened and never closed. Count your braces: each loop body you open must be closed. A
reliable habit is to write both `{` and `}` before filling in the body, then write the inner loop inside.

## What you'll practise

Reasoning in two dimensions: an outer loop over rows and an inner loop over columns, the `a * b` total, the
inner counter resetting each outer pass, and `Write` versus `WriteLine` for row structure. You will build
blocks, triangles whose width depends on the row, multiplication tables, and numbered grids, and you will fix
a nest whose rows merge or come out the wrong length. Twelve reps, kept to two levels. Next is loop control,
`break` and `continue`.
