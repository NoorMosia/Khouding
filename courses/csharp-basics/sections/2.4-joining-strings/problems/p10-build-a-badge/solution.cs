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
        string badge = name + " from " + city + ", age " + age;
        Console.WriteLine(badge);
    }
}
