using System;

class Program
{
    static void Main()
    {
        // BUG: "class" is a reserved keyword and cannot be a variable name.
        // Rename it to something legal (keep its meaning), so it prints 5.
        int class = 5;
        Console.WriteLine(class);
    }
}
