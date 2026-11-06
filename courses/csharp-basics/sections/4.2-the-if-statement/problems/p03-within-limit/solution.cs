using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the temperature:");
        int temp = int.Parse(Console.ReadLine());
        if (temp <= 0)
        {
            Console.WriteLine("freezing");
        }
    }
}
