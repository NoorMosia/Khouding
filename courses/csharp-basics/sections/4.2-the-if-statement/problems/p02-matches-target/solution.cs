using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the code:");
        int code = int.Parse(Console.ReadLine());
        if (code == 1234)
        {
            Console.WriteLine("match");
        }
    }
}
