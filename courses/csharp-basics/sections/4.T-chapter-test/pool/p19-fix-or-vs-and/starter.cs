using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int x = int.Parse(Console.ReadLine());
        // BUG: || makes this true for every number. It should be true only inside 10..20.
        bool inRange = x >= 10 || x <= 20;
        Console.WriteLine(inRange);
    }
}
