using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        var list = new List<int>();
        list.Add(int.Parse(Console.ReadLine()));
        list.Add(int.Parse(Console.ReadLine()));
        list.Add(int.Parse(Console.ReadLine()));
        int newValue = int.Parse(Console.ReadLine());
        list[1] = newValue;
        Console.WriteLine(list[1]);
    }
}
