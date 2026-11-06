using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int n = int.Parse(Console.ReadLine());
        int positives = 0;
        for (int i = 0; i < n; i++)
        {
            int value = int.Parse(Console.ReadLine());
            if (value > 0)
            {
                positives++;
            }
        }
        Console.WriteLine(positives);
    }
}
