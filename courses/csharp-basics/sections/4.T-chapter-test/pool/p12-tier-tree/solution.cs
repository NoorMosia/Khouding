using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        if (n > 0)
        {
            if (n % 2 == 0)
            {
                Console.WriteLine("positive even");
            }
            else
            {
                Console.WriteLine("positive odd");
            }
        }
        else
        {
            Console.WriteLine("not positive");
        }
    }
}
