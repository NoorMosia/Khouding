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
        Console.WriteLine("Enter mode and three numbers:");
        int mode = int.Parse(Console.ReadLine());
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        int c = int.Parse(Console.ReadLine());
        if (mode == 2)
        {
            Console.WriteLine(Add(a, b));
        }
        else
        {
            Console.WriteLine(Add(a, b, c));
        }
    }
}
