using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the water level:");
        int level = int.Parse(Console.ReadLine());
        if (level < 20)
        {
            Console.WriteLine("empty");
        }
        else if (level < 60)
        {
            Console.WriteLine("low");
        }
        else if (level < 90)
        {
            Console.WriteLine("ok");
        }
        else
        {
            Console.WriteLine("full");
        }
    }
}
