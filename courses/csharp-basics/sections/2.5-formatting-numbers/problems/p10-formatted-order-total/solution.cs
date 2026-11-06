using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the quantity:");
        int quantity = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the unit price:");
        double unitPrice = double.Parse(Console.ReadLine());
        Console.WriteLine("Enter the discount:");
        double discount = double.Parse(Console.ReadLine());
        double total = quantity * unitPrice - discount;
        Console.WriteLine($"Total: {total:F2}");
    }
}
