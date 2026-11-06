using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the start:");
        int start = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the amount to subtract:");
        int amount = int.Parse(Console.ReadLine());
        start -= amount;
        Console.WriteLine(start);
    }
}
