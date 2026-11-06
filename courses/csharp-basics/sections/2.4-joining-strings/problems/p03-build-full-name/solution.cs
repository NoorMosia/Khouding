using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter your first name:");
        string first = Console.ReadLine();
        Console.WriteLine("Enter your last name:");
        string last = Console.ReadLine();
        string fullName = first + " " + last;
        Console.WriteLine(fullName);
    }
}
