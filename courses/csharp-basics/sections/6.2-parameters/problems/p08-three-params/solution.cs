using System;

class Program
{
    static void Report(string label, int a, int b)
    {
        Console.WriteLine($"{label}: {a} + {b} = {a + b}");
    }

    static void Main()
    {
        Console.WriteLine("Enter label and two numbers:");
        string label = Console.ReadLine();
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        Report(label, a, b);
    }
}
