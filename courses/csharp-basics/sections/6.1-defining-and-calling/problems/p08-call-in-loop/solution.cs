using System;

class Program
{
    static void Dash()
    {
        Console.WriteLine("-");
    }

    static void Main()
    {
        Console.WriteLine("Enter a count:");
        int n = int.Parse(Console.ReadLine());
        for (int i = 1; i <= n; i++)
        {
            Console.WriteLine(i);
            Dash();
        }
    }
}
