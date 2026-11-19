"use client";
import { useState } from "react";
import Link from "next/link";
import type { FormulaFact, Misconception } from "@/lib/types";
import { Rich, RichInline } from "./Rich";
import { PrintButton } from "./Certificate";

export interface VaultTopicData {
  id: string;
  title: string;
  icon: string;
  strand: string;
  misconceptions: Misconception[];
  examMistakes: string[];
  formulas: FormulaFact[];
}

type ViewTab = "all" | "traps" | "cheatsheet";

const CIE_SYNTAX_CARDS = [
  {
    title: "1. CIE 0478 IEC Units Rule (Paper 1)",
    badge: "Paper 1 Trap #1",
    lines: [
      "`1 byte = 8 bits` · `1 nibble = 4 bits`",
      "`1 KiB = 1024 bytes` · `1 MiB = 1024 KiB` · `1 GiB = 1024 MiB` · `1 TiB = 1024 GiB`",
      "**Never divide by 1000** when converting to `KiB`, `MiB`, or `GiB`! Only SI units (`kB`, `MB`, `GB`) use `1000`.",
      "**Image size (bits)** = `width × height × colour depth` · **Sound size (bits)** = `sample rate × resolution × seconds × channels`.",
    ],
  },
  {
    title: "2. Two's Complement & Shifts (Paper 1)",
    badge: "Paper 1 Trap #2",
    lines: [
      "8-bit Two's Complement place values: **`−128`, `64`, `32`, `16`, `8`, `4`, `2`, `1`** (range **`−128` to `+127`**).",
      "Negative conversion: write positive binary → **invert all bits** → **add `1`** (or copy from right up to first `1`, then flip remaining left bits).",
      "Logical left shift `<< n` multiplies unsigned value by `2^n`; logical right shift `>> n` divides by `2^n` (losing precision if `1`s fall off).",
    ],
  },
  {
    title: "3. CIE 0478 Pseudocode vs Python (Paper 2)",
    badge: "Paper 2 Syntax",
    lines: [
      "Assignment: `Count ← Count + 1` (Python: `count = count + 1`) · Not equal: `<>` (Python: `!=`).",
      "`DIV(17, 5)` or `17 DIV 5 = 3` (`17 // 5`) · `MOD(17, 5)` or `17 MOD 5 = 2` (`17 % 5`).",
      "**Trap!** CIE `SUBSTRING(Text, Start, Length)` is **1-indexed** and 3rd value is **length**: `SUBSTRING(\"COMPUTER\", 4, 3)` → `\"PUT\"`. Python `text[3:6]` is **0-indexed** with exclusive end!",
      "`REPEAT ... UNTIL Condition` runs **at least once** and **stops when `Condition` is `TRUE`** (opposite of `WHILE`!).",
    ],
  },
  {
    title: "4. CIE 0478 SQL Cheat-Sheet (Paper 2)",
    badge: "Paper 2 SQL",
    lines: [
      "Clause order: `SELECT fields FROM Table WHERE condition ORDER BY field ASC/DESC;`",
      "**Trap!** Always wrap `TEXT` / `CHAR` literals in quotes (`WHERE House = 'Tanglin'`), **never** wrap `INTEGER`/`REAL`/`BOOLEAN` numbers in quotes (`WHERE Score >= 80`).",
      "Wildcard all columns: `SELECT *` · Totals: `SELECT SUM(Price)` · Row count: `SELECT COUNT(StudentID)`.",
      "Combine conditions explicitly: `WHERE Age >= 15 AND Paid = TRUE` (never write `WHERE Age >= 15 AND <= 18` — repeat the field name!).",
    ],
  },
];

export function FormulasVault({ topics }: { topics: VaultTopicData[] }) {
  const [tab, setTab] = useState<ViewTab>("all");
  const [strandFilter, setStrandFilter] = useState<string>("All");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const visibleTopics = topics.filter((t) => (strandFilter === "All" ? true : t.strand === strandFilter));

  const totalTraps = topics.reduce((s, t) => s + t.misconceptions.length, 0);
  const totalMistakes = topics.reduce((s, t) => s + t.examMistakes.length, 0);
  const totalFormulas = topics.reduce((s, t) => s + t.formulas.length, 0);

  return (
    <div className="space-y-6 print:space-y-3">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap gap-2">
            <span className="chip border-0 bg-bad-soft text-bad">❌→✅ {totalTraps} Mark-Scheme Swaps</span>
            <span className="chip border-0 bg-accent-soft text-warn">⚠️ {totalMistakes} Examiner Warnings</span>
            <span className="chip border-0 bg-brand-soft text-brand">📖 {totalFormulas} Pseudocode, SQL &amp; Architecture Rules</span>
          </div>
          <h1 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl print:text-xl">
            🎯 CIE 0478 Exam Traps, Pseudocode &amp; SQL Vault
          </h1>
          <p className="mt-1 max-w-3xl text-ink-2 print:hidden">
            What <strong>earns marks</strong> vs what <strong>loses marks</strong> on Cambridge IGCSE Computer Science (0478) Paper 1 &amp; Paper 2 — exact mark-scheme phrasing, official CIE pseudocode, SQL syntax and hardware registers in one printable vault.
          </p>
        </div>
        <PrintButton label="Print Cheat-Sheet" />
      </header>

      {/* High-Yield CIE 0478 Quick-Reference Cards */}
      <section aria-label="CIE 0478 Non-Negotiable Exam Rules" className="grid gap-3 md:grid-cols-2">
        {CIE_SYNTAX_CARDS.map((c) => (
          <article key={c.title} className="card border-l-4 border-brand p-4">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-extrabold text-ink">{c.title}</h2>
              <span className="chip shrink-0 border-0 bg-brand-soft text-xs text-brand">{c.badge}</span>
            </div>
            <ul className="mt-2 space-y-1.5 text-sm text-ink-2">
              {c.lines.map((line, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden className="text-brand font-bold">•</span>
                  <span className="min-w-0 flex-1">
                    <RichInline text={line} />
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* Filters */}
      <div className="no-print flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-surface p-3">
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Vault view">
          <button type="button" role="tab" aria-selected={tab === "all"} onClick={() => setTab("all")} className={`btn btn-sm ${tab === "all" ? "btn-primary" : "btn-secondary"}`}>
            All ({totalTraps + totalFormulas})
          </button>
          <button type="button" role="tab" aria-selected={tab === "traps"} onClick={() => setTab("traps")} className={`btn btn-sm ${tab === "traps" ? "btn-primary" : "btn-secondary"}`}>
            ❌→✅ Never Write / Write Instead ({totalTraps})
          </button>
          <button type="button" role="tab" aria-selected={tab === "cheatsheet"} onClick={() => setTab("cheatsheet")} className={`btn btn-sm ${tab === "cheatsheet" ? "btn-primary" : "btn-secondary"}`}>
            📖 Formulas, Pseudocode &amp; Definitions ({totalFormulas})
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {["All", "Paper 1: Computer Systems", "Paper 2: Algorithms, Programming & Logic"].map((s) => (
            <button key={s} type="button" onClick={() => setStrandFilter(s)} className={`chip cursor-pointer text-xs ${strandFilter === s ? "border-brand bg-brand-soft text-brand" : ""}`}>
              {s === "All" ? "All Papers" : s.startsWith("Paper 1") ? "Paper 1" : "Paper 2"}
            </button>
          ))}
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter e.g. 1024, MAR, SQL, boundary…"
            aria-label="Filter exam vault"
            className="input h-9 w-52 text-sm"
          />
        </div>
      </div>

      {/* Topic-by-Topic Exam Vault */}
      <div className="space-y-6">
        {visibleTopics.map((t) => {
          const traps = t.misconceptions.filter((m) => !q || m.wrong.toLowerCase().includes(q) || m.right.toLowerCase().includes(q));
          const mistakes = t.examMistakes.filter((m) => !q || m.toLowerCase().includes(q));
          const formulas = t.formulas.filter((f) => !q || f.name.toLowerCase().includes(q) || f.formula.toLowerCase().includes(q) || (f.note ?? "").toLowerCase().includes(q));

          const showTraps = tab !== "cheatsheet" && (traps.length > 0 || mistakes.length > 0);
          const showFormulas = tab !== "traps" && formulas.length > 0;
          if (!showTraps && !showFormulas) return null;

          return (
            <section key={t.id} id={`vault-${t.id}`} className="card space-y-4 p-4 sm:p-5 break-inside-avoid">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-3">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide text-brand">{t.strand}</div>
                  <h2 className="text-xl font-black">
                    <span aria-hidden>{t.icon} </span>
                    {t.title}
                  </h2>
                </div>
                <div className="no-print flex flex-wrap gap-2">
                  <Link href={`/topic/${t.id}?tab=revise`} className="btn btn-secondary btn-sm">
                    🧠 Flashcards &amp; Revise
                  </Link>
                  <Link href={`/topic/${t.id}?tab=practise`} className="btn btn-primary btn-sm">
                    ✏️ Practise →
                  </Link>
                </div>
              </div>

              {showTraps && traps.length > 0 ? (
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-bad">
                    ❌ Never Write This → ✅ Write This Instead (CIE Mark-Scheme Precision)
                  </h3>
                  <ul className="mt-2 space-y-2.5">
                    {traps.map((m, idx) => (
                      <li key={idx} className="grid overflow-hidden rounded-xl border border-line sm:grid-cols-2">
                        <div className="bg-bad-soft p-3.5 text-sm">
                          <div className="text-xs font-black uppercase tracking-wider text-bad">❌ Loses Marks — Never Write</div>
                          <p className="mt-1 line-through decoration-bad/60">
                            <RichInline text={m.wrong} />
                          </p>
                        </div>
                        <div className="bg-good-soft p-3.5 text-sm">
                          <div className="text-xs font-black uppercase tracking-wider text-good">✅ Earns Marks — Write Instead</div>
                          <p className="mt-1 font-semibold">
                            <RichInline text={m.right} />
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {showTraps && mistakes.length > 0 ? (
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-warn">⚠️ Examiner Report Warnings</h3>
                  <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                    {mistakes.map((x, idx) => (
                      <li key={idx} className="flex gap-2.5 rounded-xl border border-line bg-surface-2 p-3 text-sm">
                        <span aria-hidden className="font-black text-warn">!</span>
                        <span className="min-w-0 flex-1">
                          <RichInline text={x} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {showFormulas && formulas.length > 0 ? (
                <div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-brand">📖 Key Formulas, Syntax &amp; Definitions</h3>
                  <dl className="mt-2 grid gap-3 sm:grid-cols-2">
                    {formulas.map((f, idx) => (
                      <div key={idx} className="min-w-0 rounded-xl border border-line bg-surface p-3.5">
                        <dt className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
                          <RichInline text={f.name} />
                        </dt>
                        <dd className="mt-1 overflow-x-auto">
                          <Rich text={f.formula} className="text-[0.98rem] font-semibold text-ink" />
                          {f.note ? <Rich text={f.note} className="mt-0.5 text-xs text-ink-2" /> : null}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ) : null}
            </section>
          );
        })}
      </div>
    </div>
  );
}
