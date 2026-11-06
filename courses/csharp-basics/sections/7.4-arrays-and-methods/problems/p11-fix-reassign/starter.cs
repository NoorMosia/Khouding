using System;

class Program
{
    static void DoubleAll(int[] a)
    {
        // Bug: this builds a new local array and repoints the parameter.
        // The caller's array is never changed.
        int[] copy = new int[a.Length];
        for (int i = 0; i < a.Length; i++)
        {
            copy[i] = a[i] * 2;
        }
        a = copy;
    }

    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        int[] nums = new int[n];
        for (int i = 0; i < n; i++)
        {
            nums[i] = int.Parse(Console.ReadLine());
        }
        DoubleAll(nums);
        foreach (int x in nums)
        {
            Console.WriteLine(x);
        }
    }
}
