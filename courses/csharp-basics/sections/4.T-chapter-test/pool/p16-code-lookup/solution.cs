using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a currency code:");
        string code = Console.ReadLine();
        switch (code)
        {
            case "GBP":
                Console.WriteLine("British Pound");
                break;
            case "USD":
                Console.WriteLine("US Dollar");
                break;
            case "EUR":
                Console.WriteLine("Euro");
                break;
            default:
                Console.WriteLine("unknown");
                break;
        }
    }
}
