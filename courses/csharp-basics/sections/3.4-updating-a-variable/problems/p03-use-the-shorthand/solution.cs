using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter x:");
        int x = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter y:");
        int y = int.Parse(Console.ReadLine());
        x += y;
        Console.WriteLine(x);
    }
}
