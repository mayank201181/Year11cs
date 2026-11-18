import type { TopicGuide } from "../../types.ts";

const SVG_LAYERS =
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Software hierarchy from Hardware through Firmware and Operating System to Application Software, plus CPU Interrupt Service Routine flow">' +
  '<rect x="0" y="0" width="560" height="260" rx="14" fill="#f8fafc"/>' +
  '<text x="145" y="22" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">Software Stack (Boot to User)</text>' +
  '<rect x="24" y="34" width="242" height="44" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/>' +
  '<text x="145" y="53" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e3a8a" text-anchor="middle">Application Software</text>' +
  '<text x="145" y="69" font-family="sans-serif" font-size="10" fill="#1e40af" text-anchor="middle">Browser, Word Processor, Games (User Tasks)</text>' +
  '<rect x="24" y="88" width="242" height="48" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/>' +
  '<text x="145" y="108" font-family="sans-serif" font-size="12" font-weight="700" fill="#14532d" text-anchor="middle">System Software (OS + Utilities)</text>' +
  '<text x="145" y="125" font-family="sans-serif" font-size="10" fill="#166534" text-anchor="middle">HCI, Memory, Multitasking, Drivers, Files</text>' +
  '<rect x="24" y="146" width="242" height="44" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>' +
  '<text x="145" y="165" font-family="sans-serif" font-size="12" font-weight="700" fill="#78350f" text-anchor="middle">Firmware / Bootloader (ROM)</text>' +
  '<text x="145" y="181" font-family="sans-serif" font-size="10" fill="#92400e" text-anchor="middle">BIOS / UEFI loads OS kernel into RAM</text>' +
  '<rect x="24" y="200" width="242" height="44" rx="8" fill="#e2e8f0" stroke="#475569" stroke-width="1.8"/>' +
  '<text x="145" y="219" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">Physical Hardware</text>' +
  '<text x="145" y="235" font-family="sans-serif" font-size="10" fill="#334155" text-anchor="middle">CPU, RAM, SSD, Keyboard, NIC</text>' +
  '<line x1="286" y1="18" x2="286" y2="246" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="4 4"/>' +
  '<text x="422" y="22" font-family="sans-serif" font-size="12" font-weight="700" fill="#0f172a" text-anchor="middle">Interrupt &amp; ISR Handshake</text>' +
  '<rect x="306" y="36" width="232" height="38" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>' +
  '<text x="422" y="53" font-family="sans-serif" font-size="11" font-weight="700" fill="#991b1b" text-anchor="middle">1. Interrupt Signal Arrives</text>' +
  '<text x="422" y="67" font-family="sans-serif" font-size="9.5" fill="#7f1d1d" text-anchor="middle">Key press / Paper jam / Div-by-zero</text>' +
  '<rect x="306" y="86" width="232" height="38" rx="8" fill="#ffedd5" stroke="#ea580c" stroke-width="1.6"/>' +
  '<text x="422" y="103" font-family="sans-serif" font-size="11" font-weight="700" fill="#9a3412" text-anchor="middle">2. Finish Current FDE &amp; Check Priority</text>' +
  '<text x="422" y="117" font-family="sans-serif" font-size="9.5" fill="#7c2d12" text-anchor="middle">Higher priority than running task?</text>' +
  '<rect x="306" y="136" width="232" height="44" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.6"/>' +
  '<text x="422" y="154" font-family="sans-serif" font-size="11" font-weight="700" fill="#5b21b6" text-anchor="middle">3. Save Registers (PC, ACC) to Stack</text>' +
  '<text x="422" y="170" font-family="sans-serif" font-size="9.5" fill="#4c1d95" text-anchor="middle">Run Interrupt Service Routine (ISR)</text>' +
  '<rect x="306" y="192" width="232" height="44" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.6"/>' +
  '<text x="422" y="210" font-family="sans-serif" font-size="11" font-weight="700" fill="#14532d" text-anchor="middle">4. Restore Registers from Stack</text>' +
  '<text x="422" y="226" font-family="sans-serif" font-size="9.5" fill="#166534" text-anchor="middle">CPU resumes interrupted program seamlessly</text>' +
  "</svg>";

const SVG_TRANSLATORS =
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Compiler, Interpreter, and Assembler translating code into Machine Code">' +
  '<rect x="0" y="0" width="560" height="260" rx="14" fill="#f8fafc"/>' +
  '<rect x="18" y="20" width="164" height="220" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="1.8"/>' +
  '<text x="100" y="42" font-family="sans-serif" font-size="13" font-weight="700" fill="#1e3a8a" text-anchor="middle">Compiler (HLL)</text>' +
  '<rect x="32" y="54" width="136" height="36" rx="6" fill="#ffffff" stroke="#93c5fd"/>' +
  '<text x="100" y="76" font-family="sans-serif" font-size="10.5" fill="#1e293b" text-anchor="middle">Whole HLL Source Code</text>' +
  '<text x="100" y="108" font-family="sans-serif" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">↓ Translates ALL at once ↓</text>' +
  '<rect x="32" y="120" width="136" height="42" rx="6" fill="#dbeafe" stroke="#2563eb"/>' +
  '<text x="100" y="138" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#1e3a8a" text-anchor="middle">Executable File (.exe)</text>' +
  '<text x="100" y="153" font-family="sans-serif" font-size="9.5" fill="#1e40af" text-anchor="middle">Runs standalone &amp; fast</text>' +
  '<text x="100" y="184" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">• Full error report at end</text>' +
  '<text x="100" y="201" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">• Hides source code</text>' +
  '<text x="100" y="218" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">• Best for final release</text>' +
  '<rect x="198" y="20" width="164" height="220" rx="10" fill="#fefce8" stroke="#ca8a04" stroke-width="1.8"/>' +
  '<text x="280" y="42" font-family="sans-serif" font-size="13" font-weight="700" fill="#713f12" text-anchor="middle">Interpreter (HLL)</text>' +
  '<rect x="212" y="54" width="136" height="36" rx="6" fill="#ffffff" stroke="#fde047"/>' +
  '<text x="280" y="76" font-family="sans-serif" font-size="10.5" fill="#1e293b" text-anchor="middle">Line 1 → Line 2 → Line 3</text>' +
  '<text x="280" y="108" font-family="sans-serif" font-size="10" font-weight="700" fill="#ca8a04" text-anchor="middle">↓ Line-by-line execution ↓</text>' +
  '<rect x="212" y="120" width="136" height="42" rx="6" fill="#fef9c3" stroke="#ca8a04"/>' +
  '<text x="280" y="138" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#713f12" text-anchor="middle">No Standalone .exe</text>' +
  '<text x="280" y="153" font-family="sans-serif" font-size="9.5" fill="#854d0e" text-anchor="middle">Halts at FIRST syntax error</text>' +
  '<text x="280" y="184" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">• Pinpoints exact buggy line</text>' +
  '<text x="280" y="201" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">• Needs interpreter every run</text>' +
  '<text x="280" y="218" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">• Best during development</text>' +
  '<rect x="378" y="20" width="164" height="220" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>' +
  '<text x="460" y="42" font-family="sans-serif" font-size="13" font-weight="700" fill="#14532d" text-anchor="middle">Assembler (LLL)</text>' +
  '<rect x="392" y="54" width="136" height="36" rx="6" fill="#ffffff" stroke="#86efac"/>' +
  '<text x="460" y="76" font-family="mono,monospace" font-size="10.5" fill="#1e293b" text-anchor="middle">LDA #5 / ADD 20</text>' +
  '<text x="460" y="108" font-family="sans-serif" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">↓ 1-to-1 Mnemonic Map ↓</text>' +
  '<rect x="392" y="120" width="136" height="42" rx="6" fill="#dcfce7" stroke="#16a34a"/>' +
  '<text x="460" y="138" font-family="mono,monospace" font-size="10.5" font-weight="700" fill="#14532d" text-anchor="middle">00100101 01010100</text>' +
  '<text x="460" y="153" font-family="sans-serif" font-size="9.5" fill="#166534" text-anchor="middle">Pure Binary Machine Code</text>' +
  '<text x="460" y="184" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">• Direct register/HW access</text>' +
  '<text x="460" y="201" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">• Tiny memory footprint</text>' +
  '<text x="460" y="218" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">• CPU-specific (not portable)</text>' +
  "</svg>";

const SVG_DNS_HTTPS =
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Step-by-step DNS lookup and HTTPS TLS certificate handshake between Web Browser, DNS Server, and Web Server">' +
  '<rect x="0" y="0" width="560" height="260" rx="14" fill="#f8fafc"/>' +
  '<rect x="20" y="20" width="520" height="34" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>' +
  '<text x="280" y="42" font-family="mono,monospace" font-size="11.5" font-weight="700" fill="#0c4a6e" text-anchor="middle">URL: https://   www.examhub.org   /cs/notes.html</text>' +
  '<text x="132" y="68" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#0369a1" text-anchor="middle">Protocol</text>' +
  '<text x="262" y="68" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#0369a1" text-anchor="middle">Domain Name</text>' +
  '<text x="405" y="68" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#0369a1" text-anchor="middle">Path &amp; Filename</text>' +
  '<rect x="24" y="102" width="136" height="128" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/>' +
  '<text x="92" y="128" font-family="sans-serif" font-size="12" font-weight="700" fill="#1e3a8a" text-anchor="middle">Web Browser</text>' +
  '<text x="92" y="148" font-family="sans-serif" font-size="9.5" fill="#1e40af" text-anchor="middle">• Renders HTML/CSS</text>' +
  '<text x="92" y="165" font-family="sans-serif" font-size="9.5" fill="#1e40af" text-anchor="middle">• Verifies SSL/TLS cert</text>' +
  '<text x="92" y="182" font-family="sans-serif" font-size="9.5" fill="#1e40af" text-anchor="middle">• Stores Cookies</text>' +
  '<text x="92" y="199" font-family="sans-serif" font-size="9.5" fill="#1e40af" text-anchor="middle">• History &amp; Bookmarks</text>' +
  '<rect x="212" y="84" width="136" height="62" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>' +
  '<text x="280" y="106" font-family="sans-serif" font-size="12" font-weight="700" fill="#78350f" text-anchor="middle">DNS Server</text>' +
  '<text x="280" y="123" font-family="sans-serif" font-size="9.5" fill="#92400e" text-anchor="middle">Domain → IP Table</text>' +
  '<text x="280" y="137" font-family="mono,monospace" font-size="9.5" fill="#78350f" text-anchor="middle">203.0.113.42</text>' +
  '<rect x="400" y="102" width="136" height="128" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/>' +
  '<text x="468" y="128" font-family="sans-serif" font-size="12" font-weight="700" fill="#14532d" text-anchor="middle">Web Server</text>' +
  '<text x="468" y="148" font-family="mono,monospace" font-size="9.5" fill="#166534" text-anchor="middle">IP: 203.0.113.42</text>' +
  '<text x="468" y="166" font-family="sans-serif" font-size="9.5" fill="#166534" text-anchor="middle">• Sends Digital Cert</text>' +
  '<text x="468" y="183" font-family="sans-serif" font-size="9.5" fill="#166534" text-anchor="middle">• Serves HTML &amp; Media</text>' +
  '<text x="468" y="200" font-family="sans-serif" font-size="9.5" fill="#166534" text-anchor="middle">• Sets Session Cookie</text>' +
  '<line x1="160" y1="112" x2="210" y2="104" stroke="#d97706" stroke-width="1.8"/>' +
  '<text x="186" y="99" font-family="sans-serif" font-size="9" font-weight="700" fill="#b45309" text-anchor="middle">1. Domain?</text>' +
  '<line x1="210" y1="128" x2="160" y2="136" stroke="#d97706" stroke-width="1.8"/>' +
  '<text x="186" y="147" font-family="sans-serif" font-size="9" font-weight="700" fill="#b45309" text-anchor="middle">2. Returns IP</text>' +
  '<line x1="160" y1="184" x2="398" y2="184" stroke="#16a34a" stroke-width="2"/>' +
  '<text x="280" y="177" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#15803d" text-anchor="middle">3. HTTPS Request + SSL/TLS Certificate Handshake</text>' +
  '<line x1="398" y1="208" x2="160" y2="208" stroke="#2563eb" stroke-width="2"/>' +
  '<text x="280" y="223" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#1d4ed8" text-anchor="middle">4. Encrypted HTML Sent → Browser Renders Page</text>' +
  "</svg>";

const SVG_ENCRYPTION =
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Symmetric encryption single shared key problem versus Asymmetric encryption using Bob Public Key to encrypt and Bob Private Key to decrypt">' +
  '<rect x="0" y="0" width="560" height="260" rx="14" fill="#f8fafc"/>' +
  '<rect x="16" y="16" width="528" height="102" rx="10" fill="#fff1f2" stroke="#e11d48" stroke-width="1.6"/>' +
  '<text x="280" y="36" font-family="sans-serif" font-size="12" font-weight="700" fill="#9f1239" text-anchor="middle">Symmetric Encryption: Same Secret Key K Encrypts &amp; Decrypts</text>' +
  '<rect x="30" y="50" width="110" height="48" rx="7" fill="#ffffff" stroke="#fda4af"/>' +
  '<text x="85" y="71" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#1e293b" text-anchor="middle">Plaintext</text>' +
  '<text x="85" y="87" font-family="sans-serif" font-size="9.5" fill="#be123c" text-anchor="middle">+ Shared Key K</text>' +
  '<line x1="140" y1="74" x2="215" y2="74" stroke="#e11d48" stroke-width="1.8"/>' +
  '<rect x="215" y="50" width="130" height="48" rx="7" fill="#ffe4e6" stroke="#e11d48"/>' +
  '<text x="280" y="70" font-family="mono,monospace" font-size="10.5" font-weight="700" fill="#881337" text-anchor="middle">Ciphertext: 9X#Q!</text>' +
  '<text x="280" y="87" font-family="sans-serif" font-size="9" fill="#9f1239" text-anchor="middle">⚠ Key K sent over network!</text>' +
  '<line x1="345" y1="74" x2="420" y2="74" stroke="#e11d48" stroke-width="1.8"/>' +
  '<rect x="420" y="50" width="110" height="48" rx="7" fill="#ffffff" stroke="#fda4af"/>' +
  '<text x="475" y="71" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#1e293b" text-anchor="middle">Plaintext</text>' +
  '<text x="475" y="87" font-family="sans-serif" font-size="9.5" fill="#be123c" text-anchor="middle">Uses SAME Key K</text>' +
  '<rect x="16" y="132" width="528" height="112" rx="10" fill="#ecfdf5" stroke="#059669" stroke-width="1.8"/>' +
  '<text x="280" y="152" font-family="sans-serif" font-size="12" font-weight="700" fill="#065f46" text-anchor="middle">Asymmetric Encryption (Alice → Bob): Mathematically Linked Key Pair</text>' +
  '<rect x="30" y="168" width="132" height="58" rx="7" fill="#ffffff" stroke="#6ee7b7"/>' +
  '<text x="96" y="188" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#064e3b" text-anchor="middle">Alice Encrypts</text>' +
  '<text x="96" y="204" font-family="sans-serif" font-size="9.5" fill="#047857" text-anchor="middle">Uses BOB PUBLIC KEY</text>' +
  '<text x="96" y="218" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">(Shared openly)</text>' +
  '<line x1="162" y1="197" x2="215" y2="197" stroke="#059669" stroke-width="1.8"/>' +
  '<rect x="215" y="168" width="130" height="58" rx="7" fill="#d1fae5" stroke="#059669"/>' +
  '<text x="280" y="191" font-family="mono,monospace" font-size="10.5" font-weight="700" fill="#065f46" text-anchor="middle">Ciphertext: 7K@M$</text>' +
  '<text x="280" y="209" font-family="sans-serif" font-size="9" fill="#047857" text-anchor="middle">Public key CANNOT decrypt!</text>' +
  '<line x1="345" y1="197" x2="398" y2="197" stroke="#059669" stroke-width="1.8"/>' +
  '<rect x="398" y="168" width="132" height="58" rx="7" fill="#ffffff" stroke="#6ee7b7"/>' +
  '<text x="464" y="188" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#064e3b" text-anchor="middle">Bob Decrypts</text>' +
  '<text x="464" y="204" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#047857" text-anchor="middle">BOB PRIVATE KEY</text>' +
  '<text x="464" y="218" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">(Never leaves Bob!)</text>' +
  "</svg>";

const SVG_EXPERT_AI =
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Architecture of an AI Expert System showing User Interface, Inference Engine, Knowledge Base, and Rule Base">' +
  '<rect x="0" y="0" width="560" height="260" rx="14" fill="#f8fafc"/>' +
  '<text x="280" y="24" font-family="sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Expert System Architecture (4 Core CIE Components)</text>' +
  '<rect x="24" y="92" width="122" height="84" rx="10" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.8"/>' +
  '<text x="85" y="122" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#312e81" text-anchor="middle">User Interface</text>' +
  '<text x="85" y="140" font-family="sans-serif" font-size="9.5" fill="#3730a3" text-anchor="middle">Asks Yes/No Qs</text>' +
  '<text x="85" y="155" font-family="sans-serif" font-size="9.5" fill="#3730a3" text-anchor="middle">Shows diagnosis</text>' +
  '<line x1="146" y1="134" x2="196" y2="134" stroke="#4f46e5" stroke-width="2"/>' +
  '<rect x="196" y="76" width="164" height="116" rx="12" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>' +
  '<text x="278" y="106" font-family="sans-serif" font-size="12.5" font-weight="700" fill="#4c1d95" text-anchor="middle">Inference Engine</text>' +
  '<text x="278" y="126" font-family="sans-serif" font-size="10" fill="#5b21b6" text-anchor="middle">The Reasoning Brain</text>' +
  '<text x="278" y="145" font-family="sans-serif" font-size="9.5" fill="#4c1d95" text-anchor="middle">Applies IF-THEN rules</text>' +
  '<text x="278" y="160" font-family="sans-serif" font-size="9.5" fill="#4c1d95" text-anchor="middle">to facts + user inputs</text>' +
  '<text x="278" y="175" font-family="sans-serif" font-size="9.5" fill="#4c1d95" text-anchor="middle">to deduce conclusions</text>' +
  '<line x1="360" y1="106" x2="404" y2="78" stroke="#0891b2" stroke-width="2"/>' +
  '<line x1="360" y1="162" x2="404" y2="190" stroke="#d97706" stroke-width="2"/>' +
  '<rect x="404" y="42" width="134" height="76" rx="10" fill="#cffafe" stroke="#0891b2" stroke-width="1.8"/>' +
  '<text x="471" y="68" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#164e63" text-anchor="middle">Knowledge Base</text>' +
  '<text x="471" y="86" font-family="sans-serif" font-size="9.5" fill="#155e75" text-anchor="middle">Repository of domain</text>' +
  '<text x="471" y="101" font-family="sans-serif" font-size="9.5" fill="#155e75" text-anchor="middle">facts &amp; expert data</text>' +
  '<rect x="404" y="148" width="134" height="76" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>' +
  '<text x="471" y="174" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#78350f" text-anchor="middle">Rule Base</text>' +
  '<text x="471" y="192" font-family="mono,monospace" font-size="9.5" fill="#92400e" text-anchor="middle">IF symptom A AND B</text>' +
  '<text x="471" y="207" font-family="mono,monospace" font-size="9.5" fill="#92400e" text-anchor="middle">THEN condition X</text>' +
  '<text x="280" y="244" font-family="sans-serif" font-size="10" fill="#334155" text-anchor="middle">Contrast: Machine Learning adapts its own model weights from training data without explicit reprogramming.</text>' +
  "</svg>";

export const guide: TopicGuide = {
  id: "software-security-ai",
  title: "Software, Internet, Cyber Security & AI",
  strand: "Paper 1: Computer Systems",
  icon: "🛡️",
  summary:
    "How operating systems, translators, DNS, HTTPS, encryption, cyber defences, automated robots and AI systems actually work — and every CIE 0478 Paper 1 mark-scheme distinction.",
  intro:
    "Hardware is just silent silicon until software wakes it up, connects it across the global Internet, defends it from attackers, and gives it the power to reason. This topic spans CIE 0478 Chapters 4, 5 and 6 — three of the highest-tariff explanation chapters on Paper 1. Master the exact mechanisms (how an Interrupt Service Routine saves registers, why an interpreter halts on the first error, how DNS and HTTPS work step-by-step, Phishing vs Pharming, Symmetric vs Asymmetric keys, and the four components of an Expert System) and turn six-mark structured questions into guaranteed marks.",
  guide: [
    {
      id: "system-app-interrupts",
      heading: "System vs Application Software, OS Functions & Interrupts",
      discovery: {
        problem:
          "You are typing an essay while music streams in the background and a file downloads. Suddenly you press the letter 'k' on your keyboard. How does a single-core CPU know you pressed 'k' without checking the keyboard a million times a second, and how does it handle the keystroke without losing its place in the music decoder?",
        idea:
          "Instead of wasteful constant polling, the keyboard controller sends a **hardware interrupt** signal to the CPU. At the end of its **current Fetch–Decode–Execute (FDE) cycle**, the CPU checks the interrupt's priority, saves its current register contents (`PC`, `ACC`, flags) onto a **stack in RAM**, jumps to the keyboard's **Interrupt Service Routine (ISR)**, stores `'k'` in the keyboard buffer, and then restores the saved registers to resume the music decoder exactly where it paused!",
      },
      body:
        "### The Software Hierarchy: Hardware → Firmware → OS → Applications\n\n" +
        "Every computer relies on two broad categories of software sitting above physical hardware:\n\n" +
        "| Category | Purpose | CIE 0478 Examples |\n" +
        "|---|---|---|\n" +
        "| **System Software** | Manages and controls computer **hardware** and provides a platform for applications to run | **Operating System (OS)**, **Utility programs** (defragmenter, backup, anti-virus, disk repair, file compression), **Device drivers**, **Translators** (compilers, interpreters, assemblers) |\n" +
        "| **Application Software** | Allows the **user** to perform specific everyday tasks | Word processor, spreadsheet, database management software, web browser, photo/video editor, games |\n\n" +
        "**How a computer boots up (Firmware & Bootloader):**\n" +
        "1. When power is switched on, volatile **RAM is completely empty**.\n" +
        "2. The CPU executes **firmware** (the **BIOS** or **UEFI** / **bootstrap loader**) permanently stored in non-volatile **ROM** (or flash memory).\n" +
        "3. Firmware runs a power-on self-test (POST) to check hardware is present and operational, then locates the **Operating System kernel** on secondary storage (SSD/HDD) and copies it into **RAM**.\n" +
        "4. Control is handed over to the OS in RAM.\n\n" +
        "### Core Functions of an Operating System (CIE 6-Point Checklist)\n\n" +
        "1. **Human–Computer Interface (HCI)**:\n" +
        "   - **GUI (Graphical User Interface)**: uses **WIMP** (*Windows, Icons, Menus, Pointers*); intuitive for everyday users with no commands to memorise, **but** consumes more RAM and CPU resources.\n" +
        "   - **CLI (Command Line Interface)**: user types exact text commands; requires memorising syntax, **but** uses minimal memory, runs faster, and gives technicians/administrators direct, scriptable control over the whole system.\n" +
        "2. **Memory Management**: allocates and deallocates RAM blocks to running programs, tracks every memory location, prevents two programs overwriting each other's memory space, and manages **virtual memory** paging.\n" +
        "3. **Multitasking**: allocates tiny CPU **time slices** to multiple processes in RAM according to priority so several programs appear to run simultaneously.\n" +
        "4. **Hardware / Peripheral Management**: communicates with input/output devices via **device drivers** (software that translates generic OS instructions into hardware-specific signals) and manages **buffers** and print queues.\n" +
        "5. **File Management**: creates, names, saves, copies, moves and deletes files/folders, maintains directory trees, and enforces file access permissions.\n" +
        "6. **User Account & Security Management**: manages separate user logins, passwords, access levels, personal folders, firewall rules, and system updates.\n\n" +
        "### Hardware & Software Interrupts\n\n" +
        "An **interrupt** is a signal sent from a hardware device or a running program to the microprocessor requesting temporary suspension of its current activity:\n\n" +
        "- **Hardware interrupts**: pressing a keyboard key, moving/clicking a mouse, printer out-of-paper or paper jam error, buffer nearly empty.\n" +
        "- **Software interrupts**: division by zero error (`x / 0`), two processes attempting to access the same memory address simultaneously, attempting to read an array index out of bounds or open a non-existent file.\n\n" +
        "**Exact 5-Step ISR Sequence for Full CIE Marks:**\n" +
        "1. Interrupt signal arrives and is placed in the **interrupt register / queue**.\n" +
        "2. The CPU **completes its current Fetch–Decode–Execute cycle** before checking the interrupt queue.\n" +
        "3. If an interrupt has a **higher priority** than the current task, the CPU saves the current contents of its **registers** (`PC`, `ACC`, `MAR`, `MDR`, status register) into a **stack in RAM**.\n" +
        "4. The CPU loads the start address of the matching **Interrupt Service Routine (ISR)** into the **Program Counter (`PC`)** and executes the ISR to service the interrupt.\n" +
        "5. Once the ISR completes, the saved register values are **restored from RAM** back into the CPU registers so the interrupted program continues seamlessly.",
      diagram: SVG_LAYERS,
      diagramCaption:
        "Left: Application software never touches hardware directly — it goes through the Operating System and Drivers, booted by Firmware in ROM. Right: How the CPU pauses cleanly via an Interrupt Service Routine (ISR).",
      workedExamples: [
        {
          title: "Explaining Interrupt Handling on a 4-Mark Paper 1 Question",
          problem:
            "While a user is editing a video, their printer runs out of paper and sends an interrupt. Explain step-by-step how the CPU and Operating System handle this interrupt so video editing is not lost. [4]",
          steps: [
            "Identify when the CPU checks interrupts: at the end of its **current Fetch–Decode–Execute (FDE) cycle**, it checks the interrupt register and compares the **priority** of the printer interrupt against the current task.",
            "Preserve state: if higher priority, the CPU saves the current contents of its **registers** (such as `PC` and `ACC`) to a **stack** in memory (RAM).",
            "Service the event: the **Interrupt Service Routine (ISR)** for the printer is loaded into the `PC` and executed (displaying an 'out of paper' alert).",
            "Resume cleanly: once serviced, the saved register contents are **restored** from the stack back into the CPU registers, resuming the video editor.",
          ],
          answer:
            "At the end of the current FDE cycle, if the interrupt has higher priority, the CPU saves register contents (PC, ACC) onto a stack in RAM, executes the Interrupt Service Routine (ISR), and then restores the registers from the stack to resume the program.",
          yourTurn: {
            question:
              "What is the exact 3-letter abbreviation (or full name) of the software routine loaded into the Program Counter to handle an interrupt once CPU registers have been saved?",
            answer: {
              type: "text",
              accept: ["ISR", "Interrupt Service Routine", "interrupt handler"],
              display: "ISR (Interrupt Service Routine)",
            },
            solution:
              "Once the current registers are pushed onto the stack in RAM, the CPU loads the address of the **ISR** (**Interrupt Service Routine**) into the Program Counter to handle the interrupt.",
          },
        },
      ],
      keyPoints: [
        "**System software** manages hardware (OS, utilities, drivers, translators); **application software** performs user tasks.",
        "**Firmware** (BIOS/bootloader in non-volatile ROM) checks hardware and loads the **OS into RAM** at startup.",
        "**CLI** gives technicians fast, low-memory direct control; **GUI (WIMP)** is intuitive for general users at higher RAM/CPU cost.",
        "**Interrupts** can be **hardware** (key press, paper jam) or **software** (division by zero, memory conflict) and are serviced by an **ISR** after saving CPU registers at the end of an FDE cycle.",
      ],
      whyItWorks:
        "Saving every CPU register (`PC`, `ACC`, `MAR`, `MDR`) onto a Last-In-First-Out stack in RAM means even **nested interrupts** work cleanly: if a critical power-fail interrupt arrives while a keyboard ISR is running, the CPU pushes a second snapshot on top of the stack, handles the higher-priority ISR, pops back to the keyboard ISR, and finally pops back to your program!",
      strategies: [
        "Use the 4-verb ISR chain on exam questions: **Finish FDE → Check Priority → Save Registers to Stack → Run ISR & Restore Registers**.",
        "Never list brand names (like 'Microsoft Word' or 'Windows 11') on CIE 0478! Always write generic names ('word processor', 'operating system').",
      ],
      thinkDeeper:
        "Why must the bootloader/firmware live in **ROM** (or non-volatile flash) rather than **RAM**, yet why does the Operating System get copied *into* **RAM** to run instead of running everything from SSD?",
    },
    {
      id: "languages-translators-ide",
      heading: "High/Low-Level Languages, Translators & IDEs",
      discovery: {
        problem:
          "Software studio NovaGames writes a 50,000-line game in Python. During coding, they want the program to run immediately and stop on the exact line of any typo. When they sell the finished game to millions of customers, they want fast execution and do NOT want players reading or editing their secret source code. Why can a single translator not do both jobs ideally?",
        idea:
          "During development, an **interpreter** translates and executes **line by line**, stopping immediately on the first error so debugging is effortless. For commercial distribution, a **compiler** translates the **entire source code** once into a fast, standalone machine-code **executable file** — customers run it without needing the compiler or ever seeing the original source code!",
      },
      body:
        "### High-Level vs Low-Level Languages\n\n" +
        "A CPU only understands **Machine Code** (pure binary `1`s and `0`s representing opcodes and operands). Programmers choose between:\n\n" +
        "| Feature | High-Level Language (HLL) | Low-Level Assembly Language | Machine Code (LLL) |\n" +
        "|---|---|---|---|\n" +
        "| **Syntax** | English-like statements (`if score >= 50:`) | Short **mnemonics** (`LDA`, `ADD`, `STO`) | Raw binary (`00101101 00000101`) |\n" +
        "| **Portability** | **Portable** (machine-independent across CPUs) | **Machine-dependent** (specific to one CPU family) | **Machine-dependent** |\n" +
        "| **Instruction ratio** | **1-to-many** (1 line → many machine instructions) | **1-to-1** (1 mnemonic → 1 machine instruction) | Direct CPU instruction |\n" +
        "| **Hardware access** | Cannot directly manipulate CPU registers | **Direct control** of hardware & special registers | Direct hardware control |\n" +
        "| **Memory & Speed** | Larger footprint, slower than tuned assembly | **Compact & very fast** (ideal for embedded systems & drivers) | Fastest — **no translator needed** |\n" +
        "| **Ease of debugging** | Easy to read, write, maintain and debug | Harder to read and debug | Extremely error-prone for humans |\n\n" +
        "### The Three Translators: Compiler, Interpreter & Assembler\n\n" +
        "| Translator | Input → Output | How It Handles Errors & Execution |\n" +
        "|---|---|---|\n" +
        "| **Compiler** | High-Level Language → **Standalone Executable File** (machine code) | Scans the **entire program** before executing anything. Produces a **complete error report** of all syntax errors at the end. If error-free, outputs an executable that runs **fast without the compiler or source code present**. |\n" +
        "| **Interpreter** | High-Level Language → Executes **statement by statement** | Translates and executes **one line at a time**. **Halts immediately** on the first syntax/runtime error it reaches (pinpointing the bug). Produces **no executable file** — both source code and interpreter are required every run. |\n" +
        "| **Assembler** | **Assembly Language** → Machine Code executable | Translates low-level **mnemonics** into binary machine code (typically creating an executable object file for embedded systems or drivers). |\n\n" +
        "### Integrated Development Environment (IDE) Features\n\n" +
        "An **IDE** is an application suite giving programmers tools to write, test and debug code efficiently. Memorise these **7 CIE 0478 IDE features**:\n\n" +
        "1. **Code Editor**: text area for writing and editing source code without opening separate software.\n" +
        "2. **Translators**: built-in **interpreter** (for rapid testing) and/or **compiler** (to build executables).\n" +
        "3. **Runtime Environment with Debugger**: runs the program inside a controlled sandbox with **single-stepping** (line-by-line execution), **breakpoints** (pausing at a chosen line), and a **variable watch window**.\n" +
        "4. **Error Diagnostics**: dynamic syntax checking that underlines syntax errors with line numbers *before* or during translation.\n" +
        "5. **Auto-completion**: suggests variable/subroutine identifiers and automatically closes brackets or quotes.\n" +
        "6. **Auto-correction**: fixes minor spelling slips in reserved keywords.\n" +
        "7. **Prettyprinting**: colour-codes keywords, strings, and comments plus applies **automatic indentation** so code structure is visually clear.",
      diagram: SVG_TRANSLATORS,
      diagramCaption:
        "CIE 0478 Translator Trio: Compiler builds a standalone executable once; Interpreter runs line-by-line for rapid debugging; Assembler maps mnemonics 1-to-1 into binary machine code.",
      workedExamples: [
        {
          title: "Choosing Languages and Translators for a Washing Machine Microcontroller",
          problem:
            "An engineer is writing firmware for a washing machine's embedded microprocessor, which has only 32 KiB of ROM and must directly control water-valve registers. State whether a High-Level or Low-Level language is more suitable and give two reasons. [3]",
          steps: [
            "Choose language type: **Low-level language** (specifically **Assembly language**).",
            "Reason 1 (Hardware control): Assembly allows **direct manipulation of special hardware registers** and actuators (like the water valve).",
            "Reason 2 (Memory/Speed): Assembly produces **compact machine code that occupies minimal memory** (fitting inside 32 KiB ROM) and executes **faster** without runtime overhead.",
          ],
          answer:
            "Assembly (low-level) language: 1) allows direct manipulation of hardware registers; 2) occupies much less memory (32 KiB ROM) and executes faster.",
          yourTurn: {
            question:
              "Which translator translates an entire high-level source code program in one go and produces a standalone executable file that can run without the translator present?",
            answer: {
              type: "text",
              accept: ["compiler", "a compiler"],
              display: "Compiler",
            },
            solution:
              "A **compiler** translates the whole high-level program into a standalone machine-code executable before execution, unlike an interpreter (line-by-line, no executable) or assembler (assembly language).",
          },
        },
      ],
      keyPoints: [
        "**High-level languages** are portable, English-like, and easy to debug/maintain; **Assembly language** uses mnemonics for fast, low-memory, direct register control.",
        "A **compiler** translates the whole HLL program into a standalone executable and reports all syntax errors at the end.",
        "An **interpreter** translates and runs HLL code **line by line**, halting on the **first error** — ideal during development.",
        "**Prettyprinting** means syntax colour-coding and auto-indentation in an IDE (nothing to do with paper printers!).",
      ],
      whyItWorks:
        "Inside a `FOR` loop that repeats `1,000,000` times, an **interpreter** re-analyses and translates the loop body every iteration, whereas a **compiler** translates that loop into native CPU binary instructions **once** ahead of time — which is why compiled code runs dramatically faster in production.",
      strategies: [
        "When comparing Compiler vs Interpreter for 4 marks, pair each point symmetrically: **Whole program vs Line-by-line**, **Executable created vs No executable**, **All errors listed at end vs Stops at first error**, **No translator needed to run vs Interpreter needed every run**.",
      ],
      thinkDeeper:
        "If line 50 of a 100-line Python script contains a syntax error inside an `IF` branch, will a **compiler** catch it before running line 1? What happens under a pure line-by-line **interpreter**?",
    },
    {
      id: "internet-web-protocols",
      heading: "The Internet, WWW, URLs, HTTP/HTTPS, DNS & Cookies",
      discovery: {
        problem:
          "Routers on the Internet only route packets to numerical IP addresses like `203.0.113.42`, yet humans type memorable names like `https://www.examhub.org/cs/notes.html`. How does your web browser turn that text string into a secure, padlock-protected web page on your screen?",
        idea:
          "First, your browser asks a **Domain Name System (DNS) server** to look up `www.examhub.org` in its database and return the matching **IP address** `203.0.113.42`. Next, because the protocol is `https`, the browser and web server perform an **SSL/TLS handshake** using a **digital certificate** before sending encrypted **HTML** back for the browser to render!",
      },
      body:
        "### The Internet vs The World Wide Web (WWW)\n\n" +
        "Never confuse these two on CIE 0478:\n" +
        "- **The Internet** is the **global infrastructure of interconnected physical networks** (routers, switches, fibre-optic cables, satellites, servers) communicating via TCP/IP.\n" +
        "- **The World Wide Web (WWW)** is the **collection of web pages, documents and multimedia resources** stored on web servers and accessed *over* the Internet using **HTTP / HTTPS**.\n\n" +
        "### Anatomy of a Uniform Resource Locator (URL)\n\n" +
        "A **URL** is the text-based address typed into a browser's address bar:\n\n" +
        "`https://www.cambridgeinternational.org/programmes/igcse.html`\n\n" +
        "1. **Protocol**: `https` (rules governing data transfer — here encrypted HTTP).\n" +
        "2. **Domain name** (web server name): `www.cambridgeinternational.org`.\n" +
        "3. **File path / web page filename**: `/programmes/igcse.html`.\n\n" +
        "### Functions of a Web Browser\n\n" +
        "A **web browser** is **application software** that:\n" +
        "- Interprets and **renders HTML** (plus CSS and JavaScript) to display web pages visually.\n" +
        "- Provides navigation controls (back, forward, refresh, **address bar**, **multiple tabs**).\n" +
        "- Stores **bookmarks / favourites** and **user browsing history**.\n" +
        "- Stores and manages **cookies**.\n\n" +
        "### Step-by-Step: DNS Lookup & HTTPS (SSL/TLS) Page Retrieval\n\n" +
        "Memorise this exact 6-step CIE sequence for 5–6 mark Paper 1 questions:\n" +
        "1. User enters the **URL** into the web browser; the browser parses the **domain name** and sends it to the nearest **DNS (Domain Name System) server**.\n" +
        "2. The **DNS server** searches its database index matching domain names to **IP addresses** (if not found locally, it forwards the query to a higher-level DNS server).\n" +
        "3. The DNS server returns the matching **IP address** to the browser.\n" +
        "4. The browser sends an **HTTPS request** to the web server at that IP address and asks the server to identify itself.\n" +
        "5. **SSL/TLS Handshake**: the web server sends back its **digital certificate** (containing its **public key** and Certificate Authority signature). The browser **verifies the certificate is authentic**, and both sides agree on **encrypted session keys**.\n" +
        "6. Encrypted **HTML, CSS and media files** are transmitted from the web server to the browser, which decrypts and **renders the HTML** onto the user's screen.\n\n" +
        "### Session Cookies vs Persistent Cookies\n\n" +
        "A **cookie** is a tiny **packet of text data** (key-value pairs) sent by a web server and stored by the user's web browser — **cookies are NOT programs and cannot act as viruses**.\n\n" +
        "| Feature | Session Cookie | Persistent (Permanent) Cookie |\n" +
        "|---|---|---|\n" +
        "| **Where stored** | Temporary primary memory (**RAM**) | Secondary storage (**SSD / HDD**) |\n" +
        "| **Lifetime** | **Deleted automatically** as soon as the browser is closed or session ends | Remains stored until its **expiry date** is reached or the user **manually deletes** it |\n" +
        "| **Classic CIE Uses** | Holding items in an **online shopping basket** during a single visit (closing the browser empties an unlogged-in basket) | Remembering saved **login usernames**, **language / currency preferences**, and tracking browsing habits for targeted ads |",
      diagram: SVG_DNS_HTTPS,
      diagramCaption:
        "URL breakdown at top; below, the 4-stage dance between Web Browser, DNS Server (Domain → IP), and Web Server (SSL/TLS Digital Certificate + Encrypted HTML).",
      workedExamples: [
        {
          title: "Dissecting a URL & Cookie Behaviour",
          problem:
            "Given the URL `https://shop.tanglinbooks.sg/cart/checkout.html`: (a) identify its three components, and (b) state which type of cookie keeps items in the cart only until the user closes their browser window. [4]",
          steps: [
            "Split before `://`: protocol is `https`.",
            "Take the host between `://` and the first single `/`: domain name is `shop.tanglinbooks.sg`.",
            "Take the directory & file after the domain: path/filename is `/cart/checkout.html`.",
            "Identify temporary RAM-stored cookie deleted on browser close: **session cookie**.",
          ],
          answer:
            "(a) Protocol: https; Domain name: shop.tanglinbooks.sg; Path/filename: /cart/checkout.html. (b) Session cookie.",
          yourTurn: {
            question:
              "In the URL `https://portal.cie-notes.org/revision/paper1.html`, write down ONLY the domain name.",
            answer: {
              type: "text",
              accept: ["portal.cie-notes.org"],
              display: "portal.cie-notes.org",
            },
            solution:
              "`https` is the protocol, `portal.cie-notes.org` is the **domain name**, and `/revision/paper1.html` is the file path and filename.",
          },
        },
      ],
      keyPoints: [
        "**Internet** = physical network infrastructure; **WWW** = web pages accessed over the Internet via HTTP/HTTPS.",
        "**DNS** translates human-readable **domain names** into numerical **IP addresses**.",
        "**HTTPS** uses **SSL/TLS** and a **digital certificate** to authenticate the web server and encrypt all traffic.",
        "**Session cookies** live in **RAM** and vanish when the browser closes; **persistent cookies** stay on **SSD/HDD** until expiry or manual deletion.",
      ],
      whyItWorks:
        "Separating **domain names** from **IP addresses** via DNS means if an organisation moves its website to a brand-new cloud data centre with a different IP address, nobody's bookmarks break — they simply update one row in the DNS record!",
      strategies: [
        "On 6-mark 'Describe how a web page is displayed' questions, hit all 6 checkpoints: **Browser parses URL → DNS server looks up Domain → IP returned → HTTP/HTTPS request sent to Web Server IP → SSL certificate verified (if HTTPS) → Server sends HTML & Browser renders it**.",
      ],
      thinkDeeper:
        "What happens if an attacker corrupts the lookup table on a **DNS server** so `www.mybank.com` points to the attacker's IP address instead of the bank's IP? Which cyber threat is that, and why might **HTTPS digital certificates** still warn the user?",
    },
    {
      id: "cyber-threats-encryption",
      heading: "Cyber Security Threats, Defences & Symmetric/Asymmetric Encryption",
      discovery: {
        problem:
          "Alice wants to send her bank PIN to Bob across public Wi-Fi where Eve is capturing every packet. If Alice locks the message with a single secret key K, how does she get Key K to Bob without Eve intercepting Key K too? How can Bob let the whole world lock messages for him that ONLY Bob can unlock?",
        idea:
          "A single shared key is **symmetric encryption** — fast, but vulnerable to the **key-exchange problem**. **Asymmetric encryption** solves this with a mathematically linked pair: Bob publishes his **Public Key** openly to everyone (even Eve!), Alice encrypts her PIN using **Bob's Public Key**, and **only Bob's secret Private Key** (which never leaves Bob's computer) can decrypt the ciphertext!",
      },
      body:
        "### Cyber Security Threats — Exact CIE 0478 Definitions\n\n" +
        "| Threat | How It Works | Primary Defences |\n" +
        "|---|---|---|\n" +
        "| **Brute-force attack** | Automated trial-and-error software systematically guessing millions of password combinations | Strong complex passwords, **account lockout** after failed attempts, **2FA**, biometrics |\n" +
        "| **Data interception** | Eavesdropping on wired/wireless transmissions using a **packet sniffer** to read packets | **Encryption (SSL/TLS / HTTPS / WPA3)** so intercepted ciphertext is unreadable |\n" +
        "| **DDoS attack** | Malware infects thousands of computers into a **botnet** ('zombies') that flood a web server with simultaneous requests so genuine users are denied access | **Proxy server** (absorbs/filters flood), **firewall**, up-to-date anti-malware |\n" +
        "| **Hacking** | Gaining **unauthorised access** to a computer system or data | **Firewall**, strong authentication, **2FA**, access levels, automatic security updates |\n" +
        "| **Phishing** | Fraudulent **legitimate-looking emails** containing a **link** that tricks the user (**requires clicking**) into visiting a fake site to enter credentials | Check sender address/URL spelling, never click suspicious email links, spam filters |\n" +
        "| **Pharming** | Malicious code installed on a user's device or a **DNS server** that **automatically redirects** a genuine typed URL to a fake website (**no click needed**) | Anti-malware, checking **HTTPS digital certificate** / padlock, trusted DNS servers |\n" +
        "| **Social engineering** | Manipulating human psychology (urgency, fear, authority, curiosity — e.g. dropped USB baiting, pretexting calls, phishing) to trick users into revealing secrets | Staff cyber-awareness training, strict verification protocols, two-factor authentication |\n\n" +
        "### The Six CIE Malware Types (Never Blur Them!)\n\n" +
        "1. **Virus**: malicious code that **attaches itself to a legitimate host file/program** and requires **human action** (opening/running the host file) to execute and replicate; deletes or corrupts files.\n" +
        "2. **Worm**: **standalone** self-replicating malware that spreads **automatically across networks** exploiting vulnerabilities **without needing a host file or human action**, clogging network bandwidth.\n" +
        "3. **Trojan horse**: malware **disguised as legitimate/useful software** (e.g. a free game) that tricks the user into installing it; does not self-replicate, opens a secret backdoor or installs spyware.\n" +
        "4. **Spyware / Keylogger**: secretly monitors user activity and **records keystrokes** to steal passwords/card details, transmitting logs to the attacker. *(Classic CIE defence against keyloggers: **on-screen virtual keyboard / drop-down character boxes**!)*\n" +
        "5. **Ransomware**: **encrypts** the victim's files and demands a ransom payment for the decryption key. *(Best recovery defence: regular **offline backups**!)*\n" +
        "6. **Adware**: floods the device with unwanted pop-up advertisements, degrading performance and potentially linking to unsafe sites.\n\n" +
        "### Firewalls, Proxy Servers & Multi-Layered Defences\n\n" +
        "- **Firewall** (software or hardware boundary between a user's device/LAN and an external network): examines incoming and outgoing traffic against preset **criteria/rules**, **blocks unauthorised traffic/ports**, maintains **allowlists/blocklists** of IP addresses, and logs connection attempts.\n" +
        "- **Proxy Server** (intermediary between client browsers and web servers): **caches** frequently requested web pages for faster loading, **hides internal user IP addresses**, filters access to blocked websites, and **screens/absorbs DDoS floods** before they reach the main web server.\n" +
        "- **Two-Factor Authentication (2FA)** combines two independent factors: something you **know** (password/PIN) + something you **have** (one-time code sent to phone / hardware token) or something you **are** (**biometrics**: fingerprint, iris/retina, face, voice).\n" +
        "- **Access Levels** restrict each user account (e.g. student vs teacher vs network admin) to **only the data and actions required for their role**, limiting damage from accidental deletion or a hacked account.\n\n" +
        "### Symmetric vs Asymmetric Encryption\n\n" +
        "**Encryption** uses an algorithm and a key to scramble readable **plaintext** into unreadable **ciphertext**. *(CRITICAL CIE RULE: Encryption does **NOT** stop data from being intercepted or stolen — it makes intercepted data **meaningless/unreadable** without the decryption key!)*\n\n" +
        "- **Symmetric Encryption**: uses **one shared secret key** to both encrypt plaintext and decrypt ciphertext. Very fast for bulk data, **but** suffers from the **key-exchange problem** (transmitting the secret key to the recipient risks interception).\n" +
        "- **Asymmetric Encryption**: uses a mathematically linked **Public Key** (shared openly) and **Private Key** (kept secret by its owner, never transmitted).\n" +
        "  - To send a confidential message to **Bob**: Alice encrypts the plaintext with **Bob's Public Key** → only **Bob's Private Key** can decrypt the ciphertext!",
      diagram: SVG_ENCRYPTION,
      diagramCaption:
        "Top: Symmetric encryption shares a single key K (vulnerable during key exchange). Bottom: Asymmetric encryption encrypts with Bob's Public Key so only Bob's Private Key can decrypt.",
      workedExamples: [
        {
          title: "Asymmetric Key Direction — Who Uses Which Key?",
          problem:
            "Priya wants to email a confidential medical report to Dr Chen using asymmetric encryption so nobody else can read it. State exactly which key Priya uses to encrypt the report and which key Dr Chen uses to decrypt it. [2]",
          steps: [
            "Who is the **recipient** who must be the ONLY person able to unlock the message? **Dr Chen**.",
            "Therefore Priya encrypts the plaintext using **Dr Chen's Public Key** (which Dr Chen shares openly).",
            "Dr Chen decrypts the ciphertext using **Dr Chen's Private Key** (which only Dr Chen possesses).",
          ],
          answer:
            "Priya encrypts using Dr Chen's Public Key; Dr Chen decrypts using Dr Chen's Private Key.",
          yourTurn: {
            question:
              "Which cyber threat installs malicious code on a user's computer or DNS server to automatically redirect a genuine typed URL to a fake website without the user clicking any link?",
            answer: {
              type: "text",
              accept: ["pharming"],
              display: "Pharming",
            },
            solution:
              "**Pharming** redirects genuine URLs via infected host files or poisoned DNS servers with zero link-clicking required (whereas **phishing** relies on fraudulent emails containing links).",
          },
        },
      ],
      keyPoints: [
        "**Phishing** = fake email + user clicks link; **Pharming** = malicious code on device/DNS server + automatic redirect without clicking.",
        "**Virus** needs a host file and human action; **Worm** self-replicates standalone across networks; **Trojan** disguises itself as legitimate software.",
        "**Encryption** does NOT prevent interception or hacking — it renders intercepted data **meaningless ciphertext**.",
        "In **asymmetric encryption**, encrypt confidential messages with the **recipient's Public Key** and decrypt with the **recipient's Private Key**.",
      ],
      whyItWorks:
        "Modern HTTPS actually combines **both** encryption types! During the TLS handshake, **asymmetric encryption** safely exchanges a fresh random **symmetric session key** without any eavesdropper learning it; then fast **symmetric encryption** encrypts all the heavy web page and video packets for the rest of your session.",
      strategies: [
        "Always check **WHOSE** key is used in asymmetric questions: never just write 'public key' and 'private key' — specify **recipient's Public Key** to encrypt and **recipient's Private Key** to decrypt!",
      ],
      thinkDeeper:
        "Why does an **on-screen virtual keyboard** (where you click digits in randomised positions with a mouse) defeat a hardware or software **keylogger**, whereas typing a 20-character password on a physical keyboard does not?",
    },
    {
      id: "automated-robotics-ai",
      heading: "Automated Systems, Robotics & Artificial Intelligence",
      discovery: {
        problem:
          "Compare two hospital tools: System A diagnoses rare blood disorders by asking a doctor Yes/No symptom questions and applying `IF...THEN` medical rules written by haematologists. System B scans 500,000 X-ray images and gradually adjusts its own internal weights so its tumour-detection accuracy climbs from 78% to 97% without anyone rewriting its code. Both are AI — what is the fundamental architectural difference?",
        idea:
          "System A is a classic **Expert System** driven by fixed human-authored facts (**Knowledge Base**) and `IF...THEN` rules (**Rule Base**) processed by an **Inference Engine**. System B uses **Machine Learning (ML)** — algorithms trained on data that **automatically adapt their own models/parameters from experience** to improve performance without explicit reprogramming!",
      },
      body:
        "### Automated Systems (Sensors + Microprocessor + Actuators)\n\n" +
        "An **automated system** combines hardware and software to operate without continuous human intervention across industry, transport (autonomous trains/braking), agriculture (greenhouse irrigation), weather stations, gaming, smart lighting and scientific labs:\n\n" +
        "1. **Sensors** continuously measure physical variables (temperature, moisture, infra-red, pressure, light, proximity) and an **ADC** converts analogue signals into digital data.\n" +
        "2. A **microprocessor** compares the digital reading against **stored preset values / rules**.\n" +
        "3. If action is required, signals (via a **DAC** if needed) drive **actuators** (motors, solenoids, valves, heaters, relays) to alter the physical environment in a continuous **feedback loop**.\n\n" +
        "| Advantages of Automated Systems | Disadvantages of Automated Systems |\n" +
        "|---|---|\n" +
        "| Faster reaction times than humans (critical for emergency braking) | High initial capital cost to design, buy, install and test |\n" +
        "| Operates **24/7** consistently without fatigue or distraction | Expensive specialist maintenance and repair |\n" +
        "| Keeps humans safe out of **hazardous environments** (nuclear, deep sea, chemical plants) | Cannot easily cope with **unusual/unforeseen situations** outside programmed rules |\n" +
        "| Optimises resource efficiency (e.g. exact water/fertiliser dosing) | Vulnerable to **cyberattacks** or sensor faults causing cascading errors |\n\n" +
        "### Robotics — The 3 Mandatory CIE Characteristics\n\n" +
        "Robotics is the design, construction and operation of robots. To qualify as a **robot** on CIE 0478, a machine MUST possess all **three characteristics**:\n" +
        "1. **Mechanical structure / framework** (gears, motors, actuators, Pistons or robotic limbs to interact physically with the world).\n" +
        "2. **Electrical components** (sensors, microprocessors, power supply, control circuitry).\n" +
        "3. **Programmable** (controlled by a stored/modifiable program to execute tasks).\n\n" +
        "*(Exam Trap: A pure software chatbot or spam filter is **NOT** a physical robot because it lacks a mechanical structure!)*\n\n" +
        "- **Independent (autonomous) robots** operate completely without direct human control (e.g. autonomous warehouserover or Mars rover adapting via sensors/AI).\n" +
        "- **Dependent robots** have a human directly interfacing with or guiding them (e.g. a surgeon operating a precision robotic surgical arm, or a cobot assisting a human worker on an assembly line).\n\n" +
        "### Artificial Intelligence (AI): Expert Systems vs Machine Learning\n\n" +
        "**AI** is the simulation of intelligent human behaviour (reasoning, learning, problem-solving, pattern recognition) by a computer:\n" +
        "- **Narrow AI**: outperforms humans in **one specific task** (e.g. playing chess, facial recognition).\n" +
        "- **General AI**: matches human performance across a wide range of intellectual tasks.\n" +
        "- **Strong AI**: surpasses human intelligence across cognitive domains.\n\n" +
        "#### 1. Expert Systems (4 Core Components)\n" +
        "An **Expert System** mimics the decision-making of a human specialist (medical diagnosis, car fault diagnosis, mineral prospecting, plant identification, tax/financial advice):\n" +
        "- **User Interface**: allows the user to communicate with the system (poses Yes/No or multiple-choice prompts and displays diagnoses/explanations).\n" +
        "- **Inference Engine**: the **reasoning brain** — applies logical rules from the **rule base** to facts in the **knowledge base** and the user's answers to deduce conclusions.\n" +
        "- **Knowledge Base**: database of **domain facts and expert knowledge** collected from human specialists.\n" +
        "- **Rule Base**: set of **inference rules** (structured as `IF ... THEN ...` statements) used by the inference engine.\n\n" +
        "#### 2. Machine Learning (ML)\n" +
        "**Machine Learning** is a subset of AI where algorithms are **trained on large datasets** (labelled or unlabelled) and **can automatically adapt their own processes/models to improve accuracy over time from experience without being explicitly reprogrammed**.\n" +
        "- Classic CIE examples: **email spam filters** learning new spam patterns, **bank fraud detection** flagging unusual spending, **search engine ranking**, and **shopping/streaming recommendation engines**.",
      diagram: SVG_EXPERT_AI,
      diagramCaption:
        "Expert System 4-part diagram: User Interface ↔ Inference Engine ↔ Knowledge Base (facts) + Rule Base (IF–THEN rules).",
      workedExamples: [
        {
          title: "Distinguishing Expert Systems Components in Context",
          problem:
            "A mechanic uses an AI car-fault Expert System. Match each item to the exact Expert System component: (a) `IF battery_voltage < 11.5 AND starter_clicks = TRUE THEN faulty_alternator`, (b) a database storing voltage specifications for 400 car models, (c) the processor module that applies the rules to the mechanic's answers to reach a diagnosis. [3]",
          steps: [
            "Item (a) is an `IF ... THEN ...` conditional logic rule → **Rule Base**.",
            "Item (b) is a repository of domain facts/specifications → **Knowledge Base**.",
            "Item (c) is the reasoning mechanism applying the rule base to the knowledge base → **Inference Engine**.",
          ],
          answer:
            "(a) Rule base; (b) Knowledge base; (c) Inference engine.",
          yourTurn: {
            question:
              "Which component of an Expert System acts as the reasoning engine that applies the rules in the rule base to the facts in the knowledge base to deduce a conclusion?",
            answer: {
              type: "text",
              accept: ["inference engine", "the inference engine"],
              display: "Inference engine",
            },
            solution:
              "The **Inference Engine** is the reasoning brain of an Expert System: it queries the **Knowledge Base** using `IF...THEN` rules from the **Rule Base**.",
          },
        },
      ],
      keyPoints: [
        "**Automated systems** link **sensors → microprocessor → actuators** in a feedback loop.",
        "Every **robot** has **three** traits: **mechanical structure**, **electrical components**, and is **programmable**.",
        "An **Expert System** has **four** core components: **User Interface**, **Inference Engine**, **Knowledge Base** (facts), and **Rule Base** (`IF...THEN` rules).",
        "**Machine Learning** adapts its own parameters/models from **training data / experience** without explicit reprogramming.",
      ],
      whyItWorks:
        "Separating the **Inference Engine** (generic logical solver) from the **Knowledge Base & Rule Base** (domain data) means the *exact same* inference engine software can diagnose tropical plant diseases on Monday and troubleshoot jet turbines on Tuesday simply by swapping in a new knowledge base and rule base!",
      strategies: [
        "When asked 'Is X a robot?' on CIE Paper 1, test all 3 boxes explicitly: **Mechanical framework? Electrical sensors/actuators? Programmable?** If any box fails (like a pure software AI assistant), explain which characteristic is missing!",
      ],
      thinkDeeper:
        "Why might a hospital prefer a transparent **Expert System** (which can print the exact `IF...THEN` rule chain behind a drug dosage) over an opaque deep **Machine Learning** model, whereas an email provider prefers **Machine Learning** for catching spam?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "System Software vs Application Software",
        back: "**System software** manages/controls hardware and provides a platform (OS, utilities, drivers, translators). **Application software** performs user tasks (word processor, browser, spreadsheet).",
      },
      {
        front: "Role of Firmware / Bootloader at Startup",
        back: "Stored in non-volatile **ROM**; runs hardware self-checks (POST) when powered on and loads the **Operating System kernel from secondary storage into RAM**.",
      },
      {
        front: "5-Step CPU Interrupt & ISR Sequence",
        back: "1. Interrupt arrives → 2. CPU finishes **current FDE cycle** & checks **priority** → 3. Saves registers (`PC`, `ACC`) to **stack in RAM** → 4. Loads & runs **ISR** → 5. Restores registers from stack.",
      },
      {
        front: "Compiler vs Interpreter (4 Contrasts)",
        back: "**Compiler**: translates whole HLL program at once, creates standalone executable, lists all errors at end, runs without compiler. **Interpreter**: line-by-line, no executable, halts at first error, needed every run.",
      },
      {
        front: "7 CIE IDE Features",
        back: "Code editor, Translator (compiler/interpreter), Runtime environment with debugger, Error diagnostics, Auto-completion, Auto-correction, **Prettyprinting** (colour-coding & auto-indent).",
      },
      {
        front: "Internet vs World Wide Web (WWW)",
        back: "**Internet** = global physical network infrastructure (routers, cables, servers). **WWW** = collection of web pages/resources accessed *over* the Internet via HTTP/HTTPS.",
      },
      {
        front: "Role of DNS (Domain Name System)",
        back: "Looks up a human-readable **domain name** (e.g. `www.cie.org.uk`) in a distributed database to return its matching numerical **IP address**.",
      },
      {
        front: "Session Cookie vs Persistent Cookie",
        back: "**Session cookie**: stored in **RAM**, deleted when browser closes (e.g. active shopping cart). **Persistent cookie**: stored on **SSD/HDD** until expiry/manual deletion (saved logins, preferences, tracking).",
      },
      {
        front: "Phishing vs Pharming",
        back: "**Phishing**: fake legitimate-looking **email** containing a **link** the user must click. **Pharming**: malicious code on device or **DNS server** that **automatically redirects** a genuine URL to a fake site.",
      },
      {
        front: "Virus vs Worm vs Trojan Horse",
        back: "**Virus**: attaches to a host file & needs human action to run/replicate. **Worm**: standalone, self-replicates automatically across networks. **Trojan**: disguised as legitimate software, doesn't self-replicate.",
      },
      {
        front: "Symmetric vs Asymmetric Encryption",
        back: "**Symmetric**: same single secret key encrypts & decrypts (key-exchange risk). **Asymmetric**: mathematically linked pair — encrypt confidential message with **recipient's Public Key**, decrypt with **recipient's Private Key**.",
      },
      {
        front: "3 Defining Characteristics of a Robot",
        back: "1. **Mechanical structure / framework** (motors, gears, actuators); 2. **Electrical components** (sensors, microprocessor, power); 3. **Programmable**.",
      },
      {
        front: "4 Core Components of an AI Expert System",
        back: "1. **User Interface**; 2. **Inference Engine** (reasoning brain); 3. **Knowledge Base** (repository of expert facts); 4. **Rule Base** (`IF...THEN` inference rules).",
      },
      {
        front: "Machine Learning (ML) Definition",
        back: "Subset of AI where algorithms trained on data **automatically adapt their own models/processes from experience** to improve performance without explicit reprogramming.",
      },
    ],
    mustKnow: [
      "Distinguish system software from application software using generic software types (never brand names!) and explain how ROM firmware boots the OS into RAM.",
      "Explain six core Operating System functions (HCI: CLI vs GUI, memory management, multitasking, peripheral/driver management, file management, user security).",
      "Trace hardware and software interrupts step-by-step through FDE completion, priority check, saving registers to a stack, running the ISR, and restoring registers.",
      "Compare High-Level Languages, Assembly Language (Assembler), and Machine Code, plus contrast Compilers vs Interpreters across execution, executables, and error reporting.",
      "Name and explain IDE features including code editors, runtime debuggers, error diagnostics, auto-completion, and prettyprinting.",
      "Break any URL into protocol, domain name, and file path, and describe the full DNS lookup + HTTPS (SSL/TLS digital certificate) handshake.",
      "Contrast Session vs Persistent cookies, Phishing vs Pharming, Virus vs Worm vs Trojan vs Spyware vs Ransomware, Firewalls vs Proxy servers, and Symmetric vs Asymmetric encryption.",
      "Explain automated systems (sensors + microprocessor + actuators), the 3 characteristics of robots, the 4 components of Expert Systems, and how Machine Learning adapts from data.",
    ],
    misconceptions: [
      {
        wrong: "Never Write ❌: 'Encryption stops hackers from intercepting data packets on Wi-Fi.'",
        right: "Write Instead ✅: 'Encryption does NOT prevent interception; it scrambles plaintext into meaningless ciphertext so intercepted data cannot be understood without the decryption key.'",
      },
      {
        wrong: "Never Write ❌: 'Cookies are small spyware programs that can infect your hard drive with viruses.'",
        right: "Write Instead ✅: 'Cookies are plain text files storing key-value data (preferences, session IDs); they are not executable code and cannot run as viruses.'",
      },
      {
        wrong: "Never Write ❌: 'The Internet and the World Wide Web mean the same thing.'",
        right: "Write Instead ✅: 'The Internet is the global physical network infrastructure of routers, cables and servers, whereas the WWW is the collection of web pages accessed over the Internet via HTTP/HTTPS.'",
      },
      {
        wrong: "Never Write ❌: 'Prettyprinting in an IDE prints neat source code onto paper using a laser printer.'",
        right: "Write Instead ✅: 'Prettyprinting formats source code on screen using colour-coded syntax keywords and automatic indentation to improve readability.'",
      },
      {
        wrong: "Never Write ❌: 'Alice encrypts a confidential message to Bob using Alice's private key, and Bob decrypts it with Alice's public key.'",
        right: "Write Instead ✅: 'For confidentiality, Alice encrypts the plaintext using BOB'S PUBLIC KEY so that ONLY BOB'S PRIVATE KEY can decrypt it (if encrypted with Alice's private key, anyone with Alice's public key could read it!).'",
      },
      {
        wrong: "Never Write ❌: 'ChatGPT or an email spam filter on a server is an example of a robot.'",
        right: "Write Instead ✅: 'Pure software AI is NOT a robot because a robot must have a physical mechanical structure/framework with actuators alongside electrical components and programmability.'",
      },
      {
        wrong: "Never Write ❌: 'Examples of application software are Microsoft Word, Excel, and Google Chrome.'",
        right: "Write Instead ✅: 'CIE 0478 mark schemes penalise brand names — always write generic categories: word processor, spreadsheet software, web browser.'",
      },
    ],
    examMistakes: [
      "Saying the CPU pauses *immediately mid-instruction* when an interrupt arrives — it ALWAYS finishes its **current Fetch–Decode–Execute cycle** first!",
      "Mixing up **Phishing** (fake email requiring user to click a link) and **Pharming** (malicious code on user computer or DNS server causing automatic redirection without clicking).",
      "Forgetting to specify **whose** public/private key is used in asymmetric encryption — always name the **recipient's public key** (encrypt) and **recipient's private key** (decrypt).",
      "Confusing **Knowledge Base** (repository of expert facts) with **Rule Base** (`IF...THEN` inference rules) or **Inference Engine** (the reasoning brain applying rules to facts).",
      "Calling a **Worm** a virus — remember a **Virus** attaches to a host program and needs human activation, while a **Worm** is standalone and self-replicates automatically across networks.",
      "Forgetting that **Proxy servers** (not just firewalls) specifically cache web pages and absorb/filter **DDoS** traffic before it overwhelms a web server.",
    ],
    mnemonics: [
      {
        topic: "Phishing vs Pharming",
        device: "PHISHING casts a bait EMAIL hook you must bite (click); PHARMING poisons the SOIL (DNS/device) so every seed redirects automatically!",
        explanation: "Links Phishing to fishing-hook emails and Pharming to poisoned DNS ground requiring zero clicks.",
      },
      {
        topic: "Expert System 4 Components",
        device: "U-I-K-R → 'Users Inquire, Knowledge & Rules reply!'",
        explanation: "**U**ser Interface, **I**nference Engine, **K**nowledge Base (facts), **R**ule Base (`IF...THEN` rules).",
      },
      {
        topic: "CPU Interrupt Handling",
        device: "F-P-S-I-R → 'Finish cycle, Priority check, Stack registers, ISR runs, Restore registers'",
        explanation: "Hits all 5 mark points of a CIE 0478 interrupt handling question in exact chronological order.",
      },
    ],
    realWorld: [
      {
        title: "HTTPS Banking & Online Checkout",
        emoji: "🔒",
        detail: "Every padlock icon in your browser runs a DNS lookup followed by an asymmetric TLS certificate check to agree a fast symmetric session key.",
      },
      {
        title: "Keylogger-Proof Banking Drop-Downs",
        emoji: "⌨️",
        detail: "Online banks ask for 'the 2nd and 5th characters of your passphrase via drop-down menus or an on-screen keyboard' specifically to defeat keylogging spyware.",
      },
      {
        title: "Autonomous Warehouse Fulfilment Robots",
        emoji: "🤖",
        detail: "Modern fulfilment centres use independent robots with mechanical drive wheels, LiDAR/infrared proximity sensors, and pathfinding code to bring shelves to packers.",
      },
      {
        title: "Clinical Diagnostic Expert Systems & ML Radiology",
        emoji: "🩺",
        detail: "Hospitals pair rule-based triage Expert Systems (auditable `IF-THEN` checklists) with Machine Learning models trained on millions of retinal and chest scans.",
      },
    ],
    videos: [
      {
        title: "CIE IGCSE CS 0478 Chapter 4: Software, OS, Interrupts & Translators",
        channel: "Craig'n'Dave / IGCSE CS Revision",
        url: "https://www.youtube.com/results?search_query=CIE+IGCSE+Computer+Science+0478+software+interrupts+compilers+interpreters",
      },
      {
        title: "CIE IGCSE CS 0478 Chapter 5: DNS, HTTPS, Cyber Security & Encryption",
        channel: "IGCSE Computer Science",
        url: "https://www.youtube.com/results?search_query=CIE+IGCSE+Computer+Science+0478+DNS+HTTPS+phishing+pharming+encryption",
      },
      {
        title: "CIE IGCSE CS 0478 Chapter 6: Automated Systems, Robotics & AI Expert Systems",
        channel: "IGCSE Computer Science",
        url: "https://www.youtube.com/results?search_query=CIE+IGCSE+Computer+Science+0478+automated+systems+robotics+expert+systems+machine+learning",
      },
    ],
    formulas: [
      {
        name: "URL Structure",
        formula: "protocol://domain_name/path/filename",
        note: "Example: https (protocol), www.cie.org.uk (domain name), /cs/syllabus.pdf (path/filename).",
      },
      {
        name: "Interrupt Handling (ISR) Sequence",
        formula: "Finish FDE → Check Priority → Save Registers to Stack → Run ISR → Restore Registers",
        note: "CPU never abandons an instruction halfway through a Fetch–Decode–Execute cycle.",
      },
      {
        name: "Compiler vs Interpreter Rule",
        formula: "Compiler = Whole program → Executable; Interpreter = Line-by-line → Stops at 1st error",
        note: "Use an interpreter while debugging in an IDE; compile to distribute finished software without source code.",
      },
      {
        name: "Asymmetric Confidentiality Rule",
        formula: "Encrypt with RECIPIENT'S Public Key → Decrypt with RECIPIENT'S Private Key",
        note: "Public key is shared openly; Private key never leaves the recipient's device (solves key-exchange problem).",
      },
      {
        name: "Encryption Mark-Scheme Trap",
        formula: "Plaintext + Key → Ciphertext (Unreadable, NOT Un-interceptable!)",
        note: "Never write that encryption stops hacking or interception — it stops intercepted data being understood.",
      },
      {
        name: "Phishing vs Pharming Distinction",
        formula: "Phishing = Fake Email + User Clicks Link | Pharming = Infected Device/DNS + Auto-Redirect",
        note: "Both lead to bogus websites harvesting personal data, but Pharming requires zero email clicks.",
      },
      {
        name: "3 Mandatory Robot Characteristics",
        formula: "Robot = Mechanical Structure + Electrical Components + Programmable",
        note: "Pure software chatbots lack a mechanical framework and actuators, so they are NOT robots.",
      },
      {
        name: "Expert System 4 Core Parts",
        formula: "User Interface + Inference Engine + Knowledge Base (Facts) + Rule Base (IF–THEN)",
        note: "Contrast with Machine Learning, which adapts its own model weights from training data over time.",
      },
    ],
  },
};
