using System;

class Program
{
    static void Main()
    {
        const double ServiceFee = 4;
        int hours = 3;
        double hourlyRate = 20.5;

        double labour = hours * hourlyRate;
        double total = labour + ServiceFee;

        Console.Write("Labour:\t");
        Console.WriteLine(labour);
        Console.Write("Fee:\t");
        Console.WriteLine(ServiceFee);
        Console.Write("Total:\t");
        Console.WriteLine(total);
    }
}
