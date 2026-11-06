using System;

class Program
{
    static void Main()
    {
        int choice;
        do
        {
            Console.WriteLine("Menu: 1=start 2=load 3=save 4=quit");
            choice = int.Parse(Console.ReadLine());
            if (choice == 1)
            {
                Console.WriteLine("start");
            }
            else if (choice == 2)
            {
                Console.WriteLine("load");
            }
            else if (choice == 3)
            {
                Console.WriteLine("save");
            }
            else if (choice == 4)
            {
                Console.WriteLine("bye");
            }
            else
            {
                Console.WriteLine("unknown");
            }
        }
        while (choice != 4);
    }
}
