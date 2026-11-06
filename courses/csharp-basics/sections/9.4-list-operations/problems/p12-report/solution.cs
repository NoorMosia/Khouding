using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        var list = new List<int>();
        for (int i = 0; i < n; i++) list.Add(int.Parse(Console.ReadLine()));
        int sum = 0;
        int max = list[0];
        foreach (int x in list)
        {
            sum = sum + x;
            if (x > max) max = x;
        }
        double avg = (double)sum / list.Count;
        Console.WriteLine("Count: " + list.Count);
        Console.WriteLine("Sum: " + sum);
        Console.WriteLine("Average: " + avg);
        Console.WriteLine("Max: " + max);
    }
}
