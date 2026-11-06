using System;

class Program
{
    static void Main()
    {
        // BUG: a name cannot start with a digit, so this does not compile.
        // Rename the variable to something legal (keep its meaning), so it prints 10.
        int 2count = 10;
        Console.WriteLine(2count);
    }
}
