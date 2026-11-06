using System;
using System.Collections.Generic;

class Program
{
    static int CountOver(List<int> list, int threshold)
    {
        int count = 0;
        foreach (int x in list) { if (x > threshold) count = count + 1; }
        return count;
    }

    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        var list = new List<int>();
        for (int i = 0; i < n; i++) list.Add(int.Parse(Console.ReadLine()));
        int threshold = int.Parse(Console.ReadLine());
        Console.WriteLine(CountOver(list, threshold));
    }
}
