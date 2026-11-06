using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the number of boxes:");
        int boxes = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter items per box:");
        int itemsPerBox = int.Parse(Console.ReadLine());
        Console.WriteLine($"Total items: {boxes * itemsPerBox}");
    }
}
