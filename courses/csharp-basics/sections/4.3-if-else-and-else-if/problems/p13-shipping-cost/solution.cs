using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the weight in grams:");
        int weight = int.Parse(Console.ReadLine());
        if (weight <= 500)
        {
            Console.WriteLine(3);
        }
        else if (weight <= 2000)
        {
            Console.WriteLine(6);
        }
        else if (weight <= 5000)
        {
            Console.WriteLine(10);
        }
        else
        {
            Console.WriteLine("too heavy");
        }
    }
}
