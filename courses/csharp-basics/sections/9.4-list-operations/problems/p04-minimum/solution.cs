using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        var list = new List<int>();
        for (int i = 0; i < n; i++) list.Add(int.Parse(Console.ReadLine()));
        int min = list[0];
        for (int i = 1; i < list.Count; i++) { if (list[i] < min) min = list[i]; }
        Console.WriteLine(min);
    }
}
