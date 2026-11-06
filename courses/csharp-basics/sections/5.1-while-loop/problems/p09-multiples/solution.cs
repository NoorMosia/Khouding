using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter n and k:");
        int n = int.Parse(Console.ReadLine());
        int k = int.Parse(Console.ReadLine());
        int m = k;
        while (m <= n)
        {
            Console.WriteLine(m);
            m = m + k;
        }
    }
}
