using System;

class Program
{
    static void CountTo(int n)
    {
        for (int i = 1; i <= n; i++)
        {
            Console.WriteLine(i);
        }
    }

    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int n = int.Parse(Console.ReadLine());
        CountTo(n);
    }
}
