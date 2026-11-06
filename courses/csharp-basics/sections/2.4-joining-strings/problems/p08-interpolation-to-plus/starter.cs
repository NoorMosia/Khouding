using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter your name:");
        string name = Console.ReadLine();
        // This line uses interpolation. Rewrite it using + instead,
        // so it prints exactly the same thing:
        //   Hello, <name>
        Console.WriteLine($"Hello, {name}");
    }
}
