using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter start and limit:");
        int value = int.Parse(Console.ReadLine());
        int limit = int.Parse(Console.ReadLine());
        do
        {
            Console.WriteLine(value);
            value = value + 3;
        }
        while (value < limit);
    }
}
