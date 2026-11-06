using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int x = int.Parse(Console.ReadLine());
        bool inRange = x >= 1 && x <= 100;
        Console.WriteLine(inRange);
    }
}
