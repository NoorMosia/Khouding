using System;

class Program
{
    static void Main()
    {
        string s = Console.ReadLine();
        string part = Console.ReadLine();
        int i = s.IndexOf(part);
        // Bug: uses i as an index without checking if it is -1 (absent).
        Console.WriteLine("found at " + i);
    }
}
