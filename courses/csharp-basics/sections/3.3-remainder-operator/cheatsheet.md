# Cheatsheet, 3.3 The remainder operator %

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Remainder
```csharp
Console.WriteLine(7 % 3);   // 1   what is left after 3 goes into 7 twice
```
Output:
```
1
```
`%` is the remainder of whole-number division (sometimes called "mod").

## Everyday idioms
```csharp
n % 2     // 0 if n is even, 1 if n is odd   (the even/odd signal)
n % 10    // the last digit of n
n % 100   // the last two digits of n
value % size   // wraps value into the range 0 .. size - 1
```
If the number is smaller than the divisor, the whole number is the remainder: `5 % 100` is `5`.

## Pair / and % for groups and leftover
```csharp
total / groupSize   // how many FULL groups
total % groupSize   // how many are LEFT OVER
```
For `17` and `5`: `17 / 5` is `3` groups, `17 % 5` is `2` left over.

## Negatives: sign follows the dividend
```csharp
Console.WriteLine(-7 % 3);   // -1   (sign from -7, the left operand)
Console.WriteLine(7 % -3);   //  1   (sign from 7)
```
The result takes the sign of the left operand; the right operand's sign does not matter.

## Common errors

| What you did | What happens | Fix |
|--------------|--------------|-----|
| Used `/` when you wanted the leftover | prints the number of groups, not the remainder | use `%`: `total % groupSize` |
| Expected the sign to follow the divisor | `7 % -3` is `1`, not `-1` | the sign follows the dividend (left operand) |
| Remainder with a zero divisor: `n % 0` | `System.DivideByZeroException: Attempted to divide by zero.` at run time | make sure the right side of `%` is not zero |

The `/`-vs-`%` mix-up is silent: both compile and run, they just answer different questions. When you want
"what is left over", reach for `%`.
