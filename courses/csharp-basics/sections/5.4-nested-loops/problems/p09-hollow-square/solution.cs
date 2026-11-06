using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a size:");
        int n = int.Parse(Console.ReadLine());
        for (int row = 1; row <= n; row++)
        {
            for (int col = 1; col <= n; col++)
            {
                if (row == 1 || row == n || col == 1 || col == n)
                {
                    Console.Write("*");
                }
                else
                {
                    Console.Write(" ");
                }
            }
            Console.WriteLine();
        }
    }
}
