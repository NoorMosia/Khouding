using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter n and k:");
        int n = int.Parse(Console.ReadLine());
        int k = int.Parse(Console.ReadLine());
        int total = 0;
        for (int m = k; m <= n; m += k)
        {
            total = total + m;
        }
        Console.WriteLine(total);
    }
}
