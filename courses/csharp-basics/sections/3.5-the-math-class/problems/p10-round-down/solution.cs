using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a value:");
        double value = double.Parse(Console.ReadLine());
        Console.WriteLine(Math.Floor(value));
    }
}
