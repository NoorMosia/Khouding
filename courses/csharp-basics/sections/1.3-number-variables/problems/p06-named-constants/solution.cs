using System;

class Program
{
    static void Main()
    {
        const int BottlesPerCrate = 12;
        const int PricePerBottle = 2;

        int crates = int.Parse(Console.ReadLine());
        int bottles = crates * BottlesPerCrate;
        Console.WriteLine(bottles);
        Console.WriteLine(bottles * PricePerBottle);
    }
}
