using System;

class Program
{
    static void Main()
    {
        string s = Console.ReadLine();
        string prefix = Console.ReadLine();
        Console.WriteLine(s.StartsWith(prefix));
    }
}
