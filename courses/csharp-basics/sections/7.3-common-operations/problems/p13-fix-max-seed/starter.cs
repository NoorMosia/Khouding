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
        // Bug: seeding max at 0 is wrong when every element is negative.
        int max = 0;
        for (int i = 0; i < a.Length; i++)
        {
            if (a[i] > max)
            {
                max = a[i];
            }
        }
        Console.WriteLine(max);
    }
}
