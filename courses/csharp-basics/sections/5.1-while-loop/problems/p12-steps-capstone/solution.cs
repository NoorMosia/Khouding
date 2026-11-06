using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter daily steps, -1 to stop:");
        int total = 0;
        int goalDays = 0;
        int steps = int.Parse(Console.ReadLine());
        while (steps != -1)
        {
            total = total + steps;
            if (steps >= 10000)
            {
                goalDays++;
            }
            steps = int.Parse(Console.ReadLine());
        }
        Console.WriteLine(total);
        Console.WriteLine(goalDays);
    }
}
