using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the name:");
        string name = Console.ReadLine();
        Console.WriteLine("Enter the email:");
        string email = Console.ReadLine();
        Console.WriteLine($"{name} can be reached at {email}");
    }
}
