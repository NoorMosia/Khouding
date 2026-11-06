using System;

class Program
{
    static void Header()
    {
        Console.WriteLine("=== START ===");
    }

    static void Footer()
    {
        Console.WriteLine("=== END ===");
    }

    static void Main()
    {
        Header();
        Console.WriteLine("body");
        Footer();
    }
}
