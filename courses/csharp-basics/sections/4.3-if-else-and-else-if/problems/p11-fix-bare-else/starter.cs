using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the temperature:");
        int t = int.Parse(Console.ReadLine());
        // BUG: the middle band is a bare `else`, so it catches EVERY value that is not
        // cold, hot ones included. A reading of 30 prints "warm" instead of "hot". There
        // is no compiler error. Give the middle band its own condition (else if (t < 25))
        // and add a final else for hot.
        if (t < 10)
        {
            Console.WriteLine("cold");
        }
        else
        {
            Console.WriteLine("warm");
        }
    }
}
