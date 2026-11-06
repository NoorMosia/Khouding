using System;

class Program
{
    static void Main()
    {
        string s = Console.ReadLine();
        string part = Console.ReadLine();
        int i = s.IndexOf(part);
        if (i != -1)
        {
            Console.WriteLine("found at " + i);
        }
        else
        {
            Console.WriteLine("not found");
        }
    }
}
