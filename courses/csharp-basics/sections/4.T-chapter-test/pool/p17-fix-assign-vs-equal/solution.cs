using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        if (n == 0)
        {
            Console.WriteLine("zero");
        }
        else
        {
            Console.WriteLine("nonzero");
        }
    }
}
