using System;
using System.IO;

class Program
{
    static void Main()
    {
        char sep = Console.ReadLine()[0];
        using (var reader = new StreamReader("data.txt"))
        {
            string line;
            while ((line = reader.ReadLine()) != null)
            {
                Console.WriteLine(line.Split(sep).Length);
            }
        }
    }
}
