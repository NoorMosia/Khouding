using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the total:");
        int total = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the amount to add:");
        int amount = int.Parse(Console.ReadLine());
        total += amount;
        Console.WriteLine(total);
    }
}
