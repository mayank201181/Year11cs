import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "algorithms-testing-m1",
    title: "MCQ Paper 1 — Computational Thinking, Flowcharts & Core Validation",
    questions: [
      {
        id: "algorithms-testing-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "computational-pdls",
        question:
          "A transit engineer designs a city metro map that keeps station names and line interchanges while omitting street names, river curves, and exact geographical distances. Which computational thinking technique is being applied?",
        options: ["Decomposition", "Iteration", "Verification", "Abstraction"],
        answerIndex: 3,
        hints: ["Which skill filters out unnecessary detail to focus only on what matters?"],
        explanation:
          "**Abstraction** keeps essential characteristics (stations and connections) while removing unnecessary detail (exact street geography). Decomposition splits a system into smaller sub-systems, whereas verification checks accurate copying.",
      },
      {
        id: "algorithms-testing-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "computational-pdls",
        question:
          "Breaking a large hotel booking system down into separate sub-systems for Room Search, Guest Check-In, Billing, and Housekeeping is an example of:",
        options: ["Linear searching", "Validation", "Decomposition", "Abstraction"],
        answerIndex: 2,
        hints: ["Think about splitting one complex problem into smaller, manageable modules."],
        explanation:
          "**Decomposition** breaks a complex system into smaller, manageable sub-systems that can be designed, coded, and tested independently. Abstraction hides irrelevant details rather than splitting into modules.",
      },
      {
        id: "algorithms-testing-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "computational-pdls",
        question:
          "During which stage of the Program Development Life Cycle (PDLC) are structure diagrams, flowcharts, and pseudocode produced before the program is written?",
        options: ["Coding", "Design", "Analysis", "Testing"],
        answerIndex: 1,
        hints: ["Analysis defines *what* the problem is; which stage plans *how* the solution is structured?"],
        explanation:
          "Structure diagrams, flowcharts, and pseudocode are blueprints produced in the **Design** stage. Analysis produces the requirements specification, Coding writes the source code, and Testing checks the program with test data.",
      },
      {
        id: "algorithms-testing-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "flowcharts-pseudocode",
        question:
          "In a standard CIE 0478 program flowchart, which geometric symbol represents `INPUT Quantity` or `OUTPUT Total`?",
        options: [
          "Parallelogram",
          "Rounded rectangle (oval)",
          "Rectangle",
          "Diamond",
        ],
        answerIndex: 0,
        hints: ["Rectangles are for internal processes; diamonds are for decisions."],
        explanation:
          "A slanted **Parallelogram** represents all `INPUT` and `OUTPUT` operations. A rectangle is for processes/assignments, a diamond is for decisions, and a rounded terminator marks Start/Stop.",
      },
      {
        id: "algorithms-testing-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "flowcharts-pseudocode",
        question:
          "In a standard CIE 0478 flowchart, what does a rectangle with **two vertical lines inside its left and right edges** represent?",
        options: [
          "Simultaneous input and output",
          "A pre-defined subroutine (procedure or function) call",
          "A `REPEAT ... UNTIL` loop terminator",
          "An array declaration",
        ],
        answerIndex: 1,
        hints: ["Think of calling a module whose detailed steps are drawn elsewhere."],
        explanation:
          "A **double-barred rectangle** represents a **subroutine** (pre-defined process) call, invoking a procedure or function defined separately.",
      },
      {
        id: "algorithms-testing-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "flowcharts-pseudocode",
        question:
          "Which CIE 0478 pseudocode statement correctly checks whether the variable `Code` is **not equal to** `999`?",
        options: [
          "`IF Code =! 999 THEN`",
          "`IF NOT Code ← 999 THEN`",
          "`IF Code <> 999 THEN`",
          "`IF Code != 999 THEN`",
        ],
        answerIndex: 2,
        hints: [
          "Python uses `!=`, but CIE 0478 pseudocode uses two angle brackets.",
          "Remember `←` is strictly for assignment, never comparison.",
        ],
        explanation:
          "In CIE 0478 pseudocode, the relational operator for **not equal to** is **`<>`** (`IF Code <> 999 THEN`). `!=` is Python/C syntax rather than official CIE pseudocode, and `←` is assignment.",
      },
      {
        id: "algorithms-testing-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "standard-algorithms",
        question:
          "An algorithm inputs 30 positive race finish times (in seconds, all between `11.0` and `25.0`) to find the fastest (minimum) time `Fastest`. Which initialisation of `Fastest` before the loop works reliably?",
        options: [
          "`Fastest ← 0`",
          "`Fastest ← -1`",
          "`Fastest ← 9999`",
          "`Fastest ← 10`",
        ],
        answerIndex: 2,
        hints: [
          "Inside the loop, the check is `IF Time < Fastest THEN Fastest ← Time`.",
          "If `Fastest` starts smaller than `11.0`, will `Time < Fastest` ever be `TRUE`?",
        ],
        explanation:
          "Initialising **`Fastest ← 9999`** (a value larger than any valid finish time) guarantees the very first valid race time replaces `Fastest`. Initialising to `0`, `10`, or `-1` fails because every real time (`11.0..25.0`) is greater than the starting value, so `Time < Fastest` would never trigger!",
      },
      {
        id: "algorithms-testing-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "standard-algorithms",
        question:
          "Which statement about the **Linear Search** algorithm on a 1D array is TRUE?",
        options: [
          "It checks elements sequentially from the start and works on unsorted arrays.",
          "It swaps adjacent elements whenever they are out of order.",
          "It repeatedly halves the search interval by checking the middle element.",
          "The array MUST be sorted into ascending order before searching begins.",
        ],
        answerIndex: 0,
        hints: [
          "Contrast Linear Search with Binary Search and Bubble Sort.",
          "Does Linear Search care what order the items are stored in?",
        ],
        explanation:
          "**Linear Search** inspects each element sequentially from the first index until a match is found or the array ends, so it works on **both sorted and unsorted** arrays. Halving the interval describes Binary Search, and swapping adjacent elements describes Bubble Sort.",
      },
      {
        id: "algorithms-testing-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "validation-verification-testing",
        question:
          "Which statement accurately states the difference between **validation** and **verification** on CIE 0478?",
        options: [
          "Validation checks data is accurate and truthful; verification checks data is within range.",
          "Validation checks data is reasonable/sensible; verification checks data was copied accurately.",
          "Validation prevents cyber attacks; verification encrypts data before transmission.",
          "Validation is performed manually by a human; verification is always a range or length check.",
        ],
        answerIndex: 1,
        hints: [
          "Can a computer know your real age, or only whether the number typed looks sensible?",
          "Double entry and visual checks verify transcription accuracy.",
        ],
        explanation:
          "**Validation** is an automated software check that entered data is **reasonable/sensible** and obeys rules (it can never confirm accuracy!). **Verification** checks that data has been **accurately copied** from one source to another without transcription error.",
      },
      {
        id: "algorithms-testing-m1-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "validation-verification-testing",
        question:
          "A school registration form requires every student code to start with two uppercase letters followed by four digits, such as `SG2048`. Which validation check is most suitable for enforcing this exact pattern?",
        options: ["Format check", "Range check", "Type check", "Presence check"],
        answerIndex: 0,
        hints: ["It doesn't just count 6 characters — it enforces a specific template of letters then digits!"],
        explanation:
          "A **Format check** (picture check) ensures characters match a defined pattern/template (`LL9999`). A length check would accept `123456` or `ABCDEF`, which violate the two-letters-four-digits rule.",
      },
      {
        id: "algorithms-testing-m1-q11",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "validation-verification-testing",
        question:
          "When setting up an account, a user must type their new email address twice into two boxes, and the system rejects the form if the two entries differ. What type of check is this?",
        options: [
          "Visual check validation",
          "Length validation",
          "Format validation",
          "Double entry verification",
        ],
        answerIndex: 3,
        hints: [
          "Is typing something twice checking reasonableness, or checking you didn't make a typing slip?",
        ],
        explanation:
          "Typing data twice so the computer can compare both copies is **Double entry verification** — it checks that the user did not make a transcription/typing mistake.",
      },
      {
        id: "algorithms-testing-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "validation-verification-testing",
        question:
          "A program accepts whole-number exam marks from `1` to `100` inclusive. Which pair of values represents **extreme** test data for this rule?",
        options: [
          "`0` and `101`",
          "`0` and `1`",
          "`45` and `55`",
          "`1` and `100`",
        ],
        answerIndex: 3,
        hints: [
          "Is extreme test data accepted or rejected by the validation rule?",
          "Extreme values sit right ON the valid limits and MUST be accepted!",
        ],
        explanation:
          "**Extreme** test data consists of the smallest and largest **accepted** values at the ends of the valid range: **`1` and `100`**. (`0` and `101` are rejected values just outside the range; `0, 1` and `100, 101` are **boundary** pairs!)",
      },
      {
        id: "algorithms-testing-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "validation-verification-testing",
        question:
          "A delivery app accepts parcel weights (in whole kg) from `1` to `25` inclusive. Which pair of values is valid **boundary** test data for the **upper** boundary?",
        options: [
          "`1` and `25`",
          "`25` and `26`",
          "`24` and `25`",
          "`26` and `27`",
        ],
        answerIndex: 1,
        hints: [
          "Boundary test data tests both sides of a single boundary limit.",
          "One value must be the largest accepted extreme (`25`) and the other the adjacent rejected value (`26`).",
        ],
        explanation:
          "**Boundary** test data uses a pair right across a limit: the largest accepted value (**`25`**, accepted) and the immediately adjacent value outside the limit (**`26`**, rejected). `1` and `25` are extreme values, not an upper-boundary pair.",
      },
      {
        id: "algorithms-testing-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "trace-tables-errors",
        question:
          "What is printed by the following CIE pseudocode?\n`Total ← 0`\n`FOR K ← 1 TO 4`\n`  Total ← Total + K * 2`\n`NEXT K`\n`OUTPUT Total`",
        options: ["`8`", "`10`", "`20`", "`16`"],
        answerIndex: 2,
        hints: [
          "Trace `K = 1, 2, 3, 4` step by step.",
          "Add `2 + 4 + 6 + 8` to `Total`.",
        ],
        explanation:
          "Dry-running `K = 1..4`: `Total` becomes `0 + 2 = 2`, `2 + 4 = 6`, `6 + 6 = 12`, and `12 + 8 = 20`. (`8` is the Distractor if `Total` was overwritten rather than accumulated; `10` is `1 + 2 + 3 + 4` without `* 2`.)",
      },
      {
        id: "algorithms-testing-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "trace-tables-errors",
        question:
          "A programmer wants to output `\"Invalid\"` whenever an integer `Age` is outside the valid range `12` to `18` inclusive. Which condition is logically correct?",
        options: [
          "`IF Age < 12 OR Age > 18 THEN OUTPUT \"Invalid\"`",
          "`IF Age < 12 AND Age > 18 THEN OUTPUT \"Invalid\"`",
          "`IF Age > 12 AND Age < 18 THEN OUTPUT \"Invalid\"`",
          "`IF Age <= 12 OR Age >= 18 THEN OUTPUT \"Invalid\"`",
        ],
        answerIndex: 0,
        hints: [
          "Can a single number ever be `< 12` AND `> 18` at the same time?",
          "Check the extreme values `12` and `18`: they are VALID, so they must NOT trigger `\"Invalid\"`!",
        ],
        explanation:
          "An out-of-range value is either strictly below `12` **OR** strictly above `18`: **`IF Age < 12 OR Age > 18 THEN`**. Using `AND` creates an impossible condition (always `FALSE`), while `<= 12 OR >= 18` wrongly rejects the valid extreme ages `12` and `18`.",
      },
    ],
  },
  {
    id: "algorithms-testing-m2",
    title: "MCQ Paper 2 — Bubble Sort, Linear Search & Trace Table Dry-Runs",
    questions: [
      {
        id: "algorithms-testing-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "standard-algorithms",
        question:
          "Which three pseudocode lines correctly swap the contents of `Arr[i]` and `Arr[i + 1]` during a Bubble Sort?",
        options: [
          "`Arr[i] ← Arr[i + 1]` ; `Arr[i + 1] ← Arr[i]` ; `Temp ← 0`",
          "`Arr[i] ← Arr[i + 1]` ; `Arr[i + 1] ← Temp` ; `Temp ← Arr[i]`",
          "`Temp ← Arr[i]` ; `Arr[i + 1] ← Arr[i]` ; `Arr[i] ← Temp`",
          "`Temp ← Arr[i]` ; `Arr[i] ← Arr[i + 1]` ; `Arr[i + 1] ← Temp`",
        ],
        answerIndex: 3,
        hints: [
          "Save `Arr[i]` into `Temp` BEFORE overwriting `Arr[i]`!",
          "Test with `Arr[i] = 9` and `Arr[i + 1] = 4`.",
        ],
        explanation:
          "First save `Temp ← Arr[i]` (`9`), then copy `Arr[i] ← Arr[i + 1]` (`4`), then place `Arr[i + 1] ← Temp` (`9`). Writing `Arr[i] ← Arr[i + 1]` before saving `Temp` destroys the original value of `Arr[i]`.",
      },
      {
        id: "algorithms-testing-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "standard-algorithms",
        question:
          "An ascending Bubble Sort runs **Pass 1** on the 5-element array `[28, 14, 35, 19, 10]`. What is the state of the array immediately after **Pass 1** finishes?",
        options: [
          "`[14, 28, 35, 10, 19]`",
          "`[14, 28, 19, 10, 35]`",
          "`[10, 14, 19, 28, 35]`",
          "`[14, 19, 10, 28, 35]`",
        ],
        answerIndex: 1,
        hints: [
          "Step through adjacent pairs `(1,2)`, `(2,3)`, `(3,4)`, `(4,5)` one by one.",
          "`(28, 14)` swaps → `(28, 35)` stays → `(35, 19)` swaps → `(35, 10)` swaps.",
        ],
        explanation:
          "Tracing Pass 1: `(28,14)` swaps → `[14, 28, 35, 19, 10]`; `(28,35)` no swap; `(35,19)` swaps → `[14, 28, 19, 35, 10]`; `(35,10)` swaps → **`[14, 28, 19, 10, 35]`**. Only Pass 1 has completed, locking the largest item `35` at the end.",
      },
      {
        id: "algorithms-testing-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "standard-algorithms",
        question:
          "How many **swaps** occur in total when sorting `[12, 5, 20, 30]` into ascending order using Bubble Sort?",
        options: ["`2`", "`3`", "`1`", "`0`"],
        answerIndex: 2,
        hints: [
          "Run Pass 1: compare `(12, 5)`, `(12, 20)`, `(20, 30)`.",
          "After `(12, 5)` swaps to `[5, 12, 20, 30]`, are any other pairs out of order?",
        ],
        explanation:
          "In Pass 1, `(12, 5)` swaps to give `[5, 12, 20, 30]`; `(12, 20)` and `(20, 30)` need no swap. Pass 2 checks `(5, 12)` and `(12, 20)` with **0 swaps**, terminating the sort. Total swaps = **`1`**.",
      },
      {
        id: "algorithms-testing-m2-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "standard-algorithms",
        question:
          "An ascending Bubble Sort uses a Boolean `Swap` flag (`REPEAT ... UNTIL Swap = FALSE`) and shrinks `Last` by `1` each pass. If the input array of 6 elements `[4, 9, 15, 21, 33, 40]` is **already sorted**, how many passes and comparisons are executed?",
        options: [
          "`1` pass and `6` comparisons",
          "`1` pass and `5` comparisons",
          "`5` passes and `15` comparisons",
          "`0` passes and `0` comparisons",
        ],
        answerIndex: 1,
        hints: [
          "Can the algorithm know the array is sorted without checking adjacent pairs once?",
          "With 6 elements, how many adjacent pairs `(Arr[i], Arr[i+1])` exist in Pass 1?",
        ],
        explanation:
          "Pass 1 sets `Swap ← FALSE` and compares the **`5` adjacent pairs** (`i = 1` to `5`). None swap, so `Swap` remains `FALSE` and `UNTIL Swap = FALSE` stops immediately after **`1` pass and `5` comparisons**.",
      },
      {
        id: "algorithms-testing-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "standard-algorithms",
        question:
          "A 1D array `Items[1:6]` holds `[\"Pen\", \"Book\", \"Ruler\", \"Glue\", \"Tape\", \"Clip\"]`. A Linear Search looks for `\"Glue\"`, comparing `Items[Index] = \"Glue\"` starting at `Index ← 1` and stopping immediately when found. How many comparisons are made?",
        options: ["`6`", "`5`", "`4`", "`3`"],
        answerIndex: 2,
        hints: [
          "Check `Index = 1` (`\"Pen\"`), `2` (`\"Book\"`), `3` (`\"Ruler\"`), `4` (`\"Glue\"`).",
          "Because Linear Search uses a `Found` flag, it stops as soon as `Items[4] = \"Glue\"` is `TRUE`!",
        ],
        explanation:
          "The algorithm tests `Items[1]`, `Items[2]`, `Items[3]`, and `Items[4]`. On the **4th comparison**, `Items[4] = \"Glue\"` is `TRUE`, setting `Found ← TRUE` and exiting the loop immediately without testing indices 5 or 6.",
      },
      {
        id: "algorithms-testing-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "trace-tables-errors",
        question:
          "Trace this CIE pseudocode:\n`X ← 25`\n`Step ← 0`\n`REPEAT`\n`  X ← X - 7`\n`  Step ← Step + 1`\n`UNTIL X < 5`\n`OUTPUT X, \", \", Step`\nWhat is the exact output?",
        options: [
          "`11, 2`",
          "`-3, 4`",
          "`4, 3`",
          "`4, 4`",
        ],
        answerIndex: 2,
        hints: [
          "Subtract `7` on each iteration and test `X < 5` at `UNTIL`.",
          "Iter 1: `X = 18, Step = 1`; Iter 2: `X = 11, Step = 2`; Iter 3: `X = 4, Step = 3`.",
        ],
        explanation:
          "Start `X = 25, Step = 0`. Iter 1: `X = 18, Step = 1` (`18 < 5` FALSE). Iter 2: `X = 11, Step = 2` (`11 < 5` FALSE). Iter 3: `X = 4, Step = 3` (`4 < 5` TRUE → loop stops!). Output is **`4, 3`**.",
      },
      {
        id: "algorithms-testing-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "trace-tables-errors",
        question:
          "Trace this algorithm with the input sequence `6, -2, 9, 0, 4`:\n`Sum ← 0`\n`INPUT N`\n`WHILE N <> 0 DO`\n`  IF N > 0 THEN`\n`    Sum ← Sum + N`\n`  ENDIF`\n`  INPUT N`\n`ENDWHILE`\n`OUTPUT Sum`",
        options: ["`15`", "`19`", "`13`", "`17`"],
        answerIndex: 0,
        hints: [
          "`0` is a rogue/sentinel value that terminates `WHILE N <> 0 DO`!",
          "Is `4` (after `0`) ever read, and is `-2` added to `Sum`?",
        ],
        explanation:
          "First `N = 6` (`> 0` → `Sum = 6`). Next `N = -2` (`> 0` FALSE → `Sum` stays `6`). Next `N = 9` (`> 0` → `Sum = 15`). Next `N = 0` → `WHILE N <> 0` becomes `FALSE`, terminating the loop immediately before `4` is ever read! Output is **`15`**.",
      },
      {
        id: "algorithms-testing-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "validation-verification-testing",
        question:
          "A library checkout system calculates the 13th digit of an ISBN book code from the first 12 digits to detect if two adjacent digits were accidentally swapped when typed. Which validation check is this?",
        options: ["Check digit", "Length check", "Range check", "Format check"],
        answerIndex: 0,
        hints: [
          "Which check appends a mathematically calculated extra digit to a numeric code?",
          "ISBN-13 and Modulo-11 barcodes use this check to catch mistyped or transposed digits.",
        ],
        explanation:
          "A **Check digit** is calculated from the preceding digits using a modulo weighting algorithm (such as ISBN-13 or Modulo-11) and detects mistyped digits and transposition errors.",
      },
      {
        id: "algorithms-testing-m2-q09",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "validation-verification-testing",
        question:
          "An online checkout refuses to proceed because the 'Delivery Postcode' box has been left completely empty. Which validation check triggered this error?",
        options: ["Length check", "Presence check", "Type check", "Range check"],
        answerIndex: 1,
        hints: ["Which check simply verifies that a required field is not blank?"],
        explanation:
          "A **Presence check** ensures that a mandatory field has not been left blank/empty (`Postcode <> \"\"`).",
      },
      {
        id: "algorithms-testing-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "validation-verification-testing",
        question:
          "A clerk types an invoice total from a paper receipt onto a computer screen, then carefully reads the screen side-by-side against the paper receipt before clicking 'Save'. What check is the clerk performing?",
        options: [
          "Range check (validation)",
          "Double entry (verification)",
          "Type check (validation)",
          "Visual check (verification)",
        ],
        answerIndex: 3,
        hints: [
          "The human is comparing the displayed data against the original source document.",
          "Is that validation or verification?",
        ],
        explanation:
          "Manually comparing on-screen data against the original paper source document is a **Visual check** (also called a screen check), which is a method of **verification**.",
      },
      {
        id: "algorithms-testing-m2-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "trace-tables-errors",
        question:
          "Examine this buggy pseudocode intended to count how many of 10 input temperatures exceed `30`:\n`1  FOR i ← 1 TO 10`\n`2    Hot ← 0`\n`3    INPUT Temp`\n`4    IF Temp > 30 THEN Hot ← Hot + 1 ENDIF`\n`5  NEXT i`\n`6  OUTPUT Hot`\nIf the last two inputs (9th and 10th) are `35` and `22`, what does Line 6 actually output?",
        options: [
          "`1`",
          "`10`",
          "The total count of inputs above `30`",
          "`0`",
        ],
        answerIndex: 3,
        hints: [
          "Look closely at Line 2 (`Hot ← 0`) — it is INSIDE the `FOR` loop!",
          "On iteration `i = 10`, `Hot` is reset to `0` and `Temp = 22` is tested.",
        ],
        explanation:
          "Because `Hot ← 0` is mistakenly placed **inside** the loop on Line 2, `Hot` is wiped back to `0` at the start of every single iteration! On the 10th (final) iteration, `Hot` becomes `0`, `Temp = 22` is not `> 30`, so `Hot` finishes at **`0`**.",
      },
      {
        id: "algorithms-testing-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "computational-pdls",
        question:
          "What does a **structure diagram** show during the Design stage of the PDLC?",
        options: [
          "The physical wiring between the CPU registers and RAM.",
          "A dry-run table of variable values for each test input.",
          "The top-down hierarchical breakdown of a system into sub-systems and modules.",
          "The step-by-step sequence of loops and `Yes`/`No` decision diamonds.",
        ],
        answerIndex: 2,
        hints: [
          "Think of a tree chart with the main system at the top and smaller modules branching underneath.",
          "It visualises decomposition rather than step-by-step loop arrows.",
        ],
        explanation:
          "A **structure diagram** shows the **top-down hierarchical decomposition** of a system into sub-systems and sub-sub-systems. Loops and decision diamonds belong to flowcharts, while variable dry-runs belong to trace tables.",
      },
      {
        id: "algorithms-testing-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "flowcharts-pseudocode",
        question:
          "Why will a candidate lose marks on a CIE 0478 flowchart if they draw a Decision diamond `Count = 20?` with two exit arrows but no text next to the arrows?",
        options: [
          "Without `Yes`/`No` (or `True`/`False`) labels, it is impossible to tell which branch executes when the condition holds.",
          "Decision diamonds in CIE 0478 flowcharts are only permitted to have a single exit arrow leaving the bottom corner.",
          "Flowchart decision diamonds cannot contain numeric constants like `20` and must compare text strings instead.",
          "Counter variables such as `Count` must only be tested inside rounded terminator ovals rather than diamonds.",
        ],
        answerIndex: 0,
        hints: [
          "How does someone dry-running your flowchart know which path corresponds to `Count = 20` being true?",
          "Every Decision diamond requires two clearly labelled exit branches (`Yes`/`No` or `True`/`False`).",
        ],
        explanation:
          "Every Decision diamond has two exit paths — one for true and one for false — so **both exit arrows must be clearly labelled** (`Yes`/`No` or `True`/`False`) to make control flow unambiguous.",
      },
      {
        id: "algorithms-testing-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "trace-tables-errors",
        question:
          "Trace this algorithm carefully:\n`A ← 3`\n`B ← 1`\n`WHILE A <= 9 DO`\n`  B ← B * 2`\n`  A ← A + 3`\n`ENDWHILE`\n`OUTPUT A, \"-\", B`\nWhat is output?",
        options: [
          "`9-8`",
          "`12-8`",
          "`9-4`",
          "`12-16`",
        ],
        answerIndex: 1,
        hints: [
          "Track `(A, B)` before each `WHILE A <= 9` check.",
          "Start `(3, 1)` → `(6, 2)` → `(9, 4)` → `9 <= 9` is STILL TRUE! Run one more iteration.",
        ],
        explanation:
          "Start `A = 3, B = 1`. Iter 1 (`3 <= 9`): `B = 2, A = 6`. Iter 2 (`6 <= 9`): `B = 4, A = 9`. Iter 3 (`9 <= 9` is TRUE!): `B = 8, A = 12`. Now `12 <= 9` is FALSE, so the loop exits and outputs **`12-8`**.",
      },
      {
        id: "algorithms-testing-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "validation-verification-testing",
        question:
          "A password field requires between `8` and `16` characters inclusive. A tester enters a 7-character password `\"sun2026\"` and an 8-character password `\"moon2026\"`. What category of test data is this pair?",
        options: [
          "Boundary test data",
          "Extreme test data",
          "Normal test data",
          "Verification test data",
        ],
        answerIndex: 0,
        hints: [
          "Count the lengths: `7` characters (just rejected) and `8` characters (smallest accepted).",
          "One rejected adjacent value + one accepted extreme value = ?",
        ],
        explanation:
          "Lengths `7` (rejected, 1 below minimum) and `8` (accepted, minimum extreme) form the **lower boundary test data pair** for the `8..16` length check. Extreme data alone would be lengths `8` and `16` (both accepted).",
      },
    ],
  },
  {
    id: "algorithms-testing-m3",
    title: "MCQ Paper 3 — Exam Traps, Bug Hunting & Multi-Step Algorithms",
    questions: [
      {
        id: "algorithms-testing-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "validation-verification-testing",
        question:
          "A customer orders `3` laptops online, accidentally types `33` into the quantity box (where the shop's range check allows `1` to `50`), and skips reading the order summary screen. Why is `33` accepted?",
        options: [
          "Because `33` is reasonable within `1..50`, and validation cannot detect whether valid-looking data is accurate.",
          "Because verification was used instead of validation, and verification accepts any integer typed by a user.",
          "Because a presence check always overrides a range check whenever a non-blank value is entered into a form.",
          "Because range checks in CIE algorithms only validate text string lengths rather than numeric integer values.",
        ],
        answerIndex: 0,
        hints: [
          "Does `33` satisfy `1 <= Qty AND Qty <= 50`?",
          "Remember the golden CIE rule: validation checks reasonableness, NOT accuracy!",
        ],
        explanation:
          "`33` lies inside `1..50` and is an integer, so it is **reasonable** and passes validation! Validation **cannot** know the customer meant `3` — catching that transcription slip required a **visual check (verification)** on the order summary.",
      },
      {
        id: "algorithms-testing-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "standard-algorithms",
        question:
          "An array of `4` numbers `[40, 30, 20, 10]` (reverse order) is sorted into ascending order using Bubble Sort with shrinking `Last` (`3`, then `2`, then `1`). How many **total swaps** take place across the entire sort?",
        options: ["`3`", "`4`", "`12`", "`6`"],
        answerIndex: 3,
        hints: [
          "Pass 1 bubbles `40` to index 4 (`3` swaps → `[30, 20, 10, 40]`).",
          "Pass 2 bubbles `30` to index 3 (`2` swaps → `[20, 10, 30, 40]`), and Pass 3 swaps `(20, 10)` (`1` swap).",
        ],
        explanation:
          "Pass 1 makes `3` swaps (`[30, 20, 10, 40]`), Pass 2 makes `2` swaps (`[20, 10, 30, 40]`), and Pass 3 makes `1` swap (`[10, 20, 30, 40]`). Total swaps = `3 + 2 + 1 =` **`6`** (which matches `n(n − 1)/2 = 4 × 3 / 2 = 6`).",
      },
      {
        id: "algorithms-testing-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "computational-pdls",
        question:
          "During testing, a programmer discovers that users need to enter half-day bookings (`0.5`), which the original integer design rejected. The programmer returns to update the requirements and pseudocode before modifying the code. What property of the PDLC does this illustrate?",
        options: [
          "Abstraction removes the need for the Coding stage by generating executable programs directly from test data.",
          "Testing always happens before Analysis in the PDLC so user requirements are decided after finding bugs.",
          "The PDLC is iterative, cycling back to earlier stages when testing reveals issues or new requirements.",
          "Decomposition locks all sub-systems permanently so requirements cannot be changed once Design finishes.",
        ],
        answerIndex: 2,
        hints: [
          "Think of the feedback loop arrow from Testing back to Analysis/Design.",
          "Repeating cycles to refine earlier stages is called *iterative* development.",
        ],
        explanation:
          "The Program Development Life Cycle is **iterative**: findings during Coding or Testing routinely feed back into Analysis and Design to refine specifications and algorithms.",
      },
      {
        id: "algorithms-testing-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "validation-verification-testing",
        question:
          "A validation rule accepts integer ages from `18` to `65` inclusive. A student tests the program with `\"twenty\"`. Which category of test data is `\"twenty\"`?",
        options: [
          "Boundary test data",
          "Extreme test data",
          "Normal test data",
          "Abnormal (erroneous) data",
        ],
        answerIndex: 3,
        hints: [
          "The program expects an integer (`18..65`), not alphabetic text.",
          "Should `\"twenty\"` be accepted or rejected?",
        ],
        explanation:
          "`\"twenty\"` is of the wrong data type (string instead of integer) and must be **rejected**, making it **Abnormal (erroneous) test data**.",
      },
      {
        id: "algorithms-testing-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "trace-tables-errors",
        question:
          "How many numbers are input by the user when this pseudocode runs?\n`Count ← 0`\n`REPEAT`\n`  INPUT Value`\n`  Count ← Count + 1`\n`UNTIL Count > 5`",
        options: ["`4`", "`6`", "`5`", "`7`"],
        answerIndex: 1,
        hints: [
          "Trace `Count` after each `INPUT`: after 1st input `Count = 1`; after 5th input `Count = 5`.",
          "Is `5 > 5` `TRUE` or `FALSE`?",
        ],
        explanation:
          "After the 5th input, `Count` becomes `5`. The check `Count > 5` (`5 > 5`) is still **`FALSE`**, so the `REPEAT..UNTIL` loop runs a **6th time**! After the 6th input, `Count = 6`, making `6 > 5` `TRUE`. Thus **`6`** values are input (classic off-by-one bug when `UNTIL Count = 5` was intended!).",
      },
      {
        id: "algorithms-testing-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "standard-algorithms",
        question:
          "To modify an ascending Bubble Sort so that it sorts an array into **descending** order (largest to smallest), which single change is needed?",
        options: [
          "Change the comparison `IF Arr[Index] > Arr[Index + 1]` to `IF Arr[Index] < Arr[Index + 1]`.",
          "Start `Index` at `0` instead of `1`.",
          "Change `Swap ← FALSE` to `Swap ← TRUE` at the start of each pass.",
          "Remove the `Temp` variable from the swap routine.",
        ],
        answerIndex: 0,
        hints: [
          "In descending order, when are two neighbours `Arr[Index]` and `Arr[Index + 1]` in the WRONG order?",
          "When the left item is smaller than the right item!",
        ],
        explanation:
          "Swapping whenever **`Arr[Index] < Arr[Index + 1]`** moves larger values left and bubbles smaller values toward the end of the array, sorting in **descending** order.",
      },
      {
        id: "algorithms-testing-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "flowcharts-pseudocode",
        question:
          "A flowchart starts with `N ← 1`, enters a process box `OUTPUT N`, then `N ← N + 2`, and hits a diamond `N > 7?` whose `No` arrow loops back to `OUTPUT N` and `Yes` arrow goes to `STOP`. What sequence of numbers is output?",
        options: [
          "`3, 5, 7, 9`",
          "`1, 3, 5, 7, 9`",
          "`1, 3, 5`",
          "`1, 3, 5, 7`",
        ],
        answerIndex: 3,
        hints: [
          "Notice `OUTPUT N` happens BEFORE `N ← N + 2`!",
          "After printing `7`, `N` becomes `9`, and `9 > 7` is `Yes` → `STOP`.",
        ],
        explanation:
          "1st pass: outputs `1`, `N` becomes `3` (`3 > 7` No). 2nd pass: outputs `3`, `N` becomes `5` (`5 > 7` No). 3rd pass: outputs `5`, `N` becomes `7` (`7 > 7` is FALSE/No!). 4th pass: outputs `7`, `N` becomes `9` (`9 > 7` Yes → STOP). Exact output: **`1, 3, 5, 7`**.",
      },
      {
        id: "algorithms-testing-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "validation-verification-testing",
        question:
          "Which pair of validation checks would BOTH be needed to ensure a student's 'Year Group' input is not left blank AND is an integer between `7` and `13`?",
        options: [
          "Format check and Double entry",
          "Length check and Check digit",
          "Presence check and Range check",
          "Visual check and Range check",
        ],
        answerIndex: 2,
        hints: [
          "'Not left blank' maps to one specific check; 'between 7 and 13' maps to another.",
          "Eliminate any choice containing verification methods (Double entry, Visual check)!",
        ],
        explanation:
          "Ensuring the field is not blank requires a **Presence check**, and ensuring the integer lies between `7` and `13` requires a **Range check** (alongside a **Type check** for integer). Double entry and Visual check are verification, not validation.",
      },
      {
        id: "algorithms-testing-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "trace-tables-errors",
        question:
          "Dry-run this pseudocode on the 1D array `Scores = [12, 19, 8, 25, 19]` (1-indexed, indices 1 to 5):\n`M ← Scores[1]`\n`C ← 0`\n`FOR i ← 1 TO 5`\n`  IF Scores[i] >= M THEN`\n`    M ← Scores[i]`\n`    C ← C + 1`\n`  ENDIF`\n`NEXT i`\n`OUTPUT M, \":\", C`\nWhat is output?",
        options: [
          "`25:2`",
          "`19:3`",
          "`25:3`",
          "`25:4`",
        ],
        answerIndex: 2,
        hints: [
          "Start at `i = 1`! Since `M` starts as `Scores[1]` (`12`), what does `Scores[1] >= M` (`12 >= 12`) do on `i = 1`?",
          "Trace `i = 1..5`: `12 >= 12` (T), `19 >= 12` (T), `8 >= 19` (F), `25 >= 19` (T), `19 >= 25` (F).",
        ],
        explanation:
          "Initial `M = 12, C = 0`. `i=1`: `12 >= 12` TRUE → `M = 12, C = 1`. `i=2`: `19 >= 12` TRUE → `M = 19, C = 2`. `i=3`: `8 >= 19` FALSE. `i=4`: `25 >= 19` TRUE → `M = 25, C = 3`. `i=5`: `19 >= 25` FALSE. Output is **`25:3`**.",
      },
      {
        id: "algorithms-testing-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "standard-algorithms",
        question:
          "Why do we include `Last ← Last - 1` at the end of each outer pass in an optimised ascending Bubble Sort?",
        options: [
          "Because `FOR` loops in CIE pseudocode cannot iterate with a fixed constant upper bound once an array exceeds ten items.",
          "Because each pass places the next largest unsorted element into its final position at the end of the array, avoiding redundant comparisons.",
          "Because the first element at index 1 is always guaranteed to reach its final sorted position after Pass 1 finishes.",
          "Because Linear Search automatically takes over sorting the remaining elements once half of the array has been swapped.",
        ],
        answerIndex: 1,
        hints: [
          "Where does the largest value in the array end up after Pass 1?",
          "At the final index! And after Pass 2, the second-largest sits right before it.",
        ],
        explanation:
          "Each complete pass bubbles the largest remaining unsorted item to the rightmost unsorted slot. Decrementing `Last` skips re-comparing elements at the tail that are already locked in their final sorted positions.",
      },
      {
        id: "algorithms-testing-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "computational-pdls",
        question:
          "Which statement best explains an advantage of **decomposition** when developing a large software project?",
        options: [
          "Different programmers can develop and test separate sub-systems concurrently, reducing development time and isolating bugs.",
          "Breaking a system into sub-systems completely eliminates the need for any testing or maintenance stage in the PDLC.",
          "Modularising code automatically encrypts stored user passwords and sensitive records inside the application database.",
          "Dividing tasks into separate subroutines converts high-level source code directly into binary machine code without translation.",
        ],
        answerIndex: 0,
        hints: [
          "Think about teamwork, modular subroutines, and easier debugging.",
          "Splitting one big program into sub-systems lets multiple developers work in parallel.",
        ],
        explanation:
          "**Decomposition** splits the system into independent modules so teams can code and module-test sub-systems in parallel, reuse subroutines, and locate errors much faster.",
      },
      {
        id: "algorithms-testing-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "validation-verification-testing",
        question:
          "A programmer writes `IF Score > 0 AND Score < 50 THEN OUTPUT \"Accepted\"` when the specification actually required integers from **`0` to `50` inclusive**. Which test data category is specifically designed to expose this `<` vs `<=` bug?",
        options: [
          "Normal test data lying safely inside the range (such as `25`)",
          "Large abnormal numbers far outside the range (such as `999`)",
          "Extreme / Boundary test data at the limits (such as `0` and `50`)",
          "Abnormal string test data of the wrong type (such as `\"fifty\"`)",
        ],
        answerIndex: 2,
        hints: [
          "Does `25` pass `Score > 0 AND Score < 50`? Yes! Does `999` get rejected? Yes!",
          "Which exact numbers fail `Score > 0 AND Score < 50` even though the specification says they MUST be accepted?",
        ],
        explanation:
          "Normal data (`25`) is accepted and obvious abnormal data (`999`, `\"fifty\"`) is rejected, hiding the bug! Testing **extreme / boundary values** (`0` and `50`) immediately catches the defect because `0 > 0` and `50 < 50` evaluate to `FALSE`, wrongly rejecting both valid edge values.",
      },
      {
        id: "algorithms-testing-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "trace-tables-errors",
        question:
          "In a CIE 0478 trace table, an algorithm executes `Total ← Total + Price` inside a loop, and only executes `OUTPUT Total` **after** `NEXT Count`. When completing the `OUTPUT` column of the trace table, what should you write?",
        options: [
          "Write `TRUE` on every row where `Total` increases.",
          "Leave `OUTPUT` blank during the loop rows and write only the final value of `Total` on the step where `OUTPUT Total` executes.",
          "Write the running value of `Total` in the `OUTPUT` column on every row of the loop.",
          "Write `\"Total = \"` followed by every intermediate sum.",
        ],
        answerIndex: 1,
        hints: [
          "Does `Total ← Total + Price` print anything to the screen, or only update RAM?",
          "Only write in the `OUTPUT` column when an actual `OUTPUT` instruction runs!",
        ],
        explanation:
          "The `OUTPUT` column records **only** values actually displayed by `OUTPUT` (or `PRINT`) instructions. Since `OUTPUT Total` sits after `NEXT Count`, `OUTPUT` stays blank during the loop and displays the single final total at the end.",
      },
      {
        id: "algorithms-testing-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "standard-algorithms",
        question:
          "Examine this Linear Search snippet on `Names[1:100]`:\n`Found ← FALSE`\n`FOR i ← 1 TO 100`\n`  IF Names[i] = Target THEN`\n`    Found ← TRUE`\n`  ELSE`\n`    Found ← FALSE`\n`  ENDIF`\n`NEXT i`\nWhy is the `ELSE Found ← FALSE` branch a serious logic error?",
        options: [
          "Resetting `Found` inside the `ELSE` branch causes an infinite loop that prevents `i` from ever reaching `100`.",
          "If `Target` is found at e.g. `Names[12]` and `Names[100]` does not match `Target`, later iterations overwrite `Found` back to `FALSE`!",
          "`FOR` loops in CIE pseudocode cannot legally contain nested `IF..THEN..ELSE` selection blocks inside the loop body.",
          "A search flag such as `Found` must always be declared as an `INTEGER` counter rather than a `BOOLEAN` variable.",
        ],
        answerIndex: 1,
        hints: [
          "Suppose `Names[1] = Target`, so `Found` becomes `TRUE` on `i = 1`.",
          "What happens on `i = 2` when `Names[2] <> Target`?",
        ],
        explanation:
          "Because the `FOR` loop continues all the way to `100` and resets `Found ← FALSE` whenever `Names[i] <> Target`, `Found` ends up `TRUE` **only** if `Names[100] = Target`! Removing `ELSE Found ← FALSE` (or using a `REPEAT..UNTIL Found = TRUE OR i > 100` loop) fixes the bug.",
      },
      {
        id: "algorithms-testing-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "trace-tables-errors",
        question:
          "Trace this CIE pseudocode with input `N = 47`:\n`Q ← 0`\n`WHILE N >= 10 DO`\n`  N ← N - 10`\n`  Q ← Q + 1`\n`ENDWHILE`\n`OUTPUT Q, \":\", N`\nWhat is output?",
        options: [
          "`4:7`",
          "`5:-3`",
          "`4:17`",
          "`7:4`",
        ],
        answerIndex: 0,
        hints: [
          "Each iteration subtracts `10` from `N` and adds `1` to `Q` while `N >= 10`.",
          "`(47, 0)` → `(37, 1)` → `(27, 2)` → `(17, 3)` → `(7, 4)`. Is `7 >= 10`?",
        ],
        explanation:
          "Subtracting `10` four times reduces `N` from `47` → `37` → `27` → `17` → `7` while incrementing `Q` to `4`. Now `7 >= 10` is `FALSE`, so the loop stops and outputs **`4:7`** (computing quotient `47 DIV 10 = 4` and remainder `47 MOD 10 = 7`!).",
      },
    ],
  },
];
