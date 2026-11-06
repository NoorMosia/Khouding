using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter logged-in and verified (0 or 1):");
        int loggedIn = int.Parse(Console.ReadLine());
        int verified = int.Parse(Console.ReadLine());
        if (loggedIn == 1)
        {
            if (verified == 1)
            {
                Console.WriteLine("go");
            }
            else
            {
                Console.WriteLine("verify");
            }
        }
        else
        {
            Console.WriteLine("login");
        }
    }
}
