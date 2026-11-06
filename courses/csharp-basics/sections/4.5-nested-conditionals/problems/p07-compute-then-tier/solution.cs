using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter quantity and unit price:");
        int quantity = int.Parse(Console.ReadLine());
        int price = int.Parse(Console.ReadLine());
        int total = quantity * price;
        if (total >= 100)
        {
            if (total >= 500)
            {
                Console.WriteLine("premium");
            }
            else
            {
                Console.WriteLine("bulk");
            }
        }
        else
        {
            Console.WriteLine("standard");
        }
    }
}
