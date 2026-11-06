using System;

class Program
{
    static int ClampFloor(int n)
    {
        if (n < 0)
        {
            return 0;
        }
        return n;
    }

    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        Console.WriteLine(ClampFloor(n));
    }
}
