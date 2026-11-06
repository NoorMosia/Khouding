using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the count:");
        int count = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the unit price:");
        double unitPrice = double.Parse(Console.ReadLine());
        double total = count * unitPrice;
        Console.WriteLine($"Total: {total:F2}");
    }
}
