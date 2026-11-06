using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the total seconds:");
        int seconds = int.Parse(Console.ReadLine());
        Console.WriteLine(seconds % 60);
    }
}
