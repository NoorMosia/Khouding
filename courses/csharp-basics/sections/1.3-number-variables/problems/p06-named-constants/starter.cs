using System;

class Program
{
    static void Main()
    {
        // This works but uses bare "magic numbers" (12 bottles per crate, 2 each).
        // Replace them with well-named const variables, then print the same result.
        int crates = int.Parse(Console.ReadLine());
        Console.WriteLine(crates * 12);
        Console.WriteLine(crates * 12 * 2);
    }
}
