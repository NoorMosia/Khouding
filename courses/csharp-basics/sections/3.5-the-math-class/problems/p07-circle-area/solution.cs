using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the radius:");
        double radius = double.Parse(Console.ReadLine());
        Console.WriteLine($"{Math.PI * Math.Pow(radius, 2):F2}");
    }
}
