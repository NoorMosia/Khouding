using System;

class Program
{
    static void ReportParity(int n)
    {
        if (n % 2 == 0)
        {
            Console.WriteLine("even");
        }
        else
        {
            Console.WriteLine("odd");
        }
    }

    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        ReportParity(n);
    }
}
