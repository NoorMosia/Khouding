using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the city:");
        string city = Console.ReadLine();
        // This line uses +. Rewrite it using interpolation instead,
        // so it prints exactly the same thing:
        //   Welcome to <city>
        Console.WriteLine("Welcome to " + city);
    }
}
