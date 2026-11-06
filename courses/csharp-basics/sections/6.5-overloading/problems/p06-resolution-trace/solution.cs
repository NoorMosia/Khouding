using System;

class Program
{
    static void Greet()
    {
        Console.WriteLine("hi");
    }

    static void Greet(string name)
    {
        Console.WriteLine($"hi, {name}");
    }

    static void Main()
    {
        Greet();
        Greet("Sam");
        Greet();
    }
}
