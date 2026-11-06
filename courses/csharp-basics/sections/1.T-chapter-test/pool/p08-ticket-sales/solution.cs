using System;

class Program
{
    static void Main()
    {
        const int TicketPrice = 15;
        int morningSales = 20;
        int eveningSales = 35;

        int totalTickets = morningSales + eveningSales;
        Console.WriteLine(totalTickets);
        Console.WriteLine(totalTickets * TicketPrice);
    }
}
