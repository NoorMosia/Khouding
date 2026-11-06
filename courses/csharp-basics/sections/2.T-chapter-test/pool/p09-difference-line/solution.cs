using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the target:");
        int target = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the current:");
        int current = int.Parse(Console.ReadLine());
        Console.WriteLine($"Remaining: {target - current}");
    }
}
