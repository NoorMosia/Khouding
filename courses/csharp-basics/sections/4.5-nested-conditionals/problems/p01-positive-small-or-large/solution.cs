using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        if (n > 0)
        {
            if (n > 100)
            {
                Console.WriteLine("large positive");
            }
            else
            {
                Console.WriteLine("small positive");
            }
        }
        else
        {
            Console.WriteLine("not positive");
        }
    }
}
