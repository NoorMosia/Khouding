using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int n = int.Parse(Console.ReadLine());
        int max = int.Parse(Console.ReadLine());
        for (int i = 1; i < n; i++)
        {
            int value = int.Parse(Console.ReadLine());
            if (value > max)
            {
                max = value;
            }
        }
        Console.WriteLine(max);
    }
}
