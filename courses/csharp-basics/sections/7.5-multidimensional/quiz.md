# Checkpoint quiz, 7.5 Multidimensional arrays

> Comprehension gate before the problems. Auto-graded. Need 5 of 7 to pass. Answers + rationale at the bottom (hidden from the student in the real UI).

## Q1 (MCQ), declaration
How do you declare a 2D int array with 2 rows and 3 columns?
- A) `int[,] grid = new int[2, 3];`
- B) `int[] grid = new int[2][3];`
- C) `int[2, 3] grid = new int[];`
- D) `int[,] grid = new int[6];`

## Q2 (MCQ), GetLength(0)
For `int[,] grid = new int[2, 3];`, what is `grid.GetLength(0)`?
- A) 2, the number of rows
- B) 3, the number of columns
- C) 6, the total cells
- D) 1

## Q3 (MCQ), indexing
How do you read the cell at row 1, column 2 of a 2D array `grid`?
- A) `grid[1, 2]`
- B) `grid[1][2]`
- C) `grid[2, 1]`
- D) `grid(1, 2)`

## Q4 (True/False)
Indexing a 2D array with a single index, like `grid[1]`, is a compile error.
- True / False

## Q5 (MCQ), visiting cells
To visit every cell of a grid, you typically use:
- A) a nested loop: outer over rows, inner over columns
- B) a single `foreach` over `GetLength(0)`
- C) one loop from 0 to `GetLength(0) + GetLength(1)`
- D) recursion only

## Q6 (True/False)
On a non-square grid, swapping `GetLength(0)` and `GetLength(1)` can read the wrong cells or go out of bounds.
- True / False

## Q7 (Fill in the blank)
Fill the call that gives the number of columns of a 2D array `grid`:
`grid.____(1)`

---

### Answer key (UI hides this)
- Q1: **A**, `int[,]` with two sizes, rows then columns.
- Q2: **A**, `GetLength(0)` is the rows (2); `GetLength(1)` is the columns (3).
- Q3: **A**, a 2D array is indexed `grid[row, col]` with a comma in one bracket pair.
- Q4: **True**, one index on a 2D array gives CS0022 (expected 2 indices).
- Q5: **A**, nest two loops, outer rows and inner columns.
- Q6: **True**, rows and columns differ in size, so mixing them breaks the bounds; the compiler cannot catch it.
- Q7: **`GetLength`**
