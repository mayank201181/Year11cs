import type { TopicGuide } from "../../types.ts";

const svgAsciiUnicode = [
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of 7-bit and 8-bit ASCII versus 16-bit and 32-bit Unicode character sets">',
  '<rect x="8" y="8" width="544" height="244" rx="16" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>',
  '<text x="280" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">ASCII (7/8-Bit) vs Unicode (16/32-Bit) Character Sets</text>',
  // ASCII box
  '<rect x="22" y="48" width="246" height="186" rx="12" fill="var(--surface)" stroke="var(--brand)" stroke-width="2"/>',
  '<text x="145" y="70" text-anchor="middle" font-size="13" font-weight="800" fill="var(--brand)">ASCII (1 Byte / Character)</text>',
  '<text x="36" y="94" font-size="11" fill="var(--ink)">• 7-bit Standard: 2⁷ = 128 chars</text>',
  '<text x="36" y="112" font-size="11" fill="var(--ink)">• 8-bit Extended: 2⁸ = 256 chars</text>',
  '<rect x="36" y="124" width="218" height="62" rx="8" fill="var(--brand-soft)"/>',
  '<text x="46" y="143" font-size="11" font-family="monospace" font-weight="700" fill="var(--ink)">&apos;0&apos; = 48  (00110000)</text>',
  '<text x="46" y="160" font-size="11" font-family="monospace" font-weight="700" fill="var(--ink)">&apos;A&apos; = 65  (01000001)</text>',
  '<text x="46" y="177" font-size="11" font-family="monospace" font-weight="700" fill="var(--ink)">&apos;a&apos; = 97  (01100001) [+32]</text>',
  '<text x="145" y="208" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">✔ Compact: 1 byte per char</text>',
  '<text x="145" y="224" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">✘ English/Latin scripts only</text>',
  // Unicode box
  '<rect x="292" y="48" width="246" height="186" rx="12" fill="var(--surface)" stroke="var(--accent)" stroke-width="2"/>',
  '<text x="415" y="70" text-anchor="middle" font-size="13" font-weight="800" fill="var(--warn)">UNICODE (2–4 Bytes / Character)</text>',
  '<text x="306" y="94" font-size="11" fill="var(--ink)">• 16-bit: 2¹⁶ = 65,536 chars</text>',
  '<text x="306" y="112" font-size="11" fill="var(--ink)">• 32-bit: 2³² ≈ 4.3 billion codes</text>',
  '<rect x="306" y="124" width="218" height="62" rx="8" fill="var(--accent-soft)"/>',
  '<text x="316" y="143" font-size="11" font-family="monospace" font-weight="700" fill="var(--ink)">U+0041  → &apos;A&apos; (matches ASCII!)</text>',
  '<text x="316" y="160" font-size="11" font-family="monospace" font-weight="700" fill="var(--ink)">U+4E2D  → &apos;中&apos; · U+0639 → &apos;ع&apos;</text>',
  '<text x="316" y="177" font-size="11" font-family="monospace" font-weight="700" fill="var(--ink)">U+1F680 → 🚀 (Emojis &amp; Maths)</text>',
  '<text x="415" y="208" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">✔ All world languages &amp; emojis</text>',
  '<text x="415" y="224" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">✘ Uses 2–4× more storage bits</text>',
  '</svg>',
].join("");

const svgSoundSampling = [
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Analogue sound wave sampled at regular time intervals showing sample rate on horizontal axis and sample resolution on vertical axis">',
  '<rect x="8" y="8" width="544" height="244" rx="16" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>',
  '<text x="280" y="30" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">ADC Sound Sampling: Sample Rate (Hz) &amp; Sample Resolution (Bits)</text>',
  // Axes
  '<line x1="68" y1="50" x2="68" y2="205" stroke="var(--ink)" stroke-width="2"/>',
  '<line x1="68" y1="205" x2="520" y2="205" stroke="var(--ink)" stroke-width="2"/>',
  // Vertical amplitude grid (quantisation levels)
  '<line x1="68" y1="70" x2="515" y2="70" stroke="var(--line)" stroke-dasharray="4 3"/>',
  '<line x1="68" y1="102" x2="515" y2="102" stroke="var(--line)" stroke-dasharray="4 3"/>',
  '<line x1="68" y1="134" x2="515" y2="134" stroke="var(--line)" stroke-dasharray="4 3"/>',
  '<line x1="68" y1="166" x2="515" y2="166" stroke="var(--line)" stroke-dasharray="4 3"/>',
  '<text x="60" y="74" text-anchor="end" font-size="10" font-family="monospace" fill="var(--ink-2)">111</text>',
  '<text x="60" y="106" text-anchor="end" font-size="10" font-family="monospace" fill="var(--ink-2)">101</text>',
  '<text x="60" y="138" text-anchor="end" font-size="10" font-family="monospace" fill="var(--ink-2)">011</text>',
  '<text x="60" y="170" text-anchor="end" font-size="10" font-family="monospace" fill="var(--ink-2)">001</text>',
  '<text x="22" y="132" text-anchor="middle" font-size="10" font-weight="800" fill="var(--brand)" transform="rotate(-90 22 132)">RESOLUTION (bits/sample)</text>',
  // Smooth analogue wave
  '<path d="M 75 155 C 130 45, 195 45, 250 134 C 305 215, 370 185, 425 95 C 460 55, 490 80, 510 120" fill="none" stroke="var(--bad)" stroke-width="2.5"/>',
  // Digital staircase approximation
  '<path d="M 75 166 L 125 166 L 125 70 L 175 70 L 225 70 L 225 134 L 275 134 L 275 166 L 325 166 L 375 166 L 375 134 L 425 134 L 425 70 L 475 70 L 475 102 L 510 102" fill="none" stroke="var(--brand)" stroke-width="2.5"/>',
  // Sample dots
  '<circle cx="75" cy="166" r="4.5" fill="var(--brand)"/>',
  '<circle cx="125" cy="70" r="4.5" fill="var(--brand)"/>',
  '<circle cx="175" cy="70" r="4.5" fill="var(--brand)"/>',
  '<circle cx="225" cy="134" r="4.5" fill="var(--brand)"/>',
  '<circle cx="275" cy="166" r="4.5" fill="var(--brand)"/>',
  '<circle cx="325" cy="166" r="4.5" fill="var(--brand)"/>',
  '<circle cx="375" cy="134" r="4.5" fill="var(--brand)"/>',
  '<circle cx="425" cy="70" r="4.5" fill="var(--brand)"/>',
  '<circle cx="475" cy="102" r="4.5" fill="var(--brand)"/>',
  // Labels
  '<text x="295" y="226" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">TIME → Sample Rate = Samples Taken Per Second (Hz)</text>',
  '<text x="295" y="243" text-anchor="middle" font-size="11" fill="var(--ink-2)">Red curve = Analogue wave · Blue steps = Digital quantised samples (Rate × Resolution × Time × Channels)</text>',
  '</svg>',
].join("");

const svgBitmapDepth = [
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bitmap pixel grid with resolution width times height and colour depth bits per pixel">',
  '<rect x="8" y="8" width="544" height="244" rx="16" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>',
  '<text x="280" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Bitmap Image: Pixel Grid (Resolution) × Colour Depth (Bits/Pixel)</text>',
  // 4x4 example pixel grid on left
  '<rect x="34" y="54" width="160" height="160" fill="var(--surface)" stroke="var(--ink)" stroke-width="2"/>',
  '<rect x="34" y="54" width="40" height="40" fill="#0e7490" stroke="var(--line)"/>',
  '<rect x="74" y="54" width="40" height="40" fill="#22d3ee" stroke="var(--line)"/>',
  '<rect x="114" y="54" width="40" height="40" fill="#22d3ee" stroke="var(--line)"/>',
  '<rect x="154" y="54" width="40" height="40" fill="#0e7490" stroke="var(--line)"/>',
  '<rect x="34" y="94" width="40" height="40" fill="#22d3ee" stroke="var(--line)"/>',
  '<rect x="74" y="94" width="40" height="40" fill="#fbbf24" stroke="var(--line)"/>',
  '<rect x="114" y="94" width="40" height="40" fill="#fbbf24" stroke="var(--line)"/>',
  '<rect x="154" y="94" width="40" height="40" fill="#22d3ee" stroke="var(--line)"/>',
  '<rect x="34" y="134" width="40" height="40" fill="#22d3ee" stroke="var(--line)"/>',
  '<rect x="74" y="134" width="40" height="40" fill="#f97316" stroke="var(--line)"/>',
  '<rect x="114" y="134" width="40" height="40" fill="#f97316" stroke="var(--line)"/>',
  '<rect x="154" y="134" width="40" height="40" fill="#22d3ee" stroke="var(--line)"/>',
  '<rect x="34" y="174" width="40" height="40" fill="#0e7490" stroke="var(--line)"/>',
  '<rect x="74" y="174" width="40" height="40" fill="#22d3ee" stroke="var(--line)"/>',
  '<rect x="114" y="174" width="40" height="40" fill="#22d3ee" stroke="var(--line)"/>',
  '<rect x="154" y="174" width="40" height="40" fill="#0e7490" stroke="var(--line)"/>',
  '<text x="114" y="234" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Resolution = W × H pixels</text>',
  // Colour depth ladder on right
  '<rect x="220" y="54" width="314" height="182" rx="12" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.5"/>',
  '<text x="377" y="76" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">COLOUR DEPTH = n bits → 2ⁿ Max Colours</text>',
  '<text x="236" y="100" font-size="11.5" font-family="monospace" fill="var(--ink)">1-bit  → 2¹  = 2 colours (B&amp;W)</text>',
  '<text x="236" y="122" font-size="11.5" font-family="monospace" fill="var(--ink)">4-bit  → 2⁴  = 16 colours</text>',
  '<text x="236" y="144" font-size="11.5" font-family="monospace" fill="var(--ink)">8-bit  → 2⁸  = 256 colours (1 B/px)</text>',
  '<text x="236" y="166" font-size="11.5" font-family="monospace" fill="var(--ink)">16-bit → 2¹⁶ = 65,536 colours (2 B/px)</text>',
  '<text x="236" y="188" font-size="11.5" font-family="monospace" font-weight="700" fill="var(--good)">24-bit → 2²⁴ = 16,777,216 (True RGB, 3 B/px)</text>',
  '<text x="377" y="218" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--ink)">Size (bits) = Width × Height × Colour Depth</text>',
  '</svg>',
].join("");

const svgIecLadder = [
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="IEC binary storage unit conversion ladder dividing by 8 from bits to bytes and by 1024 for KiB, MiB, GiB and TiB">',
  '<rect x="8" y="8" width="544" height="244" rx="16" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>',
  '<text x="280" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">CIE 0478 IEC Unit Ladder: ÷ 8 to Bytes, Then ÷ 1024 Every Step!</text>',
  // Boxes across: bits -> Bytes -> KiB -> MiB -> GiB -> TiB
  '<rect x="18" y="88" width="68" height="58" rx="10" fill="var(--surface)" stroke="var(--brand)" stroke-width="2"/>',
  '<text x="52" y="115" text-anchor="middle" font-size="14" font-weight="800" fill="var(--brand)">bits</text>',
  '<text x="52" y="133" text-anchor="middle" font-size="10" fill="var(--ink-2)">(0 or 1)</text>',
  '<rect x="108" y="88" width="72" height="58" rx="10" fill="var(--surface)" stroke="var(--brand)" stroke-width="2"/>',
  '<text x="144" y="115" text-anchor="middle" font-size="14" font-weight="800" fill="var(--brand)">Bytes</text>',
  '<text x="144" y="133" text-anchor="middle" font-size="10" fill="var(--ink-2)">8 bits</text>',
  '<rect x="202" y="88" width="72" height="58" rx="10" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2"/>',
  '<text x="238" y="115" text-anchor="middle" font-size="15" font-weight="800" fill="var(--good)">KiB</text>',
  '<text x="238" y="133" text-anchor="middle" font-size="10" fill="var(--ink-2)">1024 B</text>',
  '<rect x="296" y="88" width="72" height="58" rx="10" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2"/>',
  '<text x="332" y="115" text-anchor="middle" font-size="15" font-weight="800" fill="var(--good)">MiB</text>',
  '<text x="332" y="133" text-anchor="middle" font-size="10" fill="var(--ink-2)">1024 KiB</text>',
  '<rect x="390" y="88" width="72" height="58" rx="10" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2"/>',
  '<text x="426" y="115" text-anchor="middle" font-size="15" font-weight="800" fill="var(--good)">GiB</text>',
  '<text x="426" y="133" text-anchor="middle" font-size="10" fill="var(--ink-2)">1024 MiB</text>',
  '<rect x="480" y="88" width="62" height="58" rx="10" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2"/>',
  '<text x="511" y="115" text-anchor="middle" font-size="15" font-weight="800" fill="var(--good)">TiB</text>',
  '<text x="511" y="133" text-anchor="middle" font-size="10" fill="var(--ink-2)">1024 GiB</text>',
  // Top divide arrows
  '<text x="97" y="74" text-anchor="middle" font-size="12" font-weight="800" fill="var(--bad)">÷ 8 ▶</text>',
  '<text x="191" y="74" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">÷ 1024 ▶</text>',
  '<text x="285" y="74" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">÷ 1024 ▶</text>',
  '<text x="379" y="74" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">÷ 1024 ▶</text>',
  '<text x="473" y="74" text-anchor="middle" font-size="11" font-weight="800" fill="var(--brand)">÷ 1024 ▶</text>',
  // Bottom multiply arrows
  '<text x="97" y="168" text-anchor="middle" font-size="12" font-weight="800" fill="var(--bad)">◀ × 8</text>',
  '<text x="191" y="168" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink-2)">◀ × 1024</text>',
  '<text x="285" y="168" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink-2)">◀ × 1024</text>',
  '<text x="379" y="168" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink-2)">◀ × 1024</text>',
  '<text x="473" y="168" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink-2)">◀ × 1024</text>',
  // Exam warning banner
  '<rect x="24" y="192" width="512" height="44" rx="10" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.5"/>',
  '<text x="280" y="212" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--bad)">EXAM TRAP: NEVER divide by 1000 for KiB / MiB / GiB! (1024 = 2¹⁰; PiB &amp; EiB continue × 1024)</text>',
  '<text x="280" y="228" text-anchor="middle" font-size="10.5" fill="var(--ink)">Non-calculator tip: cancel powers of 2 BEFORE multiplying (1024 = 32 × 32 = 64 × 16 = 128 × 8)!</text>',
  '</svg>',
].join("");

const svgRleCompression = [
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Run-Length Encoding lossless compression compressing 16 pixel bytes into 8 bytes of count-colour pairs">',
  '<rect x="8" y="8" width="544" height="244" rx="16" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>',
  '<text x="280" y="32" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">Run-Length Encoding (RLE): Lossless Compression on Repeated Runs</text>',
  '<text x="32" y="58" font-size="12" font-weight="700" fill="var(--ink-2)">RAW PIXEL ROW (16 pixels × 1 byte = 16 bytes):</text>',
  // 6 Blue, 4 Gold, 4 Blue, 2 Coral
  '<rect x="32" y="68" width="180" height="34" rx="6" fill="#0ea5e9" stroke="var(--ink)"/>',
  '<text x="122" y="90" text-anchor="middle" font-size="13" font-weight="800" fill="#fff">B  B  B  B  B  B (6)</text>',
  '<rect x="216" y="68" width="120" height="34" rx="6" fill="#facc15" stroke="var(--ink)"/>',
  '<text x="276" y="90" text-anchor="middle" font-size="13" font-weight="800" fill="#0e1020">Y  Y  Y  Y (4)</text>',
  '<rect x="340" y="68" width="120" height="34" rx="6" fill="#0ea5e9" stroke="var(--ink)"/>',
  '<text x="400" y="90" text-anchor="middle" font-size="13" font-weight="800" fill="#fff">B  B  B  B (4)</text>',
  '<rect x="464" y="68" width="64" height="34" rx="6" fill="#f97316" stroke="var(--ink)"/>',
  '<text x="496" y="90" text-anchor="middle" font-size="13" font-weight="800" fill="#fff">R R (2)</text>',
  // Arrow down
  '<text x="280" y="128" text-anchor="middle" font-size="13" font-weight="800" fill="var(--brand)">▼  Encode each consecutive run as (Count, Value)  ▼</text>',
  // RLE compressed pairs
  '<rect x="52" y="140" width="104" height="44" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2"/>',
  '<text x="104" y="167" text-anchor="middle" font-size="15" font-family="monospace" font-weight="800" fill="var(--good)">(6, B)</text>',
  '<rect x="172" y="140" width="104" height="44" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2"/>',
  '<text x="224" y="167" text-anchor="middle" font-size="15" font-family="monospace" font-weight="800" fill="var(--good)">(4, Y)</text>',
  '<rect x="292" y="140" width="104" height="44" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2"/>',
  '<text x="344" y="167" text-anchor="middle" font-size="15" font-family="monospace" font-weight="800" fill="var(--good)">(4, B)</text>',
  '<rect x="412" y="140" width="104" height="44" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2"/>',
  '<text x="464" y="167" text-anchor="middle" font-size="15" font-family="monospace" font-weight="800" fill="var(--good)">(2, R)</text>',
  '<rect x="32" y="198" width="496" height="40" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>',
  '<text x="280" y="222" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">4 pairs × 2 bytes = 8 bytes (50% saved!) · 100% Exact Pixel Row Restored (LOSSLESS)</text>',
  '</svg>',
].join("");

export const guide: TopicGuide = {
  id: "data-media-compression",
  title: "Text, Sound, Images & Compression",
  strand: "Paper 1: Computer Systems",
  icon: "🎨",
  summary:
    "Represent text (ASCII vs Unicode), sampled audio, and bitmap images in binary, calculate exact IEC storage sizes using 1024 without a calculator, and master lossless (RLE) vs lossy compression.",
  intro:
    "Switches inside a CPU only understand `0` and `1`, yet your devices display multilingual messages, play orchestral music, and render crisp photographs. CIE `0478` Sections `1.2` and `1.3` test **how** text, sound, and images are encoded into binary, **how** to calculate exact file sizes in **IEC units (`KiB`, `MiB`, `GiB`) dividing by `1024` without a calculator**, and **when** to choose **lossless** (`RLE`, `PNG`, `ZIP`) versus **lossy** (`MP3`, `JPEG`, `MP4`) compression.",
  guide: [
    {
      id: "text-ascii-unicode",
      heading: "Text Representation: ASCII & Unicode",
      discovery: {
        problem:
          "Suppose you know only ONE fact about ASCII: uppercase `'A'` is stored as denary `65` (`01000001`). Without looking up a table, how can you immediately write the 8-bit ASCII binary code for `'F'` — and why does `00110111` represent the character `'7'` rather than `00000111`?",
        idea:
          "Character sets assign **consecutive** integer codes to alphabet letters (`'A'=65, 'B'=66, …, 'F'=70 → 01000110`) and digit characters (`'0'=48 .. '9'=57`, so `'7' = 48 + 7 = 55 = 00110111`)! Notice a text character `'7'` is stored via its **character code (`55`)**, NOT the integer `7` (`00000111`, which is the ASCII bell control code)!",
      },
      body: [
        "### What Is a Character Set?",
        "Whenever you press a key on a keyboard, the computer looks up that symbol in a **character set** — a standardised table mapping every character, digit, punctuation mark, and control code to a **unique binary number**.",
        "",
        "| Character Set | Bits per Character | Max Characters | Languages / Symbols Supported |",
        "|---|---|---|---|",
        "| **Standard ASCII** | `7` bits | {{2^7}} = **`128`** (`0–127`) | English uppercase/lowercase, digits `0–9`, basic punctuation & control codes |",
        "| **Extended ASCII** | `8` bits (`1` byte) | {{2^8}} = **`256`** (`0–255`) | Adds accented Western European characters (`é, ü, ñ`) & currency symbols |",
        "| **Unicode** (`UTF-16` / `UTF-32`) | `16` to `32` bits (`2–4` bytes; `UTF-8` uses `1–4` bytes) | Up to {{2^32}} ≈ **`4.3 billion`** (`65,536` in 16-bit) | **Every** world script (Chinese, Arabic, Hindi, Tamil, Greek, Cyrillic), maths symbols & **emojis** 🚀 |",
        "",
        "### Useful ASCII Patterns for CIE `0478`",
        "- Codes run **consecutively**: `'0' = 48` (`30₁₆`), `'A' = 65` (`41₁₆`), `'a' = 97` (`61₁₆`).",
        "- Notice `'a' − 'A' = 97 − 65 = 32` (`00100000₂`): lowercase and uppercase ASCII letters differ by **flipping just bit 5 (the `32`s bit)**!",
        "- Unicode's first `128` code points (`U+0000` to `U+007F`) match **ASCII identically** for backward compatibility.",
        "",
        "### Exam Comparison: ASCII vs Unicode (2–3 Marks)",
        "- **Advantage of Unicode over ASCII**: Represents **millions/billions more characters**, supporting **all world languages, non-Latin scripts, and emojis** in one universal standard.",
        "- **Disadvantage of Unicode compared to ASCII**: Uses **more bits/bytes per character** (`16` or `32` bits instead of `7` or `8` bits), resulting in **larger text file sizes** and slower transmission.",
      ].join("\n"),
      diagram: svgAsciiUnicode,
      diagramCaption:
        "ASCII packs English characters into 7 or 8 bits (128 or 256 codes), whereas Unicode uses up to 16–32 bits per character to cover every language and emoji on Earth at the cost of larger storage.",
      workedExamples: [
        {
          title: "Deducing Consecutive ASCII Codes",
          problem: "In 8-bit ASCII, `'A'` has denary code `65`. Find the denary, hexadecimal, and 8-bit binary ASCII code for `'E'`.",
          steps: [
            "`'E'` is `4` letters after `'A'`: `65 + 4 = 69`.",
            "In 8-bit binary (`64 + 4 + 1`): `01000101`.",
            "In hexadecimal nibbles (`0100` and `0101`): `45`.",
          ],
          answer: "Denary `69`, Hex `45`, 8-bit Binary `01000101`",
          yourTurn: {
            question: "In 8-bit ASCII, `'a'` has denary code `97`. Give the 8-bit binary ASCII code for `'d'`.",
            answer: { type: "text", accept: ["01100100", "0110 0100"], display: "01100100" },
            solution: "`'d'` is `3` letters after `'a'`: `97 + 3 = 100 = 64 + 32 + 4` → `01100100`.",
          },
        },
        {
          title: "Text File Size: Extended ASCII vs 16-Bit Unicode",
          problem: "A plain-text document contains `4096` characters (including spaces). Calculate its file size in **KiB** when saved in **(a)** 8-bit Extended ASCII and **(b)** 16-bit Unicode.",
          steps: [
            "(a) 8-bit Extended ASCII uses `8 bits = 1 byte` per character: `4096 bytes ÷ 1024 = 4 KiB`.",
            "(b) 16-bit Unicode uses `16 bits = 2 bytes` per character: `(4096 × 2) bytes ÷ 1024 = 4 × 2 = 8 KiB` (double the storage!).",
          ],
          answer: "(a) `4 KiB`   (b) `8 KiB`",
        },
      ],
      keyPoints: [
        "A **character set** is a list of characters recognized by hardware/software, each mapped to a **unique binary code**.",
        "7-bit ASCII = `128` characters; 8-bit Extended ASCII = `256` characters; 16-bit Unicode = `65,536`; 32-bit Unicode ≈ `4.3 billion`.",
        "Spaces, newlines, and punctuation count as characters too (`' '` space = ASCII `32`)!",
        "Unicode supports world languages & emojis, but requires **more bits per character** (`2–4` bytes vs `1` byte in ASCII).",
      ],
      whyItWorks:
        "Adding just `1` extra bit to a character code **doubles** ({{* 2}}) the available character slots: moving from `8` bits (`256` slots) to `16` bits (`65,536` slots) multiplies capacity by {{2^8 = 256}} while only doubling file size!",
      strategies: [
        "Case-Flip Bit Check: Uppercase `'A'..'Z'` (`65..90`) always starts `010...`, while lowercase `'a'..'z'` (`97..122`) always starts `011...` (`+32`).",
      ],
      thinkDeeper:
        "Why did web engineers invent **UTF-8** (which uses `1` byte for ASCII characters `0..127` and `2–4` bytes for other scripts/emojis) instead of storing every English webpage in fixed `32`-bit Unicode?",
    },
    {
      id: "sound-representation",
      heading: "Sound Sampling, Rate & Resolution",
      discovery: {
        problem:
          "A violin string vibrates smoothly through infinitely many air-pressure heights every millisecond, yet a computer register can only store finite lists of `0`s and `1`s. What two measurements must an Analogue-to-Digital Converter (ADC) decide in order to freeze a smooth wave into numbers?",
        idea:
          "It must decide **how often** to measure the wave along the time axis (**Sample Rate**, in samples per second / `Hz`) AND **how many bits** to use for each height measurement on the amplitude axis (**Sample Resolution**, in bits per sample)!",
      },
      body: [
        "### How Sound Is Converted to Binary",
        "Natural sound waves are **analogue** (continuously varying amplitude). A microphone converts air-pressure waves into an analogue electrical signal, and an **Analogue-to-Digital Converter (ADC)** measures (**samples**) the amplitude of the wave **at regular time intervals**, rounding each measurement to the nearest binary number.",
        "",
        "| Term | CIE `0478` Definition | Effect of Increasing It |",
        "|---|---|---|",
        "| **Sample Rate** | Number of sound amplitude **samples taken per second**, measured in **Hertz (`Hz`)** (e.g. CD audio = `44.1 kHz` = `44,100` samples/s). | Captures rapid/high-frequency changes more faithfully (less time gap between samples) → **higher audio accuracy**, **larger file size**. |",
        "| **Sample Resolution** (*Bit Depth*) | Number of **bits used to store each sample** (e.g. `8`-bit = `256` levels; `16`-bit = `65,536` levels; `24`-bit = `16.7M` levels). | Finer amplitude steps → **wider dynamic range & less quantisation error/background hiss**, **larger file size**. |",
        "",
        "### Uncompressed Sound File-Size Formula",
        "- `File size (in bits) = Sample Rate (Hz) × Sample Resolution (bits) × Length (seconds) × Channels`",
        "- For **mono** audio, `Channels = 1` (often omitted when mono is assumed); for **stereo** audio, multiply by **`2`**!",
        "- Divide bits by **`8`** for **bytes**, then by **`1024`** for **KiB**, and by **`1024`** again for **MiB**.",
      ].join("\n"),
      diagram: svgSoundSampling,
      diagramCaption:
        "An ADC measures amplitude at fixed horizontal intervals (Sample Rate in Hz) and rounds each height to the nearest vertical binary level (Sample Resolution in bits).",
      workedExamples: [
        {
          title: "Non-Calculator Mono Audio File Size in KiB",
          problem: "A mono voice memo is recorded at a sample rate of `16,000 Hz` with a sample resolution of `16 bits` for `32 seconds`. Calculate the uncompressed file size in **KiB**.",
          steps: [
            "Write the full fraction BEFORE multiplying so powers of `2` cancel cleanly!",
            "`Bytes = (16000 × 16 × 32) ÷ 8 = 16000 × 2 × 32 = 16000 × 64` bytes.",
            "`KiB = (16000 × 64) ÷ 1024`. Since `1024 ÷ 64 = 16`, this simplifies to `16000 ÷ 16 = 1000 KiB`!",
          ],
          answer: "`1000 KiB`",
          yourTurn: {
            question: "A **stereo** (`2`-channel) sound clip has a sample rate of `8192 Hz`, a sample resolution of `16 bits`, and lasts `10 seconds`. Calculate its exact uncompressed file size in **KiB**.",
            answer: { type: "number", value: 320 },
            solution: "`Bytes = (8192 × 16 × 10 × 2) ÷ 8 = 8192 × 40` bytes. Divide by `1024`: `(8192 ÷ 1024) × 40 = 8 × 40 = 320 KiB`.",
          },
        },
        {
          title: "Explaining Quality vs File-Size Trade-Offs",
          problem: "Explain two benefits and one drawback of increasing a recording's sample resolution from `8` bits to `16` bits.",
          steps: [
            "Benefits: **(1)** `2¹⁶ = 65,536` amplitude levels instead of `256`, so digital samples match the original analogue amplitude much more closely (**less quantisation error / distortion**); **(2)** **wider dynamic range** between quietest and loudest sounds.",
            "Drawback: **Doubles the file size** (`2` bytes per sample instead of `1` byte), requiring more storage space and longer download/streaming times.",
          ],
          answer: "Closer representation with less quantisation noise and wider dynamic range, at the cost of double the file size.",
        },
      ],
      keyPoints: [
        "**Sample rate** = samples taken **per second** (`Hz`); **sample resolution** = **bits stored per sample**.",
        "Never confuse the two definitions! Writing *'sample rate is bits per second'* loses the mark — bits per second is **bit rate** (`sample rate × sample resolution × channels`).",
        "Check carefully whether a question says **mono (`× 1`)** or **stereo (`× 2`)**, and whether rate is given in **`kHz`** (`1 kHz = 1000 Hz`, e.g. `44.1 kHz = 44,100 Hz`!).",
      ],
      whyItWorks:
        "Note the subtle unit contrast: frequency in **Hertz** is a physical SI rate (`1 kHz = 1000 samples/second`), whereas computer memory in **KiB / MiB** is binary (`1 KiB = 1024 bytes`). Keep `1000` for `kHz → Hz` and `1024` for `Bytes → KiB`!",
      strategies: [
        "Fraction-First Cancellation: Put `÷ (8 × 1024)` underneath `(Rate × Bits × Time × Channels)` before multiplying a single pair of numbers!",
      ],
      thinkDeeper:
        "Why did Sony and Philips pick `44,100 Hz` for CD audio? Humans hear up to about `20,000 Hz`, and the **Nyquist–Shannon sampling theorem** proves you must sample at **more than twice** the highest frequency (`> 40,000 Hz`) so high-pitched waves cannot disguise themselves as low-pitched waves (*aliasing*)!",
    },
    {
      id: "bitmap-images",
      heading: "Bitmap Images, Resolution & Colour Depth",
      discovery: {
        problem:
          "A retro game designer draws a `16 × 16` pixel sprite using `14` distinct colours. What is the **minimum** number of bits needed for each pixel (`colour depth`), and how many spare colours does the designer get for free?",
        idea:
          "`3` bits per pixel only give {{2^3 = 8}} colours (too few for `14`!), whereas **`4` bits per pixel** give {{2^4 = 16}} colours (`0000` to `1111`), leaving `16 − 14 = 2` spare palette colours!",
      },
      body: [
        "### Pixels, Image Resolution & Colour Depth",
        "A **bitmap image** is a rectangular grid of **pixels** (*picture elements* — the smallest individually addressable coloured dots in an image), each stored as a binary number.",
        "",
        "| Property | CIE `0478` Definition | Effect of Increasing It |",
        "|---|---|---|",
        "| **Image Resolution** | Dimensions / total number of **pixels** in the image (`Width × Height`, e.g. `1920 × 1080`). | More pixels pack finer detail, making the image **sharper** and less **pixelated** when enlarged — **increases file size**. |",
        "| **Colour Depth** | Number of **bits used to represent the colour of each pixel** (`n` bits → {{2^n}} colours, e.g. `8`-bit = `256` colours, `24`-bit = `16,777,216` colours). | More shades & smoother colour gradients (closer to real-life colours) — **increases file size**. |",
        "",
        "### Bitmap File-Size Formula & Metadata",
        "- `Image data size (bits) = Image Width (px) × Image Height (px) × Colour Depth (bits)`",
        "- `Image data size (bytes) = (Width × Height × Colour Depth) ÷ 8`",
        "- Real image files also store a small **metadata** header (file format, width & height dimensions, colour depth, date/time, camera model/GPS) so software knows how to reconstruct the 1D stream of bits into a 2D pixel grid. *(In CIE `0478` file-size calculations, calculate pure pixel data only unless metadata size is explicitly given!)*",
      ].join("\n"),
      diagram: svgBitmapDepth,
      diagramCaption:
        "Total uncompressed bitmap size equals total pixels (Width × Height) multiplied by bits per pixel (Colour Depth).",
      workedExamples: [
        {
          title: "Bitmap Size from Number of Colours (Watch the 2ⁿ Step!)",
          problem: "A bitmap banner measures `1024 × 512` pixels and uses a palette of `256` colours. Calculate the image size in **KiB**.",
          steps: [
            "Trap check: do **NOT** multiply by `256`! Since {{2^8 = 256}}, `256` colours require a **colour depth of `8` bits** (`1` byte) per pixel!",
            "`Size in bytes = (1024 × 512 × 8) ÷ 8 = 1024 × 512` bytes.",
            "`Size in KiB = (1024 × 512) ÷ 1024 = 512 KiB`.",
          ],
          answer: "`512 KiB`",
          yourTurn: {
            question: "A bitmap game icon is `128 × 64` pixels and uses `16` colours. Calculate its exact uncompressed size in **KiB**.",
            answer: { type: "number", value: 4 },
            solution: "`16` colours → {{2^4 = 16}} → colour depth = `4` bits/pixel! `Bytes = (128 × 64 × 4) ÷ 8 = 128 × 32 = 4096` bytes. Divide by `1024` → `4 KiB`.",
          },
        },
        {
          title: "24-Bit True Colour Photograph in MiB",
          problem: "A digital camera captures an uncompressed `2048 × 1536` pixel image in `24`-bit True Colour. Find the exact file size in **MiB**.",
          steps: [
            "`24 bits ÷ 8 = 3 bytes` per pixel.",
            "`KiB = (2048 × 1536 × 3) ÷ 1024 = 2 × 1536 × 3` KiB.",
            "`MiB = (2 × 1536 × 3) ÷ 1024`. Notice `1536 ÷ 512 = 3` and `2 × 1536 = 3072 = 3 × 1024`! So `(3072 ÷ 1024) × 3 = 3 × 3 = 9 MiB`.",
          ],
          answer: "`9 MiB`",
        },
      ],
      keyPoints: [
        "**Exam Trap #1**: If a question states **`256` colours** (or `16` colours, or `65,536` colours), convert colours `C` to **bits `n`** first ({{2^n >= C}}): `2→1b`, `4→2b`, `8→3b`, `16→4b`, `32→5b`, `64→6b`, `128→7b`, `256→8b`, `65536→16b`!",
        "Enlarging a low-resolution bitmap stretches individual pixels into visible blocky squares (**pixelation**).",
        "Always check whether dimensions are already total pixels (e.g. `2,097,152` pixels) or `Width × Height`.",
      ],
      whyItWorks:
        "With `n` binary switches per pixel, each switch independently doubles the palette (`2 × 2 × … × 2 = 2ⁿ`). That exponential scaling means `24` bits (`3` tiny bytes per pixel) unlock `16.77 million` colours — more shades than the human eye can distinguish!",
      strategies: [
        "Bytes-First Shortcut: Whenever colour depth is a multiple of `8` (`8`-bit = `1 B`, `16`-bit = `2 B`, `24`-bit = `3 B`, `32`-bit = `4 B`), convert bits-per-pixel to **bytes-per-pixel immediately** before touching width and height!",
      ],
      thinkDeeper:
        "Why do company logos use **vector graphics** (`SVG` — storing maths formulas for lines, curves, and fill colours) rather than bitmaps (`PNG`/`JPEG`) when the same logo must look razor-sharp on both a `32 × 32` favicon and a `20`-metre stadium billboard?",
    },
    {
      id: "iec-storage-units",
      heading: "IEC Data Storage Units & File-Size Maths",
      discovery: {
        problem:
          "You buy a hard drive advertised on the box as `1 TB` (`1,000,000,000,000` bytes), plug it into a computer that measures storage in **binary TiB**, and it reports `931 GiB`! Did `69 GiB` vanish in the post, or are two different unit ladders colliding?",
        idea:
          "Drive boxes use **SI decimal powers of `1000`** ({{10^3}}), whereas memory addressing uses **IEC binary powers of `1024`** ({{2^10}})! `10¹² ÷ 1024³ ≈ 931.3 GiB`. Every byte is still there — and on **CIE `0478`**, `KiB, MiB, GiB, TiB, PiB, EiB` **strictly use `1024`**!",
      },
      body: [
        "### Complete CIE `0478` IEC Binary Unit Hierarchy",
        "Because RAM addresses are binary, storage scales cleanly in multiples of **{{2^10 = 1024}}** (International Electrotechnical Commission **IEC** units with an **`i`** in the middle):",
        "",
        "| Unit | Symbol | Exact Equivalent | Power of 2 (in Bytes) |",
        "|---|---|---|---|",
        "| **Bit** | `b` | Single `0` or `1` | — |",
        "| **Nibble** | — | `4` bits | — |",
        "| **Byte** | `B` | `8` bits (`2` nibbles) | {{2^0}} = `1` B |",
        "| **Kibibyte** | **`KiB`** | **`1024` Bytes** | {{2^10}} B |",
        "| **Mebibyte** | **`MiB`** | **`1024` KiB** | {{2^20}} B |",
        "| **Gibibyte** | **`GiB`** | **`1024` MiB** | {{2^30}} B |",
        "| **Tebibyte** | **`TiB`** | **`1024` GiB** | {{2^40}} B |",
        "| **Pebibyte** | **`PiB`** | **`1024` TiB** | {{2^50}} B |",
        "| **Exbibyte** | **`EiB`** | **`1024` PiB** | {{2^60}} B |",
        "",
        "*(Contrast: SI decimal units `kB`, `MB`, `GB`, `TB`, `PB`, `EB` multiply by **`1000`** at each step. On CIE `0478`, **always use `1024`** for `KiB / MiB / GiB / TiB` — dividing by `1000` is the single biggest mark-loser on Paper 1!)*",
        "",
        "### Non-Calculator Factor-Cancellation Cheat Sheet",
        "Since Paper 1 forbids calculators, CIE examiners deliberately pick dimensions with factors of `2` that cancel `1024` cleanly! Memorise these factor pairs of **`1024`**:",
        "- `1024 = 512 × 2 = 256 × 4 = 128 × 8 = 64 × 16 = 32 × 32`",
        "- Common screen/photo widths too: `512 = 0.5 × 1024`, `1536 = 1.5 × 1024`, `2048 = 2 × 1024`, `4096 = 4 × 1024`!",
      ].join("\n"),
      diagram: svgIecLadder,
      diagramCaption:
        "Move right up the IEC storage ladder by dividing by 8 (bits → Bytes) and then by 1024 per step; move left down to smaller units by multiplying.",
      workedExamples: [
        {
          title: "Cancelling Factors Without a Calculator",
          problem: "Calculate the exact size in **MiB** of `32` uncompressed photographs, each `1024 × 512` pixels with `16`-bit colour depth.",
          steps: [
            "Write a single fraction in **MiB** (`÷ 8` for bytes, `÷ 1024` for KiB, `÷ 1024` for MiB):",
            "`MiB = (32 × 1024 × 512 × 16) ÷ (8 × 1024 × 1024)`.",
            "Cancel step-by-step: `1024 ÷ 1024 = 1`; `16 ÷ 8 = 2`; `512 × 2 = 1024`, which cancels the second `1024`!",
            "Only `32` remains → **`32 MiB`** in ten seconds with zero long multiplication!",
          ],
          answer: "`32 MiB`",
          yourTurn: {
            question: "How many `512 KiB` files can be stored on a completely empty `2 GiB` memory card?",
            answer: { type: "number", value: 4096 },
            solution: "`2 GiB = 2 × 1024 MiB = 2048 MiB`. Each file is `512 KiB = 0.5 MiB`, so `2048 ÷ 0.5 = 4096` files!",
          },
        },
        {
          title: "Writing an Unsimplified Exam Expression (Show-Your-Working Marks!)",
          problem: "A question asks for the size in **MiB** of a `4`-minute mono audio track sampled at `44,100 Hz` with `16`-bit resolution. Write the exact calculation and simplify where clean.",
          steps: [
            "First convert `4 minutes = 4 × 60 = 240 seconds` (a favourite CIE trap!).",
            "Write the complete CIE working expression first (this alone often earns `2–3` method marks!): `(44100 × 16 × 240) ÷ (8 × 1024 × 1024)` MiB.",
          ],
          answer: "`(44100 × 16 × 240) ÷ (8 × 1024 × 1024)` MiB",
        },
      ],
      keyPoints: [
        "`1 byte = 8 bits` (lowercase `b` = bit, uppercase `B` = Byte); `1 nibble = 4 bits`.",
        "IEC order from smallest to largest: **bit < nibble < Byte < KiB < MiB < GiB < TiB < PiB < EiB**.",
        "Convert **minutes to seconds (`× 60`)** and **`kHz` to `Hz` (`× 1000`)** before applying the sound formula!",
        "ALWAYS write the full `(numerator) ÷ (8 × 1024 …)` expression on your exam script to bank every method mark before cancelling.",
      ],
      whyItWorks:
        "Every factor of `2` corresponds to shifting binary digits by `1` bit, and {{1024 = 2^10}} corresponds to `10` address lines. Expressing every factor as powers of `2` reduces giant divisions to simple exponent subtraction!",
      strategies: [
        "Power-of-Two Cancellation: Rewrite `8 = 2³` and `1024 = 2¹⁰`, cancel `1024` against `512, 256, 128, 64, 32` first, and multiply only the tiny numbers left at the end.",
      ],
      thinkDeeper:
        "As you climb from `KiB` (`2¹⁰` vs `10³`: `2.4%` gap) to `TiB` (`2⁴⁰` vs `10¹²`: `10.0%` gap) and `EiB` (`2⁶⁰` vs `10¹⁸`: `15.3%` gap), why does the percentage difference between IEC and SI units keep growing at higher tiers?",
    },
    {
      id: "lossless-lossy-compression",
      heading: "Lossless (RLE) vs Lossy Compression",
      discovery: {
        problem:
          "You want to compress **(1)** a 4K holiday video for mobile streaming and **(2)** a Python hospital-dosage program `.py` file. Why would applying `MP4`/`JPEG`-style compression to the Python program crash it immediately, whereas it works brilliantly on the holiday video?",
        idea:
          "**Lossy** compression throws away slight pixel/audio variations human eyes and ears never miss — saving 80–95% of space — whereas deleting or altering **even a single character** in Python code, a spreadsheet, or a bank database corrupts its exact meaning, so those **must** use **lossless** compression!",
      },
      body: [
        "### Why Compress Data?",
        "1. **Smaller storage space** required on secondary storage / cloud servers.",
        "2. **Faster transmission** (shorter upload/download times over networks).",
        "3. **Less network bandwidth** consumed (prevents buffering when streaming and fits **email attachment limits**).",
        "",
        "### Lossless vs Lossy Compression",
        "| Feature | **Lossless Compression** | **Lossy Compression** |",
        "|---|---|---|",
        "| **Core Mechanism** | Identifies statistical / repeated patterns so **zero data is lost**; **100% identical original** is reconstructed when decompressed. | **Permanently deletes** unnecessary / perceptually redundant data that humans barely notice; original **cannot** be recovered. |",
        "| **File-Size Reduction** | Moderate (`~20%–60%` smaller). | **Dramatically smaller** (`~70%–95%` smaller than raw). |",
        "| **Algorithms / Techniques** | **Run-Length Encoding (RLE)** (`5A 3B 2C`) & **Dictionary coding** (replaces repeated words/phrases with short index tokens). | **`MP3` / `AAC`**: perceptual music shaping (removes frequencies outside `20 Hz–20 kHz` & quiet sounds masked by louder sounds). **`JPEG` / `MP4`**: reduces colour depth / chroma detail & merges near-identical pixel shades. |",
        "| **Best Used For** | **Source code, executables, text documents, spreadsheets, databases**, medical/archival images (`ZIP, PNG, FLAC`). | **Streaming music, streaming video, web photographs** where tiny quality drops are invisible (`MP3, AAC, JPEG, MP4`). |",
        "",
        "### How Run-Length Encoding (RLE) Works — and When It Fails!",
        "- **RLE** is a **lossless** algorithm that replaces consecutive runs of **identical** data values (characters, monochrome/indexed pixels, or identical audio samples) with a **`(frequency count, data value)`** pair.",
        "- Example text: `AAAAABBBCCCCCC` (`14` bytes at `1` B/char) → `5A 3B 6C` (`3` pairs × `2` bytes = **`6` bytes** — saves `8` bytes!).",
        "- **When RLE fails**: On non-repeating / alternating data like `ABABABAB` (`8` bytes), RLE encodes `1A 1B 1A 1B 1A 1B 1A 1B` = **`16` bytes** — doubling the file size!",
      ].join("\n"),
      diagram: svgRleCompression,
      diagramCaption:
        "Run-Length Encoding compresses consecutive identical runs into (count, value) pairs with zero loss of quality — ideal for icons, cartoons, and sparse bitmaps.",
      workedExamples: [
        {
          title: "Calculating RLE Byte Savings on a Pixel Grid",
          problem: "A `10 × 1` row of 8-bit (`1`-byte) pixels has colour codes `G G G G G W W W G G`. Each RLE pair stores `1` byte for the count and `1` byte for the colour code. Calculate **(a)** the raw size, **(b)** the RLE size, and **(c)** the bytes saved.",
          steps: [
            "(a) Raw size = `10 pixels × 1 byte = 10 bytes`.",
            "(b) Group consecutive identical runs carefully (notice the final `G G` is a **separate** run from the first five `G`s!): `(5, G)`, `(3, W)`, `(2, G)` = `3` runs × `2` bytes/pair = `6 bytes`.",
            "(c) Bytes saved = `10 − 6 = 4 bytes`.",
          ],
          answer: "(a) `10 bytes`   (b) `6 bytes`   (c) `4 bytes` saved",
          yourTurn: {
            question: "A `20`-character ASCII string `GGGGGGGGYYYYYYBBBBBB` (`1` byte per character) is compressed with RLE where each `(count, character)` pair takes `2` bytes. How many **bytes** does the RLE-compressed data occupy?",
            answer: { type: "number", value: 6 },
            solution: "There are `3` consecutive runs (`8G`, `6Y`, `6B`), and each `(count, char)` pair takes `2` bytes: `3 × 2 = 6` bytes (down from `20` bytes!).",
          },
        },
        {
          title: "How MP3 Lossy Compression Shrinks Audio (CIE 3-Mark Favourite)",
          problem: "Explain how `MP3` compression reduces the size of a music recording by up to `90%` without ruining the listener's experience.",
          steps: [
            "1. Identifies `MP3` as **lossy** compression that **permanently removes** sound data.",
            "2. Uses **perceptual music shaping**: removes frequencies **outside the human hearing range** (`< 20 Hz` or `> 20 kHz`).",
            "3. Uses **auditory masking**: removes **quieter sounds played at the same time as louder sounds** that the human ear cannot distinguish.",
          ],
          answer: "Lossy perceptual music shaping permanently deletes frequencies outside human hearing and quieter sounds masked by simultaneous louder sounds.",
        },
      ],
      keyPoints: [
        "**Lossless** = zero data permanently lost, exact original restored (`RLE`, dictionary coding, `PNG`, `ZIP`, `FLAC`). Mandatory for **text, code, spreadsheets**.",
        "**Lossy** = permanently removes redundant/imperceptible data (`MP3`, `JPEG`, `MP4`) → **much smaller files**, original **cannot** be restored.",
        "In **RLE**, ONLY **consecutive adjacent** identical items merge (`AAAA BB AA` has **three** runs `4A, 2B, 2A` — never combine separated `A`s into `6A`!).",
        "Know the CIE `MP3` buzzwords cold: **perceptual music shaping**, **outside human hearing range**, and **louder sounds masking quieter sounds**.",
      ],
      whyItWorks:
        "Real-world signals have huge **redundancy** — both *statistical redundancy* (long runs of white background pixels or repeated words like `'the'`, exploited losslessly) and *psychoacoustic/psychovisual redundancy* (frequencies/shades human biology cannot detect, exploited lossily).",
      strategies: [
        "Run-Boundary Slash Test: Draw a vertical slash `|` every time the symbol changes (`G G G G G | W W W | G G`) and count the sections (`2` slashes = `3` runs) so you never accidentally merge non-adjacent runs!",
      ],
      thinkDeeper:
        "If you open a `JPEG` photo, re-save it as a `JPEG` fifty times in a row, visible blocky 'generation loss' artefacts appear — yet zipping and unzipping a `.zip` folder fifty times changes zero bits. Why?",
    },
  ],
  learn: {
    flashcards: [
      { front: "What is a character set?", back: "A defined list of characters recognized by computer hardware and software, where **every character is mapped to a unique binary number**." },
      { front: "How many characters can 7-bit Standard ASCII, 8-bit Extended ASCII, and Unicode represent?", back: "7-bit ASCII: **`128`** (`2⁷`) · 8-bit Extended ASCII: **`256`** (`2⁸`) · Unicode (16/32-bit): **`65,536`** up to **`~4.3 billion`** (`2³²`)." },
      { front: "State one advantage and one disadvantage of Unicode compared to ASCII.", back: "**Advantage**: Represents all world languages, non-Latin scripts, and emojis. **Disadvantage**: Uses more bits per character (`16–32` bits vs `7–8` bits), increasing file size." },
      { front: "Define Sample Rate and Sample Resolution for digital sound.", back: "**Sample rate**: number of sound amplitude samples taken **per second** (`Hz`). **Sample resolution**: number of **bits used to store each sample**." },
      { front: "State the CIE formula for uncompressed sound file size in bits.", back: "`File size (bits) = Sample Rate (Hz) × Sample Resolution (bits) × Duration (s) × Channels` (`1` = mono, `2` = stereo)." },
      { front: "Define Image Resolution and Colour Depth for a bitmap image.", back: "**Image resolution**: pixel dimensions / total number of pixels (`Width × Height`). **Colour depth**: number of **bits used to represent the colour of each pixel** (`n` bits → `2ⁿ` colours)." },
      { front: "If a bitmap image uses `256` colours, what is its colour depth in bits?", back: "**`8` bits** per pixel (because {{2^8 = 256}} — never plug `256` into `Width × Height × Colour Depth`!)." },
      { front: "List the IEC binary storage units in ascending order from Byte to Exbibyte.", back: "`Byte` → **`KiB`** → **`MiB`** → **`GiB`** → **`TiB`** → **`PiB`** → **`EiB`** (multiplying by **`1024 = 2¹⁰`** at every step!)." },
      { front: "How do you convert bits to KiB and MiB on CIE `0478`?", back: "`Bits ÷ 8 = Bytes` → `Bytes ÷ 1024 = KiB` → `KiB ÷ 1024 = MiB` (**NEVER** divide by `1000` for `KiB`/`MiB`!)." },
      { front: "What is the key difference between Lossless and Lossy compression?", back: "**Lossless** reconstructs the **exact bit-for-bit original** with zero data lost; **Lossy** **permanently deletes** perceptually redundant data for a much smaller file." },
      { front: "Why MUST lossless compression be used for computer programs and text documents?", back: "Deleting even a single bit/character corrupts syntax, instructions, or numbers, making code unrunnable or text inaccurate." },
      { front: "How does Run-Length Encoding (RLE) compress data?", back: "RLE is a **lossless** algorithm that replaces **consecutive identical runs** of values with **`(count, value)`** pairs (e.g. `AAAAA BBB` → `5A 3B`)." },
      { front: "How does `MP3` lossy compression shrink audio files?", back: "**Perceptual music shaping** permanently removes frequencies **outside human hearing** (`20 Hz–20 kHz`) and **quieter sounds masked by simultaneous louder sounds**." },
      { front: "What is image metadata?", back: "Extra data stored alongside pixel data (e.g. **width, height, colour depth**, file format, date, camera settings) so software can render the image properly." },
    ],
    mustKnow: [
      "Compare 7-bit/8-bit ASCII and 16/32-bit Unicode in terms of bits per character, character count, language/emoji coverage, and storage overhead.",
      "Deduce consecutive ASCII character codes (e.g. given `'A' = 65`, find `'D' = 68 = 01000100`).",
      "Explain how an ADC samples analogue sound waves, defining sample rate (`Hz`) and sample resolution (bits/sample) accurately.",
      "Explain how bitmap images store pixels, defining image resolution (`W × H`) and colour depth (bits/pixel, `2ⁿ` colours).",
      "Convert number of colours (`2, 4, 8, 16, 32, 64, 128, 256, 65536`) into bits per pixel BEFORE calculating bitmap file size.",
      "Calculate exact uncompressed text, sound, and bitmap file sizes in bits, bytes, `KiB`, and `MiB` using **`1024`** without a calculator.",
      "Contrast IEC binary units (`KiB..EiB`, powers of `1024`) with SI decimal units (`kB..EB`, powers of `1000`).",
      "Explain why and when to choose lossless (`RLE`, dictionary coding, `PNG`, `ZIP`) vs lossy (`MP3`, `JPEG`, `MP4`) compression.",
      "Encode and calculate exact byte savings for Run-Length Encoding (`RLE`) on character strings and pixel grids.",
    ],
    misconceptions: [
      {
        wrong: "❌ Never write: '`KiB = Bytes ÷ 1000` and `MiB = KiB ÷ 1000`.'",
        right: "✅ Write instead: 'On CIE `0478`, IEC units `KiB, MiB, GiB, TiB` ALWAYS use **`1024`** (`2¹⁰`): `Bytes ÷ 1024 = KiB` and `KiB ÷ 1024 = MiB` (`1000` is only for SI `kB`/`MB`).'",
      },
      {
        wrong: "❌ Never write: 'A `100 × 100` image with `256` colours has size `100 × 100 × 256` bits.'",
        right: "✅ Write instead: 'Convert `256` colours to colour depth first: `2⁸ = 256` → **`8` bits per pixel**, so size is `100 × 100 × 8` bits (`10,000` bytes)!'",
      },
      {
        wrong: "❌ Never write: 'Sample rate is the number of bits per second.'",
        right: "✅ Write instead: 'Sample rate is the number of **samples taken per second (`Hz`)**; sample resolution is the **number of bits per sample**.'",
      },
      {
        wrong: "❌ Never write: 'Run-Length Encoding compresses `AAABBBAAAA` into `7A 3B`.'",
        right: "✅ Write instead: 'RLE only groups **consecutive** identical runs, so `AAABBBAAAA` encodes as **`3A 3B 4A`** (three pairs, never merging separated runs!).'",
      },
      {
        wrong: "❌ Never write: 'Lossy compression makes files unusable / blurry garbage.'",
        right: "✅ Write instead: 'Lossy compression permanently removes **perceptually redundant** data humans barely notice (e.g. masked sounds in `MP3`), achieving much smaller files with minimal noticeable quality loss.'",
      },
      {
        wrong: "❌ Never write: 'Unicode uses fewer bits than ASCII.'",
        right: "✅ Write instead: 'Unicode uses **more** bits per character (`16` or `32` bits vs `7` or `8` bits in ASCII) so it can represent world languages and emojis.'",
      },
      {
        wrong: "❌ Never write: 'Forget to multiply by `60` for minutes or by `2` for stereo audio!'",
        right: "✅ Write instead: 'Always convert minutes → seconds (`× 60`), `kHz` → `Hz` (`× 1000`), and multiply by `2` channels whenever **stereo** is stated.'",
      },
    ],
    examMistakes: [
      "Dividing by `1000` instead of `1024` when converting bytes to `KiB` or `MiB`.",
      "Forgetting to divide bits by `8` to reach bytes before dividing by `1024` (`Bits → ÷ 8 → Bytes → ÷ 1024 → KiB`).",
      "Plugging the **number of colours** (e.g. `16` or `256`) into the bitmap formula instead of the **colour depth in bits** (`4` or `8` bits).",
      "Multiplying out giant 8-digit numerators by hand and making arithmetic slips instead of writing the fraction and cancelling factors of `8` and `1024` first.",
      "Leaving duration in **minutes** instead of multiplying by `60` to get seconds in sound calculations.",
      "Recommending lossy compression (`JPEG`/`MP3` logic) for a database, spreadsheet, or Python source file — any permanent bit deletion breaks text/code!",
      "Saying RLE always reduces file size — on alternating data with no runs (`ABABAB`), RLE actually **increases** file size!",
    ],
    mnemonics: [
      {
        topic: "IEC Storage Unit Order (KiB → EiB)",
        device: "King Milo Gave Tara Pure Energy → KiB, MiB, GiB, TiB, PiB, EiB",
        explanation: "Every step up divides by `1024` (`2¹⁰`); don't forget `÷ 8` from bits to Bytes first!",
      },
      {
        topic: "Sound File-Size Formula",
        device: "Some Rabbits Run Swiftly, Champ! → Sample Rate × Resolution × Seconds × Channels",
        explanation: "Result is in **bits** — divide by `8` for Bytes, then by `1024` for `KiB`.",
      },
      {
        topic: "Colours vs Colour Depth",
        device: "2^Depth = Colours (`2⁸ = 256` → Depth is the EXPONENT `8`, never `256`!)",
        explanation: "Count powers of 2 on your fingers (`2, 4, 8, 16, 32, 64, 128, 256` → 8 fingers = 8 bits).",
      },
    ],
    realWorld: [
      {
        emoji: "🌍",
        title: "Emojis & WhatsApp Messages (Unicode)",
        detail: "Every emoji from 😂 (`U+1F602`) to 🇸🇬 (`U+1F1F8 U+1F1EC`) is a standardised Unicode code point so iPhones, Androids, and laptops worldwide agree on the exact symbol.",
      },
      {
        emoji: "🎵",
        title: "Spotify & Apple Music (`AAC` / `MP3` vs `FLAC`)",
        detail: "Uncompressed stereo CD audio (`44,100 Hz × 16-bit × 2`) consumes ~`10 MiB` per minute; lossless `FLAC` halves that to ~`5 MiB/min`, while lossy `AAC`/`MP3` shrinks it to ~`1 MiB/min` using psychoacoustic masking.",
      },
      {
        emoji: "📷",
        title: "Smartphone `JPEG` / `HEIC` vs `RAW`",
        detail: "A `12`-megapixel `24`-bit raw sensor capture takes `36 MB` (`12,000,000 × 3` bytes), whereas lossy `JPEG` shrinks it to `2–3 MB` so thousands of photos fit on your phone.",
      },
      {
        emoji: "📠",
        title: "Fax Machines & Retro Game Sprites (`RLE`)",
        detail: "Black-and-white scanned pages are 90% long horizontal runs of white pixels, letting Run-Length Encoding shrink page scans dramatically with zero loss of text sharpness.",
      },
      {
        emoji: "💾",
        title: "Why Your '500 GB' SSD Shows '465 GiB'",
        detail: "Storage manufacturers label `500 × 10⁹` bytes (`500 GB` SI), which Windows divides by `1024³` (`1,073,741,824`) to report `465.66 GiB`!",
      },
    ],
    videos: [
      {
        title: "CIE IGCSE CS 0478 — ASCII & Unicode Character Sets",
        channel: "Craig'n'Dave",
        url: "https://www.youtube.com/results?search_query=craig+n+dave+igcse+0478+ascii+unicode+character+sets",
      },
      {
        title: "IGCSE Computer Science 0478 — Sound Sampling & Bitmap Image Calculations",
        channel: "Craig'n'Dave",
        url: "https://www.youtube.com/results?search_query=craig+n+dave+igcse+0478+sound+sampling+bitmap+images+file+size",
      },
      {
        title: "CIE 0478 — Data Storage Units (KiB, MiB, GiB & 1024 Non-Calculator Maths)",
        channel: "Cambridge CS Tutorials",
        url: "https://www.youtube.com/results?search_query=igcse+0478+data+storage+kib+mib+gib+1024+file+size",
      },
      {
        title: "Lossless (Run-Length Encoding RLE) vs Lossy Compression (CIE 0478)",
        channel: "Mr Bulmer's Learning Zone",
        url: "https://www.youtube.com/results?search_query=igcse+0478+lossless+lossy+compression+run+length+encoding+rle",
      },
    ],
    formulas: [
      { name: "Character Set Capacities", formula: "7-bit ASCII: {{2^7}} = 128 · 8-bit ASCII: {{2^8}} = 256 · 16-bit Unicode: {{2^16}} = 65536", note: "32-bit Unicode supports 2³² ≈ 4.3 billion characters" },
      { name: "Colour Depth ↔ Max Colours", formula: "Max Colours = {{2^n}} where n = colour depth (bits/pixel)", note: "256 colours → 8 bits; 16 colours → 4 bits; True Colour → 24 bits" },
      { name: "Bitmap Image Size (KiB)", formula: "KiB = {{(Width * Height * Depth) / (8 * 1024)}}", note: "Divide again by 1024 for MiB; ignore metadata unless given" },
      { name: "Sound File Size (KiB)", formula: "KiB = {{(Rate * Resolution * Seconds * Channels) / (8 * 1024)}}", note: "Mono = 1 channel, Stereo = 2 channels; convert minutes × 60 and kHz × 1000!" },
      { name: "IEC Binary Unit Steps", formula: "8 bits = 1 B · 1024 B = 1 KiB · 1024 KiB = 1 MiB · 1024 MiB = 1 GiB · 1024 GiB = 1 TiB", note: "Continues 1024 TiB = 1 PiB, 1024 PiB = 1 EiB" },
      { name: "SI Decimal Unit Contrast", formula: "1 kB = 1000 B · 1 MB = 1000 kB · 1 GB = 1000 MB", note: "Exam Trap: NEVER use 1000 when CIE asks for KiB / MiB / GiB!" },
      { name: "1024 Factor Pairs (Mental Maths)", formula: "1024 = 512 × 2 = 256 × 4 = 128 × 8 = 64 × 16 = 32 × 32", note: "Cancel factors of 2 before multiplying!" },
      { name: "RLE Compressed Size", formula: "RLE Bytes = Number of consecutive runs × Bytes per (count, value) pair", note: "Only merge ADJACENT identical items; alternating data can grow larger!" },
      { name: "Lossless vs Lossy Rule", formula: "Code / Text / Spreadsheets → MUST be Lossless · Streaming Audio / Video / Photos → Lossy", note: "MP3 uses perceptual music shaping; JPEG merges similar pixel shades" },
    ],
  },
};
