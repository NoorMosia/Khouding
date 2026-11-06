using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the price:");
        // BUG: a price can have a decimal part, but this reads it as a whole number.
        // int.Parse cannot read "4.99" and the program fails at run time.
        // Change the type to double (and double.Parse) so decimals are read, then print the price.
        int price = int.Parse(Console.ReadLine());
        Console.WriteLine(price);
    }
}
