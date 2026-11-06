using System;

class Program
{
    static void Main()
    {
        // BUG: Console.ReadLine() hands back text, and you cannot do math on text.
        // This line does not compile: the * is applied to a string.
        // Fix it by parsing the line to a whole number first, then multiply by 2.
        Console.WriteLine("Enter a whole number:");
        Console.WriteLine(Console.ReadLine() * 2);
    }
}
