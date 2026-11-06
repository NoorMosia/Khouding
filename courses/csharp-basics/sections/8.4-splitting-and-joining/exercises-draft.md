# Exercises draft, 8.4 Splitting and joining

> Skeleton-pass artifact (AUTHORING-GUIDE §4). Not parsed; superseded by the real `problems/` folders.

---

## Section one-idea
Break a string into an array of pieces, and build one string from many pieces.

## Size & completion
- **12 problems**, lights at **7** (~60%). Full section. Directly ties strings back to Ch.7 arrays.

## Scope (READ FIRST)
- **IN:** `s.Split(' ')` (or another single separator) returns a **`string[]`** (Ch.7: `.Length`, index,
  loop); `string.Join(", ", parts)` glues an array back into one string with a separator. The round trip:
  split, work on the pieces (count / pick one / transform each), join back. Each piece is itself a string
  (8.1-8.3 apply). Edge: splitting the empty string, and a trailing separator yielding an empty piece (named,
  kept simple).
- **OUT:** search (8.2), the transform methods beyond incidental use (8.3), char-by-char building (8.5);
  `Split` with multiple separators or `StringSplitOptions`; regex. The count-then-words shape reuses Ch.7
  input.

## Grading approach
- `stdout-match`, input via stdin. Either a single line to split, or the count-then-values shape (read `n`,
  then `n` words) to join. **Vary word counts** (several, one, and the empty-string edge). The array walk is
  the Ch.7 walk, so a length-0/1 piece-array behaves as in Ch.7. Oracle CLI generates expecteds.

## The family (escalating)

| # | Task | Sub-skill | Diff |
|---|------|-----------|------|
| p01 | split a space-separated line, print the number of words | Split + .Length | ● |
| p02 | split and print each word on its own line | Split -> Ch.7 loop | ●● |
| p03 | split and print the first word | parts[0] | ●● |
| p04 | split and print the last word | parts[Length-1] | ●● |
| p05 | split and print the Nth word (read N, in-bounds) | index a piece | ●● |
| p06 | read n then n words, join with ", " and print | string.Join | ●● |
| p07 | split on a read separator char, print the count | Split(sep) | ●● |
| p08 | split, print the words in reverse order (Ch.7 reverse walk) | loop the array | ●● |
| p09 | read n words, join with a read separator | Join(sep, arr) | ●● |
| p10 | split a line, print each word upper-cased (transform each piece) | split + 8.3 per piece | ●●● |
| p11 | split then re-join with a different separator (round trip) | Split + Join | ●●● |
| p12 | fix a bug: joins with the wrong call / wrong arg order in string.Join | debug: Join usage | ●●● |

**Escalation:** p01-p02 split and size/loop; p03-p05 index a piece (first/last/Nth); p06-p07 join and a chosen
separator; p08-p09 reverse walk and join-with-separator; p10-p11 transform-each and the round trip; p12 the
Join-usage bug.

## Per-problem intent (bones)
- **p01** `s.Split(' ').Length` -> word count.
- **p02** `foreach (string w in s.Split(' ')) print w`.
- **p03** `s.Split(' ')[0]`.
- **p04** `parts[parts.Length - 1]`.
- **p05** read N; print `s.Split(' ')[n]` (in-bounds).
- **p06** read n then n words into a `string[]`; print `string.Join(", ", parts)`.
- **p07** read a line and a separator char; print `s.Split(sep).Length`.
- **p08** split, loop from `Length-1` down, print each word.
- **p09** read n words and a separator string; print `string.Join(sep, parts)`.
- **p10** split, print each `w.ToUpper()` (each piece is a string).
- **p11** split on space, print `string.Join("-", parts)` (space-separated in, hyphen-separated out).
- **p12** starter misuses `string.Join` (swapped args, or joins with `+` in a wrong way); fix to
  `string.Join(sep, arr)`. Committed solution is correct.

## Notes
- **`Split` returns a `string[]`** (the explicit Ch.7 tie): `.Length`, index, loop all apply, and a length-0
  or length-1 piece-array behaves exactly as a Ch.7 array.
- **`string.Join(separator, array)`** is the inverse; mind the argument order (separator first), p12's bug.
- Vary word counts incl. one word and the empty string. Stay in bounds when indexing a piece. Country-neutral.
  Terse statements. Prompts on their own line where a problem prompts.
