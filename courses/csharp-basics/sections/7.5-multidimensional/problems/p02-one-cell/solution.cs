using System;

class Program
{
    static void Main()
    {
        int rows = int.Parse(Console.ReadLine());
        int cols = int.Parse(Console.ReadLine());
        int[,] grid = new int[rows, cols];
        int r = int.Parse(Console.ReadLine());
        int c = int.Parse(Console.ReadLine());
        int value = int.Parse(Console.ReadLine());
        grid[r, c] = value;
        Console.WriteLine(grid[r, c]);
    }
}
