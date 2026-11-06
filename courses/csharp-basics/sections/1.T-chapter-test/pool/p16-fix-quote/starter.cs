using System;

class Program
{
    static void Main()
    {
        // BUG: a char uses single quotes, but this one has double quotes, so it
        // does not compile. Fix the quotes so it prints the values below.
        string name = "Omar";
        char initial = "O";
        Console.WriteLine(name);
        Console.WriteLine(initial);
    }
}
