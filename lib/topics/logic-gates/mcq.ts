import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "logic-gates-m1",
    title: "Logic Gates & Truth Tables — MCQ Paper 1",
    questions: [
      {
        id: "logic-gates-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "basic-gates",
        question:
          "Which CIE 0478 logic gate accepts **only one binary input** and is drawn as a right-pointing triangle with a small circle at its output tip?",
        options: ["NOT gate", "OR gate", "XOR gate", "AND gate"],
        answerIndex: 0,
        hints: [
          "Only one gate on the CIE 0478 syllabus is a single-input inverter.",
          "The small circle (bubble) at the tip of the triangle indicates inversion (`0 → 1` and `1 → 0`).",
        ],
        explanation:
          "The `NOT` gate (inverter) is the only 1-input gate on CIE 0478 and is drawn as a triangle with an output bubble. `AND`, `OR`, and `XOR` are 2-input gates.",
      },
      {
        id: "logic-gates-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "basic-gates",
        question:
          "A 2-input `AND` gate receives `A = 1` and `B = 0`. What is its output `X`, and under what rule does an `AND` gate output `1`?",
        options: [
          "X = 1; it outputs 1 whenever the two inputs are different",
          "X = 1; it outputs 1 whenever at least one input is 1",
          "X = 0; it outputs 1 only when both A = 1 and B = 1",
          "X = 0; it outputs 1 only when both A = 0 and B = 0",
        ],
        answerIndex: 2,
        hints: [
          "Think of two switches wired in series: current flows only if **both** switches are closed.",
          "Check `1 AND 0`: since `B` is `0`, both inputs are not `1`.",
        ],
        explanation:
          "An `AND` gate outputs `1` **only** when both `A = 1` and `B = 1`, so `1 AND 0 = 0`. Outputting `1` when at least one input is `1` describes an `OR` gate.",
      },
      {
        id: "logic-gates-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "basic-gates",
        question:
          "Reading vertically down a standard 4-row truth table ordered `(0, 0)`, `(0, 1)`, `(1, 0)`, `(1, 1)`, what is the output column for `X = A OR B`?",
        options: ["0, 0, 0, 1", "0, 1, 1, 1", "0, 1, 1, 0", "1, 0, 0, 0"],
        answerIndex: 1,
        hints: [
          "Standard Boolean `OR` is **inclusive**: it outputs `1` if `A = 1`, `B = 1`, **or both** are `1`.",
          "Check `(0, 0)` vs `(1, 1)`: `0 OR 0 = 0`, whereas `1 OR 1 = 1`.",
        ],
        explanation:
          "Inclusive `OR` outputs `0` only on `(0, 0)` and outputs `1` on `(0, 1)`, `(1, 0)`, and `(1, 1)`, giving `0, 1, 1, 1`. The pattern `0, 1, 1, 0` is the classic `XOR` trap!",
      },
      {
        id: "logic-gates-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "universal-xor-gates",
        question:
          "Which CIE 0478 logic gate is drawn as a curved `OR`-style shield with an **extra curved line** parallel to its input side and **no** circle at the output?",
        options: ["XOR gate", "NAND gate", "NOR gate", "OR gate"],
        answerIndex: 0,
        hints: [
          "A small circle at the output means `NOT` (`NAND` or `NOR`), whereas a double curved back means **exclusive**.",
          "Which gate outputs `1` exclusively when its two inputs differ?",
        ],
        explanation:
          "The `XOR` (Exclusive-OR) gate has the distinctive double curved line at the input and no output bubble. Adding an output bubble to an `OR` body without the extra input curve gives a `NOR` gate.",
      },
      {
        id: "logic-gates-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "universal-xor-gates",
        question:
          "A single 2-input CIE logic gate produces the following truth table:\n\n| A | B | X |\n|---|---|---|\n| 0 | 0 | 1 |\n| 0 | 1 | 0 |\n| 1 | 0 | 0 |\n| 1 | 1 | 0 |\n\nWhich gate is it?",
        options: ["AND gate", "NAND gate", "NOR gate", "XOR gate"],
        answerIndex: 2,
        hints: [
          "Compare the column `1, 0, 0, 0` with `A OR B` (`0, 1, 1, 1`).",
          "Every bit of `A OR B` has been inverted (`NOT (A OR B)`).",
        ],
        explanation:
          "`A NOR B = NOT (A OR B)` flips `0, 1, 1, 1` into `1, 0, 0, 0` — outputting `1` **only** when neither `A` nor `B` is `1`. By contrast, `A NAND B` has column `1, 1, 1, 0`.",
      },
      {
        id: "logic-gates-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "universal-xor-gates",
        question:
          "For `X = A NAND B`, what are the outputs when `(A, B) = (1, 1)` and when `(A, B) = (0, 0)`?",
        options: [
          "X = 0 for (1, 1) and X = 1 for (0, 0)",
          "X = 1 for (1, 1) and X = 1 for (0, 0)",
          "X = 1 for (1, 1) and X = 0 for (0, 0)",
          "X = 0 for (1, 1) and X = 0 for (0, 0)",
        ],
        answerIndex: 0,
        hints: [
          "Compute `A AND B` first, then invert the bit (`NOT (A AND B)`).",
          "For `(1, 1)`, `1 AND 1 = 1` → invert to `0`. For `(0, 0)`, `0 AND 0 = 0` → invert to `1`.",
        ],
        explanation:
          "`NAND` is `NOT (A AND B)`: for `(1, 1)`, `NOT (1) = 0`; for `(0, 0)`, `NOT (0) = 1`. In fact, `(1, 1)` is the **only** input pair where a `NAND` gate outputs `0`.",
      },
      {
        id: "logic-gates-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "basic-gates",
        question:
          "What is the 4-row output column from `(A, B) = (0, 0)` down to `(1, 1)` for the expression `X = (NOT A) OR B`?",
        options: ["1, 0, 1, 1", "1, 1, 0, 1", "0, 1, 0, 0", "1, 1, 1, 0"],
        answerIndex: 1,
        hints: [
          "First write down `NOT A` for `00, 01, 10, 11`: since `A = 0, 0, 1, 1`, `NOT A = 1, 1, 0, 0`.",
          "Now `OR` that column (`1, 1, 0, 0`) with `B = 0, 1, 0, 1`.",
        ],
        explanation:
          "For `(0,0)`: `1 OR 0 = 1`; `(0,1)`: `1 OR 1 = 1`; `(1,0)`: `0 OR 0 = 0`; `(1,1)`: `0 OR 1 = 1`, giving `1, 1, 0, 1`. Confusing `NOT A` with `NOT B` produces the distractor `1, 0, 1, 1`.",
      },
      {
        id: "logic-gates-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "universal-xor-gates",
        question:
          "Inputs `A = 1` and `B = 1` are connected in parallel to an `OR` gate, an `XOR` gate, and a `NAND` gate. What are their outputs `(OR, XOR, NAND)` in that exact order?",
        options: ["0, 1, 1", "1, 0, 1", "1, 1, 0", "1, 0, 0"],
        answerIndex: 3,
        hints: [
          "`OR` is inclusive (`1 OR 1 = 1`), whereas `XOR` requires the two inputs to **differ**.",
          "For `NAND`, invert `1 AND 1 = 1` to get `0`.",
        ],
        explanation:
          "On `(1, 1)`: `1 OR 1 = 1`, `1 XOR 1 = 0` (inputs are equal, not different), and `1 NAND 1 = NOT(1) = 0`, giving `1, 0, 0`. Thinking `1 XOR 1 = 1` is the most common mistake.",
      },
      {
        id: "logic-gates-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "logic-circuits-tables",
        question:
          "How many binary input rows are required in a complete truth table for a 3-input CIE 0478 logic circuit `(A, B, C)`?",
        options: [
          "9 rows (because 3² = 9)",
          "4 rows (000, 001, 010, 111)",
          "6 rows (because 3 × 2 = 6)",
          "8 rows (from 000 to 111, since 2³ = 8)",
        ],
        answerIndex: 3,
        hints: [
          "Each of the 3 binary inputs independently takes `2` possible values (`0` or `1`).",
          "Multiply `2 × 2 × 2 = 2³`.",
        ],
        explanation:
          "With `n` binary inputs there are `2ⁿ` combinations, so `n = 3` gives `2³ = 8` rows (`000` through `111`). Multiplying `3 × 2 = 6` instead of taking a power of 2 misses two input states.",
      },
      {
        id: "logic-gates-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "logic-circuits-tables",
        question:
          "Evaluate the logic expression `X = (A AND B) OR (NOT C)` when `A = 1`, `B = 0`, and `C = 0`.",
        options: [
          "X = 1, because NOT C equals 1 and 0 OR 1 = 1",
          "X = 0, because A AND B equals 0",
          "X = 1, because A AND B equals 1",
          "X = 0, because inputs B = 0 and C = 0",
        ],
        answerIndex: 0,
        hints: [
          "Evaluate the two bracketed parts separately: `P = A AND B` and `Q = NOT C`.",
          "With `A = 1, B = 0`, `P = 0`. With `C = 0`, `Q = NOT 0 = 1`. Now compute `P OR Q`.",
        ],
        explanation:
          "`1 AND 0 = 0` and `NOT 0 = 1`, so `X = 0 OR 1 = 1`. Stopping as soon as `A AND B = 0` forgets that the final gate is `OR`, not `AND`!",
      },
      {
        id: "logic-gates-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "logic-expressions-problems",
        question:
          "When brackets are omitted from a Boolean expression containing `OR`, `NOT`, and `AND`, in what standard order of precedence are the operators evaluated?",
        options: [
          "OR first, then AND, then NOT",
          "AND first, then OR, then NOT",
          "NOT first, then AND, then OR",
          "Strictly left to right in the order written",
        ],
        answerIndex: 2,
        hints: [
          "Think of Boolean precedence as mirroring arithmetic: unary negation (`−`) before multiplication (`×`) before addition (`+`).",
          "Remember the mnemonic **N**aughty **A**nts **O**rder.",
        ],
        explanation:
          "Boolean precedence evaluates `NOT` (highest) → `AND` → `OR` (lowest), so `A OR B AND NOT C` means `A OR (B AND (NOT C))` rather than evaluating strictly left-to-right.",
      },
      {
        id: "logic-gates-m1-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "universal-xor-gates",
        question:
          "Both inputs of a single 2-input `NAND` gate are tied together to the same signal wire `A`, computing `X = A NAND A`. How does this circuit behave?",
        options: [
          "Output X is always 1 regardless of A",
          "Output X is always 0 regardless of A",
          "Output X equals NOT A (it acts as a NOT gate)",
          "Output X equals input A unchanged (a buffer)",
        ],
        answerIndex: 2,
        hints: [
          "Test `A = 0` in `A NAND A`: what is `0 NAND 0`?",
          "Now test `A = 1` in `A NAND A`: what is `1 NAND 1`? Compare `(0 → ?, 1 → ?)` with a 1-input gate.",
        ],
        explanation:
          "When `A = 0`, `0 NAND 0 = NOT (0 AND 0) = 1`; when `A = 1`, `1 NAND 1 = NOT (1 AND 1) = 0`. Thus `A NAND A = NOT A` — showing how a universal `NAND` gate forms an inverter!",
      },
      {
        id: "logic-gates-m1-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "logic-circuits-tables",
        question:
          "Across all 8 rows (`000` to `111`) of the 3-input expression `X = (A XOR B) AND (NOT C)`, which exact input rows `(A, B, C)` produce `X = 1`?",
        options: [
          "010, 100, and 110",
          "Only 011 and 101",
          "000, 010, 100, and 110",
          "Only 010 and 100",
        ],
        answerIndex: 3,
        hints: [
          "For an `AND` gate to output `1`, **both** `A XOR B = 1` **and** `NOT C = 1` must hold simultaneously.",
          "`NOT C = 1` forces `C = 0`; `A XOR B = 1` forces `A ≠ B` (`01` or `10`).",
          "Combine `{01, 10}` for the first two inputs with `C = 0`.",
        ],
        explanation:
          "`NOT C = 1` requires `C = 0`, and `A XOR B = 1` requires `A` and `B` to differ (`01` or `10`), giving **only** `010` and `100`. Including `110` confuses `XOR` with inclusive `OR`; picking `011` and `101` forgets to invert `C`.",
      },
      {
        id: "logic-gates-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "logic-expressions-problems",
        question:
          "A cooling fan `X` switches ON (`X = 1`) if:\n- temperature is high (`T = 1`, where `T = 0` = normal) **AND** the safety door is **closed** (`D = 0`, where `D = 1` = door open), **OR**\n- manual test mode is ON (`M = 1`, where `M = 0` = OFF).\n\nWhich CIE 0478 logic expression correctly represents `X`?",
        options: [
          "X = (T AND D) OR M",
          "X = (T AND NOT D) OR M",
          "X = T AND ((NOT D) OR M)",
          "X = (NOT T AND D) XOR M",
        ],
        answerIndex: 1,
        hints: [
          "Check the sensor table carefully for `D`: \"door closed\" is **`D = 0`**, NOT `D = 1`!",
          "Because `D = 0` must evaluate to `1` (`TRUE`) when the door is closed, write `NOT D`.",
          "Group `(T AND NOT D)` in brackets so `M = 1` alone can also turn the fan ON via `OR`.",
        ],
        explanation:
          "High temperature is `T`, closed door (`D = 0`) is `NOT D`, and manual override (`M = 1`) is `M`, giving `[T AND NOT D]` ORed with `M`. Using `[T AND D]` instead falls for the `0/1` sensor-meaning trap and runs the fan only when the safety door is open!",
      },
      {
        id: "logic-gates-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "universal-xor-gates",
        question:
          "Which Boolean expression built **solely** from `AND`, `OR`, and `NOT` has the exact same 4-row truth table (`0, 1, 1, 0`) as `X = A XOR B`?",
        options: [
          "X = NOT (A AND B) OR (A OR B)",
          "X = (A AND NOT B) OR (NOT A AND B)",
          "X = (A OR B) AND (NOT A OR B)",
          "X = (NOT A AND NOT B) OR (A AND B)",
        ],
        answerIndex: 1,
        hints: [
          "`A XOR B = 1` in exactly two cases: (`A = 1` and `B = 0`) **or** (`A = 0` and `B = 1`).",
          "Write a mini `AND` clause for each of those two rows and join them with `OR`.",
          "Test `(1, 1)` and `(0, 0)` to confirm both give `0`.",
        ],
        explanation:
          "`(A AND NOT B)` is `1` only on `(1, 0)`, and `(NOT A AND B)` is `1` only on `(0, 1)`, so their `OR` gives `0, 1, 1, 0` — identical to `A XOR B`! By contrast, combining `(NOT A AND NOT B)` with `(A AND B)` via `OR` gives `1, 0, 0, 1` (`NOT [A XOR B]`).",
      },
    ],
  },
  {
    id: "logic-gates-m2",
    title: "Multi-Gate Circuits & 3-Input Tables — MCQ Paper 2",
    questions: [
      {
        id: "logic-gates-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "basic-gates",
        question:
          "Which CIE 0478 logic gate symbol has a **flat vertical left back** curving into a smooth semicircular front (shaped like a capital **D**) with **no** output circle?",
        options: ["NOR gate", "NAND gate", "AND gate", "OR gate"],
        answerIndex: 2,
        hints: [
          "Remember the mnemonic: **anD** ends in a flat-backed **D**.",
          "Check whether there is a small inversion circle at the output: here there is **no** circle.",
        ],
        explanation:
          "The flat-backed D-shape without an output bubble is the `AND` gate. Adding an output bubble turns it into `NAND`, while `OR` and `NOR` have curved concave backs.",
      },
      {
        id: "logic-gates-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "universal-xor-gates",
        question:
          "For `X = A XOR B`, what is the output `X` on `(0, 0)` and on `(0, 1)`?",
        options: [
          "1 for (0, 0), and 0 for (0, 1)",
          "0 for (0, 0), and 1 for (0, 1)",
          "1 for (0, 0), and 1 for (0, 1)",
          "0 for (0, 0), and 0 for (0, 1)",
        ],
        answerIndex: 1,
        hints: [
          "`XOR` is a **difference detector**: `1` when inputs differ, `0` when inputs match.",
          "Compare `0` with `0` (equal) and `0` with `1` (different).",
        ],
        explanation:
          "On `(0, 0)` the inputs match so `0 XOR 0 = 0`; on `(0, 1)` the inputs differ so `0 XOR 1 = 1`. Reversing them (`1` then `0`) describes a `NOR` gate on those two rows.",
      },
      {
        id: "logic-gates-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "logic-circuits-tables",
        question:
          "In a standard 8-row CIE 0478 truth table ordered in ascending binary from `000` (Row 1) to `111` (Row 8), what are `(A, B, C)` on **Row 5**?",
        options: [
          "A = 1, B = 0, C = 0 (100)",
          "A = 1, B = 0, C = 1 (101)",
          "A = 0, B = 1, C = 0 (010)",
          "A = 0, B = 1, C = 1 (011)",
        ],
        answerIndex: 0,
        hints: [
          "Row 1 represents binary `0` (`000`), Row 2 represents binary `1` (`001`), and so on.",
          "Row 5 therefore represents denary `5 − 1 = 4` in 3-bit binary (`4 = 100₂`).",
        ],
        explanation:
          "Counting `000` (Row 1), `001` (Row 2), `010` (Row 3), `011` (Row 4), **Row 5 is `100`** (`A = 1, B = 0, C = 0`). Converting `5` directly to `101` forgets that Row 1 starts at `000`!",
      },
      {
        id: "logic-gates-m2-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "logic-expressions-problems",
        question:
          "Using standard Boolean operator precedence (`NOT` → `AND` → `OR`), what is the value of `X = 1 OR 0 AND 0`?",
        options: [
          "1, because 0 AND 0 = 0 is evaluated first, leaving 1 OR 0 = 1",
          "1, because AND is evaluated after OR",
          "0, because 1 OR 0 = 1 is evaluated first, leaving 1 AND 0 = 0",
          "0, because two of the three inputs are 0",
        ],
        answerIndex: 0,
        hints: [
          "Which binds tighter: `AND` or `OR`?",
          "Put invisible brackets around `0 AND 0` first: `1 OR (0 AND 0)`.",
        ],
        explanation:
          "`AND` has higher precedence than `OR`, so `1 OR (0 AND 0) = 1 OR 0 = 1`. Evaluating left-to-right as `(1 OR 0) AND 0 = 0` violates Boolean precedence (which is why CIE expects explicit brackets!).",
      },
      {
        id: "logic-gates-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "logic-circuits-tables",
        question:
          "In a 3-input logic circuit, internal wire `P = A NAND B`, internal wire `Q = B OR C`, and final output `X = P AND Q`. What are `(P, Q, X)` when `A = 1, B = 1, C = 0`?",
        options: [
          "P = 1, Q = 0, X = 0",
          "P = 0, Q = 0, X = 0",
          "P = 0, Q = 1, X = 0",
          "P = 1, Q = 1, X = 1",
        ],
        answerIndex: 2,
        hints: [
          "Evaluate `P = 1 NAND 1` first: remember `1 AND 1 = 1`, then invert!",
          "Next evaluate `Q = 1 OR 0`, and finally `X = P AND Q`.",
        ],
        explanation:
          "`P = 1 NAND 1 = 0`, `Q = 1 OR 0 = 1`, and `X = 0 AND 1 = 0`. Forgetting the inversion bubble on `NAND` gives the distractor `P = 1, Q = 1, X = 1`.",
      },
      {
        id: "logic-gates-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "logic-circuits-tables",
        question:
          "For the circuit `X = (A NOR B) OR (B AND C)`, what is the output `X` when `(A, B, C) = (0, 0, 1)`?",
        options: [
          "X = 0, because inputs A = 0 and B = 0",
          "X = 1, because B AND C evaluates to 1 when C = 1",
          "X = 0, because B AND C equals 0",
          "X = 1, because A NOR B evaluates to 1 when A = 0 and B = 0",
        ],
        answerIndex: 3,
        hints: [
          "Check `0 NOR 0`: what is `NOT (0 OR 0)`?",
          "Once one input to the final `OR` gate is `1`, what must `X` be?",
        ],
        explanation:
          "When `A = 0, B = 0`, `0 NOR 0 = NOT(0) = 1`, while `0 AND 1 = 0`. Feeding `1` and `0` into the final `OR` gate yields `1 OR 0 = 1`. Confusing `0 NOR 0` with `0 OR 0` wrongly gives `X = 0`.",
      },
      {
        id: "logic-gates-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "universal-xor-gates",
        question:
          "Across all 4 rows `(00, 01, 10, 11)`, the expression `X = (NOT A) AND (NOT B)` gives the output column `1, 0, 0, 0`. Which **single** 2-input CIE logic gate is completely equivalent to `(NOT A) AND (NOT B)`?",
        options: [
          "XOR gate (A XOR B)",
          "NOR gate (A NOR B)",
          "NAND gate (A NAND B)",
          "OR gate (A OR B)",
        ],
        answerIndex: 1,
        hints: [
          "Combining `NOT A` with `NOT B` via `AND` means \"**neither** `A` **nor** `B` is `1`\".",
          "Which single gate has the 4-row signature `1, 0, 0, 0`?",
        ],
        explanation:
          "By De Morgan's Law, `(NOT A)` ANDed with `(NOT B)` equals `NOT [A OR B]`, which is `A NOR B` (column `1, 0, 0, 0`). Many students guess `NAND` because they see the word `AND`, but `A NAND B` has column `1, 1, 1, 0`!",
      },
      {
        id: "logic-gates-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "universal-xor-gates",
        question:
          "Which **single** 2-input CIE logic gate is completely equivalent to `X = (NOT A) OR (NOT B)` across all 4 input pairs `(00, 01, 10, 11)`?",
        options: [
          "XOR gate (A XOR B)",
          "NOR gate (A NOR B)",
          "NAND gate (A NAND B)",
          "AND gate (A AND B)",
        ],
        answerIndex: 2,
        hints: [
          "Check when `NOT A` ORed with `NOT B` equals `0`: both `NOT A` and `NOT B` must be `0`, meaning `A = 1` and `B = 1`!",
          "Which gate outputs `0` **only** on `(1, 1)` (`1, 1, 1, 0`)?",
        ],
        explanation:
          "`(NOT A)` ORed with `(NOT B)` equals `0` only when `A = 1` and `B = 1`, giving `1, 1, 1, 0` — which is `A NAND B`. Guessing `NOR` because of the word `OR` is the classic De Morgan trap!",
      },
      {
        id: "logic-gates-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "logic-circuits-tables",
        question:
          "In the 3-input circuit `X = (A AND B) NOR C`, you are told that the final output is **`X = 1`**. What can you deduce with certainty about input `C`?",
        options: [
          "Input C can be either 0 or 1 depending on whether A and B both equal 1",
          "Input C must be 1, because a NOR gate outputs 1 whenever an input is 1",
          "Inputs A, B, and C must all equal 1 simultaneously to drive the output high",
          "Input C must be 0, because a NOR gate outputs 1 only when both of its inputs are 0",
        ],
        answerIndex: 3,
        hints: [
          "Work backwards from the final `NOR` gate: which input pair makes `P NOR C = 1`?",
          "A `NOR` gate outputs `1` **only** on `(0, 0)`!",
        ],
        explanation:
          "Because `P NOR C = 1` requires **both** `P = 0` and `C = 0`, input `C` must definitely be `0` (and `A AND B` must also be `0`, so `A` and `B` cannot both be `1`).",
      },
      {
        id: "logic-gates-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "logic-circuits-tables",
        question:
          "For how many of the 8 rows (`000` to `111`) in the truth table of `X = (A OR B) NAND C` does the output equal **`X = 1`**?",
        options: ["3 rows", "4 rows", "5 rows", "6 rows"],
        answerIndex: 2,
        hints: [
          "Shortcut: count how many rows make `X = 0` first! A `NAND` gate outputs `0` **only** when `(A OR B)` equals `1` **AND** `C = 1`.",
          "List the 4 rows with `C = 1` (`001, 011, 101, 111`) and check on how many of them `A OR B = 1`.",
        ],
        explanation:
          "`X = 0` requires `C = 1` and `(A OR B)` equal to `1`, which holds on `011`, `101`, and `111` (`3` rows; on `001`, `A OR B = 0` so `0 NAND 1 = 1`). Subtracting from `8` total rows leaves **`8 − 3 = 5` rows** where `X = 1` (`000, 001, 010, 100, 110`).",
      },
      {
        id: "logic-gates-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "logic-expressions-problems",
        question:
          "In a circuit diagram:\n1. Input `A` feeds a `NOT` gate producing wire `P`.\n2. Wire `P` and input `B` feed an `XOR` gate producing wire `Q`.\n3. Wire `Q` and input `C` feed a `NOR` gate producing output `X`.\n\nWhich CIE logic expression describes this circuit?",
        options: [
          "X = ((NOT A) XOR B) NOR C",
          "X = (NOT A) XOR (B NOR C)",
          "X = ((NOT A) OR B) NAND C",
          "X = NOT (A XOR B) NOR C",
        ],
        answerIndex: 0,
        hints: [
          "Substitute one wire at a time: `P = NOT A`, then `Q = P XOR B`, then `X = Q NOR C`.",
          "Keep brackets around `(NOT A)` and around the `XOR` stage so the gate order cannot shift.",
        ],
        explanation:
          "Only `A` passes through the `NOT` gate (`P = NOT A`), then `Q` is `P XOR B`, and finally `X` is `Q NOR C` — written `X = ((NOT A)` XORed with `B)` NOR `C`. Placing `NOT` outside `(A XOR B)` wrongly moves the `NOT` gate *after* the `XOR` gate.",
      },
      {
        id: "logic-gates-m2-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "logic-circuits-tables",
        question:
          "What is the complete 8-bit output column from `000` (first bit) to `111` (eighth bit) for `X = (A NAND B) AND (B OR C)`?",
        options: ["01100100", "01110100", "01110111", "11101100"],
        answerIndex: 1,
        hints: [
          "Let `P = A NAND B`: `P = 0` **only** when `A = 1` and `B = 1` (rows `110` and `111`), so `P = 11111100`.",
          "Let `Q = B OR C`: `Q = 0` **only** when `B = 0` and `C = 0` (rows `000` and `100`), so `Q = 01110111`.",
          "Bitwise `AND` `11111100` with `01110111`.",
        ],
        explanation:
          "`P = A NAND B` is `1,1,1,1,1,1,0,0` and `Q = B OR C` is `0,1,1,1,0,1,1,1`. Taking `P AND Q` row-by-row gives `0,1,1,1,0,1,0,0` (`01110100`). Picking `01110111` forgets that `A NAND B = 0` zeroes out rows `110` and `111`.",
      },
      {
        id: "logic-gates-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "logic-circuits-tables",
        question:
          "Inside a CPU's Arithmetic Logic Unit (ALU), the Sum bit of a 3-input Full Adder is computed by `X = (A XOR B) XOR C`. Which rule accurately describes when `X = 1` across `(A, B, C)`?",
        options: [
          "Whenever at least one of A, B, C equals 1",
          "Whenever exactly one of A, B, C equals 1 (so 111 gives 0)",
          "Whenever an even number of the inputs A, B, C equal 1",
          "Whenever an odd number (either one or all three) of the inputs A, B, C equal 1",
        ],
        answerIndex: 3,
        hints: [
          "Check row `(0, 0, 1)`: `(0 XOR 0) XOR 1 = 0 XOR 1 = 1`.",
          "Check row `(0, 1, 1)`: `(0 XOR 1) XOR 1 = 1 XOR 1 = 0`.",
          "Crucially, check row `(1, 1, 1)`: `(1 XOR 1) XOR 1 = 0 XOR 1 = ?`",
        ],
        explanation:
          "On `(1, 1, 1)`, `1 XOR 1 = 0` and then `0 XOR 1 = 1`! Thus `(A XOR B)` XORed with `C` equals `1` on `001, 010, 100, 111` — whenever an **odd** number (`1` or `3`) of inputs are `1`. Thinking `(1, 1, 1)` gives `0` is a classic 3-input `XOR` trap!",
      },
      {
        id: "logic-gates-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "logic-expressions-problems",
        question:
          "When asked on CIE 0478 Paper 2 to draw a logic circuit for `X = A OR B OR C`, why should you draw **two 2-input `OR` gates** (`(A OR B)` feeding a second `OR` gate with `C`) rather than one `OR` gate with three input wires?",
        options: [
          "Cascading two OR gates inverts the output on row 111",
          "CIE 0478 logic-circuit mark schemes restrict circuits to standard 1-input NOT and 2-input gates",
          "A 3-input OR gate has a different truth table from (A OR B) OR C",
          "Three-input OR gates are mathematically impossible to construct in silicon",
        ],
        answerIndex: 1,
        hints: [
          "Compare `(A OR B)` ORed with `C` mathematically: `OR` is associative, so the truth table is identical.",
          "Why then does Cambridge specify standard gate symbols with 1 (`NOT`) or 2 inputs in Syllabus Section 10?",
        ],
        explanation:
          "Although `(A OR B)` ORed with `C` has the same truth table, **CIE 0478 Syllabus 10** explicitly defines all non-`NOT` gates as **2-input** gates and marks each 2-input gate stage separately on circuit diagrams.",
      },
      {
        id: "logic-gates-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "universal-xor-gates",
        question:
          "A universal-gate circuit computes `X = (A NOR B) NOR (A NOR B)`. Which single standard 2-input gate has the exact same 4-row truth table as `X`?",
        options: [
          "OR gate (A OR B)",
          "NAND gate (A NAND B)",
          "XOR gate (A XOR B)",
          "AND gate (A AND B)",
        ],
        answerIndex: 0,
        hints: [
          "Let `P = A NOR B = NOT (A OR B)`.",
          "Notice the second `NOR` gate has both inputs tied to `P`: what is `P NOR P`?",
          "`P NOR P = NOT (P OR P) = NOT P` — substitute `P = NOT (A OR B)`!",
        ],
        explanation:
          "Letting `P = A NOR B = NOT (A OR B)`, the second gate computes `P NOR P = NOT P = NOT (NOT (A OR B)) = A OR B`! Tying a `NOR` gate's inputs together creates an inverter that cancels the first `NOR` bubble.",
      },
    ],
  },
  {
    id: "logic-gates-m3",
    title: "Control Systems, Equivalence & Debugging — MCQ Paper 3",
    questions: [
      {
        id: "logic-gates-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "basic-gates",
        question:
          "Signal `A = 0` passes through one `NOT` gate and immediately through a second `NOT` gate in series (`X = NOT (NOT A)`). What is `X`?",
        options: [
          "1, because two NOT gates act like an OR gate",
          "0, because inverting 0 gives 1 and inverting 1 restores 0",
          "Undefined, because two NOT gates cannot be connected in series",
          "1, because any circuit with NOT gates outputs 1 for input 0",
        ],
        answerIndex: 1,
        hints: [
          "Trace one gate at a time: after the first `NOT` gate, `0` becomes `1`.",
          "What does the second `NOT` gate do to `1`?",
        ],
        explanation:
          "Double negation cancels out (`NOT [NOT A] = A`): `0 → 1 → 0`, restoring the original `0`.",
      },
      {
        id: "logic-gates-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "universal-xor-gates",
        question:
          "Which 2-input logic gate outputs `1` for `(0, 0)`, `(0, 1)`, and `(1, 0)`, and outputs `0` **only** for `(1, 1)`?",
        options: ["NAND gate", "XOR gate", "NOR gate", "OR gate"],
        answerIndex: 0,
        hints: [
          "Write the 4-bit output column: `1, 1, 1, 0`.",
          "Notice this is the exact bit-flip of `0, 0, 0, 1` (`AND`).",
        ],
        explanation:
          "`NAND` (`NOT (A AND B)`) outputs `1, 1, 1, 0`. `OR` outputs `0, 1, 1, 1`, `NOR` outputs `1, 0, 0, 0`, and `XOR` outputs `0, 1, 1, 0`.",
      },
      {
        id: "logic-gates-m3-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "logic-expressions-problems",
        question:
          "In a reservoir control system, water-level sensor `L` outputs `L = 1` when water depth is `≥ 2 m` and `L = 0` when water depth is `< 2 m`. How must the condition **\"water depth is below 2 m\"** be written inside a CIE logic expression?",
        options: ["NOT L", "L AND 0", "L OR 1", "L"],
        answerIndex: 0,
        hints: [
          "When water depth is below `2 m`, the sensor produces `L = 0`.",
          "What operator turns `0` into `1` (`TRUE`) when that condition holds?",
        ],
        explanation:
          "Because `< 2 m` corresponds to `L = 0`, we must write `NOT L` so the sub-expression evaluates to `1` (`TRUE`) whenever `L = 0`. Writing bare `L` triggers when water is `≥ 2 m` instead!",
      },
      {
        id: "logic-gates-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "logic-expressions-problems",
        question:
          "A neonatal incubator warning buzzer `X` sounds (`X = 1`) if:\n- temperature is **out of range** (`T = 0`, where `T = 1` means within range), **OR**\n- humidity is **too low** (`H = 0`, where `H = 1` means normal) **AND** the unit is running on **battery backup** (`B = 1`, where `B = 0` means mains power).\n\nWhich CIE logic expression represents `X`?",
        options: [
          "X = (NOT T) AND ((NOT H) OR B)",
          "X = T OR (H AND B)",
          "X = (NOT T) OR ((NOT H) AND B)",
          "X = ((NOT T) OR (NOT H)) AND B",
        ],
        answerIndex: 2,
        hints: [
          "Check each sensor's `0/1` polarity: out-of-range temperature is `T = 0` (`NOT T`), low humidity is `H = 0` (`NOT H`), battery backup is `B = 1` (`B`).",
          "Notice that out-of-range temperature **alone** must trigger `X = 1` even on mains power (`B = 0`), so `(NOT T)` sits outside the `AND B` bracket!",
        ],
        explanation:
          "`T = 0` gives `NOT T`, while `H = 0` with `B = 1` gives `((NOT H) AND B)`, joined by `OR`: `X = (NOT T) OR ((NOT H) AND B)`. Grouping `((NOT T) OR (NOT H)) AND B` would silence temperature alarms whenever `B = 0`!",
      },
      {
        id: "logic-gates-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "logic-circuits-tables",
        question:
          "A lift motor `X` is controlled by `X = D AND ((NOT W) OR S)`, where `D` = doors closed, `W` = overweight sensor, and `S` = service key. What is `X` when `D = 1`, `W = 1`, and `S = 0`?",
        options: [
          "X = 1, because D = 1 and W = 1",
          "X = 1, because D AND NOT W evaluates to 1",
          "X = 0, because D = 1 is inverted before the AND gate",
          "X = 0, because NOT W = 0 and S = 0, making ((NOT W) OR S) = 0",
        ],
        answerIndex: 3,
        hints: [
          "Substitute `W = 1` into `NOT W` to get `0`.",
          "Now compute `(0 OR 0)` inside the bracket, and `AND` the result with `D = 1`.",
        ],
        explanation:
          "With `W = 1` and `S = 0`, `(NOT W) OR S = 0 OR 0 = 0`, and `1 AND 0 = 0` (the overweight lift safely refuses to move!).",
      },
      {
        id: "logic-gates-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "logic-circuits-tables",
        question:
          "What is the 4-row truth-table output column (ordered `00, 01, 10, 11`) for `X = NOT (A XOR B)`?",
        options: ["1, 1, 1, 0", "1, 0, 0, 0", "1, 0, 0, 1", "0, 1, 1, 0"],
        answerIndex: 2,
        hints: [
          "First write down `A XOR B` for `00, 01, 10, 11`: `0, 1, 1, 0`.",
          "Now apply `NOT` to invert all four bits.",
        ],
        explanation:
          "Inverting `A XOR B` (`0, 1, 1, 0`) produces `1, 0, 0, 1` — an **equality detector** (`X = 1` whenever `A = B`)! Leaving `0, 1, 1, 0` uninverted forgets the outer `NOT`.",
      },
      {
        id: "logic-gates-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "logic-expressions-problems",
        question:
          "In a circuit diagram, inputs `A` and `B` feed an `AND` gate; inputs `B` and `C` (via a shared branch from `B`) feed a `NOR` gate; and the outputs of those two gates feed an `XOR` gate to produce `X`. Which CIE logic expression matches this circuit?",
        options: [
          "X = (A NAND B) XOR (B OR C)",
          "X = A AND (B XOR (B NOR C))",
          "X = (A AND B) XOR (B NOR C)",
          "X = (A AND B) OR (B NOR C)",
        ],
        answerIndex: 2,
        hints: [
          "Top gate output: `P = (A AND B)`. Bottom gate output: `Q = (B NOR C)`.",
          "Join `P` and `Q` with the final gate (`XOR`).",
        ],
        explanation:
          "The two first-stage gates produce `(A AND B)` and `(B NOR C)`, which enter the final `XOR` gate to give `X = P XOR Q` where `P = (A AND B)` and `Q = (B NOR C)`.",
      },
      {
        id: "logic-gates-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "logic-circuits-tables",
        question:
          "Evaluate `X = (A AND B) XOR (B NOR C)` for the input combination `A = 1`, `B = 0`, `C = 0`.",
        options: [
          "X = 1, because A AND B = 0 and B NOR C = 1, so 0 XOR 1 = 1",
          "X = 0, because both gates output 1, so 1 XOR 1 = 0",
          "X = 1, because A AND B = 1 and B NOR C = 0, so 1 XOR 0 = 1",
          "X = 0, because both gates output 0",
        ],
        answerIndex: 0,
        hints: [
          "Compute `P = 1 AND 0`.",
          "Compute `Q = 0 NOR 0 = NOT (0 OR 0)`, then evaluate `P XOR Q`.",
        ],
        explanation:
          "For `(1, 0, 0)`, `A AND B = 1 AND 0 = 0`, while `B NOR C = 0 NOR 0 = 1`. Since `0` and `1` differ, `0 XOR 1 = 1`.",
      },
      {
        id: "logic-gates-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "universal-xor-gates",
        question:
          "A data bit `D` and a constant `1` are fed into an `XOR` gate (`X = D XOR 1`). How is output `X` related to `D`?",
        options: [
          "X equals D unchanged",
          "X equals NOT D (0 becomes 1, and 1 becomes 0)",
          "X is always 1 regardless of D",
          "X is always 0 regardless of D",
        ],
        answerIndex: 1,
        hints: [
          "Test both values of `D`: when `D = 0`, what is `0 XOR 1`?",
          "When `D = 1`, what is `1 XOR 1`?",
        ],
        explanation:
          "When `D = 0`, `0 XOR 1 = 1`; when `D = 1`, `1 XOR 1 = 0`. Hence `D XOR 1 = NOT D`! (Conversely, `D XOR 0 = D`, making `XOR` a controllable inverter in hardware and cryptography.)",
      },
      {
        id: "logic-gates-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "basic-gates",
        question:
          "A data wire `D` and a constant `0` wire are fed into an `AND` gate (`P = D AND 0`) and an `OR` gate (`Q = D OR 0`). What are `P` and `Q` for any binary value of `D`?",
        options: [
          "P = 0 always, and Q = D",
          "P = NOT D, and Q = D",
          "P = 0 always, and Q = 1 always",
          "P = D, and Q = 0 always",
        ],
        answerIndex: 0,
        hints: [
          "Test `D = 0` and `D = 1` in `D AND 0`: can an `AND` gate ever output `1` if one input is `0`?",
          "Now test `D = 0` (`0 OR 0 = 0`) and `D = 1` (`1 OR 0 = 1`) in `D OR 0`.",
        ],
        explanation:
          "`D AND 0` masks/clears the bit to `0` regardless of `D`, whereas `D OR 0` passes `D` through unchanged (`0 OR 0 = 0`, `1 OR 0 = 1`).",
      },
      {
        id: "logic-gates-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "logic-expressions-problems",
        question:
          "A bank vault lock `X` opens (`X = 1`) **if and only if**:\n- manager keycard `A` is valid (`A = 1`) **AND** biometric scan `B` is valid (`B = 1`), **AND**\n- the silent panic button `P` is **not** pressed (`P = 0`, where `P = 1` means pressed).\n\nIn the 8-row truth table for `(A, B, P)`, how many rows have `X = 1`?",
        options: [
          "2 rows",
          "4 rows",
          "3 rows",
          "1 row",
        ],
        answerIndex: 3,
        hints: [
          "Write the expression: combine `(A AND B)` with `(NOT P)` using `AND`.",
          "For chained `AND` gates to output `1`, **every single term** must equal `1` at the same time!",
          "Which values of `A`, `B`, and `P` make `A = 1`, `B = 1`, and `NOT P = 1`?",
        ],
        explanation:
          "Combining `(A AND B)` with `(NOT P)` via `AND` equals `1` only when `A = 1`, `B = 1`, and `NOT P = 1` (`P = 0`) simultaneously — which uniquely specifies the single row `(1, 1, 0)` (`1` row out of `8`).",
      },
      {
        id: "logic-gates-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "logic-circuits-tables",
        question:
          "What is the 8-bit output column from `000` (first bit) to `111` (eighth bit) for `X = (A OR (NOT B)) NAND C`?",
        options: ["11101010", "10101010", "10111010", "01000101"],
        answerIndex: 2,
        hints: [
          "First find `P = A OR (NOT B)`: `P = 0` **only** when `A = 0` and `B = 1` (rows `010` and `011`), so `P = 1, 1, 0, 0, 1, 1, 1, 1`.",
          "Next apply `X = P NAND C`: `X = 0` **only** where `P = 1` **AND** `C = 1`!",
          "Check the four odd rows (`001, 011, 101, 111`): `P = 1` on `001, 101, 111`, while `P = 0` on `011`.",
        ],
        explanation:
          "Every even row (`C = 0`) gives `P NAND 0 = 1`. Among the odd rows (`C = 1`), `011` has `P = 0` so `0 NAND 1 = 1`, while `001, 101, 111` have `P = 1` so `1 NAND 1 = 0`. Combining rows `000..111` gives `10111010`!",
      },
      {
        id: "logic-gates-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "logic-circuits-tables",
        question:
          "A 3-input truth table for `(A, B, C)` has output `X = 1` on **only two** rows: `(0, 0, 1)` and `(1, 1, 1)`, and `X = 0` on all other 6 rows. Which compact CIE logic expression matches this truth table?",
        options: [
          "X = (A NOR B) AND C",
          "X = (NOT (A XOR B)) AND C",
          "X = (A XOR B) AND C",
          "X = (A AND B) OR C",
        ],
        answerIndex: 1,
        hints: [
          "Compare `(0, 0, 1)` and `(1, 1, 1)`: in both rows `C = 1`, and what do `A` and `B` have in common?",
          "`A` and `B` are **equal** (`0 = 0` or `1 = 1`), which is `NOT [A XOR B]`!",
          "Check `C = 0` rows (`X = 0`) and `(0, 1, 1)` / `(1, 0, 1)` (`X = 0`) to confirm.",
        ],
        explanation:
          "`NOT [A XOR B]` equals `1` precisely when `A = B` (`00` or `11`), and `AND C` restricts `X = 1` to `C = 1`, leaving **only** `001` and `111`. Using `(A NOR B)` with `AND C` would miss `111`, while `(A XOR B)` with `AND C` would select `011` and `101`.",
      },
      {
        id: "logic-gates-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "logic-expressions-problems",
        question:
          "An engineer reviews the circuit `X = (A AND B) OR (A AND (NOT B))` across all 4 input pairs `(00, 01, 10, 11)`. What is `X` equivalent to?",
        options: [
          "X = B alone",
          "X = A alone",
          "Output X is always 1",
          "X = A XOR B",
        ],
        answerIndex: 1,
        hints: [
          "Test `A = 0` (rows `00` and `01`): `[0 AND B] OR [0 AND NOT B] = 0 OR 0 = 0`.",
          "Test `A = 1` (rows `10` and `11`): `[1 AND B] OR [1 AND NOT B]` reduces to `B` ORed with `NOT B`.",
          "Since one of `B` and `NOT B` is always `1`, `B` ORed with `NOT B` equals `1`!",
        ],
        explanation:
          "Factoring out `A` gives `A AND [B OR NOT B] = A AND 1 = A` (`0, 0, 1, 1`). Regardless of `B`, output `X` always equals input `A`, eliminating three gates!",
      },
      {
        id: "logic-gates-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "universal-xor-gates",
        question:
          "Using **only** 2-input `NAND` gates, which expression correctly builds an inclusive **`OR` gate** (`X = A OR B`, column `0, 1, 1, 1`)?",
        options: [
          "X = (A NAND B) NAND A",
          "X = A NAND (B NAND B)",
          "X = (A NAND B) NAND (A NAND B)",
          "X = (A NAND A) NAND (B NAND B)",
        ],
        answerIndex: 3,
        hints: [
          "Recall `A NAND A = NOT A` and `B NAND B = NOT B`.",
          "Recall from De Morgan's Law that `[NOT A] NAND [NOT B] = NOT ([NOT A] AND [NOT B]) = A OR B`!",
          "Test `(0, 0)` → `1 NAND 1 = 0`, and `(0, 1)` → `1 NAND 0 = 1`.",
        ],
        explanation:
          "Letting `P = A NAND A = NOT A` and `Q = B NAND B = NOT B`, `P NAND Q` computes `NOT ([NOT A] AND [NOT B]) = A OR B` (`0, 1, 1, 1`). By contrast, `(A NAND B)` NANDed with `(A NAND B)` builds `A AND B` (`0, 0, 0, 1`).",
      },
    ],
  },
];
