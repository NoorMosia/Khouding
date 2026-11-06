using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the attempts:");
        int attempts = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the limit:");
        int limit = int.Parse(Console.ReadLine());
        Console.WriteLine("Attempts recorded");
        if (attempts > limit)
        {
            Console.WriteLine("account locked");
        }
    }
}
