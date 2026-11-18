"use client";

import { useState } from "react";
import { WidgetFrame, Slider, Stepper, Segmented, Readout, type WidgetDef } from "./kit";

type ParityMode = "even" | "odd";

const BASE_DATA_ROWS: readonly (readonly number[])[] = [
  [0, 1, 1, 0, 1, 0, 1], // 4 ones
  [1, 0, 1, 1, 0, 0, 0], // 3 ones
  [1, 1, 0, 0, 1, 1, 1], // 5 ones
];

function buildCleanBlock(mode: ParityMode): number[][] {
  const want = mode === "odd" ? 1 : 0;
  const rows = BASE_DATA_ROWS.map((r) => {
    const ones = r.reduce((a, b) => a + b, 0);
    const pBit = ones % 2 === want ? 0 : 1;
    return [...r, pBit];
  });
  const parityRow: number[] = [];
  for (let c = 0; c < 8; c++) {
    const colOnes = rows[0][c] + rows[1][c] + rows[2][c];
    parityRow.push(colOnes % 2 === want ? 0 : 1);
  }
  return [...rows, parityRow];
}

function ParityBlockFlipper() {
  const [mode, setMode] = useState<ParityMode>("even");
  const [flips, setFlips] = useState<Record<string, boolean>>({ "1-4": true });

  const clean = buildCleanBlock(mode);
  const grid = clean.map((row, r) =>
    row.map((b, c) => (flips[`${r}-${c}`] ? 1 - b : b)),
  );

  const want = mode === "odd" ? 1 : 0;
  const rowCounts = grid.map((r) => r.reduce((a, b) => a + b, 0));
  const rowFails = rowCounts.map((n) => n % 2 !== want);

  const colCounts = Array.from({ length: 8 }, (_, c) =>
    grid.reduce((sum, r) => sum + r[c], 0),
  );
  const colFails = colCounts.map((n) => n % 2 !== want);

  const badRows = rowFails.map((f, i) => (f ? i : -1)).filter((i) => i >= 0);
  const badCols = colFails.map((f, i) => (f ? i : -1)).filter((i) => i >= 0);
  const flipCount = Object.values(flips).filter(Boolean).length;

  const toggleBit = (r: number, c: number) => {
    const key = `${r}-${c}`;
    setFlips((prev) => {
      const next = { ...prev };
      if (next[key]) delete next[key];
      else next[key] = true;
      return next;
    });
  };

  const applyPreset = (kind: "clean" | "one" | "two-row" | "rect") => {
    if (kind === "clean") setFlips({});
    else if (kind === "one") setFlips({ "1-4": true });
    else if (kind === "two-row") setFlips({ "0-1": true, "0-5": true });
    else setFlips({ "0-1": true, "0-5": true, "2-1": true, "2-5": true });
  };

  let statusHeadline = "";
  let statusDetail = "";
  let statusTone: "good" | "bad" | "brand" = "good";

  if (badRows.length === 0 && badCols.length === 0) {
    if (flipCount === 0) {
      statusHeadline = "Valid Block — 0 Errors Detected";
      statusDetail = `Every row and every column has an ${mode} number of 1s.`;
      statusTone = "good";
    } else {
      statusHeadline = `Blind Spot! ${flipCount} Flipped Bits Undetected!`;
      statusDetail =
        "Because every affected row AND every affected column had an even number of bit flips (e.g. 4 corners of a rectangle), both horizontal and vertical parity checks were fooled!";
      statusTone = "bad";
    }
  } else if (badRows.length === 1 && badCols.length === 1) {
    const rLabel = badRows[0] < 3 ? `Byte ${badRows[0] + 1}` : "Parity Row";
    statusHeadline = `Exact Fault Pinpointed: ${rLabel}, Bit ${badCols[0] + 1}`;
    statusDetail = `${rLabel} has ${rowCounts[badRows[0]]} ones and Column ${badCols[0] + 1} has ${colCounts[badCols[0]]} ones — both violate ${mode} parity, intersecting at (${badRows[0] + 1}, ${badCols[0] + 1})!`;
    statusTone = "bad";
  } else if (badRows.length === 0 && badCols.length > 0) {
    statusHeadline = `Row Parity Fooled — Caught by ${badCols.length} Column Checks!`;
    statusDetail =
      "An even number of bits flipped inside the same byte, so horizontal row parity stayed valid (a 1D parity blind spot!), while vertical column parity still caught the error.";
    statusTone = "brand";
  } else {
    statusHeadline = `Multi-Bit Corruption Detected (${badRows.length} bad row(s), ${badCols.length} bad col(s))`;
    statusDetail =
      "Parity block detects that corruption occurred and triggers ARQ retransmission, though more than 1 bit flipped so it cannot uniquely auto-correct without resending.";
    statusTone = "bad";
  }

  return (
    <WidgetFrame
      title="2D Parity Block Bit-Flipper & Fault Pinpointer"
      tryThis={[
        "Click any bit in the grid to simulate electromagnetic interference flipping `0 ↔ 1`, and watch the bad row and column crosshairs lock onto it.",
        "Click **2-Bit Same-Row Trap** to see why a single parity bit misses 2 flips in one byte while column parity catches it!",
        "Click **4-Bit Rectangle Trap** to discover the geometric pattern that fools BOTH row and column parity!",
      ]}
      caption={
        <div>
          <strong className="text-ink">{statusHeadline}:</strong> {statusDetail}
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented<ParityMode>
            label="Parity rule"
            value={mode}
            onChange={(m) => setMode(m)}
            options={[
              { value: "even", label: "Even Parity" },
              { value: "odd", label: "Odd Parity" },
            ]}
          />
          <div className="flex flex-wrap gap-1.5">
            <button type="button" className="kbd text-xs" onClick={() => applyPreset("clean")}>
              Clean (0 flips)
            </button>
            <button type="button" className="kbd text-xs" onClick={() => applyPreset("one")}>
              1-Bit Error
            </button>
            <button type="button" className="kbd text-xs" onClick={() => applyPreset("two-row")}>
              2-Bit Same-Row Trap
            </button>
            <button type="button" className="kbd text-xs" onClick={() => applyPreset("rect")}>
              4-Bit Rectangle Trap
            </button>
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-line bg-surface p-3">
          <table className="w-full border-collapse text-center text-sm">
            <thead>
              <tr className="text-xs font-bold text-ink-2">
                <th className="px-2 py-1 text-left">Row</th>
                {Array.from({ length: 8 }, (_, c) => (
                  <th
                    key={c}
                    className={`px-1.5 py-1 ${colFails[c] ? "text-bad underline" : ""}`}
                  >
                    B{c + 1}
                    {c === 7 ? " (P)" : ""}
                  </th>
                ))}
                <th className="px-2 py-1">1s Count</th>
              </tr>
            </thead>
            <tbody>
              {grid.map((row, r) => {
                const isParityRow = r === 3;
                return (
                  <tr
                    key={r}
                    className={`${isParityRow ? "border-t-2 border-line bg-surface-2/60" : ""} ${
                      rowFails[r] ? "bg-bad-soft/40" : ""
                    }`}
                  >
                    <td className="px-2 py-1.5 text-left text-xs font-bold text-ink">
                      {isParityRow ? "Parity Byte" : `Byte ${r + 1}`}
                    </td>
                    {row.map((bit, c) => {
                      const flipped = !!flips[`${r}-${c}`];
                      const pinpointed =
                        badRows.length === 1 &&
                        badCols.length === 1 &&
                        badRows[0] === r &&
                        badCols[0] === c;
                      return (
                        <td key={c} className="px-1 py-1">
                          <button
                            type="button"
                            onClick={() => toggleBit(r, c)}
                            aria-label={`Toggle ${isParityRow ? "Parity Row" : `Byte ${r + 1}`} Bit ${c + 1}`}
                            className={`h-9 w-9 rounded-lg font-mono text-sm font-extrabold transition ${
                              pinpointed
                                ? "ring-2 ring-bad bg-bad-soft text-bad scale-105"
                                : flipped
                                  ? "border-2 border-accent bg-accent-soft text-ink"
                                  : colFails[c]
                                    ? "border border-bad/50 bg-surface text-ink"
                                    : "border border-line bg-surface text-ink hover:border-brand"
                            }`}
                          >
                            {bit}
                          </button>
                        </td>
                      );
                    })}
                    <td className="px-2 py-1.5 font-mono text-xs font-bold">
                      <span className={rowFails[r] ? "text-bad" : "text-good"}>
                        {rowCounts[r]} {rowFails[r] ? "✗" : "✓"}
                      </span>
                    </td>
                  </tr>
                );
              })}
              <tr className="border-t border-line text-xs font-bold">
                <td className="px-2 py-1.5 text-left text-ink-2">Col 1s</td>
                {colCounts.map((cnt, c) => (
                  <td key={c} className="px-1 py-1.5 font-mono">
                    <span className={colFails[c] ? "text-bad" : "text-good"}>
                      {cnt}
                      {colFails[c] ? "✗" : "✓"}
                    </span>
                  </td>
                ))}
                <td className="px-2 py-1.5 text-ink-2">—</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <Readout label="Noise Bit Flips" value={flipCount} tone={flipCount === 0 ? "good" : "bad"} />
          <Readout
            label="Failing Row / Col"
            value={
              badRows.length === 1 && badCols.length === 1
                ? `Row ${badRows[0] + 1}, Bit ${badCols[0] + 1}`
                : `${badRows.length} row(s), ${badCols.length} col(s)`
            }
            tone={statusTone}
          />
          <div className="flex items-center justify-center rounded-xl border border-line bg-surface px-3 py-2">
            {badRows.length === 1 && badCols.length === 1 ? (
              <button
                type="button"
                onClick={() => toggleBit(badRows[0], badCols[0])}
                className="rounded-lg bg-brand px-3 py-1.5 text-xs font-extrabold text-white shadow-sm transition hover:opacity-90"
              >
                Auto-Correct ({badRows[0] + 1}, {badCols[0] + 1})
              </button>
            ) : (
              <span className="text-xs font-semibold text-ink-2">
                {flipCount === 0 ? "Click any bit to inject noise" : "Needs ARQ resend if >1 bit flips"}
              </span>
            )}
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

type WireMode = "serial" | "parallel";
type DirMode = "simplex" | "half" | "full";

function PacketAndTransmissionExplorer() {
  const [step, setStep] = useState(2);
  const [congestTop, setCongestTop] = useState(true);
  const [wire, setWire] = useState<WireMode>("serial");
  const [dir, setDir] = useState<DirMode>("full");
  const [distanceM, setDistanceM] = useState(10);

  // Packet switching simulation across steps 0..3
  // P1="CIE", P2="047", P3="8!!"
  const arrivalOrder = congestTop
    ? [
        { seq: 2, data: "047", route: "Sender → R1 → R3 → Receiver", hopsLeft: 16 - 2 },
        { seq: 3, data: "8!!", route: "Sender → R1 → R4 → Receiver", hopsLeft: 16 - 2 },
        { seq: 1, data: "CIE", route: "Sender → R1 → R3 → R4 → Receiver (detour!)", hopsLeft: 16 - 3 },
      ]
    : [
        { seq: 1, data: "CIE", route: "Sender → R1 → R2 → Receiver", hopsLeft: 16 - 2 },
        { seq: 3, data: "8!!", route: "Sender → R1 → R4 → Receiver", hopsLeft: 16 - 2 },
        { seq: 2, data: "047", route: "Sender → R1 → R3 → R4 → Receiver", hopsLeft: 16 - 3 },
      ];

  const skewRisk = wire === "parallel" && distanceM > 2;

  const scenarioMatch =
    wire === "parallel" && distanceM <= 2
      ? "Internal 32/64-bit CPU ↔ RAM motherboard bus (high speed over millimetres, negligible skew)"
      : wire === "parallel"
        ? "UNRELIABLE! Parallel ribbon over >2 m suffers severe data skew & crosstalk — switch to Serial!"
        : dir === "simplex"
          ? "Wired keyboard → CPU or broadcast transmitter (1 bit at a time, one-way only)"
          : dir === "half"
            ? "Digital walkie-talkie / classic USB 2.0 D+/D− pair (both directions, taking turns)"
            : "Fibre-optic broadband / USB-C SuperSpeed / Gigabit Ethernet (both directions simultaneously, zero skew)";

  return (
    <WidgetFrame
      title="Packet-Switching Router Hop & Serial/Parallel Duplex Explorer"
      tryThis={[
        "Step from **Stage 0** to **Stage 3** to see why packets `P1 (CIE)`, `P2 (047)`, and `P3 (8!!)` arrive out of order and how the **Header Packet #** reassembles them.",
        "Switch to **Parallel** and drag **Cable Length** past `2 m` to trigger CIE `0478` **data skew & crosstalk**!",
      ]}
      caption={
        <div>
          <strong className="text-ink">CIE Link Verdict ({dir}-duplex {wire}, {distanceM} m):</strong>{" "}
          {scenarioMatch}
        </div>
      }
    >
      <div className="space-y-5">
        {/* Part 1: Packet Switching */}
        <div className="rounded-xl border border-line bg-surface p-3 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Stepper
              label="Packet-Switch Stage"
              value={step}
              min={0}
              max={3}
              onChange={setStep}
              format={(s) =>
                ["0: Split", "1: Routing", "2: Arrived!", "3: Reordered"][s] ?? String(s)
              }
            />
            <button
              type="button"
              onClick={() => setCongestTop((v) => !v)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold border transition ${
                congestTop
                  ? "border-bad bg-bad-soft text-bad"
                  : "border-good bg-good-soft text-good"
              }`}
            >
              {congestTop ? "Top Link R1→R2: Congested (Detour ON)" : "Top Link R1→R2: Clear"}
            </button>
          </div>

          <svg
            viewBox="0 0 540 155"
            className="w-full rounded-lg bg-surface-2"
            role="img"
            aria-label="Packet switching router network diagram"
          >
            {/* Links */}
            <line x1="78" y1="78" x2="162" y2="78" className="stroke-brand" strokeWidth={2.5} />
            <line
              x1="198"
              y1="68"
              x2="312"
              y2="36"
              className={congestTop ? "stroke-bad" : "stroke-good"}
              strokeWidth={2.5}
              strokeDasharray={congestTop ? "5 4" : undefined}
            />
            <line x1="348" y1="36" x2="452" y2="70" className="stroke-ink-2" strokeWidth={2} />
            <line x1="198" y1="84" x2="272" y2="118" className="stroke-brand" strokeWidth={2.5} />
            <line x1="308" y1="118" x2="382" y2="118" className="stroke-brand" strokeWidth={2.5} />
            <line x1="298" y1="106" x2="452" y2="80" className="stroke-good" strokeWidth={2} />
            <line x1="414" y1="108" x2="452" y2="86" className="stroke-brand" strokeWidth={2.5} />

            {/* Nodes */}
            <rect x="14" y="54" width="64" height="48" rx="8" className="fill-surface stroke-ink" strokeWidth={1.8} />
            <text x="46" y="75" textAnchor="middle" fontSize="11" fontWeight="700" className="fill-ink">Sender</text>
            <text x="46" y="91" textAnchor="middle" fontSize="9" className="fill-ink-2">TTL = 16</text>

            {[
              { id: "R1", x: 180, y: 78 },
              { id: "R2", x: 330, y: 34 },
              { id: "R3", x: 290, y: 118 },
              { id: "R4", x: 398, y: 118 },
            ].map((r) => (
              <g key={r.id}>
                <circle
                  cx={r.x}
                  cy={r.y}
                  r="18"
                  className={r.id === "R2" && congestTop ? "fill-bad-soft stroke-bad" : "fill-brand-soft stroke-brand"}
                  strokeWidth={2}
                />
                <text x={r.x} y={r.y + 4} textAnchor="middle" fontSize="11" fontWeight="700" className="fill-ink">
                  {r.id}
                </text>
              </g>
            ))}

            <rect x="452" y="54" width="74" height="48" rx="8" className="fill-surface stroke-good" strokeWidth={2} />
            <text x="489" y="74" textAnchor="middle" fontSize="11" fontWeight="700" className="fill-good">Receiver</text>
            <text x="489" y="91" textAnchor="middle" fontSize="9" fontFamily="monospace" className="fill-ink">
              {step < 2 ? "Waiting..." : step === 2 ? arrivalOrder.map((p) => p.data).join("") : "CIE0478!!"}
            </text>

            {/* Animated Packet Badges */}
            {step === 0 && (
              <text x="270" y="147" textAnchor="middle" fontSize="10" fontWeight="700" className="fill-ink">
                Split into #1 [CIE], #2 [047], #3 [8!!] — each stamped with Dest IP, Sequence # &amp; CRC Trailer
              </text>
            )}
            {step === 1 && (
              <text x="270" y="147" textAnchor="middle" fontSize="10" fontWeight="700" className="fill-brand">
                Routers inspect Dest IP in Header &amp; pick least-congested hops; each router decrements TTL by 1!
              </text>
            )}
            {step === 2 && (
              <text x="270" y="147" textAnchor="middle" fontSize="10" fontWeight="700" className="fill-bad">
                Arrived OUT OF ORDER: {arrivalOrder.map((p) => `#${p.seq}(${p.data}, TTL=${p.hopsLeft})`).join(" → ")}
              </text>
            )}
            {step === 3 && (
              <text x="270" y="147" textAnchor="middle" fontSize="10" fontWeight="700" className="fill-good">
                CRC verified ✓ &amp; sorted by Header Packet # (1 → 2 → 3): &quot;CIE0478!!&quot; reconstructed!
              </text>
            )}
          </svg>
        </div>

        {/* Part 2: Serial/Parallel + Duplex Explorer */}
        <div className="rounded-xl border border-line bg-surface p-3 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Segmented<WireMode>
              label="Wire count"
              value={wire}
              onChange={setWire}
              options={[
                { value: "serial", label: "Serial (1 wire)" },
                { value: "parallel", label: "Parallel (8 wires)" },
              ]}
            />
            <Segmented<DirMode>
              label="Direction"
              value={dir}
              onChange={setDir}
              options={[
                { value: "simplex", label: "Simplex" },
                { value: "half", label: "Half-Duplex" },
                { value: "full", label: "Full-Duplex" },
              ]}
            />
          </div>

          <Slider
            label="Cable / Track Distance"
            value={distanceM}
            min={0.1}
            max={25}
            step={0.5}
            onChange={setDistanceM}
            format={(v) => `${v} m`}
          />

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <Readout
              label="Bits per Clock Pulse"
              value={wire === "serial" ? "1 bit (sequential)" : "8 bits (simultaneous)"}
              tone="brand"
            />
            <Readout
              label="Direction Timing"
              value={
                dir === "simplex"
                  ? "One-way only"
                  : dir === "half"
                    ? "Both ways (turns)"
                    : "Both ways AT ONCE"
              }
              tone="ink"
            />
            <Readout
              label="Data Skew & Crosstalk"
              value={skewRisk ? "HIGH RISK (Skew!)" : wire === "serial" ? "Zero Skew ✓" : "Negligible (<2 m)"}
              tone={skewRisk ? "bad" : "good"}
            />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "parity-block-flipper",
    title: "2D Parity Block Bit-Flipper & Fault Locator",
    blurb: "Flip bits across rows and columns to see how 2D parity pinpoints 1-bit errors — and what fools it.",
    Component: ParityBlockFlipper,
  },
  {
    id: "packet-mode-explorer",
    title: "Packet-Switching Router Hop & Serial/Parallel Duplex Lab",
    blurb: "Watch routers steer packets around congestion and test Serial/Parallel × Simplex/Duplex over distance.",
    Component: PacketAndTransmissionExplorer,
  },
];
