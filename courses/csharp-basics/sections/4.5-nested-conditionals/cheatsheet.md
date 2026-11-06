# Cheatsheet, 4.5 Nested conditionals

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Nesting: a decision inside a branch
An `if`/`else` body is a block, and a block can hold another `if`. The outer condition picks a branch; inside
it, a further condition picks again.
```csharp
if (n > 0)
{
    if (n > 100) { Console.WriteLine("big positive"); }
    else         { Console.WriteLine("small positive"); }
}
else
{
    Console.WriteLine("not positive");
}
```

## Nest in one branch only
Not every branch needs a further decision. Nest where a follow-up question exists, keep the rest flat.
```csharp
if (score >= 50)
{
    if (score >= 90) { Console.WriteLine("pass with distinction"); }
    else             { Console.WriteLine("pass"); }
}
else
{
    Console.WriteLine("fail");
}
```

## Flatten vs nest
| Situation | Shape |
|-----------|-------|
| Two independent checks, both must be true, one outcome | flat `&&`: `if (a && b) { ... }` |
| Inner question only makes sense after the outer is true | nest |
| Different branches need different outputs | nest |

`if (a) { if (b) { X } }` and `if (a && b) { X }` give the same result. Prefer the flat `&&` when that is all
you need.

## else binds to the nearest if
A brace-less `else` attaches to the closest unmatched `if`, regardless of indentation. Use braces so the
pairing is explicit.
```csharp
if (a)
{
    if (b) { Console.WriteLine("both"); }
}
else
{
    Console.WriteLine("not a");   // braces make this belong to the OUTER if
}
```

## Common errors

| Message | Usually means | Fix |
|---------|---------------|-----|
| `CS1513: } expected` | a nested block was opened and never closed | add the missing `}`; align each `}` under the `if` it closes |
| (no error) `else` pairs with the wrong `if` | brace-less nesting let `else` bind to the inner `if` | wrap the branches in braces so the intended `if` owns the `else` |
| (no error) a leaf never prints | a branch of the tree is unreachable or mis-ordered | trace an input to each leaf; check the outer condition actually lets it through |

Two of these are silent: the program compiles and runs but takes the wrong branch. When a nested decision
gives a surprising answer, trace one input per leaf and check both the brace structure and the order of the
conditions.
