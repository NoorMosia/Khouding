# Output: shaping what you display

## You already know how to print

In 1.1 you printed a line with `Console.WriteLine`. This section is about **controlling** what shows up:
putting things on the same line or separate lines, adding blank lines, and using a few special characters
to shape the output exactly.

## WriteLine vs Write

There are two ways to print:

```csharp
Console.WriteLine("Hello");
Console.Write("Hello");
```

Output:

```
Hello
Hello
```

`WriteLine` prints the text and then **moves to a new line**, so the second `Hello` starts on its own line.
`Write` prints and **stays on the same line** (here it is the last thing printed, so nothing follows it).
That one difference is the whole distinction.

So two `WriteLine`s stack:

```csharp
Console.WriteLine("Top");
Console.WriteLine("Bottom");
```

```
Top
Bottom
```

But two `Write`s run together on one line:

```csharp
Console.Write("Top");
Console.Write("Bottom");
```

```
TopBottom
```

A `WriteLine` with nothing in it prints an empty line:

```csharp
Console.WriteLine("Above");
Console.WriteLine();
Console.WriteLine("Below");
```

```
Above

Below
```

## Escape sequences

Some characters are hard to put in a string directly, so C# uses a backslash `\` to write them. These are
called **escape sequences**. The four you need now:

- `\n` is a **newline**. It moves to a new line from inside a string.
- `\t` is a **tab**. Useful for lining up columns.
- `\"` is a **double quote**. A plain `"` would end the string, so you escape it.
- `\\` is a **single backslash**. Since `\` starts an escape, you write two to get one.

The key idea with `\n`: a newline can come from inside the string, not only from `WriteLine`. These two
print the same two lines:

```csharp
Console.WriteLine("Top");
Console.WriteLine("Bottom");

Console.WriteLine("Top\nBottom");
```

Output:

```
Top
Bottom
Top
Bottom
```

Watch the end, though. `WriteLine` always adds a newline after the whole string. `Write` does not. So
`Write("Top\nBottom")` gives you two lines with **no** newline after `Bottom`.

A couple more:

```csharp
Console.WriteLine("She said \"hello\".");
Console.WriteLine("C:\\Users\\Ada");
Console.WriteLine("Name\tAda");
```

Output:

```
She said "hello".
C:\Users\Ada
Name	Ada
```

## Output is matched exactly

When your work is checked, your output must match the target **exactly**, including spaces and newlines.
A tab is not the same as spaces, a trailing space counts, and a missing or extra blank line counts.
Producing output to spec is a real skill: read the target carefully and reproduce it character for
character.

## When it does not compile

Two errors you may meet here.

If you forget to escape a quote inside a string:

```
Program.cs(7,38): error CS1003: Syntax error, ',' expected
```

The `"` ended the string earlier than you meant, so the rest of the line confuses the compiler. Escape the
inner quotes as `\"`.

If you use a single backslash that is not a valid escape:

```
Program.cs(7,30): error CS1009: Unrecognized escape sequence
```

C# read `\` + the next character as an escape and did not recognise it. For a real backslash, write `\\`.

## What you'll practise

Printing on one line or many, blank lines, and the four escape sequences, building up to small shapes you
draw with text. Fifteen reps. The reward is output that comes out exactly the way you intended.
