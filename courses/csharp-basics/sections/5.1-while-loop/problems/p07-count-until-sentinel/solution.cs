using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter numbers, -1 to stop:");
        int count = 0;
        int value = int.Parse(Console.ReadLine());
        while (value != -1)
        {
            count++;
            value = int.Parse(Console.ReadLine());
        }
        Console.WriteLine(count);
    }
}
