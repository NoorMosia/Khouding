using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a temperature:");
        int temp = int.Parse(Console.ReadLine());
        if (temp > 30)
        {
            Console.WriteLine("alert");
        }
    }
}
