using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter count, threshold, then quantities:");
        int n = int.Parse(Console.ReadLine());
        int threshold = int.Parse(Console.ReadLine());
        int low = 0;
        int firstZero = 0;
        for (int i = 1; i <= n; i++)
        {
            int qty = int.Parse(Console.ReadLine());
            if (qty == 0)
            {
                firstZero = i;
                break;
            }
            if (qty >= threshold)
            {
                continue;
            }
            low++;
        }
        Console.WriteLine(low);
        Console.WriteLine(firstZero);
    }
}
