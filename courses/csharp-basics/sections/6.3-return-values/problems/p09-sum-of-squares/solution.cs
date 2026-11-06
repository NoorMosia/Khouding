using System;

class Program
{
    static int Square(int n)
    {
        return n * n;
    }

    static void Main()
    {
        Console.WriteLine("Enter two numbers:");
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        Console.WriteLine(Square(a) + Square(b));
    }
}
