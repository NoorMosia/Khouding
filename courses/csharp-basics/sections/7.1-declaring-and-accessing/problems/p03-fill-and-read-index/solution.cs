using System;

class Program
{
    static void Main()
    {
        int[] a = new int[3];
        a[0] = int.Parse(Console.ReadLine());
        a[1] = int.Parse(Console.ReadLine());
        a[2] = int.Parse(Console.ReadLine());
        int index = int.Parse(Console.ReadLine());
        Console.WriteLine(a[index]);
    }
}
