# The switch statement

## One value against several options

Some decisions are not ranges or combined conditions, they are a single value matched against a list of known
options: a menu choice, a day number, a status code. You can write this as a long `else if` chain that keeps
testing the same variable, but C# has a cleaner form built for exactly this shape. A `switch` takes one value
and jumps to the matching `case`.

```csharp
Console.WriteLine("Enter a day number (1-7):");
int day = int.Parse(Console.ReadLine());
switch (day)
{
    case 1:
        Console.WriteLine("Monday");
        break;
    case 2:
        Console.WriteLine("Tuesday");
        break;
    default:
        Console.WriteLine("unknown");
        break;
}
```

Given the input `2`, the output is:

```
Enter a day number (1-7):
Tuesday
```

Given the input `9`, the output is:

```
Enter a day number (1-7):
unknown
```

The value in `switch (day)` is compared against each `case` label. `2` matches `case 2`, so `Tuesday` prints.
A value that matches no case falls to `default`, which is why `9` prints `unknown`.

## The parts

A `switch` has three moving parts:

- Each `case X:` is a constant to match against. The value must equal `X` exactly.
- `break;` ends a case. It stops the switch so the next case does not run.
- `default:` is the catch-all, it runs when no case matched. Give it a `break` too.

Every case here needs its own `break`. Unlike some languages, C# does not let one case silently run into the
next, you will see shortly that leaving out a `break` is a compile error, not a surprise at run time.

## Switching on a string

The value does not have to be a number. A `switch` works on a `string` too, matching against string
constants:

```csharp
Console.WriteLine("Enter a direction code:");
string code = Console.ReadLine();
switch (code)
{
    case "N":
        Console.WriteLine("North");
        break;
    case "S":
        Console.WriteLine("South");
        break;
    default:
        Console.WriteLine("unknown");
        break;
}
```

Given the input `N`, the output is:

```
Enter a direction code:
North
```

Given the input `X`, the output is:

```
Enter a direction code:
unknown
```

The matching is case-sensitive: `case "N"` matches `N` but not `n`. An unmatched code lands on `default`.

## switch or else if

A `switch` and an `else if` chain can often do the same job. Reach for a `switch` when you are testing one
value against a set of constant options, it reads as a clean table of cases. Stay with `else if` when the
conditions are ranges or comparisons (`score >= 90`), because a `case` can only match an exact constant, not a
range. The `switch` above is equivalent to:

```csharp
if (day == 1) { Console.WriteLine("Monday"); }
else if (day == 2) { Console.WriteLine("Tuesday"); }
else { Console.WriteLine("unknown"); }
```

Both are correct. The `switch` is the tidier choice when every test is "is this value equal to a constant".

## When it does not compile

The switch-specific mistake is forgetting a `break`. In C#, control cannot fall from one non-empty case into
the next, so a missing `break` is caught at compile time:

```
Program.cs(10,13): error CS0163: Control cannot fall through from one case label ('case 1:') to another
```

That means the case starting at that line has no `break` (or other exit) before the next `case`. Add a
`break;` at the end of the case body. This is friendlier than it looks: the compiler stops a whole class of
bug that silently runs the wrong case in other languages.

A label that does not match the switch value's type will not compile either. Switching on an `int` but writing
a string case is a type mismatch:

```
Program.cs(11,18): error CS0029: Cannot implicitly convert type 'string' to 'int'
```

That means a `case` label is the wrong type for the value in `switch (...)`. Make the label the same type as
the value, for example `case 1:` when switching on an `int`.

## What you'll practise

Matching one value against constant cases: numeric and string switches, `break` to end each case, `default`
as the catch-all, computing inside a case, and converting an equality-only `else if` chain into a `switch`.
Ten reps on the clean multi-way form. That closes the decisions chapter, next comes the chapter test, where
all of 4.1 through 4.6 combine.
