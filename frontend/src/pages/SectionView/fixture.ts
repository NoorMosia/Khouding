import type { SectionData } from '../../types/section'

export const SECTION_1_3: SectionData = {
  id: '1.3-number-variables',
  courseId: 'csharp-basics',
  chapterId: '1',
  number: '1.3',
  title: 'Number variables: int and double',
  subtitle: 'Declare, initialise, and reassign numbers, and choose int vs double.',
  lightsAt: 9,

  readingMarkdown: `# Number variables: int and double

## What a variable is

A variable is a named place that holds a value. You give it a name, you put a value in it, and whenever you use the name you get whatever value it currently holds. You can give it a new value later; the old one is replaced.

This section works with variables that hold **numbers**.

## Two kinds of number

C# makes you say *what kind* of number a variable holds. Two you will use constantly:

- **\`int\`** is a whole number. No fractional part. Ages, counts, how many times something happened. \`0\`, \`42\`, \`-7\`.
- **\`double\`** is a number that can have a decimal part. Prices, measurements, averages. \`3.14\`, \`4.99\`, \`-0.5\`.

The decision you make every time: **can this value ever need a fractional part?** If yes, \`double\`. If it is always a whole thing you count, \`int\`.

> A count of students is an \`int\`. You never have 3.5 students.
> A height in metres is a \`double\`. 1.72 is a perfectly normal height.

## Declaring and initialising

To make a variable: write its **type**, then its **name**, then a starting value.

\`\`\`csharp
int age = 19;
double price = 4.99;
Console.WriteLine(age);
Console.WriteLine(price);
\`\`\`

Output:

\`\`\`
19
4.99
\`\`\`

Read \`int age = 19;\` left to right: "make an \`int\` called \`age\`, and put \`19\` in it." The \`=\` does **not** mean "equals" in the maths sense. It means **put this value into this variable**. Say it in your head as "age *gets* 19", never "age *equals* 19". That misreading is the most common beginner trap.

## Reassigning

You can give an existing variable a new value. Do not repeat the type; the variable already exists.

\`\`\`csharp
int score = 10;
score = 25;
Console.WriteLine(score);
\`\`\`

Output:

\`\`\`
25
\`\`\`

Only the *first* mention needs the type. After that, just the name. The old \`10\` is gone.

## A value that never changes: const

Sometimes a value should never change once set. Mark it \`const\` and C# will stop you from reassigning it by mistake.

\`\`\`csharp
const int DaysInWeek = 7;
int weeks = 3;
Console.WriteLine(weeks * DaysInWeek);
\`\`\`

Output:

\`\`\`
21
\`\`\`

A \`const\` also gives a bare number a *name*. \`weeks * DaysInWeek\` says what the \`7\` means. Named constants make code read for itself.

## Using numbers together

Once numbers are in variables, combine them with \`+\`, \`-\`, and \`*\`.

\`\`\`csharp
int apples = 3;
int oranges = 5;
int total = apples + oranges;
Console.WriteLine(total);
\`\`\`

Output:

\`\`\`
8
\`\`\`

Add, subtract, multiply. Division has a surprise in it, so it waits for the next chapter.
`,

  quiz: {
    pass: 5,
    total: 7,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        prompt: 'Which type best fits the price of a coffee?',
        options: [
          { id: 'a', text: 'int' },
          { id: 'b', text: 'double' },
          { id: 'c', text: 'either works equally well' },
          { id: 'd', text: 'neither can hold a price' },
        ],
        answer: 'b',
        rationale: 'A price can be fractional, so double.',
      },
      {
        id: 'q2',
        type: 'mcq',
        prompt: 'Which type best fits the number of students in a class?',
        options: [
          { id: 'a', text: 'int' },
          { id: 'b', text: 'double' },
          { id: 'c', text: 'a text type' },
          { id: 'd', text: 'either, it does not matter' },
        ],
        answer: 'a',
        rationale: 'A count of students is always a whole number, so int.',
      },
      {
        id: 'q3',
        type: 'truefalse',
        prompt: 'In `int x = 5;` the `=` tests whether x equals 5.',
        answer: 'false',
        rationale: '`=` stores a value. Read it "x gets 5", not "x equals 5".',
      },
      {
        id: 'q4',
        type: 'mcq',
        prompt: 'After these two lines, what does score hold?\n  int score = 10;\n  score = 25;',
        options: [
          { id: 'a', text: '10' },
          { id: 'b', text: '25' },
          { id: 'c', text: '35' },
          { id: 'd', text: 'an error: you cannot change a variable' },
        ],
        answer: 'b',
        rationale: 'Reassignment overwrites. The 10 is gone; score holds 25.',
      },
      {
        id: 'q5',
        type: 'truefalse',
        prompt: 'A `const` can be reassigned a new value later in the program.',
        answer: 'false',
        rationale: 'A const is fixed once set. Trying to reassign it does not compile.',
      },
      {
        id: 'q6',
        type: 'fillblank',
        prompt: 'To create a whole-number variable called count starting at 0, write:\n____ count = 0;',
        answer: 'int',
        accept: ['int'],
        rationale: 'int is the whole-number type.',
      },
      {
        id: 'q7',
        type: 'mcq',
        prompt: 'Why might `0.1 + 0.2` print as 0.30000000000000004?',
        options: [
          { id: 'a', text: 'it is a bug in C#' },
          { id: 'b', text: 'double is approximate: it trades exactness for a huge range' },
          { id: 'c', text: 'you must use int for addition' },
          { id: 'd', text: 'the numbers are too large' },
        ],
        answer: 'b',
        rationale: 'double stores most decimals a hair off. That is normal, not a bug.',
      },
    ],
  },

  problems: [
    { id: 'p01-declare-an-int',       slug: 'p01', title: 'Declare an int',         difficulty: 1, status: 'solved' },
    { id: 'p02-declare-a-double',     slug: 'p02', title: 'Declare a double',       difficulty: 1, status: 'solved' },
    { id: 'p03-choose-the-type',      slug: 'p03', title: 'Choose the type',        difficulty: 1, status: 'attempted' },
    { id: 'p04-reassign-a-value',     slug: 'p04', title: 'Reassign a value',       difficulty: 1, status: 'solved' },
    { id: 'p05-const-days',           slug: 'p05', title: 'Const days',             difficulty: 2, status: 'solved' },
    { id: 'p06-named-constants',      slug: 'p06', title: 'Named constants',        difficulty: 2, status: 'solved' },
    { id: 'p07-sum-two-ints',         slug: 'p07', title: 'Sum two ints',           difficulty: 2, status: 'solved' },
    { id: 'p08-difference-two-ints',  slug: 'p08', title: 'Difference two ints',    difficulty: 2, status: 'solved' },
    { id: 'p09-product-two-ints',     slug: 'p09', title: 'Product two ints',       difficulty: 2, status: 'solved' },
    { id: 'p10-total-cost',           slug: 'p10', title: 'Total cost',             difficulty: 2, status: 'unsolved' },
    { id: 'p11-rectangle-area',       slug: 'p11', title: 'Rectangle area',         difficulty: 2, status: 'unsolved' },
    { id: 'p12-swap-two-values',      slug: 'p12', title: 'Swap two values',        difficulty: 3, status: 'unsolved' },
    { id: 'p13-fix-the-int-bug',      slug: 'p13', title: 'Fix the int bug',        difficulty: 2, status: 'unsolved' },
    { id: 'p14-fix-the-assignment-bug', slug: 'p14', title: 'Fix the assignment bug', difficulty: 2, status: 'unsolved' },
    { id: 'p15-model-the-scenario',   slug: 'p15', title: 'Model the scenario',     difficulty: 3, status: 'unsolved' },
  ],
}
