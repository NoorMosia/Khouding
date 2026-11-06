using System;

class Program
{
    static int Sum(int[] a)
    {
        int total = 0;
        foreach (int x in a)
        {
            total = total + x;
        }
        return total;
    }

    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        int[] nums = new int[n];
        for (int i = 0; i < n; i++)
        {
            nums[i] = int.Parse(Console.ReadLine());
        }
        Console.WriteLine(Sum(nums));
    }
}
