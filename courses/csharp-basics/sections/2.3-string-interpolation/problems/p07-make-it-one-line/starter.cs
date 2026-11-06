using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the temperature:");
        int temp = int.Parse(Console.ReadLine());
        // This prints the label and the value across two prints.
        // Rewrite these two lines as ONE interpolated WriteLine that prints the same thing:
        //   Temperature: <temp>
        Console.Write("Temperature: ");
        Console.WriteLine(temp);
    }
}
