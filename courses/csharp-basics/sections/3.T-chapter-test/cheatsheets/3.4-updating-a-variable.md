# Cheatsheet, 3.4 Updating a variable

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## By one: ++ and --
```csharp
count++;   // count = count + 1
count--;   // count = count - 1
```

## By any amount: compound assignment
```csharp
total += 7;   // total = total + 7
x     -= 5;   // x = x - 5
y     *= 3;   // y = y * 3
z     /= 5;   // z = z / 5   (whole-number division truncates, see 3.2)
w     %= 5;   // w = w % 5   (remainder, see 3.3)
```
Each one updates the variable from its own current value. `++` is just the by-one case of `+=`.

## Shorthand, not a new operation
`x += y` and `x = x + y` do exactly the same thing. The compound form is shorter and shows the "update in
place" intent.

## Accumulator (building a total)
```csharp
int total = 0;
total += first;
total += second;
total += third;
```
Start at `0`, add each amount in. This is the running-total pattern you will later drive with a loop.

## Prefix vs postfix (named, light)
```csharp
int a = 5;
Console.WriteLine(a++);   // prints 5 (old value), THEN a is 6
int b = 5;
Console.WriteLine(++b);   // b is 6 first, prints 6 (new value)
```
On its own line there is no difference. The distinction only matters when you use the result in the same
expression. Keep `++` / `--` on their own line for now.

## Common errors

| What you did | What happens | Fix |
|--------------|--------------|-----|
| `x =+ 5` (typo for `+=`) | sets `x` to `+5`, not `x + 5` | write the operator as `+=` |
| Expected `z /= 5` on ints to keep decimals | it truncates like any int division | force a `double` before dividing (see 3.2) |

`=+` compiles (it is `= +5`) but does the wrong thing, a silent bug. The operator is `+=`, plus then equals.
