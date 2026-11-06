using System;

class Program
{
    static void Main()
    {
        int rows = int.Parse(Console.ReadLine());
        int seatsPerRow = int.Parse(Console.ReadLine());
        int totalSeats = rows * seatsPerRow;
        Console.WriteLine(totalSeats);
    }
}
