using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter numbers, 0 to stop:");
        int total = 0;
        while (true)
        {
            int value = int.Parse(Console.ReadLine());
            if (value == 0)
            {
                break;
            }
            total = total + value;
        }
        Console.WriteLine(total);
    }
}
