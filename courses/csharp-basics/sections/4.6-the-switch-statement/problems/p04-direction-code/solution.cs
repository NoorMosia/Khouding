using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a direction code (N, E, S, W):");
        string code = Console.ReadLine();
        switch (code)
        {
            case "N":
                Console.WriteLine("North");
                break;
            case "E":
                Console.WriteLine("East");
                break;
            case "S":
                Console.WriteLine("South");
                break;
            case "W":
                Console.WriteLine("West");
                break;
            default:
                Console.WriteLine("unknown");
                break;
        }
    }
}
