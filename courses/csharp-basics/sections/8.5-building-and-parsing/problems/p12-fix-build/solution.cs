using System;

class Program
{
    static void Main()
    {
        string s = Console.ReadLine();
        string result = "";
        foreach (char c in s)
        {
            if (char.IsDigit(c))
            {
                result = result + c;
            }
        }
        Console.WriteLine(result);
    }
}
