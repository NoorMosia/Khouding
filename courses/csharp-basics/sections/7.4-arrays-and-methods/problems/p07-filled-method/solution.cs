using System;

class Program
{
    static int[] Filled(int n, int v)
    {
        int[] result = new int[n];
        for (int i = 0; i < n; i++)
        {
            result[i] = v;
        }
        return result;
    }

    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        int v = int.Parse(Console.ReadLine());
        int[] nums = Filled(n, v);
        foreach (int x in nums)
        {
            Console.WriteLine(x);
        }
    }
}
