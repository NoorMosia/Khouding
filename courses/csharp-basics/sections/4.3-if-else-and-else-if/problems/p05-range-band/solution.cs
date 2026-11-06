using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        if (n < 10)
        {
            Console.WriteLine("below");
        }
        else if (n <= 20)
        {
            Console.WriteLine("within");
        }
        else
        {
            Console.WriteLine("above");
        }
    }
}
