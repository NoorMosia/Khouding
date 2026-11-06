using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        var list = new List<int>();
        for (int i = 0; i < n; i++) list.Add(int.Parse(Console.ReadLine()));
        for (int i = list.Count - 1; i >= 0; i--)
        {
            if (list[i] < 0) list.RemoveAt(i);
        }
        foreach (int x in list) Console.WriteLine(x);
    }
}
