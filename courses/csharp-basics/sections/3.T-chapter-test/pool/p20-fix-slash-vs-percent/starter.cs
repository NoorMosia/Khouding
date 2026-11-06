using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the total:");
        int total = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the group size:");
        int groupSize = int.Parse(Console.ReadLine());
        // BUG: this should print how many items are LEFT OVER (the remainder), but it
        // uses / (the number of groups). Change / to %.
        Console.WriteLine(total / groupSize);
    }
}
