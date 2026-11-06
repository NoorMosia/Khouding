# if / else and else if

## Choosing between two paths

A one-way `if` runs a block or skips it. Add an `else` and you choose between two blocks: exactly one of them
runs, never both, never neither.

```csharp
Console.WriteLine("Enter your age:");
int age = int.Parse(Console.ReadLine());
if (age >= 18)
{
    Console.WriteLine("adult");
}
else
{
    Console.WriteLine("minor");
}
```

Given the input `20`, the output is:

```
Enter your age:
adult
```

Given the input `15`, the output is:

```
Enter your age:
minor
```

The `else` has no condition of its own. It runs precisely when the `if` condition was false, so one of the two
lines always prints.

## More than two: else if

When there are more than two outcomes, chain `else if`. Each one has its own condition, checked in order:

```csharp
Console.WriteLine("Enter a number:");
int n = int.Parse(Console.ReadLine());
if (n > 0)
{
    Console.WriteLine("positive");
}
else if (n < 0)
{
    Console.WriteLine("negative");
}
else
{
    Console.WriteLine("zero");
}
```

Given the input `-4`, the output is:

```
Enter a number:
negative
```

Given the input `0`, the output is:

```
Enter a number:
zero
```

The conditions are tried top to bottom. `-4` fails `n > 0`, passes `n < 0`, so `negative` prints. `0` fails
both, so the final `else` catches it with `zero`.

## First true wins

In a chain, the first condition that is true runs, and every condition after it is skipped, even if one of
them would also be true. Order is part of the logic:

```csharp
Console.WriteLine("Enter a score:");
int score = int.Parse(Console.ReadLine());
if (score >= 90)
{
    Console.WriteLine("A");
}
else if (score >= 80)
{
    Console.WriteLine("B");
}
else if (score >= 70)
{
    Console.WriteLine("C");
}
else
{
    Console.WriteLine("fail");
}
```

Given the input `95`, the output is:

```
Enter a score:
A
```

A `95` satisfies `>= 90`, `>= 80`, and `>= 70`, all three. But only the first match runs, so it prints `A` and
the rest are skipped. That is why the bands are ordered from highest to lowest: the first one that fits is the
answer.

## Order matters: the wrong-order trap

If you order the bands the other way, the loosest condition catches everything first and the tighter ones
never get a chance:

```csharp
if (score >= 70)
{
    Console.WriteLine("C");
}
else if (score >= 90)
{
    Console.WriteLine("A");
}
```

Given the input `95`, the output is:

```
C
```

A `95` is clearly an A, but `score >= 70` is checked first and is true, so it prints `C` and never reaches the
A band. There is no error message: the program compiles and runs, it just classifies wrongly. When a chain
gives the wrong bucket, check the order of the conditions, tightest first.

## What you'll practise

Choosing paths: two-way `if`/`else`, multi-way `else if` chains, the first-true-wins rule, the final `else` as
a catch-all, and getting the order right so each case lands in the band you intend. Thirteen reps on picking
one path among several. Still single comparisons per condition; combining conditions with `&&` and `||` is the
next section.
