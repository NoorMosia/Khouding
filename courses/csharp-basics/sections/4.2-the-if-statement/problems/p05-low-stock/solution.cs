using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the stock level:");
        int stock = int.Parse(Console.ReadLine());
        if (stock < 10)
        {
            Console.WriteLine("reorder");
        }
    }
}
