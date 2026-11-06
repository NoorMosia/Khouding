# Cheatsheet, 4.6 The switch statement

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Match one value against constants
`switch` takes one value and jumps to the matching `case`. Each `case` is a constant; `break` ends a case;
`default` catches everything else.
```csharp
switch (day)
{
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    default:
        Console.WriteLine("unknown");
        break;
}
```

## The parts
| Part | Role |
|------|------|
| `switch (value)` | the single value being matched |
| `case X:` | run this when `value` equals the constant `X` |
| `break;` | end the case so the next one does not run |
| `default:` | the catch-all, runs when no case matched |

## Switch on a string
Works the same way; labels are string constants and the match is case-sensitive.
```csharp
switch (code)
{
    case "N": Console.WriteLine("North"); break;
    case "S": Console.WriteLine("South"); break;
    default:  Console.WriteLine("unknown"); break;
}
```

## switch vs else if
- **switch:** one value against exact constants (a menu number, a day, a code).
- **else if:** ranges and comparisons (`score >= 90`), which a `case` cannot express.

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `CS0163: Control cannot fall through from one case label (...) to another` | a non-empty `case` has no `break` | add `break;` at the end of the case body |
| `CS0029: Cannot implicitly convert type 'string' to 'int'` | a `case` label is the wrong type for the switch value | make the label the same type as the value (e.g. `case 1:` for an `int`) |
| (no error) wrong branch runs | the value did not match any `case` and fell to `default`, or a label is not the constant you meant | check the case labels against the actual input; remember the match must be exact |

The `break` and type errors are caught at compile time. A value quietly landing on `default` is silent: if a
case never fires, check that its label exactly equals the value you expect.
