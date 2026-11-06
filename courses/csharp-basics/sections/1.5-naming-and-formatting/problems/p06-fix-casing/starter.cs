using System;

class Program
{
    static void Main()
    {
        // This works, but the casing breaks convention:
        //   a local should be camelCase, a const should be PascalCase.
        // Fix the casing (keep the meaning). The output must not change.
        const int daysInWeek = 7;
        int Weeks = int.Parse(Console.ReadLine());
        Console.WriteLine(Weeks * daysInWeek);
    }
}
