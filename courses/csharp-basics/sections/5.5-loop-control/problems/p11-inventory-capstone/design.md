# Problem 11, Inventory capstone (language-independent design)

**Sub-skill:** integrative, `break` and `continue` together in one scan.
**Difficulty:** 3

## Statement (student-facing)
Prompt `Enter count, threshold, then quantities:` on its own line. Read a count `n` (line 1), a threshold
(line 2), then `n` quantities (one per line). Scan the quantities in order:

- Stop scanning (use `break`) at the first quantity that is `0` (out of stock).
- While scanning, count how many quantities are "low": greater than 0 but below the threshold. Skip the
  healthy ones (quantity at or above the threshold) with `continue`. A quantity of `0` is not counted as low
  (it ends the scan instead).

Print two lines: first the low-stock count, then the 1-based position of the first out-of-stock quantity (or
`0` if no quantity was 0).

## I/O contract
- **Input:** `n`, then the threshold, then `n` quantities.
- **Output:** the prompt, then the low-stock count, then the first-zero position (or `0`).

## Why it resists a trivial answer
The scan uses `continue` to skip healthy items and `break` to stop at the first out-of-stock one, and it
reports two results. Cases cover an early stop, no zero at all, a zero in first position, all-low with no
zero, and a mix, so both controls and both counters must be correct.

## Note
Check for `0` first (break, record the position); then check "low" (`> 0 && < threshold`), counting it;
otherwise `continue` past a healthy item. Order the checks so `0` is handled before the low test.
