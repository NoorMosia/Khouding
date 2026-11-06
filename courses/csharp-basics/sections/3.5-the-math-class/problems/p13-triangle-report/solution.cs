using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the first leg:");
        int a = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the second leg:");
        int b = int.Parse(Console.ReadLine());
        double hypotenuse = Math.Sqrt(Math.Pow(a, 2) + Math.Pow(b, 2));
        double area = (double)(a * b) / 2;
        Console.WriteLine($"Hypotenuse: {hypotenuse:F2}");
        Console.WriteLine($"Area: {area:F2}");
    }
}
