using System;

class Program
{
    static void Main()
    {
        string[] parts = Console.ReadLine().Split(' ');
        for (int i = parts.Length - 1; i >= 0; i--)
        {
            Console.WriteLine(parts[i]);
        }
    }
}
