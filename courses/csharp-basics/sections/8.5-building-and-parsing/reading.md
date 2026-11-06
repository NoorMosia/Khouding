# Building and parsing character by character

## Going back to the loop

Every section since 8.2 used a library method: `Contains`, `ToUpper`, `Split`. That is the right tool when it
fits. But sometimes you need to do something the library does not offer directly, or you want to understand
exactly what is happening inside. This section is the one where you write the loop yourself.

A string is a sequence of characters, and the Chapter 7 array loop applies directly:

```csharp
string s = "hello";
for (int i = 0; i < s.Length; i++)
{
    Console.WriteLine(s[i]);
}
```

The output is:

```
h
e
l
l
o
```

The `foreach` form is cleaner when you only need the value:

```csharp
string s = "hello";
foreach (char c in s)
{
    Console.WriteLine(c);
}
```

The output is:

```
h
e
l
l
o
```

`c` is a `char` each time. An empty string makes either loop run zero times and produce no output.

## Counting characters that pass a test

To count how many characters meet a condition, start a counter at 0 and add 1 for each match:

```csharp
string s = "hello world";
int count = 0;
foreach (char c in s)
{
    if (c == 'l')
    {
        count = count + 1;
    }
}
Console.WriteLine(count);
```

The output is:

```
3
```

The char helpers `char.IsDigit(c)` and `char.IsLetter(c)` save you from writing your own tests:

```csharp
string s = "abc123";
int digits = 0;
foreach (char c in s)
{
    if (char.IsDigit(c))
    {
        digits = digits + 1;
    }
}
Console.WriteLine(digits);
```

The output is:

```
3
```

## Validating: does every character pass

To check whether all characters meet a condition, start with `true` and set it to `false` on the first failure:

```csharp
string s = "12345";
bool allDigits = true;
foreach (char c in s)
{
    if (!char.IsDigit(c))
    {
        allDigits = false;
    }
}
Console.WriteLine(allDigits);
```

The output is:

```
True
```

An empty string produces `True` here, because no character fails the test.

## Building a new string by picking characters

Because strings are immutable you cannot write into them. To build a filtered or transformed string, start
with an empty string and concatenate each chosen character:

```csharp
string s = "abc123";
string digits = "";
foreach (char c in s)
{
    if (char.IsDigit(c))
    {
        digits = digits + c;
    }
}
Console.WriteLine(digits);
```

The output is:

```
123
```

`digits = digits + c` builds the string one character at a time. An empty input makes the loop run zero times,
so `digits` stays `""` and an empty line prints.

## Reversing by building

Building character by character also lets you reverse a string without any extra library:

```csharp
string s = "hello";
string rev = "";
for (int i = s.Length - 1; i >= 0; i--)
{
    rev = rev + s[i];
}
Console.WriteLine(rev);
```

The output is:

```
olleh
```

Walk from the last index down to 0 and concatenate each character.

## When it goes wrong

There is no new compile error in this section. The bugs are logic ones you already know: an off-by-one in the
loop bound (`i <= s.Length` instead of `i < s.Length`), forgetting to initialise `result = ""` before the
loop, or building with `result + c` but not storing the return. Actually this last one is a compile error:
`result + c;` as a standalone statement is rejected:

```
Program.cs(12,17): error CS0201: Only assignment, call, increment, decrement, await, and new object expressions can be used as a statement
```

That means `result + c` computes a value but does nothing with it. The fix is `result = result + c;`.

Check that your loop starts at `0` and that `result` is declared before the loop.

## What you'll practise

Counting characters meeting a test, checking whether a property holds for all characters, building a filtered
or reversed string by concatenation, and verifying the empty-string edge (zero count, empty built string).
Twelve reps on the hand-written char loop. The next section applies this whole toolkit to real files.
