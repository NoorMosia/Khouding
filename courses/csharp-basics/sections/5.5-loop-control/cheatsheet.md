# Cheatsheet, 5.5 Loop control: break and continue

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## break: stop the loop early
Ends the loop at once. The rest of the body and all remaining passes are skipped.
```csharp
for (int i = 1; i <= n; i++)
{
    int value = int.Parse(Console.ReadLine());
    if (value < 0)
    {
        Console.WriteLine("found a negative");
        break;              // leave the loop now
    }
}
```

## continue: skip to the next pass
Skips the rest of the current pass; the loop keeps going. In a `for`, the update still runs.
```csharp
for (int i = 1; i <= n; i++)
{
    int value = int.Parse(Console.ReadLine());
    if (value <= 0) { continue; }   // skip non-positive values
    total = total + value;
}
```

## break vs continue
| Want to... | Use |
|------------|-----|
| stop looking entirely | `break` |
| skip this one, keep going | `continue` |

Both compile either way, so a wrong choice is a silent logic bug. Read the output to catch it.

## break out of a while (true)
`while (true)` never ends on its own; a reachable `break` is the only exit.
```csharp
while (true)
{
    int value = int.Parse(Console.ReadLine());
    if (value == 0) { break; }   // the only way out
    total = total + value;
}
```

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `CS0139: No enclosing loop out of which to break or continue` | a `break` or `continue` is outside any loop | move it inside the loop body, or remove it |
| (no error) stops when it should skip | `break` used where `continue` was meant | use `continue` to skip one and keep looping |
| (no error) the program hangs | a `while (true)` whose `break` is never reached | make sure the exit condition can actually happen |

The break-vs-continue mix-up and the unreachable-break hang are silent. If a loop ends too early, check for a
`break` that should be a `continue`; if it never ends, check that the `break` is reachable.
