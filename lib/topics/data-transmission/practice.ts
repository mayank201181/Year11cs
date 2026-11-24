import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "data-transmission-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "packets-packet-switching",
      question: "Which item of information in a **packet header** enables the destination computer to reconstruct a file in the right order when packets arrive scrambled?",
      options: [
        "Hop counter (TTL)",
        "Packet sequence number",
        "Cyclic redundancy check (CRC)",
        "Originator MAC address",
      ],
      answerIndex: 1,
      hints: ["Each slice of the file is numbered `1, 2, 3, ...` before leaving the sender."],
      explanation:
        "The **packet sequence number** in the header tells the receiving computer the exact position (`1, 2, 3...`) of each payload chunk so out-of-order packets can be sorted.",
    },
    {
      id: "data-transmission-quiz-q02",
      kind: "short",
      difficulty: "core",
      guideRef: "packets-packet-switching",
      question:
        "A `5 MiB` file is split into data packets that each hold `64 KiB` of payload (`1 MiB = 1024 KiB`). Calculate the exact number of packets needed. Give your answer as a single whole number.",
      answer: { type: "number", value: 80 },
      traps: [
        {
          spec: { type: "number", value: 78 },
          feedback: "Remember CIE 0478 IEC units: `1 MiB = 1024 KiB` (not `1000 KiB`!). `5 × 1024 = 5120 KiB`.",
        },
        {
          spec: { type: "number", value: 16 },
          feedback: "`16` is the number of `64 KiB` packets in `1 MiB` — multiply by `5` for `5 MiB`!",
        },
      ],
      hints: [
        "Convert `5 MiB` to `KiB` using `5 × 1024`.",
        "Divide `5120` by `64` (tip: `1024 ÷ 64 = 16`, then multiply by `5`).",
      ],
      solution: [
        "Convert `5 MiB` into `KiB`: `5 × 1024 = 5120 KiB`.",
        "Divide by `64 KiB` per packet: `5120 ÷ 64 = 80` packets.",
      ],
      commonError: "Using `5000 ÷ 64` instead of `5 × 1024 ÷ 64`.",
    },
    {
      id: "data-transmission-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "transmission-methods",
      question: "A telephone conversation allows both callers to speak and listen **at the exact same time**. Which direction mode is this?",
      options: ["Simplex", "Half-duplex", "Full-duplex", "Serial-only"],
      answerIndex: 2,
      hints: ["Two directions AND simultaneous."],
      explanation:
        "**Full-duplex** supports data transmission in both directions **simultaneously**. Half-duplex alternates turns like a walkie-talkie.",
    },
    {
      id: "data-transmission-quiz-q04",
      kind: "short",
      difficulty: "warmup",
      guideRef: "transmission-methods",
      question:
        "State the method of data transmission (`Serial` or `Parallel`) that sends **one bit at a time** sequentially along a single wire or channel.",
      answer: { type: "text", accept: ["serial", "serial transmission", "serial data transmission"], display: "Serial" },
      traps: [
        {
          spec: { type: "text", accept: ["parallel", "parallel transmission"] },
          feedback: "Parallel sends multiple bits simultaneously across several wires; `1` bit at a time on `1` wire is **Serial**.",
        },
        {
          spec: { type: "text", accept: ["simplex"] },
          feedback: "Simplex describes direction (one-way), whereas the question asks for `Serial` vs `Parallel`.",
        },
      ],
      hints: ["Bits queue up in a single-file series rather than marching side-by-side."],
      solution: [
        "Sending bits one after another down a single wire/channel is **Serial** data transmission.",
      ],
      commonError: "Writing `Simplex` (direction) when asked for `Serial` vs `Parallel` (wire count).",
    },
    {
      id: "data-transmission-quiz-q05",
      kind: "short",
      difficulty: "core",
      guideRef: "usb-interface",
      question:
        "When a USB peripheral is plugged into a computer, a small change in voltage is detected and the device is recognised. Name the piece of system software that the operating system then loads so it can communicate with the USB device.",
      answer: { type: "text", accept: ["device driver", "driver", "usb driver", "usb device driver"], display: "Device driver" },
      traps: [
        {
          spec: { type: "text", accept: ["compiler", "interpreter", "assembler"] },
          feedback: "Translators convert code; hardware peripherals need a **device driver**.",
        },
      ],
      hints: [
        "Every hardware peripheral needs a specific piece of software that translates OS instructions into signals that peripheral understands.",
        "Two words: `device ______`.",
      ],
      solution: [
        "After detecting the voltage change and identifying the USB peripheral, the OS searches for and loads the matching **device driver** (or prompts the user to install one).",
      ],
      commonError: "Writing vague 'USB app' instead of the CIE technical term **device driver**.",
    },
    {
      id: "data-transmission-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "parity-checksum-echo",
      question:
        "A `7`-bit data value `1101011` is transmitted as an `8`-bit byte using **Even Parity**, with the parity bit placed in the **leftmost** (most significant) bit position (`_1101011`). Give the complete `8`-bit binary string.",
      answer: { type: "text", accept: ["11101011", "1110 1011"], display: "11101011" },
      traps: [
        {
          spec: { type: "text", accept: ["01101011", "0110 1011"] },
          feedback: "`01101011` has `5` ones (odd) — that would be Odd Parity! Even Parity needs an even count of `1`s (`6` ones).",
        },
        {
          spec: { type: "text", accept: ["11010111"] },
          feedback: "You put the parity bit `1` on the right, shifting the data bits! Place it at the leftmost MSB slot: `1` + `1101011`.",
        },
      ],
      hints: [
        "Count how many `1`s are in `1101011`: `1+1+0+1+0+1+1 = 5` ones (odd).",
        "Prepend `1` on the left so the total number of `1`s becomes `6` (even).",
      ],
      solution: [
        "The `7` data bits `1101011` contain `5` ones.",
        "For **Even Parity**, we need an even total count of `1`s, so the leftmost parity bit must be `1` (making `6` ones).",
        "Complete byte: **`11101011`**.",
      ],
      commonError: "Setting the parity bit to `0` because you miscounted `5` ones as `4`.",
    },
    {
      id: "data-transmission-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      guideRef: "parity-checksum-echo",
      question: "Why does a **2D Parity Block** improve upon a single parity bit per byte?",
      options: [
        "It compresses every 8-bit byte down into a 4-bit nibble so transmission time is halved across the link",
        "It uses both horizontal row parity and a vertical parity byte to pinpoint the exact row and column of a single flipped bit",
        "It prevents electromagnetic interference from entering unshielded cables during long-distance parallel transfers",
        "It guarantees detection of every possible 4-bit and 8-bit burst error even when flips form a rectangle",
      ],
      answerIndex: 1,
      hints: [
        "Think of coordinates on a grid: horizontal row check + vertical column check.",
        "What sits at the intersection when `1` bit flips?",
      ],
      explanation:
        "A **parity block** checks parity horizontally across each byte AND vertically down each bit column via a **parity byte**, locating (and enabling auto-correction of) any single corrupted bit at `(bad row, bad column)`.",
    },
    {
      id: "data-transmission-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "parity-checksum-echo",
      question: "Which error-detection method calculates a mathematical summary value from a whole **block of transmitted bytes** and sends that value alongside the block for the receiver to recalculate and compare?",
      options: ["Echo check", "Check digit", "Checksum", "Simplex bit"],
      answerIndex: 2,
      hints: [
        "Not a single barcode digit typed by a human — a summary calculated across a block of network bytes!",
        "Receiver runs the same algorithm and compares.",
      ],
      explanation:
        "A **checksum** is calculated across a block of bytes before transmission and recalculated by the receiver using the same algorithm to spot corruption.",
    },
    {
      id: "data-transmission-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "check-digits-arq",
      question:
        "Using the standard **ISBN-13** check-digit rule (`sum of odd positions 1,3,5,7,9,11` + `3 × sum of even positions 2,4,6,8,10,12`, take `MOD 10`, and subtract non-zero remainder from `10`), calculate the `13`th check digit for `9 7 8 1 4 7 1 8 8 3 4 5`. Give a single digit `0–9`.",
      answer: { type: "number", value: 3 },
      traps: [
        {
          spec: { type: "number", value: 7 },
          feedback: "`7` is the remainder `127 MOD 10` — remember the final step: `10 − 7 = 3`!",
        },
      ],
      hints: [
        "Odd positions (`1,3,5,7,9,11`): `9 + 8 + 4 + 1 + 8 + 4 = 34`.",
        "Even positions (`2,4,6,8,10,12`): `7 + 1 + 7 + 8 + 3 + 5 = 31`; `31 × 3 = 93`. Total = `34 + 93 = 127`.",
      ],
      solution: [
        "Sum odd positions: `9 + 8 + 4 + 1 + 8 + 4 = 34`.",
        "Sum even positions: `7 + 1 + 7 + 8 + 3 + 5 = 31`, then multiply by `3`: `31 × 3 = 93`.",
        "Total = `34 + 93 = 127`; remainder `127 MOD 10 = 7`.",
        "Check digit = `10 − 7 = 3`.",
      ],
      commonError: "Stopping at `127 MOD 10 = 7` without subtracting from `10`.",
    },
    {
      id: "data-transmission-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "check-digits-arq",
      marks: 4,
      question: "Describe how **Automatic Repeat Query (ARQ)** ensures a packet arrives free of transmission errors.",
      hints: [
        "Mention what the receiver uses to check the arriving packet and the two types of replies it can send.",
        "Explain what the sender's timer does if a packet or reply gets lost completely.",
      ],
      modelAnswer:
        "The sender transmits the data frame and starts a timeout clock. Upon arrival, the receiver checks the data using an error-detection code such as CRC: if intact, it returns a positive acknowledgement; if corrupted, it sends a negative acknowledgement. Whenever a negative acknowledgement arrives or the timeout expires without a reply, the sender automatically retransmits until a positive acknowledgement is received or a retry limit is reached.",
      markScheme: [
        {
          point: "Receiver checks data using an error-detection method (e.g. CRC / checksum / parity)",
          keywords: ["crc", "checksum", "error-detection", "error detection", "check value", "parity"],
        },
        {
          point: "Receiver sends a positive acknowledgement (if error-free) or negative acknowledgement (if error found)",
          keywords: ["positive acknowledgement", "negative acknowledgement", "acknowledgement", "ack"],
        },
        {
          point: "Sender uses a timeout (pre-set waiting time allowed to elapse)",
          keywords: ["timeout", "time-out", "time out", "pre-set time", "timer"],
        },
        {
          point: "Sender automatically retransmits/resends on negative ACK or timeout until positive ACK or retry limit",
          keywords: ["retransmit", "retransmits", "re-transmit", "resends", "resend", "retry limit"],
        },
      ],
      commonError: "Forgetting **timeout**, which is essential when an entire packet vanishes and no Negative ACK can be sent.",
    },
  ],
  papers: [
    {
      id: "data-transmission-p1",
      title: "Data Transmission Practice Paper 1 — Structured & Auto-Marked",
      questions: [
        {
          id: "data-transmission-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "packets-packet-switching",
          question:
            "Which of the three parts of a data packet (`Header`, `Payload`, or `Trailer`) stores the sender's IP address, destination IP address, and packet sequence number?",
          answer: { type: "text", accept: ["header", "packet header"], display: "Header" },
          traps: [
            {
              spec: { type: "text", accept: ["trailer", "packet trailer"] },
              feedback: "The trailer holds the end-of-packet marker and CRC error check; IPs and sequence numbers live in the **Header**.",
            },
          ],
          hints: ["Routing devices inspect the very front of the packet."],
          solution: [
            "The **Header** (packet header) contains the sender IP, destination IP, packet sequence number, total packet count, and hop counter.",
          ],
          commonError: "Confusing Header (routing/sequencing) with Trailer (CRC/end marker).",
        },
        {
          id: "data-transmission-p1-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "packets-packet-switching",
          question:
            "A `1.25 MiB` spreadsheet is split into packets that each carry `32 KiB` of payload (`1 MiB = 1024 KiB`). Calculate how many packets are created. Give a single whole number.",
          answer: { type: "number", value: 40 },
          traps: [
            {
              spec: { type: "number", value: 20 },
              feedback: "Check the payload per packet: here each packet carries `32 KiB` (not `64 KiB`), so `1280 ÷ 32 = 40`.",
            },
          ],
          hints: [
            "`1.25 MiB = 1024 KiB + 256 KiB = 1280 KiB`.",
            "Divide `1280` by `32` (`128 ÷ 32 = 4`, so `1280 ÷ 32 = 40`).",
          ],
          solution: [
            "Convert `1.25 MiB` to `KiB`: `1.25 × 1024 = 1280 KiB`.",
            "Divide by `32 KiB` per packet: `1280 ÷ 32 = 40` packets.",
          ],
          commonError: "Multiplying `1.25 × 1000 = 1250` instead of `1.25 × 1024 = 1280`.",
        },
        {
          id: "data-transmission-p1-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "transmission-methods",
          question:
            "Name the direction mode of data transmission (`Simplex`, `Half-duplex`, or `Full-duplex`) in which data travels in **both directions simultaneously**.",
          answer: { type: "text", accept: ["full-duplex", "full duplex", "full duplex transmission"], display: "Full-duplex" },
          traps: [
            {
              spec: { type: "text", accept: ["half-duplex", "half duplex"] },
              feedback: "Half-duplex sends data both ways taking turns (NOT simultaneously); simultaneous two-way transfer is **Full-duplex**.",
            },
          ],
          hints: ["Think of a dual carriageway or broadband link where upload and download happen at the exact same instant."],
          solution: [
            "Data travelling in both directions at the same time is **Full-duplex** data transmission.",
          ],
          commonError: "Mixing up Half-duplex (turns) and Full-duplex (simultaneous).",
        },
        {
          id: "data-transmission-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "transmission-methods",
          question:
            "Give the technical term for the problem in **parallel** data transmission where bits sent simultaneously along separate wires travel at slightly different speeds and arrive **out of synchronisation** over longer cables.",
          answer: { type: "text", accept: ["data skew", "skew", "bit skew", "clock skew"], display: "Data skew" },
          traps: [
            {
              spec: { type: "text", accept: ["crosstalk", "cross-talk", "cross talk"] },
              feedback: "Crosstalk is electromagnetic interference between adjacent wires; arriving unsynchronised at different times is **data skew**.",
            },
          ],
          hints: [
            "Two words (`data ____`): bits become 'skewed' in time relative to one another.",
            "Contrast with crosstalk (interference).",
          ],
          solution: [
            "When parallel bits arrive slightly out of time alignment across multiple wires, the byte is corrupted by **data skew**.",
          ],
          commonError: "Writing 'crosstalk' when describing timing/synchronisation drift rather than electromagnetic interference.",
        },
        {
          id: "data-transmission-p1-q05",
          kind: "written",
          difficulty: "core",
          guideRef: "packets-packet-switching",
          marks: 4,
          question: "Explain how **packet switching** transmits a large photograph across the Internet from one computer to another.",
          hints: [
            "Start with how the photograph is prepared before sending, then explain what network devices do at each junction.",
            "Finish with why arrival order varies and how the destination puts the photograph back together.",
          ],
          modelAnswer:
            "First, the file is split into smaller numbered data blocks, each given a header containing the destination IP address and sequence number. At every network junction, routers inspect the destination IP and independently send each unit along the fastest, least congested route. Because separate routes are taken, chunks arrive out of order and the receiving device reassembles them in sequence using their sequence numbers.",
          markScheme: [
            {
              point: "Data/file is split into smaller packets, each with a header (destination IP and sequence number)",
              keywords: ["split", "divided", "broken", "header", "destination ip"],
            },
            {
              point: "Routers control the route of each packet at each node/junction based on traffic/congestion",
              keywords: ["router", "routers"],
            },
            {
              point: "Packets take different/independent routes so they may arrive out of order",
              keywords: ["different routes", "independent", "out of order", "different paths"],
            },
            {
              point: "Destination computer reorders/reassembles the packets into the original file using sequence numbers",
              keywords: ["reassemble", "reassembles", "reassembled", "reorders", "reorder", "sequence number"],
            },
          ],
          commonError: "Forgetting to explain **why** packets arrive out of order (independent router paths) and **how** they are reordered (sequence numbers in the header).",
        },
        {
          id: "data-transmission-p1-q06",
          kind: "short",
          difficulty: "warmup",
          guideRef: "usb-interface",
          question:
            "State whether the **Universal Serial Bus (USB)** transmits bits using `Serial` or `Parallel` data transmission.",
          answer: { type: "text", accept: ["serial", "serial data transmission", "asynchronous serial"], display: "Serial" },
          traps: [
            {
              spec: { type: "text", accept: ["parallel", "parallel data transmission"] },
              feedback: "The 'S' in USB literally stands for **Serial**!",
            },
          ],
          hints: ["Read the middle word of Universal **Serial** Bus."],
          solution: [
            "USB uses asynchronous **Serial** data transmission (`1` bit at a time).",
          ],
          commonError: "Guessing Parallel because USB cables have 4 internal wires (two of those are `+5V` power and Ground!).",
        },
        {
          id: "data-transmission-p1-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "parity-checksum-echo",
          question:
            "Complete the `8`-bit byte for the `7` data bits `1001110` using **Odd Parity**, placing the parity bit in the **leftmost** (most significant) bit position (`_1001110`). Give the full `8`-bit binary string.",
          answer: { type: "text", accept: ["11001110", "1100 1110"], display: "11001110" },
          traps: [
            {
              spec: { type: "text", accept: ["01001110", "0100 1110"] },
              feedback: "`01001110` contains `4` ones (even) — for **Odd Parity** you need `5` ones (`11001110`).",
            },
          ],
          hints: [
            "Count `1`s in `1001110`: `1 + 0 + 0 + 1 + 1 + 1 + 0 = 4` ones (even).",
            "To make the `8`-bit total odd (`5`), prepend `1` at the left.",
          ],
          solution: [
            "`1001110` has `4` ones (an even count).",
            "Odd Parity requires an odd number of `1`s, so set the leftmost MSB parity bit to `1`.",
            "Result: **`11001110`** (`5` ones).",
          ],
          commonError: "Applying Even Parity out of habit when the question specifies **Odd Parity**.",
        },
        {
          id: "data-transmission-p1-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "parity-checksum-echo",
          question:
            "Four `8`-bit bytes (`Byte 1` to `Byte 4`) and an **Even Parity** byte (`Row 5`) are received, with columns numbered `1` to `8` from left to right:\n\n" +
            "| Row | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |\n" +
            "|---|---|---|---|---|---|---|---|---|\n" +
            "| Byte 1 | 0 | 1 | 1 | 0 | 1 | 0 | 0 | 1 |\n" +
            "| Byte 2 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 |\n" +
            "| Byte 3 | 1 | 1 | 0 | 0 | 1 | 1 | 0 | 0 |\n" +
            "| Byte 4 | 0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |\n" +
            "| Parity | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 |\n\n" +
            "Give the corrupted **Byte number** followed by the corrupted **Bit column number**, separated by a comma (for example `3, 5`).",
          answer: { type: "list", values: [2, 6], ordered: true, display: "2, 6" },
          traps: [
            {
              spec: { type: "list", values: [6, 2], ordered: true },
              feedback: "Give the **Byte row** first (`2`), then the **Bit column** (`6`): `2, 6`.",
            },
          ],
          hints: [
            "Count `1`s in each horizontal row: Byte 1 has `4`, Byte 2 has `3` (odd!), Byte 3 has `4`, Byte 4 has `2`, Parity has `2`.",
            "Now count `1`s down each vertical column `1..8` (including the Parity row) to find the single column with an odd number of `1`s.",
          ],
          solution: [
            "Horizontal Even Parity check: **Byte 2** (`1 0 1 1 0 0 0 0`) has `3` ones (odd → fails Even Parity).",
            "Vertical Even Parity check: **Column 6** (`0, 0, 1, 0, 0`) has `1` one (odd → fails Even Parity), while all other columns have `2` ones.",
            "Intersection = **`2, 6`** (Byte 2, Bit column 6).",
          ],
          commonError: "Forgetting to include the bottom Parity row when counting `1`s down each column!",
        },
        {
          id: "data-transmission-p1-q09",
          kind: "written",
          difficulty: "core",
          guideRef: "usb-interface",
          marks: 4,
          question:
            "Describe what happens inside the computer system when a user plugs a webcam into a **USB** port, and state **one** benefit of using USB for this connection.",
          hints: [
            "Cover all 3 steps of the CIE plug-and-play handshake: electrical signal, recognition, and driver software.",
            "Add one concrete benefit of USB (e.g. supplies `+5V` power, fits one way, universal industry standard).",
          ],
          modelAnswer:
            "First, the host detects a small change in voltage across the data wires, alerting it that hardware was connected. Next, the device is automatically recognised by the operating system, which searches for the matching device driver and loads it (or prompts the user to install the driver if missing). One major benefit is that the cable supplies +5V electrical power directly to the peripheral so no external adapter is required.",
          markScheme: [
            {
              point: "Computer automatically detects the device due to a small change in voltage on the data wires",
              keywords: ["voltage"],
            },
            {
              point: "Device is automatically recognised / identified",
              keywords: ["recognised", "recognized", "identified", "identifies"],
            },
            {
              point: "Appropriate device driver is searched for / loaded (or user prompted if driver not found)",
              keywords: ["driver"],
            },
            {
              point: "Valid benefit: supplies power (+5V) / industry standard / fits one way / backward compatible / multiple speeds",
              keywords: ["power", "+5v", "industry standard", "one way", "backward compatible", "plug-and-play"],
            },
          ],
          commonError: "Skipping 'change in voltage' and jumping straight to 'it just works'.",
        },
        {
          id: "data-transmission-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "check-digits-arq",
          question:
            "Calculate the `13`th check digit for the `12`-digit **ISBN-13** prefix `9 7 8 0 0 0 7 4 4 8 0 3` (odd positions `×1`, even positions `×3`, remainder `MOD 10`, subtract non-zero remainder from `10`). Give a single digit `0–9`.",
          answer: { type: "number", value: 6 },
          traps: [
            {
              spec: { type: "number", value: 4 },
              feedback: "`4` is the remainder `94 MOD 10` — subtract it from `10` to get `10 − 4 = 6`!",
            },
          ],
          hints: [
            "Odd positions (`1,3,5,7,9,11`): `9 + 8 + 0 + 7 + 4 + 0 = 28`.",
            "Even positions (`2,4,6,8,10,12`): `7 + 0 + 0 + 4 + 8 + 3 = 22`; `22 × 3 = 66`. Total = `28 + 66 = 94`.",
          ],
          solution: [
            "Odd-position sum = `9 + 8 + 0 + 7 + 4 + 0 = 28`.",
            "Even-position sum = `7 + 0 + 0 + 4 + 8 + 3 = 22`; multiply by `3`: `22 × 3 = 66`.",
            "Total = `28 + 66 = 94`; `94 MOD 10 = 4`.",
            "Check digit = `10 − 4 = 6`.",
          ],
          commonError: "Swapping the `×1` and `×3` weights (multiplying odd positions by `3` instead of even positions!).",
        },
        {
          id: "data-transmission-p1-q11",
          kind: "short",
          difficulty: "warmup",
          guideRef: "check-digits-arq",
          question:
            "Give the abbreviation (or full name) of the error-control protocol that combines error detection with **acknowledgements** and **timeouts** to automatically retransmit corrupted or lost packets.",
          answer: {
            type: "text",
            accept: ["arq", "automatic repeat query", "automatic repeat request"],
            display: "ARQ",
          },
          traps: [
            {
              spec: { type: "text", accept: ["crc", "checksum"] },
              feedback: "CRC and checksums only detect errors; the retransmission protocol with acknowledgements and timeouts is **ARQ**.",
            },
          ],
          hints: ["Three-letter abbreviation starting with `A`: Automatic Repeat ______."],
          solution: [
            "**ARQ** (**Automatic Repeat Query** / **Automatic Repeat Request**) manages acknowledgements, timeouts, and automatic packet retransmission.",
          ],
          commonError: "Writing `CRC` (the trailer check value) instead of `ARQ` (the retransmission protocol).",
        },
        {
          id: "data-transmission-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "parity-checksum-echo",
          question:
            "An `8`-bit byte is transmitted using a single **Even Parity** bit. What is the **smallest non-zero number of bit flips** inside that single byte that will go **undetected** by the parity check?",
          answer: { type: "number", value: 2 },
          traps: [
            {
              spec: { type: "number", value: 1 },
              feedback: "A `1`-bit flip changes the count of `1`s from even to odd, which Even Parity DOES detect!",
            },
            {
              spec: { type: "number", value: 8 },
              feedback: "`8` flips is undetected too, whereas the **smallest** non-zero even number of bit flips is `2`!",
            },
          ],
          hints: [
            "Any odd number of flips (`1, 3, 5, 7`) changes an even count into an odd count.",
            "What is the smallest positive **even** integer?",
          ],
          solution: [
            "Flipping **`2` bits** changes the count of `1`s by `+2`, `0`, or `−2` — keeping an even count even, so Even Parity fails to notice the corruption.",
          ],
          commonError: "Forgetting that `2` simultaneous bit flips leave parity unchanged.",
        },
        {
          id: "data-transmission-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "transmission-methods",
          marks: 4,
          question:
            "A robotics student connects a microcontroller to an external sensor array `12` metres away. Explain why **serial** data transmission is chosen rather than **parallel** data transmission, and justify whether `Simplex` or `Full-duplex` should be used if the microcontroller also sends live calibration commands while reading sensor values.",
          hints: [
            "Give two distinct reasons why serial beats parallel over `12` metres (think synchronisation/skew, interference, and cable wires).",
            "Explain why simultaneous two-way traffic requires Full-duplex rather than Simplex.",
          ],
          modelAnswer:
            "Over twelve metres, sending one bit at a time down a single wire prevents data skew so bits cannot arrive unsynchronised, while also reducing crosstalk and requiring a thinner, cheaper cable with fewer wires. Because calibration instructions and incoming readings travel in both directions simultaneously, full-duplex mode is required rather than one-way transmission.",
          markScheme: [
            {
              point: "Serial sends 1 bit at a time so there is no data skew / bits arrive in order over long distance",
              keywords: ["skew", "unsynchronised", "unsynchronized", "one bit at a time", "in order"],
            },
            {
              point: "Less crosstalk (interference between adjacent wires) OR cheaper/thinner cable with fewer wires",
              keywords: ["crosstalk", "interference", "cheaper", "fewer wires", "thinner"],
            },
            {
              point: "Selects Full-duplex (not Simplex) for the calibration + sensor link",
              keywords: ["full-duplex", "full duplex"],
            },
            {
              point: "Justifies Full-duplex: data travels in both directions simultaneously / at the same time",
              keywords: ["simultaneously", "same time"],
            },
          ],
          commonError: "Saying 'serial is faster than parallel' without explaining **data skew** over `12 m`, or omitting **simultaneously** for full-duplex.",
        },
        {
          id: "data-transmission-p1-q14",
          kind: "short",
          difficulty: "core",
          guideRef: "check-digits-arq",
          question:
            "A student dictates code `7030` over the phone, and the typist enters `7013` after mishearing 'thirty' as 'thirteen'. What name does CIE `0478` give to this specific category of human data-entry error (`Transposition`, `Phonetic`, or `Omission`)?",
          answer: { type: "text", accept: ["phonetic", "phonetic error"], display: "Phonetic" },
          traps: [
            {
              spec: { type: "text", accept: ["transposition", "transposition error"] },
              feedback: "Transposition swaps two existing adjacent digits (`30` → `03`); confusing sound-alike spoken numbers (`30` vs `13`) is a **Phonetic** error.",
            },
          ],
          hints: [
            "'Phono-' relates to sound — 'thirty' (`30`) and 'thirteen' (`13`) sound alike aloud!",
            "Choose `Phonetic` (sound-alike spoken numbers) rather than `Transposition` (`30` → `03`).",
          ],
          solution: [
            "Mishearing spoken numbers like `30` ('thirty') and `13` ('thirteen') is a **Phonetic** error, which weighted check digits detect.",
          ],
          commonError: "Calling `30 → 13` a transposition error (transposition of `30` would be `03`).",
        },
        {
          id: "data-transmission-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "parity-checksum-echo",
          marks: 3,
          question: "Describe how a **checksum** is used to detect whether errors occurred while transmitting a block of data.",
          hints: [
            "What does the sender calculate and attach before sending the block?",
            "What does the receiver calculate on arrival, and how does it decide if an error occurred?",
          ],
          modelAnswer:
            "Before sending, the transmitter applies an agreed mathematical algorithm to the bytes in the block to compute a summary value and transmits this value alongside the data. On arrival, the receiving device recalculates the summary from the received bytes using the identical algorithm and compares both values: if they differ, corruption is flagged and a resend is requested.",
          markScheme: [
            {
              point: "Sender calculates a value from the block of data using an agreed algorithm and sends it with the block",
              keywords: ["agreed algorithm", "calculates", "summary value", "transmits this value", "alongside"],
            },
            {
              point: "Receiver recalculates the value from the received data using the same algorithm",
              keywords: ["recalculates", "re-calculates", "identical algorithm", "same algorithm"],
            },
            {
              point: "Compares received and recalculated values; if they differ/do not match, an error is detected (and resend requested)",
              keywords: ["compares", "compare", "differ", "do not match", "mismatch"],
            },
          ],
          commonError: "Describing an echo check (sending the whole data block back) or a barcode check digit instead of recalculating a block value.",
        },
      ],
    },
    {
      id: "data-transmission-p2",
      title: "Data Transmission Practice Paper 2 — Exam Calculation & Analysis",
      questions: [
        {
          id: "data-transmission-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "packets-packet-switching",
          question:
            "A packet leaves a web server with its **hop number** set to `20`. Each router along the route subtracts `1` from the hop number. If the packet passes through `13` routers before arriving at your laptop, what value is in the hop number upon arrival?",
          answer: { type: "number", value: 7 },
          traps: [
            {
              spec: { type: "number", value: 13 },
              feedback: "`13` is the number of routers visited — subtract `13` from the starting hop limit `20`!",
            },
          ],
          hints: ["Subtract `1` for each of the `13` routers: `20 − 13`."],
          solution: [
            "Initial hop count = `20`.",
            "After passing through `13` routers: `20 − 13 = 7`.",
          ],
          commonError: "Giving `13` instead of `20 − 13 = 7`.",
        },
        {
          id: "data-transmission-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "packets-packet-switching",
          question:
            "Which section of a data packet (`Header`, `Payload`, or `Trailer`) contains the end-of-packet marker and the Cyclic Redundancy Check (CRC)?",
          answer: { type: "text", accept: ["trailer", "packet trailer"], display: "Trailer" },
          traps: [
            {
              spec: { type: "text", accept: ["header", "packet header"] },
              feedback: "The Header stores IPs and sequence numbers; the end marker and CRC sit in the **Trailer**.",
            },
          ],
          hints: ["It trails right at the end of the packet!"],
          solution: [
            "The **Trailer** (packet trailer) holds the end-of-packet marker and the CRC error-checking value.",
          ],
          commonError: "Putting CRC inside the Header.",
        },
        {
          id: "data-transmission-p2-q03",
          kind: "short",
          difficulty: "warmup",
          guideRef: "transmission-methods",
          question:
            "How many bits are transmitted at any single instant along a single-wire **serial** communication channel? Give a single whole number.",
          answer: { type: "number", value: 1 },
          traps: [
            {
              spec: { type: "number", value: 8 },
              feedback: "`8` bits at once would require an `8`-wire parallel bus; serial sends **`1`** bit at a time.",
            },
          ],
          hints: ["Serial = one bit after another in single file."],
          solution: [
            "Serial transmission sends **`1`** bit at a time down a single channel.",
          ],
          commonError: "Writing `8` (confusing a byte with serial `1`-bit-at-a-time transmission).",
        },
        {
          id: "data-transmission-p2-q04",
          kind: "short",
          difficulty: "warmup",
          guideRef: "transmission-methods",
          question:
            "Name the direction mode (`Simplex`, `Half-duplex`, or `Full-duplex`) in which data can travel in **both directions, but NOT at the same time**.",
          answer: { type: "text", accept: ["half-duplex", "half duplex", "half duplex transmission"], display: "Half-duplex" },
          traps: [
            {
              spec: { type: "text", accept: ["full-duplex", "full duplex"] },
              feedback: "Full-duplex transmits in both directions simultaneously; taking turns is **Half-duplex**.",
            },
          ],
          hints: ["Like a walkie-talkie or single-lane bridge where each side waits its turn."],
          solution: [
            "Two-way non-simultaneous communication is **Half-duplex**.",
          ],
          commonError: "Writing `Simplex` (one-way) or `Full-duplex` (simultaneous).",
        },
        {
          id: "data-transmission-p2-q05",
          kind: "short",
          difficulty: "warmup",
          guideRef: "usb-interface",
          question:
            "What DC voltage (in volts) is supplied along the Red power (`VBUS`) wire of a standard USB 2.0 port to power connected small peripherals? Give a single number.",
          answer: { type: "number", value: 5 },
          traps: [
            {
              spec: { type: "number", value: 12 },
              feedback: "Standard USB 2.0 `VBUS` supplies **`5`** volts (`+5V`), not `12V`.",
            },
          ],
          hints: ["Standard TTL/USB logic power rail: `+__ V`."],
          solution: [
            "A standard USB port supplies **`5`** volts (`+5V` DC) on its power wire.",
          ],
          commonError: "Guessing `12` V or `240` V mains voltage.",
        },
        {
          id: "data-transmission-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "parity-checksum-echo",
          question:
            "A `7`-bit code `0010110` is transmitted as an `8`-bit byte using **Even Parity**, with the parity bit placed in the **RIGHTMOST** (least significant) bit position (`0010110_`). Give the complete `8`-bit binary string.",
          answer: { type: "text", accept: ["00101101", "0010 1101"], display: "00101101" },
          traps: [
            {
              spec: { type: "text", accept: ["10010110", "1001 0110"] },
              feedback: "Careful! This question specifies the parity bit goes in the **rightmost** position (`0010110_`), not the leftmost!",
            },
            {
              spec: { type: "text", accept: ["00101100", "0010 1100"] },
              feedback: "`00101100` has `3` ones (odd) — Even Parity needs `4` ones (`00101101`).",
            },
          ],
          hints: [
            "`0010110` has `3` ones (odd), so Even Parity needs an extra `1` to reach `4` ones.",
            "Append that `1` on the **right** end (`0010110` + `1`).",
          ],
          solution: [
            "Data bits `0010110` contain `3` ones.",
            "Even Parity requires `4` ones, so the parity bit is `1`.",
            "Appending `1` at the rightmost bit position gives **`00101101`**.",
          ],
          commonError: "Putting the parity bit on the left without reading which end (`leftmost` vs `rightmost`) the exam question specifies!",
        },
        {
          id: "data-transmission-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "parity-checksum-echo",
          question:
            "A network protocol calculates an `8`-bit **checksum** by adding the denary values of all bytes in a block and taking the remainder when divided by `256` (`Sum MOD 256`). Calculate the denary checksum for a `4`-byte block with byte values `120, 85, 90, 45`.",
          answer: { type: "number", value: 84 },
          traps: [
            {
              spec: { type: "number", value: 340 },
              feedback: "`340` is the raw sum — take `340 MOD 256` (`340 − 256 = 84`) so the checksum fits in `1` byte!",
            },
          ],
          hints: [
            "First sum the four bytes: `120 + 85 + 90 + 45 = 340`.",
            "Since `256 ≤ 340 < 512`, subtract `256` once to find `340 MOD 256`.",
          ],
          solution: [
            "Sum of bytes = `120 + 85 + 90 + 45 = 340`.",
            "Divide by `256`: `340 = 1 × 256 + 84`, so `340 MOD 256 = 84`.",
          ],
          commonError: "Leaving the raw sum `340` without reducing modulo `256`.",
        },
        {
          id: "data-transmission-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "parity-checksum-echo",
          question:
            "Three `8`-bit data bytes and an **Even Parity** byte are received:\n\n" +
            "| Row | B1 | B2 | B3 | B4 | B5 | B6 | B7 | B8 |\n" +
            "|---|---|---|---|---|---|---|---|---|\n" +
            "| Byte 1 | 1 | 0 | 1 | 0 | 1 | 0 | 1 | 0 |\n" +
            "| Byte 2 | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 0 |\n" +
            "| Byte 3 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 1 |\n" +
            "| Parity | 0 | 0 | 0 | 1 | 1 | 1 | 0 | 1 |\n\n" +
            "One bit in `Byte 3` was corrupted during transmission. Write down the **corrected `8`-bit binary value** of `Byte 3`.",
          answer: { type: "text", accept: ["11010001", "1101 0001"], display: "11010001" },
          traps: [
            {
              spec: { type: "text", accept: ["11000001", "1100 0001"] },
              feedback: "`11000001` is the corrupted `Byte 3` as received (`3` ones) — flip the faulty column bit!",
            },
          ],
          hints: [
            "`Byte 3` (`11000001`) has `3` ones (odd → corrupted!). Check columns `B1..B8` vertically to spot which column has an odd count of `1`s.",
            "Column `B4` has `0, 0, 0, 1` (`1` one, odd!), so flip `B4` of `Byte 3` from `0` to `1`.",
          ],
          solution: [
            "`Byte 3` has `3` ones (fails Even Parity).",
            "Checking columns `B1..B8` including the Parity row: `B4` (`0, 0, 0, 1`) has `1` one (fails Even Parity), whereas all other columns have `2` ones.",
            "Flipping `B4` in `Byte 3` from `0` to `1` gives **`11010001`** (`4` ones ✓).",
          ],
          commonError: "Reporting the column number instead of writing the corrected `8`-bit byte `11010001`.",
        },
        {
          id: "data-transmission-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "check-digits-arq",
          question:
            "A `5`-digit code `2 0 4 1 3` uses a **Modulo-11** check digit: multiply the `5` digits from left to right by weights `6, 5, 4, 3, 2`, sum the products, find `Sum MOD 11`, and subtract that remainder from `11`. Calculate the check digit (`0–9`).",
          answer: { type: "number", value: 7 },
          traps: [
            {
              spec: { type: "number", value: 4 },
              feedback: "`4` is the remainder `37 MOD 11` — subtract from `11` to get `11 − 4 = 7`!",
            },
          ],
          hints: [
            "Weighted sum = `2×6 + 0×5 + 4×4 + 1×3 + 3×2 = 12 + 0 + 16 + 3 + 6 = 37`.",
            "`37 ÷ 11 = 3` remainder `4`, then compute `11 − 4`.",
          ],
          solution: [
            "Products: `12 + 0 + 16 + 3 + 6 = 37`.",
            "Remainder: `37 MOD 11 = 4` (`3 × 11 = 33`).",
            "Check digit: `11 − 4 = 7`.",
          ],
          commonError: "Forgetting the `11 − remainder` subtraction at the end.",
        },
        {
          id: "data-transmission-p2-q10",
          kind: "short",
          difficulty: "warmup",
          guideRef: "parity-checksum-echo",
          question:
            "Name the error-detection method in which the receiving device immediately transmits a copy of the received data back to the sending device so the sender can check whether both copies match.",
          answer: { type: "text", accept: ["echo check", "echo checking", "echo"], display: "Echo check" },
          traps: [
            {
              spec: { type: "text", accept: ["arq", "automatic repeat query"] },
              feedback: "ARQ sends a tiny acknowledgement message (`ACK`/`NAK`), whereas sending the entire data back is an **Echo check**.",
            },
          ],
          hints: ["The data 'bounces' straight back like sound off a cliff."],
          solution: [
            "Returning a full copy of the received data to the sender for comparison is an **Echo check**.",
          ],
          commonError: "Confusing Echo Check (returns all the data) with ARQ (returns a short ACK/NAK signal).",
        },
        {
          id: "data-transmission-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "packets-packet-switching",
          question:
            "Inside a packet trailer, what does the `3`-letter abbreviation **CRC** stand for?",
          answer: {
            type: "text",
            accept: ["cyclic redundancy check", "cyclical redundancy check"],
            display: "Cyclic Redundancy Check",
          },
          traps: [
            {
              spec: { type: "text", accept: ["central routing code", "character parity check"] },
              feedback: "CRC stands for **Cyclic Redundancy Check**.",
            },
          ],
          hints: [
            "Three words: `Cyclic R__________ Check`.",
            "The middle word is `Redundancy` — `Cyclic Redundancy Check`.",
          ],
          solution: [
            "**CRC** stands for **Cyclic Redundancy Check** — the payload error-checking value stored in a packet trailer.",
          ],
          commonError: "Writing 'Central Routing Check' instead of **Cyclic Redundancy Check**.",
        },
        {
          id: "data-transmission-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "parity-checksum-echo",
          marks: 3,
          question:
            "Explain why a single **parity bit** per byte may fail to spot corrupted data, and explain why an **echo check** also has a major limitation.",
          hints: [
            "What happens to the count of `1`s if **two** bits flip in the same byte?",
            "In an echo check, data travels twice — what ambiguity does that create when a mismatch appears?",
          ],
          modelAnswer:
            "If an even number of bits (such as two bits) are flipped within the same byte, or two bits are transposed, the count of ones remains even (or odd) so parity appears valid and the corruption goes undetected. With an echo check, data is sent twice, doubling traffic, and if the returned copy differs there is no way to tell whether corruption happened on the outward journey or on the return journey.",
          markScheme: [
            {
              point: "Parity fails when an even number of bits (e.g. 2 bits) flip or bits are transposed, keeping the 1-count even/odd",
              keywords: ["even number of bits", "two bits", "2 bits", "transposed"],
            },
            {
              point: "Parity also cannot identify WHICH specific bit flipped",
              keywords: ["which bit", "remains even", "stays even", "undetected"],
            },
            {
              point: "Echo check cannot determine if the error occurred on the outward transmission or on the return journey (and doubles network traffic)",
              keywords: ["outward", "return journey", "way back", "which direction", "sent back"],
            },
          ],
          commonError: "Saying 'echo check is slow' without explaining the outward-vs-return ambiguity.",
        },
        {
          id: "data-transmission-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "check-digits-arq",
          marks: 4,
          question:
            "A bookshop database validates typed `13`-digit ISBN codes using a **check digit**. State **three** different types of human data-entry error that a check digit can detect, and explain why a check digit **cannot** detect every possible mistake.",
          hints: [
            "Recall the CIE list of 4 typing mistakes caught by weighted check digits.",
            "What if a staff member accurately types a *different* valid book's ISBN?",
          ],
          modelAnswer:
            "Weighted check digits catch an incorrect single digit typed, a transposition error where two adjacent digits are swapped, and omitted or extra digits (as well as phonetic mistakes). However, it only checks mathematical validity, so if an operator accidentally enters another book's genuine valid code (or makes two compensating digit slips whose weighted sum still has the same remainder modulo ten), the check passes.",
          markScheme: [
            {
              point: "Incorrect single digit entered (mistyped digit)",
              keywords: ["incorrect single digit", "incorrect digit", "mistyped digit", "wrong digit"],
            },
            {
              point: "Transposition error (two adjacent digits swapped)",
              keywords: ["transposition", "adjacent digits", "swapped"],
            },
            {
              point: "Omitted or extra digit entered (or phonetic error such as 13 vs 30)",
              keywords: ["omitted", "extra digit", "missing digit", "phonetic"],
            },
            {
              point: "Limitation: cannot tell if a different valid code was entered (validation ≠ accuracy) or compensating errors give the same remainder",
              keywords: ["another book", "different valid", "valid code", "compensating", "accuracy"],
            },
          ],
          commonError: "Claiming check digits prevent network electrical interference rather than human data-entry mistakes.",
        },
        {
          id: "data-transmission-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "packets-packet-switching",
          marks: 4,
          question:
            "Give **two** benefits and **two** drawbacks of using **packet switching** to send data across a wide area network.",
          hints: [
            "Benefits: think about dedicated lines, failed/busy links, and bandwidth efficiency.",
            "Drawbacks: think about lost packets, reordering delay/jitter for real-time streams.",
          ],
          modelAnswer:
            "One benefit is that no dedicated communication line needs to be tied up, allowing many users to share bandwidth efficiently at high transfer rates. A second benefit is fault tolerance: routers automatically reroute around broken or congested cables. However, chunks can be lost in transit and require retransmission, and reassembling out-of-order arrivals adds latency and jitter that disrupt real-time streaming.",
          markScheme: [
            {
              point: "Benefit 1: No need to tie up a single dedicated line / shares network bandwidth efficiently",
              keywords: ["dedicated", "share bandwidth", "high data transmission"],
            },
            {
              point: "Benefit 2: Easily routes around failed, damaged, or busy/congested lines automatically",
              keywords: ["reroute", "failed", "broken", "congested", "fault tolerance"],
            },
            {
              point: "Drawback 1: Packets can be lost and have to be re-sent",
              keywords: ["lost", "re-sent", "retransmission", "dropped"],
            },
            {
              point: "Drawback 2: Delay/latency/jitter at destination while reordering/reassembling out-of-order packets (problematic for real-time media)",
              keywords: ["latency", "jitter", "delay", "real-time", "reassembling", "out-of-order"],
            },
          ],
          commonError: "Confusing packet-switching drawbacks with circuit-switching drawbacks.",
        },
        {
          id: "data-transmission-p2-q15",
          kind: "short",
          difficulty: "core",
          guideRef: "usb-interface",
          question:
            "How many internal wires (`1` to `10`) are inside a classic standard USB 2.0 shielded cable (`+5V` power, Ground, `D+`, and `D−`)? Give a single whole number.",
          answer: { type: "number", value: 4 },
          traps: [
            {
              spec: { type: "number", value: 8 },
              feedback: "Classic USB 2.0 uses **`4`** wires (`+5V`, Ground, `D+`, `D−`), not `8`!",
            },
          ],
          hints: [
            "Count them: Red (`+5V`), Black (`GND`), White (`D−`), Green (`D+`).",
            "Two wires handle power/earth and two wires handle differential serial data (`2 + 2`).",
          ],
          solution: [
            "A standard shielded USB 2.0 cable contains **`4`** internal wires: two for power/earth and two (`D+`, `D−`) for serial data.",
          ],
          commonError: "Confusing 4-wire USB 2.0 with 8-wire Cat5/6 Ethernet.",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "data-transmission-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "packets-packet-switching",
      question:
        "On a custom network, each packet has a **maximum total size of `1024 bytes`**, which must include a `48-byte` packet header and a `16-byte` packet trailer (`1 KiB = 1024 bytes`). Calculate the exact number of packets needed to transmit a `15 KiB` file. Give a single whole number.",
      answer: { type: "number", value: 16 },
      traps: [
        {
          spec: { type: "number", value: 15 },
          feedback: "Each packet's total size is `1024 bytes`, so `48 + 16 = 64 bytes` are taken by header+trailer — leaving `960 bytes` of actual payload per packet!",
        },
      ],
      hints: [
        "Step 1: Subtract header + trailer (`48 + 16 = 64 bytes`) from the `1024-byte` packet limit to find the **payload capacity** per packet.",
        "Step 2: `1024 − 64 = 960 bytes` of payload per packet (`960 / 1024 = 15/16 KiB`).",
        "Step 3: Convert `15 KiB = 15 × 1024 = 15360 bytes`, and divide `15360 ÷ 960`!",
      ],
      solution: [
        "Header + trailer overhead per packet = `48 + 16 = 64 bytes`.",
        "Usable payload per packet = `1024 − 64 = 960 bytes`.",
        "Total file size = `15 × 1024 = 15360 bytes`.",
        "Number of packets = `15360 ÷ 960 = 16` packets.",
      ],
      commonError: "Dividing `15 KiB` by `1 KiB` (`15`) while forgetting that header and trailer occupy `64 bytes` inside every `1024-byte` packet.",
    },
    {
      id: "data-transmission-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "transmission-methods",
      question:
        "An internal `16`-bit **parallel** CPU bus transfers `16` bits per clock cycle at a clock speed of `100 MHz`, while an external **serial** link transfers `1` bit per clock cycle at `800 MHz`. Find the ratio of the parallel bus's bit-transfer rate to the serial link's bit-transfer rate in simplest form `a : b`.",
      answer: { type: "ratio", parts: [2, 1], simplest: true, display: "2 : 1" },
      traps: [
        {
          spec: { type: "ratio", parts: [16, 1] },
          feedback: "`16 : 1` compares wire count alone — remember the serial link runs at `800 MHz` (`8×` the clock frequency of `100 MHz`)!",
        },
        {
          spec: { type: "ratio", parts: [1, 2] },
          feedback: "Keep the requested order: **parallel rate : serial rate** (`1600 : 800 = 2 : 1`).",
        },
      ],
      hints: [
        "Step 1: Bit rate = `(bits transferred per cycle) × (clock cycles per second)`.",
        "Step 2: Parallel bus = `16 × 100 = 1600 Mbit/s`; Serial link = `1 × 800 = 800 Mbit/s`.",
        "Step 3: Simplify the ratio `1600 : 800` to lowest whole-number terms.",
      ],
      solution: [
        "Parallel throughput = `16 × 100 MHz = 1600 Mbit/s`.",
        "Serial throughput = `1 × 800 MHz = 800 Mbit/s`.",
        "Ratio `1600 : 800` simplifies to **`2 : 1`**.",
      ],
      commonError: "Ignoring clock frequency differences between parallel and serial links.",
    },
    {
      id: "data-transmission-ch-q03",
      kind: "short",
      difficulty: "challenge",
      guideRef: "check-digits-arq",
      question:
        "A **valid** `13`-digit **ISBN-13** book number has one smudged digit `x` at position `6` (counting from `1` on the left): `9 7 8 0 5 x 1 6 8 0 4 6 2`. Given that a valid ISBN-13 satisfies `((sum of 7 odd positions) + 3 × (sum of 6 even positions)) MOD 10 = 0`, find the missing digit `x` (`0–9`).",
      answer: { type: "number", value: 2 },
      traps: [
        {
          spec: { type: "number", value: 6 },
          feedback: "Don't forget position `6` is an **even** position, so `x` is multiplied by **`3`** (`94 + 3x` must end in `0`, not `94 + x`)!",
        },
      ],
      hints: [
        "Step 1: Sum all `7` odd positions (`1, 3, 5, 7, 9, 11, 13`): `9 + 8 + 5 + 1 + 8 + 4 + 2 = 37`.",
        "Step 2: Sum the `5` known even positions (`2, 4, 8, 10, 12`): `7 + 0 + 6 + 0 + 6 = 19`, so the even sum is `19 + x`.",
        "Step 3: Set `37 + 3(19 + x) = 94 + 3x` to a multiple of `10` (`100`) and solve for single digit `x`!",
      ],
      solution: [
        "Odd-position sum (`1,3,5,7,9,11,13`) = `9 + 8 + 5 + 1 + 8 + 4 + 2 = 37`.",
        "Even-position sum (`2,4,6,8,10,12`) = `7 + 0 + x + 6 + 0 + 6 = 19 + x`.",
        "Weighted total = `37 + 3(19 + x) = 37 + 57 + 3x = 94 + 3x`.",
        "For `(94 + 3x) MOD 10 = 0`, `3x` must end in `6` → **`x = 2`** (`94 + 6 = 100`).",
      ],
      commonError: "Forgetting to multiply `x` by `3` when `x` sits at an even position (`6`).",
    },
    {
      id: "data-transmission-ch-q04",
      kind: "short",
      difficulty: "challenge",
      guideRef: "parity-checksum-echo",
      question:
        "Five `8`-bit data bytes (`Byte 1` to `Byte 5`) and an **Odd Parity** byte (`Row 6`) are received, with columns numbered `1` to `8` from left to right:\n\n" +
        "| Row | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |\n" +
        "|---|---|---|---|---|---|---|---|---|\n" +
        "| Byte 1 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 |\n" +
        "| Byte 2 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 |\n" +
        "| Byte 3 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 0 |\n" +
        "| Byte 4 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 0 |\n" +
        "| Byte 5 | 0 | 0 | 0 | 1 | 0 | 1 | 0 | 1 |\n" +
        "| Parity | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 0 |\n\n" +
        "Every valid row and column must contain an **odd** number of `1`s. Give the corrupted **Byte number** followed by the corrupted **Bit column number**, separated by a comma (e.g. `2, 5`).",
      answer: { type: "list", values: [4, 7], ordered: true, display: "4, 7" },
      traps: [
        {
          spec: { type: "list", values: [7, 4], ordered: true },
          feedback: "Give **Byte row** first (`4`), then **Bit column** (`7`): `4, 7`.",
        },
      ],
      hints: [
        "Step 1: Remember this is **Odd Parity** — any row or column with an **even** number of `1`s (`0, 2, 4...`) is faulty!",
        "Step 2: Row `1`-counts are `3, 3, 5, 2, 3, 3` → **Byte 4** has `2` ones (even ✗).",
        "Step 3: Count `1`s down all `8` columns (`3, 3, 3, 3, 1, 3, 2, 1`) → **Column 7** has `2` ones (even ✗).",
      ],
      solution: [
        "Row check (Odd Parity): **Byte 4** (`0 0 1 0 0 0 1 0`) has `2` ones (even → fails Odd Parity).",
        "Column check across all `6` rows: **Column 7** (`0, 0, 1, 1, 0, 0`) has `2` ones (even → fails Odd Parity); all other columns have `1` or `3` ones.",
        "Corrupted bit is at **`4, 7`** (Byte 4, Column 7).",
      ],
      commonError: "Forgetting that under **Odd** Parity, `2` ones is an error whereas `1` or `3` ones is valid!",
    },
    {
      id: "data-transmission-ch-q05",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "check-digits-arq",
      question:
        "In **ISBN-13**, adjacent positions carry weights `1` and `3` modulo `10`. Although this catches almost all adjacent-digit swaps, swapping two adjacent digits `a` and `b` changes the weighted sum by `(1b + 3a) − (1a + 3b) = 2(a − b)`. Which specific adjacent transposition slips **undetected** past an ISBN-13 check digit?",
      options: [
        "Swapping adjacent digits `2` and `3` (`23` ↔ `32`)",
        "Swapping adjacent digits `1` and `6` (`16` ↔ `61`)",
        "Swapping adjacent digits `4` and `8` (`48` ↔ `84`)",
        "Swapping adjacent digits `0` and `9` (`09` ↔ `90`)",
      ],
      answerIndex: 1,
      hints: [
        "Step 1: For the swap to go undetected modulo `10`, twice the difference between the two digits must be a multiple of `10`!",
        "Step 2: Twice a digit difference is divisible by `10` exactly when the two digits differ by `5`!",
        "Step 3: Check which pair of digits differs by `5`: `1×1 + 6×3 = 19` vs `6×1 + 1×3 = 9` (both end in `9`!).",
      ],
      explanation:
        "When two adjacent digits differ by `5` (such as **`1` and `6`**), doubling that difference gives `±10`, which leaves `Total MOD 10` completely unchanged (`1×1 + 6×3 = 19` and `6×1 + 1×3 = 9` both have remainder `9` modulo `10`!). Modulo-11 avoids this because `11` is prime.",
    },
    {
      id: "data-transmission-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "check-digits-arq",
      question:
        "Sender A transmits Packet 1 to Receiver B using **ARQ**. A packet takes `30 ms` to travel from A to B, processing takes `0 ms`, and an acknowledgement takes `30 ms` to return from B to A. Sender A sets its **timeout** to `100 ms` from the moment each send begins. Attempt 1 vanishes in transit; the instant the `100 ms` timeout expires, Sender A transmits Attempt 2, which arrives error-free and its positive ACK returns cleanly. How many milliseconds (`ms`) elapse in total from `t = 0` until Sender A receives the positive ACK?",
      answer: { type: "number", value: 160 },
      traps: [
        {
          spec: { type: "number", value: 130 },
          feedback: "At `130 ms` Attempt 2 reaches Receiver B, and the positive ACK still needs `30 ms` to travel back to Sender A (`130 + 30 = 160 ms`)!",
        },
        {
          spec: { type: "number", value: 120 },
          feedback: "Attempt 1 vanished, so Sender A had to wait the full `100 ms` timeout (not `60 ms`) before starting Attempt 2!",
        },
      ],
      hints: [
        "Step 1: Attempt 1 starts at `t = 0 ms` and disappears, so nothing comes back until the timeout fires at `t = 100 ms`.",
        "Step 2: Attempt 2 leaves A at `t = 100 ms` and reaches B at `100 + 30 = 130 ms`.",
        "Step 3: Add the `30 ms` return journey for the positive ACK from B back to A!",
      ],
      solution: [
        "`t = 0..100 ms`: Attempt 1 lost; timeout expires at `100 ms`.",
        "`t = 100..130 ms`: Retransmitted Packet 1 travels from A to B (`+30 ms`).",
        "`t = 130..160 ms`: Positive ACK travels from B back to A (`+30 ms`).",
        "Total elapsed time = **`160` ms**.",
      ],
      commonError: "Forgetting either the full `100 ms` timeout wait on the lost packet or the `30 ms` return leg of the ACK.",
    },
    {
      id: "data-transmission-ch-q07",
      kind: "written",
      difficulty: "challenge",
      guideRef: "transmission-methods",
      marks: 4,
      question:
        "Explain why a computer designer uses **parallel** transmission for the internal bus between the CPU and RAM, yet chooses **USB (serial)** to connect an external printer `4` metres away.",
      hints: [
        "Step 1: Explain why parallel wins over a few millimetres on a motherboard (multiple bits simultaneously + negligible skew).",
        "Step 2: Explain why parallel fails at `4` metres (data skew + crosstalk + bulky multi-wire cable).",
        "Step 3: Link USB's `1`-bit-at-a-time serial transmission (within its `5 m` limit) + plug-and-play convenience.",
      ],
      modelAnswer:
        "Between the processor and memory, copper tracks are only millimetres long, so sending 32 or 64 bits simultaneously across multiple lines achieves huge transfer speeds before timing drift appears. Across four metres to an external peripheral, a wide ribbon would suffer severe data skew (bits arriving out of synchronisation) and electromagnetic crosstalk. Sending one bit at a time sequentially over a shielded serial cable eliminates skew up to five metres while offering automatic driver detection.",
      markScheme: [
        {
          point: "Internal CPU-RAM bus is very short (millimetres), so sending multiple bits simultaneously in parallel achieves very fast transfer",
          keywords: ["millimetres", "short", "simultaneously", "32", "64"],
        },
        {
          point: "Over 4 metres, parallel transmission suffers from data skew (bits arriving unsynchronised / out of order)",
          keywords: ["skew", "unsynchronised", "unsynchronized"],
        },
        {
          point: "Parallel over 4 m also suffers crosstalk / requires bulkier, more expensive multi-wire cabling",
          keywords: ["crosstalk", "interference", "bulkier", "expensive", "ribbon"],
        },
        {
          point: "Serial/USB sends 1 bit at a time down a shielded pair (no skew within 5 m limit) with automatic plug-and-play detection",
          keywords: ["one bit at a time", "1 bit at a time", "five metres", "5 m", "driver", "plug-and-play"],
        },
      ],
      commonError: "Not contrasting **distance** (`mm` on PCB vs `4 m` external cable) as the decisive reason!",
    },
    {
      id: "data-transmission-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "check-digits-arq",
      marks: 4,
      question:
        "A software company distributes a `20 MiB` operating-system security patch over the Internet. Evaluate why the download protocol combines **CRC in packet trailers with ARQ**, rather than relying on a **single parity bit** or an **echo check**.",
      hints: [
        "Step 1: Explain why a single bit flip in executable code is catastrophic and why a single parity bit misses `2`-bit/even burst errors.",
        "Step 2: Explain why an echo check wastes bandwidth on `20 MiB` and cannot distinguish outward vs return errors.",
        "Step 3: Explain how trailer CRC catches multi-bit payload corruption AND how ARQ (acknowledgements + timeout) guarantees automatic retransmission.",
      ],
      modelAnswer:
        "Even one corrupted bit can crash executable machine code, and a single parity bit misses any even number of bit flips (such as two flipped bits) inside a byte. An echo check would double bandwidth usage by bouncing twenty mebibytes back and still cannot tell whether corruption occurred outward or on the return leg. Instead, calculating a cyclic redundancy check in every trailer reliably detects multi-bit corruption, while acknowledgements and timeouts automatically retransmit any damaged or missing chunks until intact.",
      markScheme: [
        {
          point: "Single parity bit misses even numbers of bit flips (e.g. 2-bit errors) which would corrupt executable code",
          keywords: ["even number", "two flipped", "two bits", "2-bit", "2 bits"],
        },
        {
          point: "Echo check doubles network traffic AND cannot tell if error happened outward or on the return journey",
          keywords: ["double", "outward", "return leg", "return journey"],
        },
        {
          point: "CRC in packet trailer accurately detects multi-bit payload errors on arrival",
          keywords: ["cyclic redundancy", "crc", "trailer"],
        },
        {
          point: "ARQ uses acknowledgements and timeouts to automatically retransmit lost or corrupted packets until error-free",
          keywords: ["acknowledgements", "acknowledgement", "timeout", "timeouts", "automatically retransmit", "retransmit"],
        },
      ],
      commonError: "Evaluating only one of the methods instead of comparing Parity, Echo Check, and CRC + ARQ.",
    },
  ],
};
