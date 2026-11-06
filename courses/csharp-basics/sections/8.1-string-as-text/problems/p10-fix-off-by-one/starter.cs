using System;

class Program
{
    static void Main()
    {
        string s = Console.ReadLine();
        // Bug: this reads past the end and crashes at runtime.
        Console.WriteLine(s[s.Length]);
    }
}
