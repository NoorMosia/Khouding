using System;

class Program
{
    static void Main()
    {
        // BUG: a price can be fractional but is stored in an int, so this does
        // not compile. Fix the type so it prints the values below.
        string item = "Tea";
        int price = 1.75;
        Console.WriteLine(item);
        Console.WriteLine(price);
    }
}
