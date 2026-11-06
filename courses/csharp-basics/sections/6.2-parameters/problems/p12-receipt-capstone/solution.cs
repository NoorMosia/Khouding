using System;

class Program
{
    static void PrintLine(string item, int quantity, int price)
    {
        Console.WriteLine($"{item} x{quantity} = {quantity * price}");
    }

    static void Main()
    {
        Console.WriteLine("Enter item, quantity, price:");
        string item = Console.ReadLine();
        int quantity = int.Parse(Console.ReadLine());
        int price = int.Parse(Console.ReadLine());
        PrintLine(item, quantity, price);
    }
}
