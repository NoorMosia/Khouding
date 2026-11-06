# Cheatsheet, 4.2 The if statement

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## The one-way if
```csharp
if (condition)
{
    // runs only when the condition is true
}
```
The condition is a `bool` (a comparison from 4.1, or a `bool` variable). When it is false, the block is
skipped and the program continues.

```csharp
if (n > 100)
{
    Console.WriteLine("big");   // prints only when n > 100
}
```

## Inside versus outside
Only code inside the braces is conditional. Code before or after the `if` runs no matter what:
```csharp
Console.WriteLine("Checked");     // always
if (balance < 0)
{
    Console.WriteLine("overdrawn");   // only when balance < 0
}
```

## Use the braces
C# lets you drop the braces for a single statement, but this course always uses them: the block boundary is
obvious and it avoids bugs.

## Common errors

| What you did | What happens | Fix |
|--------------|--------------|-----|
| Stray semicolon: `if (n > 100);` | `warning CS0642: Possible mistaken empty statement`; the `;` is the empty body, so the block after it always runs | remove the stray `;` so the block is the `if`'s body |
| Put an always-print line inside the `if` | it stops printing when the condition is false | move unconditional lines outside the braces |

The stray-semicolon trap is signposted: when a guarded line prints when it should not, look for a `;` right
after the condition and heed the CS0642 warning.
