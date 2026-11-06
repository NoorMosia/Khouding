# Multidimensional arrays

## When one dimension is not enough

A plain array is a single row of values, reached by one index. But some data is naturally a grid: a
spreadsheet, a game board, a table of numbers with rows and columns. You could fake it with one long array and
arithmetic on the index, but C# gives you a two-dimensional array that is addressed directly by row and
column.

## Declaring a 2D array

Write the type with a comma in the brackets, and give two sizes: rows then columns.

```csharp
int[,] grid = new int[2, 3];
grid[0, 0] = 5;
grid[1, 2] = 9;
Console.WriteLine(grid[0, 0]);
Console.WriteLine(grid[1, 2]);
```

The output is:

```
5
9
```

`int[,]` is a two-dimensional array of `int`. `new int[2, 3]` makes a grid with 2 rows and 3 columns, 6 cells
in all, each starting at the default `0`. A single cell is `grid[row, col]`: one index for the row, one for the
column, both zero-based.

## Dimensions: GetLength(0) and GetLength(1)

A 2D array does not have a single `Length` you loop on. Instead, each dimension has its own size.
`GetLength(0)` is the number of rows, `GetLength(1)` is the number of columns:

```csharp
int[,] grid = new int[2, 3];
Console.WriteLine(grid.GetLength(0));
Console.WriteLine(grid.GetLength(1));
```

The output is:

```
2
3
```

`GetLength(0)` is rows because rows are the first size you gave. `GetLength(1)` is columns, the second. Mixing
these two up is the most common 2D mistake.

## Walking a grid with nested loops

To visit every cell, nest two loops: the outer over rows, the inner over columns. This is the nested loop from
Chapter 5, now driving a real grid. Printing a grid as a table uses the same `Write` inside, `WriteLine` after
each row trick:

```csharp
int[,] grid = { { 1, 2, 3 }, { 4, 5, 6 } };
for (int r = 0; r < grid.GetLength(0); r++)
{
    for (int c = 0; c < grid.GetLength(1); c++)
    {
        if (c > 0)
        {
            Console.Write(" ");
        }
        Console.Write(grid[r, c]);
    }
    Console.WriteLine();
}
```

The output is:

```
1 2 3
4 5 6
```

`{ { 1, 2, 3 }, { 4, 5, 6 } }` is the 2D literal: two rows, three columns each. The outer loop picks a row, the
inner loop walks that row's columns. A space goes before every cell except the first in a row (so there is no
trailing space), and `WriteLine` ends each row.

## Summing every cell

An aggregate over a grid is the same nested walk with a running total:

```csharp
int[,] grid = { { 1, 2 }, { 3, 4 } };
int sum = 0;
for (int r = 0; r < grid.GetLength(0); r++)
{
    for (int c = 0; c < grid.GetLength(1); c++)
    {
        sum = sum + grid[r, c];
    }
}
Console.WriteLine(sum);
```

The output is:

```
10
```

To sum a single row, fix the row and loop the columns. To sum a single column, fix the column and loop the
rows.

## When it does not compile

A 2D array needs two indices. Using one is an error:

```
Program.cs(8,27): error CS0022: Wrong number of indices inside []; expected 2
```

That means you wrote `grid[r]` on an `int[,]`. A 2D array is addressed as `grid[r, c]`, with both indices.

The other trap is not a compiler error: swapping `GetLength(0)` and `GetLength(1)`, or indexing `grid[c, r]`
instead of `grid[r, c]`. On a non-square grid this reads the wrong cells or runs out of bounds; on a square
grid it may even look right until the data is not symmetric. The compiler cannot catch a row/column mix-up, so
keep rows with `GetLength(0)` and columns with `GetLength(1)`, consistently.

## What you'll practise

Grids addressed by row and column: declaring `int[,]`, reading and writing single cells, `GetLength(0)` and
`GetLength(1)`, filling a grid from input row by row and printing it as a table, summing the whole grid, a
single row, and a single column, a computed fill, counting and max over a grid, and fixing a rows/columns
mix-up. Eleven reps on two dimensions. This is the last section of the chapter; next is the Chapter 7 test.
