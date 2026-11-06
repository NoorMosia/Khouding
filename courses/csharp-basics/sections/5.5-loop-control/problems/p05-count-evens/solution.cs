using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int n = int.Parse(Console.ReadLine());
        int evens = 0;
        for (int i = 0; i < n; i++)
        {
            int value = int.Parse(Console.ReadLine());
            if (value % 2 != 0)
            {
                continue;
            }
            evens++;
        }
        Console.WriteLine(evens);
    }
}
