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
        foreach (int x in a)
        {
            sum = sum + x;
        }
        Console.WriteLine(sum);
    }
}
