using System;

class Program
{
    static void Main()
    {
        string homeTeam = "Lions";
        int homeScore = 2;
        string awayTeam = "Bears";
        int awayScore = 3;
        int totalGoals = homeScore + awayScore;

        Console.WriteLine("SCOREBOARD");
        Console.WriteLine();
        Console.Write(homeTeam);
        Console.Write("\t");
        Console.WriteLine(homeScore);
        Console.Write(awayTeam);
        Console.Write("\t");
        Console.WriteLine(awayScore);
        Console.Write("Total goals:\t");
        Console.WriteLine(totalGoals);
    }
}
