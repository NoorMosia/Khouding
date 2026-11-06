using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter count, limit, then values:");
        int n = int.Parse(Console.ReadLine());
        int limit = int.Parse(Console.ReadLine());
        int total = 0;
        bool stopped = false;
        for (int i = 0; i < n; i++)
        {
            int value = int.Parse(Console.ReadLine());
            total = total + value;
            if (total > limit)
            {
                Console.WriteLine(total);
                stopped = true;
                break;
            }
        }
        if (!stopped)
        {
            Console.WriteLine(total);
        }
    }
}
