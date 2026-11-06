using System;

class Program
{
    static int Add(int a, int b)
    {
        return a + b;
    }

    static int Add(int a, int b, int c)
    {
        return a + b + c;
    }

    static void Main()
    {
        Console.WriteLine("Enter two numbers:");
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        // BUG: Add(a) supplies one argument; no overload takes 1. Call it with two: Add(a, b).
        Console.WriteLine(Add(a));
    }
}
