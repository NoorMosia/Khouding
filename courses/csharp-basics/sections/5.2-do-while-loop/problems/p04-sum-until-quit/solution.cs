using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter numbers, -1 to stop:");
        int total = 0;
        int value;
        do
        {
            value = int.Parse(Console.ReadLine());
            if (value != -1)
            {
                total = total + value;
            }
        }
        while (value != -1);
        Console.WriteLine(total);
    }
}
