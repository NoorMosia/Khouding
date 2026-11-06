using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the total:");
        int total = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the number of people:");
        int people = int.Parse(Console.ReadLine());
        Console.WriteLine((double)total / people);
    }
}
