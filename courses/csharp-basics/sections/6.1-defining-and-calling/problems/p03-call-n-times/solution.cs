using System;

class Program
{
    static void Tick()
    {
        Console.WriteLine("tick");
    }

    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int n = int.Parse(Console.ReadLine());
        for (int i = 0; i < n; i++)
        {
            Tick();
        }
    }
}
