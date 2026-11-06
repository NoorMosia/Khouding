using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter account flag and balance:");
        int hasAccount = int.Parse(Console.ReadLine());
        int balance = int.Parse(Console.ReadLine());
        if (hasAccount == 1)
        {
            if (balance < 0)
            {
                Console.WriteLine("overdrawn");
            }
            else
            {
                Console.WriteLine("ok");
            }
        }
        else
        {
            Console.WriteLine("no account");
        }
    }
}
