using System;
using System.IO;

class Program
{
    static void Main()
    {
        int multiplier = int.Parse(Console.ReadLine());
        int sum = 0;
        using (var reader = new StreamReader("data.txt"))
        {
            string line;
            while ((line = reader.ReadLine()) != null)
            {
                sum = sum + int.Parse(line);
            }
        }
        Console.WriteLine(sum * multiplier);
    }
}
