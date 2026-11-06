using System;

class Program
{
    // This method PRINTS the triple. Change it to RETURN n * 3 instead (static int Triple).
    static void PrintTriple(int n)
    {
        Console.WriteLine(n * 3);
    }

    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        // Currently only the first line is produced. After converting Triple to return a value,
        // print Triple(n) on the first line and Triple(n) + Triple(n) on the second.
        PrintTriple(n);
    }
}
