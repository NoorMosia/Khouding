using System;
using System.IO;

class Program
{
    static void Main()
    {
        using (var reader = new StreamReader("data.txt"))
        {
            string line;
            while ((line = reader.ReadLine()) != null)
            {
                Console.WriteLine(line);
            }
        }
    }
}
