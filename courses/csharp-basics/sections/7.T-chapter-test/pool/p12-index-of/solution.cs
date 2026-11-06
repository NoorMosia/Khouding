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
        int found = -1;
        for (int i = 0; i < a.Length; i++)
        {
            if (a[i] == target)
            {
                found = i;
                break;
            }
        }
        Console.WriteLine(found);
    }
}
