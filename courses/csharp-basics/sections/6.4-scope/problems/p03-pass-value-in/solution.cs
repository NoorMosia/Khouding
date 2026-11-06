using System;

class Program
{
    static void PrintPlusTen(int value)
    {
        Console.WriteLine(value + 10);
    }

    static void Main()
    {
        Console.WriteLine("Enter a score:");
        int score = int.Parse(Console.ReadLine());
        PrintPlusTen(score);
    }
}
