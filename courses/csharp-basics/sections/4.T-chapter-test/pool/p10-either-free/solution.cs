using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter total and coupon (0 or 1):");
        int total = int.Parse(Console.ReadLine());
        int coupon = int.Parse(Console.ReadLine());
        if (total >= 50 || coupon == 1)
        {
            Console.WriteLine("free");
        }
        else
        {
            Console.WriteLine("paid");
        }
    }
}
