using System;
using System.IO;

class Program
{
    static void Main()
    {
        string longest = null;
        using (var reader = new StreamReader("data.txt"))
        {
            string line;
            while ((line = reader.ReadLine()) != null)
            {
                if (longest == null || line.Length > longest.Length)
                {
                    longest = line;
                }
            }
        }
        Console.WriteLine(longest);
    }
}
