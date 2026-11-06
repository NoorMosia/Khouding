using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the number of adults:");
        int adults = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the number of children:");
        int children = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the ticket price:");
        int ticketPrice = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the booking fee:");
        int bookingFee = int.Parse(Console.ReadLine());
        Console.WriteLine((adults + children) * ticketPrice + bookingFee);
    }
}
