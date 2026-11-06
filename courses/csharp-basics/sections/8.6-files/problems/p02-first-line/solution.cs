using System;
using System.IO;

class Program
{
    static void Main()
    {
        using (var reader = new StreamReader("data.txt"))
        {
            Console.WriteLine(reader.ReadLine());
        }
    }
}
