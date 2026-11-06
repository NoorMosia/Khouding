using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int n = int.Parse(Console.ReadLine());
        int total = 0;
        int i = 1;
        while (i <= n)
        {
            total = total + i;
            i++;
        }
        Console.WriteLine(total);
    }
}
