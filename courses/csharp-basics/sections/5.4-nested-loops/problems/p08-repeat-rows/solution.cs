using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a height:");
        int n = int.Parse(Console.ReadLine());
        for (int row = 1; row <= n; row++)
        {
            for (int col = 1; col <= row; col++)
            {
                if (col > 1)
                {
                    Console.Write(" ");
                }
                Console.Write(row);
            }
            Console.WriteLine();
        }
    }
}
