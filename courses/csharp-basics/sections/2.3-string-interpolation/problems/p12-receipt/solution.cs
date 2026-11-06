using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the item:");
        string item = Console.ReadLine();
        Console.WriteLine("Enter the quantity:");
        int quantity = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the unit price:");
        int unitPrice = int.Parse(Console.ReadLine());
        Console.WriteLine($"Item: {item}");
        Console.WriteLine($"Quantity: {quantity}");
        Console.WriteLine($"Total: {quantity * unitPrice}");
    }
}
