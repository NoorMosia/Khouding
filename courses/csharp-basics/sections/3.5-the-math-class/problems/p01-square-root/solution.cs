using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a number:");
        double n = double.Parse(Console.ReadLine());
        Console.WriteLine(Math.Sqrt(n));
    }
}
