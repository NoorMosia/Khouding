# Cheatsheet, 5.1 The while loop

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Repeat while a condition is true
The condition is a `bool`, checked before each pass. True runs the body; false ends the loop.
```csharp
int i = 1;
while (i <= 3)
{
    Console.WriteLine(i);
    i++;            // progress: moves the condition toward false
}
```

## Make progress, or it never ends
Each pass must change something the condition depends on. No progress means an infinite loop (the program
hangs). If a program never stops, check that the loop updates its condition.

## A while can run zero times
Because the condition is tested first, a false condition at the start skips the body entirely.
```csharp
int i = 5;
while (i <= 3) { ... }   // body never runs
```

## The count pattern: do something n times
Read a count, run a counter from 1 to n, work each pass.
```csharp
int total = 0;
int i = 1;
while (i <= n)
{
    total = total + i;   // accumulator: lives outside the loop, grows each pass
    i++;
}
```

## The sentinel pattern: loop until a stop value
Read one value before the loop, the next at the end of the body. The sentinel stops the loop and is not
processed.
```csharp
int value = int.Parse(Console.ReadLine());
while (value != 0)       // 0 is the sentinel
{
    total = total + value;
    value = int.Parse(Console.ReadLine());
}
```

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `CS0029: Cannot implicitly convert type 'int' to 'bool'` | the condition is a number, not a test | make it a comparison, e.g. `while (n > 0)` |
| `CS1023: Embedded statement cannot be a declaration or labeled statement` | a brace-less `while` body tries to declare a variable | add braces `{ }` around the body |
| (no error) the program hangs | the loop makes no progress (counter never updated, condition never changes) | update the condition variable each pass so it reaches false |

The hang is silent: it compiles and runs, it just never stops. When a program does not finish, look first at
whether the loop's condition can ever become false.
