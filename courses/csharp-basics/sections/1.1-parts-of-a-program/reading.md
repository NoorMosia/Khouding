# The parts of a C# program

## Your first program

Here is a complete C# program:

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}
```

When you run it, one line appears on the screen:

```
Hello, World!
```

That is the whole job of this program: put a line of text on the screen. The line that does it is:

```csharp
Console.WriteLine("Hello, World!");
```

`Console` is the screen, the text output area where your program's results show up. `WriteLine` writes a
line to it. Whatever you put in the quotes is what appears.

Everything else in the program is the frame that every C# program sits inside. You will write that same
frame around your code every time, so let us walk through it once. Not to memorise it, just so none of it
looks like magic.

## The frame, part by part

Here is the same program again. The numbers down the left are line numbers, the way an editor shows them.

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}
```

**Line 1, `using System;`**
This line lets you write `Console` instead of its longer full name, `System.Console`. `Console` lives in a
collection of built-in tools called `System`, and this line says "I will be using those tools here." For
now that is all you need. You will see what these collections really are later in the course.

**Line 3, `class Program`**
Every bit of C# code lives inside a *class*. For now, think of it as the named container your program sits
in. You will not do anything with the class itself in this chapter. It is just the outer box.

**Line 5, `static void Main()`**
`Main` is **where the program starts**. When you run the program, C# looks for `Main` and begins there. The
words `static void` in front of it are required wording. Ignore them for now; they will make sense when we
reach Methods later in the course. Just read this line as "here is where the program begins."

**Lines 4, 6, 8, 9, the braces `{ }`**
Braces mark where a block begins and ends. The class has a pair (lines 4 and 9), and `Main` has its own
pair *inside* the class's (lines 6 and 8). Every opening `{` has a matching closing `}`.

**Line 7, the statement**
This is the actual instruction. It ends with a **semicolon** `;`, which marks the end of a statement, like
a full stop at the end of a sentence. Most lines of C# end with one, and a missing `;` is the single most
common beginner error.

## Where your code goes

This is the whole point of this section:

> **Your code goes inside `Main`'s braces**, between lines 6 and 8 above. Statements there run **top to
> bottom**, in order.

A line of code placed outside `Main` does not run as part of your program. When you want your program to
*do* something, you write it as a statement inside `Main`, and you add statements in the order you want them
to happen.

```csharp
static void Main()
{
    Console.WriteLine("First line");
    Console.WriteLine("Second line");
}
```

Output:

```
First line
Second line
```

## When it does not compile

You will see compiler errors constantly, and they are not a sign you are doing badly. They are the
computer telling you precisely what it could not understand. Learning to read them is part of the craft.

A few habits that will serve you the whole course:

- **Read the first error, not the last.** One small mistake often triggers several errors. Fix the first
  one and the rest usually vanish.
- **It tells you the line.** An error looks like `Program.cs(9,46): error CS1002: ; expected`. The `(9,46)`
  is line 9, column 46. Look there first; the real problem is usually on that line or the one just above it.
- **The code `CSxxxx` is just an ID** you can search if the message is unclear.

Two you may meet in this section.

If you forget the semicolon at the end of a statement:

```
Program.cs(9,46): error CS1002: ; expected
```

This means a statement is missing its closing semicolon. Go to the line it names and add a `;` at the end.

If you put a statement in the class body, outside `Main`:

```
Program.cs(8,22): error CS1519: Invalid token '(' in a member declaration
```

This one looks cryptic, but it almost always means a statement is sitting **outside** `Main`. A statement
has to live inside a method's braces. Move the line into `Main` and the error goes away.

## What you'll practise

Putting a statement in the right place inside `Main`, getting the frame right (the braces and the
semicolon), and reproducing the skeleton so it runs and prints exactly what is asked. The frame will feel
automatic faster than you would expect. That is the whole idea.
