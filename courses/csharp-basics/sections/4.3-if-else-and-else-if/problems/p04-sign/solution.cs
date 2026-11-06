using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        if (n > 0)
        {
            Console.WriteLine("positive");
        }
        else if (n < 0)
        {
            Console.WriteLine("negative");
        }
        else
        {
            Console.WriteLine("zero");
        }
    }
}
