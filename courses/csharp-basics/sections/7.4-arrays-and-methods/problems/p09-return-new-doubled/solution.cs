using System;

class Program
{
    static int[] Doubled(int[] a)
    {
        int[] result = new int[a.Length];
        for (int i = 0; i < a.Length; i++)
        {
            result[i] = a[i] * 2;
        }
        return result;
    }

    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        int[] nums = new int[n];
        for (int i = 0; i < n; i++)
        {
            nums[i] = int.Parse(Console.ReadLine());
        }
        int[] doubled = Doubled(nums);
        foreach (int x in doubled)
        {
            Console.WriteLine(x);
        }
        Console.WriteLine("---");
        foreach (int x in nums)
        {
            Console.WriteLine(x);
        }
    }
}
