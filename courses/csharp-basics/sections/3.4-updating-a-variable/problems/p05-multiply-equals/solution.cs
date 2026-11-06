using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the value:");
        int value = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the factor:");
        int factor = int.Parse(Console.ReadLine());
        value *= factor;
        Console.WriteLine(value);
    }
}
