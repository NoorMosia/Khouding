# Updating a variable

## Adding one to a variable

A common thing to do is nudge a variable up or down by one. `++` adds one, `--` subtracts one:

```csharp
int count = 5;
count++;
Console.WriteLine(count);
```

The output is:

```
6
```

`count++` is shorthand for `count = count + 1`: take the current value, add one, store it back. `count--` is
the same in reverse, `count = count - 1`.

## The same move by any amount

To change a variable by an amount other than one, use the compound-assignment family. `+=` adds a value to the
variable and stores the result back:

```csharp
int total = 10;
total += 7;
Console.WriteLine(total);
```

The output is:

```
17
```

`total += 7` is shorthand for `total = total + 7`. The whole family works the same way, each one updates the
variable from its own current value:

```csharp
int x = 20;
x -= 5;    // x = x - 5
Console.WriteLine(x);
int y = 6;
y *= 3;    // y = y * 3
Console.WriteLine(y);
```

The output is:

```
15
18
```

So `++` is just the by-one case of this same idea.

## Shorthand, not a new operation

Writing `x += y` and writing `x = x + y` do exactly the same thing. The compound form is shorter and makes the
"update in place" intent obvious, but it is not a different operation:

```csharp
int a = 10;
a = a + 4;   // the long way
Console.WriteLine(a);
int b = 10;
b += 4;      // the short way, same result
Console.WriteLine(b);
```

The output is:

```
14
14
```

## `/=` and `%=` follow their operators' rules

`/=` and `%=` update using division and remainder, so they carry the rules from the last two sections. On
whole numbers, `/=` truncates:

```csharp
int z = 17;
z /= 5;    // z = z / 5, whole-number division
Console.WriteLine(z);
```

The output is:

```
3
```

`17 / 5` is `3` (the `.4` is cut), and that `3` is stored back in `z`. Likewise `z %= 5` would store the
remainder.

## Prefix and postfix

`++` can go before or after the variable: `x++` (postfix) and `++x` (prefix). As a statement on its own, both
do the same thing, add one. The difference only shows when you use the result **in the same line**. Postfix
gives the value from **before** the update; prefix gives the value from **after**:

```csharp
int a = 5;
Console.WriteLine(a++);   // prints 5 (the old value), THEN a becomes 6
Console.WriteLine(a);
int b = 5;
Console.WriteLine(++b);   // b becomes 6 first, prints 6 (the new value)
Console.WriteLine(b);
```

The output is:

```
5
6
6
6
```

For now, use `++` and `--` on their own line, where there is no difference. The prefix/postfix distinction
matters inside larger expressions, which you will meet later. It is enough to know it exists.

## What you'll practise

Updating a variable from its own value: `++` and `--` by one, the compound family `+= -= *= /= %=` by any
amount, recognising that `x += y` is just `x = x + y`, and building a running total by adding each new amount
with `+=`. Nine reps on the update-in-place motion you will use constantly.
