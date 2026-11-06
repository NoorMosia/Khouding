using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int n = int.Parse(Console.ReadLine());
        int i = 1;
        while (i <= n)
        {
            Console.WriteLine(i);
            i++;
        }
    }
}
