using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a number:");
        int n = int.Parse(Console.ReadLine());
        {
            int doubled = n * 2;
        }
        Console.WriteLine(doubled);
        // BUG: 'doubled' is declared inside the inner block above, so it does not exist here.
        // Declare it at the method level (not inside the block) so it is in scope at the print.
    }
}
