using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter your name:");
        string name = Console.ReadLine();
        Console.WriteLine("Enter your city:");
        string city = Console.ReadLine();
        Console.WriteLine("Enter your age:");
        int age = int.Parse(Console.ReadLine());
        Console.WriteLine($"Name: {name}");
        Console.WriteLine($"City: {city}");
        Console.WriteLine($"Age: {age}");
    }
}
