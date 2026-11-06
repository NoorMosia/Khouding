# Reading and writing files

## The problem: text that outlasts the program

Every program so far got its values from `Console.ReadLine`, which means the input only exists for one run.
Real programs also work with text that lives in a file: a list, a log, a configuration. The file is there
before the program runs and stays after it exits. This section shows how to open a file and read or write it.

## Opening a file for reading

`StreamReader` wraps a file and hands you one line at a time. Wrap it in a `using` block and the file is
closed and flushed for you when the block ends:

```csharp
using (var reader = new StreamReader("data.txt"))
{
    string line;
    while ((line = reader.ReadLine()) != null)
    {
        Console.WriteLine(line);
    }
}
```

With a file whose contents are:

```
hello
world
```

The output is:

```
hello
world
```

`reader.ReadLine()` returns the next line (without the newline character), or `null` when the end of the file
is reached. The `while` loop checks for `null` each time. The `using` is not optional: without it, the file
handle is not released until the garbage collector gets around to it, which can leave the file locked or a
write unflushed. Wrap every reader and writer in `using`.

## The `using` keyword

`using (var reader = new StreamReader("data.txt")) { ... }` opens the file and guarantees it is closed when
the block exits, even if an exception occurs. The modern shorthand form also works:

```csharp
using var reader = new StreamReader("data.txt");
```

This closes the file at the end of the enclosing block. Both forms are equivalent; the first makes the scope
visible at a glance, so it is what the problems here use.

## Reading all at once with ReadToEnd

`reader.ReadToEnd()` reads the entire file into one string. Use it when you want to process all the contents
as one piece:

```csharp
using (var reader = new StreamReader("data.txt"))
{
    string contents = reader.ReadToEnd();
    Console.WriteLine(contents.Length);
}
```

For a file containing `hello\nworld\n`, the output is:

```
12
```

The contents string includes the newline characters.

## Opening a file for writing

`StreamWriter` opens a file and lets you write to it with `WriteLine` and `Write`. The same `using` rule
applies:

```csharp
using (var writer = new StreamWriter("output.txt"))
{
    writer.WriteLine("line one");
    writer.WriteLine("line two");
}
```

Without `using`, the final flush may not happen and the file ends up empty or incomplete. The graded problems
here use a write-then-read-back shape: write a scratch file, then reopen it with a `StreamReader` and print
its contents to stdout. That way you see the result and the oracle still checks stdout.

## Split the file contents: the chapter payoff

Reading a file gives you text. The text is a string. You already know how to work with strings. Here is the
whole chapter pulled together:

```csharp
using (var reader = new StreamReader("data.txt"))
{
    string line;
    while ((line = reader.ReadLine()) != null)
    {
        string[] words = line.Split(' ');
        Console.WriteLine(words.Length);
    }
}
```

With a file containing:

```
one two three
a b
```

The output is:

```
3
2
```

Read a line, split it into an array (Chapter 8.4, Chapter 7), print the word count. Every piece of the chapter
is in play.

## The modern one-call forms

There is a shorter way to read all lines or all text from a file:

```csharp
string[] lines = File.ReadAllLines("data.txt");
string all    = File.ReadAllText("data.txt");
File.WriteAllText("output.txt", "some text");
```

These are convenience wrappers that open, read or write, and close for you. They are fine for simple cases.
The lasting knowledge is not which class or method you use, it is the model: open, read or write in some unit,
close. When you see a new library or a different language, recognise the shape and look up the exact call; the
model is what transfers.

## When it does not compile or crashes

The `using` requirement is a logic concern, not a compile error. Forgetting it produces a program that compiles
and runs but may leave the file locked or the write unflushed. No compiler message appears.

A missing file does throw at runtime. Opening a path that does not exist:

```
Unhandled exception. System.IO.FileNotFoundException: Could not find file 'missing.txt'.
```

In the graded problems, the provided file is always present (it is staged alongside your program). If you see
this error during development, check that the file name in your code matches the provided file exactly.

## What you'll practise

Reading a file line by line (`StreamReader` + `while` + `ReadLine`) and acting on each line: counting,
printing, applying the string tools from 8.1 to 8.5, splitting into an array and processing the pieces.
Writing a file and reading it back to print the result. Ten reps on the file toolkit. This is the last
section before the chapter test.
