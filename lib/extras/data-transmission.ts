import type { TopicExtras } from "../types.ts";

const SVG_DATA_SKEW =
  '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing how 8 parallel bits leave aligned at t=0 but arrive staggered due to data skew over a long cable">' +
  '<rect x="8" y="8" width="544" height="204" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="280" y="28" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Why Parallel Cables Fail Over Distance: Data Skew Visualised</text>' +
  '<line x1="90" y1="42" x2="90" y2="192" stroke="var(--good)" stroke-width="2" stroke-dasharray="4 3"/>' +
  '<text x="90" y="204" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">Sent Aligned (t = 0)</text>' +
  '<line x1="450" y1="42" x2="450" y2="192" stroke="var(--bad)" stroke-width="2" stroke-dasharray="4 3"/>' +
  '<text x="450" y="204" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">Receiver Sample Clock</text>' +
  '<line x1="90" y1="62" x2="490" y2="62" stroke="var(--line)" stroke-width="2"/>' +
  '<line x1="90" y1="98" x2="490" y2="98" stroke="var(--line)" stroke-width="2"/>' +
  '<line x1="90" y1="134" x2="490" y2="134" stroke="var(--line)" stroke-width="2"/>' +
  '<line x1="90" y1="170" x2="490" y2="170" stroke="var(--line)" stroke-width="2"/>' +
  '<rect x="78" y="50" width="24" height="24" rx="5" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.5"/>' +
  '<text x="90" y="66" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">1</text>' +
  '<rect x="78" y="86" width="24" height="24" rx="5" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.5"/>' +
  '<text x="90" y="102" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">0</text>' +
  '<rect x="78" y="122" width="24" height="24" rx="5" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.5"/>' +
  '<text x="90" y="138" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">1</text>' +
  '<rect x="78" y="158" width="24" height="24" rx="5" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.5"/>' +
  '<text x="90" y="174" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">1</text>' +
  '<rect x="438" y="50" width="24" height="24" rx="5" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>' +
  '<text x="450" y="66" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">1</text>' +
  '<rect x="406" y="86" width="24" height="24" rx="5" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="2"/>' +
  '<text x="418" y="102" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">0</text>' +
  '<text x="360" y="92" font-size="9" fill="var(--bad)">Lagging wire!</text>' +
  '<rect x="464" y="122" width="24" height="24" rx="5" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="2"/>' +
  '<text x="476" y="138" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">1</text>' +
  '<text x="360" y="128" font-size="9" fill="var(--bad)">Early wire!</text>' +
  '<rect x="438" y="158" width="24" height="24" rx="5" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.5"/>' +
  '<text x="450" y="174" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">1</text>' +
  '</svg>';

export const extras: TopicExtras = {
  hook:
    "Right now, loading a single web page chops data into dozens of ~64 KiB packets that race across rival continents and undersea cables — arriving totally scrambled — yet your device stitches every byte back into crystal-clear order in milliseconds!",
  didYouKnow: [
    "Why is **Serial** USB 4 (`40 Gbit/s`) thousands of times faster than old `25`-pin **Parallel** printer cables (`~12 Mbit/s`)? Eliminating inter-wire **data skew** allowed engineers to crank serial clock speeds into the gigahertz range!",
    "The original USB logo (a trident with a circle, triangle, and square) was inspired by Poseidon's trident — symbolising one universal cable wielding power and serial data for every peripheral.",
    "NASA's Voyager spacecraft (`24+` billion km away!) cannot rely on ARQ for quick resends because a single radio round-trip takes over `44` hours — instead it uses deep forward error-correcting codes related to multi-dimensional parity!",
    "Every book published globally since `2007` starts its **ISBN-13** with `978` or `979` ('Bookland'), using the `×1, ×3` Modulo-10 check digit so library and till scanners reject misread barcodes instantly.",
    "Packet switching was independently invented in the `1960s` by **Donald Davies** at the UK's National Physical Laboratory (who coined the word *packet*!) and **Paul Baran** in the US to build networks that survive damaged nodes.",
  ],
  activities: [
    {
      title: "The Kitchen-Table 6×6 Coin Parity Magic Trick",
      emoji: "🪙",
      materials: ["36 coins (or reversible counters)", "A volunteer who tries to stump you"],
      steps: [
        "Ask your volunteer to lay out a `5 × 5` square of coins randomly as Heads (`1`) and Tails (`0`).",
        "Casually 'neaten' the grid by adding a `6`th column on the right and a `6`th row along the bottom so every row and every column has an **even** number of Heads.",
        "Turn your back and ask your volunteer to flip **any single coin** anywhere in the `6 × 6` grid.",
        "Turn back around, silently count Heads across each row and down each column, and point straight at the exact flipped coin at `(odd row, odd column)`!",
      ],
      maths:
        "You just acted as a live **2D Even Parity Block** receiver! Flipping one bit toggles `1 ↔ 0`, changing the `1`-count by `±1` in exactly one horizontal byte and one vertical column.",
    },
    {
      title: "ISBN-13 Bookcase Detective",
      emoji: "📚",
      materials: ["Any 3 textbooks or novels with a 13-digit barcode on the back cover", "Pen and scrap paper (no calculator — CIE Paper 1 style!)"],
      steps: [
        "Cover up the `13`th (final) digit on the back of a book with your thumb.",
        "Add the `6` odd-positioned digits (`1st, 3rd, 5th, 7th, 9th, 11th`).",
        "Add the `6` even-positioned digits (`2nd, 4th, 6th, 8th, 10th, 12th`), multiply that sum by `3`, and add to your odd sum.",
        "Find the remainder modulo `10`, compute `10 − remainder` (or `0` if remainder is `0`), lift your thumb, and watch it match the printed check digit every time!",
      ],
      maths:
        "Next, test swapping two adjacent unequal digits in your head (like `4` and `7` → `7` and `4`): notice the weighted total shifts by `2 × (7 − 4) = 6`, breaking `MOD 10` and catching the **transposition error**!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Visualising Data Skew on a Parallel Ribbon Cable",
      svg: SVG_DATA_SKEW,
      caption:
        "Even though bits 1, 0, 1, 1 leave the transmitter perfectly aligned at t = 0, tiny differences in wire resistance and capacitance cause Wire 2 to lag and Wire 3 to arrive early — scrambling bytes when sampled at high clock speeds.",
    },
  ],
  history: {
    title: "Donald Davies & The Birth of the 'Packet' (1965)",
    story:
      "In 1965, British computer scientist Donald Davies at the National Physical Laboratory realised that traditional telephone circuit switching wasted nearly 90% of line capacity whenever humans paused between sentences or computers waited for user keystrokes. He proposed chopping messages into short, fixed-size blocks with routing headers — deliberately choosing the everyday English word **'packet'** so engineers wouldn't confuse small network chunks with whole 'messages'. Together with Paul Baran's survivable mesh routing, Davies's packet switching became the foundation of ARPANET and the modern Internet.",
  },
};
