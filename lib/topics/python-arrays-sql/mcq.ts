import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "python-arrays-sql-m1",
    title: "Paper 1: Core Concepts — Types, Loops, Strings, Arrays & SQL",
    questions: [
      {
        id: "python-arrays-sql-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "variables-types-operators",
        question:
          "Which CIE 0478 data type is most appropriate for storing a customer's mobile telephone number such as `\"07700 900451\"`?",
        options: ["REAL", "INTEGER", "CHAR", "STRING"],
        answerIndex: 3,
        hints: ["Consider what happens to the leading `0` and the space if stored as a number."],
        explanation:
          "`STRING` preserves the leading zero and embedded space, and phone numbers are never used in arithmetic. `INTEGER` would strip the leading `0` and reject the space, while `CHAR` holds only a single character.",
      },
      {
        id: "python-arrays-sql-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "variables-types-operators",
        question: "What are the values of `A` and `B` after executing `A ← 29 DIV 6` and `B ← 29 MOD 6`?",
        options: [
          "A = 4 and B = 1",
          "A = 4.83 and B = 5",
          "A = 4 and B = 5",
          "A = 5 and B = 4",
        ],
        answerIndex: 2,
        hints: ["`6 × 4 = 24`. How many whole 6s fit into 29, and what is left over?"],
        explanation:
          "`29 DIV 6` gives the whole integer quotient `4` (`6 × 4 = 24`), and `29 MOD 6` gives the remainder `29 − 24 = 5`. Swapping `DIV` and `MOD` produces the common distractor `A = 5, B = 4`.",
      },
      {
        id: "python-arrays-sql-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "variables-types-operators",
        question:
          "Which CIE 0478 pseudocode statement correctly declares a **constant** named `MaxPlayers` with value `8`?",
        options: [
          "CONSTANT MaxPlayers ← 8",
          "DECLARE MaxPlayers : CONSTANT ← 8",
          "CONSTANT MaxPlayers : INTEGER = 8",
          "DECLARE CONSTANT MaxPlayers ← 8",
        ],
        answerIndex: 0,
        hints: [
          "In CIE pseudocode, `DECLARE` is used for variables, whereas constants use a different keyword.",
          "Constant declarations assign a literal value directly with `←` and do not include `: TYPE`.",
        ],
        explanation:
          "CIE 0478 pseudocode syntax for constants is `CONSTANT <Identifier> ← <Value>`, so `CONSTANT MaxPlayers ← 8` is exact. `DECLARE` is reserved for variables (`DECLARE MaxPlayers : INTEGER`).",
      },
      {
        id: "python-arrays-sql-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "selection-iteration",
        question:
          "How many times does the loop body execute in the Python snippet `for k in range(2, 7): print(k)`?",
        options: ["6 times", "7 times", "4 times", "5 times"],
        answerIndex: 3,
        hints: ["In Python `range(start, stop)`, `start` is included and `stop` is excluded."],
        explanation:
          "`range(2, 7)` generates `2, 3, 4, 5, 6` — which is `7 − 2 = 5` values. Treating `7` as inclusive (like CIE `FOR k ← 2 TO 7`) gives the distractor `6 times`.",
      },
      {
        id: "python-arrays-sql-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "selection-iteration",
        question:
          "What is output by the following CIE pseudocode?\n`N ← 12`\n`REPEAT`\n`  N ← N - 5`\n`UNTIL N < 10`\n`OUTPUT N`",
        options: ["2", "7", "-3", "12"],
        answerIndex: 1,
        hints: [
          "`REPEAT ... UNTIL` checks its condition at the **end** of each iteration.",
          "Does `REPEAT ... UNTIL` stop when the condition is `TRUE` or `FALSE`?",
        ],
        explanation:
          "On the first pass, `N` becomes `12 − 5 = 7`. Then `UNTIL N < 10` tests `7 < 10`, which is `TRUE`, so the loop stops immediately and outputs `7`. Thinking `12` never enters the loop confuses `REPEAT..UNTIL` with `WHILE`, and getting `2` loops while `TRUE` instead of stopping on `TRUE`.",
      },
      {
        id: "python-arrays-sql-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "selection-iteration",
        question:
          "Which selection construct is specifically designed to branch cleanly on several discrete values of a **single** variable (such as `Choice` being `'1'`, `'2'`, `'3'`, or anything else)?",
        options: [
          "CASE OF ... OTHERWISE ... ENDCASE",
          "FOR ... TO ... NEXT",
          "WHILE ... DO ... ENDWHILE",
          "REPEAT ... UNTIL",
        ],
        answerIndex: 0,
        hints: [
          "Eliminate the three loop constructs first.",
          "Look for the multi-way selection keyword in CIE pseudocode.",
        ],
        explanation:
          "`CASE OF Choice ... OTHERWISE ... ENDCASE` is CIE's multi-way selection structure for testing discrete values of one expression. The other three choices are iteration (loop) structures.",
      },
      {
        id: "python-arrays-sql-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "strings-subroutines-scope",
        question:
          "Given `Title ← \"CYBERSECURITY\"`, what string is returned by the CIE pseudocode call `SUBSTRING(Title, 6, 4)`?",
        options: ["\"CURI\"", "\"RSEC\"", "\"ECUR\"", "\"SECU\""],
        answerIndex: 3,
        hints: ["Remember CIE `SUBSTRING(S, start, length)` starts counting at `1` (`1=C, 2=Y, 3=B, 4=E, 5=R, 6=S`)."],
        explanation:
          "Counting from position 1: `1:C, 2:Y, 3:B, 4:E, 5:R, 6:S, 7:E, 8:C, 9:U`. Starting at position `6` (`'S'`) and taking `4` characters gives `\"SECU\"`. Starting from index `0` gives the distractor `\"ECUR\"`.",
      },
      {
        id: "python-arrays-sql-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "strings-subroutines-scope",
        question:
          "In Python, `word = \"DATABASE\"`. Which slice expression evaluates to `\"TABA\"`?",
        options: ["word[3:4]", "word[2:5]", "word[2:6]", "word[3:7]"],
        answerIndex: 2,
        hints: [
          "Python strings are 0-indexed: `0:D, 1:A, 2:T, 3:A, 4:B, 5:A, 6:S, 7:E`.",
          "In `word[start:stop]`, `stop` is the first index **excluded**.",
        ],
        explanation:
          "`'T'` is at index `2` and `'TABA'` spans indices `2, 3, 4, 5`, so the exclusive stop index must be `6` → `word[2:6]`. Writing `word[3:4]` applies CIE's 1-based `(start, length)` rules to Python.",
      },
      {
        id: "python-arrays-sql-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "strings-subroutines-scope",
        question:
          "What is the defining difference between a `PROCEDURE` and a `FUNCTION` in CIE 0478 pseudocode?",
        options: [
          "A PROCEDURE runs faster than a FUNCTION because it is compiled separately.",
          "A FUNCTION returns a value into an expression, whereas a PROCEDURE does not return a value and is invoked with CALL.",
          "A PROCEDURE can accept parameters, whereas a FUNCTION cannot accept any parameters.",
          "A FUNCTION can only use global variables, whereas a PROCEDURE uses local variables.",
        ],
        answerIndex: 1,
        hints: [
          "Both procedures and functions can take parameters and declare local variables.",
          "Focus on `RETURN` / `RETURNS` versus `CALL`.",
        ],
        explanation:
          "A `FUNCTION` always returns a single result (`RETURNS <TYPE>`) used inside an expression (`X ← Double(5)`), while a `PROCEDURE` performs actions without returning a value (`CALL PrintMenu()`). Both can use parameters and local variables.",
      },
      {
        id: "python-arrays-sql-m1-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "arrays-files",
        question:
          "How many elements can be stored in the 1D array declared as `DECLARE Readings : ARRAY[0:11] OF REAL`?",
        options: ["10", "11", "12", "22"],
        answerIndex: 2,
        hints: ["Count carefully from index `0` up to index `11` inclusive (`Upper − Lower + 1`)."],
        explanation:
          "Indices `0` through `11` inclusive contain `11 − 0 + 1 = 12` elements. Answering `11` forgets index `0`.",
      },
      {
        id: "python-arrays-sql-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "arrays-files",
        question:
          "Which sequence of CIE pseudocode statements correctly reads a single line from `\"notes.txt\"` into `TextLine` and closes the file?",
        options: [
          "OPENFILE notes.txt FOR READ → WRITEFILE notes.txt, TextLine → CLOSEFILE notes.txt",
          "READFILE \"notes.txt\" → TextLine ← \"notes.txt\" → CLOSEFILE \"notes.txt\"",
          "OPENFILE \"notes.txt\" FOR READ → READFILE \"notes.txt\", TextLine → CLOSEFILE \"notes.txt\"",
          "OPEN \"notes.txt\" READ → INPUT \"notes.txt\", TextLine → CLOSE \"notes.txt\"",
        ],
        answerIndex: 2,
        hints: [
          "Check the exact CIE keywords: `OPENFILE ... FOR READ`, `READFILE`, and `CLOSEFILE`.",
          "Filenames must be enclosed in double quotation marks.",
        ],
        explanation:
          "CIE 0478 requires `OPENFILE \"notes.txt\" FOR READ`, followed by `READFILE \"notes.txt\", TextLine`, and `CLOSEFILE \"notes.txt\"`. Using `OPEN`/`CLOSE` or omitting quotes around the filename loses syntax marks.",
      },
      {
        id: "python-arrays-sql-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "arrays-files",
        question:
          "Why does a program write high scores to an external text file rather than storing them only in a 1D array?",
        options: [
          "Text files automatically sort scores into descending order without needing Bubble Sort.",
          "Arrays are stored in volatile RAM and lost when the program ends, whereas files persist on non-volatile secondary storage.",
          "Arrays can only store `STRING` values whereas text files only store `INTEGER` values.",
          "Text files live in CPU registers so they can be accessed faster than arrays in RAM.",
        ],
        answerIndex: 1,
        hints: [
          "Think about what happens to RAM when a program closes or power is turned off.",
          "Where are files stored?",
        ],
        explanation:
          "Variables and arrays exist in volatile RAM, so their data disappears when execution ends. Writing to a file stores the data permanently on secondary storage (SSD/HDD) so it can be reloaded next time.",
      },
      {
        id: "python-arrays-sql-m1-q13",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "databases-sql",
        question:
          "In a single-table database storing hospital patients, each horizontal row of related data about one patient is called a:",
        options: ["Record", "Field", "Query", "Primary key"],
        answerIndex: 0,
        hints: ["Columns are fields (attributes); what are complete rows called?"],
        explanation:
          "A **record** is a complete horizontal row representing one entity (one patient). A **field** is a vertical column storing a single attribute (such as `DateOfBirth`).",
      },
      {
        id: "python-arrays-sql-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "databases-sql",
        question:
          "Which SQL query correctly displays only `ItemName` and `Price` from the `Products` table for items in the `'Audio'` category costing less than `50`, sorted most expensive first?",
        options: [
          "SELECT ItemName, Price FROM Products WHERE Category = 'Audio' AND Price < 50 ORDER BY Price DESC;",
          "SELECT * FROM Products WHERE Category = Audio AND Price < 50 ORDER BY Price DESC;",
          "SELECT ItemName, Price FROM Products WHERE Category = 'Audio' AND Price < '50' ORDER BY Price ASC;",
          "SELECT ItemName, Price FROM Products ORDER BY Price DESC WHERE Category = 'Audio' AND Price < 50;",
        ],
        answerIndex: 0,
        hints: [
          "Check three things: exact columns in `SELECT`, single quotes on `'Audio'` (not `50`), and `WHERE` before `ORDER BY`.",
          "'Most expensive first' means largest to smallest (`DESC`).",
        ],
        explanation:
          "`SELECT ItemName, Price FROM Products WHERE Category = 'Audio' AND Price < 50 ORDER BY Price DESC;` lists only the two requested fields, quotes `'Audio'`, leaves numeric `50` unquoted, puts `WHERE` before `ORDER BY`, and sorts descending (`DESC`).",
      },
      {
        id: "python-arrays-sql-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "databases-sql",
        question:
          "Consider the `Orders` table below:\n| OrderID | Customer | Club | Qty |\n|---|---|---|---|\n| K1 | Ava | Chess | 3 |\n| K2 | Ben | Drama | 5 |\n| K3 | Ava | Chess | 4 |\n| K4 | Dan | Chess | 2 |\n\nWhat pair of numbers is returned by `SELECT COUNT(OrderID) FROM Orders WHERE Club = 'Chess';` and `SELECT SUM(Qty) FROM Orders WHERE Club = 'Chess';` respectively?",
        options: [
          "COUNT = 4 and SUM = 14",
          "COUNT = 3 and SUM = 9",
          "COUNT = 9 and SUM = 3",
          "COUNT = 2 and SUM = 9",
        ],
        answerIndex: 1,
        hints: [
          "Filter to rows with `Club = 'Chess'` first: `K1` (`Qty=3`), `K3` (`Qty=4`), and `K4` (`Qty=2`).",
          "`COUNT` counts matching rows; `SUM(Qty)` adds their `Qty` values.",
        ],
        explanation:
          "Three records (`K1`, `K3`, `K4`) have `Club = 'Chess'`, so `COUNT(OrderID) = 3`. Adding their `Qty` values gives `3 + 4 + 2 = 9`. Reversing the two functions gives `COUNT = 9, SUM = 3`, and counting distinct customers instead of rows gives `2`.",
      },
    ],
  },
  {
    id: "python-arrays-sql-m2",
    title: "Paper 2: Code Tracing, Translation Traps & Database Design",
    questions: [
      {
        id: "python-arrays-sql-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "variables-types-operators",
        question:
          "A three-digit integer `Num ← 749` is processed by:\n`Hundreds ← Num DIV 100`\n`Units ← Num MOD 10`\n`Result ← Hundreds + Units`\nWhat is the value of `Result`?",
        options: ["83.9", "16", "11", "13"],
        answerIndex: 1,
        hints: [
          "What is `749 DIV 100` (whole hundreds)?",
          "What is `749 MOD 10` (remainder after dividing by 10)?",
        ],
        explanation:
          "`749 DIV 100 = 7` and `749 MOD 10 = 9`, so `Result = 7 + 9 = 16`. Adding `7 + 4 = 11` or `4 + 9 = 13` extracts the tens digit instead.",
      },
      {
        id: "python-arrays-sql-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "variables-types-operators",
        question:
          "Which Python `if` statement is the exact translation of the CIE pseudocode line `IF Score <> 100 AND Passed = TRUE THEN`?",
        options: [
          "if score != 100 and passed == True:",
          "if score != 100 or passed == True:",
          "if score <> 100 and passed = True:",
          "if not score == 100 and passed = True:",
        ],
        answerIndex: 0,
        hints: [
          "CIE `<>` translates to `!=` in Python.",
          "CIE equality `=` translates to `==` in Python (`=` in Python is assignment and causes a `SyntaxError` inside `if`!).",
        ],
        explanation:
          "In Python, not-equal is `!=`, equality comparison is `==`, and logical `AND` is lowercase `and` (`if score != 100 and passed == True:`). Writing `=` inside `if` or `<>` raises a `SyntaxError` in Python 3.",
      },
      {
        id: "python-arrays-sql-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "variables-types-operators",
        question: "What is the data type of the result of `15 / 3` in Python 3?",
        options: ["float", "int", "str", "bool"],
        answerIndex: 0,
        hints: ["Remember `/` vs `//` in Python 3, even when division has zero remainder!"],
        explanation:
          "In Python 3, single-slash `/` **always** performs floating-point division, returning `5.0` (`float`). Integer floor division `15 // 3` returns `5` (`int`).",
      },
      {
        id: "python-arrays-sql-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "selection-iteration",
        question:
          "A validation loop currently uses `WHILE`:\n`INPUT Age`\n`WHILE Age < 11 OR Age > 18 DO`\n`  INPUT Age`\n`ENDWHILE`\nWhich `REPEAT ... UNTIL` loop accepts the **exact same** valid ages (`11` to `18` inclusive)?",
        options: [
          "REPEAT INPUT Age UNTIL Age > 11 AND Age < 18",
          "REPEAT INPUT Age UNTIL Age < 11 OR Age > 18",
          "REPEAT INPUT Age UNTIL Age >= 11 AND Age <= 18",
          "REPEAT INPUT Age UNTIL Age >= 11 OR Age <= 18",
        ],
        answerIndex: 2,
        hints: [
          "`REPEAT ... UNTIL` stops when the condition becomes `TRUE` (i.e. when `Age` IS valid).",
          "Check both `AND` vs `OR` and whether `11` and `18` themselves are included!",
        ],
        explanation:
          "Valid ages satisfy **both** `Age >= 11` **and** `Age <= 18`, so `UNTIL Age >= 11 AND Age <= 18` terminates as soon as a valid age in `11..18` is entered. Using `OR` is always `TRUE` for every number, and using `>` / `<` rejects the extreme valid values `11` and `18`.",
      },
      {
        id: "python-arrays-sql-m2-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "selection-iteration",
        question:
          "Trace this CIE pseudocode:\n`Sum ← 0`\n`FOR K ← 1 TO 6`\n`  IF K MOD 2 = 1 THEN`\n`    Sum ← Sum + K`\n`  ELSE`\n`    Sum ← Sum - 1`\n`  ENDIF`\n`NEXT K`\n`OUTPUT Sum`\nWhat value is output?",
        options: ["9", "7", "12", "6"],
        answerIndex: 3,
        hints: [
          "`K` runs through `1, 2, 3, 4, 5, 6` inclusive.",
          "Odd `K` (`1, 3, 5`) adds `K` to `Sum`; even `K` (`2, 4, 6`) subtracts `1` from `Sum`.",
        ],
        explanation:
          "Odd values `K = 1, 3, 5` add `1 + 3 + 5 = 9`. Even values `K = 2, 4, 6` each subtract `1` (`−3` total). Therefore `Sum = 9 − 3 = 6`. Ignoring the `ELSE` branch gives the distractor `9`.",
      },
      {
        id: "python-arrays-sql-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "selection-iteration",
        question:
          "What happens when the following loop runs?\n`Val ← 20`\n`WHILE Val < 10 DO`\n`  Val ← Val - 5`\n`ENDWHILE`\n`OUTPUT Val`",
        options: [
          "The loop body executes once and `15` is output.",
          "An infinite loop occurs because `Val` starts above `10`.",
          "The loop body executes 3 times and `5` is output.",
          "The loop body executes 0 times and `20` is output.",
        ],
        answerIndex: 3,
        hints: [
          "`WHILE` is a pre-condition loop: test `20 < 10` before entering the body.",
          "If `Val < 10` is `FALSE` immediately, where does execution jump?",
        ],
        explanation:
          "Because `WHILE` tests `Val < 10` at the top, `20 < 10` is `FALSE` right away. The loop body executes `0` times and `OUTPUT Val` prints `20`.",
      },
      {
        id: "python-arrays-sql-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "strings-subroutines-scope",
        question:
          "What string is output by this CIE pseudocode?\n`Msg ← \"igcse_cs\"`\n`Part ← UCASE(SUBSTRING(Msg, 1, 5))`\n`OUTPUT Part + \"_\" + STRING(LENGTH(Msg))`\n*(Note: `LENGTH(Msg)` is `8`.)*",
        options: [
          "\"IGCSE_8\"",
          "\"IGCS_8\"",
          "\"IGCSE_5\"",
          "\"IGCSE_3\"",
        ],
        answerIndex: 0,
        hints: [
          "`SUBSTRING(\"igcse_cs\", 1, 5)` takes `5` characters starting at position `1`, then `UCASE` capitalises them.",
          "`LENGTH(Msg)` counts all characters in `\"igcse_cs\"`, including the underscore!",
        ],
        explanation:
          "`SUBSTRING(Msg, 1, 5)` is `\"igcse\"`, `UCASE` makes it `\"IGCSE\"`, and `LENGTH(\"igcse_cs\")` is `8` (`5 + 1 + 2`), giving `\"IGCSE_8\"`. Taking `LENGTH(Part)` instead of `LENGTH(Msg)` produces `\"IGCSE_5\"`.",
      },
      {
        id: "python-arrays-sql-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "strings-subroutines-scope",
        question:
          "Consider the subroutine below:\n`FUNCTION Cube(N : INTEGER) RETURNS INTEGER`\n`  DECLARE Ans : INTEGER`\n`  Ans ← N * N * N`\n`  RETURN Ans`\n`ENDFUNCTION`\nWhich line in the main program calls `Cube` **validly** in CIE pseudocode?",
        options: [
          "RETURN Cube(4) TO Volume",
          "Cube(4) ← Volume",
          "Volume ← Cube(4)",
          "CALL Cube(4)",
        ],
        answerIndex: 2,
        hints: [
          "`Cube` is a `FUNCTION`, not a `PROCEDURE` — so `CALL` must NOT be used.",
          "In an assignment `Target ← Expression`, the variable receiving the value goes on the left of `←`.",
        ],
        explanation:
          "Because `Cube` is a `FUNCTION`, its returned value must be used in an expression such as `Volume ← Cube(4)` or `OUTPUT Cube(4)`. `CALL` is only valid for a `PROCEDURE`.",
      },
      {
        id: "python-arrays-sql-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "strings-subroutines-scope",
        question:
          "In the `Cube` function (`DECLARE Ans : INTEGER` inside `FUNCTION Cube`), why is declaring `Ans` as a **local** variable good practice?",
        options: [
          "It removes the need to pass the parameter `N` into `Cube`.",
          "It allows every other procedure in the program to read `Ans` directly after `Cube` finishes.",
          "It keeps `Ans` permanently in secondary storage between runs of the program.",
          "It prevents `Cube` from accidentally overwriting any variable also named `Ans` elsewhere in the program.",
        ],
        answerIndex: 3,
        hints: [
          "Where is a local variable visible, and what happens when the function ends?",
          "Think about name collisions in large multi-person programs.",
        ],
        explanation:
          "A local variable's scope is restricted to `Cube` alone, so changing `Ans` inside `Cube` cannot corrupt another variable named `Ans` in the main program or other subroutines, making `Cube` self-contained and reusable.",
      },
      {
        id: "python-arrays-sql-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "arrays-files",
        question:
          "A 2D Python list is defined as:\n`grid = [[10, 20, 30], [40, 50, 60], [70, 80, 90]]`\nWhat value does `grid[2][0] - grid[0][2]` evaluate to?",
        options: ["20", "40", "50", "-40"],
        answerIndex: 1,
        hints: [
          "Python lists are 0-indexed: row `0` is `[10, 20, 30]`, row `1` is `[40, 50, 60]`, row `2` is `[70, 80, 90]`.",
          "`grid[row][col]` indexes row first, column second.",
        ],
        explanation:
          "`grid[2][0]` is row index `2`, column index `0` → `70`. `grid[0][2]` is row index `0`, column index `2` → `30`. Subtracting gives `70 − 30 = 40`. Swapping row and column gives `30 − 70 = -40`.",
      },
      {
        id: "python-arrays-sql-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "arrays-files",
        question:
          "A programmer opens an existing file `\"report.txt\"` containing 50 lines using `OPENFILE \"report.txt\" FOR WRITE`, writes one line `\"Done\"`, and closes it. What does `\"report.txt\"` now contain?",
        options: [
          "The original 50 lines followed by `\"Done\"` on line 51.",
          "Nothing, because `WRITE` mode cannot modify an existing file.",
          "Only the single line `\"Done\"` (the previous 50 lines were overwritten).",
          "\"Done\" on line 1 followed by the original 50 lines.",
        ],
        answerIndex: 2,
        hints: [
          "In both CIE pseudocode (`FOR WRITE`) and Python (`\"w\"`), what happens to existing file contents when opened for writing?",
          "Contrast `WRITE` mode with `APPEND` mode.",
        ],
        explanation:
          "Opening an existing file `FOR WRITE` (Python `'w'`) creates a fresh empty file and **overwrites** all previous contents, leaving only `\"Done\"`.",
      },
      {
        id: "python-arrays-sql-m2-q12",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "arrays-files",
        question:
          "Which of the following does **NOT** help make source code easier for another programmer to understand and maintain?",
        options: [
          "Using consistent indentation inside selection and loop blocks",
          "Replacing all local variables and constants with single-letter global variables",
          "Adding concise comments explaining complex logic",
          "Using meaningful variable and subroutine identifiers",
        ],
        answerIndex: 1,
        hints: ["Look for the practice that actively harms readability and modularity."],
        explanation:
          "Single-letter global variables (`a`, `b`, `x`) obscure meaning and allow any part of the program to mutate shared state unpredictably. Meaningful identifiers, comments, and indentation are core maintainability techniques.",
      },
      {
        id: "python-arrays-sql-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "databases-sql",
        question:
          "A veterinary clinic creates a single-table database `Pets` with fields `PetName`, `Species`, `OwnerPhone`, `DateOfBirth`, and `MicrochipCode`. Which field is the best choice for the **Primary Key**?",
        options: ["PetName", "DateOfBirth", "MicrochipCode", "OwnerPhone"],
        answerIndex: 2,
        hints: [
          "Can one owner have two pets (sharing `OwnerPhone`), or two dogs both be named `'Bella'`?",
          "Which attribute is guaranteed unique to every single animal?",
        ],
        explanation:
          "Every microchipped animal has a globally unique `MicrochipCode`. By contrast, two pets can share a `PetName` (`'Max'`) or `DateOfBirth`, and one owner with multiple pets will repeat `OwnerPhone`.",
      },
      {
        id: "python-arrays-sql-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "databases-sql",
        question:
          "A student writes: `SELECT Name FROM Pupils WHERE House = 'Oak' OR 'Elm';` Why will CIE mark the `WHERE` clause wrong?",
        options: [
          "Text literals in SQL must use double quotes instead of single quotes.",
          "The field name `House =` must be repeated after `OR`: `WHERE House = 'Oak' OR House = 'Elm'`.",
          "`OR` is not a valid SQL keyword; `||` must be used instead.",
          "`SELECT Name` must come after `FROM Pupils`.",
        ],
        answerIndex: 1,
        hints: [
          "Look closely at what sits to the right of `OR`.",
          "Each side of `OR` / `AND` must be a complete Boolean comparison.",
        ],
        explanation:
          "In SQL, each condition joined by `OR` or `AND` must be a complete comparison (`WHERE House = 'Oak' OR House = 'Elm'`). Writing `OR 'Elm'` omits the field and operator, which is a classic CIE mark-scheme trap.",
      },
      {
        id: "python-arrays-sql-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "databases-sql",
        question:
          "Given the `Flights` table:\n| FlightNo | Dest |SeatsLeft | OnTime |\n|---|---|---|---|\n| SQ12 | Tokyo | 0 | TRUE |\n| BA09 | London | 14 | FALSE |\n| QF02 | Sydney | 8 | TRUE |\n| JL44 | Tokyo | 22 | TRUE |\n\nWhat is the exact output order of `FlightNo` for:\n`SELECT FlightNo FROM Flights WHERE SeatsLeft > 0 AND OnTime = TRUE ORDER BY SeatsLeft;`",
        options: [
          "QF02 then JL44",
          "JL44 then QF02",
          "SQ12, QF02, JL44",
          "QF02, BA09, JL44",
        ],
        answerIndex: 0,
        hints: [
          "Check `SeatsLeft > 0` (`SQ12` has `0`, so is `0 > 0` true?) and `OnTime = TRUE` (`BA09` is `FALSE`).",
          "When `ORDER BY SeatsLeft` omits `ASC`/`DESC`, what is SQL's default sort order?",
        ],
        explanation:
          "`SQ12` fails `SeatsLeft > 0` (`0` is not `> 0`) and `BA09` fails `OnTime = TRUE`, leaving `QF02` (`8`) and `JL44` (`22`). Because `ORDER BY` defaults to ascending (`ASC`), `8` comes before `22` → `QF02` then `JL44`.",
      },
    ],
  },
  {
    id: "python-arrays-sql-m3",
    title: "Paper 3: Exam-Level Synthesis & Adversarial Traps",
    questions: [
      {
        id: "python-arrays-sql-m3-q01",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "variables-types-operators",
        question:
          "A warehouse sensor counts `TotalItems ← 5`. What are the values of `Boxes ← TotalItems DIV 12` and `Loose ← TotalItems MOD 12`?",
        options: [
          "Boxes = 0 and Loose = 5",
          "Boxes = 0 and Loose = 0",
          "Boxes = 12 and Loose = 5",
          "Boxes = 2 and Loose = 4",
        ],
        answerIndex: 0,
        hints: [
          "Here the dividend `5` is **smaller** than the divisor `12`!",
          "Check `5 = (Boxes × 12) + Loose`: how many full dozens fit into 5?",
        ],
        explanation:
          "Zero full boxes of `12` can be made from `5` items (`5 DIV 12 = 0`), leaving all `5` items as the remainder (`5 MOD 12 = 5`, since `5 = 0 × 12 + 5`). Dividing backwards (`12 DIV 5 = 2`) is a frequent non-calculator slip.",
      },
      {
        id: "python-arrays-sql-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "variables-types-operators",
        question:
          "Which expression evaluates to `TRUE` **if and only if** positive integer `Year` is divisible by `4` AND NOT divisible by `100`?",
        options: [
          "Year MOD 4 = 1 AND Year MOD 100 = 0",
          "Year DIV 4 = 0 AND Year DIV 100 <> 0",
          "Year MOD 4 = 0 AND Year MOD 100 <> 0",
          "Year MOD 4 = 0 OR Year MOD 100 <> 0",
        ],
        answerIndex: 2,
        hints: [
          "Exact divisibility means the **remainder** (`MOD`) is `0`, not the quotient (`DIV`).",
          "'Not divisible by 100' means remainder `<> 0`.",
        ],
        explanation:
          "A number is divisible by `k` precisely when `Year MOD k = 0`. Thus divisible by `4` and not by `100` is `Year MOD 4 = 0 AND Year MOD 100 <> 0`. Using `DIV` tests whether `Year < 4` instead!",
      },
      {
        id: "python-arrays-sql-m3-q03",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "selection-iteration",
        question:
          "How many asterisks (`*`) are printed in total by these nested CIE loops?\n`FOR Row ← 1 TO 4`\n`  FOR Col ← Row TO 4`\n`    OUTPUT \"*\"`\n`  NEXT Col`\n`NEXT Row`",
        options: ["10", "12", "16", "6"],
        answerIndex: 0,
        hints: [
          "Notice the inner loop starts at `Col ← Row`, NOT `Col ← 1`!",
          "Count asterisks per row for `Row = 1`, `Row = 2`, `Row = 3`, and `Row = 4`.",
        ],
        explanation:
          "When `Row = 1`, `Col` runs `1..4` (`4` stars); `Row = 2` → `2..4` (`3` stars); `Row = 3` → `3..4` (`2` stars); `Row = 4` → `4..4` (`1` star). Total = `4 + 3 + 2 + 1 = 10` stars. Answering `16` (`4 × 4`) misses that `Col` starts at `Row`.",
      },
      {
        id: "python-arrays-sql-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "selection-iteration",
        question:
          "Trace this Python code:\n`x = 1`\n`while x < 20:`\n`    x = x * 3`\n`print(x)`\nWhat integer is printed?",
        options: ["18", "9", "27", "81"],
        answerIndex: 2,
        hints: [
          "Multiply `x` by `3` step-by-step: `1 → 3 → 9 → ...`",
          "Does the loop stop *at* `9`, or does `9 < 20` trigger one more multiplication?",
        ],
        explanation:
          "`x` takes values `1`, then `3` (`3 < 20`), then `9` (`9 < 20`), then `27`. Now `27 < 20` is `False`, so the loop exits and prints `27`. Stopping at `9` forgets that `9 < 20` is still `True`.",
      },
      {
        id: "python-arrays-sql-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "selection-iteration",
        question:
          "Look at this `CASE OF` block:\n`Grade ← 'D'`\n`CASE OF Grade`\n`  'A' : Points ← 10`\n`  'B' : Points ← 8`\n`  'C' : Points ← 6`\n`  OTHERWISE Points ← 2`\n`ENDCASE`\nWhat is the value of `Points` after `ENDCASE`?",
        options: ["0", "6", "An error occurs because 'D' is not listed", "2"],
        answerIndex: 3,
        hints: [
          "Check whether `'D'` matches `'A'`, `'B'`, or `'C'`.",
          "What is the role of the `OTHERWISE` clause in `CASE OF` when none of the listed values match?",
        ],
        explanation:
          "Because `'D'` does not match `'A'`, `'B'`, or `'C'`, execution falls into the `OTHERWISE` catch-all branch, setting `Points ← 2`.",
      },
      {
        id: "python-arrays-sql-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "strings-subroutines-scope",
        question:
          "In CIE pseudocode, `S` is a non-empty `STRING`. Which expression **always** extracts the **last two characters** of `S` (assuming `LENGTH(S) >= 2`)?",
        options: [
          "SUBSTRING(S, LENGTH(S) - 1, 2)",
          "SUBSTRING(S, LENGTH(S) - 2, 2)",
          "SUBSTRING(S, LENGTH(S), 2)",
          "SUBSTRING(S, -2, 2)",
        ],
        answerIndex: 0,
        hints: [
          "Test with a concrete 5-letter word like `S = \"APPLE\"` (`LENGTH(S) = 5`), where the last two letters `'LE'` start at position `4`!",
          "Which formula gives `4` when `LENGTH(S) = 5`?",
        ],
        explanation:
          "For `S = \"APPLE\"` (`LENGTH = 5`), positions `4` and `5` are the last two characters, so start must be `5 − 1 = 4` (`LENGTH(S) - 1`) with length `2`. `LENGTH(S) - 2` starts at position `3` (`\"PLE\"` / `\"PL\"`), a classic fencepost slip!",
      },
      {
        id: "python-arrays-sql-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "strings-subroutines-scope",
        question:
          "What is output by this CIE pseudocode demonstrating variable scope?\n`DECLARE Score : INTEGER`\n`PROCEDURE Boost(Val : INTEGER)`\n`  DECLARE Score : INTEGER`\n`  Score ← Val + 50`\n`ENDPROCEDURE`\n`Score ← 10`\n`CALL Boost(10)`\n`OUTPUT Score`",
        options: ["60", "10", "70", "50"],
        answerIndex: 1,
        hints: [
          "Look inside `PROCEDURE Boost`: `DECLARE Score : INTEGER` creates a **local** variable named `Score`.",
          "Does modifying local `Score` inside `Boost` alter the global `Score` outside?",
        ],
        explanation:
          "Because `Boost` declares its own **local** `Score`, `Score ← Val + 50` only modifies the local variable (which disappears when `Boost` ends). Global `Score` remains `10`, so `10` is output.",
      },
      {
        id: "python-arrays-sql-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "strings-subroutines-scope",
        question:
          "Which CIE 0478 library routine expression always evaluates to a whole integer between `1` and `6` inclusive?",
        options: [
          "DIV(ROUND(RANDOM() * 1000, 0), 6) + 1",
          "ROUND(RANDOM() * 6, 0)",
          "ROUND(RANDOM() * 5, 0) + 1",
          "MOD(RANDOM(), 6) + 1",
        ],
        answerIndex: 2,
        hints: [
          "In CIE 0478, `RANDOM()` returns a real number between `0` and `1` inclusive.",
          "Check the minimum (`RANDOM() = 0`) and maximum (`RANDOM() = 1`) of each expression!",
        ],
        explanation:
          "`RANDOM() * 5` spans `0.0` to `5.0`; rounding to `0` decimal places gives a whole integer in `0..5`; adding `1` shifts the range to `1..6` inclusive. `ROUND(RANDOM() * 6, 0)` spans `0..6` (`7` possible integers including `0`).",
      },
      {
        id: "python-arrays-sql-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "arrays-files",
        question:
          "How many total `STRING` elements are stored in `DECLARE Timetable : ARRAY[1:5, 0:7] OF STRING`?",
        options: ["48", "40", "13", "35"],
        answerIndex: 1,
        hints: [
          "First dimension `1:5` has `5 − 1 + 1 = 5` rows.",
          "Second dimension `0:7` starts at `0` — how many columns is `0` through `7` inclusive?",
        ],
        explanation:
          "Dimension 1 (`1:5`) has `5` rows, and dimension 2 (`0:7`) has `7 − 0 + 1 = 8` columns. Total capacity = `5 × 8 = 40` strings. Answering `35` (`5 × 7`) forgets column `0`.",
      },
      {
        id: "python-arrays-sql-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "arrays-files",
        question:
          "A 1D array `A[1:4]` initially holds `[4, 1, 3, 2]` (`A[1]=4, A[2]=1, A[3]=3, A[4]=2`). What is `A[A[3]] + A[A[1]]`?",
        options: ["5", "6", "4", "7"],
        answerIndex: 0,
        hints: [
          "Evaluate the inner array lookups first: what is `A[3]` and what is `A[1]`?",
          "Substitute those integers as the new indices!",
        ],
        explanation:
          "`A[3] = 3`, so `A[A[3]] = A[3] = 3`. `A[1] = 4`, so `A[A[1]] = A[4] = 2`. Adding them gives `3 + 2 = 5`.",
      },
      {
        id: "python-arrays-sql-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "arrays-files",
        question:
          "In Python, why is `with open(\"scores.txt\", \"r\") as f:` preferred over manual `f = open(\"scores.txt\", \"r\")`?",
        options: [
          "It converts all lines in the text file into `int` automatically.",
          "It loads the file into ROM instead of RAM.",
          "It automatically encrypts the file contents using symmetric encryption.",
          "It guarantees the file is automatically closed when leaving the `with` block, even if an error occurs.",
        ],
        answerIndex: 3,
        hints: [
          "Think about what CIE `CLOSEFILE` step programmers often forget after `open(...)`.",
          "What happens when execution exits a Python `with` block, even if a runtime exception occurs?",
        ],
        explanation:
          "Python's `with` context manager automatically closes `f` (`CLOSEFILE`) upon exiting the indented block, preventing unclosed file handles and lost buffered writes.",
      },
      {
        id: "python-arrays-sql-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "databases-sql",
        question:
          "A database table `Cars` has fields `RegPlate` (`TEXT`), `Make` (`TEXT`), `Electric` (`BOOLEAN`), and `Mileage` (`INTEGER`). Which SQL query finds how many non-electric cars have mileage of **at most** `30000`?",
        options: [
          "SELECT SUM(Mileage) FROM Cars WHERE Electric = FALSE AND Mileage <= 30000;",
          "SELECT RegPlate FROM Cars WHERE NOT Electric = TRUE OR Mileage <= 30000;",
          "SELECT COUNT(RegPlate) FROM Cars WHERE Electric = 'FALSE' AND Mileage < 30000;",
          "SELECT COUNT(RegPlate) FROM Cars WHERE Electric = FALSE AND Mileage <= 30000;",
        ],
        answerIndex: 3,
        hints: [
          "'How many cars' asks for a row count (`COUNT`), not the sum of miles (`SUM`).",
          "'At most 30000' includes `30000` (`<=`), and `BOOLEAN` `FALSE` has no quotes!",
        ],
        explanation:
          "`SELECT COUNT(RegPlate) FROM Cars WHERE Electric = FALSE AND Mileage <= 30000;` counts matching records, uses unquoted `FALSE`, and includes `30000` via `<=`.",
      },
      {
        id: "python-arrays-sql-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "databases-sql",
        question:
          "Look at the `ClubEvents` table:\n| EventID | Title | Room | Cost | Approved |\n|---|---|---|---|---|\n| E1 | Chess Cup | R4 | 10 | TRUE |\n| E2 | Bot Jam | Lab1 | 25 | TRUE |\n| E3 | Film Night | Hall | 5 | FALSE |\n| E4 | Code Sprint | Lab1 | 15 | TRUE |\n\nWhat single integer does `SELECT SUM(Cost) FROM ClubEvents WHERE Room = 'Lab1' OR Approved = FALSE;` return?",
        options: ["55", "40", "45", "30"],
        answerIndex: 2,
        hints: [
          "Test **each** of the 4 rows against `Room = 'Lab1' OR Approved = FALSE` (remember `OR` is true if *either* side is true!).",
          "Sum the `Cost` of all matching rows.",
        ],
        explanation:
          "`E1` (`R4`, `TRUE`) is `FALSE OR FALSE = FALSE`. `E2` (`Lab1`, `25`) matches `Room = 'Lab1'`. `E3` (`Hall`, `FALSE`, `5`) matches `Approved = FALSE`. `E4` (`Lab1`, `15`) matches `Room = 'Lab1'`. Total `SUM(Cost) = 25 + 5 + 15 = 45`. Missing `E3` gives `40`.",
      },
      {
        id: "python-arrays-sql-m3-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "databases-sql",
        question:
          "Which SQL data type Pair is best for storing `ExpiryDate` (such as `2027-08-31`) and `UnitPrice` (such as `4.99`) in a supermarket table?",
        options: [
          "BOOLEAN and TEXT",
          "DATE/TIME and REAL",
          "CHAR and REAL",
          "INTEGER and INTEGER",
        ],
        answerIndex: 1,
        hints: [
          "`2027-08-31` is a calendar date, not an arithmetic integer.",
          "`4.99` is a decimal currency amount requiring fractional places (`REAL`).",
        ],
        explanation:
          "`DATE/TIME` validates and sorts calendar dates chronologically, while `REAL` stores numbers with fractional decimal parts like `4.99`.",
      },
      {
        id: "python-arrays-sql-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "strings-subroutines-scope",
        question:
          "Let `Word ← \"PROGRAM\"` (CIE pseudocode) and `word = \"PROGRAM\"` (Python). Which pair of expressions produces the **exact same** 4-character string `\"ROGR\"`?",
        options: [
          "SUBSTRING(Word, 2, 5) and word[2:5]",
          "SUBSTRING(Word, 2, 4) and word[1:5]",
          "SUBSTRING(Word, 1, 4) and word[1:4]",
          "SUBSTRING(Word, 2, 4) and word[1:4]",
        ],
        answerIndex: 1,
        hints: [
          "`'R'` is the 2nd letter (`pos = 2` in CIE, `idx = 1` in Python), and `\"ROGR\"` has length `4`.",
          "Apply the conversion formula `s[start - 1 : start - 1 + length]` → `word[1 : 1 + 4]`!",
        ],
        explanation:
          "In CIE pseudocode, `SUBSTRING(\"PROGRAM\", 2, 4)` starts at position `2` (`'R'`) and takes `4` characters (`\"ROGR\"`). In 0-indexed Python, index `1` is `'R'` and exclusive stop `1 + 4 = 5` takes indices `1, 2, 3, 4` → `word[1:5] == \"ROGR\"`.",
      },
    ],
  },
];
