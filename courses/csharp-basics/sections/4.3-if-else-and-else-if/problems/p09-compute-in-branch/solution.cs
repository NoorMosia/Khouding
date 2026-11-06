using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the quantity:");
        int quantity = int.Parse(Console.ReadLine());
        if (quantity == 0)
        {
            Console.WriteLine("nothing to pack");
        }
        else
        {
            int boxes = (quantity + 9) / 10;
            Console.WriteLine(boxes);
        }
    }
}
