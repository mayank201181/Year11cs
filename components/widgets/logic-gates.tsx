"use client";

import { useState } from "react";
import { Readout, Segmented, WidgetFrame, type WidgetDef } from "./kit";

type Gate2 = "AND" | "OR" | "NAND" | "NOR" | "XOR";
type AllGate = "NOT" | Gate2;
type StageQMode = "PASS_C" | "NOT_C" | "B_AND_C" | "B_OR_C" | "B_NAND_C" | "B_NOR_C" | "B_XOR_C";

function evalGate2(g: Gate2, x: number, y: number): number {
  switch (g) {
    case "AND":
      return x & y;
    case "OR":
      return x | y;
    case "NAND":
      return (x & y) ^ 1;
    case "NOR":
      return (x | y) ^ 1;
    case "XOR":
      return x ^ y;
  }
}

function evalStageQ(mode: StageQMode, b: number, c: number): number {
  switch (mode) {
    case "PASS_C":
      return c;
    case "NOT_C":
      return c ^ 1;
    case "B_AND_C":
      return b & c;
    case "B_OR_C":
      return b | c;
    case "B_NAND_C":
      return (b & c) ^ 1;
    case "B_NOR_C":
      return (b | c) ^ 1;
    case "B_XOR_C":
      return b ^ c;
  }
}

function stageQExpr(mode: StageQMode): string {
  switch (mode) {
    case "PASS_C":
      return "C";
    case "NOT_C":
      return "(NOT C)";
    case "B_AND_C":
      return "(B AND C)";
    case "B_OR_C":
      return "(B OR C)";
    case "B_NAND_C":
      return "(B NAND C)";
    case "B_NOR_C":
      return "(B NOR C)";
    case "B_XOR_C":
      return "(B XOR C)";
  }
}

/** Renders a standard CIE 0478 2-input gate centered around (cx, cy) spanning x:[cx-30 .. cx+30], y:[cy-24 .. cy+24]. */
function CieGate2Svg({
  gate,
  cx,
  cy,
  active,
}: {
  gate: Gate2;
  cx: number;
  cy: number;
  active: boolean;
}) {
  const stroke = active ? "#059669" : "#475569";
  const fill = active ? "#d1fae5" : "#f1f5f9";
  const textCol = active ? "#065f46" : "#334155";
  const isDShape = gate === "AND" || gate === "NAND";
  const hasBubble = gate === "NAND" || gate === "NOR";
  const isXor = gate === "XOR";

  return (
    <g>
      {isXor ? (
        <path
          d={`M ${cx - 34} ${cy - 24} Q ${cx - 18} ${cy} ${cx - 34} ${cy + 24}`}
          fill="none"
          stroke={stroke}
          strokeWidth={2.6}
          strokeLinecap="round"
        />
      ) : null}
      {isDShape ? (
        <path
          d={`M ${cx - 26} ${cy - 24} L ${cx + 2} ${cy - 24} A 24 24 0 0 1 ${cx + 2} ${cy + 24} L ${cx - 26} ${cy + 24} Z`}
          fill={fill}
          stroke={stroke}
          strokeWidth={2.6}
          strokeLinejoin="round"
        />
      ) : (
        <path
          d={`M ${cx - 26} ${cy - 24} Q ${cx - 10} ${cy} ${cx - 26} ${cy + 24} Q ${cx + 8} ${cy + 24} ${cx + 26} ${cy} Q ${cx + 8} ${cy - 24} ${cx - 26} ${cy - 24} Z`}
          fill={fill}
          stroke={stroke}
          strokeWidth={2.6}
          strokeLinejoin="round"
        />
      )}
      {hasBubble ? (
        <circle cx={cx + 32} cy={cy} r={5} fill="#ffffff" stroke={stroke} strokeWidth={2.6} />
      ) : null}
      <text
        x={isDShape ? cx - 2 : cx - 1}
        y={cy + 4}
        textAnchor="middle"
        fontSize={10}
        fontWeight={800}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fill={textCol}
      >
        {gate}
      </text>
    </g>
  );
}

/** Renders a standard CIE 0478 1-input NOT gate centered around (cx, cy). */
function CieNotSvg({ cx, cy, active }: { cx: number; cy: number; active: boolean }) {
  const stroke = active ? "#059669" : "#475569";
  const fill = active ? "#d1fae5" : "#f1f5f9";
  const textCol = active ? "#065f46" : "#334155";
  return (
    <g>
      <polygon
        points={`${cx - 24},${cy - 22} ${cx - 24},${cy + 22} ${cx + 20},${cy}`}
        fill={fill}
        stroke={stroke}
        strokeWidth={2.6}
        strokeLinejoin="round"
      />
      <circle cx={cx + 26} cy={cy} r={5} fill="#ffffff" stroke={stroke} strokeWidth={2.6} />
      <text
        x={cx - 8}
        y={cy + 4}
        textAnchor="middle"
        fontSize={9.5}
        fontWeight={800}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fill={textCol}
      >
        NOT
      </text>
    </g>
  );
}

interface Preset {
  id: string;
  label: string;
  gateP: Gate2;
  stageQ: StageQMode;
  gateX: Gate2;
  note: string;
}

const PRESETS: readonly Preset[] = [
  {
    id: "safety",
    label: "Safety Press",
    gateP: "AND",
    stageQ: "NOT_C",
    gateX: "OR",
    note: "X = (A AND B) OR (NOT C) — classic CIE Paper 2 industrial control circuit.",
  },
  {
    id: "shared",
    label: "Shared-Wire Exam",
    gateP: "NAND",
    stageQ: "B_NOR_C",
    gateX: "XOR",
    note: "X = (A NAND B) XOR (B NOR C) — wire B branches into both Stage-1 gates!",
  },
  {
    id: "diff",
    label: "Parity Mask",
    gateP: "XOR",
    stageQ: "NOT_C",
    gateX: "AND",
    note: "X = (A XOR B) AND (NOT C) — outputs 1 only when A ≠ B and C = 0 (rows 010 and 100).",
  },
  {
    id: "adder",
    label: "3-Input XOR Sum",
    gateP: "XOR",
    stageQ: "PASS_C",
    gateX: "XOR",
    note: "X = (A XOR B) XOR C — CPU Full-Adder Sum bit (1 whenever an odd number of inputs equal 1).",
  },
];

const GATE2_OPTIONS: { value: Gate2; label: string }[] = [
  { value: "AND", label: "AND" },
  { value: "OR", label: "OR" },
  { value: "NAND", label: "NAND" },
  { value: "NOR", label: "NOR" },
  { value: "XOR", label: "XOR" },
];

const STAGE_Q_OPTIONS: { value: StageQMode; label: string }[] = [
  { value: "NOT_C", label: "NOT C" },
  { value: "PASS_C", label: "Wire C" },
  { value: "B_AND_C", label: "B AND C" },
  { value: "B_OR_C", label: "B OR C" },
  { value: "B_NAND_C", label: "B NAND C" },
  { value: "B_NOR_C", label: "B NOR C" },
  { value: "B_XOR_C", label: "B XOR C" },
];

function CircuitTruthTableBuilder() {
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(0);
  const [c, setC] = useState<number>(0);
  const [gateP, setGateP] = useState<Gate2>("AND");
  const [stageQ, setStageQ] = useState<StageQMode>("NOT_C");
  const [gateX, setGateX] = useState<Gate2>("OR");

  const applyPreset = (pr: Preset) => {
    setGateP(pr.gateP);
    setStageQ(pr.stageQ);
    setGateX(pr.gateX);
  };

  const pVal = evalGate2(gateP, a, b);
  const qVal = evalStageQ(stageQ, b, c);
  const xVal = evalGate2(gateX, pVal, qVal);

  const exprText = `X = (A ${gateP} B) ${gateX} ${stageQExpr(stageQ)}`;

  const rows = Array.from({ length: 8 }, (_, idx) => {
    const ra = (idx >> 2) & 1;
    const rb = (idx >> 1) & 1;
    const rc = idx & 1;
    const rp = evalGate2(gateP, ra, rb);
    const rq = evalStageQ(stageQ, rb, rc);
    const rx = evalGate2(gateX, rp, rq);
    return { idx, ra, rb, rc, rp, rq, rx };
  });

  const onesCount = rows.filter((r) => r.rx === 1).length;
  const colString = rows.map((r) => r.rx).join("");

  const wireColor = (bit: number) => (bit === 1 ? "#10b981" : "#64748b");
  const usesSharedB = stageQ.startsWith("B_");
  const qGate2: Gate2 | null =
    stageQ === "B_AND_C"
      ? "AND"
      : stageQ === "B_OR_C"
        ? "OR"
        : stageQ === "B_NAND_C"
          ? "NAND"
          : stageQ === "B_NOR_C"
            ? "NOR"
            : stageQ === "B_XOR_C"
              ? "XOR"
              : null;

  const pOutX = gateP === "NAND" || gateP === "NOR" ? 217 : 206;
  const qOutX =
    stageQ === "NOT_C"
      ? 211
      : qGate2 === "NAND" || qGate2 === "NOR"
        ? 217
        : qGate2
          ? 206
          : 180;
  const xOutX = gateX === "NAND" || gateX === "NOR" ? 407 : 396;
  const pInLeft = gateP === "XOR" ? 148 : 154;
  const qInLeft = qGate2 === "XOR" ? 148 : 154;
  const xInLeft = gateX === "XOR" ? 338 : 344;

  return (
    <WidgetFrame
      title="Interactive 3-Input CIE Logic Circuit & Live Truth-Table Builder"
      tryThis={[
        "Click **A**, **B**, or **C** (or tap any row in the 8-row truth table!) to watch emerald `1` signals propagate through `P`, `Q`, and `X`.",
        "Load **Shared-Wire Exam** (`(A NAND B) XOR (B NOR C)`) and verify why row `100` outputs `X = 0` while `101` outputs `X = 1`.",
        "Can you pick gates for `P`, `Q`, and `X` so that **only 1 row** out of 8 outputs `X = 1`?",
      ]}
      caption={
        <span>
          Active row <strong>{`${a}${b}${c}`}</strong>: intermediate wire{" "}
          <strong>{`P = ${a} ${gateP} ${b} = ${pVal}`}</strong>, intermediate wire{" "}
          <strong>{`Q = ${stageQExpr(stageQ)} = ${qVal}`}</strong>, final output{" "}
          <strong>{`X = ${pVal} ${gateX} ${qVal} = ${xVal}`}</strong>. Across all 8 rows (<code>000</code>–<code>111</code>), the <code>X</code> column is{" "}
          <code>{colString}</code> ({onesCount} of 8 rows equal <code>1</code>).
        </span>
      }
    >
      <div className="space-y-4">
        {/* Preset Circuit Bar */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-extrabold uppercase tracking-wide text-ink-2">CIE Presets:</span>
          {PRESETS.map((pr) => {
            const active = pr.gateP === gateP && pr.stageQ === stageQ && pr.gateX === gateX;
            return (
              <button
                key={pr.id}
                type="button"
                onClick={() => applyPreset(pr)}
                className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                  active
                    ? "border-brand bg-brand-soft text-brand"
                    : "border-line bg-surface text-ink-2 hover:bg-surface-2 hover:text-ink"
                }`}
              >
                {pr.label}
              </button>
            );
          })}
        </div>

        {/* Gate Stage Selectors */}
        <div className="grid gap-3 rounded-xl border border-line bg-surface-2 p-3 sm:grid-cols-3">
          <div className="space-y-1">
            <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">Stage 1 Top (Wire P: A, B)</div>
            <Segmented label="Gate P" options={GATE2_OPTIONS} value={gateP} onChange={setGateP} />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">Stage 1 Bottom (Wire Q)</div>
            <Segmented label="Stage Q" options={STAGE_Q_OPTIONS} value={stageQ} onChange={setStageQ} />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">Stage 2 Final (X: P, Q)</div>
            <Segmented label="Gate X" options={GATE2_OPTIONS} value={gateX} onChange={setGateX} />
          </div>
        </div>

        {/* Live Boolean Expression Banner */}
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-line bg-surface px-3.5 py-2.5">
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">CIE Logic Expression</div>
          <code className="text-sm font-extrabold text-brand sm:text-base">{exprText}</code>
        </div>

        {/* Clickable Input Switches + Live CIE SVG Schematic */}
        <div className="grid gap-4 lg:grid-cols-[1fr_300px]">
          <div className="min-w-0 space-y-3">
            {/* Input toggle pills */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { name: "A", val: a, toggle: () => setA((v) => v ^ 1) },
                { name: "B", val: b, toggle: () => setB((v) => v ^ 1) },
                { name: "C", val: c, toggle: () => setC((v) => v ^ 1) },
              ].map((inp) => (
                <button
                  key={inp.name}
                  type="button"
                  onClick={inp.toggle}
                  className={`flex items-center justify-between rounded-xl border px-3 py-2 font-bold transition ${
                    inp.val === 1
                      ? "border-emerald-500 bg-emerald-500/15 text-ink"
                      : "border-line bg-surface text-ink-2 hover:bg-surface-2"
                  }`}
                >
                  <span>Input {inp.name}</span>
                  <span
                    className={`rounded-md px-2 py-0.5 font-mono text-sm font-extrabold ${
                      inp.val === 1 ? "bg-emerald-600 text-white" : "bg-slate-600 text-white"
                    }`}
                  >
                    {inp.val}
                  </span>
                </button>
              ))}
            </div>

            {/* Crisp CIE Gate SVG Schematic */}
            <div className="rounded-xl border border-line bg-white p-2 shadow-xs">
              <svg
                viewBox="0 0 520 250"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label={`Live CIE logic circuit diagram for ${exprText}`}
                className="h-auto w-full"
              >
                <rect x={0} y={0} width={520} height={250} rx={10} fill="#f8fafc" />

                {/* Input badges on left */}
                {[
                  { label: "A", val: a, y: 62 },
                  { label: "B", val: b, y: 102 },
                  { label: "C", val: c, y: 186 },
                ].map((row) => (
                  <g
                    key={row.label}
                    onClick={() => {
                      if (row.label === "A") setA((v) => v ^ 1);
                      else if (row.label === "B") setB((v) => v ^ 1);
                      else setC((v) => v ^ 1);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <rect
                      x={14}
                      y={row.y - 14}
                      width={44}
                      height={28}
                      rx={7}
                      fill={row.val === 1 ? "#10b981" : "#475569"}
                    />
                    <text
                      x={36}
                      y={row.y + 5}
                      textAnchor="middle"
                      fontSize={13}
                      fontWeight={800}
                      fontFamily="ui-monospace, monospace"
                      fill="#ffffff"
                    >
                      {`${row.label}=${row.val}`}
                    </text>
                  </g>
                ))}

                {/* Wires A and B into Gate P */}
                <line x1={58} y1={62} x2={pInLeft} y2={62} stroke={wireColor(a)} strokeWidth={3.2} />
                <line x1={58} y1={102} x2={pInLeft} y2={102} stroke={wireColor(b)} strokeWidth={3.2} />

                {/* Optional shared-wire tap from B down to Gate Q */}
                {usesSharedB ? (
                  <g>
                    <circle cx={104} cy={102} r={4.5} fill={wireColor(b)} />
                    <path
                      d={`M 104 102 L 104 162 L ${qInLeft} 162`}
                      fill="none"
                      stroke={wireColor(b)}
                      strokeWidth={3.2}
                    />
                  </g>
                ) : null}

                {/* Wire C into Stage Q */}
                {stageQ === "PASS_C" ? (
                  <line x1={58} y1={186} x2={180} y2={186} stroke={wireColor(c)} strokeWidth={3.2} />
                ) : stageQ === "NOT_C" ? (
                  <line x1={58} y1={186} x2={156} y2={186} stroke={wireColor(c)} strokeWidth={3.2} />
                ) : (
                  <line x1={58} y1={186} x2={qInLeft} y2={186} stroke={wireColor(c)} strokeWidth={3.2} />
                )}

                {/* Gate P (centered at 180, 82) */}
                <CieGate2Svg gate={gateP} cx={180} cy={82} active={pVal === 1} />

                {/* Stage Q (centered at 180, 174 or 186) */}
                {stageQ === "NOT_C" ? (
                  <CieNotSvg cx={180} cy={186} active={qVal === 1} />
                ) : qGate2 ? (
                  <CieGate2Svg gate={qGate2} cx={180} cy={174} active={qVal === 1} />
                ) : null}

                {/* Intermediate Wire P to Final Gate X */}
                <path
                  d={`M ${pOutX} 82 L 284 82 L 284 114 L ${xInLeft} 114`}
                  fill="none"
                  stroke={wireColor(pVal)}
                  strokeWidth={3.2}
                />
                <rect
                  x={228}
                  y={56}
                  width={46}
                  height={20}
                  rx={5}
                  fill={pVal === 1 ? "#d1fae5" : "#e2e8f0"}
                  stroke={wireColor(pVal)}
                  strokeWidth={1.2}
                />
                <text
                  x={251}
                  y={70}
                  textAnchor="middle"
                  fontSize={11}
                  fontWeight={800}
                  fontFamily="ui-monospace, monospace"
                  fill={pVal === 1 ? "#065f46" : "#334155"}
                >
                  {`P=${pVal}`}
                </text>

                {/* Intermediate Wire Q to Final Gate X */}
                <path
                  d={`M ${qOutX} ${qGate2 ? 174 : 186} L 284 ${qGate2 ? 174 : 186} L 284 146 L ${xInLeft} 146`}
                  fill="none"
                  stroke={wireColor(qVal)}
                  strokeWidth={3.2}
                />
                <rect
                  x={228}
                  y={194}
                  width={46}
                  height={20}
                  rx={5}
                  fill={qVal === 1 ? "#d1fae5" : "#e2e8f0"}
                  stroke={wireColor(qVal)}
                  strokeWidth={1.2}
                />
                <text
                  x={251}
                  y={208}
                  textAnchor="middle"
                  fontSize={11}
                  fontWeight={800}
                  fontFamily="ui-monospace, monospace"
                  fill={qVal === 1 ? "#065f46" : "#334155"}
                >
                  {`Q=${qVal}`}
                </text>

                {/* Final Gate X (centered at 370, 130) */}
                <CieGate2Svg gate={gateX} cx={370} cy={130} active={xVal === 1} />

                {/* Final Output Wire & Lamp X */}
                <line x1={xOutX} y1={130} x2={446} y2={130} stroke={wireColor(xVal)} strokeWidth={3.6} />
                <rect
                  x={446}
                  y={108}
                  width={60}
                  height={44}
                  rx={10}
                  fill={xVal === 1 ? "#059669" : "#334155"}
                />
                <text
                  x={476}
                  y={128}
                  textAnchor="middle"
                  fontSize={14}
                  fontWeight={800}
                  fontFamily="ui-monospace, monospace"
                  fill="#ffffff"
                >
                  {`X=${xVal}`}
                </text>
                <text
                  x={476}
                  y={143}
                  textAnchor="middle"
                  fontSize={9.5}
                  fontWeight={700}
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                  fill={xVal === 1 ? "#d1fae5" : "#cbd5e1"}
                >
                  {xVal === 1 ? "HIGH (ON)" : "LOW (OFF)"}
                </text>

                <text
                  x={260}
                  y={238}
                  textAnchor="middle"
                  fontSize={10.5}
                  fontWeight={700}
                  fontFamily="ui-sans-serif, system-ui, sans-serif"
                  fill="#475569"
                >
                  Tap A, B, or C in the diagram — emerald = 1 (TRUE), slate = 0 (FALSE)
                </text>
              </svg>
            </div>

            {/* Readouts */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              <Readout label="Wire P" value={pVal} tone={pVal === 1 ? "good" : "ink"} />
              <Readout label="Wire Q" value={qVal} tone={qVal === 1 ? "good" : "ink"} />
              <Readout label="Output X" value={xVal} tone={xVal === 1 ? "good" : "bad"} />
              <Readout label="Rows X = 1" value={`${onesCount} / 8`} tone="brand" />
            </div>
          </div>

          {/* Live 8-Row Truth Table */}
          <div className="min-w-0 rounded-xl border border-line bg-surface p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
                8-Row CIE Truth Table (Tap Row)
              </span>
              <span className="font-mono text-xs font-bold text-brand">{colString}</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-center font-mono text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-line bg-surface-2 text-ink-2">
                    <th className="px-2 py-1.5 font-extrabold">A</th>
                    <th className="px-2 py-1.5 font-extrabold">B</th>
                    <th className="px-2 py-1.5 font-extrabold">C</th>
                    <th className="px-2 py-1.5 font-bold text-ink-2">P</th>
                    <th className="px-2 py-1.5 font-bold text-ink-2">Q</th>
                    <th className="px-2 py-1.5 font-extrabold text-brand">X</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => {
                    const isCurrent = r.ra === a && r.rb === b && r.rc === c;
                    return (
                      <tr
                        key={r.idx}
                        onClick={() => {
                          setA(r.ra);
                          setB(r.rb);
                          setC(r.rc);
                        }}
                        className={`cursor-pointer border-b border-line/60 transition ${
                          isCurrent
                            ? "bg-brand-soft font-extrabold text-ink ring-1 ring-inset ring-brand"
                            : "hover:bg-surface-2"
                        }`}
                      >
                        <td className="px-2 py-1.5">{r.ra}</td>
                        <td className="px-2 py-1.5">{r.rb}</td>
                        <td className="px-2 py-1.5">{r.rc}</td>
                        <td className="px-2 py-1.5 text-ink-2">{r.rp}</td>
                        <td className="px-2 py-1.5 text-ink-2">{r.rq}</td>
                        <td className="px-2 py-1.5">
                          <span
                            className={`inline-block min-w-[1.6rem] rounded px-1.5 py-0.5 font-extrabold ${
                              r.rx === 1 ? "bg-emerald-600 text-white" : "bg-slate-200 text-slate-700"
                            }`}
                          >
                            {r.rx}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

const SINGLE_GATE_INFO: Record<
  AllGate,
  { shapeRule: string; boolRule: string; trapNote: string }
> = {
  NOT: {
    shapeRule: "Right-pointing triangle + small output inversion circle (bubble). ONLY 1 input wire!",
    boolRule: "X = NOT A — inverts 0 → 1 and 1 → 0.",
    trapNote: "Never forget the small output bubble; without it, a plain triangle is a buffer, not a NOT gate!",
  },
  AND: {
    shapeRule: "Flat vertical input back + semicircular front (capital D-shape in anD), NO output bubble.",
    boolRule: "X = A AND B — outputs 1 ONLY when both A = 1 and B = 1 (column 0001).",
    trapNote: "Exaggerate the straight vertical left edge so examiners never confuse your AND with a curved OR.",
  },
  OR: {
    shapeRule: "Concave curved input back tapering to a pointed shield tip, NO output bubble.",
    boolRule: "X = A OR B — inclusive OR: outputs 1 when A = 1, B = 1, OR both = 1 (column 0111).",
    trapNote: "1 OR 1 = 1 (inclusive!), whereas 1 XOR 1 = 0.",
  },
  NAND: {
    shapeRule: "Flat-backed D-shape AND body + small output inversion bubble.",
    boolRule: "X = A NAND B = NOT (A AND B) — outputs 0 ONLY when both A = 1 and B = 1 (column 1110).",
    trapNote: "Compute A AND B first, then flip the bit! Never write (NOT A) AND (NOT B) — that is NOR!",
  },
  NOR: {
    shapeRule: "Curved OR shield body + small output inversion bubble.",
    boolRule: "X = A NOR B = NOT (A OR B) — outputs 1 ONLY when both A = 0 and B = 0 (column 1000).",
    trapNote: "Notice 'neither A nor B' ((NOT A) AND (NOT B)) equals A NOR B (column 1000).",
  },
  XOR: {
    shapeRule: "Curved OR shield + EXTRA separated curved line on the input side, NO output bubble.",
    boolRule: "X = A XOR B — difference detector: 1 when A ≠ B, 0 when A = B (column 0110).",
    trapNote: "Never add an output bubble to XOR — a bubble turns XOR into XNOR (1001)!",
  },
};

function SingleGateSymbolInspector() {
  const [gate, setGate] = useState<AllGate>("XOR");
  const [inA, setInA] = useState<number>(1);
  const [inB, setInB] = useState<number>(1);

  const outX = gate === "NOT" ? inA ^ 1 : evalGate2(gate, inA, inB);
  const info = SINGLE_GATE_INFO[gate];

  return (
    <WidgetFrame
      title="CIE 0478 Six-Gate Symbol Anatomy & Row (1, 1) Comparator"
      tryThis={[
        "Set `A = 1, B = 1` and switch across **OR**, **XOR**, **NAND**, and **NOR** to see how row `11` separates them instantly!",
        "Inspect the left edge and output tip of each symbol so your hand-drawn Paper 2 diagrams earn 100% of marks.",
      ]}
      caption={
        <span>
          <strong>{gate} Gate Examiner Check:</strong> {info.trapNote}
        </span>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Select CIE Gate"
          value={gate}
          onChange={setGate}
          options={[
            { value: "NOT", label: "NOT" },
            { value: "AND", label: "AND" },
            { value: "OR", label: "OR" },
            { value: "NAND", label: "NAND" },
            { value: "NOR", label: "NOR" },
            { value: "XOR", label: "XOR" },
          ]}
        />

        <div className="grid gap-4 sm:grid-cols-[1fr_240px]">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setInA((v) => v ^ 1)}
                className="btn btn-secondary btn-sm"
              >
                Toggle A = {inA}
              </button>
              {gate !== "NOT" ? (
                <button
                  type="button"
                  onClick={() => setInB((v) => v ^ 1)}
                  className="btn btn-secondary btn-sm"
                >
                  Toggle B = {inB}
                </button>
              ) : null}
            </div>

            <div className="rounded-xl border border-line bg-white p-2">
              <svg
                viewBox="0 0 380 140"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label={`Zoomed CIE 0478 symbol for ${gate} gate`}
                className="h-auto w-full"
              >
                <rect x={0} y={0} width={380} height={140} rx={8} fill="#f8fafc" />
                {gate === "NOT" ? (
                  <g>
                    <line
                      x1={56}
                      y1={70}
                      x2={166}
                      y2={70}
                      stroke={inA === 1 ? "#10b981" : "#64748b"}
                      strokeWidth={3.5}
                    />
                    <text x={44} y={75} textAnchor="end" fontSize={14} fontWeight={800} fontFamily="monospace" fill="#0f172a">
                      {`A=${inA}`}
                    </text>
                    <CieNotSvg cx={190} cy={70} active={outX === 1} />
                    <line
                      x1={221}
                      y1={70}
                      x2={316}
                      y2={70}
                      stroke={outX === 1 ? "#10b981" : "#64748b"}
                      strokeWidth={3.5}
                    />
                  </g>
                ) : (
                  <g>
                    <line
                      x1={56}
                      y1={52}
                      x2={gate === "XOR" ? 156 : 164}
                      y2={52}
                      stroke={inA === 1 ? "#10b981" : "#64748b"}
                      strokeWidth={3.5}
                    />
                    <line
                      x1={56}
                      y1={88}
                      x2={gate === "XOR" ? 156 : 164}
                      y2={88}
                      stroke={inB === 1 ? "#10b981" : "#64748b"}
                      strokeWidth={3.5}
                    />
                    <text x={44} y={57} textAnchor="end" fontSize={14} fontWeight={800} fontFamily="monospace" fill="#0f172a">
                      {`A=${inA}`}
                    </text>
                    <text x={44} y={93} textAnchor="end" fontSize={14} fontWeight={800} fontFamily="monospace" fill="#0f172a">
                      {`B=${inB}`}
                    </text>
                    <CieGate2Svg gate={gate} cx={190} cy={70} active={outX === 1} />
                    <line
                      x1={gate === "NAND" || gate === "NOR" ? 227 : 216}
                      y1={70}
                      x2={316}
                      y2={70}
                      stroke={outX === 1 ? "#10b981" : "#64748b"}
                      strokeWidth={3.5}
                    />
                  </g>
                )}
                <text
                  x={326}
                  y={75}
                  fontSize={14}
                  fontWeight={800}
                  fontFamily="monospace"
                  fill={outX === 1 ? "#059669" : "#334155"}
                >
                  {`X=${outX}`}
                </text>
              </svg>
            </div>

            <div className="space-y-1 text-sm text-ink">
              <div>
                <strong>CIE Symbol Shape:</strong> {info.shapeRule}
              </div>
              <div>
                <strong>Boolean Rule:</strong> {info.boolRule}
              </div>
            </div>
          </div>

          {/* Truth table for selected gate */}
          <div className="rounded-xl border border-line bg-surface p-3">
            <div className="mb-2 text-xs font-extrabold uppercase tracking-wide text-ink-2">
              {gate} Truth Table
            </div>
            <table className="w-full border-collapse text-center font-mono text-sm">
              <thead>
                <tr className="border-b border-line bg-surface-2 text-ink-2">
                  <th className="px-2 py-1.5">A</th>
                  {gate !== "NOT" ? <th className="px-2 py-1.5">B</th> : null}
                  <th className="px-2 py-1.5 text-brand">X</th>
                </tr>
              </thead>
              <tbody>
                {gate === "NOT"
                  ? [0, 1].map((ra) => {
                      const rx = ra ^ 1;
                      const active = ra === inA;
                      return (
                        <tr
                          key={ra}
                          onClick={() => setInA(ra)}
                          className={`cursor-pointer border-b border-line/60 ${active ? "bg-brand-soft font-extrabold" : ""}`}
                        >
                          <td className="px-2 py-1.5">{ra}</td>
                          <td className="px-2 py-1.5 font-extrabold">{rx}</td>
                        </tr>
                      );
                    })
                  : [
                      [0, 0],
                      [0, 1],
                      [1, 0],
                      [1, 1],
                    ].map(([ra, rb]) => {
                      const rx = evalGate2(gate, ra, rb);
                      const active = ra === inA && rb === inB;
                      return (
                        <tr
                          key={`${ra}${rb}`}
                          onClick={() => {
                            setInA(ra);
                            setInB(rb);
                          }}
                          className={`cursor-pointer border-b border-line/60 ${active ? "bg-brand-soft font-extrabold" : ""}`}
                        >
                          <td className="px-2 py-1.5">{ra}</td>
                          <td className="px-2 py-1.5">{rb}</td>
                          <td className="px-2 py-1.5 font-extrabold">{rx}</td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "logic-gates-circuit-builder",
    title: "3-Input CIE Logic Circuit & Live 8-Row Truth-Table Lab",
    blurb: "Toggle inputs A/B/C, wire up any CIE gate stages or presets, and watch signals light up in real time.",
    Component: CircuitTruthTableBuilder,
  },
  {
    id: "logic-gates-symbol-inspector",
    title: "Six-Gate CIE Symbol & Truth-Table Inspector",
    blurb: "Compare exact CIE shapes and row-(1,1) behaviour across NOT, AND, OR, NAND, NOR, and XOR.",
    Component: SingleGateSymbolInspector,
  },
];
