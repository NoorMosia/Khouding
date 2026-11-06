using System;
using System.Collections.Generic;

class Program
{
    static List<int> Doubled(List<int> list)
    {
        var result = new List<int>();
        foreach (int x in list) result.Add(x * 2);
        return result;
    }

    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        var list = new List<int>();
        for (int i = 0; i < n; i++) list.Add(int.Parse(Console.ReadLine()));
        foreach (int x in Doubled(list)) Console.WriteLine(x);
        Console.WriteLine("---");
        foreach (int x in list) Console.WriteLine(x);
    }
}
