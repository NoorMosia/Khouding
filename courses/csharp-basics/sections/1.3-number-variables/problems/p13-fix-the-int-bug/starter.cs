using System;

class Program
{
    static void Main()
    {
        // BUG: a price can be fractional, but it is being stored in an int,
        // which does not compile. Fix the type so the price is read and printed
        // correctly.
        int price = double.Parse(Console.ReadLine());
        Console.WriteLine(price);
    }
}
