# Naming and formatting

## Code is read more than it is written

Everything in this chapter already works. This section is about making it **readable**. The compiler does
not care what you name your variables or how you lay out your lines, but the people who read your code
(including you, next week) care a great deal. Two things make code readable: good **names** and clean
**formatting**.

Nothing new to run here. This is craft applied to what you already know.

## The rules for a name

A variable name (an *identifier*) has to follow three rules, or the program will not compile:

- It must start with a **letter** or an underscore, not a digit. `count2` is fine; `2count` is not.
- It can contain only **letters, digits, and underscores**, no spaces, no symbols like `$` or `-`.
- It cannot be a **reserved keyword**. You cannot name a variable `int`, `class`, or `string`, those words
  already mean something to C#.

```csharp
int count = 3;
int totalScore = 100;
int _tempValue = 7;
Console.WriteLine(count);
Console.WriteLine(totalScore);
Console.WriteLine(_tempValue);
```

Output:

```
3
100
7
```

## Convention: how C# names things

Beyond the rules, C# has a **convention**, a shared style so everyone's code looks familiar:

- **Local variables** use **camelCase**: start lowercase, capitalise each later word. `totalScore`,
  `firstName`, `itemCount`.
- **Constants and types** use **PascalCase**: capitalise every word, including the first. `DaysInWeek`,
  `MaxSpeed`.

```csharp
int itemCount = 12;
const int MaxItems = 100;
Console.WriteLine(itemCount);
Console.WriteLine(MaxItems);
```

Output:

```
12
100
```

The program runs the same whatever the capitalisation. Following the convention is how you signal, at a
glance, "this is a local" or "this is a constant" to anyone reading.

## A good name says what the value is

Legal and conventional is the floor. A *good* name also says what the value means. Compare:

```csharp
int x = 7;
int a2 = 5;
int q = x * a2;
Console.WriteLine(q);
```

```csharp
int rows = 7;
int seatsPerRow = 5;
int totalSeats = rows * seatsPerRow;
Console.WriteLine(totalSeats);
```

Output (identical for both):

```
35
```

Both print `35`. Only the second tells you it is counting seats. Naming is modeling: the name is where you
record what a value represents, so the reader does not have to guess.

## Formatting: layout is for the reader

Indentation and line breaks are also for the human, not the compiler. C# ignores them entirely. These two
programs are identical to the compiler:

```csharp
int a=2;int b=3;Console.WriteLine(a+b);
```

```csharp
int a = 2;
int b = 3;
Console.WriteLine(a + b);
```

Output (identical for both):

```
5
```

The second is the one you want: one statement per line, spaces around operators, and the body of every
block indented one step in from its braces. It runs the same; it just does not make the next reader work.

## When it does not compile

An illegal name usually shows up as the compiler asking for a name:

```
Program.cs(7,13): error CS1001: Identifier expected
```

That means what you wrote where a name should go is not a legal identifier, it starts with a digit, or it
is a reserved keyword. Rename it to something legal.

A **space** inside a name often shows up as a different, more confusing message:

```
Program.cs(7,16): error CS1002: ; expected
```

The compiler read the first word as the whole name and then did not expect a second word. The fix is the
same: make it one legal name, usually by joining the words in camelCase (`myPrice`, not `my price`).

## What you'll practise

Fixing illegal names, choosing clear and conventional names, and cleaning up messy layout so a program
reads well. The code already works; your job is to make it readable. A handful of reps to close the
chapter.
