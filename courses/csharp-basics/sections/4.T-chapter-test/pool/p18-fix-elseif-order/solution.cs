using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a score:");
        int score = int.Parse(Console.ReadLine());
        if (score >= 90)
        {
            Console.WriteLine("A");
        }
        else if (score >= 80)
        {
            Console.WriteLine("B");
        }
        else if (score >= 70)
        {
            Console.WriteLine("C");
        }
        else
        {
            Console.WriteLine("fail");
        }
    }
}
