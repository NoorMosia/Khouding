# Number variables: int and double

## What a variable is

A variable is a named place that holds a value. You give it a name, you put a value in it, and whenever you
use the name you get whatever value it currently holds. You can give it a new value later; the old one is
replaced.

This section works with variables that hold **numbers**.

## Two kinds of number

C# makes you say *what kind* of number a variable holds. Two you will use constantly:

- **`int`** is a whole number. No fractional part. Ages, counts, how many times something happened. `0`,
  `42`, `-7`.
- **`double`** is a number that can have a decimal part. Prices, measurements, averages. `3.14`, `4.99`,
  `-0.5`.

The decision you make every time: **can this value ever need a fractional part?** If yes, `double`. If it
is always a whole thing you count, `int`.

> A count of students is an `int`. You never have 3.5 students.
> A height in metres is a `double`. 1.72 is a perfectly normal height.

### What a "type" really is

Saying `int` or `double` is choosing a *type*: the set of values the variable can hold. The two differ in
two ways worth knowing now:

- **Range.** An `int` holds whole numbers up to about two billion in each direction. A `double` reaches
  vastly larger (and smaller) values.
- **Precision.** An `int` is exact. A `double` is **approximate**: it trades perfect accuracy for that huge
  range, so some decimals are stored a hair off. You will occasionally see `0.1 + 0.2` print as
  `0.30000000000000004`. That is normal for `double`, not a bug. File it away; it matters later.

## Declaring and initialising

To make a variable: write its **type**, then its **name**, then a starting value.

```csharp
int age = 19;
double price = 4.99;
Console.WriteLine(age);
Console.WriteLine(price);
```

Output:

```
19
4.99
```

Read `int age = 19;` left to right: "make an `int` called `age`, and put `19` in it." The `=` does **not**
mean "equals" in the maths sense. It means **put this value into this variable**. Say it in your head as
"age *gets* 19", never "age *equals* 19". That misreading is the most common beginner trap.

## Reassigning

You can give an existing variable a new value. Do not repeat the type; the variable already exists.

```csharp
int score = 10;
score = 25;
Console.WriteLine(score);
```

Output:

```
25
```

Only the *first* mention needs the type (that is when the variable is created). After that, just the name.
The old `10` is gone.

## A value that never changes: const

Sometimes a value should never change once set, a fixed rate, a count of days in a week. Mark it `const`
and C# will stop you (or anyone) from reassigning it by mistake.

```csharp
const int DaysInWeek = 7;
int weeks = 3;
Console.WriteLine(weeks * DaysInWeek);
```

Output:

```
21
```

A `const` also gives a bare number a *name*. `weeks * 7` works, but `weeks * DaysInWeek` says what the `7`
means. Named constants make code read for itself.

## Using numbers together

Once numbers are in variables, combine them with `+`, `-`, and `*`.

```csharp
int apples = 3;
int oranges = 5;
int total = apples + oranges;
Console.WriteLine(total);
```

Output:

```
8
```

That is the whole arithmetic toolkit for now: add, subtract, multiply. (Division has a surprise in it, so
it waits for the next chapter, where it gets the room it needs.)

## When it does not compile

Two errors you may meet here.

If you put a decimal into an `int`:

```
Program.cs(7,21): error CS0266: Cannot implicitly convert type 'double' to 'int'. An explicit conversion exists (are you missing a cast?)
```

`int` holds whole numbers only, so `int price = 4.99;` is rejected. If the value can be fractional, make
the variable a `double`.

If you use a variable before putting anything in it:

```
Program.cs(8,27): error CS0165: Use of unassigned local variable 'total'
```

You declared the variable but never gave it a value. Assign one before you read from it.

## What you'll practise

Declaring and initialising `int`s and `double`s, choosing the right type, reassigning, naming fixed values
with `const`, and combining numbers with `+`, `-`, and `*`. Fifteen reps. Wax on, wax off.
