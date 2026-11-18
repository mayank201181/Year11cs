import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "python-arrays-sql",
  title: "Python Programming, Arrays, Files & SQL",
  strand: "Paper 2: Algorithms, Programming & Logic",
  icon: "🐍",
  summary:
    "Master CIE 0478 pseudocode and Python side-by-side: data types, DIV/MOD, loops, 1-indexed SUBSTRING vs 0-indexed slicing, 1D/2D arrays, file handling, and single-table SQL.",
  intro:
    "Paper 2 tests whether you can read, trace, debug, and write clean programs in both **CIE 0478 pseudocode** and **Python**, plus query flat-file databases using **Structured Query Language (SQL)**. Most lost marks come from tiny translation traps between pseudocode and Python — such as `REPEAT ... UNTIL` stopping when its condition becomes `TRUE`, `SUBSTRING(S, start, length)` starting at position `1` while Python slicing starts at index `0`, or forgetting single quotes around text in SQL `WHERE` clauses. This guide puts every rule, comparison table, and examiner trap side-by-side.",
  guide: [
    {
      id: "variables-types-operators",
      heading: "Variables, Constants, Data Types & DIV / MOD Operators",
      discovery: {
        problem:
          "A cinema ticket machine stores `TotalSeconds ← 195`. Without using decimals or loops, write two expressions using `DIV` and `MOD` to split `195` into whole `Minutes` and leftover `Seconds`.",
        idea:
          "Integer division `195 DIV 60` gives `3` whole minutes (discarding the remainder), while `195 MOD 60` gives the remainder `15` seconds (`195 = 3 × 60 + 15`). Together, `DIV` and `MOD` split any integer cleanly into quotient and remainder!",
      },
      body: [
        "A **variable** is a named memory location whose value **can change** while a program runs. A **constant** is a named memory location whose value is **fixed once set** and cannot be altered during execution — making code easier to read and allowing a value (like `VAT_RATE ← 0.20` or `MAX_PLAYERS ← 4`) to be updated in one place.",
        "",
        "### CIE 0478 Declarations & Five Core Data Types",
        "| CIE Data Type | Meaning & Examples | CIE Pseudocode Declaration | Python Equivalent |",
        "|---|---|---|---|",
        "| `INTEGER` | Whole number (positive, negative, or zero): `42`, `-7`, `0` | `DECLARE Score : INTEGER` | `score = 42` (`int`) |",
        "| `REAL` | Number with a fractional/decimal part: `3.14`, `-0.5`, `12.0` | `DECLARE Price : REAL` | `price = 3.14` (`float`) |",
        "| `CHAR` | A **single** keyboard character: `'A'`, `'7'`, `'#'` | `DECLARE Grade : CHAR` | `grade = 'A'` (`str` of length 1) |",
        "| `STRING` | Sequence of zero or more characters: `\"Maya\"`, `\"07700900123\"`, `\"\"` | `DECLARE Name : STRING` | `name = \"Maya\"` (`str`) |",
        "| `BOOLEAN` | Logical truth value with **only two** states: `TRUE` or `FALSE` | `DECLARE Found : BOOLEAN` | `found = True` (`bool`) |",
        "",
        "**Exam Trap — Phone Numbers & Codes:** Values with leading zeros or spaces like `\"07911 123456\"` or `\"0042\"` MUST be stored as `STRING`, because an `INTEGER` strips leading zeros (`0042` becomes `42`) and is never used for arithmetic.",
        "",
        "In CIE pseudocode, constants use `CONSTANT Pi ← 3.14159` (no `DECLARE` or colon), assignment uses the left arrow `←`, equality test uses `=`, and not-equal uses `<>` (`!=` in Python).",
        "",
        "### Arithmetic, `DIV` and `MOD`",
        "- Normal division `/` (`17 / 5 = 3.4`) always produces a `REAL` (`float` in Python).",
        "- **`DIV(a, b)` or `a DIV b`** (Python `a // b`) performs **integer quotient division**, discarding the remainder: `17 DIV 5 = 3`.",
        "- **`MOD(a, b)` or `a MOD b`** (Python `a % b`) returns the **integer remainder** after division: `17 MOD 5 = 2`.",
        "- Classic `MOD` patterns on Paper 2:",
        "  - `N MOD 2 = 0` tests whether `N` is **even** (`N MOD 2 = 1` or `<> 0` means **odd**).",
        "  - `N MOD 10` extracts the **units (last) digit** of a positive integer (`247 MOD 10 = 7`), while `N DIV 10` strips the last digit (`247 DIV 10 = 24`).",
      ].join("\n"),
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CIE five core data types and DIV vs MOD integer division diagram">' +
        '<rect x="8" y="8" width="544" height="234" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="280" y="32" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a">CIE 0478 Core Data Types &amp; Integer Division (DIV vs MOD)</text>' +
        '<rect x="24" y="48" width="248" height="178" rx="10" fill="#ffffff" stroke="#94a3b8" stroke-width="1.2"/>' +
        '<text x="148" y="68" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b">5 CIE Data Types</text>' +
        '<text x="38" y="92" font-family="monospace" font-size="11" fill="#0369a1">INTEGER</text><text x="115" y="92" font-family="sans-serif" font-size="11" fill="#334155">Whole: 42, -15, 0</text>' +
        '<text x="38" y="116" font-family="monospace" font-size="11" fill="#0369a1">REAL</text><text x="115" y="116" font-family="sans-serif" font-size="11" fill="#334155">Decimal: 3.14, 9.0</text>' +
        '<text x="38" y="140" font-family="monospace" font-size="11" fill="#0369a1">CHAR</text><text x="115" y="140" font-family="sans-serif" font-size="11" fill="#334155">1 char: \'A\', \'#\'</text>' +
        '<text x="38" y="164" font-family="monospace" font-size="11" fill="#0369a1">STRING</text><text x="115" y="164" font-family="sans-serif" font-size="11" fill="#334155">Text: "07700", "Hi"</text>' +
        '<text x="38" y="188" font-family="monospace" font-size="11" fill="#0369a1">BOOLEAN</text><text x="115" y="188" font-family="sans-serif" font-size="11" fill="#334155">TRUE or FALSE</text>' +
        '<text x="38" y="213" font-family="monospace" font-size="10" fill="#64748b">CONSTANT Max &lt;- 100</text>' +
        '<rect x="288" y="48" width="248" height="178" rx="10" fill="#ffffff" stroke="#94a3b8" stroke-width="1.2"/>' +
        '<text x="412" y="68" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e293b">Splitting 23 by 5</text>' +
        '<rect x="312" y="80" width="200" height="32" rx="6" fill="#eff6ff" stroke="#3b82f6"/>' +
        '<text x="412" y="100" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#1d4ed8">23 = (4 x 5) + 3</text>' +
        '<rect x="304" y="126" width="102" height="84" rx="8" fill="#ecfdf5" stroke="#10b981"/>' +
        '<text x="355" y="146" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#047857">23 DIV 5 = 4</text>' +
        '<text x="355" y="166" text-anchor="middle" font-family="monospace" font-size="11" fill="#065f46">Python: 23 // 5</text>' +
        '<text x="355" y="188" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#065f46">Whole quotient</text>' +
        '<rect x="418" y="126" width="102" height="84" rx="8" fill="#fef3c7" stroke="#f59e0b"/>' +
        '<text x="469" y="146" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#b45309">23 MOD 5 = 3</text>' +
        '<text x="469" y="166" text-anchor="middle" font-family="monospace" font-size="11" fill="#92400e">Python: 23 % 5</text>' +
        '<text x="469" y="188" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#92400e">Leftover remainder</text>' +
        '</svg>',
      diagramCaption: "CIE 0478's five primitive data types alongside integer quotient (DIV / //) and remainder (MOD / %).",
      workedExamples: [
        {
          title: "Extracting digits with DIV and MOD",
          problem:
            "Given `Code ← 389`, evaluate `(Code DIV 10) MOD 10` and explain what digit of `Code` this expression isolates.",
          steps: [
            "Evaluate the brackets first: `389 DIV 10 = 38` (integer division drops the units digit `9`).",
            "Now find the remainder when `38` is divided by `10`: `38 MOD 10 = 8` (`38 = 3 × 10 + 8`).",
            "This two-step pattern always extracts the **tens (middle) digit** of a three-digit integer.",
          ],
          answer: "`8` (the tens digit of `389`).",
          yourTurn: {
            question:
              "A bakery packs cupcakes into boxes of `12`. If `TotalCupcakes ← 91`, what is the value of `TotalCupcakes MOD 12` (the number of unpacked cupcakes left over)? Give a single integer.",
            answer: { type: "number", value: 7 },
            solution: "`12 × 7 = 84`, and `91 − 84 = 7`. Therefore `91 MOD 12 = 7` cupcakes remain unpacked.",
          },
        },
      ],
      keyPoints: [
        "Use `DECLARE Name : TYPE` for variables and `CONSTANT Name ← Value` for constants in CIE pseudocode.",
        "The 5 CIE data types are `INTEGER`, `REAL`, `CHAR`, `STRING`, and `BOOLEAN` (`TRUE`/`FALSE`).",
        "Store telephone numbers, zip codes, and IDs with leading zeros as `STRING`, never `INTEGER`.",
        "`a DIV b` (`a // b`) gives the integer quotient; `a MOD b` (`a % b`) gives the remainder.",
      ],
      whyItWorks:
        "Every positive integer `a` divided by `b` satisfies the Euclidean division identity `a = (a DIV b) × b + (a MOD b)` with `0 ≤ (a MOD b) < b`. Because computer memory stores integers exactly without floating-point rounding error, `DIV` and `MOD` let algorithms pack, unpack, and cycle indices with 100% precision.",
      strategies: [
        "Check `a < b` carefully: whenever `0 ≤ a < b`, `a DIV b = 0` and `a MOD b = a` (for example, `4 DIV 10 = 0` and `4 MOD 10 = 4`).",
        "Match operator symbols across languages: `←` is `=`, `=` is `==`, `<>` is `!=`, `DIV` is `//`, and `MOD` is `%`.",
      ],
      thinkDeeper:
        "Why does `(-7) // 2` evaluate to `-4` in Python (`-7 = -4 × 2 + 1`, floor towards negative infinity), and why do CIE 0478 exam questions restrict `DIV` and `MOD` to non-negative integers so both conventions agree?",
    },
    {
      id: "selection-iteration",
      heading: "Selection (IF / CASE) & Iteration (FOR / WHILE / REPEAT..UNTIL)",
      discovery: {
        problem:
          "Compare two loops when `Count` starts at `10`:\n1) `WHILE Count < 5 DO Count ← Count + 1 ENDWHILE`\n2) `REPEAT Count ← Count + 1 UNTIL Count >= 5`\nWhat is the final value of `Count` after each loop?",
        idea:
          "Loop 1 (`WHILE`) tests `10 < 5` **before** entering the body — it is `FALSE`, so the body executes **0 times** and `Count` stays `10`! Loop 2 (`REPEAT..UNTIL`) runs the body **at least once** (`Count` becomes `11`), then checks `11 >= 5` which is `TRUE`, so it stops with `Count = 11`!",
      },
      body: [
        "### Selection: `IF..THEN..ELSE..ENDIF` vs `CASE OF..OTHERWISE..ENDCASE`",
        "- Use **`IF ... THEN ... ELSE ... ENDIF`** (Python `if / elif / else`) for Boolean ranges, compound conditions (`AND`, `OR`, `NOT`), or comparing two variables.",
        "- Use **`CASE OF Variable ... OTHERWISE ... ENDCASE`** (Python `match / case` or `elif` chain) when branching on **several discrete values of one single identifier** (such as a menu choice `'A'`, `'B'`, `'C'`). Don't forget the colon `:` after each case value and `OTHERWISE` as the catch-all!",
        "",
        "### Choosing the Right Loop (Iteration)",
        "| Loop Structure | CIE Pseudocode Syntax | Runs Body... | Stops When... | Best Used When... |",
        "|---|---|---|---|---|",
        "| **Count-controlled** | `FOR i ← 1 TO 10 ... NEXT i` | Fixed count (`10` times; both `1` and `10` **inclusive**!) | Counter passes upper bound | Exact number of iterations is known before starting |",
        "| **Pre-condition** | `WHILE Cond DO ... ENDWHILE` | **0 or more** times | `Cond` evaluates to **`FALSE`** | Number of repeats is unknown and body may need to skip completely |",
        "| **Post-condition** | `REPEAT ... UNTIL Cond` | **1 or more** times (always runs once!) | `Cond` evaluates to **`TRUE`** | Input validation prompts or menus that must run at least once |",
        "",
        "**Two Classic Loop Traps:**",
        "1. **Inclusive `FOR..TO` vs Exclusive `range()`:** CIE `FOR Index ← 1 TO 5` runs for `1, 2, 3, 4, 5` (**5 iterations**). Python `for index in range(1, 5):` runs for `1, 2, 3, 4` (**4 iterations**, stopping before `5` — you must write `range(1, 6)` to include `5`!).",
        "2. **`WHILE` vs `REPEAT..UNTIL` Polarity:** `WHILE Score < 0 OR Score > 100 DO` keeps looping while input is *invalid*, whereas `REPEAT ... UNTIL Score >= 0 AND Score <= 100` stops as soon as input is *valid* (`TRUE`)! Notice De Morgan's flip: `OR` becomes `AND`, and `<` / `>` flip to `>=` / `<=`.",
      ].join("\n"),
      diagram:
        '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of pre-condition WHILE loop versus post-condition REPEAT UNTIL loop">' +
        '<rect x="8" y="8" width="544" height="244" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="145" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1d4ed8">WHILE ... DO ... ENDWHILE</text>' +
        '<text x="145" y="46" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Pre-condition: 0 or more runs (loops on TRUE)</text>' +
        '<polygon points="145,62 215,92 145,122 75,92" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>' +
        '<text x="145" y="96" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#1e3a8a">Cond?</text>' +
        '<line x1="145" y1="122" x2="145" y2="152" stroke="#16a34a" stroke-width="1.8"/>' +
        '<text x="166" y="140" font-family="sans-serif" font-size="10" font-weight="bold" fill="#15803d">TRUE</text>' +
        '<rect x="85" y="152" width="120" height="38" rx="6" fill="#ffffff" stroke="#334155" stroke-width="1.4"/>' +
        '<text x="145" y="175" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0f172a">Loop Body</text>' +
        '<polyline points="85,171 48,171 48,92 75,92" fill="none" stroke="#334155" stroke-width="1.5"/>' +
        '<polyline points="215,92 252,92 252,222 145,222" fill="none" stroke="#dc2626" stroke-width="1.6"/>' +
        '<text x="235" y="84" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626">FALSE</text>' +
        '<text x="145" y="238" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">Exit (can be 0 runs!)</text>' +
        '<line x1="280" y1="22" x2="280" y2="238" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="5,4"/>' +
        '<text x="415" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#b45309">REPEAT ... UNTIL</text>' +
        '<text x="415" y="46" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Post-condition: 1 or more runs (stops on TRUE!)</text>' +
        '<rect x="355" y="66" width="120" height="38" rx="6" fill="#ffffff" stroke="#334155" stroke-width="1.4"/>' +
        '<text x="415" y="89" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0f172a">Loop Body (1st!)</text>' +
        '<line x1="415" y1="104" x2="415" y2="132" stroke="#334155" stroke-width="1.6"/>' +
        '<polygon points="415,132 485,162 415,192 345,162" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>' +
        '<text x="415" y="166" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#92400e">Cond?</text>' +
        '<polyline points="345,162 312,162 312,85 355,85" fill="none" stroke="#dc2626" stroke-width="1.6"/>' +
        '<text x="328" y="154" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626">FALSE</text>' +
        '<line x1="415" y1="192" x2="415" y2="222" stroke="#16a34a" stroke-width="1.8"/>' +
        '<text x="438" y="210" font-family="sans-serif" font-size="10" font-weight="bold" fill="#15803d">TRUE</text>' +
        '<text x="415" y="238" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0f172a">Exit (stops on TRUE!)</text>' +
        '</svg>',
      diagramCaption: "WHILE checks its condition before the body and exits on FALSE; REPEAT..UNTIL runs its body first and exits on TRUE.",
      workedExamples: [
        {
          title: "Tracing a REPEAT..UNTIL loop",
          problem:
            "Trace the pseudocode below and find the final `OUTPUT`:\n`X ← 2`\n`Total ← 0`\n`REPEAT`\n`  Total ← Total + X`\n`  X ← X * 2`\n`UNTIL X > 10`\n`OUTPUT Total`",
          steps: [
            "Start: `X = 2`, `Total = 0`.",
            "Iteration 1: `Total ← 0 + 2 = 2`, `X ← 2 × 2 = 4`. Test `X > 10` (`4 > 10` is `FALSE`) → repeat.",
            "Iteration 2: `Total ← 2 + 4 = 6`, `X ← 4 × 2 = 8`. Test `X > 10` (`8 > 10` is `FALSE`) → repeat.",
            "Iteration 3: `Total ← 6 + 8 = 14`, `X ← 8 × 2 = 16`. Test `X > 10` (`16 > 10` is `TRUE`) → loop terminates!",
            "Final `OUTPUT` is `14`.",
          ],
          answer: "`14`",
          yourTurn: {
            question:
              "What single integer is output by this Python loop?\n`total = 0`\n`for k in range(1, 5):`\n`    total = total + k`\n`print(total)`",
            answer: { type: "number", value: 10 },
            solution: "Python `range(1, 5)` produces `1, 2, 3, 4` (`5` is excluded!). Adding `1 + 2 + 3 + 4 = 10`.",
          },
        },
      ],
      keyPoints: [
        "`CASE OF` branches cleanly on discrete values of a single variable; `OTHERWISE` handles any unmatched value.",
        "CIE `FOR i ← 1 TO N` is inclusive of `N`, whereas Python `range(1, N)` stops at `N - 1`.",
        "`WHILE ... DO ... ENDWHILE` is pre-condition (0+ executions; repeats while `TRUE`).",
        "`REPEAT ... UNTIL` is post-condition (1+ executions; repeats while `FALSE` and stops when `TRUE`!).",
      ],
      whyItWorks:
        "Having three distinct loop constructs lets code express intent directly: `FOR` prevents forgotten counter increments when bounds are fixed, `WHILE` guards against processing empty streams or sentinel values at the very first item, and `REPEAT..UNTIL` avoids priming duplicate `INPUT` lines before validation checks.",
      strategies: [
        "When converting `WHILE` to `REPEAT..UNTIL`, negate the entire condition carefully using De Morgan's Law (`NOT (A OR B)` becomes `(NOT A) AND (NOT B)`).",
        "Always check whether the first value already violates or satisfies the condition before doing arithmetic.",
      ],
      thinkDeeper:
        "Python has no built-in `REPEAT..UNTIL` keyword. How does `while True: ... if condition: break` simulate a post-condition loop cleanly without duplicating the `input()` line?",
    },
    {
      id: "strings-subroutines-scope",
      heading: "String Handling, Procedures vs Functions & Variable Scope",
      discovery: {
        problem:
          "Let `Word ← \"ALGORITHM\"`. In CIE pseudocode we write `SUBSTRING(Word, 3, 4)`. In Python we write `word[3:4]`. Why do these two lines produce completely different strings (`\"GORI\"` vs `\"O\"`)?",
        idea:
          "CIE `SUBSTRING(Word, 3, 4)` is **1-indexed** and its third parameter is **length** (starting at character 3 `'G'`, take 4 characters → `\"GORI\"`). Python `word[3:4]` is **0-indexed** and its second number is an **exclusive stop index** (character at index 3 only → `\"O\"`)!",
      },
      body: [
        "### CIE String Functions vs Python Equivalents",
        "| Operation | CIE 0478 Pseudocode | Python Equivalent | Example on `S = \"PYTHON\"` |",
        "|---|---|---|---|",
        "| String length | `LENGTH(S)` | `len(s)` | `6` |",
        "| Uppercase | `UCASE(S)` | `s.upper()` | `\"PYTHON\"` |",
        "| Lowercase | `LCASE(S)` | `s.lower()` | `\"python\"` |",
        "| Extract slice | **`SUBSTRING(S, start, length)`** *(1-indexed, count!)* | **`s[start_idx : stop_idx]`** *(0-indexed, exclusive stop!)* | `SUBSTRING(\"PYTHON\", 2, 3)` → `\"YTH\"` (`s[1:4]`) |",
        "",
        "**Golden Conversion Formula:** CIE `SUBSTRING(S, p, k)` corresponds to Python `s[p - 1 : p - 1 + k]`!",
        "",
        "### Procedures vs Functions, Parameters & Scope",
        "- A **`PROCEDURE`** performs a sequence of actions and **does NOT return a value**. In CIE pseudocode it is invoked with the **`CALL`** keyword: `CALL PrintBanner(\"Welcome\")`.",
        "- A **`FUNCTION`** performs a task and **MUST `RETURN` a single value** (`RETURNS <TYPE>` in its header). It is called **inside an expression or assignment** (never with `CALL`!): `Area ← CalcArea(5, 8)`.",
        "- **Parameters vs Arguments:** *Parameters* are the placeholder variables listed in the subroutine header (`PROCEDURE Greet(Name : STRING)`), whereas *arguments* are the actual values passed in when calling it (`CALL Greet(\"Tara\")`).",
        "- **Local vs Global Variables:**",
        "  - **Local variables** are declared inside a subroutine: they exist only while that subroutine executes, cannot be accidentally overwritten by other modules, make subroutines self-contained/reusable, and free memory upon exit.",
        "  - **Global variables** are declared in the main program scope: visible everywhere, which makes debugging harder if many subroutines mutate them unexpectedly.",
        "- **Standard CIE Library Routines:** `DIV(a, b)`, `MOD(a, b)`, `ROUND(x, places)` (rounds `x` to `places` decimal places, e.g. `ROUND(3.146, 2) = 3.15`), and `RANDOM()` (returns a random real number between `0` and `1` inclusive, or `ROUND(RANDOM() * 5, 0) + 1` for a dice roll).",
      ].join("\n"),
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="1-indexed CIE SUBSTRING versus 0-indexed Python string slicing on COMPUTER">' +
        '<rect x="8" y="8" width="544" height="234" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="280" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">String Indexing Trap: Word = "COMPUTER"</text>' +
        '<text x="52" y="62" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8">CIE Position (1-indexed):</text>' +
        '<text x="52" y="138" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309">Python Index (0-indexed):</text>' +
        '<g font-family="monospace" font-size="12" font-weight="bold" text-anchor="middle">' +
        '<text x="228" y="62" fill="#1d4ed8">1</text><text x="268" y="62" fill="#1d4ed8">2</text><text x="308" y="62" fill="#1d4ed8">3</text>' +
        '<text x="348" y="62" fill="#047857">4</text><text x="388" y="62" fill="#047857">5</text><text x="428" y="62" fill="#047857">6</text>' +
        '<text x="468" y="62" fill="#1d4ed8">7</text><text x="508" y="62" fill="#1d4ed8">8</text>' +
        '<rect x="208" y="72" width="40" height="42" fill="#ffffff" stroke="#94a3b8"/><text x="228" y="98" font-size="16" fill="#0f172a">C</text>' +
        '<rect x="248" y="72" width="40" height="42" fill="#ffffff" stroke="#94a3b8"/><text x="268" y="98" font-size="16" fill="#0f172a">O</text>' +
        '<rect x="288" y="72" width="40" height="42" fill="#ffffff" stroke="#94a3b8"/><text x="308" y="98" font-size="16" fill="#0f172a">M</text>' +
        '<rect x="328" y="72" width="40" height="42" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/><text x="348" y="98" font-size="16" fill="#064e3b">P</text>' +
        '<rect x="368" y="72" width="40" height="42" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/><text x="388" y="98" font-size="16" fill="#064e3b">U</text>' +
        '<rect x="408" y="72" width="40" height="42" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/><text x="428" y="98" font-size="16" fill="#064e3b">T</text>' +
        '<rect x="448" y="72" width="40" height="42" fill="#ffffff" stroke="#94a3b8"/><text x="468" y="98" font-size="16" fill="#0f172a">E</text>' +
        '<rect x="488" y="72" width="40" height="42" fill="#ffffff" stroke="#94a3b8"/><text x="508" y="98" font-size="16" fill="#0f172a">R</text>' +
        '<text x="228" y="138" fill="#b45309">0</text><text x="268" y="138" fill="#b45309">1</text><text x="308" y="138" fill="#b45309">2</text>' +
        '<text x="348" y="138" fill="#047857">3</text><text x="388" y="138" fill="#047857">4</text><text x="428" y="138" fill="#047857">5</text>' +
        '<text x="468" y="138" fill="#dc2626">6 (stop)</text><text x="515" y="138" fill="#b45309">7</text>' +
        '</g>' +
        '<rect x="28" y="160" width="244" height="66" rx="8" fill="#eff6ff" stroke="#3b82f6"/>' +
        '<text x="150" y="182" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#1e40af">SUBSTRING(Word, 4, 3) = "PUT"</text>' +
        '<text x="150" y="202" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1e3a8a">Start at pos 4 (\'P\'), length 3 chars</text>' +
        '<rect x="288" y="160" width="244" height="66" rx="8" fill="#fef3c7" stroke="#f59e0b"/>' +
        '<text x="410" y="182" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#92400e">word[3:6] == "PUT"</text>' +
        '<text x="410" y="202" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#78350f">Start idx 3 (\'P\'), stop BEFORE idx 6</text>' +
        '</svg>',
      diagramCaption: "Extracting \"PUT\" from \"COMPUTER\": CIE SUBSTRING(Word, 4, 3) uses 1-based start and length, while Python word[3:6] uses 0-based start and exclusive stop.",
      workedExamples: [
        {
          title: "Generating a username with string functions",
          problem:
            "Given `First ← \"amara\"` and `Last ← \"Patel\"`, evaluate:\n`UserID ← UCASE(SUBSTRING(First, 1, 2)) + LCASE(SUBSTRING(Last, 2, 3))`",
          steps: [
            "`SUBSTRING(\"amara\", 1, 2)` starts at character 1 (`'a'`) and takes `2` characters → `\"am\"`.",
            "`UCASE(\"am\")` converts it to uppercase → `\"AM\"`.",
            "`SUBSTRING(\"Patel\", 2, 3)` starts at character 2 (`'a'`) and takes `3` characters → `\"ate\"`.",
            "`LCASE(\"ate\")` ensures lowercase → `\"ate\"`.",
            "Concatenating both strings produces `\"AMate\"`.",
          ],
          answer: "`\"AMate\"`",
          yourTurn: {
            question:
              "Let `Code ← \"SINGAPORE\"`. What exact string is returned by the CIE pseudocode expression `SUBSTRING(Code, 4, 3)`? Do not include quotation marks in your answer.",
            answer: { type: "text", accept: ["GAP"], display: "GAP" },
            solution: "Counting from 1: 1=S, 2=I, 3=N, 4=G, 5=A, 6=P. Starting at position `4` (`G`) and taking `3` characters gives `GAP`.",
          },
        },
      ],
      keyPoints: [
        "CIE `SUBSTRING(S, start, length)` is **1-indexed** and takes a character **count**; Python `s[a:b]` is **0-indexed** and stops at `b - 1`.",
        "A `FUNCTION` returns a value (`RETURN`) into an expression; a `PROCEDURE` does not return a value and uses `CALL`.",
        "Subroutines improve code by avoiding duplicated code, simplifying testing/debugging of isolated modules, and enabling team reuse.",
        "Local variables prevent accidental side effects across subroutines and release memory once the subroutine finishes.",
      ],
      whyItWorks:
        "Breaking a large program into parameterised procedures and functions enforces abstraction and modular isolation: a caller only needs to know *what* parameters to pass and *what* value comes back, never the internal local variables inside.",
      strategies: [
        "Number the letters of any exam string lightly in pencil (`1, 2, 3...` above for CIE pseudocode; `0, 1, 2...` below for Python) before answering!",
        "Never write `CALL MyFunc(x)` for a `FUNCTION` — always assign or output its return value (`Ans ← MyFunc(x)` or `OUTPUT MyFunc(x)`).",
      ],
      thinkDeeper:
        "What happens if a local variable inside a procedure has the exact same identifier `Count` as a global variable in the main program? Which variable gets modified inside the procedure?",
    },
    {
      id: "arrays-files",
      heading: "1D & 2D Arrays, File Handling & Maintainable Code",
      discovery: {
        problem:
          "A school weather station records 3 temperatures per day across 5 days in `DECLARE Temps : ARRAY[1:5, 1:3] OF REAL`. How many total numbers are stored, and what do the two indices in `Temps[4, 2]` represent?",
        idea:
          "A `5 × 3` 2D array stores `5 × 3 = 15` elements of the **same data type** (`REAL`). By convention `Temps[Row, Col]` indexes **Row first, Column second** — so `Temps[4, 2]` is Day `4`, Reading `2`!",
      },
      body: [
        "### 1D and 2D Arrays",
        "An **array** is a fixed-length data structure storing multiple elements of the **same data type** under a single identifier, accessed by integer **indices**:",
        "- **1D Array (list of items):** `DECLARE Scores : ARRAY[1:30] OF INTEGER` (CIE lower bound is usually `1` or `0` — **always check the declaration**; Python lists `scores = [0] * 30` are always `0`-indexed!).",
        "- **2D Array (table/grid of rows × columns):** `DECLARE Grid : ARRAY[1:4, 1:3] OF STRING` (in Python, a list of lists `grid[row][col]`).",
        "- Use **nested `FOR` loops** to process every cell of a 2D array: outer loop for `Row ← 1 TO MaxRow`, inner loop for `Col ← 1 TO MaxCol`.",
        "",
        "### Persistent Text File Handling",
        "Variables and arrays live in **volatile RAM** — their contents vanish when the program ends or power turns off! Saving data to a **file** writes it to **non-volatile secondary storage** so it can be reloaded on future runs or shared with another program.",
        "",
        "| Step | CIE 0478 Pseudocode | Python Equivalent |",
        "|---|---|---|",
        "| Open to read | `OPENFILE \"scores.txt\" FOR READ` | `f = open(\"scores.txt\", \"r\")` |",
        "| Read into variable | `READFILE \"scores.txt\", LineText` | `line_text = f.readline().strip()` |",
        "| Open to write (overwrites) | `OPENFILE \"out.txt\" FOR WRITE` | `f = open(\"out.txt\", \"w\")` |",
        "| Write expression to file | `WRITEFILE \"out.txt\", LineText` | `f.write(line_text + \"\\n\")` |",
        "| Close file safely | `CLOSEFILE \"out.txt\"` | `f.close()` *(or `with open(...) as f:`)* |",
        "",
        "**Exam Rule:** Always include `CLOSEFILE`! Closing flushes buffered writes to disk, prevents data corruption, and unlocks the file for other programs.",
        "",
        "### Writing Maintainable Programs (4 Easy Marks!)",
        "When CIE asks how to make a program **easier to understand and maintain**, name four concrete techniques:",
        "1. **Meaningful identifiers** for variables, constants, arrays, and subroutines (`StudentAverage` instead of `x`).",
        "2. **Comments** (`//` in pseudocode, `#` in Python) explaining the purpose of tricky logic or module headers.",
        "3. **Consistent indentation and whitespace** showing selection and loop nesting clearly.",
        "4. **Modular subroutines (`PROCEDURE` / `FUNCTION`) and named `CONSTANT`s** so changes happen in one place.",
      ].join("\n"),
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="2D array row and column indexing alongside CIE file handling lifecycle">' +
        '<rect x="8" y="8" width="544" height="234" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="155" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">2D Array: Marks[1:3, 1:4]</text>' +
        '<text x="155" y="47" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Row first, Column second: Marks[2, 3] = 88</text>' +
        '<g font-family="monospace" font-size="11" text-anchor="middle">' +
        '<text x="105" y="68" fill="#1d4ed8">Col 1</text><text x="155" y="68" fill="#1d4ed8">Col 2</text>' +
        '<text x="205" y="68" fill="#047857" font-weight="bold">Col 3</text><text x="255" y="68" fill="#1d4ed8">Col 4</text>' +
        '<text x="52" y="96" fill="#1d4ed8">Row 1</text>' +
        '<rect x="80" y="76" width="50" height="32" fill="#ffffff" stroke="#94a3b8"/><text x="105" y="96" fill="#334155">72</text>' +
        '<rect x="130" y="76" width="50" height="32" fill="#ffffff" stroke="#94a3b8"/><text x="155" y="96" fill="#334155">65</text>' +
        '<rect x="180" y="76" width="50" height="32" fill="#ffffff" stroke="#94a3b8"/><text x="205" y="96" fill="#334155">91</text>' +
        '<rect x="230" y="76" width="50" height="32" fill="#ffffff" stroke="#94a3b8"/><text x="255" y="96" fill="#334155">80</text>' +
        '<text x="52" y="134" fill="#047857" font-weight="bold">Row 2</text>' +
        '<rect x="80" y="114" width="50" height="32" fill="#ffffff" stroke="#94a3b8"/><text x="105" y="134" fill="#334155">59</text>' +
        '<rect x="130" y="114" width="50" height="32" fill="#ffffff" stroke="#94a3b8"/><text x="155" y="134" fill="#334155">74</text>' +
        '<rect x="180" y="114" width="50" height="32" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/><text x="205" y="134" font-weight="bold" fill="#064e3b">88</text>' +
        '<rect x="230" y="114" width="50" height="32" fill="#ffffff" stroke="#94a3b8"/><text x="255" y="134" fill="#334155">77</text>' +
        '<text x="52" y="172" fill="#1d4ed8">Row 3</text>' +
        '<rect x="80" y="152" width="50" height="32" fill="#ffffff" stroke="#94a3b8"/><text x="105" y="172" fill="#334155">84</text>' +
        '<rect x="130" y="152" width="50" height="32" fill="#ffffff" stroke="#94a3b8"/><text x="155" y="172" fill="#334155">90</text>' +
        '<rect x="180" y="152" width="50" height="32" fill="#ffffff" stroke="#94a3b8"/><text x="205" y="172" fill="#334155">68</text>' +
        '<rect x="230" y="152" width="50" height="32" fill="#ffffff" stroke="#94a3b8"/><text x="255" y="172" fill="#334155">95</text>' +
        '</g>' +
        '<text x="165" y="212" text-anchor="middle" font-family="monospace" font-size="10" fill="#475569">Python 0-idx: marks[1][2] == 88</text>' +
        '<line x1="302" y1="22" x2="302" y2="228" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="5,4"/>' +
        '<text x="426" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">CIE File Lifecycle</text>' +
        '<rect x="326" y="52" width="200" height="36" rx="7" fill="#dbeafe" stroke="#2563eb"/>' +
        '<text x="426" y="74" text-anchor="middle" font-family="monospace" font-size="10.5" font-weight="bold" fill="#1e3a8a">OPENFILE "log.txt" FOR READ</text>' +
        '<line x1="426" y1="88" x2="426" y2="112" stroke="#334155" stroke-width="1.6"/>' +
        '<rect x="326" y="112" width="200" height="36" rx="7" fill="#fef3c7" stroke="#d97706"/>' +
        '<text x="426" y="134" text-anchor="middle" font-family="monospace" font-size="10.5" font-weight="bold" fill="#92400e">READFILE / WRITEFILE</text>' +
        '<line x1="426" y1="148" x2="426" y2="172" stroke="#334155" stroke-width="1.6"/>' +
        '<rect x="326" y="172" width="200" height="36" rx="7" fill="#dcfce7" stroke="#16a34a"/>' +
        '<text x="426" y="194" text-anchor="middle" font-family="monospace" font-size="10.5" font-weight="bold" fill="#065f46">CLOSEFILE "log.txt"</text>' +
        '<text x="426" y="224" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Saved permanently on secondary storage</text>' +
        '</svg>',
      diagramCaption: "2D arrays index [Row, Column] in RAM, while OPENFILE, READFILE/WRITEFILE, and CLOSEFILE persist text to non-volatile storage.",
      workedExamples: [
        {
          title: "Totalling each student's row in a 2D array",
          problem:
            "`DECLARE Scores : ARRAY[1:30, 1:4] OF INTEGER` stores `4` test scores for each of `30` students. Write CIE pseudocode to output each student's total score.",
          steps: [
            "Outer loop steps through every student row `Student ← 1 TO 30`.",
            "Reset `RowTotal ← 0` **inside** the outer loop (before the inner loop!) so totals don't accumulate from previous students.",
            "Inner loop steps through `Test ← 1 TO 4`, adding `Scores[Student, Test]` to `RowTotal`.",
            "After `NEXT Test`, `OUTPUT RowTotal`, then `NEXT Student`.",
          ],
          answer:
            "`FOR Student ← 1 TO 30` / `RowTotal ← 0` / `FOR Test ← 1 TO 4` / `RowTotal ← RowTotal + Scores[Student, Test]` / `NEXT Test` / `OUTPUT RowTotal` / `NEXT Student`",
          yourTurn: {
            question:
              "How many individual `INTEGER` elements can be stored in `DECLARE Board : ARRAY[0:4, 1:6] OF INTEGER`? Give a single integer.",
            answer: { type: "number", value: 30 },
            solution: "Rows `0..4` inclusive has `4 − 0 + 1 = 5` rows. Columns `1..6` inclusive has `6` columns. Total elements = `5 × 6 = 30`.",
          },
        },
      ],
      keyPoints: [
        "All elements in a CIE array share the **same data type**; count elements carefully when lower bound is `0` (`0:9` holds `10` items!).",
        "2D arrays are indexed `Array[Row, Column]` (`array[row][col]` in Python).",
        "Exact CIE file keywords: `OPENFILE \"name\" FOR READ` (or `WRITE`), `READFILE \"name\", Var`, `WRITEFILE \"name\", Expr`, `CLOSEFILE \"name\"`.",
        "Maintainable code uses meaningful identifiers, comments, indentation, constants, and modular subroutines.",
      ],
      whyItWorks:
        "Without arrays, processing 500 sensor readings would require 500 separate variable names (`Temp1`..`Temp500`) and make loops impossible. Indexing `Temps[i]` lets a 4-line loop process 5 or 5,000,000 items identically.",
      strategies: [
        "Watch out for `0`-based CIE array declarations like `ARRAY[0:7]`: number of items is `Upper − Lower + 1`!",
        "Never forget quotes around the filename in every single CIE file command (`READFILE \"data.txt\", Line`, not `READFILE data.txt`).",
      ],
      thinkDeeper:
        "Why must `RowTotal ← 0` be placed **between** `FOR Student ← 1 TO 30` and `FOR Test ← 1 TO 4` rather than right at the top of the program?",
    },
    {
      id: "databases-sql",
      heading: "Single-Table Databases & Structured Query Language (SQL)",
      discovery: {
        problem:
          "A school club table stores `StudentName`, `DateOfBirth`, `YearGroup`, and `House`. Why is `StudentName` a terrible choice for the **Primary Key**, even in a small school of 400 pupils?",
        idea:
          "Two students can easily share the exact same name (e.g. two `'Liam Tan'`s), violating uniqueness! A **Primary Key** (like `StudentID = \"S1042\"`) MUST be **unique for every record** and never left empty (`NULL`).",
      },
      body: [
        "### Single-Table Database Structure & Data Types",
        "A **flat-file (single-table) database** organises related data into a grid:",
        "- Each **Record (row)** holds all details about one single entity (e.g. one club member or one stock item).",
        "- Each **Field (column)** holds one specific attribute of identical data type across every record.",
        "- A **Primary Key** is a field that **uniquely identifies every record** in the table (no duplicates, never blank). If no natural field is guaranteed unique, add an ID field like `MemberID` or `OrderID`.",
        "",
        "| CIE Database Data Type | SQL / Typical Values | Notes |",
        "|---|---|---|",
        "| `TEXT` / `ALPHANUMERIC` | `'C04'`, `'Robotics'`, `'07700 900412'` | Letters, digits, spaces, symbols; phone numbers & IDs! |",
        "| `CHAR` | `'Y'`, `'A'` | Fixed single character |",
        "| `BOOLEAN` | `TRUE` / `FALSE` (or `1` / `0`) | Two-state flag like `PaidFee` or `InStock` |",
        "| `INTEGER` | `11`, `240`, `0` | Whole numbers used in counts/comparisons |",
        "| `REAL` | `14.50`, `3.75` | Prices, weights, measurements with decimals |",
        "| `DATE/TIME` | `'2026-05-18'` | Calendar dates or timestamps |",
        "",
        "### CIE 0478 SQL Clauses (Exact Clause Order!)",
        "1. **`SELECT field1, field2`** (or `SELECT *` for all fields, `SELECT COUNT(Field)` / `SELECT COUNT(*)` to count matching rows, `SELECT SUM(Field)` to total a numeric field).",
        "2. **`FROM TableName`** — names the table.",
        "3. **`WHERE condition`** — filters rows using `=`, `<>`, `<`, `>`, `<=`, `>=`, `AND`, `OR`, `NOT`.",
        "4. **`ORDER BY field ASC`** (ascending: A→Z, smallest→largest; **default** if omitted!) or **`ORDER BY field DESC`** (descending: Z→A, largest→smallest).",
        "",
        "**Three Non-Negotiable CIE SQL Rules:**",
        "- Put **single quotes** around `'Text'` literals (`WHERE Club = 'Chess'`), **NO quotes** around numbers or booleans (`WHERE Fee > 15 AND Paid = TRUE`).",
        "- **Repeat the field name** after `AND` / `OR`: write `WHERE YearGroup = 10 OR YearGroup = 11` — NEVER `WHERE YearGroup = 10 OR 11`!",
        "- Only list the fields asked for in `SELECT`, in the exact column order requested by the question!",
      ].join("\n"),
      diagram:
        '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Single-table database anatomy showing table name, fields, records, primary key and SQL query order">' +
        '<rect x="8" y="8" width="544" height="234" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="175" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">Table: ClubMembers (Fields = Columns, Records = Rows)</text>' +
        '<g font-family="monospace" font-size="10.5">' +
        '<rect x="22" y="42" width="76" height="28" fill="#fef3c7" stroke="#d97706"/><text x="60" y="60" text-anchor="middle" font-weight="bold" fill="#92400e">MemberID (PK)</text>' +
        '<rect x="98" y="42" width="82" height="28" fill="#dbeafe" stroke="#2563eb"/><text x="139" y="60" text-anchor="middle" font-weight="bold" fill="#1e3a8a">Name</text>' +
        '<rect x="180" y="42" width="84" height="28" fill="#dbeafe" stroke="#2563eb"/><text x="222" y="60" text-anchor="middle" font-weight="bold" fill="#1e3a8a">Club</text>' +
        '<rect x="264" y="42" width="46" height="28" fill="#dbeafe" stroke="#2563eb"/><text x="287" y="60" text-anchor="middle" font-weight="bold" fill="#1e3a8a">Fee</text>' +
        '<rect x="310" y="42" width="52" height="28" fill="#dbeafe" stroke="#2563eb"/><text x="336" y="60" text-anchor="middle" font-weight="bold" fill="#1e3a8a">Paid</text>' +
        '<rect x="22" y="70" width="340" height="26" fill="#ffffff" stroke="#94a3b8"/>' +
        '<text x="60" y="87" text-anchor="middle" fill="#0f172a">M01</text><text x="139" y="87" text-anchor="middle" fill="#0f172a">Tara</text><text x="222" y="87" text-anchor="middle" fill="#0f172a">Coding</text><text x="287" y="87" text-anchor="middle" fill="#0f172a">20</text><text x="336" y="87" text-anchor="middle" fill="#15803d">TRUE</text>' +
        '<rect x="22" y="96" width="340" height="26" fill="#ecfdf5" stroke="#16a34a" stroke-width="1.5"/>' +
        '<text x="60" y="113" text-anchor="middle" fill="#0f172a">M02</text><text x="139" y="113" text-anchor="middle" fill="#0f172a">Zain</text><text x="222" y="113" text-anchor="middle" fill="#0f172a">Robotics</text><text x="287" y="113" text-anchor="middle" fill="#0f172a">35</text><text x="336" y="113" text-anchor="middle" fill="#15803d">TRUE</text>' +
        '<rect x="22" y="122" width="340" height="26" fill="#ffffff" stroke="#94a3b8"/>' +
        '<text x="60" y="139" text-anchor="middle" fill="#0f172a">M03</text><text x="139" y="139" text-anchor="middle" fill="#0f172a">Chloe</text><text x="222" y="139" text-anchor="middle" fill="#0f172a">Coding</text><text x="287" y="139" text-anchor="middle" fill="#0f172a">20</text><text x="336" y="139" text-anchor="middle" fill="#dc2626">FALSE</text>' +
        '</g>' +
        '<text x="192" y="168" text-anchor="middle" font-family="sans-serif" font-size="10.5" fill="#047857" font-weight="bold">Highlighted row = 1 Record; each vertical column = 1 Field</text>' +
        '<rect x="376" y="42" width="162" height="184" rx="10" fill="#0f172a"/>' +
        '<text x="457" y="64" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#38bdf8">SQL Clause Order</text>' +
        '<text x="388" y="90" font-family="monospace" font-size="10.5" fill="#f8fafc">1. SELECT Name, Fee</text>' +
        '<text x="388" y="116" font-family="monospace" font-size="10.5" fill="#f8fafc">2. FROM ClubMembers</text>' +
        '<text x="388" y="142" font-family="monospace" font-size="10.5" fill="#fde047">3. WHERE Paid = TRUE</text>' +
        '<text x="388" y="164" font-family="monospace" font-size="10.5" fill="#fde047">   AND Fee &gt;= 20</text>' +
        '<text x="388" y="190" font-family="monospace" font-size="10.5" fill="#86efac">4. ORDER BY Fee DESC;</text>' +
        '<text x="457" y="214" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#94a3b8">Output: Zain 35, Tara 20</text>' +
        '</svg>',
      diagramCaption: "Anatomy of a single-table database (MemberID primary key, fields as columns, records as rows) and the strict 4-step CIE SQL clause order.",
      workedExamples: [
        {
          title: "Writing a CIE 0478 SQL query with SUM and COUNT",
          problem:
            "A table `Books` has fields `ISBN` (`TEXT`, primary key), `Title` (`TEXT`), `Genre` (`TEXT`), `Copies` (`INTEGER`), and `OnLoan` (`BOOLEAN`). Write an SQL query to find the total number of copies across all `'Science'` books.",
          steps: [
            "We want the sum of the numeric `Copies` column, not the number of rows: use `SELECT SUM(Copies)`.",
            "Specify the table: `FROM Books`.",
            "Filter for exact text match using single quotes: `WHERE Genre = 'Science';`.",
          ],
          answer: "`SELECT SUM(Copies) FROM Books WHERE Genre = 'Science';`",
          yourTurn: {
            question:
              "Using the `ClubMembers` diagram above (`M01` Tara Coding 20 TRUE, `M02` Zain Robotics 35 TRUE, `M03` Chloe Coding 20 FALSE), what integer does `SELECT SUM(Fee) FROM ClubMembers WHERE Club = 'Coding';` return?",
            answer: { type: "number", value: 40 },
            solution: "Two records have `Club = 'Coding'`: Tara (`Fee = 20`) and Chloe (`Fee = 20`). `SUM(Fee) = 20 + 20 = 40`.",
          },
        },
      ],
      keyPoints: [
        "**Field** = column (one attribute); **Record** = row (one complete item/person); **Primary Key** = unique non-null identifier.",
        "SQL clauses MUST appear in exact order: `SELECT ... FROM ... WHERE ... ORDER BY ... ASC/DESC;`.",
        "`COUNT(...)` counts how many matching **records** exist; `SUM(Field)` adds the numeric **values** inside `Field`.",
        "Always wrap `'Text'` values in quotes, leave numbers/booleans unquoted, and repeat the field name after `AND` / `OR`.",
      ],
      whyItWorks:
        "SQL is *declarative*: you state *what* columns and filter predicates you want (`SELECT ... WHERE ...`), and the database engine handles scanning rows, aggregating `SUM`/`COUNT`, and sorting results reliably without manual loop bugs.",
      strategies: [
        "Confusing `SUM` vs `COUNT` costs huge marks: ask yourself 'Am I counting how many rows match (`COUNT`), or adding up a quantity/price column (`SUM`)?'",
        "Check English wording carefully: *'at least 50'* means `>= 50`, whereas *'more than 50'* means `> 50`!",
      ],
      thinkDeeper:
        "Why does storing both `StudentName` and `HouseMasterEmail` inside every single row of a flat-file table cause *data redundancy* and *update anomalies* when a House Master changes?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "What are the five primitive data types in CIE 0478 pseudocode?",
        back: "`INTEGER` (whole number), `REAL` (decimal number), `CHAR` (single character), `STRING` (sequence of characters), and `BOOLEAN` (`TRUE` or `FALSE`).",
      },
      {
        front: "Difference between `DIV` and `MOD` (and their Python operators)?",
        back: "`a DIV b` (`a // b`) returns the whole integer quotient; `a MOD b` (`a % b`) returns the integer remainder after division.",
      },
      {
        front: "How should a telephone number like `07700900123` be stored, and why?",
        back: "As `STRING` (`TEXT` in a database), because leading zeros would be stripped by `INTEGER` and phone numbers are never used in arithmetic calculations.",
      },
      {
        front: "Key differences between `WHILE..DO..ENDWHILE` and `REPEAT..UNTIL`?",
        back: "`WHILE` tests at the start (0 or more runs; loops while `TRUE`). `REPEAT..UNTIL` tests at the end (always 1 or more runs; stops when `TRUE`!).",
      },
      {
        front: "How does `FOR i ← 1 TO 5` differ from Python `for i in range(1, 5):`?",
        back: "CIE `FOR 1 TO 5` is inclusive (`1, 2, 3, 4, 5` — 5 runs). Python `range(1, 5)` excludes the stop value (`1, 2, 3, 4` — 4 runs; use `range(1, 6)`).",
      },
      {
        front: "Compare CIE `SUBSTRING(S, 3, 4)` with Python slicing!",
        back: "CIE `SUBSTRING` is **1-indexed** and its 3rd argument is **length** (`4` chars starting at position `3`). In 0-indexed Python that same slice is `s[2:6]`!",
      },
      {
        front: "What is the exact difference between a `PROCEDURE` and a `FUNCTION`?",
        back: "A `FUNCTION` returns a value (`RETURN`) and is used inside an expression; a `PROCEDURE` does NOT return a value and is invoked with `CALL`.",
      },
      {
        front: "Give two advantages of using local variables over global variables.",
        back: "1) Other subroutines cannot accidentally overwrite them (easier debugging, modular reuse). 2) Memory is released as soon as the subroutine ends.",
      },
      {
        front: "How many items does `DECLARE Data : ARRAY[0:9] OF INTEGER` hold?",
        back: "`10` items (indices `0, 1, 2, 3, 4, 5, 6, 7, 8, 9` → `9 − 0 + 1 = 10`).",
      },
      {
        front: "Why do programs save data to text files instead of keeping it only in arrays?",
        back: "Arrays reside in volatile RAM and are lost when the program closes; files store data permanently on non-volatile secondary storage for future runs.",
      },
      {
        front: "List the four CIE pseudocode file-handling commands.",
        back: "`OPENFILE \"f.txt\" FOR READ` (or `WRITE`), `READFILE \"f.txt\", Var`, `WRITEFILE \"f.txt\", Expr`, and `CLOSEFILE \"f.txt\"`.",
      },
      {
        front: "Name four ways to make a program easier to understand and maintain.",
        back: "1) Meaningful identifiers, 2) Comments, 3) Indentation/whitespace, 4) Modular subroutines (`PROCEDURE`/`FUNCTION`) and named `CONSTANT`s.",
      },
      {
        front: "Define Field, Record, and Primary Key in a single-table database.",
        back: "**Field** = one column/attribute; **Record** = one complete row/entity; **Primary Key** = field that uniquely identifies every record (unique, never null).",
      },
      {
        front: "In SQL, what is the difference between `COUNT(Stock)` and `SUM(Stock)`?",
        back: "`COUNT(Stock)` counts how many matching rows exist; `SUM(Stock)` adds together the numeric quantities stored in the `Stock` column.",
      },
    ],
    mustKnow: [
      "Declare variables (`DECLARE X : INTEGER`), constants (`CONSTANT Rate ← 0.15`), 1D arrays (`ARRAY[1:20] OF STRING`), and 2D arrays (`ARRAY[1:5, 1:4] OF REAL`).",
      "Use `DIV` (`//`) and `MOD` (`%`) confidently for time/unit conversions, digit extraction, and even/odd divisibility checks.",
      "Trace and convert between `IF..THEN..ELSE..ENDIF`, `CASE OF..OTHERWISE..ENDCASE`, `FOR..TO..NEXT`, `WHILE..DO..ENDWHILE`, and `REPEAT..UNTIL`.",
      "Apply `LENGTH`, `UCASE`, `LCASE`, and 1-indexed `SUBSTRING(S, start, length)` alongside 0-indexed Python `s[start:stop]` without off-by-one errors.",
      "Distinguish `PROCEDURE` (`CALL`) vs `FUNCTION` (`RETURNS`), parameters vs arguments, and local vs global variables.",
      "Read and write 1D and 2D arrays using single and nested `FOR` loops.",
      "Write complete CIE pseudocode and Python scripts using `OPENFILE`, `READFILE`, `WRITEFILE`, and `CLOSEFILE`.",
      "Identify suitable database field types and justify a unique `PRIMARY KEY` for any scenario.",
      "Trace and write CIE 0478 SQL queries with `SELECT`, `FROM`, `WHERE` (`AND`, `OR`, `NOT`), `ORDER BY ... ASC/DESC`, `SUM()`, and `COUNT()`.",
      "State four coding practices that make programs maintainable (meaningful identifiers, comments, indentation, modularity/constants).",
    ],
    misconceptions: [
      {
        wrong: "Never Write ❌: `SUBSTRING(\"COMPUTER\", 0, 3)` or treating the 3rd number in `SUBSTRING(S, 2, 5)` as the end index.",
        right: "Write Instead ✅: CIE `SUBSTRING(S, start, length)` is **1-indexed** and the 3rd argument is **character count** (`SUBSTRING(\"COMPUTER\", 1, 3)` → `\"COM\"`).",
      },
      {
        wrong: "Never Write ❌: Stopping a `REPEAT ... UNTIL X = 10` loop when `X = 10` is `FALSE`.",
        right: "Write Instead ✅: `REPEAT ... UNTIL Condition` keeps looping while `Condition` is `FALSE` and **terminates as soon as `Condition` becomes `TRUE`**!",
      },
      {
        wrong: "Never Write ❌: `CALL CalcTotal(Price, Qty)` when `CalcTotal` is a `FUNCTION`.",
        right: "Write Instead ✅: Use `CALL` **only** for a `PROCEDURE`; a `FUNCTION` returns a value and must sit inside an assignment or expression (`Bill ← CalcTotal(Price, Qty)`).",
      },
      {
        wrong: "Never Write ❌: Storing phone numbers (`07700900123`) or product codes (`0048`) as `INTEGER`.",
        right: "Write Instead ✅: Store them as `STRING` (or `TEXT` in SQL) so leading zeros, spaces, or `+` signs are preserved.",
      },
      {
        wrong: "Never Write ❌: `WHERE House = 'Red' OR 'Blue'` in an SQL query.",
        right: "Write Instead ✅: Repeat the full field comparison after `AND`/`OR`: `WHERE House = 'Red' OR House = 'Blue'`.",
      },
      {
        wrong: "Never Write ❌: `WHERE Price > '50'` (quoting numbers) or `WHERE City = London` (omitting quotes on text) in SQL.",
        right: "Write Instead ✅: Wrap `'Text'` literals in single quotes (`WHERE City = 'London'`) and leave numeric/boolean literals unquoted (`WHERE Price > 50 AND InStock = TRUE`).",
      },
      {
        wrong: "Never Write ❌: `SELECT *` when an SQL exam question asks to *'display only the Title and Price'*.",
        right: "Write Instead ✅: List **only** the exact requested fields in the exact requested order (`SELECT Title, Price`), or you lose the `SELECT` mark!",
      },
      {
        wrong: "Never Write ❌: Forgetting `CLOSEFILE \"data.txt\"` after reading or writing a file.",
        right: "Write Instead ✅: Always pair `OPENFILE` with `CLOSEFILE` so buffered output is saved to secondary storage and the file lock is released.",
      },
    ],
    examMistakes: [
      "Mixing `=` and `==` / `←`: in CIE pseudocode `←` assigns and `=` compares (`<>` for not-equal); in Python `=` assigns and `==` compares (`!=` for not-equal).",
      "Off-by-one counts in Python `range(1, 10)` (only goes up to `9`!) vs CIE `FOR i ← 1 TO 10` (goes up to `10` inclusive).",
      "Swapping row and column order on a 2D array: `Grid[Row, Col]` always puts row index first and column index second.",
      "Resetting a row accumulator (`RowSum ← 0`) outside both nested loops instead of right before the inner loop.",
      "Confusing `COUNT(Fee)` (number of matching records) with `SUM(Fee)` (total money across matching records) in SQL.",
      "Putting `ORDER BY` before `WHERE` in SQL — `ORDER BY` must ALWAYS come last after `WHERE`!",
      "Choosing a person's name or date of birth as a `PRIMARY KEY` instead of a guaranteed-unique ID field (`StudentID`, `PassportNumber`).",
      "Saying arrays save data 'permanently' — arrays live in volatile RAM; only files/databases store data persistently on secondary storage.",
    ],
    mnemonics: [
      {
        topic: "SQL Clause Order",
        device: "**S**ome **F**rogs **W**ear **O**vercoats → `SELECT` → `FROM` → `WHERE` → `ORDER BY`",
        explanation: "Never swap `WHERE` and `ORDER BY`! Filter rows with `WHERE` first, then sort the survivors with `ORDER BY` last.",
      },
      {
        topic: "CIE `SUBSTRING(S, P, L)`",
        device: "**S-P-L** = **S**tring, **P**osition (from **1**!), **L**ength",
        explanation: "Stops you from ever treating the third argument as a Python stop index or starting from zero.",
      },
      {
        topic: "`DIV` vs `MOD`",
        device: "**M**OD = **M**odulo re**M**ainder; **D**IV = **D**rops the decimal",
        explanation: "`19 MOD 5 = 4` (remainder), while `19 DIV 5 = 3` (whole quotient).",
      },
    ],
    realWorld: [
      {
        emoji: "🎟️",
        title: "Airline Seat Grids (2D Arrays)",
        detail: "Flight booking engines model cabin seating as a 2D array `SeatTaken[Row, SeatCol]` of `BOOLEAN` flags before committing confirmed bookings to a database.",
      },
      {
        emoji: "🛒",
        title: "E-Commerce Product Filters (SQL)",
        detail: "Clicking 'Price under £30, In Stock, Sort High-to-Low' builds `SELECT ItemName, Price FROM Products WHERE Price < 30 AND InStock = TRUE ORDER BY Price DESC;`.",
      },
      {
        emoji: "🏦",
        title: "Check-Digit & Card Number Parsing (`DIV`, `MOD`, `SUBSTRING`)",
        detail: "Payment terminals store 16-digit card numbers as `STRING`s, slice issuer prefixes with `SUBSTRING(Card, 1, 4)`, and use `MOD 10` arithmetic to validate Luhn check digits.",
      },
      {
        emoji: "📝",
        title: "Game Save Files (`OPENFILE` / `WRITEFILE`)",
        detail: "Indie games keep player health and inventory in RAM variables during play, then serialise them to `savegame.txt` via file handling so progress survives closing the app.",
      },
    ],
    videos: [
      {
        title: "CIE IGCSE CS 0478 Chapter 8: Programming Concepts, Arrays & File Handling",
        channel: "Craig'n'Dave / IGCSE CS Revision",
        url: "https://www.youtube.com/results?search_query=CIE+IGCSE+Computer+Science+0478+Chapter+8+programming+arrays+file+handling",
      },
      {
        title: "CIE 0478 Pseudocode String Handling & SUBSTRING vs Python Slicing",
        channel: "James Gan / IGCSE CS",
        url: "https://www.youtube.com/results?search_query=IGCSE+0478+pseudocode+SUBSTRING+LENGTH+UCASE+LCASE+Python",
      },
      {
        title: "CIE IGCSE CS 0478 Chapter 9: Databases & SQL SELECT WHERE ORDER BY SUM COUNT",
        channel: "CS Classroom / Cambridge 0478",
        url: "https://www.youtube.com/results?search_query=IGCSE+Computer+Science+0478+Chapter+9+databases+SQL+SUM+COUNT",
      },
      {
        title: "Procedures vs Functions & Local vs Global Variables (CIE 0478 Paper 2)",
        channel: "Cambridge IGCSE CS Tutorials",
        url: "https://www.youtube.com/results?search_query=IGCSE+0478+procedures+vs+functions+local+global+variables",
      },
    ],
    formulas: [
      {
        name: "Integer Quotient & Remainder (`DIV` / `MOD`)",
        formula: "`a = (a DIV b) × b + (a MOD b)` — Python: `a // b` and `a % b`",
        note: "If `0 ≤ a < b`, then `a DIV b = 0` and `a MOD b = a`.",
      },
      {
        name: "CIE `SUBSTRING` vs Python Slice",
        formula: "CIE `SUBSTRING(S, start, length)` (1-indexed!) ↔ Python `s[start - 1 : start - 1 + length]` (0-indexed!)",
        note: "Example: `SUBSTRING(\"CODING\", 2, 4)` = `\"ODIN\"` = `\"CODING\"[1:5]`.",
      },
      {
        name: "`REPEAT..UNTIL` vs `WHILE..DO` Termination",
        formula: "`WHILE Cond DO` runs 0+ times (exits when `Cond` is `FALSE`); `REPEAT..UNTIL Cond` runs 1+ times (exits when `Cond` is `TRUE`)",
        note: "Negate conditions carefully with De Morgan's Law when converting between the two.",
      },
      {
        name: "1D & 2D Array Element Count",
        formula: "1D `ARRAY[L:U]` holds `U − L + 1` items; 2D `ARRAY[R1:R2, C1:C2]` holds `(R2 − R1 + 1) × (C2 − C1 + 1)` items",
        note: "Watch for lower bound `0`: `ARRAY[0:9]` has `10` elements!",
      },
      {
        name: "Procedure vs Function Syntax",
        formula: "`PROCEDURE Name(P : TYPE)` invoked via `CALL Name(Arg)` vs `FUNCTION Name(P : TYPE) RETURNS TYPE` used in expressions",
        note: "Never write `CALL` in front of a `FUNCTION`!",
      },
      {
        name: "CIE File Handling Quartet",
        formula: "`OPENFILE \"f.txt\" FOR READ/WRITE` → `READFILE \"f.txt\", V` / `WRITEFILE \"f.txt\", E` → `CLOSEFILE \"f.txt\"`",
        note: "Filenames MUST always be enclosed in double quotes.",
      },
      {
        name: "SQL Mandatory Clause Order",
        formula: "`SELECT <fields | SUM(f) | COUNT(f)> FROM <table> WHERE <condition> ORDER BY <field> ASC|DESC;`",
        note: "`ASC` is the default sort order if neither `ASC` nor `DESC` is written.",
      },
      {
        name: "SQL Literal & Compound `WHERE` Trap",
        formula: "`WHERE Dept = 'Books' AND Price <= 25 AND (Year = 10 OR Year = 11)`",
        note: "Single quotes around `'Text'`, no quotes on numbers/booleans, and ALWAYS repeat the field name after `AND`/`OR`!",
      },
      {
        name: "SQL `COUNT` vs `SUM`",
        formula: "`COUNT(*)` or `COUNT(Field)` = number of matching rows; `SUM(Field)` = arithmetic total of numeric column",
        note: "Read 'how many items/students...' (`COUNT`) vs 'total cost/stock...' (`SUM`) carefully!",
      },
      {
        name: "4 Maintainability Pillars",
        formula: "Meaningful identifiers + Comments (`//` / `#`) + Indentation + Modular subroutines / `CONSTANT`s",
        note: "Standard 4-mark CIE Paper 2 written question!",
      },
    ],
  },
};
