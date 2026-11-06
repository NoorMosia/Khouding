using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        string[] words = new string[n];
        for (int i = 0; i < n; i++)
        {
            words[i] = Console.ReadLine();
        }
        // Bug: array and separator are in the wrong order.
        Console.WriteLine(string.Join(words, ", "));
    }
}
