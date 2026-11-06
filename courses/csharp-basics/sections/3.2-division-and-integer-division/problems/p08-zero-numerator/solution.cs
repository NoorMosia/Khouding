using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter n:");
        int n = int.Parse(Console.ReadLine());
        Console.WriteLine(0 / n);
        Console.WriteLine(n / n);
    }
}
