using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the count:");
        int count = int.Parse(Console.ReadLine());
        if (count < 10)
        {
            Console.WriteLine("small");
        }
        else if (count < 100)
        {
            Console.WriteLine("medium");
        }
        else if (count < 1000)
        {
            Console.WriteLine("large");
        }
        else
        {
            Console.WriteLine("huge");
        }
    }
}
