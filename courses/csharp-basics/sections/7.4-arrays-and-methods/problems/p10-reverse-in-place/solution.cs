using System;

class Program
{
    static void Reverse(int[] a)
    {
        int i = 0;
        int j = a.Length - 1;
        while (i < j)
        {
            int temp = a[i];
            a[i] = a[j];
            a[j] = temp;
            i = i + 1;
            j = j - 1;
        }
    }

    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        int[] nums = new int[n];
        for (int i = 0; i < n; i++)
        {
            nums[i] = int.Parse(Console.ReadLine());
        }
        Reverse(nums);
        foreach (int x in nums)
        {
            Console.WriteLine(x);
        }
    }
}
