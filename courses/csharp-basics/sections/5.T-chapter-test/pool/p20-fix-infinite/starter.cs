using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int n = int.Parse(Console.ReadLine());
        int i = 1;
        // BUG: the counter i is never increased, so this loops forever.
        // Add the update (i++) so the loop makes progress and stops.
        while (i <= n)
        {
            Console.WriteLine(i);
        }
    }
}
