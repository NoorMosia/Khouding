using System;

class Program
{
    static void AddAll(int[] a, int amount)
    {
        for (int i = 0; i < a.Length; i++)
        {
            a[i] = a[i] + amount;
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
        int amount = int.Parse(Console.ReadLine());
        AddAll(nums, amount);
        foreach (int x in nums)
        {
            Console.WriteLine(x);
        }
    }
}
