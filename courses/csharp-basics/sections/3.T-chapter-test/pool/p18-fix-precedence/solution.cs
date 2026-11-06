using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the base price:");
        int basePrice = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the extra per person:");
        int extra = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the number of people:");
        int people = int.Parse(Console.ReadLine());
        Console.WriteLine((basePrice + extra) * people);
    }
}
