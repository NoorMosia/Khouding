using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a limit:");
        int n = int.Parse(Console.ReadLine());
        // BUG: this prints every number, not just evens. The counter should step by 2. Fix the update.
        for (int i = 2; i <= n; i++)
        {
            Console.WriteLine(i);
        }
    }
}
