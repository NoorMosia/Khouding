using System;

class Program
{
    static void Main()
    {
        int[] a = new int[3];
        a[0] = int.Parse(Console.ReadLine());
        a[1] = int.Parse(Console.ReadLine());
        a[2] = int.Parse(Console.ReadLine());
        // Bug: this reads past the end and crashes at runtime.
        Console.WriteLine(a[a.Length]);
    }
}
