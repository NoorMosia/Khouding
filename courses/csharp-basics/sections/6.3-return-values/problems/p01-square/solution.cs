using System;

class Program
{
    static int Square(int n)
    {
        return n * n;
    }

    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        Console.WriteLine(Square(n));
    }
}
