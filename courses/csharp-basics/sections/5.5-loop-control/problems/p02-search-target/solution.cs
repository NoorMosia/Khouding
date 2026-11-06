using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter count, target, then values:");
        int n = int.Parse(Console.ReadLine());
        int target = int.Parse(Console.ReadLine());
        bool found = false;
        for (int i = 0; i < n; i++)
        {
            int value = int.Parse(Console.ReadLine());
            if (value == target)
            {
                found = true;
                break;
            }
        }
        if (found)
        {
            Console.WriteLine("found");
        }
        else
        {
            Console.WriteLine("not found");
        }
    }
}
