"use client";

import { useMemo, useState } from "react";
import { WidgetFrame, Stepper, Segmented, Readout, type WidgetDef } from "./kit";

interface MemberRow {
  MemberID: string;
  Name: string;
  Club: string;
  YearGroup: number;
  Points: number;
  FeePaid: boolean;
}

const CLUB_TABLE: readonly MemberRow[] = [
  { MemberID: "M01", Name: "Tara", Club: "Coding", YearGroup: 11, Points: 85, FeePaid: true },
  { MemberID: "M02", Name: "Zain", Club: "Robotics", YearGroup: 11, Points: 92, FeePaid: true },
  { MemberID: "M03", Name: "Chloe", Club: "Coding", YearGroup: 10, Points: 64, FeePaid: false },
  { MemberID: "M04", Name: "Dev", Club: "Chess", YearGroup: 11, Points: 78, FeePaid: true },
  { MemberID: "M05", Name: "Maya", Club: "Robotics", YearGroup: 10, Points: 88, FeePaid: false },
  { MemberID: "M06", Name: "Liam", Club: "Coding", YearGroup: 11, Points: 95, FeePaid: true },
  { MemberID: "M07", Name: "Nadia", Club: "Drama", YearGroup: 10, Points: 71, FeePaid: true },
  { MemberID: "M08", Name: "Kai", Club: "Chess", YearGroup: 10, Points: 60, FeePaid: false },
];

const VALID_COLS = ["MemberID", "Name", "Club", "YearGroup", "Points", "FeePaid"] as const;
type ColName = (typeof VALID_COLS)[number];

const PRESET_QUERIES: { label: string; sql: string }[] = [
  {
    label: "Coding + Paid (Sorted)",
    sql: "SELECT Name, Points FROM ClubMembers WHERE Club = 'Coding' AND FeePaid = TRUE ORDER BY Points DESC;",
  },
  {
    label: "SUM(Points) Robotics",
    sql: "SELECT SUM(Points) FROM ClubMembers WHERE Club = 'Robotics';",
  },
  {
    label: "COUNT Unpaid",
    sql: "SELECT COUNT(MemberID) FROM ClubMembers WHERE NOT FeePaid = TRUE;",
  },
  {
    label: "Year 11 High Scorers",
    sql: "SELECT MemberID, Name, Club, Points FROM ClubMembers WHERE YearGroup = 11 AND Points >= 85 ORDER BY Name ASC;",
  },
  {
    label: "Trap: Missing Field!",
    sql: "SELECT Name, Club FROM ClubMembers WHERE Club = 'Coding' OR 'Chess';",
  },
];

function findCol(raw: string): ColName | null {
  const clean = raw.trim().toLowerCase();
  return VALID_COLS.find((c) => c.toLowerCase() === clean) ?? null;
}

interface SqlResult {
  ok: boolean;
  error?: string;
  cieTip?: string;
  matchedIds: Set<string>;
  columns: string[];
  rows: (string | number | boolean)[][];
}

function evalAtom(atomStr: string, row: MemberRow): { val: boolean; err?: string; tip?: string } {
  let s = atomStr.trim();
  let invert = false;
  if (/^not\s+/i.test(s)) {
    invert = true;
    s = s.replace(/^not\s+/i, "").trim();
  }
  const m = s.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*(<>|!=|<=|>=|=|<|>)\s*(.+)$/);
  if (!m) {
    return {
      val: false,
      err: `Invalid WHERE condition "${atomStr.trim()}".`,
      tip: "CIE Trap: Always repeat the full field comparison after AND/OR — e.g. write `WHERE Club = 'Coding' OR Club = 'Chess'`, NEVER `OR 'Chess'`!",
    };
  }
  const col = findCol(m[1]);
  if (!col) {
    return {
      val: false,
      err: `Unknown field "${m[1]}". Available fields: ${VALID_COLS.join(", ")}.`,
    };
  }
  const op = m[2] === "!=" ? "<>" : m[2];
  const rhsRaw = m[3].trim();
  const cell = row[col];

  if (typeof cell === "string") {
    const qMatch = rhsRaw.match(/^'([^']*)'$/);
    if (!qMatch) {
      if (/^"([^"]*)"$/.test(rhsRaw)) {
        return {
          val: false,
          err: `Use single quotes around text literals in CIE SQL: '${rhsRaw.slice(1, -1)}'.`,
          tip: "CIE 0478 SQL uses single quotes `'Text'` for TEXT/CHAR literals.",
        };
      }
      return {
        val: false,
        err: `Text value ${rhsRaw} for field ${col} must be enclosed in single quotes (e.g. '${rhsRaw}').`,
        tip: "Never omit single quotes around TEXT literals in a WHERE clause!",
      };
    }
    const target = qMatch[1];
    let res = false;
    if (op === "=") res = cell === target;
    else if (op === "<>") res = cell !== target;
    else if (op === "<") res = cell < target;
    else if (op === ">") res = cell > target;
    else if (op === "<=") res = cell <= target;
    else if (op === ">=") res = cell >= target;
    return { val: invert ? !res : res };
  }

  if (typeof cell === "number") {
    if (/^['"]/.test(rhsRaw)) {
      return {
        val: false,
        err: `Numeric field ${col} compared to quoted string ${rhsRaw}. Remove quotes around numbers!`,
        tip: "CIE Trap: Never put quotes around INTEGER or REAL values in SQL (`WHERE Points >= 85`, not `'85'`).",
      };
    }
    const num = Number(rhsRaw);
    if (!Number.isFinite(num)) {
      return { val: false, err: `Expected a number for ${col}, got "${rhsRaw}".` };
    }
    let res = false;
    if (op === "=") res = cell === num;
    else if (op === "<>") res = cell !== num;
    else if (op === "<") res = cell < num;
    else if (op === ">") res = cell > num;
    else if (op === "<=") res = cell <= num;
    else if (op === ">=") res = cell >= num;
    return { val: invert ? !res : res };
  }

  // boolean
  if (/^['"]/.test(rhsRaw)) {
    return {
      val: false,
      err: `Boolean field ${col} compared to quoted ${rhsRaw}. Write TRUE or FALSE without quotes!`,
      tip: "CIE Trap: BOOLEAN literals `TRUE` and `FALSE` are keywords, never quoted strings!",
    };
  }
  const upper = rhsRaw.toUpperCase();
  if (upper !== "TRUE" && upper !== "FALSE" && upper !== "1" && upper !== "0") {
    return { val: false, err: `Expected TRUE or FALSE for boolean field ${col}, got "${rhsRaw}".` };
  }
  const bTarget = upper === "TRUE" || upper === "1";
  if (op !== "=" && op !== "<>") {
    return { val: false, err: `Use = or <> when comparing BOOLEAN field ${col}.` };
  }
  const res = op === "=" ? cell === bTarget : cell !== bTarget;
  return { val: invert ? !res : res };
}

function evalWhereExpr(expr: string, row: MemberRow): { val: boolean; err?: string; tip?: string } {
  let s = expr.trim();
  // Strip outer balanced parens
  while (s.startsWith("(") && s.endsWith(")")) {
    let depth = 0;
    let wrapsAll = true;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") depth++;
      else if (s[i] === ")") {
        depth--;
        if (depth === 0 && i < s.length - 1) {
          wrapsAll = false;
          break;
        }
      }
    }
    if (wrapsAll) s = s.slice(1, -1).trim();
    else break;
  }

  // Split top-level OR (lowest precedence)
  let depth = 0;
  let inQuote = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "'") inQuote = !inQuote;
    if (inQuote) continue;
    if (s[i] === "(") depth++;
    else if (s[i] === ")") depth--;
    else if (depth === 0 && /^\s+OR\s+/i.test(s.slice(i))) {
      const m = s.slice(i).match(/^\s+OR\s+/i)!;
      const left = evalWhereExpr(s.slice(0, i), row);
      if (left.err) return left;
      const right = evalWhereExpr(s.slice(i + m[0].length), row);
      if (right.err) return right;
      return { val: left.val || right.val };
    }
  }

  // Split top-level AND (higher precedence than OR)
  depth = 0;
  inQuote = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "'") inQuote = !inQuote;
    if (inQuote) continue;
    if (s[i] === "(") depth++;
    else if (s[i] === ")") depth--;
    else if (depth === 0 && /^\s+AND\s+/i.test(s.slice(i))) {
      const m = s.slice(i).match(/^\s+AND\s+/i)!;
      const left = evalWhereExpr(s.slice(0, i), row);
      if (left.err) return left;
      const right = evalWhereExpr(s.slice(i + m[0].length), row);
      if (right.err) return right;
      return { val: left.val && right.val };
    }
  }

  if (/^NOT\s*\(/i.test(s) && s.endsWith(")")) {
    const inner = evalWhereExpr(s.replace(/^NOT\s*/i, ""), row);
    if (inner.err) return inner;
    return { val: !inner.val };
  }

  return evalAtom(s, row);
}

function runClubSql(rawSql: string): SqlResult {
  const cleaned = rawSql.trim().replace(/;\s*$/, "").replace(/\s+/g, " ");
  if (!cleaned) {
    return { ok: false, error: "Enter an SQL query starting with SELECT.", matchedIds: new Set(), columns: [], rows: [] };
  }
  if (/\bORDER\s+BY\b[\s\S]*\bWHERE\b/i.test(cleaned)) {
    return {
      ok: false,
      error: "Clause order error: ORDER BY appears before WHERE!",
      cieTip: "Mnemonic: Some Frogs Wear Overcoats → SELECT ... FROM ... WHERE ... ORDER BY ...!",
      matchedIds: new Set(),
      columns: [],
      rows: [],
    };
  }

  const m = cleaned.match(
    /^SELECT\s+(.+?)\s+FROM\s+([a-zA-Z_][a-zA-Z0-9_]*)(?:\s+WHERE\s+(.+?))?(?:\s+ORDER\s+BY\s+(.+))?$/i,
  );
  if (!m) {
    return {
      ok: false,
      error: "Syntax error: expected `SELECT <fields> FROM ClubMembers [WHERE ...] [ORDER BY ...] ;`",
      matchedIds: new Set(),
      columns: [],
      rows: [],
    };
  }

  const [, selectPart, tablePart, wherePart, orderPart] = m;
  if (tablePart.toLowerCase() !== "clubmembers") {
    return {
      ok: false,
      error: `Unknown table "${tablePart}". Use FROM ClubMembers.`,
      matchedIds: new Set(),
      columns: [],
      rows: [],
    };
  }

  let filtered: MemberRow[] = [];
  for (const row of CLUB_TABLE) {
    if (!wherePart) {
      filtered.push(row);
    } else {
      const r = evalWhereExpr(wherePart, row);
      if (r.err) {
        return { ok: false, error: r.err, cieTip: r.tip, matchedIds: new Set(), columns: [], rows: [] };
      }
      if (r.val) filtered.push(row);
    }
  }

  const matchedIds = new Set(filtered.map((r) => r.MemberID));

  if (orderPart) {
    const om = orderPart.trim().match(/^([a-zA-Z_][a-zA-Z0-9_]*)(?:\s+(ASC|DESC))?$/i);
    if (!om) {
      return {
        ok: false,
        error: `Invalid ORDER BY clause "${orderPart}". Expected e.g. ORDER BY Points DESC.`,
        matchedIds,
        columns: [],
        rows: [],
      };
    }
    const oCol = findCol(om[1]);
    if (!oCol) {
      return { ok: false, error: `Unknown ORDER BY field "${om[1]}".`, matchedIds, columns: [], rows: [] };
    }
    const dir = (om[2] ?? "ASC").toUpperCase() === "DESC" ? -1 : 1;
    filtered = [...filtered].sort((a, b) => {
      const va = a[oCol];
      const vb = b[oCol];
      if (va === vb) return 0;
      return (va < vb ? -1 : 1) * dir;
    });
  }

  // Aggregate check: COUNT(...) or SUM(...)
  const countMatch = selectPart.trim().match(/^COUNT\(\s*(\*|[a-zA-Z_][a-zA-Z0-9_]*)\s*\)$/i);
  if (countMatch) {
    const arg = countMatch[1];
    if (arg !== "*" && !findCol(arg)) {
      return { ok: false, error: `Unknown field "${arg}" inside COUNT().`, matchedIds, columns: [], rows: [] };
    }
    return {
      ok: true,
      cieTip: "COUNT() returns how many matching records (rows) survived the WHERE filter.",
      matchedIds,
      columns: [`COUNT(${arg === "*" ? "*" : findCol(arg)})`],
      rows: [[filtered.length]],
    };
  }

  const sumMatch = selectPart.trim().match(/^SUM\(\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\)$/i);
  if (sumMatch) {
    const sCol = findCol(sumMatch[1]);
    if (!sCol) {
      return { ok: false, error: `Unknown field "${sumMatch[1]}" inside SUM().`, matchedIds, columns: [], rows: [] };
    }
    if (sCol !== "Points" && sCol !== "YearGroup") {
      return {
        ok: false,
        error: `SUM(${sCol}) invalid: SUM() only works on numeric fields (Points or YearGroup)!`,
        matchedIds,
        columns: [],
        rows: [],
      };
    }
    const total = filtered.reduce((acc, r) => acc + Number(r[sCol]), 0);
    return {
      ok: true,
      cieTip: `SUM(${sCol}) adds the numeric values in ${sCol} across all ${filtered.length} matching row(s).`,
      matchedIds,
      columns: [`SUM(${sCol})`],
      rows: [[total]],
    };
  }

  let outCols: ColName[] = [];
  if (selectPart.trim() === "*") {
    outCols = [...VALID_COLS];
  } else {
    const parts = selectPart.split(",").map((p) => p.trim());
    for (const p of parts) {
      const c = findCol(p);
      if (!c) {
        return {
          ok: false,
          error: `Unknown SELECT field "${p}". Choose from: ${VALID_COLS.join(", ")}, COUNT(...), or SUM(...).`,
          matchedIds,
          columns: [],
          rows: [],
        };
      }
      outCols.push(c);
    }
  }

  return {
    ok: true,
    cieTip:
      selectPart.trim() === "*"
        ? "Exam tip: Only write `SELECT *` when asked for ALL fields — otherwise list the exact requested columns!"
        : `Projected ${outCols.length} field(s) across ${filtered.length} matching record(s).`,
    matchedIds,
    columns: outCols,
    rows: filtered.map((r) => outCols.map((c) => (typeof r[c] === "boolean" ? (r[c] ? "TRUE" : "FALSE") : r[c]))),
  };
}

function SqlQuerySandbox() {
  const [sql, setSql] = useState(PRESET_QUERIES[0].sql);
  const result = useMemo(() => runClubSql(sql), [sql]);

  return (
    <WidgetFrame
      title="Live Single-Table SQL Sandbox (ClubMembers)"
      tryThis={[
        "Click **Trap: Missing Field!** to see why `WHERE Club = 'Coding' OR 'Chess'` fails CIE SQL rules, then fix it to `OR Club = 'Chess'`!",
        "Write a query using `SUM(Points)` for `YearGroup = 10`, then switch `SUM` to `COUNT` and compare the output.",
        "Remove `' '` around `'Coding'` or add quotes around `85` to trigger the CIE Examiner Type Checker!",
      ]}
      caption={
        result.ok ? (
          <span>
            <strong>Query OK:</strong> {result.matchedIds.size} of {CLUB_TABLE.length} records matched `WHERE`.{" "}
            {result.cieTip}
          </span>
        ) : (
          <span className="text-bad">
            <strong>SQL Error:</strong> {result.error} {result.cieTip ? ` — ${result.cieTip}` : ""}
          </span>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {PRESET_QUERIES.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => setSql(p.sql)}
              className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                sql === p.sql ? "border-brand bg-brand/10 text-brand" : "border-line bg-surface text-ink-2 hover:text-ink"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div>
          <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-ink-2">
            Editable CIE 0478 SQL Query (`SELECT ... FROM ClubMembers ...`)
          </label>
          <textarea
            rows={2}
            value={sql}
            onChange={(e) => setSql(e.target.value)}
            spellCheck={false}
            className="w-full rounded-xl border border-line bg-surface p-2.5 font-mono text-sm text-ink focus:border-brand focus:outline-none"
          />
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink-2">
              Source Table: `ClubMembers` (MemberID = Primary Key)
            </div>
            <div className="overflow-x-auto rounded-xl border border-line">
              <table className="w-full text-left font-mono text-xs">
                <thead className="bg-surface-2 text-ink-2">
                  <tr>
                    {VALID_COLS.map((c) => (
                      <th key={c} className="px-2 py-1.5 font-bold">
                        {c === "MemberID" ? "MemberID🔑" : c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {CLUB_TABLE.map((r) => {
                    const hit = result.ok && result.matchedIds.has(r.MemberID);
                    return (
                      <tr
                        key={r.MemberID}
                        className={`border-t border-line transition ${hit ? "bg-good/15 font-bold text-ink" : "opacity-60"}`}
                      >
                        <td className="px-2 py-1">{r.MemberID}</td>
                        <td className="px-2 py-1">{r.Name}</td>
                        <td className="px-2 py-1">&apos;{r.Club}&apos;</td>
                        <td className="px-2 py-1">{r.YearGroup}</td>
                        <td className="px-2 py-1">{r.Points}</td>
                        <td className="px-2 py-1">{r.FeePaid ? "TRUE" : "FALSE"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <div className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink-2">
              Query Output ({result.ok ? `${result.rows.length} row${result.rows.length === 1 ? "" : "s"}` : "Fix syntax"})
            </div>
            {result.ok ? (
              <div className="overflow-x-auto rounded-xl border border-line bg-surface">
                <table className="w-full text-left font-mono text-xs">
                  <thead className="bg-brand/10 text-brand">
                    <tr>
                      {result.columns.map((c) => (
                        <th key={c} className="px-2.5 py-1.5 font-extrabold">
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {result.rows.length === 0 ? (
                      <tr>
                        <td colSpan={result.columns.length} className="px-3 py-4 text-center text-ink-2">
                          0 matching records
                        </td>
                      </tr>
                    ) : (
                      result.rows.map((row, idx) => (
                        <tr key={idx} className="border-t border-line">
                          {row.map((val, ci) => (
                            <td key={ci} className="px-2.5 py-1.5 font-semibold text-ink">
                              {String(val)}
                            </td>
                          ))}
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="rounded-xl border border-bad/40 bg-bad/10 p-3 text-sm text-bad">
                <div className="font-extrabold">{result.error}</div>
                {result.cieTip ? <div className="mt-1 text-xs text-ink">{result.cieTip}</div> : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

const SAMPLE_WORDS = ["COMPUTER", "ALGORITHM", "DATABASE", "PYTHONIC"] as const;

function SubstringVsPythonExplorer() {
  const [word, setWord] = useState<string>("COMPUTER");
  const [start1, setStart1] = useState(4);
  const [len, setLen] = useState(3);

  const safeStart = Math.min(Math.max(1, start1), word.length);
  const maxLen = Math.max(1, word.length - safeStart + 1);
  const safeLen = Math.min(Math.max(1, len), maxLen);

  const pyStart = safeStart - 1;
  const pyStop = pyStart + safeLen;
  const extracted = word.slice(pyStart, pyStop);
  const wrongPySameNums = safeStart < safeLen ? word.slice(safeStart, safeLen) : "";

  return (
    <WidgetFrame
      title="CIE SUBSTRING (1-Indexed) vs Python Slice (0-Indexed) Explorer"
      tryThis={[
        "Extract `\"PUT\"` from `\"COMPUTER\"`: verify CIE `SUBSTRING(S, 4, 3)` matches Python `s[3:6]`!",
        "Look at the red **Trap Readout** to see what happens if you type `s[4:3]` in Python using the CIE numbers directly.",
        "Switch words to `\"ALGORITHM\"` and find the CIE and Python slices for `\"GORI\"`.",
      ]}
      caption={
        <span>
          CIE `SUBSTRING(&quot;{word}&quot;, {safeStart}, {safeLen})` starts at <strong>1-based position {safeStart}</strong> and takes{" "}
          <strong>{safeLen} character(s)</strong> → `&quot;{extracted}&quot;`. In Python, subtract 1 for the start (`{pyStart}`) and add length for the exclusive stop (`{pyStart} + {safeLen} = {pyStop}`) → `s[{pyStart}:{pyStop}]`!
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Segmented
            label="Sample word"
            value={word}
            onChange={(w) => {
              setWord(w);
              setStart1(2);
              setLen(3);
            }}
            options={SAMPLE_WORDS.map((w) => ({ value: w, label: w }))}
          />
          <span className="font-mono text-xs font-bold text-ink-2">LENGTH(S) / len(s) = {word.length}</span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Stepper
            label="CIE Start Position (1-indexed)"
            value={safeStart}
            min={1}
            max={word.length}
            onChange={(v) => {
              setStart1(v);
              if (len > word.length - v + 1) setLen(Math.max(1, word.length - v + 1));
            }}
          />
          <Stepper
            label="CIE Character Length"
            value={safeLen}
            min={1}
            max={maxLen}
            onChange={setLen}
          />
        </div>

        <svg
          viewBox={`0 0 ${Math.max(460, word.length * 52 + 80)} 150`}
          className="w-full rounded-xl border border-line bg-surface-2 p-2"
          role="img"
          aria-label="Dual-indexed character strip comparing 1-based CIE positions with 0-based Python slice indices"
        >
          <text x={14} y={26} fontSize={11} fontWeight="bold" className="fill-brand">
            CIE Pos (1..{word.length})
          </text>
          <text x={14} y={128} fontSize={11} fontWeight="bold" className="fill-ink-2">
            Python Idx (0..{word.length - 1})
          </text>
          {word.split("").map((ch, idx0) => {
            const pos1 = idx0 + 1;
            const active = idx0 >= pyStart && idx0 < pyStop;
            const x = 130 + idx0 * 48;
            return (
              <g key={idx0}>
                <text
                  x={x + 22}
                  y={26}
                  textAnchor="middle"
                  fontSize={12}
                  fontWeight="bold"
                  fill={active ? "#15803d" : "#2563eb"}
                >
                  {pos1}
                </text>
                <rect
                  x={x}
                  y={36}
                  width={44}
                  height={56}
                  rx={8}
                  fill={active ? "#bbf7d0" : "#ffffff"}
                  stroke={active ? "#16a34a" : "#94a3b8"}
                  strokeWidth={active ? 2.5 : 1.2}
                />
                <text
                  x={x + 22}
                  y={71}
                  textAnchor="middle"
                  fontFamily="monospace"
                  fontSize={20}
                  fontWeight="bold"
                  fill={active ? "#064e3b" : "#0f172a"}
                >
                  {ch}
                </text>
                <text
                  x={x + 22}
                  y={114}
                  textAnchor="middle"
                  fontFamily="monospace"
                  fontSize={12}
                  fontWeight="bold"
                  fill={idx0 === pyStart ? "#15803d" : "#64748b"}
                >
                  {idx0}
                </text>
              </g>
            );
          })}
          <text
            x={130 + pyStop * 48}
            y={140}
            textAnchor="middle"
            fontFamily="monospace"
            fontSize={11}
            fontWeight="bold"
            fill="#dc2626"
          >
            ↑ stop={pyStop}
          </text>
        </svg>

        <div className="grid gap-3 sm:grid-cols-3">
          <Readout
            label={`CIE: SUBSTRING(S, ${safeStart}, ${safeLen})`}
            value={`"${extracted}"`}
            tone="good"
          />
          <Readout
            label={`Python: s[${pyStart}:${pyStop}]`}
            value={`"${extracted}"`}
            tone="brand"
          />
          <Readout
            label={`Trap: Python s[${safeStart}:${safeLen}]`}
            value={`"${wrongPySameNums}" ${wrongPySameNums === "" ? "(empty!)" : "(wrong!)"}`}
            tone="bad"
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "python-arrays-sql-sandbox",
    title: "Single-Table SQL Query Sandbox",
    blurb: "Write and test live CIE 0478 SQL queries (`SELECT`, `WHERE`, `AND`/`OR`/`NOT`, `ORDER BY`, `SUM`, `COUNT`) against `ClubMembers`.",
    Component: SqlQuerySandbox,
  },
  {
    id: "python-arrays-sql-slicer",
    title: "CIE SUBSTRING vs Python Slicing Explorer",
    blurb: "Step through 1-indexed CIE `SUBSTRING(S, start, length)` and 0-indexed Python `s[start:stop]` side-by-side.",
    Component: SubstringVsPythonExplorer,
  },
];
