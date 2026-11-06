using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter your name:");
        string name = Console.ReadLine();
        // BUG: this string has no $ in front, so it is NOT interpolated.
        // It compiles and runs, but prints the braces literally: Hello, {name}
        // Add the $ so the hole is filled with the actual name.
        Console.WriteLine("Hello, {name}");
    }
}
