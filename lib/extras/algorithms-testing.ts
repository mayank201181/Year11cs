import type { TopicExtras } from "../types.ts";

const SVG_SWAP_CUPS =
  '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-cup swap analogy showing why Temp is required to exchange A and B">' +
  '<rect x="0" y="0" width="560" height="220" rx="14" fill="#f8fafc"/>' +
  '<text x="280" y="26" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#0f172a">The Three-Cup Swap Triangle (Why Temp Is Mandatory)</text>' +
  '<rect x="50" y="64" width="120" height="90" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>' +
  '<text x="110" y="92" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#991b1b">Arr[i]</text>' +
  '<text x="110" y="122" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#7f1d1d">(Cup A: Tea)</text>' +
  '<rect x="220" y="64" width="120" height="90" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>' +
  '<text x="280" y="92" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#92400e">Temp</text>' +
  '<text x="280" y="122" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#78350f">(Empty Mug)</text>' +
  '<rect x="390" y="64" width="120" height="90" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>' +
  '<text x="450" y="92" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#1e3a8a">Arr[i+1]</text>' +
  '<text x="450" y="122" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#1e40af">(Cup B: Juice)</text>' +
  '<path d="M170 84 L218 84" stroke="#dc2626" stroke-width="2.2"/>' +
  '<text x="194" y="76" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#dc2626">1. Temp ← A</text>' +
  '<path d="M390 144 C310 186, 250 186, 170 144" fill="none" stroke="#2563eb" stroke-width="2.2"/>' +
  '<text x="280" y="196" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#1e3a8a">2. Arr[i] ← Arr[i+1]</text>' +
  '<path d="M340 84 L388 84" stroke="#16a34a" stroke-width="2.2"/>' +
  '<text x="364" y="76" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#166534">3. B ← Temp</text>' +
  '</svg>';

const SVG_DE_MORGAN_RANGE =
  '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison between AND for valid inside-range checks and OR for invalid out-of-range checks">' +
  '<rect x="0" y="0" width="560" height="200" rx="14" fill="#f8fafc"/>' +
  '<text x="280" y="26" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12.5" font-weight="700" fill="#0f172a">Range Logic Cheat-Card: When to Use AND vs OR</text>' +
  '<rect x="24" y="46" width="244" height="132" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/>' +
  '<text x="146" y="70" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#166534">ACCEPT Inside Range [1..100]</text>' +
  '<text x="146" y="102" text-anchor="middle" font-family="monospace" font-size="11.5" font-weight="700" fill="#14532d">X &gt;= 1 AND X &lt;= 100</text>' +
  '<text x="146" y="132" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" fill="#166534">Must pass BOTH limits at once!</text>' +
  '<text x="146" y="156" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#15803d">Used in UNTIL condition of input loop</text>' +
  '<rect x="292" y="46" width="244" height="132" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/>' +
  '<text x="414" y="70" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#991b1b">REJECT Outside Range [1..100]</text>' +
  '<text x="414" y="102" text-anchor="middle" font-family="monospace" font-size="11.5" font-weight="700" fill="#7f1d1d">X &lt; 1 OR X &gt; 100</text>' +
  '<text x="414" y="132" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" fill="#991b1b">Failing EITHER limit is an error!</text>' +
  '<text x="414" y="156" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#b91c1c">NEVER write X &lt; 1 AND X &gt; 100!</text>' +
  '</svg>';

export const extras: TopicExtras = {
  hook:
    "In 1962, NASA's Mariner 1 Venus spacecraft had to be destroyed 293 seconds after launch because a single missing overbar in a handwritten algorithm specification turned a smooth guidance calculation into wild steering swings — proving that dry-running specifications and testing edge cases is worth hundreds of millions of dollars!",
  didYouKnow: [
    "Barack Obama once answered an interview question from Google's CEO Eric Schmidt at Google HQ in 2007 by declaring: 'I think the Bubble Sort would be the wrong way to go' for sorting a million 32-bit integers — earning instant applause from the room of computer scientists!",
    "Harry Beck, an electrical engineering draughtsman, created the iconic 1931 London Underground map in his spare time by treating train lines like an electrical circuit diagram — arguably the most famous example of **abstraction** in everyday life.",
    "Every credit card number uses the **Luhn algorithm** (a Modulo-10 **check digit** invented at IBM in 1954) so websites can reject a mistyped card number in microseconds *before* even contacting your bank!",
    "The word **'bug'** for an error in an algorithm or system became legendary in 1947 when Grace Hopper's Harvard Mark II team taped an actual moth trapped in Relay #70 into their engineering logbook with the note: *'First actual case of bug being found.'*",
    "Even when an array is **100% sorted** beforehand, an unoptimised Bubble Sort of 1,000 items blindly performs `499,500` comparisons — whereas adding a single `Swap` boolean flag cuts that down to just `999` comparisons (one quick pass)!",
  ],
  activities: [
    {
      title: "Playing-Card Bubble Sort Race",
      emoji: "🃏",
      materials: ["8 playing cards (Ace = 1 up to 10)", "1 sticky note labelled 'TEMP'", "A stopwatch"],
      steps: [
        "Shuffle 6 playing cards face-up in a row on your desk.",
        "Act as the CPU: only ever touch **two adjacent cards** `(Index, Index + 1)` at a time!",
        "Whenever the left card beats the right card, slide the left card onto the `TEMP` sticky note, slide the right card left, then move `TEMP` into the right slot, and tally 1 swap.",
        "Track how many passes and comparisons you save when you stop as soon as a full pass makes zero swaps!",
      ],
      maths:
        "For `n` cards in worst-case reverse order, Bubble Sort executes exactly `n(n − 1) / 2` comparisons and swaps (`15` swaps for `6` cards), whereas best-case already-sorted cards need just `n − 1` comparisons (`5`) and `0` swaps.",
    },
    {
      title: "Break My Validation Rule! (Adversarial Tester Game)",
      emoji: "🧪",
      materials: ["Index cards", "Pen"],
      steps: [
        "Player A secretly writes a pseudocode validation `IF` statement for integers from `10` to `50` inclusive — purposefully planting ONE subtle bug (such as `< 50` instead of `<= 50`, or forgetting negative numbers).",
        "Player B may submit only **four test inputs** (1 Normal, 1 Abnormal, 1 Extreme, and 1 Boundary pair) without seeing the code — Player A responds only `'Accepted'` or `'Rejected'`.",
        "See how fast Player B pinpoints the exact bug using the **Boundary pair**!",
      ],
      maths:
        "Boundary value analysis concentrates tests at `Min - 1, Min, Max, Max + 1`, where off-by-one relational bugs (`<` vs `<=`) live.",
    },
  ],
  bonusDiagrams: [
    {
      title: "The Three-Cup Swap Triangle",
      svg: SVG_SWAP_CUPS,
      caption:
        "Pouring Cup A straight into Cup B ruins both drinks! Saving `Temp ← Arr[i]` first preserves the original value during a Bubble Sort swap.",
    },
    {
      title: "In-Range (AND) vs Out-of-Range (OR) Cheat-Card",
      svg: SVG_DE_MORGAN_RANGE,
      caption:
        "One of the most frequent CIE Paper 2 debugging marks: accepting inside a range uses `AND`, whereas rejecting outside a range uses `OR`.",
    },
  ],
  history: {
    title: "Grace Hopper, Flowcharts & the Birth of Human-Readable Algorithms",
    story:
      "In the late 1940s, Herman Goldstine and John von Neumann introduced structured **flow diagrams** (flowcharts) so mathematicians could dry-run loop variables on paper before wiring physical vacuum-tube computers. Soon after, Rear Admiral **Grace Hopper** argued that programmers should write algorithms in English-like statements (`IF ... THEN`, `READ`, `WRITE`) rather than raw octal machine codes — leading directly to FLOW-MATIC, COBOL, and the structured CIE pseudocode and trace-table techniques you use on Paper 2 today.",
  },
};
