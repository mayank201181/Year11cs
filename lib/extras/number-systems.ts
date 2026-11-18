import type { TopicExtras } from "../types.ts";

const clockRingSvg = [
  '<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="8-bit Twos Complement modular number wheel showing wrap-around at +127 and -128 and at 0 and -1">',
  '<rect x="6" y="6" width="508" height="218" rx="16" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>',
  '<text x="150" y="28" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">The 8-Bit Two&apos;s Complement Odometer Wheel</text>',
  '<circle cx="150" cy="126" r="76" fill="var(--surface)" stroke="var(--brand)" stroke-width="3"/>',
  // Top boundary 0 / -1
  '<line x1="150" y1="42" x2="150" y2="58" stroke="var(--ink)" stroke-width="2.5"/>',
  '<text x="176" y="46" font-size="10" font-weight="800" fill="var(--good)">00000000 (0)</text>',
  '<text x="64" y="46" font-size="10" font-weight="800" fill="var(--bad)">11111111 (−1)</text>',
  // Right +64
  '<text x="234" y="130" font-size="10" font-weight="700" fill="var(--good)">01000000 (+64)</text>',
  // Left -64
  '<text x="16" y="130" font-size="10" font-weight="700" fill="var(--bad)">11000000 (−64)</text>',
  // Bottom boundary +127 / -128 (signed overflow cliff!)
  '<line x1="150" y1="194" x2="150" y2="210" stroke="var(--bad)" stroke-width="3"/>',
  '<text x="162" y="215" font-size="10" font-weight="800" fill="var(--good)">01111111 (+127)</text>',
  '<text x="48" y="215" font-size="10" font-weight="800" fill="var(--bad)">10000000 (−128)</text>',
  '<text x="150" y="122" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">+1 clockwise</text>',
  '<text x="150" y="138" text-anchor="middle" font-size="10" fill="var(--ink-2)">256 states total</text>',
  // Explanation card on right
  '<rect x="318" y="34" width="182" height="172" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>',
  '<text x="330" y="58" font-size="11" font-weight="800" fill="var(--brand)">Why the Wheel Explains All:</text>',
  '<text x="330" y="80" font-size="10.5" fill="var(--ink)">• Top seam: −1 + 1 wraps</text>',
  '<text x="330" y="95" font-size="10.5" fill="var(--ink)">  from 11111111 to 00000000!</text>',
  '<text x="330" y="118" font-size="10.5" fill="var(--ink)">• Right half: MSB = 0</text>',
  '<text x="330" y="133" font-size="10.5" fill="var(--good)">  (0 up to +127)</text>',
  '<text x="330" y="156" font-size="10.5" fill="var(--ink)">• Bottom cliff: +127 + 1</text>',
  '<text x="330" y="171" font-size="10.5" fill="var(--bad)">  wraps into −128 (overflow!)</text>',
  '<text x="330" y="194" font-size="10" fill="var(--ink-2)">Zero exists ONLY once.</text>',
  '</svg>',
].join("");

const rgbHexSvg = [
  '<svg viewBox="0 0 520 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="24-bit HTML colour code #22D3EE unpacked into three 8-bit RGB bytes">',
  '<rect x="6" y="6" width="508" height="173" rx="16" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>',
  '<text x="260" y="28" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Inside a 24-Bit HTML Hex Colour Code: #22D3EE</text>',
  '<rect x="24" y="44" width="118" height="116" rx="12" fill="#22D3EE" stroke="var(--ink)" stroke-width="1.5"/>',
  '<text x="83" y="100" text-anchor="middle" font-size="15" font-weight="800" fill="#0e1020">#22D3EE</text>',
  '<text x="83" y="120" text-anchor="middle" font-size="10" font-weight="700" fill="#0e1020">24 bits (3 bytes)</text>',
  // Red channel
  '<rect x="158" y="44" width="108" height="116" rx="10" fill="var(--surface)" stroke="#ef4444" stroke-width="2"/>',
  '<text x="212" y="64" text-anchor="middle" font-size="11" font-weight="800" fill="#ef4444">RED (Byte 1)</text>',
  '<text x="212" y="92" text-anchor="middle" font-size="20" font-weight="800" fill="var(--ink)">22₁₆</text>',
  '<text x="212" y="116" text-anchor="middle" font-size="11" font-family="monospace" fill="var(--ink-2)">0010 0010₂</text>',
  '<text x="212" y="140" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">34 / 255</text>',
  // Green channel
  '<rect x="276" y="44" width="108" height="116" rx="10" fill="var(--surface)" stroke="#22c55e" stroke-width="2"/>',
  '<text x="330" y="64" text-anchor="middle" font-size="11" font-weight="800" fill="#16a34a">GREEN (Byte 2)</text>',
  '<text x="330" y="92" text-anchor="middle" font-size="20" font-weight="800" fill="var(--ink)">D3₁₆</text>',
  '<text x="330" y="116" text-anchor="middle" font-size="11" font-family="monospace" fill="var(--ink-2)">1101 0011₂</text>',
  '<text x="330" y="140" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">211 / 255</text>',
  // Blue channel
  '<rect x="394" y="44" width="108" height="116" rx="10" fill="var(--surface)" stroke="#3b82f6" stroke-width="2"/>',
  '<text x="448" y="64" text-anchor="middle" font-size="11" font-weight="800" fill="#2563eb">BLUE (Byte 3)</text>',
  '<text x="448" y="92" text-anchor="middle" font-size="20" font-weight="800" fill="var(--ink)">EE₁₆</text>',
  '<text x="448" y="116" text-anchor="middle" font-size="11" font-family="monospace" fill="var(--ink-2)">1110 1110₂</text>',
  '<text x="448" y="140" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">238 / 255</text>',
  '</svg>',
].join("");

export const extras: TopicExtras = {
  hook:
    "Why did YouTube's view counter freeze on Psy's 'Gangnam Style' at 2,147,483,647 views, and why did Pac-Man explode into gibberish on Level 256? Both bugs come straight out of fixed-width binary registers!",
  didYouKnow: [
    "YouTube originally stored video views in a **32-bit signed Two's Complement integer**, whose maximum positive value is {{2^31 - 1}} = `2,147,483,647`. When 'Gangnam Style' passed two billion views in 2014, engineers had to upgrade the counter to 64-bit signed integers (`max ~9.22 × 10¹⁸`)!",
    "Half a byte (`4` bits) is officially called a **nibble** (sometimes spelled *nybble* as a pun on *byte*) — coined by computing pioneers in the late 1950s so one hex digit had its own bite-sized name.",
    "In 2038 (`03:14:07 UTC` on 19 January 2038), legacy 32-bit Unix clocks counting seconds since 1 January 1970 will hit `01111111 11111111 11111111 11111111₂` and wrap to `−2,147,483,648` (December 1901) unless upgraded to 64-bit time!",
    "In the original *Civilization* strategy game legend, a peaceful leader's aggression score of `1` stored in an unsigned 8-bit variable allegedly had `2` subtracted from it, underflowing modulo `256` to `255` (`11111111₂`)!",
    "Every CSS hex colour like `#FFFFFF` can express `256 × 256 × 256` = **16,777,216** ({{2^24}}) distinct shades using just six hexadecimal characters.",
  ],
  activities: [
    {
      title: "One-Hand 5-Bit Binary Finger Counter (`0` to `31`)",
      emoji: "🖐️",
      materials: ["Just your 5 fingers on one hand (or 10 fingers for `0` to `1023`!)"],
      steps: [
        "Assign weights from right-to-left: Thumb = `1`, Index = `2`, Middle = `4`, Ring = `8`, Pinky = `16`.",
        "Start with a closed fist (`00000₂ = 0`) and count upward by raising fingers matching each binary pattern (`1` = Thumb, `2` = Index, `3` = Index+Thumb, `4` = Middle…).",
        "Race a classmate to flash denary targets like `19` (`10011₂`), `26` (`11010₂`), and `31` (`11111₂`), then use both hands (`10` bits) to count all the way to `1023`!",
      ],
      maths:
        "Five fingers behave like a 5-bit unsigned register (`2⁵ = 32` states, `0..31`), while ten fingers reach `2¹⁰ − 1 = 1023` — over a hundred times higher than counting in unary!",
    },
    {
      title: "Paper Cup Register Shift & Overflow Simulator",
      emoji: "🥤",
      materials: ["8 paper cups in a row", "A marker pen", "10 ping-pong balls labelled `0` and `1`"],
      steps: [
        "Label the 8 cups `128, 64, 32, 16, 8, 4, 2, 1` (and stick a flip-down flap on the `128` cup saying `−128` for Two's Complement!).",
        "Load `00110101` (`53`), then physically slide every ball 2 cups left while pushing the leftmost 2 balls off the table and dropping fresh `0` balls into the empty right cups (`11010100` = `212`).",
        "Shift 1 more cup left: watch the `128` ball hit the floor (`10101000` = `168` instead of `424`) — tangible proof of MSB left-shift overflow!",
      ],
      maths:
        "Fixed-width CPU registers cannot stretch when a calculation grows; shifting or carrying past cup 8 physically discards the {{2^8 = 256}} place value.",
    },
  ],
  bonusDiagrams: [
    {
      title: "The 8-Bit Two's Complement Odometer Wheel",
      svg: clockRingSvg,
      caption:
        "Visualising all 256 8-bit patterns around a modular circle shows instantly why 11111111 is −1 (one step anticlockwise from 0) and why +127 + 1 crosses the bottom seam into −128.",
    },
    {
      title: "Unpacking `#RRGGBB` Hex Colour Bytes",
      svg: rgbHexSvg,
      caption:
        "Six hexadecimal digits pack three 8-bit unsigned colour channels cleanly into 24 bits.",
    },
  ],
  history: {
    title: "Gottfried Wilhelm Leibniz, Claude Shannon & How Switches Became Numbers",
    story:
      "In 1703 the German mathematician **Gottfried Wilhelm Leibniz** published *Explication de l'Arithmétique Binaire*, showing that every integer could be written using only `0` and `1` — inspired in part by the 64 six-line hexagrams (`2⁶`) of the ancient Chinese *I Ching*. More than two centuries later, in his landmark 1937 MIT master's thesis, 21-year-old **Claude Shannon** proved that electromechanical telephone relay switches wired in series and parallel could execute Boolean algebra and binary addition directly at electronic speed. In 1945 **John von Neumann's** *First Draft of a Report on the EDVAC* cemented **binary Two's Complement** arithmetic over bulky base-10 vacuum tubes because a single binary adder could add and subtract signed numbers without special sign circuitry — the exact architecture still running inside your laptop and phone today.",
  },
};
