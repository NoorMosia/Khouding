using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int n = int.Parse(Console.ReadLine());
        int product = 1;
        for (int i = 1; i <= n; i++)
        {
            product = product * i;
        }
        Console.WriteLine(product);
    }
}
