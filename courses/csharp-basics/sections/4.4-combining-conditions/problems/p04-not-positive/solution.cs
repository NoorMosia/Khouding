using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        bool notPositive = !(n > 0);
        Console.WriteLine(notPositive);
    }
}
