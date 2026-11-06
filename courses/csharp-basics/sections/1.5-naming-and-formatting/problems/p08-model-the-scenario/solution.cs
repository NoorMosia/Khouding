using System;

class Program
{
    static void Main()
    {
        string productName = Console.ReadLine();
        int quantity = int.Parse(Console.ReadLine());
        double unitPrice = double.Parse(Console.ReadLine());

        double total = quantity * unitPrice;

        Console.WriteLine(productName);
        Console.WriteLine(total);
    }
}
