using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        var list = new List<int>();
        for (int i = 0; i < n; i++) list.Add(int.Parse(Console.ReadLine()));
        int front = int.Parse(Console.ReadLine());
        int back = int.Parse(Console.ReadLine());
        list.Insert(0, front);
        list.Add(back);
        foreach (int x in list) Console.WriteLine(x);
    }
}
