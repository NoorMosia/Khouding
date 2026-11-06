# Combining conditions

## One condition is often not enough

A single comparison answers one question. Real decisions usually depend on more than one. Is the applicant an
adult *and* a member? Is the number too small *or* too large? For these you join comparisons together with the
logical operators `&&` (and), `||` (or), and `!` (not). Each takes booleans and produces a `bool`, so the
result still slots straight into an `if` or a `bool` variable.

## && is true only when both are

`&&` reads "and". The whole expression is `true` only when the condition on its left *and* the condition on
its right are both true. If either side is false, the result is false.

```csharp
Console.WriteLine(true && true);
Console.WriteLine(true && false);
Console.WriteLine(false && false);
```

The output is:

```
True
False
False
```

In practice both sides are comparisons, not bare booleans. A classic use is a range check, where a value must
clear a lower bound and stay under an upper one:

```csharp
Console.WriteLine("Enter your age:");
int age = int.Parse(Console.ReadLine());
bool working = age >= 18 && age < 65;
Console.WriteLine(working);
```

Given the input `40`, the output is:

```
Enter your age:
True
```

`40 >= 18` is true and `40 < 65` is true, so both sides hold and `working` is `True`. An age of `70` would
fail the second half, and the whole thing would be `False`.

## || is true when either is

`||` reads "or". The expression is `true` when at least one side is true. It is false only when both sides are
false.

```csharp
Console.WriteLine(true || false);
Console.WriteLine(false || false);
Console.WriteLine(true || true);
```

The output is:

```
True
False
True
```

Where `&&` narrows (both must hold), `||` widens (any one is enough). An out-of-range test is the natural
partner to the range check above: a value is out of range when it is below the low bound *or* above the high
one.

```csharp
Console.WriteLine("Enter a number:");
int n = int.Parse(Console.ReadLine());
bool outOfRange = n < 10 || n > 20;
Console.WriteLine(outOfRange);
```

Given the input `25`, the output is:

```
Enter a number:
True
```

`25 < 10` is false, but `25 > 20` is true, and for `||` one true side is enough, so `outOfRange` is `True`.

## ! flips a bool

`!` reads "not". It takes a single `bool` and flips it: `!true` is `false`, and `!false` is `true`. It is how
you say "the opposite of this".

```csharp
Console.WriteLine(!true);
Console.WriteLine(!(5 > 3));
```

The output is:

```
False
False
```

`!true` is `False`. In the second line `5 > 3` is `True`, so `!(5 > 3)` is `False`. The parentheses matter:
`!` applies to whatever is directly to its right, so wrap the comparison you want to negate.

## Combining and grouping

You can chain several operators in one condition. When you mix `&&` and `||`, use parentheses to make the
grouping clear and correct. `&&` binds tighter than `||`, so `a || b && c` means `a || (b && c)`, which is
easy to misread. Spell it out:

```csharp
Console.WriteLine("Enter three numbers, one per line:");
int a = int.Parse(Console.ReadLine());
int b = int.Parse(Console.ReadLine());
int c = int.Parse(Console.ReadLine());
bool result = a > 0 && (b > 0 || c > 0);
Console.WriteLine(result);
```

Given the input `5`, `-1`, `4` (three lines), the output is:

```
Enter three numbers, one per line:
True
```

`a > 0` is true, and inside the parentheses `b > 0` is false but `c > 0` is true, so the `||` group is true.
True `&&` true is `True`. Move the parentheses and the meaning changes, so put them where you mean them even
when precedence would technically agree, a reader should not have to recall the rule to trust your code.

> A note you can file away: C# stops evaluating a `&&` as soon as the left side is false, and a `||` as soon
> as the left side is true (the rest cannot change the answer). This is called short-circuiting. It does not
> change any result you will see in this section; it only matters once a condition can cause side effects,
> which is a later topic.

## When it does not compile

The operators here are used so often that the mistakes are predictable. The compiler catches most of them;
read the first error, find the line and column it names, and fix there.

Writing `and` or `or` as words is a common slip. They are not C# operators, so the compiler trips over the
word as if a statement had ended early:

```
Program.cs(8,24): error CS1002: ; expected
```

That points at the word `and`, where C# expected the line to be over. Replace the word with the operator `&&`
(or `||` for "or").

Applying `!` to something that is not a `bool` does not typecheck. `!` needs a boolean to flip:

```
Program.cs(7,22): error CS0023: Operator '!' cannot be applied to operand of type 'int'
```

That means you wrote something like `!n` where `n` is an `int`. You almost certainly meant a comparison first,
for example `!(n > 0)`, so that `!` has a `bool` to negate.

Joining two sides with `&&` or `||` where one side is not a `bool` fails the same way. `age >= 18 && age` is
wrong because the second `age` is an `int`, not a comparison:

```
Program.cs(9,33): error CS0019: Operator '&&' cannot be applied to operands of type 'bool' and 'int'
```

That means one side of the `&&` is not a condition. Make it a full comparison, for example `age >= 18 && age < 65`.

## What you'll practise

Expressing multi-part conditions: `&&` for "both", `||` for "either", `!` for "not", combining them with the
comparisons from 4.1, grouping with parentheses, and dropping a compound condition into an `if`/`else`. Twelve
reps on building the conditions that real decisions are made of. Still one flat condition per decision here,
putting a decision *inside* another decision is the next section.
