import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Every Spotify playlist search, airline seat map, and Instagram username check runs on the exact trio in this unit: string slicing, indexed arrays, and declarative SQL queries.",
  didYouKnow: [
    "Python is named after the British comedy troupe *Monty Python's Flying Circus*, not the snake — Guido van Rossum was reading scripts from the show over Christmas 1989 when he designed the language!",
    "SQL was originally called **SEQUEL** (*Structured English Query Language*) at IBM in 1974 by Donald Chamberlin and Raymond Boyce, before a trademark dispute shortened it to SQL.",
    "Why do CIE pseudocode strings start at `1` while Python starts at `0`? Edsger Dijkstra famously proved in 1982 that `0`-based half-open slices `s[a:b]` have length `b − a` and adjoin cleanly (`s[0:3] + s[3:6]`), whereas teaching languages like Pascal/BASIC chose `1` to match human counting!",
    "SQLite — a tiny single-file SQL engine built into every iPhone, Android phone, web browser, and Airbus A350 flight-software package — is the most widely deployed database engine on Earth, with over one trillion active databases.",
    "Forgetting to repeat a column name (`WHERE x = 1 OR 2` in Python/C-like languages) is a notorious real-world bug: because non-zero `2` is truthy, `x == 1 or 2` evaluates as truthy for **every** value of `x`!",
  ],
  activities: [
    {
      title: "Index-Card Human SQL Engine",
      emoji: "🗂️",
      materials: ["8 index cards", "Marker pen", "Stopwatch"],
      steps: [
        "Write one fictional club member record on each card with 5 fields: `MemberID` (`M01`..`M08`), `Name`, `Club` (`'Coding'`, `'Drama'`, `'Chess'`), `YearGroup` (`10` or `11`), and `FeePaid` (`TRUE` or `FALSE`).",
        "Have a partner call out a CIE SQL query such as `SELECT Name, Club FROM Members WHERE YearGroup = 11 AND FeePaid = TRUE ORDER BY Name ASC;`.",
        "Physically execute the query in engine order: 1) sweep away cards failing `WHERE`, 2) sort surviving cards by the `ORDER BY` field, 3) read aloud ONLY the `SELECT` fields (or compute `SUM` / `COUNT`).",
      ],
      maths:
        "Physical filtering and sorting mirrors relational algebra: `WHERE` performs row *selection* (σ), `ORDER BY` sorts tuples, and `SELECT` performs column *projection* (π) or aggregation.",
    },
    {
      title: "Dual-Ruler String Slicer",
      emoji: "📏",
      materials: ["Squared paper strip", "Blue pen (CIE 1-indexed)", "Amber pen (Python 0-indexed)"],
      steps: [
        "Write a 10-letter word like `CYBERNETIC` across 10 boxes on squared paper.",
        "In blue **above** the boxes, number positions `1` to `10`. In amber **below** the grid lines (between boxes, starting left of box 1), number fenceposts `0` to `10`.",
        "Test slices like `'BERN'`: above the boxes it starts at box `3` of length `4` → `SUBSTRING(S, 3, 4)`; on the fenceposts below it sits strictly between posts `2` and `6` → `s[2:6]`!",
      ],
      maths:
        "Fencepost numbering shows visually why Python's `s[a:b]` never has off-by-one length bugs (`6 − 2 = 4` characters) and why `a = start − 1, b = start − 1 + length` always converts CIE `SUBSTRING` to Python!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Fencepost Model: Why Python Slicing `s[2:6]` Equals CIE `SUBSTRING(S, 3, 4)`",
      svg:
        '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fencepost numbering comparing 0-indexed Python slices with 1-indexed CIE SUBSTRING">' +
        '<rect x="8" y="8" width="544" height="184" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<text x="280" y="32" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a">Fencepost View of S = "CODING"</text>' +
        '<g font-family="monospace" font-size="12" text-anchor="middle">' +
        '<text x="140" y="58" fill="#1d4ed8">pos 1</text><text x="200" y="58" fill="#1d4ed8">pos 2</text>' +
        '<text x="260" y="58" fill="#047857" font-weight="bold">pos 3</text><text x="320" y="58" fill="#047857" font-weight="bold">pos 4</text>' +
        '<text x="380" y="58" fill="#047857" font-weight="bold">pos 5</text><text x="440" y="58" fill="#1d4ed8">pos 6</text>' +
        '<rect x="110" y="68" width="60" height="48" fill="#ffffff" stroke="#94a3b8"/><text x="140" y="98" font-size="18" font-weight="bold" fill="#0f172a">C</text>' +
        '<rect x="170" y="68" width="60" height="48" fill="#ffffff" stroke="#94a3b8"/><text x="200" y="98" font-size="18" font-weight="bold" fill="#0f172a">O</text>' +
        '<rect x="230" y="68" width="60" height="48" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/><text x="260" y="98" font-size="18" font-weight="bold" fill="#064e3b">D</text>' +
        '<rect x="290" y="68" width="60" height="48" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/><text x="320" y="98" font-size="18" font-weight="bold" fill="#064e3b">I</text>' +
        '<rect x="350" y="68" width="60" height="48" fill="#bbf7d0" stroke="#16a34a" stroke-width="2"/><text x="380" y="98" font-size="18" font-weight="bold" fill="#064e3b">N</text>' +
        '<rect x="410" y="68" width="60" height="48" fill="#ffffff" stroke="#94a3b8"/><text x="440" y="98" font-size="18" font-weight="bold" fill="#0f172a">G</text>' +
        '<text x="110" y="138" fill="#b45309">0</text><text x="170" y="138" fill="#b45309">1</text>' +
        '<text x="230" y="138" fill="#047857" font-weight="bold">2</text><text x="290" y="138" fill="#b45309">3</text>' +
        '<text x="350" y="138" fill="#b45309">4</text><text x="410" y="138" fill="#dc2626" font-weight="bold">5</text><text x="470" y="138" fill="#b45309">6</text>' +
        '</g>' +
        '<text x="280" y="168" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#0f172a">CIE: SUBSTRING("CODING", 3, 3) = "DIN"  |  Python: s[2:5] = "DIN" (5 - 2 = 3 chars)</text>' +
        '</svg>',
      caption: "Putting Python slice indices on the fenceposts between characters makes `s[2:5]` visually enclose 3 boxes (`D`, `I`, `N`).",
    },
    {
      title: "Procedure (`CALL`) vs Function (`RETURN`) Data Flow",
      svg:
        '<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison between a CIE PROCEDURE invoked with CALL and a FUNCTION returning a value">' +
        '<rect x="8" y="8" width="544" height="174" rx="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>' +
        '<rect x="24" y="28" width="244" height="134" rx="10" fill="#eff6ff" stroke="#3b82f6"/>' +
        '<text x="146" y="50" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e40af">PROCEDURE (Action Only)</text>' +
        '<text x="146" y="76" text-anchor="middle" font-family="monospace" font-size="11" fill="#1e3a8a">CALL ShowScore("Tara", 95)</text>' +
        '<text x="146" y="102" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">Inputs passed via parameters</text>' +
        '<text x="146" y="124" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">NO RETURN value back to caller</text>' +
        '<text x="146" y="146" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Prints, updates array, or writes file</text>' +
        '<rect x="292" y="28" width="244" height="134" rx="10" fill="#ecfdf5" stroke="#10b981"/>' +
        '<text x="414" y="50" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#065f46">FUNCTION (Returns Value)</text>' +
        '<text x="414" y="76" text-anchor="middle" font-family="monospace" font-size="11" fill="#064e3b">Tax &lt;- CalcTax(200, 0.15)</text>' +
        '<text x="414" y="102" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#334155">Header: RETURNS REAL</text>' +
        '<text x="414" y="124" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857">RETURN sends 1 result into expression</text>' +
        '<text x="414" y="146" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#475569">Never write CALL before a FUNCTION!</text>' +
        '</svg>',
      caption: "Use CALL for a PROCEDURE; assign or output the returned result of a FUNCTION.",
    },
  ],
  history: {
    title: "Edgar F. Codd and the 1970 Paper That Freed Data From Spaghetti Pointers",
    story:
      "Before 1970, querying company records meant writing fragile assembly or COBOL loops chasing physical disk pointers — if a disk layout changed, every program broke. British computer scientist **Edgar F. Codd** at IBM's San Jose lab published *'A Relational Model of Data for Large Shared Data Banks'*, proposing that all data be represented simply as mathematical tables (*relations*) of rows (*tuples/records*) and columns (*attributes/fields*) with unique **primary keys**. Four years later his colleagues Chamberlin and Boyce created **SQL**, letting anyone ask *what* data they wanted in one declarative sentence instead of writing low-level pointer loops — an invention that earned Codd the ACM Turing Award and still powers the world's databases half a century later.",
  },
};
