using System;

class Program
{
    static bool IsEven(int n)
    {
        return n % 2 == 0;
    }

    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        Console.WriteLine(IsEven(n));
    }
}
