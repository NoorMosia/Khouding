using System;

class Program
{
    static void Main()
    {
        string a = Console.ReadLine();
        string b = Console.ReadLine();
        Console.WriteLine(a[a.Length - 1] == b[b.Length - 1]);
    }
}
