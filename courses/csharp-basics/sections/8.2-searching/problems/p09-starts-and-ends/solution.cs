using System;

class Program
{
    static void Main()
    {
        string s = Console.ReadLine();
        string prefix = Console.ReadLine();
        string suffix = Console.ReadLine();
        Console.WriteLine(s.StartsWith(prefix) && s.EndsWith(suffix));
    }
}
