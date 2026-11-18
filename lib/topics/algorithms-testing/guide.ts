import type { TopicGuide } from "../../types.ts";

const SVG_PDLC_STRUCTURE =
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Structure diagram for an exam grading system alongside the four iterative PDLC stages">' +
  '<rect x="0" y="0" width="560" height="260" rx="14" fill="#f8fafc"/>' +
  '<text x="175" y="24" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#0f172a">Top-Down Structure Diagram</text>' +
  '<rect x="105" y="36" width="140" height="32" rx="6" fill="#1e293b"/>' +
  '<text x="175" y="56" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#ffffff">Exam Grading System</text>' +
  '<line x1="175" y1="68" x2="175" y2="88" stroke="#475569" stroke-width="2"/>' +
  '<line x1="60" y1="88" x2="290" y2="88" stroke="#475569" stroke-width="2"/>' +
  '<line x1="60" y1="88" x2="60" y2="106" stroke="#475569" stroke-width="2"/>' +
  '<line x1="175" y1="88" x2="175" y2="106" stroke="#475569" stroke-width="2"/>' +
  '<line x1="290" y1="88" x2="290" y2="106" stroke="#475569" stroke-width="2"/>' +
  '<rect x="14" y="106" width="92" height="32" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>' +
  '<text x="60" y="126" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#1e3a8a">Input Marks</text>' +
  '<rect x="129" y="106" width="92" height="32" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>' +
  '<text x="175" y="126" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#1e3a8a">Process Stats</text>' +
  '<rect x="244" y="106" width="92" height="32" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>' +
  '<text x="290" y="126" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#1e3a8a">Output Report</text>' +
  '<line x1="175" y1="138" x2="175" y2="158" stroke="#475569" stroke-width="1.8"/>' +
  '<line x1="120" y1="158" x2="230" y2="158" stroke="#475569" stroke-width="1.8"/>' +
  '<line x1="120" y1="158" x2="120" y2="176" stroke="#475569" stroke-width="1.8"/>' +
  '<line x1="230" y1="158" x2="230" y2="176" stroke="#475569" stroke-width="1.8"/>' +
  '<rect x="74" y="176" width="92" height="30" rx="5" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.3"/>' +
  '<text x="120" y="195" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="600" fill="#0c4a6e">Calc Average</text>' +
  '<rect x="184" y="176" width="92" height="30" rx="5" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.3"/>' +
  '<text x="230" y="195" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="600" fill="#0c4a6e">Find Max/Min</text>' +
  '<text x="175" y="234" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#475569">Decomposition splits system into sub-systems</text>' +
  '<line x1="356" y1="20" x2="356" y2="240" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4 4"/>' +
  '<text x="458" y="24" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#0f172a">Iterative PDLC</text>' +
  '<rect x="398" y="38" width="120" height="34" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>' +
  '<text x="458" y="59" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#92400e">1. Analysis</text>' +
  '<path d="M458 72 L458 88" stroke="#64748b" stroke-width="2"/>' +
  '<rect x="398" y="90" width="120" height="34" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>' +
  '<text x="458" y="111" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#166534">2. Design</text>' +
  '<path d="M458 124 L458 140" stroke="#64748b" stroke-width="2"/>' +
  '<rect x="398" y="142" width="120" height="34" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>' +
  '<text x="458" y="163" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#5b21b6">3. Coding</text>' +
  '<path d="M458 176 L458 192" stroke="#64748b" stroke-width="2"/>' +
  '<rect x="398" y="194" width="120" height="34" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>' +
  '<text x="458" y="215" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#991b1b">4. Testing</text>' +
  '<path d="M518 211 C544 211, 544 55, 518 55" fill="none" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="3 3"/>' +
  '<text x="458" y="245" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#475569">Iterative feedback refines earlier stages</text>' +
  '</svg>';

const SVG_FLOWCHART_SYMBOLS =
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Standard CIE 0478 flowchart symbols: Terminator, Input/Output parallelogram, Process rectangle, Decision diamond, and Subroutine box">' +
  '<rect x="0" y="0" width="560" height="260" rx="14" fill="#f8fafc"/>' +
  '<text x="280" y="24" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12.5" font-weight="700" fill="#0f172a">CIE 0478 Standard Flowchart Symbols</text>' +
  '<rect x="24" y="46" width="140" height="36" rx="18" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/>' +
  '<text x="94" y="68" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#991b1b">START / STOP</text>' +
  '<text x="94" y="98" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#475569">Terminator (Rounded)</text>' +
  '<polygon points="218,46 356,46 338,82 200,82" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/>' +
  '<text x="278" y="68" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#1e3a8a">INPUT / OUTPUT</text>' +
  '<text x="278" y="98" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#475569">Parallelogram (I/O)</text>' +
  '<rect x="394" y="46" width="142" height="36" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/>' +
  '<text x="465" y="68" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#166534">Total ← Total + X</text>' +
  '<text x="465" y="98" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#475569">Process (Rectangle)</text>' +
  '<polygon points="150,126 232,166 150,206 68,166" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>' +
  '<text x="150" y="169" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#92400e">Mark &gt;= 50?</text>' +
  '<line x1="232" y1="166" x2="278" y2="166" stroke="#16a34a" stroke-width="2"/>' +
  '<text x="255" y="159" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#166534">Yes</text>' +
  '<line x1="150" y1="206" x2="150" y2="232" stroke="#dc2626" stroke-width="2"/>' +
  '<text x="165" y="224" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#991b1b">No</text>' +
  '<text x="150" y="248" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#475569">Decision Diamond (ALWAYS label Yes/No!)</text>' +
  '<rect x="346" y="144" width="168" height="44" rx="3" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.8"/>' +
  '<line x1="362" y1="144" x2="362" y2="188" stroke="#7c3aed" stroke-width="1.8"/>' +
  '<line x1="498" y1="144" x2="498" y2="188" stroke="#7c3aed" stroke-width="1.8"/>' +
  '<text x="430" y="170" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#5b21b6">CheckValid(Mark)</text>' +
  '<text x="430" y="210" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#475569">Subroutine / Pre-defined Process</text>' +
  '<text x="430" y="226" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#64748b">(Double vertical side bars)</text>' +
  '</svg>';

const SVG_BUBBLE_SORT =
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bubble sort Pass 1 comparing adjacent pairs and swapping out-of-order elements using Temp">' +
  '<rect x="0" y="0" width="560" height="260" rx="14" fill="#f8fafc"/>' +
  '<text x="280" y="24" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12.5" font-weight="700" fill="#0f172a">Bubble Sort (Ascending): Pass 1 on [42, 17, 35, 9]</text>' +
  '<text x="22" y="64" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#334155">Start:</text>' +
  '<rect x="92" y="44" width="54" height="30" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>' +
  '<text x="119" y="63" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#991b1b">42</text>' +
  '<rect x="154" y="44" width="54" height="30" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>' +
  '<text x="181" y="63" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#991b1b">17</text>' +
  '<rect x="216" y="44" width="54" height="30" rx="6" fill="#e2e8f0"/>' +
  '<text x="243" y="63" text-anchor="middle" font-family="monospace" font-size="12" fill="#334155">35</text>' +
  '<rect x="278" y="44" width="54" height="30" rx="6" fill="#e2e8f0"/>' +
  '<text x="305" y="63" text-anchor="middle" font-family="monospace" font-size="12" fill="#334155">9</text>' +
  '<text x="348" y="63" font-family="system-ui,sans-serif" font-size="10.5" fill="#991b1b">42 &gt; 17 → Swap! (Swap ← TRUE)</text>' +
  '<text x="22" y="112" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#334155">Cmp 2:</text>' +
  '<rect x="92" y="92" width="54" height="30" rx="6" fill="#e2e8f0"/>' +
  '<text x="119" y="111" text-anchor="middle" font-family="monospace" font-size="12" fill="#334155">17</text>' +
  '<rect x="154" y="92" width="54" height="30" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>' +
  '<text x="181" y="111" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#991b1b">42</text>' +
  '<rect x="216" y="92" width="54" height="30" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>' +
  '<text x="243" y="111" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#991b1b">35</text>' +
  '<rect x="278" y="92" width="54" height="30" rx="6" fill="#e2e8f0"/>' +
  '<text x="305" y="111" text-anchor="middle" font-family="monospace" font-size="12" fill="#334155">9</text>' +
  '<text x="348" y="111" font-family="system-ui,sans-serif" font-size="10.5" fill="#991b1b">42 &gt; 35 → Swap! (via Temp)</text>' +
  '<text x="22" y="160" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#334155">Cmp 3:</text>' +
  '<rect x="92" y="140" width="54" height="30" rx="6" fill="#e2e8f0"/>' +
  '<text x="119" y="159" text-anchor="middle" font-family="monospace" font-size="12" fill="#334155">17</text>' +
  '<rect x="154" y="140" width="54" height="30" rx="6" fill="#e2e8f0"/>' +
  '<text x="181" y="159" text-anchor="middle" font-family="monospace" font-size="12" fill="#334155">35</text>' +
  '<rect x="216" y="140" width="54" height="30" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>' +
  '<text x="243" y="159" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#991b1b">42</text>' +
  '<rect x="278" y="140" width="54" height="30" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>' +
  '<text x="305" y="159" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#991b1b">9</text>' +
  '<text x="348" y="159" font-family="system-ui,sans-serif" font-size="10.5" fill="#991b1b">42 &gt; 9 → Swap!</text>' +
  '<text x="22" y="208" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#166534">End P1:</text>' +
  '<rect x="92" y="188" width="54" height="30" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.4"/>' +
  '<text x="119" y="207" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#1e3a8a">17</text>' +
  '<rect x="154" y="188" width="54" height="30" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.4"/>' +
  '<text x="181" y="207" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#1e3a8a">35</text>' +
  '<rect x="216" y="188" width="54" height="30" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.4"/>' +
  '<text x="243" y="207" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#1e3a8a">9</text>' +
  '<rect x="278" y="188" width="54" height="30" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>' +
  '<text x="305" y="207" text-anchor="middle" font-family="monospace" font-size="12" font-weight="700" fill="#166534">42</text>' +
  '<text x="348" y="207" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#166534">Largest (42) locked at end!</text>' +
  '<text x="280" y="244" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#475569">Pass 1 did 3 comparisons &amp; 3 swaps. Next pass shrinks inner bound to 2 comparisons!</text>' +
  '</svg>';

const SVG_TEST_DATA =
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Test data categories on a number line for valid integer range 1 to 100 inclusive">' +
  '<rect x="0" y="0" width="560" height="260" rx="14" fill="#f8fafc"/>' +
  '<text x="280" y="24" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12.5" font-weight="700" fill="#0f172a">CIE 0478 Test Data Categories for Valid Range 1 to 100 (Inclusive)</text>' +
  '<rect x="30" y="88" width="110" height="36" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>' +
  '<text x="85" y="110" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#991b1b">REJECTED (&lt; 1)</text>' +
  '<rect x="140" y="88" width="280" height="36" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>' +
  '<text x="280" y="110" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#166534">ACCEPTED VALID RANGE (1 .. 100)</text>' +
  '<rect x="420" y="88" width="110" height="36" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>' +
  '<text x="475" y="110" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#991b1b">REJECTED (&gt; 100)</text>' +
  '<circle cx="122" cy="88" r="6" fill="#dc2626"/>' +
  '<text x="122" y="74" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#991b1b">0</text>' +
  '<circle cx="156" cy="88" r="6" fill="#16a34a"/>' +
  '<text x="156" y="74" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#166534">1</text>' +
  '<circle cx="280" cy="88" r="6" fill="#2563eb"/>' +
  '<text x="280" y="74" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#1e3a8a">45</text>' +
  '<circle cx="404" cy="88" r="6" fill="#16a34a"/>' +
  '<text x="404" y="74" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#166534">100</text>' +
  '<circle cx="438" cy="88" r="6" fill="#dc2626"/>' +
  '<text x="438" y="74" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#991b1b">101</text>' +
  '<rect x="96" y="42" width="84" height="20" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.4"/>' +
  '<text x="138" y="56" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#92400e">Boundary: 0, 1</text>' +
  '<rect x="380" y="42" width="90" height="20" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.4"/>' +
  '<text x="425" y="56" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#92400e">Boundary: 100, 101</text>' +
  '<rect x="26" y="144" width="246" height="96" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.3"/>' +
  '<text x="38" y="164" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#1e3a8a">Normal: 45, 62 (Accepted)</text>' +
  '<text x="38" y="184" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#991b1b">Abnormal: -12, 250, "ten" (Rejected)</text>' +
  '<text x="38" y="204" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#166534">Extreme: 1 and 100 ONLY (Accepted!)</text>' +
  '<text x="38" y="224" font-family="system-ui,sans-serif" font-size="10" fill="#475569">Extreme = largest/smallest VALID value</text>' +
  '<rect x="288" y="144" width="246" height="96" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.3"/>' +
  '<text x="300" y="164" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#92400e">Boundary = PAIR across the edge!</text>' +
  '<text x="300" y="185" font-family="system-ui,sans-serif" font-size="10" fill="#78350f">• Lower pair: 0 (reject) &amp; 1 (accept)</text>' +
  '<text x="300" y="204" font-family="system-ui,sans-serif" font-size="10" fill="#78350f">• Upper pair: 100 (accept) &amp; 101 (reject)</text>' +
  '<text x="300" y="224" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#b45309">Catches &lt; vs &lt;= off-by-one bugs!</text>' +
  '</svg>';

const SVG_TRACE_TABLE =
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dry-running pseudocode alongside a CIE 0478 trace table with columns Count, Num, Best, and OUTPUT">' +
  '<rect x="0" y="0" width="560" height="260" rx="14" fill="#f8fafc"/>' +
  '<rect x="18" y="22" width="232" height="216" rx="10" fill="#0f172a"/>' +
  '<text x="32" y="46" font-family="monospace" font-size="10.5" fill="#93c5fd">Best ← 0</text>' +
  '<text x="32" y="66" font-family="monospace" font-size="10.5" fill="#e2e8f0">FOR Count ← 1 TO 3</text>' +
  '<text x="32" y="86" font-family="monospace" font-size="10.5" fill="#e2e8f0">  INPUT Num</text>' +
  '<text x="32" y="106" font-family="monospace" font-size="10.5" fill="#fde68a">  IF Num &gt; Best THEN</text>' +
  '<text x="32" y="126" font-family="monospace" font-size="10.5" fill="#86efac">    Best ← Num</text>' +
  '<text x="32" y="146" font-family="monospace" font-size="10.5" fill="#fde68a">  ENDIF</text>' +
  '<text x="32" y="166" font-family="monospace" font-size="10.5" fill="#e2e8f0">NEXT Count</text>' +
  '<text x="32" y="186" font-family="monospace" font-size="10.5" fill="#fda4af">OUTPUT Best</text>' +
  '<text x="32" y="218" font-family="system-ui,sans-serif" font-size="10" fill="#94a3b8">Test inputs: 14, 29, 18</text>' +
  '<text x="405" y="28" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#0f172a">CIE Trace Table Dry-Run</text>' +
  '<rect x="268" y="40" width="274" height="176" rx="6" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>' +
  '<rect x="268" y="40" width="274" height="32" rx="6" fill="#e2e8f0"/>' +
  '<line x1="332" y1="40" x2="332" y2="216" stroke="#cbd5e1" stroke-width="1.2"/>' +
  '<line x1="396" y1="40" x2="396" y2="216" stroke="#cbd5e1" stroke-width="1.2"/>' +
  '<line x1="460" y1="40" x2="460" y2="216" stroke="#cbd5e1" stroke-width="1.2"/>' +
  '<line x1="268" y1="72" x2="542" y2="72" stroke="#94a3b8" stroke-width="1.2"/>' +
  '<line x1="268" y1="108" x2="542" y2="108" stroke="#e2e8f0" stroke-width="1.2"/>' +
  '<line x1="268" y1="144" x2="542" y2="144" stroke="#e2e8f0" stroke-width="1.2"/>' +
  '<line x1="268" y1="180" x2="542" y2="180" stroke="#e2e8f0" stroke-width="1.2"/>' +
  '<text x="300" y="60" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#0f172a">Count</text>' +
  '<text x="364" y="60" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#0f172a">Num</text>' +
  '<text x="428" y="60" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#0f172a">Best</text>' +
  '<text x="501" y="60" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#0f172a">OUTPUT</text>' +
  '<text x="428" y="95" text-anchor="middle" font-family="monospace" font-size="11" fill="#2563eb">0</text>' +
  '<text x="300" y="131" text-anchor="middle" font-family="monospace" font-size="11" fill="#0f172a">1</text>' +
  '<text x="364" y="131" text-anchor="middle" font-family="monospace" font-size="11" fill="#0f172a">14</text>' +
  '<text x="428" y="131" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#16a34a">14</text>' +
  '<text x="300" y="167" text-anchor="middle" font-family="monospace" font-size="11" fill="#0f172a">2</text>' +
  '<text x="364" y="167" text-anchor="middle" font-family="monospace" font-size="11" fill="#0f172a">29</text>' +
  '<text x="428" y="167" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#16a34a">29</text>' +
  '<text x="300" y="203" text-anchor="middle" font-family="monospace" font-size="11" fill="#0f172a">3</text>' +
  '<text x="364" y="203" text-anchor="middle" font-family="monospace" font-size="11" fill="#0f172a">18</text>' +
  '<text x="501" y="203" text-anchor="middle" font-family="monospace" font-size="11" font-weight="700" fill="#dc2626">29</text>' +
  '<text x="405" y="238" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#475569">Count=3: 18 &gt; 29 is FALSE, so Best stays unchanged (leave blank)</text>' +
  '</svg>';

export const guide: TopicGuide = {
  id: "algorithms-testing",
  title: "Algorithms, Validation, Testing & Trace Tables",
  strand: "Paper 2: Algorithms, Programming & Logic",
  icon: "🧭",
  summary:
    "Design rock-solid systems with abstraction and decomposition, master CIE flowcharts, Linear Search and Bubble Sort, nail Validation vs Verification and Extreme vs Boundary test data, and dry-run any trace table without dropping a single mark.",
  intro:
    "Paper 2 of CIE IGCSE Computer Science (0478) rewards precision. Before you write a single line of Python or pseudocode, computational thinking helps you strip away distractions (**abstraction**) and split a giant problem into clean modules (**decomposition**). From there, you will build standard searching, sorting, totalling, and validation routines — and prove they work using systematic **trace tables** and carefully chosen **normal, abnormal, extreme, and boundary** test data.",
  guide: [
    {
      id: "computational-pdls",
      heading: "Computational Thinking, PDLC & Structure Diagrams",
      discovery: {
        problem:
          "Look at the Singapore MRT or London Underground map. Stations appear evenly spaced along neat 45° and 90° coloured lines, yet in reality tracks curve underground and outer stations are kilometres apart. Why is an 'inaccurate' map far more useful to a commuter — and if your team had to build the entire MRT ticketing app in one week, how would you divide the work so five programmers do not overwrite one another's code?",
        idea:
          "Hiding street layouts and exact geographic distances while keeping station names and line interchanges is **abstraction** (keeping only what matters for the problem). Splitting the ticketing app into independent modules — Card Tap-In, Fare Calculator, Top-Up Payment, and Receipt Display — is **decomposition**, visualised top-down with a **structure diagram**.",
      },
      body:
        "**Computational thinking** means formulating a problem and expressing its solution in a way that a computer (or human following exact steps) can carry out.\n\n" +
        "- **Abstraction**: keeping the essential characteristics needed to solve the problem while filtering out unnecessary details (e.g. a flight simulator keeps cockpit controls, wind speed, and runway coordinates, while ignoring passenger meal choices).\n" +
        "- **Decomposition**: breaking a complex problem or system down into smaller, manageable sub-systems (and sub-sub-systems). Each sub-system is easier to understand, code, test independently, and assign to different programmers or reuse as a subroutine.\n" +
        "- **Algorithmic thinking**: defining a clear, ordered, finite sequence of step-by-step instructions to solve a specific problem.\n\n" +
        "**The Program Development Life Cycle (PDLC)** has four CIE stages and is **iterative** (testing or coding discoveries often loop back to refine design or analysis):\n\n" +
        "| PDLC Stage | Purpose & Key Tasks | CIE Deliverables |\n" +
        "|---|---|---|\n" +
        "| **1. Analysis** | Understand the problem clearly using **abstraction** and **decomposition**; agree exact inputs, processes, outputs, and user requirements. | Requirements specification |\n" +
        "| **2. Design** | Plan how each sub-system works and connects before writing code. | **Structure diagrams**, **flowcharts**, **pseudocode** |\n" +
        "| **3. Coding** | Write the program in a suitable high-level language and perform **iterative module testing** as each routine is written. | Source code & working subroutines |\n" +
        "| **4. Testing** | Dry-run logic with **trace tables** and test the completed program systematically with **normal, abnormal, extreme, and boundary** test data to locate and fix syntax/logic errors. | Completed test plan & debugged program |\n\n" +
        "**Top-down design & Structure Diagrams**: A **structure diagram** shows the hierarchical decomposition of a computer system from top to bottom. Every box represents a sub-system (module), and lines show how a parent task splits into smaller child tasks — which map directly to procedures and functions when coding!",
      diagram: SVG_PDLC_STRUCTURE,
      diagramCaption:
        "Left: a hierarchical structure diagram decomposes an Exam Grading System into sub-systems and sub-sub-systems. Right: the four stages of the iterative Program Development Life Cycle.",
      workedExamples: [
        {
          title: "Decomposing a Computer System & Identifying PDLC Stages",
          problem:
            "A programmer is creating a smart school canteen app. First, she interviews canteen staff to list required features and strips out irrelevant details like table colours. Second, she draws a hierarchical tree splitting the app into Order Menu, Balance Check, and Kitchen Display. Name the PDLC stage and computational thinking skill used in each step.",
          steps: [
            "Interviewing staff to define requirements and filtering out irrelevant details (table colours) happens in the **Analysis** stage using **abstraction**.",
            "Drawing a hierarchical tree that splits the system into Order Menu, Balance Check, and Kitchen Display happens in the **Design** stage using **decomposition** (represented as a **structure diagram**).",
          ],
          answer:
            "Step 1: Analysis stage using abstraction. Step 2: Design stage using decomposition (a structure diagram).",
          yourTurn: {
            question:
              "Which stage of the Program Development Life Cycle (Analysis, Design, Coding, or Testing) produces structure diagrams, flowcharts, and pseudocode before any program code is written?",
            answer: { type: "text", accept: ["Design", "Design stage"], display: "Design" },
            solution:
              "Structure diagrams, flowcharts, and pseudocode are all created during the **Design** stage of the PDLC.",
          },
        },
      ],
      keyPoints: [
        "**Abstraction** removes unnecessary detail and keeps only what is relevant to solving the problem.",
        "**Decomposition** breaks a complex system into smaller, manageable sub-systems (inputs, processes, outputs, storage).",
        "The four PDLC stages are **Analysis → Design → Coding → Testing**, executed **iteratively**.",
        "A **structure diagram** is a top-down hierarchical tree diagram showing how a system is decomposed into sub-systems.",
      ],
      whyItWorks:
        "Human working memory holds only a handful of interacting variables at once. Abstraction shrinks the state space of each module, while decomposition isolates bugs inside small, testable subroutines so changing one module does not break the whole system.",
      strategies: [
        "Spot Input–Process–Output (IPO) branches first when asked to complete a CIE structure diagram.",
        "Never confuse Abstraction (hiding irrelevant detail) with Decomposition (splitting into smaller parts)!",
      ],
      thinkDeeper:
        "Why is the PDLC described as an *iterative* cycle rather than a strict one-way waterfall? Think about what happens when boundary testing uncovers a missing requirement.",
    },
    {
      id: "flowcharts-pseudocode",
      heading: "Flowcharts & CIE 0478 Pseudocode Essentials",
      discovery: {
        problem:
          "Suppose a flowchart diamond contains `Age >= 17` and two unlabelled arrows leave it — one pointing to `OUTPUT \"Can apply\"` and one pointing to `OUTPUT \"Too young\"`. Why will a CIE examiner deduct a mark even if your shapes are neat?",
        idea:
          "Without explicit `Yes`/`No` (or `True`/`False`) labels on the two exit arrows of a **Decision diamond**, the algorithm is ambiguous! Every flowchart shape and arrow label carries strict syntactic meaning.",
      },
      body:
        "Algorithms on CIE Paper 2 are expressed in two standard notations: **program flowcharts** and **CIE 0478 pseudocode**.\n\n" +
        "**1. Standard CIE Flowchart Symbols**\n\n" +
        "| Symbol Shape | Name | Exact Use in Flowcharts |\n" +
        "|---|---|---|\n" +
        "| **Rounded rectangle (Oval)** | **Terminator** | Marks the start (`START`) and end (`STOP` / `END`) of an algorithm. |\n" +
        "| **Parallelogram** | **Input / Output** | Taking data in (`INPUT Score`) or displaying results (`OUTPUT Total`). |\n" +
        "| **Rectangle** | **Process** | Assignments and arithmetic calculations (`Count ← Count + 1`). |\n" +
        "| **Diamond** | **Decision** | A Boolean test (`Count = 10?`) with **one entry arrow** and **two labelled exit arrows** (`Yes` / `No` or `True` / `False`). |\n" +
        "| **Rectangle with double side bars** | **Subroutine** | Calls a pre-defined procedure or function defined elsewhere (`Validate(Code)`). |\n" +
        "| **Directed arrows** | **Flowlines** | Show the exact order in which steps execute (never leave lines without arrowheads!). |\n\n" +
        "**2. CIE 0478 Pseudocode Syntax Essentials**\n\n" +
        "- **Assignment**: always use the left-pointing arrow `←` (e.g. `Total ← 0`, `Price ← Cost * 1.08`).\n" +
        "- **Input & Output**: `INPUT UserName` reads into a variable; `OUTPUT \"Score: \", Score` displays values.\n" +
        "- **Relational (Comparison) Operators**:\n" +
        "  - `=` equal to (used inside `IF`/`UNTIL`/`WHILE` conditions, **not** `==` in CIE pseudocode)\n" +
        "  - `<>` **not equal to** (CIE pseudocode uses `<>`, whereas Python uses `!=`)\n" +
        "  - `<` less than, `>` greater than, `<=` less than or equal to, `>=` greater than or equal to\n" +
        "- **Boolean Operators**: `AND`, `OR`, `NOT` written in **UPPERCASE** (keywords in CIE pseudocode are uppercase; identifiers use meaningful PascalCase/camelCase with no spaces).",
      diagram: SVG_FLOWCHART_SYMBOLS,
      diagramCaption:
        "The five standard CIE 0478 flowchart shapes. Always draw arrowheads on flowlines and label both Yes/No branches leaving every Decision diamond.",
      workedExamples: [
        {
          title: "Translating a Flowchart Loop into CIE Pseudocode",
          problem:
            "Write CIE 0478 pseudocode for an algorithm that inputs a number `N`, outputs `\"Valid\"` if `N` is not equal to `0`, and otherwise outputs `\"Zero not allowed\"`.",
          steps: [
            "Read the input with `INPUT N` (parallelogram in a flowchart).",
            "Test inequality using the CIE not-equal operator `<>` inside an `IF ... THEN ... ELSE ... ENDIF` block.",
            "Write `IF N <> 0 THEN OUTPUT \"Valid\" ELSE OUTPUT \"Zero not allowed\" ENDIF`.",
          ],
          answer:
            "INPUT N / IF N <> 0 THEN / OUTPUT \"Valid\" / ELSE / OUTPUT \"Zero not allowed\" / ENDIF",
          yourTurn: {
            question:
              "Which standard flowchart shape (Terminator, Parallelogram, Rectangle, Diamond, or Subroutine) must be used for the statement `INPUT Temperature`?",
            answer: {
              type: "text",
              accept: ["Parallelogram", "Input/Output", "Input Output", "Input/Output parallelogram"],
              display: "Parallelogram",
            },
            solution:
              "All `INPUT` and `OUTPUT` operations in a flowchart use a slanted **Parallelogram**.",
          },
        },
      ],
      keyPoints: [
        "Use a **Parallelogram** for `INPUT`/`OUTPUT`, a **Rectangle** for Process (`←`), a **Diamond** for Decisions, and a **Double-barred Rectangle** for Subroutines.",
        "Every **Decision diamond** MUST have its two outgoing flowlines labelled `Yes`/`No` (or `True`/`False`).",
        "In CIE pseudocode, `←` assigns a value, `=` tests equality, and `<>` tests **not equal to**.",
      ],
      whyItWorks:
        "Distinct geometric shapes allow any programmer to scan control flow (loops and branches) visually at a glance, while standardised CIE pseudocode lets algorithms be designed and marked independent of any single programming language.",
      strategies: [
        "Check every diamond in your flowchart before turning the page: 1 arrow in, 2 labelled arrows (`Yes` and `No`) out.",
        "Never mix rectangle and parallelogram — `Total ← Total + 1` is internal processing (Rectangle), whereas `OUTPUT Total` talks to the user (Parallelogram).",
      ],
      thinkDeeper:
        "How can you tell visually in a flowchart whether a diamond forms a *selection* (`IF..ELSE`) or an *iteration* (loop)? Look at whether one of the exit arrows loops **upwards** to an earlier point in the flow!",
    },
    {
      id: "standard-algorithms",
      heading: "Standard Algorithms: Totals, Min/Max, Linear Search & Bubble Sort",
      discovery: {
        problem:
          "A weather station records five sub-zero Arctic temperatures: `−12, −5, −19, −8, −14`. A student writes `MaxTemp ← 0` before looping through the list with `IF Temp > MaxTemp THEN MaxTemp ← Temp`. What maximum temperature does the program output — and why is it completely wrong?",
        idea:
          "Every Arctic reading (`−12`, `−5`, ...) is less than `0`, so `Temp > MaxTemp` is **never true** and the program outputs `0 °C` — a value that wasn't even in the dataset! Always initialise `Max` and `Min` to the **first item** in the array/inputs (or to an extreme opposite value like `−9999` for `Max` and `9999` for `Min`).",
      },
      body:
        "CIE Paper 2 expects you to recognise, trace, and write five core standard algorithms from memory:\n\n" +
        "**1. Totalling & Counting**\n" +
        "- **Totalling**: set `Total ← 0` **before** the loop; inside the loop execute `Total ← Total + Value`.\n" +
        "- **Counting**: set `PassCount ← 0` **before** the loop; inside the loop execute `IF Mark >= 50 THEN PassCount ← PassCount + 1 ENDIF`.\n" +
        "- **Average**: after the loop ends, calculate `Average ← Total / Count`.\n\n" +
        "**2. Maximum & Minimum**\n" +
        "- **Best method**: initialise both `Max ← Scores[1]` and `Min ← Scores[1]` to the **first element** (or first input), then loop from element `2` onwards!\n" +
        "- **Alternative method**: initialise `Max` to a tiny number below any possible valid input (e.g. `Max ← −9999` or `0` *only* if marks are guaranteed `>= 0`) and `Min` to a huge number above any possible valid input (e.g. `Min ← 9999`, **never** `0`!).\n\n" +
        "**3. Linear Search (1D Array)**\n" +
        "Checks elements **one by one from start to finish** until the target is found or the end of the array is reached. Works on **any list (sorted or unsorted)**:\n" +
        "- `Found ← FALSE`, `Index ← 1`\n" +
        "- `REPEAT`\n" +
        "  - `IF Names[Index] = Target THEN Found ← TRUE ELSE Index ← Index + 1 ENDIF`\n" +
        "- `UNTIL Found = TRUE OR Index > Length`\n" +
        "- After loop: check `IF Found = TRUE` to output position `Index`, else output `\"Not found\"`.\n\n" +
        "**4. Bubble Sort (1D Array — Ascending)**\n" +
        "Repeatedly steps through the array comparing adjacent items `Arr[Index]` and `Arr[Index + 1]`, swapping them with a temporary variable `Temp` whenever `Arr[Index] > Arr[Index + 1]`:\n" +
        "- `Last ← N - 1`\n" +
        "- `REPEAT`\n" +
        "  - `Swap ← FALSE`\n" +
        "  - `FOR Index ← 1 TO Last`\n" +
        "    - `IF Arr[Index] > Arr[Index + 1] THEN`\n" +
        "      - `Temp ← Arr[Index]`\n" +
        "      - `Arr[Index] ← Arr[Index + 1]`\n" +
        "      - `Arr[Index + 1] ← Temp`\n" +
        "      - `Swap ← TRUE`\n" +
        "    - `ENDIF`\n" +
        "  - `NEXT Index`\n" +
        "  - `Last ← Last - 1`\n" +
        "- `UNTIL Swap = FALSE OR Last = 0`\n\n" +
        "**Why the two Bubble Sort optimisations matter**:\n" +
        "1. **`Swap` flag**: if an entire pass finishes with `Swap = FALSE` (zero swaps), the array is already sorted and the outer `REPEAT..UNTIL` stops early!\n" +
        "2. **`Last ← Last - 1`**: Pass 1 guarantees the largest item has bubbled to `Arr[N]`, Pass 2 locks `Arr[N - 1]`, and so on — shrinking `Last` avoids pointless comparisons against already-sorted tail items.",
      diagram: SVG_BUBBLE_SORT,
      diagramCaption:
        "Pass 1 of Bubble Sort on [42, 17, 35, 9]: 42 compares against each neighbour and bubbles all the way to the last slot in 3 comparisons and 3 swaps.",
      workedExamples: [
        {
          title: "Counting Comparisons and Swaps in Optimised Bubble Sort",
          problem:
            "An array holds `[15, 8, 22, 30]` (4 elements). Trace an ascending Bubble Sort that uses both `Swap` flag and shrinking `Last` (`Last` starts at `3`). How many passes, total comparisons, and total swaps occur before termination?",
          steps: [
            "**Pass 1** (`Last = 3`, `Swap ← FALSE`): compare `(15, 8)` → swap to `[8, 15, 22, 30]`, `Swap ← TRUE`; compare `(15, 22)` → no swap; compare `(22, 30)` → no swap. End of Pass 1: **3 comparisons, 1 swap**. `Last` becomes `2`. Since `Swap = TRUE`, continue.",
            "**Pass 2** (`Last = 2`, `Swap ← FALSE`): compare `(8, 15)` → no swap; compare `(15, 22)` → no swap. End of Pass 2: **2 comparisons, 0 swaps**. `Last` becomes `1`.",
            "Now `UNTIL Swap = FALSE` evaluates to **TRUE** because zero swaps occurred in Pass 2! The loop terminates.",
            "Totals: **2 passes** (`Pass 2` is the verification pass with 0 swaps), `3 + 2 = 5` comparisons, and **1 swap**.",
          ],
          answer: "2 passes, 5 comparisons, and 1 swap.",
          yourTurn: {
            question:
              "During Pass 1 of an ascending Bubble Sort on the 4-element array `[30, 10, 25, 5]`, how many swaps take place in Pass 1 alone?",
            answer: { type: "number", value: 3 },
            solution:
              "30 > 10 (swap 1 → `[10, 30, 25, 5]`), 30 > 25 (swap 2 → `[10, 25, 30, 5]`), 30 > 5 (swap 3 → `[10, 25, 5, 30]`). Pass 1 performs **3** swaps.",
          },
        },
      ],
      keyPoints: [
        "Initialise `Total ← 0` and `Count ← 0` **outside/before** the loop — never inside!",
        "Initialise `Max` and `Min` to the **first item** (`Arr[1]`), or `Min ← 999999` and `Max ← −999999` (never `Min ← 0` on positive numbers!).",
        "**Linear Search** checks each item in turn and works on **unsorted** arrays; use a `Found` flag in a `WHILE`/`REPEAT` loop to stop as soon as the target is found.",
        "**Bubble Sort** needs a `Temp` variable for the 3-line swap (`Temp ← A`, `A ← B`, `B ← Temp`), a `Swap` boolean flag for early exit, and `Last ← Last − 1` to skip the sorted tail.",
      ],
      whyItWorks:
        "Writing `A ← B` then `B ← A` overwrites `A`'s original value, leaving both slots holding `B`! Storing `Temp ← A` preserves the first value while `B` moves into `A`.",
      strategies: [
        "Remember the 3-cup swap triangle: `Temp ← Arr[i]`, `Arr[i] ← Arr[i+1]`, `Arr[i+1] ← Temp` (each variable appears diagonally!).",
        "Don't forget the final 'clean check pass' in `Swap`-flag Bubble Sort: the algorithm only *knows* the array is sorted after running one pass with `0` swaps!",
      ],
      thinkDeeper:
        "For an array of `n` elements that is initially in completely *reverse* order, how many swaps will Bubble Sort perform in total? (Hint: count `{{(n-1) + (n-2) + ... + 1}}`!)",
    },
    {
      id: "validation-verification-testing",
      heading: "Validation vs Verification & Test Data Types",
      discovery: {
        problem:
          "A nurse types a patient's age into a hospital form. The patient's paper chart says `28`, but the nurse's finger slips and she types `82`. A range check (`0` to `120`) accepts `82` without complaint! Why did validation fail to catch the mistake — and what check *would* catch it?",
        idea:
          "**Validation** only checks whether data is **reasonable/sensible** (`82` is a perfectly sensible human age!). It **cannot** check whether the data is accurate/truthful. Catching a copying slip requires **verification** — such as a **visual check** against the paper chart or **double entry**.",
      },
      body:
        "CIE 0478 examiners test the exact distinction between **validation** and **verification** almost every series:\n\n" +
        "**1. Validation (Reasonableness — Automated by Computer)**\n" +
        "**Validation** is an automated check performed by software to ensure entered data is **reasonable / sensible** and obeys defined rules before acceptance. *(Never write that validation checks if data is 'correct' or 'accurate'!)*\n\n" +
        "| Validation Check | What It Tests | Classic CIE Example |\n" +
        "|---|---|---|\n" +
        "| **Range check** | Value lies between a minimum and maximum limit (`Min <= X AND X <= Max`). | Exam percentage mark between `0` and `100`; month `1` to `12`. |\n" +
        "| **Length check** | Input contains an exact number of characters, or within min/max characters. | Password at least `8` characters; student ID has `6` characters. |\n" +
        "| **Type check** | Data matches the required data type (e.g. whole number, not letters). | Quantity ordered must be an `INTEGER` (rejects `\"three\"` or `2.5`). |\n" +
        "| **Presence check** | Mandatory field has not been left blank/empty (`Input <> \"\"`). | Email address or surname field cannot be empty on a sign-up form. |\n" +
        "| **Format check** | Characters conform to a specific template/pattern of letters & digits. | Date `DD/MM/YYYY` or ID code `AB1234` (2 letters followed by 4 digits). |\n" +
        "| **Check digit** | Final digit calculated mathematically from earlier digits (e.g. ISBN-13 / Modulo-11). | Barcode or ISBN number catching mistyped or transposed digits. |\n\n" +
        "**2. Verification (Accurate Copying — Human / Dual-Input)**\n" +
        "**Verification** checks that data has been **accurately copied** from one source to another without human transcription errors (it does **not** test if the source data itself was sensible!):\n" +
        "- **Double entry**: data is entered **twice** independently (e.g. typing a new password or email address twice) and the computer compares the two versions, alerting the user if they do not match.\n" +
        "- **Visual check (Screen check)**: the user manually reads the data displayed on the screen and compares it against the original paper source document before clicking confirm.\n\n" +
        "**3. The Four CIE Test Data Types** *(illustrated for valid integer marks `1` to `100` inclusive)*\n" +
        "- **Normal data**: typical, sensible valid data well inside the acceptable range → **Accepted** (e.g. `45`, `73`).\n" +
        "- **Abnormal (Erroneous) data**: invalid data outside the limits or of the wrong data type → **Rejected** (e.g. `−12`, `250`, `\"Pass\"`).\n" +
        "- **Extreme data**: the largest and smallest **accepted** values right ON the edges of the valid range → **Accepted** (e.g. **`1`** and **`100`** ONLY — `0` and `101` are **NOT** extreme data!).\n" +
        "- **Boundary data**: a **pair** of values at each limit — the largest/smallest **accepted** extreme value AND the immediately adjacent **rejected** value just outside the limit (e.g. lower boundary pair **`0` (rejected) and `1` (accepted)**; upper boundary pair **`100` (accepted) and `101` (rejected)**).",
      diagram: SVG_TEST_DATA,
      diagramCaption:
        "Extreme vs Boundary test data for 1..100 inclusive: Extreme values (1 and 100) are BOTH accepted, whereas Boundary data tests an accepted/rejected pair across the edge (0 & 1, or 100 & 101).",
      workedExamples: [
        {
          title: "Choosing Extreme vs Boundary Test Data",
          problem:
            "An online ticket system accepts group sizes of whole numbers from `2` to `20` inclusive. State: (a) one item of normal data, (b) one item of abnormal data, (c) both items of extreme data, and (d) the boundary test data pair at the upper limit, stating whether each value is accepted or rejected.",
          steps: [
            "(a) **Normal**: pick any integer comfortably inside `2..20`, e.g. `10` (accepted).",
            "(b) **Abnormal**: pick an out-of-range value or wrong type, e.g. `55` or `\"ten\"` (rejected).",
            "(c) **Extreme**: must be the smallest and largest **accepted** values on the limits → **`2`** (accepted) and **`20`** (accepted).",
            "(d) **Upper boundary pair**: the largest accepted value (`20`) AND the smallest adjacent rejected integer just above it (`21`) → **`20` (accepted) and `21` (rejected)**.",
          ],
          answer:
            "(a) 10 (accepted); (b) 55 (rejected); (c) 2 and 20 (both accepted); (d) 20 (accepted) and 21 (rejected).",
          yourTurn: {
            question:
              "A validation rule accepts integer percentages from `0` to `100` inclusive. What is the **largest** item of **extreme** test data?",
            answer: { type: "number", value: 100 },
            solution:
              "Extreme data consists of the largest and smallest **accepted** values (`0` and `100`). The largest extreme value is **100** (`101` is rejected boundary/abnormal data, NOT extreme!).",
          },
        },
      ],
      keyPoints: [
        "**Validation** checks that data is **reasonable/sensible** (Range, Length, Type, Presence, Format, Check Digit) — it **never** proves accuracy.",
        "**Verification** checks that data is **copied accurately** without transcription error (**Double entry** and **Visual/Screen check**).",
        "**Extreme** data = largest & smallest **accepted** values on the limits (e.g. `1` and `100` for `1..100`).",
        "**Boundary** data = a **pair** straddling the limit: one **accepted** extreme value + one adjacent **rejected** value (e.g. `0, 1` or `100, 101`).",
      ],
      whyItWorks:
        "Suppose a programmer accidentally writes `IF Mark > 1 AND Mark < 100` instead of `>= 1 AND <= 100`. Normal data (`50`) and abnormal data (`200`) both behave as expected! Only **extreme / boundary** data (`0, 1` and `100, 101`) exposes the off-by-one `<` vs `<=` bug.",
      strategies: [
        "When a CIE question asks for **boundary** test data, ALWAYS give the two-number pair (e.g. `100 and 101`) and explain which is accepted and which is rejected.",
        "Ask yourself: 'Is there a pattern of letters AND digits?' → **Format check**. 'Just counting how many characters?' → **Length check**.",
      ],
      thinkDeeper:
        "Can a single input field use *multiple* validation checks AND verification at the same time? Consider creating a new account password (`Presence` + `Length >= 8` + `Double entry`).",
    },
    {
      id: "trace-tables-errors",
      heading: "Trace Tables & Finding/Fixing Algorithm Errors",
      discovery: {
        problem:
          "A student writes `IF Mark < 0 AND Mark > 100 THEN OUTPUT \"Invalid\"` to reject invalid exam marks. They test `-5` and `120`, and neither prints `\"Invalid\"`! Why can `Mark < 0 AND Mark > 100` **never** be `TRUE` for any number in the universe?",
        idea:
          "No single number can simultaneously be less than `0` **AND** greater than `100`! To catch values outside either end of a range, you must use **`OR`** (`Mark < 0 OR Mark > 100`), whereas testing *inside* a range uses **`AND`** (`Mark >= 0 AND Mark <= 100`).",
      },
      body:
        "A **trace table** records the dry-run of an algorithm step by step, showing how every variable and `OUTPUT` changes for a given set of test inputs.\n\n" +
        "**Golden Rules for CIE 0478 Trace Tables**\n" +
        "1. **Initialisation first**: write the starting values assigned before the loop in the top row(s).\n" +
        "2. **Only write changes**: fill a variable's cell when an assignment (`←`) or `INPUT` updates it; leave unchanged columns blank on that row so the sequence of updates stays crystal clear.\n" +
        "3. **Start a new row** when a loop repeats (`Count` increments or a new `INPUT` is read) so you never overwrite an earlier value in the same row unless needed cleanly.\n" +
        "4. **Exact `OUTPUT` column**: write **only** what is printed by `OUTPUT` statements (without surrounding quotes unless part of the output, matching spacing/punctuation carefully).\n" +
        "5. **Watch loop termination**: in `WHILE` or `REPEAT..UNTIL` with a manual counter (`Count ← Count + 1`), record the final increment that makes the loop stop (e.g. when `Count` reaches `5` to trigger `UNTIL Count = 5`)!\n\n" +
        "**Classic CIE Paper 2 Algorithm Bugs & How to Fix Them**\n\n" +
        "| Bug Pattern in Question | Why It Fails | Exact Fix |\n" +
        "|---|---|---|\n" +
        "| `Total ← 0` placed **inside** the loop | Resets `Total` to `0` on every iteration, keeping only the last input! | Move `Total ← 0` **above/before** the loop. |\n" +
        "| `Total ← Num` instead of `Total + Num` | Overwrites `Total` instead of accumulating a running sum. | Change to `Total ← Total + Num`. |\n" +
        "| `Min ← 0` for positive-only data | Output stays `0` because no positive input is `< 0`. | Initialise `Min ← 99999` (or first input). |\n" +
        "| `IF Num < Max` when finding Maximum | Compares the wrong way round — finds Minimum instead! | Change `<` to `>` (`IF Num > Max`). |\n" +
        "| `IF X < 1 AND X > 100` to reject invalid | Impossible condition — always evaluates to `FALSE`! | Change `AND` to **`OR`** (`IF X < 1 OR X > 100`). |\n" +
        "| `FOR i ← 1 TO 9` (or `UNTIL Count = 10` incrementing before input) | **Off-by-one** error: processes 9 items instead of 10 (or 11 instead of 10). | Dry-run with a tiny limit (e.g. `2` items) to verify exact count! |",
      diagram: SVG_TRACE_TABLE,
      diagramCaption:
        "Dry-running a 3-iteration maximum-finding loop on inputs 14, 29, 18. On Count = 3, 18 > 29 is FALSE so Best is not reassigned, and OUTPUT prints 29 after the loop.",
      workedExamples: [
        {
          title: "Spotting and Fixing Three Bugs in an Algorithm",
          problem:
            "The algorithm below is meant to input 50 positive weights and output the lightest weight, but it contains **three logic errors**. Identify and correct each error:\n`1  Min ← 0`\n`2  Count ← 1`\n`3  REPEAT`\n`4    INPUT Weight`\n`5    IF Weight > Min THEN Min ← Weight ENDIF`\n`6    Count ← Count + 1`\n`7  UNTIL Count = 50`\n`8  OUTPUT Min`",
          steps: [
            "**Error 1 (Line 1)**: `Min ← 0` is smaller than every positive weight. Fix: `Min ← 999999` (or input the first weight before the loop).",
            "**Error 2 (Line 5)**: `Weight > Min` finds the *heaviest* weight instead of the lightest! Fix: `IF Weight < Min THEN Min ← Weight ENDIF`.",
            "**Error 3 (Line 7 / Line 2)**: `Count` starts at `1`, increments once per input, and stops `UNTIL Count = 50` — that only loops **49 times** (`Count = 1→2` on item 1 ... `49→50` on item 49)! Fix: change Line 2 to `Count ← 0` **or** change Line 7 to `UNTIL Count > 50` (or `UNTIL Count = 51`).",
          ],
          answer:
            "1) Line 1: Min ← 999999; 2) Line 5: IF Weight < Min; 3) Line 2: Count ← 0 (or Line 7: UNTIL Count > 50).",
          yourTurn: {
            question:
              "Trace this snippet with input `X = 13`:\n`Count ← 0`\n`WHILE X >= 4 DO`\n`  X ← X - 4`\n`  Count ← Count + 1`\n`ENDWHILE`\n`OUTPUT Count`\nWhat single number is output?",
            answer: { type: "number", value: 3 },
            solution:
              "Start: `X = 13, Count = 0`. Iter 1: `X = 9, Count = 1`. Iter 2: `X = 5, Count = 2`. Iter 3: `X = 1, Count = 3`. Now `1 >= 4` is FALSE, so loop ends and `OUTPUT Count` prints **3**.",
          },
        },
      ],
      keyPoints: [
        "Dry-run **every** line literally — trace what the code *actually* says, never what you *wish* it did!",
        "Record variable updates in sequence and keep `OUTPUT` strictly to values printed by `OUTPUT` statements.",
        "Test loop counts with a mini 2-iteration mental check (`Count` from `0` vs `1`, `<` vs `<=`, `WHILE` vs `REPEAT..UNTIL`).",
        "Remember De Morgan's trap: valid inside `[A, B]` uses `X >= A AND X <= B`; invalid outside `[A, B]` uses `X < A OR X > B`!",
      ],
      whyItWorks:
        "Computers have zero common sense: they execute syntax mechanically. A trace table forces your brain to act as the CPU's registers (one column per variable) so hidden off-by-one and initialisation bugs become impossible to miss.",
      strategies: [
        "Cross off each test input from the question paper's input list the moment you consume an `INPUT` instruction so you never lose your place!",
        "When hunting 3–4 errors in CIE Paper 2, check these four suspects in order: **1) Initialisations**, **2) Loop start/end count**, **3) `<` vs `>` / `AND` vs `OR`**, **4) Inside vs Outside the loop**.",
      ],
      thinkDeeper:
        "Look closely at the worked example trace: `X` started at `13`, subtracted `4` repeatedly until `X < 4`, leaving `Count = 3` and `X = 1`. Which two arithmetic operators from programming did that `WHILE` loop just compute?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Define **abstraction** in computational thinking.",
        back: "Keeping the essential details needed to solve a problem while filtering out/removing unnecessary details (e.g. a metro map omitting street curves).",
      },
      {
        front: "Define **decomposition** in computational thinking.",
        back: "Breaking a complex problem or system down into smaller, more manageable sub-systems/modules that can be designed, coded, and tested separately.",
      },
      {
        front: "List the 4 stages of the **Program Development Life Cycle (PDLC)** in order.",
        back: "**1. Analysis** → **2. Design** → **3. Coding** → **4. Testing** (performed iteratively).",
      },
      {
        front: "What is a **structure diagram**?",
        back: "A top-down hierarchical tree diagram created in the **Design** stage showing how a system is decomposed into sub-systems and sub-sub-systems.",
      },
      {
        front: "Name the 5 standard CIE 0478 flowchart shapes and their roles.",
        back: "**Rounded Terminator** (Start/Stop), **Parallelogram** (Input/Output), **Rectangle** (Process), **Diamond** (Decision with Yes/No labels), **Double-barred Rectangle** (Subroutine).",
      },
      {
        front: "How should `Max` and `Min` variables be initialised before a loop?",
        back: "Initialise both to the **first item** (`Arr[1]`), OR set `Max` to a very small value (`−999999`) and `Min` to a very large value (`999999`) — **never** `Min ← 0` for positive data!",
      },
      {
        front: "How does a **Linear Search** work, and does the list need to be sorted?",
        back: "Checks each element sequentially from index 1 until the target is found (`Found ← TRUE`) or the end of the array is reached. Works on **unsorted** or sorted lists.",
      },
      {
        front: "State the two standard optimisations in a CIE **Bubble Sort**.",
        back: "1) A Boolean **`Swap` flag** (`Swap ← FALSE` each pass) to stop early when a pass makes 0 swaps.\n2) Decreasing the inner loop limit (`Last ← Last − 1`) each pass since the tail elements are already sorted.",
      },
      {
        front: "Contrast **Validation** vs **Verification**.",
        back: "**Validation**: automated software check that data is **reasonable/sensible** (cannot prove accuracy).\n**Verification**: checks data was **copied accurately** from source without transcription error (Double entry, Visual check).",
      },
      {
        front: "List all **6 CIE validation checks**.",
        back: "**Range check**, **Length check**, **Type check**, **Presence check**, **Format check**, and **Check digit**.",
      },
      {
        front: "Name the **2 CIE verification methods**.",
        back: "**Double entry** (typing data twice and computer compares) and **Visual check / Screen check** (human compares screen against source document).",
      },
      {
        front: "For valid integer range `1..100` inclusive, contrast **Extreme** vs **Boundary** test data.",
        back: "**Extreme**: `1` and `100` ONLY (largest & smallest **accepted** values).\n**Boundary**: pairs right across each limit — `0` (rejected) & `1` (accepted), and `100` (accepted) & `101` (rejected).",
      },
      {
        front: "Why is `IF Mark < 0 AND Mark > 100` a fatal validation bug?",
        back: "No number can be `< 0` AND `> 100` at the same time (always `FALSE`)! Out-of-range rejection requires **`OR`**: `IF Mark < 0 OR Mark > 100`.",
      },
      {
        front: "Write the 3 pseudocode lines to swap `Arr[i]` and `Arr[i + 1]`.",
        back: "`Temp ← Arr[i]`\n`Arr[i] ← Arr[i + 1]`\n`Arr[i + 1] ← Temp`",
      },
    ],
    mustKnow: [
      "Define **abstraction** and **decomposition** and identify examples of both in unfamiliar problem scenarios.",
      "Describe the purpose and deliverables of **Analysis, Design, Coding, and Testing** in the iterative PDLC, and draw/complete hierarchical **structure diagrams**.",
      "Draw and interpret flowcharts using exact CIE shapes (Terminator, Parallelogram, Rectangle, Decision diamond with Yes/No labels, Subroutine box).",
      "Write and trace **totalling**, **counting**, **maximum/minimum/average**, **Linear Search**, and optimised **Bubble Sort** algorithms in CIE pseudocode.",
      "Explain why **validation** checks reasonableness (not accuracy!) and select the right check from **Range, Length, Type, Presence, Format, Check Digit**.",
      "Explain why **verification** checks accurate copying and describe **Double Entry** and **Visual Check**.",
      "Select and justify **Normal, Abnormal, Extreme, and Boundary** test data — keeping Extreme (accepted edge values) strictly distinct from Boundary (accepted + rejected edge pair).",
      "Complete full **CIE trace tables** accurately and spot/fix 3–4 logic errors in buggy flowcharts or pseudocode.",
    ],
    misconceptions: [
      {
        wrong: "Never Write ❌: 'Validation checks that the data entered is correct / accurate.'",
        right: "Write Instead ✅: 'Validation is an automated check that data is **reasonable / sensible** and follows set rules (it cannot check accuracy).'",
      },
      {
        wrong: "Never Write ❌: 'Extreme data for 1 to 100 is 0 and 101 (just outside the range).'",
        right: "Write Instead ✅: '**Extreme** data is `1` and `100` — the smallest and largest **accepted** values ON the limits. (`0, 1` and `100, 101` are **boundary** pairs!)'",
      },
      {
        wrong: "Never Write ❌: Giving a single number like `100` when asked for a set of **boundary** test data.",
        right: "Write Instead ✅: Give the **pair** on either side of the boundary — e.g. **`100` (accepted) and `101` (rejected)**, or **`0` (rejected) and `1` (accepted)**.",
      },
      {
        wrong: "Never Write ❌: 'Double entry is a validation check used for passwords.'",
        right: "Write Instead ✅: 'Double entry is a **verification** method checking that both typed copies match accurately; Length/Format checks are validation.'",
      },
      {
        wrong: "Never Write ❌: Initialising `Min ← 0` before finding the minimum of positive exam scores or prices.",
        right: "Write Instead ✅: Initialise `Min ← Scores[1]` (the first item) or a very high value such as `Min ← 999999` so real inputs are smaller than `Min`.",
      },
      {
        wrong: "Never Write ❌: Swapping two variables with `Arr[i] ← Arr[i+1]` followed by `Arr[i+1] ← Arr[i]`.",
        right: "Write Instead ✅: Use a third variable `Temp`: `Temp ← Arr[i]`, `Arr[i] ← Arr[i+1]`, `Arr[i+1] ← Temp` so the first value is not overwritten.",
      },
      {
        wrong: "Never Write ❌: Leaving Decision diamond exit arrows unlabelled or putting `INPUT X` inside a rectangle.",
        right: "Write Instead ✅: Always label Decision exits `Yes` / `No` (or `True` / `False`) and put `INPUT` / `OUTPUT` inside a slanted **Parallelogram**.",
      },
    ],
    examMistakes: [
      "Writing 'checks data is valid' when defining validation — CIE mark schemes reject circular definitions using the word 'valid'! Write **'reasonable / sensible'**.",
      "Confusing **Length check** (counts characters, e.g. exactly 7 characters) with **Format check** (checks character pattern, e.g. 2 letters followed by 5 digits).",
      "Forgetting the final zero-swap verification pass when counting Bubble Sort passes (`Swap = FALSE` only triggers *after* a full pass makes 0 swaps).",
      "Writing quotes, extra words, or intermediate calculations in the `OUTPUT` column of a trace table when only the bare value of `Total` is output.",
      "Placing `Total ← 0` or `OUTPUT Average` *inside* the `FOR` loop instead of before/after it when writing or fixing algorithms.",
      "Using `AND` instead of `OR` when rejecting out-of-range inputs (`IF Age < 11 OR Age > 18 THEN OUTPUT \"Error\"`).",
    ],
    mnemonics: [
      {
        topic: "6 CIE Validation Checks",
        device: "R-L-T-P-F-C → \"Real Lions Take Pride Finding Cheetahs\"",
        explanation:
          "**R**ange, **L**ength, **T**ype, **P**resence, **F**ormat, **C**heck digit — check off all six whenever choosing distinct validation rules for a Paper 2 table!",
      },
      {
        topic: "Extreme vs Boundary Test Data",
        device: "Extreme = Edge ACCEPTED · Boundary = BOTH sides of the Border",
        explanation:
          "**E**xtreme stays **inside** on the exact edge (`1` and `100`, both accepted). **B**oundary brings **both** neighbours across the border (`0 & 1`, or `100 & 101`: one accepted + one rejected).",
      },
      {
        topic: "PDLC Stages in Order",
        device: "A-D-C-T → \"Architects Design Before Carpenters Test\"",
        explanation:
          "**A**nalysis (abstraction/decomposition) → **D**esign (structure diagrams/flowcharts/pseudocode) → **C**oding (write & module-test) → **T**esting (trace tables & test data).",
      },
    ],
    realWorld: [
      {
        emoji: "🚇",
        title: "Singapore MRT & London Tube Maps (Abstraction)",
        detail:
          "Harry Beck's famous transit map design strips away real-world street geography, river bends, and scale distances, keeping only station order and line interchanges so riders plan routes in seconds.",
      },
      {
        emoji: "📚",
        title: "ISBN-13 Book Barcodes (Check Digit Validation)",
        detail:
          "Every book's 13th ISBN digit is computed from the first 12 digits using alternating weights of 1 and 3 modulo 10. If a cashier mistypes a digit or swaps two adjacent digits, the check digit fails immediately.",
      },
      {
        emoji: "🔐",
        title: "Account Sign-Up Forms (Validation + Verification Together)",
        detail:
          "Creating a banking password uses a **Presence check** (not blank), **Length check** (>= 12 chars), **Format check** (mix of upper/lower/digits), AND **Double Entry verification** ('Confirm password') so a typo doesn't lock you out!",
      },
      {
        emoji: "🛫",
        title: "Avionics Boundary Testing",
        detail:
          "Flight-control software tests exact boundary pairs around stall-speed and altitude limits (e.g. 9999 ft vs 10000 ft) because a single `<` vs `<=` off-by-one bug at a boundary can trigger or suppress an autopilot Mode switch.",
      },
    ],
    videos: [
      {
        title: "CIE IGCSE CS 0478 Unit 7: Algorithm Design, PDLC, Decomposition & Abstraction",
        channel: "Craig'n'Dave / IGCSE CS",
        url: "https://www.youtube.com/results?search_query=CIE+IGCSE+Computer+Science+0478+algorithm+design+PDLC+abstraction+decomposition",
      },
      {
        title: "CIE 0478 Standard Algorithms: Linear Search & Bubble Sort in Pseudocode",
        channel: "Cambridge IGCSE CS Revision",
        url: "https://www.youtube.com/results?search_query=CIE+0478+IGCSE+linear+search+bubble+sort+pseudocode",
      },
      {
        title: "Validation vs Verification, Extreme vs Boundary Test Data & Trace Tables (0478)",
        channel: "IGCSE Computer Science Paper 2",
        url: "https://www.youtube.com/results?search_query=CIE+0478+validation+verification+extreme+boundary+test+data+trace+tables",
      },
    ],
    formulas: [
      {
        name: "Validation vs Verification (CIE Mark-Scheme Wording)",
        formula: "Validation = reasonable/sensible (automated) · Verification = copied accurately (Double entry / Visual check)",
        note: "NEVER write that validation checks if data is 'correct', 'valid', or 'accurate'!",
      },
      {
        name: "Extreme vs Boundary Test Data (for 1..100 inclusive)",
        formula: "Extreme: 1, 100 (both accepted) · Boundary pairs: (0, 1) and (100, 101) (1 accepted + 1 rejected)",
        note: "Normal = 45 (accepted); Abnormal/Erroneous = -5 or 'abc' (rejected).",
      },
      {
        name: "3-Line Element Swap Pattern",
        formula: "Temp ← Arr[i]  ;  Arr[i] ← Arr[i + 1]  ;  Arr[i + 1] ← Temp",
        note: "Essential inside Bubble Sort whenever Arr[i] > Arr[i + 1] (ascending).",
      },
      {
        name: "Bubble Sort Comparisons (Unoptimised vs Shrinking Bound)",
        formula: "Pass 1 = {{n - 1}} comparisons · Shrinking bound max total = {{n(n - 1)/2}}",
        note: "With Swap boolean flag, stops right after the first pass that makes 0 swaps.",
      },
      {
        name: "Totalling & Counting Loop Skeleton",
        formula: "Total ← 0 (before loop)  ;  Total ← Total + Item (inside) · Count ← Count + 1",
        note: "Average ← Total / Count is computed AFTER the loop finishes.",
      },
      {
        name: "Safe Max & Min Initialisation",
        formula: "Max ← Arr[1], Min ← Arr[1]   (or Max ← −999999, Min ← 999999)",
        note: "Initialising Min ← 0 fails whenever all inputs are positive!",
      },
      {
        name: "In-Range vs Out-of-Range Boolean Logic",
        formula: "Accept valid: X >= Min AND X <= Max · Reject invalid: X < Min OR X > Max",
        note: "Never write X < Min AND X > Max — it is always FALSE!",
      },
      {
        name: "CIE Flowchart Symbol Mapping",
        formula: "Oval = Start/Stop · Parallelogram = INPUT/OUTPUT · Rectangle = Process · Diamond = Decision (Yes/No) · Double-bar = Subroutine",
        note: "Always draw arrowheads on flowlines and label BOTH exits from every Diamond.",
      },
      {
        name: "Linear Search Termination Condition",
        formula: "REPEAT ... UNTIL Found = TRUE OR Index > UpperBound",
        note: "Works on unsorted 1D arrays; checks elements sequentially from the start.",
      },
    ],
  },
};
