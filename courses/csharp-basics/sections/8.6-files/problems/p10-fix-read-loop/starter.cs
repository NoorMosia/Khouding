using System;
using System.IO;

class Program
{
    static void Main()
    {
        using (var reader = new StreamReader("data.txt"))
        {
            // Bug: reads one line to check, discards it, reads another to print.
            // Every other line is silently skipped.
            while (reader.ReadLine() != null)
            {
                Console.WriteLine(reader.ReadLine());
            }
        }
    }
}
