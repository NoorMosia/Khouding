using System;

class Program
{
    static void Announce()
    {
        Console.WriteLine("ready");
    }

    static void Main()
    {
        // BUG: Announce is defined above but never called, so nothing prints.
        // Add the call.
    }
}
