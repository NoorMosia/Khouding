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
                if (n % 4 == 0)
                {
                    Console.WriteLine("even by four");
                }
                else
                {
                    Console.WriteLine("even not by four");
                }
            }
            else
            {
                Console.WriteLine("odd");
            }
        }
        else
        {
            Console.WriteLine("not positive");
        }
    }
}
