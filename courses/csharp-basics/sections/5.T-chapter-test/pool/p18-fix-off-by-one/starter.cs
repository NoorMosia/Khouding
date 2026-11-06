using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int n = int.Parse(Console.ReadLine());
        // BUG: stops before printing n. It should include n. Fix the condition.
        for (int i = 1; i < n; i++)
        {
            Console.WriteLine(i);
        }
    }
}
