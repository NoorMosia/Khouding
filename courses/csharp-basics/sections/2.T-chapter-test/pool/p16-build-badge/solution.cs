using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the name:");
        string name = Console.ReadLine();
        Console.WriteLine("Enter the team:");
        string team = Console.ReadLine();
        Console.WriteLine("Enter the seat number:");
        int seat = int.Parse(Console.ReadLine());
        string badge = name + ", " + team + ", seat " + seat;
        Console.WriteLine(badge);
    }
}
