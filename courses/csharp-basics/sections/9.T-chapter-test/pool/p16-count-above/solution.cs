using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        var list = new List<int>();
        for (int i = 0; i < n; i++) list.Add(int.Parse(Console.ReadLine()));
        int threshold = int.Parse(Console.ReadLine());
        int count = 0;
        foreach (int x in list) { if (x > threshold) count = count + 1; }
        Console.WriteLine(count);
    }
}
