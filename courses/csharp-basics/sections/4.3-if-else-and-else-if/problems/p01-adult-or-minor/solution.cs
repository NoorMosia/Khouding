using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter your age:");
        int age = int.Parse(Console.ReadLine());
        if (age >= 18)
        {
            Console.WriteLine("adult");
        }
        else
        {
            Console.WriteLine("minor");
        }
    }
}
