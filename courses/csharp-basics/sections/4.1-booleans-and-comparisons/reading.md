# Booleans and comparisons

## A bool is a yes-or-no value

You met `bool` briefly in Chapter 1: a type with exactly two values, `true` and `false`. Until now it had
little to do. This chapter is where it earns its place, because every decision a program makes comes down to a
`bool`.

```csharp
bool ready = true;
Console.WriteLine(ready);
```

The output is:

```
True
```

Notice the output is `True` with a capital T. That is how C# prints a `bool`: the values are written `true`
and `false` in your code, but printed as `True` and `False`.

## Comparisons produce a bool

You rarely write `true` or `false` by hand. Instead you ask a question about some values, and the answer is a
`bool`. The comparison operators ask those questions:

| Operator | Question |
|----------|----------|
| `==` | are they equal? |
| `!=` | are they not equal? |
| `<`  | is the left less than the right? |
| `>`  | is the left greater than the right? |
| `<=` | less than or equal? |
| `>=` | greater than or equal? |

Each one is an expression that evaluates to a `bool`:

```csharp
Console.WriteLine(5 > 3);
Console.WriteLine(5 == 3);
```

The output is:

```
True
False
```

`5 > 3` works out to `True`, and `5 == 3` works out to `False`. A comparison is just a value, the same way
`2 + 3` is a value; its type happens to be `bool`.

## Storing the answer

Because a comparison is a value, you can store it in a `bool` variable and use it later:

```csharp
Console.WriteLine("Enter your age:");
int age = int.Parse(Console.ReadLine());
bool isAdult = age >= 18;
Console.WriteLine(isAdult);
```

Given the input `20`, the output is:

```
Enter your age:
True
```

`age >= 18` is checked once and its answer, `True`, is kept in `isAdult`. Naming the condition like this makes
code read clearly, and it is how you will feed decisions in the next sections.

## The boundary

`>=` and `<=` include the boundary value; `>` and `<` do not. This matters exactly on the edge:

```csharp
Console.WriteLine(18 >= 18);
Console.WriteLine(18 > 18);
```

The output is:

```
True
False
```

`18 >= 18` is `True` (equal counts), but `18 > 18` is `False` (strictly greater does not). Picking the right
one of `>` and `>=` is often the difference between a correct and an off-by-one program.

## `==` compares, `=` assigns

This is the trap to watch. A single `=` **assigns** a value; a double `==` **compares**. They are different
operators that look almost the same:

```csharp
int a = 5;      // assignment: put 5 into a
bool same = a == 5;   // comparison: is a equal to 5?
Console.WriteLine(same);
```

The output is:

```
True
```

If you mean to compare but write a single `=`, C# usually catches it. Writing `bool result = a = b;` (where
`a` and `b` are `int`) tries to assign `b` into `a` and then store that `int` in a `bool`, which does not
typecheck:

```
Program.cs(5,19): error CS0029: Cannot implicitly convert type 'int' to 'bool'
```

The fix is the comparison operator, `==`. When you see CS0029 mentioning `int` and `bool` on a line where you
meant to compare, you almost certainly wrote `=` where you needed `==`.

## What you'll practise

Producing booleans and reading them: the six comparison operators, storing a comparison in a `bool`, the
boundary behaviour of `>=` and `<=`, and keeping `==` (compare) apart from `=` (assign). Twelve reps on the
values that drive every decision in this chapter. No `if` yet, that is the next section; here you just make
the booleans.
