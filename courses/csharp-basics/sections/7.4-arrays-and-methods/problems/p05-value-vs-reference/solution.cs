using System;

class Program
{
    static void BumpValue(int x)
    {
        x = x + 1;
    }

    static void BumpElement(int[] a)
    {
        a[0] = a[0] + 1;
    }

    static void Main()
    {
        int n = int.Parse(Console.ReadLine());
        int[] arr = new int[1];
        arr[0] = int.Parse(Console.ReadLine());

        BumpValue(n);
        BumpElement(arr);

        Console.WriteLine(n);
        Console.WriteLine(arr[0]);
    }
}
