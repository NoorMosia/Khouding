using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a temperature:");
        int t = int.Parse(Console.ReadLine());
        if (t < 10)
        {
            Console.WriteLine("cold");
        }
        else if (t < 25)
        {
            Console.WriteLine("warm");
        }
        else
        {
            Console.WriteLine("hot");
        }
    }
}
