using System;

class Program
{
    static void Main()
    {
        string[] parts = Console.ReadLine().Split(' ');
        int index = int.Parse(Console.ReadLine());
        Console.WriteLine(parts[index]);
    }
}
