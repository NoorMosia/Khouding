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

    static int Max3(int a, int b, int c)
    {
        return Larger(Larger(a, b), c);
    }

    static void Main()
    {
        Console.WriteLine("Enter three numbers:");
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        int c = int.Parse(Console.ReadLine());
        Console.WriteLine(Max3(a, b, c));
    }
}
