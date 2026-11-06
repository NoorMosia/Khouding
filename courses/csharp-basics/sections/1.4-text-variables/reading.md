# Text variables: string and char

## Storing text

1.3 stored numbers. Text works the same way: declare a variable, give it a type, put a value in it. There
are two text types, and the difference between them is simply *how much* text they hold.

- **`string`** holds a sequence of characters: a word, a name, a whole sentence. Its value goes in
  **double quotes**: `"Ada"`, `"Hello, world"`, `""` (empty).
- **`char`** holds exactly **one** character. Its value goes in **single quotes**: `'A'`, `'7'`, `'?'`.

That is the whole distinction: a `string` is many characters, a `char` is one. The quotes are how C# tells
them apart, double quotes for a `string`, single quotes for a `char`.

## Declaring and initialising

```csharp
string name = "Ada";
char grade = 'A';
Console.WriteLine(name);
Console.WriteLine(grade);
```

Output:

```
Ada
A
```

Same shape as the number variables in 1.3: `type name = value;`. Only the quote style changes with the
type.

## Choosing between them

Ask: is this one character, or a run of them?

- A person's name, a city, a message: many characters, so `string`.
- A single letter grade, a yes/no keypress, a middle initial: one character, so `char`.

When in doubt, it is a `string`. Most text is more than one character, and a `string` can hold a single
character too (`"A"` is a valid string). Reach for `char` only when the value is genuinely always one
character.

## Reassigning

Like any variable, a `string` can be given a new value. Do not repeat the type.

```csharp
string status = "draft";
status = "published";
Console.WriteLine(status);
```

Output:

```
published
```

The old text is gone; `status` now holds `"published"`.

## const works for text too

The `const` you met in 1.3 is not just for numbers. A fixed label or heading that should never change can
be a `const string`.

```csharp
const string Greeting = "Welcome";
Console.WriteLine(Greeting);
```

Output:

```
Welcome
```

## One more type: bool

While we are naming simple types, here is one more: a **`bool`** holds one of just two values, `true` or
`false`.

```csharp
bool isOpen = true;
Console.WriteLine(isOpen);
```

Output:

```
True
```

(Note the capital `T`: that is how C# prints a `bool`.) For now that is all you need: a `bool` is a type
with two possible values. It becomes genuinely useful in a later chapter, where you compare values and make
decisions. Here it is just one more type you can declare.

## When it does not compile

Two errors, both from mixing up the quotes.

If you put more than one character in single quotes:

```
Program.cs(7,23): error CS1012: Too many characters in character literal
```

Single quotes make a `char`, which holds exactly one character. `'Sam'` is three, so it is rejected. For
text longer than one character, use double quotes to make a `string`: `"Sam"`.

If you put a double-quoted value into a `char`:

```
Program.cs(7,22): error CS0029: Cannot implicitly convert type 'string' to 'char'
```

Double quotes make a `string`, even `"A"`. A `char` cannot hold a `string`. Use single quotes for a `char`:
`'A'`.

## What you'll practise

Declaring `string`s and `char`s, choosing between them, reassigning text, using a `const string`,
declaring a simple `bool`, and fixing the classic quote mix-ups. A dozen reps. Wax on, wax off.
