using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        var list = new List<int>();
        for (int i = 0; i < n; i++) list.Add(int.Parse(Console.ReadLine()));
        // Bug: max seeded at 0 is wrong when every element is negative.
        int max = 0;
        for (int i = 0; i < list.Count; i++) { if (list[i] > max) max = list[i]; }
        Console.WriteLine(max);
    }
}
