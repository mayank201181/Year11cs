import type { Drill, Rng } from "./types.ts";
import type { Trap } from "../types.ts";

type Gate2 = "AND" | "OR" | "NAND" | "NOR" | "XOR";

function evalGate2(g: Gate2, a: number, b: number): number {
  switch (g) {
    case "AND":
      return a & b;
    case "OR":
      return a | b;
    case "NAND":
      return (a & b) ^ 1;
    case "NOR":
      return (a | b) ^ 1;
    case "XOR":
      return a ^ b;
  }
}

function col4(fn: (a: number, b: number) => number): string {
  return `${fn(0, 0)}${fn(0, 1)}${fn(1, 0)}${fn(1, 1)}`;
}

function col8(fn: (a: number, b: number, c: number) => number): string {
  let out = "";
  for (let i = 0; i < 8; i++) {
    out += String(fn((i >> 2) & 1, (i >> 1) & 1, i & 1));
  }
  return out;
}

function acceptCol4(c: string): string[] {
  return [c, c.split("").join(" "), c.split("").join(", "), c.split("").join(",")];
}

function acceptCol8(c: string): string[] {
  return [c, `${c.slice(0, 4)} ${c.slice(4)}`];
}

const WIRE_PAIRS: readonly [string, string][] = [
  ["A", "B"],
  ["P", "Q"],
  ["M", "N"],
  ["S", "T"],
  ["U", "V"],
  ["D", "E"],
];

const WIRE_TRIPLES: readonly [string, string, string][] = [
  ["A", "B", "C"],
  ["P", "Q", "R"],
  ["D", "E", "F"],
  ["M", "N", "K"],
  ["G", "H", "L"],
];

export const drills: Drill[] = [
  // -------------------------------------------------------------------------
  // Drill 1: Basic Gates (NOT, AND, OR) — Level 1
  // -------------------------------------------------------------------------
  {
    id: "logic-gates.basic-gates",
    topicId: "logic-gates",
    title: "NOT, AND & OR Gate Fluency",
    level: 1,
    guideRef: "basic-gates",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const [w1, w2] = rng.pick(WIRE_PAIRS);
        const g = rng.pick(["AND", "OR"] as const);
        const inv1 = rng.bool(0.45);
        const inv2 = !inv1 && rng.bool(0.45);
        const a = rng.int(0, 1);
        const b = rng.int(0, 1);
        const effA = inv1 ? a ^ 1 : a;
        const effB = inv2 ? b ^ 1 : b;
        const ans = evalGate2(g, effA, effB);
        const lhs = inv1 ? `(NOT ${w1})` : w1;
        const rhs = inv2 ? `(NOT ${w2})` : w2;
        const expr = `${lhs} ${g} ${rhs}`;
        const wrong = ans ^ 1;
        return {
          prompt: `Evaluate \`X = ${expr}\` when \`${w1} = ${a}\` and \`${w2} = ${b}\`. Give the single output bit (\`0\` or \`1\`).`,
          answer: { type: "text", accept: [String(ans)], display: String(ans) },
          traps: [
            {
              spec: { type: "text", accept: [String(wrong)] },
              feedback:
                g === "AND"
                  ? "Remember: AND outputs 1 ONLY when both inputs entering the AND gate equal 1 (after applying any NOT gate first)."
                  : "Remember: OR outputs 1 whenever at least one input entering the OR gate equals 1 (after applying any NOT gate first).",
            },
          ],
          hint: `Apply any \`NOT\` gate first, then apply the \`${g}\` rule.`,
          solution: [
            inv1
              ? `Invert \`${w1} = ${a}\`: \`NOT ${a} = ${effA}\`.`
              : inv2
                ? `Invert \`${w2} = ${b}\`: \`NOT ${b} = ${effB}\`.`
                : `Inputs entering \`${g}\` are \`${effA}\` and \`${effB}\`.`,
            `Compute \`${effA} ${g} ${effB} = ${ans}\`.`,
          ],
        };
      }

      if (tier === 2) {
        const [w1, w2] = rng.pick(WIRE_PAIRS);
        const g = rng.pick(["AND", "OR"] as const);
        const mode = rng.int(0, 3); // 0: (NOT w1) g w2, 1: w1 g (NOT w2), 2: (NOT w1) g (NOT w2), 3: NOT (w1 g w2)
        const fn = (a: number, b: number) => {
          if (mode === 0) return evalGate2(g, a ^ 1, b);
          if (mode === 1) return evalGate2(g, a, b ^ 1);
          if (mode === 2) return evalGate2(g, a ^ 1, b ^ 1);
          return evalGate2(g, a, b) ^ 1;
        };
        const expr =
          mode === 0
            ? `(NOT ${w1}) ${g} ${w2}`
            : mode === 1
              ? `${w1} ${g} (NOT ${w2})`
              : mode === 2
                ? `(NOT ${w1}) ${g} (NOT ${w2})`
                : `NOT (${w1} ${g} ${w2})`;
        const c = col4(fn);
        const invCol = c
          .split("")
          .map((ch) => (ch === "1" ? "0" : "1"))
          .join("");
        const traps: Trap[] = [];
        if (invCol !== c) {
          traps.push({
            spec: { type: "text", accept: acceptCol4(invCol) },
            feedback: "Every bit is inverted — check whether NOT applies to an individual input BEFORE the gate or to the whole bracket AFTER the gate!",
          });
        }
        return {
          prompt: `Complete the 4-row truth table for \`X = ${expr}\` with \`(${w1}, ${w2})\` ordered \`00, 01, 10, 11\`. Give the 4-bit output column from top (\`00\`) to bottom (\`11\`) as a 4-character string of \`0\`s and \`1\`s.`,
          answer: { type: "text", accept: acceptCol4(c), display: c },
          traps,
          hint: `Evaluate rows \`00\`, \`01\`, \`10\`, and \`11\` one by one using a helper column for any \`NOT\` term.`,
          solution: [
            `Row \`00\`: \`X = ${fn(0, 0)}\`; Row \`01\`: \`X = ${fn(0, 1)}\`.`,
            `Row \`10\`: \`X = ${fn(1, 0)}\`; Row \`11\`: \`X = ${fn(1, 1)}\`.`,
            `4-bit output column: \`${c}\`.`,
          ],
        };
      }

      // Tier 3: 3-input basic-gate circuit row count or 8-bit column
      const [w1, w2, w3] = rng.pick(WIRE_TRIPLES);
      const g1 = rng.pick(["AND", "OR"] as const);
      const g2 = rng.pick(["AND", "OR"] as const);
      const invWhich = rng.int(0, 2); // invert w1, w2, or w3
      const fn = (a: number, b: number, c: number) => {
        const aa = invWhich === 0 ? a ^ 1 : a;
        const bb = invWhich === 1 ? b ^ 1 : b;
        const cc = invWhich === 2 ? c ^ 1 : c;
        return evalGate2(g2, evalGate2(g1, aa, bb), cc);
      };
      const s1 = invWhich === 0 ? `(NOT ${w1})` : w1;
      const s2 = invWhich === 1 ? `(NOT ${w2})` : w2;
      const s3 = invWhich === 2 ? `(NOT ${w3})` : w3;
      const expr = `(${s1} ${g1} ${s2}) ${g2} ${s3}`;
      const full = col8(fn);
      const ones = full.split("").filter((x) => x === "1").length;
      if (rng.bool(0.5)) {
        const altCount = 8 - ones !== ones ? 8 - ones : (ones + 1) % 9;
        return {
          prompt: `Consider \`X = ${expr}\` across all 8 input combinations of \`(${w1}, ${w2}, ${w3})\` from \`000\` to \`111\`. How many of the 8 rows produce output \`X = 1\`? Give your answer as a single integer.`,
          answer: { type: "number", value: ones },
          traps: [
            {
              spec: { type: "number", value: altCount },
              feedback: `Check your 8-row column (${full}): count the rows where X = 1, not X = 0!`,
            },
          ],
          hint: `First form the 8-bit column for \`P = ${s1} ${g1} ${s2}\`, then combine with \`${s3}\` using \`${g2}\`.`,
          solution: [
            `Across \`000\` to \`111\`, \`X = ${expr}\` produces the 8-bit column \`${full}\`.`,
            `Counting the \`1\`s in \`${full}\` gives \`${ones}\` rows.`,
          ],
        };
      }
      const flipped = full
        .split("")
        .map((ch) => (ch === "1" ? "0" : "1"))
        .join("");
      return {
        prompt: `Give the complete 8-bit output column from top (\`000\`) to bottom (\`111\`) for \`X = ${expr}\` across \`(${w1}, ${w2}, ${w3})\` as an 8-character string of \`0\`s and \`1\`s.`,
        answer: { type: "text", accept: acceptCol8(full), display: full },
        traps:
          flipped !== full
            ? [
                {
                  spec: { type: "text", accept: acceptCol8(flipped) },
                  feedback: "Check your NOT inversion — only the bracketed NOT wire is inverted, not the final output!",
                },
              ]
            : [],
        hint: `Compute \`P = ${s1} ${g1} ${s2}\` down all 8 rows first, then combine \`P ${g2} ${s3}\`.`,
        solution: [
          `Evaluate \`P = ${s1} ${g1} ${s2}\` across \`000..111\`, then combine with \`${s3}\` via \`${g2}\`.`,
          `Resulting 8-bit output column: \`${full}\`.`,
        ],
      };
    },
  },

  // -------------------------------------------------------------------------
  // Drill 2: NAND, NOR & XOR Fluency — Level 2
  // -------------------------------------------------------------------------
  {
    id: "logic-gates.universal-xor",
    topicId: "logic-gates",
    title: "NAND, NOR & XOR Gate Mastery",
    level: 2,
    guideRef: "universal-xor-gates",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const gates: readonly Gate2[] = ["NAND", "NOR", "XOR"];
      if (tier === 1) {
        const [w1, w2] = rng.pick(WIRE_PAIRS);
        const g = rng.pick(gates);
        const inv = rng.int(0, 2); // 0 none, 1 inv w1, 2 inv w2
        const a = rng.int(0, 1);
        const b = rng.int(0, 1);
        const aa = inv === 1 ? a ^ 1 : a;
        const bb = inv === 2 ? b ^ 1 : b;
        const ans = evalGate2(g, aa, bb);
        const expr =
          inv === 0
            ? `${w1} ${g} ${w2}`
            : inv === 1
              ? `(NOT ${w1}) ${g} ${w2}`
              : `${w1} ${g} (NOT ${w2})`;
        return {
          prompt: `Evaluate \`X = ${expr}\` when \`${w1} = ${a}\` and \`${w2} = ${b}\`. Give the single output bit (\`0\` or \`1\`).`,
          answer: { type: "text", accept: [String(ans)], display: String(ans) },
          traps: [
            {
              spec: { type: "text", accept: [String(ans ^ 1)] },
              feedback:
                g === "XOR"
                  ? "XOR outputs 1 when its two inputs DIFFER, and 0 when they are EQUAL!"
                  : g === "NAND"
                    ? "NAND = NOT (AND): compute AND first, then flip the bit (0 ONLY when both inputs are 1)!"
                    : "NOR = NOT (OR): compute OR first, then flip the bit (1 ONLY when both inputs are 0)!",
            },
          ],
          hint:
            g === "XOR"
              ? "Check whether the two inputs entering `XOR` are different (`1`) or equal (`0`)."
              : `Compute \`${g === "NAND" ? "AND" : "OR"}\` first, then invert the output bit.`,
          solution: [
            `Inputs entering \`${g}\` are \`${aa}\` and \`${bb}\`.`,
            `\`${aa} ${g} ${bb} = ${ans}\`.`,
          ],
        };
      }

      if (tier === 2) {
        const [w1, w2] = rng.pick(WIRE_PAIRS);
        const g1 = rng.pick(gates);
        const g2 = rng.pick(["AND", "OR", "NAND", "NOR", "XOR"] as const);
        const secondArg = rng.int(0, 2); // 0: w1, 1: w2, 2: NOT w2
        const fn = (a: number, b: number) => {
          const p = evalGate2(g1, a, b);
          const q = secondArg === 0 ? a : secondArg === 1 ? b : b ^ 1;
          return evalGate2(g2, p, q);
        };
        const rhs = secondArg === 0 ? w1 : secondArg === 1 ? w2 : `(NOT ${w2})`;
        const expr = `(${w1} ${g1} ${w2}) ${g2} ${rhs}`;
        const c = col4(fn);
        const pCol = col4((a, b) => evalGate2(g1, a, b));
        const traps: Trap[] = [];
        const inv = c
          .split("")
          .map((x) => (x === "1" ? "0" : "1"))
          .join("");
        if (inv !== c) {
          traps.push({
            spec: { type: "text", accept: acceptCol4(inv) },
            feedback: `Check the final ${g2} gate inversion bubble — your column is completely inverted!`,
          });
        }
        return {
          prompt: `Complete the 4-row truth table for \`X = ${expr}\` with \`(${w1}, ${w2})\` ordered \`00, 01, 10, 11\`. Give the 4-bit output column from top (\`00\`) to bottom (\`11\`) as a 4-character string of \`0\`s and \`1\`s.`,
          answer: { type: "text", accept: acceptCol4(c), display: c },
          traps,
          hint: `First find \`P = ${w1} ${g1} ${w2}\` (\`${pCol}\`), then combine \`P\` with \`${rhs}\` using \`${g2}\`.`,
          solution: [
            `Intermediate column \`P = ${w1} ${g1} ${w2}\` across \`00..11\` is \`${pCol}\`.`,
            `Combining \`P\` with \`${rhs}\` via \`${g2}\` gives \`${c}\`.`,
          ],
        };
      }

      // Tier 3: Dual-gate (w1 g1 w2) g3 (w1 g2 w2) 4-bit column
      const [w1, w2] = rng.pick(WIRE_PAIRS);
      const g1 = rng.pick(gates);
      const g2 = rng.pick(["AND", "OR", "NAND", "NOR", "XOR"] as const);
      const g3 = rng.pick(gates);
      const invA = rng.bool(0.4);
      const fn = (a: number, b: number) => {
        const p = evalGate2(g1, invA ? a ^ 1 : a, b);
        const q = evalGate2(g2, a, b);
        return evalGate2(g3, p, q);
      };
      const leftExpr = invA ? `((NOT ${w1}) ${g1} ${w2})` : `(${w1} ${g1} ${w2})`;
      const expr = `${leftExpr} ${g3} (${w1} ${g2} ${w2})`;
      const c = col4(fn);
      const pCol = col4((a, b) => evalGate2(g1, invA ? a ^ 1 : a, b));
      const qCol = col4((a, b) => evalGate2(g2, a, b));
      const inv = c
        .split("")
        .map((x) => (x === "1" ? "0" : "1"))
        .join("");
      return {
        prompt: `Find the 4-bit output column from top (\`00\`) to bottom (\`11\`) for \`X = ${expr}\` across \`(${w1}, ${w2})\` as a 4-character string of \`0\`s and \`1\`s.`,
        answer: { type: "text", accept: acceptCol4(c), display: c },
        traps:
          inv !== c
            ? [
                {
                  spec: { type: "text", accept: acceptCol4(inv) },
                  feedback: `Check the final ${g3} step on P = ${pCol} and Q = ${qCol} — every bit was inverted!`,
                },
              ]
            : [],
        hint: `Compute helper columns \`P = ${leftExpr}\` and \`Q = (${w1} ${g2} ${w2})\` across \`00..11\`, then apply \`${g3}\`.`,
        solution: [
          `\`P = ${leftExpr}\` gives \`${pCol}\`.`,
          `\`Q = (${w1} ${g2} ${w2})\` gives \`${qCol}\`.`,
          `\`X = P ${g3} Q\` gives \`${c}\`.`,
        ],
      };
    },
  },

  // -------------------------------------------------------------------------
  // Drill 3: Multi-Gate 3-Input Circuit Tracing — Level 2
  // -------------------------------------------------------------------------
  {
    id: "logic-gates.circuit-trace",
    topicId: "logic-gates",
    title: "3-Input Logic Circuit & Truth Table Tracer",
    level: 2,
    guideRef: "logic-circuits-tables",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const allGates: readonly Gate2[] = ["AND", "OR", "NAND", "NOR", "XOR"];
      const [w1, w2, w3] = rng.pick(WIRE_TRIPLES);

      if (tier === 1) {
        const g1 = rng.pick(allGates);
        const g2 = rng.pick(allGates);
        const a = rng.int(0, 1);
        const b = rng.int(0, 1);
        const c = rng.int(0, 1);
        const p = evalGate2(g1, a, b);
        const x = evalGate2(g2, p, c);
        return {
          prompt: `In a 2-stage logic circuit, internal wire \`P = ${w1} ${g1} ${w2}\` and final output \`X = P ${g2} ${w3}\`. Find the single output bit (\`0\` or \`1\`) for \`X\` when \`(${w1}, ${w2}, ${w3}) = (${a}, ${b}, ${c})\`.`,
          answer: { type: "text", accept: [String(x)], display: String(x) },
          traps: [
            {
              spec: { type: "text", accept: [String(x ^ 1)] },
              feedback: `Trace carefully: P = ${a} ${g1} ${b} = ${p}, then X = ${p} ${g2} ${c} = ${x}.`,
            },
          ],
          hint: `First compute \`P = ${a} ${g1} ${b}\`, then feed \`P\` and \`${w3} = ${c}\` into \`${g2}\`.`,
          solution: [
            `Stage 1: \`P = ${a} ${g1} ${b} = ${p}\`.`,
            `Stage 2: \`X = ${p} ${g2} ${c} = ${x}\`.`,
          ],
        };
      }

      if (tier === 2) {
        const g1 = rng.pick(allGates);
        const g2 = rng.pick(allGates);
        const g3 = rng.pick(allGates);
        const invC = rng.bool(0.45);
        const a = rng.int(0, 1);
        const b = rng.int(0, 1);
        const c = rng.int(0, 1);
        const cc = invC ? c ^ 1 : c;
        const p = evalGate2(g1, a, b);
        const q = evalGate2(g2, b, cc);
        const x = evalGate2(g3, p, q);
        const qExpr = invC ? `${w2} ${g2} (NOT ${w3})` : `${w2} ${g2} ${w3}`;
        return {
          prompt: `In a 3-input shared-wire circuit, \`P = ${w1} ${g1} ${w2}\`, \`Q = ${qExpr}\`, and \`X = P ${g3} Q\`. Evaluate \`X\` (\`0\` or \`1\`) when \`(${w1}, ${w2}, ${w3}) = (${a}, ${b}, ${c})\`.`,
          answer: { type: "text", accept: [String(x)], display: String(x) },
          traps: [
            {
              spec: { type: "text", accept: [String(x ^ 1)] },
              feedback: `Check your intermediate wires: P = ${p} and Q = ${q}, so ${p} ${g3} ${q} = ${x}!`,
            },
          ],
          hint: `Calculate \`P\` and \`Q\` separately using the shared wire \`${w2} = ${b}\`, then compute \`P ${g3} Q\`.`,
          solution: [
            `\`P = ${a} ${g1} ${b} = ${p}\`.`,
            `\`Q = ${b} ${g2} ${cc} = ${q}\`${invC ? ` (since \`NOT ${c} = ${cc}\`)` : ""}.`,
            `\`X = ${p} ${g3} ${q} = ${x}\`.`,
          ],
        };
      }

      // Tier 3: Full 8-bit output column for 3-input shared-wire circuit
      const g1 = rng.pick(allGates);
      const g2 = rng.pick(allGates);
      const g3 = rng.pick(allGates);
      const pCol = col8((a, b) => evalGate2(g1, a, b));
      const qCol = col8((_a, b, c) => evalGate2(g2, b, c));
      const full = col8((a, b, c) => evalGate2(g3, evalGate2(g1, a, b), evalGate2(g2, b, c)));
      const inv = full
        .split("")
        .map((ch) => (ch === "1" ? "0" : "1"))
        .join("");
      return {
        prompt: `Give the complete 8-bit output column from top (\`000\`) to bottom (\`111\`) for \`X = (${w1} ${g1} ${w2}) ${g3} (${w2} ${g2} ${w3})\` across \`(${w1}, ${w2}, ${w3})\` as an 8-character string of \`0\`s and \`1\`s.`,
        answer: { type: "text", accept: acceptCol8(full), display: full },
        traps:
          inv !== full
            ? [
                {
                  spec: { type: "text", accept: acceptCol8(inv) },
                  feedback: `Your 8-bit column is completely inverted — double-check the final ${g3} gate on P = ${pCol} and Q = ${qCol}!`,
                },
              ]
            : [],
        hint: `Build column \`P = ${w1} ${g1} ${w2}\` (\`000..111\`) and column \`Q = ${w2} ${g2} ${w3}\`, then combine vertically with \`${g3}\`.`,
        solution: [
          `Column \`P = ${w1} ${g1} ${w2}\` across \`000..111\`: \`${pCol}\`.`,
          `Column \`Q = ${w2} ${g2} ${w3}\` across \`000..111\`: \`${qCol}\`.`,
          `Combining \`P ${g3} Q\` gives \`${full}\`.`,
        ],
      };
    },
  },

  // -------------------------------------------------------------------------
  // Drill 4: Control Problems & Precedence — Level 3
  // -------------------------------------------------------------------------
  {
    id: "logic-gates.control-problems",
    topicId: "logic-gates",
    title: "Control Specifications & Operator Precedence",
    level: 3,
    guideRef: "logic-expressions-problems",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const scenarios = [
        {
          system: "hydraulic press motor",
          s1: ["G", "guard closed", "guard open"],
          s2: ["T", "temperature safe", "temperature overheated"],
          s3: ["M", "manual override ON", "manual override OFF"],
        },
        {
          system: "greenhouse misting valve",
          s1: ["H", "humidity low", "humidity normal"],
          s2: ["W", "roof window shut", "roof window open"],
          s3: ["S", "timer boost ON", "timer boost OFF"],
        },
        {
          system: "chemical vat alarm",
          s1: ["P", "pressure critical", "pressure normal"],
          s2: ["F", "cooling fan running", "cooling fan stopped"],
          s3: ["B", "test button pressed", "test button released"],
        },
        {
          system: "server-room chiller",
          s1: ["R", "rack temperature high", "rack temperature normal"],
          s2: ["D", "aisle door closed", "aisle door ajar"],
          s3: ["E", "emergency chill ON", "emergency chill OFF"],
        },
        {
          system: "vault solenoid lock",
          s1: ["K", "keycard verified", "keycard invalid"],
          s2: ["A", "alarm clear", "alarm triggered"],
          s3: ["V", "director key turned", "director key off"],
        },
      ] as const;

      if (tier === 1) {
        const sc = rng.pick(scenarios);
        const pol1 = rng.int(0, 1); // which bit means s1[1]
        const pol2 = rng.int(0, 1); // which bit means s2[1]
        const join = rng.pick(["AND", "OR"] as const);
        const v1 = rng.int(0, 1);
        const v2 = rng.int(0, 1);
        const c1 = v1 === pol1 ? 1 : 0;
        const c2 = v2 === pol2 ? 1 : 0;
        const ans = evalGate2(join, c1, c2);
        const term1 = pol1 === 1 ? sc.s1[0] : `(NOT ${sc.s1[0]})`;
        const term2 = pol2 === 1 ? sc.s2[0] : `(NOT ${sc.s2[0]})`;
        return {
          prompt: `A ${sc.system} \`X\` activates (\`X = 1\`) when **${sc.s1[1]}** (\`${sc.s1[0]} = ${pol1}\`, \`${pol1 ^ 1}\` = ${sc.s1[2]}) **${join}** **${sc.s2[1]}** (\`${sc.s2[0]} = ${pol2}\`, \`${pol2 ^ 1}\` = ${sc.s2[2]}). Find \`X\` (\`0\` or \`1\`) when \`${sc.s1[0]} = ${v1}\` and \`${sc.s2[0]} = ${v2}\`.`,
          answer: { type: "text", accept: [String(ans)], display: String(ans) },
          traps: [
            {
              spec: { type: "text", accept: [String(ans ^ 1)] },
              feedback: `Check sensor polarity carefully: X = ${term1} ${join} ${term2}! Any condition defined as 0 requires NOT.`,
            },
          ],
          hint: `Translate to \`X = ${term1} ${join} ${term2}\` first — any condition mapped to \`0\` needs \`NOT\`!`,
          solution: [
            `Expression: \`X = ${term1} ${join} ${term2}\`.`,
            `At \`(${sc.s1[0]}, ${sc.s2[0]}) = (${v1}, ${v2})\`, \`X = ${c1} ${join} ${c2} = ${ans}\`.`,
          ],
        };
      }

      if (tier === 2) {
        const sc = rng.pick(scenarios);
        const pol1 = rng.int(0, 1);
        const pol2 = rng.int(0, 1);
        const pol3 = 1;
        const v1 = rng.int(0, 1);
        const v2 = rng.int(0, 1);
        const v3 = rng.int(0, 1);
        const c1 = v1 === pol1 ? 1 : 0;
        const c2 = v2 === pol2 ? 1 : 0;
        const c3 = v3 === pol3 ? 1 : 0;
        const ans = (c1 & c2) | c3;
        const t1 = pol1 === 1 ? sc.s1[0] : `(NOT ${sc.s1[0]})`;
        const t2 = pol2 === 1 ? sc.s2[0] : `(NOT ${sc.s2[0]})`;
        return {
          prompt: `A ${sc.system} \`X\` (\`1\` = ON) activates if (**${sc.s1[1]}** [\`${sc.s1[0]} = ${pol1}\`] **AND** **${sc.s2[1]}** [\`${sc.s2[0]} = ${pol2}\`]) **OR** **${sc.s3[1]}** [\`${sc.s3[0]} = 1\`]. Find \`X\` (\`0\` or \`1\`) when \`(${sc.s1[0]}, ${sc.s2[0]}, ${sc.s3[0]}) = (${v1}, ${v2}, ${v3})\`.`,
          answer: { type: "text", accept: [String(ans)], display: String(ans) },
          traps: [
            {
              spec: { type: "text", accept: [String(ans ^ 1)] },
              feedback: `Translate polarity first: X = (${t1} AND ${t2}) OR ${sc.s3[0]}, giving (${c1} AND ${c2}) OR ${c3} = ${ans}.`,
            },
          ],
          hint: `Write \`X = (${t1} AND ${t2}) OR ${sc.s3[0]}\`, then substitute \`(${v1}, ${v2}, ${v3})\`.`,
          solution: [
            `CIE logic expression: \`X = (${t1} AND ${t2}) OR ${sc.s3[0]}\`.`,
            `Substituting \`(${v1}, ${v2}, ${v3})\` gives \`(${c1} AND ${c2}) OR ${c3} = ${ans}\`.`,
          ],
        };
      }

      // Tier 3: 8-bit truth table column of a 3-sensor specification OR unbracketed precedence 8-bit column
      if (rng.bool(0.5)) {
        const [w1, w2, w3] = rng.pick(WIRE_TRIPLES);
        const invWhich = rng.int(0, 2);
        const order = rng.int(0, 1); // 0: w1 OR w2 AND w3, 1: w1 AND w2 OR w3
        const s1 = invWhich === 0 ? `NOT ${w1}` : w1;
        const s2 = invWhich === 1 ? `NOT ${w2}` : w2;
        const s3 = invWhich === 2 ? `NOT ${w3}` : w3;
        const rawExpr = order === 0 ? `${s1} OR ${s2} AND ${s3}` : `${s1} AND ${s2} OR ${s3}`;
        const bracketed = order === 0 ? `(${s1}) OR ((${s2}) AND (${s3}))` : `((${s1}) AND (${s2})) OR (${s3})`;
        const fn = (a: number, b: number, c: number) => {
          const aa = invWhich === 0 ? a ^ 1 : a;
          const bb = invWhich === 1 ? b ^ 1 : b;
          const cc = invWhich === 2 ? c ^ 1 : c;
          return order === 0 ? aa | (bb & cc) : (aa & bb) | cc;
        };
        const wrongFn = (a: number, b: number, c: number) => {
          const aa = invWhich === 0 ? a ^ 1 : a;
          const bb = invWhich === 1 ? b ^ 1 : b;
          const cc = invWhich === 2 ? c ^ 1 : c;
          return order === 0 ? (aa | bb) & cc : aa & (bb | cc);
        };
        const full = col8(fn);
        const wrongCol = col8(wrongFn);
        const traps: Trap[] = [];
        if (wrongCol !== full) {
          traps.push({
            spec: { type: "text", accept: acceptCol8(wrongCol) },
            feedback: "Remember Boolean precedence: NOT first, then AND, then OR! Never group OR before AND when brackets are absent.",
          });
        }
        return {
          prompt: `Using standard Boolean precedence (\`NOT\` → \`AND\` → \`OR\`), give the complete 8-bit output column from top (\`000\`) to bottom (\`111\`) for the unbracketed expression \`X = ${rawExpr}\` across \`(${w1}, ${w2}, ${w3})\` as an 8-character string of \`0\`s and \`1\`s.`,
          answer: { type: "text", accept: acceptCol8(full), display: full },
          traps,
          hint: `Insert precedence brackets first (\`NOT\` → \`AND\` → \`OR\`): \`X = ${bracketed}\`.`,
          solution: [
            `By precedence (\`NOT\` → \`AND\` → \`OR\`), \`X = ${bracketed}\`.`,
            `Evaluating rows \`000\` through \`111\` gives \`${full}\`.`,
          ],
        };
      }

      const sc = rng.pick(scenarios);
      const pol1 = rng.int(0, 1);
      const pol2 = rng.int(0, 1);
      const t1 = pol1 === 1 ? sc.s1[0] : `(NOT ${sc.s1[0]})`;
      const t2 = pol2 === 1 ? sc.s2[0] : `(NOT ${sc.s2[0]})`;
      const fn = (a: number, b: number, c: number) => {
        const c1 = a === pol1 ? 1 : 0;
        const c2 = b === pol2 ? 1 : 0;
        return (c1 | c2) & c;
      };
      const full = col8(fn);
      const noInvCol = col8((a, b, c) => (a | b) & c);
      const traps: Trap[] = [];
      if (noInvCol !== full) {
        traps.push({
          spec: { type: "text", accept: acceptCol8(noInvCol) },
          feedback: `You forgot to invert sensor(s) whose active state is 0: X = (${t1} OR ${t2}) AND ${sc.s3[0]}!`,
        });
      }
      return {
        prompt: `A ${sc.system} \`X\` (\`1\` = ON) runs when (**${sc.s1[1]}** [\`${sc.s1[0]} = ${pol1}\`] **OR** **${sc.s2[1]}** [\`${sc.s2[0]} = ${pol2}\`]) **AND** **${sc.s3[1]}** [\`${sc.s3[0]} = 1\`]. Across \`(${sc.s1[0]}, ${sc.s2[0]}, ${sc.s3[0]})\` from \`000\` to \`111\`, give the 8-bit output column as an 8-character string of \`0\`s and \`1\`s.`,
        answer: { type: "text", accept: acceptCol8(full), display: full },
        traps,
        hint: `Write \`X = (${t1} OR ${t2}) AND ${sc.s3[0]}\` — note every even row (\`${sc.s3[0]} = 0\`) immediately has \`X = 0\`!`,
        solution: [
          `CIE logic expression: \`X = (${t1} OR ${t2}) AND ${sc.s3[0]}\`.`,
          `Evaluating \`000\` through \`111\` gives \`${full}\`.`,
        ],
      };
    },
  },
];
