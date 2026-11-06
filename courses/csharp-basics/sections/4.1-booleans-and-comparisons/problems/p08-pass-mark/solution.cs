using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the score:");
        int score = int.Parse(Console.ReadLine());
        Console.WriteLine(score >= 50);
    }
}
