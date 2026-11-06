using System;
using System.Collections.Generic;

class Program
{
    static List<int> Range(int n)
    {
        var result = new List<int>();
        for (int i = 1; i <= n; i++) result.Add(i);
        return result;
    }

    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        foreach (int x in Range(n)) Console.WriteLine(x);
    }
}
