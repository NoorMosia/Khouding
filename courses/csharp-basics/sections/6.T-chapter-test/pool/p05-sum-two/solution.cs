using System;

class Program
{
    static void PrintSum(int a, int b)
    {
        Console.WriteLine(a + b);
    }

    static void Main()
    {
        Console.WriteLine("Enter two numbers:");
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        PrintSum(a, b);
    }
}
