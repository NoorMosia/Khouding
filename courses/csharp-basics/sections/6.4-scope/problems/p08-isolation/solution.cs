using System;

class Program
{
    static int Combine(int a, int b)
    {
        return a + b;
    }

    static void Main()
    {
        Console.WriteLine("Enter three numbers:");
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        int c = int.Parse(Console.ReadLine());
        Console.WriteLine(Combine(a, b));
        Console.WriteLine(c);
    }
}
