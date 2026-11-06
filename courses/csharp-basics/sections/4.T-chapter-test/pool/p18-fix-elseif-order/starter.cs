using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a score:");
        int score = int.Parse(Console.ReadLine());
        // BUG: loosest band is first, so a 95 matches >= 70 and prints C.
        // Reorder so the tightest condition is tested first.
        if (score >= 70)
        {
            Console.WriteLine("C");
        }
        else if (score >= 80)
        {
            Console.WriteLine("B");
        }
        else if (score >= 90)
        {
            Console.WriteLine("A");
        }
        else
        {
            Console.WriteLine("fail");
        }
    }
}
