import type { TopicGuide } from "../../types.ts";

const svgBasePlaceValues = [
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="8-bit binary place values split into two 4-bit hexadecimal nibbles showing 10101101 equals AD hex equals 173 denary">',
  '<rect x="8" y="8" width="544" height="244" rx="16" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>',
  '<text x="280" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">8-Bit Byte → Two 4-Bit Nibbles → Hexadecimal &amp; Denary</text>',
  // Upper nibble frame
  '<rect x="24" y="46" width="248" height="142" rx="12" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>',
  '<text x="148" y="64" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">UPPER NIBBLE (4 bits · weights 8, 4, 2, 1)</text>',
  // Lower nibble frame
  '<rect x="288" y="46" width="248" height="142" rx="12" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/>',
  '<text x="412" y="64" text-anchor="middle" font-size="11" font-weight="700" fill="var(--warn)">LOWER NIBBLE (4 bits · weights 8, 4, 2, 1)</text>',
  // Byte place values row
  '<text x="59" y="84" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">128</text>',
  '<text x="118" y="84" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">64</text>',
  '<text x="177" y="84" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">32</text>',
  '<text x="236" y="84" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">16</text>',
  '<text x="323" y="84" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">8</text>',
  '<text x="382" y="84" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">4</text>',
  '<text x="441" y="84" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">2</text>',
  '<text x="500" y="84" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">1</text>',
  // Bit boxes: 1 0 1 0 | 1 1 0 1
  '<rect x="36" y="92" width="46" height="44" rx="8" fill="var(--surface)" stroke="var(--brand)" stroke-width="2"/>',
  '<text x="59" y="121" text-anchor="middle" font-size="20" font-weight="800" fill="var(--brand)">1</text>',
  '<rect x="95" y="92" width="46" height="44" rx="8" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>',
  '<text x="118" y="121" text-anchor="middle" font-size="20" font-weight="700" fill="var(--ink-2)">0</text>',
  '<rect x="154" y="92" width="46" height="44" rx="8" fill="var(--surface)" stroke="var(--brand)" stroke-width="2"/>',
  '<text x="177" y="121" text-anchor="middle" font-size="20" font-weight="800" fill="var(--brand)">1</text>',
  '<rect x="213" y="92" width="46" height="44" rx="8" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>',
  '<text x="236" y="121" text-anchor="middle" font-size="20" font-weight="700" fill="var(--ink-2)">0</text>',
  '<rect x="300" y="92" width="46" height="44" rx="8" fill="var(--surface)" stroke="var(--warn)" stroke-width="2"/>',
  '<text x="323" y="121" text-anchor="middle" font-size="20" font-weight="800" fill="var(--warn)">1</text>',
  '<rect x="359" y="92" width="46" height="44" rx="8" fill="var(--surface)" stroke="var(--warn)" stroke-width="2"/>',
  '<text x="382" y="121" text-anchor="middle" font-size="20" font-weight="800" fill="var(--warn)">1</text>',
  '<rect x="418" y="92" width="46" height="44" rx="8" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>',
  '<text x="441" y="121" text-anchor="middle" font-size="20" font-weight="700" fill="var(--ink-2)">0</text>',
  '<rect x="477" y="92" width="46" height="44" rx="8" fill="var(--surface)" stroke="var(--warn)" stroke-width="2"/>',
  '<text x="500" y="121" text-anchor="middle" font-size="20" font-weight="800" fill="var(--warn)">1</text>',
  // Nibble hex totals
  '<text x="148" y="158" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">8 + 2 = 10 → Hex A</text>',
  '<text x="148" y="176" text-anchor="middle" font-size="11" fill="var(--ink-2)">(Nibble weights: 8, 4, 2, 1)</text>',
  '<text x="412" y="158" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">8 + 4 + 1 = 13 → Hex D</text>',
  '<text x="412" y="176" text-anchor="middle" font-size="11" fill="var(--ink-2)">(Nibble weights: 8, 4, 2, 1)</text>',
  // Summary bar
  '<rect x="24" y="200" width="512" height="38" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>',
  '<text x="280" y="224" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">10101101₂  =  AD₁₆ (10 × 16 + 13)  =  128 + 32 + 8 + 4 + 1 = 173₁₀</text>',
  '</svg>',
].join("");

const svgBinaryOverflow = [
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="8-bit binary addition of 10110100 and 01101100 producing a 9th carry-out bit and overflow error">',
  '<rect x="8" y="8" width="544" height="244" rx="16" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>',
  '<text x="280" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">8-Bit Binary Addition &amp; Register Overflow (180 + 108 = 288 &gt; 255)</text>',
  // 8-bit register box
  '<rect x="116" y="48" width="352" height="148" rx="12" fill="var(--surface)" stroke="var(--brand)" stroke-width="2"/>',
  '<text x="292" y="66" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">8-BIT CPU REGISTER (MAX UNSIGNED = 255)</text>',
  // Overflow 9th bit box
  '<rect x="32" y="48" width="72" height="148" rx="12" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="2" stroke-dasharray="5 3"/>',
  '<text x="68" y="66" text-anchor="middle" font-size="10" font-weight="800" fill="var(--bad)">9th BIT!</text>',
  // Operand A: 1 0 1 1 0 1 0 0 (180)
  '<text x="142" y="94" text-anchor="middle" font-size="16" font-weight="700" font-family="monospace" fill="var(--ink)">1</text>',
  '<text x="184" y="94" text-anchor="middle" font-size="16" font-weight="700" font-family="monospace" fill="var(--ink)">0</text>',
  '<text x="226" y="94" text-anchor="middle" font-size="16" font-weight="700" font-family="monospace" fill="var(--ink)">1</text>',
  '<text x="268" y="94" text-anchor="middle" font-size="16" font-weight="700" font-family="monospace" fill="var(--ink)">1</text>',
  '<text x="310" y="94" text-anchor="middle" font-size="16" font-weight="700" font-family="monospace" fill="var(--ink)">0</text>',
  '<text x="352" y="94" text-anchor="middle" font-size="16" font-weight="700" font-family="monospace" fill="var(--ink)">1</text>',
  '<text x="394" y="94" text-anchor="middle" font-size="16" font-weight="700" font-family="monospace" fill="var(--ink)">0</text>',
  '<text x="436" y="94" text-anchor="middle" font-size="16" font-weight="700" font-family="monospace" fill="var(--ink)">0</text>',
  '<text x="510" y="94" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink-2)">= 180</text>',
  // Operand B: + 0 1 1 0 1 1 0 0 (108)
  '<text x="122" y="122" text-anchor="middle" font-size="16" font-weight="800" fill="var(--brand)">+</text>',
  '<text x="142" y="122" text-anchor="middle" font-size="16" font-weight="700" font-family="monospace" fill="var(--ink)">0</text>',
  '<text x="184" y="122" text-anchor="middle" font-size="16" font-weight="700" font-family="monospace" fill="var(--ink)">1</text>',
  '<text x="226" y="122" text-anchor="middle" font-size="16" font-weight="700" font-family="monospace" fill="var(--ink)">1</text>',
  '<text x="268" y="122" text-anchor="middle" font-size="16" font-weight="700" font-family="monospace" fill="var(--ink)">0</text>',
  '<text x="310" y="122" text-anchor="middle" font-size="16" font-weight="700" font-family="monospace" fill="var(--ink)">1</text>',
  '<text x="352" y="122" text-anchor="middle" font-size="16" font-weight="700" font-family="monospace" fill="var(--ink)">1</text>',
  '<text x="394" y="122" text-anchor="middle" font-size="16" font-weight="700" font-family="monospace" fill="var(--ink)">0</text>',
  '<text x="436" y="122" text-anchor="middle" font-size="16" font-weight="700" font-family="monospace" fill="var(--ink)">0</text>',
  '<text x="510" y="122" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink-2)">= 108</text>',
  '<line x1="124" y1="132" x2="454" y2="132" stroke="var(--ink-2)" stroke-width="1.5"/>',
  // Sum row: [1] | 0 0 1 0 0 0 0 0
  '<text x="68" y="160" text-anchor="middle" font-size="22" font-weight="800" font-family="monospace" fill="var(--bad)">1</text>',
  '<text x="142" y="160" text-anchor="middle" font-size="18" font-weight="800" font-family="monospace" fill="var(--good)">0</text>',
  '<text x="184" y="160" text-anchor="middle" font-size="18" font-weight="800" font-family="monospace" fill="var(--good)">0</text>',
  '<text x="226" y="160" text-anchor="middle" font-size="18" font-weight="800" font-family="monospace" fill="var(--good)">1</text>',
  '<text x="268" y="160" text-anchor="middle" font-size="18" font-weight="800" font-family="monospace" fill="var(--good)">0</text>',
  '<text x="310" y="160" text-anchor="middle" font-size="18" font-weight="800" font-family="monospace" fill="var(--good)">0</text>',
  '<text x="352" y="160" text-anchor="middle" font-size="18" font-weight="800" font-family="monospace" fill="var(--good)">0</text>',
  '<text x="394" y="160" text-anchor="middle" font-size="18" font-weight="800" font-family="monospace" fill="var(--good)">0</text>',
  '<text x="436" y="160" text-anchor="middle" font-size="18" font-weight="800" font-family="monospace" fill="var(--good)">0</text>',
  '<text x="510" y="160" text-anchor="middle" font-size="12" font-weight="800" fill="var(--bad)">= 32?!</text>',
  // Carries row
  '<text x="68" y="184" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">Carry 1</text>',
  '<text x="142" y="184" text-anchor="middle" font-size="11" fill="var(--ink-2)">c:1</text>',
  '<text x="184" y="184" text-anchor="middle" font-size="11" fill="var(--ink-2)">c:1</text>',
  '<text x="226" y="184" text-anchor="middle" font-size="11" fill="var(--ink-2)">c:1</text>',
  '<text x="268" y="184" text-anchor="middle" font-size="11" fill="var(--ink-2)">c:1</text>',
  '<text x="310" y="184" text-anchor="middle" font-size="11" fill="var(--ink-2)">c:1</text>',
  '<text x="352" y="184" text-anchor="middle" font-size="11" fill="var(--ink-2)">·</text>',
  // Footer explanation
  '<rect x="32" y="206" width="496" height="34" rx="10" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.2"/>',
  '<text x="280" y="227" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">Overflow! 288 needs 9 bits — the 9th bit (256) falls out of the 8-bit register, leaving 32.</text>',
  '</svg>',
].join("");

const svgLogicalShifts = [
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Logical left shift multiplying by 2^n and logical right shift dividing by 2^n with zero padding and bit loss">',
  '<rect x="8" y="8" width="544" height="244" rx="16" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>',
  '<text x="280" y="30" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Logical Shifts: Left Multiplies by 2ⁿ · Right Divides by 2ⁿ</text>',
  // Left shift panel
  '<rect x="20" y="44" width="520" height="92" rx="12" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.5"/>',
  '<text x="36" y="64" font-size="12" font-weight="800" fill="var(--brand)">LOGICAL LEFT SHIFT BY 2 PLACES (× 2² = × 4)</text>',
  '<text x="36" y="92" font-size="13" font-weight="700" fill="var(--ink-2)">Before: 00011010₂ (26)</text>',
  '<text x="235" y="92" font-size="14" font-weight="800" fill="var(--brand)">── shift left 2 ──▶</text>',
  '<text x="382" y="92" font-size="13" font-weight="800" fill="var(--good)">After: 01101000₂ (104)</text>',
  '<text x="36" y="118" font-size="11" fill="var(--ink-2)">• Leftmost 2 bits drop off MSB end (watch out: if a 1-bit drops off, OVERFLOW occurs!)</text>',
  '<text x="36" y="131" font-size="11" fill="var(--brand)">• Empty rightmost 2 LSB slots are padded with 00.</text>',
  // Right shift panel
  '<rect x="20" y="148" width="520" height="94" rx="12" fill="var(--surface)" stroke="var(--accent)" stroke-width="1.5"/>',
  '<text x="36" y="168" font-size="12" font-weight="800" fill="var(--warn)">LOGICAL RIGHT SHIFT BY 3 PLACES (÷ 2³ = ÷ 8, truncated)</text>',
  '<text x="36" y="196" font-size="13" font-weight="700" fill="var(--ink-2)">Before: 01011100₂ (92)</text>',
  '<text x="235" y="196" font-size="14" font-weight="800" fill="var(--warn)">── shift right 3 ─▶</text>',
  '<text x="382" y="196" font-size="13" font-weight="800" fill="var(--bad)">After: 00001011₂ (11)</text>',
  '<text x="36" y="220" font-size="11" fill="var(--ink-2)">• Empty leftmost 3 MSB slots are padded with 000.</text>',
  '<text x="36" y="234" font-size="11" fill="var(--bad)">• Dropped bits 100₂ contained a 1-bit → 92 ÷ 8 = 11.5 truncated to 11 (LOSS OF PRECISION).</text>',
  '</svg>',
].join("");

const svgTwosComplement = [
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="8-bit Twos Complement place values with negative 128 MSB showing 10110101 equals negative 75">',
  '<rect x="8" y="8" width="544" height="244" rx="16" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>',
  '<text x="280" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">8-Bit Two&apos;s Complement: MSB Weight Is −128 (Range −128 to +127)</text>',
  // MSB negative box
  '<rect x="26" y="48" width="66" height="96" rx="10" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="2"/>',
  '<text x="59" y="68" text-anchor="middle" font-size="13" font-weight="800" fill="var(--bad)">−128</text>',
  '<text x="59" y="108" text-anchor="middle" font-size="24" font-weight="800" fill="var(--bad)">1</text>',
  '<text x="59" y="134" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">SIGN / MSB</text>',
  // Positive 7 bits: 64(0), 32(1), 16(1), 8(0), 4(1), 2(0), 1(1) -> +53
  '<rect x="100" y="48" width="58" height="96" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>',
  '<text x="129" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink-2)">+64</text>',
  '<text x="129" y="108" text-anchor="middle" font-size="22" font-weight="700" fill="var(--ink-2)">0</text>',
  '<rect x="164" y="48" width="58" height="96" rx="10" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2"/>',
  '<text x="193" y="68" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">+32</text>',
  '<text x="193" y="108" text-anchor="middle" font-size="22" font-weight="800" fill="var(--good)">1</text>',
  '<rect x="228" y="48" width="58" height="96" rx="10" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2"/>',
  '<text x="257" y="68" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">+16</text>',
  '<text x="257" y="108" text-anchor="middle" font-size="22" font-weight="800" fill="var(--good)">1</text>',
  '<rect x="292" y="48" width="58" height="96" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>',
  '<text x="321" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink-2)">+8</text>',
  '<text x="321" y="108" text-anchor="middle" font-size="22" font-weight="700" fill="var(--ink-2)">0</text>',
  '<rect x="356" y="48" width="58" height="96" rx="10" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2"/>',
  '<text x="385" y="68" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">+4</text>',
  '<text x="385" y="108" text-anchor="middle" font-size="22" font-weight="800" fill="var(--good)">1</text>',
  '<rect x="420" y="48" width="54" height="96" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>',
  '<text x="447" y="68" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink-2)">+2</text>',
  '<text x="447" y="108" text-anchor="middle" font-size="22" font-weight="700" fill="var(--ink-2)">0</text>',
  '<rect x="480" y="48" width="54" height="96" rx="10" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2"/>',
  '<text x="507" y="68" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">+1</text>',
  '<text x="507" y="108" text-anchor="middle" font-size="22" font-weight="800" fill="var(--good)">1</text>',
  // Calculation box
  '<rect x="26" y="156" width="508" height="84" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>',
  '<text x="280" y="180" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Place-Value Method:  −128 + 32 + 16 + 4 + 1  =  −128 + 53  =  −75</text>',
  '<text x="280" y="204" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Flip + Add 1 Check:  +75 = 01001011  →  Invert: 10110100  →  +1: 10110101 ✔</text>',
  '<text x="280" y="226" text-anchor="middle" font-size="11" fill="var(--ink-2)">Extreme values:  10000000 = −128  ·  11111111 = −1  ·  00000000 = 0  ·  01111111 = +127</text>',
  '</svg>',
].join("");

export const guide: TopicGuide = {
  id: "number-systems",
  title: "Number Systems & Two's Complement",
  strand: "Paper 1: Computer Systems",
  icon: "🔢",
  summary:
    "Master binary, denary and hexadecimal conversions, 8-bit addition & overflow, logical shifts, and Two's Complement signed integers without a calculator.",
  intro:
    "Every photograph, message, song and instruction inside a computer is ultimately stored as billions of microscopic **transistor switches** that are either **ON (`1`)** or **OFF (`0`)**. On CIE IGCSE `0478` (a strictly **non-calculator** exam!), Paper 1 tests whether you can move effortlessly between **denary** (base 10), **unsigned binary** (base 2), **hexadecimal** (base 16), and **8-bit Two's Complement** signed integers — and explain exactly when arithmetic or bit-shifting breaks the limits of a CPU register.",
  guide: [
    {
      id: "denary-binary-hex",
      heading: "Denary, Unsigned Binary & Hexadecimal",
      discovery: {
        problem:
          "A crash report prints a 16-bit memory value in binary as `1011010011100011`, while a second engineer writes it as `B4E3`. Without converting the whole 16-bit number into denary first, how did the second engineer read `B4E3` in under five seconds?",
        idea:
          "Because {{16 = 2^4}}, **every 1 hexadecimal digit maps to exactly 4 binary bits (1 nibble)**! Split the 16 bits into four独立的 4-bit nibbles from right to left: `1011` (`8+2+1 = 11 = B`), `0100` (`4`), `1110` (`8+4+2 = 14 = E`), `0011` (`3`) → `B4E3`. You never need denary as a middleman between binary and hex!",
      },
      body: [
        "### Why Computers Use Binary (and Why Humans Use Hexadecimal)",
        "A CPU contains billions of **logic gates built from transistors**. Each transistor is a tiny electronic switch with two reliable physical states: **high voltage / ON (`1`)** and **low voltage / OFF (`0`)**. Binary (**base-2**) matches that hardware directly.",
        "",
        "Long strings of `0`s and `1`s are exhausting for humans to read or type accurately, so computer scientists display binary data in **hexadecimal (base-16)** as a compact shorthand: **1 hex digit = 4 bits (1 nibble)**, and **2 hex digits = 8 bits (1 byte)**.",
        "",
        "| System | Base | Digits Used | Place Values (right → left) |",
        "|---|---|---|---|",
        "| **Denary** | 10 | `0–9` | `… 1000, 100, 10, 1` ({{10^3, 10^2, 10^1, 10^0}}) |",
        "| **Unsigned Binary** | 2 | `0, 1` | `128, 64, 32, 16, 8, 4, 2, 1` (8-bit); up to `32768` in 16-bit |",
        "| **Hexadecimal** | 16 | `0–9, A–F` | `4096, 256, 16, 1` ({{16^3, 16^2, 16^1, 16^0}}) |",
        "",
        "### Hex Letters `A`–`F` (Memorise Cold!)",
        "| Hex | `A` | `B` | `C` | `D` | `E` | `F` |",
        "|---|---|---|---|---|---|---|",
        "| **Denary** | `10` | `11` | `12` | `13` | `14` | `15` |",
        "| **4-bit Nibble** | `1010` | `1011` | `1100` | `1101` | `1110` | `1111` |",
        "",
        "### Conversion Playbook (Non-Calculator Paper!)",
        "1. **Binary ↔ Hex (Nibble Shortcut)**: Group bits into **4-bit nibbles** from the right (pad leading `0`s on the left if needed). Give each nibble weights `8, 4, 2, 1` and convert directly to `0–F`. Reverse by expanding each hex digit into **exactly 4 bits** (e.g. `3` → `0011`, **never** `11`!).",
        "2. **Binary → Denary**: Write `128, 64, 32, 16, 8, 4, 2, 1` above the 8 bits (or `32768, 16384, 8192, 4096, 2048, 1024, 512, 256` for the upper byte of a 16-bit integer) and add the column weights where the bit is `1`.",
        "3. **Denary → Binary (Greedy Subtraction)**: Walk left-to-right from `128` down to `1`. If the remaining total is `≥` the column weight, write `1` and subtract it; otherwise write `0`.",
        "4. **Hex ↔ Denary**: Either hop **Hex → Binary nibbles → Denary** (safest against multiplication slips!) or use base-16 weights: for two digits `XY₁₆`, compute `16 × X + Y`; for denary → hex, divide by `16`: quotient is the `16`s digit, remainder is the `1`s digit.",
        "",
        "### Five CIE `0478` Real Uses of Hexadecimal",
        "- **HTML / CSS Colour Codes**: `#FF8800` uses 24 bits (`#RRGGBB`): `FF` (`255`) red, `88` (`136`) green, `00` (`0`) blue.",
        "- **MAC Addresses**: 48-bit hardware identifiers written as 6 pairs of hex digits, e.g. `00:1A:2B:3C:4D:5E`.",
        "- **IPv6 Addresses**: 128-bit network addresses written as eight 4-digit hex groups separated by colons, e.g. `2001:0db8:85a3:0000:0000:8a2e:0370:7334`.",
        "- **Error Codes**: Compact codes like HTTP `404` or Windows stop code `0xC0000005` point engineers to exact memory/fault locations.",
        "- **Memory Dumps & Machine Code / Assembly**: Developers inspect raw RAM/register contents in hex because 2 hex digits fit 1 byte cleanly (`4`× shorter and far less error-prone than raw binary). **Important:** computers do **not** store hexadecimal in hardware — hex is purely for human readability!",
      ].join("\n"),
      diagram: svgBasePlaceValues,
      diagramCaption:
        "Splitting an 8-bit byte into two independent 4-bit nibbles converts instantly between binary (10101101) and hexadecimal (AD) without touching denary.",
      workedExamples: [
        {
          title: "Denary → 8-Bit Binary → Hexadecimal",
          problem: "Convert the denary number `173` into **(a)** an 8-bit unsigned binary integer and **(b)** hexadecimal.",
          steps: [
            "Write the 8-bit weights: `128, 64, 32, 16, 8, 4, 2, 1`.",
            "Greedy subtraction from `173`: `173 ≥ 128` (`1`, rem `45`); `45 < 64` (`0`); `45 ≥ 32` (`1`, rem `13`); `13 < 16` (`0`); `13 ≥ 8` (`1`, rem `5`); `5 ≥ 4` (`1`, rem `1`); `1 < 2` (`0`); `1 ≥ 1` (`1`, rem `0`).",
            "Read the 8 bits: `10101101` (check: `128 + 32 + 8 + 4 + 1 = 173`).",
            "Split into two 4-bit nibbles: `1010` = `8 + 2 = 10` → `A`, and `1101` = `8 + 4 + 1 = 13` → `D`.",
          ],
          answer: "(a) `10101101`   (b) `AD`",
          yourTurn: {
            question: "Convert the hexadecimal value `6E` into an 8-bit unsigned binary string.",
            answer: { type: "text", accept: ["01101110", "0110 1110"], display: "01101110" },
            solution: "Expand each hex digit to a 4-bit nibble: `6 = 0110` and `E = 14 = 1110`. Join them to get `01101110`.",
          },
        },
        {
          title: "16-Bit Binary & Hexadecimal Conversion",
          problem: "A 16-bit register holds `0001 0110 1010 1111`. Convert this value into **(a)** hexadecimal and **(b)** denary.",
          steps: [
            "Convert each 4-bit nibble to hex: `0001 = 1`, `0110 = 6`, `1010 = 10 = A`, `1111 = 15 = F` → `16AF`.",
            "For denary, add the active 16-bit binary place values: bit 12 (`4096`), bit 10 (`1024`), bit 9 (`512`), bit 7 (`128`), bit 5 (`32`), bit 3 (`8`), bit 2 (`4`), bit 1 (`2`), bit 0 (`1`).",
            "`4096 + 1024 + 512 = 5632`; `128 + 32 + 8 + 4 + 2 + 1 = 175`; total `5632 + 175 = 5807` (check via hex: `1×4096 + 6×256 + 10×16 + 15 = 4096 + 1536 + 160 + 15 = 5807`).",
          ],
          answer: "(a) `16AF`   (b) `5807`",
          yourTurn: {
            question: "Convert the 8-bit unsigned binary integer `11010110` into denary.",
            answer: { type: "number", value: 214 },
            solution: "Add the active weights: `128 + 64 + 16 + 4 + 2 = 214` (and notice the LSB is `0`, confirming an even integer!).",
          },
        },
      ],
      keyPoints: [
        "Computers use binary because transistors act as two-state switches (`1` = ON / high voltage, `0` = OFF / low voltage).",
        "An 8-bit unsigned byte represents integers from `0` (`00000000`) to `255` (`11111111`), which is {{2^8 = 256}} distinct values; 16 bits hold `0` to `65535` ({{2^16}} values).",
        "1 hex digit = exactly 4 binary bits (1 nibble). Always keep leading zeros inside every nibble (`2` → `0010`, so `52₁₆` → `01010010₂`).",
        "Hexadecimal does **not** save RAM inside the computer — it only makes binary shorter, easier to read, and less error-prone for humans.",
      ],
      whyItWorks:
        "Because {{16 = 2^4}}, grouping powers of 2 into fours factors out {{2^4 = 16}} cleanly: `(b₇·8 + b₆·4 + b₅·2 + b₄·1) × 16 + (b₃·8 + b₂·4 + b₁·2 + b₀·1)`. That exact algebraic split is why nibbles convert independently with zero carry spillover between groups!",
      strategies: [
        "Nibble Bridge: Convert Denary ↔ Binary ↔ Hex via 4-bit nibbles when multiplying/dividing by 16 feels error-prone.",
        "Parity Sanity Check: An unsigned binary integer is odd if and only if its rightmost bit (the `1`s column) is `1`.",
      ],
      thinkDeeper:
        "Why doesn't base-10 have a neat fixed-group shortcut from binary like base-16 (4 bits) or base-8 octal (3 bits)? What algebraic property must base `B` have so `k` binary bits map to exactly 1 base-`B` digit?",
    },
    {
      id: "binary-addition-overflow",
      heading: "Binary Addition & Overflow Errors",
      discovery: {
        problem:
          "At a hawker stall, an old 8-bit digital queue counter is on ticket `200` (`11001000`). Sixty more customers press the button (`+60` = `00111100`). Instead of showing `260`, the screen suddenly flashes `4`! Did the machine subtract, or what happened to the missing `256`?",
        idea:
          "`200 + 60 = 260`, which in binary is **9 bits**: `1 00000100` (`256 + 4`). Because the counter's register only has **8 bit slots**, the 9th carry-out bit (`256`) spills off the left end and is lost from the 8-bit display — leaving `00000100 = 4`. That silent wrap-around is an **overflow error**!",
      },
      body: [
        "### Four Column Rules of Binary Addition",
        "Work strictly **from right (LSB) to left (MSB)**, writing carry bits clearly underneath or above the next column left — just like primary-school column addition, except you carry whenever a column reaches `2` (`10₂`):",
        "",
        "| Column Calculation | Binary Sum | Write in Column | Carry to Next Column Left |",
        "|---|---|---|---|",
        "| `0 + 0` | `0₂` | `0` | `0` |",
        "| `1 + 0` (or `0 + 1`) | `1₂` | `1` | `0` |",
        "| `1 + 1` (denary `2`) | `10₂` | `0` | `1` |",
        "| `1 + 1 + 1` (denary `3`) | `11₂` | `1` | `1` |",
        "",
        "### What Is an Overflow Error? (CIE 2-Mark Definition)",
        "An **overflow error** occurs when the result of a calculation is **larger than the maximum value that can be stored in the allocated number of bits / register**.",
        "- For an **8-bit unsigned** addition, the maximum representable value is **`255`** (`11111111`).",
        "- Whenever the true sum is **`> 255`** (i.e. `≥ 256`), the addition generates a **9th bit** (a carry-out of `1` past the `128` column).",
        "- Because an 8-bit register cannot hold 9 bits, the CPU sets its **overflow / carry flag** and the 8-bit register retains only the lower 8 bits (`sum − 256`), which makes the answer inaccurate or unexpectedly tiny.",
        "",
        "### Double-Checking Every Exam Addition",
        "On CIE `0478` you ALWAYS get method marks for showing **carry bits**, and you can catch 100% of arithmetic slips in 10 seconds by converting both inputs and your binary answer to denary to verify `A + B = Sum`!",
      ].join("\n"),
      diagram: svgBinaryOverflow,
      diagramCaption:
        "Adding 180 (10110100) and 108 (01101100) generates a 9th carry-out bit (weight 256). Inside an 8-bit register only 00100000 (32) fits — a classic CIE overflow error.",
      workedExamples: [
        {
          title: "8-Bit Binary Addition Without Overflow",
          problem: "Add the two unsigned 8-bit binary integers `01011011` and `00110110`, showing all carry bits.",
          steps: [
            "Work right-to-left (bit 0 to bit 7):",
            "Bit 0 (`1`s): `1 + 0 = 1` (write `1`, carry `0`). Bit 1 (`2`s): `1 + 1 = 10₂` (write `0`, carry `1`).",
            "Bit 2 (`4`s): `0 + 1 + 1 = 10₂` (write `0`, carry `1`). Bit 3 (`8`s): `1 + 0 + 1 = 10₂` (write `0`, carry `1`).",
            "Bit 4 (`16`s): `1 + 1 + 1 = 11₂` (write `1`, carry `1`). Bit 5 (`32`s): `0 + 1 + 1 = 10₂` (write `0`, carry `1`).",
            "Bit 6 (`64`s): `1 + 0 + 1 = 10₂` (write `0`, carry `1`). Bit 7 (`128`s): `0 + 0 + 1 = 1` (write `1`, carry `0`).",
            "Denary check: `91 + 54 = 145`, and `10010001₂ = 128 + 16 + 1 = 145` (no 9th bit → no overflow).",
          ],
          answer: "`10010001`",
          yourTurn: {
            question: "Add the unsigned 8-bit binary numbers `00101101` and `01001011`. Give your answer as an 8-bit binary string.",
            answer: { type: "text", accept: ["01111000", "0111 1000"], display: "01111000" },
            solution: "`00101101` (`45`) + `01001011` (`75`) = `120` = `64 + 32 + 16 + 8` = `01111000` (carries propagate across bits 0–3 into bit 4).",
          },
        },
        {
          title: "Explaining Overflow in an 8-Bit Register",
          problem: "Add `11010010` and `01001110` in 8-bit binary and explain why an overflow error occurs.",
          steps: [
            "Add right-to-left: `11010010` (`210`) + `01001110` (`78`) produces 9-bit binary `1 00100000` (`288`).",
            "State the two CIE mark-scheme points: **(1)** The result (`288` / `100100000₂`) requires **9 bits** (produces a carry out of the MSB), **(2)** which **exceeds the maximum value (`255`) that can be stored in an 8-bit register**.",
          ],
          answer: "8-bit register holds `00100000` with carry-out `1`; overflow occurs because `288 > 255` requires 9 bits and cannot fit in an 8-bit register.",
        },
      ],
      keyPoints: [
        "Memorise `1 + 1 = 0` carry `1` (`10₂`), and `1 + 1 + 1 = 1` carry `1` (`11₂`). Never write a `2` or `3` in binary!",
        "Always draw a dedicated **carry row** in exam working — examiners award working marks even if one column slips.",
        "To earn **both marks** on *\"Explain why overflow occurred\"*: state **(1)** the calculation generated a **9th bit / carry past the MSB**, AND **(2)** the value **exceeds the maximum (`255`) an 8-bit register can store**.",
      ],
      whyItWorks:
        "An `n`-bit register physically has only `n` flip-flop circuits. Adding modulo {{2^n}} discards any multiple of {{2^n}} (`256` for 8 bits), just like a 3-digit car odometer rolling from `999` back to `000` on kilometre `1000`.",
      strategies: [
        "Two-Way Denary Audit: Convert both bytes and your 8-bit sum to denary afterwards to confirm `A + B = Sum` (or `A + B − 256` if overflow occurred).",
      ],
      thinkDeeper:
        "In 1996 the Ariane 5 rocket self-destructed 37 seconds after launch because a 64-bit floating-point velocity number was converted into a **16-bit signed integer** (`max +32767`). Why can hardware overflow turn a tiny software oversight into a catastrophic physical failure?",
    },
    {
      id: "logical-shifts",
      heading: "Logical Binary Shifts",
      discovery: {
        problem:
          "In denary, sliding every digit of `26` one column left and padding a `0` on the right gives `260` (`× 10`). What happens to the value of an unsigned binary number when every bit slides **one column left** and a `0` fills the right-hand slot?",
        idea:
          "Every binary column is worth **twice** the column to its right (`1 → 2 → 4 → 8 …`). Sliding every bit `1` place left doubles each active weight, so a **logical left shift by `1` multiplies by `2`** — and shifting left by `n` places multiplies by {{2^n}}!",
      },
      body: [
        "### Logical Left Shift vs Logical Right Shift",
        "A **logical shift** moves every bit in an unsigned register left or right by `n` places. Bits pushed beyond the register boundary are **discarded**, and the newly vacated slots at the opposite end are **padded with `0`s**.",
        "",
        "| Shift Direction | Mathematical Effect | Vacated End Padded With | When Does Data Corrupt / Lose Accuracy? |",
        "|---|---|---|---|",
        "| **Logical Left Shift** by `n` | **Multiplies** by {{2^n}} (`×2, ×4, ×8…`) | `0`s enter at the **right (LSB)** | If a **`1`-bit is shifted out of the leftmost (MSB) end**, **overflow** occurs and the result is wrong because the value exceeded `255`. |",
        "| **Logical Right Shift** by `n` | **Divides** by {{2^n}} (`÷2, ÷4, ÷8…`, integer floor) | `0`s enter at the **left (MSB)** | If a **`1`-bit is shifted out of the rightmost (LSB) end**, any fractional part (`.5`, `.25`…) is **truncated**, causing **loss of precision / accuracy**. |",
        "",
        "### Watch Out for Both Shift Failure Modes!",
        "- **Left-shift overflow example**: `01010000` (`80`) shifted left by `2` places (`× 4` should be `320 > 255`): the `1` in the `64`s column drops off the left end, leaving `01000000` (`64`), which is completely wrong!",
        "- **Right-shift truncation example**: `00011001` (`25`) shifted right by `1` place (`÷ 2`): the rightmost `1` drops off, leaving `00001100` (`12`) instead of `12.5` — fractional precision is lost because integers cannot store `.5`.",
      ].join("\n"),
      diagram: svgLogicalShifts,
      diagramCaption:
        "Logical left shift pads zeros on the right to multiply by 2ⁿ (risking MSB overflow); logical right shift pads zeros on the left to divide by 2ⁿ (risking LSB truncation).",
      workedExamples: [
        {
          title: "Logical Left Shift (Multiplying by 2ⁿ)",
          problem: "Perform a logical left shift of `2` places on the unsigned 8-bit register `00011010`. State the new binary pattern and the mathematical effect on its denary value.",
          steps: [
            "Original value: `00011010₂ = 16 + 8 + 2 = 26`.",
            "Discard the leftmost two bits (`00`), slide the remaining 6 bits two places left (`011010__`), and pad two `0`s on the right: `01101000`.",
            "New value: `64 + 32 + 8 = 104`. Because no `1`-bits fell off the MSB end, the value was cleanly **multiplied by {{2^2}} = 4** (`26 × 4 = 104`).",
          ],
          answer: "`01101000` (multiplies `26` by `4` to give `104`)",
          yourTurn: {
            question: "Perform a logical left shift of `3` places on `00010101`. Give your answer as an 8-bit binary string.",
            answer: { type: "text", accept: ["10101000", "1010 1000"], display: "10101000" },
            solution: "Drop the leftmost three `0`s (`000`) and pad `000` on the right: `10101000` (`21 × 8 = 168`).",
          },
        },
        {
          title: "Logical Right Shift with Loss of Precision",
          problem: "The unsigned binary integer `01011100` (`92`) undergoes a logical right shift of `3` places. Give the resulting 8-bit value and explain why it is inaccurate.",
          steps: [
            "Drop the rightmost 3 bits (`100`) and pad three `0`s on the left (MSB): `00001011` (`8 + 2 + 1 = 11`).",
            "Mathematically `92 ÷ 2³ = 92 ÷ 8 = 11.5`, but because a **`1`-bit (`4`) was shifted out of the LSB end**, the `.5` remainder was truncated to `11`, causing **loss of precision**.",
          ],
          answer: "`00001011` (`11`); inaccurate because a `1`-bit was shifted off the right (LSB), truncating `.5`.",
        },
      ],
      keyPoints: [
        "Logical shift by `n` places scales by **{{2^n}}**, NEVER by `2 × n`! Shifting by `3` places multiplies or divides by **{{2^3}} = 8** (not `6`!).",
        "Always check your final answer still has **exactly 8 bits** after discarding `n` bits on one side and padding `n` zeros on the other.",
        "Left shift loses `1` from MSB → **overflow** (most significant bit lost). Right shift loses `1` from LSB → **loss of precision / truncation** (least significant bit lost).",
      ],
      whyItWorks:
        "Moving bit `k` from position `k` (weight {{2^k}}) to position `k + n` changes its weight to {{2^(k+n) = 2^k * 2^n}}, factoring {{2^n}} out of the entire sum — provided no non-zero bit falls outside `0..7`.",
      strategies: [
        "Cross-and-Pad: Lightly cross out the `n` bits falling off one edge first, copy the remaining `8 − n` bits across, then write `n` fresh `0`s at the opposite edge so you never end up with a 7-bit or 9-bit answer!",
      ],
      thinkDeeper:
        "Why would performing a *logical* right shift (padding `0` at the MSB) break a **negative** Two's Complement integer like `11110000` (`−16`)? What bit would an *arithmetic* right shift copy into the MSB instead?",
    },
    {
      id: "twos-complement",
      heading: "8-Bit Two's Complement Signed Integers",
      discovery: {
        problem:
          "Suppose engineers tried storing negative numbers by simply using the leftmost bit as a minus sign (`00000101 = +5`, `10000101 = −5`). Try adding those two bytes with normal binary addition: `00000101 + 10000101 = 10001010` (`−10`, NOT `0`!), and `00000000` and `10000000` both mean zero (`+0` and `−0`). How can we assign weights so `+5 + (−5)` naturally overflows to `00000000` on standard addition hardware?",
        idea:
          "Make the leftmost bit's place value **`−128`** instead of `+128`, while keeping the other seven bits positive (`+64, +32, +16, +8, +4, +2, +1`)! Then `−5` is `−128 + 123 = 11111011`. Add `+5` (`00000101`): `11111011 + 00000101 = (1)00000000` → exact `0` in 8 bits using the exact same adder circuit!",
      },
      body: [
        "### 8-Bit Two's Complement Place Values & Range",
        "On CIE `0478`, signed integers are represented using **8-bit Two's Complement**. Only **one** column weight changes compared with unsigned binary — the **most significant bit (MSB)** has weight **`−128`**:",
        "",
        "| Bit Position | MSB (7) | 6 | 5 | 4 | 3 | 2 | 1 | LSB (0) |",
        "|---|---|---|---|---|---|---|---|---|",
        "| **Two's Complement Weight** | **`−128`** | `+64` | `+32` | `+16` | `+8` | `+4` | `+2` | `+1` |",
        "",
        "- **MSB = `0`** → non-negative integer (`0` to `+127`). Positive numbers look **identical** to unsigned binary (`+45 = 00101101`).",
        "- **MSB = `1`** → strictly **negative** integer (`−128` to `−1`).",
        "- **Exact 8-bit Two's Complement range**: **`−128`** (`10000000`) to **`+127`** (`01111111`) — still {{2^8 = 256}} total values (`128` negative + `1` zero + `127` positive). Note **`+128` CANNOT be stored** in 8-bit Two's Complement!",
        "",
        "### Three Bulletproof Ways to Convert Negative Denary ↔ Two's Complement",
        "1. **Place-Value Addition from `−128` (Fastest Mental Check!)**:",
        "   To encode `−75`, set the `−128` bit to `1`, then ask: *what positive offset must I add to `−128` to reach `−75`?* Compute `128 − 75 = 53` (`32 + 16 + 4 + 1`) → write `53` in the remaining 7 bits: `10110101`.",
        "2. **Flip All Bits + Add `1` (Classic Exam Working Method)**:",
        "   - Step 1: Write the **positive** magnitude `+75` in 8-bit binary: `01001011`.",
        "   - Step 2: **Invert (flip)** every bit (`0 ↔ 1` — One's Complement): `10110100`.",
        "   - Step 3: **Add `1`** using binary addition: `10110100 + 1 = 10110101`.",
        "3. **Rightmost-`1` Shortcut**:",
        "   Starting from the **right (LSB)** of `+75` (`01001011`), **copy bits unchanged up to and including the first `1`**, then **flip every bit to the left of it**: `[0100101]1` → flip bracketed bits → `[1011010]1` = `10110101`!",
      ].join("\n"),
      diagram: svgTwosComplement,
      diagramCaption:
        "In 8-bit Two's Complement the MSB weighs −128 while bits 6..0 remain positive, so 10110101 evaluates directly to −128 + 32 + 16 + 4 + 1 = −75.",
      workedExamples: [
        {
          title: "Negative Denary → 8-Bit Two's Complement",
          problem: "Convert the denary integer `−93` into 8-bit Two's Complement binary, showing your working.",
          steps: [
            "Write `+93` in 8-bit binary (`64 + 16 + 8 + 4 + 1`): `01011101`.",
            "Invert every bit (`0 ↔ 1`): `10100010`.",
            "Add `1`: `10100010 + 1 = 10100011`.",
            "Place-value sanity check: `−128 + 32 + 2 + 1 = −128 + 35 = −93`. Exact!",
          ],
          answer: "`10100011`",
          yourTurn: {
            question: "Convert the denary integer `−42` into an 8-bit Two's Complement binary string.",
            answer: { type: "text", accept: ["11010110", "1101 0110"], display: "11010110" },
            solution: "`+42 = 00101010` (`32+8+2`). Invert bits → `11010101`, add `1` → `11010110` (check: `−128 + 64 + 16 + 4 + 2 = −128 + 86 = −42`).",
          },
        },
        {
          title: "8-Bit Two's Complement → Denary",
          problem: "Convert the 8-bit Two's Complement binary integer `11100101` into denary.",
          steps: [
            "Look at the MSB first: it is `1`, so the number is **negative** and contributes **`−128`**.",
            "Sum the active positive weights in bits `6..0`: `64 + 32 + 4 + 1 = 101`.",
            "Combine: `−128 + 101 = −27` (or flip `11100101` → `00011010` + `1` = `00011011` = `27`, so `−27`).",
          ],
          answer: "`−27`",
          yourTurn: {
            question: "Convert the 8-bit Two's Complement binary integer `10011010` into denary.",
            answer: { type: "number", value: -102 },
            solution: "MSB is `1` (`−128`). Active positive weights are `16 + 8 + 2 = 26`. Total: `−128 + 26 = −102`.",
          },
        },
      ],
      keyPoints: [
        "8-bit Two's Complement place values are **`−128, 64, 32, 16, 8, 4, 2, 1`**.",
        "Range is **`−128` (`10000000`) to `+127` (`01111111`)**. Memorise `11111111 = −1` (NOT `−127` and NOT `255`!).",
        "Positive numbers (`0` to `+127`) MUST start with `0` — NEVER flip bits on a positive number!",
        "Use TWO methods on every exam question (Flip+Add-1 AND `−128 + positives`) so a mistake is mathematically impossible.",
      ],
      whyItWorks:
        "For any 8-bit pattern `x`, flipping every bit computes `255 − x` (since `x + x̄ = 11111111₂ = 255`). Adding `1` gives `(255 − x) + 1 = 256 − x`. On an 8-bit register that works modulo `256`, `256 − x` behaves identically to `−x` because `x + (256 − x) = 256 ≡ 0`!",
      strategies: [
        "Dual-Method Cross-Check: Construct with Flip-and-Add-1, then verify by summing `−128 + positive weights`.",
        "Landmark Anchor Check: `10000000 = −128` (most negative) and `11111111 = −1` (closest negative to zero) — small negative numbers like `−3` have LOTS of leading `1`s (`11111101`)!",
      ],
      thinkDeeper:
        "What happens in 8-bit Two's Complement if you add two positive numbers `+90` (`01011010`) and `+60` (`00111100`)? Why does the CPU think the sum is negative (`10010110 = −106`), and how can signed overflow occur even when there is **no** 9th carry-out bit?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Why is data represented in binary inside a computer?", back: "Computers are built from billions of transistor logic switches that have only two physical states: ON / high voltage (`1`) and OFF / low voltage (`0`)." },
      { front: "How many bits are in 1 nibble and 1 byte?", back: "1 nibble = **4 bits** (1 hex digit); 1 byte = **8 bits** (2 hex digits)." },
      { front: "What denary values do hex digits `A, B, C, D, E, F` represent?", back: "`A = 10`, `B = 11`, `C = 12`, `D = 13`, `E = 14`, `F = 15`." },
      { front: "State four real-world uses of hexadecimal in computing.", back: "1. HTML colour codes (`#FF8800`) · 2. MAC addresses (`00:1A:2B:3C:4D:5E`) · 3. IPv6 addresses · 4. Error codes & memory dumps / assembly." },
      { front: "Why do computer scientists prefer hexadecimal over binary?", back: "Each hex digit replaces 4 bits, making numbers **shorter**, **easier for humans to read/write**, and **far less prone to transcription errors** (note: it does NOT save computer memory!)." },
      { front: "What is the unsigned denary range of an 8-bit and a 16-bit binary integer?", back: "8-bit unsigned: **`0` to `255`** (`256` values). 16-bit unsigned: **`0` to `65535`** (`65536` values)." },
      { front: "State the binary addition result of `1 + 1` and `1 + 1 + 1`.", back: "`1 + 1 = 10₂` (`0` carry `1`); `1 + 1 + 1 = 11₂` (`1` carry `1`)." },
      { front: "Define an overflow error in an 8-bit unsigned addition (2 marks).", back: "1. The calculation produces a result **larger than `255`** (generating a **9th bit** / carry past the MSB). 2. The result **exceeds the maximum value that can be stored in an 8-bit register**." },
      { front: "What is the mathematical effect of a logical left shift by `n` places?", back: "**Multiplies** the unsigned binary integer by **{{2^n}}** (padding vacated LSBs on the right with `0`s)." },
      { front: "What is the mathematical effect of a logical right shift by `n` places, and when is accuracy lost?", back: "**Divides** by **{{2^n}}** (padding MSBs with `0`s). If any `1`-bit is shifted out of the rightmost LSB, fractional parts are **truncated** (loss of precision)." },
      { front: "State the 8 place values of an 8-bit Two's Complement integer.", back: "**`−128, +64, +32, +16, +8, +4, +2, +1`**." },
      { front: "What is the denary range of 8-bit Two's Complement, and what are `10000000` and `11111111`?", back: "Range: **`−128` to `+127`**. `10000000 = −128` and `11111111 = −1`." },
      { front: "How do you convert a negative denary integer (e.g. `−37`) into 8-bit Two's Complement?", back: "Write `+37` in 8-bit binary (`00100101`), **invert all bits** (`11011010`), then **add `1`** (`11011011`). Check: `−128 + 64 + 16 + 8 + 2 + 1 = −37`." },
      { front: "Does hexadecimal take up less space in RAM than binary?", back: "**No!** All data in RAM is stored purely in **binary**. Hexadecimal is only a compact visual display for human programmers." },
    ],
    mustKnow: [
      "Explain why computers use binary in terms of transistor switches (`ON = 1`, `OFF = 0`).",
      "Convert fluently without a calculator between denary, unsigned binary (up to 16 bits) and hexadecimal (up to 4 digits).",
      "Give at least three specific uses of hexadecimal (HTML colour codes, MAC addresses, IPv6 addresses, memory dumps, error codes) and explain why programmers prefer hex over raw binary.",
      "Add two positive 8-bit binary integers showing all carry bits clearly.",
      "Identify and explain 8-bit overflow errors (result `> 255` produces a 9th carry bit that cannot fit in the 8-bit register).",
      "Perform logical left and right binary shifts of `1..4` places and state their `× 2ⁿ` / `÷ 2ⁿ` effect.",
      "Explain when logical shifts fail: left shift dropping a `1` from the MSB causes overflow; right shift dropping a `1` from the LSB causes truncation / loss of precision.",
      "Convert positive and negative integers (`−128` to `+127`) to and from 8-bit Two's Complement using place values (`−128, 64, …, 1`) and Flip-then-Add-1.",
      "Recognise edge-case Two's Complement bytes instantly: `10000000 = −128`, `11111111 = −1`, `00000000 = 0`, `01111111 = +127`.",
    ],
    misconceptions: [
      {
        wrong: "❌ Never write: 'Hexadecimal is used because it takes up less memory / storage space inside the computer.'",
        right: "✅ Write instead: 'Computers ONLY store binary in hardware; hexadecimal is shorter for HUMANS to read, write and debug with fewer errors.'",
      },
      {
        wrong: "❌ Never write: 'In 8-bit Two's Complement, `10000101` equals `−5` (treating the MSB as just a minus sign).'",
        right: "✅ Write instead: 'In Two's Complement the MSB has place value `−128` (not a sign-magnitude flag): `10000101 = −128 + 4 + 1 = −123`, while `−5 = 11111011`.'",
      },
      {
        wrong: "❌ Never write: 'Shifting binary left by 3 places multiplies the number by `6` (`2 × 3`).'",
        right: "✅ Write instead: 'Each single left shift multiplies by `2`, so shifting left by `3` places multiplies by `2³ = 8` (`2 × 2 × 2`).'",
      },
      {
        wrong: "❌ Never write: 'Hexadecimal `3F` in binary is `111111` (dropping leading zeros of the first nibble).'",
        right: "✅ Write instead: 'Every hex digit expands to a full 4-bit nibble: `3 = 0011` and `F = 1111`, giving the 8-bit byte `00111111`.'",
      },
      {
        wrong: "❌ Never write: 'An 8-bit Two's Complement register can store `+128` (`10000000`).'",
        right: "✅ Write instead: 'In 8-bit Two's Complement `10000000` represents `−128`; the maximum positive integer is `+127` (`01111111`).'",
      },
      {
        wrong: "❌ Never write: 'Overflow just means the number is too big.' (Too vague — scores 0 or 1/2 marks!)",
        right: "✅ Write instead: 'Overflow occurs because the result exceeds `255` (the maximum value for 8 bits), generating a 9th bit that cannot fit in the 8-bit register.'",
      },
      {
        wrong: "❌ Never write: 'To convert `+42` into Two's Complement, flip the bits and add `1`.'",
        right: "✅ Write instead: 'Positive integers (`0` to `+127`) are NOT flipped in Two's Complement — `+42` is simply `00101010` with MSB `0`. Only flip+add-1 for negative values!'",
      },
    ],
    examMistakes: [
      "Forgetting `A = 10` (writing `A = 11` shifts every hex letter `B..F` off by 1!). Always jot `A=10 B=11 C=12 D=13 E=14 F=15` in the margin.",
      "Omitting carry bits in 8-bit addition questions — CIE mark schemes explicitly award 1 mark for visible carries!",
      "Leaving a 9-bit string inside an 8-bit register box instead of separating the 8-bit register contents from the overflow carry-out bit.",
      "Padding with `1`s instead of `0`s during a CIE logical right shift — **logical** shifts ALWAYS pad `0`s.",
      "Forgetting to add `1` after inverting bits when forming Two's Complement (stopping at One's Complement makes your answer off by 1!).",
      "Adding `255` instead of `256` for total combinations: `0` to `255` inclusive is `256` (`2⁸`) values, while the **largest** unsigned value is `255` (`2⁸ − 1`).",
      "Writing `0x` or `#` prefixes when an exam box asks only for the hexadecimal digits.",
    ],
    mnemonics: [
      {
        topic: "Hex Letters A–F (10–15)",
        device: "All Boys Can Do Exam Finals → A=10, B=11, C=12, D=13, E=14, F=15",
        explanation: "Write `A10 B11 C12 D13 E14 F15` at the top of your Paper 1 page before touching any hex question.",
      },
      {
        topic: "Logical Shift Direction",
        device: "Left = Larger (× 2ⁿ) · Right = Reduced (÷ 2ⁿ)",
        explanation: "Both start with matching letters: **L**eft makes numbers **L**arger; **R**ight **R**educes them.",
      },
      {
        topic: "Two's Complement Negative Conversion",
        device: "Write Positive → Flip Every Bit → Plus One (`P → F → +1`)",
        explanation: "Never skip the final `+1`, and double-check that `−128 + positive bits` equals your target negative integer!",
      },
    ],
    realWorld: [
      {
        emoji: "🎨",
        title: "Web Design `#RRGGBB` Hex Colours",
        detail: "Every pixel colour on CSS websites like `#22D3EE` packs three 8-bit bytes (`22₁₆ = 34` Red, `D3₁₆ = 211` Green, `EE₁₆ = 238` Blue) into 6 readable hex characters.",
      },
      {
        emoji: "📡",
        title: "Wi-Fi & Ethernet MAC Addresses",
        detail: "Every phone and laptop NIC carries a factory-assigned 48-bit MAC address displayed as six hex pairs (`A4:83:E7:2F:91:0C`) — 12 hex characters instead of 48 unreadable bits.",
      },
      {
        emoji: "🚀",
        title: "Ariane 5 Rocket Overflow (1996)",
        detail: "Converting horizontal velocity into a 16-bit signed Two's Complement integer (`max +32767`) triggered an unhandled hardware overflow exception 37 seconds into flight, destroying a $370 million mission.",
      },
      {
        emoji: "🕹️",
        title: "Pac-Man Level 256 Kill Screen",
        detail: "Classic arcade Pac-Man tracked the level number in a single unsigned 8-bit byte (`max 255`). Reaching level `256` overflowed the counter to `00000000`, corrupting half the screen with random fruit sprites!",
      },
      {
        emoji: "⚡",
        title: "Bit-Shift Game Graphics Speedups",
        detail: "Low-level C and assembly engines compute `x << 3` instead of `x * 8` to index pixel rows in a single CPU clock cycle using logical shift hardware.",
      },
    ],
    videos: [
      {
        title: "CIE IGCSE CS 0478 — Binary, Denary & Hexadecimal Conversions",
        channel: "Craig'n'Dave",
        url: "https://www.youtube.com/results?search_query=craig+n+dave+igcse+0478+binary+denary+hexadecimal",
      },
      {
        title: "IGCSE Computer Science 0478 — Binary Addition, Overflow & Logical Shifts",
        channel: "Cambridge CS Tutorials",
        url: "https://www.youtube.com/results?search_query=igcse+computer+science+0478+binary+addition+overflow+logical+shift",
      },
      {
        title: "Two's Complement Negative Binary Explained Simply (CIE 0478)",
        channel: "Computerphile / IGCSE CS",
        url: "https://www.youtube.com/results?search_query=igcse+0478+twos+complement+8+bit+binary",
      },
      {
        title: "Why Computers Use Hexadecimal (MAC, HTML Colours, Memory Dumps)",
        channel: "Mr Bulmer's Learning Zone",
        url: "https://www.youtube.com/results?search_query=igcse+0478+uses+of+hexadecimal+mac+html+memory+dump",
      },
    ],
    formulas: [
      { name: "8-Bit Unsigned Range & Count", formula: "Range: 0 to {{2^8 - 1}} = 255 · Distinct values: {{2^8}} = 256", note: "16-bit unsigned: 0 to 65535 (65536 values)" },
      { name: "Nibble ↔ Hexadecimal Rule", formula: "1 hex digit = 4 binary bits (1 nibble) · 2 hex digits = 1 byte (8 bits)", note: "Weights per nibble: 8, 4, 2, 1; A=10 .. F=15" },
      { name: "2-Digit Hex (`XY₁₆`) to Denary", formula: "Denary = {{16 * X + Y}}", note: "Or expand X and Y to 4-bit nibbles and sum byte weights 128..1" },
      { name: "Binary Column Addition Rules", formula: "0+0=0 · 1+0=1 · 1+1=10₂ (0 carry 1) · 1+1+1=11₂ (1 carry 1)", note: "Work right (LSB) to left (MSB); always show carries" },
      { name: "8-Bit Unsigned Overflow Rule", formula: "Sum > 255 produces a 9th carry-out bit", note: "Exceeds max value storable in an 8-bit register" },
      { name: "Logical Left Shift by `n`", formula: "Value × {{2^n}} (pad right LSBs with 0s)", note: "Overflow occurs if a 1-bit falls off the left MSB end" },
      { name: "Logical Right Shift by `n`", formula: "Value ÷ {{2^n}} truncated (pad left MSBs with 0s)", note: "Loss of precision occurs if a 1-bit falls off the right LSB end" },
      { name: "8-Bit Two's Complement Weights", formula: "−128, +64, +32, +16, +8, +4, +2, +1", note: "Range: −128 (10000000) to +127 (01111111); 11111111 = −1" },
      { name: "Two's Complement Negation", formula: "−N = Invert(8-bit +N) + 1", note: "Cross-check: −128 + sum of active positive bits = −N" },
      { name: "Exam Trap: Hex Memory Myth", formula: "❌ 'Hex saves RAM' → ✅ 'Computers store binary; hex helps humans read/debug'", note: "Classic CIE 0478 Paper 1 mark-scheme distinction" },
    ],
  },
};
