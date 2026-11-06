using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter numbers, 0 to stop:");
        int total = 0;
        int value = int.Parse(Console.ReadLine());
        while (value != 0)
        {
            total = total + value;
            value = int.Parse(Console.ReadLine());
        }
        Console.WriteLine(total);
    }
}
