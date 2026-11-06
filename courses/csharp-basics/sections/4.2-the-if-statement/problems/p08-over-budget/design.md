# Problem 08, Over budget (language-independent design)

**Sub-skill:** a small computation inside the guarded block.
**Difficulty:** 2

## Statement (student-facing)
Read a spend and a budget (each prompted on its own line). If the spend is over the budget, print how far over
it is (`spend - budget`). If it is not over, print nothing after the prompts.

## I/O contract
- **Input:** two lines, each a whole number: spend, then budget.
- **Output:** the two prompts, then the overage only when `spend > budget`.

## Why it resists a trivial answer
The guarded line is computed, not a fixed message, so the output varies with the inputs. Equal is not over
(`>` is strict, so `100` vs `100` skips), and the over cases produce different overages, defeating a copied
literal.
