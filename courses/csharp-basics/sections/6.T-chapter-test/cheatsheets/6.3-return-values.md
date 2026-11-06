# Cheatsheet, 6.3 Return values

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Return a value
Replace `void` with a return type, and use `return` to hand a value back.
```csharp
static int Square(int n)
{
    return n * n;        // hands back the value and ends the method
}
int r = Square(5);       // r is 25
```

## A call is an expression
A call to a returning method stands for the value that comes back. Use it anywhere a value fits.
```csharp
Console.WriteLine(Square(3) + Square(4));   // 9 + 16 = 25
```

## return ends the method
`return` hands the value back and stops the method. Code after a taken `return` does not run.
```csharp
static int Abs(int n)
{
    if (n < 0) { return -n; }   // ends here for negatives
    return n;                   // every path must return
}
```

## Return types
Any type: `int`, `double`, `bool`, `string`. The returned value must match the declared return type.
```csharp
static bool IsEven(int n) { return n % 2 == 0; }   // prints True / False
```

## Return or print?
- **return**: hand the value back; the caller decides (reusable). Course standard.
- **print**: do the output in the method; return `void`; nothing comes back.

`Triple(4) + Triple(5)` only works if `Triple` returns its result.

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `CS0161: '...': not all code paths return a value` | a non-void method can finish without a `return` | add a `return` for the missing path (often a final one after the `if`) |
| `CS0029: Cannot implicitly convert type '...' to '...'` | a `return` value does not match the declared return type | return the right type, or change the return type to match |

Returning is more flexible than printing: a returned value can be stored, compared, combined, or passed on.
