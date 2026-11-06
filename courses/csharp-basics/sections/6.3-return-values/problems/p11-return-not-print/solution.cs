using System;

class Program
{
    static int Triple(int n)
    {
        return n * 3;
    }

    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        Console.WriteLine(Triple(n));
        Console.WriteLine(Triple(n) + Triple(n));
    }
}
