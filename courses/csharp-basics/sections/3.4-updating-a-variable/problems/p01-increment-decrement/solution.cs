using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        n++;
        Console.WriteLine(n);
        n--;
        Console.WriteLine(n);
    }
}
