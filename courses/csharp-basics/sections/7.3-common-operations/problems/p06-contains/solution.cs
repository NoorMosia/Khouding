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
        int target = int.Parse(Console.ReadLine());
        bool found = false;
        foreach (int x in a)
        {
            if (x == target)
            {
                found = true;
            }
        }
        Console.WriteLine(found);
    }
}
