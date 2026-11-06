using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the base fee:");
        int baseFee = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the rate:");
        int rate = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the units:");
        int units = int.Parse(Console.ReadLine());
        Console.WriteLine(baseFee + rate * units);
    }
}
