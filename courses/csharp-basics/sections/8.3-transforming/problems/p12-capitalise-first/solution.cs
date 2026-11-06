using System;

class Program
{
    static void Main()
    {
        string s = Console.ReadLine();
        Console.WriteLine(char.ToUpper(s[0]) + s.Substring(1));
    }
}
