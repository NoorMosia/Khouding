using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter income, age, employed (0 or 1):");
        int income = int.Parse(Console.ReadLine());
        int age = int.Parse(Console.ReadLine());
        int employed = int.Parse(Console.ReadLine());
        if (income >= 2000 && age >= 21 && age <= 65 && employed == 1)
        {
            Console.WriteLine("approved");
        }
        else
        {
            Console.WriteLine("declined");
        }
    }
}
