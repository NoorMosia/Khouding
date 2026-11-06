# Division and the integer-division gotcha

## Whole-number division throws away the fractional part

When both sides of `/` are whole numbers, C# does **integer division**: it divides and then discards anything
after the decimal point. It does not round; it cuts.

```csharp
Console.WriteLine(7 / 2);
```

The output is:

```
3
```

Seven divided by two is `3.5`, but because `7` and `2` are both whole numbers, the `.5` is thrown away and you
get `3`. This is the trap: the code looks like it should give `3.5`, and it quietly does not. It compiles, it
runs, it just gives a whole-number answer.

## Decimal division keeps the fractional part

If either side is a `double`, C# does normal division and keeps the decimal:

```csharp
Console.WriteLine(7.0 / 2);
```

The output is:

```
3.5
```

Writing `7.0` instead of `7` makes it a `double`, and that is enough: one `double` operand switches the whole
operation to decimal division. `7.0 / 2`, `7 / 2.0`, and `7.0 / 2.0` all give `3.5`.

## Forcing a decimal result from whole-number variables

Often the values are in `int` variables, so you cannot just type `.0`. To get a decimal answer, convert one
operand to `double` first, by writing `(double)` in front of it:

```csharp
Console.WriteLine("Enter a:");
int a = int.Parse(Console.ReadLine());
Console.WriteLine("Enter b:");
int b = int.Parse(Console.ReadLine());
Console.WriteLine((double)a / b);
```

Given the input lines `7` then `2`, the output is:

```
Enter a:
Enter b:
3.5
```

`(double)a` treats `a` as a `double` just for this expression, so the division is decimal. The variable `a`
is unchanged; the conversion applies only where you wrote it.

## The subtle version of the trap

Here is the mistake that catches people who think they fixed it. Making the *result* a `double` is not enough
if the division already happened in whole numbers:

```csharp
int a = 7, b = 2;
double result = a / b;
Console.WriteLine(result);
```

The output is:

```
3
```

Not `3.5`. The right side `a / b` is computed first, both are `int`, so it truncates to `3`, and only then is
`3` stored in the `double`. The conversion came too late. You have to convert **before** the division:
`(double)a / b`.

## Negatives cut toward zero

Integer division truncates toward zero, so a negative result drops its fraction the same way:

```csharp
Console.WriteLine(-7 / 2);
```

The output is:

```
-3
```

`-7 / 2` is `-3.5`, and cutting toward zero gives `-3` (not `-4`).

## Dividing by zero

Dividing a whole number by zero is a run-time error. It is worth knowing the message:

```
System.DivideByZeroException: Attempted to divide by zero.
```

The practice problems here never feed a zero divisor, so your solutions will not hit this. But if a
calculation ever stops with that message, the divisor was zero. Guarding against it safely is a later chapter;
for now, just recognise it.

## What you'll practise

Dividing whole numbers and seeing the truncation, dividing with a `double` and keeping the decimal, forcing a
decimal result from `int` variables with `(double)`, negatives, and the two signature bugs: both operands
`int` when you wanted a decimal, and converting too late. Thirteen reps on getting division to give the answer
you actually meant.
