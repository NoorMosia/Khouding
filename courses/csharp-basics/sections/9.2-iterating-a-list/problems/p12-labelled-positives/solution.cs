using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        var list = new List<int>();
        for (int i = 0; i < n; i++) list.Add(int.Parse(Console.ReadLine()));
        int label = 0;
        foreach (int x in list)
        {
            if (x > 0)
            {
                label = label + 1;
                Console.WriteLine(label + ": " + x);
            }
        }
    }
}
