using System;

class Program
{
    static void Main()
    {
        int rows = int.Parse(Console.ReadLine());
        int cols = int.Parse(Console.ReadLine());
        int[,] grid = new int[rows, cols];
        for (int r = 0; r < rows; r++)
        {
            for (int c = 0; c < cols; c++)
            {
                grid[r, c] = int.Parse(Console.ReadLine());
            }
        }
        int row = int.Parse(Console.ReadLine());
        int sum = 0;
        // Bug: this walks the rows dimension and indexes [c, row] (rows/cols swapped).
        for (int c = 0; c < grid.GetLength(0); c++)
        {
            sum = sum + grid[c, row];
        }
        Console.WriteLine(sum);
    }
}
