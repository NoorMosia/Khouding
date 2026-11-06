using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the first leg:");
        double a = double.Parse(Console.ReadLine());
        Console.WriteLine("Enter the second leg:");
        double b = double.Parse(Console.ReadLine());
        Console.WriteLine(Math.Sqrt(Math.Pow(a, 2) + Math.Pow(b, 2)));
    }
}
