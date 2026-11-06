# Cheatsheet, 2.1 Reading input

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Read a line
```csharp
string name = Console.ReadLine();   // reads one line, gives a string
```
Each `ReadLine()` reads the **next** line of input.

## Prompt, then read
```csharp
Console.WriteLine("Enter your name:");   // prompt on its own line
string name = Console.ReadLine();
Console.WriteLine(name);
```

## How input works here
- Input is **supplied up front** and read line by line. You do not type live while the program runs.
- Your output is exactly what your program **prints** (the prompt, then whatever you write out). The input
  is not echoed onto the screen.

## Gotcha: input is always a string
```csharp
string s = Console.ReadLine();   // even if the line is "25", s is the text "25"
```
You cannot do arithmetic on it yet. Turning input into a number is section 2.2.
