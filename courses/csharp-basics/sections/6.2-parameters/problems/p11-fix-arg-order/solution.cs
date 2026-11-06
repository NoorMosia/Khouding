using System;

class Program
{
    static void PrintDiff(int first, int second)
    {
        Console.WriteLine(first - second);
    }

    static void Main()
    {
        Console.WriteLine("Enter two numbers:");
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        PrintDiff(a, b);
    }
}
