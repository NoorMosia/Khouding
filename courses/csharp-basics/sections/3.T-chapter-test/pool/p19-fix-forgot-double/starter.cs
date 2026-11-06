using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a:");
        int a = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter b:");
        int b = int.Parse(Console.ReadLine());
        // BUG: this should print the decimal quotient, but a and b are both int,
        // so a / b truncates (7 / 2 gives 3, not 3.5). Force a decimal: (double)a / b.
        Console.WriteLine(a / b);
    }
}
