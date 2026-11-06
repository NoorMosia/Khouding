using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter count, target, then values:");
        int n = int.Parse(Console.ReadLine());
        int target = int.Parse(Console.ReadLine());
        int position = 0;
        for (int i = 1; i <= n; i++)
        {
            int value = int.Parse(Console.ReadLine());
            if (value == target)
            {
                position = i;
                break;
            }
        }
        Console.WriteLine(position);
    }
}
