using System;

class Program
{
    static string Sign(int n)
    {
        if (n >= 0)
        {
            return "non-negative";
        }
        // BUG: nothing is returned when n is negative, so not all paths return a value.
        // Add a return for the negative case.
    }

    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        Console.WriteLine(Sign(n));
    }
}
