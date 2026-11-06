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
        Console.WriteLine(list[1]);
    }
}
