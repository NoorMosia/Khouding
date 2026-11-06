using System;

class Program
{
    static int CountOver(int[] a, int threshold)
    {
        int count = 0;
        foreach (int x in a)
        {
            if (x > threshold)
            {
                count = count + 1;
            }
        }
        return count;
    }

    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        int[] nums = new int[n];
        for (int i = 0; i < n; i++)
        {
            nums[i] = int.Parse(Console.ReadLine());
        }
        int threshold = int.Parse(Console.ReadLine());
        Console.WriteLine(CountOver(nums, threshold));
    }
}
