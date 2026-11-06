using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the number of items:");
        int items = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the group size:");
        int groupSize = int.Parse(Console.ReadLine());
        Console.WriteLine(items / groupSize);
    }
}
