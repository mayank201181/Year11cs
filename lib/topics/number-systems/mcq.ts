import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "number-systems-m1",
    title: "Paper 1 — Core Foundations",
    questions: [
      {
        id: "number-systems-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "denary-binary-hex",
        question: "Why must all data and instructions ultimately be represented in binary inside a digital computer?",
        options: [
          "Binary uses fewer digits than hexadecimal when printed on screen",
          "Binary automatically encrypts data before storing it in RAM",
          "CPU hardware is built from transistor switches with two states: ON (1) and OFF (0)",
          "Humans find base-2 easier to read and debug than base-10",
        ],
        answerIndex: 2,
        hints: ["Think about the physical electronic components inside a microprocessor."],
        explanation:
          "Microprocessors contain billions of transistor switches that reliably represent two voltage states: ON (`1`) and OFF (`0`). Binary is much longer (not shorter!) than hex on screen and provides no encryption.",
      },
      {
        id: "number-systems-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "denary-binary-hex",
        question: "What is the unsigned denary value of the 8-bit binary integer `01101011`?",
        options: ["109", "214", "107", "91"],
        answerIndex: 2,
        hints: ["Write the 8-bit weights `128, 64, 32, 16, 8, 4, 2, 1` above the bits and add the columns containing `1`."],
        explanation:
          "Adding the active place values gives `64 + 32 + 8 + 2 + 1 = 107`. Getting `109` comes from mistakenly counting the `4`s column instead of the `2`s column.",
      },
      {
        id: "number-systems-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "denary-binary-hex",
        question: "Which 8-bit unsigned binary pattern represents the denary integer `156`?",
        options: ["01011100", "10011100", "10011010", "10101100"],
        answerIndex: 1,
        hints: ["Start with `156 − 128 = 28`, then make `28` from `16, 8, 4, 2, 1`."],
        explanation:
          "`156 = 128 + 16 + 8 + 4`, which activates bits at `128, 16, 8, 4` → `10011100`. `10101100` would be `128 + 32 + 8 + 4 = 172`.",
      },
      {
        id: "number-systems-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "denary-binary-hex",
        question: "What is the hexadecimal representation of the 8-bit binary pattern `11000101`?",
        options: ["C5", "B5", "D5", "C6"],
        answerIndex: 0,
        hints: ["Split `11000101` into two 4-bit nibbles: `1100` and `0101`."],
        explanation:
          "Upper nibble `1100` = `8 + 4 = 12` = `C`; lower nibble `0101` = `4 + 1 = 5` → `C5`. Picking `B5` (`11`) or `D5` (`13`) confuses hex letter offsets (`A=10, B=11, C=12, D=13`).",
      },
      {
        id: "number-systems-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "denary-binary-hex",
        question: "Convert the hexadecimal value `3B` into denary.",
        options: ["311", "59", "43", "60"],
        answerIndex: 1,
        hints: [
          "In hexadecimal, the left digit is worth `16`s and the right digit is worth `1`s.",
          "Remember `A = 10`, so `B = 11`. Calculate `3 × 16 + 11`.",
        ],
        explanation:
          "`3 × 16 + 11 = 48 + 11 = 59` (or via nibbles: `0011 1011₂ = 32 + 16 + 8 + 2 + 1 = 59`). Getting `60` mistakes `B` for `12` (`C`), while `43` forgets to multiply `3` by `16` instead of `10`.",
      },
      {
        id: "number-systems-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "denary-binary-hex",
        question: "Why do software developers display memory dumps in hexadecimal rather than binary?",
        options: [
          "The CPU executes hexadecimal instructions faster than binary machine code",
          "Hexadecimal is much shorter and less error-prone for humans to read and copy",
          "Hexadecimal takes up only a quarter of the RAM space inside the computer",
          "Hexadecimal prevents overflow errors when adding 8-bit registers",
        ],
        answerIndex: 1,
        hints: [
          "Does hardware actually store hexadecimal digits in memory?",
          "Compare reading 2 hex characters like `7F` with reading 8 bits `01111111`.",
        ],
        explanation:
          "Hardware stores **only** binary (`0`s and `1`s), so hex saves zero RAM and does not change CPU speed. Each hex digit represents 4 bits, making memory dumps compact and far easier for humans to inspect accurately.",
      },
      {
        id: "number-systems-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "binary-addition-overflow",
        question: "When adding binary columns, what is the result of `1 + 1 + 1`?",
        options: [
          "Write `1` in the column and carry `1` to the next column left",
          "Write `3` in the column and carry `0`",
          "Write `0` in the column and carry `1` to the next column left",
          "Write `1` in the column and carry `0`",
        ],
        answerIndex: 0,
        hints: ["`1 + 1 + 1` in denary is `3`, which is `11` in base-2 (`2 + 1`)."],
        explanation:
          "`1 + 1 + 1 = 3₁₀ = 11₂`, so you write `1` in the current column and carry `1` (`2`) to the next column left. Writing `0` carry `1` is the rule for `1 + 1 = 10₂`.",
      },
      {
        id: "number-systems-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "binary-addition-overflow",
        question: "What is the 8-bit binary sum of `00110111` and `01001011`?",
        options: ["01110010", "10000100", "10000010", "01111110"],
        answerIndex: 2,
        hints: [
          "Add column-by-column from right to left, tracking every carry of `1`.",
          "Check in denary: `00110111 = 55` and `01001011 = 75`.",
        ],
        explanation:
          "`55 + 75 = 130`, and `130 = 128 + 2 = 10000010`. Carries ripple all the way from bit 0 (`1+1=10₂`) up into bit 7 (`128`); forgetting to propagate carries produces `01111110`.",
      },
      {
        id: "number-systems-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "binary-addition-overflow",
        question: "Which pair of unsigned 8-bit binary numbers will cause an **overflow error** when added into an 8-bit register?",
        options: [
          "`11001000` and `00110111`",
          "`10010110` and `01110100`",
          "`10000000` and `01000000`",
          "`01111000` and `01100100`",
        ],
        answerIndex: 1,
        hints: [
          "An unsigned 8-bit overflow occurs only when the true sum exceeds `255` (generating a 9th bit).",
          "Convert each pair to denary or check whether a `1` carries out past the `128` column.",
        ],
        explanation:
          "`10010110` (`150`) + `01110100` (`116`) = `266 > 255`, producing a 9th carry-out bit (`100001010₂`). Notice `11001000` (`200`) + `00110111` (`55`) = `255` (`11111111`), which fits cleanly in 8 bits with no overflow!",
      },
      {
        id: "number-systems-m1-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "logical-shifts",
        question: "An 8-bit unsigned register contains `00100110`. What is the content of the register after a **logical left shift of 2 places**?",
        options: ["00001001", "10011011", "01001100", "10011000"],
        answerIndex: 3,
        hints: ["Discard the leftmost 2 bits (`00`) and pad two `0`s on the right end."],
        explanation:
          "Shifting `00100110` (`38`) left by 2 places drops the two leading `0`s and pads `00` at the LSB, giving `10011000` (`38 × 4 = 152`). `01001100` only shifted left by 1 place.",
      },
      {
        id: "number-systems-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "logical-shifts",
        question: "What mathematical operation does a **logical right shift of 3 places** perform on an unsigned binary integer (assuming no `1`-bits are lost)?",
        options: [
          "Divides the integer by 6",
          "Multiplies the integer by 8",
          "Subtracts 3 from the integer",
          "Divides the integer by 8",
        ],
        answerIndex: 3,
        hints: [
          "Right shifts make an unsigned binary number smaller.",
          "Each single right shift divides by `2`, so 3 shifts divide by `2 × 2 × 2 = 2³`.",
        ],
        explanation:
          "Shifting right by `n` places divides by {{2^n}}, so `n = 3` divides by {{2^3 = 8}}. Dividing by `6` (`2 × 3`) is one of the most common CIE Paper 1 traps!",
      },
      {
        id: "number-systems-m1-q12",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "twos-complement",
        question: "What is the exact range of denary integers that can be represented in **8-bit Two's Complement**?",
        options: ["−128 to +127", "−128 to +128", "0 to +255", "−127 to +127"],
        answerIndex: 0,
        hints: ["The MSB weighs `−128`, and the remaining seven bits sum to at most `64 + 32 + 16 + 8 + 4 + 2 + 1 = +127`."],
        explanation:
          "`10000000` gives the minimum `−128`, and `01111111` gives the maximum `+127` (`256` total integers including `0`). `+128` cannot be represented in 8-bit Two's Complement.",
      },
      {
        id: "number-systems-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "twos-complement",
        question: "What denary integer is represented by the 8-bit Two's Complement pattern `11010011`?",
        options: ["−46", "−83", "211", "−45"],
        answerIndex: 3,
        hints: [
          "The MSB is `1`, so start at `−128` and add the active positive weights (`64, 16, 2, 1`).",
          "Check by flipping all bits (`00101100`) and adding `1`.",
        ],
        explanation:
          "`−128 + 64 + 16 + 2 + 1 = −128 + 83 = −45` (check: invert `11010011` → `00101100`, `+1 = 00101101 = 45`, so `−45`). `−46` forgets the `+1` step, and `211` ignores Two's Complement completely.",
      },
      {
        id: "number-systems-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "twos-complement",
        question: "Which 8-bit Two's Complement binary pattern represents `−19`?",
        options: ["11101101", "11101100", "10010011", "00010011"],
        answerIndex: 0,
        hints: [
          "Write `+19` in 8-bit binary (`00010011`), invert all 8 bits, then add `1`.",
          "Cross-check that `−128 + positive bits = −19` (`128 − 19 = 109`).",
        ],
        explanation:
          "`+19 = 00010011` → invert to `11101100` → add `1` = `11101101` (`−128 + 64 + 32 + 8 + 4 + 1 = −128 + 109 = −19`). `10010011` (`−109`) wrongly treats the MSB as a sign-and-magnitude flag, while `11101100` (`−20`) forgets `+1`.",
      },
      {
        id: "number-systems-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "twos-complement",
        question: "A single 8-bit register contains `11111111`. How is this byte interpreted first as an **8-bit Two's Complement signed integer**, and second as an **8-bit unsigned integer**?",
        options: [
          "−127 (signed) and 255 (unsigned)",
          "−128 (signed) and 256 (unsigned)",
          "−1 (signed) and 255 (unsigned)",
          "−255 (signed) and 255 (unsigned)",
        ],
        answerIndex: 2,
        hints: [
          "In Two's Complement, sum `−128 + (64 + 32 + 16 + 8 + 4 + 2 + 1)`.",
          "In unsigned binary, sum `128 + 64 + 32 + 16 + 8 + 4 + 2 + 1`.",
        ],
        explanation:
          "In Two's Complement, `−128 + 127 = −1` (and flipping `11111111` gives `00000000`, `+1 = 1` → `−1`). In unsigned binary, all 8 positive weights sum to `255`.",
      },
    ],
  },
  {
    id: "number-systems-m2",
    title: "Paper 2 — Conversions, Shifts & Signed Arithmetic",
    questions: [
      {
        id: "number-systems-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "denary-binary-hex",
        question: "Convert the hexadecimal value `4A` into an 8-bit binary string.",
        options: ["01001100", "01001011", "1001010", "01001010"],
        answerIndex: 3,
        hints: ["Convert `4` into a 4-bit nibble (`0100`) and `A` (`10`) into a 4-bit nibble (`1010`)."],
        explanation:
          "`4 = 0100` (keeping the leading zero!) and `A = 10 = 1010`, giving the full 8-bit byte `01001010`. Dropping the leading zero gives only 7 bits (`1001010`).",
      },
      {
        id: "number-systems-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "denary-binary-hex",
        question: "What is the hexadecimal representation of the denary number `238`?",
        options: ["EE", "ED", "EF", "DE"],
        answerIndex: 0,
        hints: [
          "Convert `238` to 8-bit binary (`255 − 17 = 238`, so turn off `16` and `1`: `11101110`).",
          "Then read both 4-bit nibbles `1110` and `1110`.",
        ],
        explanation:
          "`238 = 128 + 64 + 32 + 8 + 4 + 2 = 11101110₂`. Each nibble is `1110 = 14 = E`, giving `EE` (`14 × 16 + 14 = 224 + 14 = 238`).",
      },
      {
        id: "number-systems-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "denary-binary-hex",
        question: "A 16-bit memory address is displayed in hexadecimal as `03D0`. What is this address in denary?",
        options: ["992", "976", "960", "61"],
        answerIndex: 1,
        hints: [
          "Hex place values from right to left are `1`, `16`, `256`, `4096`.",
          "`D = 13`, so compute `3 × 256 + 13 × 16 + 0`.",
        ],
        explanation:
          "`3 × 256 = 768` and `13 × 16 = 208`; `768 + 208 + 0 = 976` (or via binary `0000 0011 1101 0000 = 512 + 256 + 128 + 64 + 16 = 976`). `960` uses `C = 12` instead of `D = 13`.",
      },
      {
        id: "number-systems-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "denary-binary-hex",
        question: "An HTML colour code is written as `#00FF7F` (`#RRGGBB`). What is the denary intensity of the **blue** channel?",
        options: ["255", "127", "128", "0"],
        answerIndex: 1,
        hints: [
          "In `#RRGGBB`, the last two hex digits (`7F`) control Blue.",
          "Convert `7F` (`0111 1111₂`) to denary.",
        ],
        explanation:
          "The `#RRGGBB` pairs are Red `00` (`0`), Green `FF` (`255`), and Blue `7F` (`7 × 16 + 15 = 112 + 15 = 127`, or `01111111₂ = 127`).",
      },
      {
        id: "number-systems-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "denary-binary-hex",
        question: "A laptop's Network Interface Card has the MAC address `A8:5C:2C:09:1F:B4`. How many **binary bits** does this MAC address contain in total?",
        options: ["32 bits", "12 bits", "48 bits", "96 bits"],
        answerIndex: 2,
        hints: [
          "Count the hexadecimal digits (`6` pairs = `12` hex digits).",
          "Every hexadecimal digit represents exactly `4` binary bits.",
        ],
        explanation:
          "`12` hexadecimal digits × `4` bits per hex digit = `48` bits (`6` bytes). `32` bits is the length of an IPv4 address, not a MAC address.",
      },
      {
        id: "number-systems-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "binary-addition-overflow",
        question: "Add the unsigned 8-bit binary numbers `01101110` and `01011011`. What is the 8-bit sum?",
        options: ["11001001", "10111001", "11011001", "11000001"],
        answerIndex: 0,
        hints: [
          "Add right-to-left: `0+1=1`, `1+1=0 c1`, `1+0+1=0 c1`, `1+1+1=1 c1`...",
          "Denary check: `01101110 = 110` and `01011011 = 91`.",
        ],
        explanation:
          "`110 + 91 = 201`, and `201 = 128 + 64 + 8 + 1 = 11001001`. Dropping the carry in the `8`s column (`1+1+1 = 11₂`) falsely produces `11000001` (`193`).",
      },
      {
        id: "number-systems-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "binary-addition-overflow",
        question: "Unsigned `11100100` (`228`) and `00111000` (`56`) are added into an 8-bit CPU register. Because overflow occurs, the 9th bit is lost from the register. What 8-bit binary pattern remains inside the register?",
        options: ["00011100", "11111111", "00100100", "00011000"],
        answerIndex: 0,
        hints: [
          "`228 + 56 = 284`. Subtract the lost 9th bit (`256`) to check what remains in the lower 8 bits.",
          "Also verify by column addition of `11100100 + 00111000`.",
        ],
        explanation:
          "`11100100 + 00111000 = 1 00011100₂` (`284`). Once the 9th bit (`256`) overflows into the carry flag, the 8-bit register holds `00011100` (`284 − 256 = 28`). Standard CPU registers wrap around rather than clamping to `11111111`.",
      },
      {
        id: "number-systems-m2-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "binary-addition-overflow",
        question: "When `01011111` and `00000001` are added in 8-bit binary, how many columns generate a non-zero carry (`1`) to the next column left?",
        options: ["4", "1", "5", "6"],
        answerIndex: 2,
        hints: [
          "Trace bit 0 (`1+1`) through bit 5 (`0+0+carry`).",
          "The trailing five `1`s in `01011111` (`bits 0, 1, 2, 3, 4`) each cascade a carry of `1` until the `0` in bit 5 absorbs it!",
        ],
        explanation:
          "`01011111 + 00000001 = 01100000`. Columns `0, 1, 2, 3, 4` (`1, 2, 4, 8, 16`) all evaluate to `1 + 1 = 10₂`, generating **5** carries of `1` before bit 5 (`32`s column: `0 + 0 + 1 = 1`, carry `0`) stops the chain.",
      },
      {
        id: "number-systems-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "logical-shifts",
        question: "Perform a **logical right shift of 2 places** on the 8-bit register `10110100`. What is the resulting 8-bit pattern?",
        options: ["11101101", "11010000", "01011010", "00101101"],
        answerIndex: 3,
        hints: [
          "Drop the rightmost 2 bits (`00`) and pad two `0`s at the leftmost MSB end.",
          "Remember: a **logical** shift ALWAYS pads with `0`s, never `1`s!",
        ],
        explanation:
          "Dropping `00` on the right and padding `00` on the left gives `00101101` (`180 ÷ 4 = 45`). `11101101` would be an *arithmetic* sign-extending shift, whereas CIE `0478` specifies **logical** shifts that always pad `0`s.",
      },
      {
        id: "number-systems-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "logical-shifts",
        question: "An unsigned 8-bit register holds `01100100` (`100`). A logical left shift of `2` places is performed, leaving `10010000` (`144`). Why did the calculation fail to produce `400`?",
        options: [
          "Left shifts divide by 4 instead of multiplying by 4",
          "Vacated right-hand bits should have been padded with `1`s instead of `0`s",
          "A most-significant `1`-bit (`64`) was shifted out of the left end because `400 > 255` (overflow)",
          "A least-significant `1`-bit fell off the right end of the register",
        ],
        answerIndex: 2,
        hints: [
          "Look at bit 6 (`64`s column) of `01100100` when everything moves 2 places left.",
          "Can `400` fit inside an unsigned 8-bit register?",
        ],
        explanation:
          "`100 × 4 = 400`, which exceeds the 8-bit unsigned limit of `255`. During the 2-place left shift, the `1` in the `64`s column (`64 × 4 = 256`) fell off the left MSB edge (`400 − 256 = 144`), causing an overflow error.",
      },
      {
        id: "number-systems-m2-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "logical-shifts",
        question: "Register `R` initially stores unsigned `01111010` (`122`). The CPU performs a **logical right shift of 2 places**, immediately followed by a **logical left shift of 2 places**. What denary value is now in `R`?",
        options: ["30", "120", "122", "124"],
        answerIndex: 1,
        hints: [
          "Trace step 1: `01111010` shifted right by 2 discards the rightmost two bits `10`.",
          "Trace step 2: shifting the new value left by 2 pads `00` on the right — the discarded `10₂` never comes back!",
        ],
        explanation:
          "Step 1: `01111010` (`122`) >> 2 = `00011110` (`30`, discarding `10₂ = 2`). Step 2: `00011110` << 2 = `01111000` (`120`). Shifting right then left clears the bottom two bits rather than restoring `122`!",
      },
      {
        id: "number-systems-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "twos-complement",
        question: "Which 8-bit Two's Complement binary pattern represents the denary integer `−128`?",
        options: ["10000000", "11111110", "11111111", "01111111"],
        answerIndex: 0,
        hints: [
          "In 8-bit Two's Complement, the MSB alone has weight `−128`.",
          "All remaining seven bits (`64..1`) add positive values, so set them all to `0`.",
        ],
        explanation:
          "Setting the `−128` MSB to `1` and all positive weights (`64..1`) to `0` gives `10000000 = −128`. Adding any `1` in bits `6..0` only makes the number *less* negative (up to `11111111 = −1`).",
      },
      {
        id: "number-systems-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "twos-complement",
        question: "Convert the denary integer `−64` into 8-bit Two's Complement binary.",
        options: ["10100000", "10111111", "01000000", "11000000"],
        answerIndex: 3,
        hints: [
          "Use place values: `−128 + 64 = −64`.",
          "Or take `+64 = 01000000`, invert (`10111111`), and add `1`.",
        ],
        explanation:
          "`−128 + 64 = −64`, which activates only the `−128` and `+64` columns: `11000000` (check: `01000000` inverted is `10111111`, `+ 1 = 11000000`).",
      },
      {
        id: "number-systems-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "twos-complement",
        question: "Convert the 8-bit Two's Complement binary integer `10001110` into denary.",
        options: ["−115", "−114", "−14", "142"],
        answerIndex: 1,
        hints: [
          "Start with `−128` from the MSB `1`.",
          "Add the positive bits (`8 + 4 + 2 = 14`) to `−128`.",
        ],
        explanation:
          "`−128 + 8 + 4 + 2 = −128 + 14 = −114`. Choosing `−14` falls for the sign-and-magnitude trap (treating the MSB as a `−` symbol instead of `−128`), and `−115` forgets `+1` when inverting.",
      },
      {
        id: "number-systems-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "twos-complement",
        question: "An 8-bit ALU adds the Two's Complement integers `11101100` (`−20`) and `00100101` (`+37`), ignoring any carry out of the 8th bit. What 8-bit result and signed denary value are produced?",
        options: [
          "`10010001` (−111)",
          "`00010011` (+19)",
          "`00010001` (+17)",
          "`11110001` (−15)",
        ],
        answerIndex: 2,
        hints: [
          "In denary, `−20 + 37 = +17`.",
          "Add `11101100 + 00100101` column-by-column; the 9th carry-out bit is discarded in Two's Complement addition!",
        ],
        explanation:
          "`11101100 + 00100101 = (1)00010001`. Discarding the carry-out leaves `00010001 = 16 + 1 = +17`, demonstrating why Two's Complement lets hardware use one standard binary adder for both addition and subtraction!",
      },
    ],
  },
  {
    id: "number-systems-m3",
    title: "Paper 3 — Exam-Standard Challenge",
    questions: [
      {
        id: "number-systems-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "denary-binary-hex",
        question: "What is the largest **unsigned** denary integer that can be stored in a **12-bit** binary register?",
        options: ["4095", "2047", "2048", "4096"],
        answerIndex: 0,
        hints: ["An `n`-bit unsigned register stores {{2^n}} values from `0` up to {{2^n - 1}}, and {{2^10 = 1024}}."],
        explanation:
          "{{2^12 = 4096}} total combinations (`0` to `4095`), so the largest unsigned value (`111111111111₂`) is `4096 − 1 = 4095`.",
      },
      {
        id: "number-systems-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "denary-binary-hex",
        question: "Convert the 16-bit binary number `0000110110100110` into 4-digit hexadecimal.",
        options: ["0CA6", "0DA6", "DA60", "0DB6"],
        answerIndex: 1,
        hints: ["Group into four nibbles from left to right: `0000`, `1101`, `1010`, `0110`."],
        explanation:
          "`0000 = 0`, `1101 = 13 = D`, `1010 = 10 = A`, `0110 = 6` → `0DA6`. Confusing `1101` (`13 = D`) with `1100` (`12 = C`) gives `0CA6`.",
      },
      {
        id: "number-systems-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "denary-binary-hex",
        question: "Three unsigned values are given in different bases: hexadecimal `A3`, binary `10100101`, and denary `161`. Which list orders them from **smallest to largest**?",
        options: [
          "`A3`, `161`, `10100101`",
          "`10100101`, `A3`, `161`",
          "`161`, `10100101`, `A3`",
          "`161`, `A3`, `10100101`",
        ],
        answerIndex: 3,
        hints: [
          "Convert both `A3` and `10100101` into denary (or all three into hex!).",
          "`10100101₂` in nibbles is `1010` (`A`) and `0101` (`5`) = `A5₁₆`.",
        ],
        explanation:
          "In denary: `161` = `161`, `A3₁₆ = 10 × 16 + 3 = 163`, and `10100101₂ = A5₁₆ = 165`. Thus `161 < A3 < 10100101`.",
      },
      {
        id: "number-systems-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "denary-binary-hex",
        question: "An HTTP status or sensor code is stored as 3-digit hexadecimal `1F4`. What is `1F4` in denary?",
        options: ["484", "276", "516", "500"],
        answerIndex: 3,
        hints: [
          "Use base-16 place values `256`, `16`, and `1`.",
          "`F = 15`, so calculate `1 × 256 + 15 × 16 + 4`.",
        ],
        explanation:
          "`1 × 256 + 15 × 16 + 4 = 256 + 240 + 4 = 500` (`484` mistakenly uses `E = 14` instead of `F = 15`).",
      },
      {
        id: "number-systems-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "binary-addition-overflow",
        question: "Three unsigned 8-bit binary readings `00101010`, `00110111`, and `00011001` are totalled. What is the exact 8-bit binary sum?",
        options: ["01110110", "01111010", "10000010", "01111000"],
        answerIndex: 1,
        hints: [
          "Add the first two bytes (`00101010 + 00110111 = 01100001`), then add `00011001`.",
          "Check in denary: `42 + 55 + 25`.",
        ],
        explanation:
          "`42 + 55 + 25 = 122`, and `122 = 64 + 32 + 16 + 8 + 2 = 01111010` (`01100001 + 00011001 = 01111010`).",
      },
      {
        id: "number-systems-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "binary-addition-overflow",
        question: "An 8-bit unsigned register adds `10101010` and `01010101`. Which statement accurately describes the outcome?",
        options: [
          "The sum is `11111111` and an overflow error occurs because the MSB is `1`",
          "The sum is `11111111` (255) and NO overflow error occurs",
          "The sum is `11111110` (254) and NO overflow error occurs",
          "The sum is `00000000` and an overflow error occurs",
        ],
        answerIndex: 1,
        hints: [
          "Look at every column: one operand has `1` and the other has `0`!",
          "Does `1 + 0` ever generate a carry bit?",
        ],
        explanation:
          "Every single bit position adds `1 + 0 = 1` with **zero carries**, producing `11111111` (`170 + 85 = 255`). Because `255` fits in 8 unsigned bits with no 9th bit, **no** overflow occurs!",
      },
      {
        id: "number-systems-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "binary-addition-overflow",
        question: "Two unsigned 8-bit registers contain hexadecimal `9C` and `7E`. They are added into an 8-bit accumulator (any 9th carry bit goes to the status register, not the accumulator). What hexadecimal value ends up in the 8-bit accumulator?",
        options: ["FF", "1B", "1A", "2A"],
        answerIndex: 2,
        hints: [
          "Expand to nibbles: `9C = 1001 1100` (`156`) and `7E = 0111 1110` (`126`).",
          "Add in binary or compute `156 + 126 − 256` and convert back to hex.",
        ],
        explanation:
          "`156 + 126 = 282`. Subtracting the overflowed 9th bit (`256`) leaves `26` in the 8-bit accumulator: `26 = 16 + 10 = 1A₁₆` (binary `1 0001 1010` → lower 8 bits `0001 1010 = 1A`).",
      },
      {
        id: "number-systems-m3-q08",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "logical-shifts",
        question: "Which single shift operation divides an unsigned binary integer by `16`?",
        options: [
          "Logical right shift by 4 places",
          "Logical left shift by 4 places",
          "Logical right shift by 8 places",
          "Logical right shift by 2 places",
        ],
        answerIndex: 0,
        hints: ["Write `16` as a power of `2` ({{16 = 2^4}}) and pick the direction that reduces values."],
        explanation:
          "Since {{16 = 2^4}}, a **logical right shift by 4 places** divides an unsigned integer by `16` (truncating any remainder).",
      },
      {
        id: "number-systems-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "logical-shifts",
        question: "Unsigned `00111011` (`59`) undergoes a logical right shift of `1` place. What is the new denary value and why is accuracy lost?",
        options: [
          "`29`, because a `1`-bit was shifted out of the leftmost MSB end",
          "`29`, because a `1`-bit was shifted out of the rightmost LSB end, truncating `.5`",
          "`30`, because shifting rounds `.5` up to the nearest integer",
          "`118`, because shifting right doubles the binary value",
        ],
        answerIndex: 1,
        hints: [
          "Drop the rightmost bit (`1`) of `00111011` and pad `0` on the left → `00011101`.",
          "Which end of the register lost the `1`-bit?",
        ],
        explanation:
          "`00111011` >> 1 = `00011101` = `16 + 8 + 4 + 1 = 29`. Because the least-significant `1`-bit fell off the **right (LSB)** end, `59 ÷ 2 = 29.5` was truncated (never rounded up!) to `29`.",
      },
      {
        id: "number-systems-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "logical-shifts",
        question: "An 8-bit unsigned register holds `00010111` (`23`). What is the **maximum** number of places it can be logically shifted **left** without causing an overflow error?",
        options: ["4 places", "2 places", "3 places", "1 place"],
        answerIndex: 2,
        hints: [
          "Count how many leading `0`s sit to the left of the highest `1`-bit in `00010111`.",
          "Check `23 × 2³ = 184 ≤ 255` vs `23 × 2⁴ = 368 > 255`.",
        ],
        explanation:
          "`00010111` has **3** leading zeros before the `1` in the `16`s column. Shifting left by `3` places gives `10111000` (`184 ≤ 255`, exact), whereas shifting left by `4` places drops that `1`-bit off the MSB (`368 > 255`).",
      },
      {
        id: "number-systems-m3-q11",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "twos-complement",
        question: "How is the positive denary integer `+58` represented in **8-bit Two's Complement**?",
        options: ["00111010", "11000110", "00110110", "10111010"],
        answerIndex: 0,
        hints: ["Positive integers (`0` to `+127`) in Two's Complement start with `0` and are NOT inverted!"],
        explanation:
          "Positive Two's Complement integers look identical to unsigned binary with MSB `0`: `32 + 16 + 8 + 2 = 58` → `00111010`. `11000110` is `−58` (flipped and `+1` by mistake).",
      },
      {
        id: "number-systems-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "twos-complement",
        question: "Which 8-bit Two's Complement binary pattern represents `−1`?",
        options: ["10000001", "11111110", "01111111", "11111111"],
        answerIndex: 3,
        hints: [
          "Take `+1 = 00000001`, invert all bits (`11111110`), and add `1`.",
          "Check with weights: `−128 + 127 = −1`.",
        ],
        explanation:
          "`−128 + (64 + 32 + 16 + 8 + 4 + 2 + 1) = −128 + 127 = −1`, so `11111111 = −1`. `10000001` is actually `−128 + 1 = −127`!",
      },
      {
        id: "number-systems-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "twos-complement",
        question: "Convert `−105` into 8-bit Two's Complement binary.",
        options: ["10010110", "10011001", "10010111", "11101001"],
        answerIndex: 2,
        hints: [
          "Using place values: `−128 + 23 = −105`, and `23 = 16 + 4 + 2 + 1`.",
          "Or flip `+105` (`01101001`) → `10010110` and add `1`.",
        ],
        explanation:
          "`+105 = 01101001` (`64+32+8+1`). Inverting gives `10010110`, and adding `1` gives `10010111` (`−128 + 16 + 4 + 2 + 1 = −105`). `10010110` (`−106`) forgot `+1`.",
      },
      {
        id: "number-systems-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "twos-complement",
        question: "Four 8-bit **Two's Complement** values are `A = 11111010`, `B = 10000100`, `C = 01111111`, and `D = 00000000`. Which list orders them from **most negative to most positive**?",
        options: [
          "`B`, `A`, `D`, `C`",
          "`A`, `B`, `D`, `C`",
          "`B`, `A`, `C`, `D`",
          "`D`, `B`, `A`, `C`",
        ],
        answerIndex: 0,
        hints: [
          "Bytes starting with `1` are negative (`−128` plus any `1`-bits in columns `64..1`).",
          "Evaluate `B = −128 + 4 = −124` and `A = −128 + 122 = −6`.",
        ],
        explanation:
          "`B = 10000100 = −124`, `A = 11111010 = −6`, `D = 00000000 = 0`, and `C = 01111111 = +127`. Many learners swap `A` and `B` because `A` has more `1`-bits — in Two's Complement, more positive `1`-bits push a negative number *closer* to zero!",
      },
      {
        id: "number-systems-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "twos-complement",
        question: "Two positive 8-bit Two's Complement integers `01010000` (`+80`) and `01000110` (`+70`) are added, producing `10010110`. Why does this cause a **signed overflow error** even though no 9th bit was generated?",
        options: [
          "Two's Complement hardware cannot add two positive integers together",
          "`10010110` represents `+150` cleanly in Two's Complement without any error",
          "`+80 + +70 = +150` exceeds `+127`, carrying into the `−128` sign bit so the result appears negative (`−106`)",
          "The rightmost bit should have carried a `1` out of bit 7",
        ],
        answerIndex: 2,
        hints: [
          "What is the maximum positive integer in 8-bit Two's Complement?",
          "Look at the MSB of the sum `10010110` (`−128 + 16 + 4 + 2 = −106`).",
        ],
        explanation:
          "In 8-bit Two's Complement the maximum positive value is `+127`. Adding `+80 + +70 = +150 > +127` carries a `1` into bit 7 (the `−128` sign column), corrupting the sign so two positive numbers appear to sum to `−106`!",
      },
    ],
  },
];
