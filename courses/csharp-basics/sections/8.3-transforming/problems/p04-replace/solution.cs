using System;

class Program
{
    static void Main()
    {
        string s = Console.ReadLine();
        string oldPart = Console.ReadLine();
        string newPart = Console.ReadLine();
        Console.WriteLine(s.Replace(oldPart, newPart));
    }
}
