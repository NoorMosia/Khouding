using System;

class Program
{
    static void AddHundred(int p)
    {
        p = p + 100;
        Console.WriteLine(p);
    }

    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int original = int.Parse(Console.ReadLine());
        AddHundred(original);
        Console.WriteLine(original);
    }
}
