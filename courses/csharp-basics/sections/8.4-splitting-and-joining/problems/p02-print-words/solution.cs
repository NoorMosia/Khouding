using System;

class Program
{
    static void Main()
    {
        string s = Console.ReadLine();
        foreach (string word in s.Split(' '))
        {
            Console.WriteLine(word);
        }
    }
}
