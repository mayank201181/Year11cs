import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "logic-gates-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "basic-gates",
      question:
        "A single-input `NOT` gate receives input `A = 1`. Give the single output bit (`0` or `1`).",
      answer: { type: "text", accept: ["0"], display: "0" },
      traps: [
        {
          spec: { type: "text", accept: ["1"] },
          feedback: "A NOT gate inverts its input: 1 becomes 0, and 0 becomes 1.",
        },
      ],
      hints: ["A `NOT` gate flips `1 → 0` and `0 → 1`."],
      solution: ["Input `A = 1` passes through the inverter (`NOT` gate), producing `NOT 1 = 0`."],
      commonError: "Leaving the bit unchanged as 1 as if the triangle had no output bubble.",
    },
    {
      id: "logic-gates-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "basic-gates",
      question:
        "Which 2-input CIE logic gate outputs `0` on `(0, 0)`, `(0, 1)`, and `(1, 0)`, and outputs `1` **only** on `(1, 1)`?",
      options: ["OR gate", "AND gate", "XOR gate", "NOR gate"],
      answerIndex: 1,
      hints: ["Output column `0, 0, 0, 1` means **both** inputs must be `1`."],
      explanation:
        "An `AND` gate outputs `1` if and only if `A = 1` and `B = 1` (`0, 0, 0, 1`). An `OR` gate outputs `0, 1, 1, 1`, while `XOR` outputs `0, 1, 1, 0`.",
    },
    {
      id: "logic-gates-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "universal-xor-gates",
      question:
        "Complete the 4-row truth table for `X = A XOR B` across `(0, 0)`, `(0, 1)`, `(1, 0)`, `(1, 1)`. Give the 4-bit output column from top (`00`) to bottom (`11`) as a 4-character string of `0`s and `1`s, e.g. `0001`.",
      answer: { type: "text", accept: ["0110", "0 1 1 0", "0, 1, 1, 0", "0,1,1,0"], display: "0110" },
      traps: [
        {
          spec: { type: "text", accept: ["0111", "0 1 1 1", "0, 1, 1, 1"] },
          feedback: "0111 is inclusive OR! On row (1, 1), XOR outputs 0 because the two inputs are equal.",
        },
        {
          spec: { type: "text", accept: ["1001", "1 0 0 1", "1, 0, 0, 1"] },
          feedback: "1001 is NOT (A XOR B) — XOR outputs 1 when the inputs differ (01 and 10).",
        },
      ],
      hints: ["`XOR` outputs `1` when `A` and `B` **differ** (`01` and `10`), and `0` when they are **equal** (`00` and `11`)."],
      solution: [
        "`0 XOR 0 = 0`, `0 XOR 1 = 1`, `1 XOR 0 = 1`, `1 XOR 1 = 0`.",
        "Reading from `00` to `11` gives `0110`.",
      ],
      commonError: "Writing 1 for row (1, 1), confusing Exclusive-OR (0110) with Inclusive-OR (0111).",
    },
    {
      id: "logic-gates-quiz-q04",
      kind: "short",
      difficulty: "core",
      guideRef: "universal-xor-gates",
      question:
        "A single 2-input CIE logic gate outputs `1` for `(0, 0)`, `(0, 1)`, and `(1, 0)`, and outputs `0` for `(1, 1)`. Give the exact CIE gate name (e.g. `AND`, `OR`, `NAND`, `NOR`, `XOR`).",
      answer: { type: "text", accept: ["NAND", "NAND gate"], display: "NAND" },
      traps: [
        {
          spec: { type: "text", accept: ["NOR", "NOR gate"] },
          feedback: "NOR has column 1000 (1 only on 00). Column 1110 is the inverse of AND (0001), which is NAND!",
        },
        {
          spec: { type: "text", accept: ["OR", "OR gate"] },
          feedback: "OR outputs 0 on (0, 0) and 1 on (1, 1) (0111). Here (0, 0) gives 1 and (1, 1) gives 0!",
        },
      ],
      hints: [
        "Write the 4-bit column: `1, 1, 1, 0`.",
        "Compare `1, 1, 1, 0` with `A AND B` (`0, 0, 0, 1`): every bit is inverted!",
      ],
      solution: [
        "The output column `1, 1, 1, 0` is `NOT (A AND B)`, which is a **`NAND`** gate.",
      ],
      commonError: "Confusing NAND (1110) with NOR (1000).",
    },
    {
      id: "logic-gates-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "logic-circuits-tables",
      question:
        "Evaluate `X = (A NAND B) XOR C` when `A = 1`, `B = 1`, and `C = 1`. Give the single output bit (`0` or `1`).",
      answer: { type: "text", accept: ["1"], display: "1" },
      traps: [
        {
          spec: { type: "text", accept: ["0"] },
          feedback: "Check the first gate carefully: 1 NAND 1 = 0 (not 1!), and then 0 XOR 1 = 1.",
        },
      ],
      hints: [
        "First evaluate `P = 1 NAND 1`: remember `1 AND 1 = 1`, then invert the bit to `0`.",
        "Now evaluate `X = P XOR 1 = 0 XOR 1`.",
      ],
      solution: [
        "Intermediate wire `P = 1 NAND 1 = NOT (1 AND 1) = 0`.",
        "Final gate: `X = 0 XOR 1 = 1` because `0` and `1` differ.",
      ],
      commonError: "Treating 1 NAND 1 as 1 and then getting 1 XOR 1 = 0.",
    },
    {
      id: "logic-gates-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "logic-circuits-tables",
      question:
        "In the 3-input circuit `X = (A OR B) NOR C`, what is the output `X` when `(A, B, C) = (0, 0, 0)`?",
      options: [
        "0, because all three inputs are 0",
        "0, because A OR B equals 0",
        "1, because A OR B = 0 and 0 NOR 0 = 1",
        "1, because A OR B = 1 on (0, 0)",
      ],
      answerIndex: 2,
      hints: [
        "First find `P = 0 OR 0 = 0`.",
        "Next feed `P = 0` and `C = 0` into the `NOR` gate: what is `NOT (0 OR 0)`?",
      ],
      explanation:
        "On `(0, 0, 0)`, `A OR B = 0`, and feeding `0` and `0` into the `NOR` gate gives `0 NOR 0 = NOT (0 OR 0) = 1`. Assuming all-zero inputs must produce a `0` output ignores the inversion bubble on `NOR`!",
    },
    {
      id: "logic-gates-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "logic-circuits-tables",
      question:
        "Complete the 4-row truth table for `X = (NOT A) NOR B` with `(A, B)` ordered `00, 01, 10, 11`. Give the 4-bit output column from top (`00`) to bottom (`11`) as a 4-character string of `0`s and `1`s.",
      answer: { type: "text", accept: ["0010", "0 0 1 0", "0, 0, 1, 0", "0,0,1,0"], display: "0010" },
      traps: [
        {
          spec: { type: "text", accept: ["1101", "1 1 0 1", "1, 1, 0, 1"] },
          feedback: "1101 is (NOT A) OR B — don't forget to invert every bit for the NOR gate!",
        },
        {
          spec: { type: "text", accept: ["0100", "0 1 0 0", "0, 1, 0, 0"] },
          feedback: "Check which input is inverted: NOT A = 0 when A = 1, and B = 0 on row 10 (the 3rd row, not the 2nd).",
        },
      ],
      hints: [
        "A `NOR` gate outputs `1` **only** when **both** of its inputs equal `0`.",
        "We need `NOT A = 0` (meaning `A = 1`) **and** `B = 0` — which single row `(A, B)` is that?",
      ],
      solution: [
        "Helper column `P = NOT A` across `00, 01, 10, 11` is `1, 1, 0, 0`.",
        "Apply `X = P NOR B`: row `00` → `1 NOR 0 = 0`; row `01` → `1 NOR 1 = 0`; row `10` → `0 NOR 0 = 1`; row `11` → `0 NOR 1 = 0`.",
        "Output column: `0010`.",
      ],
      commonError: "Forgetting the output bubble on NOR and leaving the OR column 1101.",
    },
    {
      id: "logic-gates-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "logic-expressions-problems",
      question:
        "A warehouse sprinkler `X` activates (`X = 1`) if smoke is detected (`S = 1`, `0` = clear) **AND** either heat is high (`H = 1`, `0` = normal) **OR** the manual alarm is pulled (`M = 1`, `0` = not pulled). Which CIE logic expression represents `X`?",
      options: [
        "X = S AND (H OR M)",
        "X = (S AND H) OR M",
        "X = S OR (H AND M)",
        "X = S AND (H XOR M)",
      ],
      answerIndex: 0,
      hints: [
        "Smoke (`S = 1`) is mandatory in every activation case, so `S AND (...)` wraps the whole expression.",
        "If **both** heat is high **and** the manual alarm is pulled, the sprinkler must definitely still activate — so use inclusive `OR`, not `XOR`!",
      ],
      explanation:
        "Smoke must be present alongside `(H OR M)`, giving `X = S AND (H OR M)`. Writing `[S AND H] OR M` would let `M = 1` trigger sprinklers without smoke (`S = 0`), while `XOR` would dangerously turn sprinklers OFF if both `H = 1` and `M = 1`!",
    },
    {
      id: "logic-gates-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "logic-expressions-problems",
      question:
        "Evaluate the unbracketed Boolean expression `X = 0 AND 1 OR NOT 0` using standard operator precedence (`NOT` → `AND` → `OR`). Give the single output bit (`0` or `1`).",
      answer: { type: "text", accept: ["1"], display: "1" },
      traps: [
        {
          spec: { type: "text", accept: ["0"] },
          feedback: "Don't let the leading '0 AND ...' fool you: AND binds before OR, so X = (0 AND 1) OR (NOT 0) = 0 OR 1 = 1!",
        },
      ],
      hints: [
        "Add brackets according to precedence (`NOT` first, then `AND`, then `OR`): `(0 AND 1) OR (NOT 0)`.",
        "Evaluate `0 AND 1 = 0` and `NOT 0 = 1`, then apply `OR`.",
      ],
      solution: [
        "Step 1 (`NOT`): `NOT 0 = 1`.",
        "Step 2 (`AND`): `0 AND 1 = 0`.",
        "Step 3 (`OR`): `0 OR 1 = 1`.",
      ],
      commonError: "Grouping 0 AND (1 OR NOT 0) = 0 instead of (0 AND 1) OR (NOT 0) = 1.",
    },
    {
      id: "logic-gates-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "universal-xor-gates",
      marks: 3,
      question:
        "Compare an `OR` gate and a `NOR` gate on CIE 0478 by stating **one** visual difference between their circuit symbols and **two** differences in their 2-input truth-table outputs.",
      hints: [
        "How do you modify the curved `OR` shield symbol to draw a `NOR` gate?",
        "Compare `(0, 0)` and `(0, 1)` / `(1, 0)` / `(1, 1)` across both truth tables.",
      ],
      modelAnswer:
        "1. Symbol: a NOR gate adds a small inversion circle (bubble) at the output tip of the curved OR shield, whereas an OR gate has no bubble.\n2. When both inputs are zero (00), OR outputs 0 whereas NOR outputs 1.\n3. Whenever at least one input is high (01, 10, or 11), OR outputs 1 whereas NOR inverts the result to output 0.",
      markScheme: [
        {
          point: "NOR symbol has a small inversion circle / bubble at its output tip (OR has no bubble).",
          keywords: ["circle", "bubble"],
        },
        {
          point: "On input row (0, 0) / both inputs zero, OR outputs 0 whereas NOR outputs 1.",
          keywords: ["00", "0, 0", "both inputs are zero", "both inputs are 0"],
        },
        {
          point: "When at least one input is 1 (01, 10, 11), OR outputs 1 whereas NOR inverts the output to 0.",
          keywords: ["inverts", "opposite", "01, 10", "at least one input"],
        },
      ],
      commonError: "Saying NOR has a double curved input line (that is XOR, not NOR!).",
    },
  ],

  papers: [
    {
      id: "logic-gates-p1",
      title: "CIE 0478 Paper 2 Practice — Logic Gates & Truth Tables (Paper 1)",
      questions: [
        {
          id: "logic-gates-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "basic-gates",
          question:
            "Give the 4-bit output column from top (`00`) to bottom (`11`) for a 2-input `AND` gate (`X = A AND B`) as a 4-character string of `0`s and `1`s, e.g. `0110`.",
          answer: { type: "text", accept: ["0001", "0 0 0 1", "0, 0, 0, 1", "0,0,0,1"], display: "0001" },
          traps: [
            {
              spec: { type: "text", accept: ["0111", "0 1 1 1", "0, 1, 1, 1"] },
              feedback: "0111 is an OR gate! An AND gate outputs 1 ONLY when both A = 1 and B = 1 (row 11).",
            },
            {
              spec: { type: "text", accept: ["1110", "1 1 1 0", "1, 1, 1, 0"] },
              feedback: "1110 is a NAND gate (inverted AND).",
            },
          ],
          hints: ["An `AND` gate outputs `1` only on the bottom row `(1, 1)`."],
          solution: [
            "`0 AND 0 = 0`, `0 AND 1 = 0`, `1 AND 0 = 0`, `1 AND 1 = 1` → `0001`.",
          ],
          commonError: "Writing 0111 (OR) instead of 0001 (AND).",
        },
        {
          id: "logic-gates-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "universal-xor-gates",
          question:
            "Give the 4-bit output column from top (`00`) to bottom (`11`) for a 2-input `NOR` gate (`X = A NOR B`) as a 4-character string of `0`s and `1`s.",
          answer: { type: "text", accept: ["1000", "1 0 0 0", "1, 0, 0, 0", "1,0,0,0"], display: "1000" },
          traps: [
            {
              spec: { type: "text", accept: ["0111", "0 1 1 1", "0, 1, 1, 1"] },
              feedback: "0111 is OR — invert every bit for NOR to get 1000!",
            },
            {
              spec: { type: "text", accept: ["1110", "1 1 1 0", "1, 1, 1, 0"] },
              feedback: "1110 is NAND — NOR outputs 1 ONLY when both inputs are 0 (row 00).",
            },
          ],
          hints: ["`A NOR B = NOT (A OR B)`: flip every bit of `0111`."],
          solution: [
            "`A OR B` across `00, 01, 10, 11` is `0, 1, 1, 1`.",
            "Inverting each bit gives `A NOR B` = `1000`.",
          ],
          commonError: "Writing 1110 (NAND) instead of 1000 (NOR).",
        },
        {
          id: "logic-gates-p1-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "logic-circuits-tables",
          question:
            "How many binary input rows are in a complete CIE 0478 truth table for a circuit with **3 inputs** `(A, B, C)`? Give your answer as a single integer.",
          answer: { type: "number", value: 8 },
          traps: [
            {
              spec: { type: "number", value: 6 },
              feedback: "Don't multiply 3 × 2 = 6! With n = 3 binary inputs, there are 2³ = 2 × 2 × 2 = 8 rows.",
            },
            {
              spec: { type: "number", value: 9 },
              feedback: "It is 2³ = 8 (each of the 3 inputs has 2 choices), not 3² = 9!",
            },
          ],
          hints: ["Use `2ⁿ` with `n = 3` (`000` through `111`)."],
          solution: ["`2³ = 2 × 2 × 2 = 8` rows (`000, 001, 010, 011, 100, 101, 110, 111`)."],
          commonError: "Calculating 3 × 2 = 6 instead of 2³ = 8.",
        },
        {
          id: "logic-gates-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "basic-gates",
          question:
            "Complete the 4-row truth table for `X = (NOT A) AND (NOT B)` across `(0, 0)`, `(0, 1)`, `(1, 0)`, `(1, 1)`. Give the 4-bit output column from top (`00`) to bottom (`11`) as a 4-character string of `0`s and `1`s.",
          answer: { type: "text", accept: ["1000", "1 0 0 0", "1, 0, 0, 0", "1,0,0,0"], display: "1000" },
          traps: [
            {
              spec: { type: "text", accept: ["1110", "1 1 1 0", "1, 1, 1, 0"] },
              feedback: "1110 is NOT (A AND B)! Here each input is inverted BEFORE the AND gate, so X = 1 only when A = 0 and B = 0.",
            },
            {
              spec: { type: "text", accept: ["0001", "0 0 0 1", "0, 0, 0, 1"] },
              feedback: "0001 is A AND B without the NOT gates on A and B.",
            },
          ],
          hints: [
            "Write `NOT A` (`1, 1, 0, 0`) and `NOT B` (`1, 0, 1, 0`).",
            "Now `AND` those two columns row by row.",
          ],
          solution: [
            "Row `00`: `1 AND 1 = 1`.",
            "Row `01`: `1 AND 0 = 0`; row `10`: `0 AND 1 = 0`; row `11`: `0 AND 0 = 0`.",
            "Output column: `1000` (by De Morgan's Law, `(NOT A) AND (NOT B) = A NOR B`!).",
          ],
          commonError: "Assuming (NOT A) AND (NOT B) equals A NAND B (1110) instead of A NOR B (1000).",
        },
        {
          id: "logic-gates-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "universal-xor-gates",
          question:
            "Evaluate `X = (A XOR B) OR (A NAND B)` when `A = 1` and `B = 1`. Give the single output bit (`0` or `1`).",
          answer: { type: "text", accept: ["0"], display: "0" },
          traps: [
            {
              spec: { type: "text", accept: ["1"] },
              feedback: "When A = 1 and B = 1, BOTH 1 XOR 1 = 0 (equal inputs) AND 1 NAND 1 = 0 (both 1), so 0 OR 0 = 0!",
            },
          ],
          hints: [
            "Evaluate `1 XOR 1` (`0` because the inputs match) and `1 NAND 1` (`0` because both are `1`).",
            "Combine the two `0`s with `OR`.",
          ],
          solution: [
            "`P = 1 XOR 1 = 0` (inputs are equal).",
            "`Q = 1 NAND 1 = NOT (1 AND 1) = 0`.",
            "`X = P OR Q = 0 OR 0 = 0`.",
          ],
          commonError: "Evaluating 1 XOR 1 as 1 or 1 NAND 1 as 1.",
        },
        {
          id: "logic-gates-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "universal-xor-gates",
          question:
            "Give the 4-bit output column from top (`00`) to bottom (`11`) for `X = (A NAND B) AND (A OR B)` as a 4-character string of `0`s and `1`s.",
          answer: { type: "text", accept: ["0110", "0 1 1 0", "0, 1, 1, 0", "0,1,1,0"], display: "0110" },
          traps: [
            {
              spec: { type: "text", accept: ["0111", "0 1 1 1", "0, 1, 1, 1"] },
              feedback: "Check row (1, 1): A NAND B = 0, so 0 AND 1 = 0!",
            },
            {
              spec: { type: "text", accept: ["1110", "1 1 1 0", "1, 1, 1, 0"] },
              feedback: "Check row (0, 0): A OR B = 0, so 1 AND 0 = 0!",
            },
          ],
          hints: [
            "Write `P = A NAND B` (`1, 1, 1, 0`) and `Q = A OR B` (`0, 1, 1, 1`).",
            "Compute `P AND Q` row by row.",
          ],
          solution: [
            "`P = A NAND B` gives `1, 1, 1, 0`; `Q = A OR B` gives `0, 1, 1, 1`.",
            "`P AND Q` gives `0, 1, 1, 0` (`0110`) — notice this builds an `XOR` gate from `NAND`, `AND`, and `OR`!",
          ],
          commonError: "Missing either row 00 (where OR = 0) or row 11 (where NAND = 0).",
        },
        {
          id: "logic-gates-p1-q07",
          kind: "written",
          difficulty: "core",
          guideRef: "basic-gates",
          marks: 3,
          question:
            "Describe the exact shape features an examiner looks for when marking hand-drawn CIE 0478 symbols for (a) a `NOT` gate, (b) an `AND` gate, and (c) an `OR` gate.",
          hints: [
            "Which gate is a triangle + output circle?",
            "How does the left (input) edge of `AND` differ from the left edge of `OR`?",
          ],
          modelAnswer:
            "(a) NOT gate: a single-input triangle pointing right with a small inversion circle (bubble) touching its output tip.\n(b) AND gate: a 2-input D-shaped body with a flat vertical back on the left and a smooth semicircular front, with no output bubble.\n(c) OR gate: a 2-input shield body with a concave curved back on the left tapering to a pointed front on the right, with no output bubble.",
          markScheme: [
            {
              point: "NOT gate: single-input triangle pointing right PLUS a small circle / bubble at the output.",
              keywords: ["triangle"],
            },
            {
              point: "AND gate: flat / straight vertical input back curving into a semicircular D-shape (no bubble).",
              keywords: ["flat", "d-shape", "d-shaped", "semicircular"],
            },
            {
              point: "OR gate: curved / concave input back tapering to a pointed tip on the right (no bubble).",
              keywords: ["curved", "concave", "pointed"],
            },
          ],
          commonError: "Forgetting the small circle on NOT, or drawing curved/rounded backs indiscriminately so AND and OR look identical.",
        },
        {
          id: "logic-gates-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "logic-circuits-tables",
          question:
            "Evaluate `X = ((NOT A) AND B) OR (B XOR C)` when `A = 0`, `B = 1`, and `C = 1`. Give the single output bit (`0` or `1`).",
          answer: { type: "text", accept: ["1"], display: "1" },
          traps: [
            {
              spec: { type: "text", accept: ["0"] },
              feedback: "Even though B XOR C = 1 XOR 1 = 0, check the left bracket: (NOT 0) AND 1 = 1 AND 1 = 1, and 1 OR 0 = 1!",
            },
          ],
          hints: [
            "Left bracket `P = (NOT 0) AND 1 = 1 AND 1 = 1`.",
            "Right bracket `Q = 1 XOR 1 = 0`. Now compute `P OR Q`.",
          ],
          solution: [
            "`NOT A = NOT 0 = 1`, so `P = 1 AND 1 = 1`.",
            "`Q = B XOR C = 1 XOR 1 = 0`.",
            "`X = P OR Q = 1 OR 0 = 1`.",
          ],
          commonError: "Forgetting to invert A = 0 to 1 in the left bracket.",
        },
        {
          id: "logic-gates-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "logic-circuits-tables",
          question:
            "Give the complete 8-bit output column from top (`000`) to bottom (`111`) for `X = (A AND B) OR C` as an 8-character string of `0`s and `1`s, e.g. `01101001`.",
          answer: { type: "text", accept: ["01010111", "0101 0111"], display: "01010111" },
          traps: [
            {
              spec: { type: "text", accept: ["01010101", "0101 0101"] },
              feedback: "Check row 110 (7th row): C = 0, BUT A = 1 and B = 1 so A AND B = 1, making X = 1!",
            },
            {
              spec: { type: "text", accept: ["00011111", "0001 1111"] },
              feedback: "Whenever C = 1 (all odd rows: 001, 011, 101, 111), OR C immediately makes X = 1!",
            },
          ],
          hints: [
            "`P = A AND B` equals `1` only on rows `110` and `111` (`00000011`).",
            "Column `C` is `01010101`. Take `P OR C` bit by bit!",
          ],
          solution: [
            "`P = A AND B` across `000..111` is `0, 0, 0, 0, 0, 0, 1, 1`.",
            "`C` across `000..111` is `0, 1, 0, 1, 0, 1, 0, 1`.",
            "`X = P OR C` gives `0, 1, 0, 1, 0, 1, 1, 1` → `01010111`.",
          ],
          commonError: "Missing row 110 where C = 0 but A AND B = 1.",
        },
        {
          id: "logic-gates-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "logic-circuits-tables",
          question:
            "Give the complete 8-bit output column from top (`000`) to bottom (`111`) for `X = (A XOR B) NOR C` as an 8-character string of `0`s and `1`s.",
          answer: { type: "text", accept: ["10000010", "1000 0010"], display: "10000010" },
          traps: [
            {
              spec: { type: "text", accept: ["01111101", "0111 1101"] },
              feedback: "01111101 is (A XOR B) OR C — invert every bit for the final NOR gate to get 10000010!",
            },
            {
              spec: { type: "text", accept: ["10000000", "1000 0000"] },
              feedback: "Check row 110 (7th row): 1 XOR 1 = 0 (not 1!), and then 0 NOR 0 = 1!",
            },
          ],
          hints: [
            "Work backwards from `NOR`: `P NOR C = 1` **only** when `P = 0` **and** `C = 0`!",
            "`P = A XOR B = 0` when `A = B` (`00x` and `11x`). Which of those rows also have `C = 0`?",
          ],
          solution: [
            "`P = A XOR B` across `000..111` is `0, 0, 1, 1, 1, 1, 0, 0`.",
            "`X = P NOR C` equals `1` only where both `P = 0` and `C = 0`, which occurs on `000` (row 1) and `110` (row 7).",
            "Full 8-bit column: `10000010`.",
          ],
          commonError: "Treating 1 XOR 1 on row 110 as 1 instead of 0, missing the second 1 in 10000010.",
        },
        {
          id: "logic-gates-p1-q11",
          kind: "written",
          difficulty: "core",
          guideRef: "logic-expressions-problems",
          marks: 3,
          question:
            "A chemical store extractor fan `X` (`1` = ON, `0` = OFF) uses three sensors:\n- Gas sensor `G`: `1` = gas detected, `0` = clear\n- Vent sensor `V`: `1` = roof vent open, `0` = shut\n- Temperature sensor `T`: `1` = safe limit, **`0` = overheated**\n\nThe fan switches ON if (gas is detected **and** the roof vent is open) **or** (the roof vent is open **and** the store is overheated). Write a CIE 0478 logic expression for `X` and state why a `NOT` operator is required on `T`.",
          hints: [
            "Check each required condition against `1` vs `0`: `G = 1`, `V = 1`, and overheated is `T = 0`!",
            "Explain how `NOT` transforms `0` into `1` (`TRUE`) when overheated.",
          ],
          modelAnswer:
            "Logic expression: X = (G AND V) OR (V AND (NOT T)).\nExplanation: When the chemical store overheats, sensor T outputs 0 rather than 1; applying NOT T inverts 0 into 1 (TRUE) so the AND gate with V can output 1.",
          markScheme: [
            {
              point: "First clause written as (G AND V).",
              keywords: ["g and v"],
            },
            {
              point: "Second clause combines V with NOT T, joined via OR: (G AND V) OR (V AND (NOT T)) or V AND (G OR NOT T).",
              keywords: ["not t"],
            },
            {
              point: "Explains that overheating gives T = 0, so NOT inverts 0 into 1 (TRUE).",
              keywords: ["inverts 0", "turns 0 into 1", "flips 0", "0 into 1", "0 becomes 1"],
            },
          ],
          commonError: "Writing (G AND V) OR (V AND T), which turns the fan ON when temperature is safe instead of overheated!",
        },
        {
          id: "logic-gates-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "logic-expressions-problems",
          question:
            "Using the chemical extractor expression `X = (G AND V) OR (V AND (NOT T))`, find the single output bit (`0` or `1`) when `G = 0`, `V = 1`, and `T = 0`.",
          answer: { type: "text", accept: ["1"], display: "1" },
          traps: [
            {
              spec: { type: "text", accept: ["0"] },
              feedback: "When T = 0, NOT T = 1! Combined with V = 1, the right bracket (1 AND 1) equals 1, so 0 OR 1 = 1.",
            },
          ],
          hints: [
            "Substitute into left bracket: `0 AND 1 = 0`.",
            "Substitute into right bracket: `1 AND (NOT 0) = 1 AND 1 = 1`, then take `0 OR 1`.",
          ],
          solution: [
            "Left clause: `G AND V = 0 AND 1 = 0`.",
            "Right clause: `V AND (NOT T) = 1 AND (NOT 0) = 1 AND 1 = 1`.",
            "`X = 0 OR 1 = 1`.",
          ],
          commonError: "Substituting T = 0 without inverting NOT 0 to 1.",
        },
        {
          id: "logic-gates-p1-q13",
          kind: "short",
          difficulty: "challenge",
          guideRef: "logic-circuits-tables",
          question:
            "Across all 8 rows (`000` to `111`) of the 3-input circuit `X = (A NAND B) XOR (B AND C)`, how many rows produce output `X = 1`? Give your answer as a single integer.",
          answer: { type: "number", value: 6 },
          traps: [
            {
              spec: { type: "number", value: 5 },
              feedback: "Check row 111 carefully: A NAND B = 0 and B AND C = 1, so 0 XOR 1 = 1 (making 6 rows in total, not 5)!",
            },
            {
              spec: { type: "number", value: 2 },
              feedback: "2 is the number of rows where X = 0 (rows 011 and 110)! Subtract from 8 to get 6 rows where X = 1.",
            },
          ],
          hints: [
            "Write `P = A NAND B` (`1, 1, 1, 1, 1, 1, 0, 0`) and `Q = B AND C` (`0, 0, 0, 1, 0, 0, 0, 1`).",
            "`X = P XOR Q` equals `1` whenever `P ≠ Q` — count the rows where `P` and `Q` differ!",
          ],
          solution: [
            "`P = A NAND B`: `1, 1, 1, 1, 1, 1, 0, 0` for `000..111`.",
            "`Q = B AND C`: `0, 0, 0, 1, 0, 0, 0, 1` for `000..111`.",
            "`P XOR Q`: `1, 1, 1, 0, 1, 1, 0, 1` (`11101101`), which contains **`6`** ones (only `011` and `110` give `0`).",
          ],
          commonError: "Miscomputing row 111 (where P = 0 and Q = 1 give 0 XOR 1 = 1).",
        },
        {
          id: "logic-gates-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "logic-circuits-tables",
          marks: 3,
          question:
            "Outline a reliable 3-step method a candidate should use in the exam Working Space to guarantee full marks on an 8-row CIE 0478 multi-gate truth table.",
          hints: [
            "How should you name the internal wires between gates?",
            "Should you trace horizontally across all gates at once, or vertically one simple column at a time?",
          ],
          modelAnswer:
            "1. Label every internal intermediate wire leaving a gate on the diagram (such as P, Q, and R) and write its mini-expression.\n2. Draw extra rough working columns for P, Q, and R beside the main table.\n3. Fill one single gate column vertically from 000 down to 111 at a time before combining the final columns into output X.",
          markScheme: [
            {
              point: "Label internal / intermediate wires between gates (e.g. P, Q, R).",
              keywords: ["intermediate", "internal", "p, q"],
            },
            {
              point: "Create separate rough working columns for each intermediate wire.",
              keywords: ["column", "columns"],
            },
            {
              point: "Evaluate one gate vertically across all rows (000 to 111) before computing X.",
              keywords: ["vertically", "000", "one single gate", "one gate"],
            },
          ],
          commonError: "Evaluating four gates mentally per row with no intermediate columns, causing avoidable transcription slips.",
        },
        {
          id: "logic-gates-p1-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "universal-xor-gates",
          marks: 4,
          question:
            "Explain why `NAND` gates are classified as **universal gates** in chip design, and describe how to connect 2-input `NAND` gates to build (a) a `NOT` gate for signal `A`, and (b) an `AND` gate for signals `A` and `B`.",
          hints: [
            "What does 'universal' mean for building other gates, and why do silicon foundries care?",
            "What happens when you tie both inputs of one `NAND` gate together (`A NAND A`)? How do you invert `A NAND B` to get `A AND B`?",
          ],
          modelAnswer:
            "1. Universal means every other Boolean logic gate (NOT, AND, OR, XOR) and any combinational circuit can be built solely from NAND gates.\n2. This simplifies microchip fabrication and lowers manufacturing cost by repeating one standard transistor cell.\n3. (a) NOT gate: tie both inputs of a single NAND gate together to signal A (computing A NAND A = NOT A).\n4. (b) AND gate: feed A and B into a first NAND gate, then invert its output by feeding it into both inputs of a second NAND gate ((A NAND B) NAND (A NAND B)).",
          markScheme: [
            {
              point: "Every / any other logic gate or circuit can be constructed solely from NAND gates.",
              keywords: ["every other", "any other", "solely from nand", "all logic gates"],
            },
            {
              point: "Hardware benefit: simplifies silicon fabrication / reduces manufacturing cost using one cell type.",
              keywords: ["fabrication", "manufacturing", "microchip", "cost", "silicon"],
            },
            {
              point: "(a) NOT A: join / tie both inputs of one NAND gate to wire A (A NAND A).",
              keywords: ["tie both inputs", "join both inputs", "a nand a"],
            },
            {
              point: "(b) A AND B: follow A NAND B with a second NAND gate wired as an inverter.",
              keywords: ["second nand", "(a nand b) nand"],
            },
          ],
          commonError: "Connecting only one input of a 2-input NAND gate and leaving the second input floating unconnected.",
        },
      ],
    },
    {
      id: "logic-gates-p2",
      title: "CIE 0478 Paper 2 Practice — Logic Circuits & Control Problems (Paper 2)",
      questions: [
        {
          id: "logic-gates-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "universal-xor-gates",
          question:
            "Give the 4-bit output column from top (`00`) to bottom (`11`) for a 2-input `NAND` gate (`X = A NAND B`) as a 4-character string of `0`s and `1`s.",
          answer: { type: "text", accept: ["1110", "1 1 1 0", "1, 1, 1, 0", "1,1,1,0"], display: "1110" },
          traps: [
            {
              spec: { type: "text", accept: ["0001", "0 0 0 1", "0, 0, 0, 1"] },
              feedback: "0001 is AND — remember to invert every bit for NAND to get 1110!",
            },
            {
              spec: { type: "text", accept: ["1000", "1 0 0 0", "1, 0, 0, 0"] },
              feedback: "1000 is NOR — NAND only outputs 0 on row (1, 1), giving 1110.",
            },
          ],
          hints: ["`A NAND B = NOT (A AND B)`: flip every bit of `0001`."],
          solution: ["`A AND B` is `0001`; inverting every bit gives `A NAND B` = `1110`."],
          commonError: "Confusing NAND (1110) with NOR (1000).",
        },
        {
          id: "logic-gates-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "basic-gates",
          question:
            "Give the 4-bit output column from top (`00`) to bottom (`11`) for `X = (NOT A) AND B` as a 4-character string of `0`s and `1`s.",
          answer: { type: "text", accept: ["0100", "0 1 0 0", "0, 1, 0, 0", "0,1,0,0"], display: "0100" },
          traps: [
            {
              spec: { type: "text", accept: ["0010", "0 0 1 0", "0, 0, 1, 0"] },
              feedback: "0010 is A AND (NOT B)! Here A = 0 and B = 1 is the 2nd row (01), giving 0100.",
            },
            {
              spec: { type: "text", accept: ["1110", "1 1 1 0", "1, 1, 1, 0"] },
              feedback: "1110 is NOT (A AND B) — brackets matter: here ONLY A is inverted before the AND gate!",
            },
          ],
          hints: ["`X = 1` requires `NOT A = 1` (`A = 0`) **and** `B = 1` — that is row `01` (the 2nd row)!"],
          solution: [
            "Row `00`: `1 AND 0 = 0`; row `01`: `1 AND 1 = 1`; row `10`: `0 AND 0 = 0`; row `11`: `0 AND 1 = 0`.",
            "Output column: `0100`.",
          ],
          commonError: "Confusing (NOT A) AND B (0100) with NOT (A AND B) (1110).",
        },
        {
          id: "logic-gates-p2-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "universal-xor-gates",
          question:
            "Which **single** 2-input CIE logic gate outputs `1` whenever its two inputs are **different** (`01` and `10`) and `0` whenever they are **equal** (`00` and `11`)? Give the exact CIE gate name (e.g. `AND`, `OR`, `NAND`, `NOR`, `XOR`).",
          answer: { type: "text", accept: ["XOR", "XOR gate", "EOR", "EOR gate"], display: "XOR" },
          traps: [
            {
              spec: { type: "text", accept: ["OR", "OR gate"] },
              feedback: "OR outputs 1 on (1, 1) as well — Exclusive-OR (XOR) outputs 0 when both inputs are 1!",
            },
          ],
          hints: ["Output column `0, 1, 1, 0` is the Exclusive-OR difference detector."],
          solution: ["An **`XOR`** gate outputs `1` if and only if `A ≠ B` (`0110`)."],
          commonError: "Answering OR instead of XOR.",
        },
        {
          id: "logic-gates-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "universal-xor-gates",
          question:
            "Which **single** 2-input CIE logic gate has the exact same 4-row truth table as `X = (NOT A) OR (NOT B)`? Give the exact CIE gate name (e.g. `AND`, `OR`, `NAND`, `NOR`, `XOR`).",
          answer: { type: "text", accept: ["NAND", "NAND gate"], display: "NAND" },
          traps: [
            {
              spec: { type: "text", accept: ["NOR", "NOR gate"] },
              feedback: "Test (0, 1): (NOT 0) OR (NOT 1) = 1 OR 0 = 1, whereas 0 NOR 1 = 0! Column 1110 is NAND!",
            },
          ],
          hints: [
            "Evaluate `(NOT A) OR (NOT B)` on `00, 01, 10, 11`: it is `0` **only** when `A = 1` and `B = 1`!",
            "Which single gate has column `1, 1, 1, 0`?",
          ],
          solution: [
            "Across `00, 01, 10, 11`, `(NOT A) OR (NOT B)` gives `1, 1, 1, 0`.",
            "That matches `NOT (A AND B)`, which is a **`NAND`** gate (De Morgan's First Law).",
          ],
          commonError: "Guessing NOR because OR appears in (NOT A) OR (NOT B).",
        },
        {
          id: "logic-gates-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "logic-circuits-tables",
          question:
            "Evaluate `X = (A NOR B) NAND (B XOR C)` when `A = 0`, `B = 0`, and `C = 1`. Give the single output bit (`0` or `1`).",
          answer: { type: "text", accept: ["0"], display: "0" },
          traps: [
            {
              spec: { type: "text", accept: ["1"] },
              feedback: "Check both brackets: 0 NOR 0 = 1 AND 0 XOR 1 = 1, so the final gate computes 1 NAND 1 = 0!",
            },
          ],
          hints: [
            "Left gate: `P = 0 NOR 0 = 1`.",
            "Right gate: `Q = 0 XOR 1 = 1`. Now compute `X = 1 NAND 1`.",
          ],
          solution: [
            "`P = 0 NOR 0 = NOT (0 OR 0) = 1`.",
            "`Q = 0 XOR 1 = 1`.",
            "`X = P NAND Q = 1 NAND 1 = 0`.",
          ],
          commonError: "Computing 0 NOR 0 as 0 instead of 1.",
        },
        {
          id: "logic-gates-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "logic-circuits-tables",
          question:
            "Give the complete 8-bit output column from top (`000`) to bottom (`111`) for `X = (A OR B) AND (NOT C)` as an 8-character string of `0`s and `1`s.",
          answer: { type: "text", accept: ["00101010", "0010 1010"], display: "00101010" },
          traps: [
            {
              spec: { type: "text", accept: ["00010101", "0001 0101"] },
              feedback: "00010101 is (A OR B) AND C — remember C is inverted by NOT C, so only even rows (C = 0) can output 1!",
            },
            {
              spec: { type: "text", accept: ["10101010", "1010 1010"] },
              feedback: "Check row 000 (1st row): A OR B = 0 OR 0 = 0, so 0 AND 1 = 0!",
            },
          ],
          hints: [
            "Every odd row (`C = 1`: rows `001, 011, 101, 111`) has `NOT C = 0`, forcing `X = 0`.",
            "On the even rows (`000, 010, 100, 110`), `NOT C = 1`, so `X = A OR B`.",
          ],
          solution: [
            "`P = A OR B` is `0, 0, 1, 1, 1, 1, 1, 1`.",
            "`Q = NOT C` is `1, 0, 1, 0, 1, 0, 1, 0`.",
            "`X = P AND Q` is `0, 0, 1, 0, 1, 0, 1, 0` → `00101010`.",
          ],
          commonError: "Forgetting to invert C, or setting row 000 to 1.",
        },
        {
          id: "logic-gates-p2-q07",
          kind: "written",
          difficulty: "core",
          guideRef: "universal-xor-gates",
          marks: 3,
          question:
            "Explain how to tell a `NOR` gate apart from an `XOR` gate on CIE 0478, referring to (a) their standard circuit symbols, (b) their output on `(0, 0)`, and (c) their output when the two inputs differ (`01` and `10`).",
          hints: [
            "Which gate has an output bubble, and which has an extra curved line at the input?",
            "Compare `NOR` (`1000`) with `XOR` (`0110`).",
          ],
          modelAnswer:
            "(a) Symbol: a NOR gate has a small output circle (bubble) at the front tip, whereas an XOR gate has an extra curved input line (double curved back) and no output bubble.\n(b) On (0, 0): NOR outputs 1 whereas XOR outputs 0.\n(c) When the two inputs are different (01 and 10): XOR outputs 1 whereas NOR outputs 0.",
          markScheme: [
            {
              point: "Symbol: NOR has an output bubble/circle whereas XOR has a double / extra curved input line and no bubble.",
              keywords: ["extra curved", "double curved", "second curved"],
            },
            {
              point: "On (0, 0): NOR outputs 1 whereas XOR outputs 0.",
              keywords: ["nor outputs 1", "1 whereas xor outputs 0"],
            },
            {
              point: "When inputs differ (01 and 10): XOR outputs 1 whereas NOR outputs 0.",
              keywords: ["xor outputs 1", "1 whereas nor outputs 0"],
            },
          ],
          commonError: "Putting BOTH a double curved input line AND an output bubble on XOR (which actually draws an XNOR gate!).",
        },
        {
          id: "logic-gates-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "logic-circuits-tables",
          question:
            "Give the complete 8-bit output column from top (`000`) to bottom (`111`) for `X = (A AND (NOT B)) OR (B AND C)` as an 8-character string of `0`s and `1`s.",
          answer: { type: "text", accept: ["00011101", "0001 1101"], display: "00011101" },
          traps: [
            {
              spec: { type: "text", accept: ["00010011", "0001 0011"] },
              feedback: "Check A AND (NOT B): it equals 1 on rows 100 and 101 (where A = 1 and B = 0), not 110 and 111!",
            },
            {
              spec: { type: "text", accept: ["00111101", "0011 1101"] },
              feedback: "Check row 010 (3rd row): A = 0 so A AND (NOT B) = 0, and C = 0 so B AND C = 0!",
            },
          ],
          hints: [
            "`P = A AND (NOT B)` equals `1` on rows `100` and `101`.",
            "`Q = B AND C` equals `1` on rows `011` and `111`. Take `P OR Q` across `000..111`!",
          ],
          solution: [
            "`P = A AND (NOT B)` across `000..111`: `0, 0, 0, 0, 1, 1, 0, 0`.",
            "`Q = B AND C` across `000..111`: `0, 0, 0, 1, 0, 0, 0, 1`.",
            "`X = P OR Q`: `0, 0, 0, 1, 1, 1, 0, 1` → `00011101`.",
          ],
          commonError: "Swapping rows 100/101 with 110/111 when evaluating A AND (NOT B).",
        },
        {
          id: "logic-gates-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "logic-expressions-problems",
          question:
            "An automated greenhouse heater `X` turns ON (`X = 1`) if:\n- temperature is below `15 °C` (`T = 0`, where `T = 1` means `≥ 15 °C`) **AND** the roof vent is closed (`V = 0`, where `V = 1` means open), **OR**\n- frost-override switch `F` is ON (`F = 1`, where `F = 0` means OFF).\n\nWhat is the single output bit (`0` or `1`) for `X` when `(T, V, F) = (0, 1, 0)`?",
          answer: { type: "text", accept: ["0"], display: "0" },
          traps: [
            {
              spec: { type: "text", accept: ["1"] },
              feedback: "Look at V = 1: that means the roof vent is OPEN! Since the heater needs V = 0 (vent closed) when F = 0, X = 0.",
            },
          ],
          hints: [
            "Write the expression: `X = ((NOT T) AND (NOT V)) OR F`.",
            "Plug in `T = 0, V = 1, F = 0`: `(1 AND 0) OR 0`.",
          ],
          solution: [
            "With `T = 0` (cold), `V = 1` (vent open!), and `F = 0` (override OFF):",
            "`X = ((NOT 0) AND (NOT 1)) OR 0 = (1 AND 0) OR 0 = 0`.",
          ],
          commonError: "Forgetting NOT V and treating V = 1 as 'vent closed'.",
        },
        {
          id: "logic-gates-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "logic-expressions-problems",
          question:
            "For the same greenhouse heater `X = ((NOT T) AND (NOT V)) OR F`, give the complete 8-bit output column across `(T, V, F)` ordered from `000` to `111` as an 8-character string of `0`s and `1`s.",
          answer: { type: "text", accept: ["11010101", "1101 0101"], display: "11010101" },
          traps: [
            {
              spec: { type: "text", accept: ["01010111", "0101 0111"] },
              feedback: "01010111 is (T AND V) OR F — remember BOTH T = 0 and V = 0 are inverted (`NOT T` and `NOT V`)!",
            },
            {
              spec: { type: "text", accept: ["01010101", "0101 0101"] },
              feedback: "Check row 000 (1st row): T = 0 and V = 0 makes (NOT T) AND (NOT V) = 1 AND 1 = 1!",
            },
          ],
          hints: [
            "`(NOT T) AND (NOT V)` equals `1` on rows `000` and `001` (`11000000`).",
            "`F` equals `1` on all odd rows (`01010101`). Combine them with `OR`!",
          ],
          solution: [
            "`P = (NOT T) AND (NOT V)` is `1, 1, 0, 0, 0, 0, 0, 0`.",
            "`F` is `0, 1, 0, 1, 0, 1, 0, 1`.",
            "`X = P OR F` gives `1, 1, 0, 1, 0, 1, 0, 1` → `11010101`.",
          ],
          commonError: "Missing row 000 where F = 0 but both T = 0 and V = 0 turn the heater ON.",
        },
        {
          id: "logic-gates-p2-q11",
          kind: "written",
          difficulty: "core",
          guideRef: "logic-expressions-problems",
          marks: 3,
          question:
            "State the order in which operators are evaluated in the unbracketed expression `X = A OR NOT B AND C`, write the equivalent fully bracketed expression, and explain why CIE 0478 candidates should always write explicit brackets.",
          hints: [
            "Recall **N**aughty **A**nts **O**rder (`NOT` → `AND` → `OR`).",
            "How do brackets help when converting an expression into a logic circuit diagram?",
          ],
          modelAnswer:
            "1. Operator precedence evaluates NOT with highest priority, followed by AND second, and OR last.\n2. Equivalent bracketed form: place an inner bracket around NOT B, a middle bracket around that product with C, and leave A OR on the outside — X = A OR ((NOT B) AND C).\n3. Explicit brackets eliminate ambiguity and show the exact stage-by-stage 1-input and 2-input gate wiring on a circuit diagram.",
          markScheme: [
            {
              point: "States precedence order: NOT highest/first, then AND second, then OR last.",
              keywords: ["highest", "not first", "followed by and"],
            },
            {
              point: "Groups NOT B first and combines with C inside brackets before OR-ing with A: A OR ((NOT B) AND C).",
              keywords: ["inner bracket", "middle bracket", "surround"],
            },
            {
              point: "Explains that brackets prevent ambiguity and map directly to physical gate stages.",
              keywords: ["ambiguity", "unambiguous", "wiring", "gate stages"],
            },
          ],
          commonError: "Grouping left-to-right as ((A OR NOT B) AND C).",
        },
        {
          id: "logic-gates-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "logic-circuits-tables",
          question:
            "In the circuit `X = (A XOR B) AND (B NAND C)`, you know that `A = 1` and the final output is **`X = 1`**. Deduce the binary value of input `B` (`0` or `1`).",
          answer: { type: "text", accept: ["0"], display: "0" },
          traps: [
            {
              spec: { type: "text", accept: ["1"] },
              feedback: "If A = 1 and B = 1, then A XOR B = 1 XOR 1 = 0, which forces the final AND output X to 0!",
            },
          ],
          hints: [
            "For `X = 1` out of the final `AND` gate, we **must** have `(A XOR B) = 1`.",
            "Since `A = 1`, which value of `B` makes `1 XOR B = 1`?",
          ],
          solution: [
            "An `AND` gate outputs `1` only if both inputs are `1`, so `A XOR B = 1`.",
            "Given `A = 1`, `1 XOR B = 1` requires `B = 0` (and when `B = 0`, `0 NAND C = 1` holds automatically!).",
          ],
          commonError: "Assuming B = 1 because X = 1, forgetting that 1 XOR 1 = 0.",
        },
        {
          id: "logic-gates-p2-q13",
          kind: "short",
          difficulty: "challenge",
          guideRef: "logic-circuits-tables",
          question:
            "Give the complete 8-bit output column from top (`000`) to bottom (`111`) for the 3-input Full Adder Sum circuit `X = (A XOR B) XOR C` as an 8-character string of `0`s and `1`s.",
          answer: { type: "text", accept: ["01101001", "0110 1001"], display: "01101001" },
          traps: [
            {
              spec: { type: "text", accept: ["01101000", "0110 1000"] },
              feedback: "Check row 111 (8th row): (1 XOR 1) = 0, and then 0 XOR 1 = 1! Three 1s have odd parity, so X = 1!",
            },
            {
              spec: { type: "text", accept: ["01111110", "0111 1110"] },
              feedback: "Trace step by step: P = A XOR B is 0,0,1,1,1,1,0,0, then XOR each bit with C (0,1,0,1,0,1,0,1).",
            },
          ],
          hints: [
            "Let `P = A XOR B` across `000..111`: `0, 0, 1, 1, 1, 1, 0, 0`.",
            "Now compute `P XOR C` (`C = 0, 1, 0, 1, 0, 1, 0, 1`), paying special attention to row `111` (`0 XOR 1 = 1`).",
          ],
          solution: [
            "`P = A XOR B`: `0, 0, 1, 1, 1, 1, 0, 0`.",
            "`X = P XOR C`: `0⊕0=0`, `0⊕1=1`, `1⊕0=1`, `1⊕1=0`, `1⊕0=1`, `1⊕1=0`, `0⊕0=0`, `0⊕1=1` → `01101001`.",
          ],
          commonError: "Writing 0 on row 111 under the false belief that 3-input XOR means 'only one input is 1'.",
        },
        {
          id: "logic-gates-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "logic-expressions-problems",
          marks: 4,
          question:
            "Describe step by step how to draw a CIE 0478 logic circuit diagram for `X = (A AND (NOT B)) NOR C`, naming each gate symbol and wire connection clearly.",
          hints: [
            "Work from the innermost bracket `(NOT B)` outward to `(A AND ...)` and finally `... NOR C`.",
            "State the distinctive shape of each of the 3 gates and remember input/output labels.",
          ],
          modelAnswer:
            "1. Label inputs A, B, and C down the left-hand side and pass wire B into a 1-input NOT gate (triangle with output bubble).\n2. Connect wire A and the output of the NOT gate into a 2-input AND gate (flat-backed D-shape).\n3. Connect the output of the AND gate and wire C into a 2-input NOR gate (curved OR shield with an output bubble).\n4. Draw the output wire leaving the NOR bubble and label it X on the right-hand side.",
          markScheme: [
            {
              point: "Connects B into a 1-input NOT gate (triangle + bubble).",
              keywords: ["triangle"],
            },
            {
              point: "Connects A and NOT B output into a 2-input AND gate (flat-backed D-shape).",
              keywords: ["d-shape", "flat-backed", "2-input and"],
            },
            {
              point: "Connects AND output and C into a 2-input NOR gate (curved shield + output bubble).",
              keywords: ["curved", "2-input nor"],
            },
            {
              point: "Labels inputs A, B, C on the left and final output X on the right.",
              keywords: ["left-hand", "right-hand", "label it x"],
            },
          ],
          commonError: "Feeding A and B into a NAND gate instead of inverting ONLY B before the AND gate.",
        },
        {
          id: "logic-gates-p2-q15",
          kind: "written",
          difficulty: "challenge",
          guideRef: "logic-expressions-problems",
          marks: 3,
          question:
            "A courtyard floodlight `X` (`1` = ON) uses daylight sensor `D` (`1` = daylight, `0` = dark), motion sensor `M` (`1` = motion, `0` = none), and arming switch `S` (`1` = armed, `0` = disarmed). The light must switch ON **only** when armed, dark, and motion is detected. Write a CIE logic expression for `X` and explain how to draw the `AND` stages legally on CIE 0478.",
          hints: [
            "Darkness corresponds to `D = 0`, so invert `D`!",
            "Can you draw one 3-input `AND` gate on CIE 0478, or must you cascade two 2-input `AND` gates?",
          ],
          modelAnswer:
            "Logic expression: X = ((NOT D) AND M) AND S.\nCircuit rule: Because CIE 0478 restricts AND gates to 2 inputs, pass D through a NOT gate, combine NOT D and M in a first 2-input AND gate, and cascade its output with S into a second 2-input AND gate producing X.",
          markScheme: [
            {
              point: "Inverts daylight sensor D as NOT D for darkness (D = 0).",
              keywords: ["not d"],
            },
            {
              point: "Combines all three conditions using AND: ((NOT D) AND M) AND S (in any valid order).",
              keywords: ["d) and m", "m) and s", "m and s", "not d and m"],
            },
            {
              point: "Explains cascading two 2-input AND gates in series rather than drawing a 3-input gate.",
              keywords: ["two 2-input", "cascade", "second 2-input and", "first 2-input and"],
            },
          ],
          commonError: "Drawing a single AND symbol with 3 input wires, or forgetting NOT on D.",
        },
      ],
    },
  ],

  challenge: [
    {
      id: "logic-gates-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "universal-xor-gates",
      question:
        "Inside a CPU **Half Adder**, two 1-bit inputs `(A, B)` produce a **Sum** bit `S = A XOR B` and a **Carry** bit `C = A AND B` (`0+0=00₂`, `0+1=01₂`, `1+0=01₂`, `1+1=10₂`). Give the 4-bit `S` column (`00` to `11`) followed by a hyphen `-` and the 4-bit `C` column (`00` to `11`), e.g. `0111-0001`.",
      answer: { type: "text", accept: ["0110-0001", "0110 - 0001"], display: "0110-0001" },
      traps: [
        {
          spec: { type: "text", accept: ["0111-0001", "0111 - 0001"] },
          feedback: "On row (1, 1), 1 + 1 = 10₂: Carry is 1 and Sum is 0 (1 XOR 1 = 0), so Sum is 0110, not 0111!",
        },
        {
          spec: { type: "text", accept: ["0001-0110", "0001 - 0110"] },
          feedback: "Right columns, swapped order — list Sum (A XOR B) first, then Carry (A AND B)!",
        },
      ],
      hints: [
        "Evaluate `S = A XOR B` across `00, 01, 10, 11`: when `1 + 1 = 10₂`, the rightmost Sum bit is `0`!",
        "Evaluate `C = A AND B` across `00, 01, 10, 11`: a carry of `1` happens only on `(1, 1)`.",
        "Join the 4-bit `S` string and 4-bit `C` string with `-`.",
      ],
      solution: [
        "Sum `S = A XOR B` gives `0, 1, 1, 0` (`0110`).",
        "Carry `C = A AND B` gives `0, 0, 0, 1` (`0001`).",
        "Combined answer: `0110-0001`.",
      ],
      commonError: "Writing 1 for Sum on (1, 1) as if 1 + 1 = 11₂ instead of 10₂.",
    },
    {
      id: "logic-gates-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "logic-circuits-tables",
      question:
        "A CPU **Full Adder** computes its **Carry-Out** bit from `(A, B, C)` using `X = (A AND B) OR ((A XOR B) AND C)`. Give the complete 8-bit output column from `000` to `111` as an 8-character string of `0`s and `1`s.",
      answer: { type: "text", accept: ["00010111", "0001 0111"], display: "00010111" },
      traps: [
        {
          spec: { type: "text", accept: ["00010110", "0001 0110"] },
          feedback: "Check row 111: even though (A XOR B) AND C = 0, the left term A AND B = 1, so 1 OR 0 = 1!",
        },
        {
          spec: { type: "text", accept: ["01101001", "0110 1001"] },
          feedback: "01101001 is the Full Adder Sum column — here we want Carry-Out!",
        },
      ],
      hints: [
        "Evaluate `P = A AND B` (`1` on `110` and `111`).",
        "Evaluate `Q = (A XOR B) AND C`: `A XOR B = 1` on `01x` and `10x`; `AND C` selects `011` and `101`.",
        "Combine `P OR Q` across `000..111` — notice Carry-Out equals `1` whenever **at least two** inputs are `1`!",
      ],
      solution: [
        "`P = A AND B` is `1` on `110, 111` (`00000011`).",
        "`Q = (A XOR B) AND C` is `1` on `011, 101` (`00010100`).",
        "`X = P OR Q` gives `00010111` (rows `011, 101, 110, 111` — wherever binary `A + B + C ≥ 2`).",
      ],
      commonError: "Dropping row 111 to 0 after seeing 1 XOR 1 = 0 and forgetting A AND B = 1.",
    },
    {
      id: "logic-gates-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "universal-xor-gates",
      question:
        "What is the **minimum number** of 2-input `NAND` gates required to construct a circuit equivalent to a 2-input inclusive `OR` gate (`X = A OR B`)? Give your answer as a single integer.",
      answer: { type: "number", value: 3 },
      traps: [
        {
          spec: { type: "number", value: 2 },
          feedback: "2 NAND gates can build AND ((A NAND B) NAND (A NAND B)), NOT, or A NAND (NOT B), but NEVER 0111 — test every 2-gate wiring!",
        },
        {
          spec: { type: "number", value: 4 },
          feedback: "4 NAND gates build XOR! For OR, De Morgan gives (A NAND A) NAND (B NAND B) using just 3 NAND gates.",
        },
      ],
      hints: [
        "By De Morgan's Law, `A OR B = NOT ((NOT A) AND (NOT B)) = (NOT A) NAND (NOT B)`.",
        "How many `NAND` gates are needed to make `NOT A`, `NOT B`, and the final `NAND`?",
        "Check whether 2 `NAND` gates could ever output `0` on `(0, 0)`: for a final `NAND` gate to output `0` on `(0, 0)`, **both** of its inputs must equal `1` when `A = 0, B = 0`!",
      ],
      solution: [
        "Gate 1 computes `P = A NAND A = NOT A`; Gate 2 computes `Q = B NAND B = NOT B`; Gate 3 computes `X = P NAND Q = (NOT A) NAND (NOT B) = A OR B` (`3` gates).",
        "Why `2` gates cannot work: on `(0, 0)` we need `X = 0`, forcing **both** inputs of the final `NAND` gate to equal `1` when `(A, B) = (0, 0)` — neither raw `A` nor raw `B` is `1` on `(0, 0)`, and if both inputs come from the same single first gate `R`, the circuit can only invert `R` (`0001`, `0011`, or `0101`), never `0111`!",
      ],
      commonError: "Guessing 2 by analogy with building AND from 2 NAND gates.",
    },
    {
      id: "logic-gates-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "logic-circuits-tables",
      question:
        "Give the complete 8-bit output column from top (`000`) to bottom (`111`) for `X = (A NOR B) XOR (B NAND C)` as an 8-character string of `0`s and `1`s.",
      answer: { type: "text", accept: ["00101110", "0010 1110"], display: "00101110" },
      traps: [
        {
          spec: { type: "text", accept: ["11010001", "1101 0001"] },
          feedback: "11010001 is the exact inverse — remember XOR outputs 0 when P and Q are EQUAL (like 1 XOR 1 = 0 on rows 000 and 001)!",
        },
        {
          spec: { type: "text", accept: ["11101110", "1110 1110"] },
          feedback: "11101110 used OR instead of XOR on rows 000 and 001 (where P = 1 and Q = 1 give 1 XOR 1 = 0)!",
        },
      ],
      hints: [
        "Compute `P = A NOR B` across `000..111`: `1` only when `A = 0` and `B = 0` → `1, 1, 0, 0, 0, 0, 0, 0`.",
        "Compute `Q = B NAND C` across `000..111`: `0` only when `B = 1` and `C = 1` (rows `011` and `111`) → `1, 1, 1, 0, 1, 1, 1, 0`.",
        "Now apply `P XOR Q` (`1` where `P` and `Q` differ, `0` where they match).",
      ],
      solution: [
        "`P = A NOR B` = `11000000`.",
        "`Q = B NAND C` = `11101110`.",
        "`X = P XOR Q` = `00101110`.",
      ],
      commonError: "Writing 1 for 1 XOR 1 on rows 000 and 001.",
    },
    {
      id: "logic-gates-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "logic-expressions-problems",
      question:
        "How many **distinct** 2-input Boolean truth tables exist in total across the 4 rows `(00, 01, 10, 11)` (counting every possible 4-bit output column from `0000` to `1111`)? Give your answer as a single integer.",
      answer: { type: "number", value: 16 },
      traps: [
        {
          spec: { type: "number", value: 4 },
          feedback: "4 is the number of rows in ONE truth table! Each of those 4 rows can independently hold 0 or 1 (`2⁴`).",
        },
        {
          spec: { type: "number", value: 8 },
          feedback: "Count the number of 4-bit binary strings from 0000 to 1111: 2⁴ = 16, not 2³ = 8!",
        },
      ],
      hints: [
        "A 2-input truth table has `2² = 4` output cells (`f(0,0), f(0,1), f(1,0), f(1,1)`).",
        "Each of those 4 output cells can independently be chosen as `0` or `1` (`2` choices per row).",
        "Compute `2 × 2 × 2 × 2 = 2⁴`.",
      ],
      solution: [
        "Each distinct 2-input Boolean function corresponds to one 4-bit output column from `0000` to `1111`.",
        "There are `2⁴ = 16` distinct 4-bit output columns (`AND`, `OR`, `NAND`, `NOR`, `XOR`, etc., are famous named members of those 16!).",
      ],
      commonError: "Confusing the number of rows (2² = 4) with the number of distinct truth tables (2^(2²) = 16).",
    },
    {
      id: "logic-gates-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "logic-circuits-tables",
      question:
        "A 2-to-1 hardware **Multiplexer (MUX)** routes data wire `A` to output `X` when selector `S = 0`, and routes data wire `B` to `X` when selector `S = 1`, using `X = (A AND (NOT S)) OR (B AND S)`. Ordering the 3 inputs as `(S, A, B)` from `000` to `111`, give the complete 8-bit output column for `X` as an 8-character string of `0`s and `1`s.",
      answer: { type: "text", accept: ["00110101", "0011 0101"], display: "00110101" },
      traps: [
        {
          spec: { type: "text", accept: ["01010011", "0101 0011"] },
          feedback: "You swapped S = 0 and S = 1! When S = 0 (first 4 rows), X copies A (0011); when S = 1 (last 4 rows), X copies B (0101).",
        },
      ],
      hints: [
        "Split the 8 rows `(S, A, B)` into the top half (`S = 0`: `000, 001, 010, 011`) and bottom half (`S = 1`: `100, 101, 110, 111`).",
        "When `S = 0`, `(B AND 0) = 0` and `NOT S = 1`, so `X = A` across the top 4 rows (`0, 0, 1, 1`).",
        "When `S = 1`, `NOT S = 0`, so `X = B` across the bottom 4 rows (`0, 1, 0, 1`).",
      ],
      solution: [
        "Top 4 rows (`S = 0`): `(A, B) = 00, 01, 10, 11` → `X = A` gives `0, 0, 1, 1`.",
        "Bottom 4 rows (`S = 1`): `(A, B) = 00, 01, 10, 11` → `X = B` gives `0, 1, 0, 1`.",
        "Concatenated 8-bit column: `00110101`.",
      ],
      commonError: "Ordering the columns as (A, B, S) instead of the specified (S, A, B) order.",
    },
    {
      id: "logic-gates-ch-q07",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "logic-expressions-problems",
      question:
        "Three safety sensors `(A, B, C)` vote in a **2-out-of-3 majority system**: alarm `X` triggers (`X = 1`) whenever **two or more** sensors output `1`. Which CIE logic expression implements this majority vote?",
      options: [
        "X = (A AND B) AND (B AND C)",
        "X = (A AND B) OR (A AND C) OR (B AND C)",
        "X = (A XOR B) OR (B XOR C)",
        "X = (A OR B) AND C",
      ],
      answerIndex: 1,
      hints: [
        "List every pair of two sensors that could agree on `1`: `{A, B}`, `{A, C}`, or `{B, C}`.",
        "Write an `AND` term for each pair and join the three pairs with inclusive `OR`.",
        "Verify row `(1, 1, 0)` (where `C = 0`!) and row `(1, 1, 1)`: both must output `1`.",
      ],
      explanation:
        "Joining the three pairs `[A AND B]`, `[A AND C]`, and `[B AND C]` with `OR` outputs `1` whenever at least one pair of sensors equals `1` (`011, 101, 110, 111`). Using `[A OR B]` ANDed with `C` fails on `(1, 1, 0)` because `C = 0` zeroes the output!",
    },
    {
      id: "logic-gates-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "universal-xor-gates",
      marks: 4,
      question:
        "By comparing 4-row output columns across `(00, 01, 10, 11)`, prove **De Morgan's First Law** that `NOT (A AND B)` equals `(NOT A) OR (NOT B)`, and demonstrate why `(NOT A) AND (NOT B)` is **not** equivalent.",
      hints: [
        "First state the 4-bit column (`00` to `11`) for `NOT (A AND B)` (`A NAND B`).",
        "Next list `NOT A` (`1100`) and `NOT B` (`1010`), then compute their `OR` column.",
        "Finally compute `(NOT A) AND (NOT B)` and point out which rows fail to match.",
      ],
      modelAnswer:
        "1. Across (00, 01, 10, 11), A AND B is 0001, so NOT (A AND B) has output column 1110.\n2. Helper columns: NOT A is 1100 and NOT B is 1010.\n3. Combining them with OR gives (NOT A) OR (NOT B) = 1110, which is identical on all four rows to NOT (A AND B).\n4. By contrast, combining them with AND gives (NOT A) AND (NOT B) = 1000 (which is A NOR B), failing to match on rows 01 and 10.",
      markScheme: [
        {
          point: "States the 4-row column for NOT (A AND B) is 1110 (or 1, 1, 1, 0).",
          keywords: ["1110", "1, 1, 1, 0"],
        },
        {
          point: "Evaluates NOT A = 1100 and NOT B = 1010 across 00, 01, 10, 11.",
          keywords: ["1100", "1, 1, 0, 0", "1010", "1, 0, 1, 0"],
        },
        {
          point: "Shows (NOT A) OR (NOT B) yields 1110, matching NOT (A AND B) on all four rows.",
          keywords: ["identical", "matching", "all four rows", "every row"],
        },
        {
          point: "Shows (NOT A) AND (NOT B) yields 1000 (NOR), differing on rows 01 and 10.",
          keywords: ["1000", "1, 0, 0, 0", "nor"],
        },
      ],
      commonError: "Distributing NOT across AND without flipping AND to OR.",
    },
  ],
};
