using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the score:");
        int score = int.Parse(Console.ReadLine());
        if (score >= 90)
        {
            Console.WriteLine("high");
        }
        else if (score >= 50)
        {
            Console.WriteLine("mid");
        }
        else
        {
            Console.WriteLine("low");
        }
    }
}
