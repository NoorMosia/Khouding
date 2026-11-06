using System;

class Program
{
    // This line is in the wrong place. It sits in the class body, outside Main,
    // so it never runs. Move it inside Main so the program prints:
    // Now it runs.
    Console.WriteLine("Now it runs.");

    static void Main()
    {
    }
}
