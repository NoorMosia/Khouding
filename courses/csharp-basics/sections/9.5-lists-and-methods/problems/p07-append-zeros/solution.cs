using System;
using System.Collections.Generic;

class Program
{
    static void AppendZeros(List<int> list, int count)
    {
        for (int i = 0; i < count; i++) list.Add(0);
    }

    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        var list = new List<int>();
        for (int i = 0; i < n; i++) list.Add(int.Parse(Console.ReadLine()));
        int zeros = int.Parse(Console.ReadLine());
        Console.WriteLine(list.Count);
        AppendZeros(list, zeros);
        Console.WriteLine(list.Count);
    }
}
