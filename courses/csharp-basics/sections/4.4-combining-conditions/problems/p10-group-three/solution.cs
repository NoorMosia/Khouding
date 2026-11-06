using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter three numbers, one per line:");
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        int c = int.Parse(Console.ReadLine());
        bool result = a > 0 && (b > 0 || c > 0);
        Console.WriteLine(result);
    }
}
