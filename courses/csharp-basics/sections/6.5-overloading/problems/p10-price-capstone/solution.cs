using System;

class Program
{
    static int Price(int quantity)
    {
        return quantity * 10;
    }

    static int Price(int quantity, int unit)
    {
        return quantity * unit;
    }

    static void Main()
    {
        Console.WriteLine("Enter quantity and unit:");
        int quantity = int.Parse(Console.ReadLine());
        int unit = int.Parse(Console.ReadLine());
        Console.WriteLine(Price(quantity));
        Console.WriteLine(Price(quantity, unit));
    }
}
