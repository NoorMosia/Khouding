# Nested conditionals

## A decision inside a decision

The body of an `if` or an `else` is just a block, and a block can hold another `if`. When a second question
only makes sense once the first is answered, you put the second decision inside the first. The result is a
decision tree: the outer condition picks a branch, and inside that branch a further condition picks again.

```csharp
Console.WriteLine("Enter a number:");
int n = int.Parse(Console.ReadLine());
if (n > 0)
{
    if (n > 100)
    {
        Console.WriteLine("big positive");
    }
    else
    {
        Console.WriteLine("small positive");
    }
}
else
{
    Console.WriteLine("not positive");
}
```

Given the input `5`, the output is:

```
Enter a number:
small positive
```

Given the input `250`, the output is:

```
Enter a number:
big positive
```

Given the input `-4`, the output is:

```
Enter a number:
not positive
```

The outer `if` splits positive from not positive. Only inside the positive branch does the "big or small"
question get asked, because it only means something for a positive number. A `-4` never reaches the inner
check at all.

## Nesting inside one branch

You do not have to nest in every branch. Often only one branch needs a further decision, and the others stay
flat:

```csharp
Console.WriteLine("Enter a score:");
int score = int.Parse(Console.ReadLine());
if (score >= 50)
{
    if (score >= 90)
    {
        Console.WriteLine("pass with distinction");
    }
    else
    {
        Console.WriteLine("pass");
    }
}
else
{
    Console.WriteLine("fail");
}
```

Given the input `95`, the output is:

```
Enter a score:
pass with distinction
```

Given the input `70`, the output is:

```
Enter a score:
pass
```

Given the input `30`, the output is:

```
Enter a score:
fail
```

The distinction question only applies once you know the score is a pass, so it lives inside the pass branch.
The fail branch has nothing more to ask.

## Flatten or nest: when each fits

Nesting is not always the right shape. If two conditions are independent and both must simply be true, a flat
`&&` (from the previous section) is clearer. These two are equivalent:

```csharp
// nested
if (hasTicket)
{
    if (hasId)
    {
        Console.WriteLine("enter");
    }
}

// flat, same result
if (hasTicket && hasId)
{
    Console.WriteLine("enter");
}
```

When both checks are just "must be true", prefer the flat `&&`: it is shorter and reads as one condition.

Nest when the inner question only makes sense after the outer one is true, or when the branches lead to
different outputs rather than a single combined yes. Classifying a positive number as big or small is like
that: asking "is it big?" is meaningless until you know it is positive, and the not-positive case needs its
own answer. A flat `&&` cannot express "do one thing here, a different thing there". Reach for nesting when the
tree has genuinely different leaves, and flatten when it collapses to a single combined condition.

## else binds to the nearest if

When an `if` sits inside another `if` without braces, an `else` attaches to the closest unmatched `if`, not
the outer one. This is a classic source of surprise. Braces remove all doubt, so use them:

```csharp
// The else binds to the INNER if, even though the indentation suggests otherwise.
if (a)
    if (b)
        Console.WriteLine("both");
    else
        Console.WriteLine("a but not b");   // runs when a is true and b is false
```

If you meant the `else` to pair with the outer `if`, the indentation is lying to you. Always wrap the branches
in braces so the structure you see is the structure that runs:

```csharp
if (a)
{
    if (b)
    {
        Console.WriteLine("both");
    }
}
else
{
    Console.WriteLine("not a");   // now the else clearly belongs to the outer if
}
```

The rule to remember: an `else` with no braces to guide it joins the nearest `if` above it. Braces are how you
say which `if` you meant.

## When it does not compile

Nested conditions are mostly the same mechanics as a single `if`, so the errors are the familiar ones. Read
the first error, go to the line and column it names.

A missing brace is the usual cost of nesting, because every `{` now needs its matching `}`. When one is
missing, the compiler runs off the end of the file looking for it:

```
Program.cs(20,2): error CS1513: } expected
```

That means a block was opened and never closed, so the compiler reached the end of the file still expecting a
`}`. The location points near the end, not at the real culprit, so count your braces: each `if` body you open
must be closed before the enclosing block ends. Lining up each `}` under the `if` it closes makes a missing
one easy to spot.

## What you'll practise

Reasoning about decision trees: nesting an `if` inside a branch, keeping two or three levels straight, and
the judgment of when to nest versus when to flatten into a single `&&`. Twelve reps, some with Chapter 3
arithmetic inside the branches, so the tree decides and then computes. The last specialised decision form,
`switch`, is the next section.
