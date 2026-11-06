using System;

class Program
{
    static int Cube(int n)
    {
        return n * n * n;
    }

    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        Console.WriteLine(Cube(n));
    }
}
