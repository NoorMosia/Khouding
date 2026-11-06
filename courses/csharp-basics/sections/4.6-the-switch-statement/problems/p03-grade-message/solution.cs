using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter a grade (A, B, C, F):");
        string grade = Console.ReadLine();
        switch (grade)
        {
            case "A":
                Console.WriteLine("excellent");
                break;
            case "B":
                Console.WriteLine("good");
                break;
            case "C":
                Console.WriteLine("pass");
                break;
            case "F":
                Console.WriteLine("fail");
                break;
            default:
                Console.WriteLine("invalid grade");
                break;
        }
    }
}
