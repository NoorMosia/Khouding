using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the price:");
        double price = double.Parse(Console.ReadLine());
        // BUG: the price is printed as a raw double, so 7.5 shows as 7.5 (not 7.50)
        // and 10 shows as 10 (not 10.00). Add :F2 so money shows two decimals.
        Console.WriteLine($"Price: {price}");
    }
}
