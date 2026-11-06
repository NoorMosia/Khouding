using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int c = int.Parse(Console.ReadLine());
        int positives = 0;
        int i = 0;
        while (i < c)
        {
            int value = int.Parse(Console.ReadLine());
            if (value > 0)
            {
                positives++;
            }
            i++;
        }
        Console.WriteLine(positives);
    }
}
