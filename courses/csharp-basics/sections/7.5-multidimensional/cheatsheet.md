# Cheatsheet, 7.5 Multidimensional arrays

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Declare and index (rows, then columns)
```csharp
int[,] grid = new int[2, 3];   // 2 rows, 3 columns, all 0
grid[0, 0] = 5;                // row 0, column 0
int x = grid[1, 2];            // row 1, column 2
```

## 2D literal
```csharp
int[,] grid = { { 1, 2, 3 }, { 4, 5, 6 } };   // 2 rows of 3
```

## Dimensions
| Call | Meaning |
|------|---------|
| `grid.GetLength(0)` | number of rows |
| `grid.GetLength(1)` | number of columns |

## Walk every cell (outer rows, inner columns)
```csharp
for (int r = 0; r < grid.GetLength(0); r++)
{
    for (int c = 0; c < grid.GetLength(1); c++)
    {
        // use grid[r, c]
    }
}
```

## Print as a table (space between cells, no trailing space)
```csharp
for (int r = 0; r < grid.GetLength(0); r++)
{
    for (int c = 0; c < grid.GetLength(1); c++)
    {
        if (c > 0) Console.Write(" ");
        Console.Write(grid[r, c]);
    }
    Console.WriteLine();
}
```

## Sum a row / a column
```csharp
// row R: fix r = R, loop c
// column C: fix c = C, loop r
```

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `CS0022: Wrong number of indices inside []; expected 2` | indexed a 2D array with one index: `grid[r]` | use both: `grid[r, c]` |
| (no error) wrong cells / out of range on a non-square grid | swapped rows/cols or indexed `grid[c, r]` | rows = `GetLength(0)`, cols = `GetLength(1)`; index `grid[r, c]` |

Rectangular only here: every row has the same number of columns.
