using System;

class Program
{
    static int Product(int a, int b)
    {
        return a * b;
    }

    static void Main()
    {
        Console.WriteLine("Enter two numbers:");
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        Console.WriteLine(Product(a, b));
    }
}
