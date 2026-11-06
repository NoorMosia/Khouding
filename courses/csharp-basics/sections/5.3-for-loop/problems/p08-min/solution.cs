using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int n = int.Parse(Console.ReadLine());
        int min = int.Parse(Console.ReadLine());
        for (int i = 1; i < n; i++)
        {
            int value = int.Parse(Console.ReadLine());
            if (value < min)
            {
                min = value;
            }
        }
        Console.WriteLine(min);
    }
}
