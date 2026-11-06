using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter numbers, 0 to stop:");
        int count = 0;
        int value = int.Parse(Console.ReadLine());
        while (value != 0)
        {
            count++;
            value = int.Parse(Console.ReadLine());
        }
        Console.WriteLine(count);
    }
}
