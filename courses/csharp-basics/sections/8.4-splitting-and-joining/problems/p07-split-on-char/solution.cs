using System;

class Program
{
    static void Main()
    {
        string s = Console.ReadLine();
        char sep = Console.ReadLine()[0];
        Console.WriteLine(s.Split(sep).Length);
    }
}
