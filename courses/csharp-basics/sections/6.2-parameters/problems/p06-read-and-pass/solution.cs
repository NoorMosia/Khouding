using System;

class Program
{
    static void Describe(string name, int age)
    {
        Console.WriteLine($"{name} is {age}");
    }

    static void Main()
    {
        Console.WriteLine("Enter name and age:");
        string name = Console.ReadLine();
        int age = int.Parse(Console.ReadLine());
        Describe(name, age);
    }
}
