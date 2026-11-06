using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the value:");
        int value = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the divisor:");
        int divisor = int.Parse(Console.ReadLine());
        value %= divisor;
        Console.WriteLine(value);
    }
}
