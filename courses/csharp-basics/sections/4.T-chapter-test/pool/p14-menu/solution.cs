using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Choose an option (1-3):");
        int choice = int.Parse(Console.ReadLine());
        switch (choice)
        {
            case 1:
                Console.WriteLine("new game");
                break;
            case 2:
                Console.WriteLine("continue");
                break;
            case 3:
                Console.WriteLine("exit");
                break;
            default:
                Console.WriteLine("invalid");
                break;
        }
    }
}
