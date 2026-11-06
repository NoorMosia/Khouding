using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a:");
        int a = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter b:");
        int b = int.Parse(Console.ReadLine());
        // BUG: making the RESULT a double does not help. a / b is computed first with
        // both int (so it truncates), and only THEN stored into the double. The
        // conversion came too late. Convert BEFORE the division: (double)a / b.
        double result = a / b;
        Console.WriteLine(result);
    }
}
