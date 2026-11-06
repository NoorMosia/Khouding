using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter x:");
        int x = int.Parse(Console.ReadLine());
        Console.WriteLine("Enter y:");
        int y = int.Parse(Console.ReadLine());
        // Rewrite this long form using the compound shorthand (+=), same result:
        x = x + y;
        Console.WriteLine(x);
    }
}
