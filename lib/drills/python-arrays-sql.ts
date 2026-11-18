import type { Drill } from "./types.ts";

const WORDS = [
  "COMPUTER",
  "ALGORITHM",
  "DATABASE",
  "SECURITY",
  "PROTOCOL",
  "HARDWARE",
  "COMPILER",
  "VARIABLE",
  "FUNCTION",
  "KEYBOARD",
  "TERMINAL",
  "ETHERNET",
  "REGISTER",
  "OVERFLOW",
  "SOFTWARE",
  "PIPELINE",
] as const;

const ARRAY_NAMES = ["Scores", "Temps", "Grid", "Seats", "Stock", "Marks", "Pixels", "Cells"] as const;
const CLUBS = ["Coding", "Robotics", "Chess", "Drama"] as const;
const STUDENTS = ["Tara", "Zain", "Chloe", "Dev", "Maya", "Liam", "Nadia", "Kai"] as const;

export const drills: Drill[] = [
  {
    id: "python-arrays-sql.div-mod",
    topicId: "python-arrays-sql",
    title: "DIV & MOD Integer Arithmetic",
    level: 1,
    guideRef: "variables-types-operators",
    generate(rng, tier) {
      if (tier === 1) {
        const b = rng.int(3, 12);
        const q = rng.int(0, 12);
        const r = rng.int(1, b - 1);
        const a = q * b + r;
        const askMod = rng.bool();
        const op = askMod ? "MOD" : "DIV";
        const pyOp = askMod ? "%" : "//";
        const ans = askMod ? r : q;
        const wrong = askMod ? q : r;
        return {
          prompt: `Evaluate the CIE pseudocode expression \`${a} ${op} ${b}\` (Python \`${a} ${pyOp} ${b}\`). Give a single integer.`,
          answer: { type: "number", value: ans },
          solution: [
            `Divide \`${a}\` by \`${b}\`: \`${b} × ${q} = ${q * b}\` with remainder \`${a} − ${q * b} = ${r}\`.`,
            `\`DIV\` (\`//\`) returns quotient \`${q}\`; \`MOD\` (\`%\`) returns remainder \`${r}\`.`,
            `Therefore \`${a} ${op} ${b} = ${ans}\`.`,
          ],
          hint: askMod
            ? `MOD (%) returns the leftover remainder after dividing ${a} by ${b}.`
            : `DIV (//) returns how many whole times ${b} fits into ${a}.`,
          traps:
            wrong !== ans
              ? [
                  {
                    spec: { type: "number", value: wrong },
                    feedback: askMod
                      ? `That is ${a} DIV ${b} (the quotient). MOD asks for the remainder!`
                      : `That is ${a} MOD ${b} (the remainder). DIV asks for the whole quotient!`,
                  },
                ]
              : [],
        };
      }
      if (tier === 2) {
        if (rng.bool()) {
          const mins = rng.int(2, 11);
          const secs = rng.int(4, 56);
          const total = mins * 60 + secs;
          const askSecs = rng.bool();
          const ans = askSecs ? secs : mins;
          const other = askSecs ? mins : secs;
          return {
            prompt: `Given \`TotalSecs ← ${total}\`, what integer is stored in \`Result ← TotalSecs ${askSecs ? "MOD" : "DIV"} 60\`?`,
            answer: { type: "number", value: ans },
            solution: [
              `\`60 × ${mins} = ${mins * 60}\`, and \`${total} − ${mins * 60} = ${secs}\`.`,
              `\`${total} ${askSecs ? "MOD" : "DIV"} 60 = ${ans}\`.`,
            ],
            hint: `60 × ${mins} = ${mins * 60}. Check whether DIV (whole minutes) or MOD (leftover seconds) is asked.`,
            traps:
              other !== ans
                ? [{ spec: { type: "number", value: other }, feedback: "You swapped DIV (whole minutes) and MOD (leftover seconds)!" }]
                : [],
          };
        }
        const h = rng.int(1, 9);
        const t = rng.int(0, 9);
        const u = rng.int(1, 9);
        const num = h * 100 + t * 10 + u;
        const pickMid = rng.bool();
        const expr = pickMid ? `(N DIV 10) MOD 10` : `(N DIV 100) + (N MOD 10)`;
        const ans = pickMid ? t : h + u;
        const trapVal = pickMid ? u : h + t;
        return {
          prompt: `Let \`N ← ${num}\`. Evaluate \`${expr}\` and give the resulting integer.`,
          answer: { type: "number", value: ans },
          solution: pickMid
            ? [
                `First \`${num} DIV 10 = ${h * 10 + t}\` (drops the units digit \`${u}\`).`,
                `Next \`${h * 10 + t} MOD 10 = ${t}\` (extracts the tens digit).`,
              ]
            : [
                `\`${num} DIV 100 = ${h}\` (hundreds digit) and \`${num} MOD 10 = ${u}\` (units digit).`,
                `Adding them gives \`${h} + ${u} = ${ans}\`.`,
              ],
          hint: "Work from the inside brackets outwards: DIV 10 strips the last digit; MOD 10 keeps only the last digit.",
          traps:
            trapVal !== ans
              ? [{ spec: { type: "number", value: trapVal }, feedback: "Trace each DIV and MOD step carefully on hundreds, tens, and units!" }]
              : [],
        };
      }
      const a = rng.int(18, 95);
      const b = rng.int(4, 11);
      const c = rng.int(3, 8);
      const q = Math.floor(a / b);
      const r = a % b;
      const ans = q * c + r;
      const swapped = r * c + q;
      return {
        prompt: `Trace this Python snippet and give the integer printed:\n\`a = ${a}\`\n\`ans = (a // ${b}) * ${c} + (a % ${b})\`\n\`print(ans)\``,
        answer: { type: "number", value: ans },
        solution: [
          `\`${a} // ${b} = ${q}\` because \`${b} × ${q} = ${q * b}\`.`,
          `\`${a} % ${b} = ${r}\` because \`${a} − ${q * b} = ${r}\`.`,
          `Therefore \`ans = ${q} × ${c} + ${r} = ${ans}\`.`,
        ],
        hint: "Remember Python // is integer quotient (DIV) and % is remainder (MOD).",
        traps:
          swapped !== ans
            ? [{ spec: { type: "number", value: swapped }, feedback: "Careful: // is quotient (DIV) and % is remainder (MOD)!" }]
            : [],
      };
    },
  },
  {
    id: "python-arrays-sql.loop-trace",
    topicId: "python-arrays-sql",
    title: "Tracing FOR, WHILE & REPEAT..UNTIL Loops",
    level: 2,
    guideRef: "selection-iteration",
    generate(rng, tier) {
      if (tier === 1) {
        const start = rng.int(1, 6);
        const count = rng.int(3, 7);
        if (rng.bool()) {
          const stop = start + count;
          let sum = 0;
          for (let k = start; k < stop; k++) sum += k;
          const wrongInclusive = sum + stop;
          return {
            prompt: `What integer is printed by this Python loop?\n\`s = 0\`\n\`for k in range(${start}, ${stop}):\`\n\`    s = s + k\`\n\`print(s)\``,
            answer: { type: "number", value: sum },
            solution: [
              `Python \`range(${start}, ${stop})\` runs for \`k = ${Array.from({ length: count }, (_, i) => start + i).join(", ")}\` (\`${stop}\` is excluded!).`,
              `Adding those values gives \`${sum}\`.`,
            ],
            hint: `In Python range(${start}, ${stop}), the upper value ${stop} is NOT included!`,
            traps: [
              {
                spec: { type: "number", value: wrongInclusive },
                feedback: `Python range(${start}, ${stop}) stops at ${stop - 1} — do not add ${stop}!`,
              },
            ],
          };
        }
        const end = start + count - 1;
        let sum = 0;
        for (let k = start; k <= end; k++) sum += k;
        const wrongExclusive = sum - end;
        return {
          prompt: `What integer is output by this CIE pseudocode?\n\`S ← 0\`\n\`FOR K ← ${start} TO ${end}\`\n\`  S ← S + K\`\n\`NEXT K\`\n\`OUTPUT S\``,
          answer: { type: "number", value: sum },
          solution: [
            `CIE \`FOR K ← ${start} TO ${end}\` is **inclusive** of both \`${start}\` and \`${end}\`.`,
            `Summing \`${Array.from({ length: count }, (_, i) => start + i).join(" + ")} = ${sum}\`.`,
          ],
          hint: `CIE pseudocode FOR ${start} TO ${end} includes ${end} on the final iteration!`,
          traps: [
            {
              spec: { type: "number", value: wrongExclusive },
              feedback: `Unlike Python range(), CIE FOR ${start} TO ${end} INCLUDES ${end}!`,
            },
          ],
        };
      }
      if (tier === 2) {
        const init = rng.int(1, 9);
        const step = rng.int(3, 8);
        const limit = init + step * rng.int(2, 4) - rng.int(1, step - 1);
        let x = init;
        const seq: number[] = [];
        do {
          x += step;
          seq.push(x);
        } while (!(x > limit));
        const oneLess = x - step;
        return {
          prompt: `Trace this CIE \`REPEAT..UNTIL\` loop and give the final value of \`X\` output:\n\`X ← ${init}\`\n\`REPEAT\`\n\`  X ← X + ${step}\`\n\`UNTIL X > ${limit}\`\n\`OUTPUT X\``,
          answer: { type: "number", value: x },
          solution: [
            `Start at \`X = ${init}\`. Each pass adds \`${step}\` until \`X > ${limit}\` becomes \`TRUE\`.`,
            `\`X\` steps through \`${seq.join(" → ")}\`. At \`${x}\`, \`${x} > ${limit}\` is \`TRUE\`, so the loop stops and outputs \`${x}\`.`,
          ],
          hint: `REPEAT..UNTIL runs the body first and stops as soon as X > ${limit} becomes TRUE.`,
          traps: [
            {
              spec: { type: "number", value: oneLess },
              feedback: `At X = ${oneLess}, ${oneLess} > ${limit} is still FALSE, so REPEAT..UNTIL executes one more time!`,
            },
          ],
        };
      }
      if (rng.bool()) {
        const start = rng.int(15, 35);
        const delta = rng.int(2, 8);
        const threshold = start - rng.int(3, 10);
        const ans = start + delta;
        return {
          prompt: `Careful! What integer is output by this CIE pseudocode?\n\`N ← ${start}\`\n\`REPEAT\`\n\`  N ← N + ${delta}\`\n\`UNTIL N >= ${threshold}\`\n\`OUTPUT N\``,
          answer: { type: "number", value: ans },
          solution: [
            `\`REPEAT..UNTIL\` is a post-condition loop, so its body **always runs at least once** even though \`${start} >= ${threshold}\` already.`,
            `Pass 1 sets \`N ← ${start} + ${delta} = ${ans}\`. Then \`${ans} >= ${threshold}\` is \`TRUE\`, so the loop exits with \`${ans}\`.`,
          ],
          hint: "Does REPEAT..UNTIL check its condition before or AFTER running the body once?",
          traps: [
            {
              spec: { type: "number", value: start },
              feedback: "REPEAT..UNTIL checks at the bottom, so the body ALWAYS executes at least once!",
            },
          ],
        };
      }
      const v0 = rng.int(2, 6);
      const mult = rng.int(2, 3);
      const add = rng.int(1, 4);
      const cap = rng.int(25, 75);
      let cur = v0;
      const trace: number[] = [cur];
      while (cur < cap) {
        cur = cur * mult + add;
        trace.push(cur);
      }
      const prev = trace.length >= 2 ? trace[trace.length - 2] : v0;
      return {
        prompt: `Trace this Python \`while\` loop and give the integer printed:\n\`v = ${v0}\`\n\`while v < ${cap}:\`\n\`    v = v * ${mult} + ${add}\`\n\`print(v)\``,
        answer: { type: "number", value: cur },
        solution: [
          `Trace \`v\` step-by-step while \`v < ${cap}\`: \`${trace.join(" → ")}\`.`,
          `Once \`v = ${cur}\`, \`${cur} < ${cap}\` is \`False\`, so \`${cur}\` is printed.`,
        ],
        hint: `Keep updating v = v * ${mult} + ${add} as long as v is strictly less than ${cap}.`,
        traps:
          prev !== cur
            ? [{ spec: { type: "number", value: prev }, feedback: `${prev} < ${cap} is still True, so the loop body runs one more time!` }]
            : [],
      };
    },
  },
  {
    id: "python-arrays-sql.substring-slice",
    topicId: "python-arrays-sql",
    title: "CIE SUBSTRING (1-Indexed) vs Python Slicing (0-Indexed)",
    level: 2,
    guideRef: "strings-subroutines-scope",
    generate(rng, tier) {
      const word = rng.pick(WORDS);
      if (tier === 1) {
        const len = rng.int(3, 5);
        const start1 = rng.int(1, word.length - len + 1);
        const ans = word.slice(start1 - 1, start1 - 1 + len);
        const zeroIdxTrap = start1 < word.length ? word.slice(start1, start1 + len) : word.slice(0, len - 1);
        return {
          prompt: `Let \`S ← "${word}"\`. What exact characters are returned by CIE pseudocode \`SUBSTRING(S, ${start1}, ${len})\`? Type the letters only (without quotes).`,
          answer: { type: "text", accept: [ans], display: ans },
          solution: [
            `CIE \`SUBSTRING(S, start, length)\` is **1-indexed** and takes \`length\` characters.`,
            `Position \`${start1}\` of \`"${word}"\` is \`'${word[start1 - 1]}'\`. Taking \`${len}\` characters gives \`${ans}\`.`,
          ],
          hint: `Number "${word}" starting at 1 (1=${word[0]}, 2=${word[1]}...), go to position ${start1}, and take ${len} characters.`,
          traps:
            zeroIdxTrap.toLowerCase() !== ans.toLowerCase() && zeroIdxTrap.length > 0
              ? [
                  {
                    spec: { type: "text", accept: [zeroIdxTrap] },
                    feedback: `You started from index 0 like Python! CIE SUBSTRING starts counting at position 1.`,
                  },
                ]
              : [],
        };
      }
      if (tier === 2) {
        const len = rng.int(2, 4);
        const i0 = rng.int(0, word.length - len);
        const stop0 = i0 + len;
        const ans = word.slice(i0, stop0);
        const cieTrap = i0 >= 1 ? word.slice(i0 - 1, i0 - 1 + stop0) : word.slice(0, stop0 + 1);
        return {
          prompt: `In Python, \`s = "${word}"\`. What exact characters does \`s[${i0}:${stop0}]\` evaluate to? Type the letters only (without quotes).`,
          answer: { type: "text", accept: [ans], display: ans },
          solution: [
            `Python strings are **0-indexed** (\`0=${word[0]}, 1=${word[1]}...\`) and \`stop\` (\`${stop0}\`) is **excluded**.`,
            `Indices \`${i0}\` up to \`${stop0 - 1}\` have length \`${stop0} − ${i0} = ${len}\`, giving \`${ans}\`.`,
          ],
          hint: `Start at 0-based index ${i0} and stop BEFORE index ${stop0} (${stop0 - i0} characters total).`,
          traps:
            cieTrap.toLowerCase() !== ans.toLowerCase() && cieTrap.length > 0
              ? [
                  {
                    spec: { type: "text", accept: [cieTrap] },
                    feedback: `Remember Python s[${i0}:${stop0}] is 0-indexed and stops BEFORE index ${stop0} (the 2nd number is stop, not length)!`,
                  },
                ]
              : [],
        };
      }
      // tier 3: convert CIE SUBSTRING(S, start, len) to Python stop index or evaluate combined LCASE/UCASE + LENGTH
      if (rng.bool()) {
        const start1 = rng.int(2, 5);
        const len = rng.int(2, 4);
        const pyStart = start1 - 1;
        const pyStop = pyStart + len;
        return {
          prompt: `In CIE pseudocode we write \`SUBSTRING(Word, ${start1}, ${len})\`. In Python we write \`word[${pyStart}:k]\` to extract the **exact same** substring. What integer must \`k\` be?`,
          answer: { type: "number", value: pyStop },
          solution: [
            `CIE position \`${start1}\` corresponds to Python 0-based start index \`${start1} − 1 = ${pyStart}\`.`,
            `To extract \`${len}\` characters in Python, the exclusive stop index must be \`${pyStart} + ${len} = ${pyStop}\`.`,
          ],
          hint: `In Python s[a:k], the slice length is k − a. We need k − ${pyStart} = ${len}!`,
          traps: [
            {
              spec: { type: "number", value: pyStop - 1 },
              feedback: `In Python slicing s[${pyStart}:k], index k is EXCLUDED — so k must be ${pyStart} + ${len} = ${pyStop}!`,
            },
          ],
        };
      }
      const w1 = rng.pick(WORDS);
      const p1 = rng.int(1, 4);
      const l1 = rng.int(2, 4);
      const sub = w1.slice(p1 - 1, p1 - 1 + l1).toLowerCase();
      const totalChars = sub.length + w1.length;
      return {
        prompt: `Given \`S ← "${w1}"\`, evaluate \`LENGTH(LCASE(SUBSTRING(S, ${p1}, ${l1}))) + LENGTH(S)\`. Give a single integer.`,
        answer: { type: "number", value: totalChars },
        solution: [
          `\`SUBSTRING("${w1}", ${p1}, ${l1})\` has length \`${l1}\`, and \`LCASE(...)\` does not change its length (\`${l1}\`).`,
          `\`LENGTH("${w1}") = ${w1.length}\`, so \`${l1} + ${w1.length} = ${totalChars}\`.`,
        ],
        hint: `SUBSTRING(S, ${p1}, ${l1}) always has ${l1} characters, and "${w1}" has ${w1.length} characters.`,
        traps: [
          {
            spec: { type: "number", value: w1.length },
            feedback: `Don't forget to add the length of the SUBSTRING (${l1}) to LENGTH(S) (${w1.length})!`,
          },
        ],
      };
    },
  },
  {
    id: "python-arrays-sql.arrays-files-trace",
    topicId: "python-arrays-sql",
    title: "1D & 2D Array Bounds and Element Indexing",
    level: 2,
    guideRef: "arrays-files",
    generate(rng, tier) {
      const name = rng.pick(ARRAY_NAMES);
      if (tier === 1) {
        const rLow = rng.pick([0, 1] as const);
        const rHigh = rng.int(3, 9);
        const cLow = rng.pick([0, 1] as const);
        const cHigh = rng.int(3, 8);
        const rows = rHigh - rLow + 1;
        const cols = cHigh - cLow + 1;
        const total = rows * cols;
        const offByOne = rHigh * cHigh;
        return {
          prompt: `How many total elements can be stored in \`DECLARE ${name} : ARRAY[${rLow}:${rHigh}, ${cLow}:${cHigh}] OF INTEGER\`? Give a single integer.`,
          answer: { type: "number", value: total },
          solution: [
            `Row count from \`${rLow}\` to \`${rHigh}\` inclusive = \`${rHigh} − ${rLow} + 1 = ${rows}\`.`,
            `Column count from \`${cLow}\` to \`${cHigh}\` inclusive = \`${cHigh} − ${cLow} + 1 = ${cols}\`.`,
            `Total elements = \`${rows} × ${cols} = ${total}\`.`,
          ],
          hint: "Use (Upper − Lower + 1) for each dimension, especially when a lower bound is 0!",
          traps:
            offByOne !== total
              ? [
                  {
                    spec: { type: "number", value: offByOne },
                    feedback: "Careful with lower bound 0! Indices 0..N contain N + 1 elements, not N.",
                  },
                ]
              : [],
        };
      }
      if (tier === 2) {
        const g = [
          [rng.int(10, 29), rng.int(30, 49), rng.int(50, 69)],
          [rng.int(11, 28), rng.int(31, 48), rng.int(51, 68)],
          [rng.int(12, 27), rng.int(32, 47), rng.int(52, 67)],
        ];
        const r = rng.int(0, 2);
        let c = rng.int(0, 2);
        if (c === r) c = (c + 1) % 3;
        const isPy = rng.bool();
        const ans = g[r][c];
        const transposed = g[c][r];
        if (isPy) {
          return {
            prompt: `Given the Python 2D list \`${name.toLowerCase()} = ${JSON.stringify(g)}\`, what integer is \`${name.toLowerCase()}[${r}][${c}]\`?`,
            answer: { type: "number", value: ans },
            solution: [
              `Python lists are **0-indexed**, and \`[row][col]\` selects row \`${r}\` (\`${JSON.stringify(g[r])}\`), then column \`${c}\`.`,
              `Element \`${name.toLowerCase()}[${r}][${c}] = ${ans}\`.`,
            ],
            hint: `Row index ${r} first (starting from 0), then column index ${c} (starting from 0).`,
            traps:
              transposed !== ans
                ? [{ spec: { type: "number", value: transposed }, feedback: "Row comes FIRST, column SECOND — don't swap [row][col]!" }]
                : [],
          };
        }
        return {
          prompt: `A 1-indexed CIE 2D array \`${name}[1:3, 1:3]\` has rows:\nRow 1: \`${g[0].join(", ")}\` · Row 2: \`${g[1].join(", ")}\` · Row 3: \`${g[2].join(", ")}\`.\nWhat integer is \`${name}[${r + 1}, ${c + 1}]\`?`,
          answer: { type: "number", value: ans },
          solution: [
            `\`${name}[Row, Col]\` looks up Row \`${r + 1}\` (\`${g[r].join(", ")}\`), Column \`${c + 1}\`.`,
            `That element is \`${ans}\`.`,
          ],
          hint: `Look at Row ${r + 1} first, then pick the ${c + 1}${c + 1 === 1 ? "st" : c + 1 === 2 ? "nd" : "rd"} item across.`,
          traps:
            transposed !== ans
              ? [{ spec: { type: "number", value: transposed }, feedback: "In CIE 2D arrays Array[Row, Col], Row is first and Column is second!" }]
              : [],
        };
      }
      // tier 3: indirect / sum across row or column
      const g = [
        [rng.int(2, 9), rng.int(3, 9), rng.int(4, 9)],
        [rng.int(2, 9), rng.int(3, 9), rng.int(4, 9)],
        [rng.int(2, 9), rng.int(3, 9), rng.int(4, 9)],
      ];
      const targetIdx = rng.int(1, 3);
      const sumRow = rng.bool();
      const rowTotal = g[targetIdx - 1][0] + g[targetIdx - 1][1] + g[targetIdx - 1][2];
      const colTotal = g[0][targetIdx - 1] + g[1][targetIdx - 1] + g[2][targetIdx - 1];
      const ans = sumRow ? rowTotal : colTotal;
      const other = sumRow ? colTotal : rowTotal;
      const exprInside = sumRow ? `${name}[${targetIdx}, K]` : `${name}[K, ${targetIdx}]`;
      return {
        prompt: `\`${name}[1:3, 1:3]\` holds Row 1: \`[${g[0].join(", ")}]\`, Row 2: \`[${g[1].join(", ")}]\`, Row 3: \`[${g[2].join(", ")}]\`.\nWhat integer is output by:\n\`Total ← 0\`\n\`FOR K ← 1 TO 3\`\n\`  Total ← Total + ${exprInside}\`\n\`NEXT K\`\n\`OUTPUT Total\``,
        answer: { type: "number", value: ans },
        solution: [
          sumRow
            ? `\`${name}[${targetIdx}, K]\` fixes **Row \`${targetIdx}\`** and sums columns \`1..3\`: \`${g[targetIdx - 1].join(" + ")} = ${ans}\`.`
            : `\`${name}[K, ${targetIdx}]\` varies \`Row = 1..3\` down **Column \`${targetIdx}\`**: \`${g[0][targetIdx - 1]} + ${g[1][targetIdx - 1]} + ${g[2][targetIdx - 1]} = ${ans}\`.`,
        ],
        hint: sumRow
          ? `The first index is fixed at ${targetIdx}, so you are summing across Row ${targetIdx}.`
          : `The second index is fixed at ${targetIdx}, so you are summing down Column ${targetIdx}.`,
        traps:
          other !== ans
            ? [{ spec: { type: "number", value: other }, feedback: "Check whether K is in the Row position [K, c] or the Column position [r, K]!" }]
            : [],
      };
    },
  },
  {
    id: "python-arrays-sql.sql-queries",
    topicId: "python-arrays-sql",
    title: "Tracing SQL SELECT, WHERE, ORDER BY, SUM & COUNT",
    level: 3,
    guideRef: "databases-sql",
    generate(rng, tier) {
      const names = rng.shuffle(STUDENTS).slice(0, 4);
      const c1 = rng.pick(CLUBS);
      const c2 = rng.pick(CLUBS.filter((c) => c !== c1));
      const rows = [
        { id: "M1", name: names[0], club: c1, pts: rng.int(10, 25), paid: true },
        { id: "M2", name: names[1], club: c2, pts: rng.int(26, 40), paid: rng.bool() },
        { id: "M3", name: names[2], club: c1, pts: rng.int(30, 50), paid: false },
        { id: "M4", name: names[3], club: c1, pts: rng.int(15, 35), paid: true },
      ];
      const tableMd =
        `| ID | Name | Club | Points | Paid |\n|---|---|---|---|---|\n` +
        rows.map((r) => `| ${r.id} | ${r.name} | ${r.club} | ${r.pts} | ${r.paid ? "TRUE" : "FALSE"} |`).join("\n");

      if (tier === 1) {
        const askSum = rng.bool();
        const matching = rows.filter((r) => r.club === c1);
        const sumVal = matching.reduce((s, r) => s + r.pts, 0);
        const countVal = matching.length;
        const ans = askSum ? sumVal : countVal;
        const wrong = askSum ? countVal : sumVal;
        const fn = askSum ? "SUM(Points)" : "COUNT(ID)";
        return {
          prompt: `Using the \`Members\` table:\n${tableMd}\n\nWhat single integer does \`SELECT ${fn} FROM Members WHERE Club = '${c1}';\` return?`,
          answer: { type: "number", value: ans },
          solution: [
            `Matching rows where \`Club = '${c1}'\`: ${matching.map((r) => `${r.id} (${r.pts})`).join(", ")}.`,
            askSum
              ? `\`SUM(Points)\` adds their \`Points\`: \`${matching.map((r) => r.pts).join(" + ")} = ${sumVal}\`.`
              : `\`COUNT(ID)\` counts how many rows match: \`${countVal}\`.`,
          ],
          hint: askSum ? "SUM(Points) adds the Points numbers of matching rows." : "COUNT(ID) counts how many rows match the WHERE filter.",
          traps:
            wrong !== ans
              ? [
                  {
                    spec: { type: "number", value: wrong },
                    feedback: askSum
                      ? "That is COUNT (number of rows) — SUM(Points) adds the Points values together!"
                      : "That is SUM(Points) — COUNT(ID) only counts how many matching rows exist!",
                  },
                ]
              : [],
        };
      }
      if (tier === 2) {
        const thresh = 20;
        const useAnd = rng.bool();
        const matching = rows.filter((r) => (useAnd ? r.club === c1 && r.paid : r.club === c2 || !r.paid));
        const sumVal = matching.reduce((s, r) => s + r.pts, 0);
        const whereClause = useAnd ? `Club = '${c1}' AND Paid = TRUE` : `Club = '${c2}' OR Paid = FALSE`;
        const oppositeSum = rows
          .filter((r) => (useAnd ? r.club === c1 || r.paid : r.club === c2 && !r.paid))
          .reduce((s, r) => s + r.pts, 0);
        void thresh;
        return {
          prompt: `Using the \`Members\` table:\n${tableMd}\n\nWhat integer does \`SELECT SUM(Points) FROM Members WHERE ${whereClause};\` return?`,
          answer: { type: "number", value: sumVal },
          solution: [
            `Filter rows matching \`${whereClause}\`: ${matching.length ? matching.map((r) => `${r.name} (${r.pts})`).join(", ") : "none"}.`,
            `Total \`SUM(Points) = ${sumVal}\`.`,
          ],
          hint: useAnd
            ? "AND requires BOTH conditions to be true on the same row."
            : "OR includes a row if EITHER condition (or both) is true!",
          traps:
            oppositeSum !== sumVal
              ? [{ spec: { type: "number", value: oppositeSum }, feedback: "Check AND vs OR carefully on every row of the table!" }]
              : [],
        };
      }
      // tier 3: ORDER BY ASC / DESC first row output
      const distinctRows = rows.map((r, idx) => ({ ...r, pts: r.pts + idx * 17 }));
      const tableMd3 =
        `| ID | Name | Club | Points | Paid |\n|---|---|---|---|---|\n` +
        distinctRows.map((r) => `| ${r.id} | ${r.name} | ${r.club} | ${r.pts} | ${r.paid ? "TRUE" : "FALSE"} |`).join("\n");
      const desc = rng.bool();
      const filtered = distinctRows.filter((r) => r.club === c1);
      const sorted = [...filtered].sort((a, b) => (desc ? b.pts - a.pts : a.pts - b.pts));
      const firstAns = sorted[0].name;
      const wrongEnd = sorted[sorted.length - 1].name;
      return {
        prompt: `Using the \`Members\` table:\n${tableMd3}\n\nWhat is the **first** \`Name\` listed by \`SELECT Name FROM Members WHERE Club = '${c1}' ORDER BY Points ${desc ? "DESC" : "ASC"};\`?`,
        answer: { type: "text", accept: [firstAns], display: firstAns },
        solution: [
          `Rows with \`Club = '${c1}'\`: ${filtered.map((r) => `${r.name} (${r.pts})`).join(", ")}.`,
          `Sorting by \`Points ${desc ? "DESC (largest first)" : "ASC (smallest first)"}\` puts \`${firstAns}\` (\`${sorted[0].pts}\`) first.`,
        ],
        hint: desc ? "DESC sorts from largest Points down to smallest." : "ASC sorts from smallest Points up to largest.",
        traps:
          wrongEnd.toLowerCase() !== firstAns.toLowerCase()
            ? [
                {
                  spec: { type: "text", accept: [wrongEnd] },
                  feedback: desc
                    ? "DESC means descending (highest Points first, not lowest)!"
                    : "ASC means ascending (lowest Points first, not highest)!",
                },
              ]
            : [],
      };
    },
  },
];
