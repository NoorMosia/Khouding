# Formatting numbers for output

## Floating-point numbers

A `double` holds a number that can have a fractional part: `4.99`, `0.5`, `3.14159`. These are called
**floating-point** numbers. The name comes from the decimal point being able to sit anywhere, so one type can
hold `0.001` and `1000.5` alike.

There is a catch worth knowing early. A floating-point number is stored in a fixed amount of space, and not
every decimal fits exactly. Some values are kept as the closest available approximation. You can see it:

```csharp
double x = 0.1 + 0.2;
Console.WriteLine(x);
```

The output is:

```
0.30000000000000004
```

The stored value is a hair off from `0.3`. This is not a bug in your code; it is how floating-point works on
every machine and in every mainstream language. Most of the time it does not matter, and when it comes to
showing the number, you format it (the rest of this section), which hides the stray digits.

## Choosing double or float

C# has more than one floating-point type. The two you will hear about are:

- **`double`**: the standard choice, about 15 to 16 significant digits of precision.
- **`float`**: a smaller type, about 6 to 7 significant digits, so less precise.

The difference shows up quickly. Taking one third as an example, a `double` keeps many more digits than a
`float`:

```
double:  0.3333333333333333
float:   0.33333334
```

Use `double` unless you have a specific reason not to. It is the default for everyday numbers, prices, and
measurements, and it is what this course uses throughout. `float` exists mainly to save space when you have a
very large quantity of numbers and can accept the lower precision, which is not a concern at this stage. If in
doubt, reach for `double`.

## Fixing the number of decimal places

A raw `double` prints with however many digits it has, which is rarely what you want for display. To show a
fixed number of decimal places, add a format to the interpolation hole: `:F2` means "fixed, two decimal
places".

```csharp
Console.WriteLine("Enter a price:");
double price = double.Parse(Console.ReadLine());
Console.WriteLine($"{price:F2}");
```

Given the input `7.5`, the output is:

```
Enter a price:
7.50
```

`7.5` is shown as `7.50`: `F2` pads to exactly two decimal places. It also rounds when there are too many:
`2.345` printed with `:F2` comes out as `2.35`.

## Formatting is about display, not the stored value

The format changes how the number looks when printed. It does not change the value in the variable. The same
`price` could be printed to two decimals in one place and left raw in another; the stored number is unchanged.
This is the same `double` from 1.3, now with control over how it appears.

That is also why formatting is the cure for the stray-digits problem above:

```csharp
double x = 0.1 + 0.2;
Console.WriteLine($"{x:F2}");
```

The output is:

```
0.30
```

The stored value still carries its tiny imprecision, but `:F2` displays a clean `0.30`.

## Showing money

Money is the most common reason to fix the decimals: a price should read `19.95`, not `19.950001` and not
`20`. Present it as a label and the `:F2` amount:

```csharp
Console.WriteLine("Enter the price:");
double price = double.Parse(Console.ReadLine());
Console.WriteLine($"Price: {price:F2}");
```

Given the input `19.95`, the output is:

```
Enter the price:
Price: 19.95
```

Two decimal places is the normal shape for money. We keep the presentation plain here (a label and the
amount) and leave currency symbols aside, since those depend on country and are a separate topic.

## What you'll practise

Formatting numbers with `:F2`: showing a price to two decimals, padding a value like `7.5` to `7.50`,
computing a total and formatting it, and contrasting the raw `double` with the formatted version to see why
formatting matters. Ten reps on controlling how a number looks when it reaches the screen.
