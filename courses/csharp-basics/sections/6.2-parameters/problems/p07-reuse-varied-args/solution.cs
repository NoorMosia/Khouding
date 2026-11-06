using System;

class Program
{
    static void PrintDouble(int n)
    {
        Console.WriteLine(n * 2);
    }

    static void Main()
    {
        Console.WriteLine("Enter three numbers:");
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        int c = int.Parse(Console.ReadLine());
        PrintDouble(a);
        PrintDouble(b);
        PrintDouble(c);
    }
}
