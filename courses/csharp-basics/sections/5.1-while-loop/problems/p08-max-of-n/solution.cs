using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int c = int.Parse(Console.ReadLine());
        int max = int.Parse(Console.ReadLine());
        int i = 1;
        while (i < c)
        {
            int value = int.Parse(Console.ReadLine());
            if (value > max)
            {
                max = value;
            }
            i++;
        }
        Console.WriteLine(max);
    }
}
