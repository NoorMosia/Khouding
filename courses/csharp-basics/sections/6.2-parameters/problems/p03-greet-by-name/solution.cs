using System;

class Program
{
    static void Greet(string name)
    {
        Console.WriteLine($"Hello, {name}!");
    }

    static void Main()
    {
        Console.WriteLine("Enter a name:");
        string name = Console.ReadLine();
        Greet(name);
    }
}
