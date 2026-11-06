using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the rate:");
        double rate = double.Parse(Console.ReadLine());
        Console.WriteLine($"Rate: {rate:F2}");
    }
}
