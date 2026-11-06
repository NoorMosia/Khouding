using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter rows and cols:");
        int n = int.Parse(Console.ReadLine());
        int m = int.Parse(Console.ReadLine());
        for (int row = 1; row <= n; row++)
        {
            for (int col = 1; col <= m; col++)
            {
                // BUG: this ends the line after every star, so each star is on its own line.
                // Use Write here, and put one WriteLine after the inner loop to end the row.
                Console.WriteLine("*");
            }
        }
    }
}
