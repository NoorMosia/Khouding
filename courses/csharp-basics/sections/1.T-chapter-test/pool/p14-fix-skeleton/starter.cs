using System;

class Program
{
    static void Main()
    {
        // BUG: this program is missing something structural and will not compile.
        // Fix it so it prints the two lines below.
        int price = 20;
        int quantity = 3
        Console.WriteLine(price);
        Console.WriteLine(price * quantity);
    }
}
