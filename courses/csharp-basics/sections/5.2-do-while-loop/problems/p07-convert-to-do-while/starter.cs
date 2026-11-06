using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int n = int.Parse(Console.ReadLine());
        int i = 1;
        // Rewrite this while loop as a do-while with the same body.
        // Required behavior: the body runs at least once, so n = 0 must print 1.
        while (i <= n)
        {
            Console.WriteLine(i);
            i++;
        }
    }
}
