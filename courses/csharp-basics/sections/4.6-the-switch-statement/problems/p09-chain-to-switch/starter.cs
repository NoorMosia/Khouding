using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a light colour:");
        string light = Console.ReadLine();
        // Rewrite this equality-only else-if chain as a switch with the same behaviour.
        if (light == "red")
        {
            Console.WriteLine("stop");
        }
        else if (light == "green")
        {
            Console.WriteLine("go");
        }
        else if (light == "yellow")
        {
            Console.WriteLine("slow");
        }
        else
        {
            Console.WriteLine("off");
        }
    }
}
