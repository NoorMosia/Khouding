using System;

class Program
{
    static int Add(int a, int b)
    {
        return a + b;
    }

    // TODO: add a three-parameter overload Add(int a, int b, int c) returning a + b + c,
    // so the Add(a, b, c) call in Main compiles.

    static void Main()
    {
        Console.WriteLine("Enter three numbers:");
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        int c = int.Parse(Console.ReadLine());
        Console.WriteLine(Add(a, b));
        Console.WriteLine(Add(a, b, c));
    }
}
