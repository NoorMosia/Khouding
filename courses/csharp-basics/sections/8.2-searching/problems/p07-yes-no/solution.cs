using System;

class Program
{
    static void Main()
    {
        string s = Console.ReadLine();
        string part = Console.ReadLine();
        if (s.Contains(part))
        {
            Console.WriteLine("yes");
        }
        else
        {
            Console.WriteLine("no");
        }
    }
}
