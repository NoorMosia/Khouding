using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter ticket and id (0 or 1):");
        int ticket = int.Parse(Console.ReadLine());
        int id = int.Parse(Console.ReadLine());
        // This nested version works. Rewrite it as ONE if using &&.
        if (ticket == 1)
        {
            if (id == 1)
            {
                Console.WriteLine("enter");
            }
        }
    }
}
