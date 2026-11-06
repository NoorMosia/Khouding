using System;
using System.Collections.Generic;

class Program
{
    static void BumpValue(int x) { x = x + 1; }

    static void BumpElement(List<int> list) { list[0] = list[0] + 1; }

    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        var list = new List<int>();
        list.Add(int.Parse(Console.ReadLine()));

        BumpValue(n);
        BumpElement(list);

        Console.WriteLine(n);
        Console.WriteLine(list[0]);
    }
}
