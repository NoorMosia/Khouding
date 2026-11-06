using System;

class Program
{
    static int Max(int a, int b)
    {
        if (a >= b)
        {
            return a;
        }
        return b;
    }

    static int Max(int a, int b, int c)
    {
        return Max(Max(a, b), c);
    }

    static void Main()
    {
        Console.WriteLine("Enter three numbers:");
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        int c = int.Parse(Console.ReadLine());
        Console.WriteLine(Max(a, b));
        Console.WriteLine(Max(a, b, c));
    }
}
