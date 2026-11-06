using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a light colour:");
        string light = Console.ReadLine();
        switch (light)
        {
            case "red":
                Console.WriteLine("stop");
                break;
            case "green":
                Console.WriteLine("go");
                break;
            case "yellow":
                Console.WriteLine("slow");
                break;
            default:
                Console.WriteLine("off");
                break;
        }
    }
}
