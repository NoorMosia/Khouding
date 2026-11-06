using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter age and membership (0 or 1):");
        int age = int.Parse(Console.ReadLine());
        int member = int.Parse(Console.ReadLine());
        if (age >= 18 && member == 1)
        {
            Console.WriteLine("in");
        }
        else
        {
            Console.WriteLine("out");
        }
    }
}
