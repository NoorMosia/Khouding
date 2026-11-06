using System;

class Program
{
    static int SumTo(int n)
    {
        int total = 0;
        for (int i = 1; i <= n; i++)
        {
            total = total + i;
        }
        return total;
    }

    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int n = int.Parse(Console.ReadLine());
        Console.WriteLine(SumTo(n));
    }
}
