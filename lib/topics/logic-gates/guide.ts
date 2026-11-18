import type { TopicGuide } from "../../types.ts";

const SVG_BASIC_GATES =
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Standard CIE 0478 symbols and key rules for NOT, AND, and OR logic gates">' +
  '<rect x="0" y="0" width="560" height="260" rx="12" fill="#f8fafc"/>' +
  '<text x="280" y="24" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="800" fill="#0f172a">CIE 0478 Core Logic Gates: NOT, AND &amp; OR</text>' +
  // Card 1: NOT gate
  '<rect x="14" y="38" width="170" height="208" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>' +
  '<text x="99" y="58" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="800" fill="#0e7490">NOT (Inverter)</text>' +
  '<line x1="34" y1="108" x2="72" y2="108" stroke="#334155" stroke-width="2.5"/>' +
  '<text x="26" y="112" text-anchor="end" font-family="monospace" font-size="12" font-weight="700" fill="#0f172a">A</text>' +
  '<polygon points="72,84 72,132 118,108" fill="#e0f2fe" stroke="#0e7490" stroke-width="2.5" stroke-linejoin="round"/>' +
  '<circle cx="124" cy="108" r="5.5" fill="#ffffff" stroke="#0e7490" stroke-width="2.5"/>' +
  '<line x1="130" y1="108" x2="162" y2="108" stroke="#334155" stroke-width="2.5"/>' +
  '<text x="168" y="112" font-family="monospace" font-size="12" font-weight="700" fill="#0f172a">X</text>' +
  '<text x="99" y="160" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#0f172a">X = NOT A</text>' +
  '<text x="99" y="182" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">1 input only!</text>' +
  '<text x="99" y="200" text-anchor="middle" font-family="monospace" font-size="11" fill="#15803d">0 → 1   |   1 → 0</text>' +
  '<text x="99" y="224" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748b">Triangle + output bubble</text>' +
  // Card 2: AND gate
  '<rect x="195" y="38" width="170" height="208" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>' +
  '<text x="280" y="58" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="800" fill="#15803d">AND Gate</text>' +
  '<line x1="216" y1="96" x2="252" y2="96" stroke="#334155" stroke-width="2.5"/>' +
  '<line x1="216" y1="120" x2="252" y2="120" stroke="#334155" stroke-width="2.5"/>' +
  '<text x="208" y="100" text-anchor="end" font-family="monospace" font-size="12" font-weight="700" fill="#0f172a">A</text>' +
  '<text x="208" y="124" text-anchor="end" font-family="monospace" font-size="12" font-weight="700" fill="#0f172a">B</text>' +
  '<path d="M252,82 L278,82 A26,26 0 0,1 278,134 L252,134 Z" fill="#dcfce7" stroke="#15803d" stroke-width="2.5" stroke-linejoin="round"/>' +
  '<line x1="304" y1="108" x2="342" y2="108" stroke="#334155" stroke-width="2.5"/>' +
  '<text x="348" y="112" font-family="monospace" font-size="12" font-weight="700" fill="#0f172a">X</text>' +
  '<text x="280" y="160" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#0f172a">X = A AND B</text>' +
  '<text x="280" y="182" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">1 ONLY when both are 1</text>' +
  '<text x="280" y="200" text-anchor="middle" font-family="monospace" font-size="11" fill="#15803d">Col: 0, 0, 0, 1</text>' +
  '<text x="280" y="224" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748b">Flat back D-shape (anD)</text>' +
  // Card 3: OR gate
  '<rect x="376" y="38" width="170" height="208" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>' +
  '<text x="461" y="58" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="800" fill="#c2410c">OR Gate</text>' +
  '<line x1="396" y1="96" x2="436" y2="96" stroke="#334155" stroke-width="2.5"/>' +
  '<line x1="396" y1="120" x2="436" y2="120" stroke="#334155" stroke-width="2.5"/>' +
  '<text x="388" y="100" text-anchor="end" font-family="monospace" font-size="12" font-weight="700" fill="#0f172a">A</text>' +
  '<text x="388" y="124" text-anchor="end" font-family="monospace" font-size="12" font-weight="700" fill="#0f172a">B</text>' +
  '<path d="M428,82 Q443,108 428,134 Q464,134 486,108 Q464,82 428,82 Z" fill="#ffedd5" stroke="#c2410c" stroke-width="2.5" stroke-linejoin="round"/>' +
  '<line x1="486" y1="108" x2="522" y2="108" stroke="#334155" stroke-width="2.5"/>' +
  '<text x="528" y="112" font-family="monospace" font-size="12" font-weight="700" fill="#0f172a">X</text>' +
  '<text x="461" y="160" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#0f172a">X = A OR B</text>' +
  '<text x="461" y="182" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">1 when at least one is 1</text>' +
  '<text x="461" y="200" text-anchor="middle" font-family="monospace" font-size="11" fill="#c2410c">Col: 0, 1, 1, 1</text>' +
  '<text x="461" y="224" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748b">Curved back + pointed shield</text>' +
  '</svg>';

const SVG_UNIVERSAL_XOR_GATES =
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Standard CIE 0478 symbols for NAND, NOR, and XOR logic gates">' +
  '<rect x="0" y="0" width="560" height="260" rx="12" fill="#f8fafc"/>' +
  '<text x="280" y="24" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="800" fill="#0f172a">CIE 0478 Derived &amp; Exclusive Gates: NAND, NOR &amp; XOR</text>' +
  // Card 1: NAND gate
  '<rect x="14" y="38" width="170" height="208" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>' +
  '<text x="99" y="58" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="800" fill="#7c3aed">NAND Gate</text>' +
  '<line x1="32" y1="96" x2="66" y2="96" stroke="#334155" stroke-width="2.5"/>' +
  '<line x1="32" y1="120" x2="66" y2="120" stroke="#334155" stroke-width="2.5"/>' +
  '<text x="25" y="100" text-anchor="end" font-family="monospace" font-size="12" font-weight="700" fill="#0f172a">A</text>' +
  '<text x="25" y="124" text-anchor="end" font-family="monospace" font-size="12" font-weight="700" fill="#0f172a">B</text>' +
  '<path d="M66,82 L92,82 A26,26 0 0,1 92,134 L66,134 Z" fill="#f3e8ff" stroke="#7c3aed" stroke-width="2.5" stroke-linejoin="round"/>' +
  '<circle cx="124" cy="108" r="5.5" fill="#ffffff" stroke="#7c3aed" stroke-width="2.5"/>' +
  '<line x1="130" y1="108" x2="160" y2="108" stroke="#334155" stroke-width="2.5"/>' +
  '<text x="165" y="112" font-family="monospace" font-size="12" font-weight="700" fill="#0f172a">X</text>' +
  '<text x="99" y="160" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#0f172a">NOT (A AND B)</text>' +
  '<text x="99" y="182" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">0 ONLY when both are 1</text>' +
  '<text x="99" y="200" text-anchor="middle" font-family="monospace" font-size="11" fill="#7c3aed">Col: 1, 1, 1, 0</text>' +
  '<text x="99" y="224" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748b">D-shape + output bubble</text>' +
  // Card 2: NOR gate
  '<rect x="195" y="38" width="170" height="208" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>' +
  '<text x="280" y="58" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="800" fill="#db2777">NOR Gate</text>' +
  '<line x1="212" y1="96" x2="250" y2="96" stroke="#334155" stroke-width="2.5"/>' +
  '<line x1="212" y1="120" x2="250" y2="120" stroke="#334155" stroke-width="2.5"/>' +
  '<text x="205" y="100" text-anchor="end" font-family="monospace" font-size="12" font-weight="700" fill="#0f172a">A</text>' +
  '<text x="205" y="124" text-anchor="end" font-family="monospace" font-size="12" font-weight="700" fill="#0f172a">B</text>' +
  '<path d="M242,82 Q257,108 242,134 Q278,134 300,108 Q278,82 242,82 Z" fill="#fce7f3" stroke="#db2777" stroke-width="2.5" stroke-linejoin="round"/>' +
  '<circle cx="306" cy="108" r="5.5" fill="#ffffff" stroke="#db2777" stroke-width="2.5"/>' +
  '<line x1="312" y1="108" x2="342" y2="108" stroke="#334155" stroke-width="2.5"/>' +
  '<text x="347" y="112" font-family="monospace" font-size="12" font-weight="700" fill="#0f172a">X</text>' +
  '<text x="280" y="160" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#0f172a">NOT (A OR B)</text>' +
  '<text x="280" y="182" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">1 ONLY when both are 0</text>' +
  '<text x="280" y="200" text-anchor="middle" font-family="monospace" font-size="11" fill="#db2777">Col: 1, 0, 0, 0</text>' +
  '<text x="280" y="224" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748b">Curved shield + bubble</text>' +
  // Card 3: XOR gate
  '<rect x="376" y="38" width="170" height="208" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>' +
  '<text x="461" y="58" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="800" fill="#0369a1">XOR Gate</text>' +
  '<line x1="394" y1="96" x2="429" y2="96" stroke="#334155" stroke-width="2.5"/>' +
  '<line x1="394" y1="120" x2="429" y2="120" stroke="#334155" stroke-width="2.5"/>' +
  '<text x="387" y="100" text-anchor="end" font-family="monospace" font-size="12" font-weight="700" fill="#0f172a">A</text>' +
  '<text x="387" y="124" text-anchor="end" font-family="monospace" font-size="12" font-weight="700" fill="#0f172a">B</text>' +
  '<path d="M423,82 Q438,108 423,134" fill="none" stroke="#0369a1" stroke-width="2.5" stroke-linecap="round"/>' +
  '<path d="M431,82 Q446,108 431,134 Q467,134 489,108 Q467,82 431,82 Z" fill="#e0f2fe" stroke="#0369a1" stroke-width="2.5" stroke-linejoin="round"/>' +
  '<line x1="489" y1="108" x2="522" y2="108" stroke="#334155" stroke-width="2.5"/>' +
  '<text x="527" y="112" font-family="monospace" font-size="12" font-weight="700" fill="#0f172a">X</text>' +
  '<text x="461" y="160" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#0f172a">X = A XOR B</text>' +
  '<text x="461" y="182" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">1 when inputs DIFFER</text>' +
  '<text x="461" y="200" text-anchor="middle" font-family="monospace" font-size="11" fill="#0369a1">Col: 0, 1, 1, 0</text>' +
  '<text x="461" y="224" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#64748b">Double curved input line</text>' +
  '</svg>';

const SVG_MULTI_STAGE_CIRCUIT =
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-input multi-stage CIE logic circuit X = (A AND B) OR (NOT C) with labelled intermediate wires P and Q">' +
  '<rect x="0" y="0" width="560" height="260" rx="12" fill="#f8fafc"/>' +
  '<text x="280" y="24" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="800" fill="#0f172a">Tracing a 3-Input Circuit with Intermediate Wires P and Q</text>' +
  // Inputs A, B, C
  '<text x="36" y="79" text-anchor="end" font-family="monospace" font-size="14" font-weight="800" fill="#0f172a">A</text>' +
  '<text x="36" y="115" text-anchor="end" font-family="monospace" font-size="14" font-weight="800" fill="#0f172a">B</text>' +
  '<text x="36" y="191" text-anchor="end" font-family="monospace" font-size="14" font-weight="800" fill="#0f172a">C</text>' +
  '<line x1="46" y1="74" x2="140" y2="74" stroke="#15803d" stroke-width="3"/>' +
  '<line x1="46" y1="110" x2="140" y2="110" stroke="#15803d" stroke-width="3"/>' +
  '<line x1="46" y1="186" x2="144" y2="186" stroke="#0e7490" stroke-width="3"/>' +
  // Stage 1 top: AND gate -> P
  '<path d="M140,64 L172,64 A28,28 0 0,1 172,120 L140,120 Z" fill="#dcfce7" stroke="#15803d" stroke-width="2.5" stroke-linejoin="round"/>' +
  '<text x="166" y="96" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="800" fill="#15803d">AND</text>' +
  // Wire P
  '<path d="M200,92 L285,92 L285,124 L344,124" fill="none" stroke="#15803d" stroke-width="3"/>' +
  '<rect x="220" y="68" width="54" height="20" rx="5" fill="#dcfce7" stroke="#15803d" stroke-width="1"/>' +
  '<text x="247" y="82" text-anchor="middle" font-family="monospace" font-size="11" font-weight="800" fill="#15803d">Wire P</text>' +
  // Stage 1 bottom: NOT gate -> Q
  '<polygon points="144,162 144,210 192,186" fill="#e0f2fe" stroke="#0e7490" stroke-width="2.5" stroke-linejoin="round"/>' +
  '<circle cx="198" cy="186" r="5.5" fill="#ffffff" stroke="#0e7490" stroke-width="2.5"/>' +
  '<text x="162" y="190" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="800" fill="#0e7490">NOT</text>' +
  // Wire Q
  '<path d="M204,186 L285,186 L285,152 L344,152" fill="none" stroke="#0e7490" stroke-width="3"/>' +
  '<rect x="220" y="192" width="54" height="20" rx="5" fill="#e0f2fe" stroke="#0e7490" stroke-width="1"/>' +
  '<text x="247" y="206" text-anchor="middle" font-family="monospace" font-size="11" font-weight="800" fill="#0e7490">Wire Q</text>' +
  // Stage 2: OR gate -> X
  '<path d="M336,110 Q352,138 336,166 Q378,166 404,138 Q378,110 336,110 Z" fill="#ffedd5" stroke="#c2410c" stroke-width="2.5" stroke-linejoin="round"/>' +
  '<text x="366" y="142" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="800" fill="#c2410c">OR</text>' +
  '<line x1="404" y1="138" x2="478" y2="138" stroke="#c2410c" stroke-width="3"/>' +
  '<circle cx="494" cy="138" r="15" fill="#fef3c7" stroke="#c2410c" stroke-width="2.5"/>' +
  '<text x="494" y="143" text-anchor="middle" font-family="monospace" font-size="14" font-weight="800" fill="#c2410c">X</text>' +
  // Bottom summary bar
  '<rect x="46" y="226" width="468" height="24" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>' +
  '<text x="280" y="242" text-anchor="middle" font-family="monospace" font-size="11.5" font-weight="700" fill="#0f172a">P = A AND B   |   Q = NOT C   |   X = P OR Q = (A AND B) OR (NOT C)</text>' +
  '</svg>';

const SVG_CONTROL_PROBLEM =
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Real-world safety press controller mapping sensor conditions G, T, M to logic circuit X = (G AND NOT T) OR M">' +
  '<rect x="0" y="0" width="560" height="260" rx="12" fill="#f8fafc"/>' +
  '<text x="280" y="24" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="800" fill="#0f172a">From Control Specification to CIE Logic Circuit: X = (G AND NOT T) OR M</text>' +
  // Left sensor badges
  '<rect x="14" y="44" width="152" height="36" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>' +
  '<text x="90" y="59" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="800" fill="#15803d">G = 1: Guard Closed</text>' +
  '<text x="90" y="73" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#166534">G = 0: Guard Open</text>' +
  '<rect x="14" y="108" width="152" height="36" rx="8" fill="#e0f2fe" stroke="#0e7490" stroke-width="1.5"/>' +
  '<text x="90" y="123" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="800" fill="#0e7490">T = 1: Temp &gt; 80 °C</text>' +
  '<text x="90" y="137" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#0369a1">Safe needs NOT T (T = 0)</text>' +
  '<rect x="14" y="176" width="152" height="36" rx="8" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/>' +
  '<text x="90" y="191" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="800" fill="#c2410c">M = 1: Manual Override</text>' +
  '<text x="90" y="205" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#9a3412">M = 0: Override OFF</text>' +
  // NOT gate on T
  '<line x1="166" y1="126" x2="196" y2="126" stroke="#0e7490" stroke-width="2.5"/>' +
  '<polygon points="196,108 196,144 234,126" fill="#e0f2fe" stroke="#0e7490" stroke-width="2.5" stroke-linejoin="round"/>' +
  '<circle cx="240" cy="126" r="5" fill="#ffffff" stroke="#0e7490" stroke-width="2.5"/>' +
  // Wires into AND gate
  '<path d="M166,62 L262,62 L262,82 L284,82" fill="none" stroke="#15803d" stroke-width="2.5"/>' +
  '<path d="M245,126 L262,126 L262,106 L284,106" fill="none" stroke="#0e7490" stroke-width="2.5"/>' +
  '<path d="M284,70 L312,70 A24,24 0 0,1 312,118 L284,118 Z" fill="#dcfce7" stroke="#15803d" stroke-width="2.5" stroke-linejoin="round"/>' +
  '<text x="307" y="98" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="800" fill="#15803d">AND</text>' +
  // Wires into final OR gate
  '<path d="M336,94 L374,94 L374,132 L404,132" fill="none" stroke="#15803d" stroke-width="2.5"/>' +
  '<path d="M166,194 L374,194 L374,156 L404,156" fill="none" stroke="#c2410c" stroke-width="2.5"/>' +
  '<path d="M396,118 Q411,144 396,170 Q434,170 458,144 Q434,118 396,118 Z" fill="#ffedd5" stroke="#c2410c" stroke-width="2.5" stroke-linejoin="round"/>' +
  '<text x="424" y="148" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="800" fill="#c2410c">OR</text>' +
  // Output X
  '<line x1="458" y1="144" x2="492" y2="144" stroke="#334155" stroke-width="2.5"/>' +
  '<rect x="492" y="124" width="54" height="40" rx="8" fill="#0f172a"/>' +
  '<text x="519" y="142" text-anchor="middle" font-family="monospace" font-size="12" font-weight="800" fill="#4ade80">X = 1</text>' +
  '<text x="519" y="156" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#f8fafc">Press ON</text>' +
  // Precedence footer
  '<rect x="14" y="226" width="532" height="24" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>' +
  '<text x="280" y="242" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#334155">CIE Rule: Always write brackets around each gate stage — X = (G AND (NOT T)) OR M</text>' +
  '</svg>';

export const guide: TopicGuide = {
  id: "logic-gates",
  title: "Boolean Logic & Logic Circuits",
  strand: "Paper 2: Algorithms, Programming & Logic",
  icon: "⚡",
  summary:
    "Master all six CIE 0478 logic gates (NOT, AND, OR, NAND, NOR, XOR), trace 3-input circuits with intermediate columns, and translate real-world sensor specifications into Boolean expressions and diagrams.",
  intro:
    "Inside every CPU, billions of microscopic transistor switches snap between just two voltage states: **OFF (`0` / `FALSE`)** and **ON (`1` / `TRUE`)**. **Logic gates** are the hardware building blocks that combine those binary signals to make decisions, add numbers in the ALU, and run automated safety controllers. On **CIE 0478 Paper 2 (Section 10)**, logic-gate questions are among the highest-scoring marks on the entire paper — provided you draw each gate shape accurately, trace multi-gate circuits column-by-column without mental shortcuts, and bracket every Boolean expression cleanly.",
  guide: [
    {
      id: "basic-gates",
      heading: "NOT, AND & OR Gates",
      discovery: {
        problem:
          "Imagine two physical switches `A` and `B` controlling a ceiling lamp `X` powered by a battery. In Arrangement 1, switches `A` and `B` are wired one after another in **series** along the same wire. In Arrangement 2, switches `A` and `B` are wired side-by-side in **parallel** branches. For each arrangement, which combinations of switch states (`0` = open/OFF, `1` = closed/ON) make the lamp light up (`X = 1`)?",
        idea:
          "In **series**, current can reach the lamp **only if both** switch `A` **AND** switch `B` are closed (`1, 1` → `1`; all other pairs give `0`). That is an **AND** gate! In **parallel**, current flows if switch `A` is closed **OR** switch `B` is closed — including when **both** are closed (`0, 1`, `1, 0`, and `1, 1` all give `1`). That is an inclusive **OR** gate!",
      },
      body:
        "A **logic gate** takes one or more binary inputs (`0` or `1`) and produces a single binary output (`0` or `1`) according to a fixed Boolean rule. A **truth table** lists every possible binary input combination in ascending binary count order (`0, 1` for 1 input; `00, 01, 10, 11` for 2 inputs; `000` to `111` for 3 inputs) alongside the resulting output.\n\n" +
        "**1. The `NOT` Gate (Inverter)**\n" +
        "- **Inputs:** **1 input only** (the only single-input gate on the CIE 0478 syllabus).\n" +
        "- **CIE Symbol:** A triangle pointing right with a small **inversion circle (bubble)** touching its output tip. Never omit the bubble — without it, a plain triangle is just a buffer, not a `NOT` gate!\n" +
        "- **Rule (`X = NOT A`):** Reverses (inverts) the input bit: `0` becomes `1`, and `1` becomes `0`.\n\n" +
        "| A | X = NOT A |\n" +
        "|---|---|\n" +
        "| 0 | 1 |\n" +
        "| 1 | 0 |\n\n" +
        "**2. The `AND` Gate**\n" +
        "- **Inputs:** 2 inputs (`A` and `B`) on CIE 0478.\n" +
        "- **CIE Symbol:** A **flat vertical input back** with straight top/bottom edges curving into a semicircular front — shaped just like the capital **D** at the end of **anD**.\n" +
        "- **Rule (`X = A AND B`):** Outputs `1` **if and only if both** `A = 1` **and** `B = 1`. If *any* input is `0`, the output is immediately `0`.\n\n" +
        "**3. The `OR` Gate (Inclusive OR)**\n" +
        "- **Inputs:** 2 inputs (`A` and `B`).\n" +
        "- **CIE Symbol:** A **concave curved input back** sweeping to a **pointed shield tip** on the right (no bubble).\n" +
        "- **Rule (`X = A OR B`):** Outputs `1` if **at least one** input is `1` (`A = 1`, or `B = 1`, **or both** `A = 1` and `B = 1`). It outputs `0` **only** when both inputs are `0`.\n\n" +
        "| A | B | A AND B | A OR B |\n" +
        "|---|---|---|---|\n" +
        "| 0 | 0 | 0 | 0 |\n" +
        "| 0 | 1 | 0 | 1 |\n" +
        "| 1 | 0 | 0 | 1 |\n" +
        "| 1 | 1 | 1 | 1 |\n\n" +
        "**CIE 0478 Notation Rule:** On Cambridge Computer Science (`0478`), always write the English keywords **`NOT`**, **`AND`**, **`OR`** in capital letters in logic expressions (never algebraic `+`, `·`, or overbars unless an extension note mentions them, because examiners mark `X = A AND B`, not `X = A.B`).",
      diagram: SVG_BASIC_GATES,
      diagramCaption:
        "Standard CIE 0478 symbols for NOT (triangle + bubble), AND (flat-backed D-shape), and OR (curved shield), with their 4-row output signatures.",
      workedExamples: [
        {
          title: "Building a 2-Input Truth Table with an Inverter",
          problem:
            "Construct the complete 4-row truth table for the logic expression `X = (NOT A) AND B`, where `(A, B)` runs from `00` to `11`.",
          steps: [
            "Write the 4 standard binary input rows for `(A, B)` in ascending binary order: `00`, `01`, `10`, `11` (`2² = 4` rows).",
            "Add a helper column `P = NOT A` by flipping every bit in column `A`: `1, 1, 0, 0`.",
            "Combine `P` and `B` using the `AND` rule (`1` only when **both** `P = 1` and `B = 1`):",
            "Row `00`: `P = 1, B = 0` → `1 AND 0 = 0`. Row `01`: `P = 1, B = 1` → `1 AND 1 = 1`. Row `10`: `P = 0, B = 0` → `0 AND 0 = 0`. Row `11`: `P = 0, B = 1` → `0 AND 1 = 0`.",
          ],
          answer: "Reading `X` from top (`00`) to bottom (`11`) gives `0, 1, 0, 0` (`X = 1` only when `A = 0` and `B = 1`).",
          yourTurn: {
            question:
              "Complete the 4-row truth table for `X = A OR (NOT B)` with `(A, B)` ordered `00, 01, 10, 11`. Give the 4-bit output column from top (`00`) to bottom (`11`) as a 4-character string of `0`s and `1`s, e.g. `0110`.",
            answer: { type: "text", accept: ["1011", "1 0 1 1", "1, 0, 1, 1", "1,0,1,1"], display: "1011" },
            solution:
              "First find `NOT B` for `B = 0, 1, 0, 1` → `1, 0, 1, 0`. Now OR with `A = 0, 0, 1, 1`: row `00` gives `0 OR 1 = 1`; row `01` gives `0 OR 0 = 0`; row `10` gives `1 OR 1 = 1`; row `11` gives `1 OR 0 = 1`. Output column: `1011`.",
          },
        },
        {
          title: "Identifying a Gate from Partial Signal Clues",
          problem:
            "A mystery 2-input basic gate (`AND` or `OR`) outputs `X = 1` when `A = 0` and `B = 1`. Identify the gate and state its output when `A = 1` and `B = 1`.",
          steps: [
            "Check `AND` for `(0, 1)`: `0 AND 1 = 0`, which contradicts `X = 1`.",
            "Check `OR` for `(0, 1)`: `0 OR 1 = 1`, which matches!",
            "Because standard `OR` is **inclusive**, when `A = 1` and `B = 1`, `1 OR 1 = 1`.",
          ],
          answer: "The gate is an `OR` gate, and its output when `A = 1, B = 1` is `1`.",
        },
      ],
      keyPoints: [
        "`NOT` is the **only** 1-input gate on CIE 0478; its symbol is a triangle **plus** a small circle (bubble) at the output.",
        "`AND` has a **flat vertical back** (like the **D** in an**D**) and outputs `1` **only** on row `11` (`0001`).",
        "`OR` has a **curved concave back** and pointed nose, and outputs `1` whenever **one or both** inputs are `1` (`0111`).",
        "A circuit with `n` binary inputs always has `2ⁿ` rows in its truth table (`2¹ = 2`, `2² = 4`, `2³ = 8`).",
      ],
      whyItWorks:
        "Boolean algebra mirrors binary arithmetic on truth values: `AND` behaves like multiplication (`0 × 0 = 0`, `0 × 1 = 0`, `1 × 0 = 0`, `1 × 1 = 1` — a single `0` forces the product to `0`), while `OR` behaves like saturating addition capped at `1` (`0 + 0 = 0`, and any sum ≥ 1 clamps to `1`). Physically, CMOS transistors implement these switches directly in silicon.",
      strategies: [
        "**Short-Circuit Scan:** Any `0` entering an `AND` gate forces its output to `0`; any `1` entering an `OR` gate forces its output to `1` — even before you calculate the other wire!",
        "**Helper Column Habit:** Whenever an input is inverted (like `NOT B`), jot down the `NOT B` column first instead of flipping bits in your head.",
      ],
      thinkDeeper:
        "Compare the truth-table column of `NOT (A AND B)` (`1110`) with `(NOT A) AND (NOT B)` (`1000`). Why aren't they equal? Which basic gate (`AND` or `OR`) actually matches `(NOT A) ... (NOT B)` to `NOT (A AND B)`? (You have just discovered **De Morgan's Law**!)",
    },
    {
      id: "universal-xor-gates",
      heading: "NAND, NOR & XOR Gates",
      discovery: {
        problem:
          "Think about a two-way staircase light controlled by Switch `A` at the bottom of the stairs and Switch `B` at the top. When both switches are down (`0, 0`), the light is OFF (`0`). Flipping *either* switch turns the light ON (`0, 1 → 1` and `1, 0 → 1`). What happens if someone at the bottom turns it ON (`A = 1`) and then you flip the top switch (`B = 1`) as well?",
        idea:
          "Flipping the second switch toggles the staircase light **back OFF** (`1, 1 → 0`)! An ordinary `OR` gate would stay `1` on `(1, 1)`. A staircase light needs **Exclusive-OR (`XOR`)**: output `1` when `A` and `B` are **different**, and `0` when they are the **same**!",
      },
      body:
        "Beyond `NOT`, `AND`, and `OR`, CIE 0478 tests three essential 2-input gates: two **inverted (universal)** gates (`NAND` and `NOR`) and the **exclusive** gate (`XOR`).\n\n" +
        "**1. The `NAND` Gate (`NOT-AND`)**\n" +
        "- **CIE Symbol:** An `AND` D-shape with an **inversion bubble** at the output tip.\n" +
        "- **Rule (`X = A NAND B` = `NOT (A AND B)`):** Work out `A AND B`, then flip every bit! It outputs `0` **only** when **both** inputs are `1`; in the other three rows (`00, 01, 10`) it outputs `1`.\n\n" +
        "**2. The `NOR` Gate (`NOT-OR`)**\n" +
        "- **CIE Symbol:** An `OR` curved shield with an **inversion bubble** at the output tip.\n" +
        "- **Rule (`X = A NOR B` = `NOT (A OR B)`):** Work out `A OR B`, then flip every bit! It outputs `1` **only** when **both** inputs are `0` (`00 → 1`); if *any* input is `1`, it outputs `0`.\n\n" +
        "**3. The `XOR` Gate (Exclusive-OR / `EOR`)**\n" +
        "- **CIE Symbol:** An `OR` curved shield with an **extra separated curved line** parallel to the input side (a **double curved back**) and **NO output bubble**.\n" +
        "- **Rule (`X = A XOR B`):** Outputs `1` when **one or the other** input is `1`, **but NOT both** — equivalently, **`X = 1` when `A ≠ B` (inputs differ)** and **`X = 0` when `A = B` (inputs are equal)**.\n\n" +
        "| A | B | A NAND B | A NOR B | A XOR B |\n" +
        "|---|---|---|---|---|\n" +
        "| 0 | 0 | 1 | 1 | 0 |\n" +
        "| 0 | 1 | 1 | 0 | 1 |\n" +
        "| 1 | 0 | 1 | 0 | 1 |\n" +
        "| 1 | 1 | 0 | 0 | 0 |\n\n" +
        "**Why `NAND` and `NOR` are called Universal Gates:**\n" +
        "Chip manufacturers love `NAND` gates (which power **NAND Flash SSDs**) because **every** other logic gate (`NOT`, `AND`, `OR`, `XOR`) can be built from `NAND` gates alone! For instance, tying both inputs of a `NAND` gate together to wire `A` computes `A NAND A = NOT (A AND A) = NOT A` — an instant `NOT` gate!",
      diagram: SVG_UNIVERSAL_XOR_GATES,
      diagramCaption:
        "Standard CIE 0478 symbols for NAND (D-shape + bubble), NOR (curved shield + bubble), and XOR (double curved input line, no bubble).",
      workedExamples: [
        {
          title: "Distinguishing OR, NOR, and XOR on Exam Circuits",
          problem:
            "Find the 4-row truth table output column for `X = (A XOR B) AND A` as `(A, B)` runs through `00, 01, 10, 11`.",
          steps: [
            "First evaluate `P = A XOR B` (`1` where `A` and `B` differ): for `00, 01, 10, 11`, `P = 0, 1, 1, 0`.",
            "Next evaluate `X = P AND A` row by row:",
            "Row `00`: `0 AND 0 = 0`. Row `01`: `1 AND 0 = 0`. Row `10`: `1 AND 1 = 1`. Row `11`: `0 AND 1 = 0`.",
          ],
          answer: "The 4-row output column from `00` to `11` is `0, 0, 1, 0` (`X = 1` only when `A = 1` and `B = 0`).",
          yourTurn: {
            question:
              "Complete the 4-row truth table for `X = (A XOR B) NAND A` for `(A, B)` ordered `00, 01, 10, 11`. Give the 4-bit output column from top (`00`) to bottom (`11`) as a 4-character string of `0`s and `1`s.",
            answer: { type: "text", accept: ["1101", "1 1 0 1", "1, 1, 0, 1", "1,1,0,1"], display: "1101" },
            solution:
              "`A XOR B` gives `0, 1, 1, 0` for rows `00, 01, 10, 11`. Notice `P NAND A = NOT (P AND A)`. Since `P AND A` gave `0, 0, 1, 0`, flipping every bit gives `1, 1, 0, 1` (`1101`).",
          },
        },
        {
          title: "Building Basic Gates from Universal NAND Gates",
          problem:
            "Show what single standard gate is equivalent to `X = (A NAND B) NAND (A NAND B)`.",
          steps: [
            "Let `P = A NAND B = NOT (A AND B)`.",
            "Both inputs of the second `NAND` gate receive `P`, so `X = P NAND P = NOT (P AND P) = NOT P`.",
            "Since `P = NOT (A AND B)`, inverting `P` cancels the double negation: `X = NOT (NOT (A AND B)) = A AND B`.",
          ],
          answer: "`X = A AND B` — a `NAND` gate followed by a single-wire `NAND` inverter forms a standard `AND` gate.",
        },
      ],
      keyPoints: [
        "**Bubble = Output Inversion:** `NAND` is `AND` + bubble (`1110`); `NOR` is `OR` + bubble (`1000`).",
        "**Double Input Curve = Exclusive:** `XOR` has an extra curved line at the input and **no** bubble (`0110`).",
        "**`OR` vs `XOR`:** Identical on `00`, `01`, and `10` — they differ **only** on row `11` (`1 OR 1 = 1`, whereas `1 XOR 1 = 0`).",
        "**Difference Detector:** `A XOR B = 1` whenever `A ≠ B`; its inverse (`NOT (A XOR B)`) equals `1` whenever `A = B`.",
      ],
      whyItWorks:
        "`XOR` can be written purely with basic gates as `(A OR B) AND (NOT (A AND B))` — meaning *at least one input is 1, AND NOT both are 1* — or in sum-of-products form as `(A AND NOT B) OR (NOT A AND B)`. In binary addition inside the CPU's ALU, `A XOR B` computes the **sum bit** (`0+0=0, 0+1=1, 1+0=1, 1+1=0` with carry `1`), while `A AND B` computes the **carry bit**!",
      strategies: [
        "**Calculate Base Gate First, Flip Second:** Never guess `NAND` or `NOR` directly under pressure — compute `AND` or `OR`, then invert the bit.",
        "**Spot the Row `11` Test:** To tell `OR` apart from `XOR` in a truth table, jump straight to `(1, 1)`: `1` means `OR`, `0` means `XOR`.",
      ],
      thinkDeeper:
        "If you feed a binary bit `A` and a control bit `C` into `X = A XOR C`, what happens to `A` when `C = 0` versus when `C = 1`? Why does this make `XOR` a programmable **controlled inverter** (and the core operation of stream encryption)?",
    },
    {
      id: "logic-circuits-tables",
      heading: "Multi-Gate Logic Circuits & 3-Input Truth Tables",
      discovery: {
        problem:
          "A CIE 0478 Paper 2 question shows a 3-input circuit `(A, B, C)` containing four logic gates and gives you an empty 8-row truth table worth **4 marks**. Student 1 tries to evaluate all four gates in their head for each row and makes one slip on row `101`. Student 2 labels the internal wires `P`, `Q`, `R` in the workspace margin and fills one simple gate column at a time. Why does Student 2 finish faster *and* avoid losing half the marks?",
        idea:
          "CIE examiners mark the final `X` column in blocks (typically **4 marks for all 8 rows correct**, **3 marks for 6–7 correct**, **2 marks for 4–5 correct**, **1 mark for 2–3 correct**). Filling a whole column for a single 1- or 2-input gate (`P`, then `Q`, then `R`, then `X`) turns one hard 4-gate puzzle into four effortless 5-second patterns — eliminating working-memory slips!",
      },
      body:
        "On CIE 0478, logic circuits have **at most 3 inputs (`A, B, C`) and 1 final output (`X`)**. With 3 binary inputs, there are always `2³ = 8` rows, counted from `000` (denary `0`) to `111` (denary `7`).\n\n" +
        "**How the Binary Input Columns Always Repeat:**\n" +
        "- Rightmost column **`C`** alternates every **1** row: `0, 1, 0, 1, 0, 1, 0, 1`.\n" +
        "- Middle column **`B`** alternates every **2** rows: `0, 0, 1, 1, 0, 0, 1, 1`.\n" +
        "- Leftmost column **`A`** alternates every **4** rows: `0, 0, 0, 0, 1, 1, 1, 1`.\n\n" +
        "**The Foolproof 4-Step Intermediate-Wire Method:**\n" +
        "1. **Label every internal wire** leaving a gate (`P`, `Q`, `R`) directly on the circuit diagram.\n" +
        "2. **Write the mini-expression** for each wire (e.g. `P = A AND B`, `Q = NOT C`, `X = P OR Q`).\n" +
        "3. **Add rough working columns** for `P`, `Q`, `R` in the Working Space provided on the CIE exam paper.\n" +
        "4. **Complete one column vertically** from `000` to `111` before moving to the next gate.\n\n" +
        "**Watch Out for Branching Wires (Solder Dots):**\n" +
        "A single input wire (say `B`) often splits at a junction dot to feed **two different gates** (for example `P = A NAND B` and `Q = B XOR C`). Every branch connected to `B` carries the **exact same bit** on a given row.\n\n" +
        "| A | B | C | P = A AND B | Q = NOT C | X = P OR Q |\n" +
        "|---|---|---|---|---|---|\n" +
        "| 0 | 0 | 0 | 0 | 1 | **1** |\n" +
        "| 0 | 0 | 1 | 0 | 0 | **0** |\n" +
        "| 0 | 1 | 0 | 0 | 1 | **1** |\n" +
        "| 0 | 1 | 1 | 0 | 0 | **0** |\n" +
        "| 1 | 0 | 0 | 0 | 1 | **1** |\n" +
        "| 1 | 0 | 1 | 0 | 0 | **0** |\n" +
        "| 1 | 1 | 0 | 1 | 1 | **1** |\n" +
        "| 1 | 1 | 1 | 1 | 0 | **1** |",
      diagram: SVG_MULTI_STAGE_CIRCUIT,
      diagramCaption:
        "Labelling internal wires P = A AND B and Q = NOT C breaks a 3-input multi-stage circuit into simple 2-input steps.",
      workedExamples: [
        {
          title: "Tracing a 3-Gate Shared-Wire Circuit Across All 8 Rows",
          problem:
            "In a 3-input circuit, wire `P = A NAND B`, wire `Q = B NOR C`, and final output `X = P XOR Q`. Find the 8-bit output column for `X` from `000` to `111`.",
          steps: [
            "Evaluate `P = A NAND B` (`0` only when `A = 1` AND `B = 1`, which happens on rows `110` and `111`): `P` = `1, 1, 1, 1, 1, 1, 0, 0`.",
            "Evaluate `Q = B NOR C` (`1` only when `B = 0` AND `C = 0`, which happens on rows `000` and `100`): `Q` = `1, 0, 0, 0, 1, 0, 0, 0`.",
            "Combine `P` and `Q` using `X = P XOR Q` (`1` when `P` and `Q` differ):",
            "Rows `000..011`: `1⊕1=0`, `1⊕0=1`, `1⊕0=1`, `1⊕0=1` → `0111`. Rows `100..111`: `1⊕1=0`, `1⊕0=1`, `0⊕0=0`, `0⊕0=0` → `0100`.",
          ],
          answer: "The 8-row output column for `X` from `000` to `111` is `01110100`.",
          yourTurn: {
            question:
              "Consider the 3-input logic expression `X = (A OR B) AND (B XOR C)` across all 8 input combinations (`000` to `111`). For how many of the 8 rows is the output `X = 1`? Give your answer as a single integer.",
            answer: { type: "number", value: 3 },
            solution:
              "First check where `Q = B XOR C = 1`: `B` and `C` differ in 4 rows (`001`, `010`, `101`, `110`). Now check `P = A OR B` on those 4 rows: on `001`, `0 OR 0 = 0` (`X = 0`); on `010`, `0 OR 1 = 1` (`X = 1`); on `101`, `1 OR 0 = 1` (`X = 1`); on `110`, `1 OR 1 = 1` (`X = 1`). Thus `X = 1` in exactly `3` rows.",
          },
        },
        {
          title: "Working Backwards from Output X to Find an Input",
          problem:
            "For the circuit `X = (A AND B) NOR C`, suppose `A = 1` and the final output is `X = 1`. Deduce the exact values of `B` and `C`.",
          steps: [
            "Work backwards from the final `NOR` gate: a `NOR` gate outputs `1` **if and only if both** of its inputs are `0`!",
            "Therefore `(A AND B) = 0` **and** `C = 0`.",
            "Since we are given `A = 1`, for `1 AND B` to equal `0`, we must have `B = 0`.",
          ],
          answer: "`B = 0` and `C = 0`.",
        },
      ],
      keyPoints: [
        "3 binary inputs always produce **`2³ = 8` rows**, ordered `000, 001, 010, 011, 100, 101, 110, 111`.",
        "Always label intermediate wires (`P, Q, R`) and fill **one gate column vertically** at a time.",
        "CIE truth-table mark schemes award **4 marks for 8/8**, **3 marks for 6–7/8**, **2 marks for 4–5/8**, **1 mark for 2–3/8**.",
        "`NOR = 1` forces both inputs to `0`; `AND = 1` forces both inputs to `1` — anchor facts for working backwards!",
      ],
      whyItWorks:
        "A combinational logic circuit has no memory (no feedback loops): its output `X` depends purely on the current input bits `(A, B, C)`. Evaluating intermediate wires in topological order from left (inputs) to right (final gate) computes the exact mathematical composition of Boolean functions without ever holding more than two bits in mind.",
      strategies: [
        "**Vertical Column Sweep:** Compute an entire column (`P` for all 8 rows) in one rhythm rather than switching gate rules 3 times per row.",
        "**Block Elimination:** When the final gate is `X = P AND Q`, any row where `P = 0` immediately has `X = 0` — copy those `0`s straight into `X`!",
      ],
      thinkDeeper:
        "How many total distinct 3-input Boolean truth tables exist? (Hint: each of the 8 rows in column `X` can independently be `0` or `1`, so count the number of 8-bit output patterns `2⁸`!)",
    },
    {
      id: "logic-expressions-problems",
      heading: "Logic Expressions & Real-World Control Problems",
      discovery: {
        problem:
          "Read the expression `X = A OR B AND C` without brackets when `A = 1, B = 0, C = 0`. If you group left-to-right `(A OR B) AND C`, you get `1 AND 0 = 0`. If you group `B AND C` first, `A OR (B AND C)`, you get `1 OR 0 = 1`! Which grouping matches standard Boolean operator precedence — and how should you write expressions on a CIE 0478 exam so ambiguity is impossible?",
        idea:
          "Standard Boolean precedence evaluates **`NOT` first → `AND` second → `OR` last** (just like unary minus `−`, then `×`, then `+` in algebra!), so `A OR B AND C` means `A OR (B AND C) = 1`. However, on CIE 0478 exams you should **always use brackets** around every gate stage — writing `X = A OR (B AND C)` — so both you and the examiner see the exact gate wiring immediately!",
      },
      body:
        "CIE 0478 Paper 2 regularly asks you to convert fluently in **any direction** among four representations of the same system:\n" +
        "1. **Written problem statement** (sensors, switches, safety conditions)\n" +
        "2. **Logic expression** (e.g. `X = (G AND NOT T) OR M`)\n" +
        "3. **Logic circuit diagram** (drawn with accurate CIE gate symbols)\n" +
        "4. **8-row truth table**\n\n" +
        "**How to Translate a Sensor Problem Statement Without Falling into `1`/`0` Traps:**\n" +
        "CIE problem statements always define **both** binary states of each sensor in a table. Read the `1` vs `0` meanings carefully before writing a single word!\n\n" +
        "*Example Specification — Hydraulic Safety Press (`X = 1` runs press):*\n" +
        "- Guard sensor **`G`**: `G = 1` → safety guard closed; `G = 0` → safety guard open.\n" +
        "- Temperature sensor **`T`**: `T = 1` → temperature `> 80 °C`; `T = 0` → temperature `≤ 80 °C`.\n" +
        "- Maintenance switch **`M`**: `M = 1` → override ON; `M = 0` → override OFF.\n\n" +
        "*Rule in English:* \"The press runs (`X = 1`) if the safety guard is closed **and** the temperature is **80 °C or below**, **or** if the maintenance override is ON.\"\n" +
        "1. **Map each phrase to `1` or `0`:**\n" +
        "   - \"safety guard is closed\" → table says `G = 1` → write **`G`**.\n" +
        "   - \"temperature is 80 °C or below\" → table says that is **`T = 0`**, NOT `T = 1`! Since a condition must evaluate to `1` (`TRUE`) when satisfied, `T = 0` becomes **`NOT T`**!\n" +
        "   - \"maintenance override is ON\" → table says `M = 1` → write **`M`**.\n" +
        "2. **Join with bracketed Boolean operators:**\n" +
        "   `X = (G AND (NOT T)) OR M`  *(or `X = (G AND NOT T) OR M`)*.\n\n" +
        "**How to Draw a Logic Circuit from a Logic Expression:**\n" +
        "- Work from the **innermost brackets outward** (left to right on paper), ending at the **outermost operator** right before output `X`.\n" +
        "- In `X = (G AND NOT T) OR M`: first pass `T` through a **`NOT`** gate; feed `G` and `NOT T` into an **`AND`** gate; finally feed that `AND` output and `M` into an **`OR`** gate producing `X`.\n" +
        "- **CIE 2-Input Gate Rule:** On CIE 0478, draw standard 2-input gates! If three signals are combined with `AND` (e.g. `A AND B AND C`), cascade **two 2-input `AND` gates** (`(A AND B)` feeding a second `AND` gate with `C`), never a 3-wire `AND` gate!",
      diagram: SVG_CONTROL_PROBLEM,
      diagramCaption:
        "Translating a hydraulic safety press specification into X = (G AND NOT T) OR M: conditions corresponding to sensor value 0 require a NOT gate.",
      workedExamples: [
        {
          title: "Writing a Logic Expression from a CIE Sensor Table",
          problem:
            "A chemical reactor alarm `X` sounds (`X = 1`) when:\n" +
            "- pressure is high (`P = 1`, where `P = 0` means normal) **AND** cooling fan is OFF (`F = 0`, where `F = 1` means fan ON), **OR**\n" +
            "- cooling fan is OFF (`F = 0`) **AND** acid level is low (`L = 0`, where `L = 1` means level normal).\n" +
            "Write a CIE logic expression for `X` and evaluate `X` when `P = 0, F = 0, L = 0`.",
          steps: [
            "Check every sensor state against `1` vs `0`: `P = 1` → `P`; `F = 0` → `NOT F`; `L = 0` → `NOT L`.",
            "Translate the first clause: `(P AND NOT F)`.",
            "Translate the second clause: `(NOT F AND NOT L)`.",
            "Join the two clauses with `OR`: `X = (P AND NOT F) OR (NOT F AND NOT L)` (or factored as `(NOT F) AND (P OR NOT L)`).",
            "Substitute `P = 0, F = 0, L = 0`: `(0 AND 1) OR (1 AND 1) = 0 OR 1 = 1` (the alarm sounds!).",
          ],
          answer: "`X = (P AND NOT F) OR (NOT F AND NOT L)`; when `(P, F, L) = (0, 0, 0)`, `X = 1`.",
          yourTurn: {
            question:
              "A greenhouse misting valve `X` opens (`X = 1`) if (temperature is high `T = 1` AND the roof window is closed `W = 0`, where `W = 1` means open) OR (manual switch is ON `S = 1` AND the roof window is closed `W = 0`). Give the 8-bit output column for `X` across `(T, W, S)` ordered from `000` to `111` as an 8-character string of `0`s and `1`s.",
            answer: { type: "text", accept: ["01001100", "0100 1100"], display: "01001100" },
            solution:
              "The expression is `X = (T AND NOT W) OR (S AND NOT W)`, which simplifies to `(T OR S) AND (NOT W)`. Whenever `W = 1` (rows `010, 011, 110, 111`), `NOT W = 0` so `X = 0`. When `W = 0` (rows `000, 001, 100, 101`), `X = T OR S`, giving `0, 1, 1, 1` respectively. Ordering rows `000` to `111`: `0, 1, 0, 0, 1, 1, 0, 0` → `01001100`.",
          },
        },
        {
          title: "Reading a Logic Expression Backwards from a Circuit",
          problem:
            "In a circuit, inputs `A` and `B` enter a `NOR` gate. Separately, inputs `B` and `C` enter an `XOR` gate. The outputs of those two gates enter a `NAND` gate to produce `X`. Write the CIE logic expression for `X` and find `X` when `(A, B, C) = (0, 0, 1)`.",
          steps: [
            "Top gate output: `P = (A NOR B)`.",
            "Bottom gate output: `Q = (B XOR C)`.",
            "Final gate output: `X = P NAND Q = (A NOR B) NAND (B XOR C)`.",
            "Test `(0, 0, 1)`: `0 NOR 0 = 1`; `0 XOR 1 = 1`; finally `1 NAND 1 = 0`.",
          ],
          answer: "`X = (A NOR B) NAND (B XOR C)`, and `X = 0` when `(A, B, C) = (0, 0, 1)`.",
        },
      ],
      keyPoints: [
        "**Sensor `= 0` means `NOT`:** If a required condition corresponds to `0` in the parameter table (e.g. `T = 0` means temperature ≤ 80 °C), you **must** write `NOT T`!",
        "**Precedence Order:** Without brackets, Boolean precedence is **`NOT` → `AND` → `OR`**; on CIE 0478, **always write brackets** around each gate pair for total clarity.",
        "**English \"either ... or ...\" Trap:** Check whether \"both happening\" should still trigger the alarm (`OR`) or cancel out (`XOR`). Safety alarms almost always want inclusive `OR` unless \"but not both\" is explicitly stated!",
        "**2-Input Gates Only when Drawing:** Cascade two 2-input `AND`/`OR` gates if combining 3 terms; never invent a 3-input symbol on CIE 0478.",
      ],
      whyItWorks:
        "Every Boolean expression, logic circuit, and truth table describes the exact same mathematical mapping `{0, 1}³ → {0, 1}`. Brackets turn the tree structure of physical wires into linear text unambiguously: each bracketed pair `( ... OP ... )` corresponds one-for-one with a single physical logic gate on the circuit diagram.",
      strategies: [
        "**Circle the `= 0` Conditions First:** Before writing a logic expression from text, underline every condition in the prompt and write `= 1` or `= 0` above it from the sensor table — every `= 0` gets a `NOT`!",
        "**Sanity-Check One Test Row:** After drawing a circuit or writing an expression, plug in one realistic scenario (e.g. guard open `G = 0`, override OFF `M = 0`) to verify the alarm/motor behaves as specified.",
      ],
      thinkDeeper:
        "Suppose a 3-input truth table has `X = 1` in **only two** rows: `011` (`A=0, B=1, C=1`) and `101` (`A=1, B=0, C=1`). Can you systematically build a valid CIE logic expression from *any* truth table just by `AND`-ing each `X = 1` row's literals (`(NOT A AND B AND C) OR (A AND NOT B AND C)`) and then spotting a neat `XOR` shortcut (`(A XOR B) AND C`)?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "What is the Boolean rule and CIE symbol for a `NOT` gate?",
        back: "1 input only (`X = NOT A`): inverts `0 → 1` and `1 → 0`. CIE symbol: a right-pointing **triangle with a small circle (bubble)** at the output tip.",
      },
      {
        front: "What is the Boolean rule and CIE symbol for an `AND` gate?",
        back: "Outputs `1` **only when both** inputs are `1` (`0001`). CIE symbol: **flat vertical back** + semicircular front (**D-shape**), no bubble.",
      },
      {
        front: "What is the Boolean rule and CIE symbol for an `OR` gate?",
        back: "Outputs `1` when **at least one** input is `1` — including when both are `1` (`0111`). CIE symbol: **concave curved back** + pointed shield tip, no bubble.",
      },
      {
        front: "What is the Boolean rule and CIE symbol for a `NAND` gate?",
        back: "`X = NOT (A AND B)`: outputs `0` **only when both** inputs are `1` (`1110`). CIE symbol: **D-shape `AND` body + small output bubble**.",
      },
      {
        front: "What is the Boolean rule and CIE symbol for a `NOR` gate?",
        back: "`X = NOT (A OR B)`: outputs `1` **only when both** inputs are `0` (`1000`). CIE symbol: **curved `OR` body + small output bubble**.",
      },
      {
        front: "What is the Boolean rule and CIE symbol for an `XOR` gate?",
        back: "Exclusive-OR (`X = A XOR B`): outputs `1` when inputs **differ** (`A ≠ B`) and `0` when inputs are **equal** (`0110`). CIE symbol: `OR` shield with a **second curved line at the input**, no bubble.",
      },
      {
        front: "How do `OR`, `XOR`, and `NOR` differ on input row `(1, 1)`?",
        back: "For `A = 1, B = 1`: `1 OR 1 = 1` (inclusive), `1 XOR 1 = 0` (exclusive — inputs are equal), and `1 NOR 1 = 0` (inverted OR).",
      },
      {
        front: "How many rows are in a truth table with `n` inputs (for `n = 1, 2, 3`)?",
        back: "`2ⁿ` rows: `1` input → `2¹ = 2` rows; `2` inputs → `2² = 4` rows; `3` inputs → `2³ = 8` rows (`000` to `111`).",
      },
      {
        front: "What is the standard operator precedence in Boolean logic when brackets are omitted?",
        back: "**`NOT` first → `AND` second → `OR` last** (e.g. `A OR B AND NOT C` means `A OR (B AND (NOT C))`). Always write explicit brackets on CIE 0478!",
      },
      {
        front: "In a sensor specification where `T = 1` means `Temp > 50 °C` and `T = 0` means `Temp ≤ 50 °C`, how do you write the condition 'temperature is 50 °C or below'?",
        back: "`NOT T` — because when `Temp ≤ 50 °C`, the sensor outputs `T = 0`, and `NOT 0 = 1` (`TRUE`).",
      },
      {
        front: "How do you make a `NOT` gate using only a single 2-input `NAND` (or `NOR`) gate?",
        back: "Join both inputs of the `NAND` (or `NOR`) gate together to wire `A`: `A NAND A = NOT (A AND A) = NOT A` (and `A NOR A = NOT A`).",
      },
      {
        front: "How do you express `A XOR B` using only `AND`, `OR`, and `NOT`?",
        back: "`(A AND NOT B) OR (NOT A AND B)`, or equivalently `(A OR B) AND NOT (A AND B)`.",
      },
      {
        front: "Why are `NAND` and `NOR` called **universal gates**?",
        back: "Because **any** Boolean function or logic gate (`NOT`, `AND`, `OR`, `XOR`) can be constructed using solely `NAND` gates (or solely `NOR` gates), simplifying microchip manufacturing.",
      },
      {
        front: "On CIE 0478, how do you draw `(A AND B AND C)` in a logic circuit?",
        back: "Cascade **two 2-input `AND` gates**: connect `A` and `B` into the first `AND` gate, then connect its output and `C` into a second 2-input `AND` gate (never draw a 3-input gate).",
      },
    ],
    mustKnow: [
      "Draw and recognise all **6 CIE 0478 logic gate symbols** accurately (`NOT`, `AND`, `OR`, `NAND`, `NOR`, `XOR`), paying close attention to flat vs curved backs, bubbles, and `XOR`'s double input curve.",
      "Write down the 2-row (`NOT`) and 4-row (`AND`, `OR`, `NAND`, `NOR`, `XOR`) truth tables instantaneously from memory (`AND = 0001`, `OR = 0111`, `NAND = 1110`, `NOR = 1000`, `XOR = 0110`).",
      "Trace any 3-input multi-gate logic circuit across all `2³ = 8` binary rows (`000` to `111`) using labelled intermediate columns (`P, Q, R`).",
      "Write CIE Boolean logic expressions using uppercase **`NOT`**, **`AND`**, **`OR`**, **`NAND`**, **`NOR`**, **`XOR`** and clear brackets around each gate stage.",
      "Apply standard Boolean operator precedence (**`NOT` → `AND` → `OR`**) if an exam question gives an unbracketed expression.",
      "Translate a written real-world monitoring/control problem and its `1`/`0` sensor table accurately into both a logic expression and a logic circuit.",
      "Respect CIE 0478 circuit rules: maximum **3 inputs** (`A, B, C`), **1 output** (`X`), and only **1-input (`NOT`) or 2-input** gate symbols.",
      "Work backwards from a required output (e.g. finding which input combinations force a `NOR` output to `1` or a `NAND` output to `0`).",
      "Build equivalent single-gate or universal-gate replacements (e.g. `A NAND A = NOT A`, `(A NAND B) NAND (A NAND B) = A AND B`).",
    ],
    misconceptions: [
      {
        wrong: "Never Write ❌: Drawing a triangle without the small output circle for a `NOT` gate, or putting an extra output circle on an `XOR` gate.",
        right: "Write Instead ✅: A `NOT` gate MUST have the **triangle + output bubble**; an `XOR` gate has the **extra curved line at the input** and **NO output bubble** (a bubble on `XOR` turns it into `XNOR`, which is not `XOR`!).",
      },
      {
        wrong: "Never Write ❌: Saying `1 OR 1 = 0` because in everyday English \"tea or coffee\" means choosing only one.",
        right: "Write Instead ✅: In Boolean logic, `OR` is always **inclusive**: `1 OR 1 = 1`! Only **`XOR` (Exclusive-OR)** outputs `0` when both inputs are `1` (`1 XOR 1 = 0`).",
      },
      {
        wrong: "Never Write ❌: Writing `T` in a logic expression for \"temperature is safe\" without checking whether \"safe\" is `T = 1` or `T = 0` in the sensor table.",
        right: "Write Instead ✅: Check the sensor table every time! If \"temperature is safe (≤ 80 °C)\" is defined as **`T = 0`**, you MUST invert it as **`NOT T`** so that safe (`0`) produces `1` (`TRUE`).",
      },
      {
        wrong: "Never Write ❌: Computing `A NAND B` as `(NOT A) AND (NOT B)` (flipping the inputs before the `AND`).",
        right: "Write Instead ✅: `A NAND B` means **`NOT (A AND B)`** — compute `A AND B` **first**, then invert the single output! (`(NOT A) AND (NOT B)` actually equals `A NOR B`, column `1000`, not `1110`!)",
      },
      {
        wrong: "Never Write ❌: Drawing a single `AND` or `OR` gate with **3 input wires** entering its back on a CIE 0478 circuit diagram.",
        right: "Write Instead ✅: CIE 0478 mark schemes require **standard 2-input gates** (and 1-input `NOT` gates) — combine 3 signals by cascading **two 2-input gates** (`(A AND B)` into a second `AND` gate with `C`).",
      },
      {
        wrong: "Never Write ❌: Writing algebraic symbols like `X = A.B + C'` or Python lowercase `x = a and not b` when asked for a CIE logic expression.",
        right: "Write Instead ✅: Write uppercase CIE logic keywords with brackets: **`X = (A AND B) OR (NOT C)`**.",
      },
      {
        wrong: "Never Write ❌: Evaluating `X = A OR B AND C` strictly left-to-right as `(A OR B) AND C`.",
        right: "Write Instead ✅: `AND` binds tighter than `OR` (**`NOT` → `AND` → `OR`**), so `A OR B AND C` means **`A OR (B AND C)`** — and always add brackets in your own expressions!",
      },
    ],
    examMistakes: [
      "Drawing sloppy freehand gate bodies where the examiner cannot tell whether the back is **flat (`AND`/`NAND`)** or **curved (`OR`/`NOR`)** — exaggerate the flat vertical straight line on `AND`/`NAND` and the curved crescent back on `OR`/`NOR`/`XOR`!",
      "Leaving wires floating unconnected, or crossing two wires ambiguously without showing clearly which gate input each wire feeds.",
      "Trying to trace a 4-gate 3-input circuit mentally row-by-row instead of writing intermediate columns `P, Q, R` in the Working Space — a single slip drops 4/4 marks to 3/4!",
      "Omitting brackets in compound expressions like `X = NOT A AND B` when you actually drew `NOT (A AND B)` (`NAND`) — `NOT A AND B` means `(NOT A) AND B`!",
      "Misreading \"neither `A` nor `B` is ON\" as `A NAND B` instead of **`A NOR B`** (`(NOT A) AND (NOT B) = NOT (A OR B) = A NOR B`).",
      "Writing gate names inside rectangular boxes (`[AND]`) without being aware that CIE 0478 tests the **distinctive curved/D-shaped symbols** (not ANSI/IEC rectangular `[&]`/`[≥1]` boxes) — always draw the distinctive CIE shapes AND optionally label nearby wires `P, Q`.",
      "Forgetting `X = ` at the front of a logic statement when the question asks for a complete **logic statement / logic expression** for output `X`.",
    ],
    mnemonics: [
      {
        topic: "AND vs OR Gate Shapes",
        device: "an**D** has a flat **D**-shape; **O**R curves like a crescent m**O**on",
        explanation:
          "Look at the capital **D** at the end of `anD` — flat vertical spine on the left, smooth semicircle on the right! `OR` curves inward at the back and tapers to a shield point.",
      },
      {
        topic: "Boolean Operator Precedence",
        device: "**N**aughty **A**nts **O**rder (**N**OT → **A**ND → **O**R)",
        explanation:
          "Just like BODMAS puts unary `−` before `×` before `+`, Boolean logic evaluates **`NOT`** first, **`AND`** second, and **`OR`** last whenever brackets are absent.",
      },
      {
        topic: "XOR vs NOR Quick Rule",
        device: "**X**OR = e**X**actly one (`0110`); **N**OR = **N**either one (`1000`)",
        explanation:
          "For 2 inputs, `XOR` outputs `1` when **exactly one** input is `1` (`01` and `10`), while `NOR` outputs `1` when **neither** input is `1` (`00` only).",
      },
    ],
    realWorld: [
      {
        title: "CPU Arithmetic Logic Unit (Half & Full Adders)",
        detail:
          "Every binary addition in your processor uses an **`XOR` gate** to compute the Sum bit (`1 XOR 1 = 0`) paired with an **`AND` gate** to compute the Carry bit (`1 AND 1 = 1`). Chain 64 of these Full Adders together and your CPU adds 64-bit integers in under a nanosecond!",
        emoji: "🧮",
      },
      {
        title: "NAND Flash Solid-State Drives (SSDs)",
        detail:
          "Modern SSDs, USB thumb drives, and iPad storage chips are built from dense 3D arrays of **`NAND` floating-gate transistors** — named directly after the universal `NAND` logic gate wiring of their memory cells.",
        emoji: "💾",
      },
      {
        title: "Industrial Safety Interlocks & Greenhouse Controllers",
        detail:
          "Factory laser cutters, nuclear coolant valves, and automated greenhouses wire sensor thresholds (`G AND NOT T`) through hardware logic gates so an unsafe state cuts power in microseconds without waiting for software.",
        emoji: "🏭",
      },
      {
        title: "Two-Way Staircase & Hallway Lighting",
        detail:
          "Two wall switches controlling one hallway light implement physical **`XOR` logic**: flipping *either* switch changes whether the two switches differ (`01` or `10` → ON) or match (`00` or `11` → OFF).",
        emoji: "💡",
      },
      {
        title: "Stream Ciphers, HTTPS & RAID Parity",
        detail:
          "Because `(A XOR K) XOR K = A` (applying `XOR` twice with the same key bit `K` restores `A` losslessly!), **`XOR`** is the core operation inside symmetric encryption ciphers, Wi-Fi frames, and RAID-5 disk recovery.",
        emoji: "🔐",
      },
    ],
    videos: [
      {
        title: "CIE IGCSE Computer Science 0478 — Unit 10 Boolean Logic & Logic Gates Full Revision",
        channel: "Craig'n'Dave",
        url: "https://www.youtube.com/results?search_query=craig+n+dave+igcse+0478+boolean+logic+gates",
      },
      {
        title: "IGCSE Computer Science 0478 Paper 2 — Truth Tables & Logic Circuits Walkthrough",
        channel: "Cambridge IGCSE CS Revision",
        url: "https://www.youtube.com/results?search_query=igcse+computer+science+0478+logic+circuits+truth+tables",
      },
      {
        title: "How Computers Add Numbers: Logic Gates & Binary Half/Full Adders",
        channel: "CrashCourse Computer Science",
        url: "https://www.youtube.com/results?search_query=crash+course+computer+science+boolean+logic+gates+alu",
      },
      {
        title: "Solving CIE 0478 Real-World Sensor Logic Expression Exam Questions",
        channel: "James Gan IGCSE CS",
        url: "https://www.youtube.com/results?search_query=igcse+0478+logic+expressions+problem+statements+past+paper",
      },
    ],
    formulas: [
      {
        name: "NOT Gate (Inverter)",
        formula: "X = NOT A  (0 → 1, 1 → 0)",
        note: "Single input ONLY; triangle + output inversion bubble.",
      },
      {
        name: "AND Gate",
        formula: "X = A AND B  →  4-row column: 0, 0, 0, 1",
        note: "Flat-backed D-shape; outputs 1 ONLY when both A = 1 and B = 1.",
      },
      {
        name: "OR Gate (Inclusive)",
        formula: "X = A OR B  →  4-row column: 0, 1, 1, 1",
        note: "Curved shield; outputs 1 when A = 1, B = 1, OR both = 1.",
      },
      {
        name: "NAND Gate",
        formula: "X = A NAND B = NOT (A AND B)  →  column: 1, 1, 1, 0",
        note: "D-shape + output bubble; outputs 0 ONLY when both A = 1 and B = 1.",
      },
      {
        name: "NOR Gate",
        formula: "X = A NOR B = NOT (A OR B)  →  column: 1, 0, 0, 0",
        note: "Curved shield + output bubble; outputs 1 ONLY when both A = 0 and B = 0.",
      },
      {
        name: "XOR Gate (Exclusive-OR)",
        formula: "X = A XOR B  →  4-row column: 0, 1, 1, 0",
        note: "Double curved input line (no bubble); outputs 1 when A ≠ B (inputs differ).",
      },
      {
        name: "Truth Table Row Count",
        formula: "Rows = {{2^n}}  (n = 1 → 2, n = 2 → 4, n = 3 → 8)",
        note: "CIE 0478 limits logic circuits to at most n = 3 inputs (rows 000 to 111).",
      },
      {
        name: "Boolean Operator Precedence",
        formula: "1st: NOT   →   2nd: AND   →   3rd: OR",
        note: "Always write explicit brackets in CIE 0478 expressions, e.g. X = (A AND NOT B) OR C.",
      },
      {
        name: "Universal NAND Inverter & AND",
        formula: "NOT A = A NAND A   |   A AND B = (A NAND B) NAND (A NAND B)",
        note: "Connecting both inputs of a NAND (or NOR) gate together creates a NOT gate.",
      },
      {
        name: "De Morgan's Equivalence (Exam Trap Check)",
        formula: "NOT (A AND B) = (NOT A) OR (NOT B)   |   NOT (A OR B) = (NOT A) AND (NOT B)",
        note: "Explains why 'neither A nor B' ((NOT A) AND (NOT B)) equals A NOR B, NEVER A NAND B!",
      },
    ],
  },
};
