# Cheatsheet, 3.2 Division and the integer-division gotcha

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Two kinds of division
```csharp
Console.WriteLine(7 / 2);     // 3    both int: integer division, truncates
Console.WriteLine(7.0 / 2);   // 3.5  one double: keeps the decimal
```
Output:
```
3
3.5
```
- `int / int` discards the fractional part (it cuts, it does not round).
- If either operand is a `double`, the result keeps the decimal.

## Forcing a decimal from int variables
```csharp
int a = 7, b = 2;
Console.WriteLine((double)a / b);   // 3.5
```
`(double)a` converts one operand just for this expression, so the division is decimal. Do it **before** the
divide.

## The trap: converting too late
```csharp
int a = 7, b = 2;
double wrong = a / b;          // 3    a / b truncates FIRST, then widens to 3.0
double right = (double)a / b;  // 3.5  converted before dividing
Console.WriteLine(wrong);
Console.WriteLine(right);
```
Output:
```
3
3.5
```
Making the result variable a `double` is not enough. The division already happened in whole numbers.

## Negatives
```csharp
Console.WriteLine(-7 / 2);   // -3   truncates toward zero, not -4
```

## When integer division is the RIGHT tool
Whole-number division is correct when you want whole groups: `17 / 5 = 3` full groups (the 2 left over do not
make a fourth). Use a `double` only when the fraction matters (an average, a share).

## Common errors

| What you did | What happens | Fix |
|--------------|--------------|-----|
| `a / b` with both `int` when you wanted a decimal | silently truncates (`7 / 2` is `3`, not `3.5`) | convert an operand: `(double)a / b` |
| `double r = a / b;` (both `int`) | still truncates: the divide happens before the widen | convert before dividing: `(double)a / b` |
| Divided a whole number by zero | `System.DivideByZeroException: Attempted to divide by zero.` at run time | make sure the divisor is not zero |

The truncation bugs are silent: no error, just the wrong value. When a quotient is missing its decimals, check
whether both operands are whole numbers.
