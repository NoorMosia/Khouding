using System;

class Program
{
    static string Sign(int n)
    {
        if (n >= 0)
        {
            return "non-negative";
        }
        return "negative";
    }

    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        Console.WriteLine(Sign(n));
    }
}
