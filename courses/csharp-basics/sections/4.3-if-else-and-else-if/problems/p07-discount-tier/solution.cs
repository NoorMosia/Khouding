using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the spend:");
        int spend = int.Parse(Console.ReadLine());
        if (spend >= 100)
        {
            Console.WriteLine("gold");
        }
        else if (spend >= 50)
        {
            Console.WriteLine("silver");
        }
        else
        {
            Console.WriteLine("none");
        }
    }
}
