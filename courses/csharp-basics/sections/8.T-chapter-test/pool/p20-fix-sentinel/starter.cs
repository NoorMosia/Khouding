using System;

class Program
{
    static void Main()
    {
        string s = Console.ReadLine();
        string part = Console.ReadLine();
        int i = s.IndexOf(part);
        // Bug: uses i as a position without checking if it is -1.
        Console.WriteLine("found at " + i);
    }
}
