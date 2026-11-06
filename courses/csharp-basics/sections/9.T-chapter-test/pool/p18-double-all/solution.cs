using System;
using System.Collections.Generic;

class Program
{
    static void DoubleAll(List<int> list)
    {
        for (int i = 0; i < list.Count; i++) list[i] = list[i] * 2;
    }

    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        var list = new List<int>();
        for (int i = 0; i < n; i++) list.Add(int.Parse(Console.ReadLine()));
        DoubleAll(list);
        foreach (int x in list) Console.WriteLine(x);
    }
}
