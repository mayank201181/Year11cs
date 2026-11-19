"use client";

import { useState } from "react";
import { WidgetFrame, Slider, Stepper, Segmented, Readout, type WidgetDef } from "./kit";

const UNSIGNED_WEIGHTS = [128, 64, 32, 16, 8, 4, 2, 1] as const;
const SIGNED_WEIGHTS = [-128, 64, 32, 16, 8, 4, 2, 1] as const;

function toBin8(v: number): string {
  return ((v & 0xff) >>> 0).toString(2).padStart(8, "0");
}

function BitFlipperWidget() {
  const [byteVal, setByteVal] = useState<number>(0xad); // 10101101 = 173 unsigned / -83 signed

  const bits = UNSIGNED_WEIGHTS.map((w) => ((byteVal & w) !== 0 ? 1 : 0));
  const unsignedVal = byteVal & 0xff;
  const signedVal = (byteVal & 0x80) !== 0 ? -128 + (byteVal & 0x7f) : byteVal & 0x7f;
  const upperNib = (byteVal >>> 4) & 0x0f;
  const lowerNib = byteVal & 0x0f;
  const hexUpper = upperNib.toString(16).toUpperCase();
  const hexLower = lowerNib.toString(16).toUpperCase();

  const toggleBit = (idx: number) => {
    const mask = 1 << (7 - idx);
    setByteVal((prev) => (prev ^ mask) & 0xff);
  };

  const flipAllAndAddOne = () => {
    setByteVal((prev) => ((~prev + 1) & 0xff));
  };

  const activeUnsignedTerms = UNSIGNED_WEIGHTS.filter((w) => (byteVal & w) !== 0);
  const activeSignedTerms = SIGNED_WEIGHTS.filter((_, i) => bits[i] === 1);

  return (
    <WidgetFrame
      title="8-Bit Binary, Hexadecimal & Two's Complement Live Bit-Flipper"
      tryThis={[
        "Click individual bits to make **−42** in Two's Complement (`11010110`), then press **Negate (Flip + 1)** to verify `+42`!",
        "Load **10000000** (`−128`) vs **11111111** (`−1`) to see why adding positive bits makes a negative byte *less* negative.",
        "Watch how each 4-bit **nibble** (`8, 4, 2, 1`) updates its own hex digit independently (`00` to `FF`).",
      ]}
      caption={
        <div className="space-y-1.5">
          <div>
            <strong>Unsigned Base-2 Sum:</strong>{" "}
            {activeUnsignedTerms.length ? `${activeUnsignedTerms.join(" + ")} = ${unsignedVal}` : "0 (all bits OFF)"}
          </div>
          <div>
            <strong>8-Bit Two&apos;s Complement Sum:</strong>{" "}
            {activeSignedTerms.length
              ? `${activeSignedTerms.map((w, idx) => (idx === 0 ? String(w) : `+ ${w}`)).join(" ")} = ${signedVal > 0 ? `+${signedVal}` : signedVal}`
              : "0 (all bits OFF)"}
            {byteVal === 0x80 ? (
              <span className="ml-1.5 font-semibold text-bad">
                (Edge case: +128 cannot fit in 8-bit Two&apos;s Complement −128..+127, so Flip + 1 wraps −128 back to −128!)
              </span>
            ) : null}
          </div>
          <div>
            <strong>Hex Nibbles:</strong> Upper nibble{" "}
            <code className="font-bold">{bits.slice(0, 4).join("")}</code> = {upperNib} (<code>{hexUpper}</code>) · Lower nibble{" "}
            <code className="font-bold">{bits.slice(4).join("")}</code> = {lowerNib} (<code>{hexLower}</code>) →{" "}
            <code className="font-bold">{hexUpper}{hexLower}</code>
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        {/* Preset buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-ink-2">Quick Presets:</span>
          {[
            { label: "0 (00)", val: 0x00 },
            { label: "+127 (7F)", val: 0x7f },
            { label: "−128 (80)", val: 0x80 },
            { label: "−1 (FF)", val: 0xff },
            { label: "173 / −83 (AD)", val: 0xad },
            { label: "−42 (D6)", val: 0xd6 },
          ].map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => setByteVal(p.val)}
              className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                byteVal === p.val ? "border-brand bg-brand-soft text-brand" : "border-line bg-surface text-ink-2 hover:text-ink"
              }`}
            >
              {p.label}
            </button>
          ))}
          <button
            type="button"
            onClick={flipAllAndAddOne}
            className="ml-auto rounded-lg bg-brand px-3 py-1.5 text-xs font-extrabold text-white shadow-sm transition hover:opacity-90"
          >
            ⇄ Two&apos;s Comp Negate (Flip + 1)
          </button>
        </div>

        {/* Interactive 8-bit switches split into two nibbles */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {[0, 1].map((nibIdx) => {
            const start = nibIdx * 4;
            const isUpper = nibIdx === 0;
            return (
              <div
                key={nibIdx}
                className="rounded-xl border border-line bg-surface-2 p-3"
              >
                <div className="mb-2 flex items-center justify-between text-xs font-bold text-ink-2">
                  <span>{isUpper ? "UPPER NIBBLE (Bits 7..4)" : "LOWER NIBBLE (Bits 3..0)"}</span>
                  <span className="rounded bg-surface px-2 py-0.5 font-mono text-sm font-extrabold text-brand">
                    Hex: {isUpper ? hexUpper : hexLower}
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[0, 1, 2, 3].map((offset) => {
                    const i = start + offset;
                    const bit = bits[i];
                    const uWeight = UNSIGNED_WEIGHTS[i];
                    const sWeight = SIGNED_WEIGHTS[i];
                    const isMsb = i === 0;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => toggleBit(i)}
                        aria-label={`Toggle bit ${7 - i} (unsigned ${uWeight})`}
                        className={`flex flex-col items-center rounded-xl border-2 px-2 py-2.5 transition ${
                          bit === 1
                            ? isMsb
                              ? "border-bad bg-bad-soft text-bad shadow-sm"
                              : "border-brand bg-brand-soft text-brand shadow-sm"
                            : "border-line bg-surface text-ink-2 hover:border-ink-2"
                        }`}
                      >
                        <span className="text-[10px] font-bold uppercase">
                          Unsigned {uWeight}
                        </span>
                        <span className={`text-[11px] font-extrabold ${isMsb ? "text-bad" : "text-good"}`}>
                          2&apos;s: {sWeight > 0 ? `+${sWeight}` : sWeight}
                        </span>
                        <span className="my-1 font-mono text-2xl font-black">{bit}</span>
                        <span className="text-[10px] text-ink-2">Nibble {8 >> offset}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Readouts */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Readout label="8-Bit Binary" value={<span className="font-mono">{toBin8(byteVal)}</span>} tone="ink" />
          <Readout label="Hexadecimal" value={<span className="font-mono">0x{hexUpper}{hexLower}</span>} tone="brand" />
          <Readout label="Unsigned (0..255)" value={unsignedVal} tone="good" />
          <Readout
            label="Two's Comp (−128..+127)"
            value={signedVal > 0 ? `+${signedVal}` : signedVal}
            tone={signedVal < 0 ? "bad" : "good"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

function ShiftAndOverflowLab() {
  const [mode, setMode] = useState<"shift" | "add">("shift");
  // Shift state
  const [shiftInput, setShiftInput] = useState<number>(92); // 01011100
  const [dir, setDir] = useState<"left" | "right">("right");
  const [places, setPlaces] = useState<number>(3);
  // Addition state
  const [addA, setAddA] = useState<number>(180);
  const [addB, setAddB] = useState<number>(108);

  const inBin = toBin8(shiftInput);
  const shiftedVal = dir === "left" ? (shiftInput << places) & 0xff : shiftInput >>> places;
  const shiftedBin = toBin8(shiftedVal);
  const droppedBits = dir === "left" ? inBin.slice(0, places) : inBin.slice(8 - places);
  const lostOneBit = droppedBits.includes("1");
  const factor = 1 << places;

  // Addition column carries
  const sumFull = addA + addB;
  const sum8 = sumFull & 0xff;
  const overflow9 = sumFull > 255;
  const carries: number[] = Array(9).fill(0);
  for (let bit = 0; bit < 8; bit++) {
    const aBit = (addA >>> bit) & 1;
    const bBit = (addB >>> bit) & 1;
    const col = aBit + bBit + carries[bit];
    carries[bit + 1] = col >= 2 ? 1 : 0;
  }

  return (
    <WidgetFrame
      title="Logical Binary Shift & 8-Bit Addition Overflow Explorer"
      tryThis={[
        "In **Logical Shift** mode, shift `92` (`01011100`) **Right by 3** to watch the dropped `1`-bit truncate `11.5` to `11`!",
        "Switch direction to **Left by 2** on `92` (`92 × 4 = 368 > 255`) to trigger **MSB left-shift overflow**.",
        "Switch to **8-Bit Adder** mode and slide `A` and `B` past `A + B = 255` to watch the **9th carry-out bit** light up!",
      ]}
      caption={
        mode === "shift" ? (
          <div>
            {dir === "left" ? (
              lostOneBit ? (
                <span className="font-semibold text-bad">
                  ⚠️ Overflow Error! Shifting {shiftInput} left by {places} tries to compute {shiftInput} × {factor} = {shiftInput * factor} (&gt; 255), dropping most-significant bit(s) <code>{droppedBits}</code> off the left end and leaving {shiftedVal}.
                </span>
              ) : (
                <span>
                  ✅ Clean Multiplication: <code>{inBin}</code> ({shiftInput}) shifted left by {places} pads <code>{"0".repeat(places)}</code> on the right → <code>{shiftedBin}</code> ({shiftInput} × 2<sup>{places}</sup> = {shiftedVal}).
                </span>
              )
            ) : lostOneBit ? (
              <span className="font-semibold text-bad">
                ⚠️ Loss of Precision (Truncation)! Shifting {shiftInput} right by {places} drops least-significant bit(s) <code>{droppedBits}</code> containing a <code>1</code>, truncating {shiftInput} ÷ {factor} = {(shiftInput / factor).toFixed(3).replace(/\.?0+$/, "")} down to {shiftedVal}.
              </span>
            ) : (
              <span>
                ✅ Exact Integer Division: <code>{inBin}</code> ({shiftInput}) shifted right by {places} pads <code>{"0".repeat(places)}</code> on the left → <code>{shiftedBin}</code> ({shiftInput} ÷ 2<sup>{places}</sup> = {shiftedVal}).
              </span>
            )}
          </div>
        ) : overflow9 ? (
          <span className="font-semibold text-bad">
            ⚠️ CIE 8-Bit Overflow! {addA} + {addB} = {sumFull} (&gt; 255). A 9th carry-out bit (weight 256) spills past the MSB because an 8-bit register can store at most 255, leaving <code>{toBin8(sum8)}</code> ({sum8}) inside the register!
          </span>
        ) : (
          <span>
            ✅ Fits in 8 Bits: {addA} + {addB} = {sumFull} (≤ 255). Carry out of MSB is <code>0</code>, so <code>{toBin8(sum8)}</code> is stored accurately with no overflow.
          </span>
        )
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Lab Mode"
          value={mode}
          onChange={setMode}
          options={[
            { value: "shift", label: "⇄ Logical Shifts (× 2ⁿ / ÷ 2ⁿ)" },
            { value: "add", label: "➕ 8-Bit Addition & Overflow" },
          ]}
        />

        {mode === "shift" ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Slider
                label="Unsigned Input (0..255)"
                value={shiftInput}
                min={0}
                max={255}
                onChange={setShiftInput}
                format={(v) => `${v} (${toBin8(v)})`}
              />
              <div className="flex flex-col justify-center gap-1">
                <span className="text-xs font-bold uppercase text-ink-2">Direction</span>
                <Segmented
                  label="Shift Direction"
                  value={dir}
                  onChange={setDir}
                  options={[
                    { value: "left", label: "◀ Left (× 2ⁿ)" },
                    { value: "right", label: "Right (÷ 2ⁿ) ▶" },
                  ]}
                />
              </div>
              <Stepper label="Shift Places (n)" value={places} min={1} max={4} onChange={setPlaces} />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Readout label="Before Shift" value={<span className="font-mono">{inBin} ({shiftInput})</span>} tone="ink" />
              <Readout label="After Shift (8-bit)" value={<span className="font-mono">{shiftedBin} ({shiftedVal})</span>} tone="brand" />
              <Readout label="Dropped Edge Bits" value={<span className="font-mono">{droppedBits}</span>} tone={lostOneBit ? "bad" : "good"} />
              <Readout
                label="Status"
                value={lostOneBit ? (dir === "left" ? "MSB Overflow!" : "LSB Truncated!") : `Exact ${dir === "left" ? `×${factor}` : `÷${factor}`}`}
                tone={lostOneBit ? "bad" : "good"}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Slider label="Register A (0..255)" value={addA} min={0} max={255} onChange={setAddA} format={(v) => `${v} (${toBin8(v)})`} />
              <Slider label="Register B (0..255)" value={addB} min={0} max={255} onChange={setAddB} format={(v) => `${v} (${toBin8(v)})`} />
            </div>

            {/* Live column addition grid */}
            <div className="overflow-x-auto rounded-xl border border-line bg-surface-2 p-3">
              <table className="w-full text-center font-mono text-sm">
                <thead>
                  <tr className="text-xs text-ink-2">
                    <th className="px-1">Bit</th>
                    <th className="px-1 text-bad">9th (256)</th>
                    {UNSIGNED_WEIGHTS.map((w) => (
                      <th key={w} className="px-1">{w}</th>
                    ))}
                    <th className="px-2 text-right font-sans">Denary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-sans text-xs font-bold text-ink-2">A</td>
                    <td className="text-ink-2">·</td>
                    {toBin8(addA).split("").map((b, idx) => (
                      <td key={idx} className="font-bold text-ink">{b}</td>
                    ))}
                    <td className="px-2 text-right font-sans font-bold">{addA}</td>
                  </tr>
                  <tr className="border-b border-line">
                    <td className="font-sans text-xs font-bold text-brand">+ B</td>
                    <td className="text-ink-2">·</td>
                    {toBin8(addB).split("").map((b, idx) => (
                      <td key={idx} className="font-bold text-ink">{b}</td>
                    ))}
                    <td className="px-2 text-right font-sans font-bold">+ {addB}</td>
                  </tr>
                  <tr>
                    <td className="font-sans text-xs font-extrabold text-good">Sum</td>
                    <td className={`rounded font-black ${overflow9 ? "bg-bad-soft text-bad" : "text-ink-2"}`}>
                      {carries[8]}
                    </td>
                    {toBin8(sum8).split("").map((b, idx) => (
                      <td key={idx} className="text-base font-extrabold text-brand">{b}</td>
                    ))}
                    <td className={`px-2 text-right font-sans font-extrabold ${overflow9 ? "text-bad" : "text-good"}`}>
                      {overflow9 ? `${sum8} (True ${sumFull})` : sum8}
                    </td>
                  </tr>
                  <tr className="text-xs text-ink-2">
                    <td className="font-sans">Carry in</td>
                    <td className={carries[8] ? "font-bold text-bad" : ""}>{carries[8]}</td>
                    {[7, 6, 5, 4, 3, 2, 1, 0].map((bit) => (
                      <td key={bit} className={carries[bit] ? "font-bold text-brand" : ""}>{carries[bit]}</td>
                    ))}
                    <td className="px-2 text-right font-sans text-[11px]">
                      {overflow9 ? "OVERFLOW!" : "No overflow"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "number-systems-bit-flipper",
    title: "8-Bit Binary, Hex & Two's Complement Bit-Flipper",
    blurb: "Flip individual bits to compare unsigned (0–255), 8-bit Two's Complement (−128 to +127) and hexadecimal nibbles live.",
    Component: BitFlipperWidget,
  },
  {
    id: "number-systems-shift-overflow",
    title: "Logical Shift & Binary Addition Overflow Lab",
    blurb: "Step through logical left/right shifts and 8-bit column addition to spot MSB overflow and LSB truncation.",
    Component: ShiftAndOverflowLab,
  },
];
