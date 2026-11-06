using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter score and bonus (0 or 1):");
        int score = int.Parse(Console.ReadLine());
        int bonus = int.Parse(Console.ReadLine());
        if (score >= 90 || bonus == 1)
        {
            Console.WriteLine("pass");
        }
        else
        {
            Console.WriteLine("fail");
        }
    }
}
