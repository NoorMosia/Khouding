using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter rows and seats:");
        int n = int.Parse(Console.ReadLine());
        int m = int.Parse(Console.ReadLine());
        for (int r = 1; r <= n; r++)
        {
            for (int s = 1; s <= m; s++)
            {
                if (s > 1)
                {
                    Console.Write(" ");
                }
                Console.Write($"R{r}S{s}");
            }
            Console.WriteLine();
        }
    }
}
