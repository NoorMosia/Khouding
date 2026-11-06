using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a rank (1-3):");
        int rank = int.Parse(Console.ReadLine());
        switch (rank)
        {
            case 1:
                Console.WriteLine("gold");
                // BUG: no break here. C# rejects fall-through (CS0163). Add the missing break.
            case 2:
                Console.WriteLine("silver");
                break;
            case 3:
                Console.WriteLine("bronze");
                break;
            default:
                Console.WriteLine("none");
                break;
        }
    }
}
