using System;
using System.IO;

class Program
{
    static void Main()
    {
        string word = Console.ReadLine();
        using (var writer = new StreamWriter("scratch.txt"))
        {
            writer.WriteLine(word.ToUpper());
        }
        using (var reader = new StreamReader("scratch.txt"))
        {
            string line;
            while ((line = reader.ReadLine()) != null)
            {
                Console.WriteLine(line);
            }
        }
    }
}
