import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "python-arrays-sql-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "variables-types-operators",
      question:
        "Evaluate `47 MOD 8` in CIE 0478 pseudocode (equivalent to `47 % 8` in Python). Give your answer as a single integer.",
      answer: { type: "number", value: 7 },
      hints: ["`8 × 5 = 40`. What remainder is left over from `47`?"],
      traps: [
        {
          spec: { type: "number", value: 5 },
          feedback: "`5` is `47 DIV 8` (the whole quotient). `MOD` gives the remainder `47 − 40 = 7`!",
        },
      ],
      solution: ["`8 × 5 = 40` with remainder `47 − 40 = 7`, so `47 MOD 8 = 7`."],
      commonError: "Giving the quotient `5` (`DIV`) instead of the remainder `7` (`MOD`).",
    },
    {
      id: "python-arrays-sql-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "variables-types-operators",
      question:
        "Which CIE 0478 data type stores **only** one of the two logical values `TRUE` or `FALSE`?",
      options: ["CHAR", "BOOLEAN", "STRING", "INTEGER"],
      answerIndex: 1,
      hints: ["Named after George Boole."],
      explanation:
        "`BOOLEAN` stores a truth value (`TRUE` or `FALSE`). `CHAR` holds a single character such as `'T'`, and `STRING` holds text such as `\"TRUE\"`.",
    },
    {
      id: "python-arrays-sql-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "selection-iteration",
      question:
        "Trace this CIE pseudocode and state the single integer output:\n`Count ← 1`\n`Total ← 0`\n`REPEAT`\n`  Total ← Total + Count`\n`  Count ← Count + 2`\n`UNTIL Count > 5`\n`OUTPUT Total`",
      answer: { type: "number", value: 9 },
      hints: [
        "`Count` takes odd values `1`, then `3`, then `5`, then `7`.",
        "Check `Count > 5` at the end of each pass: is `5 > 5` true or false?",
      ],
      traps: [
        {
          spec: { type: "number", value: 4 },
          feedback: "When `Count` becomes `5`, `5 > 5` is still `FALSE`, so the loop runs one more pass adding `5`!",
        },
        {
          spec: { type: "number", value: 16 },
          feedback: "After adding `5`, `Count` becomes `7`; `7 > 5` is `TRUE`, so the loop stops before `7` is added!",
        },
      ],
      solution: [
        "Pass 1: `Total ← 0 + 1 = 1`, `Count ← 3` (`3 > 5` is `FALSE`).",
        "Pass 2: `Total ← 1 + 3 = 4`, `Count ← 5` (`5 > 5` is `FALSE`).",
        "Pass 3: `Total ← 4 + 5 = 9`, `Count ← 7` (`7 > 5` is `TRUE` → loop terminates).",
        "Final `OUTPUT` is `9`.",
      ],
      commonError: "Stopping early when `Count = 5` by misreading `Count > 5` as `Count >= 5`.",
    },
    {
      id: "python-arrays-sql-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "selection-iteration",
      question:
        "A programmer wants a loop whose body is guaranteed to execute **at least once** and stops when `Valid = TRUE`. Which CIE loop structure fits best?",
      options: [
        "WHILE Valid = TRUE DO ... ENDWHILE",
        "FOR Valid ← 1 TO 10 ... NEXT Valid",
        "REPEAT ... UNTIL Valid = TRUE",
        "WHILE Valid = FALSE DO ... ENDWHILE",
      ],
      answerIndex: 2,
      hints: [
        "Pre-condition `WHILE` loops can run `0` times if the condition fails initially.",
        "Which post-condition loop checks its condition at the bottom and stops on `TRUE`?",
      ],
      explanation:
        "`REPEAT ... UNTIL Valid = TRUE` is post-condition: it always executes the loop body at least once before testing `Valid = TRUE` to exit.",
    },
    {
      id: "python-arrays-sql-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "strings-subroutines-scope",
      question:
        "Given `Word ← \"KEYBOARD\"`, what exact characters are returned by the CIE pseudocode call `SUBSTRING(Word, 4, 4)`? Type the letters only, without quotation marks.",
      answer: { type: "text", accept: ["BOAR"], display: "BOAR" },
      hints: [
        "CIE `SUBSTRING(S, start, length)` starts counting at position `1`: `1=K, 2=E, 3=Y, 4=B`.",
        "Take `4` characters starting at `'B'`.",
      ],
      traps: [
        {
          spec: { type: "text", accept: ["OARD"] },
          feedback: "You started at index 0 like Python! In CIE pseudocode, position 1 is `'K'`, so position 4 is `'B'`.",
        },
        {
          spec: { type: "text", accept: ["B"] },
          feedback: "The third argument `4` in CIE `SUBSTRING` is the character **length**, not a stop index!",
        },
      ],
      solution: [
        "Numbering `\"KEYBOARD\"` from `1`: `1:K, 2:E, 3:Y, 4:B, 5:O, 6:A, 7:R, 8:D`.",
        "Starting at position `4` (`'B'`) and taking `4` characters gives `BOAR`.",
      ],
      commonError: "Starting from `0` (`OARD`) or treating the third argument as Python's exclusive stop index.",
    },
    {
      id: "python-arrays-sql-quiz-q06",
      kind: "short",
      difficulty: "warmup",
      guideRef: "strings-subroutines-scope",
      question:
        "What single CIE pseudocode keyword is placed at the start of a statement to invoke a `PROCEDURE` (for example, `____ DisplayMenu()`)?",
      answer: { type: "text", accept: ["CALL"], display: "CALL" },
      hints: ["Procedures are invoked with a 4-letter keyword that is NEVER used for functions."],
      traps: [
        {
          spec: { type: "text", accept: ["RETURN", "RETURNS"] },
          feedback: "`RETURN` sends a value back from a `FUNCTION`; `CALL` invokes a `PROCEDURE`!",
        },
      ],
      solution: ["In CIE 0478 pseudocode, procedures are invoked using `CALL ProcedureName(...)`."],
      commonError: "Writing `RUN`, `EXEC`, or confusing `CALL` with `RETURN`.",
    },
    {
      id: "python-arrays-sql-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "arrays-files",
      question:
        "How many total `INTEGER` elements can be stored in `DECLARE Matrix : ARRAY[1:4, 0:4] OF INTEGER`? Give a single integer.",
      answer: { type: "number", value: 20 },
      hints: [
        "First dimension `1:4` has `4` rows.",
        "Second dimension `0:4` starts at `0` — count `0, 1, 2, 3, 4`!",
      ],
      traps: [
        {
          spec: { type: "number", value: 16 },
          feedback: "Watch the `0` lower bound! Columns `0..4` inclusive contain `4 − 0 + 1 = 5` columns, so `4 × 5 = 20`.",
        },
      ],
      solution: [
        "Rows `1..4` = `4` rows; columns `0..4` = `4 − 0 + 1 = 5` columns.",
        "Total elements = `4 × 5 = 20`.",
      ],
      commonError: "Multiplying `4 × 4 = 16` by forgetting column `0`.",
    },
    {
      id: "python-arrays-sql-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "arrays-files",
      question:
        "Which CIE pseudocode command safely finishes using `\"scores.txt\"` so buffered writes are saved to secondary storage?",
      options: [
        "ENDFILE \"scores.txt\"",
        "SAVEFILE \"scores.txt\"",
        "STOPFILE \"scores.txt\"",
        "CLOSEFILE \"scores.txt\"",
      ],
      answerIndex: 3,
      hints: [
        "Pair `OPENFILE` with its exact CIE 0478 closing keyword.",
        "Look for the single word ending in `FILE` that matches `OPENFILE`, `READFILE`, and `WRITEFILE`.",
      ],
      explanation:
        "`CLOSEFILE \"scores.txt\"` is the exact CIE 0478 keyword to close an open file and flush buffered data to disk.",
    },
    {
      id: "python-arrays-sql-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "databases-sql",
      question:
        "Using the `Snacks` table:\n| Code | Item | Stock | Vegan |\n|---|---|---|---|\n| S1 | Crisps | 15 | TRUE |\n| S2 | Muffin | 8 | FALSE |\n| S3 | Flapjack | 12 | TRUE |\n\nWhat single integer is returned by `SELECT SUM(Stock) FROM Snacks WHERE Vegan = TRUE;`?",
      answer: { type: "number", value: 27 },
      hints: [
        "Filter rows with `Vegan = TRUE`: `S1` (`15`) and `S3` (`12`).",
        "`SUM(Stock)` adds their `Stock` values together.",
      ],
      traps: [
        {
          spec: { type: "number", value: 2 },
          feedback: "`2` is `COUNT(*)` (number of vegan rows). `SUM(Stock)` adds `15 + 12 = 27`!",
        },
        {
          spec: { type: "number", value: 35 },
          feedback: "Exclude `S2` (`Muffin`, `Stock = 8`) because `Vegan` is `FALSE`!",
        },
      ],
      solution: [
        "Matching rows with `Vegan = TRUE` are `S1` (`Stock = 15`) and `S3` (`Stock = 12`).",
        "`SUM(Stock) = 15 + 12 = 27`.",
      ],
      commonError: "Returning `2` (`COUNT`) instead of `27` (`SUM`).",
    },
    {
      id: "python-arrays-sql-quiz-q10",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "databases-sql",
      question:
        "In a database table, what property MUST a **Primary Key** field always satisfy?",
      options: [
        "It must contain a unique, non-empty value for every record in the table.",
        "It must always be stored using the `REAL` decimal data type.",
        "It must be sorted in descending alphabetical order (`DESC`).",
        "It must store a `BOOLEAN` `TRUE` or `FALSE` flag.",
      ],
      answerIndex: 0,
      hints: ["Think about how the database distinguishes two students who share the same name and birthday."],
      explanation:
        "A primary key uniquely identifies each record in a table, so duplicate or blank (`NULL`) values are never allowed. Primary keys are commonly `TEXT` (`\"S104\"`) or `INTEGER`, not `REAL` or `BOOLEAN`.",
    },
  ],
  papers: [
    {
      id: "python-arrays-sql-p1",
      title: "Practice Paper 1: Programming Fundamentals, Arrays & SQL",
      questions: [
        {
          id: "python-arrays-sql-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "variables-types-operators",
          question:
            "A race timer stores `TotalSeconds ← 265`. Evaluate `TotalSeconds DIV 60` to find the number of whole minutes. Give a single integer.",
          answer: { type: "number", value: 4 },
          hints: ["`60 × 4 = 240` and `60 × 5 = 300`."],
          traps: [
            {
              spec: { type: "number", value: 25 },
              feedback: "`25` is `265 MOD 60` (leftover seconds). `DIV` gives whole minutes (`4`)!",
            },
          ],
          solution: ["`60 × 4 = 240` with remainder `25`, so `265 DIV 60 = 4` whole minutes."],
          commonError: "Calculating `MOD` (`25`) or a decimal (`4.42`) instead of integer `DIV` (`4`).",
        },
        {
          id: "python-arrays-sql-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "variables-types-operators",
          question:
            "State the exact CIE 0478 data type keyword used for a variable storing a price with decimals such as `19.95`.",
          answer: { type: "text", accept: ["REAL"], display: "REAL" },
          hints: ["Python calls it `float`; what is the 4-letter CIE 0478 pseudocode data type?"],
          traps: [
            {
              spec: { type: "text", accept: ["FLOAT", "DECIMAL", "DOUBLE"] },
              feedback: "`float` is Python! The question asks for the exact CIE 0478 pseudocode data type keyword: `REAL`.",
            },
            {
              spec: { type: "text", accept: ["INTEGER"] },
              feedback: "`INTEGER` can only store whole numbers without decimal places.",
            },
          ],
          solution: ["In CIE 0478 pseudocode, numbers with fractional/decimal parts have data type `REAL`."],
          commonError: "Writing Python's `float` or SQL's `CURRENCY` when CIE pseudocode `REAL` is required.",
        },
        {
          id: "python-arrays-sql-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "variables-types-operators",
          question:
            "Let `Pin ← 583`. Evaluate `(Pin DIV 10) MOD 10` and give your answer as a single integer.",
          answer: { type: "number", value: 8 },
          hints: [
            "First compute `583 DIV 10`.",
            "Then take that answer `MOD 10`.",
          ],
          traps: [
            {
              spec: { type: "number", value: 3 },
              feedback: "`3` is `583 MOD 10` (units digit). `583 DIV 10 = 58`, and `58 MOD 10 = 8`!",
            },
            {
              spec: { type: "number", value: 58 },
              feedback: "`58` is `583 DIV 10` — don't forget the outer `MOD 10`!",
            },
          ],
          solution: [
            "`583 DIV 10 = 58`.",
            "`58 MOD 10 = 8` (extracts the middle tens digit).",
          ],
          commonError: "Stopping after `DIV 10` (`58`) or taking `583 MOD 10` (`3`).",
        },
        {
          id: "python-arrays-sql-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "selection-iteration",
          question:
            "What single integer is printed by this Python snippet?\n`ans = 0`\n`for n in range(3, 8):`\n`    if n % 2 == 0:`\n`        ans = ans + n`\n`print(ans)`",
          answer: { type: "number", value: 10 },
          hints: [
            "List the integers generated by `range(3, 8)`: `3, 4, 5, 6, 7` (`8` is excluded!).",
            "Add only the even ones (`n % 2 == 0`).",
          ],
          traps: [
            {
              spec: { type: "number", value: 18 },
              feedback: "Python `range(3, 8)` stops BEFORE `8`, so `8` is never tested or added!",
            },
            {
              spec: { type: "number", value: 15 },
              feedback: "`15` sums the odd numbers (`3 + 5 + 7`), whereas `n % 2 == 0` selects even numbers (`4 + 6`)!",
            },
          ],
          solution: [
            "`range(3, 8)` generates `3, 4, 5, 6, 7`.",
            "Only `4` and `6` satisfy `n % 2 == 0`, so `ans = 4 + 6 = 10`.",
          ],
          commonError: "Including the upper stop value `8` in Python's `range(3, 8)`.",
        },
        {
          id: "python-arrays-sql-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "selection-iteration",
          question:
            "Trace this CIE pseudocode and give the final integer output:\n`P ← 18`\n`REPEAT`\n`  P ← P + 4`\n`UNTIL P >= 15`\n`OUTPUT P`",
          answer: { type: "number", value: 22 },
          hints: [
            "Is `REPEAT ... UNTIL` checked at the top or at the bottom of the loop?",
            "Even though `18 >= 15` initially, the body runs once before `UNTIL` is checked!",
          ],
          traps: [
            {
              spec: { type: "number", value: 18 },
              feedback: "A `REPEAT..UNTIL` loop ALWAYS executes its body at least once before testing `UNTIL P >= 15`!",
            },
          ],
          solution: [
            "The loop body runs first: `P ← 18 + 4 = 22`.",
            "Then `UNTIL P >= 15` tests `22 >= 15` (`TRUE`), exiting immediately and outputting `22`.",
          ],
          commonError: "Treating `REPEAT..UNTIL` like `WHILE` and outputting `18` with zero iterations.",
        },
        {
          id: "python-arrays-sql-p1-q06",
          kind: "written",
          difficulty: "core",
          guideRef: "selection-iteration",
          marks: 3,
          question:
            "Explain three differences between a `WHILE ... DO ... ENDWHILE` loop and a `REPEAT ... UNTIL` loop in CIE 0478 pseudocode.",
          hints: [
            "Compare WHERE in the loop the condition is tested (start vs end) and the minimum number of iterations (`0` vs `1`).",
            "Compare whether each loop terminates when the condition evaluates to `TRUE` or `FALSE`.",
          ],
          modelAnswer:
            "1) Condition position: `WHILE` is a pre-condition loop tested at the start before the body, whereas `REPEAT..UNTIL` is a post-condition loop tested at the end after the body.\n2) Minimum iterations: `WHILE` may execute zero times if initially false, whereas `REPEAT..UNTIL` always executes at least once.\n3) Stopping rule: `WHILE` continues while the condition is `TRUE` (exiting on `FALSE`), whereas `REPEAT..UNTIL` continues while `FALSE` and terminates when the condition becomes `TRUE`.",
          markScheme: [
            {
              point: "`WHILE` tests its condition at the start (pre-condition) whereas `REPEAT..UNTIL` tests at the end (post-condition).",
              keywords: ["pre-condition", "post-condition", "at the start", "at the end", "before the body", "after the body"],
            },
            {
              point: "`WHILE` can execute 0 times, whereas `REPEAT..UNTIL` always executes at least once.",
              keywords: ["zero times", "0 times", "at least once", "minimum of one", "1 or more"],
            },
            {
              point: "`WHILE` stops when the condition is `FALSE`, whereas `REPEAT..UNTIL` stops when the condition becomes `TRUE`.",
              keywords: ["becomes true", "is false", "exits on true", "exits on false", "stops when"],
            },
          ],
          commonError: "Claiming both loops stop when the condition becomes `FALSE`.",
        },
        {
          id: "python-arrays-sql-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "strings-subroutines-scope",
          question:
            "Given `Tag ← \"Compiler\"`, what exact string is output by:\n`OUTPUT UCASE(SUBSTRING(Tag, 1, 4)) + LCASE(SUBSTRING(Tag, 5, 4))`\nType the exact characters (case-sensitive check is forgiving, so check letters carefully; no quotes).",
          answer: { type: "text", accept: ["COMPiler"], display: "COMPiler" },
          hints: [
            "`SUBSTRING(\"Compiler\", 1, 4)` takes positions `1..4` (`\"Comp\"`), converted to `\"COMP\"`.",
            "`SUBSTRING(\"Compiler\", 5, 4)` takes positions `5..8` (`\"iler\"`), converted to `\"iler\"`.",
          ],
          traps: [
            {
              spec: { type: "text", accept: ["OMPIler"] },
              feedback: "Remember CIE `SUBSTRING` starts at position `1` (`'C'`), not `0`!",
            },
          ],
          solution: [
            "`UCASE(SUBSTRING(\"Compiler\", 1, 4))` = `\"COMP\"`.",
            "`LCASE(SUBSTRING(\"Compiler\", 5, 4))` = `\"iler\"`.",
            "Concatenated output = `COMPiler`.",
          ],
          commonError: "Off-by-one slicing when finding position `5` (`'i'`).",
        },
        {
          id: "python-arrays-sql-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "strings-subroutines-scope",
          question:
            "In Python, `code = \"PROTOCOL\"`. If `code[2:k]` evaluates to `\"OTOC\"`, what single integer must `k` be?",
          answer: { type: "number", value: 6 },
          hints: [
            "0-based indices of `\"PROTOCOL\"`: `0:P, 1:R, 2:O, 3:T, 4:O, 5:C, 6:O, 7:L`.",
            "`\"OTOC\"` uses indices `2, 3, 4, 5` — what is the first excluded index `k`?",
          ],
          traps: [
            {
              spec: { type: "number", value: 5 },
              feedback: "In Python `code[2:5]` stops BEFORE index `5`, giving only `\"OTO\"` (`3` letters). `k` must be `6`!",
            },
            {
              spec: { type: "number", value: 4 },
              feedback: "In Python slicing `s[start:stop]`, the second number is the exclusive stop index (`6`), not the length (`4`)!",
            },
          ],
          solution: [
            "Index `2` is `'O'`, and `\"OTOC\"` has length `4`, spanning indices `2, 3, 4, 5`.",
            "Therefore exclusive stop index `k = 2 + 4 = 6`.",
          ],
          commonError: "Writing `4` (length) or `5` (inclusive end index) instead of exclusive stop `6`.",
        },
        {
          id: "python-arrays-sql-p1-q09",
          kind: "written",
          difficulty: "core",
          guideRef: "strings-subroutines-scope",
          marks: 3,
          question:
            "Explain the difference between a `PROCEDURE` and a `FUNCTION`, and state one advantage of declaring variables locally inside subroutines.",
          hints: [
            "Contrast `RETURN` (producing a value inside an expression) with `CALL` (performing actions without returning a value).",
            "Think about whether other subroutines can accidentally overwrite a local variable or what happens to RAM when the subroutine finishes.",
          ],
          modelAnswer:
            "A function always returns a single value back to the calling expression using `RETURN`, whereas a procedure executes statements without returning a value and is triggered with `CALL`. Declaring local variables inside a subroutine prevents other parts of the program from accidentally overwriting their values (avoiding naming collisions and releasing memory once finished).",
          markScheme: [
            {
              point: "A `FUNCTION` returns a value (`RETURN`) into an expression.",
              keywords: ["returns a", "return a", "single value", "return value"],
            },
            {
              point: "A `PROCEDURE` does not return a value (and is invoked with `CALL`).",
              keywords: ["without returning", "does not return", "no return", "not return a value", "call"],
            },
            {
              point: "Local variables cannot be accidentally modified by other subroutines / avoid name clashes / free memory when the subroutine ends.",
              keywords: ["accidentally", "overwrit", "other parts", "other subroutines", "memory", "reusable", "self-contained"],
            },
          ],
          commonError: "Saying procedures cannot take parameters (both procedures and functions accept parameters!).",
        },
        {
          id: "python-arrays-sql-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "arrays-files",
          question:
            "A 2D Python list is `seats = [[5, 8, 2], [9, 1, 7]]`. What integer does `seats[1][0] + seats[0][2]` evaluate to?",
          answer: { type: "number", value: 11 },
          hints: [
            "Row `0` is `[5, 8, 2]`; Row `1` is `[9, 1, 7]`.",
            "`seats[1][0]` is Row `1` Col `0` (`9`), and `seats[0][2]` is Row `0` Col `2` (`2`).",
          ],
          traps: [
            {
              spec: { type: "number", value: 15 },
              feedback: "Remember Python lists start at index `0` (`seats[1][0] = 9`, `seats[0][2] = 2`, sum = `11`)!",
            },
          ],
          solution: [
            "`seats[1][0] = 9` and `seats[0][2] = 2`.",
            "`9 + 2 = 11`.",
          ],
          commonError: "Using 1-based indexing on a Python list or swapping `[row][col]`.",
        },
        {
          id: "python-arrays-sql-p1-q11",
          kind: "written",
          difficulty: "core",
          guideRef: "arrays-files",
          marks: 4,
          question:
            "Write CIE 0478 pseudocode to open an existing text file named `\"player.txt\"`, read its first line into a `STRING` variable `GamerTag`, output `GamerTag`, and close the file.",
          hints: [
            "Use the exact CIE keywords `OPENFILE \"player.txt\" FOR READ` and `READFILE \"player.txt\", GamerTag`.",
            "Remember `OUTPUT GamerTag` and finish with `CLOSEFILE \"player.txt\"`.",
          ],
          modelAnswer:
            "DECLARE GamerTag : STRING\nOPENFILE \"player.txt\" FOR READ\nREADFILE \"player.txt\", GamerTag\nOUTPUT GamerTag\nCLOSEFILE \"player.txt\"",
          markScheme: [
            {
              point: "Open the file in `READ` mode (`OPENFILE \"player.txt\" FOR READ`).",
              keywords: ["openfile", "for read"],
            },
            {
              point: "Read from the file into the variable (`READFILE \"player.txt\", GamerTag`).",
              keywords: ["readfile"],
            },
            {
              point: "Output the variable (`OUTPUT GamerTag`).",
              keywords: ["output gamertag", "print(gamertag)"],
            },
            {
              point: "Close the file afterwards (`CLOSEFILE \"player.txt\"`).",
              keywords: ["closefile"],
            },
          ],
          commonError: "Using `INPUT` instead of `READFILE` or forgetting `CLOSEFILE \"player.txt\"`.",
        },
        {
          id: "python-arrays-sql-p1-q12",
          kind: "written",
          difficulty: "warmup",
          guideRef: "arrays-files",
          marks: 4,
          question:
            "Describe four programming techniques a developer should use when writing source code so another developer can understand and maintain it easily.",
          hints: [
            "Think of the four CIE maintainability pillars: naming, annotations, visual layout, and structure.",
          ],
          modelAnswer:
            "1) Choose meaningful identifiers for variables, arrays, and subroutines so their role is clear.\n2) Add explanatory comments documenting the purpose of sections and tricky algorithms.\n3) Apply consistent indentation and blank lines to highlight nested selection and iteration blocks.\n4) Structure code into modular procedures/functions and declare named constants for fixed values.",
          markScheme: [
            {
              point: "Meaningful / sensible identifiers for variables, constants, arrays, or subroutines.",
              keywords: ["meaningful", "sensible identifier", "descriptive variable"],
            },
            {
              point: "Comments / annotations explaining how sections of code work.",
              keywords: ["comment", "annotation"],
            },
            {
              point: "Consistent indentation and whitespace.",
              keywords: ["indent", "whitespace", "blank line"],
            },
            {
              point: "Modular subroutines (`PROCEDURE`/`FUNCTION`) or named `CONSTANT`s.",
              keywords: ["subroutine", "procedure", "function", "modular", "constant"],
            },
          ],
          commonError: "Giving vague answers like 'write neat code' instead of naming specific features (`meaningful identifiers`, `comments`, `indentation`, `constants/subroutines`).",
        },
        {
          id: "python-arrays-sql-p1-q13",
          kind: "short",
          difficulty: "warmup",
          guideRef: "databases-sql",
          question:
            "A `LibraryLoans` table has `5` vertical columns (`LoanID`, `BookTitle`, `BorrowerID`, `DueDate`, `Returned`) and `120` horizontal data rows (excluding the header row). How many **fields** and how many **records** are in `LibraryLoans`? Give your answer as two ordered numbers `fields, records` (e.g. `4, 50`).",
          answer: { type: "list", values: [5, 120], ordered: true, display: "5, 120" },
          hints: ["Fields = columns; Records = data rows (excluding the header)."],
          traps: [
            {
              spec: { type: "list", values: [120, 5], ordered: true },
              feedback: "Reversed! Fields are columns (`5`) and records are rows (`120`).",
            },
          ],
          solution: [
            "Each vertical column is a **field** (`5` fields).",
            "Each horizontal data row is a **record** (`120` records).",
          ],
          commonError: "Swapping fields (columns) and records (rows), or counting the header row as a record.",
        },
        {
          id: "python-arrays-sql-p1-q14",
          kind: "short",
          difficulty: "core",
          guideRef: "databases-sql",
          question:
            "Look at the `Laptops` table:\n| AssetID | Brand | RAM_GB | Price | Available |\n|---|---|---|---|---|\n| L01 | Nova | 8 | 450 | TRUE |\n| L02 | Apex | 16 | 700 | TRUE |\n| L03 | Nova | 16 | 620 | FALSE |\n| L04 | Zenith | 16 | 580 | TRUE |\n\nWhat `AssetID` is listed **first** by:\n`SELECT AssetID FROM Laptops WHERE RAM_GB = 16 AND Available = TRUE ORDER BY Price ASC;`",
          answer: { type: "text", accept: ["L04"], display: "L04" },
          hints: [
            "Filter rows where BOTH `RAM_GB = 16` AND `Available = TRUE` (`L02` at `700` and `L04` at `580`).",
            "`ORDER BY Price ASC` sorts smallest price first!",
          ],
          traps: [
            {
              spec: { type: "text", accept: ["L02"] },
              feedback: "`ASC` means ascending (lowest price `580` first → `L04`, then `700` → `L02`)!",
            },
            {
              spec: { type: "text", accept: ["L01"] },
              feedback: "`L01` has `RAM_GB = 8`, so it fails `RAM_GB = 16`!",
            },
          ],
          solution: [
            "`L01` fails `RAM_GB = 16`; `L03` fails `Available = TRUE`.",
            "Surviving records are `L02` (`Price = 700`) and `L04` (`Price = 580`).",
            "Ascending order (`ASC`) puts `580` (`L04`) before `700` (`L02`).",
          ],
          commonError: "Sorting `DESC` instead of `ASC`, or forgetting to exclude `L03` (`Available = FALSE`).",
        },
        {
          id: "python-arrays-sql-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "databases-sql",
          marks: 4,
          question:
            "Using the `Laptops` table (`AssetID`, `Brand`, `RAM_GB`, `Price`, `Available`), write a single SQL query to display only the `Brand` and `Price` of all available laptops costing less than `650`, sorted from highest price to lowest price.",
          hints: [
            "Use `SELECT Brand, Price FROM Laptops` — never `SELECT *` when specific columns are requested.",
            "Combine `Available = TRUE AND Price < 650` in `WHERE`, and finish with `ORDER BY Price DESC`.",
          ],
          modelAnswer:
            "SELECT Brand, Price\nFROM Laptops\nWHERE Available = TRUE AND Price < 650\nORDER BY Price DESC;",
          markScheme: [
            {
              point: "`SELECT Brand, Price` (only those two fields in order).",
              keywords: ["select brand, price"],
            },
            {
              point: "`FROM Laptops`.",
              keywords: ["from laptops"],
            },
            {
              point: "`WHERE Available = TRUE AND Price < 650` (unquoted boolean and number).",
              keywords: ["available = true", "price < 650"],
            },
            {
              point: "`ORDER BY Price DESC` at the end.",
              keywords: ["order by price desc"],
            },
          ],
          commonError: "Writing `SELECT *`, putting quotes around `'TRUE'` or `'650'`, or sorting `ASC` instead of `DESC`.",
        },
      ],
    },
    {
      id: "python-arrays-sql-p2",
      title: "Practice Paper 2: Applied Tracing, Subroutines, 2D Arrays & SQL",
      questions: [
        {
          id: "python-arrays-sql-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "variables-types-operators",
          question:
            "In Python, what integer is printed by `print(7 // 10 + 7 % 10)`?",
          answer: { type: "number", value: 7 },
          hints: [
            "When `0 <= a < b`, what is `a // b` (`7 // 10`) and what is `a % b` (`7 % 10`)?",
          ],
          traps: [
            {
              spec: { type: "number", value: 4 },
              feedback: "Careful: it is `7 // 10` (`0`) and `7 % 10` (`7`), NOT `10 // 7` (`1`) + `10 % 7` (`3`)!",
            },
          ],
          solution: [
            "`7 // 10 = 0` (`10` fits into `7` zero whole times) and `7 % 10 = 7`.",
            "`0 + 7 = 7`.",
          ],
          commonError: "Dividing `10` by `7` backwards when the left operand is smaller than the right operand.",
        },
        {
          id: "python-arrays-sql-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "variables-types-operators",
          question:
            "What symbol represents the **not equal to** relational operator in CIE 0478 pseudocode (equivalent to `!=` in Python)?",
          answer: { type: "text", accept: ["<>"], display: "<>" },
          hints: ["Two angle brackets facing outward (`<` followed by `>`)."],
          traps: [
            {
              spec: { type: "text", accept: ["!="] },
              feedback: "`!=` is Python! CIE 0478 pseudocode uses `<>` for not-equal.",
            },
          ],
          solution: ["CIE 0478 pseudocode uses `<>` for 'not equal to' (and SQL accepts `<>` as well!)."],
          commonError: "Writing Python's `!=` or maths `≠` in CIE pseudocode.",
        },
        {
          id: "python-arrays-sql-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "selection-iteration",
          question:
            "Trace this CIE pseudocode:\n`Val ← 64`\n`Steps ← 0`\n`WHILE Val > 4 DO`\n`  Val ← Val DIV 2`\n`  Steps ← Steps + 1`\n`ENDWHILE`\n`OUTPUT Steps`\nGive the single integer output.",
          answer: { type: "number", value: 4 },
          hints: [
            "Halve `64` step-by-step (`64 → 32 → 16 → 8 → 4`) and count how many halvings occur.",
            "When `Val = 4`, is `4 > 4` `TRUE` or `FALSE`?",
          ],
          traps: [
            {
              spec: { type: "number", value: 5 },
              feedback: "When `Val` reaches `4`, `4 > 4` is `FALSE`, so the loop stops after `4` steps!",
            },
            {
              spec: { type: "number", value: 3 },
              feedback: "After 3 steps `Val` is `8`; since `8 > 4` is still `TRUE`, a 4th division runs (`8 → 4`)!",
            },
          ],
          solution: [
            "Step 1: `Val = 32, Steps = 1` (`32 > 4`).",
            "Step 2: `Val = 16, Steps = 2` (`16 > 4`).",
            "Step 3: `Val = 8, Steps = 3` (`8 > 4`).",
            "Step 4: `Val = 4, Steps = 4` (`4 > 4` is `FALSE` → exit).",
            "`OUTPUT` is `4`.",
          ],
          commonError: "Off-by-one miscount at the boundary `Val = 4`.",
        },
        {
          id: "python-arrays-sql-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "selection-iteration",
          question:
            "Trace these nested CIE loops and give the final integer value of `Count`:\n`Count ← 0`\n`FOR A ← 1 TO 3`\n`  FOR B ← 1 TO 4`\n`    IF A = B THEN`\n`      Count ← Count + 10`\n`    ELSE`\n`      Count ← Count + 1`\n`    ENDIF`\n`  NEXT B`\n`NEXT A`",
          answer: { type: "number", value: 39 },
          hints: [
            "How many total `(A, B)` pairs are tested across `3 × 4 = 12` iterations?",
            "How many pairs have `A = B` (`(1,1)`, `(2,2)`, `(3,3)`), and how many hit `ELSE`?",
          ],
          traps: [
            {
              spec: { type: "number", value: 30 },
              feedback: "Don't forget the `9` pairs where `A <> B`, which each add `1` (`30 + 9 = 39`)!",
            },
            {
              spec: { type: "number", value: 42 },
              feedback: "`A` only goes up to `3`, so `(4, 4)` never occurs — only `3` pairs have `A = B`!",
            },
          ],
          solution: [
            "Total iterations = `3 × 4 = 12` pairs.",
            "`A = B` holds `3` times (`(1,1), (2,2), (3,3)`), adding `3 × 10 = 30`.",
            "The remaining `12 − 3 = 9` pairs hit `ELSE`, adding `9 × 1 = 9`.",
            "Total `Count = 30 + 9 = 39`.",
          ],
          commonError: "Forgetting the `ELSE` branch (`+9`) or assuming `(4,4)` occurs.",
        },
        {
          id: "python-arrays-sql-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "strings-subroutines-scope",
          question:
            "Given `Phrase ← \"DATA_SCIENCE\"`, evaluate `LENGTH(Phrase) - LENGTH(SUBSTRING(Phrase, 6, 7))`. Give a single integer.",
          answer: { type: "number", value: 5 },
          hints: [
            "Count every character in `\"DATA_SCIENCE\"` (remember the underscore `_` counts as 1 character!).",
            "`SUBSTRING(Phrase, 6, 7)` has length `7` (`\"SCIENCE\"`).",
          ],
          traps: [
            {
              spec: { type: "number", value: 4 },
              feedback: "Remember to count the underscore `_` in `\"DATA_SCIENCE\"` (`LENGTH = 12`, so `12 − 7 = 5`)!",
            },
          ],
          solution: [
            "`LENGTH(\"DATA_SCIENCE\") = 4 + 1 + 7 = 12`.",
            "`SUBSTRING(Phrase, 6, 7)` is `\"SCIENCE\"` of length `7`.",
            "`12 − 7 = 5`.",
          ],
          commonError: "Forgetting that spaces and underscores count towards `LENGTH(S)`.",
        },
        {
          id: "python-arrays-sql-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "strings-subroutines-scope",
          question:
            "Trace this CIE function call and give the single integer output:\n`FUNCTION Calc(A : INTEGER, B : INTEGER) RETURNS INTEGER`\n`  RETURN A * 2 + B`\n`ENDFUNCTION`\n`OUTPUT Calc(3, Calc(2, 1))`",
          answer: { type: "number", value: 11 },
          hints: [
            "Evaluate the inner call `Calc(2, 1)` first (`2 * 2 + 1 = 5`).",
            "Then evaluate `Calc(3, 5)`!",
          ],
          traps: [
            {
              spec: { type: "number", value: 13 },
              feedback: "In `Calc(3, 5)`, `A = 3` and `B = 5`, so `A * 2 + B = 3 * 2 + 5 = 11` (don't swap `A` and `B`)!",
            },
          ],
          solution: [
            "Inner call: `Calc(2, 1) = 2 × 2 + 1 = 5`.",
            "Outer call: `Calc(3, 5) = 3 × 2 + 5 = 11`.",
          ],
          commonError: "Swapping argument order `(A, B)` on the outer call.",
        },
        {
          id: "python-arrays-sql-p2-q07",
          kind: "written",
          difficulty: "core",
          guideRef: "strings-subroutines-scope",
          marks: 4,
          question:
            "Write a CIE 0478 `FUNCTION` named `MakeCode` that takes two parameters — `FirstName` (`STRING`) and `BirthYear` (`INTEGER`) — and returns a `STRING` made of the first 3 letters of `FirstName` in uppercase followed by the last 2 digits of `BirthYear` (for example, `MakeCode(\"tara\", 2010)` returns `\"TAR10\"` — assume last 2 digits are >= 10, using `STRING(...)` to cast integers).",
          hints: [
            "Start with `FUNCTION MakeCode(FirstName : STRING, BirthYear : INTEGER) RETURNS STRING`.",
            "Use `UCASE(SUBSTRING(FirstName, 1, 3))` for the letters and `BirthYear MOD 100` for the last 2 digits, then `RETURN`.",
          ],
          modelAnswer:
            "FUNCTION MakeCode(FirstName : STRING, BirthYear : INTEGER) RETURNS STRING\n  DECLARE Prefix : STRING\n  DECLARE TwoDigits : INTEGER\n  Prefix ← UCASE(SUBSTRING(FirstName, 1, 3))\n  TwoDigits ← BirthYear MOD 100\n  RETURN Prefix + STRING(TwoDigits)\nENDFUNCTION",
          markScheme: [
            {
              point: "Correct function header with parameters and `RETURNS STRING` (`FUNCTION MakeCode(...) RETURNS STRING`).",
              keywords: ["function makecode", "returns string"],
            },
            {
              point: "Extracts first 3 characters from position 1 and uppercases (`UCASE(SUBSTRING(FirstName, 1, 3))`).",
              keywords: ["ucase", "substring"],
            },
            {
              point: "Extracts last 2 digits using `MOD 100` (or `SUBSTRING(STRING(BirthYear), 3, 2)`).",
              keywords: ["mod 100", "3, 2)", "[2:4]", "[-2:]"],
            },
            {
              point: "Uses `RETURN` to send back the concatenated string and closes with `ENDFUNCTION`.",
              keywords: ["return ", "endfunction"],
            },
          ],
          commonError: "Writing `PROCEDURE` instead of `FUNCTION ... RETURNS STRING`, or starting `SUBSTRING` at index `0`.",
        },
        {
          id: "python-arrays-sql-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "arrays-files",
          question:
            "A 1-indexed CIE 1D array `Arr[1:5]` holds `[12, 7, 19, 4, 15]`. Trace:\n`Temp ← Arr[2]`\n`Arr[2] ← Arr[4]`\n`Arr[4] ← Temp`\n`OUTPUT Arr[2] * 10 + Arr[4]`\nGive the single integer output.",
          answer: { type: "number", value: 47 },
          hints: [
            "The three lines swap `Arr[2]` (`7`) and `Arr[4]` (`4`) using `Temp`.",
            "After the swap, `Arr[2] = 4` and `Arr[4] = 7`.",
          ],
          traps: [
            {
              spec: { type: "number", value: 74 },
              feedback: "After swapping, `Arr[2]` holds `4` and `Arr[4]` holds `7`, so `4 × 10 + 7 = 47`!",
            },
            {
              spec: { type: "number", value: 44 },
              feedback: "`Temp` saved the original `Arr[2] = 7` before `Arr[2]` was overwritten, so `Arr[4]` becomes `7`!",
            },
          ],
          solution: [
            "`Temp ← 7`, `Arr[2] ← 4`, `Arr[4] ← 7`.",
            "`Arr[2] × 10 + Arr[4] = 4 × 10 + 7 = 47`.",
          ],
          commonError: "Forgetting which value moved into `Arr[2]` versus `Arr[4]`.",
        },
        {
          id: "python-arrays-sql-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "arrays-files",
          question:
            "A 2D CIE array `Sales[1:2, 1:3]` holds Row 1: `[10, 20, 30]` and Row 2: `[5, 15, 25]`. What integer is output by:\n`Sum ← 0`\n`FOR R ← 1 TO 2`\n`  Sum ← Sum + Sales[R, 3]`\n`NEXT R`\n`OUTPUT Sum`",
          answer: { type: "number", value: 55 },
          hints: [
            "`Sales[R, 3]` looks at Column `3` as `R` steps from `1` to `2`.",
            "Add `Sales[1, 3]` (`30`) and `Sales[2, 3]` (`25`).",
          ],
          traps: [
            {
              spec: { type: "number", value: 60 },
              feedback: "`60` is the sum of Row 1 (`10 + 20 + 30`). Here `Sales[R, 3]` sums Column 3 (`30 + 25 = 55`)!",
            },
          ],
          solution: [
            "When `R = 1`, `Sales[1, 3] = 30`. When `R = 2`, `Sales[2, 3] = 25`.",
            "`Sum = 30 + 25 = 55`.",
          ],
          commonError: "Summing across a row instead of down Column `3`.",
        },
        {
          id: "python-arrays-sql-p2-q10",
          kind: "written",
          difficulty: "core",
          guideRef: "arrays-files",
          marks: 4,
          question:
            "`DECLARE Temps : ARRAY[1:7, 1:3] OF REAL` stores 3 temperature readings per day for 7 days. Write CIE 0478 pseudocode using nested loops to count and output how many of the 21 readings are strictly greater than `30.0`.",
          hints: [
            "Initialise a counter `HighCount ← 0` outside both loops, then nest `FOR Day ← 1 TO 7` and `FOR Reading ← 1 TO 3`.",
            "Test `IF Temps[Day, Reading] > 30.0 THEN HighCount ← HighCount + 1 ENDIF`, and `OUTPUT HighCount` at the end.",
          ],
          modelAnswer:
            "DECLARE HighCount, Day, Reading : INTEGER\nHighCount ← 0\nFOR Day ← 1 TO 7\n  FOR Reading ← 1 TO 3\n    IF Temps[Day, Reading] > 30.0 THEN\n      HighCount ← HighCount + 1\n    ENDIF\n  NEXT Reading\nNEXT Day\nOUTPUT HighCount",
          markScheme: [
            {
              point: "Initialise counter variable to `0` before the loops (`HighCount ← 0`).",
              keywords: ["← 0", "= 0"],
            },
            {
              point: "Correct nested `FOR` loops covering `1 TO 7` and `1 TO 3`.",
              keywords: ["1 to 7", "1 to 3", "range(7)", "range(3)"],
            },
            {
              point: "Test 2D array element `Temps[Day, Reading] > 30.0` and increment counter by `1`.",
              keywords: ["temps[", "+ 1", "+= 1"],
            },
            {
              point: "Close loops and `OUTPUT` the final count outside both loops.",
              keywords: ["output ", "print("],
            },
          ],
          commonError: "Using `>= 30.0` when strictly greater (`> 30.0`) was asked, or resetting `HighCount ← 0` inside the outer loop.",
        },
        {
          id: "python-arrays-sql-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "databases-sql",
          question:
            "Consider the `Courses` table:\n| CourseCode | Subject | Level | Fee | Online |\n|---|---|---|---|---|\n| C10 | Python | Beginner | 40 | TRUE |\n| C11 | SQL | Advanced | 60 | TRUE |\n| C12 | Robotics | Beginner | 90 | FALSE |\n| C13 | Cyber | Beginner | 50 | TRUE |\n\nWhat single integer is returned by `SELECT COUNT(CourseCode) FROM Courses WHERE Level = 'Beginner' AND Online = TRUE;`?",
          answer: { type: "number", value: 2 },
          hints: [
            "Check each row: `C10` (`Beginner`, `TRUE`), `C11` (`Advanced`), `C12` (`FALSE`), `C13` (`Beginner`, `TRUE`).",
            "`COUNT(CourseCode)` counts how many rows match!",
          ],
          traps: [
            {
              spec: { type: "number", value: 90 },
              feedback: "`90` is `SUM(Fee)` (`40 + 50`). `COUNT(CourseCode)` counts matching records (`2`)!",
            },
            {
              spec: { type: "number", value: 3 },
              feedback: "`C12` has `Online = FALSE`, so only `C10` and `C13` match BOTH parts of `AND`!",
            },
          ],
          solution: [
            "Only `C10` and `C13` have both `Level = 'Beginner'` and `Online = TRUE`.",
            "Therefore `COUNT(CourseCode) = 2`.",
          ],
          commonError: "Adding fees (`90`) instead of counting records (`2`), or treating `AND` like `OR`.",
        },
        {
          id: "python-arrays-sql-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "databases-sql",
          question:
            "Using the same `Courses` table (`C10` Fee `40` Online `TRUE`, `C11` Fee `60` Online `TRUE`, `C12` Fee `90` Online `FALSE`, `C13` Fee `50` Online `TRUE`), what single integer is returned by `SELECT SUM(Fee) FROM Courses WHERE NOT Online = TRUE OR Fee >= 60;`?",
          answer: { type: "number", value: 150 },
          hints: [
            "`NOT Online = TRUE` matches `C12` (`Fee = 90`).",
            "`Fee >= 60` matches `C11` (`Fee = 60`) and `C12` (`Fee = 90` — don't double-count the same row!).",
          ],
          traps: [
            {
              spec: { type: "number", value: 240 },
              feedback: "Never double-count a row (`C12`) that satisfies both sides of `OR`! Matching rows are `C11` (`60`) and `C12` (`90`) → `150`.",
            },
            {
              spec: { type: "number", value: 90 },
              feedback: "`C11` has `Fee = 60`, which satisfies `Fee >= 60` (`60 >= 60` is `TRUE`), so include `60 + 90 = 150`!",
            },
          ],
          solution: [
            "Test each row: `C10` (`FALSE OR FALSE`), `C11` (`FALSE OR TRUE` → match, `60`), `C12` (`TRUE OR TRUE` → match once, `90`), `C13` (`FALSE OR FALSE`).",
            "`SUM(Fee) = 60 + 90 = 150`.",
          ],
          commonError: "Double-counting `C12` (`90 + 90 + 60 = 240`) or missing `Fee = 60` on `>= 60`.",
        },
        {
          id: "python-arrays-sql-p2-q13",
          kind: "short",
          difficulty: "warmup",
          guideRef: "databases-sql",
          question:
            "In SQL, if a query ends with `ORDER BY Surname` without specifying `ASC` or `DESC`, in what order are the records sorted? Answer `ASC` (ascending) or `DESC` (descending).",
          answer: { type: "text", accept: ["ASC", "ascending", "A to Z"], display: "ASC" },
          hints: ["Does SQL sort A→Z (`ASC`) or Z→A (`DESC`) by default?"],
          traps: [
            {
              spec: { type: "text", accept: ["DESC", "descending"] },
              feedback: "`ASC` (ascending, A→Z / smallest→largest) is always the default in SQL unless `DESC` is written!",
            },
          ],
          solution: ["SQL's `ORDER BY` defaults to ascending (`ASC`) order when neither keyword is specified."],
          commonError: "Guessing `DESC` or 'table insertion order'.",
        },
        {
          id: "python-arrays-sql-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "databases-sql",
          marks: 3,
          question:
            "A sports club creates a single-table database `Runners` containing `FirstName`, `Surname`, `AgeGroup`, and `ClubShirtNumber` (note: two runners in different age groups can pick the same shirt number!). Explain why none of these four fields is suitable as a Primary Key, and suggest a suitable Primary Key with its CIE data type.",
          hints: [
            "State the core rule of a Primary Key (must uniquely identify every single record with zero duplicates).",
            "Explain why names, age groups, and shirt numbers can repeat, then propose a unique ID field such as `RunnerID` (`TEXT` or `INTEGER`).",
          ],
          modelAnswer:
            "None of the existing fields is guaranteed to be unique for every runner: two members can share the same first name, surname, or age group, and shirt numbers can repeat across different age groups. Add a unique `RunnerID` (or `MembershipID`) field stored as `TEXT` (e.g. `'R1042'`) or `INTEGER`.",
          markScheme: [
            {
              point: "A Primary Key must uniquely identify every record (no duplicates).",
              keywords: ["unique", "uniquely", "no duplicate"],
            },
            {
              point: "Explains why existing fields can duplicate (names/age groups repeat, and shirt numbers repeat across age groups).",
              keywords: ["same first name", "same surname", "share", "repeat", "duplicate"],
            },
            {
              point: "Suggests a new unique ID field (e.g. `RunnerID` / `MemberID`) with appropriate type (`TEXT` or `INTEGER`).",
              keywords: ["runnerid", "memberid", "membershipid", "athleteid", "text", "integer"],
            },
          ],
          commonError: "Picking `ClubShirtNumber` without reading that different age groups can reuse the same number.",
        },
        {
          id: "python-arrays-sql-p2-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "databases-sql",
          marks: 4,
          question:
            "A `Stationery` table has fields `ItemCode` (`TEXT`), `Description` (`TEXT`), `Category` (`TEXT`), `Stock` (`INTEGER`), and `ReorderLevel` (`INTEGER`). Write an SQL query to list `ItemCode`, `Description`, and `Stock` for items in the `'Pens'` or `'Paper'` category whose `Stock` is at or below `20`, sorted alphabetically by `Description`.",
          hints: [
            "Repeat `Category =` on both sides of `OR` and wrap `(Category = 'Pens' OR Category = 'Paper')` in brackets before `AND Stock <= 20`.",
            "Finish with `ORDER BY Description ASC`.",
          ],
          modelAnswer:
            "SELECT ItemCode, Description, Stock\nFROM Stationery\nWHERE (Category = 'Pens' OR Category = 'Paper') AND Stock <= 20\nORDER BY Description ASC;",
          markScheme: [
            {
              point: "`SELECT ItemCode, Description, Stock` in exact requested order.",
              keywords: ["select itemcode, description, stock"],
            },
            {
              point: "`FROM Stationery`.",
              keywords: ["from stationery"],
            },
            {
              point: "Correct `WHERE` repeating `Category =` with brackets (`(Category = 'Pens' OR Category = 'Paper') AND Stock <= 20`).",
              keywords: ["category = 'pens'", "category = 'paper'", "stock <= 20"],
            },
            {
              point: "`ORDER BY Description` (with `ASC` or default ascending).",
              keywords: ["order by description"],
            },
          ],
          commonError: "Writing `WHERE Category = 'Pens' OR 'Paper'` (forgetting to repeat `Category =` and bracket the `OR` before `AND Stock <= 20`)!",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "python-arrays-sql-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "variables-types-operators",
      question:
        "Trace this digit-reversal CIE pseudocode for `N ← 407`:\n`Rev ← 0`\n`WHILE N > 0 DO`\n`  Digit ← N MOD 10`\n`  Rev ← Rev * 10 + Digit`\n`  N ← N DIV 10`\n`ENDWHILE`\n`OUTPUT Rev`\nGive the single integer output.",
      answer: { type: "number", value: 704 },
      hints: [
        "Iteration 1: `Digit = 407 MOD 10 = 7`, `Rev = 0 * 10 + 7 = 7`, `N = 407 DIV 10 = 40`.",
        "Iteration 2: `Digit = 40 MOD 10 = 0`, `Rev = 7 * 10 + 0 = 70`, `N = 40 DIV 10 = 4`.",
        "Iteration 3: `Digit = 4 MOD 10 = 4`, `Rev = 70 * 10 + 4 = 704`, `N = 4 DIV 10 = 0` (`0 > 0` is `FALSE`).",
      ],
      traps: [
        {
          spec: { type: "number", value: 74 },
          feedback: "Don't skip the middle `0`! On pass 2, `Rev ← 7 * 10 + 0 = 70`, then pass 3 gives `704`!",
        },
      ],
      solution: [
        "Pass 1: `Digit = 7`, `Rev = 7`, `N = 40`.",
        "Pass 2: `Digit = 0`, `Rev = 70`, `N = 4`.",
        "Pass 3: `Digit = 4`, `Rev = 704`, `N = 0` → loop ends.",
        "`OUTPUT` is `704`.",
      ],
      commonError: "Dropping the middle zero digit and getting `74`.",
    },
    {
      id: "python-arrays-sql-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "selection-iteration",
      question:
        "Trace this CIE pseudocode carefully:\n`A ← 1`\n`B ← 20`\n`Count ← 0`\n`REPEAT`\n`  A ← A * 2`\n`  B ← B - 3`\n`  Count ← Count + 1`\n`UNTIL A > B`\n`OUTPUT A + B + Count`\nGive the single integer output.",
      answer: { type: "number", value: 28 },
      hints: [
        "Make a 4-column trace table `(Count, A, B, A > B)` starting from `(0, 1, 20)`.",
        "Pass 1: `A=2, B=17, Count=1`; Pass 2: `A=4, B=14, Count=2`; Pass 3: `A=8, B=11, Count=3` (`8 > 11` is still `FALSE`!).",
        "Run Pass 4 (`A=16, B=8, Count=4`): now `16 > 8` is `TRUE`! Add `A + B + Count`.",
      ],
      traps: [
        {
          spec: { type: "number", value: 22 },
          feedback: "At Pass 3 (`A=8, B=11, Count=3`), `8 > 11` is `FALSE`, so one more iteration runs (`16 + 8 + 4 = 28`)!",
        },
      ],
      solution: [
        "Pass 1: `A = 2, B = 17, Count = 1` (`2 > 17` is `FALSE`).",
        "Pass 2: `A = 4, B = 14, Count = 2` (`4 > 14` is `FALSE`).",
        "Pass 3: `A = 8, B = 11, Count = 3` (`8 > 11` is `FALSE`).",
        "Pass 4: `A = 16, B = 8, Count = 4` (`16 > 8` is `TRUE` → stop).",
        "`A + B + Count = 16 + 8 + 4 = 28`.",
      ],
      commonError: "Stopping after Pass 3 (`22`) before `A > B` actually becomes `TRUE`.",
    },
    {
      id: "python-arrays-sql-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "strings-subroutines-scope",
      question:
        "Trace this string-building loop in CIE pseudocode:\n`Word ← \"ABCDEF\"`\n`Out ← \"\"`\n`FOR K ← 1 TO 5`\n`  IF K MOD 2 = 1 THEN`\n`    Out ← SUBSTRING(Word, K, 2) + Out`\n`  ENDIF`\n`NEXT K`\n`OUTPUT Out`\nType the exact characters output (without quotation marks).",
      answer: { type: "text", accept: ["EFCDAB"], display: "EFCDAB" },
      hints: [
        "Only odd `K` (`K = 1, 3, 5`) satisfy `K MOD 2 = 1`.",
        "Find `SUBSTRING(\"ABCDEF\", K, 2)` for `K = 1` (`\"AB\"`), `K = 3` (`\"CD\"`), and `K = 5` (`\"EF\"`).",
        "Watch the concatenation order: `SUBSTRING(...) + Out` **prepends** each 2-letter slice to the **front** of `Out`!",
      ],
      traps: [
        {
          spec: { type: "text", accept: ["ABCDEF"] },
          feedback: "Look closely at `SUBSTRING(Word, K, 2) + Out`: each new pair is placed in FRONT of `Out`, giving `EFCDAB`!",
        },
        {
          spec: { type: "text", accept: ["FEDCBA"] },
          feedback: "Each `2`-character chunk stays intact (`AB`, `CD`, `EF`) rather than reversing individual letters!",
        },
      ],
      solution: [
        "`K = 1`: `SUBSTRING(\"ABCDEF\", 1, 2) = \"AB\"`, `Out ← \"AB\" + \"\" = \"AB\"`.",
        "`K = 3`: `SUBSTRING(\"ABCDEF\", 3, 2) = \"CD\"`, `Out ← \"CD\" + \"AB\" = \"CDAB\"`.",
        "`K = 5`: `SUBSTRING(\"ABCDEF\", 5, 2) = \"EF\"`, `Out ← \"EF\" + \"CDAB\" = \"EFCDAB\"`.",
      ],
      commonError: "Appending to the right (`ABCDEF`) instead of prepending to the left (`EFCDAB`).",
    },
    {
      id: "python-arrays-sql-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "strings-subroutines-scope",
      question:
        "In Python, `s = \"CYBERNETICS\"` (11 characters, indices `0..10`). What exact string is printed by `print(s[1:4] + s[len(s)-3 : len(s)])`? Type the letters only, without quotes.",
      answer: { type: "text", accept: ["YBEICS"], display: "YBEICS" },
      hints: [
        "0-based indices of `\"CYBERNETICS\"`: `0:C, 1:Y, 2:B, 3:E, 4:R, 5:N, 6:E, 7:T, 8:I, 9:C, 10:S`.",
        "`s[1:4]` takes indices `1, 2, 3` (`\"YBE\"`).",
        "`len(s)` is `11`, so `s[8:11]` takes indices `8, 9, 10` (`\"ICS\"`).",
      ],
      traps: [
        {
          spec: { type: "text", accept: ["CYBICS"] },
          feedback: "Remember Python is 0-indexed: index `0` is `'C'`, so `s[1:4]` starts at `'Y'` (`\"YBE\"`)!",
        },
      ],
      solution: [
        "`s[1:4]` = `\"YBE\"` (indices `1, 2, 3`).",
        "`len(s) = 11`, so `s[8:11]` = `\"ICS\"` (the last 3 characters at indices `8, 9, 10`).",
        "Concatenating gives `YBEICS`.",
      ],
      commonError: "Starting `s[1:4]` at `'C'` or miscounting `len(s) - 3`.",
    },
    {
      id: "python-arrays-sql-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "arrays-files",
      question:
        "A 1-indexed 2D CIE array `Grid[1:3, 1:3]` is populated by:\n`FOR R ← 1 TO 3`\n`  FOR C ← 1 TO 3`\n`    IF R >= C THEN`\n`      Grid[R, C] ← R * C`\n`    ELSE`\n`      Grid[R, C] ← 0`\n`    ENDIF`\n`  NEXT C`\n`NEXT R`\nWhat is the sum of **all 9 elements** in `Grid` after the loops finish? Give a single integer.",
      answer: { type: "number", value: 25 },
      hints: [
        "Write out the `3 × 3` grid row by row: cells above the main diagonal (`R < C`) are `0`!",
        "Row 1 (`R=1`): `[1*1, 0, 0] = [1, 0, 0]`. Row 2 (`R=2`): `[2*1, 2*2, 0] = [2, 4, 0]`.",
        "Row 3 (`R=3`): `[3*1, 3*2, 3*3] = [3, 6, 9]`. Now sum all non-zero cells!",
      ],
      traps: [
        {
          spec: { type: "number", value: 36 },
          feedback: "`36` sums `R * C` for all 9 cells, ignoring `IF R >= C` which sets `(1,2), (1,3), (2,3)` to `0`!",
        },
        {
          spec: { type: "number", value: 11 },
          feedback: "`R >= C` includes the diagonal cells where `R = C` (`1 + 4 + 9 = 14`) as well as `R > C` (`2 + 3 + 6 = 11`) → `25`!",
        },
      ],
      solution: [
        "Row 1: `1, 0, 0` (sum `1`).",
        "Row 2: `2, 4, 0` (sum `6`).",
        "Row 3: `3, 6, 9` (sum `18`).",
        "Total sum = `1 + 6 + 18 = 25`.",
      ],
      commonError: "Missing equality on the diagonal `R = C` or forgetting the upper triangle is `0`.",
    },
    {
      id: "python-arrays-sql-ch-q06",
      kind: "written",
      difficulty: "challenge",
      guideRef: "arrays-files",
      marks: 5,
      question:
        "An array `Names[1:50]` of `STRING` and a parallel array `Marks[1:50]` of `INTEGER` hold 50 exam results. Write CIE 0478 pseudocode to write ONLY the names of students who scored at least `80` into a new file `\"distinction.txt\"` (one name per line), and also output how many names were written.",
      hints: [
        "Open `\"distinction.txt\"` `FOR WRITE` and set a counter `SavedCount ← 0` **before** starting the `FOR` loop (otherwise the file gets overwritten every iteration!).",
        "Inside `FOR Index ← 1 TO 50`, check `IF Marks[Index] >= 80 THEN`, write `Names[Index]` using `WRITEFILE`, and add `1` to `SavedCount`.",
        "After `NEXT Index`, call `CLOSEFILE \"distinction.txt\"` and `OUTPUT SavedCount`.",
      ],
      modelAnswer:
        "DECLARE Index, SavedCount : INTEGER\nSavedCount ← 0\nOPENFILE \"distinction.txt\" FOR WRITE\nFOR Index ← 1 TO 50\n  IF Marks[Index] >= 80 THEN\n    WRITEFILE \"distinction.txt\", Names[Index]\n    SavedCount ← SavedCount + 1\n  ENDIF\nNEXT Index\nCLOSEFILE \"distinction.txt\"\nOUTPUT SavedCount",
      markScheme: [
        {
          point: "Initialise counter to `0` and open `\"distinction.txt\"` `FOR WRITE` before the loop.",
          keywords: ["openfile", "for write"],
        },
        {
          point: "Loop through indices `1 TO 50`.",
          keywords: ["1 to 50", "range(50)"],
        },
        {
          point: "Check `Marks[Index] >= 80` (inclusive of `80`).",
          keywords: [">= 80"],
        },
        {
          point: "Write matching name to file (`WRITEFILE \"distinction.txt\", Names[Index]`) and increment counter.",
          keywords: ["writefile", "+ 1", "+= 1"],
        },
        {
          point: "`CLOSEFILE \"distinction.txt\"` after the loop and `OUTPUT` the counter.",
          keywords: ["closefile", "output ", "print("],
        },
      ],
      commonError: "Putting `OPENFILE` and `CLOSEFILE` *inside* the `FOR` loop (which overwrites the file on every single student!).",
    },
    {
      id: "python-arrays-sql-ch-q07",
      kind: "short",
      difficulty: "challenge",
      guideRef: "databases-sql",
      question:
        "Examine the `Tournaments` table:\n| MatchID | House | Game | Score | Won |\n|---|---|---|---|---|\n| T1 | Falcon | Chess | 12 | TRUE |\n| T2 | Eagle | Coding | 30 | FALSE |\n| T3 | Falcon | Coding | 25 | TRUE |\n| T4 | Tiger | Coding | 18 | TRUE |\n| T5 | Falcon | Chess | 8 | FALSE |\n\nRemembering that `AND` has higher precedence than `OR` when there are no brackets, what integer does:\n`SELECT SUM(Score) FROM Tournaments WHERE House = 'Falcon' OR Game = 'Coding' AND Won = TRUE;`\nreturn?",
      answer: { type: "number", value: 63 },
      hints: [
        "Without brackets, `A OR B AND C` is evaluated as `A OR (B AND C)`!",
        "First find all rows where `House = 'Falcon'`: `T1` (`12`), `T3` (`25`), `T5` (`8`).",
        "Next find any OTHER rows where `(Game = 'Coding' AND Won = TRUE)`: `T4` (`18`) matches (`T2` has `Won = FALSE`). Sum `12 + 25 + 8 + 18`!",
      ],
      traps: [
        {
          spec: { type: "number", value: 55 },
          feedback: "`55` (`12 + 25 + 18`) evaluated `(House = 'Falcon' OR Game = 'Coding') AND Won = TRUE`, forgetting `AND` binds tighter than `OR` (so `T5` with `House = 'Falcon'` is included → `63`)!",
        },
      ],
      solution: [
        "Boolean operator precedence evaluates `AND` before `OR`: `House = 'Falcon' OR (Game = 'Coding' AND Won = TRUE)`.",
        "`T1` (`Falcon`, `12`), `T3` (`Falcon`, `25`), and `T5` (`Falcon`, `8`) match `House = 'Falcon'`.",
        "`T4` (`Tiger`, `Coding`, `TRUE`, `18`) matches `Game = 'Coding' AND Won = TRUE` (`T2` fails `Won = TRUE`).",
        "`SUM(Score) = 12 + 25 + 8 + 18 = 63`.",
      ],
      commonError: "Evaluating `OR` before `AND` left-to-right instead of applying `NOT → AND → OR` precedence.",
    },
    {
      id: "python-arrays-sql-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "databases-sql",
      marks: 4,
      question:
        "A student writes the following broken SQL script for a `ClubMembers` table (`MemberID`, `StudentName`, `YearGroup`, `House`, `Paid`) to list only the names of unpaid students in Year 10 or Year 11 sorted A to Z:\n`SELECT * FROM ClubMembers ORDER BY StudentName WHERE YearGroup = 10 OR 11 AND Paid == 'No';`\nIdentify **three** distinct errors in this query and write the corrected SQL query.",
      hints: [
        "Check `SELECT *` (only `StudentName` was requested) and clause order (`WHERE` must come before `ORDER BY`).",
        "Look at `OR 11`: SQL requires repeating `YearGroup = 11` inside brackets `(YearGroup = 10 OR YearGroup = 11)`.",
        "Check `Paid == 'No'`: SQL uses single `=` and unquoted boolean `Paid = FALSE`.",
      ],
      modelAnswer:
        "Errors: 1) `SELECT *` retrieves every column rather than just `StudentName`; 2) `ORDER BY` is written before `WHERE`; 3) `OR 11` omits the repeated field comparison and `Paid` is a `BOOLEAN` using `=` with unquoted `FALSE`.\nCorrected query:\nSELECT StudentName FROM ClubMembers WHERE Paid = FALSE AND (YearGroup = 10 OR YearGroup = 11) ORDER BY StudentName ASC;",
      markScheme: [
        {
          point: "Replaces `SELECT *` with `SELECT StudentName`.",
          keywords: ["select studentname"],
        },
        {
          point: "Places `WHERE` before `ORDER BY StudentName`.",
          keywords: ["order by studentname"],
        },
        {
          point: "Repeats field name inside brackets `(YearGroup = 10 OR YearGroup = 11)`.",
          keywords: ["yeargroup = 10 or yeargroup = 11"],
        },
        {
          point: "Uses single `=` and unquoted boolean `Paid = FALSE` (or `NOT Paid`).",
          keywords: ["paid = false"],
        },
      ],
      commonError: "Fixing `YearGroup = 11` without adding brackets `(YearGroup = 10 OR YearGroup = 11)` alongside `AND Paid = FALSE`.",
    },
  ],
};
