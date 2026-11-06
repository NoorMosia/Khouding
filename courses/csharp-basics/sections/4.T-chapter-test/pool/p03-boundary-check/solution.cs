using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter your age:");
        int age = int.Parse(Console.ReadLine());
        Console.WriteLine(age >= 18);
    }
}
