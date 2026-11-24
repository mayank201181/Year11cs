import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "algorithms-testing-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "computational-pdls",
      question:
        "Name the computational thinking skill that removes unnecessary detail from a real-world problem so only the essential features remain. Give a single word.",
      answer: { type: "text", accept: ["Abstraction"], display: "Abstraction" },
      traps: [
        {
          spec: { type: "text", accept: ["Decomposition"] },
          feedback:
            "Decomposition breaks a complex system into smaller sub-systems; **abstraction** filters out unnecessary detail.",
        },
      ],
      hints: ["Think of the London Tube or Singapore MRT map omitting street curves."],
      solution: [
        "Filtering out irrelevant details while keeping essential features is **Abstraction**.",
      ],
      commonError: "Confusing abstraction (hiding clutter) with decomposition (splitting into modules).",
    },
    {
      id: "algorithms-testing-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "computational-pdls",
      question:
        "Which diagram created in the PDLC **Design** stage shows the hierarchical top-down breakdown of a computer system into sub-systems?",
      options: [
        "Trace table",
        "Structure diagram",
        "Truth table",
        "Parity block",
      ],
      answerIndex: 1,
      hints: ["It looks like an upside-down family tree of modules."],
      explanation:
        "A **structure diagram** illustrates top-down decomposition of a main system into sub-systems and sub-sub-systems during the Design stage.",
    },
    {
      id: "algorithms-testing-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "flowcharts-pseudocode",
      question:
        "In a CIE 0478 flowchart, which geometric shape is used for a **Decision** (such as `Score >= 50?`)? Give the single shape name.",
      answer: {
        type: "text",
        accept: ["Diamond", "Rhombus", "Decision diamond"],
        display: "Diamond",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Parallelogram"] },
          feedback: "A parallelogram is for `INPUT` and `OUTPUT`; decisions use a **Diamond**.",
        },
        {
          spec: { type: "text", accept: ["Rectangle"] },
          feedback: "A rectangle is for processes/calculations; decisions use a **Diamond**.",
        },
      ],
      hints: ["It has four equal slanted sides and two labelled exit arrows (`Yes` and `No`)."],
      solution: [
        "All conditional tests (`IF`, loop checks) in CIE flowcharts are drawn inside a **Diamond** with labelled `Yes`/`No` exit arrows.",
      ],
    },
    {
      id: "algorithms-testing-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "standard-algorithms",
      question:
        "An ascending Bubble Sort performs **Pass 1** on `[25, 10, 18, 6]`. How many **swaps** take place during Pass 1? Give a single integer.",
      answer: { type: "number", value: 3 },
      traps: [
        {
          spec: { type: "number", value: 2 },
          feedback:
            "Watch `25` bubble all the way right: `(25, 10)` swaps, `(25, 18)` swaps, AND `(25, 6)` swaps — that is 3 swaps!",
        },
        {
          spec: { type: "number", value: 4 },
          feedback: "A 4-element array only has 3 adjacent pairs in Pass 1, so at most 3 swaps can occur in Pass 1.",
        },
      ],
      hints: [
        "Compare `(25, 10)` first: since `25 > 10`, swap to `[10, 25, 18, 6]`.",
        "Continue comparing index 2 with 3, then index 3 with 4.",
      ],
      solution: [
        "Comparison 1: `25 > 10` → swap 1 (`[10, 25, 18, 6]`).",
        "Comparison 2: `25 > 18` → swap 2 (`[10, 18, 25, 6]`).",
        "Comparison 3: `25 > 6` → swap 3 (`[10, 18, 6, 25]`). Total swaps in Pass 1 = **3**.",
      ],
      commonError: "Comparing the original static positions instead of carrying `25` forward after each swap.",
    },
    {
      id: "algorithms-testing-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      guideRef: "validation-verification-testing",
      question:
        "A shop worker enters a product price of `95.00` instead of `59.00` from a printed catalogue, where valid prices range from `1.00` to `500.00`. Which method could detect this human copying error?",
      options: [
        "Range check (validation)",
        "Type check (validation)",
        "Visual check (verification)",
        "Presence check (validation)",
      ],
      answerIndex: 2,
      hints: [
        "`95.00` is a valid positive real number inside `1.00..500.00`, so every validation rule passes!",
        "Which verification method compares the screen against the printed catalogue?",
      ],
      explanation:
        "Because `95.00` is sensible and obeys every validation rule, only **verification** — such as a **Visual check** against the printed catalogue (or double entry) — can catch the transcription error.",
    },
    {
      id: "algorithms-testing-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "validation-verification-testing",
      question:
        "A validation routine accepts whole numbers from `10` to `50` inclusive. Give the **two** items of **extreme** test data, separated by a comma.",
      answer: { type: "list", values: [10, 50], ordered: false, display: "10, 50" },
      traps: [
        {
          spec: { type: "list", values: [9, 51] },
          feedback:
            "`9` and `51` are rejected values outside the range! **Extreme** test data must be the smallest and largest **accepted** values (`10, 50`).",
        },
        {
          spec: { type: "list", values: [10, 11] },
          feedback: "`10` and `50` are the two extreme limits of `10..50`.",
        },
      ],
      hints: [
        "Extreme test data sits right ON the minimum and maximum limits and MUST be accepted.",
        "What are the smallest and largest valid integers in `10..50`?",
      ],
      solution: [
        "The smallest accepted integer is **10** and the largest accepted integer is **50**.",
        "Therefore the two items of extreme test data are **10, 50**.",
      ],
      commonError: "Giving `9, 51` (rejected boundary neighbours) instead of `10, 50` (accepted extreme limits).",
    },
    {
      id: "algorithms-testing-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "validation-verification-testing",
      question:
        "Which specific CIE **validation check** ensures that a user's password contains at least `8` characters? Give the two-word check name (e.g. `Range check`).",
      answer: {
        type: "text",
        accept: ["Length check", "Length"],
        display: "Length check",
      },
      traps: [
        {
          spec: { type: "text", accept: ["Range check", "Range"] },
          feedback:
            "Range check tests numeric/date values (e.g. `Age >= 8`); counting the number of characters in a string is a **Length check**!",
        },
        {
          spec: { type: "text", accept: ["Format check", "Format"] },
          feedback:
            "Format check tests a pattern of letters/digits (e.g. `LL99`); counting characters is a **Length check**.",
        },
      ],
      hints: [
        "Are we testing the numeric value of a number, or counting how many characters are in a string?",
        "In pseudocode it uses `LENGTH(Password) >= 8`.",
      ],
      solution: [
        "Counting the number of characters in a string (`LENGTH(Password) >= 8`) is a **Length check**.",
      ],
      commonError: "Writing 'Range check' when testing character count rather than numeric magnitude.",
    },
    {
      id: "algorithms-testing-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "trace-tables-errors",
      question:
        "Dry-run this pseudocode and state the single integer output:\n`Total ← 10`\n`FOR N ← 1 TO 3`\n`  Total ← Total + N * 3`\n`NEXT N`\n`OUTPUT Total`",
      answer: { type: "number", value: 28 },
      traps: [
        {
          spec: { type: "number", value: 18 },
          feedback: "You calculated `3 + 6 + 9 = 18`, but notice `Total` started at **`10`**, not `0`!",
        },
        {
          spec: { type: "number", value: 19 },
          feedback: "Accumulate all three loop steps: `10 + 3 + 6 + 9`.",
        },
      ],
      hints: [
        "Check the initial value: `Total` starts at `10`!",
        "Add `1*3` (`3`), `2*3` (`6`), and `3*3` (`9`) to `10`.",
      ],
      solution: [
        "Initial: `Total = 10`.",
        "`N = 1`: `Total ← 10 + 3 = 13`.",
        "`N = 2`: `Total ← 13 + 6 = 19`.",
        "`N = 3`: `Total ← 19 + 9 = 28`. Output is **28**.",
      ],
      commonError: "Assuming `Total` always starts at `0` without checking the initialisation line!",
    },
    {
      id: "algorithms-testing-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "standard-algorithms",
      question:
        "A 1D array `Codes[1:5]` holds `[44, 19, 73, 19, 88]`. A standard Linear Search with a `Found` flag searches for `19` starting from `Index ← 1` (`REPEAT ... UNTIL Found = TRUE OR Index > 5`). Which index is reported?",
      options: ["`1`", "`2`", "`4`", "`5`"],
      answerIndex: 1,
      hints: [
        "Start at `Index = 1` (`44`), then `Index = 2` (`19`).",
        "Does a `Found`-flag Linear Search stop at the FIRST match or keep going to `Index = 4`?",
      ],
      explanation:
        "At `Index = 2`, `Codes[2] = 19` sets `Found ← TRUE`, so `UNTIL Found = TRUE` terminates immediately and reports index **`2`** (the first occurrence).",
    },
    {
      id: "algorithms-testing-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "validation-verification-testing",
      marks: 3,
      question:
        "Distinguish clearly between validation and verification when entering data into a computer system, naming one example check for each. [3]",
      hints: [
        "Does validation test accuracy, or whether data is reasonable/sensible?",
        "Verification checks accurate copying (e.g. Double entry or Visual check).",
      ],
      modelAnswer:
        "Validation is an automated computer check that ensures entered data is reasonable and sensible according to set rules, such as a range check or length check. Verification checks that data has been copied accurately from the source without human typing errors, such as double entry or a visual check.",
      markScheme: [
        {
          point: "Validation checks that data is reasonable / sensible (automated rule check, not accuracy).",
          keywords: ["reasonable", "sensible"],
        },
        {
          point: "Verification checks that data was copied / transferred accurately without transcription error.",
          keywords: ["copied", "accurately", "accurate", "transcription", "matches original"],
        },
        {
          point: "Valid named example of both (e.g. range/length/type/presence/format/check digit AND double entry / visual check).",
          keywords: ["double entry", "visual check", "screen check"],
        },
      ],
      commonError: "Writing 'validation checks data is valid/correct' — CIE rejects both 'valid' (circular) and 'correct' (false)!",
    },
  ],

  papers: [
    {
      id: "algorithms-testing-p1",
      title: "Practice Paper 1 — PDLC, Flowcharts, Validation & Trace Tables",
      questions: [
        {
          id: "algorithms-testing-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "computational-pdls",
          question:
            "Name the computational thinking technique used when a programmer splits a school library system into four modules: `BorrowBook`, `ReturnBook`, `SearchCatalogue`, and `FineCalculator`. Give a single word.",
          answer: { type: "text", accept: ["Decomposition"], display: "Decomposition" },
          traps: [
            {
              spec: { type: "text", accept: ["Abstraction"] },
              feedback: "Abstraction hides unnecessary detail; splitting a system into modules is **Decomposition**.",
            },
          ],
          hints: ["Breaking one big system down into smaller sub-systems."],
          solution: ["Splitting a complex problem into smaller sub-systems/modules is **Decomposition**."],
          commonError: "Mixing up decomposition with abstraction.",
        },
        {
          id: "algorithms-testing-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "computational-pdls",
          question:
            "In which stage of the Program Development Life Cycle (Analysis, Design, Coding, or Testing) are **abstraction** and **decomposition** first used to produce a **requirements specification**? Give the single stage name.",
          answer: {
            type: "text",
            accept: ["Analysis", "Analysis stage"],
            display: "Analysis",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Design", "Design stage"] },
              feedback: "Design creates structure diagrams, flowcharts, and pseudocode; the requirements specification is produced in **Analysis**.",
            },
          ],
          hints: ["It is the very first stage of the four-stage CIE PDLC."],
          solution: [
            "The **Analysis** stage investigates the problem using abstraction and decomposition and produces the requirements specification.",
          ],
        },
        {
          id: "algorithms-testing-p1-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "flowcharts-pseudocode",
          question:
            "In CIE 0478 pseudocode, what two-character relational operator means **not equal to**? Give the exact operator symbols only.",
          answer: { type: "text", accept: ["<>"], display: "<>" },
          traps: [
            {
              spec: { type: "text", accept: ["!="] },
              feedback: "`!=` is Python syntax! Official CIE 0478 pseudocode uses **`<>`**.",
            },
          ],
          hints: ["A left angle bracket immediately followed by a right angle bracket."],
          solution: ["In CIE 0478 pseudocode, **not equal to** is written **`<>`** (e.g. `IF X <> 0 THEN`)."],
          commonError: "Writing Python's `!=` when CIE pseudocode syntax is asked.",
        },
        {
          id: "algorithms-testing-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "flowcharts-pseudocode",
          question:
            "Which standard CIE flowchart shape must be used for the assignment statement `Counter ← Counter + 1`? Give the single geometric shape name (e.g. `Parallelogram`, `Rectangle`, `Diamond`, `Oval`).",
          answer: {
            type: "text",
            accept: ["Rectangle", "Process", "Process box", "Process rectangle"],
            display: "Rectangle",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Parallelogram"] },
              feedback: "Parallelograms are strictly for `INPUT` and `OUTPUT`; internal assignments use a **Rectangle**.",
            },
          ],
          hints: [
            "`Counter ← Counter + 1` is an internal calculation/assignment, not user input or output.",
            "Which box represents a Process?",
          ],
          solution: [
            "Assignments and calculations are **Process** steps drawn inside a **Rectangle**.",
          ],
        },
        {
          id: "algorithms-testing-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "validation-verification-testing",
          question:
            "An online form checks that the user typed an integer into the `NumberOfTickets` field rather than text like `\"four\"`. Name this CIE validation check (two words, e.g. `Range check`).",
          answer: {
            type: "text",
            accept: ["Type check", "Data type check", "Type"],
            display: "Type check",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Format check", "Format"] },
              feedback: "Format check matches a template like `AB1234`; checking integer vs string is a **Type check**.",
            },
          ],
          hints: [
            "It verifies that the input belongs to the `INTEGER` data type rather than `STRING`.",
            "What two-word validation check tests data type?",
          ],
          solution: [
            "Checking that entered data is of the expected data type (such as `INTEGER` rather than text) is a **Type check**.",
          ],
          commonError: "Calling an integer-vs-text check a 'Format check' instead of a 'Type check'.",
        },
        {
          id: "algorithms-testing-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "validation-verification-testing",
          question:
            "A club membership system accepts integer ages from `11` to `18` inclusive. Give the **lower boundary** test data pair (two integers separated by a comma).",
          answer: { type: "list", values: [10, 11], ordered: false, display: "10, 11" },
          traps: [
            {
              spec: { type: "list", values: [11, 18] },
              feedback:
                "`11, 18` are the two **extreme** values! The **lower boundary pair** needs the smallest accepted age (`11`) AND the adjacent rejected integer just below it (`10`).",
            },
            {
              spec: { type: "list", values: [18, 19] },
              feedback: "`18, 19` is the *upper* boundary pair; the question asks for the **lower** boundary pair!",
            },
          ],
          hints: [
            "The lower limit of `11..18` is `11` (accepted).",
            "Pair `11` with the largest rejected integer immediately below `11`.",
          ],
          solution: [
            "At the lower limit `11`: `11` is the smallest accepted (extreme) integer and `10` is the adjacent rejected integer just below the limit.",
            "Lower boundary test data pair: **10, 11**.",
          ],
          commonError: "Giving `11, 18` (extreme data) when asked for a boundary pair.",
        },
        {
          id: "algorithms-testing-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "standard-algorithms",
          question:
            "A 1D array `Prices[1:6]` contains `[18, 42, 9, 31, 27, 15]`. A Linear Search looks for `31` starting at `Index ← 1` and stopping as soon as it is found. How many array elements are compared? Give a single integer.",
          answer: { type: "number", value: 4 },
          traps: [
            {
              spec: { type: "number", value: 3 },
              feedback: "CIE arrays here are 1-indexed (`Prices[1] = 18`, `Prices[2] = 42`, `Prices[3] = 9`, `Prices[4] = 31`), so 4 elements are compared!",
            },
            {
              spec: { type: "number", value: 6 },
              feedback: "Because the search stops as soon as `31` is found at index 4, indices 5 and 6 are not compared.",
            },
          ],
          hints: [
            "Count each comparison from `Prices[1]` up to `31`.",
            "`18` (1st), `42` (2nd), `9` (3rd), `31` (4th — match!).",
          ],
          solution: [
            "`Prices[1] = 18` (no), `Prices[2] = 42` (no), `Prices[3] = 9` (no), `Prices[4] = 31` (match, `Found ← TRUE`).",
            "Total elements compared = **4**.",
          ],
        },
        {
          id: "algorithms-testing-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "standard-algorithms",
          question:
            "An ascending Bubble Sort with a `Swap` flag (`REPEAT ... UNTIL Swap = FALSE`) and shrinking `Last` runs on `[7, 19, 12, 25]`. How many **passes** of the outer `REPEAT` loop execute before the algorithm terminates? Give a single integer.",
          answer: { type: "number", value: 2 },
          traps: [
            {
              spec: { type: "number", value: 1 },
              feedback:
                "Pass 1 swaps `(19, 12)` so `Swap = TRUE`! A **2nd pass** must run with `0` swaps (`Swap = FALSE`) before the algorithm knows the array is sorted.",
            },
            {
              spec: { type: "number", value: 3 },
              feedback: "Because Pass 2 makes 0 swaps, `UNTIL Swap = FALSE` stops after Pass 2 without needing Pass 3!",
            },
          ],
          hints: [
            "Trace Pass 1: `(7, 19)` ok, `(19, 12)` swaps → `[7, 12, 19, 25]`, `(19, 25)` ok. `Swap` is `TRUE`!",
            "Since `Swap = TRUE`, Pass 2 starts (`Swap ← FALSE`), checks `(7, 12)` and `(12, 19)`, makes 0 swaps, and stops!",
          ],
          solution: [
            "**Pass 1**: swaps `(19, 12)` to produce `[7, 12, 19, 25]`; `Swap` becomes `TRUE`, so loop continues.",
            "**Pass 2**: checks `(7, 12)` and `(12, 19)` — **0 swaps**, so `Swap` remains `FALSE` and `UNTIL Swap = FALSE` terminates.",
            "Total passes = **2**.",
          ],
          commonError: "Forgetting the clean zero-swap verification pass that sets `Swap = FALSE`.",
        },
        {
          id: "algorithms-testing-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "trace-tables-errors",
          question:
            "Dry-run this pseudocode with input sequence `12, 25, 8, 30, 19`:\n`Count ← 0`\n`FOR i ← 1 TO 5`\n`  INPUT Val`\n`  IF Val >= 20 THEN`\n`    Count ← Count + 1`\n`  ENDIF`\n`NEXT i`\n`OUTPUT Count`\nWhat single integer is output?",
          answer: { type: "number", value: 2 },
          traps: [
            {
              spec: { type: "number", value: 3 },
              feedback: "Check `19 >= 20` carefully — `19` is less than `20`! Only `25` and `30` are `>= 20`.",
            },
          ],
          hints: [
            "Test each of the five inputs `12, 25, 8, 30, 19` against `Val >= 20`.",
            "Count how many are `20` or above.",
          ],
          solution: [
            "`12 >= 20` (F), `25 >= 20` (T → `Count = 1`), `8 >= 20` (F), `30 >= 20` (T → `Count = 2`), `19 >= 20` (F).",
            "Final `OUTPUT Count` is **2**.",
          ],
        },
        {
          id: "algorithms-testing-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "trace-tables-errors",
          question:
            "Dry-run this pseudocode and give the single integer output:\n`P ← 2`\n`Q ← 15`\n`WHILE Q > P DO`\n`  Q ← Q - 4`\n`  P ← P + 2`\n`ENDWHILE`\n`OUTPUT P`",
          answer: { type: "number", value: 8 },
          traps: [
            {
              spec: { type: "number", value: 3 },
              feedback: "`3` is the final value of `Q`, but the last line says **`OUTPUT P`**!",
            },
            {
              spec: { type: "number", value: 6 },
              feedback: "When `P = 6` and `Q = 7`, `7 > 6` is STILL TRUE, so the loop executes one more time!",
            },
          ],
          hints: [
            "Track `(P, Q)` on each step: start `(2, 15)`.",
            "Iter 1: `(4, 11)`; Iter 2: `(6, 7)`; check `7 > 6` (TRUE!) → Iter 3: `(8, 3)`. Now `3 > 8` is FALSE.",
          ],
          solution: [
            "Start: `P = 2, Q = 15` (`15 > 2` T).",
            "Iter 1: `Q = 11, P = 4` (`11 > 4` T).",
            "Iter 2: `Q = 7, P = 6` (`7 > 6` T).",
            "Iter 3: `Q = 3, P = 8` (`3 > 8` F → exit loop).",
            "`OUTPUT P` prints **8**.",
          ],
          commonError: "Outputting `Q` (`3`) instead of `P` (`8`), or stopping early at `(6, 7)`.",
        },
        {
          id: "algorithms-testing-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "validation-verification-testing",
          question:
            "Name the CIE **verification** method where two independent typists (or the same user twice) enter the same data and the computer compares both entries for an exact match.",
          answer: {
            type: "text",
            accept: ["Double entry", "Double data entry", "Dual entry"],
            display: "Double entry",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Visual check", "Screen check"] },
              feedback: "Visual check is a human reading the screen against paper; typing data twice for computer comparison is **Double entry**.",
            },
          ],
          hints: [
            "Think of typing a new password in 'Password' and 'Confirm Password' boxes.",
            "Two words starting with 'Double ...'.",
          ],
          solution: [
            "Entering the same data twice so the computer compares both entries is **Double entry** verification.",
          ],
        },
        {
          id: "algorithms-testing-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "computational-pdls",
          marks: 4,
          question:
            "A software team is building a hospital appointment app. Define abstraction and decomposition, and give one concrete example of how each is applied to this project. [4]",
          hints: [
            "Abstraction = keeping essential details and removing irrelevant ones (what patient details matter vs don't matter?).",
            "Decomposition = splitting the hospital app into smaller sub-systems/modules (e.g. Login, Booking, Timetable).",
          ],
          modelAnswer:
            "Abstraction means keeping only essential details needed to solve the problem while removing unnecessary clutter. For example, keeping patient ID, doctor name, and appointment time slot while ignoring the patient's hair colour or favourite food. Decomposition means breaking a complex problem down into smaller, manageable sub-systems. For example, splitting the system into separate modules for Patient Login, Slot Booking, Doctor Timetable, and SMS Reminders.",
          markScheme: [
            {
              point: "Abstraction defined as keeping essential/relevant details and removing unnecessary details.",
              keywords: ["essential", "unnecessary", "irrelevant", "relevant"],
            },
            {
              point: "Concrete hospital example of abstraction (e.g. keeping patient ID/time slot while omitting hair colour/hobbies).",
              keywords: ["slot", "doctor", "patient id", "ignoring", "omitting", "hair"],
            },
            {
              point: "Decomposition defined as breaking a complex system into smaller sub-systems / modules.",
              keywords: ["smaller", "sub-systems", "subsystems", "modules"],
            },
            {
              point: "Concrete hospital example of decomposition (e.g. Login, Booking, Timetable, Reminders modules).",
              keywords: ["login", "booking", "reminders", "timetable", "billing"],
            },
          ],
          commonError: "Giving generic definitions without linking them to the hospital appointment context.",
        },
        {
          id: "algorithms-testing-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "validation-verification-testing",
          marks: 4,
          question:
            "An exam system accepts whole-number marks from 0 to 100 inclusive. Define normal, abnormal, extreme, and boundary test data, giving a valid example of each for this mark input. [4]",
          hints: [
            "Keep Extreme (`0` and `100`, both accepted) strictly separate from Boundary (`-1 & 0` or `100 & 101`)!",
            "State both the definition and a specific number/example for each of the four categories.",
          ],
          modelAnswer:
            "Normal data is typical valid data inside the range that should be accepted, such as 65. Abnormal data is invalid out-of-range or wrong-type data that must be rejected, such as -15 or 'abc'. Extreme data is the smallest and largest accepted values right on the limits, which are 0 and 100. Boundary data is a pair of values on either side of a limit (one accepted extreme and one rejected neighbour), such as 100 (accepted) and 101 (rejected), or -1 (rejected) and 0 (accepted).",
          markScheme: [
            {
              point: "Normal data: typical valid data within limits that is accepted, e.g. 50 / 65.",
              keywords: ["typical", "accepted", "65", "50", "45"],
            },
            {
              point: "Abnormal (erroneous) data: invalid / out-of-range / wrong-type data that is rejected, e.g. -15, 150, 'abc'.",
              keywords: ["rejected", "invalid", "-15", "150", "abc", "outside"],
            },
            {
              point: "Extreme data: smallest and largest accepted values at the limits, e.g. 0 and 100.",
              keywords: ["smallest", "largest", "limits", "edge"],
            },
            {
              point: "Boundary data: pair on either side of a limit (one accepted + one adjacent rejected), e.g. -1 and 0, or 100 and 101.",
              keywords: ["pair", "either side", "101", "-1", "adjacent"],
            },
          ],
          commonError: "Calling `-1` and `101` extreme data instead of rejected boundary data!",
        },
        {
          id: "algorithms-testing-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "standard-algorithms",
          marks: 4,
          question:
            "Write CIE 0478 pseudocode to search a 1D array `StudentID[1:200]` for a value input into `TargetID` using a Linear Search. Output `\"Found at \"` with the index if present, or `\"Not found\"` if absent. [4]",
          hints: [
            "Initialise `Found ← FALSE` and `Index ← 1` before a `REPEAT ... UNTIL` loop.",
            "Put the `IF Found = TRUE ... ELSE OUTPUT \"Not found\"` check AFTER the loop so `'Not found'` prints at most once!",
          ],
          modelAnswer:
            "INPUT TargetID\nFound ← FALSE\nIndex ← 1\nREPEAT\n  IF StudentID[Index] = TargetID THEN\n    Found ← TRUE\n  ELSE\n    Index ← Index + 1\n  ENDIF\nUNTIL Found = TRUE OR Index > 200\nIF Found = TRUE THEN\n  OUTPUT \"Found at \", Index\nELSE\n  OUTPUT \"Not found\"\nENDIF",
          markScheme: [
            {
              point: "Initialise `Found ← FALSE` and `Index ← 1` (and `INPUT TargetID`).",
              keywords: ["found", "false", "index"],
            },
            {
              point: "Loop through array indices up to `200` (using `REPEAT..UNTIL`, `WHILE`, or `FOR`).",
              keywords: ["200", "repeat", "while", "for"],
            },
            {
              point: "Compare `StudentID[Index] = TargetID` and set flag / record matching index.",
              keywords: ["studentid[index]", "="],
            },
            {
              point: "Conditional check after loop outputting matching index if found or `\"Not found\"` once if absent.",
              keywords: ["if found", "else"],
            },
          ],
          commonError: "Putting `ELSE OUTPUT \"Not found\"` INSIDE the loop so it prints `'Not found'` up to 200 times!",
        },
        {
          id: "algorithms-testing-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "trace-tables-errors",
          marks: 3,
          question:
            "The algorithm below is meant to input 20 positive parcel weights and output the heaviest and lightest weights, but contains three errors:\n`1  Max ← 0`\n`2  Min ← 0`\n`3  FOR Count ← 1 TO 19`\n`4    INPUT Weight`\n`5    IF Weight > Max THEN Max ← Weight ENDIF`\n`6    IF Weight > Min THEN Min ← Weight ENDIF`\n`7  NEXT Count`\n`8  OUTPUT Max, Min`\nIdentify the line number of each error and write the corrected pseudocode line. [3]",
          hints: [
            "Check Line 2 (`Min ← 0` with positive weights) and Line 3 (`1 TO 19` vs `20` weights).",
            "Check Line 6: what relational operator finds a *smaller* weight than `Min`?",
          ],
          modelAnswer:
            "Error 1 is on Line 2: initialise Min to a very high number so `Min ← 99999` (because positive weights are never less than 0). Error 2 is on Line 3: loop 20 times using `FOR Count ← 1 TO 20` instead of stopping at 19. Error 3 is on Line 6: use the less-than comparison `IF Weight < Min THEN Min ← Weight ENDIF` to find the lightest weight.",
          markScheme: [
            {
              point: "Line 2: change `Min ← 0` to a large value such as `Min ← 99999` (or first input).",
              keywords: ["line 2", "9999", "99999", "10000", "high", "large"],
            },
            {
              point: "Line 3: change upper bound `19` to `20` (`FOR Count ← 1 TO 20`).",
              keywords: ["line 3", "to 20"],
            },
            {
              point: "Line 6: change `>` to `<` (`IF Weight < Min THEN Min ← Weight ENDIF`).",
              keywords: ["line 6", "< min", "less than"],
            },
          ],
          commonError: "Changing `Max ← 0` instead of `Min ← 0` when all parcel weights are guaranteed positive!",
        },
      ],
    },

    {
      id: "algorithms-testing-p2",
      title: "Practice Paper 2 — Bubble Sort, Multi-Check Validation & Debugging",
      questions: [
        {
          id: "algorithms-testing-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "flowcharts-pseudocode",
          question:
            "In a CIE 0478 flowchart, what symbol name is given to the rounded rectangle / oval used for `START` and `STOP`?",
          answer: {
            type: "text",
            accept: ["Terminator", "Terminal", "Rounded rectangle", "Oval"],
            display: "Terminator",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Subroutine"] },
              feedback: "A subroutine box is a rectangle with double vertical side bars; Start/Stop uses a **Terminator**.",
            },
          ],
          hints: ["It 'terminates' (begins and ends) the flowchart."],
          solution: ["The rounded Start/Stop symbol in a flowchart is called a **Terminator**."],
        },
        {
          id: "algorithms-testing-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "validation-verification-testing",
          question:
            "Which CIE **validation check** calculates a final digit from the preceding digits of a barcode or ISBN to detect mistyped or transposed digits? Give the two-word name.",
          answer: {
            type: "text",
            accept: ["Check digit", "Check digits"],
            display: "Check digit",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Checksum"] },
              feedback:
                "Checksums verify blocks of transmitted network bytes; a calculated final digit on a barcode/ISBN for human data entry is a **Check digit**!",
            },
            {
              spec: { type: "text", accept: ["Parity bit", "Parity check"] },
              feedback: "Parity bits check single bytes during data transmission; barcodes/ISBNs use a **Check digit**.",
            },
          ],
          hints: [
            "ISBN-13 and Modulo-11 are the classic CIE examples of this validation rule.",
            "Two words: `Check ...`",
          ],
          solution: [
            "An extra final digit calculated mathematically from earlier digits on an ISBN or barcode is a **Check digit**.",
          ],
          commonError: "Writing 'Checksum' (block transmission check) instead of 'Check digit' (data-entry validation).",
        },
        {
          id: "algorithms-testing-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "validation-verification-testing",
          question:
            "A room-temperature controller accepts whole degrees Celsius from `16` to `28` inclusive. Give the **upper boundary** test data pair (two integers separated by a comma).",
          answer: { type: "list", values: [28, 29], ordered: false, display: "28, 29" },
          traps: [
            {
              spec: { type: "list", values: [16, 28] },
              feedback: "`16, 28` are the two extreme values; the **upper boundary** pair needs `28` (accepted) and `29` (rejected).",
            },
            {
              spec: { type: "list", values: [15, 16] },
              feedback: "`15, 16` is the lower boundary pair; the question asks for the **upper** boundary pair.",
            },
          ],
          hints: [
            "The upper limit is `28` (largest accepted extreme value).",
            "Pair `28` with the smallest rejected integer immediately above it.",
          ],
          solution: [
            "`28` is accepted (upper extreme) and `29` is rejected (1 above upper limit).",
            "Upper boundary test data pair: **28, 29**.",
          ],
        },
        {
          id: "algorithms-testing-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "standard-algorithms",
          question:
            "An array of `7` unsorted integers undergoes Pass 1 of an ascending Bubble Sort (`FOR Index ← 1 TO N - 1`). How many adjacent-pair **comparisons** are performed during Pass 1? Give a single integer.",
          answer: { type: "number", value: 6 },
          traps: [
            {
              spec: { type: "number", value: 7 },
              feedback:
                "If `Index` ran to `7`, `Arr[7]` would compare against `Arr[8]` (array index out of bounds)! `N` elements have `N - 1 = 6` adjacent pairs.",
            },
          ],
          hints: [
            "Adjacent pairs in a 7-element array are `(1,2), (2,3), (3,4), (4,5), (5,6), (6,7)`.",
            "For `N` items, Pass 1 makes `N - 1` comparisons.",
          ],
          solution: [
            "With `N = 7` elements, Pass 1 compares `Arr[Index]` with `Arr[Index + 1]` for `Index = 1` to `6`, making **6** comparisons.",
          ],
          commonError: "Answering `N` (`7`) instead of `N − 1` (`6`).",
        },
        {
          id: "algorithms-testing-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "standard-algorithms",
          question:
            "Trace an ascending Bubble Sort across ALL passes on `[18, 9, 4, 25]` (`Swap` flag + shrinking `Last`: `3`, then `2`, then `1`). How many **total swaps** occur to completely sort the array? Give a single integer.",
          answer: { type: "number", value: 3 },
          traps: [
            {
              spec: { type: "number", value: 2 },
              feedback:
                "After Pass 1 (`2` swaps → `[9, 4, 18, 25]`), `9` and `4` are STILL out of order and swap in Pass 2 (`+1` swap = `3`)!",
            },
            {
              spec: { type: "number", value: 6 },
              feedback: "`25` is already at the end so it never needs to swap! Count only pairs that are out of order.",
            },
          ],
          hints: [
            "Pass 1 on `[18, 9, 4, 25]`: `(18, 9)` swaps → `[9, 18, 4, 25]`; `(18, 4)` swaps → `[9, 4, 18, 25]`; `(18, 25)` stays (2 swaps).",
            "Pass 2 on `[9, 4, 18, 25]`: `(9, 4)` swaps → `[4, 9, 18, 25]`; `(9, 18)` stays (1 swap). Pass 3 checks `(4, 9)` (0 swaps).",
          ],
          solution: [
            "Pass 1: `(18,9)` swap 1, `(18,4)` swap 2, `(18,25)` no swap → `[9, 4, 18, 25]` (2 swaps).",
            "Pass 2: `(9,4)` swap 3, `(9,18)` no swap → `[4, 9, 18, 25]` (1 swap).",
            "Pass 3: `(4,9)` no swap → `Swap = FALSE`, stop! Total swaps = `2 + 1 =` **3**.",
          ],
        },
        {
          id: "algorithms-testing-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "trace-tables-errors",
          question:
            "Dry-run this pseudocode with input `N = 5` and state the single integer output:\n`Ans ← 1`\n`FOR i ← 1 TO N`\n`  Ans ← Ans * i`\n`NEXT i`\n`OUTPUT Ans`",
          answer: { type: "number", value: 120 },
          traps: [
            {
              spec: { type: "number", value: 15 },
              feedback: "`15` is `1 + 2 + 3 + 4 + 5`, whereas the code multiplies `Ans * i` (`1 × 2 × 3 × 4 × 5`)!",
            },
            {
              spec: { type: "number", value: 24 },
              feedback: "`24` stops at `i = 4` — remember `FOR i ← 1 TO 5` includes `i = 5` (`24 × 5 = 120`)!",
            },
          ],
          hints: [
            "In CIE pseudocode, `FOR i ← 1 TO N` is **inclusive** of `N` (`i = 1, 2, 3, 4, 5`).",
            "Multiply `1 × 2 × 3 × 4 × 5`.",
          ],
          solution: [
            "`i=1`: `Ans = 1`; `i=2`: `Ans = 2`; `i=3`: `Ans = 6`; `i=4`: `Ans = 24`; `i=5`: `Ans = 120`.",
            "Output is **120**.",
          ],
          commonError: "Treating CIE `FOR i ← 1 TO 5` like Python `range(1, 5)` and omitting `i = 5`!",
        },
        {
          id: "algorithms-testing-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "trace-tables-errors",
          question:
            "Dry-run this pseudocode with input sequence `15, 24, 12, -1, 30`:\n`Total ← 0`\n`Count ← 0`\n`INPUT X`\n`WHILE X >= 0 DO`\n`  Total ← Total + X`\n`  Count ← Count + 1`\n`  INPUT X`\n`ENDWHILE`\n`OUTPUT Total / Count`\nWhat single integer is output?",
          answer: { type: "number", value: 17 },
          traps: [
            {
              spec: { type: "number", value: 20 },
              feedback: "`30` appears AFTER the rogue value `-1`, so `WHILE X >= 0 DO` stops before `30` is ever read!",
            },
            {
              spec: { type: "number", value: 12.5 },
              feedback: "`-1` terminates the loop BEFORE `Total` or `Count` updates, so `-1` is not included in the average!",
            },
          ],
          hints: [
            "`-1` is the negative rogue/sentinel value that terminates `WHILE X >= 0 DO` (before `30` is read).",
            "Sum the three valid non-negative inputs `15 + 24 + 12 = 51` and divide by `Count = 3`.",
          ],
          solution: [
            "Valid non-negative inputs before `-1`: `15`, `24`, `12` (`Total = 51`, `Count = 3`).",
            "Next input `-1` makes `X >= 0` `FALSE`, exiting the loop immediately without adding `-1` or reading `30`.",
            "`Total / Count = 51 / 3 =` **17**.",
          ],
          commonError: "Including the sentinel `-1` in `Total` and `Count`, or continuing to read `30` after `-1`.",
        },
        {
          id: "algorithms-testing-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "standard-algorithms",
          question:
            "Dry-run this minimum-finding algorithm with input sequence `42, 19, 27, 14, 33`:\n`Min ← 9999`\n`FOR i ← 1 TO 5`\n`  INPUT Num`\n`  IF Num < Min THEN`\n`    Min ← Num`\n`  ENDIF`\n`NEXT i`\n`OUTPUT Min`\nHow many times is `Min ← Num` executed (inside the `IF` statement) across all 5 inputs? Give a single integer.",
          answer: { type: "number", value: 3 },
          traps: [
            {
              spec: { type: "number", value: 14 },
              feedback: "`14` is the final value of `Min`, whereas the question asks **how many times** `Min ← Num` executes!",
            },
            {
              spec: { type: "number", value: 2 },
              feedback: "Don't forget the 1st input `42 < 9999` (`Min` becomes `42`), then `19 < 42` (`Min` becomes `19`), then `14 < 19` (`Min` becomes `14`)!",
            },
          ],
          hints: [
            "Start with `Min = 9999` and test each of `42, 19, 27, 14, 33` in turn.",
            "Count every step where `Num < Min` is `TRUE`!",
          ],
          solution: [
            "`i=1` (`42 < 9999` T → `Min = 42`, execution 1).",
            "`i=2` (`19 < 42` T → `Min = 19`, execution 2).",
            "`i=3` (`27 < 19` F → skipped).",
            "`i=4` (`14 < 19` T → `Min = 14`, execution 3).",
            "`i=5` (`33 < 14` F → skipped). Total executions of `Min ← Num` = **3**.",
          ],
          commonError: "Giving the minimum value (`14`) instead of counting how many times `Min` was updated (`3`).",
        },
        {
          id: "algorithms-testing-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "computational-pdls",
          question:
            "During the **Coding** stage of the CIE PDLC, programmers test each small subroutine repeatedly as they write and refine it. What adjective describes a life cycle or process that repeats steps in cycles to refine the solution? Give a single word.",
          answer: {
            type: "text",
            accept: ["Iterative", "Iteration"],
            display: "Iterative",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Sequential", "Linear"] },
              feedback: "Sequential means strictly one-way without looping back; repeating and refining cycles is **Iterative**.",
            },
          ],
          hints: [
            "Starts with `I` — related to loop *iteration*!",
            "CIE explicitly calls this 'iterative testing' and an 'iterative life cycle'.",
          ],
          solution: [
            "Repeating design, coding, and testing cycles to refine a program is called **iterative** development.",
          ],
        },
        {
          id: "algorithms-testing-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "validation-verification-testing",
          question:
            "A student booking system requires a date to follow the exact pattern `DD/MM/YYYY` (two digits, slash, two digits, slash, four digits). Name the CIE **validation check** that checks this character pattern.",
          answer: {
            type: "text",
            accept: ["Format check", "Picture check", "Format"],
            display: "Format check",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Length check", "Length"] },
              feedback: "A length check of 10 characters would accept `ABCDEFGHIJ`! Matching `DD/MM/YYYY` requires a **Format check**.",
            },
            {
              spec: { type: "text", accept: ["Type check", "Type"] },
              feedback: "Checking a specific template of digits and slashes (`DD/MM/YYYY`) is a **Format check**.",
            },
          ],
          hints: [
            "Also sometimes called a 'picture check' because it enforces a template of digits and `/` characters.",
            "Two words: `Format ...`",
          ],
          solution: [
            "Enforcing a fixed character template like `DD/MM/YYYY` is a **Format check**.",
          ],
        },
        {
          id: "algorithms-testing-p2-q11",
          kind: "short",
          difficulty: "challenge",
          guideRef: "trace-tables-errors",
          question:
            "Dry-run this CIE pseudocode on the 1-indexed array `A = [8, 3, 11, 6, 9]`:\n`Diff ← 0`\n`FOR i ← 1 TO 4`\n`  IF A[i + 1] > A[i] THEN`\n`    Diff ← Diff + (A[i + 1] - A[i])`\n`  ENDIF`\n`NEXT i`\n`OUTPUT Diff`\nWhat single integer is output?",
          answer: { type: "number", value: 11 },
          traps: [
            {
              spec: { type: "number", value: 8 },
              feedback: "`i = 2` adds `11 - 3 = 8`, AND check `i = 4`: `A[5] = 9 > A[4] = 6` adds `9 - 6 = 3` (`8 + 3 = 11`)!",
            },
            {
              spec: { type: "number", value: 1 },
              feedback: "Notice the `IF A[i + 1] > A[i]` condition — drops (`3 < 8` and `6 < 11`) are NOT subtracted!",
            },
          ],
          hints: [
            "Test each adjacent pair `(8, 3)`, `(3, 11)`, `(11, 6)`, `(6, 9)`.",
            "Add `A[i + 1] - A[i]` ONLY when the right neighbour is strictly bigger than the left neighbour!",
          ],
          solution: [
            "`i=1`: `3 > 8` FALSE (`Diff = 0`).",
            "`i=2`: `11 > 3` TRUE → `Diff ← 0 + (11 - 3) = 8`.",
            "`i=3`: `6 > 11` FALSE (`Diff = 8`).",
            "`i=4`: `9 > 6` TRUE → `Diff ← 8 + (9 - 6) = 11`. Output is **11**.",
          ],
        },
        {
          id: "algorithms-testing-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "standard-algorithms",
          marks: 5,
          question:
            "Write an optimised CIE 0478 pseudocode Bubble Sort to sort the 1D integer array `Scores[1:50]` into ascending order, including both standard optimisations. [5]",
          hints: [
            "Initialise `Last ← 49` (`N - 1`) before a `REPEAT ... UNTIL Swap = FALSE OR Last = 0` outer loop.",
            "Inside the inner `FOR Index ← 1 TO Last`, swap `Scores[Index]` and `Scores[Index + 1]` via `Temp` when `Scores[Index] > Scores[Index + 1]`, setting `Swap ← TRUE`, then decrement `Last ← Last - 1`.",
          ],
          modelAnswer:
            "Last ← 49\nREPEAT\n  Swap ← FALSE\n  FOR Index ← 1 TO Last\n    IF Scores[Index] > Scores[Index + 1] THEN\n      Temp ← Scores[Index]\n      Scores[Index] ← Scores[Index + 1]\n      Scores[Index + 1] ← Temp\n      Swap ← TRUE\n    ENDIF\n  NEXT Index\n  Last ← Last - 1\nUNTIL Swap = FALSE OR Last = 0",
          markScheme: [
            {
              point: "Outer loop controlled by Boolean `Swap` flag (`Swap ← FALSE` before inner loop, `UNTIL Swap = FALSE`).",
              keywords: ["swap", "false", "until"],
            },
            {
              point: "Inner `FOR` loop from `1` to `Last` (initialised to `49`, i.e. `N - 1`).",
              keywords: ["49", "for index", "to last"],
            },
            {
              point: "Correct ascending comparison `IF Scores[Index] > Scores[Index + 1] THEN`.",
              keywords: ["scores[index] >", "index + 1"],
            },
            {
              point: "Correct 3-line swap using `Temp` and setting `Swap ← TRUE`.",
              keywords: ["temp", "true"],
            },
            {
              point: "Decrementing inner loop bound `Last ← Last - 1` after each pass.",
              keywords: ["last - 1"],
            },
          ],
          commonError: "Setting `Last ← 50` so `Scores[Index + 1]` accesses `Scores[51]` (out-of-bounds error)!",
        },
        {
          id: "algorithms-testing-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "validation-verification-testing",
          marks: 4,
          question:
            "An online registration form asks for a user's `Postcode` and `Quantity` of items (1 to 20). Name and describe two different validation checks suitable for `Quantity` and two different validation checks suitable for `Postcode`. [4]",
          hints: [
            "For `Quantity` (`1..20` integers), think of checking data type and min/max limits.",
            "For `Postcode`, think of checking it isn't left blank and matches the required pattern/character count.",
          ],
          modelAnswer:
            "For Quantity: 1) Type check to ensure a whole number (integer) is entered rather than letters; 2) Range check to ensure the integer is at least 1 and at most 20. For Postcode: 3) Presence check to ensure the mandatory postcode box is not left empty; 4) Format check (or Length check) to ensure the letters and digits match the required postcode pattern.",
          markScheme: [
            {
              point: "`Quantity` check 1: Type check — ensures entered value is an integer / whole number.",
              keywords: ["type check", "integer", "whole number"],
            },
            {
              point: "`Quantity` check 2: Range check — ensures number lies between minimum 1 and maximum 20.",
              keywords: ["range check", "minimum", "maximum", "at least 1"],
            },
            {
              point: "`Postcode` check 1: Presence check — ensures the field is not left blank / empty.",
              keywords: ["presence check", "blank", "empty"],
            },
            {
              point: "`Postcode` check 2: Format check (pattern of letters/digits) or Length check (character count).",
              keywords: ["format check", "length check", "pattern"],
            },
          ],
          commonError: "Repeating the same validation check twice (when 'different' checks are requested) or naming Double Entry.",
        },
        {
          id: "algorithms-testing-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "computational-pdls",
          marks: 4,
          question:
            "State the four stages of the CIE Program Development Life Cycle in order and describe one main task performed in each stage. [4]",
          hints: [
            "Remember the mnemonic `A → D → C → T`.",
            "Match each stage to its key deliverable: requirements spec, structure diagrams/flowcharts/pseudocode, source code + iterative module testing, and test data execution.",
          ],
          modelAnswer:
            "1. Analysis: define the problem using abstraction and decomposition to create the requirements specification. 2. Design: plan the sub-systems and algorithms using structure diagrams, flowcharts, and pseudocode. 3. Coding: write the program code in a high-level language and carry out iterative module testing. 4. Testing: dry-run logic and test the finished program with normal, abnormal, extreme, and boundary test data.",
          markScheme: [
            {
              point: "Analysis: abstraction, decomposition, and defining the requirements specification.",
              keywords: ["analysis", "requirements", "abstraction"],
            },
            {
              point: "Design: creating structure diagrams, flowcharts, and pseudocode.",
              keywords: ["design", "flowchart", "flowcharts", "pseudocode", "structure diagram"],
            },
            {
              point: "Coding: writing program source code and performing iterative testing of modules.",
              keywords: ["coding", "high-level", "source code", "module"],
            },
            {
              point: "Testing: running program with normal, abnormal, extreme, and boundary test data.",
              keywords: ["testing", "normal", "abnormal", "extreme", "boundary"],
            },
          ],
          commonError: "Putting Coding before Design, or forgetting what deliverables belong to Analysis vs Design.",
        },
        {
          id: "algorithms-testing-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "trace-tables-errors",
          marks: 4,
          question:
            "Write CIE 0478 pseudocode that repeatedly prompts the user to input a percentage `Mark` until a valid number from `0` to `100` inclusive is entered, displaying `\"Invalid mark, try again\"` whenever an out-of-range value is entered, and finally outputting `\"Accepted: \"` followed by `Mark`. [4]",
          hints: [
            "A `REPEAT ... UNTIL` loop always prompts for `INPUT Mark` at least once.",
            "Use `OR` (`Mark < 0 OR Mark > 100`) to print the error message, and `AND` (`Mark >= 0 AND Mark <= 100`) for `UNTIL`!",
          ],
          modelAnswer:
            "REPEAT\n  INPUT Mark\n  IF Mark < 0 OR Mark > 100 THEN\n    OUTPUT \"Invalid mark, try again\"\n  ENDIF\nUNTIL Mark >= 0 AND Mark <= 100\nOUTPUT \"Accepted: \", Mark",
          markScheme: [
            {
              point: "Post-condition `REPEAT ... UNTIL` (or `WHILE` loop with initial `INPUT`) that repeats until valid.",
              keywords: ["repeat", "until", "while"],
            },
            {
              point: "Reads `INPUT Mark` inside the validation loop.",
              keywords: ["input mark"],
            },
            {
              point: "Correct out-of-range error check `IF Mark < 0 OR Mark > 100` printing the error message.",
              keywords: ["< 0 or", "> 100"],
            },
            {
              point: "Correct termination condition `Mark >= 0 AND Mark <= 100` and final accepted output after loop.",
              keywords: [">= 0 and", "<= 100"],
            },
          ],
          commonError: "Writing `Mark < 0 AND Mark > 100` (impossible) or forgetting to print the error message before re-prompting!",
        },
      ],
    },
  ],

  challenge: [
    {
      id: "algorithms-testing-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "standard-algorithms",
      question:
        "An array of `6` distinct integers `[60, 50, 40, 30, 20, 10]` is in strictly **reverse** order. It is sorted into ascending order using Bubble Sort with shrinking `Last` (`5`, then `4`, ..., down to `1`) and a `Swap` flag. How many **total swaps** take place across the entire sort? Give a single integer.",
      answer: { type: "number", value: 15 },
      traps: [
        {
          spec: { type: "number", value: 30 },
          feedback: "`6 × 5 = 30` double-counts every pair! Each unordered pair swaps once: `5 + 4 + 3 + 2 + 1 = 15`.",
        },
        {
          spec: { type: "number", value: 5 },
          feedback: "`5` is only the number of swaps in Pass 1 (`60` bubbling to the end)!",
        },
      ],
      hints: [
        "In Pass 1, `60` swaps past all `5` smaller numbers (`5` swaps).",
        "In Pass 2, `50` swaps past the remaining `4` smaller numbers (`4` swaps), and so on down to `1`.",
        "Sum `5 + 4 + 3 + 2 + 1` (or use `n(n - 1) / 2` for `n = 6`).",
      ],
      solution: [
        "Every pair of numbers in a reverse-ordered array is out of order and swaps once.",
        "Swaps per pass: Pass 1 = `5`, Pass 2 = `4`, Pass 3 = `3`, Pass 4 = `2`, Pass 5 = `1`.",
        "Total swaps = `5 + 4 + 3 + 2 + 1 =` **15**.",
      ],
      commonError: "Counting only Pass 1 (`5`) or multiplying `6 × 6 = 36`.",
    },
    {
      id: "algorithms-testing-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "standard-algorithms",
      question:
        "An ascending Bubble Sort with BOTH `Swap` flag (`REPEAT ... UNTIL Swap = FALSE`) AND shrinking `Last` (`Last` starts at `4`, decrements by `1` after each pass) runs on the 5-element array `[20, 5, 12, 18, 30]`. How many **total comparisons** are executed across all passes before the loop terminates? Give a single integer.",
      answer: { type: "number", value: 7 },
      traps: [
        {
          spec: { type: "number", value: 4 },
          feedback: "`4` is only Pass 1! Since Pass 1 made swaps (`Swap = TRUE`), Pass 2 must also run to verify sortedness.",
        },
        {
          spec: { type: "number", value: 10 },
          feedback: "`4 + 3 + 2 + 1 = 10` ignores the `Swap` flag early exit! Check whether Pass 2 makes any swaps.",
        },
      ],
      hints: [
        "Trace Pass 1 (`Last = 4`, 4 comparisons) carefully to see what array results at the end of Pass 1!",
        "Pass 1 on `[20, 5, 12, 18, 30]`: `(20,5)` swaps → `[5, 20, 12, 18, 30]`; `(20,12)` swaps → `[5, 12, 20, 18, 30]`; `(20,18)` swaps → `[5, 12, 18, 20, 30]`; `(20,30)` stays! Notice `[5, 12, 18, 20, 30]` is now sorted!",
        "Pass 2 runs with `Last = 3` (3 comparisons), makes `0` swaps (`Swap = FALSE`), and exits! Add Pass 1 + Pass 2 comparisons.",
      ],
      solution: [
        "**Pass 1** (`Last = 4`): makes **4 comparisons** and 3 swaps, producing `[5, 12, 18, 20, 30]`. `Swap = TRUE`, `Last` becomes `3`.",
        "**Pass 2** (`Last = 3`): compares `(5,12)`, `(12,18)`, `(18,20)` — **3 comparisons** and **0 swaps** (`Swap` stays `FALSE`).",
        "`UNTIL Swap = FALSE` is now `TRUE`, terminating immediately! Total comparisons = `4 + 3 =` **7**.",
      ],
    },
    {
      id: "algorithms-testing-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "trace-tables-errors",
      question:
        "Trace Euclid's classic algorithm below for `A = 42` and `B = 18`:\n`WHILE B <> 0 DO`\n`  R ← A MOD B`\n`  A ← B`\n`  B ← R`\n`ENDWHILE`\n`OUTPUT A`\nWhat single integer is output?",
      answer: { type: "number", value: 6 },
      traps: [
        {
          spec: { type: "number", value: 0 },
          feedback: "`0` is the final value of `B` (and `R`), whereas the algorithm outputs **`A`**!",
        },
      ],
      hints: [
        "`MOD` gives the remainder after integer division: `42 MOD 18 = 6` (since `18 × 2 = 36`, remainder `6`).",
        "After Iter 1: `R = 6`, `A = 18`, `B = 6`. Since `B <> 0`, run Iter 2!",
        "Iter 2: `R = 18 MOD 6 = 0`, `A = 6`, `B = 0`. Loop terminates and outputs `A`.",
      ],
      solution: [
        "Start: `A = 42, B = 18`.",
        "Iter 1 (`B = 18 <> 0`): `R ← 42 MOD 18 = 6`, `A ← 18`, `B ← 6`.",
        "Iter 2 (`B = 6 <> 0`): `R ← 18 MOD 6 = 0`, `A ← 6`, `B ← 0`.",
        "`B = 0` ends the `WHILE` loop; `OUTPUT A` prints **6** (the highest common factor of 42 and 18!).",
      ],
    },
    {
      id: "algorithms-testing-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "validation-verification-testing",
      question:
        "A Modulo-11 check digit system assigns weights `5, 4, 3, 2` from left to right to the 4-digit code `2 4 1 5`: multiply each digit by its weight, sum the four products, find `Remainder ← Sum MOD 11`, and calculate `CheckDigit ← 11 - Remainder`. What single integer is `CheckDigit`?",
      answer: { type: "number", value: 5 },
      traps: [
        {
          spec: { type: "number", value: 6 },
          feedback: "`6` is `Sum MOD 11` (`39 MOD 11 = 6`), before the final step `CheckDigit ← 11 - Remainder` (`11 - 6 = 5`)!",
        },
        {
          spec: { type: "number", value: 39 },
          feedback: "`39` is the weighted sum before taking `MOD 11` and subtracting from `11`.",
        },
      ],
      hints: [
        "Multiply each digit of `2, 4, 1, 5` by weights `5, 4, 3, 2`: `(2 × 5) + (4 × 4) + (1 × 3) + (5 × 2)`.",
        "Calculate `Sum = 10 + 16 + 3 + 10 = 39`, then find `Remainder = 39 MOD 11` (`11 × 3 = 33`, remainder `6`).",
        "Finally compute `CheckDigit = 11 - 6`.",
      ],
      solution: [
        "Weighted products: `(2 × 5) + (4 × 4) + (1 × 3) + (5 × 2) = 10 + 16 + 3 + 10 = 39`.",
        "`Remainder ← 39 MOD 11 = 6` (since `39 = 3 × 11 + 6`).",
        "`CheckDigit ← 11 - 6 =` **5**.",
      ],
      commonError: "Stopping at `Remainder = 6` and forgetting `CheckDigit ← 11 - Remainder`.",
    },
    {
      id: "algorithms-testing-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "trace-tables-errors",
      question:
        "Dry-run this digit-processing algorithm for input `N = 2508`:\n`Result ← 0`\n`WHILE N > 0 DO`\n`  Digit ← N MOD 10`\n`  Result ← Result + Digit`\n`  N ← N DIV 10`\n`ENDWHILE`\n`OUTPUT Result`\nWhat single integer is output?",
      answer: { type: "number", value: 15 },
      traps: [
        {
          spec: { type: "number", value: 8052 },
          feedback: "`8052` reverses the digits (`Result * 10 + Digit`), whereas this algorithm simply adds `Result + Digit`!",
        },
        {
          spec: { type: "number", value: 4 },
          feedback: "`4` is the number of digits; this algorithm adds the actual digit values `8 + 0 + 5 + 2`.",
        },
      ],
      hints: [
        "`N MOD 10` extracts the rightmost digit (`8`), and `N DIV 10` strips the rightmost digit (`250`).",
        "Trace the four iterations for `2508 → 250 → 25 → 2 → 0`.",
        "Sum all extracted digits: `8 + 0 + 5 + 2`.",
      ],
      solution: [
        "Iter 1: `Digit = 8`, `Result = 8`, `N = 250`.",
        "Iter 2: `Digit = 0`, `Result = 8`, `N = 25`.",
        "Iter 3: `Digit = 5`, `Result = 13`, `N = 2`.",
        "Iter 4: `Digit = 2`, `Result = 15`, `N = 0` (loop stops). Output is **15**.",
      ],
    },
    {
      id: "algorithms-testing-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "trace-tables-errors",
      question:
        "Dry-run this algorithm on the 1-indexed array `Data = [4, 7, 2, 9, 5, 8]`:\n`P ← Data[1]`\n`Q ← Data[1]`\n`FOR k ← 2 TO 6`\n`  IF Data[k] > P THEN`\n`    Q ← P`\n`    P ← Data[k]`\n`  ELSE`\n`    IF Data[k] > Q THEN`\n`      Q ← Data[k]`\n`    ENDIF`\n`  ENDIF`\n`NEXT k`\n`OUTPUT Q`\nWhat single integer is output?",
      answer: { type: "number", value: 8 },
      traps: [
        {
          spec: { type: "number", value: 9 },
          feedback: "`9` is the final value of `P` (the maximum), whereas `Q` tracks the **second-largest** value (`8`)!",
        },
        {
          spec: { type: "number", value: 7 },
          feedback: "`Q` becomes `7` when `k = 4` (`Data[4] = 9`), but don't forget `k = 6` (`Data[6] = 8`), which hits the `ELSE IF Data[6] > Q` branch!",
        },
      ],
      hints: [
        "Track the pair `(P, Q)` from `k = 2` to `k = 6`, starting with `(4, 4)`.",
        "`k=2` (`7`): `P=7, Q=4`; `k=3` (`2`): unchanged; `k=4` (`9`): `Q=7, P=9`; `k=5` (`5`): unchanged.",
        "Now trace `k=6` (`Data[6] = 8`): `8 > 9` is FALSE, so enter `ELSE` and test `8 > 7`!",
      ],
      solution: [
        "Initial: `P = 4, Q = 4`.",
        "`k=2` (`7 > 4` T): `Q = 4, P = 7`. `k=3` (`2`): neither `> 7` nor `> 4`.",
        "`k=4` (`9 > 7` T): `Q = 7, P = 9`. `k=5` (`5`): neither `> 9` nor `> 7`.",
        "`k=6` (`8 > 9` F, `ELSE 8 > 7` T): `Q ← 8`.",
        "Final `OUTPUT Q` prints **8** (the second-highest value in the array!).",
      ],
    },
    {
      id: "algorithms-testing-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "trace-tables-errors",
      marks: 4,
      question:
        "Examine this buggy algorithm intended to input 30 student scores (each 0 to 100) and output how many passed (>= 50) and the class average:\n`1  Pass ← 0`\n`2  FOR S ← 1 TO 30`\n`3    Total ← 0`\n`4    INPUT Score`\n`5    Total ← Total + Score`\n`6    IF Score > 50 THEN Pass ← Pass + 1 ENDIF`\n`7    Avg ← Total / 30`\n`8  NEXT S`\n`9  OUTPUT Pass, Avg`\nIdentify three distinct errors/inefficiencies by line number and state the exact fix for each. [4]",
      modelAnswer:
        "1) Line 3 (`Total ← 0`) is inside the loop so it resets Total every iteration; move `Total ← 0` above Line 2 before the FOR loop. 2) Line 6 (`IF Score > 50`) wrongly excludes a passing score of 50; change `>` to `>=` (`IF Score >= 50`). 3) Line 7 (`Avg ← Total / 30`) recalculates the average 30 times inside the loop; move `Avg ← Total / 30` after `NEXT S` (between Lines 8 and 9).",
      markScheme: [
        {
          point: "Identify Line 3 bug: `Total ← 0` resets running total on every iteration.",
          keywords: ["line 3", "resets", "inside"],
        },
        {
          point: "Fix Line 3: move `Total ← 0` before / outside the `FOR` loop.",
          keywords: ["before", "above", "outside"],
        },
        {
          point: "Fix Line 6: change `Score > 50` to `Score >= 50` so 50 is counted as a pass.",
          keywords: ["line 6", ">= 50"],
        },
        {
          point: "Fix Line 7: move `Avg ← Total / 30` after `NEXT S` so average is calculated once at the end.",
          keywords: ["line 7", "after next", "after the loop"],
        },
      ],
      hints: [
        "Check Line 3: what happens to `Total` at the start of `S = 2, 3, ..., 30`?",
        "Check boundary value `Score = 50` on Line 6!",
        "Check Line 7: should `Avg` be computed 30 times inside the loop or once after `NEXT S`?",
      ],
    },
    {
      id: "algorithms-testing-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "validation-verification-testing",
      marks: 4,
      question:
        "A cinema website requires users to enter a booking reference formatted like `CN-4829` (two uppercase letters, a hyphen, and four digits) and a ticket count from `1` to `8` inclusive. Design a complete test plan for the ticket count (`1..8`) covering all four CIE test data categories, stating for each test value whether it should be accepted or rejected and why. [4]",
      modelAnswer:
        "1) Normal data: `4` — accepted because it is a typical whole number comfortably inside 1 to 8. 2) Abnormal (erroneous) data: `15` or `\"three\"` — rejected because it lies outside the valid range or is the wrong data type. 3) Extreme data: `1` and `8` — both accepted because they are the smallest and largest valid values right on the limits. 4) Boundary data: `0` (rejected) and `1` (accepted) for the lower boundary, and `8` (accepted) and `9` (rejected) for the upper boundary, testing both sides of each limit.",
      markScheme: [
        {
          point: "Normal test data (e.g. `4` or `5`) stated as accepted inside `1..8`.",
          keywords: ["normal", "accepted"],
        },
        {
          point: "Abnormal / erroneous test data (e.g. `-2`, `15`, `\"three\"`) stated as rejected.",
          keywords: ["abnormal", "erroneous", "rejected"],
        },
        {
          point: "Extreme test data `1` and `8` stated as both accepted on the limits.",
          keywords: ["extreme", "1 and 8"],
        },
        {
          point: "Boundary test data pair(s) `0` (rejected) & `1` (accepted) or `8` (accepted) & `9` (rejected).",
          keywords: ["boundary", "pair", "8 and 9", "0 and 1", "9 (rejected)", "0 (rejected)"],
        },
      ],
      hints: [
        "List all four CIE categories: Normal, Abnormal, Extreme, and Boundary.",
        "Keep Extreme (`1` and `8`, both accepted) strictly separate from Boundary (`0, 1` and `8, 9`)!",
        "Explicitly state 'accepted' or 'rejected' alongside every test item.",
      ],
    },
  ],
};
