using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the spend:");
        int spend = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the budget:");
        int budget = int.Parse(Console.ReadLine());
        if (spend > budget)
        {
            Console.WriteLine(spend - budget);
        }
    }
}
