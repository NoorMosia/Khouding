using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        // BUG: there is a stray semicolon right after the condition. That ; is the
        // (empty) body of the if, so the block below is NOT guarded and "big" prints
        // every time, even when n is small. The compiler warns: CS0642 "Possible
        // mistaken empty statement". Remove the stray semicolon.
        if (n > 100);
        {
            Console.WriteLine("big");
        }
    }
}
