# Scope

## Where a variable lives

A variable does not exist everywhere in the program. It exists only inside the block where it is declared, and
only while that block is running. For a method, that means a variable declared inside the method, and the
method's parameters, are private to that method. Nothing outside can see them.

```csharp
using System;

class Program
{
    static void Helper()
    {
        int x = 99;
        Console.WriteLine(x);
    }

    static void Main()
    {
        int x = 1;
        Console.WriteLine(x);
        Helper();
    }
}
```

The output is:

```
1
99
```

There are two variables named `x` here, and they are completely separate: one lives in `Main`, the other in
`Helper`. `Main` prints its own `x` (`1`), then calls `Helper`, which prints its own `x` (`99`). The name `x`
being reused causes no conflict, because each belongs to a different method.

## Main's variables are not visible in a helper

Because a method's variables are private to it, a helper cannot see the variables in `Main`. If a helper needs
a value from `Main`, you pass it in as an argument.

```csharp
static void PrintPlusTen(int value)
{
    Console.WriteLine(value + 10);
}

static void Main()
{
    int score = 5;
    PrintPlusTen(score);
}
```

The output is:

```
15
```

`PrintPlusTen` has no access to `Main`'s `score`. It works only with its parameter `value`, which received a
copy of `score` at the call. Trying to use `score` directly inside `PrintPlusTen` would not compile, the name
does not exist there.

## Passing a value copies it

When you pass an argument, the parameter gets a copy of the value. Changing the parameter inside the method
does not change the caller's variable. This is worth seeing directly:

```csharp
static void AddHundred(int p)
{
    p = p + 100;
    Console.WriteLine(p);
}

static void Main()
{
    int original = 5;
    AddHundred(original);
    Console.WriteLine(original);
}
```

The output is:

```
105
5
```

Inside `AddHundred`, `p` starts as a copy of `5`, becomes `105`, and prints `105`. Back in `Main`, `original`
is still `5`: the method changed its own copy, not `Main`'s variable. Values are passed by copy, so a method
cannot reach back and alter the caller's variables.

## Locals start fresh each call

A local variable is created when the method runs and gone when it returns. Each call gets its own fresh
locals; nothing carries over from a previous call.

```csharp
static void Counter()
{
    int count = 0;
    count = count + 1;
    Console.WriteLine(count);
}

static void Main()
{
    Counter();
    Counter();
}
```

The output is:

```
1
1
```

`count` is created anew each call, set to `0`, incremented to `1`, and printed. The second call does not
remember the first; it starts over. A local does not accumulate across calls.

## When it does not compile

Using a name outside the method where it was declared is an error, because the name does not exist there.

```
Program.cs(8,27): error CS0103: The name 'score' does not exist in the current context
```

That means a method referred to a variable that belongs to another method (often one of `Main`'s). The fix is
to pass the value in as a parameter, so the method has its own copy to work with.

## What you'll practise

Reasoning about where names live: a method's locals and parameters are private to it, the same name can be
reused in different methods without clashing, a helper cannot see `Main`'s variables (you pass them in),
passing a value copies it so a method cannot change the caller's variable, and locals start fresh each call.
Ten reps on scope. Next is overloading, giving several methods the same name.
