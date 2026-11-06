using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a:");
        int a = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter b:");
        int b = int.Parse(Console.ReadLine());
        if (a == b)
        {
            Console.WriteLine("equal");
        }
        else
        {
            Console.WriteLine("different");
        }
    }
}
