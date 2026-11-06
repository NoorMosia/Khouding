using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int x = int.Parse(Console.ReadLine());
        // BUG: this uses || so it is true for every number. It should be true
        // only inside the range 10 to 20 inclusive. Fix the operator.
        bool inRange = x >= 10 || x <= 20;
        Console.WriteLine(inRange);
    }
}
