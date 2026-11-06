using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a:");
        int a = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter b:");
        int b = int.Parse(Console.ReadLine());
        // BUG: this uses a single = (assign) where == (compare) was meant.
        // It does not compile: assigning b into a gives an int, which cannot
        // go into a bool. Change the single = to == so it compares.
        bool areEqual = a = b;
        Console.WriteLine(areEqual);
    }
}
