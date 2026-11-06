using System;
using System.Collections.Generic;

class Program
{
    static int Sum(List<int> list)
    {
        int total = 0;
        foreach (int x in list) total = total + x;
        return total;
    }

    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        var list = new List<int>();
        for (int i = 0; i < n; i++) list.Add(int.Parse(Console.ReadLine()));
        Console.WriteLine(Sum(list));
    }
}
