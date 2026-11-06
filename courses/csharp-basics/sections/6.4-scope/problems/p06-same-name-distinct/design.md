# Problem 06, Same name, distinct (language-independent design)

**Sub-skill:** `Main` and a helper can both use the same variable name independently.
**Difficulty:** 2

## Statement (student-facing)
Define a `static void` method `ShowTotal` that declares a local `int total = 42;` and prints it. In `Main`,
prompt `Enter a total:` on its own line, read a whole number into a local `int total`, call `ShowTotal`, then
print `Main`'s `total`. The program prints two lines: the helper's `total` (`42`), then `Main`'s `total`.

## I/O contract
- **Input:** one line, a whole number.
- **Output:** the prompt, then `42`, then the number you entered.

## Why it resists a trivial answer
Both methods have a variable called `total`, but they are independent: the helper always prints `42`, and
`Main` prints whatever was read. Cases vary `Main`'s value, so the two `total`s must not interfere.
