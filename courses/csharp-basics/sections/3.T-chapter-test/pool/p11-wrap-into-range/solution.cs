using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the value:");
        int value = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the size:");
        int size = int.Parse(Console.ReadLine());
        Console.WriteLine(value % size);
    }
}
