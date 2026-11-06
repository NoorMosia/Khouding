using System;

class Program
{
    static void Main()
    {
        string s = Console.ReadLine() ?? "";
        bool allDigits = true;
        foreach (char c in s)
        {
            if (!char.IsDigit(c))
            {
                allDigits = false;
            }
        }
        Console.WriteLine(allDigits);
    }
}
