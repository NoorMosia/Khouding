using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter two numbers:");
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        if (b != 0)
        {
            Console.WriteLine(a / b);
        }
        else
        {
            Console.WriteLine("cannot divide by zero");
        }
    }
}
