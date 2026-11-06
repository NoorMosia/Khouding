using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the item price:");
        double item = double.Parse(Console.ReadLine());
        Console.WriteLine("Enter the tax:");
        double tax = double.Parse(Console.ReadLine());
        Console.WriteLine($"Item: {item:F2}");
        Console.WriteLine($"Tax: {tax:F2}");
    }
}
