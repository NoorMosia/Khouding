using System;

class Program
{
    static void Main()
    {
        int[] a = new int[4];
        a[0] = int.Parse(Console.ReadLine());
        a[1] = int.Parse(Console.ReadLine());
        a[2] = int.Parse(Console.ReadLine());
        a[3] = int.Parse(Console.ReadLine());
        Console.WriteLine(a[0]);
        Console.WriteLine(a[a.Length - 1]);
    }
}
