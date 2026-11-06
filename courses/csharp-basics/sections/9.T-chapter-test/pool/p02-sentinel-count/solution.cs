using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        var list = new List<int>();
        string line = Console.ReadLine();
        while (line != "stop") { list.Add(int.Parse(line)); line = Console.ReadLine(); }
        Console.WriteLine(list.Count);
    }
}
