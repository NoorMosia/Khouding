using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter weight and zone:");
        int weight = int.Parse(Console.ReadLine());
        int zone = int.Parse(Console.ReadLine());
        int cost;
        if (weight <= 5)
        {
            cost = 5;
        }
        else
        {
            cost = 10;
        }
        if (zone != 1)
        {
            cost = cost + 3;
        }
        Console.WriteLine(cost);
    }
}
