# Cheatsheet, 2.4 Joining strings with +

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Join pieces with +
```csharp
Console.WriteLine("Hello" + " " + "there");   // three pieces joined
```
Output:
```
Hello there
```
- `+` on strings joins them end to end (concatenation).
- Spaces are not automatic. If you want a space, join it in as its own piece.

## Join in a value you read
```csharp
string name = Console.ReadLine();
Console.WriteLine("Hello, " + name);
```
The literal `"Hello, "` (trailing space included) joins onto the value of `name`.

## Build a string you keep (the part that matters)
```csharp
string fullName = first + " " + last;   // join into one value, store it
Console.WriteLine(fullName);
```
This is `+`'s second job: building a new `string` from pieces and storing it in a variable you can use later.
This is what makes `+` more than a printing trick.

## A number joined to a string becomes text
```csharp
int age = 36;
Console.WriteLine("Age: " + age);   // prints: Age: 36
```
Joining a number onto a string turns the number into text in the result. You do not convert it yourself for
this.

## + vs interpolation (for output)
```csharp
Console.WriteLine("Hello, " + name);    // joining with +
Console.WriteLine($"Hello, {name}");     // interpolation
```
Same output. Pick whichever reads more clearly; interpolation usually wins with lots of literal text. The real
difference: `+` also builds stored strings, interpolation is mainly for output.

## Common gotcha

| What you did | What happens | Fix |
|--------------|--------------|-----|
| Forgot the space piece: `a + b` | the words run together: `Hellothere` | join a space in: `a + " " + b` |
| Expected `+` to space words for you | it never adds spaces on its own | every space is a piece you join in |

Joining never inserts spaces for you. Every space in the output is a space you put there as its own piece.
