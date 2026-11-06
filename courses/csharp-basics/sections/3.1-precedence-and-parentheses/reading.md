# Precedence and parentheses

## Operators apply in an order

When an expression has more than one operator, C# does not simply work left to right. It applies some
operators before others. Multiplication, division, and remainder (`*`, `/`, `%`) are applied before addition
and subtraction (`+`, `-`):

```csharp
Console.WriteLine(2 + 3 * 4);
```

The output is:

```
14
```

The `3 * 4` is done first (giving `12`), then `2 +` that. The result is `14`, not `20`. This ordering is
called precedence: `*`, `/`, and `%` have higher precedence than `+` and `-`, so they bind to their operands
first.

## Parentheses override the order

To force a different order, group the part you want done first in parentheses:

```csharp
Console.WriteLine((2 + 3) * 4);
```

The output is:

```
20
```

Now `2 + 3` is done first (giving `5`), then `* 4`. Parentheses always win: whatever is inside them is
evaluated before it is used by anything outside. They are how you say exactly what you mean when the default
order is not what you want.

## Equal precedence goes left to right

When operators have the same precedence, C# applies them left to right:

```csharp
Console.WriteLine(10 - 4 + 3);
```

The output is:

```
9
```

`+` and `-` have equal precedence, so this is `(10 - 4) + 3`, which is `9`. It is not `10 - (4 + 3)`, which
would be `3`. The same holds for `*`, `/`, and `%` among themselves: left to right.

```csharp
Console.WriteLine(100 / 10 / 2);
```

The output is:

```
5
```

That is `(100 / 10) / 2`, which is `10 / 2`, which is `5`.

## Reading a mixed expression

Put the two rules together and you can read any expression. Higher-precedence operators first, then left to
right among equals:

```csharp
Console.WriteLine(20 - 2 * 5);
```

The output is:

```
10
```

The `2 * 5` is done first (`10`), then `20 - 10`. When you are unsure, add parentheses: they do not change a
result that was already going to happen that way, and they make your intent plain to the next reader.

## When the answer is wrong but the program is not broken

Precedence mistakes are quiet. An expression with the operators in the wrong order still compiles and still
runs; it just produces the wrong number. There is no error message to read, because nothing is broken as far
as the compiler is concerned:

```csharp
Console.WriteLine(2 + 3 * 4);   // meant (2 + 3) * 4, expected 20
```

The output is:

```
14
```

No error, just `14` where you wanted `20`. This is the danger of precedence: the fix is not chasing a compiler
message, it is checking the order yourself and adding the parentheses you meant. When a calculation comes out
wrong, precedence is one of the first things to check.

## What you'll practise

Reading and controlling evaluation order: predicting a mixed expression's value, using parentheses to force
the order you want, computing formulas from input where `*` binds before `+`, the left-to-right rule among
equal operators, and fixing a result that is wrong because the parentheses are missing. Ten reps on saying
exactly what you mean in an expression.
