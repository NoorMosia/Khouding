using System;

class Program
{
    static void Line()
    {
        Console.WriteLine("----");
    }

    static void Box()
    {
        Line();
        Console.WriteLine("| hi |");
        Line();
    }

    static void Main()
    {
        Box();
    }
}
