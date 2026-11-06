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
                grid[r, c] = (r + 1) * (c + 1);
            }
        }
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
    }
}
