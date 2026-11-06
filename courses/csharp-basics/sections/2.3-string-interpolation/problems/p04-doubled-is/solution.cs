using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        Console.WriteLine($"{n} doubled is {n * 2}");
    }
}
