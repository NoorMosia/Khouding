using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int n = int.Parse(Console.ReadLine());
        bool found = false;
        for (int i = 0; i < n; i++)
        {
            int value = int.Parse(Console.ReadLine());
            if (value > 100)
            {
                Console.WriteLine(value);
                found = true;
                break;
            }
        }
        if (!found)
        {
            Console.WriteLine("none");
        }
    }
}
