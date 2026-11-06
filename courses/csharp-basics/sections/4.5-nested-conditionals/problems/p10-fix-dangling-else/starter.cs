using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a and b (0 or 1):");
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        // BUG: no braces, so the else binds to the INNER if (b == 1), not the outer (a == 1).
        // Intended: "both" when a and b; nothing when a but not b; "not a" when a is not 1.
        // Add braces so the else belongs to the OUTER if.
        if (a == 1)
            if (b == 1)
                Console.WriteLine("both");
            else
                Console.WriteLine("not a");
    }
}
