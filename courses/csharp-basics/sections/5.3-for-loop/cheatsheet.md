# Cheatsheet, 5.3 The for loop

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## A counted loop on one line
Three parts in the header, separated by two semicolons.
```csharp
for (int i = 1; i <= 3; i++)
{
    Console.WriteLine(i);
}
```
- **init** `int i = 1` runs once, before the loop.
- **condition** `i <= 3` checked before each pass (true runs the body).
- **update** `i++` runs after each pass.

Order: init, then (condition, body, update) repeating until the condition is false.

## A for is a while
```csharp
for (int i = 1; i <= 3; i++) { ... }
// same as:
int i = 1;
while (i <= 3) { ...; i++; }
```

## Count up, down, step
```csharp
for (int i = 5; i >= 1; i--)      // 5 4 3 2 1
for (int i = 0; i <= 10; i += 2)  // 0 2 4 6 8 10
```

## Zero passes
A false-at-start condition runs the body zero times.
```csharp
for (int i = 1; i <= 0; i++) { ... }   // never runs
```

## The count pattern: process n values
```csharp
int total = 0;
for (int i = 0; i < n; i++)
{
    int value = int.Parse(Console.ReadLine());
    total = total + value;              // accumulate
}
```

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `CS1002: ; expected` | the header parts are not separated by semicolons (a comma slipped in, or one is missing) | use `for (init; condition; update)` with exactly two `;` |
| `CS0029: Cannot implicitly convert type 'int' to 'bool'` | the middle part is a number, not a test | make it a comparison, e.g. `i <= n` |
| (no error) off by one | the bound uses `<` where `<=` was meant (or the reverse), so the loop runs one too few or too many | check whether the last value should be included and pick `<` or `<=` accordingly |

The off-by-one is silent: it compiles and runs, just with the wrong number of passes. When a count is one off,
check the condition's `<` versus `<=` and the init value.
