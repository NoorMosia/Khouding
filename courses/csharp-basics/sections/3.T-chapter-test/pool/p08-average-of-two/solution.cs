using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the first number:");
        int a = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the second number:");
        int b = int.Parse(Console.ReadLine());
        Console.WriteLine((double)(a + b) / 2);
    }
}
