using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the balance:");
        int balance = int.Parse(Console.ReadLine());
        Console.WriteLine("Checked");
        if (balance < 0)
        {
            Console.WriteLine("overdrawn");
        }
    }
}
