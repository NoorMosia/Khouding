using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the base:");
        double b = double.Parse(Console.ReadLine());
        Console.WriteLine("Enter the exponent:");
        double e = double.Parse(Console.ReadLine());
        Console.WriteLine(Math.Pow(b, e));
    }
}
