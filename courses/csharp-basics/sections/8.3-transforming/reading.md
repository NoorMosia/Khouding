# Transforming a string

## The problem: getting a new version of the text

You can now search a string. The next thing real text work needs is reshaping: upper-case this line for a
heading, strip the leading space someone typed, replace a placeholder with a real value, pull out a piece.
All of these produce a new string from an old one.

## Strings are still immutable, so every method returns a new one

The key fact from 8.1 carries through every method in this section: a string cannot be changed in place. Every
method here takes the original string, produces a new string with the requested change, and returns it. The
original is untouched.

This means you must use the returned value. Here is what that looks like when you do it right and when you
do not:

```csharp
string s = "hello";
string upper = s.ToUpper();
Console.WriteLine(upper);
Console.WriteLine(s);
```

The output is:

```
HELLO
hello
```

`s.ToUpper()` returns a new string `"HELLO"` and leaves `s` as `"hello"`. Storing the result in `upper` and
printing it is correct. The original `s` is still `"hello"`.

The common mistake is calling the method and ignoring what it returns:

```csharp
string s = "hello";
s.ToUpper();
Console.WriteLine(s);
```

The output is:

```
hello
```

`s.ToUpper()` still runs and produces `"HELLO"`, but that new string is thrown away. `s` is unchanged. The
program compiles, runs, and prints the wrong answer. There is no error message. This is the single most common
string mistake, so every problem in this section expects the returned value to be used.

## ToUpper and ToLower

`s.ToUpper()` returns a new string with all letters uppercased. `s.ToLower()` returns one with all letters
lowercased. Both are new strings; the original is unchanged.

```csharp
Console.WriteLine("hello".ToUpper());
Console.WriteLine("HELLO".ToLower());
```

The output is:

```
HELLO
hello
```

## Trim

`s.Trim()` returns a new string with any leading and trailing whitespace removed. Characters in the middle are
not affected:

```csharp
string s = "  hello  ";
Console.WriteLine("[" + s.Trim() + "]");
```

The output is:

```
[hello]
```

The brackets make the stripped spaces visible. `s` still holds `"  hello  "` after the call.

## Replace

`s.Replace(old, new)` returns a new string where every occurrence of `old` is replaced by `new`:

```csharp
Console.WriteLine("hello world".Replace("world", "there"));
Console.WriteLine("aabbaa".Replace("aa", "x"));
```

The output is:

```
hello there
xbbx
```

Replace all occurrences in one call, returning a new string each time.

## Substring

`s.Substring(start)` returns the text from index `start` to the end. `s.Substring(start, length)` returns
`length` characters starting at `start`:

```csharp
string s = "hello";
Console.WriteLine(s.Substring(1));
Console.WriteLine(s.Substring(1, 3));
```

The output is:

```
ello
ell
```

`Substring(1)` starts at index 1 (skipping `h`) and takes everything. `Substring(1, 3)` starts at index 1 and
takes 3 characters: `e`, `l`, `l`. The start index and length must stay within the string; problems compute
them from the input so they are always valid.

## Chaining

Because every method returns a new string, you can chain calls. The result of one method becomes the input to
the next:

```csharp
string s = "  hello world  ";
Console.WriteLine(s.Trim().ToUpper());
```

The output is:

```
HELLO WORLD
```

`Trim()` produces `"hello world"`, and `ToUpper()` runs on that.

## When it goes wrong

The most common mistake (ignoring the return value) has no compiler error: the program runs and prints the
wrong thing. Check your output looks like the transformed version, not the original.

`Substring` with a start index past the end of the string does throw at run time:

```
Unhandled exception. System.ArgumentOutOfRangeException: startIndex cannot be larger than length of string. (Parameter 'startIndex')
```

That means the start index you passed is beyond the string. Compute start positions from the input length to
keep them valid.

## What you'll practise

Producing new strings: `ToUpper`, `ToLower`, `Trim`, `Replace`, `Substring` (prefix, suffix, computed range),
chaining, and seeing that the original is unchanged. Fourteen reps on the reshape methods. Next is splitting a
string into an array of pieces and joining them back, where the string and array worlds meet.
