using System;

class Program
{
    static void Main()
    {
        int choice;
        do
        {
            Console.WriteLine("Pick (1-3, 0 quit):");
            choice = int.Parse(Console.ReadLine());
            if (choice == 1)
            {
                Console.WriteLine("one");
            }
            else if (choice == 2)
            {
                Console.WriteLine("two");
            }
            else if (choice == 3)
            {
                Console.WriteLine("three");
            }
            else if (choice == 0)
            {
                Console.WriteLine("bye");
            }
            else
            {
                Console.WriteLine("unknown");
            }
        }
        while (choice != 0);
    }
}
