using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the city:");
        string city = Console.ReadLine();
        Console.WriteLine("Enter the country:");
        string country = Console.ReadLine();
        Console.WriteLine($"{city}, {country}");
    }
}
