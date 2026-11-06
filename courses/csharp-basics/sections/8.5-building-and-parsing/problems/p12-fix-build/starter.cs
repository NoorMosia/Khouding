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
                // Bug: the result of concatenation is thrown away; result stays "".
                result + c;
            }
        }
        Console.WriteLine(result);
    }
}
