# Cheatsheet, 3.1 Precedence and parentheses

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## The order operators apply
Higher precedence is applied first:

| Precedence | Operators |
|------------|-----------|
| higher (first) | `*`  `/`  `%` |
| lower (after)  | `+`  `-` |

```csharp
Console.WriteLine(2 + 3 * 4);   // 14  (3 * 4 first, then + 2)
```
Output:
```
14
```

## Parentheses override the order
Whatever is inside parentheses is evaluated before anything outside them:
```csharp
Console.WriteLine((2 + 3) * 4);   // 20  (2 + 3 first, then * 4)
```
Output:
```
20
```

## Equal precedence goes left to right
```csharp
Console.WriteLine(10 - 4 + 3);    // (10 - 4) + 3 = 9, NOT 10 - (4 + 3)
Console.WriteLine(100 / 10 / 2);  // (100 / 10) / 2 = 5
```
Output:
```
9
5
```

## Reading a mixed expression
1. Do `*` `/` `%` before `+` `-`.
2. Among operators of equal precedence, go left to right.
3. Parentheses jump the queue: innermost first.

When in doubt, add parentheses. They never change a result that was already going to happen that way, and
they make your intent clear.

## Common errors

| What you did | What happens | Fix |
|--------------|--------------|-----|
| Wrong order, missing parentheses: `a + b * c` when you meant `(a + b) * c` | no compiler error; it compiles, runs, and prints the **wrong value** | add the parentheses you meant: `(a + b) * c` |
| Assumed left to right for everything: read `2 + 3 * 4` as `20` | `*` is done first, so it is `14` | apply `*` `/` `%` before `+` `-` |

Precedence mistakes are silent: there is no message to chase. When a calculation comes out wrong, check the
order of operations first, and parenthesize to force what you meant.
