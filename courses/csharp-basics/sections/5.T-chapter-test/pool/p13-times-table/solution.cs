using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter rows and cols:");
        int n = int.Parse(Console.ReadLine());
        int m = int.Parse(Console.ReadLine());
        for (int r = 1; r <= n; r++)
        {
            for (int c = 1; c <= m; c++)
            {
                if (c > 1)
                {
                    Console.Write(" ");
                }
                Console.Write(r * c);
            }
            Console.WriteLine();
        }
    }
}
