using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the first amount:");
        int first = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the second amount:");
        int second = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the third amount:");
        int third = int.Parse(Console.ReadLine());
        int total = 0;
        total += first;
        total += second;
        total += third;
        Console.WriteLine(total);
    }
}
