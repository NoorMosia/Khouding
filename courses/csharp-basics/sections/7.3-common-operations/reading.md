# Common array operations

## From visiting to answering

In 7.2 you walked an array and printed things. Often you want one answer out of the whole array instead: the
total, the largest, how many match. Each of these is a loop that carries a running result. You already did this
in Chapter 5 with a running total over loop counters. Now the values come from an array, so you can also make
more than one pass if you need to.

## Sum

Start a total at 0, add each element:

```csharp
int[] a = { 10, 20, 30 };
int sum = 0;
foreach (int x in a)
{
    sum = sum + x;
}
Console.WriteLine(sum);
```

The output is:

```
60
```

An empty array sums to 0: the loop runs zero times and `sum` stays at its starting value.

## Average: divide, but as a double

The average is the sum divided by the count. Integer division would throw away the fraction, so cast to
`double` first:

```csharp
int[] a = { 1, 2, 4 };
int sum = 0;
foreach (int x in a)
{
    sum = sum + x;
}
double average = (double)sum / a.Length;
Console.WriteLine(average);
```

The output is:

```
2.3333333333333335
```

`(double)sum / a.Length` divides in floating point. Without the cast, `sum / a.Length` would be `2` (integer
division from Chapter 3). The average needs at least one element: dividing by a length of 0 is undefined, so
these problems state `n >= 1`.

## Maximum and minimum: seed from the first element

To find the largest, assume the first element is the largest so far, then compare every other element and
update when you find a bigger one:

```csharp
int[] a = { 4, 9, 2, 7 };
int max = a[0];
for (int i = 1; i < a.Length; i++)
{
    if (a[i] > max)
    {
        max = a[i];
    }
}
Console.WriteLine(max);
```

The output is:

```
9
```

Seed `max` from `a[0]`, not from 0. If you start at 0 and every element is negative, 0 would wrongly win. The
loop starts at index 1 because index 0 is already the seed. Minimum is the same with `<` instead of `>`. Both
need at least one element to have a first value, so `n >= 1`.

## Count matching a test

To count how many elements meet a condition, start a counter at 0 and add 1 each time the test passes:

```csharp
int[] a = { 3, 8, 1, 10 };
int count = 0;
foreach (int x in a)
{
    if (x > 5)
    {
        count = count + 1;
    }
}
Console.WriteLine(count);
```

The output is:

```
2
```

An empty array gives a count of 0.

## Search: is it there, and where

To find a target, walk with the index so you can report the position. Return the index of the first match, or
`-1` if the target is absent:

```csharp
int[] a = { 10, 20, 30 };
int target = 20;
int found = -1;
for (int i = 0; i < a.Length; i++)
{
    if (a[i] == target)
    {
        found = i;
        break;
    }
}
Console.WriteLine(found);
```

The output is:

```
1
```

`found` starts at `-1` (meaning "not seen yet"). The first match sets it to that index and `break` stops the
search. If nothing matches, `found` stays `-1`. The index is 0-based, so `20` at the second slot reports `1`.

## When it does not compile

The common mistake here is integer division where you meant floating point. This line compiles but gives the
wrong answer:

```csharp
double average = sum / a.Length;
```

With `sum = 7` and length `2`, `sum / a.Length` is computed as `int` division first (`3`), then stored in the
`double` as `3`, not `3.5`. There is no error message; the program just prints `3`. Cast one side:
`(double)sum / a.Length`.

A real compile error shows up if you try to seed `max` from the array before it exists, or index out of
bounds, both of which you saw in 7.1 and 7.2. For the operations themselves, the trap is logical, not a
compiler message: seeding `max` at 0, or forgetting the `double` cast. Check your result against a tiny
all-negative or fractional case.

## What you'll practise

Turning an array into one answer: sum, average as a double, maximum and minimum seeded from `a[0]`, counting
matches, contains and index-of search, conditional sums, multi-pass work like counting above the average, the
range, and fixing a max seeded at 0. Fourteen reps on the workhorse operations. Next is passing arrays to
methods, where arrays behave differently from the single values you passed in Chapter 6.
