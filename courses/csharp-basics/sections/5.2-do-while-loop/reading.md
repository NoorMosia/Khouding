# The do-while loop

## Run first, ask later

A `while` checks its condition before the first pass, so it can run its body zero times. Sometimes you want
the opposite: run the body once no matter what, then decide whether to repeat. That is the `do-while` loop. It
puts the body first and the condition at the end, so the body always runs at least once.

```csharp
int i = 1;
do
{
    Console.WriteLine(i);
    i++;
}
while (i <= 3);
```

The output is:

```
1
2
3
```

The body prints `i` and adds 1, then the condition `i <= 3` is tested. While it is true the loop repeats, and
once `i` reaches 4 it stops. For a count like this, the result is the same as a `while`. The difference shows
up only when the condition is false from the start.

## The one difference: a guaranteed first pass

Here is the same loop body under both forms, given a starting value that makes the condition false
immediately. First a `while`:

```csharp
int i = 5;
while (i <= 3)
{
    Console.WriteLine(i);
    i++;
}
```

The output is empty: the condition `5 <= 3` is false, so the body never runs.

Now a `do-while` with the identical body and condition:

```csharp
int i = 5;
do
{
    Console.WriteLine(i);
    i++;
}
while (i <= 3);
```

The output is:

```
5
```

The body runs once before the condition is ever checked, so it prints `5`, then the test `6 <= 3` is false
and the loop stops. That single guaranteed pass is the whole reason `do-while` exists. Reach for it when the
work must happen at least once, then maybe repeat.

## The trailing semicolon

Notice the `;` after `while (i <= 3)`. A `do-while` ends with a semicolon because the whole thing is one
statement that finishes at the condition. A plain `while` loop has no semicolon after its condition (the body
block follows it). Leaving the `do-while` semicolon off is a compile error.

## Reading until done, guaranteed once

A natural fit is "read something, act on it, and keep going until a stop value". Because you always read at
least once, the read sits naturally inside the body:

```csharp
Console.WriteLine("Enter numbers, 0 to stop:");
int total = 0;
int value;
do
{
    value = int.Parse(Console.ReadLine());
    if (value != 0)
    {
        total = total + value;
    }
}
while (value != 0);
Console.WriteLine(total);
```

Given the input `5`, `3`, `0` (one per line), the output is:

```
Enter numbers, 0 to stop:
8
```

Each pass reads a value, adds it to the total unless it is the stop value, and repeats while it is not the
stop value. The `if` guard keeps the `0` out of the total. The read happens first because a `do-while` always
enters its body once.

## When it does not compile

The `do-while`-specific slip is the missing semicolon after the closing condition. The body is fine, but the
statement is not finished where C# expects:

```
Program.cs(12,19): error CS1002: ; expected
```

That means the `while (...)` at the end of a `do` block was not followed by `;`. Add the semicolon:
`} while (i <= 3);`.

The condition still has to be a `bool`, same as any loop. A number is not a condition:

```
Program.cs(11,16): error CS0029: Cannot implicitly convert type 'int' to 'bool'
```

That means the `while (...)` test is an `int`, not a true-or-false expression. Make it a comparison, for
example `while (count > 0)`.

## What you'll practise

The run-at-least-once loop: the `do { ... } while (cond);` shape, the trailing semicolon, and above all the
guaranteed first pass that sets `do-while` apart from `while`. You will write count loops, read-until-stop
loops, and menu-style repeats, and you will see the start-false case where a `do-while` runs once but a
`while` would not run at all. Next is the `for` loop, the counted loop with its setup gathered on one line.
