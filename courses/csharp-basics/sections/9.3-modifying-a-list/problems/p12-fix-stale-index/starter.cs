using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        var list = new List<int>();
        for (int i = 0; i < n; i++) list.Add(int.Parse(Console.ReadLine()));
        // Bug: forward loop removes by index; stale index skips elements after each removal.
        for (int i = 0; i < list.Count; i++)
        {
            if (list[i] < 0) list.RemoveAt(i);
        }
        foreach (int x in list) Console.WriteLine(x);
    }
}
