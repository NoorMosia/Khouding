using System;

class Program
{
    static void Main()
    {
        int rows = int.Parse(Console.ReadLine());
        int cols = int.Parse(Console.ReadLine());
        int[,] grid = new int[rows, cols];
        Console.WriteLine(grid.GetLength(0));
        Console.WriteLine(grid.GetLength(1));
    }
}
