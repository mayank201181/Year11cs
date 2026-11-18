import type { TopicExtras } from "../types.ts";

const SVG_HALF_ADDER =
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="1-bit CPU Half Adder circuit using an XOR gate for Sum and an AND gate for Carry">' +
  '<rect x="0" y="0" width="560" height="260" rx="12" fill="#f8fafc"/>' +
  '<text x="280" y="26" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="800" fill="#0f172a">Inside the ALU: How 1 XOR Gate + 1 AND Gate Add Binary Bits (Half Adder)</text>' +
  // Inputs A and B with shared solder dots
  '<text x="38" y="83" text-anchor="end" font-family="monospace" font-size="14" font-weight="800" fill="#0f172a">A</text>' +
  '<text x="38" y="123" text-anchor="end" font-family="monospace" font-size="14" font-weight="800" fill="#0f172a">B</text>' +
  '<line x1="48" y1="78" x2="212" y2="78" stroke="#0369a1" stroke-width="2.5"/>' +
  '<line x1="48" y1="118" x2="212" y2="118" stroke="#15803d" stroke-width="2.5"/>' +
  // Tap dots down to AND gate
  '<circle cx="116" cy="78" r="4" fill="#0369a1"/>' +
  '<path d="M116,78 L116,166 L216,166" fill="none" stroke="#0369a1" stroke-width="2.5"/>' +
  '<circle cx="152" cy="118" r="4" fill="#15803d"/>' +
  '<path d="M152,118 L152,198 L216,198" fill="none" stroke="#15803d" stroke-width="2.5"/>' +
  // Top gate: XOR -> Sum S
  '<path d="M206,68 Q222,98 206,128" fill="none" stroke="#0369a1" stroke-width="2.5" stroke-linecap="round"/>' +
  '<path d="M214,68 Q230,98 214,128 Q254,128 280,98 Q254,68 214,68 Z" fill="#e0f2fe" stroke="#0369a1" stroke-width="2.5" stroke-linejoin="round"/>' +
  '<text x="242" y="102" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="800" fill="#0369a1">XOR</text>' +
  '<line x1="280" y1="98" x2="346" y2="98" stroke="#0369a1" stroke-width="2.5"/>' +
  '<rect x="346" y="78" width="194" height="40" rx="8" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.5"/>' +
  '<text x="443" y="96" text-anchor="middle" font-family="monospace" font-size="12" font-weight="800" fill="#0369a1">Sum = A XOR B</text>' +
  '<text x="443" y="111" text-anchor="middle" font-family="monospace" font-size="10.5" fill="#0f172a">Col: 0, 1, 1, 0</text>' +
  // Bottom gate: AND -> Carry C
  '<path d="M216,154 L248,154 A28,28 0 0,1 248,210 L216,210 Z" fill="#dcfce7" stroke="#15803d" stroke-width="2.5" stroke-linejoin="round"/>' +
  '<text x="242" y="186" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="800" fill="#15803d">AND</text>' +
  '<line x1="276" y1="182" x2="346" y2="182" stroke="#15803d" stroke-width="2.5"/>' +
  '<rect x="346" y="162" width="194" height="40" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>' +
  '<text x="443" y="180" text-anchor="middle" font-family="monospace" font-size="12" font-weight="800" fill="#15803d">Carry = A AND B</text>' +
  '<text x="443" y="195" text-anchor="middle" font-family="monospace" font-size="10.5" fill="#0f172a">Col: 0, 0, 0, 1</text>' +
  // Footer
  '<text x="280" y="242" text-anchor="middle" font-family="monospace" font-size="11.5" font-weight="700" fill="#334155">1 + 1 = 10₂  →  Carry = 1 (AND) and Sum = 0 (XOR)!</text>' +
  '</svg>';

const SVG_NAND_UNIVERSAL =
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Constructing NOT, AND, and OR gates using solely universal 2-input NAND gates">' +
  '<rect x="0" y="0" width="560" height="260" rx="12" fill="#f8fafc"/>' +
  '<text x="280" y="24" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="800" fill="#0f172a">Universal NAND Magic: Building NOT, AND &amp; OR from NAND Alone</text>' +
  // Panel 1: NOT from 1 NAND
  '<rect x="12" y="38" width="166" height="208" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>' +
  '<text x="95" y="58" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="800" fill="#7c3aed">1 NAND = NOT A</text>' +
  '<line x1="28" y1="114" x2="54" y2="114" stroke="#334155" stroke-width="2"/>' +
  '<circle cx="54" cy="114" r="3.5" fill="#7c3aed"/>' +
  '<path d="M54,98 L76,98 M54,98 L54,130 L76,130" fill="none" stroke="#7c3aed" stroke-width="2"/>' +
  '<path d="M76,90 L98,90 A24,24 0 0,1 98,138 L76,138 Z" fill="#f3e8ff" stroke="#7c3aed" stroke-width="2.2"/>' +
  '<circle cx="127" cy="114" r="4.5" fill="#ffffff" stroke="#7c3aed" stroke-width="2.2"/>' +
  '<line x1="132" y1="114" x2="158" y2="114" stroke="#334155" stroke-width="2"/>' +
  '<text x="95" y="182" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#0f172a">X = A NAND A</text>' +
  '<text x="95" y="204" text-anchor="middle" font-family="sans-serif" font-size="10.5" fill="#475569">Tie both inputs together</text>' +
  '<text x="95" y="224" text-anchor="middle" font-family="monospace" font-size="10.5" fill="#7c3aed">0→1, 1→0</text>' +
  // Panel 2: AND from 2 NANDs
  '<rect x="190" y="38" width="176" height="208" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>' +
  '<text x="278" y="58" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="800" fill="#15803d">2 NANDs = A AND B</text>' +
  '<line x1="204" y1="104" x2="222" y2="104" stroke="#334155" stroke-width="2"/>' +
  '<line x1="204" y1="124" x2="222" y2="124" stroke="#334155" stroke-width="2"/>' +
  '<path d="M222,94 L240,94 A20,20 0 0,1 240,134 L222,134 Z" fill="#f3e8ff" stroke="#7c3aed" stroke-width="2"/>' +
  '<circle cx="264" cy="114" r="4" fill="#ffffff" stroke="#7c3aed" stroke-width="2"/>' +
  '<line x1="268" y1="114" x2="284" y2="114" stroke="#7c3aed" stroke-width="2"/>' +
  '<circle cx="284" cy="114" r="3" fill="#7c3aed"/>' +
  '<path d="M284,102 L298,102 M284,102 L284,126 L298,126" fill="none" stroke="#7c3aed" stroke-width="2"/>' +
  '<path d="M298,94 L316,94 A20,20 0 0,1 316,134 L298,134 Z" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>' +
  '<circle cx="340" cy="114" r="4" fill="#ffffff" stroke="#15803d" stroke-width="2"/>' +
  '<line x1="344" y1="114" x2="356" y2="114" stroke="#334155" stroke-width="2"/>' +
  '<text x="278" y="182" text-anchor="middle" font-family="monospace" font-size="10.5" font-weight="700" fill="#0f172a">P = A NAND B</text>' +
  '<text x="278" y="202" text-anchor="middle" font-family="monospace" font-size="10.5" font-weight="700" fill="#0f172a">X = P NAND P</text>' +
  '<text x="278" y="224" text-anchor="middle" font-family="monospace" font-size="10.5" fill="#15803d">Col: 0, 0, 0, 1</text>' +
  // Panel 3: OR from 3 NANDs
  '<rect x="378" y="38" width="170" height="208" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>' +
  '<text x="463" y="58" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="800" fill="#c2410c">3 NANDs = A OR B</text>' +
  '<path d="M402,78 L416,78 A14,14 0 0,1 416,106 L402,106 Z" fill="#f3e8ff" stroke="#7c3aed" stroke-width="1.8"/>' +
  '<circle cx="433" cy="92" r="3.5" fill="#ffffff" stroke="#7c3aed" stroke-width="1.8"/>' +
  '<path d="M402,122 L416,122 A14,14 0 0,1 416,150 L402,150 Z" fill="#f3e8ff" stroke="#7c3aed" stroke-width="1.8"/>' +
  '<circle cx="433" cy="136" r="3.5" fill="#ffffff" stroke="#7c3aed" stroke-width="1.8"/>' +
  '<path d="M437,92 L456,92 L456,106 L472,106 M437,136 L456,136 L456,122 L472,122" fill="none" stroke="#7c3aed" stroke-width="1.8"/>' +
  '<path d="M472,96 L488,96 A18,18 0 0,1 488,132 L472,132 Z" fill="#ffedd5" stroke="#c2410c" stroke-width="2"/>' +
  '<circle cx="510" cy="114" r="3.8" fill="#ffffff" stroke="#c2410c" stroke-width="2"/>' +
  '<line x1="514" y1="114" x2="534" y2="114" stroke="#334155" stroke-width="2"/>' +
  '<text x="463" y="182" text-anchor="middle" font-family="monospace" font-size="9.5" font-weight="700" fill="#0f172a">(A NAND A) NAND</text>' +
  '<text x="463" y="198" text-anchor="middle" font-family="monospace" font-size="9.5" font-weight="700" fill="#0f172a">(B NAND B)</text>' +
  '<text x="463" y="224" text-anchor="middle" font-family="monospace" font-size="10.5" fill="#c2410c">Col: 0, 1, 1, 1</text>' +
  '</svg>';

export const extras: TopicExtras = {
  hook:
    "Every video game frame, WhatsApp message, and Python `if` statement on Earth boils down to just six tiny transistor switch patterns deciding between `0` and `1` in picoseconds — welcome to the hardware language of thought!",
  didYouKnow: [
    "The **Apollo Guidance Computer** that landed Apollo 11 on the Moon in 1969 was built out of **5,600 identical 3-input `NOR` gates** — NASA engineers chose a single universal gate design so they could test it to near-zero failure!",
    "An Apple M-series processor packs over **25 billion MOSFET transistors** into a fingernail-sized silicon die; a modern CMOS `NAND` or `NOR` gate uses just **4 transistors** (`2` PMOS + `2` NMOS) and switches in less than a trillionth of a second.",
    "The word **NAND Flash** inside your phone and SSD comes straight from logic gates: memory cells are wired in series strings just like the pull-down transistors of a `NAND` gate, giving ultra-high storage density per square millimetre.",
    "Researchers have built working `AND`, `OR`, and `XOR` gates out of **domino chains, water-droplet microfluidics, DNA strands, and even soldier crabs** navigating Y-shaped mazes!",
    "In cryptography, the **One-Time Pad** — mathematically proven by Claude Shannon to be 100% unbreakable when used once with a truly random key — is literally a single **`XOR`** operation (`Cipher = Plaintext XOR Key`)!",
  ],
  activities: [
    {
      title: "Human Domino & Switch Gate Relay",
      emoji: "🎲",
      materials: ["3 index cards labelled A, B, C (0 on back, 1 on front)", "Mini whiteboard for X", "Stopwatch"],
      steps: [
        "Three friends stand on the left holding input cards `A`, `B`, and `C`, flipping through `000` up to `111`.",
        "Two friends in the middle act as Gate `P` (e.g. `NAND`) and Gate `Q` (e.g. `XOR`), holding up a thumb (`1`) or fist (`0`) based ONLY on the two inputs wired to them.",
        "One friend on the right acts as Final Gate `X` (e.g. `NOR`), reading only `P` and `Q` and writing the 8-bit column on the whiteboard.",
        "Swap gate badges and race to complete all 8 rows with 100% accuracy under 45 seconds!",
      ],
      maths:
        "Each person only ever evaluates a simple 2-input rule — demonstrating physically why **intermediate columns (`P, Q`)** eliminate errors in multi-gate CIE circuits!",
    },
    {
      title: "Secret Message XOR Cipher Lab",
      emoji: "🕵️",
      materials: ["Squared paper or notebook", "Pencil"],
      steps: [
        "Pick an 8-bit ASCII letter, such as `'C'` = `01000011`, and invent a secret 8-bit key `K`, such as `10110101`.",
        "Compute `Cipher = Plain XOR Key` bit by bit (`1` where bits differ, `0` where bits match): `01000011 XOR 10110101 = 11110110`.",
        "Hand only `11110110` and key `10110101` to a partner and ask them to apply `XOR` a second time.",
        "Watch `'C'` (`01000011`) reappear like magic!",
      ],
      maths:
        "Because `XOR` is associative and `K XOR K = 0` while `A XOR 0 = A`, `(A XOR K) XOR K = A XOR (K XOR K) = A` — the exact self-inverse property behind symmetric stream ciphers!",
    },
  ],
  bonusDiagrams: [
    {
      title: "How Logic Gates Do Maths: Inside a 1-Bit CPU Half Adder",
      svg: SVG_HALF_ADDER,
      caption:
        "Pairing one XOR gate (Sum = A XOR B) with one AND gate (Carry = A AND B) adds any two binary bits in hardware.",
    },
    {
      title: "Universal NAND Construction: Building NOT, AND & OR",
      svg: SVG_NAND_UNIVERSAL,
      caption:
        "Every basic CIE gate can be wired purely out of 2-input NAND gates — the reason silicon chips standardise on NAND cells.",
    },
  ],
  history: {
    title: "From George Boole's Lincoln Classroom (1854) to Claude Shannon's MIT Thesis (1937)",
    story:
      "In **1854**, largely self-taught English mathematician **George Boole** published *An Investigation of the Laws of Thought*, showing that human logical reasoning (`AND`, `OR`, `NOT`) obeyed clean algebraic equations on `1` (All / True) and `0` (Nothing / False). For **83 years**, Boolean algebra remained pure philosophy — until 21-year-old MIT master's student **Claude Shannon** noticed in **1937** that Bell Labs' electromechanical telephone relays (switches either closed = `1` or open = `0`) obeyed Boole's exact laws! Shannon proved that any logical deduction or binary addition could be wired directly out of switching circuits, igniting the entire digital computer revolution.",
  },
};
