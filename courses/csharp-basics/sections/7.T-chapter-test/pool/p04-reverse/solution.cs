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
        for (int i = a.Length - 1; i >= 0; i--)
        {
            Console.WriteLine(a[i]);
        }
    }
}
