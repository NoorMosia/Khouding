using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter weight and zone:");
        int weight = int.Parse(Console.ReadLine());
        int zone = int.Parse(Console.ReadLine());
        if (weight <= 5)
        {
            if (zone == 1)
            {
                Console.WriteLine("light local");
            }
            else
            {
                Console.WriteLine("light far");
            }
        }
        else
        {
            if (zone == 1)
            {
                Console.WriteLine("heavy local");
            }
            else
            {
                Console.WriteLine("heavy far");
            }
        }
    }
}
