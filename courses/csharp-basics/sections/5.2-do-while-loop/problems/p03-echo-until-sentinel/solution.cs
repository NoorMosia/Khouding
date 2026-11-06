using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter numbers, 0 to stop:");
        int value;
        do
        {
            value = int.Parse(Console.ReadLine());
            if (value != 0)
            {
                Console.WriteLine(value);
            }
        }
        while (value != 0);
    }
}
