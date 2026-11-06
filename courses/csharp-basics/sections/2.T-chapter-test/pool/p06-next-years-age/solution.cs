using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter your age:");
        int age = int.Parse(Console.ReadLine());
        Console.WriteLine($"Next year you will be {age + 1}");
    }
}
