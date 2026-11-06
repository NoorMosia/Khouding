using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int n = int.Parse(Console.ReadLine());
        int i = n;
        while (i >= 1)
        {
            Console.WriteLine(i);
            i--;
        }
    }
}
