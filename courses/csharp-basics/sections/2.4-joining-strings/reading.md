# Joining strings with +

## The + operator joins strings

You have used `+` to add numbers. On strings, `+` does something different: it joins them end to end into one
string. This is called concatenation.

```csharp
Console.WriteLine("Hello" + " " + "there");
```

The output is:

```
Hello there
```

Three pieces, the word `Hello`, a single space, and the word `there`, joined into one string and printed. The
spaces do not appear on their own; if you want a space between words, you join one in as its own piece.

## Joining a value you read

The pieces can be variables, not just fixed text:

```csharp
Console.WriteLine("Enter your name:");
string name = Console.ReadLine();
Console.WriteLine("Hello, " + name);
```

Given the input `Ada`, the output is:

```
Enter your name:
Hello, Ada
```

The literal `"Hello, "` (with its trailing space) is joined to the value of `name`.

## The other job: building a string you keep

So far `+` has produced output. Its other, equally important job is **building a new string and storing it in
a variable**. This is the part that makes `+` more than a printing trick:

```csharp
Console.WriteLine("Enter your first name:");
string first = Console.ReadLine();
Console.WriteLine("Enter your last name:");
string last = Console.ReadLine();
string fullName = first + " " + last;
Console.WriteLine(fullName);
```

Given the input lines `Ada` then `Lovelace`, the output is:

```
Enter your first name:
Enter your last name:
Ada Lovelace
```

Here `first + " " + last` is not printed directly. It is joined into one value and stored in `fullName`, a
`string` variable you can then use, pass around, or print. Building a string from pieces is a thing you will
do constantly in real code, and `+` is the plain way to do it.

## A number joined to a string becomes text

If one piece is a number and another is a string, the number is turned into text so it can join:

```csharp
Console.WriteLine("Enter your age:");
int age = int.Parse(Console.ReadLine());
Console.WriteLine("Age: " + age);
```

Given the input `36`, the output is:

```
Enter your age:
Age: 36
```

The `age` value `36` becomes the text `36` and joins onto `"Age: "`. You do not have to convert it yourself
for this; joining a number onto a string handles it. (The deeper type rules can wait; the point here is that
the result is text.)

## + and interpolation produce the same output

For producing output, `+` and interpolation are two ways to reach the same result:

```csharp
Console.WriteLine("Hello, " + name);     // joining with +
Console.WriteLine($"Hello, {name}");      // interpolation
```

Both print `Hello, Ada` when `name` is `Ada`. For output, pick whichever reads more clearly: interpolation
usually wins when there is a lot of literal text around the values, while `+` is natural for a quick join. The
difference that matters is the one above: `+` also **builds stored strings**, which is its own job, not just
a styling choice for output.

## What you'll practise

Joining strings with `+`: joining fixed words, joining in values you read, and the key skill of building a
stored `string` from pieces. You will also join a label to a number (which becomes text), combine three
pieces, and convert a line between the `+` form and interpolation in both directions to see they produce the
same output. Ten reps on joining and building strings.
