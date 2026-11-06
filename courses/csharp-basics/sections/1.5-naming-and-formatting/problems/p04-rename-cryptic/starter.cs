using System;

class Program
{
    static void Main()
    {
        // This works, but the names say nothing. It reads a number of rows and a
        // number of seats per row, and prints the total number of seats.
        // Rename x, a2, and q to meaningful names. The output must not change.
        int x = int.Parse(Console.ReadLine());
        int a2 = int.Parse(Console.ReadLine());
        int q = x * a2;
        Console.WriteLine(q);
    }
}
