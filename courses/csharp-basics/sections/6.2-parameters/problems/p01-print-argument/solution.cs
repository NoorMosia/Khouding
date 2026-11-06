using System;

class Program
{
    static void Show(int value)
    {
        Console.WriteLine(value);
    }

    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        Show(n);
    }
}
