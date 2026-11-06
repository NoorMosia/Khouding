using System;

class Program
{
    static void Main()
    {
        string s = Console.ReadLine() ?? "";
        int count = 0;
        foreach (char c in s)
        {
            if (char.IsLetter(c))
            {
                count = count + 1;
            }
        }
        Console.WriteLine(count);
    }
}
