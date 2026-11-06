using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter age and license (0 or 1):");
        int age = int.Parse(Console.ReadLine());
        int license = int.Parse(Console.ReadLine());
        if (age >= 16 && license == 1)
        {
            Console.WriteLine("may drive");
        }
        else
        {
            Console.WriteLine("no");
        }
    }
}
