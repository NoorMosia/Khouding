using System;

class Program
{
    static void Main()
    {
        string s = Console.ReadLine();
        int spaces = 0;
        foreach (char c in s)
        {
            if (c == ' ')
            {
                spaces = spaces + 1;
            }
        }
        Console.WriteLine(spaces + 1);
    }
}
