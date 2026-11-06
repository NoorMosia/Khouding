using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter op (1-4) and two numbers:");
        int op = int.Parse(Console.ReadLine());
        int a = int.Parse(Console.ReadLine());
        int b = int.Parse(Console.ReadLine());
        switch (op)
        {
            case 1:
                Console.WriteLine(a + b);
                break;
            case 2:
                Console.WriteLine(a - b);
                break;
            case 3:
                Console.WriteLine(a * b);
                break;
            case 4:
                Console.WriteLine((a + b) / 2);
                break;
            default:
                Console.WriteLine("invalid op");
                break;
        }
    }
}
