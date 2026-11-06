using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the score:");
        int score = int.Parse(Console.ReadLine());
        // BUG: this chain tests the loosest condition first. A score of 95 is already
        // >= 50, so it prints "mid" and the >= 90 test is never reached. There is no
        // compiler error, the label is just wrong. Reorder so the tightest condition
        // (>= 90) comes first, then >= 50, then the final else.
        if (score >= 50)
        {
            Console.WriteLine("mid");
        }
        else if (score >= 90)
        {
            Console.WriteLine("high");
        }
        else
        {
            Console.WriteLine("low");
        }
    }
}
