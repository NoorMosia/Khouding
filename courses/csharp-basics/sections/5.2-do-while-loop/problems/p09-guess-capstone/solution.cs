using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Enter the secret, then guesses:");
        int secret = int.Parse(Console.ReadLine());
        int guesses = 0;
        int guess;
        do
        {
            guess = int.Parse(Console.ReadLine());
            guesses++;
        }
        while (guess != secret);
        Console.WriteLine(guesses);
    }
}
