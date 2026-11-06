using System;

class Program
{
    static void Main()
    {
        string s = Console.ReadLine() ?? "";
        string result = "";
        foreach (char c in s)
        {
            result = result + char.ToUpper(c);
        }
        Console.WriteLine(result);
    }
}
