using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter your age:");
        int age = int.Parse(Console.ReadLine());
        if (age >= 18 && age < 65)
        {
            Console.WriteLine("eligible");
        }
        else
        {
            Console.WriteLine("no");
        }
    }
}
