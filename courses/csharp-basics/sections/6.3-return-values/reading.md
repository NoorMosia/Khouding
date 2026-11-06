# Return values

## The problem: the result is trapped

A `void` method that prints its result does the output and nothing more. Suppose `Square` prints the square:

```csharp
static void Square(int n)
{
    Console.WriteLine(n * n);
}
```

Now you want the sum of two squares, `5*5 + 3*3`. You cannot build it from this method: it prints `25` and
`9`, but hands nothing back, so there is no value to add. The result is trapped inside the method.

## Handing a value back

Often you want a method to compute something and give the result back to the caller, so the caller can use
it. That is a return value. You declare a return type in place of `void`, and use a `return` statement to
hand the value back. Now the caller decides what to do with it, store it, print it, or combine it:

```csharp
using System;

class Program
{
    static int Square(int n)
    {
        return n * n;
    }

    static void Main()
    {
        int result = Square(5);
        Console.WriteLine(result);
    }
}
```

The output is:

```
25
```

`Square` has return type `int`, not `void`, so it must give back an `int`. The statement `return n * n;`
computes the value and hands it back. At the call, `Square(5)` evaluates to `25`, which is stored in
`result`. A call to a returning method is an expression: it stands for the value that comes back.

## return ends the method

`return` does two things: it hands the value back, and it ends the method immediately. Any code after the
`return` that runs does not execute once a `return` is reached.

```csharp
static int Abs(int n)
{
    if (n < 0)
    {
        return -n;      // ends here for negatives
    }
    return n;           // reached only when n >= 0
}
```

For a negative `n`, the first `return` fires and the method is done; for a non-negative `n`, the method skips
that branch and reaches the second `return`. A non-`void` method must return a value on every path it can
take, or it will not compile.

## Using the returned value

Because a call is an expression, you can use it anywhere a value fits: store it, print it, or combine it in a
larger expression.

```csharp
static int Square(int n)
{
    return n * n;
}

static void Main()
{
    Console.WriteLine("Enter two numbers:");
    int a = int.Parse(Console.ReadLine());
    int b = int.Parse(Console.ReadLine());
    Console.WriteLine(Square(a) + Square(b));
}
```

Given the input `3`, `4`, the output is:

```
Enter two numbers:
25
```

`Square(3)` is `9` and `Square(4)` is `16`; the two returned values are added to `25` and printed. You never
stored them in named variables, the returned values were used directly in the expression.

## Return types other than int

A method can return any type: `double`, `string`, `bool`, and so on. The return type and the returned value
must match.

```csharp
static bool IsEven(int n)
{
    return n % 2 == 0;
}

static void Main()
{
    Console.WriteLine("Enter a number:");
    int n = int.Parse(Console.ReadLine());
    Console.WriteLine(IsEven(n));
}
```

Given the input `4`, the output is:

```
Enter a number:
True
```

`IsEven` returns a `bool`, the result of the comparison. `Main` prints it, which shows `True` or `False`.

## Return, or print?

A method can either return a value or print it. These are different jobs:

- A **returning** method hands the value back and lets the caller decide what to do with it. The caller often
  prints it, but could also store it, compare it, or pass it on.
- A **printing** method does the output itself and returns `void`. The value is gone after it is printed; the
  caller gets nothing back.

The course standard is to return a value and let `Main` print it, because a returned value is reusable. These
two produce the same output, but the first is more flexible:

```csharp
// returns, Main prints
static int Triple(int n) { return n * 3; }
// ...
Console.WriteLine(Triple(4));

// prints, returns nothing
static void PrintTriple(int n) { Console.WriteLine(n * 3); }
// ...
PrintTriple(4);
```

Both print `12`. But only the returning `Triple` lets you write `Triple(4) + Triple(5)`, because its result is
a value you can use again.

## When it does not compile

A non-`void` method must return a value on every path. If some path falls off the end without returning, C#
rejects it:

```
Program.cs(10,5): error CS0161: 'Program.Abs(int)': not all code paths return a value
```

That means the method can finish without hitting a `return`. Add a `return` for the missing path, for example
a final `return` after the `if`.

Returning the wrong type is also an error. The returned value must match the declared return type:

```
Program.cs(7,16): error CS0029: Cannot implicitly convert type 'string' to 'int'
```

That means a `return` gives a value of a type that does not match the method's return type. Return the right
type, or change the return type to match what you actually produce.

## What you'll practise

Writing methods that return a result: `int`, `double`, `bool`, and `string` return types, the `return`
statement that hands a value back and ends the method, using a returned value as an expression (storing,
printing, combining), returning early on a condition, and the choice between returning and printing. Fourteen
reps on the heart of methods. Next is scope, where a method's variables live.
