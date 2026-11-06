using System;

class Program
{
    static void Main()
    {
        // BUG: a variable name starts with a digit, which is illegal, so this
        // does not compile. Rename it legally (keep its meaning) so it prints 65.
        int 1stScore = 40;
        int secondScore = 25;
        Console.WriteLine(1stScore + secondScore);
    }
}
