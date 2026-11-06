using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a price:");
        double price = double.Parse(Console.ReadLine());
        Console.WriteLine($"{price:F2}");
    }
}
