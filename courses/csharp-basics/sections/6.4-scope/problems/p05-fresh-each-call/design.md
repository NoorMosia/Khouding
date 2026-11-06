# Problem 05, Fresh each call (language-independent design)

**Sub-skill:** a local is created fresh each call; nothing carries over.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method `Counter` that declares a local `int count = 0;`, does `count = count + 1;`, and
prints `count`. In `Main`, call `Counter` twice. The program should print:
```
1
1
```

## I/O contract
- **Input:** none.
- **Output:** `1` then `1`.

## Why it resists a trivial answer
If a local accumulated across calls, the second line would be `2`. It is `1` both times because `count` is
recreated and set to `0` on every call. The two `1`s prove locals do not persist between calls.
