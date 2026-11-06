using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        if (n >= 1 && n <= 100)
        {
            if (n <= 50)
            {
                Console.WriteLine("low half");
            }
            else
            {
                Console.WriteLine("high half");
            }
        }
        else
        {
            Console.WriteLine("out");
        }
    }
}
