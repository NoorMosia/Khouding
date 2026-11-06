using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the number of passengers:");
        int passengers = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the number of buses:");
        int buses = int.Parse(Console.ReadLine());
        Console.WriteLine(passengers / buses);
        Console.WriteLine((double)passengers / buses);
    }
}
