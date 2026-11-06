using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the name:");
        string name = Console.ReadLine();
        Console.WriteLine("Enter the role:");
        string role = Console.ReadLine();
        Console.WriteLine("Enter the city:");
        string city = Console.ReadLine();
        Console.WriteLine($"Name: {name}");
        Console.WriteLine($"Role: {role}");
        Console.WriteLine($"City: {city}");
    }
}
