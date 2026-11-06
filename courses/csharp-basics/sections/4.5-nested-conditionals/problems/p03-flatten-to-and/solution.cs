using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter ticket and id (0 or 1):");
        int ticket = int.Parse(Console.ReadLine());
        int id = int.Parse(Console.ReadLine());
        if (ticket == 1 && id == 1)
        {
            Console.WriteLine("enter");
        }
    }
}
