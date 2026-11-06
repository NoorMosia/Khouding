# The remainder operator %

## What is left over

Division tells you how many times one number goes into another. The remainder operator `%` tells you what is
**left over** after that:

```csharp
Console.WriteLine(7 % 3);
```

The output is:

```
1
```

Three goes into seven twice, with `1` left over. So `7 % 3` is `1`. The `%` operator is sometimes called
"mod" (short for modulo), but it is just the remainder of whole-number division.

## Even or odd

Dividing by `2` leaves a remainder of `0` for an even number and `1` for an odd one:

```csharp
Console.WriteLine(8 % 2);
Console.WriteLine(9 % 2);
```

The output is:

```
0
1
```

`n % 2` is the even-or-odd signal: `0` means even, `1` means odd. For now you just read that signal off the
remainder. Acting on it, actually choosing a different path for even and odd, needs decisions, which come in a
later chapter.

## The last digit

Dividing by `10` leaves the last digit:

```csharp
Console.WriteLine(342 % 10);
```

The output is:

```
2
```

The last digit of `342` is `2`. The same idea scales: `% 100` leaves the last two digits. If the number is
smaller than the divisor, there is nothing to take away, so the whole number is the remainder:

```csharp
Console.WriteLine(1234 % 100);
Console.WriteLine(5 % 100);
```

The output is:

```
34
5
```

## Wrapping into a range

`value % size` keeps a value inside the range `0` to `size - 1`, wrapping back to `0` when it reaches `size`.
A common use is leftover units: seconds past the last whole minute is `seconds % 60`.

```csharp
Console.WriteLine("Enter the seconds:");
int seconds = int.Parse(Console.ReadLine());
Console.WriteLine(seconds % 60);
```

Given the input `125`, the output is:

```
Enter the seconds:
5
```

`125` seconds is two full minutes and `5` seconds left over, so `125 % 60` is `5`.

## Negatives: the sign follows the left operand

With a negative number, the remainder takes the sign of the **dividend** (the left operand):

```csharp
Console.WriteLine(-7 % 3);
Console.WriteLine(7 % -3);
```

The output is:

```
-1
1
```

`-7 % 3` is `-1` (the sign comes from `-7`), and `7 % -3` is `1` (the sign comes from `7`). The sign of the
right operand does not affect the result's sign.

## Remainder by zero

Just like division, taking a remainder with a divisor of zero is a run-time error, and the message is the
same:

```
System.DivideByZeroException: Attempted to divide by zero.
```

The practice problems never use a zero divisor, so your solutions will not hit this. Recognise the message if
it ever appears: the right side of `%` was zero.

## What you'll practise

Taking remainders and using their everyday idioms: the even-or-odd signal with `% 2`, the last digit with
`% 10`, wrapping a value into a range, pairing `/` and `%` to get whole groups and the leftover together,
and the sign rule for negatives. Eleven reps on reading what is left over.
