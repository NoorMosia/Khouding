using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the item price:");
        double item = double.Parse(Console.ReadLine());
        Console.WriteLine("Enter the shipping:");
        double shipping = double.Parse(Console.ReadLine());
        Console.WriteLine($"Item: {item:F2}");
        Console.WriteLine($"Shipping: {shipping:F2}");
    }
}
