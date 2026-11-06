using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int x = int.Parse(Console.ReadLine());
        bool outOfRange = x < 10 || x > 20;
        Console.WriteLine(outOfRange);
    }
}
