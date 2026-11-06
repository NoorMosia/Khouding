using System;

class Program
{
    static void Main()
    {
        // BUG: single quotes make a char, which holds ONE character.
        // 'Sam' is three characters, so this does not compile. Fix the quotes.
        string name = 'Sam';
        Console.WriteLine(name);
    }
}
