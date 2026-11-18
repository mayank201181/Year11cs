import type { Drill, DrillItem, Rng } from "./types.ts";

function bubblePass1Swaps(arr: number[]): { swaps: number; comparisons: number; afterPass1: number[]; totalSwaps: number; passesWithFlag: number } {
  const a = [...arr];
  const n = a.length;
  let pass1Swaps = 0;
  for (let i = 0; i < n - 1; i++) {
    if (a[i] > a[i + 1]) {
      const tmp = a[i];
      a[i] = a[i + 1];
      a[i + 1] = tmp;
      pass1Swaps++;
    }
  }
  const afterPass1 = [...a];
  // Full sort from original
  const b = [...arr];
  let totalSwaps = 0;
  let passes = 0;
  let last = n - 1;
  while (true) {
    let swapped = false;
    passes++;
    for (let i = 0; i < last; i++) {
      if (b[i] > b[i + 1]) {
        const tmp = b[i];
        b[i] = b[i + 1];
        b[i + 1] = tmp;
        swapped = true;
        totalSwaps++;
      }
    }
    last--;
    if (!swapped || last <= 0) break;
  }
  return { swaps: pass1Swaps, comparisons: n - 1, afterPass1, totalSwaps, passesWithFlag: passes };
}

const bubbleSortDrill: Drill = {
  id: "algorithms-testing.bubble-sort",
  topicId: "algorithms-testing",
  title: "Bubble Sort Pass, Swap & Comparison Counter",
  level: 2,
  guideRef: "standard-algorithms",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const pool = Array.from({ length: 45 }, (_, i) => (i + 2) * 2 + (i % 3));
    if (tier === 1) {
      const n = rng.int(4, 6);
      const arr = rng.shuffle(pool).slice(0, n);
      const askComparisons = rng.bool(0.35);
      const stats = bubblePass1Swaps(arr);
      if (askComparisons) {
        const extraTag = arr.join(", ");
        return {
          prompt: `An ascending Bubble Sort starts **Pass 1** on the ${n}-element 1D array \`[${extraTag}]\`. How many adjacent-pair **comparisons** are made during Pass 1? Give a single integer.`,
          answer: { type: "number", value: n - 1 },
          traps: [
            {
              spec: { type: "number", value: n },
              feedback: `Comparing up to index ${n} would access out-of-bounds element ${n + 1}! An array of ${n} items has ${n - 1} adjacent pairs.`,
            },
          ],
          hint: `For N = ${n} elements, Pass 1 compares (1,2), (2,3), ..., (${n - 1},${n}).`,
          solution: [
            `An array of ${n} elements has ${n} − 1 = **${n - 1}** adjacent pairs to compare in Pass 1.`,
          ],
        };
      }
      const wrongTrap = stats.swaps === n - 1 ? Math.max(0, stats.swaps - 1) : stats.swaps + 1;
      return {
        prompt: `Trace **Pass 1 ONLY** of an ascending Bubble Sort on \`[${arr.join(", ")}]\`. How many **swaps** occur during Pass 1? Give a single integer.`,
        answer: { type: "number", value: stats.swaps },
        traps: [
          {
            spec: { type: "number", value: wrongTrap },
            feedback: `Remember that when two neighbours swap, the larger value moves right and immediately participates in the next comparison! After Pass 1 the array is [${stats.afterPass1.join(", ")}].`,
          },
        ],
        hint: "Step left-to-right carrying any larger bubbled number forward into the very next adjacent comparison.",
        solution: [
          `Starting array: \`[${arr.join(", ")}]\`.`,
          `Stepping adjacent pairs left-to-right produces \`[${stats.afterPass1.join(", ")}]\` at the end of Pass 1.`,
          `Total swaps during Pass 1 = **${stats.swaps}**.`,
        ],
      };
    }

    if (tier === 2) {
      const arr = rng.shuffle(pool).slice(0, 4);
      const stats = bubblePass1Swaps(arr);
      const trapVal = stats.totalSwaps === stats.swaps ? stats.totalSwaps + 1 : stats.swaps;
      return {
        prompt: `Trace an ascending Bubble Sort across **ALL passes** until \`[${arr.join(", ")}]\` is completely sorted. How many **total swaps** take place altogether? Give a single integer.`,
        answer: { type: "number", value: stats.totalSwaps },
        traps:
          trapVal !== stats.totalSwaps
            ? [
                {
                  spec: { type: "number", value: trapVal },
                  feedback:
                    trapVal === stats.swaps
                      ? `${stats.swaps} is only Pass 1 (\`[${stats.afterPass1.join(", ")}]\`) — keep running subsequent passes until sorted!`
                      : "Count each out-of-order pair swap carefully across every pass.",
                },
              ]
            : undefined,
        hint: `After Pass 1 (${stats.swaps} swap${stats.swaps === 1 ? "" : "s"}), the array is [${stats.afterPass1.join(", ")}]. Continue sorting the remaining prefix!`,
        solution: [
          `After Pass 1: \`[${stats.afterPass1.join(", ")}]\` (${stats.swaps} swap${stats.swaps === 1 ? "" : "s"}).`,
          `Continuing remaining passes until fully sorted \`[${[...arr].sort((x, y) => x - y).join(", ")}]\` gives **${stats.totalSwaps}** total swaps.`,
        ],
      };
    }

    // Tier 3: Passes or total comparisons with Swap flag + shrinking Last (UNTIL Swap = FALSE OR Last = 0)
    const arr = rng.shuffle(pool).slice(0, 5);
    // Compute exact comparisons under: Last = N-1; REPEAT Swap=FALSE; FOR i=1 TO Last ...; Last=Last-1; UNTIL Swap=FALSE OR Last=0
    const b = [...arr];
    let last = b.length - 1;
    let totalCmps = 0;
    let passes = 0;
    const passLog: string[] = [];
    while (true) {
      let swapped = false;
      let pSwaps = 0;
      passes++;
      const cmpsThisPass = last;
      for (let i = 0; i < last; i++) {
        totalCmps++;
        if (b[i] > b[i + 1]) {
          const t = b[i];
          b[i] = b[i + 1];
          b[i + 1] = t;
          swapped = true;
          pSwaps++;
        }
      }
      passLog.push(`Pass ${passes} (Last=${cmpsThisPass}): ${cmpsThisPass} cmps, ${pSwaps} swaps → [${b.join(", ")}]`);
      last--;
      if (!swapped || last === 0) break;
    }
    const unoptCmps = 10; // 4+3+2+1
    return {
      prompt: `An ascending Bubble Sort with BOTH \`Swap\` flag AND shrinking \`Last\` (\`Last ← 4\`, \`REPEAT ... Last ← Last - 1 UNTIL Swap = FALSE OR Last = 0\`) sorts \`[${arr.join(", ")}]\`. How many **total comparisons** execute before termination? Give a single integer.`,
      answer: { type: "number", value: totalCmps },
      traps:
        totalCmps !== unoptCmps
          ? [
              {
                spec: { type: "number", value: unoptCmps },
                feedback: `10 comparisons ignores the \`Swap = FALSE\` early exit! Stop as soon as a pass finishes with 0 swaps.`,
              },
            ]
          : [
              {
                spec: { type: "number", value: 20 },
                feedback: `Remember \`Last\` shrinks by 1 after every pass (4, then 3, then 2, then 1)!`,
              },
            ],
      hint: "Remember: if a pass makes >=1 swap and `Last` has not hit 0, the next pass runs (even if it ends up making 0 swaps to confirm sortedness!).",
      solution: [
        ...passLog,
        `Total comparisons across ${passes} pass${passes === 1 ? "" : "es"} = **${totalCmps}**.`,
      ],
    };
  },
};

const linearMinMaxDrill: Drill = {
  id: "algorithms-testing.linear-minmax",
  topicId: "algorithms-testing",
  title: "Linear Search & Min/Max Update Tracker",
  level: 1,
  guideRef: "standard-algorithms",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const nums = rng.shuffle(Array.from({ length: 40 }, (_, i) => i * 2 + 7)).slice(0, 6);
    if (tier === 1) {
      const targetPos = rng.int(1, 6); // 1-indexed
      const target = nums[targetPos - 1];
      return {
        prompt: `A 1-indexed array \`Data[1:6]\` holds \`[${nums.join(", ")}]\`. A Linear Search with a \`Found\` flag starts at \`Index ← 1\` and stops immediately when \`${target}\` is found. How many comparisons are made? Give a single integer.`,
        answer: { type: "number", value: targetPos },
        traps:
          targetPos > 1
            ? [
                {
                  spec: { type: "number", value: targetPos - 1 },
                  feedback: `Count inclusively from \`Data[1]\` up to \`Data[${targetPos}] = ${target}\` — that is ${targetPos} comparisons!`,
                },
              ]
            : [
                {
                  spec: { type: "number", value: 6 },
                  feedback: "With a `Found` flag, Linear Search stops immediately on index 1 once the match is found!",
                },
              ],
        hint: "Count elements sequentially from index 1 up to and including the matching element.",
        solution: [
          `Elements checked: ${nums.slice(0, targetPos).map((v, idx) => `Data[${idx + 1}]=${v}`).join(", ")}.`,
          `Match found on comparison **${targetPos}**.`,
        ],
      };
    }

    if (tier === 2) {
      const findMax = rng.bool();
      const op = findMax ? ">" : "<";
      const varName = findMax ? "Best" : "Lowest";
      let cur = nums[0];
      let updates = 0;
      for (let i = 1; i < nums.length; i++) {
        if (findMax ? nums[i] > cur : nums[i] < cur) {
          cur = nums[i];
          updates++;
        }
      }
      return {
        prompt: `\`Data[1:6]\` holds \`[${nums.join(", ")}]\`. Trace:\n\`${varName} ← Data[1]\`\n\`FOR i ← 2 TO 6\`\n\`  IF Data[i] ${op} ${varName} THEN ${varName} ← Data[i] ENDIF\`\n\`NEXT i\`\nHow many times does \`${varName} ← Data[i]\` execute **inside the FOR loop**? Give a single integer.`,
        answer: { type: "number", value: updates },
        traps: [
          {
            spec: { type: "number", value: cur },
            feedback: `${cur} is the final value of \`${varName}\`, whereas the question asks **how many times** it was updated inside the loop!`,
          },
          {
            spec: { type: "number", value: updates + 1 },
            feedback: `Notice \`${varName} ← Data[1]\` happens BEFORE the loop; the \`FOR\` loop starts at \`i = 2\`!`,
          },
        ],
        hint: `Start with ${varName} = ${nums[0]} and test i = 2..6 (${nums.slice(1).join(", ")}) one by one.`,
        solution: [
          `Initial \`${varName} = ${nums[0]}\` (before loop).`,
          `Testing \`[${nums.slice(1).join(", ")}]\` against \`${op} ${varName}\` triggers **${updates}** update${updates === 1 ? "" : "s"} (ending at \`${varName} = ${cur}\`).`,
        ],
      };
    }

    // Tier 3: Linear search when target is NOT present vs duplicate occurrences without early exit
    const absent = rng.int(100, 150);
    const useAbsent = rng.bool(0.5);
    if (useAbsent) {
      const len = rng.int(5, 8);
      const arr = rng.shuffle(Array.from({ length: 35 }, (_, i) => i * 2 + 5)).slice(0, len);
      return {
        prompt: `\`List[1:${len}]\` holds \`[${arr.join(", ")}]\`. Trace:\n\`Found ← FALSE\`\n\`Index ← 1\`\n\`REPEAT\`\n\`  IF List[Index] = ${absent} THEN Found ← TRUE ELSE Index ← Index + 1 ENDIF\`\n\`UNTIL Found = TRUE OR Index > ${len}\`\nWhat is the final value of \`Index\` when the loop terminates? Give a single integer.`,
        answer: { type: "number", value: len + 1 },
        traps: [
          {
            spec: { type: "number", value: len },
            feedback: `On \`Index = ${len}\`, \`List[${len}] = ${arr[len - 1]}\` does not match \`${absent}\`, so the \`ELSE\` branch increments \`Index\` to **${len + 1}** to make \`Index > ${len}\` TRUE!`,
          },
        ],
        hint: `Look closely at \`UNTIL Found = TRUE OR Index > ${len}\`: what must \`Index\` become after failing on \`Index = ${len}\`?`,
        solution: [
          `Since \`${absent}\` is not in the array, every check from \`Index = 1\` to \`${len}\` takes the \`ELSE\` branch.`,
          `On \`Index = ${len}\`, \`Index ← ${len} + 1 = ${len + 1}\`, making \`Index > ${len}\` TRUE.`,
          `Final value of \`Index\` = **${len + 1}**.`,
        ],
      };
    }

    // Duplicate target: first vs last index
    const dupIdx1 = rng.int(1, 3);
    const dupIdx2 = rng.int(4, 6);
    const arr = [...nums];
    arr[dupIdx2 - 1] = arr[dupIdx1 - 1];
    const target = arr[dupIdx1 - 1];
    return {
      prompt: `\`Codes[1:6]\` holds \`[${arr.join(", ")}]\` (note \`${target}\` appears twice!). Trace this unoptimised \`FOR\` loop:\n\`Pos ← 0\`\n\`FOR i ← 1 TO 6\`\n\`  IF Codes[i] = ${target} THEN Pos ← i ENDIF\`\n\`NEXT i\`\n\`OUTPUT Pos\`\nWhat single integer is output?`,
      answer: { type: "number", value: dupIdx2 },
      traps: [
        {
          spec: { type: "number", value: dupIdx1 },
          feedback: `Because this \`FOR\` loop has NO \`Found\` flag to stop early, \`i = ${dupIdx2}\` overwrites \`Pos\` from \`${dupIdx1}\` to **${dupIdx2}**!`,
        },
      ],
      hint: "Does a `FOR i ← 1 TO 6` loop stop at the first match, or continue all the way to `i = 6`?",
      solution: [
        `At \`i = ${dupIdx1}\`, \`Pos\` becomes \`${dupIdx1}\`.`,
        `The \`FOR\` loop keeps running; at \`i = ${dupIdx2}\`, \`Codes[${dupIdx2}] = ${target}\` overwrites \`Pos ← ${dupIdx2}\`.`,
        `Output is **${dupIdx2}**.`,
      ],
    };
  },
};

const validationTestDataDrill: Drill = {
  id: "algorithms-testing.validation-testdata",
  topicId: "algorithms-testing",
  title: "Extreme vs Boundary Test Data & Validation Checks",
  level: 1,
  guideRef: "validation-verification-testing",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    const low = rng.int(1, 35);
    const span = rng.int(15, 85);
    const high = low + span;
    const fields = [
      "exam mark",
      "group size",
      "parcel weight (kg)",
      "sensor threshold",
      "seat number",
      "club age",
      "ticket quantity",
    ];
    const field = rng.pick(fields);

    if (tier === 1) {
      const askUpper = rng.bool();
      const target = askUpper ? high : low;
      const trapVal = askUpper ? high + 1 : low - 1;
      return {
        prompt: `A validation rule for **${field}** accepts whole numbers from \`${low}\` to \`${high}\` inclusive. What is the **${askUpper ? "largest" : "smallest"}** item of **extreme** test data? Give a single integer.`,
        answer: { type: "number", value: target },
        traps: [
          {
            spec: { type: "number", value: trapVal },
            feedback: `\`${trapVal}\` is rejected outside the range! **Extreme** test data must sit ON the limit and be **accepted** (\`${target}\`).`,
          },
        ],
        hint: "Extreme test data = the smallest and largest ACCEPTED values right on the limits.",
        solution: [
          `For valid inclusive range \`${low}..${high}\`, the accepted extreme values are \`${low}\` and \`${high}\`.`,
          `The ${askUpper ? "largest" : "smallest"} extreme test value is **${target}**.`,
        ],
      };
    }

    if (tier === 2) {
      const askUpper = rng.bool();
      const pair = askUpper ? [high, high + 1] : [low - 1, low];
      const wrongExtreme = [low, high];
      return {
        prompt: `A validation rule for **${field}** accepts whole numbers from \`${low}\` to \`${high}\` inclusive. Give the **${askUpper ? "upper" : "lower"} boundary** test data pair (two integers separated by a comma).`,
        answer: { type: "list", values: pair, ordered: false, display: `${pair[0]}, ${pair[1]}` },
        traps: [
          {
            spec: { type: "list", values: wrongExtreme },
            feedback: `\`${low}, ${high}\` are the two extreme values! A **boundary** pair must contain one accepted extreme value AND the adjacent rejected value right across that single limit (\`${pair[0]}, ${pair[1]}\`).`,
          },
        ],
        hint: `Pair the ${askUpper ? `largest accepted integer (${high}) with ${high + 1}` : `smallest accepted integer (${low}) with ${low - 1}`}.`,
        solution: [
          `Boundary test data pairs an accepted extreme value with its immediately adjacent rejected neighbour.`,
          `For the ${askUpper ? "upper" : "lower"} limit of \`${low}..${high}\`, the boundary pair is **${pair[0]}, ${pair[1]}**.`,
        ],
      };
    }

    // Tier 3: Strict inequality `<` or `>` off-by-one specification!
    const strictUpper = rng.bool();
    if (strictUpper) {
      // Condition: X >= low AND X < high (strictly less than high!)
      const maxAccepted = high - 1;
      return {
        prompt: `Careful! A programmer codes \`IF Val >= ${low} AND Val < ${high} THEN OUTPUT "Valid"\` for integer input \`Val\` (note strict \`<\` on \`${high}\`!). Give the **upper boundary** test data pair for what this code *actually* accepts (two integers separated by a comma).`,
        answer: {
          type: "list",
          values: [maxAccepted, high],
          ordered: false,
          display: `${maxAccepted}, ${high}`,
        },
        traps: [
          {
            spec: { type: "list", values: [high, high + 1] },
            feedback: `Look at \`Val < ${high}\`: when \`Val = ${high}\`, \`${high} < ${high}\` is **FALSE** (rejected)! The largest accepted integer is \`${maxAccepted}\`.`,
          },
        ],
        hint: `Which integer is the largest one where \`Val < ${high}\` is TRUE, and which integer is the first one where \`Val < ${high}\` becomes FALSE?`,
        solution: [
          `Because \`Val < ${high}\` uses strict less-than, \`${maxAccepted}\` is **accepted** while \`${high}\` is **rejected**.`,
          `Upper boundary pair = **${maxAccepted}, ${high}**.`,
        ],
      };
    }

    // Condition: X > low AND X <= high (strictly greater than low!)
    const minAccepted = low + 1;
    return {
      prompt: `Careful! A programmer codes \`IF Val > ${low} AND Val <= ${high} THEN OUTPUT "Valid"\` for integer input \`Val\` (note strict \`>\` on \`${low}\`!). Give the **lower boundary** test data pair for what this code *actually* accepts (two integers separated by a comma).`,
      answer: {
        type: "list",
        values: [low, minAccepted],
        ordered: false,
        display: `${low}, ${minAccepted}`,
      },
      traps: [
        {
          spec: { type: "list", values: [low - 1, low] },
          feedback: `Look at \`Val > ${low}\`: when \`Val = ${low}\`, \`${low} > ${low}\` is **FALSE** (rejected)! The smallest accepted integer is \`${minAccepted}\`.`,
        },
      ],
      hint: `When \`Val = ${low}\`, is \`${low} > ${low}\` TRUE or FALSE? Pair \`${low}\` (rejected) with \`${minAccepted}\` (accepted).`,
      solution: [
        `Because \`Val > ${low}\` uses strict greater-than, \`${low}\` is **rejected** while \`${minAccepted}\` is **accepted**.`,
        `Lower boundary pair = **${low}, ${minAccepted}**.`,
      ],
    };
  },
};

const traceDryRunDrill: Drill = {
  id: "algorithms-testing.trace-dryrun",
  topicId: "algorithms-testing",
  title: "CIE Pseudocode Trace-Table Dry-Runner",
  level: 3,
  guideRef: "trace-tables-errors",
  generate(rng: Rng, tier: 1 | 2 | 3): DrillItem {
    if (tier === 1) {
      const start = rng.int(0, 12);
      const n = rng.int(3, 5);
      const mult = rng.int(2, 5);
      let total = start;
      for (let k = 1; k <= n; k++) total += k * mult;
      const zeroStartTrap = total - start;
      return {
        prompt: `Dry-run this CIE pseudocode and state the single integer output:\n\`Total ← ${start}\`\n\`FOR K ← 1 TO ${n}\`\n\`  Total ← Total + K * ${mult}\`\n\`NEXT K\`\n\`OUTPUT Total\``,
        answer: { type: "number", value: total },
        traps:
          start > 0
            ? [
                {
                  spec: { type: "number", value: zeroStartTrap },
                  feedback: `You summed \`K * ${mult}\` starting from 0, but notice \`Total\` was initialised to **${start}**!`,
                },
              ]
            : [
                {
                  spec: { type: "number", value: total - n * mult },
                  feedback: `In CIE pseudocode, \`FOR K ← 1 TO ${n}\` is **inclusive** of \`K = ${n}\`!`,
                },
              ],
        hint: `Start at Total = ${start} and add ${Array.from({ length: n }, (_, i) => (i + 1) * mult).join(" + ")}.`,
        solution: [
          `Initial \`Total = ${start}\`.`,
          `Loop adds ${Array.from({ length: n }, (_, i) => `${i + 1}×${mult}=${(i + 1) * mult}`).join(", ")}.`,
          `Final \`OUTPUT Total\` = **${total}**.`,
        ],
      };
    }

    if (tier === 2) {
      // REPEAT .. UNTIL condition becomes TRUE!
      const x0 = rng.int(22, 58);
      const step = rng.int(5, 11);
      const limit = rng.int(4, 14);
      let x = x0;
      let count = 0;
      while (true) {
        x -= step;
        count++;
        if (x < limit) break;
      }
      const askX = rng.bool();
      const realAns = askX ? x : count;
      const otherVar = askX ? count : x;
      const traps = [];
      if (otherVar !== realAns) {
        traps.push({
          spec: { type: "number" as const, value: otherVar },
          feedback: `Careful — check which variable is printed on the final line (\`OUTPUT ${askX ? "X" : "Steps"}\`)!`,
        });
      }
      if (x + step === limit) {
        const earlyVal = askX ? limit : count - 1;
        if (earlyVal !== realAns && earlyVal !== otherVar) {
          traps.push({
            spec: { type: "number" as const, value: earlyVal },
            feedback: `When \`X = ${limit}\`, \`${limit} < ${limit}\` is **FALSE**, so the \`REPEAT\` loop executes one more time!`,
          });
        }
      }
      return {
        prompt: `Dry-run this \`REPEAT ... UNTIL\` loop and state the single integer output:\n\`X ← ${x0}\`\n\`Steps ← 0\`\n\`REPEAT\`\n\`  X ← X - ${step}\`\n\`  Steps ← Steps + 1\`\n\`UNTIL X < ${limit}\`\n\`OUTPUT ${askX ? "X" : "Steps"}\``,
        answer: { type: "number", value: realAns },
        traps: traps.length ? traps : undefined,
        hint: `Remember \`REPEAT ... UNTIL X < ${limit}\` stops as soon as \`X\` is strictly less than \`${limit}\`.`,
        solution: [
          `Starting from \`X = ${x0}\`, subtracting \`${step}\` ${count} time${count === 1 ? "" : "s"} reaches \`X = ${x}\` (\`${x} < ${limit}\` is TRUE).`,
          `At termination, \`X = ${x}\` and \`Steps = ${count}\`, so \`OUTPUT ${askX ? "X" : "Steps"}\` prints **${askX ? x : count}**.`,
        ],
      };
    }

    // Tier 3: Digit extraction / weighted conditional trace
    const d1 = rng.int(1, 9);
    const d2 = rng.int(0, 9);
    const d3 = rng.int(1, 9);
    const d4 = rng.int(2, 9);
    const nVal = d1 * 1000 + d2 * 100 + d3 * 10 + d4;
    const onlyEven = rng.bool();
    const digits = [d4, d3, d2, d1];
    let acc = 0;
    for (const d of digits) {
      if (onlyEven ? d % 2 === 0 : d >= 5) acc += d;
    }
    const allSum = d1 + d2 + d3 + d4;
    const condStr = onlyEven ? "(Digit MOD 2) = 0" : "Digit >= 5";
    return {
      prompt: `Dry-run this digit-loop algorithm for \`N = ${nVal}\`:\n\`Sum ← 0\`\n\`WHILE N > 0 DO\`\n\`  Digit ← N MOD 10\`\n\`  IF ${condStr} THEN Sum ← Sum + Digit ENDIF\`\n\`  N ← N DIV 10\`\n\`ENDWHILE\`\n\`OUTPUT Sum\`\nWhat single integer is output?`,
      answer: { type: "number", value: acc },
      traps:
        allSum !== acc
          ? [
              {
                spec: { type: "number", value: allSum },
                feedback: `\`${allSum}\` sums ALL four digits, forgetting the filter \`IF ${condStr}\`!`,
              },
            ]
          : undefined,
      hint: `\`N MOD 10\` peels off digits right-to-left (${d4}, ${d3}, ${d2}, ${d1}); add ONLY digits satisfying \`${condStr}\`.`,
      solution: [
        `Digits extracted via \`MOD 10\` and \`DIV 10\`: \`${d4}, ${d3}, ${d2}, ${d1}\`.`,
        `Filtering by \`${condStr}\` adds matching digits to give \`Sum =\` **${acc}**.`,
      ],
    };
  },
};

export const drills: Drill[] = [
  bubbleSortDrill,
  linearMinMaxDrill,
  validationTestDataDrill,
  traceDryRunDrill,
];
