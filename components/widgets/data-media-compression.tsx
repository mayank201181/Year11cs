"use client";

import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

function fmtExact(n: number): string {
  if (Number.isInteger(n)) return n.toLocaleString("en-GB");
  return Number(n.toFixed(4)).toString();
}

const WIDTH_PRESETS = [64, 128, 256, 512, 1024, 2048] as const;
const HEIGHT_PRESETS = [64, 128, 256, 512, 1024] as const;
const DEPTH_OPTIONS = [
  { bits: 1, label: "1-bit (2 colours)" },
  { bits: 4, label: "4-bit (16 colours)" },
  { bits: 8, label: "8-bit (256 colours)" },
  { bits: 16, label: "16-bit (65,536)" },
  { bits: 24, label: "24-bit True RGB" },
] as const;

const RATE_PRESETS = [8192, 16384, 32768, 44100] as const;

function MediaFileSizeCalculator() {
  const [kind, setKind] = useState<"bitmap" | "sound">("bitmap");
  // Bitmap state
  const [wIdx, setWIdx] = useState<number>(3); // 512
  const [hIdx, setHIdx] = useState<number>(2); // 256
  const [depthBits, setDepthBits] = useState<number>(8);
  // Sound state
  const [rateIdx, setRateIdx] = useState<number>(1); // 16384 Hz
  const [sampleRes, setSampleRes] = useState<"8" | "16" | "24">("16");
  const [durationSec, setDurationSec] = useState<number>(16);
  const [channels, setChannels] = useState<"1" | "2">("2");

  const width = WIDTH_PRESETS[wIdx];
  const height = HEIGHT_PRESETS[hIdx];
  const maxColours = depthBits === 24 ? 16777216 : 1 << depthBits;

  const rate = RATE_PRESETS[rateIdx];
  const sBits = Number(sampleRes);
  const ch = Number(channels);

  const totalBits =
    kind === "bitmap"
      ? width * height * depthBits
      : rate * sBits * durationSec * ch;

  const totalBytes = totalBits / 8;
  const totalKiB = totalBytes / 1024;
  const totalMiB = totalKiB / 1024;
  const wrongSiKB = totalBytes / 1000;

  return (
    <WidgetFrame
      title="Bitmap Image & Sound Sampling IEC File-Size Lab (÷ 8, ÷ 1024)"
      tryThis={[
        "In **Bitmap** mode, set `512 × 256` with **8-bit (256 colours)** and trace why the size is `128 KiB` — NOT `131.072` (`÷ 1000` trap!) and NOT `32,768 KiB` (`× 256` colours trap!).",
        "Switch to **Sound Sampling** mode, toggle **Mono vs Stereo**, and watch both the sampled staircase wave and exact `KiB` / `MiB` double!",
      ]}
      caption={
        <div className="space-y-1.5">
          {kind === "bitmap" ? (
            <div>
              <strong>CIE Working Formula:</strong>{" "}
              <code>
                ({width} × {height} × {depthBits} bits) ÷ (8 × 1024)
              </code>{" "}
              = <strong>{fmtExact(totalKiB)} KiB</strong> ({fmtExact(totalMiB)} MiB).
            </div>
          ) : (
            <div>
              <strong>CIE Working Formula:</strong>{" "}
              <code>
                ({rate} Hz × {sBits} bits × {durationSec} s × {ch} ch) ÷ (8 × 1024)
              </code>{" "}
              = <strong>{fmtExact(totalKiB)} KiB</strong> ({fmtExact(totalMiB)} MiB).
            </div>
          )}
          <div className="text-xs text-bad">
            ❌ <strong>Exam Trap Check:</strong> Dividing bytes by <code>1000</code> instead of <code>1024</code> would give{" "}
            <code>{fmtExact(wrongSiKB)}</code> — losing the final accuracy mark on CIE 0478!
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Media Type"
          value={kind}
          onChange={setKind}
          options={[
            { value: "bitmap", label: "🖼️ Bitmap Image (W × H × Depth)" },
            { value: "sound", label: "🔊 Sound Sampling (Rate × Res × Time × Ch)" },
          ]}
        />

        {kind === "bitmap" ? (
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Slider
                label="Image Width (pixels)"
                value={wIdx}
                min={0}
                max={WIDTH_PRESETS.length - 1}
                onChange={setWIdx}
                format={(i) => `${WIDTH_PRESETS[i]} px`}
              />
              <Slider
                label="Image Height (pixels)"
                value={hIdx}
                min={0}
                max={HEIGHT_PRESETS.length - 1}
                onChange={setHIdx}
                format={(i) => `${HEIGHT_PRESETS[i]} px`}
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase text-ink-2">Colour Depth (2ⁿ = {maxColours.toLocaleString("en-GB")} colours):</span>
              {DEPTH_OPTIONS.map((o) => (
                <button
                  key={o.bits}
                  type="button"
                  onClick={() => setDepthBits(o.bits)}
                  className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                    depthBits === o.bits ? "border-brand bg-brand-soft text-brand" : "border-line bg-surface text-ink-2 hover:text-ink"
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Slider
                label="Sample Rate (Hz)"
                value={rateIdx}
                min={0}
                max={RATE_PRESETS.length - 1}
                onChange={setRateIdx}
                format={(i) => `${RATE_PRESETS[i].toLocaleString("en-GB")} Hz`}
              />
              <Slider
                label="Duration (seconds)"
                value={durationSec}
                min={2}
                max={60}
                step={2}
                onChange={setDurationSec}
                format={(s) => `${s} s`}
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase text-ink-2">Resolution:</span>
                <Segmented
                  label="Sample Resolution"
                  value={sampleRes}
                  onChange={setSampleRes}
                  options={[
                    { value: "8", label: "8-bit" },
                    { value: "16", label: "16-bit" },
                    { value: "24", label: "24-bit" },
                  ]}
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase text-ink-2">Channels:</span>
                <Segmented
                  label="Audio Channels"
                  value={channels}
                  onChange={setChannels}
                  options={[
                    { value: "1", label: "Mono (×1)" },
                    { value: "2", label: "Stereo (×2)" },
                  ]}
                />
              </div>
            </div>

            {/* Live Analogue vs Sampled Staircase Wave Visual */}
            {(() => {
              const samples = [8, 12, 18, 24][rateIdx] ?? 12;
              const quantSteps = sampleRes === "8" ? 6 : sampleRes === "16" ? 14 : 28;
              const x0 = 24;
              const w = 472;
              const midY = 66;
              const amp = 42;
              const smoothPts = Array.from({ length: 81 }, (_, i) => {
                const t = i / 80;
                const x = x0 + t * w;
                const y = midY - Math.sin(t * Math.PI * 2) * amp;
                return `${x.toFixed(1)},${y.toFixed(1)}`;
              }).join(" ");
              const stepW = w / samples;
              const stairD: string[] = [];
              const dots: { x: number; y: number }[] = [];
              for (let i = 0; i < samples; i++) {
                const t = (i + 0.5) / samples;
                const rawNorm = Math.sin(t * Math.PI * 2);
                const qNorm = Math.round(rawNorm * (quantSteps / 2)) / (quantSteps / 2);
                const sx = x0 + i * stepW;
                const sy = midY - qNorm * amp;
                stairD.push(`${i === 0 ? "M" : "L"} ${sx.toFixed(1)} ${sy.toFixed(1)} L ${(sx + stepW).toFixed(1)} ${sy.toFixed(1)}`);
                dots.push({ x: sx + stepW / 2, y: sy });
              }
              return (
                <div className="rounded-xl border border-line bg-surface-2 p-2.5">
                  <div className="mb-1 flex flex-wrap items-center justify-between gap-1 text-[11px] font-bold text-ink-2">
                    <span>ADC Sampling Visualiser ({rate.toLocaleString("en-GB")} Hz · {sBits}-bit · {ch === 2 ? "Stereo ×2 channels" : "Mono ×1 channel"})</span>
                    <span className="text-brand">Dashed = Analogue · Blue = Digital Staircase</span>
                  </div>
                  <svg viewBox="0 0 520 132" className="w-full rounded-lg bg-surface" role="img" aria-label="Analogue sound wave compared with digital sampled staircase wave">
                    <line x1={x0} y1={midY} x2={x0 + w} y2={midY} className="stroke-line" strokeWidth={1} />
                    <polyline points={smoothPts} fill="none" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 4" />
                    <path d={stairD.join(" ")} fill="none" stroke="#0284c7" strokeWidth={2.4} />
                    {dots.map((pt, idx) => (
                      <circle key={idx} cx={pt.x} cy={pt.y} r={3} fill="#0e7490" />
                    ))}
                    <text x={260} y={124} textAnchor="middle" fontSize={10} className="fill-ink-2">
                      Higher sample rate = narrower steps · Higher bit depth = finer amplitude levels{ch === 2 ? " · Stereo stores 2× independent tracks" : ""}
                    </text>
                  </svg>
                </div>
              );
            })()}
          </div>
        )}

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Readout label="Total Bits" value={fmtExact(totalBits)} tone="ink" />
          <Readout label="Bytes (÷ 8)" value={fmtExact(totalBytes)} tone="ink" />
          <Readout label="KiB (÷ 1024)" value={`${fmtExact(totalKiB)} KiB`} tone="good" />
          <Readout label="MiB (÷ 1024)" value={`${fmtExact(totalMiB)} MiB`} tone="brand" />
        </div>
      </div>
    </WidgetFrame>
  );
}

const RLE_PRESETS = [
  { label: "Banner Row (Strong Saving)", text: "BBBBBBYYYYBBBBBBWRRR" },
  { label: "Separated Runs Trap", text: "WWWWWWBBWWWW" },
  { label: "Checkerboard (RLE Backfires!)", text: "WBWBWBWBWBWB" },
] as const;

const PALETTE_COLOR: Record<string, string> = {
  B: "#0284c7",
  Y: "#facc15",
  W: "#f8fafc",
  R: "#ef4444",
  G: "#22c55e",
};

function encodeRle(input: string): Array<{ count: number; char: string }> {
  const clean = input.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 32);
  if (!clean) return [];
  const runs: Array<{ count: number; char: string }> = [];
  for (const ch of clean) {
    const last = runs[runs.length - 1];
    if (last && last.char === ch) last.count += 1;
    else runs.push({ count: 1, char: ch });
  }
  return runs;
}

function LiveRleCompressor() {
  const [rawInput, setRawInput] = useState<string>(RLE_PRESETS[0].text);

  const sanitized = rawInput.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 32);
  const runs = encodeRle(sanitized);
  const rawBytes = sanitized.length;
  const rleBytes = runs.length * 2; // 1 byte count + 1 byte symbol
  const savedBytes = rawBytes - rleBytes;
  const pctSaved = rawBytes > 0 ? Math.round((savedBytes / rawBytes) * 100) : 0;
  const reconstructed = runs.map((r) => r.char.repeat(r.count)).join("");

  return (
    <WidgetFrame
      title="Live Run-Length Encoding (RLE) Lossless Compressor"
      tryThis={[
        "Click **Separated Runs Trap** (`WWWWWWBBWWWW`) to confirm RLE outputs `6W 2B 4W` (`3` runs = `6` bytes), NEVER `10W 2B`!",
        "Click **Checkerboard (RLE Backfires!)** (`WBWBWBWBWBWB`) to see why alternating length-`1` runs **double** the file size from `12` bytes to `24` bytes!",
        "Type your own uppercase pixel/character string (up to 32 chars) to test live RLE ratios.",
      ]}
      caption={
        <div>
          <strong>Lossless Proof:</strong> Expanding{" "}
          <code>{runs.map((r) => `${r.count}${r.char}`).join(" ") || "(empty)"}</code> reconstructs{" "}
          <code>{reconstructed || "(empty)"}</code> —{" "}
          {reconstructed === sanitized ? (
            <span className="font-bold text-good">100% bit-for-bit identical!</span>
          ) : null}
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase text-ink-2">Presets:</span>
          {RLE_PRESETS.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => setRawInput(p.text)}
              className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                sanitized === p.text ? "border-brand bg-brand-soft text-brand" : "border-line bg-surface text-ink-2 hover:text-ink"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="space-y-1">
          <label className="block text-xs font-bold uppercase text-ink-2" htmlFor="rle-input">
            Raw Uncompressed Stream (1 Byte / Symbol)
          </label>
          <input
            id="rle-input"
            type="text"
            value={sanitized}
            onChange={(e) => setRawInput(e.target.value)}
            maxLength={32}
            className="w-full rounded-xl border border-line bg-surface px-3 py-2 font-mono text-base font-bold tracking-widest text-ink"
          />
        </div>

        {/* Visual pixel strip */}
        {sanitized.length > 0 ? (
          <div className="space-y-2">
            <div className="flex flex-wrap gap-1">
              {sanitized.split("").map((ch, idx) => (
                <span
                  key={idx}
                  style={{ backgroundColor: PALETTE_COLOR[ch] ?? "var(--surface-2)", color: ch === "W" || ch === "Y" ? "#0e1020" : "#ffffff" }}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-line font-mono text-xs font-black"
                >
                  {ch}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-bold uppercase text-ink-2">RLE Pairs (2 B each):</span>
              {runs.map((r, idx) => (
                <span
                  key={idx}
                  className="rounded-lg border border-brand bg-brand-soft px-2.5 py-1 font-mono text-sm font-extrabold text-brand"
                >
                  ({r.count}, {r.char})
                </span>
              ))}
            </div>
          </div>
        ) : null}

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Readout label="Raw Size" value={`${rawBytes} B`} tone="ink" />
          <Readout label="Consecutive Runs" value={runs.length} tone="brand" />
          <Readout label="RLE Size (2 B/pair)" value={`${rleBytes} B`} tone={savedBytes >= 0 ? "good" : "bad"} />
          <Readout
            label="Bytes Saved"
            value={savedBytes >= 0 ? `${savedBytes} B (${pctSaved}%)` : `${savedBytes} B (Larger!)`}
            tone={savedBytes > 0 ? "good" : savedBytes === 0 ? "ink" : "bad"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "data-media-size-calculator",
    title: "Bitmap & Sound IEC File-Size Calculator (1024)",
    blurb: "Explore how colour depth, pixel resolution, sample rate, and stereo channels drive exact sizes in bits, bytes, KiB, and MiB.",
    Component: MediaFileSizeCalculator,
  },
  {
    id: "data-media-rle-compressor",
    title: "Live Run-Length Encoding (RLE) Compressor",
    blurb: "Compress pixel/character streams into (count, value) pairs and test when RLE saves space vs when alternating runs backfire.",
    Component: LiveRleCompressor,
  },
];
