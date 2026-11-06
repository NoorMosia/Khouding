using System;

class Program
{
    static void Show(int n)
    {
        Console.WriteLine($"int {n}");
    }

    static void Show(bool b)
    {
        Console.WriteLine($"bool {b}");
    }

    static void Main()
    {
        Console.WriteLine("Enter a number and a flag (0 or 1):");
        int n = int.Parse(Console.ReadLine());
        int flag = int.Parse(Console.ReadLine());
        Show(n);
        Show(flag == 1);
    }
}
