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
                Console.Write("*");
            }
            Console.WriteLine();
        }
    }
}
