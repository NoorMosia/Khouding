# Cheatsheet, 8.6 Reading and writing files

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Read line by line (the standard pattern)
```csharp
using (var reader = new StreamReader("data.txt"))
{
    string line;
    while ((line = reader.ReadLine()) != null)
    {
        Console.WriteLine(line);   // do something with each line
    }
}
```
`ReadLine()` returns `null` at end of file. `using` closes the file when the block exits.

## Read all at once
```csharp
using (var reader = new StreamReader("data.txt"))
{
    string all = reader.ReadToEnd();
}
```

## Write then read back (the graded write shape)
```csharp
using (var writer = new StreamWriter("scratch.txt"))
{
    writer.WriteLine("some text");
}
using (var reader = new StreamReader("scratch.txt"))
{
    string line;
    while ((line = reader.ReadLine()) != null) Console.WriteLine(line);
}
```
`using` on the writer ensures the final flush before you reopen.

## One-call forms (no exercises; named for reference)
```csharp
string[] lines = File.ReadAllLines("data.txt");   // -> string[]
string all     = File.ReadAllText("data.txt");
File.WriteAllText("out.txt", "content");
```

## why `using` is not optional
| Forgotten on... | Risk |
|-----------------|------|
| `StreamReader` | file handle may stay open (locked for other programs) |
| `StreamWriter` | final buffer may not flush; file ends up empty or truncated |

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `System.IO.FileNotFoundException: Could not find file '...'` | file name in code does not match the provided file | check the exact file name (`data.txt`) |
| (no error) write produces an empty file | `StreamWriter` used without `using` (buffer not flushed) | wrap in `using` |

The model is always: open, read or write in some unit, close. The exact method name is a lookup.
