# Cheatsheet, 5.2 The do-while loop

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Run the body first, then check
The body runs, then the condition is tested. So a do-while always runs at least once.
```csharp
int i = 1;
do
{
    Console.WriteLine(i);
    i++;
}
while (i <= 3);        // note the trailing semicolon
```

## The one difference from while
When the condition is false at the start:
- a `while` runs the body zero times,
- a `do-while` runs it once, then stops.

```csharp
int i = 5;
do { Console.WriteLine(i); i++; } while (i <= 3);   // prints 5 (one guaranteed pass)
```

## Read-until-stop with a guaranteed first read
The read sits in the body because the loop always enters once.
```csharp
int value;
do
{
    value = int.Parse(Console.ReadLine());
    if (value != 0) { total = total + value; }   // guard keeps the stop value out
}
while (value != 0);
```

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `CS1002: ; expected` | the `while (...)` at the end of a `do` block has no semicolon | end it with `;` : `} while (cond);` |
| `CS0029: Cannot implicitly convert type 'int' to 'bool'` | the condition is a number, not a test | make it a comparison, e.g. `while (count > 0)` |
| (no error) the program hangs | the loop makes no progress toward ending | update the condition variable each pass |

The hang is silent: it compiles and runs but never stops. If a do-while does not finish, check that the body
moves the condition toward false.
