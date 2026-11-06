using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the total:");
        int total = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the group size:");
        int groupSize = int.Parse(Console.ReadLine());
        Console.WriteLine(total / groupSize);
        Console.WriteLine(total % groupSize);
    }
}
