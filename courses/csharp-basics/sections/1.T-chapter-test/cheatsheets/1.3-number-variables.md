# Cheatsheet, 1.3 Number variables

*This section only. Forgotten something older? Look it up, be resourceful, that is part of the craft.*

## Declare and initialise
```csharp
int    age   = 19;      // whole number
double price = 4.99;    // can be fractional
```
`type name = value;`

> **`=` means "put this value into the variable", not equality.**
> Read `age = 19` as *"age gets 19"*, not *"age equals 19"*.

## Reassign (no type the second time)
```csharp
int score = 10;
score = 25;   // score now holds 25; the 10 is gone
```

## const (a value that never changes)
```csharp
const int DaysInWeek = 7;
```
Gives a number a name and stops it being reassigned by mistake.

## Choosing the type
| Can it be fractional? | Use | Examples |
|---|---|---|
| no, a whole count | `int` | students, days, clicks |
| yes, decimals matter | `double` | price, height, average |

## Combine with + - *
```csharp
int total = apples + oranges;
int area  = width * height;
```
Add, subtract, multiply. (Division waits for Chapter 2.)

## Common errors here
| Message | Usually means | Fix |
|---|---|---|
| `CS0266: Cannot implicitly convert type 'double' to 'int'` | a fractional value is being stored in an `int` | make the variable a `double` |
| `CS0165: Use of unassigned local variable 'x'` | you read a variable before giving it a value | assign it before you use it |
