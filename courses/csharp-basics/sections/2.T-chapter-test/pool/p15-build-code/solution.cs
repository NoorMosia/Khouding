using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the prefix:");
        string prefix = Console.ReadLine();
        Console.WriteLine("Enter the number:");
        int number = int.Parse(Console.ReadLine());
        string code = prefix + "-" + number;
        Console.WriteLine(code);
    }
}
