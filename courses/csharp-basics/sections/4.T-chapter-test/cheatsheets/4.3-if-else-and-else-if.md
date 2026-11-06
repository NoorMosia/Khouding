# Cheatsheet, 4.3 if / else and else if

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Two paths with if / else
Exactly one block runs: the `if` block when the condition is true, the `else` block when it is false.
```csharp
if (age >= 18)
{
    Console.WriteLine("adult");
}
else
{
    Console.WriteLine("minor");
}
```

## More than two: the else if chain
Chain `else if` for each extra band. The final `else` is the catch-all.
```csharp
if (n > 0)
{
    Console.WriteLine("positive");
}
else if (n < 0)
{
    Console.WriteLine("negative");
}
else
{
    Console.WriteLine("zero");     // runs only when nothing above matched
}
```

## First true wins
The chain tests conditions top to bottom and stops at the first true one. The rest are skipped, even if they
would also be true.
```csharp
if (spend >= 100) { Console.WriteLine("gold"); }    // 150 stops here
else if (spend >= 50) { Console.WriteLine("silver"); }
else { Console.WriteLine("none"); }
```
A spend of `150` satisfies both thresholds, but `gold` wins because it is first.

## Order matters
Because the first true condition wins, put the tightest condition first. A loosest-first chain catches
everything in its first band.
```csharp
// WRONG: 95 is already >= 50, so this prints "mid" and never reaches >= 90
if (score >= 50) { Console.WriteLine("mid"); }
else if (score >= 90) { Console.WriteLine("high"); }

// RIGHT: tightest first
if (score >= 90) { Console.WriteLine("high"); }
else if (score >= 50) { Console.WriteLine("mid"); }
```

## Common errors

| What you did | What happens | Fix |
|--------------|--------------|-----|
| Chain ordered loosest-first | the first wide band catches values meant for a later band; no compiler error, the label is just wrong | reorder so the tightest condition is first |
| Used a bare `else` where a guarded band was needed | the catch-all grabs values it should not (hot read as warm); no compiler error | give the band its own `else if (cond)` and keep a final `else` |
| Expected two branches to both run | only one branch of an `if`/`else` ever runs | use separate `if` statements if you truly need more than one to fire |

Both the wrong-order and the bare-else traps are silent: the program compiles and runs, but prints the wrong
answer. When a label looks plausible but wrong, check the order of the chain and whether a bare `else` is
catching too much.
