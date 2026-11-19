"use client";

import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, type WidgetDef } from "./kit";

type EncMode = "symmetric" | "asymmetric";
type AsymEncChoice = "bob-public" | "alice-private" | "alice-public";
type SymChannel = "wifi-key-sent" | "pre-shared";

function scrambleText(plain: string, shift: number): string {
  return plain
    .split("")
    .map((ch) => {
      const code = ch.charCodeAt(0);
      if (code >= 65 && code <= 90) return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      if (code >= 97 && code <= 122) return String.fromCharCode(((code - 97 + shift) % 26) + 97);
      if (code >= 48 && code <= 57) return String.fromCharCode(((code - 48 + shift) % 10) + 48);
      return "#";
    })
    .join("");
}

function EncryptionLab() {
  const [mode, setMode] = useState<EncMode>("asymmetric");
  const [plaintext, setPlaintext] = useState<string>("PIN: 8492");
  const [symKey, setSymKey] = useState<number>(7);
  const [symChannel, setSymChannel] = useState<SymChannel>("wifi-key-sent");
  const [asymChoice, setAsymChoice] = useState<AsymEncChoice>("bob-public");

  const effectiveShift = mode === "symmetric" ? symKey : asymChoice === "bob-public" ? 11 : asymChoice === "alice-private" ? 5 : 17;
  const ciphertext = scrambleText(plaintext || "SECRET", effectiveShift);

  // Security outcome analysis
  let eveReadsPlain = false;
  let bobReadsPlain = true;
  let statusTitle = "";
  let statusTone: "good" | "bad" | "brand" = "good";
  let explanation = "";

  if (mode === "symmetric") {
    bobReadsPlain = true;
    if (symChannel === "wifi-key-sent") {
      eveReadsPlain = true;
      statusTitle = "BREACH — Key Intercepted!";
      statusTone = "bad";
      explanation =
        "Symmetric Key-Exchange Trap: Alice used the SAME secret key (+K) to encrypt and sent Key +K across public Wi-Fi so Bob could decrypt. Packet-sniffer Eve captured BOTH the ciphertext AND Key +K, unlocking the plaintext immediately!";
    } else {
      eveReadsPlain = false;
      statusTitle = "CONFIDENTIAL (If Key Pre-Shared)";
      statusTone = "good";
      explanation =
        "Notice the CIE 0478 distinction: Eve STILL intercepts the packet on Wi-Fi (encryption never stops interception!), but without Secret Key +K she only sees meaningless ciphertext.";
    }
  } else {
    if (asymChoice === "bob-public") {
      eveReadsPlain = false;
      bobReadsPlain = true;
      statusTitle = "SECURE — Only Bob Decrypts!";
      statusTone = "good";
      explanation =
        "CIE Gold Standard: Alice encrypted with BOB'S PUBLIC KEY (shared openly). Even though Eve holds Bob's Public Key too, a public key CANNOT decrypt what it locked — ONLY BOB'S PRIVATE KEY (which never leaves Bob's vault) can decrypt the ciphertext!";
    } else if (asymChoice === "alice-private") {
      eveReadsPlain = true;
      bobReadsPlain = true;
      statusTitle = "TRAP — Eve Unlocked With Alice's Public Key!";
      statusTone = "bad";
      explanation =
        "Classic CIE Exam Blunder: Because Alice encrypted with ALICE'S PRIVATE KEY, ANYONE on the Internet (including Eve!) can grab Alice's openly published PUBLIC KEY and decrypt the message! Never use the sender's private key for confidentiality.";
    } else {
      eveReadsPlain = false;
      bobReadsPlain = false;
      statusTitle = "LOCKED OUT — Bob Cannot Decrypt!";
      statusTone = "bad";
      explanation =
        "Alice accidentally locked the message with ALICE'S OWN PUBLIC KEY. Only Alice's Private Key pairs with Alice's Public Key — so Bob's Private Key fails and Bob cannot read the message at all!";
    }
  }

  return (
    <WidgetFrame
      title="Symmetric vs Asymmetric Public/Private Key Encryption Lab"
      tryThis={[
        "Switch to **Symmetric** and toggle how Key K is shared to witness the **key-exchange problem** live.",
        "Switch to **Asymmetric** and test locking with **Alice's Private Key** vs **Bob's Public Key** to see why exam answers must specify *whose* key is used!",
      ]}
      caption={explanation}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Segmented<EncMode>
            label="Encryption type"
            value={mode}
            onChange={setMode}
            options={[
              { value: "asymmetric", label: "🔑 Asymmetric (Public + Private)" },
              { value: "symmetric", label: "🗝️ Symmetric (Single Shared Key)" },
            ]}
          />
          <div className="flex items-center gap-2">
            <label htmlFor="plain-msg" className="text-xs font-bold uppercase tracking-wide text-ink-2">
              Plaintext:
            </label>
            <input
              id="plain-msg"
              type="text"
              maxLength={14}
              value={plaintext}
              onChange={(e) => setPlaintext(e.target.value)}
              className="rounded-lg border border-line bg-surface px-2.5 py-1 font-mono text-sm font-bold text-ink"
            />
          </div>
        </div>

        {mode === "symmetric" ? (
          <div className="grid gap-3 rounded-xl border border-line bg-surface-2 p-3 sm:grid-cols-2">
            <Slider
              label="Shared Secret Key (+K)"
              value={symKey}
              min={1}
              max={25}
              onChange={setSymKey}
              format={(v) => `Key +${v}`}
            />
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">How does Bob get Key +{symKey}?</div>
              <Segmented<SymChannel>
                label="Key delivery method"
                value={symChannel}
                onChange={setSymChannel}
                options={[
                  { value: "wifi-key-sent", label: "Send Key over Network" },
                  { value: "pre-shared", label: "Pre-Shared Offline" },
                ]}
              />
            </div>
          </div>
        ) : (
          <div className="space-y-2 rounded-xl border border-line bg-surface-2 p-3">
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
              Which key does Sender (Alice) use to ENCRYPT for Recipient (Bob)?
            </div>
            <Segmented<AsymEncChoice>
              label="Alice encryption key choice"
              value={asymChoice}
              onChange={setAsymChoice}
              options={[
                { value: "bob-public", label: "Bob's Public Key ✅" },
                { value: "alice-private", label: "Alice's Private Key ❌" },
                { value: "alice-public", label: "Alice's Public Key ❌" },
              ]}
            />
          </div>
        )}

        <svg
          viewBox="0 0 560 190"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Live network packet flow from Alice past eavesdropper Eve to Bob"
          className="w-full rounded-xl border border-line bg-slate-50"
        >
          {/* Alice box */}
          <rect x="14" y="28" width="142" height="134" rx="12" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
          <text x="85" y="50" fontFamily="sans-serif" fontSize="12" fontWeight="700" fill="#1e3a8a" textAnchor="middle">
            Sender: Alice
          </text>
          <text x="85" y="72" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#0f172a" textAnchor="middle">
            {plaintext || "SECRET"}
          </text>
          <rect x="26" y="86" width="118" height="32" rx="6" fill="#dbeafe" />
          <text x="85" y="106" fontFamily="sans-serif" fontSize="9.5" fontWeight="700" fill="#1d4ed8" textAnchor="middle">
            {mode === "symmetric"
              ? `Encrypts w/ Key +${symKey}`
              : asymChoice === "bob-public"
                ? "Uses BOB PUBLIC KEY"
                : asymChoice === "alice-private"
                  ? "Uses ALICE PRIVATE KEY"
                  : "Uses ALICE PUBLIC KEY"}
          </text>
          <text x="85" y="144" fontFamily="sans-serif" fontSize="9" fill="#475569" textAnchor="middle">
            Plaintext → Ciphertext
          </text>

          {/* Network wire */}
          <line x1="156" y1="76" x2="404" y2="76" stroke="#64748b" strokeWidth="2.5" strokeDasharray="6 4" />
          <rect x="206" y="18" width="148" height="44" rx="8" fill="#fef3c7" stroke="#d97706" strokeWidth="1.6" />
          <text x="280" y="36" fontFamily="sans-serif" fontSize="9.5" fontWeight="700" fill="#92400e" textAnchor="middle">
            Packet Ciphertext on Wire
          </text>
          <text x="280" y="52" fontFamily="monospace" fontSize="11" fontWeight="700" fill="#78350f" textAnchor="middle">
            {ciphertext}
          </text>

          {/* Eve Packet Sniffer */}
          <line x1="280" y1="76" x2="280" y2="100" stroke={eveReadsPlain ? "#dc2626" : "#64748b"} strokeWidth="2" />
          <rect
            x="192"
            y="100"
            width="176"
            height="72"
            rx="10"
            fill={eveReadsPlain ? "#fee2e2" : "#f1f5f9"}
            stroke={eveReadsPlain ? "#dc2626" : "#64748b"}
            strokeWidth="2"
          />
          <text
            x="280"
            y="120"
            fontFamily="sans-serif"
            fontSize="11"
            fontWeight="700"
            fill={eveReadsPlain ? "#991b1b" : "#334155"}
            textAnchor="middle"
          >
            🕵️ Eavesdropper Eve (Sniffer)
          </text>
          <text
            x="280"
            y="140"
            fontFamily="monospace"
            fontSize="10.5"
            fontWeight="700"
            fill={eveReadsPlain ? "#b91c1c" : "#475569"}
            textAnchor="middle"
          >
            {eveReadsPlain ? `READS: "${plaintext || "SECRET"}"` : `SEES ONLY: "${ciphertext}"`}
          </text>
          <text x="280" y="158" fontFamily="sans-serif" fontSize="9" fill={eveReadsPlain ? "#991b1b" : "#059669"} textAnchor="middle">
            {eveReadsPlain ? "Confidentiality Broken!" : "Intercepted, but Meaningless!"}
          </text>

          {/* Bob box */}
          <rect
            x="404"
            y="28"
            width="142"
            height="134"
            rx="12"
            fill={bobReadsPlain ? "#ecfdf5" : "#fee2e2"}
            stroke={bobReadsPlain ? "#059669" : "#dc2626"}
            strokeWidth="2"
          />
          <text
            x="475"
            y="50"
            fontFamily="sans-serif"
            fontSize="12"
            fontWeight="700"
            fill={bobReadsPlain ? "#065f46" : "#991b1b"}
            textAnchor="middle"
          >
            Recipient: Bob
          </text>
          <text
            x="475"
            y="72"
            fontFamily="monospace"
            fontSize="11"
            fontWeight="700"
            fill={bobReadsPlain ? "#064e3b" : "#b91c1c"}
            textAnchor="middle"
          >
            {bobReadsPlain ? plaintext || "SECRET" : "DECRYPT ERROR"}
          </text>
          <rect x="416" y="86" width="118" height="32" rx="6" fill={bobReadsPlain ? "#d1fae5" : "#fecaca"} />
          <text
            x="475"
            y="106"
            fontFamily="sans-serif"
            fontSize="9.5"
            fontWeight="700"
            fill={bobReadsPlain ? "#047857" : "#991b1b"}
            textAnchor="middle"
          >
            {mode === "symmetric"
              ? `Decrypts w/ Key +${symKey}`
              : asymChoice === "alice-private"
                ? "Alice Public Key"
                : "BOB PRIVATE KEY 🔒"}
          </text>
          <text x="475" y="144" fontFamily="sans-serif" fontSize="9" fill="#475569" textAnchor="middle">
            {mode === "asymmetric" ? "Private key stays w/ Bob!" : "Same key as Alice"}
          </text>
        </svg>

        <div className="grid gap-3 sm:grid-cols-3">
          <Readout label="Security Verdict" value={statusTitle} tone={statusTone} />
          <Readout label="Intercepted Ciphertext" value={ciphertext} tone="ink" />
          <Readout
            label="Keys Needed for 10 Users"
            value={mode === "symmetric" ? "45 Symmetric Keys" : "10 Key Pairs (20 Keys)"}
            tone="brand"
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

type TranslatorKind = "interpreter" | "compiler";
type BugScenario = "clean" | "line4" | "line2-line5";

interface CodeLine {
  num: number;
  code: string;
  output?: string;
  hasSyntaxBug?: boolean;
}

function buildProgram(scenario: BugScenario): CodeLine[] {
  return [
    { num: 1, code: 'Score ← 10', output: undefined },
    {
      num: 2,
      code: scenario === "line2-line5" ? 'OUTPUTT "Booting HUD"' : 'OUTPUT "Booting HUD"',
      output: "Booting HUD",
      hasSyntaxBug: scenario === "line2-line5",
    },
    { num: 3, code: 'Score ← Score + 15', output: undefined },
    {
      num: 4,
      code: scenario === "line4" ? 'IF Score >= 25 THN' : 'OUTPUT "Score = 25"',
      output: scenario === "line4" ? undefined : "Score = 25",
      hasSyntaxBug: scenario === "line4",
    },
    {
      num: 5,
      code: scenario === "line2-line5" ? 'PRNT "Level Clear!"' : 'OUTPUT "Level Clear!"',
      output: "Level Clear!",
      hasSyntaxBug: scenario === "line2-line5",
    },
  ];
}

function TranslatorExplorer() {
  const [translator, setTranslator] = useState<TranslatorKind>("interpreter");
  const [bugScenario, setBugScenario] = useState<BugScenario>("line4");
  const [step, setStep] = useState<number>(0);

  const lines = buildProgram(bugScenario);
  const allErrors = lines.filter((l) => l.hasSyntaxBug);
  const firstErrorLine = allErrors[0]?.num ?? null;

  // Under interpreter: max step stops at firstErrorLine (or lines.length if clean)
  const maxInterpStep = firstErrorLine ?? lines.length;
  const activeStep = Math.min(step, translator === "interpreter" ? maxInterpStep : 1);

  const switchTranslator = (t: TranslatorKind) => {
    setTranslator(t);
    setStep(0);
  };
  const switchScenario = (b: BugScenario) => {
    setBugScenario(b);
    setStep(0);
  };

  // Compute console output & diagnostics
  const consoleLines: string[] = [];
  let diagBanner = "";
  let exeCreated = false;

  if (translator === "interpreter") {
    for (let i = 0; i < activeStep; i++) {
      const ln = lines[i];
      if (ln.hasSyntaxBug) {
        diagBanner = `⛔ HALTED at Line ${ln.num}: Syntax error in '${ln.code}'! Lines after ${ln.num} are NOT checked yet.`;
        break;
      }
      if (ln.output) consoleLines.push(ln.output);
    }
    if (!diagBanner && activeStep === lines.length) {
      diagBanner = "✅ All 5 lines translated & executed statement-by-statement (No .exe file created).";
    } else if (!diagBanner && activeStep > 0) {
      diagBanner = `▶ Executed up to Line ${activeStep} — click 'Next Line' to translate the next statement.`;
    } else if (activeStep === 0) {
      diagBanner = "Ready: Click 'Step Line' or 'Run' to watch the Interpreter translate & execute one line at a time.";
    }
  } else {
    if (activeStep === 0) {
      diagBanner = "Ready: Click 'Compile Whole File' — the Compiler will scan ALL 5 lines before running anything.";
    } else if (allErrors.length > 0) {
      exeCreated = false;
      diagBanner =
        `❌ COMPILATION FAILED — 0 lines executed! Error report lists ALL syntax errors at once: ` +
        allErrors.map((e) => `Line ${e.num}`).join(", ") +
        `. No executable (.exe) generated.`;
    } else {
      exeCreated = true;
      lines.forEach((l) => {
        if (l.output) consoleLines.push(l.output);
      });
      diagBanner = "✅ COMPILED SUCCESSFULLY → Standalone machine-code executable (.exe) built & executed at full speed!";
    }
  }

  return (
    <WidgetFrame
      title="Compiler vs Interpreter Line-by-Line Execution Explorer"
      tryThis={[
        "Select **Syntax Bug on Line 4** and run with the **Interpreter** (watch Lines 1–3 execute and print *before* halting at Line 4!).",
        "Now switch to **Compiler** on the exact same buggy file — notice **0 outputs** print because compilation aborts before execution!",
        "Try **2 Bugs (Lines 2 & 5)**: the **Interpreter** only spots Line 2 and halts, whereas the **Compiler** reports *both* Line 2 and Line 5 in one error report!",
      ]}
      caption={diagBanner}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Segmented<TranslatorKind>
            label="Translator"
            value={translator}
            onChange={switchTranslator}
            options={[
              { value: "interpreter", label: "🔍 Interpreter (Line-by-Line)" },
              { value: "compiler", label: "📦 Compiler (Whole Program)" },
            ]}
          />
          <Segmented<BugScenario>
            label="Bug scenario"
            value={bugScenario}
            onChange={switchScenario}
            options={[
              { value: "line4", label: "Bug on Line 4" },
              { value: "line2-line5", label: "2 Bugs (L2 & L5)" },
              { value: "clean", label: "0 Bugs (Clean)" },
            ]}
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {translator === "interpreter" ? (
            <>
              <button
                type="button"
                className="kbd px-3 py-1.5 text-sm font-bold"
                disabled={activeStep >= maxInterpStep}
                onClick={() => setStep((s) => Math.min(maxInterpStep, s + 1))}
              >
                ▶ Step Next Line
              </button>
              <button
                type="button"
                className="kbd px-3 py-1.5 text-sm font-bold"
                disabled={activeStep >= maxInterpStep}
                onClick={() => setStep(maxInterpStep)}
              >
                ⏩ Run Until Halt/End
              </button>
            </>
          ) : (
            <button
              type="button"
              className="kbd px-3 py-1.5 text-sm font-bold"
              disabled={activeStep >= 1}
              onClick={() => setStep(1)}
            >
              ⚙️ Compile Whole File &amp; Run
            </button>
          )}
          <button
            type="button"
            className="kbd px-3 py-1.5 text-sm font-bold"
            onClick={() => setStep(0)}
          >
            ↺ Reset
          </button>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-line bg-slate-900 p-3 font-mono text-xs text-slate-100">
            <div className="mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              High-Level Source Code
            </div>
            <div className="space-y-1.5">
              {lines.map((ln) => {
                let rowStyle = "bg-slate-800/70 text-slate-300 border-transparent";
                let badge = "waiting";
                if (translator === "interpreter") {
                  if (ln.num < activeStep) {
                    rowStyle = "bg-emerald-950/80 text-emerald-200 border-emerald-500";
                    badge = "✓ ran";
                  } else if (ln.num === activeStep) {
                    if (ln.hasSyntaxBug) {
                      rowStyle = "bg-rose-950/90 text-rose-200 border-rose-500";
                      badge = "✗ HALT";
                    } else {
                      rowStyle = "bg-emerald-950/80 text-emerald-200 border-emerald-500";
                      badge = "✓ ran";
                    }
                  }
                } else if (activeStep === 1) {
                  if (ln.hasSyntaxBug) {
                    rowStyle = "bg-rose-950/90 text-rose-200 border-rose-500";
                    badge = "✗ syntax err";
                  } else if (exeCreated) {
                    rowStyle = "bg-emerald-950/80 text-emerald-200 border-emerald-500";
                    badge = "✓ compiled";
                  } else {
                    rowStyle = "bg-slate-800/80 text-slate-400 border-slate-600";
                    badge = "not run";
                  }
                }
                return (
                  <div
                    key={ln.num}
                    className={`flex items-center justify-between rounded-lg border px-2.5 py-1.5 ${rowStyle}`}
                  >
                    <span>
                      <span className="mr-2 text-slate-500">{ln.num}</span>
                      {ln.code}
                    </span>
                    <span className="ml-2 text-[10px] font-bold uppercase">{badge}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-3">
            <div className="rounded-xl border border-line bg-surface p-3">
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">
                Live Screen Output ({consoleLines.length} printed)
              </div>
              {consoleLines.length === 0 ? (
                <p className="mt-2 font-mono text-xs italic text-ink-2">(No output printed)</p>
              ) : (
                <ul className="mt-2 space-y-1 font-mono text-xs font-bold text-emerald-700">
                  {consoleLines.map((out, idx) => (
                    <li key={idx}>&gt; {out}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Readout
                label="Executable (.exe)?"
                value={
                  translator === "interpreter"
                    ? "Never Created"
                    : activeStep === 0
                      ? "Not compiled yet"
                      : exeCreated
                        ? "Yes (.exe Built)"
                        : "No (Build Failed)"
                }
                tone={
                  exeCreated
                    ? "good"
                    : translator === "interpreter" || activeStep === 0
                      ? "ink"
                      : "bad"
                }
              />
              <Readout
                label="Errors Reported"
                value={
                  activeStep === 0
                    ? "—"
                    : translator === "interpreter"
                      ? firstErrorLine && activeStep >= firstErrorLine
                        ? `1st Only (Line ${firstErrorLine})`
                        : "0 so far"
                      : allErrors.length === 0
                        ? "0 Errors"
                        : `All ${allErrors.length} (${allErrors.map((e) => `L${e.num}`).join(", ")})`
                }
                tone={
                  activeStep === 0
                    ? "ink"
                    : translator === "interpreter"
                      ? firstErrorLine && activeStep >= firstErrorLine
                        ? "bad"
                        : "good"
                      : allErrors.length > 0
                        ? "bad"
                        : "good"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "software-security-encryption-lab",
    title: "Symmetric vs Asymmetric Public/Private Key Lab",
    blurb: "Send messages past packet-sniffer Eve to test symmetric key exchange vs recipient public/private key pairs.",
    Component: EncryptionLab,
  },
  {
    id: "software-security-translator-explorer",
    title: "Compiler vs Interpreter Execution Stepper",
    blurb: "Inject syntax bugs into CIE pseudocode and compare line-by-line interpretation against whole-file compilation.",
    Component: TranslatorExplorer,
  },
];
