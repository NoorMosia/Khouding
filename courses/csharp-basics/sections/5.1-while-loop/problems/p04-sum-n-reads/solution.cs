using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int c = int.Parse(Console.ReadLine());
        int total = 0;
        int i = 0;
        while (i < c)
        {
            int value = int.Parse(Console.ReadLine());
            total = total + value;
            i++;
        }
        Console.WriteLine(total);
    }
}
