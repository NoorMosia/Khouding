using System;

class Program
{
    static void PrintPlusTen()
    {
        Console.WriteLine(score + 10);
        // BUG: 'score' is a variable in Main, not here, so this does not compile.
        // Give this method an int parameter and use it instead; pass score in from Main.
    }

    static void Main()
    {
        Console.WriteLine("Enter a score:");
        int score = int.Parse(Console.ReadLine());
        PrintPlusTen();
    }
}
