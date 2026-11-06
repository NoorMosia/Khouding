using System;

class Program
{
    static void Main()
    {
        string s = Console.ReadLine();
        // Bug: the return value of ToUpper is ignored; s is unchanged.
        s.ToUpper();
        Console.WriteLine(s);
    }
}
