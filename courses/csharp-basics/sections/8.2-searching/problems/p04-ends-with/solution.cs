using System;

class Program
{
    static void Main()
    {
        string s = Console.ReadLine();
        string suffix = Console.ReadLine();
        Console.WriteLine(s.EndsWith(suffix));
    }
}
