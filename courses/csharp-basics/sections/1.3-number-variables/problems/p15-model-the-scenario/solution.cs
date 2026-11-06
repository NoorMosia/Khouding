using System;

class Program
{
    static void Main()
    {
        const double DeliveryFee = 5;
        int quantity = int.Parse(Console.ReadLine());
        double unitPrice = double.Parse(Console.ReadLine());

        double subtotal = quantity * unitPrice;
        double total = subtotal + DeliveryFee;

        Console.WriteLine(subtotal);
        Console.WriteLine(total);
    }
}
