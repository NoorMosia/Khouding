using System;

class Program
{
    static void Main()
    {
        string s = Console.ReadLine();
        int start = int.Parse(Console.ReadLine());
        int length = int.Parse(Console.ReadLine());
        Console.WriteLine(s.Substring(start, length));
    }
}
