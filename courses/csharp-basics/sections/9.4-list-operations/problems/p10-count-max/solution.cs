using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        var list = new List<int>();
        for (int i = 0; i < n; i++) list.Add(int.Parse(Console.ReadLine()));
        int max = list[0];
        for (int i = 1; i < list.Count; i++) { if (list[i] > max) max = list[i]; }
        int count = 0;
        foreach (int x in list) { if (x == max) count = count + 1; }
        Console.WriteLine(count);
    }
}
