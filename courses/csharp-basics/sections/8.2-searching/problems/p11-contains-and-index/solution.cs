using System;

class Program
{
    static void Main()
    {
        string s = Console.ReadLine();
        string word = Console.ReadLine();
        Console.WriteLine(s.Contains(word));
        Console.WriteLine(s.IndexOf(word));
    }
}
