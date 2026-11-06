using System;

class Program
{
    static void Main()
    {
        const int DaysInWeek = 7;
        int weeks = int.Parse(Console.ReadLine());
        Console.WriteLine(weeks * DaysInWeek);
    }
}
