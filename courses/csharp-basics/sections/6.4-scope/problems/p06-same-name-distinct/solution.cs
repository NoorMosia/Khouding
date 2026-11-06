using System;

class Program
{
    static void ShowTotal()
    {
        int total = 42;
        Console.WriteLine(total);
    }

    static void Main()
    {
        Console.WriteLine("Enter a total:");
        int total = int.Parse(Console.ReadLine());
        ShowTotal();
        Console.WriteLine(total);
    }
}
