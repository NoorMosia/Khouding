using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the adults:");
        int adults = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the children:");
        int children = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the ticket price:");
        int price = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the discount:");
        int discount = int.Parse(Console.ReadLine());
        Console.WriteLine((adults + children) * price - discount);
    }
}
