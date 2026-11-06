using System;

class Program
{
    static void Main()
    {
        // BUG: total is used before it is given a value, which does not compile.
        // Read a and b, then compute total, THEN print it. Fix the order so it
        // prints a + b.
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        int total;
        Console.WriteLine(total);
        total = a + b;
    }
}
