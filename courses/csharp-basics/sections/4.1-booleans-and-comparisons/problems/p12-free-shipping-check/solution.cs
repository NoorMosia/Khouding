using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the cart total:");
        int total = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the free-shipping threshold:");
        int threshold = int.Parse(Console.ReadLine());
        bool qualifies = total >= threshold;
        Console.WriteLine(qualifies);
    }
}
