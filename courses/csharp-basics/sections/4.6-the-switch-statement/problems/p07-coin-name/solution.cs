using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter coin value in cents:");
        int cents = int.Parse(Console.ReadLine());
        switch (cents)
        {
            case 1:
                Console.WriteLine("penny");
                break;
            case 5:
                Console.WriteLine("nickel");
                break;
            case 10:
                Console.WriteLine("dime");
                break;
            case 25:
                Console.WriteLine("quarter");
                break;
            default:
                Console.WriteLine("not a coin");
                break;
        }
    }
}
