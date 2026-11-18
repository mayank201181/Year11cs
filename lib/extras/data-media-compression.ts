import type { TopicExtras } from "../types.ts";

const psychoacousticSvg = [
  '<svg viewBox="0 0 520 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="MP3 psychoacoustic perceptual music shaping discarding ultrasonic frequencies above 20 kHz and quiet sounds masked by loud sounds">',
  '<rect x="6" y="6" width="508" height="193" rx="16" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>',
  '<text x="260" y="28" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Inside MP3 Lossy Perceptual Music Shaping</text>',
  // Axes
  '<line x1="54" y1="44" x2="54" y2="162" stroke="var(--ink)" stroke-width="2"/>',
  '<line x1="54" y1="162" x2="494" y2="162" stroke="var(--ink)" stroke-width="2"/>',
  // Cutoff zone > 20 kHz
  '<rect x="382" y="44" width="108" height="118" fill="var(--bad-soft)" stroke="var(--bad)" stroke-dasharray="4 3"/>',
  '<text x="436" y="64" text-anchor="middle" font-size="10" font-weight="800" fill="var(--bad)">&gt; 20 kHz</text>',
  '<text x="436" y="79" text-anchor="middle" font-size="9.5" fill="var(--bad)">INAUDIBLE</text>',
  '<text x="436" y="94" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--bad)">DELETED!</text>',
  // Loud spike + masking umbrella
  '<rect x="176" y="54" width="22" height="108" rx="4" fill="var(--good)"/>',
  '<text x="187" y="49" text-anchor="middle" font-size="10" font-weight="800" fill="var(--good)">Loud Drum</text>',
  '<path d="M 120 162 Q 187 68 270 162" fill="none" stroke="var(--warn)" stroke-width="2.5" stroke-dasharray="5 3"/>',
  // Quiet masked bar
  '<rect x="216" y="122" width="18" height="40" rx="3" fill="var(--bad)"/>',
  '<text x="278" y="128" font-size="10" font-weight="800" fill="var(--bad)">◀ Masked Quiet Flute (DELETED!)</text>',
  // Kept audible bars
  '<rect x="86" y="88" width="18" height="74" rx="3" fill="var(--brand)"/>',
  '<rect x="318" y="78" width="18" height="84" rx="3" fill="var(--brand)"/>',
  '<text x="274" y="184" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Frequency (20 Hz ── Human Hearing Range ── 20 kHz) → Saves ~90% File Size</text>',
  '</svg>',
].join("");

const utf8VariableSvg = [
  '<svg viewBox="0 0 520 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Unicode code points from 1-byte ASCII letter A up to 4-byte rocket emoji">',
  '<rect x="6" y="6" width="508" height="163" rx="16" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>',
  '<text x="260" y="28" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">How UTF-8 Scales Unicode Smoothly from 1 to 4 Bytes</text>',
  '<rect x="20" y="44" width="150" height="108" rx="10" fill="var(--surface)" stroke="var(--good)" stroke-width="2"/>',
  '<text x="95" y="68" text-anchor="middle" font-size="12" font-weight="800" fill="var(--good)">&apos;A&apos; (U+0041)</text>',
  '<text x="95" y="96" text-anchor="middle" font-size="13" font-family="monospace" fill="var(--ink)">01000001</text>',
  '<text x="95" y="124" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">1 Byte (ASCII twin!)</text>',
  '<rect x="185" y="44" width="150" height="108" rx="10" fill="var(--surface)" stroke="var(--brand)" stroke-width="2"/>',
  '<text x="260" y="68" text-anchor="middle" font-size="12" font-weight="800" fill="var(--brand)">&apos;中&apos; (U+4E2D)</text>',
  '<text x="260" y="96" text-anchor="middle" font-size="12" font-family="monospace" fill="var(--ink)">E4 B8 AD₁₆</text>',
  '<text x="260" y="124" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">3 Bytes (24 bits)</text>',
  '<rect x="350" y="44" width="150" height="108" rx="10" fill="var(--surface)" stroke="var(--accent)" stroke-width="2"/>',
  '<text x="425" y="68" text-anchor="middle" font-size="12" font-weight="800" fill="var(--warn)">🚀 (U+1F680)</text>',
  '<text x="425" y="96" text-anchor="middle" font-size="12" font-family="monospace" fill="var(--ink)">F0 9F 9A 80₁₆</text>',
  '<text x="425" y="124" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink-2)">4 Bytes (32 bits)</text>',
  '</svg>',
].join("");

export const extras: TopicExtras = {
  hook:
    "How did Karlheinz Brandenburg's team shrink Suzanne Vega's solo vocal track 'Tom's Diner' to one-twelfth of its CD size without listeners noticing — inventing `MP3` and changing music history forever?",
  didYouKnow: [
    "Why lowercase `'a'` (`97` = `01100001₂`) is `32` above uppercase `'A'` (`65` = `01000001₂`): in 1963 the ASCII committee deliberately placed them `32` (`2⁵`) apart so vintage teletypes could toggle case by flipping **a single bit** instead of running subtraction circuitry!",
    "The first `176 × 144` emoji set was created in 1999 by **Shigetaka Kurita** for Japanese mobile carrier NTT DoCoMo using tiny `12 × 12` `1`-bit monochrome bitmaps (`18` bytes per emoji!) — before being unified into **Unicode 6.0** in 2010.",
    "In 1998 the **International Electrotechnical Commission (IEC)** introduced `KiB`, `MiB`, `GiB`, and `TiB` specifically to end the chaos between memory chip engineers (`1024`) and hard-drive marketers (`1000`).",
    "`PNG` (*Portable Network Graphics*) was invented in 1995 as a patent-free **lossless** replacement for `GIF`, removing `GIF`'s `8`-bit (`256`-colour) ceiling to support full `24`-bit RGB plus an `8`-bit transparency channel (`32` bits/pixel).",
    "Human eyes have roughly **twice as many brightness-sensing rod cells** and far sharper sensitivity to brightness (*luminance*) than to subtle colour tint shifts (*chrominance*) — which is how lossy `JPEG` throws away half to three-quarters of colour resolution before you notice a thing!",
  ],
  activities: [
    {
      title: "Graph-Paper 8×8 Sprite & RLE Compression Race",
      emoji: "🏁",
      materials: ["Squared paper", "3 coloured pens (`W` white, `B` blue, `R` red)"],
      steps: [
        "Draw an `8 × 8` pixel icon (`64` bytes at `1` byte/pixel) — first a simple smiley face, and second an alternating `W/B` chessboard.",
        "Encode every row of both grids using `2`-byte `(count, colour)` RLE pairs and total up the compressed bytes.",
        "Compare your two compression ratios: watch the smiley face shrink below `40` bytes while the chessboard balloons to `128` bytes!",
      ],
      maths:
        "RLE shrinks a row of width `W` whenever the number of consecutive runs `r` satisfies `2r < W` (`r < W/2`); when every adjacent pixel changes (`r = W`), `2W` bytes doubles the size!",
    },
    {
      title: "Secret Bit-5 ASCII Case-Flipper",
      emoji: "🔤",
      materials: ["Scrap paper"],
      steps: [
        "Write your first name in 8-bit ASCII starting from `'A' = 65` (`01000001`) for uppercase and `'a' = 97` (`01100001`) for lowercase.",
        "Toggle **only the 3rd bit from the left** (the `32`s column) on every letter and hand the binary message to a partner to decode.",
      ],
      maths:
        "Because `97 − 65 = 32 = 2⁵`, XOR-ing any ASCII letter byte with `00100000₂` swaps `UPPERCASE ↔ lowercase` in a single logic operation!",
    },
  ],
  bonusDiagrams: [
    {
      title: "MP3 Perceptual Music Shaping & Auditory Masking",
      svg: psychoacousticSvg,
      caption:
        "MP3 permanently discards frequencies above 20 kHz and quiet sounds hidden underneath louder simultaneous instruments.",
    },
    {
      title: "Variable-Width UTF-8 Unicode in Action",
      svg: utf8VariableSvg,
      caption:
        "UTF-8 keeps 1-byte compatibility with ASCII while expanding up to 4 bytes (32 bits) for global scripts and emojis.",
    },
  ],
  history: {
    title: "'Tom's Diner' & The Birth of MP3 Psychoacoustics",
    story:
      "In the late 1980s at Germany's Fraunhofer Institute, audio engineer **Karlheinz Brandenburg** was trying to squeeze studio-quality CD audio (`1,411 kilobits per second`) down a narrow `128 kbps` ISDN telephone line — a `12×` reduction that lossless compression could never touch. Brandenburg realised that instead of compressing raw numbers blindly, the encoder had to model the **human inner ear** (*psychoacoustics*): if a loud snare drum hits at the same instant as a soft flute note of a nearby pitch, hair cells on the cochlea physically cannot detect the flute! Whenever Brandenburg thought his algorithm was finished, he tested it on an unaccompanied *a cappella* recording of **Suzanne Vega's 'Tom's Diner'** — whose pure, unmasked human voice exposed every tiny quantisation warble until he tuned perceptual music shaping to perfection, giving the world the `.mp3` standard in 1993.",
  },
};
