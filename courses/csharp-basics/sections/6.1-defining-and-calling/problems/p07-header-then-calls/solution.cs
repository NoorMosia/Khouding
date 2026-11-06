using System;

class Program
{
    static void Row()
    {
        Console.WriteLine("row");
    }

    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int n = int.Parse(Console.ReadLine());
        Console.WriteLine("ROWS:");
        for (int i = 0; i < n; i++)
        {
            Row();
        }
    }
}
