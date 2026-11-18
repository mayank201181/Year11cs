import type { TopicExtras } from "../types.ts";

const SVG_MALWARE_MAP =
  '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Visual decision tree distinguishing CIE 0478 Virus, Worm, Trojan, Spyware, Ransomware, and Adware">' +
  '<rect x="0" y="0" width="560" height="220" rx="14" fill="#f8fafc"/>' +
  '<text x="280" y="22" font-family="sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">CIE 0478 Malware Quick-ID Matrix</text>' +
  '<rect x="16" y="38" width="170" height="78" rx="9" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>' +
  '<text x="101" y="57" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#991b1b" text-anchor="middle">Virus</text>' +
  '<text x="101" y="75" font-family="sans-serif" font-size="9.5" fill="#7f1d1d" text-anchor="middle">• Needs host file</text>' +
  '<text x="101" y="90" font-family="sans-serif" font-size="9.5" fill="#7f1d1d" text-anchor="middle">• Needs human action</text>' +
  '<text x="101" y="105" font-family="sans-serif" font-size="9.5" fill="#7f1d1d" text-anchor="middle">• Corrupts/deletes files</text>' +
  '<rect x="195" y="38" width="170" height="78" rx="9" fill="#ffedd5" stroke="#ea580c" stroke-width="1.6"/>' +
  '<text x="280" y="57" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#9a3412" text-anchor="middle">Worm</text>' +
  '<text x="280" y="75" font-family="sans-serif" font-size="9.5" fill="#7c2d12" text-anchor="middle">• Standalone (NO host)</text>' +
  '<text x="280" y="90" font-family="sans-serif" font-size="9.5" fill="#7c2d12" text-anchor="middle">• Auto-spreads on LAN/WAN</text>' +
  '<text x="280" y="105" font-family="sans-serif" font-size="9.5" fill="#7c2d12" text-anchor="middle">• Clogs network bandwidth</text>' +
  '<rect x="374" y="38" width="170" height="78" rx="9" fill="#fef3c7" stroke="#d97706" stroke-width="1.6"/>' +
  '<text x="459" y="57" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#78350f" text-anchor="middle">Trojan Horse</text>' +
  '<text x="459" y="75" font-family="sans-serif" font-size="9.5" fill="#92400e" text-anchor="middle">• Disguised as legit app</text>' +
  '<text x="459" y="90" font-family="sans-serif" font-size="9.5" fill="#92400e" text-anchor="middle">• Does NOT self-replicate</text>' +
  '<text x="459" y="105" font-family="sans-serif" font-size="9.5" fill="#92400e" text-anchor="middle">• Opens hidden backdoor</text>' +
  '<rect x="16" y="128" width="170" height="78" rx="9" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.6"/>' +
  '<text x="101" y="147" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#5b21b6" text-anchor="middle">Spyware / Keylogger</text>' +
  '<text x="101" y="165" font-family="sans-serif" font-size="9.5" fill="#4c1d95" text-anchor="middle">• Records keystrokes</text>' +
  '<text x="101" y="180" font-family="sans-serif" font-size="9.5" fill="#4c1d95" text-anchor="middle">• Steals logins &amp; PINs</text>' +
  '<text x="101" y="195" font-family="sans-serif" font-size="9.5" fill="#4c1d95" text-anchor="middle">• Beat w/ virtual keyboard</text>' +
  '<rect x="195" y="128" width="170" height="78" rx="9" fill="#fce7f3" stroke="#db2777" stroke-width="1.6"/>' +
  '<text x="280" y="147" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#9d174d" text-anchor="middle">Ransomware</text>' +
  '<text x="280" y="165" font-family="sans-serif" font-size="9.5" fill="#831843" text-anchor="middle">• Encrypts victim files</text>' +
  '<text x="280" y="180" font-family="sans-serif" font-size="9.5" fill="#831843" text-anchor="middle">• Demands ransom for key</text>' +
  '<text x="280" y="195" font-family="sans-serif" font-size="9.5" fill="#831843" text-anchor="middle">• Beat w/ offline backups</text>' +
  '<rect x="374" y="128" width="170" height="78" rx="9" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.6"/>' +
  '<text x="459" y="147" font-family="sans-serif" font-size="11.5" font-weight="700" fill="#075985" text-anchor="middle">Adware</text>' +
  '<text x="459" y="165" font-family="sans-serif" font-size="9.5" fill="#0c4a6e" text-anchor="middle">• Floods unwanted pop-ups</text>' +
  '<text x="459" y="180" font-family="sans-serif" font-size="9.5" fill="#0c4a6e" text-anchor="middle">• Slows browser/system</text>' +
  '<text x="459" y="195" font-family="sans-serif" font-size="9.5" fill="#0c4a6e" text-anchor="middle">• May link to shady sites</text>' +
  "</svg>";

const SVG_AUTO_LOOP =
  '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Automated system closed feedback loop from Sensors through ADC and Microprocessor to DAC and Actuators">' +
  '<rect x="0" y="0" width="560" height="220" rx="14" fill="#f8fafc"/>' +
  '<text x="280" y="24" font-family="sans-serif" font-size="13" font-weight="700" fill="#0f172a" text-anchor="middle">Automated System Closed-Loop Feedback</text>' +
  '<rect x="20" y="64" width="108" height="62" rx="9" fill="#dbeafe" stroke="#2563eb" stroke-width="1.8"/>' +
  '<text x="74" y="90" font-family="sans-serif" font-size="11" font-weight="700" fill="#1e3a8a" text-anchor="middle">Sensors</text>' +
  '<text x="74" y="108" font-family="sans-serif" font-size="9.5" fill="#1e40af" text-anchor="middle">Analogue input</text>' +
  '<line x1="128" y1="95" x2="152" y2="95" stroke="#334155" stroke-width="1.8"/>' +
  '<rect x="152" y="74" width="56" height="42" rx="7" fill="#fef3c7" stroke="#d97706" stroke-width="1.6"/>' +
  '<text x="180" y="99" font-family="sans-serif" font-size="11" font-weight="700" fill="#78350f" text-anchor="middle">ADC</text>' +
  '<line x1="208" y1="95" x2="232" y2="95" stroke="#334155" stroke-width="1.8"/>' +
  '<rect x="232" y="58" width="116" height="74" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>' +
  '<text x="290" y="84" font-family="sans-serif" font-size="11" font-weight="700" fill="#4c1d95" text-anchor="middle">Microprocessor</text>' +
  '<text x="290" y="101" font-family="sans-serif" font-size="9" fill="#5b21b6" text-anchor="middle">Compares reading</text>' +
  '<text x="290" y="115" font-family="sans-serif" font-size="9" fill="#5b21b6" text-anchor="middle">vs stored preset</text>' +
  '<line x1="348" y1="95" x2="372" y2="95" stroke="#334155" stroke-width="1.8"/>' +
  '<rect x="372" y="74" width="56" height="42" rx="7" fill="#fef3c7" stroke="#d97706" stroke-width="1.6"/>' +
  '<text x="400" y="99" font-family="sans-serif" font-size="11" font-weight="700" fill="#78350f" text-anchor="middle">DAC</text>' +
  '<line x1="428" y1="95" x2="452" y2="95" stroke="#334155" stroke-width="1.8"/>' +
  '<rect x="452" y="64" width="88" height="62" rx="9" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/>' +
  '<text x="496" y="90" font-family="sans-serif" font-size="11" font-weight="700" fill="#14532d" text-anchor="middle">Actuators</text>' +
  '<text x="496" y="108" font-family="sans-serif" font-size="9.5" fill="#166534" text-anchor="middle">Motor / Valve</text>' +
  '<path d="M 496 126 L 496 178 L 74 178 L 74 126" fill="none" stroke="#059669" stroke-width="2" stroke-dasharray="6 4"/>' +
  '<text x="285" y="196" font-family="sans-serif" font-size="10" font-weight="700" fill="#065f46" text-anchor="middle">← Physical change alters environment, immediately re-measured by Sensors ←</text>' +
  "</svg>";

export const extras: TopicExtras = {
  hook:
    "Every time you tap a padlock-protected URL, over a dozen invisible defenders leap into action in under 100 milliseconds: ROM firmware has already booted your OS, device drivers read your touchscreen interrupt, DNS translates the domain into an IP, and asymmetric public-key maths exchanges a secret session key right under the nose of Wi-Fi eavesdroppers!",
  didYouKnow: [
    "The very first self-replicating Internet **worm** (the 1988 Morris Worm) was written by graduate student Robert Tappan Morris just to measure the size of the early Internet — a bug made it reinfect machines relentlessly, paralysing ~10% of all Internet-connected computers within 24 hours!",
    "The word **cookie** comes from 'magic cookie', a 1970s Unix programming slang term for an opaque token of data passed between routines — Lou Montulli invented HTTP browser cookies at Netscape in 1994 specifically so online shopping carts wouldn't forget items between clicks.",
    "British cryptographer **Clifford Cocks** secretly invented asymmetric public-key encryption at GCHQ in 1973 — four years *before* Rivest, Shamir and Adleman published RSA in 1977 — but his work stayed classified Top Secret until 1997!",
    "**MYCIN**, built at Stanford in the early 1970s with ~600 `IF...THEN` rules in its Rule Base, was one of the earliest medical **Expert Systems**: in blind evaluations, its blood-infection antibiotic diagnoses outperformed junior hospital doctors!",
    "The word **robot** was coined in 1920 not by an engineer, but by Czech playwright Karel Čapek (and his brother Josef) in the sci-fi play *R.U.R.*, derived from the Slavic word *robota* meaning 'forced labour' or 'drudgery'.",
  ],
  activities: [
    {
      title: "Padlock & Padless Box Asymmetric Key Demo",
      emoji: "🔐",
      materials: [
        "A small box with a hasp",
        "One open padlock (Bob's Public Key) + its single physical key kept in Bob's pocket (Bob's Private Key)",
        "A slip of paper with a secret 4-digit PIN",
      ],
      steps: [
        "Have 'Bob' hand the **open padlock** openly across the table to 'Alice' so everyone in the room ('Eve') sees it.",
        "Alice puts her secret PIN inside the box and snaps Bob's open padlock shut. Challenge Alice and Eve: can *either* of them reopen the padlock without Bob's pocket key?",
        "Pass the locked box back past Eve to Bob, who unlocks it effortlessly with his **Private Key** that never left his pocket.",
      ],
      maths:
        "Snapping an open padlock shut corresponds to encrypting plaintext with **Bob's Public Key** (a one-way trapdoor function easy to compute forward), while turning the physical key corresponds to decrypting ciphertext with **Bob's Private Key** — completely eliminating symmetric encryption's key-exchange vulnerability!",
    },
    {
      title: "Browser DevTools Cookie & TLS Certificate Safari",
      emoji: "🕵️",
      materials: [
        "Any desktop/laptop web browser",
        "A public revision website (e.g. `https://www.wikipedia.org`)",
      ],
      steps: [
        "Click the **padlock / tune icon** next to `https://` in the address bar and open **Connection is secure → Certificate is valid** to inspect the Certificate Authority signature and the server's real **Public Key**.",
        "Open Developer Tools (**Application / Storage → Cookies**) and compare rows whose `Expires / Max-Age` column says **`Session`** (RAM-only, wiped on browser close) against rows carrying a future **2027 expiry date** (**Persistent** cookies on SSD).",
      ],
      maths:
        "Maps directly to CIE 0478 Section 5.1 & 5.3: seeing `Session` vs an explicit `Expires` timestamp makes the RAM vs Secondary Storage distinction unforgettable.",
    },
  ],
  bonusDiagrams: [
    {
      title: "CIE 0478 Six Malware Types at a Glance",
      svg: SVG_MALWARE_MAP,
      caption:
        "Memorise the exact discriminator for each of the 6 malware types tested on Paper 1.",
    },
    {
      title: "Closed-Loop Automated System Architecture",
      svg: SVG_AUTO_LOOP,
      caption:
        "Sensors + ADC → Microprocessor (compares against preset) → DAC + Actuators → physical feedback.",
    },
  ],
  history: {
    title: "Grace Hopper & The Birth of the First Compiler (1952)",
    story:
      "In the late 1940s, programming meant hand-translating flowcharts into raw octal or binary machine code and flipping switches — one mistyped bit crashed everything. Rear Admiral **Grace Hopper** realised computers themselves could translate human-readable mathematical and English keywords into binary machine code. In 1952 she built the **A-0 System** (coining the term *compiler*), though sceptics insisted 'computers can only do arithmetic, they cannot write programs!' Her breakthrough led directly to **FLOW-MATIC** and **COBOL**, establishing the entire modern hierarchy of portable High-Level Languages, Compilers, Interpreters, and IDEs you study in CIE 0478.",
  },
};
