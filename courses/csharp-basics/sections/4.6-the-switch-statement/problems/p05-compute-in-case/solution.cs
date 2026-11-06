using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter option and quantity:");
        int option = int.Parse(Console.ReadLine());
        int quantity = int.Parse(Console.ReadLine());
        switch (option)
        {
            case 1:
                Console.WriteLine(2 * quantity);
                break;
            case 2:
                Console.WriteLine(5 * quantity);
                break;
            case 3:
                Console.WriteLine(10 * quantity);
                break;
            default:
                Console.WriteLine("invalid option");
                break;
        }
    }
}
