using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter count, threshold, then temps:");
        int n = int.Parse(Console.ReadLine());
        int threshold = int.Parse(Console.ReadLine());
        int total = 0;
        int above = 0;
        for (int i = 0; i < n; i++)
        {
            int temp = int.Parse(Console.ReadLine());
            total = total + temp;
            if (temp > threshold)
            {
                above++;
            }
        }
        Console.WriteLine(total / n);
        Console.WriteLine(above);
    }
}
