using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the starting value:");
        int value = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the factor:");
        int factor = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the amount to add:");
        int amount = int.Parse(Console.ReadLine());
        value *= factor;
        value += amount;
        Console.WriteLine(value);
    }
}
