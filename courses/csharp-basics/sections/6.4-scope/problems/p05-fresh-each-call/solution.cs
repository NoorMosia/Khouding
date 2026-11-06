using System;

class Program
{
    static void Counter()
    {
        int count = 0;
        count = count + 1;
        Console.WriteLine(count);
    }

    static void Main()
    {
        Counter();
        Counter();
    }
}
