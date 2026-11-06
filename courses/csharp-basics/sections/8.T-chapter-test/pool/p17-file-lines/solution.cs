using System;
using System.IO;

class Program
{
    static void Main()
    {
        int count = 0;
        using (var reader = new StreamReader("data.txt"))
        {
            while (reader.ReadLine() != null) count++;
        }
        Console.WriteLine(count);
    }
}
