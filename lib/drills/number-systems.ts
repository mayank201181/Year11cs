import type { Drill, Rng } from "./types.ts";
import type { Trap } from "../types.ts";

function toBin8(n: number): string {
  return ((n & 0xff) >>> 0).toString(2).padStart(8, "0");
}

function toHex2(n: number): string {
  return ((n & 0xff) >>> 0).toString(16).toUpperCase().padStart(2, "0");
}

export const drills: Drill[] = [
  {
    id: "number-systems.denary-binary-hex",
    topicId: "number-systems",
    title: "Binary, Denary & Hexadecimal Conversions",
    level: 1,
    guideRef: "denary-binary-hex",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const mode = rng.int(0, 1);
        const n = rng.int(5, 126);
        const b = toBin8(n);
        if (mode === 0) {
          const weights = [128, 64, 32, 16, 8, 4, 2, 1].filter((_, i) => b[i] === "1");
          return {
            prompt: `Convert the 8-bit unsigned binary integer \`${b}\` into **denary**.`,
            answer: { type: "number", value: n },
            hint: "Sum the active place values from `128, 64, 32, 16, 8, 4, 2, 1`.",
            traps: n * 2 !== n ? [{ spec: { type: "number", value: n * 2 }, feedback: "Check your column alignment — the rightmost bit weighs `1`, not `2`!" }] : [],
            solution: [
              `Align \`${b}\` under \`128, 64, 32, 16, 8, 4, 2, 1\`.`,
              `Sum active columns: \`${weights.join(" + ")} = ${n}\`.`,
            ],
          };
        }
        return {
          prompt: `Convert the denary integer \`${n}\` into an **8-bit unsigned binary** string.`,
          answer: { type: "text", accept: [b, `${b.slice(0, 4)} ${b.slice(4)}`], display: b },
          hint: "Subtract greedily from `128, 64, 32, 16, 8, 4, 2, 1` and keep all 8 bits (including leading zeros).",
          traps:
            n < 128 && b.replace(/^0+/, "") !== b
              ? [{ spec: { type: "text", accept: [b.replace(/^0+/, "")] }, feedback: "Pad leading `0`s on the left so your answer is a full **8-bit** byte!" }]
              : [],
          solution: [
            `Decompose \`${n}\` into powers of 2 across \`128..1\`.`,
            `8-bit binary representation: \`${b}\` (nibbles \`${b.slice(0, 4)} ${b.slice(4)}\`).`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 2);
        const n = rng.int(18, 254);
        const b = toBin8(n);
        const h = toHex2(n);
        if (mode === 0) {
          const swapped = `${h[1]}${h[0]}`;
          const traps: Trap[] = swapped !== h ? [{ spec: { type: "text", accept: [swapped] }, feedback: "You swapped the upper and lower nibbles — convert left nibble first, right nibble second!" }] : [];
          return {
            prompt: `Convert the 8-bit binary byte \`${b}\` into **2-digit hexadecimal** (without any prefix).`,
            answer: { type: "text", accept: [h, `0x${h}`, `#${h}`], display: h },
            hint: `Split into two 4-bit nibbles (\`${b.slice(0, 4)}\` and \`${b.slice(4)}\`) and convert each to \`0–F\`.`,
            traps,
            solution: [
              `Upper nibble \`${b.slice(0, 4)}\` = \`${parseInt(b.slice(0, 4), 2)}\` → \`${h[0]}\`.`,
              `Lower nibble \`${b.slice(4)}\` = \`${parseInt(b.slice(4), 2)}\` → \`${h[1]}\`, giving \`${h}\`.`,
            ],
          };
        }
        if (mode === 1) {
          return {
            prompt: `Convert the hexadecimal byte \`${h}\` into **denary**.`,
            answer: { type: "number", value: n },
            hint: `Compute \`16 × (${h[0]} in denary) + (${h[1]} in denary)\`, remembering \`A=10 .. F=15\`.`,
            traps:
              (n >> 4) > 0 && (n >> 4) * 10 + (n & 15) !== n
                ? [{ spec: { type: "number", value: (n >> 4) * 10 + (n & 15) }, feedback: "Multiply the first hex digit by **16**, not by 10!" }]
                : [],
            solution: [
              `\`${h[0]}\` = \`${n >> 4}\` (in the \`16\`s column) and \`${h[1]}\` = \`${n & 15}\` (in the \`1\`s column).`,
              `\`${n >> 4} × 16 + ${n & 15} = ${(n >> 4) * 16} + ${n & 15} = ${n}\`.`,
            ],
          };
        }
        return {
          prompt: `Expand the hexadecimal byte \`${h}\` into an **8-bit binary** string.`,
          answer: { type: "text", accept: [b, `${b.slice(0, 4)} ${b.slice(4)}`], display: b },
          hint: "Convert each hex digit into its own 4-bit nibble (`8, 4, 2, 1`), keeping any leading zeros.",
          solution: [
            `\`${h[0]}\` (\`${n >> 4}\`) → \`${b.slice(0, 4)}\`, and \`${h[1]}\` (\`${n & 15}\`) → \`${b.slice(4)}\`.`,
            `Joined 8-bit byte: \`${b}\`.`,
          ],
        };
      }

      // tier === 3: 12-bit / 16-bit hex <-> binary / denary
      const mode = rng.int(0, 1);
      if (mode === 0) {
        const hi = rng.int(1, 15);
        const mid = rng.int(0, 15);
        const lo = rng.int(1, 15);
        const val = hi * 256 + mid * 16 + lo;
        const hex3 = val.toString(16).toUpperCase().padStart(3, "0");
        return {
          prompt: `Convert the 3-digit hexadecimal value \`${hex3}\` into **denary**.`,
          answer: { type: "number", value: val },
          hint: "Use base-16 place values `256`, `16`, and `1` (`A=10 .. F=15`).",
          solution: [
            `Digits in denary: \`${hex3[0]}=${hi}\`, \`${hex3[1]}=${mid}\`, \`${hex3[2]}=${lo}\`.`,
            `\`${hi} × 256 + ${mid} × 16 + ${lo} = ${hi * 256} + ${mid * 16} + ${lo} = ${val}\`.`,
          ],
        };
      }
      const v16 = rng.int(4096, 65534);
      const bin16 = v16.toString(2).padStart(16, "0");
      const spaced16 = `${bin16.slice(0, 4)} ${bin16.slice(4, 8)} ${bin16.slice(8, 12)} ${bin16.slice(12)}`;
      const hex4 = v16.toString(16).toUpperCase().padStart(4, "0");
      return {
        prompt: `Convert the 16-bit binary value \`${spaced16}\` into **4-digit hexadecimal** (without any prefix).`,
        answer: { type: "text", accept: [hex4, `0x${hex4}`, `#${hex4}`], display: hex4 },
        hint: "Convert each of the four 4-bit nibbles directly to `0–F`.",
        solution: [
          `Nibble by nibble: \`${bin16.slice(0, 4)}→${hex4[0]}\`, \`${bin16.slice(4, 8)}→${hex4[1]}\`, \`${bin16.slice(8, 12)}→${hex4[2]}\`, \`${bin16.slice(12)}→${hex4[3]}\`.`,
          `Result: \`${hex4}\`.`,
        ],
      };
    },
  },
  {
    id: "number-systems.binary-addition",
    topicId: "number-systems",
    title: "8-Bit Binary Addition & Overflow",
    level: 2,
    guideRef: "binary-addition-overflow",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const a = rng.int(12, 110);
        const b = rng.int(11, 120);
        const sum = a + b; // <= 230, never overflows
        const ba = toBin8(a);
        const bb = toBin8(b);
        const bs = toBin8(sum);
        return {
          prompt: `Add the unsigned 8-bit binary numbers \`${ba}\` and \`${bb}\`. Give your answer as an **8-bit binary** string.`,
          answer: { type: "text", accept: [bs, `${bs.slice(0, 4)} ${bs.slice(4)}`], display: bs },
          hint: "Work right-to-left using `1 + 1 = 0` carry `1`, and `1 + 1 + 1 = 1` carry `1`.",
          traps:
            (a ^ b) !== sum
              ? [{ spec: { type: "text", accept: [toBin8(a ^ b)] }, feedback: "Don't forget to propagate carry bits to the next column left (`1 + 1 = 0` carry `1`)!" }]
              : [],
          solution: [
            `Add column-by-column right-to-left: \`${ba} + ${bb} = ${bs}\`.`,
            `Denary sanity check: \`${a} + ${b} = ${sum}\`, and \`${bs}₂ = ${sum}\`.`,
          ],
        };
      }

      if (tier === 2) {
        const willOverflow = rng.bool(0.5);
        const a = willOverflow ? rng.int(150, 240) : rng.int(70, 145);
        const b = willOverflow ? rng.int(256 - a, 210) : rng.int(30, 255 - a);
        const sum = a + b;
        const ba = toBin8(a);
        const bb = toBin8(b);
        const low8 = toBin8(sum & 0xff);
        if (willOverflow) {
          return {
            prompt: `Unsigned \`${ba}\` (\`${a}\`) and \`${bb}\` (\`${b}\`) are added into an **8-bit** register (any 9th carry-out bit overflows out). Give the **8-bit binary** pattern that remains inside the register.`,
            answer: { type: "text", accept: [low8, `${low8.slice(0, 4)} ${low8.slice(4)}`], display: low8 },
            hint: `Add the two bytes in 9 bits (\`1 ${low8}\`) and keep only the lower 8 bits that fit inside the register.`,
            traps: [{ spec: { type: "text", accept: [`1${low8}`] }, feedback: "That is 9 bits — the 9th carry bit overflows out, leaving only the lower **8** bits in the register!" }],
            solution: [
              `True sum: \`${a} + ${b} = ${sum}\` = 9-bit \`1 ${low8}\`.`,
              `The 9th bit (\`256\`) overflows out, leaving \`${low8}\` (\`${sum - 256}\`) inside the 8-bit register.`,
            ],
          };
        }
        return {
          prompt: `Add the unsigned 8-bit binary numbers \`${ba}\` and \`${bb}\`. Give the **8-bit binary** sum.`,
          answer: { type: "text", accept: [low8, `${low8.slice(0, 4)} ${low8.slice(4)}`], display: low8 },
          hint: "Track carry bits carefully from LSB (right) to MSB (left) and verify in denary.",
          solution: [
            `\`${ba}\` (\`${a}\`) + \`${bb}\` (\`${b}\`) = \`${low8}\` (\`${sum} ≤ 255\`, no overflow).`,
          ],
        };
      }

      // tier === 3: Hex register addition with overflow modulo 256 -> hex or denary
      const a = rng.int(140, 250);
      const b = rng.int(130, 245);
      const sum = a + b; // >= 270, guaranteed overflow
      const rem = sum - 256;
      const askHex = rng.bool(0.5);
      if (askHex) {
        const hx = toHex2(rem);
        return {
          prompt: `Two unsigned 8-bit registers hold hexadecimal \`${toHex2(a)}\` and \`${toHex2(b)}\`. After 8-bit addition (discarding the 9th overflow carry bit), what **2-digit hexadecimal** value remains in the 8-bit register?`,
          answer: { type: "text", accept: [hx, `0x${hx}`, `#${hx}`], display: hx },
          hint: "Convert both hex bytes to binary nibbles (or denary), add them, discard `256` (the 9th bit), and convert back to 2-digit hex.",
          solution: [
            `\`${toHex2(a)}₁₆ = ${a}\` and \`${toHex2(b)}₁₆ = ${b}\`; sum = \`${sum}\`.`,
            `After 8-bit overflow (\`${sum} − 256 = ${rem}\`), the register holds \`${toBin8(rem)}₂ = ${hx}₁₆\`.`,
          ],
        };
      }
      return {
        prompt: `Unsigned \`${toBin8(a)}\` and \`${toBin8(b)}\` are added into an 8-bit register (wrapping modulo \`256\` on overflow). What **denary** integer remains stored in the 8-bit register?`,
        answer: { type: "number", value: rem },
        hint: "Convert both bytes to denary, add them, and subtract `256` for the lost 9th overflow bit.",
        traps: [{ spec: { type: "number", value: sum }, feedback: `\`${sum}\` is the 9-bit sum — subtract \`256\` because the 9th bit overflows out of the 8-bit register!` }],
        solution: [
          `\`${toBin8(a)}₂ = ${a}\` and \`${toBin8(b)}₂ = ${b}\`.`,
          `\`${a} + ${b} = ${sum}\`; discarding the 9th bit (\`256\`) leaves \`${sum} − 256 = ${rem}\`.`,
        ],
      };
    },
  },
  {
    id: "number-systems.logical-shifts",
    topicId: "number-systems",
    title: "Logical Left & Right Binary Shifts",
    level: 2,
    guideRef: "logical-shifts",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const left = rng.bool(0.5);
        const shift = rng.int(1, 3);
        const n = left ? rng.int(3, Math.floor(255 / (1 << shift))) : rng.int(1 << shift, 250) & ~((1 << shift) - 1);
        const b = toBin8(n);
        const res = left ? (n << shift) & 0xff : n >>> shift;
        const br = toBin8(res);
        return {
          prompt: `Perform a **logical ${left ? "left" : "right"} shift of ${shift} place${shift > 1 ? "s" : ""}** on \`${b}\`. Give the resulting **8-bit binary** string.`,
          answer: { type: "text", accept: [br, `${br.slice(0, 4)} ${br.slice(4)}`], display: br },
          hint: left
            ? `Discard the leftmost ${shift} bit(s) and pad ${shift} zero(s) on the right.`
            : `Discard the rightmost ${shift} bit(s) and pad ${shift} zero(s) on the left.`,
          solution: [
            `Original byte: \`${b}\` (\`${n}\`).`,
            `Logical ${left ? "left" : "right"} shift by ${shift} (${left ? "×" : "÷"} ${1 << shift}) gives \`${br}\` (\`${res}\`).`,
          ],
        };
      }

      if (tier === 2) {
        // Right shift with truncation or left shift denary outcome
        const mode = rng.int(0, 1);
        const shift = rng.int(1, 3);
        if (mode === 0) {
          // Right shift with odd/non-multiple bits -> truncated denary integer
          const base = rng.int(5, 30);
          const remBits = rng.int(1, (1 << shift) - 1);
          const n = ((base << shift) | remBits) & 0xff;
          const res = n >>> shift;
          return {
            prompt: `Unsigned \`${toBin8(n)}\` (\`${n}\`) undergoes a **logical right shift of ${shift} place${shift > 1 ? "s" : ""}**. Give the resulting **denary** integer stored in the register.`,
            answer: { type: "number", value: res },
            hint: `Drop the rightmost ${shift} bit(s) (truncating any fractional part, NEVER rounding up!) and convert the remaining bits to denary.`,
            traps:
              Math.round(n / (1 << shift)) !== res
                ? [{ spec: { type: "number", value: Math.round(n / (1 << shift)) }, feedback: "Logical right shifts **truncate** discarded LSB `1`-bits rather than rounding `.5` up!" }]
                : [],
            solution: [
              `\`${toBin8(n)}\` >> ${shift} = \`${toBin8(res)}\` (discarding rightmost bits \`${remBits.toString(2).padStart(shift, "0")}\`).`,
              `Truncated denary value: \`${res}\` (\`${n} ÷ ${1 << shift} = ${n / (1 << shift)}\` truncated to \`${res}\`).`,
            ],
          };
        }
        const n = rng.int(7, 62);
        const s = rng.int(1, 2);
        const res = (n << s) & 0xff;
        const linearWrong = n * (2 * s);
        return {
          prompt: `Unsigned \`${toBin8(n)}\` (\`${n}\`) undergoes a **logical left shift of ${s} place${s > 1 ? "s" : ""}**. What **denary** value is now in the 8-bit register?`,
          answer: { type: "number", value: res },
          hint: `Shifting left by ${s} multiplies by 2^${s} = ${1 << s} (provided the result stays ≤ 255).`,
          traps:
            linearWrong !== res
              ? [{ spec: { type: "number", value: linearWrong }, feedback: `Shifting left by ${s} multiplies by 2^${s} = ${1 << s}, not 2 × ${s}!` }]
              : [],
          solution: [
            `\`${toBin8(n)}\` << ${s} = \`${toBin8(res)}\`.`,
            `Denary value: \`${res}\`.`,
          ],
        };
      }

      // tier === 3: Two-stage shift inside an 8-bit register (with bit loss!)
      const n = rng.int(130, 250); // MSB = 1 guaranteed!
      const sLeft = rng.int(1, 2);
      const sRight = rng.int(1, 3);
      const afterLeft = (n << sLeft) & 0xff;
      const finalVal = afterLeft >>> sRight;
      const naive = Math.floor((n * (1 << sLeft)) / (1 << sRight));
      return {
        prompt: `An 8-bit unsigned register holds \`${toBin8(n)}\` (\`${n}\`). First it undergoes a **logical left shift of ${sLeft} place${sLeft > 1 ? "s" : ""}** (in the 8-bit register), then a **logical right shift of ${sRight} place${sRight > 1 ? "s" : ""}**. What **denary** integer is now in the register?`,
        answer: { type: "number", value: finalVal },
        hint: "Trace the actual 8-bit register after the first shift — any `1`-bits pushed off the left MSB edge are gone forever before the right shift happens!",
        traps:
          naive !== finalVal
            ? [{ spec: { type: "number", value: naive }, feedback: "Don't combine `× 2^a ÷ 2^b` in denary — step 1 overflowed the 8-bit register and permanently lost upper `1`-bit(s)!" }]
            : [],
        solution: [
          `Step 1 (\`<< ${sLeft}\` in 8 bits): \`${toBin8(n)}\` becomes \`${toBin8(afterLeft)}\` (\`${afterLeft}\`).`,
          `Step 2 (\`>> ${sRight}\`): \`${toBin8(afterLeft)}\` becomes \`${toBin8(finalVal)}\` = \`${finalVal}\`.`,
        ],
      };
    },
  },
  {
    id: "number-systems.twos-complement",
    topicId: "number-systems",
    title: "8-Bit Two's Complement Signed Integers",
    level: 3,
    guideRef: "twos-complement",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        // Two's complement binary -> signed denary
        const v = rng.bool(0.75) ? -rng.int(1, 127) : rng.int(5, 120);
        const b = toBin8(v < 0 ? 256 + v : v);
        const posSum = (v < 0 ? 256 + v : v) & 0x7f;
        const traps: Trap[] = [];
        if (v < 0) {
          if (-posSum !== v && posSum !== 0) {
            traps.push({ spec: { type: "number", value: -posSum }, feedback: `Remember: the MSB weighs \`−128\` (not a minus sign!), so compute \`−128 + ${posSum} = ${v}\`.` });
          }
          if (v - 1 >= -128) {
            traps.push({ spec: { type: "number", value: v - 1 }, feedback: "If you inverted the bits, don't forget to **add `1`** to get the exact magnitude!" });
          }
          traps.push({ spec: { type: "number", value: 256 + v }, feedback: `\`${256 + v}\` is the unsigned value; in Two's Complement an MSB of \`1\` contributes \`−128\`.` });
        }
        return {
          prompt: `Convert the 8-bit **Two's Complement** binary integer \`${b}\` into **denary**.`,
          answer: { type: "number", value: v },
          hint: v < 0 ? "Start with `−128` for the leftmost `1`, then add the active positive weights (`64..1`)." : "Because the MSB is `0`, the number is positive — simply sum the active positive weights!",
          traps,
          solution:
            v < 0
              ? [
                  `MSB is \`1\` (\`−128\`), and active positive bits (\`64..1\`) sum to \`+${posSum}\`.`,
                  `\`−128 + ${posSum} = ${v}\`.`,
                ]
              : [
                  `MSB is \`0\` (non-negative). Sum active positive weights: \`+${v}\`.`,
                ],
        };
      }

      if (tier === 2) {
        // Negative denary -> 8-bit Two's Complement binary
        const mag = rng.int(2, 126);
        const posBin = toBin8(mag);
        const onesComp = toBin8((~mag) & 0xff);
        const ans = toBin8(256 - mag);
        const signMag = toBin8(0x80 | mag);
        const traps: Trap[] = [
          { spec: { type: "text", accept: [onesComp] }, feedback: `You inverted \`+${mag}\` to \`${onesComp}\`, now don't forget to **add \`1\`** (\`${ans}\`)!` },
        ];
        if (signMag !== ans && signMag !== onesComp) {
          traps.push({ spec: { type: "text", accept: [signMag] }, feedback: "Don't just set the MSB to `1` (sign-and-magnitude) — invert all 8 bits of the positive number and add `1`!" });
        }
        return {
          prompt: `Convert the negative denary integer \`−${mag}\` into an **8-bit Two's Complement** binary string.`,
          answer: { type: "text", accept: [ans, `${ans.slice(0, 4)} ${ans.slice(4)}`], display: ans },
          hint: `Write \`+${mag}\` in 8-bit binary (\`${posBin}\`), invert all 8 bits, and add \`1\`.`,
          traps,
          solution: [
            `\`+${mag}\` in 8-bit binary is \`${posBin}\`.`,
            `Invert bits → \`${onesComp}\`; add \`1\` → \`${ans}\` (check: \`−128 + ${128 - mag} = −${mag}\`).`,
          ],
        };
      }

      // tier === 3: Signed Two's Complement addition or Hex-to-Two's-Complement
      const mode = rng.int(0, 1);
      if (mode === 0) {
        const v = -rng.int(3, 125);
        const raw = 256 + v;
        const hx = toHex2(raw);
        return {
          prompt: `A register inspect tool shows an **8-bit Two's Complement** signed integer in hexadecimal as \`${hx}\`. What **signed denary** integer does it represent?`,
          answer: { type: "number", value: v },
          hint: `Expand \`${hx}\` into two 4-bit nibbles (\`${toBin8(raw)}\`), then apply Two's Complement weights (\`−128, +64, …, +1\`).`,
          traps: [{ spec: { type: "number", value: raw }, feedback: `\`${raw}\` is the unsigned value of \`${hx}\` — apply Two's Complement (\`−128 + ${raw - 128} = ${v}\`).` }],
          solution: [
            `Expand \`${hx}₁₆\` to 8-bit binary: \`${toBin8(raw)}\`.`,
            `Evaluate Two's Complement: \`−128 + ${raw - 128} = ${v}\`.`,
          ],
        };
      }
      // Signed addition staying cleanly inside -128..+127
      const a = -rng.int(15, 85);
      const b = rng.bool(0.5) ? rng.int(10, 95) : -rng.int(5, 40);
      const sum = a + b; // guaranteed inside [-125, +80]
      const ba = toBin8((256 + a) & 0xff);
      const bb = toBin8((256 + b) & 0xff);
      const bs = toBin8((256 + sum) & 0xff);
      return {
        prompt: `Add the two 8-bit Two's Complement integers \`${ba}\` (\`${a}\`) and \`${bb}\` (\`${b > 0 ? `+${b}` : b}\`), discarding any 9th carry-out bit. Give the resulting **8-bit Two's Complement binary** string.`,
        answer: { type: "text", accept: [bs, `${bs.slice(0, 4)} ${bs.slice(4)}`], display: bs },
        hint: `Add the 8 columns right-to-left (discarding any 9th bit) and verify that your 8-bit Two's Complement answer equals \`${sum}\`.`,
        solution: [
          `Column addition (modulo 256): \`${ba} + ${bb} = ${bs}\`.`,
          `Signed Two's Complement check: \`${a} + (${b}) = ${sum}\`, which matches \`${bs}\`.`,
        ],
      };
    },
  },
];
