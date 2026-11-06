using System;

class Program
{
    static void Describe(int n)
    {
        Console.WriteLine($"number: {n}");
    }

    static void Describe(string s)
    {
        Console.WriteLine($"text: {s}");
    }

    static void Main()
    {
        Console.WriteLine("Enter a number and a word:");
        int n = int.Parse(Console.ReadLine());
        string s = Console.ReadLine();
        Describe(n);
        Describe(s);
    }
}
