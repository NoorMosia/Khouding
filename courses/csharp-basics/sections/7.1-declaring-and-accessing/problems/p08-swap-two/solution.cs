using System;

class Program
{
    static void Main()
    {
        int[] a = new int[2];
        a[0] = int.Parse(Console.ReadLine());
        a[1] = int.Parse(Console.ReadLine());
        int temp = a[0];
        a[0] = a[1];
        a[1] = temp;
        Console.WriteLine(a[0]);
        Console.WriteLine(a[1]);
    }
}
