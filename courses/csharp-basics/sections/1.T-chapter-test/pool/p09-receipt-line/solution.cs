using System;

class Program
{
    static void Main()
    {
        string item = "Coffee";
        int quantity = 3;
        double unitPrice = 2.5;
        double lineTotal = quantity * unitPrice;

        Console.Write("Item:\t");
        Console.WriteLine(item);
        Console.Write("Qty:\t");
        Console.WriteLine(quantity);
        Console.Write("Total:\t");
        Console.WriteLine(lineTotal);
    }
}
