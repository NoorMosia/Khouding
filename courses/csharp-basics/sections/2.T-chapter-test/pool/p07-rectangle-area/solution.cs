using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the width:");
        int width = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the height:");
        int height = int.Parse(Console.ReadLine());
        Console.WriteLine($"Area: {width * height}");
    }
}
