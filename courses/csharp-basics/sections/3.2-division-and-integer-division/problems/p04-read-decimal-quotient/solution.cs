using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a:");
        double a = double.Parse(Console.ReadLine());
        Console.WriteLine("Enter b:");
        double b = double.Parse(Console.ReadLine());
        Console.WriteLine(a / b);
    }
}
