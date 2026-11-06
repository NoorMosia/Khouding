using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        var list = new List<int>();
        for (int i = 0; i < n; i++) list.Add(int.Parse(Console.ReadLine()));
        int v = int.Parse(Console.ReadLine());
        bool ok = list.Remove(v);
        Console.WriteLine(ok);
        Console.WriteLine(list.Count);
    }
}
