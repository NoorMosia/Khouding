using System;

class Program
{
    static void Main()
    {
        string s = Console.ReadLine();
        char target = Console.ReadLine()[0];
        int count = 0;
        foreach (char c in s)
        {
            if (c == target)
            {
                count = count + 1;
            }
        }
        Console.WriteLine(count);
    }
}
