using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the total:");
        int total = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter the group size:");
        int groupSize = int.Parse(Console.ReadLine());
        // BUG: this should print how many items are LEFT OVER after making full
        // groups, which is the remainder. It uses / (the number of groups) instead
        // of % (the leftover). It compiles and runs, it just prints the wrong number.
        // Change / to %.
        Console.WriteLine(total / groupSize);
    }
}
