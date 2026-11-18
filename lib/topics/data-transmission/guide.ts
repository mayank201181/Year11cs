import type { TopicGuide } from "../../types.ts";

const SVG_PACKET =
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Anatomy of a data packet showing Header, Payload and Trailer, plus packet switching across routers">' +
  '<rect x="8" y="8" width="544" height="244" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="280" y="28" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Anatomy of a Data Packet &amp; Router Hop Paths</text>' +
  '<rect x="24" y="40" width="168" height="72" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>' +
  '<text x="108" y="58" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">HEADER</text>' +
  '<text x="108" y="74" text-anchor="middle" font-size="10" fill="var(--ink)">Sender IP + Dest IP</text>' +
  '<text x="108" y="89" text-anchor="middle" font-size="10" fill="var(--ink)">Packet # (e.g. 2 of 4)</text>' +
  '<text x="108" y="104" text-anchor="middle" font-size="10" fill="var(--ink-2)">Hop Counter (TTL)</text>' +
  '<rect x="196" y="40" width="192" height="72" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2"/>' +
  '<text x="292" y="60" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">PAYLOAD (~64 KiB)</text>' +
  '<text x="292" y="80" text-anchor="middle" font-size="11" font-family="monospace" fill="var(--ink)">01001000 01101001 ...</text>' +
  '<text x="292" y="99" text-anchor="middle" font-size="10" fill="var(--ink-2)">Actual user data chunk</text>' +
  '<rect x="392" y="40" width="144" height="72" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>' +
  '<text x="464" y="58" text-anchor="middle" font-size="12" font-weight="700" fill="var(--warn)">TRAILER</text>' +
  '<text x="464" y="76" text-anchor="middle" font-size="10" fill="var(--ink)">End-of-packet marker</text>' +
  '<text x="464" y="94" text-anchor="middle" font-size="10" fill="var(--ink)">CRC error-check value</text>' +
  '<rect x="30" y="164" width="66" height="44" rx="8" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.8"/>' +
  '<text x="63" y="184" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Sender</text>' +
  '<text x="63" y="199" text-anchor="middle" font-size="9" fill="var(--ink-2)">P1, P2, P3</text>' +
  '<circle cx="185" cy="148" r="18" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>' +
  '<text x="185" y="152" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">R1</text>' +
  '<circle cx="285" cy="140" r="18" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>' +
  '<text x="285" y="144" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">R2</text>' +
  '<circle cx="235" cy="222" r="18" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>' +
  '<text x="235" y="226" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">R3</text>' +
  '<circle cx="375" cy="196" r="18" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>' +
  '<text x="375" y="200" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">R4</text>' +
  '<rect x="454" y="164" width="80" height="44" rx="8" fill="var(--surface)" stroke="var(--good)" stroke-width="2"/>' +
  '<text x="494" y="183" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">Receiver</text>' +
  '<text x="494" y="199" text-anchor="middle" font-size="9" fill="var(--ink-2)">Reorders 1,2,3</text>' +
  '<line x1="96" y1="176" x2="167" y2="152" stroke="var(--brand)" stroke-width="2"/>' +
  '<line x1="203" y1="146" x2="267" y2="141" stroke="var(--brand)" stroke-width="2"/>' +
  '<line x1="303" y1="145" x2="454" y2="176" stroke="var(--brand)" stroke-width="2"/>' +
  '<line x1="96" y1="194" x2="217" y2="220" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 3"/>' +
  '<line x1="253" y1="219" x2="357" y2="200" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 3"/>' +
  '<line x1="393" y1="194" x2="454" y2="188" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 3"/>' +
  '<text x="280" y="246" text-anchor="middle" font-size="10" fill="var(--ink-2)">Packets take independent routes around congestion and are reassembled using Packet #</text>' +
  '</svg>';

const SVG_TRANSMISSION =
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Serial versus Parallel data transmission and Simplex, Half-Duplex and Full-Duplex directions">' +
  '<rect x="8" y="8" width="544" height="244" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="148" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Wire Count: Serial vs Parallel</text>' +
  '<text x="420" y="28" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Direction: Simplex &amp; Duplex</text>' +
  '<line x1="292" y1="20" x2="292" y2="240" stroke="var(--line)" stroke-width="1.5"/>' +
  '<rect x="22" y="42" width="52" height="40" rx="6" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.8"/>' +
  '<text x="48" y="66" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">TX</text>' +
  '<rect x="222" y="42" width="52" height="40" rx="6" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.8"/>' +
  '<text x="248" y="66" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">RX</text>' +
  '<line x1="74" y1="62" x2="222" y2="62" stroke="var(--brand)" stroke-width="3"/>' +
  '<text x="148" y="55" text-anchor="middle" font-size="11" font-family="monospace" font-weight="700" fill="var(--brand)">1 → 0 → 1 → 1 → 0</text>' +
  '<text x="148" y="96" text-anchor="middle" font-size="10" fill="var(--good)">Serial: 1 wire, 1 bit at a time (no skew)</text>' +
  '<rect x="22" y="122" width="52" height="96" rx="6" fill="var(--surface)" stroke="var(--accent)" stroke-width="1.8"/>' +
  '<text x="48" y="174" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">TX</text>' +
  '<rect x="222" y="122" width="52" height="96" rx="6" fill="var(--surface)" stroke="var(--accent)" stroke-width="1.8"/>' +
  '<text x="248" y="174" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">RX</text>' +
  '<line x1="74" y1="136" x2="222" y2="136" stroke="var(--warn)" stroke-width="2"/>' +
  '<line x1="74" y1="158" x2="222" y2="158" stroke="var(--warn)" stroke-width="2"/>' +
  '<line x1="74" y1="180" x2="222" y2="180" stroke="var(--warn)" stroke-width="2"/>' +
  '<line x1="74" y1="202" x2="222" y2="202" stroke="var(--warn)" stroke-width="2"/>' +
  '<text x="148" y="132" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--ink)">Wire 0: bit 1</text>' +
  '<text x="148" y="154" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--ink)">Wire 1: bit 0</text>' +
  '<text x="148" y="176" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--ink)">Wire 2: bit 1</text>' +
  '<text x="148" y="198" text-anchor="middle" font-size="9" font-family="monospace" fill="var(--ink)">Wire 3..7: ...</text>' +
  '<text x="148" y="236" text-anchor="middle" font-size="10" fill="var(--bad)">Parallel: many wires (fast short, skews long)</text>' +
  '<rect x="308" y="44" width="228" height="54" rx="8" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="422" y="61" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Simplex: One Way Only</text>' +
  '<text x="422" y="82" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">A ───────────▶ B</text>' +
  '<rect x="308" y="112" width="228" height="58" rx="8" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="422" y="129" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Half-Duplex: Both Ways, Taking Turns</text>' +
  '<text x="422" y="148" text-anchor="middle" font-size="11" font-weight="700" fill="var(--warn)">A ──────▶ B  (OR)  A ◀────── B</text>' +
  '<text x="422" y="163" text-anchor="middle" font-size="9" fill="var(--ink-2)">Never simultaneously (e.g. walkie-talkie)</text>' +
  '<rect x="308" y="182" width="228" height="58" rx="8" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="422" y="199" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">Full-Duplex: Both Ways At Once</text>' +
  '<text x="422" y="218" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">A ◀═══════════▶ B</text>' +
  '<text x="422" y="233" text-anchor="middle" font-size="9" fill="var(--ink-2)">Simultaneous (e.g. broadband, phone call)</text>' +
  '</svg>';

const SVG_USB =
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="USB 4-wire shielded cable cross-section and automatic plug-and-play detection sequence">' +
  '<rect x="8" y="8" width="544" height="244" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="280" y="28" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Universal Serial Bus (USB): 4-Wire Cable &amp; Plug-and-Play Steps</text>' +
  '<rect x="24" y="48" width="228" height="190" rx="10" fill="var(--surface)" stroke="var(--brand)" stroke-width="1.8"/>' +
  '<text x="138" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">4-Wire Shielded USB Cable</text>' +
  '<rect x="42" y="84" width="192" height="28" rx="6" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.5"/>' +
  '<text x="138" y="102" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">1. Red (+5V Power / VBUS)</text>' +
  '<rect x="42" y="120" width="192" height="28" rx="6" fill="var(--surface-2)" stroke="var(--ink-2)" stroke-width="1.5"/>' +
  '<text x="138" y="138" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">2. White (D− Serial Data)</text>' +
  '<rect x="42" y="156" width="192" height="28" rx="6" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.5"/>' +
  '<text x="138" y="174" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">3. Green (D+ Serial Data)</text>' +
  '<rect x="42" y="192" width="192" height="28" rx="6" fill="var(--surface-2)" stroke="var(--ink)" stroke-width="1.5"/>' +
  '<text x="138" y="210" text-anchor="middle" font-size="11" font-weight="700" fill="var(--ink)">4. Black (Earth / Ground)</text>' +
  '<rect x="272" y="48" width="264" height="54" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="1.6"/>' +
  '<text x="404" y="67" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">Step 1: Voltage Change Detected</text>' +
  '<text x="404" y="85" text-anchor="middle" font-size="10" fill="var(--ink)">Small voltage change on D+/D− alerts OS</text>' +
  '<rect x="272" y="116" width="264" height="54" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.6"/>' +
  '<text x="404" y="135" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">Step 2: Device Automatically Recognised</text>' +
  '<text x="404" y="153" text-anchor="middle" font-size="10" fill="var(--ink)">Device descriptor read; OS looks up driver</text>' +
  '<rect x="272" y="184" width="264" height="54" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.6"/>' +
  '<text x="404" y="203" text-anchor="middle" font-size="11" font-weight="700" fill="var(--warn)">Step 3: Device Driver Loaded</text>' +
  '<text x="404" y="221" text-anchor="middle" font-size="10" fill="var(--ink)">Loads existing driver or prompts user install</text>' +
  '</svg>';

const SVG_PARITY_BLOCK =
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Even parity block grid pinpointing a single corrupted bit at the intersection of Byte 3 and Bit Column 5">' +
  '<rect x="8" y="8" width="544" height="244" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="280" y="28" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Even Parity Block: Pinpointing Exact Corrupted Row &amp; Column</text>' +
  '<rect x="26" y="42" width="330" height="202" rx="8" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="64" y="60" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink-2)">Row</text>' +
  '<text x="218" y="60" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink-2)">Bit1 Bit2 Bit3 Bit4 Bit5 Bit6 Bit7 Bit8</text>' +
  '<text x="64" y="84" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Byte 1</text>' +
  '<text x="218" y="84" text-anchor="middle" font-size="11" font-family="monospace" fill="var(--good)"> 1    0    1    1    0    0    1    0  ✓4</text>' +
  '<text x="64" y="110" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Byte 2</text>' +
  '<text x="218" y="110" text-anchor="middle" font-size="11" font-family="monospace" fill="var(--good)"> 0    1    1    0    0    1    1    0  ✓4</text>' +
  '<rect x="34" y="122" width="314" height="24" rx="4" fill="var(--bad-soft)"/>' +
  '<rect x="210" y="68" width="26" height="162" rx="4" fill="var(--bad-soft)" opacity="0.55"/>' +
  '<rect x="210" y="122" width="26" height="24" rx="4" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="2"/>' +
  '<text x="64" y="138" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">Byte 3</text>' +
  '<text x="218" y="138" text-anchor="middle" font-size="11" font-family="monospace" font-weight="700" fill="var(--bad)"> 1    1    0    0   [1]   0    0    0  ✗3</text>' +
  '<text x="64" y="164" text-anchor="middle" font-size="10" font-weight="700" fill="var(--ink)">Byte 4</text>' +
  '<text x="218" y="164" text-anchor="middle" font-size="11" font-family="monospace" fill="var(--good)"> 0    0    1    1    0    1    1    0  ✓4</text>' +
  '<line x1="36" y1="180" x2="346" y2="180" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="64" y="200" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">Parity</text>' +
  '<text x="218" y="200" text-anchor="middle" font-size="11" font-family="monospace" font-weight="700" fill="var(--ink)"> 0    0    1    0    0    0    1    0</text>' +
  '<text x="218" y="224" text-anchor="middle" font-size="10" font-family="monospace" fill="var(--bad)"> ✓    ✓    ✓    ✓    ✗    ✓    ✓    ✓</text>' +
  '<rect x="372" y="54" width="168" height="176" rx="10" fill="var(--surface)" stroke="var(--bad)" stroke-width="1.8"/>' +
  '<text x="456" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="var(--bad)">Fault Isolation</text>' +
  '<text x="456" y="102" text-anchor="middle" font-size="10" fill="var(--ink)">Byte 3 has THREE 1s</text>' +
  '<text x="456" y="118" text-anchor="middle" font-size="10" fill="var(--ink)">(odd → fails even check)</text>' +
  '<text x="456" y="144" text-anchor="middle" font-size="10" fill="var(--ink)">Bit 5 col has ONE 1</text>' +
  '<text x="456" y="160" text-anchor="middle" font-size="10" fill="var(--ink)">(odd → fails even check)</text>' +
  '<text x="456" y="190" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">Intersection = (Row 3, Bit 5)</text>' +
  '<text x="456" y="208" text-anchor="middle" font-size="10" fill="var(--good)">Flip 1 → 0 to auto-correct!</text>' +
  '</svg>';

const SVG_ARQ =
  '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Automatic Repeat Query timeline showing timeout or negative acknowledgement triggering automatic retransmission">' +
  '<rect x="8" y="8" width="544" height="244" rx="14" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.5"/>' +
  '<text x="280" y="28" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">Automatic Repeat Query (ARQ): Acknowledgements &amp; Timeout Loop</text>' +
  '<rect x="50" y="44" width="110" height="32" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/>' +
  '<text x="105" y="64" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">SENDER</text>' +
  '<rect x="400" y="44" width="110" height="32" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="2"/>' +
  '<text x="455" y="64" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">RECEIVER</text>' +
  '<line x1="105" y1="76" x2="105" y2="238" stroke="var(--ink-2)" stroke-width="2"/>' +
  '<line x1="455" y1="76" x2="455" y2="238" stroke="var(--ink-2)" stroke-width="2"/>' +
  '<line x1="105" y1="96" x2="450" y2="116" stroke="var(--bad)" stroke-width="2.2"/>' +
  '<text x="280" y="99" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">1. Send Packet 1 + Start Timeout Timer (Corrupted/Lost!)</text>' +
  '<line x1="455" y1="130" x2="110" y2="150" stroke="var(--warn)" stroke-width="2" stroke-dasharray="5 4"/>' +
  '<text x="280" y="135" text-anchor="middle" font-size="10" font-weight="700" fill="var(--warn)">2. Negative ACK returned — OR Timeout expires with no ACK</text>' +
  '<line x1="105" y1="172" x2="450" y2="192" stroke="var(--brand)" stroke-width="2.2"/>' +
  '<text x="280" y="175" text-anchor="middle" font-size="10" font-weight="700" fill="var(--brand)">3. Sender Automatically Retransmits Packet 1 + Resets Timer</text>' +
  '<line x1="455" y1="206" x2="110" y2="226" stroke="var(--good)" stroke-width="2.4"/>' +
  '<text x="280" y="211" text-anchor="middle" font-size="10" font-weight="700" fill="var(--good)">4. Error-Free! Positive Acknowledgement (ACK) received ✓</text>' +
  '<text x="280" y="244" text-anchor="middle" font-size="10" fill="var(--ink-2)">Repeats until Positive ACK arrives or preset retry limit is reached</text>' +
  '</svg>';

export const guide: TopicGuide = {
  id: "data-transmission",
  title: "Data Transmission & Error Detection",
  strand: "Paper 1: Computer Systems",
  icon: "📡",
  summary:
    "How data packets race across routers, why serial beats parallel over long cables, how USB auto-detects devices, and how parity blocks, checksums, check digits and ARQ catch errors.",
  intro:
    "Every message, photo, or game update you send is sliced into binary **data packets**, bounced across **routers**, pushed down **serial** or **parallel** wires, and checked relentlessly for flipped bits. On CIE `0478` Paper 1, examiners love testing the exact contents of a packet header vs trailer, why parallel wires suffer **data skew**, why single parity bits miss two-bit flips, how a **2D parity block** pinpoints one bad bit, and how **ISBN-13 check digits** vs **ARQ** protect data.",
  guide: [
    {
      id: "packets-packet-switching",
      heading: "Data Packets & Packet Switching",
      discovery: {
        problem:
          "You want to email a `6.4 MiB` video across a busy global network. If your computer tried to reserve one continuous wire from Singapore to London for the whole transfer, everyone else would be blocked — and if one cable snapped halfway through, you would have to restart from `0%`. How could you split the file so it survives busy or broken links AND still reassembles in the right order?",
        idea:
          "Chop the file into small numbered **packets** (~`64 KiB` each), stamp every packet's **header** with the destination IP address and its **sequence number**, let **routers** steer each packet independently around congestion, and use the sequence numbers at the destination to stitch the payload back together!",
      },
      body:
        "Before large data is transmitted over a network such as the Internet, it is split into small units called **data packets** (typically holding around `64 KiB` of payload data).\n\n" +
        "### The Three Parts of a Data Packet\n\n" +
        "| Packet Section | Exact Contents on CIE `0478` | Why It Is Needed |\n" +
        "|---|---|---|\n" +
        "| **Packet Header** | **Sender (originator) IP address**, **Destination IP address**, **Packet sequence number** (e.g. packet `3` of `12`), **Total number of packets**, and **Hop number / TTL** | Allows routers to route the packet to the target, allows the receiver to **reassemble packets in the correct order**, and lets the receiver reply to the sender |\n" +
        "| **Payload** | The actual **user data** being transmitted (typically ~`64 KiB`) | Carries the slice of the file, email, web page, or audio stream |\n" +
        "| **Packet Trailer** | **End-of-packet marker** + **Error-checking value** such as a **Cyclic Redundancy Check (CRC)** | Signals where the packet finishes and lets the receiving device verify that payload bits were not corrupted in transit |\n\n" +
        "**How CRC in the trailer works**: The sending computer counts or hashes the `1`-bits in the payload and stores the result in the trailer. The receiving computer recalculates the CRC on the arriving payload and compares it with the trailer value.\n\n" +
        "### Packet Switching Step-by-Step\n" +
        "1. The message or file is split into numbered **packets**.\n" +
        "2. At each network node, a **router** inspects the **destination IP address** in the packet **header** and selects the **fastest / least congested route** available at that moment.\n" +
        "3. Different packets from the same file can travel via **completely different routes**, so they frequently **arrive out of order**.\n" +
        "4. Each router decrements a **hop counter**; if a lost packet's hop count hits `0`, it is discarded so ”zombie packets” never clog the network forever.\n" +
        "5. The destination computer checks each trailer for errors, requests retransmission of any missing/corrupted packets, and **reorders the packets using their sequence numbers**.\n\n" +
        "### Benefits vs Drawbacks of Packet Switching\n" +
        "- **Benefits**: No need to tie up a dedicated single communication line; easy to route around failed or congested cables automatically; high data transmission rate because many users share network bandwidth efficiently.\n" +
        "- **Drawbacks**: Packets can be lost and must be re-sent; extra delay (**latency/jitter**) at the destination while waiting to reorder out-of-sequence packets — tricky for live voice/video calls without buffering.",
      diagram: SVG_PACKET,
      diagramCaption:
        "Every packet wraps its ~64 KiB payload between a routing Header (IPs + Packet #) and an error-checking Trailer (end marker + CRC). Routers forward each packet independently.",
      workedExamples: [
        {
          title: "How Many 64 KiB Packets Are Needed?",
          problem:
            "A `2 MiB` image file is split into packets where each packet carries exactly `64 KiB` of payload. Calculate the exact number of packets created.",
          steps: [
            "Convert `2 MiB` into `KiB` using the CIE `0478` IEC factor `1 MiB = 1024 KiB`: `2 × 1024 = 2048 KiB`.",
            "Divide total payload size by payload per packet: `2048 ÷ 64`.",
            "Simplify without a calculator: `2048 ÷ 64 = 1024 ÷ 32 = 512 ÷ 16 = 32` packets.",
          ],
          answer: "`32` packets (numbered `1` to `32` in their packet headers).",
          yourTurn: {
            question:
              "A `3 MiB` document is split into data packets that each hold `64 KiB` of payload. How many packets are needed? Give your answer as a single whole number.",
            answer: { type: "number", value: 48 },
            solution:
              "`3 MiB = 3 × 1024 = 3072 KiB`. Divide by `64 KiB` per packet: `3072 ÷ 64 = 48` packets.",
          },
        },
        {
          title: "Tracing Out-of-Order Reassembly",
          problem:
            "Tara sends the word `COMPUTING` split into three 3-character packets: Packet 1 = `COM`, Packet 2 = `PUT`, Packet 3 = `ING`. Packet 2 hits a busy router, so they arrive in order `COM`, `ING`, `PUT`. Explain how the receiving computer reconstructs `COMPUTING` rather than `COMINGPUT`.",
          steps: [
            "Each packet's **header** contains its **packet sequence number** (`1`, `2`, `3`) and total packet count (`3`).",
            "When `COM` (`#1`), `ING` (`#3`), and `PUT` (`#2`) arrive, the receiver holds them in a buffer until all `3` packets pass their trailer CRC check.",
            "The receiver sorts the payloads by sequence number `1 → 2 → 3` to reconstruct `COMPUTING`.",
          ],
          answer: "The receiver reads the **packet sequence numbers** (`1, 2, 3`) in the **headers** and reorders the payloads before reassembly.",
        },
      ],
      keyPoints: [
        "A packet has three parts: **Header** (Sender IP, Destination IP, Packet sequence number, Total packets, Hop count), **Payload** (actual data ~`64 KiB`), and **Trailer** (end-of-packet marker + CRC error check).",
        "In **packet switching**, **routers** independently pick the optimal route for each packet at each node.",
        "Packets can arrive **out of order** and are **reassembled** at the destination using the **packet sequence number** in the header.",
        "Hop counters stop undeliverable packets circulating forever across routers.",
      ],
      whyItWorks:
        "Dedicated circuit switching reserves an entire path even during moments of silence. Splitting data into self-addressed packets lets millions of conversations interleave on shared trunk cables and automatically detour around broken links within milliseconds.",
      strategies: [
        "Separate **Header** (routing + ordering) from **Trailer** (end marker + CRC error check) — mixing them up is the #1 Paper 1 mark loser!",
        "Use powers of `2` (`1024 = 2¹⁰`, `64 = 2⁶`) to divide `KiB` packet counts rapidly without a calculator: `2¹⁰ ÷ 2⁶ = 2⁴ = 16` packets per `1 MiB`!",
      ],
      thinkDeeper:
        "Why is packet switching ideal for downloading a web page or email, yet live video calls sometimes freeze or drop frames instead of waiting for every lost packet to be retransmitted?",
    },
    {
      id: "transmission-methods",
      heading: "Serial vs Parallel & Simplex, Half-Duplex, Full-Duplex",
      discovery: {
        problem:
          "Imagine `8` sprinters starting side-by-side in `8` lanes (`Parallel`) versus `8` baton runners following one single track (`Serial`). Over `10` metres, all `8` lanes cross the finish line almost together. Over `5` kilometres, each runner runs at a slightly different speed — what happens to the order in which the `8`-bit ”byte” crosses the line?",
        idea:
          "Over long distances, tiny physical differences between wires make parallel bits arrive **out of synchronisation** — called **data skew**! Sending bits one-by-one along a single **serial** wire guarantees they arrive in exact sequence with zero skew.",
      },
      body:
        "Every CIE `0478` data-transmission description combines **two independent choices**:\n" +
        "1. **Direction of transmission**: `Simplex`, `Half-Duplex`, or `Full-Duplex`.\n" +
        "2. **Method / wire count**: `Serial` or `Parallel`.\n\n" +
        "### 1. Direction of Data Transmission\n\n" +
        "| Mode | Definition (Exact Mark-Scheme Wording) | Everyday / Computing Example |\n" +
        "|---|---|---|\n" +
        "| **Simplex** | Data travels in **one direction only** (from sender to receiver only) | Keyboard to CPU, microphone to amplifier, broadcast radio/TV, basic CPU-to-display signal |\n" +
        "| **Half-Duplex** | Data travels in **both directions**, **but NOT at the same time** (devices take turns) | **Walkie-talkie** (two-way push-to-talk radio), classic half-duplex hub |\n" +
        "| **Full-Duplex** | Data travels in **both directions simultaneously** (at the exact same time) | **Broadband internet**, telephone call, modern Gigabit Ethernet / fibre-optic link |\n\n" +
        "### 2. Serial vs Parallel Data Transmission\n\n" +
        "| Feature | **Serial Transmission** | **Parallel Transmission** |\n" +
        "|---|---|---|\n" +
        "| **How bits travel** | **One bit at a time** sequentially along a **single wire / channel** | **Multiple bits** (e.g. `8`, `16`, `32`, or `64` bits) sent **simultaneously** across **several parallel wires** |\n" +
        "| **Distance suitability** | Best for **long distances** (external cables, USB, fibre-optic, WANs) | Best ONLY for **very short distances** (under ~`1–2 m`, especially **internal CPU / motherboard buses**) |\n" +
        "| **Synchronisation / Skew** | **No data skew** — bits arrive strictly in the exact order sent | Suffers **data skew** (bits travel at slightly different speeds on separate wires and arrive unsynchronised) |\n" +
        "| **Interference & Cost** | Minimal **crosstalk**; fewer wires → **thinner, cheaper** cables | Suffers **crosstalk** (electromagnetic interference between adjacent wires); **bulkier, dearer** cables |\n" +
        "| **Speed nuance** | Sends `1` bit per clock cycle per lane, though modern serial links run at **much higher clock frequencies** cleanly! | Sends `8+` bits per clock cycle, so faster **at the same clock speed over very short distances** |\n\n" +
        "**Exam Combination Tip**: When asked for the transmission mode of a real scenario, check whether the question asks for **direction**, **method**, or **both** (e.g. *”Full-duplex serial data transmission”* for home fibre broadband).",
      diagram: SVG_TRANSMISSION,
      diagramCaption:
        "Left: Serial sends 1 bit at a time down 1 wire (no skew); Parallel sends multiple bits simultaneously across multiple wires (fast internally, skews over distance). Right: Simplex, Half-Duplex, and Full-Duplex.",
      workedExamples: [
        {
          title: "Classifying Real-World Links",
          problem:
            "State BOTH the direction and the method of transmission best suited for: (a) an internal `32`-bit data bus connecting the CPU and RAM on a motherboard, and (b) a `50 km` undersea fibre-optic link carrying live video calls.",
          steps: [
            "For (a): Data is both read from RAM and written to RAM simultaneously/bi-directionally over millimetres on a PCB where `32` tracks are etched side-by-side without significant skew → **Full-duplex** (or bidirectional) **parallel** transmission.",
            "For (b): Video calls send and receive audio/video at the exact same time (**Full-duplex**), and over `50 km` parallel wires would suffer severe data skew and cable cost → **Serial** transmission.",
          ],
          answer: "(a) **Parallel** (bidirectional / full-duplex); (b) **Full-duplex serial**.",
          yourTurn: {
            question:
              "Two security guards communicate using walkie-talkies where one guard must hold 'Push-to-Talk' and say 'Over' before the other can reply. Which direction mode of data transmission is this (`Simplex`, `Half-duplex`, or `Full-duplex`)?",
            answer: { type: "text", accept: ["half-duplex", "half duplex"], display: "Half-duplex" },
            solution:
              "Voice signals travel in **both directions**, **but not simultaneously** — each guard must wait their turn, which defines **half-duplex**.",
          },
        },
      ],
      keyPoints: [
        "**Simplex** = one direction only; **Half-duplex** = both directions, NOT simultaneously; **Full-duplex** = both directions simultaneously.",
        "**Serial** = `1` bit at a time over a single wire/channel — cheaper, zero data skew, reliable over long distances.",
        "**Parallel** = multiple bits simultaneously over multiple wires — fast over very short internal distances (like CPU buses), but suffers **data skew** and **crosstalk** over longer cables.",
      ],
      whyItWorks:
        "Copper wires have tiny variations in length, capacitance, and resistance. At gigahertz speeds, a signal delay of even half a nanosecond between Wire `0` and Wire `7` shifts a bit into the neighbouring byte! Eliminating extra wires eliminates skew completely.",
      strategies: [
        "Always include the word **simultaneously** (or **at the same time**) when contrasting Half-Duplex vs Full-Duplex AND when defining Parallel transmission!",
        "Never write *”Serial is always slower than parallel”* without qualification — specify parallel is faster *over very short distances* because multiple bits travel simultaneously, whereas serial avoids **data skew** over long distances.",
      ],
      thinkDeeper:
        "Why did computer engineers replace wide external parallel printer cables (25-pin Centronics) and parallel PATA ribbon drives with **Serial** USB and **Serial** ATA (SATA) that actually transfer data *faster*?",
    },
    {
      id: "usb-interface",
      heading: "Universal Serial Bus (USB)",
      discovery: {
        problem:
          "In the `1990s`, plugging in a mouse, keyboard, printer, and modem required four completely different sockets, manual interrupt switches, a reboot, and separate wall plugs! What features would a universal peripheral cable need so anyone could plug in a device hot and start using it immediately?",
        idea:
          "Combine **`+5V` power + ground** with a shielded **serial data pair (`D+`, `D−`)**, detect new devices automatically via a **voltage change**, and have the OS automatically load the matching **device driver**!",
      },
      body:
        "The **Universal Serial Bus (USB)** is an industry-standard **asynchronous serial** data transmission interface used to connect peripherals (keyboards, mice, printers, flash drives, smartphones) to computers.\n\n" +
        "### Inside a Classic 4-Wire Shielded USB Cable\n" +
        "1. **Red wire**: `+5V` DC **power** (`VBUS`) — powers low-wattage peripherals and charges batteries.\n" +
        "2. **Black wire**: **Earth / Ground** (`GND`).\n" +
        "3. **White & Green wires (`D−` and `D+`)**: Twisted pair carrying **serial data** between host and peripheral (shielding reduces electromagnetic interference).\n\n" +
        "*(Modern **USB-C** connectors are **symmetrical/reversible** so they fit either way up, add high-speed full-duplex lanes, and deliver higher USB Power Delivery wattages, while remaining backward compatible via adapters.)*\n\n" +
        "### Exact CIE `0478` Sequence When a USB Device Is Plugged In\n" +
        "1. The computer **automatically detects** that a device has been plugged in due to a small **change in voltage** on the data wires.\n" +
        "2. The device is **automatically recognised**, and the operating system searches for the matching **device driver**.\n" +
        "3. If the appropriate **device driver** is present, it is loaded so the computer and device can communicate; if not found, the user is prompted to download/install the driver.\n\n" +
        "### Benefits vs Drawbacks of USB\n\n" +
        "| Benefits of USB (Learn 4+) | Drawbacks of USB (Learn 2) |\n" +
        "|---|---|\n" +
        "| **Automatic plug-and-play detection** and driver loading | Standard passive **cable length is limited to ~`5` metres** before signal degrades (needs powered USB hubs/repeaters beyond `5 m`) |\n" +
        "| **Industry standard** — supported across virtually all operating systems and devices | Even modern USB versions can be slower than dedicated internal motherboard buses |\n" +
        "| **Supplies `+5V` power**, so small devices need no separate mains power supply | Older USB-A/B plugs are non-reversible (though only fitting one way prevents miswiring pins!) |\n" +
        "| Connectors **cannot be plugged in upside-down / wired wrongly** (USB-A fits one way; USB-C works both ways) | |\n" +
        "| Supports **multiple data transmission rates** and is **backward compatible** with older USB standards; built-in error checking/retransmission | |",
      diagram: SVG_USB,
      diagramCaption:
        "A standard USB cable carries +5V power (Red), Ground (Black), and twisted serial data wires (White/Green), enabling instant voltage-change plug-and-play detection.",
      workedExamples: [
        {
          title: "Explaining USB vs Parallel Printer Cable",
          problem:
            "A student connects a laser printer located `3.5` metres away using a USB cable. State the method of data transmission used by USB and give two benefits of using USB here.",
          steps: [
            "Identify the ”S” in USB: **Serial** data transmission (`1` bit at a time).",
            "Pick two distinct, concrete mark-scheme benefits relevant to a printer: (1) **Automatic detection** — OS detects the voltage change and loads the printer **device driver** automatically; (2) **Industry standard / foolproof connector** that fits only one way and resists data skew at `3.5 m` (within the `5 m` USB limit).",
          ],
          answer: "**Serial** data transmission. Benefits: automatic device detection + driver loading, and universal industry-standard connector with zero data skew up to `5 m`.",
          yourTurn: {
            question:
              "What is the maximum recommended cable length (in metres) of a single standard passive USB cable before signal degradation requires a USB hub or repeater? Give a single whole number.",
            answer: { type: "number", value: 5 },
            solution:
              "Standard passive USB cables have a maximum recommended length of **`5` metres**.",
          },
        },
      ],
      keyPoints: [
        "USB stands for **Universal Serial Bus** — it uses **asynchronous serial** data transmission.",
        "4-wire USB cable: **Red (`+5V` power)**, **Black (Ground)**, **White & Green (`D−` / `D+` serial data)** inside foil/braid shielding.",
        "Plug-and-play works via a **voltage change** → **automatic device recognition** → **device driver lookup/loading**.",
        "Maximum standard USB cable length without hubs/repeaters is **~`5` metres**.",
      ],
      whyItWorks:
        "Using differential signalling across twisted `D+` and `D−` wires means any external electromagnetic noise hits both wires almost equally and cancels out at the receiver, keeping serial USB fast and clean up to `5` metres.",
      strategies: [
        "In ”Explain how a computer detects a new USB device” questions, hit all three mark points: **voltage change** → **device recognised** → **appropriate device driver loaded (or user prompted)**.",
        "Never claim USB powers a heavy laser printer heater! Note USB supplies `+5V` power suitable for **small/portable devices** (mice, keyboards, flash drives, phones).",
      ],
      thinkDeeper:
        "Why does the `5`-metre USB cable limit exist even when copper carries electricity much further — hint: think about round-trip propagation delay and signal attenuation at high megahertz/gigahertz bit rates!",
    },
    {
      id: "parity-checksum-echo",
      heading: "Parity Bits, Parity Blocks, Checksums & Echo Checks",
      discovery: {
        problem:
          "Suppose `7` rows of `7` coins are laid on a table. Before leaving the room, you add an `8`th coin to the end of every row AND an `8`th row along the bottom so that **every row and every column has an even number of Heads**. A prankster sneaks in and flips **one** coin anywhere in the `8 × 8` grid. How can you walk back in and point at the exact flipped coin in seconds?",
        idea:
          "Count Heads in each row and each column! Exactly **one row** and **one column** will now have an **odd** number of Heads — and the flipped coin sits right at their **intersection**! That is how a **2D Parity Block** works.",
      },
      body:
        "During transmission, electrical interference, crosstalk, power surges, or hardware faults can flip `0` to `1` or `1` to `0`. Computers use four classic transmission error-detection methods on CIE `0478`:\n\n" +
        "### 1. Parity Check (Single Parity Bit)\n" +
        "Sender and receiver agree in advance on either **Even Parity** or **Odd Parity** across each byte (typically `7` data bits + `1` parity bit in the MSB):\n" +
        "- **Even Parity**: Total number of `1`s in the byte (including parity bit) MUST be **even** (`0, 2, 4, 6, 8`).\n" +
        "- **Odd Parity**: Total number of `1`s in the byte (including parity bit) MUST be **odd** (`1, 3, 5, 7`).\n\n" +
        "**Fatal Blind Spot of a Single Parity Bit**:\n" +
        "- If **two bits** (or any **even number** of bits: `2, 4, 6, 8`) flip inside the same byte — or if two bits are transposed (`01` → `10`) — the total count of `1`s stays even (or stays odd), so **parity fails to detect the error**!\n" +
        "- Even when `1` bit flips and parity flags an error, a single parity bit **cannot tell WHICH bit** in the byte was corrupted.\n\n" +
        "### 2. Parity Block (Parity Byte) Check\n" +
        "- A block of several bytes is transmitted. Every **row** (byte) has its horizontal parity bit, AND an extra **Parity Byte** is appended at the bottom giving vertical parity for **every bit column** (`Bit 1` through `Bit 8`).\n" +
        "- If a **single bit** flips, **both its row parity AND its column parity fail**.\n" +
        "- The intersection `(corrupted row, corrupted column)` **identifies the exact faulty bit**, so the receiver can even flip it back automatically! *(Some `2`-bit errors also get detected via column checks, though `4` bits flipped in a rectangle can still fool a parity block.)*\n\n" +
        "### 3. Checksum\n" +
        "- Data is sent in a **block of bytes** along with a calculated mathematical summary value called the **checksum** (computed from all bytes in the block using an agreed algorithm).\n" +
        "- The **receiver recalculates** the checksum from the received bytes using the **exact same algorithm** and compares its value with the **transmitted checksum**.\n" +
        "- Match → accepted; mismatch → error flagged and retransmission requested.\n\n" +
        "### 4. Echo Check\n" +
        "- The receiver immediately sends an exact copy of the received data **back to the sender**.\n" +
        "- The **sender** compares the returned data with the original sent data; if they differ, the sender retransmits.\n" +
        "- **Big CIE Drawbacks**: Doubles data traffic, and **you cannot tell whether the error occurred during the original transmission (sender → receiver) or during the return echo (receiver → sender)**!",
      diagram: SVG_PARITY_BLOCK,
      diagramCaption:
        "In an Even Parity Block, every valid row and column has an even count of 1s. Here Byte 3 (three 1s) and Bit Column 5 (one 1) both fail, pinpointing the corrupted bit at (Byte 3, Bit 5).",
      workedExamples: [
        {
          title: "Calculating Even vs Odd Parity Bits",
          problem:
            "A `7`-bit ASCII character `1011001` is placed in bits `6..0` of an `8`-bit byte, with the parity bit at the leftmost MSB position (`_1011001`). Find the complete `8`-bit byte under (a) Even Parity and (b) Odd Parity.",
          steps: [
            "Count the number of `1`s in the `7` data bits `1011001`: `1 + 0 + 1 + 1 + 0 + 0 + 1 = 4` ones.",
            "For (a) **Even Parity**: `4` is already even, so set the parity bit to **`0`** → `01011001` (`4` ones total).",
            "For (b) **Odd Parity**: `4` is even, so we need one more `1` to make `5` (odd) → set the parity bit to **`1`** → `11011001` (`5` ones total).",
          ],
          answer: "(a) Even parity: `01011001`; (b) Odd parity: `11011001`.",
          yourTurn: {
            question:
              "An `8`-bit system uses **Odd Parity**, with the leftmost bit as the parity bit. Complete the byte for the `7` data bits `1101000` (`_1101000`). Give the full `8`-bit binary string.",
            answer: { type: "text", accept: ["01101000", "0110 1000"], display: "01101000" },
            solution:
              "`1101000` already contains **three** `1`s (`3` is odd!). Therefore the Odd Parity bit is `0`, giving **`01101000`**.",
          },
        },
        {
          title: "Finding the Corrupted Bit in a Parity Block",
          problem:
            "Four bytes + an Odd-Parity Byte are received (columns numbered Bit 1 to Bit 4 from left to right):\n" +
            "- Byte 1: `1 0 0 0` (ones = 1, odd ✓)\n" +
            "- Byte 2: `1 1 0 0` (ones = 2, EVEN ✗)\n" +
            "- Byte 3: `0 1 1 1` (ones = 3, odd ✓)\n" +
            "- Parity row: `1 0 0 0`.\n" +
            "Identify which Byte row and Bit column was corrupted.",
          steps: [
            "Row check (Odd Parity requires an odd number of `1`s): Byte 2 (`1 1 0 0`) has `2` ones (even), so **Byte 2** is faulty.",
            "Column check across all 4 rows (Byte 1, Byte 2, Byte 3, Parity row):\n" +
              "  - Bit 1 col: `1, 1, 0, 1` → `3` ones (odd ✓)\n" +
              "  - Bit 2 col: `0, 1, 1, 0` → `2` ones (EVEN ✗!)\n" +
              "  - Bit 3 col: `0, 0, 1, 0` → `1` one (odd ✓)\n" +
              "  - Bit 4 col: `0, 0, 1, 0` → `1` one (odd ✓)",
            "Intersection = **Byte 2, Bit 2**! Flipping that `1` to `0` makes Byte 2 = `1 0 0 0` (`1` one, odd ✓) and Bit 2 col = `0, 0, 1, 0` (`1` one, odd ✓).",
          ],
          answer: "**Byte 2, Bit 2** (it should be `0` instead of `1`).",
        },
      ],
      keyPoints: [
        "**Even parity** keeps total `1`s even; **Odd parity** keeps total `1`s odd.",
        "A single parity bit misses any **even number of bit flips** (e.g. `2` bits flipping) and cannot locate which bit flipped.",
        "A **Parity Block** adds a vertical **Parity Byte** so the intersection of the bad row and bad column pinpoints a single-bit error.",
        "**Checksum** recalculates a block mathematical value at the receiver; **Echo Check** bounces the data back to the sender (cannot tell outward vs return error!).",
      ],
      whyItWorks:
        "Flipping a single bit toggles `1 ↔ 0`, which always changes the count of `1`s by `±1` — guaranteed to flip parity between even and odd in both its row and its column simultaneously.",
      strategies: [
        "On parity block questions, ALWAYS write the count of `1`s at the end of **every row** AND beneath **every column** before answering — never eyeball!",
        "Check carefully whether column numbering in the question goes `Bit 7 .. Bit 0` or `Bit 1 .. Bit 8` from left to right!",
      ],
      thinkDeeper:
        "Can you sketch a `4 × 4` block where **four** bits flip at the corners of a rectangle `(r1, c1), (r1, c2), (r2, c1), (r2, c2)` and prove that EVERY row and EVERY column still passes Even Parity?",
    },
    {
      id: "check-digits-arq",
      heading: "Check Digits & Automatic Repeat Query (ARQ)",
      discovery: {
        problem:
          "A cashier types barcode `978052188068_` by hand, accidentally swapping two adjacent digits (`80` → `08`). If the final check digit were just the plain sum of all digits `MOD 10`, `8 + 0` and `0 + 8` give the **exact same sum** (`8`) — the swap slips right through! How does **ISBN-13** catch adjacent digit swaps?",
        idea:
          "Give adjacent digit positions **different weights** (`×1` on odd positions, `×3` on even positions)! Now `8×1 + 0×3 = 8`, whereas `0×1 + 8×3 = 24` — swapping neighbours changes the weighted total and immediately triggers an invalid check digit!",
      },
      body:
        "### 1. Check Digits (Catching Human Data-Entry Errors!)\n" +
        "A **check digit** is an extra final digit calculated from all the preceding digits in an identification number (such as **ISBN-13** book codes, product barcodes, bank account numbers, or VINs) and appended **before** the code is printed or typed.\n\n" +
        "> **Crucial Exam Distinction**: Parity, Checksums, and Echo Checks detect **transmission errors** across wires/networks. **Check Digits** are validation checks designed primarily to detect **human data-entry or scanning errors**!\n\n" +
        "#### Four Errors Caught by Check Digits (CIE `0478` Mark Scheme)\n" +
        "1. **Incorrect digit entered** (e.g. typing `5327` instead of `5827`).\n" +
        "2. **Transposition error** where two adjacent digits are swapped (e.g. typing `5872` instead of `5827`).\n" +
        "3. **Omitted or extra digits** (e.g. typing `582` or `58827`).\n" +
        "4. **Phonetic errors** when dictated aloud (e.g. typing `13` ”thirteen” instead of `30` ”thirty”).\n\n" +
        "#### ISBN-13 Check Digit Calculation (First 12 Digits → 13th Digit)\n" +
        "Number positions `1` to `12` from left to right:\n" +
        "1. Sum all the **odd-positioned** digits (`pos 1 + pos 3 + pos 5 + pos 7 + pos 9 + pos 11`).\n" +
        "2. Sum all the **even-positioned** digits (`pos 2 + pos 4 + pos 6 + pos 8 + pos 10 + pos 12`) and **multiply by `3`**.\n" +
        "3. Add the two results together to get `Total`.\n" +
        "4. Find the remainder when `Total` is divided by `10` (`Remainder = Total MOD 10`).\n" +
        "5. If `Remainder = 0`, the check digit is **`0`**; otherwise the check digit is **`10 − Remainder`**.\n\n" +
        "*(To **validate** a complete `13`-digit ISBN-13: add all `7` odd positions including digit `13` + `3 ×` sum of all `6` even positions. If the grand total `MOD 10 = 0`, the ISBN-13 is **valid**!)*\n\n" +
        "*(Another CIE method is **Modulo-11**, which multiplies digits by ascending positional weights `2, 3, 4, ...` from right to left, divides the sum by `11`, and subtracts the remainder from `11`, using `'0'` if `11` and `'X'` if `10`.)*\n\n" +
        "---\n\n" +
        "### 2. Automatic Repeat Query / Request (ARQ)\n" +
        "**ARQ** is an **error-control protocol** used over networks and mobile links to guarantee data arrives error-free. ARQ itself does not calculate bits — instead it combines an error-detection check (such as **CRC** or **checksum**) with:\n" +
        "- **Positive and Negative Acknowledgements** (`ACK` / `NAK` messages sent back by the receiver).\n" +
        "- **Timeout** (a pre-set time interval allowed to elapse before an acknowledgement must be received).\n\n" +
        "#### How ARQ Works Step-by-Step (4-Mark Template)\n" +
        "1. The sender transmits a data packet and starts a **timeout timer**.\n" +
        "2. The receiver uses an **error-detection code** (e.g. CRC in the packet trailer or checksum) to check the packet.\n" +
        "3. If **no error** is found, the receiver sends a **positive acknowledgement** to the sender. If an **error IS detected**, the receiver sends a **negative acknowledgement** requesting retransmission.\n" +
        "4. If the sender receives a **negative acknowledgement** OR **no acknowledgement arrives before the timeout expires**, the sender **automatically retransmits** the packet — repeating until a positive acknowledgement arrives or a **preset retry limit** is reached.",
      diagram: SVG_ARQ,
      diagramCaption:
        "ARQ pairs error detection (like CRC) with Positive/Negative Acknowledgements and a Timeout timer, automatically resending lost or corrupted packets.",
      workedExamples: [
        {
          title: "Calculating an ISBN-13 Check Digit",
          problem:
            "Calculate the `13`th check digit for the `12`-digit ISBN prefix `9 7 8 0 5 2 1 6 8 0 4 6`.",
          steps: [
            "Odd positions (`1, 3, 5, 7, 9, 11`): `9 + 8 + 5 + 1 + 8 + 4 = 35`.",
            "Even positions (`2, 4, 6, 8, 10, 12`): `7 + 0 + 2 + 6 + 0 + 6 = 21`. Multiply by `3`: `21 × 3 = 63`.",
            "Add the two totals: `35 + 63 = 98`.",
            "Divide by `10` for remainder: `98 MOD 10 = 8`.",
            "Since remainder `8 ≠ 0`, subtract from `10`: `10 − 8 = 2`. The `13`th check digit is **`2`**.",
          ],
          answer: "`2` (full ISBN-13: `978-0-521-68046-2`).",
          yourTurn: {
            question:
              "Using the standard ISBN-13 rule (odd positions `×1`, even positions `×3`), find the `13`th check digit for the `12`-digit prefix `9 7 8 1 1 0 8 7 1 8 2 0`. Give a single digit `0–9`.",
            answer: { type: "number", value: 2 },
            solution:
              "Odd positions (`1,3,5,7,9,11`): `9 + 8 + 1 + 8 + 1 + 2 = 29`. Even positions (`2,4,6,8,10,12`): `7 + 1 + 0 + 7 + 8 + 0 = 23`, and `23 × 3 = 69`. Total = `29 + 69 = 98`. Remainder `98 MOD 10 = 8`, so check digit = `10 − 8 = 2`.",
          },
        },
      ],
      keyPoints: [
        "**Check digits** (e.g. ISBN-13, Modulo-11) are **validation** digits appended to codes to catch **data-entry/scanning errors** (wrong digit, transposition, omitted/extra digit, phonetic error).",
        "In **ISBN-13**: `(odd-pos sum) + 3 × (even-pos sum)`; remainder `r = Total MOD 10`; check digit is `0` if `r = 0`, else `10 − r`.",
        "**ARQ** uses **error detection (CRC/checksum) + Positive/Negative Acknowledgements + Timeout** to automatically retransmit corrupted or unacknowledged packets.",
      ],
      whyItWorks:
        "Because adjacent positions carry weights `1` and `3` (which differ by `2`), swapping almost any pair of neighbouring digits changes the weighted sum `MOD 10` (only pairs differing by `5`, such as `1` and `6`, keep the same remainder). Meanwhile in ARQ, the timeout timer breaks the 'lost packet or lost ACK' deadlock automatically without human intervention.",
      strategies: [
        "Watch the `Remainder = 0` trap in ISBN-13! If `Total MOD 10 = 0`, the check digit is **`0`** — NEVER `10` (a check digit is a single digit)!",
        "In ARQ written answers, ALWAYS mention all four keywords: **acknowledgement** (positive/negative), **timeout**, **automatic retransmission**, and **retry limit / until positive ACK received**.",
      ],
      thinkDeeper:
        "In ISBN-13 (`×1` and `×3` weights modulo `10`), what happens if two adjacent digits that differ by exactly `5` (such as `1` and `6`, or `2` and `7`) are transposed? Why does Modulo-11 (`×2, ×3, ×4...` modulo prime `11`) catch **100%** of all single-digit AND adjacent-transposition errors, at the small cost of needing `'X'` for `10`?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "What are the three main sections of a data packet?",
        back: "1. **Packet Header** (sender IP, destination IP, packet sequence number, total packets, hop count)\n2. **Payload** (actual data ~`64 KiB`)\n3. **Packet Trailer** (end-of-packet marker + CRC error check)",
      },
      {
        front: "What is the job of a router during packet switching?",
        back: "Reads the **destination IP address** in each packet's **header** and forwards the packet along the **fastest / least congested route** towards its destination.",
      },
      {
        front: "Why do packets arrive out of order in packet switching, and how is this fixed?",
        back: "Different packets take **independent routes** of varying length/congestion across routers. The destination computer **reassembles them in order using the packet sequence number** in the header.",
      },
      {
        front: "Distinguish Simplex, Half-Duplex, and Full-Duplex data transmission.",
        back: "- **Simplex**: One direction only.\n- **Half-Duplex**: Both directions, **not at the same time**.\n- **Full-Duplex**: Both directions **simultaneously**.",
      },
      {
        front: "Why is Serial transmission preferred over Parallel for long cable runs?",
        back: "Serial sends **1 bit at a time along a single wire**, so it suffers **no data skew** (bits cannot arrive unsynchronised), has minimal crosstalk, and uses thinner/cheaper cables.",
      },
      {
        front: "What is Data Skew, and where is Parallel transmission still used?",
        back: "**Data skew** occurs when bits travelling simultaneously down separate parallel wires arrive slightly out of time synchronisation over distance. Parallel is still used over **very short distances** like **internal CPU/motherboard buses**.",
      },
      {
        front: "What happens step-by-step when a USB device is plugged into a computer?",
        back: "1. Computer detects a small **change in voltage** on the data wires.\n2. Device is **automatically recognised**.\n3. OS searches for and loads the matching **device driver** (or prompts user to install it).",
      },
      {
        front: "State 4 benefits and 1 limitation of USB.",
        back: "**Benefits**: Automatic plug-and-play detection, industry standard, supplies `+5V` power, fits one way (or reversible USB-C), multiple speeds/backward compatible.\n**Limitation**: Maximum passive cable length is about **`5` metres**.",
      },
      {
        front: "Why can a single Parity Bit fail to detect a transmission error?",
        back: "If an **even number of bits** (e.g. `2` bits) flip in the same byte — or two bits swap places — the count of `1`s stays even (or stays odd), so parity appears valid!",
      },
      {
        front: "How does a 2D Parity Block pinpoint a corrupted bit?",
        back: "Each row has a parity bit AND a bottom **Parity Byte** checks every column. A single flipped bit breaks **both its row parity and its column parity**, pinpointing the exact `(row, column)` intersection.",
      },
      {
        front: "How does a Checksum detect transmission errors?",
        back: "Sender calculates a mathematical summary value (**checksum**) from a block of bytes and sends it with the block. Receiver **recalculates** the checksum using the same algorithm and **compares** both values.",
      },
      {
        front: "What is the main flaw of an Echo Check?",
        back: "Receiver sends data back to sender for comparison, **doubling traffic**, AND you **cannot tell if an error occurred on the outward journey or on the return journey**!",
      },
      {
        front: "What 4 human data-entry errors can a Check Digit detect?",
        back: "1. **Incorrect digit** entered\n2. **Transposition** of two adjacent digits\n3. **Omitted or extra** digits\n4. **Phonetic** errors (e.g. `13` vs `30`)",
      },
      {
        front: "How does Automatic Repeat Query (ARQ) ensure error-free delivery?",
        back: "Combines error detection (CRC/checksum) with **positive/negative acknowledgements** and a **timeout** timer: if a negative ACK arrives or the **timeout** expires before a positive ACK arrives, the sender **automatically retransmits** the packet.",
      },
    ],
    mustKnow: [
      "List the exact contents of a **Packet Header** (sender IP, destination IP, packet sequence number, total packets, hop number), **Payload** (~`64 KiB` data), and **Packet Trailer** (end marker + CRC).",
      "Explain **packet switching** step-by-step: splitting into packets, independent routing by **routers**, out-of-order arrival, and reordering using sequence numbers.",
      "Define **Simplex**, **Half-Duplex**, and **Full-Duplex**, always explicitly stating whether both directions happen **at the same time / simultaneously**.",
      "Compare **Serial** (`1` bit at a time, `1` wire, long distance, no skew) vs **Parallel** (multiple bits simultaneously, multiple wires, internal CPU buses, suffers **data skew** & crosstalk over distance).",
      "Describe the `4`-wire USB cable (`+5V`, Ground, `D+`, `D−`), the **voltage-change + driver** plug-and-play sequence, `4` pros, and the `~5 m` cable-length limit.",
      "Apply **Even Parity** and **Odd Parity** to `8`-bit bytes, explain the `2`-bit flip blind spot, and find the exact `(row, column)` error in a **Parity Block**.",
      "Explain **Checksum** vs **Echo Check** (including why Echo Check cannot distinguish outward vs return corruption).",
      "Calculate **ISBN-13** check digits, list errors caught by **Check Digits**, and trace **ARQ** (acknowledgements + timeout + automatic retransmission).",
    ],
    misconceptions: [
      {
        wrong: "Never Write ❌: ”The error check (CRC) is stored in the packet header.”",
        right: "Write Instead ✅: ”The **Header** holds sender/destination IPs and packet sequence number; the **Trailer** holds the end-of-packet marker and **CRC error check**.”",
      },
      {
        wrong: "Never Write ❌: ”Half-duplex sends data in one direction and full-duplex sends data in two directions.”",
        right: "Write Instead ✅: ”**Simplex** is one direction only; **Half-duplex** is both directions **not at the same time**; **Full-duplex** is both directions **simultaneously**.”",
      },
      {
        wrong: "Never Write ❌: ”Parallel transmission is always faster than serial transmission.”",
        right: "Write Instead ✅: ”Parallel sends multiple bits simultaneously so it is faster **over very short distances** (e.g. internal CPU buses), but over longer cables it suffers **data skew**, making **serial** faster and more reliable externally.”",
      },
      {
        wrong: "Never Write ❌: ”USB stands for Universal System Bus and uses parallel transmission.”",
        right: "Write Instead ✅: ”USB stands for **Universal Serial Bus** and uses **asynchronous serial** data transmission (`1` bit at a time).”",
      },
      {
        wrong: "Never Write ❌: ”A parity bit corrects errors and detects all bit flips.”",
        right: "Write Instead ✅: ”A single parity bit **only detects odd numbers of bit flips** — if `2` (or any even number of) bits flip, parity stays unchanged! You need a **2D Parity Block** to pinpoint a `1`-bit error.”",
      },
      {
        wrong: "Never Write ❌: ”Check digits detect errors caused by electrical interference during network transmission.”",
        right: "Write Instead ✅: ”**Check digits** are validation digits calculated before entry to catch **human data-entry/scanning errors** (wrong digit, transposition). Use **parity, checksums, CRC, or ARQ** for network transmission errors.”",
      },
      {
        wrong: "Never Write ❌: ”ARQ is an error-detection calculation like parity.”",
        right: "Write Instead ✅: ”**ARQ** is an **error-control protocol** that relies on CRC/checksum to detect errors and uses **acknowledgements + timeouts** to trigger **automatic retransmission**.”",
      },
      {
        wrong: "Never Write ❌: ”In ISBN-13, if Total MOD 10 is 0, the check digit is 10 − 0 = 10.”",
        right: "Write Instead ✅: ”A check digit is a **single digit**! In ISBN-13, if the remainder is `0`, the check digit is **`0`** (`10 − r` is only used when `r > 0`).”",
      },
    ],
    examMistakes: [
      "Omitting the word **simultaneously** (or **at the same time**) when defining Full-Duplex or Parallel transmission — CIE mark schemes deduct the mark if timing isn't mentioned!",
      "Saying parallel wires ”get tangled” instead of using the precise technical terms **data skew** (bits arriving unsynchronised) and **crosstalk** (electromagnetic interference between adjacent wires).",
      "Forgetting to include the **parity bit itself** when counting total `1`s in an `8`-bit byte, or mixing up **Even** vs **Odd** parity under time pressure.",
      "Counting columns from `0` instead of `1` (or right-to-left instead of left-to-right) on a CIE Parity Block table — always read the column headers printed in the question!",
      "Confusing **Checksum** (calculated on a block of transmitted bytes) with **Check Digit** (single validation digit appended to a barcode/ISBN to catch typing/scanning mistakes).",
      "Describing ARQ without mentioning **timeout** — if a packet is completely lost in transit, the receiver never sees it to send a Negative ACK, so ONLY the **timeout** wakes the sender!",
    ],
    mnemonics: [
      {
        topic: "Packet Structure Order",
        device: "**H-P-T** = **H**ead · **P**ack · **T**ail",
        explanation: "**Header** (IPs + Packet #) → **Payload** (~64 KiB data) → **Trailer** (End marker + CRC check).",
      },
      {
        topic: "Simplex vs Half-Duplex vs Full-Duplex",
        device: "**One-Way Street · Single-Lane Bridge · Dual Carriageway**",
        explanation:
          "Simplex = one-way street; Half-Duplex = single-lane bridge (both ways, taking turns); Full-Duplex = dual carriageway (both ways simultaneously).",
      },
      {
        topic: "ARQ 4-Mark Checklist",
        device: "**A-T-R-L** = **A**CK/NAK · **T**imeout · **R**etransmit · **L**imit",
        explanation:
          "Positive/Negative **A**cknowledgement, **T**imeout timer, automatic **R**etransmission, until ACK or retry **L**imit.",
      },
    ],
    realWorld: [
      {
        title: "Subsea Fibre-Optic Internet Trunk Cables",
        detail:
          "Transoceanic cables carry terabits per second across `10,000+ km` using **full-duplex serial** laser pulses — zero data skew across oceans!",
        emoji: "🌊",
      },
      {
        title: "Supermarket ISBN-13 & EAN-13 Barcodes",
        detail:
          "Every book and grocery item prints a `13`th check digit at the end of its barcode. If a smudged label misreads one bar, the weighted `×1, ×3` sum fails `MOD 10` and the till refuses to beep!",
        emoji: "🛒",
      },
      {
        title: "USB-C on iPads, Laptops & Microcontrollers",
        detail:
          "Plugging a keyboard or Arduino into a laptop triggers the USB voltage-change handshake in milliseconds, supplying `+5V` power and serial data down one reversible cable.",
        emoji: "🔌",
      },
      {
        title: "5G & Wi-Fi ARQ Retransmissions",
        detail:
          "When a microwave oven or concrete wall corrupts a Wi-Fi frame, Hybrid-ARQ detects the failed CRC and automatically resends the lost packet within milliseconds so your webpage still loads cleanly.",
        emoji: "📶",
      },
    ],
    videos: [
      {
        title: "CIE IGCSE CS 0478 — Data Packets & Packet Switching",
        channel: "Craig'n'Dave / IGCSE CS",
        url: "https://www.youtube.com/results?search_query=CIE+IGCSE+Computer+Science+0478+data+packets+packet+switching",
      },
      {
        title: "CIE IGCSE CS 0478 — Serial, Parallel, Simplex, Duplex & USB",
        channel: "Cambridge IGCSE CS Revision",
        url: "https://www.youtube.com/results?search_query=CIE+IGCSE+Computer+Science+0478+serial+parallel+simplex+duplex+USB",
      },
      {
        title: "CIE IGCSE CS 0478 — Parity Blocks, Checksums, Check Digits & ARQ",
        channel: "Cambridge IGCSE CS Revision",
        url: "https://www.youtube.com/results?search_query=CIE+IGCSE+Computer+Science+0478+parity+block+checksum+check+digit+ARQ",
      },
    ],
    formulas: [
      {
        name: "Packet Count (IEC Units)",
        formula: "Packets = Total Payload (in KiB) ÷ Packet Payload Size (in KiB)",
        note: "Remember 1 MiB = 1024 KiB on CIE 0478! E.g. 2 MiB ÷ 64 KiB = 2048 ÷ 64 = 32 packets.",
      },
      {
        name: "Packet Header vs Trailer Trap",
        formula: "Header = Sender IP + Dest IP + Packet # + Hop Count | Trailer = End Marker + CRC",
        note: "Never put CRC error checking in the header, and never put IP addresses in the trailer!",
      },
      {
        name: "Simplex / Half-Duplex / Full-Duplex",
        formula: "Simplex = 1 way | Half-Duplex = 2 ways (turns) | Full-Duplex = 2 ways SIMULTANEOUSLY",
        note: "Always write 'simultaneously' or 'at the same time' to secure full CIE marks.",
      },
      {
        name: "Serial vs Parallel Trap",
        formula: "Serial = 1 bit at a time, 1 wire (no skew) | Parallel = multiple bits simultaneously (short CPU buses)",
        note: "Parallel suffers data skew and crosstalk over long cables.",
      },
      {
        name: "USB Plug-and-Play Handshake",
        formula: "Voltage change detected → Device recognised → OS loads Device Driver (or prompts user)",
        note: "4 wires: Red (+5V), Black (Ground), White/Green (D−/D+ serial data); ~5 m max passive cable.",
      },
      {
        name: "Even vs Odd Parity Rule",
        formula: "Even Parity: total 1s mod 2 = 0 | Odd Parity: total 1s mod 2 = 1",
        note: "Blind spot: any even number of bit flips (2, 4, 6, 8) leaves total parity unchanged!",
      },
      {
        name: "2D Parity Block Fault Location",
        formula: "Corrupted Bit = (Row failing parity, Column failing parity)",
        note: "Can both pinpoint and auto-correct any single-bit transmission error.",
      },
      {
        name: "ISBN-13 Check Digit (12 digits → 13th)",
        formula: "Total = (Sum of odd pos) + 3 × (Sum of even pos); r = Total MOD 10; Check = 0 if r=0 else 10 − r",
        note: "If remainder r = 0, check digit is 0 (NEVER 10!). Valid 13-digit ISBN has Total MOD 10 = 0.",
      },
      {
        name: "Check Digit vs Checksum",
        formula: "Check Digit = human data-entry validation (barcodes/ISBN) | Checksum = network block transmission check",
        note: "Check digits catch wrong digit, adjacent transposition, omitted/extra digit, and phonetic errors.",
      },
      {
        name: "ARQ Error-Control Protocol",
        formula: "Send + Start Timer → CRC check → Positive/Negative ACK → Retransmit on NAK or Timeout",
        note: "Repeats automatically until Positive ACK arrives or preset retry limit is reached.",
      },
    ],
  },
};
