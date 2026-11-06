using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        int[] a = new int[n];
        for (int i = 0; i < n; i++)
        {
            a[i] = int.Parse(Console.ReadLine());
        }
        int sum = 0;
        int max = a[0];
        foreach (int x in a)
        {
            sum = sum + x;
            if (x > max)
            {
                max = x;
            }
        }
        double average = (double)sum / a.Length;
        Console.WriteLine("Count: " + a.Length);
        Console.WriteLine("Sum: " + sum);
        Console.WriteLine("Average: " + average);
        Console.WriteLine("Highest: " + max);
    }
}
