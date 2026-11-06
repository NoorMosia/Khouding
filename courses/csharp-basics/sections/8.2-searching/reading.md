# Searching inside a string

## The problem: is it in there, and where

You can now measure a string and read any character. The next question real text work asks is about content:
does this line contain the word "error"? Does the filename end in ".txt"? Where does the first space fall?
You could write a loop to check character by character, and in 8.5 you will. But these questions are so common
that `string` answers them directly, with a small set of search methods.

## Contains: is it present

`s.Contains(part)` returns a `bool`: `true` if `part` occurs anywhere in `s`, `false` if not.

```csharp
string s = "hello world";
Console.WriteLine(s.Contains("world"));
Console.WriteLine(s.Contains("xyz"));
```

The output is:

```
True
False
```

It answers yes or no and leaves the string unchanged. `Contains` also accepts a single `char`:
`s.Contains('w')` is `true`.

## IndexOf: where is it

`s.IndexOf(part)` returns the index of the first occurrence of `part`, or `-1` if `part` does not occur. This
is the same not-found sentinel you used for array search in Chapter 7.3:

```csharp
string s = "hello world";
Console.WriteLine(s.IndexOf("o"));
Console.WriteLine(s.IndexOf("z"));
```

The output is:

```
4
-1
```

The first `"o"` is at index 4, so `IndexOf` returns `4`. There is no `"z"`, so it returns `-1`. `IndexOf` works
with a `char` too: `s.IndexOf(' ')` finds the first space.

`Contains` and `IndexOf` answer related questions: `Contains` gives a yes/no, `IndexOf` gives the position (and
`-1` doubles as "not present"). In fact `s.Contains(part)` is the same as `s.IndexOf(part) != -1`.

## StartsWith and EndsWith

`s.StartsWith(prefix)` and `s.EndsWith(suffix)` return a `bool` for whether the string begins or ends with the
given text:

```csharp
string file = "report.txt";
Console.WriteLine(file.StartsWith("rep"));
Console.WriteLine(file.EndsWith(".txt"));
Console.WriteLine(file.EndsWith(".csv"));
```

The output is:

```
True
True
False
```

These are the natural way to check a prefix or an extension without indexing by hand.

## Searching is case-sensitive

All of these match exactly, including case. `"Hello"` does not contain `"hello"`:

```csharp
string s = "Hello";
Console.WriteLine(s.Contains("hello"));
```

The output is:

```
False
```

In this course, inputs are plain ASCII and the sandbox runs invariant culture, so a match is a
straightforward, case-sensitive character comparison. If you need a case-insensitive search, you would first
lower-case both sides with the tools in the next section.

## The one thing to get right: -1 is not a position

The common mistake with `IndexOf` is treating its result as always valid. When the target is absent, `IndexOf`
returns `-1`, and `-1` is not a real index. Using it as one (for example `s[s.IndexOf(part)]` when `part` is
not present) reads `s[-1]` and throws:

```
Unhandled exception. System.IndexOutOfRangeException: Index was outside the bounds of the array.
```

That means a search came back `-1` and the code used it anyway. Before you use an `IndexOf` result as a
position, check it is not `-1`. This is not a compiler error, the compiler cannot know whether the target is
present, so it is on you to handle the not-found case.

## What you'll practise

Querying a string: `Contains`, `IndexOf` with its `-1` sentinel, `StartsWith`, `EndsWith`, and searching for a
single character. Twelve reps on asking whether and where. Next is transforming a string, producing a new one
with a different case, trimmed, with pieces replaced or sliced out.
