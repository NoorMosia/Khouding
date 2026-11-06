using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int n = int.Parse(Console.ReadLine());
        for (int i = 1; i <= n; i++)
        {
            Console.WriteLine(i);
        }
        Console.WriteLine("---");
        int j = 1;
        while (j <= n)
        {
            Console.WriteLine(j);
            j++;
        }
    }
}
