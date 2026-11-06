using System;

class Program
{
    static void Repeat(string text, int times)
    {
        for (int i = 0; i < times; i++)
        {
            Console.WriteLine(text);
        }
    }

    static void Main()
    {
        Console.WriteLine("Enter text and count:");
        string text = Console.ReadLine();
        int times = int.Parse(Console.ReadLine());
        Repeat(text, times);
    }
}
