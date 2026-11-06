using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter attempts:");
        int n = int.Parse(Console.ReadLine());
        int attempts = 0;
        do
        {
            attempts++;
        }
        while (attempts < n);
        Console.WriteLine(attempts);
    }
}
