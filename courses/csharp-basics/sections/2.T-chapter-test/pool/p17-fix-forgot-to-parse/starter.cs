using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a whole number:");
        // BUG: Console.ReadLine() gives text, and you cannot do math on text.
        // This does not compile (the * is applied to a string). Parse the line to
        // a whole number first, then print that number times 3.
        Console.WriteLine(Console.ReadLine() * 3);
    }
}
