using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the starting score:");
        int score = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the bonus to add:");
        int bonus = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the penalty to subtract:");
        int penalty = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the multiplier:");
        int multiplier = int.Parse(Console.ReadLine());
        score += bonus;
        score -= penalty;
        score *= multiplier;
        Console.WriteLine(score);
    }
}
