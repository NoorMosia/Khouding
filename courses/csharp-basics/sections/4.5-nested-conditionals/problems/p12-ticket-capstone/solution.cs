using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter age and weekend flag (0 or 1):");
        int age = int.Parse(Console.ReadLine());
        int weekend = int.Parse(Console.ReadLine());
        if (age < 5)
        {
            Console.WriteLine("free");
        }
        else if (age <= 17)
        {
            if (weekend == 1)
            {
                Console.WriteLine("child weekend");
            }
            else
            {
                Console.WriteLine("child weekday");
            }
        }
        else
        {
            if (weekend == 1)
            {
                Console.WriteLine("adult weekend");
            }
            else
            {
                Console.WriteLine("adult weekday");
            }
        }
    }
}
