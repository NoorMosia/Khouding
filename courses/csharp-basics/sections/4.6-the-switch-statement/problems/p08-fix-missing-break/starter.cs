using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a size code (1-3):");
        int size = int.Parse(Console.ReadLine());
        switch (size)
        {
            case 1:
                Console.WriteLine("small");
                // BUG: no break here, so this case falls into case 2.
                // C# rejects this at compile time (CS0163). Add the missing break.
            case 2:
                Console.WriteLine("medium");
                break;
            case 3:
                Console.WriteLine("large");
                break;
            default:
                Console.WriteLine("unknown");
                break;
        }
    }
}
