using System;

class Program
{
    static int[] Range(int n)
    {
        int[] result = new int[n];
        for (int i = 0; i < n; i++)
        {
            result[i] = i + 1;
        }
        return result;
    }

    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        int[] nums = Range(n);
        foreach (int x in nums)
        {
            Console.WriteLine(x);
        }
    }
}
