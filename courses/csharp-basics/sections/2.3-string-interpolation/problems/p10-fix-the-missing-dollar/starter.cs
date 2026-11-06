using System;

class Program
{
    static void Main()
    {
        // BUG: this string has no $ in front, so it is NOT interpolated.
        // It compiles and runs with no error, but it prints the braces literally:
        //   Hello, {name}
        // Add the missing $ so the hole is filled with the actual name.
        Console.WriteLine("Enter your name:");
        string name = Console.ReadLine();
        Console.WriteLine("Hello, {name}");
    }
}
