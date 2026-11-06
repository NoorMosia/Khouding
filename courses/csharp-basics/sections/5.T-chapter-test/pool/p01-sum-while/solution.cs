using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int n = int.Parse(Console.ReadLine());
        int total = 0;
        int i = 0;
        while (i < n)
        {
            int value = int.Parse(Console.ReadLine());
            total = total + value;
            i++;
        }
        Console.WriteLine(total);
    }
}
