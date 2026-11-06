using System;
using System.Collections.Generic;

class Program
{
    static void DoubleAll(List<int> list)
    {
        // Bug: builds a new list and reassigns the parameter; the caller's list is never changed.
        var copy = new List<int>();
        for (int i = 0; i < list.Count; i++) copy.Add(list[i] * 2);
        list = copy;
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
