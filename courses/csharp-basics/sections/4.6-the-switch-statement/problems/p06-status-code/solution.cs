using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a status code:");
        int code = int.Parse(Console.ReadLine());
        switch (code)
        {
            case 200:
                Console.WriteLine("ok");
                break;
            case 404:
                Console.WriteLine("not found");
                break;
            default:
                Console.WriteLine("other");
                break;
        }
    }
}
