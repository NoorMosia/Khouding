using System;

class Program
{
    static void Main()
    {
        string[] parts = Console.ReadLine().Split(' ');
        for (int i = 0; i < parts.Length; i++)
        {
            parts[i] = parts[i].ToUpper();
        }
        Console.WriteLine(string.Join(" ", parts));
    }
}
