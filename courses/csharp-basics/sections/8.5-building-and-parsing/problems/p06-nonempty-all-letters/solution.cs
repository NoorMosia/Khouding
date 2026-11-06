using System;

class Program
{
    static void Main()
    {
        string s = Console.ReadLine() ?? "";
        if (s.Length == 0)
        {
            Console.WriteLine(false);
            return;
        }
        bool ok = true;
        foreach (char c in s)
        {
            if (!char.IsLetter(c))
            {
                ok = false;
            }
        }
        Console.WriteLine(ok);
    }
}
