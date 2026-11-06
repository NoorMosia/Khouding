using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the first number:");
        int a = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the second number:");
        int b = int.Parse(Console.ReadLine());
        int total = a + b;
        Console.WriteLine($"Total: {total}");
    }
}
