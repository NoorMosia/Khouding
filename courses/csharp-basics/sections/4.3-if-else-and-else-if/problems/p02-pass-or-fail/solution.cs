using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the score:");
        int score = int.Parse(Console.ReadLine());
        if (score >= 50)
        {
            Console.WriteLine("pass");
        }
        else
        {
            Console.WriteLine("fail");
        }
    }
}
