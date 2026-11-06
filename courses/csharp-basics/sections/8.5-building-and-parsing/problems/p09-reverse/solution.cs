using System;

class Program
{
    static void Main()
    {
        string s = Console.ReadLine() ?? "";
        string result = "";
        for (int i = s.Length - 1; i >= 0; i--)
        {
            result = result + s[i];
        }
        Console.WriteLine(result);
    }
}
