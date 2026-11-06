using System;

class Program
{
    static void Main()
    {
        // BUG: a char holds one character and uses SINGLE quotes.
        // Double quotes make a string, so this does not compile. Fix the quotes.
        char grade = "A";
        Console.WriteLine(grade);
    }
}
