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
        // Bug: this condition runs one pass too many and reads past the end.
        for (int i = 0; i <= a.Length; i++)
        {
            Console.WriteLine(a[i]);
        }
    }
}
