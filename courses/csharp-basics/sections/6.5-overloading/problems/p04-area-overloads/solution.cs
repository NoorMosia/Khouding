using System;

class Program
{
    static int Area(int side)
    {
        return side * side;
    }

    static int Area(int width, int height)
    {
        return width * height;
    }

    static void Main()
    {
        Console.WriteLine("Enter side, width, height:");
        int side = int.Parse(Console.ReadLine());
        int width = int.Parse(Console.ReadLine());
        int height = int.Parse(Console.ReadLine());
        Console.WriteLine(Area(side));
        Console.WriteLine(Area(width, height));
    }
}
