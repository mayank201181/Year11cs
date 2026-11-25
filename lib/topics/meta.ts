// ---------------------------------------------------------------------------
// Topic registry: order, strand, icon and the fixed guide-section outline.
// Section ids here are the contract shared by guide authors (who must use
// them) and question / drill authors (whose guideRef must point at them).
// Pure data — safe to import from Node scripts.
//
// Source: Cambridge IGCSE Computer Science (0478 / 0984) & Tanglin Trust School
// Year 10–11 IGCSE Computer Science teaching units.
// ---------------------------------------------------------------------------
import type { Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  /** What this section must teach. */
  covers: string;
  /** Further A-Level CS look-ahead. */
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  /** Which IGCSE year normally teaches this topic (Year 10 vs Year 11). */
  courseYear: 10 | 11;
  /** Teaching order used when ?year=10 is active (1..N). */
  courseOrder: number;
  /** Which CIE 0478 syllabus & Tanglin CS unit this topic covers. */
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = [
  "Paper 1: Computer Systems",
  "Paper 2: Algorithms, Programming & Logic",
];

export const TOPIC_META: TopicMeta[] = [
  // ===================== PAPER 1: COMPUTER SYSTEMS =======================
  {
    id: "number-systems",
    title: "Number Systems & Two's Complement",
    strand: "Paper 1: Computer Systems",
    icon: "🔢",
    courseYear: 10,
    courseOrder: 1,
    curriculum: "CIE 0478 1.1 — Denary, Unsigned Binary, Hexadecimal, Binary Addition/Overflow, Logical Shifts & 8-bit Two's Complement",
    sections: [
      {
        id: "denary-binary-hex",
        heading: "Denary, Unsigned Binary & Hexadecimal",
        covers: "Why computers use binary (transistor switches ON=1, OFF=0); place values for base-10, base-2 (up to 16-bit) and base-16 (0–9, A–F); nibble shortcut between binary and hex; uses of hexadecimal (HTML colour codes, MAC addresses, error codes, IPv6, memory dumps).",
      },
      {
        id: "binary-addition-overflow",
        heading: "Binary Addition & Overflow Errors",
        covers: "Adding two positive 8-bit binary integers column by column (0+0, 1+0, 1+1=10₂, 1+1+1=11₂); carry bits; concept of overflow when the result exceeds the maximum value a register can hold (>255 in 8 bits, producing a 9th bit).",
      },
      {
        id: "logical-shifts",
        heading: "Logical Binary Shifts",
        covers: "Logical left shift (multiplying unsigned binary by 2ⁿ, padding right with 0s) and logical right shift (dividing by 2ⁿ, padding left with 0s); loss of most-significant 1-bits causing overflow or least-significant 1-bits causing truncation/loss of precision.",
      },
      {
        id: "twos-complement",
        heading: "8-Bit Two's Complement Signed Integers",
        covers: "Representing positive and negative integers in 8-bit Two's Complement: MSB place value is −128, range −128 to +127; converting negative denary to Two's Complement (invert bits + add 1, or keep bits up to rightmost 1 and flip left) and back.",
      },
    ],
  },
  {
    id: "data-media-compression",
    title: "Text, Sound, Images & Compression",
    strand: "Paper 1: Computer Systems",
    icon: "🎨",
    courseYear: 10,
    courseOrder: 2,
    curriculum: "CIE 0478 1.2 & 1.3 — ASCII vs Unicode, Sound Sampling, Bitmap Images, IEC Storage Units (1024) & Lossless (RLE) vs Lossy Compression",
    sections: [
      {
        id: "text-ascii-unicode",
        heading: "Text Representation: ASCII & Unicode",
        covers: "Character sets mapping characters to binary codes; 7-bit standard ASCII (128 chars) & 8-bit Extended ASCII (256 chars) vs Unicode (16-bit/32-bit, up to ~4 billion codes supporting world languages and emojis, at the cost of more storage per character).",
      },
      {
        id: "sound-representation",
        heading: "Sound Sampling, Rate & Resolution",
        covers: "Analogue sound wave sampled at regular intervals by an ADC; sample rate (samples per second in Hz) and sample resolution / bit depth (bits per sample); trade-off between audio accuracy/dynamic range and file size (rate × resolution × seconds × channels).",
      },
      {
        id: "bitmap-images",
        heading: "Bitmap Images, Resolution & Colour Depth",
        covers: "Pixels arranged in a grid; image resolution (width × height in pixels) and colour depth (bits per pixel, 2ⁿ colours); effect on sharpness vs pixelation and file size (width × height × colour depth in bits).",
      },
      {
        id: "iec-storage-units",
        heading: "IEC Data Storage Units & File-Size Maths",
        covers: "Bit, nibble (4 bits), byte (8 bits), KiB, MiB, GiB, TiB, PiB, EiB using powers of 1024 (2¹⁰) — CIE 0478 exam rule: ALWAYS divide/multiply by 1024 for KiB/MiB/GiB (never 1000 unless SI kB/MB is explicitly asked); converting bits → bytes (÷8) → KiB (÷1024) → MiB (÷1024).",
      },
      {
        id: "lossless-lossy-compression",
        heading: "Lossless (RLE) vs Lossy Compression",
        covers: "Why compress (faster transmission, less bandwidth, smaller storage); Lossless compression (exact original reconstructed; Run-Length Encoding RLE on repeated text/pixels & dictionary coding; mandatory for code, spreadsheets, text) vs Lossy compression (permanently removes perceptually redundant data, e.g. MP3, AAC, JPEG, MP4; much smaller files).",
      },
    ],
  },
  {
    id: "data-transmission",
    title: "Data Transmission & Error Detection",
    strand: "Paper 1: Computer Systems",
    icon: "📡",
    courseYear: 10,
    courseOrder: 3,
    curriculum: "CIE 0478 2.1 & 2.2 — Packets & Packet Switching, Serial/Parallel, Simplex/Half/Full-Duplex, USB, Parity, Checksums, Echo Checks, Check Digits & ARQ",
    sections: [
      {
        id: "packets-packet-switching",
        heading: "Data Packets & Packet Switching",
        covers: "Packet structure: Header (sender IP, destination IP, packet number, total packets), Payload (actual data ~64 KiB), Trailer (end-of-packet marker + cyclic redundancy / error check); Packet switching via routers choosing optimal hops independently, out-of-order arrival and reassembly.",
      },
      {
        id: "transmission-methods",
        heading: "Serial vs Parallel & Simplex, Half-Duplex, Full-Duplex",
        covers: "Direction: Simplex (one-way only), Half-Duplex (both ways, not simultaneously), Full-Duplex (both ways simultaneously); Wire count: Serial (1 bit at a time down a single wire/channel — reliable over long distances, no skew) vs Parallel (multiple bits simultaneously across several wires — faster over very short distances like internal CPU buses, suffers data skew/crosstalk over distance).",
      },
      {
        id: "usb-interface",
        heading: "Universal Serial Bus (USB)",
        covers: "USB as an asynchronous serial data transmission standard; 4-wire shielded cable (power, earth, D+, D−) / USB-C; automatic plug-and-play device detection via voltage change and driver loading; pros (industry standard, supplies power, multiple speeds, backward compatible, fits one way) and cons (cable length ~5 m limit).",
      },
      {
        id: "parity-checksum-echo",
        heading: "Parity Bits, Parity Blocks, Checksums & Echo Checks",
        covers: "Why errors occur (electromagnetic interference, crosstalk, packet switching loss); Even vs Odd Parity bits (and why 2-bit / even-count flips go undetected); Parity Blocks / Parity Bytes pinpointing the exact corrupted row & column bit; Checksums calculated on blocks of data; Echo Checks returning data to sender.",
      },
      {
        id: "check-digits-arq",
        heading: "Check Digits & Automatic Repeat Query (ARQ)",
        covers: "Check digits (ISBN-13, Modulo-11) calculated from digits to catch human data-entry errors (incorrect digit, transposition of adjacent digits, omitted/extra digits); ARQ error control using positive/negative acknowledgements and timeouts until packet arrives error-free or retry limit is reached.",
      },
    ],
  },
  {
    id: "hardware-architecture",
    title: "CPU Architecture, Hardware & Storage",
    strand: "Paper 1: Computer Systems",
    icon: "🖥️",
    courseYear: 10,
    courseOrder: 4,
    curriculum: "CIE 0478 3.1–3.4 — Von Neumann CPU & FDE Cycle, Input/Output/Sensors, Primary & Secondary Storage, Virtual/Cloud Storage & Network Hardware",
    sections: [
      {
        id: "von-neumann-fde",
        heading: "Von Neumann CPU, FDE Cycle, Performance & Embedded Systems",
        covers: "Stored-program concept; CU, ALU, Registers (PC, MAR, MDR, CIR, ACC) and System Buses (Address unidirectional, Data bidirectional, Control bidirectional); step-by-step Fetch–Decode–Execute cycle; CPU performance factors (Clock speed in GHz, Number of cores, Cache size); Instruction sets; Embedded systems (dedicated microprocessor + firmware, pros & cons).",
      },
      {
        id: "input-output-sensors",
        heading: "Input/Output Devices & Sensors (Monitoring vs Control)",
        covers: "Input devices (Barcode/QR scanners, 2D/3D scanners, keyboards, optical mice, microphones, digital cameras, Capacitive vs Resistive vs Infrared touchscreens); Output devices (Actuators, DLP vs LCD projectors, Inkjet vs Laser vs 3D printers, LED vs LCD screens, speakers); Sensors (acoustic, accelerometer, flow, gas, humidity, infra-red, level, light, magnetic field, moisture, pH, pressure, proximity, temperature) in Monitoring vs Control feedback loops with ADC/DAC.",
      },
      {
        id: "primary-secondary-storage",
        heading: "Primary (RAM/ROM) & Secondary Storage (Magnetic, Optical, SSD)",
        covers: "Primary memory directly accessible by CPU: volatile RAM (stores currently running OS, programs & data in use; DRAM needs refreshing vs faster SRAM for cache) vs non-volatile ROM (stores bootstrap/BIOS/firmware); Secondary non-volatile storage: Magnetic HDD (platters, electromagnets, tracks & sectors), Optical (CD/DVD/Blu-ray pits & lands, red vs blue lasers), Solid-State SSD/Flash (NAND/NOR transistors, control gate & floating gate trapping electrons, no moving parts).",
      },
      {
        id: "virtual-cloud-networking",
        heading: "Virtual Memory, Cloud Storage & Network Hardware (NIC, MAC, IP, Routers)",
        covers: "Virtual memory paging inactive pages from full RAM to HDD/SSD swap space and swapping back when needed (preventing crashes, risk of disk thrashing); Public, Private & Hybrid Cloud storage pros/cons; Network Interface Card (NIC), 48-bit hex MAC address (manufacturer ID + serial, physical/static) vs IPv4 (32-bit denary dotted) & IPv6 (128-bit hex colons, static vs dynamic via DHCP), and Routers forwarding packets between networks.",
      },
    ],
  },
  {
    id: "software-security-ai",
    title: "Software, Internet, Cyber Security & AI",
    strand: "Paper 1: Computer Systems",
    icon: "🛡️",
    courseYear: 11,
    courseOrder: 7,
    curriculum: "CIE 0478 4.1–4.2, 5.1–5.3 & 6.1–6.3 — OS & Interrupts, Translators & IDEs, WWW/DNS/HTTPS, Cyber Threats & Encryption, Automated Systems, Robotics & AI",
    sections: [
      {
        id: "system-app-interrupts",
        heading: "System vs Application Software, OS Functions & Interrupts",
        covers: "System software (OS, utilities, device drivers, translators) managing hardware vs Application software performing user tasks; Firmware/bootloader role in starting the OS; OS functions (HCI/GUI/CLI, memory management, multitasking, peripheral/driver management, file management, user accounts & security); Hardware vs Software Interrupts handled by Interrupt Service Routine (ISR) saving CPU registers.",
      },
      {
        id: "languages-translators-ide",
        heading: "High/Low-Level Languages, Translators & IDEs",
        covers: "High-level languages (portable, English-like, easier to debug) vs Low-level Assembly (mnemonics, direct hardware/register manipulation, fast/compact, translated by Assembler) and Machine Code; Compilers (translates whole program into executable before running, lists all errors, distributes without source code) vs Interpreters (translates & executes line-by-line, stops at first error, ideal during development); IDE features (code editor, runtime environment, translators, error diagnostics, auto-completion, auto-correction, prettyprinting).",
      },
      {
        id: "internet-web-protocols",
        heading: "The Internet, WWW, URLs, HTTP/HTTPS, DNS & Cookies",
        covers: "Internet (global infrastructure of interconnected networks) vs World Wide Web (collection of web pages accessed over the Internet); URL parts (protocol, domain name, path/filename); Web browser functions; step-by-step DNS domain-to-IP resolution + HTML rendering; HTTP vs HTTPS with SSL/TLS digital certificates; Session cookies (RAM, temporary, e.g. shopping basket) vs Persistent cookies (stored on drive, login prefs/tracking).",
      },
      {
        id: "cyber-threats-encryption",
        heading: "Cyber Security Threats, Defences & Symmetric/Asymmetric Encryption",
        covers: "Cyber threats: Brute-force, Data interception/packet sniffing, DDoS, Hacking, Malware (Virus, Worm, Trojan horse, Spyware/keylogger, Ransomware, Adware), Phishing vs Pharming, Social engineering; Defences: Access levels, Anti-malware, Authentication (passwords, biometrics, 2FA), Automatic software updates, URL/spelling checks, Firewalls, Privacy settings, Proxy servers, SSL; Symmetric encryption (single shared secret key — key-exchange risk) vs Asymmetric encryption (mathematically linked Public Key to encrypt + Private Key to decrypt).",
      },
      {
        id: "automated-robotics-ai",
        heading: "Automated Systems, Robotics & Artificial Intelligence",
        covers: "Automated systems combining sensors, microprocessor and actuators across industry, transport, agriculture, weather, gaming, lighting & science; Robotics (mechanical structure, electrical components, programmable; independent vs dependent robots; advantages & disadvantages); Artificial Intelligence: Expert Systems (knowledge base, rule base, inference engine, user interface) & Machine Learning (algorithms adapting/improving performance from training data without explicit reprogramming).",
      },
    ],
  },

  // ============= PAPER 2: ALGORITHMS, PROGRAMMING & LOGIC ================
  {
    id: "logic-gates",
    title: "Boolean Logic & Logic Circuits",
    strand: "Paper 2: Algorithms, Programming & Logic",
    icon: "⚡",
    courseYear: 10,
    courseOrder: 5,
    curriculum: "CIE 0478 10 — NOT, AND, OR, NAND, NOR & XOR Gates, Logic Circuits, Truth Tables & Logic Expressions",
    sections: [
      {
        id: "basic-gates",
        heading: "NOT, AND & OR Gates",
        covers: "Single-input NOT gate (inverter) and two-input AND & OR gates: standard CIE gate symbols, Boolean behaviour, and 2-row / 4-row truth tables.",
      },
      {
        id: "universal-xor-gates",
        heading: "NAND, NOR & XOR Gates",
        covers: "NAND (NOT-AND), NOR (NOT-OR) and XOR (exclusive-OR: 1 when inputs differ, 0 when equal) gates: exact CIE symbols (bubbles and curved double input line for XOR), truth tables, and distinguishing OR vs XOR vs NOR.",
      },
      {
        id: "logic-circuits-tables",
        heading: "Multi-Gate Logic Circuits & 3-Input Truth Tables",
        covers: "Tracing multi-stage logic circuits systematically using intermediate lettered wires (P, Q, R) across all 8 binary input rows (000 to 111) to guarantee full CIE marks.",
      },
      {
        id: "logic-expressions-problems",
        heading: "Logic Expressions & Real-World Control Problems",
        covers: "Converting between English problem statements (e.g. safety alarms, greenhouse controllers), CIE Boolean logic expressions (X = (A AND NOT B) OR C — always using brackets for clarity alongside NOT → AND → OR precedence), truth tables and logic circuit diagrams.",
      },
    ],
  },
  {
    id: "algorithms-testing",
    title: "Algorithms, Validation, Testing & Trace Tables",
    strand: "Paper 2: Algorithms, Programming & Logic",
    icon: "🧭",
    courseYear: 10,
    courseOrder: 6,
    curriculum: "CIE 0478 7 — Computational Thinking, Program Development Life Cycle, Flowcharts & Pseudocode, Linear Search & Bubble Sort, Validation/Verification, Test Data & Trace Tables",
    sections: [
      {
        id: "computational-pdls",
        heading: "Computational Thinking, PDLC & Structure Diagrams",
        covers: "Abstraction (keeping essential details, removing unnecessary clutter) & Decomposition (breaking a complex system into smaller sub-systems/modules); Program Development Life Cycle stages (Analysis, Design, Coding, Testing — iterative); Top-down design and hierarchical Structure Diagrams.",
      },
      {
        id: "flowcharts-pseudocode",
        heading: "Flowcharts & CIE 0478 Pseudocode Essentials",
        covers: "Standard flowchart symbols (Rounded Terminator Start/Stop, Parallelogram Input/Output, Rectangle Process, Diamond Decision with labelled Yes/No arrows, Subroutine box, Flowlines); CIE 0478 pseudocode syntax (← assignment, INPUT, OUTPUT, =, <>, <=, >=).",
      },
      {
        id: "standard-algorithms",
        heading: "Standard Algorithms: Totals, Min/Max, Linear Search & Bubble Sort",
        covers: "Totalling (`Total ← Total + Value`), Counting (`Count ← Count + 1`), Finding Maximum/Minimum (initialising to first item or extreme opposite, never 0 for negative/positive-only sets!) & Average; **Linear Search** across a 1D array with `Found` boolean flag; **Bubble Sort** nested loops + `Swap` boolean flag & shrinking inner-loop bound optimisation.",
      },
      {
        id: "validation-verification-testing",
        heading: "Validation vs Verification & Test Data Types",
        covers: "Validation (automated check that data is *reasonable/sensible* — Range, Length, Type, Presence, Format, Check Digit; CANNOT check accuracy) vs Verification (checking data was *copied accurately* — Double Entry & Visual/Screen Check); Test Data categories: **Normal**, **Abnormal/Erroneous**, **Extreme** (largest/smallest *accepted* values on the limit) & **Boundary** (pair of values right on either side of the limit: one accepted extreme + one rejected adjacent value!).",
      },
      {
        id: "trace-tables-errors",
        heading: "Trace Tables & Finding/Fixing Algorithm Errors",
        covers: "Dry-running flowcharts and pseudocode step-by-step in CIE Trace Tables (recording a cell only when a variable changes, tracking loop counters, array elements and exact `OUTPUT` column); spotting and fixing off-by-one loop bounds, wrong initialisations, wrong relational operators (`<` vs `<=`) and `AND`/`OR` logic bugs.",
      },
    ],
  },
  {
    id: "python-arrays-sql",
    title: "Python Programming, Arrays, Files & SQL",
    strand: "Paper 2: Algorithms, Programming & Logic",
    icon: "🐍",
    courseYear: 11,
    courseOrder: 8,
    curriculum: "CIE 0478 8 & 9 — Python & CIE Pseudocode (Variables, Selection, Iteration, Strings, Subroutines, 1D/2D Arrays, File Handling) & Single-Table Databases + SQL",
    sections: [
      {
        id: "variables-types-operators",
        heading: "Variables, Constants, Data Types & DIV / MOD Operators",
        covers: "`DECLARE` & `CONSTANT` in CIE pseudocode vs Python; 5 core CIE data types (`INTEGER`, `REAL`, `CHAR`, `STRING`, `BOOLEAN`) and Python equivalents (`int`, `float`, `str`, `bool`); integer division `DIV` (`//`) and remainder `MOD` (`%`) for digit extraction, even/odd tests and time conversions.",
      },
      {
        id: "selection-iteration",
        heading: "Selection (IF / CASE) & Iteration (FOR / WHILE / REPEAT..UNTIL)",
        covers: "Nested `IF..THEN..ELSE..ENDIF` (`if/elif/else`) and `CASE OF..OTHERWISE..ENDCASE`; choosing the right loop: count-controlled `FOR..TO..NEXT` (`for i in range(...)`), pre-condition `WHILE..DO..ENDWHILE` (0 or more runs) vs post-condition `REPEAT..UNTIL` (at least 1 run, stops when condition becomes `TRUE`!).",
      },
      {
        id: "strings-subroutines-scope",
        heading: "String Handling, Procedures vs Functions & Variable Scope",
        covers: "String operations: `LENGTH(S)` / `len(s)`, `UCASE(S)` / `s.upper()`, `LCASE(S)` / `s.lower()`, and **CIE `SUBSTRING(S, start, length)` (1-indexed, 3rd arg is length!) vs Python `s[start:stop]` (0-indexed, 2nd index is exclusive!)**; `PROCEDURE` vs `FUNCTION` (`RETURNS` a value into an expression); Parameters vs Arguments; Local vs Global variables; Library routines (`MOD`, `DIV`, `ROUND`, `RANDOM`).",
      },
      {
        id: "arrays-files",
        heading: "1D & 2D Arrays, File Handling & Maintainable Code",
        covers: "`DECLARE Scores : ARRAY[1:30] OF INTEGER` and 2D arrays `ARRAY[1:5, 1:4] OF STRING` (Python lists & lists-of-lists), populating/searching/totalling with nested `FOR` loops; File handling (`OPENFILE \"data.txt\" FOR READ/WRITE`, `READFILE`, `WRITEFILE`, `CLOSEFILE` & Python `with open(...)`); writing maintainable programs (meaningful identifiers, comments, indentation, modularity).",
      },
      {
        id: "databases-sql",
        heading: "Single-Table Databases & Structured Query Language (SQL)",
        covers: "Flat-file single-table structure: Fields (columns), Records (rows), SQL/CIE database data types (`TEXT`/`ALPHANUMERIC`, `CHAR`, `BOOLEAN`, `INTEGER`, `REAL`, `DATE/TIME`), choosing or explaining a unique `PRIMARY KEY`; writing & tracing CIE 0478 SQL scripts with `SELECT`, `FROM`, `WHERE` (`=`, `<>`, `<`, `>`, `<=`, `>=`, `AND`, `OR`, `NOT`, single quotes around `'Text'`), `ORDER BY ... ASC/DESC`, `SUM(...)` and `COUNT(...)`.",
      },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
