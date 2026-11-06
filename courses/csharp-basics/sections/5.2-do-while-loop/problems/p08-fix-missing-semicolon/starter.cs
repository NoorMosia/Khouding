using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int n = int.Parse(Console.ReadLine());
        int i = 1;
        do
        {
            Console.WriteLine(i);
            i++;
        }
        while (i <= n)
    }
}
