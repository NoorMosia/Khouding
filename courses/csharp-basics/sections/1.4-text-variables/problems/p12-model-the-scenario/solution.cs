using System;

class Program
{
    static void Main()
    {
        const string Heading = "Profile";
        string username = Console.ReadLine();
        char tier = char.Parse(Console.ReadLine());

        Console.WriteLine(Heading);
        Console.WriteLine(username);
        Console.WriteLine(tier);
    }
}
