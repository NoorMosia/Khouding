using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int n = int.Parse(Console.ReadLine());
        int total = 0;
        for (int i = 0; i < n; i++)
        {
            int value = int.Parse(Console.ReadLine());
            if (value <= 0)
            {
                // BUG: this stops the whole loop at the first non-positive value.
                // It should SKIP just this value and keep going. Fix the control statement.
                break;
            }
            total = total + value;
        }
        Console.WriteLine(total);
    }
}
