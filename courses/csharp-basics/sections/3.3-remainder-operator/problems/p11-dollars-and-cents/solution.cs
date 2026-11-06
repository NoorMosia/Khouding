using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the total cents:");
        int cents = int.Parse(Console.ReadLine());
        Console.WriteLine(cents / 100);
        Console.WriteLine(cents % 100);
    }
}
