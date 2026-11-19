"use client";

import { useMemo, useState } from "react";
import { WidgetFrame, Slider, Stepper, Segmented, Readout, type WidgetDef } from "./kit";

type AlgoMode = "bubble" | "linear";
type PresetKey = "mixed" | "nearly" | "sorted" | "reverse";

const PRESETS: Record<PresetKey, { label: string; values: number[] }> = {
  mixed: { label: "Mixed [42, 17, 35, 9, 28]", values: [42, 17, 35, 9, 28] },
  nearly: { label: "Nearly Sorted [12, 8, 19, 25, 34]", values: [12, 8, 19, 25, 34] },
  sorted: { label: "Already Sorted [6, 14, 21, 30, 45]", values: [6, 14, 21, 30, 45] },
  reverse: { label: "Worst Reverse [50, 40, 30, 20, 10]", values: [50, 40, 30, 20, 10] },
};

interface BubbleStep {
  arr: number[];
  pass: number;
  cmpIdx: number | null; // 0-indexed left element being compared
  swappedThisStep: boolean;
  swapFlag: boolean;
  lastBound: number; // 1-indexed CIE Last
  tempVal: number | null;
  totalCmps: number;
  totalSwaps: number;
  lockedFrom: number; // 0-indexed tail start that is guaranteed sorted
  note: string;
  done: boolean;
}

function buildBubbleSteps(initial: number[], useSwapFlag: boolean, shrinkLast: boolean): BubbleStep[] {
  const steps: BubbleStep[] = [];
  const a = [...initial];
  const n = a.length;
  let totalCmps = 0;
  let totalSwaps = 0;
  const last = n - 1;

  steps.push({
    arr: [...a],
    pass: 0,
    cmpIdx: null,
    swappedThisStep: false,
    swapFlag: false,
    lastBound: last,
    tempVal: null,
    totalCmps: 0,
    totalSwaps: 0,
    lockedFrom: n,
    note: `Initial 1D array Scores[1:${n}]. Click Next Step to begin Pass 1 (Last = ${last}).`,
    done: false,
  });

  const maxPasses = n - 1;
  for (let p = 1; p <= maxPasses; p++) {
    let swapFlag = false;
    const bound = shrinkLast ? n - p : n - 1;
    for (let i = 0; i < bound; i++) {
      totalCmps++;
      const left = a[i];
      const right = a[i + 1];
      if (left > right) {
        a[i] = right;
        a[i + 1] = left;
        swapFlag = true;
        totalSwaps++;
        steps.push({
          arr: [...a],
          pass: p,
          cmpIdx: i,
          swappedThisStep: true,
          swapFlag,
          lastBound: bound,
          tempVal: left,
          totalCmps,
          totalSwaps,
          lockedFrom: shrinkLast ? n - (p - 1) : n,
          note: `Pass ${p}, Index=${i + 1}: ${left} > ${right} is TRUE → Swap via Temp ← ${left}! Swap ← TRUE.`,
          done: false,
        });
      } else {
        steps.push({
          arr: [...a],
          pass: p,
          cmpIdx: i,
          swappedThisStep: false,
          swapFlag,
          lastBound: bound,
          tempVal: null,
          totalCmps,
          totalSwaps,
          lockedFrom: shrinkLast ? n - (p - 1) : n,
          note: `Pass ${p}, Index=${i + 1}: ${left} > ${right} is FALSE → Keep order (no swap).`,
          done: false,
        });
      }
    }

    const lockedNow = shrinkLast ? n - p : p === maxPasses ? 0 : n;
    if (useSwapFlag && !swapFlag) {
      steps.push({
        arr: [...a],
        pass: p,
        cmpIdx: null,
        swappedThisStep: false,
        swapFlag: false,
        lastBound: bound,
        tempVal: null,
        totalCmps,
        totalSwaps,
        lockedFrom: 0,
        note: `End of Pass ${p}: Swap = FALSE (zero swaps in entire pass) → Early exit! Array is 100% sorted.`,
        done: true,
      });
      return steps;
    }

    if (p === maxPasses) {
      steps.push({
        arr: [...a],
        pass: p,
        cmpIdx: null,
        swappedThisStep: false,
        swapFlag,
        lastBound: 0,
        tempVal: null,
        totalCmps,
        totalSwaps,
        lockedFrom: 0,
        note: `Completed all ${maxPasses} passes (${totalCmps} comparisons, ${totalSwaps} swaps). Array sorted!`,
        done: true,
      });
      return steps;
    }

    steps.push({
      arr: [...a],
      pass: p,
      cmpIdx: null,
      swappedThisStep: false,
      swapFlag,
      lastBound: shrinkLast ? bound - 1 : bound,
      tempVal: null,
      totalCmps,
      totalSwaps,
      lockedFrom: lockedNow,
      note: `End of Pass ${p}: Swap = ${swapFlag ? "TRUE" : "FALSE"}${shrinkLast ? `, Last shrinks to ${bound - 1} (tail locked)` : ""}. Continue to Pass ${p + 1}.`,
      done: false,
    });
  }

  return steps;
}

interface LinearStep {
  index: number; // 1-indexed CIE Index
  found: boolean;
  comparisons: number;
  done: boolean;
  note: string;
}

function buildLinearSteps(arr: number[], target: number): LinearStep[] {
  const steps: LinearStep[] = [
    {
      index: 1,
      found: false,
      comparisons: 0,
      done: false,
      note: `Initialise Found ← FALSE, Index ← 1. Searching Scores[1:${arr.length}] for Target = ${target}.`,
    },
  ];
  for (let i = 0; i < arr.length; i++) {
    const idx1 = i + 1;
    if (arr[i] === target) {
      steps.push({
        index: idx1,
        found: true,
        comparisons: idx1,
        done: true,
        note: `Comparison ${idx1}: Scores[${idx1}] = ${arr[i]} matches Target (${target})! Found ← TRUE → Stop loop immediately at Index = ${idx1}.`,
      });
      return steps;
    }
    const isLast = idx1 === arr.length;
    steps.push({
      index: isLast ? idx1 + 1 : idx1 + 1,
      found: false,
      comparisons: idx1,
      done: isLast,
      note: isLast
        ? `Comparison ${idx1}: Scores[${idx1}] = ${arr[i]} <> ${target}. Index increments to ${idx1 + 1} (> ${arr.length}) → Stop! Output "Not found".`
        : `Comparison ${idx1}: Scores[${idx1}] = ${arr[i]} <> ${target}. Increment Index ← ${idx1 + 1}.`,
    });
  }
  return steps;
}

function SortSearchStepper() {
  const [mode, setMode] = useState<AlgoMode>("bubble");
  const [preset, setPreset] = useState<PresetKey>("mixed");
  const [useSwapFlag, setUseSwapFlag] = useState(true);
  const [shrinkLast, setShrinkLast] = useState(true);
  const [stepIdx, setStepIdx] = useState(0);
  const [targetVal, setTargetVal] = useState(35);

  const baseArr = PRESETS[preset].values;

  const bubbleSteps = useMemo(
    () => buildBubbleSteps(baseArr, useSwapFlag, shrinkLast),
    [baseArr, useSwapFlag, shrinkLast],
  );
  const linearSteps = useMemo(() => buildLinearSteps(baseArr, targetVal), [baseArr, targetVal]);

  const maxStep = mode === "bubble" ? bubbleSteps.length - 1 : linearSteps.length - 1;
  const safeIdx = Math.min(stepIdx, maxStep);
  const bCur = bubbleSteps[safeIdx];
  const lCur = linearSteps[safeIdx];

  const displayArr = mode === "bubble" ? bCur.arr : baseArr;
  const maxBar = Math.max(...displayArr, 50);

  return (
    <WidgetFrame
      title="Bubble Sort & Linear Search Step-by-Step Lab"
      tryThis={[
        "Pick **Already Sorted** in Bubble Sort and toggle the **Swap Flag** OFF vs ON — watch comparisons jump from **4** to **10** (or **16** without Shrinking Last)!",
        "Pick **Nearly Sorted [12, 8, 19, 25, 34]** and confirm why **2 passes** run (Pass 1 swaps 12 & 8; Pass 2 makes 0 swaps to prove it is sorted!).",
        "Switch to **Linear Search** and test a value not in the list (like `99`) to see `Index` finish at `6` (`N + 1`).",
      ]}
      caption={mode === "bubble" ? bCur.note : lCur.note}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented<AlgoMode>
            label="Algorithm"
            value={mode}
            onChange={(m) => {
              setMode(m);
              setStepIdx(0);
            }}
            options={[
              { value: "bubble", label: "🫧 Bubble Sort" },
              { value: "linear", label: "🔍 Linear Search" },
            ]}
          />
          <Segmented<PresetKey>
            label="Dataset"
            value={preset}
            onChange={(p) => {
              setPreset(p);
              setStepIdx(0);
              setTargetVal(PRESETS[p].values[2]);
            }}
            options={[
              { value: "mixed", label: "Mixed" },
              { value: "nearly", label: "Nearly Sorted" },
              { value: "sorted", label: "Sorted" },
              { value: "reverse", label: "Reverse" },
            ]}
          />
        </div>

        {mode === "bubble" ? (
          <div className="flex flex-wrap gap-3 rounded-xl border border-line bg-surface-2 p-3 text-sm">
            <label className="flex cursor-pointer items-center gap-2 font-semibold text-ink">
              <input
                type="checkbox"
                checked={useSwapFlag}
                onChange={(e) => {
                  setUseSwapFlag(e.target.checked);
                  setStepIdx(0);
                }}
              />
              Optimisation 1: <code>Swap</code> Boolean Flag (early exit)
            </label>
            <label className="flex cursor-pointer items-center gap-2 font-semibold text-ink">
              <input
                type="checkbox"
                checked={shrinkLast}
                onChange={(e) => {
                  setShrinkLast(e.target.checked);
                  setStepIdx(0);
                }}
              />
              Optimisation 2: Shrink <code>Last ← Last − 1</code> each pass
            </label>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-2 rounded-xl border border-line bg-surface-2 p-3 text-sm">
            <span className="font-bold text-ink-2">Choose <code>Target</code> value:</span>
            {[...baseArr, 99].map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => {
                  setTargetVal(v);
                  setStepIdx(0);
                }}
                className={`rounded-lg px-2.5 py-1 font-mono text-xs font-bold transition ${
                  targetVal === v ? "bg-brand text-white" : "bg-surface text-ink hover:bg-line"
                }`}
              >
                {v === 99 ? "99 (Not in array)" : v}
              </button>
            ))}
          </div>
        )}

        <svg
          viewBox="0 0 520 190"
          className="w-full rounded-xl border border-line bg-surface"
          role="img"
          aria-label="1-indexed CIE array visualiser for Bubble Sort and Linear Search"
        >
          {displayArr.map((val, i) => {
            const x = 48 + i * 88;
            const barH = Math.max(26, Math.round((val / maxBar) * 105));
            const y = 142 - barH;
            let fill = "#dbeafe";
            let stroke = "#2563eb";
            if (mode === "bubble") {
              const isCompared = bCur.cmpIdx !== null && (i === bCur.cmpIdx || i === bCur.cmpIdx + 1);
              const isLocked = i >= bCur.lockedFrom || bCur.done;
              if (isCompared) {
                fill = bCur.swappedThisStep ? "#fee2e2" : "#fef3c7";
                stroke = bCur.swappedThisStep ? "#dc2626" : "#d97706";
              } else if (isLocked) {
                fill = "#dcfce7";
                stroke = "#16a34a";
              }
            } else {
              const checkedIdx = lCur.found ? lCur.index - 1 : lCur.comparisons - 1;
              if (lCur.comparisons > 0 && i === checkedIdx) {
                fill = lCur.found ? "#dcfce7" : "#fef3c7";
                stroke = lCur.found ? "#16a34a" : "#d97706";
              } else if (i < checkedIdx) {
                fill = "#f1f5f9";
                stroke = "#94a3b8";
              }
            }
            return (
              <g key={`bar-${i}`}>
                <rect x={x} y={y} width={64} height={barH} rx={8} fill={fill} stroke={stroke} strokeWidth={2} />
                <text x={x + 32} y={y + barH / 2 + 5} textAnchor="middle" fontSize={15} fontWeight={800} fill="#0f172a">
                  {val}
                </text>
                <text x={x + 32} y={162} textAnchor="middle" fontSize={11} fontWeight={700} fill="#475569">
                  [{i + 1}]
                </text>
              </g>
            );
          })}
          <text x={260} y={182} textAnchor="middle" fontSize={10.5} fill="#64748b">
            1-indexed CIE Array: Scores[1] .. Scores[5]
          </text>
        </svg>

        {mode === "bubble" ? (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            <Readout label="Pass" value={bCur.pass === 0 ? "Start" : bCur.pass} />
            <Readout label="Comparisons" value={bCur.totalCmps} tone="ink" />
            <Readout label="Swaps" value={bCur.totalSwaps} tone={bCur.swappedThisStep ? "bad" : "good"} />
            <Readout label="Swap Flag" value={bCur.swapFlag ? "TRUE" : "FALSE"} tone={bCur.swapFlag ? "bad" : "good"} />
            <Readout label="Temp" value={bCur.tempVal ?? "—"} tone="ink" />
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            <Readout label="CIE Index" value={lCur.index} />
            <Readout label="Comparisons" value={lCur.comparisons} tone="ink" />
            <Readout label="Found Flag" value={lCur.found ? "TRUE" : "FALSE"} tone={lCur.found ? "good" : "bad"} />
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex gap-2">
            <button
              type="button"
              className="kbd px-3 py-1.5 text-sm font-bold"
              onClick={() => setStepIdx(0)}
              disabled={safeIdx === 0}
            >
              ⏮ Reset
            </button>
            <button
              type="button"
              className="kbd px-3 py-1.5 text-sm font-bold"
              onClick={() => setStepIdx(Math.max(0, safeIdx - 1))}
              disabled={safeIdx === 0}
            >
              ◀ Back
            </button>
            <button
              type="button"
              className="kbd px-3 py-1.5 text-sm font-bold"
              onClick={() => setStepIdx(Math.min(maxStep, safeIdx + 1))}
              disabled={safeIdx >= maxStep}
            >
              Next Step ▶
            </button>
            <button
              type="button"
              className="kbd px-3 py-1.5 text-sm font-bold"
              onClick={() => setStepIdx(maxStep)}
              disabled={safeIdx >= maxStep}
            >
              ⏭ Run to End
            </button>
          </div>
          <span className="text-xs font-bold text-ink-2">
            Step {safeIdx} of {maxStep}
          </span>
        </div>
      </div>
    </WidgetFrame>
  );
}

type LabTab = "testdata" | "tracetable";
type TraceScenario = "totals" | "minmax" | "divmod";

interface TraceRow {
  line: number;
  cols: Record<string, string>;
  explanation: string;
}

const TRACE_SCENARIOS: Record<
  TraceScenario,
  {
    label: string;
    inputsLabel: string;
    code: string[];
    headers: string[];
    rows: TraceRow[];
  }
> = {
  totals: {
    label: "Total & Pass Count",
    inputsLabel: "Test inputs: 64, 42, 75",
    code: [
      "1  Total ← 0 ; Pass ← 0",
      "2  FOR Count ← 1 TO 3",
      "3    INPUT Mark",
      "4    Total ← Total + Mark",
      "5    IF Mark >= 50 THEN Pass ← Pass + 1 ENDIF",
      "6  NEXT Count",
      "7  OUTPUT Total, \", \", Pass",
    ],
    headers: ["Count", "Mark", "Total", "Pass", "OUTPUT"],
    rows: [
      { line: 1, cols: { Total: "0", Pass: "0" }, explanation: "Line 1: Initialise Total ← 0 and Pass ← 0 before the loop." },
      { line: 5, cols: { Count: "1", Mark: "64", Total: "64", Pass: "1" }, explanation: "Count=1: Mark=64 → Total=64; 64 >= 50 is TRUE → Pass=1." },
      { line: 5, cols: { Count: "2", Mark: "42", Total: "106" }, explanation: "Count=2: Mark=42 → Total=106; 42 >= 50 is FALSE → Pass stays unchanged (leave blank!)." },
      { line: 5, cols: { Count: "3", Mark: "75", Total: "181", Pass: "2" }, explanation: "Count=3: Mark=75 → Total=181; 75 >= 50 is TRUE → Pass=2." },
      { line: 7, cols: { OUTPUT: "181, 2" }, explanation: "Line 7 (after NEXT Count): OUTPUT prints '181, 2' once at the end." },
    ],
  },
  minmax: {
    label: "Safe Min & Max",
    inputsLabel: "Test inputs: 28, 15, 34",
    code: [
      "1  INPUT Num",
      "2  Min ← Num ; Max ← Num",
      "3  FOR i ← 2 TO 3",
      "4    INPUT Num",
      "5    IF Num < Min THEN Min ← Num ENDIF",
      "6    IF Num > Max THEN Max ← Num ENDIF",
      "7  NEXT i",
      "8  OUTPUT Min, \" to \", Max",
    ],
    headers: ["i", "Num", "Min", "Max", "OUTPUT"],
    rows: [
      { line: 2, cols: { Num: "28", Min: "28", Max: "28" }, explanation: "Lines 1–2: Read 1st input (28) and initialise BOTH Min and Max to 28 (never Min ← 0!)." },
      { line: 6, cols: { i: "2", Num: "15", Min: "15" }, explanation: "i=2: Num=15. 15 < 28 is TRUE → Min ← 15; 15 > 28 is FALSE → Max stays blank." },
      { line: 6, cols: { i: "3", Num: "34", Max: "34" }, explanation: "i=3: Num=34. 34 < 15 is FALSE; 34 > 28 is TRUE → Max ← 34." },
      { line: 8, cols: { OUTPUT: "15 to 34" }, explanation: "Line 8: Loop ends and outputs '15 to 34'." },
    ],
  },
  divmod: {
    label: "DIV / MOD Digit Sum",
    inputsLabel: "Initial N = 207",
    code: [
      "1  N ← 207 ; Sum ← 0",
      "2  REPEAT",
      "3    Digit ← N MOD 10",
      "4    Sum ← Sum + Digit",
      "5    N ← N DIV 10",
      "6  UNTIL N = 0",
      "7  OUTPUT Sum",
    ],
    headers: ["N", "Digit", "Sum", "OUTPUT"],
    rows: [
      { line: 1, cols: { N: "207", Sum: "0" }, explanation: "Line 1: Set N ← 207 and Sum ← 0." },
      { line: 6, cols: { Digit: "7", Sum: "7", N: "20" }, explanation: "Pass 1: 207 MOD 10 = 7, Sum = 7, 207 DIV 10 = 20. N = 0 is FALSE → repeat!" },
      { line: 6, cols: { Digit: "0", Sum: "7", N: "2" }, explanation: "Pass 2: 20 MOD 10 = 0, Sum = 7, 20 DIV 10 = 2. N = 0 is FALSE → repeat!" },
      { line: 6, cols: { Digit: "2", Sum: "9", N: "0" }, explanation: "Pass 3: 2 MOD 10 = 2, Sum = 9, 2 DIV 10 = 0. Now N = 0 is TRUE → loop stops!" },
      { line: 7, cols: { OUTPUT: "9" }, explanation: "Line 7: OUTPUT Sum prints 9." },
    ],
  },
};

function TraceAndTestDataExplorer() {
  const [tab, setTab] = useState<LabTab>("testdata");
  const [minLim, setMinLim] = useState(1);
  const [maxLim, setMaxLim] = useState(100);
  const [rawTest, setRawTest] = useState("100");
  const [buggyStrict, setBuggyStrict] = useState(false);

  const [scenario, setScenario] = useState<TraceScenario>("totals");
  const [rowCount, setRowCount] = useState(1);

  const safeMax = Math.max(minLim + 5, maxLim);

  const verdict = useMemo(() => {
    const trimmed = rawTest.trim();
    if (trimmed === "") {
      return {
        category: "Abnormal (Erroneous) — Fails Presence Check",
        accepted: false,
        detail: 'Input is blank/empty. Rejected immediately by a Presence check (Input <> "").',
      };
    }
    if (!/^-?\d+$/.test(trimmed)) {
      return {
        category: "Abnormal (Erroneous) — Fails Type Check",
        accepted: false,
        detail: `"${trimmed}" is not an INTEGER. Rejected by a Type check before any range comparison.`,
      };
    }
    const n = Number(trimmed);
    const codeAccepts = buggyStrict ? n > minLim && n < safeMax : n >= minLim && n <= safeMax;
    const specAccepts = n >= minLim && n <= safeMax;

    let category = "";
    if (n === minLim || n === safeMax) {
      category = "Extreme Data (AND part of Boundary Pair!)";
    } else if (n === minLim - 1 || n === safeMax + 1) {
      category = "Boundary Reject Value (Abnormal just outside limit)";
    } else if (specAccepts) {
      category = "Normal Test Data";
    } else {
      category = "Abnormal (Erroneous) — Out of Range";
    }

    const bugAlert =
      specAccepts !== codeAccepts
        ? ` 🐛 OFF-BY-ONE BUG CAUGHT! Specification expects ${n} to be ACCEPTED, but buggy '<' / '>' code REJECTED it!`
        : "";

    return {
      category,
      accepted: codeAccepts,
      detail: `Under ${buggyStrict ? `buggy (X > ${minLim} AND X < ${safeMax})` : `correct (X >= ${minLim} AND X <= ${safeMax})`}, ${n} is ${codeAccepts ? "ACCEPTED ✅" : "REJECTED ❌"}.${bugAlert}`,
    };
  }, [rawTest, minLim, safeMax, buggyStrict]);

  const sc = TRACE_SCENARIOS[scenario];
  const visibleRows = sc.rows.slice(0, Math.min(rowCount, sc.rows.length));
  const activeLine = visibleRows[visibleRows.length - 1]?.line ?? 1;

  return (
    <WidgetFrame
      title="CIE Test-Data Boundary Classifier & Live Trace-Table Runner"
      tryThis={[
        "In **Test-Data Lab**, click quick-test buttons `0`, `1`, `100`, `101` and toggle the **Off-by-One (< / >) Bug** ON to see why **Extreme/Boundary** data catches bugs that Normal data (`45`) misses!",
        "Switch to **Trace-Table Runner** and step row-by-row to see why unchanged variables stay blank until reassigned.",
      ]}
      caption={tab === "testdata" ? verdict.detail : visibleRows[visibleRows.length - 1]?.explanation}
    >
      <div className="space-y-4">
        <Segmented<LabTab>
          label="Explorer Mode"
          value={tab}
          onChange={setTab}
          options={[
            { value: "testdata", label: "🧪 Validation & Test-Data Lab" },
            { value: "tracetable", label: "📋 Live Trace-Table Stepper" },
          ]}
        />

        {tab === "testdata" ? (
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <Slider
                label="Minimum Valid Integer (Min)"
                value={minLim}
                min={0}
                max={40}
                onChange={(v) => {
                  setMinLim(v);
                  if (maxLim < v + 5) setMaxLim(v + 5);
                }}
              />
              <Slider
                label="Maximum Valid Integer (Max)"
                value={safeMax}
                min={minLim + 5}
                max={120}
                onChange={setMaxLim}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line bg-surface-2 p-3 text-sm">
              <div className="flex flex-wrap items-center gap-2">
                <label className="font-bold text-ink" htmlFor="cie-test-input">
                  Test Input:
                </label>
                <input
                  id="cie-test-input"
                  type="text"
                  value={rawTest}
                  onChange={(e) => setRawTest(e.target.value)}
                  className="w-28 rounded-lg border border-line bg-surface px-2.5 py-1 font-mono text-sm font-bold text-ink"
                />
                {[
                  String(minLim - 1),
                  String(minLim),
                  String(Math.floor((minLim + safeMax) / 2)),
                  String(safeMax),
                  String(safeMax + 1),
                  "abc",
                  "",
                ].map((sample, idx) => (
                  <button
                    key={`${sample}-${idx}`}
                    type="button"
                    onClick={() => setRawTest(sample)}
                    className="rounded-lg bg-surface px-2 py-1 font-mono text-xs font-bold text-ink hover:bg-line"
                  >
                    {sample === "" ? '"" (Blank)' : sample}
                  </button>
                ))}
              </div>
              <label className="flex cursor-pointer items-center gap-2 font-semibold text-bad">
                <input
                  type="checkbox"
                  checked={buggyStrict}
                  onChange={(e) => setBuggyStrict(e.target.checked)}
                />
                Simulate <code>&lt;</code> / <code>&gt;</code> Off-by-One Bug
              </label>
            </div>

            <svg
              viewBox="0 0 520 118"
              className="w-full rounded-xl border border-line bg-surface"
              role="img"
              aria-label="Validation boundary and extreme test data map"
            >
              <rect x={20} y={44} width={105} height={30} rx={5} fill="#fee2e2" stroke="#dc2626" strokeWidth={1.5} />
              <text x={72} y={63} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#991b1b">
                Reject (&lt; {minLim})
              </text>
              <rect x={125} y={44} width={270} height={30} rx={5} fill="#dcfce7" stroke="#16a34a" strokeWidth={2} />
              <text x={260} y={63} textAnchor="middle" fontSize={11} fontWeight={800} fill="#166534">
                VALID RANGE: {minLim} .. {safeMax} (Inclusive)
              </text>
              <rect x={395} y={44} width={105} height={30} rx={5} fill="#fee2e2" stroke="#dc2626" strokeWidth={1.5} />
              <text x={448} y={63} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#991b1b">
                Reject (&gt; {safeMax})
              </text>
              <text x={125} y={28} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#92400e">
                Lower Boundary Pair: ({minLim - 1}, {minLim})
              </text>
              <text x={395} y={28} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#92400e">
                Upper Boundary Pair: ({safeMax}, {safeMax + 1})
              </text>
              <text x={260} y={98} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#166534">
                Extreme Data (BOTH Accepted): {minLim} and {safeMax} ONLY
              </text>
            </svg>

            <div className="grid gap-2 sm:grid-cols-2">
              <Readout label="CIE Test Data Category" value={verdict.category} tone="brand" />
              <Readout
                label="Program Outcome"
                value={verdict.accepted ? "ACCEPTED ✅" : "REJECTED ❌"}
                tone={verdict.accepted ? "good" : "bad"}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Segmented<TraceScenario>
                label="Algorithm"
                value={scenario}
                onChange={(s) => {
                  setScenario(s);
                  setRowCount(1);
                }}
                options={[
                  { value: "totals", label: "Total & Count" },
                  { value: "minmax", label: "Safe Min/Max" },
                  { value: "divmod", label: "DIV/MOD Loop" },
                ]}
              />
              <Stepper
                label="Trace Row"
                value={Math.min(rowCount, sc.rows.length)}
                min={1}
                max={sc.rows.length}
                onChange={setRowCount}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="min-w-0 overflow-x-auto rounded-xl bg-slate-900 p-3 font-mono text-xs text-slate-100">
                <div className="mb-2 text-[11px] font-bold uppercase tracking-wide text-amber-300">
                  {sc.inputsLabel}
                </div>
                {sc.code.map((ln, idx) => {
                  const lineNo = idx + 1;
                  const active = lineNo === activeLine;
                  return (
                    <div
                      key={ln}
                      className={`rounded px-2 py-1 ${active ? "bg-amber-400/20 font-bold text-amber-200" : "text-slate-200"}`}
                    >
                      {ln}
                    </div>
                  );
                })}
              </div>

              <div className="min-w-0 overflow-x-auto rounded-xl border border-line bg-surface">
                <table className="w-full border-collapse text-center font-mono text-sm">
                  <thead>
                    <tr className="bg-surface-2 text-xs font-extrabold text-ink">
                      {sc.headers.map((h) => (
                        <th key={h} className="border-b border-line px-2.5 py-2">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {visibleRows.map((r, rIdx) => (
                      <tr
                        key={`row-${rIdx}`}
                        className={rIdx === visibleRows.length - 1 ? "bg-amber-50/60 font-bold" : ""}
                      >
                        {sc.headers.map((h) => (
                          <td key={h} className="border-b border-line px-2.5 py-2 text-ink">
                            {r.cols[h] ?? ""}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "algorithms-testing-sort-search",
    title: "Bubble Sort & Linear Search Stepper",
    blurb: "Step comparison-by-comparison through CIE Bubble Sort (with Swap & Last optimisations) and Linear Search.",
    Component: SortSearchStepper,
  },
  {
    id: "algorithms-testing-trace-testdata",
    title: "Test-Data Boundary Lab & Live Trace Table",
    blurb: "Contrast Extreme vs Boundary test data with a simulated off-by-one bug, and dry-run CIE trace tables row-by-row.",
    Component: TraceAndTestDataExplorer,
  },
];
