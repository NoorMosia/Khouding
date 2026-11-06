using System;

class Program
{
    static int Doubled(int n)
    {
        int result = n * 2;
        return result;
    }

    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        Console.WriteLine(Doubled(n));
    }
}
