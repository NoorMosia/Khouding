using System;

class Program
{
    static void Main()
    {
        const int BottlesPerCrate = 12;
        const int PricePerBottle = 3;
        int crates = 4;

        int bottles = crates * BottlesPerCrate;
        Console.WriteLine(bottles);
        Console.WriteLine(bottles * PricePerBottle);
    }
}
