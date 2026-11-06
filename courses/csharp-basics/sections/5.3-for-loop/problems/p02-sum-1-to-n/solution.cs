using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int n = int.Parse(Console.ReadLine());
        int total = 0;
        for (int i = 1; i <= n; i++)
        {
            total = total + i;
        }
        Console.WriteLine(total);
    }
}
