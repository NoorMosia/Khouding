using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a height:");
        int n = int.Parse(Console.ReadLine());
        for (int row = n; row >= 1; row--)
        {
            for (int col = 1; col <= row; col++)
            {
                Console.Write("*");
            }
            Console.WriteLine();
        }
    }
}
