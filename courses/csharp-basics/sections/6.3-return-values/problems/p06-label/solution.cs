using System;

class Program
{
    static string Label(int score)
    {
        if (score >= 50)
        {
            return "pass";
        }
        return "fail";
    }

    static void Main()
    {
        Console.WriteLine("Enter a score:");
        int score = int.Parse(Console.ReadLine());
        Console.WriteLine(Label(score));
    }
}
