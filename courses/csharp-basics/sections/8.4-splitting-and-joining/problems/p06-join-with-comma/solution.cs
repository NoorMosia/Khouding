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
        Console.WriteLine(string.Join(", ", words));
    }
}
