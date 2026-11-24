import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "data-transmission-m1",
    title: "Data Transmission MCQ Paper 1 — Core Foundations",
    questions: [
      {
        id: "data-transmission-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "packets-packet-switching",
        question: "Which section of a data packet contains the sender's IP address, the destination IP address, and the packet sequence number?",
        options: ["Payload", "Routing table", "Packet trailer", "Packet header"],
        answerIndex: 3,
        hints: ["Think about which part of an envelope tells postal sorting offices where the letter came from and where it is going."],
        explanation:
          "The **packet header** holds routing and sequencing metadata (sender IP, destination IP, packet sequence number, total packet count, and hop limit). The payload holds the user data, while the trailer holds the end-of-packet marker and CRC error check.",
      },
      {
        id: "data-transmission-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "packets-packet-switching",
        question: "What are the two main items stored inside the **trailer** of a data packet?",
        options: [
          "Actual user data (~64 KiB) and packet sequence number",
          "Destination IP address and hop counter",
          "End-of-packet marker and cyclic redundancy check (CRC) error check",
          "Sender MAC address and encryption key",
        ],
        answerIndex: 2,
        hints: ["The trailer comes right at the tail end of the packet after the payload."],
        explanation:
          "The **packet trailer** marks the end of the packet and carries an error-checking value (such as a **CRC**) calculated from the payload. IP addresses and sequence numbers belong in the header.",
      },
      {
        id: "data-transmission-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "packets-packet-switching",
        question:
          "A `4 MiB` data file is split into packets where each packet carries exactly `64 KiB` of payload data (`1 MiB = 1024 KiB`). How many packets are created?",
        options: ["80", "62", "64", "40"],
        answerIndex: 2,
        hints: [
          "Convert `4 MiB` into `KiB` first using `1 MiB = 1024 KiB`.",
          "Divide `4096 KiB` by `64 KiB` per packet.",
        ],
        explanation:
          "`4 MiB = 4 × 1024 = 4096 KiB`. Dividing by `64 KiB` gives `4096 ÷ 64 = 64` packets. Getting `62` or `40` comes from dividing by `1000` instead of `1024`.",
      },
      {
        id: "data-transmission-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "packets-packet-switching",
        question: "During packet switching across the Internet, which network device inspects the destination IP address in each packet header to choose the optimal next path?",
        options: ["Router", "Network Interface Card (NIC)", "Actuator", "Repeater"],
        answerIndex: 0,
        hints: ["Its name comes from choosing the best route between nodes."],
        explanation:
          "A **router** sits at network junctions, reads the destination IP address in each packet's header, consults its routing/congestion metrics, and forwards each packet along the best available route.",
      },
      {
        id: "data-transmission-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "transmission-methods",
        question: "Data travels from a standard wired keyboard to a computer's CPU in **one direction only**. Which term describes this direction of transmission?",
        options: ["Simplex", "Full-duplex", "Half-duplex", "Parallel"],
        answerIndex: 0,
        hints: ["Only one direction is ever used; no data returns along that channel."],
        explanation:
          "**Simplex** transmission sends data in one direction only (sender to receiver). Half-duplex and full-duplex both allow two-way communication, while parallel describes wire count rather than direction.",
      },
      {
        id: "data-transmission-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "transmission-methods",
        question:
          "Two crane operators communicate over walkie-talkies: both can speak and listen, **but only one person can transmit at a time**. Which mode of data transmission is this?",
        options: ["Asynchronous parallel", "Full-duplex", "Half-duplex", "Simplex"],
        answerIndex: 2,
        hints: ["Data goes both ways, just not simultaneously."],
        explanation:
          "**Half-duplex** allows data to travel in both directions, **but not at the same time**. Full-duplex would allow both operators to talk and hear each other simultaneously like a telephone call.",
      },
      {
        id: "data-transmission-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "transmission-methods",
        question: "Why is **serial** data transmission more reliable than **parallel** data transmission over a `25`-metre external cable?",
        options: [
          "Serial transmission never needs any parity checks or checksums over long external cables",
          "Serial sends 8 bits simultaneously down parallel wires so electromagnetic interference cancels out",
          "Serial uses thicker 25-wire ribbon cables wrapped in copper shielding that completely blocks noise",
          "Bits travel one at a time along a single channel so they cannot arrive out of order due to data skew",
        ],
        answerIndex: 3,
        hints: [
          "Compare `1` wire carrying bits sequentially against `8` wires carrying bits side-by-side.",
          "Over `25` metres, slight differences between parallel wires cause bits to arrive unsynchronised.",
        ],
        explanation:
          "In **serial** transmission, bits are sent **one after another down a single wire/channel**, completely eliminating **data skew** (unsynchronised arrival across separate wires) and minimising crosstalk. Parallel sends multiple bits simultaneously, which skews over long cables.",
      },
      {
        id: "data-transmission-m1-q08",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "usb-interface",
        question: "What does the acronym **USB** stand for, and what method of data transmission does it use?",
        options: [
          "Unified Synchronous Bus — simplex parallel transmission",
          "Universal Serial Bus — asynchronous serial data transmission",
          "Universal System Bus — parallel data transmission",
          "Universal Storage Buffer — synchronous parallel transmission",
        ],
        answerIndex: 1,
        hints: ["Look closely at the middle letter 'S' in USB!"],
        explanation:
          "**USB** stands for **Universal Serial Bus** and transmits data **serially** (one bit at a time). Calling it 'Universal System Bus' or 'parallel' is a classic CIE exam trap.",
      },
      {
        id: "data-transmission-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "usb-interface",
        question: "How does a computer initially detect that a peripheral has just been plugged into a USB port?",
        options: [
          "A small change in voltage across the USB data wires alerts the computer",
          "The USB cable sends an 8-bit parallel interrupt down eight separate copper tracks",
          "The user must restart the BIOS setup utility to scan all ports",
          "The peripheral overwrites the bootstrap program inside ROM",
        ],
        answerIndex: 0,
        hints: [
          "USB supports hot plug-and-play without rebooting.",
          "Think electrically: what changes on `D+` / `D−` the instant the connector makes contact?",
        ],
        explanation:
          "Plugging in a USB device causes a small **change in voltage** on the data wires, which the computer automatically detects before recognising the device and loading its **device driver**.",
      },
      {
        id: "data-transmission-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "parity-checksum-echo",
        question: "Four `8`-bit bytes are received over a link that uses **Even Parity**. Which received byte contains a detected transmission error?",
        options: ["10110010", "11010110", "00000000", "01101100"],
        answerIndex: 1,
        hints: [
          "Count the total number of `1`s in each `8`-bit byte.",
          "Under Even Parity, any byte with an **odd** count of `1`s fails the check (`0` counts as even!).",
        ],
        explanation:
          "`11010110` contains **five** `1`s (`5` is odd), violating Even Parity! Both `10110010` and `01101100` have four `1`s (even), and `00000000` has zero `1`s (`0` is an even number).",
      },
      {
        id: "data-transmission-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "parity-checksum-echo",
        question:
          "A system transmits `7`-bit ASCII codes with an **Odd Parity** bit placed in the leftmost (most significant) bit position. Which `8`-bit byte is transmitted for the `7`-bit code `0110101`?",
        options: ["00110101", "10110101", "01101011", "11001010"],
        answerIndex: 1,
        hints: [
          "First count how many `1`s are already in the `7` data bits `0110101`.",
          "Keep `0110101` in the rightmost `7` positions and choose the leftmost bit (`0` or `1`) so the total count of `1`s is odd.",
        ],
        explanation:
          "`0110101` contains **four** `1`s (even). For **Odd Parity**, we need an odd total (`5` ones), so we place `1` in the leftmost MSB slot to get **`10110101`**. `00110101` would be Even Parity.",
      },
      {
        id: "data-transmission-m1-q12",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "parity-checksum-echo",
        question: "In which error-detection method does the receiving computer send an exact copy of the received data straight back to the sending computer for comparison?",
        options: ["Echo check", "Checksum", "Check digit", "Parity block"],
        answerIndex: 0,
        hints: ["Like shouting into a canyon and hearing your own words bounce back."],
        explanation:
          "An **echo check** returns the received data to the sender, which compares it with the original data sent. A checksum sends only a calculated summary number along with the block.",
      },
      {
        id: "data-transmission-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "check-digits-arq",
        question:
          "Using the standard **ISBN-13** check-digit algorithm (sum of odd positions `1,3,5,7,9,11` plus `3 ×` sum of even positions `2,4,6,8,10,12`, then `MOD 10`, and subtract non-zero remainder from `10`), what is the `13`th check digit for `9 7 8 0 1 9 8 4 2 5 6 0`?",
        options: ["9", "7", "1", "3"],
        answerIndex: 2,
        hints: [
          "Odd positions (`1,3,5,7,9,11`): `9 + 8 + 1 + 8 + 2 + 6 = 34`.",
          "Even positions (`2,4,6,8,10,12`): `7 + 0 + 9 + 4 + 5 + 0 = 25`. Multiply `25 × 3 = 75`, add `34 + 75 = 109`, then take `10 − (109 MOD 10)`.",
        ],
        explanation:
          "Odd-position sum = `34`; even-position sum = `25`, so `25 × 3 = 75`. Total = `34 + 75 = 109`. `109 MOD 10 = 9` (the distractors `9` forgets the final `10 − remainder` step!). Subtracting from `10` gives `10 − 9 = 1`.",
      },
      {
        id: "data-transmission-m1-q14",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "check-digits-arq",
        question: "What is the primary purpose of appending a **check digit** to a product barcode or ISBN book number?",
        options: [
          "To encrypt the product price so hackers cannot read it",
          "To detect human data-entry or barcode-scanning errors such as mistyped or transposed digits",
          "To compress the barcode so it takes half as many bits in RAM",
          "To choose the fastest router path during packet switching",
        ],
        answerIndex: 1,
        hints: ["Check digits are printed on books and parcels before anyone types the code in."],
        explanation:
          "A **check digit** is a validation check calculated from preceding digits to catch **data-entry/scanning errors** (wrong digit, swapped adjacent digits, missing/extra digit). Encryption and routing are unrelated.",
      },
      {
        id: "data-transmission-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "check-digits-arq",
        question:
          "In **Automatic Repeat Query (ARQ)**, what happens if a transmitted packet disappears completely in transit so the receiver never receives anything?",
        options: [
          "The sender permanently deletes the remaining file packets after waiting one microsecond for a reply",
          "The receiver detects the missing sequence gap right away and sends a negative acknowledgement immediately",
          "The intermediate router reconstructs the missing packet payload automatically from its stored parity bit",
          "The sender's timeout expires without receiving a positive acknowledgement, so the sender automatically retransmits the packet",
        ],
        answerIndex: 3,
        hints: [
          "If the receiver never saw the packet at all, can the receiver send a Negative ACK?",
          "What timer did the sender start the moment it sent the packet?",
        ],
        explanation:
          "Because the receiver never saw the lost packet, it sends nothing back. Once the sender's **timeout** elapses without a **positive acknowledgement**, the sender **automatically retransmits** the packet (up to its retry limit).",
      },
    ],
  },
  {
    id: "data-transmission-m2",
    title: "Data Transmission MCQ Paper 2 — Exam Application & Traps",
    questions: [
      {
        id: "data-transmission-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "packets-packet-switching",
        question:
          "A document is split into `5` packets (`P1` to `P5`) and sent via packet switching. They arrive at the destination in the order `P3, P1, P5, P2, P4`. Why did this happen, and how is the document restored?",
        options: [
          "The host computer's USB driver inverted the packet order; an echo check reverses them back to the original sequence",
          "Routers sent packets along different routes independently; the receiver reorders them using the packet sequence number in each header",
          "Full-duplex collisions scrambled the payload order; vertical parity bits automatically re-number every arriving packet",
          "Parallel data skew shuffled the packets in transit; the trailer's hop counter sorts them back into numerical order",
        ],
        answerIndex: 1,
        hints: [
          "In packet switching, each router picks the least congested link per packet.",
          "Which field in the packet header records `1, 2, 3, 4, 5`?",
        ],
        explanation:
          "Routers route each packet **independently** around busy links, so travel times differ and packets arrive out of sequence. The destination reads the **packet sequence number** in each **packet header** to reassemble `P1..P5` accurately.",
      },
      {
        id: "data-transmission-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "packets-packet-switching",
        question:
          "A packet leaves a sender with its **hop number** (TTL) initialised to `15`. Every router it passes through subtracts `1` from the hop number. What happens if a routing loop causes this packet to visit `15` routers without reaching its destination?",
        options: [
          "The payload is compressed by 50% at each router after hop 15",
          "The router converts the packet into parallel simplex mode",
          "The hop number reaches 0 and the packet is discarded so it cannot circulate on the network forever",
          "The 15th router resets the hop number back to 255 and broadcasts it to every LAN",
        ],
        answerIndex: 2,
        hints: [
          "What would happen to Internet traffic if millions of unroutable packets bounced between routers forever?",
          "Check what routers do the instant `hop count = 0`.",
        ],
        explanation:
          "Decrementing the hop counter at every router ensures that once it hits **`0`**, the router **deletes/discards** the packet — preventing lost packets from clogging network bandwidth endlessly.",
      },
      {
        id: "data-transmission-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "packets-packet-switching",
        question: "Which statement is a genuine **drawback** of packet switching when used for a live real-time video conference?",
        options: [
          "One user monopolises an entire dedicated copper line from start to finish",
          "Packets cannot carry binary image or sound payloads",
          "Variable routing delays and time spent reordering/resending packets cause latency and jitter",
          "A single broken cable between two cities permanently cuts off the entire call",
        ],
        answerIndex: 2,
        hints: [
          "Packet switching easily routes around broken cables and shares lines — those are benefits!",
          "Think about what happens to live speech when packets arrive late or out of sequence.",
        ],
        explanation:
          "Because packets take varying paths and must be buffered/reordered (or retransmitted if lost), packet switching introduces **delay/jitter** at the destination. Dedicated lines and single-cable failure apply to circuit switching, not packet switching.",
      },
      {
        id: "data-transmission-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "transmission-methods",
        question:
          "A home laptop streams a live video call over a fibre-optic broadband cable: audio/video travel **to and from** the laptop **at the exact same time**, sent **one light pulse after another** along a single fibre strand per direction. Which pair correctly classifies this link?",
        options: [
          "Full-duplex serial transmission",
          "Simplex parallel transmission",
          "Half-duplex serial transmission",
          "Full-duplex parallel transmission",
        ],
        answerIndex: 0,
        hints: [
          "Both directions at the exact same time → which duplex mode?",
          "One bit after another down a single strand → serial or parallel?",
        ],
        explanation:
          "Simultaneous two-way communication is **full-duplex**, and sending bits sequentially one at a time rather than across `8+` side-by-side wires is **serial** transmission.",
      },
      {
        id: "data-transmission-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "transmission-methods",
        question: "Where inside a computer system is **parallel** data transmission STILL preferred over serial data transmission?",
        options: [
          "Across internal CPU and motherboard buses over millimetres where high-speed simultaneous transfer has negligible skew",
          "Transmitting web pages and video streams between continents across long undersea fibre-optic cables",
          "Connecting an external USB flash drive to a laptop via a standard 2-metre shielded peripheral cable",
          "Connecting a battery-powered wireless mouse and keyboard to a desktop across a classroom desk",
        ],
        answerIndex: 0,
        hints: [
          "Parallel transmission only works cleanly when wires are extremely short and matched in length.",
          "Think inside the processor / PCB!",
        ],
        explanation:
          "Over **very short distances** inside integrated circuits and internal CPU/motherboard buses, sending `16`, `32`, or `64` bits simultaneously in **parallel** achieves massive throughput per clock tick before data skew becomes significant.",
      },
      {
        id: "data-transmission-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "transmission-methods",
        question: "What is meant by **crosstalk** in parallel data transmission?",
        options: [
          "A router accidentally swapping the sender IP and destination IP in a header",
          "Electromagnetic interference between closely spaced adjacent wires that can corrupt bits on neighbouring lines",
          "Two users speaking at the same time on a telephone call",
          "An operating system loading two device drivers at once",
        ],
        answerIndex: 1,
        hints: [
          "When electric currents switch rapidly on parallel copper wires packed millimetres apart, magnetic fields induce currents in neighbours.",
          "Contrast crosstalk (interference) with data skew (timing drift).",
        ],
        explanation:
          "**Crosstalk** is electromagnetic interference leaking between adjacent parallel wires, potentially flipping `0`s and `1`s on neighbouring tracks. Timing drift between wires is called **data skew**.",
      },
      {
        id: "data-transmission-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "usb-interface",
        question: "Which statement accurately describes a limitation of a standard passive **USB** cable?",
        options: [
          "It can only transmit data in simplex mode from printer to computer",
          "It cannot supply any electrical power to connected peripherals",
          "Its maximum reliable cable length is approximately 5 metres without using powered hubs or repeaters",
          "It requires the user to manually set DIP switches to avoid IRQ conflicts",
        ],
        answerIndex: 2,
        hints: [
          "USB supplies `+5V` power and auto-configures drivers — so eliminate those false statements.",
          "Recall the CIE 0478 standard maximum length for a single passive USB cable.",
        ],
        explanation:
          "Standard passive USB cables are limited to roughly **`5` metres** because high-frequency serial signals attenuate and exceed timing tolerances over longer runs unless regenerated by a hub/active repeater.",
      },
      {
        id: "data-transmission-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "parity-checksum-echo",
        question:
          "Byte `01011001` (`4` ones, Even Parity) is transmitted, and electrical noise flips **two** bits so it arrives as `01111000`. Why does the Even Parity check **fail to detect** this corruption?",
        options: [
          "Because `01111000` is a reserved USB control byte",
          "Because `01111000` still contains an even number of `1`s (`4` ones) after one `0→1` flip and one `1→0` flip",
          "Because parity checks can only be used on parallel cables",
          "Because Even Parity only checks the leftmost bit and ignores the other seven bits",
        ],
        answerIndex: 1,
        hints: [
          "Compare `01011001` (`4` ones) with `01111000` (`4` ones): bit 3 flipped `0→1` and bit 8 flipped `1→0`.",
          "Does Even Parity know WHICH bits were `1`, or only whether the total count of `1`s is even?",
        ],
        explanation:
          "Original `01011001` had `4` ones; corrupted `01111000` had **two bits flipped** (`0→1` and `1→0`), leaving **`4` ones** — still even! Single-byte parity NEVER catches an even number (`2, 4, 6, 8`) of bit flips.",
      },
      {
        id: "data-transmission-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "parity-checksum-echo",
        question:
          "Three `4`-bit rows and an **Even Parity** row are received (columns numbered `Bit 1` to `Bit 4` from left to right):\n\n" +
          "| Row | Bit 1 | Bit 2 | Bit 3 | Bit 4 |\n" +
          "|---|---|---|---|---|\n" +
          "| Byte 1 | 1 | 0 | 1 | 0 |\n" +
          "| Byte 2 | 0 | 1 | 1 | 1 |\n" +
          "| Byte 3 | 1 | 1 | 0 | 0 |\n" +
          "| Parity | 0 | 0 | 1 | 1 |\n\n" +
          "Which single bit was corrupted during transmission?",
        options: ["Byte 3, Bit 3", "Byte 2, Bit 4", "Byte 2, Bit 2", "Byte 2, Bit 3"],
        answerIndex: 3,
        hints: [
          "Count `1`s across each horizontal row to find which row has an **odd** count of `1`s.",
          "Count `1`s down each vertical column (including the Parity row!) to find which column has an **odd** count of `1`s.",
        ],
        explanation:
          "Row check: Byte 2 (`0 1 1 1`) has **three** `1`s (odd → fails Even Parity), while all other rows have `2` ones. Column check: `Bit 3` column (`1, 1, 0, 1`) has **three** `1`s (odd → fails Even Parity), while columns `1, 2, 4` each have `2` ones. Their intersection is **Byte 2, Bit 3**!",
      },
      {
        id: "data-transmission-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "parity-checksum-echo",
        question: "Why is an **echo check** considered unreliable for proving that the receiver holds uncorrupted data?",
        options: [
          "If the returned data differs from the original, the sender cannot tell whether the error happened on the outward journey or on the return journey",
          "Echo checks always require manual human visual verification on a monitor screen before any byte is accepted",
          "Echo checks can only validate 4-bit nibbles on simplex links and cannot compare full 8-bit transmitted bytes",
          "The receiver deletes its entire copy of the incoming data buffer the instant it sends the echo copy back",
        ],
        answerIndex: 0,
        hints: [
          "Trace both legs of the round trip: Sender → Receiver, then Receiver → Sender.",
          "What if the receiver actually received the data 100% cleanly, and noise only hit the echo coming back?",
        ],
        explanation:
          "In an **echo check**, data travels twice (outward and back). If the echoed copy doesn't match, there is **no way to tell whether corruption occurred going to the receiver or returning to the sender** — plus network traffic is doubled.",
      },
      {
        id: "data-transmission-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "parity-checksum-echo",
        question: "Which statement accurately describes how a **checksum** detects transmission errors?",
        options: [
          "The operator types the block of bytes twice from a source document and the operating system compares both keyboard entries for discrepancies",
          "Each transmitted byte has its leftmost bit set to 0 or 1 so the total count of 1-bits across every single byte is always odd",
          "Every router along the path subtracts 1 from the checksum counter in the packet trailer and discards the packet once it reaches 0",
          "The sender calculates a summary value from a block of bytes and sends it along; the receiver recalculates it and compares both values",
        ],
        answerIndex: 3,
        hints: [
          "Unlike a check digit on a typed barcode, a checksum accompanies a **block of bytes** across a network.",
          "Both sender and receiver run the exact same calculation on the data block.",
        ],
        explanation:
          "A **checksum** is computed mathematically across a whole block of data bytes and appended to the transmission. The receiver runs the **identical algorithm** on the received bytes: any mismatch between the calculated and received checksums flags a transmission error.",
      },
      {
        id: "data-transmission-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "check-digits-arq",
        question: "A warehouse clerk types product code `482917` as `489217` by mistake. What is the specific name for this human data-entry error that a weighted check digit is designed to catch?",
        options: ["Data skew error", "Transposition error", "Overflow error", "Crosstalk error"],
        answerIndex: 1,
        hints: [
          "Look at positions 3 and 4: `29` became `92`.",
          "What do CIE mark schemes call swapping two adjacent digits?",
        ],
        explanation:
          "Accidentally swapping two adjacent digits (`29` ↔ `92`) is a **transposition error**. Because check-digit algorithms assign **different weights** to neighbouring positions, swapping them alters the weighted total and invalidates the check digit.",
      },
      {
        id: "data-transmission-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "check-digits-arq",
        question:
          "Calculate the `13`th check digit for the `12`-digit ISBN prefix `9 7 8 0 3 0 6 4 0 6 8 5` using the CIE **ISBN-13** rule: compute `r = (odd-pos sum + 3 × even-pos sum) MOD 10`; if `r = 0` the check digit is `0`, otherwise it is `10 − r`.",
        options: ["5", "9", "1", "0"],
        answerIndex: 3,
        hints: [
          "Odd positions (`1,3,5,7,9,11`): `9 + 8 + 3 + 6 + 0 + 8 = 34`.",
          "Even positions (`2,4,6,8,10,12`): `7 + 0 + 0 + 4 + 6 + 5 = 22`; `22 × 3 = 66`. Total = `34 + 66 = 100`. Watch the `MOD 10 = 0` rule!",
        ],
        explanation:
          "`34 + 66 = 100`, and `100 MOD 10 = 0`. When the remainder is `0`, the ISBN-13 check digit is **`0`** (NEVER `10`, because a check digit must be a single digit `0–9`!).",
      },
      {
        id: "data-transmission-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "check-digits-arq",
        question: "Which combination of mechanisms is used by **Automatic Repeat Query (ARQ)** to control transmission errors?",
        options: [
          "Error-detection code (such as CRC), positive/negative acknowledgements, and a timeout timer",
          "Double entry verification at the keyboard combined with manual visual screen checks",
          "Multi-wire parallel ribbon cables paired with voltage-change device driver loading",
          "Logical left bit shifts combined with Two's Complement sign-bit inversion checks",
        ],
        answerIndex: 0,
        hints: [
          "ARQ needs a way to spot a bad packet, a way for the receiver to reply, and a timer in case nothing comes back.",
          "Double entry is human verification, not network ARQ!",
        ],
        explanation:
          "**ARQ** pairs an error-detection check (like **CRC** or checksum) with **positive/negative acknowledgements** and a **timeout** so corrupted or missing packets are automatically retransmitted.",
      },
      {
        id: "data-transmission-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "usb-interface",
        question: "Inside a standard `4`-wire shielded USB cable, two wires (`D+` and `D−`) carry serial data. What is the purpose of the other two wires?",
        options: [
          "They store the peripheral's device driver permanently inside shielded copper coils",
          "They carry two extra parallel data bits simultaneously to triple the byte transfer width",
          "They provide `+5V` DC power and Earth/Ground so connected small devices can be powered or charged",
          "They act as duplex glass optical fibres dedicated to high-speed laser Blu-ray signals",
        ],
        answerIndex: 2,
        hints: [
          "Why doesn't a wired USB mouse or thumb drive need its own wall power plug?",
          "Every DC circuit needs a `+5V` supply line and a return Ground line.",
        ],
        explanation:
          "In a `4`-wire USB cable, the **Red** wire supplies **`+5V` DC power** (`VBUS`) and the **Black** wire provides **Earth/Ground**, allowing peripherals like mice, keyboards, and phones to draw power directly from the host port.",
      },
    ],
  },
  {
    id: "data-transmission-m3",
    title: "Data Transmission MCQ Paper 3 — Stretch & Exam Mastery",
    questions: [
      {
        id: "data-transmission-m3-q01",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "packets-packet-switching",
        question:
          "A `1.5 MiB` audio clip is transmitted in packets where each packet has a `64 KiB` payload PLUS `64 bytes` of header/trailer overhead (`1 MiB = 1024 KiB`, `1 KiB = 1024 bytes`). How many packets are sent, and what is the **total overhead** across all packets in `KiB`?",
        options: [
          "32 packets and 2 KiB total overhead",
          "24 packets and 24 KiB total overhead",
          "24 packets and 1.5 KiB total overhead",
          "15 packets and 1.5 KiB total overhead",
        ],
        answerIndex: 2,
        hints: [
          "First find packet count: `1.5 MiB = 1.5 × 1024 = 1536 KiB`; divide `1536 ÷ 64`.",
          "Multiply the number of packets by `64 bytes` of overhead per packet, then divide by `1024 bytes/KiB`.",
        ],
        explanation:
          "`1.5 × 1024 = 1536 KiB` of payload. `1536 ÷ 64 = 24` packets. Each packet adds `64 bytes` of header+trailer overhead: `24 × 64 = 1536 bytes`. Converting to `KiB`: `1536 ÷ 1024 = 1.5 KiB`.",
      },
      {
        id: "data-transmission-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "packets-packet-switching",
        question:
          "When a receiving computer checks a packet's **trailer**, how does the **Cyclic Redundancy Check (CRC)** reveal that the payload was corrupted during packet switching?",
        options: [
          "The sender's IP address stored in the packet header no longer matches the intermediate router's physical MAC address",
          "The receiver recalculates the check value from the received payload bits and finds it does not match the CRC value stored in the trailer",
          "The payload length automatically doubles to 128 KiB whenever a single bit flips during transmission across a network link",
          "The hop counter inside the packet header turns into a negative Two's Complement integer after passing through a noisy switch",
        ],
        answerIndex: 1,
        hints: [
          "The sender computed the trailer's CRC from the payload before transmission.",
          "What does the receiver compute on arrival?",
        ],
        explanation:
          "The sender calculates a **CRC** value from the `1`-bits/polynomial of the payload and puts it in the **trailer**. The receiver performs the **same calculation** on the arriving payload; if the result differs from the trailer's CRC, payload corruption is detected.",
      },
      {
        id: "data-transmission-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "transmission-methods",
        question:
          "An automated factory controller sends actuator commands TO a robotic arm AND simultaneously receives live position-sensor readings FROM the arm along a single pair of differential twisted wires (one wire pair per direction, `1` bit at a time). How should this link be classified?",
        options: [
          "Half-duplex parallel",
          "Full-duplex parallel",
          "Simplex serial",
          "Full-duplex serial",
        ],
        answerIndex: 3,
        hints: [
          "Commands go out while sensor readings come back **simultaneously** → Full-duplex.",
          "Each stream travels `1` bit at a time rather than `8` bits side-by-side → Serial.",
        ],
        explanation:
          "Because data flows in **both directions at the same time**, it is **full-duplex**; because each direction sends **one bit sequentially** rather than an `8`-bit byte across `8` wires, it is **serial**.",
      },
      {
        id: "data-transmission-m3-q04",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "transmission-methods",
        question:
          "Modern external interfaces like **USB 3** and **PCIe / SATA** switched from wide parallel ribbon cables to **serial** lanes, yet achieve *higher* real-world transfer speeds than old parallel cables. Why?",
        options: [
          "Eliminating inter-wire data skew allows serial links to be clocked at vastly higher frequencies without bits overlapping neighbour bytes",
          "Serial cables transmit 64 bits simultaneously side-by-side down a single copper conductor at a fixed 1 Hz clock rate",
          "Serial interfaces skip packet headers, trailers, and all error-detection algorithms to cut transmission overhead to zero",
          "Parallel ribbon wires can only transmit binary 0s over external cables and require a separate serial wire for binary 1s",
        ],
        answerIndex: 0,
        hints: [
          "What stopped engineers from simply cranking up the clock frequency of a `40`-wire parallel ribbon cable?",
          "Without data skew between parallel wires, how fast can a single serial lane switch?",
        ],
        explanation:
          "On a parallel cable, raising the clock speed makes **data skew** fatal because bits on slightly slower wires slip into the next clock cycle! Because a **serial** lane sends `1` bit after another on one channel with **zero inter-wire skew**, its clock rate can scale into gigahertz.",
      },
      {
        id: "data-transmission-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "usb-interface",
        question:
          "A user plugs a brand-new model of graphics tablet into a laptop's USB port for the first time. After detecting the voltage change and identifying the device, the operating system cannot find a matching driver locally. What happens next?",
        options: [
          "The graphics tablet directly rewrites the laptop CPU's native instruction set stored inside non-volatile ROM",
          "The connection automatically switches from asynchronous USB serial mode into Centronics 8-bit parallel mode",
          "The operating system prompts the user to download/install the appropriate device driver (or fetches it automatically online)",
          "The USB host controller permanently disables the port hardware to protect active programs in primary RAM",
        ],
        answerIndex: 2,
        hints: [
          "Recall the 3rd mark point of the CIE USB plug-and-play sequence when the driver is NOT already stored on the machine.",
          "How does the OS get the missing translation software?",
        ],
        explanation:
          "On CIE `0478`, if the required **device driver** is not already installed on the computer, the OS **prompts the user to download/install the appropriate driver** (or automatically downloads it) so communication can begin.",
      },
      {
        id: "data-transmission-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "usb-interface",
        question: "Which advantage applies specifically to modern **USB-C** connectors compared with older **USB-A** connectors, while keeping all standard USB benefits?",
        options: [
          "USB-C is rotationally symmetrical (reversible), so it plugs in either way up without upside-down orientation",
          "USB-C removes the need for device drivers in the operating system",
          "USB-C uses 16-bit parallel data transmission over 50-metre passive cables",
          "USB-C eliminates electromagnetic physics so unshielded string can be used",
        ],
        answerIndex: 0,
        hints: [
          "Think about trying to plug a rectangular USB-A stick in on the first try versus an oval USB-C plug!",
          "Does USB-C still use serial transmission and device drivers? Yes!",
        ],
        explanation:
          "While classic USB-A fits only one way (preventing wrong pin contact), **USB-C** has a symmetrical **reversible** connector that fits cleanly either way up while remaining backward compatible via adapters.",
      },
      {
        id: "data-transmission-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "parity-checksum-echo",
        question:
          "An `8`-bit byte `11001010` (`4` ones) is sent over an **Even Parity** link. Electrical interference corrupts **some** bits. Which received byte WILL trigger an Even Parity error alert?",
        options: ["00001010", "11011010", "11111010", "11000110"],
        answerIndex: 1,
        hints: [
          "Even Parity ONLY triggers an error when the received byte has an **odd** total number of `1`s!",
          "Count the `1`s in each candidate: `2`, `6`, `4`, vs `5`.",
        ],
        explanation:
          "`11011010` has **five** `1`s (`1` bit flipped), which is odd — so Even Parity catches it! In contrast, `00001010` (`2` ones, two bits flipped), `11111010` (`6` ones, two bits flipped), and `11000110` (`4` ones, two adjacent bits swapped) all have an **even** count of `1`s and slip past undetected!",
      },
      {
        id: "data-transmission-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "parity-checksum-echo",
        question:
          "Three `8`-bit data bytes and an **Odd Parity** byte are received (columns `Bit 1` to `Bit 8` from left to right):\n\n" +
          "| Row | B1 | B2 | B3 | B4 | B5 | B6 | B7 | B8 |\n" +
          "|---|---|---|---|---|---|---|---|---|\n" +
          "| Byte 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |\n" +
          "| Byte 2 | 0 | 1 | 1 | 1 | 0 | 0 | 0 | 0 |\n" +
          "| Byte 3 | 0 | 0 | 1 | 0 | 1 | 0 | 0 | 0 |\n" +
          "| Parity | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 1 |\n\n" +
          "Every valid row and column must have an **odd** number of `1`s. Which exact bit was corrupted?",
        options: ["Byte 3, Bit 3", "Byte 3, Bit 6", "Parity, Bit 6", "Byte 2, Bit 6"],
        answerIndex: 1,
        hints: [
          "Warning: this system uses **Odd Parity** — valid rows and columns have `1, 3, 5, ...` ones, whereas an **even** count (`0, 2, 4...`) is an ERROR!",
          "Check row totals (`1, 3, 2, 3`) and column totals (`1, 1, 3, 1, 1, 0, 1, 1`). Remember `0` is EVEN!",
        ],
        explanation:
          "Under **Odd Parity**, every row and column needs an odd count of `1`s. **Byte 3** has `2` ones (even ✗), and **Bit 6** column (`0, 0, 0, 0`) has `0` ones (`0` is even ✗!). Their intersection is **Byte 3, Bit 6** — flipping it from `0` to `1` restores both Byte 3 (`3` ones) and Bit 6 (`1` one) to odd parity!",
      },
      {
        id: "data-transmission-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "parity-checksum-echo",
        question:
          "Even a **2D Parity Block** cannot detect EVERY multi-bit transmission error. Which specific `4`-bit corruption pattern inside a parity block goes **completely undetected** by both row and column parity checks?",
        options: [
          "Three bits flipping in Byte 1 and one bit flipping in Byte 2",
          "Four bits flipping in the exact same row",
          "Four bits flipping at the four corners of a rectangle (two rows × two columns)",
          "Four consecutive bits flipping in Column 1",
        ],
        answerIndex: 2,
        hints: [
          "For BOTH row checks AND column checks to be fooled, every affected row must suffer an **even** number of flips AND every affected column must suffer an **even** number of flips!",
          "What happens if `(r1, c1), (r1, c2), (r2, c1), (r2, c2)` all flip?",
        ],
        explanation:
          "If four bits flip at the corners of a **rectangle** `(r1, c1), (r1, c2), (r2, c1), (r2, c2)`, row `r1` has `2` flips, row `r2` has `2` flips, column `c1` has `2` flips, and column `c2` has `2` flips — every single row and column parity stays valid! (Four flips in one row would still break `4` separate column checks!)",
      },
      {
        id: "data-transmission-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "check-digits-arq",
        question:
          "A complete `13`-digit ISBN-13 code `9 7 8 0 5 2 1 6 8 0 4 6 2` is scanned at a library desk. How does the computer verify whether all `13` digits form a valid ISBN-13?",
        options: [
          "It counts whether there is an odd number of digit 9s across the 13-digit barcode before accepting the book",
          "It sums the 7 odd-positioned digits plus 3 times the sum of the 6 even-positioned digits, and checks that the total MOD 10 equals 0",
          "It adds all 13 digits together with equal weight of 1 and checks whether the unweighted sum is an even number",
          "It echoes all 13 scanned digits back to the publisher's remote web server over an ARQ timeout link for verification",
        ],
        answerIndex: 1,
        hints: [
          "Positions `1, 3, 5, 7, 9, 11, 13` get weight `1`; positions `2, 4, 6, 8, 10, 12` get weight `3`.",
          "Remember how the `13`th digit (`10 − r`) was chosen in the first place!",
        ],
        explanation:
          "Because the `13`th check digit (at odd position `13`, weight `1`) was chosen as `10 − (12-digit weighted sum MOD 10)`, adding it into `(sum of all 7 odd positions) + 3 × (sum of all 6 even positions)` produces an exact multiple of `10` (`Total MOD 10 = 0`) whenever the ISBN-13 is valid (`35 + 2 + 63 = 100`).",
      },
      {
        id: "data-transmission-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "check-digits-arq",
        question: "Which of the following errors CANNOT be detected by a check digit on an order form?",
        options: [
          "Typing a single wrong digit such as 7 instead of 4 inside an item code while keeping the original check digit",
          "Accidentally omitting one digit from the middle of a 10-digit product code before submitting the order form",
          "Swapping two neighbouring digits from 38 to 83 (a transposition error) in a weighted barcode number",
          "Accidentally typing a different customer's valid account number along with that customer's matching check digit",
        ],
        answerIndex: 3,
        hints: [
          "Remember: check digits are a **validation** check (is this a mathematically valid code?), NOT a mind-reader!",
          "If Customer B's account number is genuinely valid, will its check digit pass the formula?",
        ],
        explanation:
          "A check digit is a **validation** rule: it catches mistyped digits, adjacent transpositions, and omitted digits, **but if someone enters another valid code whose check digit matches**, the mathematical formula passes completely! Verification (visual check) is needed to spot the wrong valid code.",
      },
      {
        id: "data-transmission-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "check-digits-arq",
        question:
          "A `4`-digit code `4 1 5 2` uses a **Modulo-11** check digit calculated as follows: multiply the four digits from left to right by weights `5, 4, 3, 2`, add the products, find the remainder when divided by `11`, and subtract that remainder from `11`. What is the check digit?",
        options: ["7", "10 (X)", "1", "4"],
        answerIndex: 2,
        hints: [
          "Compute `4×5 + 1×4 + 5×3 + 2×2`.",
          "`20 + 4 + 15 + 4 = 43`. Now find `43 MOD 11`, and don't forget to subtract the remainder from `11`!",
        ],
        explanation:
          "Weighted sum = `4×5 + 1×4 + 5×3 + 2×2 = 20 + 4 + 15 + 4 = 43`. Dividing `43` by `11` gives `3` remainder **`10`** (`3 × 11 = 33`, `43 − 33 = 10`). Subtracting the remainder from `11` gives `11 − 10 = 1`! (`10 (X)` is the trap if you stop at the remainder without subtracting from `11`.)",
      },
      {
        id: "data-transmission-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "check-digits-arq",
        question:
          "In an **ARQ** system, Packet 7 arrives at the receiver intact, so the receiver sends back a **positive acknowledgement (ACK)** — but interference destroys that ACK on its way back to the sender! What happens next?",
        options: [
          "The sender's timeout expires without seeing the ACK, so the sender automatically retransmits Packet 7",
          "Packet 7 is converted into an echo check",
          "The router generates a fake positive ACK using Odd Parity",
          "The connection crashes permanently because the receiver already closed its buffer",
        ],
        answerIndex: 0,
        hints: [
          "From the sender's point of view, can it tell the difference between 'Packet 7 was lost' and 'ACK 7 was lost'?",
          "What does the sender always do when its timeout expires before a positive ACK arrives?",
        ],
        explanation:
          "Because the **positive acknowledgement** never reached the sender before the **timeout** expired, the sender assumes Packet 7 failed and **automatically retransmits Packet 7** (the receiver sees duplicate sequence `#7`, discards the duplicate payload, and re-sends the positive ACK!).",
      },
      {
        id: "data-transmission-m3-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "check-digits-arq",
        question: "Why do practical **ARQ** protocols enforce a **pre-set maximum number of retransmission attempts** rather than retrying forever?",
        options: [
          "Because parity bits inside network interface cards wear out permanently after three error-checking calculations",
          "Because routers automatically delete all stored IPv4 routing entries after five seconds of continuous traffic",
          "Because packet sequence numbers in the header only use 2 bits and therefore cannot count beyond 3 in binary",
          "So that if a network link is dead or unplugged, the sender stops resending endlessly and reports a connection timeout error",
        ],
        answerIndex: 3,
        hints: [
          "Imagine unplugging your Ethernet cable mid-download.",
          "Should your laptop freeze forever resending Packet 1 millions of times?",
        ],
        explanation:
          "If a link is completely severed or the server is offline, no positive acknowledgement will ever arrive. A **retry limit** prevents an infinite loop of hopeless retransmissions and lets the software notify the user that the transmission failed.",
      },
      {
        id: "data-transmission-m3-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "parity-checksum-echo",
        question:
          "Which comparison accurately matches **when** each error-checking technique is used in CIE `0478`?",
        options: [
          "Check Digit → human data entry; Checksum & Parity → transmitted blocks/bytes; ARQ → acknowledgement + timeout retransmission",
          "Check Digit → CPU internal bus skew; Checksum → keyboard double-entry verification; ARQ → barcode label printing",
          "Check Digit → router hop counting; Checksum → USB port voltage-change detection; ARQ → lossy audio compression",
          "Check Digit → round-trip echo check; Checksum → simplex link direction control; ARQ → single-byte odd parity",
        ],
        answerIndex: 0,
        hints: [
          "Match each tool to its exact job: human typing/barcodes vs network byte/block corruption vs automatic resending.",
          "Eliminate any option that mixes hardware voltage or compression with error checking.",
        ],
        explanation:
          "**Check digits** validate typed/scanned codes (ISBN/barcodes) at entry; **Parity** and **Checksums** detect bit/block corruption during transmission; and **ARQ** is the protocol using acknowledgements and timeouts to retransmit corrupted or lost packets.",
      },
    ],
  },
];
