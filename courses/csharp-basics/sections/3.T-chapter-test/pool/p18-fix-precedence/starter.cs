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
        // BUG: each person pays (base price + extra), so the total is
        // (basePrice + extra) * people. Without parentheses this computes
        // basePrice + extra * people, which is wrong. Add the parentheses.
        Console.WriteLine(basePrice + extra * people);
    }
}
