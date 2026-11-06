using System;

class Program
{
    static void Main()
    {
        string player = "Mara";
        int goals = 9;
        int assists = 6;
        int points = goals + assists;

        Console.Write("Player:\t");
        Console.WriteLine(player);
        Console.Write("Goals:\t");
        Console.WriteLine(goals);
        Console.Write("Points:\t");
        Console.WriteLine(points);
    }
}
