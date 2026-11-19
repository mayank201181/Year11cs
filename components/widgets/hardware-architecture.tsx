"use client";

import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

interface MicroStep {
  phase: "Idle" | "Fetch 1" | "Fetch 2" | "Fetch 3" | "Decode" | "Execute";
  pc: number;
  mar: number | string;
  mdr: string;
  cir: string;
  acc: number;
  ram: Record<number, string>;
  activeNodes: string[];
  activeBus: "none" | "address-control" | "data-read" | "data-write" | "control-only";
  note: string;
}

const PROGRAMS: Record<"calc" | "substore", { label: string; steps: MicroStep[] }> = {
  calc: {
    label: "LOAD 104 → ADD 105",
    steps: [
      {
        phase: "Idle",
        pc: 100,
        mar: "—",
        mdr: "—",
        cir: "—",
        acc: 0,
        ram: { 100: "LOAD 104", 101: "ADD 105", 104: "18", 105: "24" },
        activeNodes: ["PC"],
        activeBus: "none",
        note: "Ready to start Cycle 1: PC points to address 100 (the next instruction to fetch).",
      },
      {
        phase: "Fetch 1",
        pc: 100,
        mar: 100,
        mdr: "—",
        cir: "—",
        acc: 0,
        ram: { 100: "LOAD 104", 101: "ADD 105", 104: "18", 105: "24" },
        activeNodes: ["PC", "MAR", "CU"],
        activeBus: "address-control",
        note: "PC copies address 100 into MAR. MAR sends 100 along the unidirectional Address Bus while CU sends a Read signal on the Control Bus.",
      },
      {
        phase: "Fetch 2",
        pc: 100,
        mar: 100,
        mdr: "LOAD 104",
        cir: "—",
        acc: 0,
        ram: { 100: "LOAD 104", 101: "ADD 105", 104: "18", 105: "24" },
        activeNodes: ["MDR", "RAM"],
        activeBus: "data-read",
        note: "RAM reads location 100 and sends instruction 'LOAD 104' across the bidirectional Data Bus into MDR.",
      },
      {
        phase: "Fetch 3",
        pc: 101,
        mar: 100,
        mdr: "LOAD 104",
        cir: "LOAD 104",
        acc: 0,
        ram: { 100: "LOAD 104", 101: "ADD 105", 104: "18", 105: "24" },
        activeNodes: ["MDR", "CIR", "PC"],
        activeBus: "none",
        note: "MDR copies 'LOAD 104' into CIR, and PC increments by 1 (100 → 101) ready for the next cycle.",
      },
      {
        phase: "Decode",
        pc: 101,
        mar: 100,
        mdr: "LOAD 104",
        cir: "LOAD 104",
        acc: 0,
        ram: { 100: "LOAD 104", 101: "ADD 105", 104: "18", 105: "24" },
        activeNodes: ["CU", "CIR"],
        activeBus: "control-only",
        note: "CU decodes CIR ('LOAD 104') using its instruction set: opcode = LOAD, operand = memory address 104.",
      },
      {
        phase: "Execute",
        pc: 101,
        mar: 104,
        mdr: "18",
        cir: "LOAD 104",
        acc: 18,
        ram: { 100: "LOAD 104", 101: "ADD 105", 104: "18", 105: "24" },
        activeNodes: ["MAR", "MDR", "ACC", "RAM"],
        activeBus: "data-read",
        note: "Execute LOAD 104: MAR = 104 → RAM sends value 18 via Data Bus to MDR → copied into ACC (18).",
      },
      {
        phase: "Fetch 1",
        pc: 101,
        mar: 101,
        mdr: "18",
        cir: "LOAD 104",
        acc: 18,
        ram: { 100: "LOAD 104", 101: "ADD 105", 104: "18", 105: "24" },
        activeNodes: ["PC", "MAR", "CU"],
        activeBus: "address-control",
        note: "Cycle 2 Fetch: PC (101) copied to MAR; sent along Address Bus + CU Read signal on Control Bus.",
      },
      {
        phase: "Fetch 3",
        pc: 102,
        mar: 101,
        mdr: "ADD 105",
        cir: "ADD 105",
        acc: 18,
        ram: { 100: "LOAD 104", 101: "ADD 105", 104: "18", 105: "24" },
        activeNodes: ["MDR", "CIR", "PC", "RAM"],
        activeBus: "data-read",
        note: "RAM sends 'ADD 105' via Data Bus to MDR → copied into CIR; PC increments to 102.",
      },
      {
        phase: "Decode",
        pc: 102,
        mar: 101,
        mdr: "ADD 105",
        cir: "ADD 105",
        acc: 18,
        ram: { 100: "LOAD 104", 101: "ADD 105", 104: "18", 105: "24" },
        activeNodes: ["CU", "CIR"],
        activeBus: "control-only",
        note: "CU decodes CIR ('ADD 105'): fetch operand at 105 and instruct ALU to add it to ACC.",
      },
      {
        phase: "Execute",
        pc: 102,
        mar: 105,
        mdr: "24",
        cir: "ADD 105",
        acc: 42,
        ram: { 100: "LOAD 104", 101: "ADD 105", 104: "18", 105: "24" },
        activeNodes: ["MAR", "MDR", "ALU", "ACC", "RAM"],
        activeBus: "data-read",
        note: "Execute ADD 105: MAR = 105 → MDR receives 24 → ALU computes 18 + 24 = 42 and stores 42 in ACC!",
      },
    ],
  },
  substore: {
    label: "SUB 104 → STORE 105",
    steps: [
      {
        phase: "Idle",
        pc: 100,
        mar: "—",
        mdr: "—",
        cir: "—",
        acc: 50,
        ram: { 100: "SUB 104", 101: "STORE 105", 104: "19", 105: "0" },
        activeNodes: ["PC", "ACC"],
        activeBus: "none",
        note: "Initial state: PC = 100, ACC = 50, RAM[105] = 0.",
      },
      {
        phase: "Fetch 1",
        pc: 100,
        mar: 100,
        mdr: "—",
        cir: "—",
        acc: 50,
        ram: { 100: "SUB 104", 101: "STORE 105", 104: "19", 105: "0" },
        activeNodes: ["PC", "MAR", "CU"],
        activeBus: "address-control",
        note: "PC (100) copied to MAR → Address Bus carries 100 to RAM + CU sends Read on Control Bus.",
      },
      {
        phase: "Fetch 3",
        pc: 101,
        mar: 100,
        mdr: "SUB 104",
        cir: "SUB 104",
        acc: 50,
        ram: { 100: "SUB 104", 101: "STORE 105", 104: "19", 105: "0" },
        activeNodes: ["MDR", "CIR", "PC", "RAM"],
        activeBus: "data-read",
        note: "RAM sends 'SUB 104' across Data Bus to MDR → CIR; PC increments to 101.",
      },
      {
        phase: "Decode",
        pc: 101,
        mar: 100,
        mdr: "SUB 104",
        cir: "SUB 104",
        acc: 50,
        ram: { 100: "SUB 104", 101: "STORE 105", 104: "19", 105: "0" },
        activeNodes: ["CU", "CIR"],
        activeBus: "control-only",
        note: "CU decodes 'SUB 104': subtract value at RAM[104] from ACC.",
      },
      {
        phase: "Execute",
        pc: 101,
        mar: 104,
        mdr: "19",
        cir: "SUB 104",
        acc: 31,
        ram: { 100: "SUB 104", 101: "STORE 105", 104: "19", 105: "0" },
        activeNodes: ["MAR", "MDR", "ALU", "ACC", "RAM"],
        activeBus: "data-read",
        note: "MAR = 104 → MDR = 19 → ALU computes 50 − 19 = 31 in ACC!",
      },
      {
        phase: "Fetch 3",
        pc: 102,
        mar: 101,
        mdr: "STORE 105",
        cir: "STORE 105",
        acc: 31,
        ram: { 100: "SUB 104", 101: "STORE 105", 104: "19", 105: "0" },
        activeNodes: ["PC", "MAR", "MDR", "CIR", "RAM"],
        activeBus: "data-read",
        note: "Cycle 2 Fetch & Decode: 'STORE 105' fetched from 101 into CIR; PC increments to 102.",
      },
      {
        phase: "Execute",
        pc: 102,
        mar: 105,
        mdr: "31",
        cir: "STORE 105",
        acc: 31,
        ram: { 100: "SUB 104", 101: "STORE 105", 104: "19", 105: "31" },
        activeNodes: ["ACC", "MAR", "MDR", "CU", "RAM"],
        activeBus: "data-write",
        note: "Execute STORE 105: MAR = 105, ACC copies 31 to MDR, CU sends Write signal, Data Bus writes 31 into RAM[105]!",
      },
    ],
  },
};

function VonNeumannFdeWidget() {
  const [progKey, setProgKey] = useState<"calc" | "substore">("calc");
  const [idx, setIdx] = useState(0);

  const steps = PROGRAMS[progKey].steps;
  const safeIdx = Math.min(idx, steps.length - 1);
  const s = steps[safeIdx];
  const isOn = (name: string) => s.activeNodes.includes(name);

  const addrActive = s.activeBus === "address-control" || s.activeBus === "data-write" || s.phase === "Execute";
  const dataActive = s.activeBus === "data-read" || s.activeBus === "data-write";
  const ctrlActive = s.activeBus !== "none";

  return (
    <WidgetFrame
      title="Von Neumann Fetch–Decode–Execute Stepper"
      tryThis={[
        "Step through **LOAD 104 → ADD 105** and watch `PC` increment *before* `Execute` changes `MAR` to `104`.",
        "Switch to **SUB 104 → STORE 105** to see the **Data Bus** reverse direction (`CPU → RAM`) on a memory write!",
      ]}
      caption={
        <div>
          <span className="mr-2 inline-block rounded-md bg-brand px-2 py-0.5 text-xs font-extrabold text-white">
            {s.phase} ({safeIdx + 1}/{steps.length})
          </span>
          <span className="font-semibold">{s.note}</span>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Program"
            value={progKey}
            onChange={(v) => {
              setProgKey(v);
              setIdx(0);
            }}
            options={[
              { value: "calc", label: "LOAD 104 → ADD 105" },
              { value: "substore", label: "SUB 104 → STORE 105" },
            ]}
          />
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="kbd px-3 py-1.5 text-sm font-bold"
              onClick={() => setIdx(0)}
              disabled={safeIdx === 0}
            >
              Reset
            </button>
            <button
              type="button"
              className="kbd px-3 py-1.5 text-sm font-bold"
              onClick={() => setIdx((v) => Math.max(0, v - 1))}
              disabled={safeIdx === 0}
            >
              ← Prev
            </button>
            <button
              type="button"
              className="kbd bg-brand px-3 py-1.5 text-sm font-bold text-white disabled:opacity-40"
              onClick={() => setIdx((v) => Math.min(steps.length - 1, v + 1))}
              disabled={safeIdx >= steps.length - 1}
            >
              Next Step →
            </button>
          </div>
        </div>

        <svg
          viewBox="0 0 560 250"
          className="w-full rounded-xl border border-line bg-surface"
          role="img"
          aria-label="Interactive Von Neumann CPU registers and system buses"
        >
          {/* CPU Box */}
          <rect x={10} y={10} width={300} height={230} rx={12} fill="#eff6ff" stroke="#2563eb" strokeWidth={2} />
          <text x={22} y={30} fontSize={12} fontWeight="bold" fill="#1e3a8a">
            CPU (Von Neumann)
          </text>

          {/* CU */}
          <rect
            x={22}
            y={42}
            width={120}
            height={68}
            rx={8}
            fill={isOn("CU") ? "#fde047" : "#dbeafe"}
            stroke="#1d4ed8"
            strokeWidth={isOn("CU") ? 3 : 1.5}
          />
          <text x={82} y={68} textAnchor="middle" fontSize={12} fontWeight="bold" fill="#1e3a8a">
            CU
          </text>
          <text x={82} y={86} textAnchor="middle" fontSize={10} fill="#1e40af">
            Control &amp; Decode
          </text>

          {/* ALU + ACC */}
          <rect
            x={22}
            y={122}
            width={120}
            height={104}
            rx={8}
            fill={isOn("ALU") ? "#fde047" : "#dcfce7"}
            stroke="#16a34a"
            strokeWidth={isOn("ALU") ? 3 : 1.5}
          />
          <text x={82} y={144} textAnchor="middle" fontSize={12} fontWeight="bold" fill="#14532d">
            ALU
          </text>
          <rect
            x={34}
            y={160}
            width={96}
            height={54}
            rx={6}
            fill={isOn("ACC") ? "#fef08a" : "#bbf7d0"}
            stroke="#15803d"
            strokeWidth={isOn("ACC") ? 2.5 : 1.5}
          />
          <text x={82} y={178} textAnchor="middle" fontSize={10} fontWeight="bold" fill="#14532d">
            ACC
          </text>
          <text x={82} y={202} textAnchor="middle" fontFamily="monospace" fontSize={15} fontWeight="bold" fill="#052e16">
            {s.acc}
          </text>

          {/* Registers column: PC, MAR, MDR, CIR */}
          {[
            { name: "PC", val: String(s.pc), y: 42 },
            { name: "MAR", val: String(s.mar), y: 90 },
            { name: "MDR", val: s.mdr, y: 138 },
            { name: "CIR", val: s.cir, y: 186 },
          ].map((r) => (
            <g key={r.name}>
              <rect
                x={156}
                y={r.y}
                width={142}
                height={40}
                rx={6}
                fill={isOn(r.name) ? "#fde047" : "#fef3c7"}
                stroke="#d97706"
                strokeWidth={isOn(r.name) ? 3 : 1.5}
              />
              <text x={168} y={r.y + 24} fontSize={11} fontWeight="bold" fill="#92400e">
                {r.name}:
              </text>
              <text x={290} y={r.y + 24} textAnchor="end" fontFamily="monospace" fontSize={12} fontWeight="bold" fill="#451a03">
                {r.val}
              </text>
            </g>
          ))}

          {/* System Buses */}
          {/* Address Bus (Unidirectional ->) */}
          <line
            x1={310}
            y1={110}
            x2={418}
            y2={110}
            stroke={addrActive ? "#dc2626" : "#94a3b8"}
            strokeWidth={addrActive ? 4 : 2}
          />
          <polygon points="424,110 414,104 414,116" fill={addrActive ? "#dc2626" : "#94a3b8"} />
          <text x={367} y={101} textAnchor="middle" fontSize={9.5} fontWeight="bold" fill="#b91c1c">
            Address (1-way →)
          </text>

          {/* Data Bus (Bidirectional <->) */}
          <line
            x1={316}
            y1={158}
            x2={418}
            y2={158}
            stroke={dataActive ? "#0284c7" : "#94a3b8"}
            strokeWidth={dataActive ? 4 : 2}
          />
          <polygon points="424,158 414,152 414,164" fill={dataActive ? "#0284c7" : "#94a3b8"} />
          <polygon points="310,158 320,152 320,164" fill={dataActive ? "#0284c7" : "#94a3b8"} />
          <text x={367} y={149} textAnchor="middle" fontSize={9.5} fontWeight="bold" fill="#0369a1">
            {s.activeBus === "data-write" ? "Data (CPU → RAM)" : s.activeBus === "data-read" ? "Data (RAM → CPU)" : "Data (2-way ↔)"}
          </text>

          {/* Control Bus (Bidirectional <->) */}
          <line
            x1={316}
            y1={212}
            x2={418}
            y2={212}
            stroke={ctrlActive ? "#4f46e5" : "#94a3b8"}
            strokeWidth={ctrlActive ? 4 : 2}
          />
          <polygon points="424,212 414,206 414,218" fill={ctrlActive ? "#4f46e5" : "#94a3b8"} />
          <polygon points="310,212 320,206 320,218" fill={ctrlActive ? "#4f46e5" : "#94a3b8"} />
          <text x={367} y={203} textAnchor="middle" fontSize={9.5} fontWeight="bold" fill="#4338ca">
            Control (2-way ↔)
          </text>

          {/* RAM Box */}
          <rect
            x={426}
            y={18}
            width={124}
            height={214}
            rx={12}
            fill={isOn("RAM") ? "#ede9fe" : "#f5f3ff"}
            stroke="#7c3aed"
            strokeWidth={isOn("RAM") ? 3 : 2}
          />
          <text x={488} y={40} textAnchor="middle" fontSize={12} fontWeight="bold" fill="#4c1d95">
            RAM (Primary)
          </text>
          {Object.entries(s.ram).map(([addr, content], i) => {
            const matchMar = String(s.mar) === addr;
            return (
              <g key={addr}>
                <rect
                  x={436}
                  y={54 + i * 40}
                  width={104}
                  height={32}
                  rx={5}
                  fill={matchMar ? "#fde047" : "#ffffff"}
                  stroke="#8b5cf6"
                  strokeWidth={matchMar ? 2.5 : 1}
                />
                <text x={443} y={74 + i * 40} fontFamily="monospace" fontSize={10.5} fontWeight="bold" fill="#4c1d95">
                  {addr}: {content}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </WidgetFrame>
  );
}

function SensorFeedbackWidget() {
  const [mode, setMode] = useState<"control" | "monitoring">("control");
  const [temp, setTemp] = useState(17);
  const [preset, setPreset] = useState(24);
  const [ticks, setTicks] = useState(0);

  // Map 0..50 °C to 8-bit ADC 0..255
  const adcInt = Math.max(0, Math.min(255, Math.round((temp / 50) * 255)));
  const adcBin = adcInt.toString(2).padStart(8, "0");

  const diff = temp - preset;
  const actuatorState =
    Math.abs(diff) <= 1 ? "IDLE (Within ±1 °C)" : diff < -1 ? "HEATER ON (+2 °C/tick)" : "COOLING VENT OPEN (−2 °C/tick)";
  const monitorAlert =
    Math.abs(diff) <= 1 ? "NORMAL LOGGED" : diff < -1 ? "LOW TEMP ALARM!" : "HIGH TEMP ALARM!";

  const runTick = () => {
    setTicks((t) => t + 1);
    if (mode === "control") {
      setTemp((cur) => {
        if (cur < preset - 1) return Math.min(preset, cur + 2);
        if (cur > preset + 1) return Math.max(preset, cur - 2);
        return cur;
      });
    }
  };

  return (
    <WidgetFrame
      title="Sensor Monitoring vs Control Feedback Simulator"
      tryThis={[
        "Set temperature to `16 °C` (preset `24 °C`) in **Control Mode** and click **Simulate Feedback Tick** — watch the heater actuator raise the next sensor reading!",
        "Switch to **Monitoring Mode** at `16 °C` and click **Simulate Feedback Tick** — notice the alarm sounds, yet the temperature **never changes** because there is no actuator!",
      ]}
      caption={
        mode === "control" ? (
          <span>
            <strong>Control System:</strong> Temperature sensor (analogue) → <strong>ADC</strong> (<code>{adcBin}</code>) → Microprocessor compares with preset (<code>{preset} °C</code>) → <strong>Actuator</strong> alters the physical environment, changing the next reading!
          </span>
        ) : (
          <span>
            <strong>Monitoring System:</strong> Temperature sensor (analogue) → <strong>ADC</strong> (<code>{adcBin}</code>) → Microprocessor logs data &amp; triggers warnings, with <strong>NO actuator</strong> altering the physical environment (open loop).
          </span>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Segmented
            label="System Mode"
            value={mode}
            onChange={(v) => {
              setMode(v);
              setTicks(0);
            }}
            options={[
              { value: "control", label: "Control System (Closed Loop)" },
              { value: "monitoring", label: "Monitoring System (Warning Only)" },
            ]}
          />
          <button
            type="button"
            className="kbd bg-brand px-3 py-1.5 text-sm font-bold text-white"
            onClick={runTick}
          >
            Simulate Feedback Tick ({ticks})
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Slider
            label="Sensor Physical Reading"
            value={temp}
            min={5}
            max={45}
            onChange={setTemp}
            format={(v) => `${v} °C (Analogue)`}
          />
          <Slider
            label="Stored Microprocessor Preset"
            value={preset}
            min={15}
            max={35}
            onChange={setPreset}
            format={(v) => `${v} °C`}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <Readout label="8-Bit ADC Output" value={adcBin} tone="ink" />
          <Readout
            label={mode === "control" ? "Actuator Status" : "Monitor Display"}
            value={mode === "control" ? actuatorState : monitorAlert}
            tone={Math.abs(diff) <= 1 ? "good" : "bad"}
          />
          <Readout
            label="Feedback Loop"
            value={mode === "control" ? "ACTIVE (Changes Env)" : "NONE (Read-Only)"}
            tone={mode === "control" ? "brand" : "ink"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "von-neumann-fde-stepper",
    title: "Von Neumann FDE Cycle Stepper",
    blurb: "Step through PC, MAR, MDR, CIR, ACC, ALU, CU, and the three system buses live.",
    Component: VonNeumannFdeWidget,
  },
  {
    id: "sensor-monitoring-control-sim",
    title: "Monitoring vs Control Feedback Simulator",
    blurb: "Compare closed-loop actuator control against open-loop monitoring with live 8-bit ADC conversion.",
    Component: SensorFeedbackWidget,
  },
];
