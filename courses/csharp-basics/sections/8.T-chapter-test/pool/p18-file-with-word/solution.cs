using System;
using System.IO;

class Program
{
    static void Main()
    {
        string word = Console.ReadLine();
        using (var reader = new StreamReader("data.txt"))
        {
            string line;
            while ((line = reader.ReadLine()) != null)
            {
                if (line.Contains(word)) Console.WriteLine(line);
            }
        }
    }
}
