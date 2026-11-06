using System;

class Program
{
    static int Larger(int a, int b)
    {
        if (a >= b)
        {
            return a;
        }
        return b;
    }

    static void Main()
    {
        Console.WriteLine("Enter two numbers:");
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        Console.WriteLine(Larger(a, b));
    }
}
