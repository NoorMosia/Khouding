using System;

class Program
{
    static void Main()
    {
        foreach (string word in Console.ReadLine().Split(' '))
        {
            Console.WriteLine(word);
        }
    }
}
