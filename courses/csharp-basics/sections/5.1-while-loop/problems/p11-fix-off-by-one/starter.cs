using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int n = int.Parse(Console.ReadLine());
        int i = 1;
        // BUG: this stops before printing n. It should include n. Fix the condition.
        while (i < n)
        {
            Console.WriteLine(i);
            i++;
        }
    }
}
