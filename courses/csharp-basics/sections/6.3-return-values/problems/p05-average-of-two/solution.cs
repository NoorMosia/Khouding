using System;

class Program
{
    static double AverageOfTwo(int a, int b)
    {
        return (a + b) / 2.0;
    }

    static void Main()
    {
        Console.WriteLine("Enter two numbers:");
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        Console.WriteLine(AverageOfTwo(a, b));
    }
}
