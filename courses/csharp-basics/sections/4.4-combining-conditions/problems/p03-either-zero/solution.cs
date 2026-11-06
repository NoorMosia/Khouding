using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter two numbers:");
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        bool eitherZero = a == 0 || b == 0;
        Console.WriteLine(eitherZero);
    }
}
