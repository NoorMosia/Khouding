using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        // BUG: single = is assignment, not comparison. This does not compile (CS0029).
        if (n = 0)
        {
            Console.WriteLine("zero");
        }
        else
        {
            Console.WriteLine("nonzero");
        }
    }
}
