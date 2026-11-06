using System;

class Program
{
    static void PrintSquare(int n)
    {
        Console.WriteLine(n * n);
    }

    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        PrintSquare(n);
    }
}
