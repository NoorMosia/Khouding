using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a and b (0 or 1):");
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        if (a == 1)
        {
            if (b == 1)
            {
                Console.WriteLine("both");
            }
        }
        else
        {
            Console.WriteLine("not a");
        }
    }
}
