using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        var list = new List<int>();
        for (int i = 0; i < n; i++) list.Add(int.Parse(Console.ReadLine()));
        int m = int.Parse(Console.ReadLine());
        for (int i = 0; i < m; i++) list.Add(int.Parse(Console.ReadLine()));
        Console.WriteLine(list.Count);
    }
}
