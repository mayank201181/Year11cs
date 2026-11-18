import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "hardware-architecture-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      guideRef: "von-neumann-fde",
      question:
        "Which CPU register holds the **memory address of the next instruction** to be fetched from RAM? Give the standard 2- or 3-letter register abbreviation (`PC`, `MAR`, `MDR`, `CIR`, or `ACC`).",
      answer: {
        type: "text",
        accept: ["PC", "Program Counter"],
        display: "PC",
      },
      traps: [
        {
          spec: { type: "text", accept: ["CIR", "Current Instruction Register"] },
          feedback: "`CIR` holds the *current instruction* being decoded — `PC` holds the address of the *next* instruction!",
        },
        {
          spec: { type: "text", accept: ["MAR", "Memory Address Register"] },
          feedback: "`MAR` holds the address *currently* being read from or written to, whereas `PC` tracks the *next* instruction address.",
        },
      ],
      hints: ["Think: *next* instruction address, incremented by `1` on each Fetch."],
      solution: [
        "The **Program Counter (`PC`)** always stores the memory address of the **next** instruction to be fetched.",
      ],
      commonError: "Confusing `PC` (next address) with `CIR` (current instruction) or `MAR` (current memory access address).",
    },
    {
      id: "hardware-architecture-quiz-q02",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "von-neumann-fde",
      question:
        "Which of the three system buses in Von Neumann architecture is **unidirectional** (one-way only)?",
      options: [
        "Data Bus",
        "Address Bus",
        "Control Bus",
        "Internal ALU Bus",
      ],
      answerIndex: 1,
      hints: ["Which bus only carries locations from `MAR` out to RAM and I/O controllers?"],
      explanation:
        "Only the **Address Bus** is **unidirectional** (`CPU → Memory/I/O`). Both the **Data Bus** and **Control Bus** are **bidirectional**.",
    },
    {
      id: "hardware-architecture-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      guideRef: "input-output-sensors",
      question:
        "A smart greenhouse measures the **water vapour content in the air** (NOT in the soil). Name the exact CIE 0478 sensor required (e.g. `temperature`, `moisture`, `humidity`, `pH`, `light`).",
      answer: {
        type: "text",
        accept: ["humidity", "humidity sensor"],
        display: "humidity sensor",
      },
      traps: [
        {
          spec: { type: "text", accept: ["moisture", "moisture sensor"] },
          feedback: "A **moisture** sensor measures water content inside *soil* or solid material — water vapour in *air* requires a **humidity** sensor!",
        },
        {
          spec: { type: "text", accept: ["water", "water sensor"] },
          feedback: "'Water sensor' is never accepted on CIE 0478 — use **humidity** for water vapour in air!",
        },
      ],
      hints: ["*Moisture* = water in soil; what word describes water vapour in *air*?"],
      solution: [
        "Water vapour in the air is measured by a **humidity sensor** (whereas soil dampness uses a moisture sensor).",
      ],
      commonError: "Writing 'moisture sensor' for air or 'water sensor' (which scores 0 on CIE 0478).",
    },
    {
      id: "hardware-architecture-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "input-output-sensors",
      question:
        "An ICU patient heart-rate machine displays live pulse graphs and sounds an alarm buzzer if the heart rate drops below `50 bpm`, without administering any drugs or shocks. What type of system is this?",
      options: [
        "Closed-loop control system",
        "Batch processing compiler",
        "Monitoring system",
        "Virtual memory paging system",
      ],
      answerIndex: 2,
      hints: [
        "Does the buzzer physically alter the patient's heart rate automatically?",
        "Check whether there is an environment-altering actuator feedback loop.",
      ],
      explanation:
        "Because the system only **measures, displays, and triggers a warning** without using actuators to alter the patient's heart rate (no physical feedback loop), it is a **monitoring system**.",
    },
    {
      id: "hardware-architecture-quiz-q05",
      kind: "short",
      difficulty: "warmup",
      guideRef: "primary-secondary-storage",
      question:
        "Between `DRAM` and `SRAM`, which type of volatile RAM is built from transistor **flip-flops**, does **not** need constant refreshing, and is used for **CPU cache**? Answer `DRAM` or `SRAM`.",
      answer: {
        type: "text",
        accept: ["SRAM", "Static RAM", "Static Random Access Memory"],
        display: "SRAM",
      },
      traps: [
        {
          spec: { type: "text", accept: ["DRAM", "Dynamic RAM"] },
          feedback: "`DRAM` uses leaky capacitors + transistors that must be constantly refreshed (used for main RAM). `SRAM` uses flip-flops for fast CPU cache!",
        },
      ],
      hints: ["*Static* RAM holds its bit state without refresh cycles as long as power is supplied."],
      solution: [
        "**SRAM (Static RAM)** uses 4–6 transistor **flip-flops**, requires **no refreshing**, and has nanosecond access speed ideal for **CPU cache**.",
      ],
    },
    {
      id: "hardware-architecture-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      guideRef: "primary-secondary-storage",
      question:
        "Which optical storage medium uses a **`405 nm` blue-violet laser** to pack tiny pits and lands closely enough to store `25 GiB` on a single layer?",
      options: [
        "CD-ROM",
        "DVD-RW",
        "Magnetic HDD platter",
        "Blu-ray disc",
      ],
      answerIndex: 3,
      hints: [
        "CD (`780 nm`) and DVD (`650 nm`) both use longer-wavelength red/infrared lasers.",
        "The laser colour gives this disc format its name!",
      ],
      explanation:
        "**Blu-ray** uses a **`405 nm` blue-violet laser** whose shorter wavelength focuses onto much smaller pits and lands than DVD's `650 nm` red laser.",
    },
    {
      id: "hardware-architecture-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "virtual-cloud-networking",
      question:
        "How many **bits** make up a standard **MAC address** burned into a Network Interface Card (`NIC`)? Give your answer as a single integer.",
      answer: { type: "number", value: 48 },
      traps: [
        {
          spec: { type: "number", value: 32 },
          feedback: "`32` bits is the length of an **IPv4** address! A MAC address has `6` pairs of hex digits (`12 × 4 = 48` bits).",
        },
        {
          spec: { type: "number", value: 128 },
          feedback: "`128` bits is the length of an **IPv6** address! A MAC address has `6` bytes = `48` bits.",
        },
        {
          spec: { type: "number", value: 12 },
          feedback: "There are `12` hexadecimal *digits*, and each hex digit represents `4` bits: `12 × 4 = 48` bits!",
        },
      ],
      hints: [
        "A MAC address looks like `00:1C:B3:4F:2A:09` — count the hexadecimal digits (`12`).",
        "Each hexadecimal digit represents `4` binary bits (`12 × 4`).",
      ],
      solution: [
        "A MAC address contains `6` pairs = `12` hexadecimal digits.",
        "Each hex digit = `4` bits, so `12 × 4 = 48` bits (`24`-bit manufacturer ID + `24`-bit serial number).",
      ],
      commonError: "Confusing 48-bit MAC addresses with 32-bit IPv4 or 128-bit IPv6, or writing 12 (hex digits) instead of 48 (bits).",
    },
    {
      id: "hardware-architecture-quiz-q08",
      kind: "short",
      difficulty: "core",
      guideRef: "virtual-cloud-networking",
      question:
        "What two-word CIE 0478 term describes the severe slowdown caused when virtual memory swaps pages back and forth between RAM and the hard disk almost continuously? (Hint: `disk ...`)",
      answer: {
        type: "text",
        accept: ["disk thrashing", "thrashing", "disc thrashing"],
        display: "disk thrashing",
      },
      traps: [
        {
          spec: { type: "text", accept: ["paging", "page swapping", "swapping"] },
          feedback: "**Paging / swapping** is the normal virtual-memory transfer mechanism; when swapping happens continuously so little CPU progress occurs, CIE 0478 calls the slowdown **disk thrashing**!",
        },
        {
          spec: { type: "text", accept: ["fragmentation", "disk fragmentation"] },
          feedback: "**Disk fragmentation** is files split across non-contiguous HDD sectors; continuous RAM↔HDD page swapping is **disk thrashing**!",
        },
      ],
      hints: [
        "The read/write head or swap queue works frantically swapping pages instead of running instructions.",
        "Starts with `disk t...`.",
      ],
      solution: [
        "Excessive continuous page swapping between full RAM and secondary storage swap space is called **disk thrashing**.",
      ],
      commonError: "Writing 'paging' or 'disk fragmentation' instead of the specific CIE 0478 term **disk thrashing**.",
    },
    {
      id: "hardware-architecture-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      guideRef: "virtual-cloud-networking",
      question:
        "Which network protocol running on a local router **automatically assigns temporary dynamic IP addresses** to laptops and phones as they join Wi-Fi?",
      options: [
        "DHCP (Dynamic Host Configuration Protocol)",
        "HTTPS (Hypertext Transfer Protocol Secure)",
        "BIOS (Basic Input/Output System)",
        "ASCII (American Standard Code for Information Interchange)",
      ],
      answerIndex: 0,
      hints: [
        "Look for the protocol with **Dynamic Host** in its name.",
        "Without it, an administrator would have to type static IP addresses manually on every phone.",
      ],
      explanation:
        "A **DHCP** server automatically leases **dynamic IP addresses** (plus subnet mask and default gateway) to devices joining a network.",
    },
    {
      id: "hardware-architecture-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "primary-secondary-storage",
      marks: 3,
      question:
        "Explain how a **Solid-State Drive (`SSD`)** stores data physically, and state one reason it suits a portable laptop.",
      modelAnswer:
        "NAND flash cells have no moving parts. Voltage applied to a control gate forces electrons onto an insulated floating gate where they remain trapped without power. Being shockproof makes it reliable on the move.",
      markScheme: [
        {
          point: "States that SSD / NAND flash has no moving parts.",
          keywords: ["no moving parts", "zero moving parts"],
        },
        {
          point: "Explains that control-gate and floating-gate transistors trap electrons to represent bits.",
          keywords: ["floating gate", "control gate", "trap electrons", "trapped", "electrons"],
        },
        {
          point: "Gives a valid laptop benefit: shockproof/robust if dropped, lower power consumption, lighter weight, or faster access/boot speed.",
          keywords: ["shockproof", "dropped", "low power", "less power", "battery", "lightweight", "lighter", "faster access", "faster read", "access speed"],
        },
      ],
      hints: [
        "Mention moving parts first (`0` moving parts!).",
        "Name the **two transistor gates** and what subatomic particles get trapped, then give one laptop benefit.",
      ],
      commonError: "Writing 'fewer moving parts' instead of 'no moving parts', or forgetting to mention floating/control gates trapping electrons.",
    },
  ],
  papers: [
    {
      id: "hardware-architecture-p1",
      title: "Practice Paper 1: Von Neumann CPU, I/O Devices & Sensors",
      questions: [
        {
          id: "hardware-architecture-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "von-neumann-fde",
          question:
            "Which CPU register holds the **current instruction** while the Control Unit decodes its opcode and operand? Give the standard register abbreviation (`PC`, `MAR`, `MDR`, `CIR`, or `ACC`).",
          answer: {
            type: "text",
            accept: ["CIR", "Current Instruction Register"],
            display: "CIR",
          },
          traps: [
            {
              spec: { type: "text", accept: ["PC", "Program Counter"] },
              feedback: "`PC` holds the memory address of the *next* instruction — `CIR` holds the *current* instruction being decoded!",
            },
            {
              spec: { type: "text", accept: ["MDR", "Memory Data Register"] },
              feedback: "`MDR` buffers data/instructions arriving from the Data Bus, then copies the instruction into `CIR` for decoding.",
            },
          ],
          hints: ["The initials stand for **Current Instruction Register**."],
          solution: [
            "After `MDR` receives the fetched instruction from RAM, it copies it into the **Current Instruction Register (`CIR`)** so the `CU` can decode and execute it.",
          ],
          commonError: "Writing `PC` or `MDR` instead of `CIR`.",
        },
        {
          id: "hardware-architecture-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "von-neumann-fde",
          question:
            "Which register paired with the Arithmetic and Logic Unit (`ALU`) **temporarily stores intermediate arithmetic and logic results**? Give the standard 3-letter abbreviation.",
          answer: {
            type: "text",
            accept: ["ACC", "Accumulator"],
            display: "ACC",
          },
          traps: [
            {
              spec: { type: "text", accept: ["ALU", "Arithmetic Logic Unit", "Arithmetic and Logic Unit"] },
              feedback: "`ALU` is the processing unit that *performs* the calculation — **`ACC`** (Accumulator) is the register that *stores* the intermediate result!",
            },
          ],
          hints: ["Its full name is the **Accumulator**."],
          solution: [
            "The **Accumulator (`ACC`)** is the special-purpose register inside/with the `ALU` that holds intermediate calculation results.",
          ],
          commonError: "Naming the `ALU` (the circuit) when the question specifically asks for the *register* (`ACC`).",
        },
        {
          id: "hardware-architecture-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "von-neumann-fde",
          question:
            "At the start of an FDE cycle, `PC = 400` and `ACC = 50`. Memory location `400` holds `SUB 410` (subtract the value stored at address `410` from `ACC`), and memory location `410` holds `18`. What value is stored in `ACC` after execution finishes? Give your answer as a single integer.",
          answer: { type: "number", value: 32 },
          traps: [
            {
              spec: { type: "number", value: -360 },
              feedback: "Don't subtract the *address* `410` (`50 − 410`)! Subtract the *data value* `18` stored inside address `410`.",
            },
            {
              spec: { type: "number", value: 68 },
              feedback: "`SUB` subtracts (`50 − 18 = 32`), whereas `50 + 18 = 68` added instead.",
            },
          ],
          hints: [
            "Fetch loads `SUB 410` from address `400`.",
            "Execute fetches the value `18` stored at address `410` and subtracts it from `ACC` (`50`).",
          ],
          solution: [
            "`PC` (`400`) fetches `SUB 410` into `CIR` and increments `PC` to `401`.",
            "Execute reads `18` from address `410` into `MDR` and computes `50 − 18 = 32` in `ACC`.",
          ],
          commonError: "Subtracting the memory address `410` instead of the contents `18` stored at address `410`.",
        },
        {
          id: "hardware-architecture-p1-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "von-neumann-fde",
          question:
            "At the start of an FDE cycle, `PC = 400`, instruction `SUB 410` is stored at address `400`, and operand `18` is stored at address `410`. What numerical memory address is left inside **`MAR`** right after the **Execute** stage finishes? Give your answer as a single integer.",
          answer: { type: "number", value: 410 },
          traps: [
            {
              spec: { type: "number", value: 400 },
              feedback: "`MAR` held `400` during the *Fetch* stage, then was overwritten with operand address `410` during *Execute* to read `18`!",
            },
            {
              spec: { type: "number", value: 401 },
              feedback: "`401` is in `PC` (the *next* instruction's address). During Execute, `MAR` had to fetch the operand at `410`!",
            },
            {
              spec: { type: "number", value: 18 },
              feedback: "`18` is the *data* in `MDR` — `MAR` always holds the *address* (`410`)!",
            },
          ],
          hints: [
            "During Fetch, `MAR` held `400`.",
            "During Execute, the CPU had to read the data stored at operand address `410` — which register must hold `410` to address RAM?",
          ],
          solution: [
            "To read the operand `18` from memory location `410` during Execute, the CPU places address **`410`** into `MAR` (`MDR` receives `18`, while `PC` stays `401`).",
          ],
          commonError: "Forgetting that `MAR` is updated again during Execute whenever an instruction reads or writes an operand in RAM.",
        },
        {
          id: "hardware-architecture-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "von-neumann-fde",
          question:
            "A microprocessor has a clock speed of **`2.4 GHz`**. How many **billions** of clock pulses (FDE cycles) can it generate per second? Give your answer as a decimal number (e.g. `1.5`).",
          answer: { type: "number", value: 2.4 },
          traps: [
            {
              spec: { type: "number", value: 2400 },
              feedback: "`2400` is the number of *millions* (`MHz`), whereas `1 GHz = 1 billion` pulses/second, so `2.4 GHz = 2.4` billion!",
            },
          ],
          hints: [
            "Recall `1 Hz = 1` pulse/s, `1 MHz = 1` million/s, `1 GHz = 1` billion ({{10^9}}) pulses/s.",
            "Read the unit in the question carefully: how many **billions**?",
          ],
          solution: [
            "Because `1 GHz = 1 billion` (`10⁹`) clock cycles per second, a `2.4 GHz` clock produces **`2.4`** billion clock pulses per second.",
          ],
        },
        {
          id: "hardware-architecture-p1-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "von-neumann-fde",
          question:
            "A small embedded CPU has a **12-bit unidirectional Address Bus**, where each memory location stores `1 byte`. How many **KiB** of memory can it address directly? (Use CIE IEC `1 KiB = 1024 bytes`.) Give your answer as a single integer.",
          answer: { type: "number", value: 4 },
          traps: [
            {
              spec: { type: "number", value: 4096 },
              feedback: "`4096` is the number of *bytes* ({{2^12}}) — divide by `1024` to convert bytes to **KiB**!",
            },
            {
              spec: { type: "number", value: 12 },
              feedback: "Addressable locations grow as {{2^n}}, not `n`: compute {{2^12 / 1024}}.",
            },
          ],
          hints: [
            "Calculate total byte addresses first: {{2^12}} `= 4096` bytes.",
            "Divide `4096` by `1024` bytes per `KiB`.",
          ],
          solution: [
            "A 12-bit Address Bus addresses {{2^12}} `= 4096` byte locations.",
            "`4096 ÷ 1024 = 4 KiB`.",
          ],
          commonError: "Giving `4096` bytes without dividing by `1024` to convert to `KiB`.",
        },
        {
          id: "hardware-architecture-p1-q07",
          kind: "short",
          difficulty: "warmup",
          guideRef: "von-neumann-fde",
          question:
            "Is the **Control Bus** in a Von Neumann computer `unidirectional` or `bidirectional`? Type the single exact word.",
          answer: {
            type: "text",
            accept: ["bidirectional", "bi-directional", "two-way", "two way"],
            display: "bidirectional",
          },
          traps: [
            {
              spec: { type: "text", accept: ["unidirectional", "uni-directional", "one-way", "one way"] },
              feedback: "Exam trap! Only the **Address Bus** is unidirectional. The **Control Bus** is **bidirectional** because I/O devices send interrupt and acknowledgement signals back to the `CU`!",
            },
          ],
          hints: [
            "Think: do hardware devices ever send **interrupt** or **ready/acknowledge** signals back to the `CU`?",
            "Only the Address Bus is one-way!",
          ],
          solution: [
            "The **Control Bus** is **bidirectional** — the `CU` sends read/write/clock signals out, and peripherals send interrupt/status signals back.",
          ],
          commonError: "Assuming the Control Bus is unidirectional because 'the Control Unit is in charge'.",
        },
        {
          id: "hardware-architecture-p1-q08",
          kind: "short",
          difficulty: "warmup",
          guideRef: "input-output-sensors",
          question:
            "Which touchscreen technology uses **two flexible conductive layers separated by a tiny gap** that make electrical contact when physically pressed together (allowing gloved fingers to work)? Answer `capacitive`, `resistive`, or `infrared`.",
          answer: {
            type: "text",
            accept: ["resistive", "resistive touchscreen", "resistive screen"],
            display: "resistive",
          },
          traps: [
            {
              spec: { type: "text", accept: ["capacitive", "capacitive touchscreen"] },
              feedback: "**Capacitive** screens use a rigid electrostatic glass layer and do NOT respond to non-conductive gloves!",
            },
            {
              spec: { type: "text", accept: ["infrared", "infrared touchscreen"] },
              feedback: "**Infrared** screens break invisible LED light beams across glass rather than pressing two flexible layers together.",
            },
          ],
          hints: [
            "Pressing top polyester onto bottom glass changes electrical *resistance* along a voltage divider.",
            "Choose from `capacitive`, `resistive`, or `infrared`.",
          ],
          solution: [
            "A **resistive** touchscreen detects touch when physical pressure pushes two conductive layers into contact.",
          ],
        },
        {
          id: "hardware-architecture-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "input-output-sensors",
          question:
            "Which type of digital projector splits white light using **dichroic mirrors** into separate Red, Green, and Blue beams that pass through **three monochrome liquid-crystal panels** before recombining in a prism? Answer `LCD` or `DLP`.",
          answer: {
            type: "text",
            accept: ["LCD", "LCD projector", "Liquid Crystal Display", "Liquid Crystal Display projector"],
            display: "LCD",
          },
          traps: [
            {
              spec: { type: "text", accept: ["DLP", "DLP projector", "Digital Light Processing"] },
              feedback: "`DLP` uses millions of tilting micro-mirrors (`DMD` chip) + a spinning colour wheel. Dichroic mirrors + 3 liquid-crystal panels + prism is **`LCD`**!",
            },
          ],
          hints: [
            "Notice the clue: **three monochrome liquid-crystal panels**!",
            "`DLP` uses tilting micro-mirrors instead.",
          ],
          solution: [
            "An **LCD** projector uses dichroic mirrors to split white light into R, G, and B channels, passing each through an LCD panel and recombining them in a prism.",
          ],
        },
        {
          id: "hardware-architecture-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "input-output-sensors",
          question:
            "A smartphone automatically rotates its display from portrait to landscape when tilted sideways and detects sudden free-fall if dropped. Name the exact CIE 0478 sensor used (1 word, e.g. `accelerometer`, `proximity`, `acoustic`, `moisture`).",
          answer: {
            type: "text",
            accept: ["accelerometer", "accelerometer sensor"],
            display: "accelerometer",
          },
          traps: [
            {
              spec: { type: "text", accept: ["proximity", "proximity sensor"] },
              feedback: "A **proximity** sensor turns the screen off when held against your ear during a call; tilt and acceleration require an **accelerometer**!",
            },
            {
              spec: { type: "text", accept: ["motion", "motion sensor", "tilt", "tilt sensor"] },
              feedback: "Use the official CIE 0478 sensor name: **accelerometer**!",
            },
          ],
          hints: [
            "This sensor measures forces of **acceleration** and tilt in 3 axes `(x, y, z)`.",
            "Starts with `accel...`.",
          ],
          solution: [
            "An **accelerometer** measures changes in acceleration and orientation/tilt in three dimensions.",
          ],
        },
        {
          id: "hardware-architecture-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "input-output-sensors",
          question:
            "What general CIE 0478 hardware term describes an electromechanical output device — such as a motor, solenoid valve, pump, or relay — that produces **physical movement or action** when signalled by a microprocessor? Type the single word.",
          answer: {
            type: "text",
            accept: ["actuator", "actuators"],
            display: "actuator",
          },
          traps: [
            {
              spec: { type: "text", accept: ["sensor", "sensors"] },
              feedback: "A **sensor** is an *input* device that measures physical conditions; an **actuator** is the *output* device that acts on the environment!",
            },
          ],
          hints: [
            "Sensors *input* physical measurements; this device *outputs* physical action in a control loop.",
            "Starts with `act...`.",
          ],
          solution: [
            "An **actuator** converts electrical control signals from a microprocessor (via a DAC/driver) into physical action (opening valves, spinning motors, switching heaters).",
          ],
        },
        {
          id: "hardware-architecture-p1-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "von-neumann-fde",
          marks: 4,
          question:
            "Describe the sequence of register and bus operations that take place during the **Fetch** stage of the Fetch–Decode–Execute cycle.",
          modelAnswer:
            "First, the next instruction's address in PC is copied into MAR and sent along the unidirectional address bus to RAM while CU sends a read signal on the control bus. RAM transfers the instruction across the data bus into MDR, which copies it to CIR, and PC increments by 1.",
          markScheme: [
            {
              point: "Address in PC is copied to MAR.",
              keywords: ["mar", "program counter"],
            },
            {
              point: "Address sent via Address Bus AND CU sends a read signal on the Control Bus.",
              keywords: ["address bus", "read signal", "control bus"],
            },
            {
              point: "Instruction transferred from RAM across the Data Bus into MDR.",
              keywords: ["data bus", "mdr"],
            },
            {
              point: "Instruction copied from MDR into CIR AND PC is incremented by 1.",
              keywords: ["cir", "increment", "increments", "plus 1", "+ 1"],
            },
          ],
          hints: [
            "Trace the four registers in order: `PC → MAR → MDR → CIR`.",
            "Include all **three buses** (`Address Bus`, `Control Bus` read signal, `Data Bus`) and don't forget incrementing `PC` by `1`!",
          ],
          commonError: "Skipping `MDR` (`RAM → CIR` directly) or forgetting to mention `PC` incrementing by `1` and the `CU` read signal.",
        },
        {
          id: "hardware-architecture-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "von-neumann-fde",
          marks: 4,
          question:
            "Explain how increasing **cache size** and increasing **clock speed** improve CPU performance, and state one hardware risk of **overclocking**.",
          modelAnswer:
            "Larger SRAM cache holds more frequently used instructions close to the core, reducing slow trips to main DRAM. Higher GHz frequency executes more cycles per second. Pushing past factory limits risks overheating or unsynchronised crashes.",
          markScheme: [
            {
              point: "Cache is fast SRAM on/near the CPU storing frequently used instructions/data.",
              keywords: ["sram", "frequently", "fast access", "faster access"],
            },
            {
              point: "Reduces slower accesses to main RAM (more cache hits).",
              keywords: ["dram", "main ram", "main memory", "slower", "fewer trips"],
            },
            {
              point: "Higher clock speed (GHz) performs more FDE cycles / pulses per second.",
              keywords: ["cycles per second", "pulses per second", "instructions per second", "ghz"],
            },
            {
              point: "Overclocking causes overheating OR unsynchronised operations (crashes / data corruption).",
              keywords: ["overheating", "overheat", "unsynchronised", "unsynchronized", "crash", "crashes", "corruption"],
            },
          ],
          hints: [
            "Explain *why* SRAM cache saves time compared to fetching from main DRAM.",
            "Define clock speed in cycles/pulses per second, then state what goes wrong thermally or logically when overclocked.",
          ],
          commonError: "Saying 'cache gives more storage for user files' instead of 'stores frequently used instructions/data in fast SRAM'.",
        },
        {
          id: "hardware-architecture-p1-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "input-output-sensors",
          marks: 5,
          question:
            "An automated greenhouse keeps air warmth at `25 °C` using a heater and motorised roof vent. Explain step-by-step how the sensor, microprocessor, and output hardware work together to maintain `25 °C`.",
          modelAnswer:
            "A temperature sensor continuously measures air conditions and sends analogue signals to an ADC, which converts them into digital binary for the microprocessor. The processor compares readings against the stored preset: below threshold it activates the heater actuator, above threshold a motor opens the roof, creating continuous feedback.",
          markScheme: [
            {
              point: "Names a temperature sensor taking continuous analogue measurements.",
              keywords: ["temperature sensor", "analogue"],
            },
            {
              point: "ADC converts the analogue signal into digital binary data for the microprocessor.",
              keywords: ["adc", "analogue to digital", "digital"],
            },
            {
              point: "Microprocessor compares the digital reading against the stored preset / threshold value.",
              keywords: ["compares", "compare", "preset", "threshold"],
            },
            {
              point: "Sends signals to actuators (heater switched on if too cold; motor/actuator opens vent if too hot).",
              keywords: ["actuator", "actuators"],
            },
            {
              point: "Process repeats in a continuous feedback loop where output alters the next reading.",
              keywords: ["continuous", "feedback", "repeats"],
            },
          ],
          hints: [
            "Start with the **exact CIE sensor name** (`temperature sensor`) and the **`ADC`**.",
            "Include **preset comparison**, **actuators**, and **continuous feedback**.",
          ],
          commonError: "Writing 'heat sensor' (0 marks) or omitting the `ADC` and preset comparison.",
        },
        {
          id: "hardware-architecture-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "input-output-sensors",
          marks: 3,
          question:
            "Contrast an **inkjet printer** and a **laser printer** in terms of how they apply ink/toner to paper and state the best office or home use case for each.",
          modelAnswer:
            "Inkjets spray liquid droplets line-by-line via thermal bubble or piezoelectric nozzles, suiting low-volume colour photos. Laser printers fuse dry powdered toner onto an entire page at once using a charged drum and heated fuser, suiting high-volume office printing.",
          markScheme: [
            {
              point: "Inkjet sprays liquid ink droplets line-by-line (thermal bubble / piezoelectric printhead).",
              keywords: ["droplets", "liquid ink", "thermal bubble", "piezoelectric", "line-by-line"],
            },
            {
              point: "Laser uses powdered toner, electrostatic photosensitive drum, and heated fuser rollers (whole page at once).",
              keywords: ["toner", "drum", "fuser", "whole page", "entire page"],
            },
            {
              point: "Matches inkjet to low-volume high-quality colour photos AND laser to high-volume fast office documents.",
              keywords: ["low-volume", "high-volume", "photos"],
            },
          ],
          hints: [
            "Compare **liquid droplets line-by-line** vs **powdered toner + electrostatic drum + heated fuser whole-page**.",
            "Then match one to **low-volume photos** and the other to **high-volume office documents**.",
          ],
          commonError: "Saying laser printers 'burn text into paper with a laser' instead of using an electrostatic drum + powdered toner + heated fuser.",
        },
      ],
    },
    {
      id: "hardware-architecture-p2",
      title: "Practice Paper 2: Primary/Secondary Storage, Virtual Memory & Networking",
      questions: [
        {
          id: "hardware-architecture-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "primary-secondary-storage",
          question:
            "Which primary memory chip (`RAM` or `ROM`) is **non-volatile** and stores the **bootstrap loader / BIOS** start-up firmware? Answer `RAM` or `ROM`.",
          answer: {
            type: "text",
            accept: ["ROM", "Read Only Memory", "Read-Only Memory"],
            display: "ROM",
          },
          traps: [
            {
              spec: { type: "text", accept: ["RAM", "Random Access Memory"] },
              feedback: "`RAM` is *volatile* (empty when power is off)! The start-up bootstrap/BIOS must live in non-volatile **`ROM`**.",
            },
          ],
          hints: ["When power is off, volatile memory forgets everything — which chip remembers how to boot?"],
          solution: [
            "**ROM (Read-Only Memory)** is non-volatile primary memory that permanently holds the **bootstrap loader / BIOS**.",
          ],
        },
        {
          id: "hardware-architecture-p2-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "primary-secondary-storage",
          question:
            "Inside each **`DRAM`** memory cell, a transistor is paired with which tiny electronic component that leaks charge and must be **constantly refreshed**? Give the single component name.",
          answer: {
            type: "text",
            accept: ["capacitor", "capacitors"],
            display: "capacitor",
          },
          traps: [
            {
              spec: { type: "text", accept: ["flip-flop", "flip flop", "flipflops"] },
              feedback: "Flip-flops are used in **`SRAM`** (which needs no refresh). **`DRAM`** uses leaky **capacitors**!",
            },
          ],
          hints: [
            "`SRAM` uses flip-flops; `DRAM` uses `1` transistor + `1` charge-storing component.",
            "Starts with `cap...`.",
          ],
          solution: [
            "Each **DRAM** bit cell uses **1 capacitor + 1 transistor**; because the **capacitor** leaks charge in milliseconds, DRAM must be refreshed thousands of times per second.",
          ],
        },
        {
          id: "hardware-architecture-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "primary-secondary-storage",
          question:
            "In an **SSD** (`NAND` flash), electrons are forced through an oxide layer and trapped inside which insulated transistor gate (`floating gate` or `logic gate`)? Type the two-word gate name.",
          answer: {
            type: "text",
            accept: ["floating gate", "floating-gate"],
            display: "floating gate",
          },
          traps: [
            {
              spec: { type: "text", accept: ["control gate", "control-gate"] },
              feedback: "Voltage is applied to the *control gate* on top, which pushes electrons into the insulated **floating gate** where they stay trapped!",
            },
          ],
          hints: [
            "Each flash cell has a *control gate* and an electrically isolated gate that traps electrons.",
            "It 'floats' inside insulating silicon dioxide!",
          ],
          solution: [
            "Electrons tunnel onto and remain trapped inside the insulated **floating gate** even when power is switched off.",
          ],
        },
        {
          id: "hardware-architecture-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "primary-secondary-storage",
          question:
            "On an optical disc (`CD`, `DVD`, or `Blu-ray`), microscopic indentations burned along the single spiral track scatter laser light, while flat reflective areas between them reflect light strongly. What are the **indentations** called? Give the single plural word (`pits` or `lands`).",
          answer: {
            type: "text",
            accept: ["pits", "pit"],
            display: "pits",
          },
          traps: [
            {
              spec: { type: "text", accept: ["lands", "land"] },
              feedback: "**Lands** are the flat reflective regions *between* the indentations — the sunken indentations themselves are **pits**!",
            },
            {
              spec: { type: "text", accept: ["sectors", "tracks"] },
              feedback: "Tracks and sectors are platter divisions — the microscopic optical bumps/hollows are **pits** and **lands**!",
            },
          ],
          hints: [
            "Optical tracks pair flat reflective `lands` with sunken indentations.",
            "Flat areas = `lands`; sunken hollows = `p...` (plural).",
          ],
          solution: [
            "Optical discs encode binary along a single spiral track using sunken **pits** and flat reflective **lands**.",
          ],
        },
        {
          id: "hardware-architecture-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "primary-secondary-storage",
          question:
            "A studio backs up `16` uncompressed 4K video takes, each `256 MiB` in size. What is the exact total size in **GiB**? (Use CIE IEC `1 GiB = 1024 MiB`.) Give your answer as a single integer.",
          answer: { type: "number", value: 4 },
          traps: [
            {
              spec: { type: "number", value: 4.096 },
              feedback: "CIE Trap! Never divide by `1000` (`4096 ÷ 1000 = 4.096`) for `GiB` — divide by **`1024`** (`4096 ÷ 1024 = 4 GiB`)!",
            },
            {
              spec: { type: "number", value: 4096 },
              feedback: "`4096` is the total in **MiB** — divide by `1024` to give the answer in **GiB**!",
            },
          ],
          hints: [
            "Multiply `16 × 256` (note `16 = 2⁴` and `256 = 2⁸`, so `2⁴ × 2⁸ = 2¹² = 4096 MiB`).",
            "Divide `4096 MiB` by `1024 MiB/GiB`.",
          ],
          solution: [
            "Total in MiB = `16 × 256 = 4096 MiB`.",
            "Convert to GiB: `4096 ÷ 1024 = 4 GiB`.",
          ],
          commonError: "Dividing by `1000` instead of `1024` when converting `MiB` to `GiB`.",
        },
        {
          id: "hardware-architecture-p2-q06",
          kind: "short",
          difficulty: "warmup",
          guideRef: "virtual-cloud-networking",
          question:
            "In virtual memory management, fixed-size blocks of inactive data moved from full RAM to swap space on an HDD/SSD are called what? Give the single plural word (e.g. `pages`, `sectors`, `packets`).",
          answer: {
            type: "text",
            accept: ["pages", "page"],
            display: "pages",
          },
          traps: [
            {
              spec: { type: "text", accept: ["packets", "packet"] },
              feedback: "**Packets** are network transmission units! Virtual memory swaps fixed-size memory **pages**.",
            },
          ],
          hints: ["Moving them in and out of swap space is called *paging*!"],
          solution: [
            "Virtual memory divides memory into fixed-size **pages** and swaps inactive pages between RAM and secondary storage.",
          ],
        },
        {
          id: "hardware-architecture-p2-q07",
          kind: "short",
          difficulty: "warmup",
          guideRef: "virtual-cloud-networking",
          question:
            "How many **bits** make up a standard **IPv4** address (such as `192.168.1.1`)? Give your answer as a single integer.",
          answer: { type: "number", value: 32 },
          traps: [
            {
              spec: { type: "number", value: 48 },
              feedback: "`48` bits is a **MAC** address! IPv4 has `4` octets × `8` bits = `32` bits.",
            },
            {
              spec: { type: "number", value: 128 },
              feedback: "`128` bits is an **IPv6** address! IPv4 is `32` bits.",
            },
            {
              spec: { type: "number", value: 4 },
              feedback: "`4` is the number of *bytes* (octets) — multiply by `8` bits per byte: `4 × 8 = 32` bits!",
            },
          ],
          hints: [
            "An IPv4 address has `4` denary numbers, each `0–255` (`1 byte = 8 bits` each).",
            "Compute `4 × 8`.",
          ],
          solution: [
            "Each of the `4` denary octets (`0–255`) occupies `8` bits: `4 × 8 = 32` bits.",
          ],
        },
        {
          id: "hardware-architecture-p2-q08",
          kind: "short",
          difficulty: "core",
          guideRef: "virtual-cloud-networking",
          question:
            "In the 48-bit MAC address `A4:5E:60:D1:8B:2F`, how many **bits** are used strictly for the **Manufacturer ID** (the first half of the address)? Give your answer as a single integer.",
          answer: { type: "number", value: 24 },
          traps: [
            {
              spec: { type: "number", value: 48 },
              feedback: "`48` bits is the *entire* MAC address — the Manufacturer ID is only the **first half** (`48 ÷ 2 = 24` bits)!",
            },
            {
              spec: { type: "number", value: 6 },
              feedback: "There are `6` hexadecimal *digits* (`A4:5E:60`), and each hex digit is `4` bits: `6 × 4 = 24` bits!",
            },
          ],
          hints: [
            "A 48-bit MAC address splits evenly: first half = Manufacturer ID, second half = Unique Serial Number.",
            "Half of `48` bits (or `6` hex digits × `4` bits each) is...",
          ],
          solution: [
            "The first `3` hex pairs (`A4:5E:60` = `6` hex digits) form the Manufacturer ID: `6 × 4 = 24` bits (half of `48` bits).",
          ],
        },
        {
          id: "hardware-architecture-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "virtual-cloud-networking",
          question:
            "What is the **maximum denary number** permitted in any one of the four dot-separated octets of a valid **IPv4** address? Give your answer as a single integer.",
          answer: { type: "number", value: 255 },
          traps: [
            {
              spec: { type: "number", value: 256 },
              feedback: "There are `256` *total* values (`0` to `255`), so the highest allowed octet number is **`255`** (`11111111₂`)!",
            },
          ],
          hints: [
            "Each octet is an unsigned `8`-bit integer.",
            "What is `2⁸ − 1` (`128 + 64 + 32 + 16 + 8 + 4 + 2 + 1`)?",
          ],
          solution: [
            "Each IPv4 octet is `8` bits wide, giving values from `0` (`00000000₂`) up to **`255`** (`11111111₂`). Any number `≥ 256` is invalid.",
          ],
        },
        {
          id: "hardware-architecture-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "virtual-cloud-networking",
          question:
            "Which hardware component installed inside every network-capable laptop, phone, or printer provides the physical/wireless connection interface AND holds the factory-assigned 48-bit MAC address? Give the 3-letter abbreviation.",
          answer: {
            type: "text",
            accept: ["NIC", "WNIC", "Network Interface Card", "Network Interface Controller"],
            display: "NIC",
          },
          traps: [
            {
              spec: { type: "text", accept: ["MAC"] },
              feedback: "`MAC` is the *address* stored inside the hardware component — the hardware card/chip itself is the **`NIC`** (Network Interface Card)!",
            },
          ],
          hints: [
            "It is the hardware card or controller chip (wired Ethernet or wireless) inside the device, NOT the address itself.",
            "Stands for **Network Interface Card** (3 letters).",
          ],
          solution: [
            "A **Network Interface Card (`NIC`)** (or `WNIC` for Wi-Fi) connects the device to a network and houses its hardcoded 48-bit MAC address.",
          ],
        },
        {
          id: "hardware-architecture-p2-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "virtual-cloud-networking",
          question:
            "How many colon-separated **groups** of 4 hexadecimal digits appear in a full, uncompressed **IPv6** address (such as `2001:0db8:85a3:0000:0000:8a2e:0370:7334`)? Give your answer as a single integer.",
          answer: { type: "number", value: 8 },
          traps: [
            {
              spec: { type: "number", value: 6 },
              feedback: "`6` pairs of hex digits is a 48-bit **MAC** address! IPv6 has **`8`** groups of 4 hex digits (`8 × 16 = 128` bits).",
            },
            {
              spec: { type: "number", value: 32 },
              feedback: "`32` is the total number of hex *digits* (`8 × 4`) — there are **`8`** colon-separated groups!",
            },
          ],
          hints: [
            "Count the groups separated by colons in `2001:0db8:85a3:0000:0000:8a2e:0370:7334`.",
            "Each group is `16` bits (`4` hex digits), and `128 ÷ 16 = ...`",
          ],
          solution: [
            "An IPv6 address has **`8`** groups of `4` hexadecimal digits (`8 × 16 bits = 128 bits`).",
          ],
        },
        {
          id: "hardware-architecture-p2-q12",
          kind: "written",
          difficulty: "core",
          guideRef: "primary-secondary-storage",
          marks: 4,
          question:
            "Contrast **RAM** and **ROM** across four distinct technical points (volatility, read/write capability, exact CIE contents, and role in starting or running a computer).",
          modelAnswer:
            "RAM is volatile (loses data without power), whereas ROM is non-volatile. RAM can be read from and written to, while ROM is read-only. RAM holds currently running programs, OS, and active data; ROM holds the bootstrap loader or BIOS firmware needed at boot.",
          markScheme: [
            {
              point: "RAM is volatile (loses contents without power) whereas ROM is non-volatile (retains contents).",
              keywords: ["volatile", "non-volatile"],
            },
            {
              point: "RAM can be read from and written to; ROM is read-only.",
              keywords: ["written", "read-only"],
            },
            {
              point: "RAM stores currently running OS, active programs, and data currently in use.",
              keywords: ["currently running", "active programs", "in use"],
            },
            {
              point: "ROM stores bootstrap loader / BIOS / start-up firmware to boot the system.",
              keywords: ["bootstrap", "bios", "firmware"],
            },
          ],
          hints: [
            "Cover 1) Volatility, 2) Read/Write vs Read-only, 3) What RAM holds *while running*, 4) What ROM holds *at start-up*.",
            "Avoid vague phrases like 'RAM stores your files'!",
          ],
          commonError: "Saying 'RAM stores user files and apps' instead of 'currently running OS, programs, and data in use'.",
        },
        {
          id: "hardware-architecture-p2-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "virtual-cloud-networking",
          marks: 4,
          question:
            "Explain step-by-step how **virtual memory** allows a laptop with `8 GiB` of RAM to keep running when open applications demand `11 GiB`, and state what happens if it is overused.",
          modelAnswer:
            "Data is split into fixed-size pages. Inactive pages not immediately required by the CPU are moved from full RAM into swap space on secondary storage (HDD/SSD). When needed again, pages swap back into RAM. Excessive swapping causes disk thrashing, severely slowing performance.",
          markScheme: [
            {
              point: "Memory is divided into pages; inactive pages are identified when RAM is full.",
              keywords: ["inactive pages", "pages"],
            },
            {
              point: "Moved from RAM to virtual memory / swap space on secondary storage (HDD or SSD).",
              keywords: ["swap", "secondary storage", "hdd", "ssd"],
            },
            {
              point: "Swapped back into RAM before the CPU can process them again.",
              keywords: ["back into ram", "back to ram"],
            },
            {
              point: "Overuse causes disk thrashing (high rate of page swaps slowing execution).",
              keywords: ["thrashing"],
            },
          ],
          hints: [
            "Mention **inactive pages** moving from full RAM to **HDD/SSD swap space**.",
            "Remember the return trip (**back into RAM**) and name the slowdown bottleneck (**disk thrashing**).",
          ],
          commonError: "Claiming the CPU executes inactive pages directly from the hard disk without swapping them back into RAM.",
        },
        {
          id: "hardware-architecture-p2-q14",
          kind: "written",
          difficulty: "core",
          guideRef: "virtual-cloud-networking",
          marks: 4,
          question:
            "A graphic design agency debates storing `20 TiB` of client projects on **public cloud storage** instead of local studio hard drives. Give **two advantages** and **two disadvantages** for the agency.",
          modelAnswer:
            "Designers can access and collaborate on files from any Internet-connected location, and automatic remote backups protect against local theft or fire. However, transferring massive files requires fast Internet bandwidth (no offline access), and ongoing subscription fees plus third-party security risks apply.",
          markScheme: [
            {
              point: "Advantage 1: Accessible from any device anywhere with Internet / easy remote collaboration.",
              keywords: ["anywhere", "any device", "collaborate", "collaboration"],
            },
            {
              point: "Advantage 2: Automatic off-site backups / disaster recovery / scalable capacity without buying local servers.",
              keywords: ["backup", "backups", "scalable", "theft", "fire", "disaster"],
            },
            {
              point: "Disadvantage 1: Requires reliable high-speed Internet connection (cannot access offline; slow large uploads/downloads).",
              keywords: ["offline", "bandwidth", "internet connection", "no internet"],
            },
            {
              point: "Disadvantage 2: Ongoing subscription costs OR third-party data security/privacy breach risk.",
              keywords: ["subscription", "ongoing cost", "security", "privacy", "breach", "third-party", "third party"],
            },
          ],
          hints: [
            "Give 2 distinct pros (e.g. remote access/collaboration + automatic off-site backup/scalability).",
            "Give 2 distinct cons (e.g. Internet/bandwidth dependency for `20 TiB` files + recurring subscription fees / third-party security).",
          ],
          commonError: "Writing vague points like 'it is faster' (cloud over the Internet is actually slower than a local NVMe SSD!).",
        },
        {
          id: "hardware-architecture-p2-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "virtual-cloud-networking",
          marks: 4,
          question:
            "Contrast a **MAC address** and an **IP address**, and explain the role of a **router** when sending data onto the Internet.",
          modelAnswer:
            "A MAC address is a permanent 48-bit hexadecimal physical hardware ID burned into the NIC for local LAN identification, whereas an IP address is a 32-bit (IPv4) or 128-bit (IPv6) logical network location assigned statically or via DHCP. A router inspects the destination IP in packet headers and uses its routing table to forward packets between networks.",
          markScheme: [
            {
              point: "MAC is a 48-bit hexadecimal physical/static hardware address stored in the NIC.",
              keywords: ["48-bit", "48 bit", "nic", "physical"],
            },
            {
              point: "IP is a 32-bit (IPv4) or 128-bit (IPv6) logical network address (static or dynamic via DHCP).",
              keywords: ["32-bit", "128-bit", "logical", "dhcp"],
            },
            {
              point: "Router reads the destination IP address in the packet header.",
              keywords: ["destination ip", "packet header"],
            },
            {
              point: "Router consults its routing table to forward packets between different networks (LAN to WAN/Internet).",
              keywords: ["routing table", "forward", "between networks"],
            },
          ],
          hints: [
            "Contrast **48-bit hex physical NIC** (MAC) vs **32/128-bit logical DHCP** (IP).",
            "For the router, mention **destination IP in packet header** + **routing table** to forward between networks.",
          ],
          commonError: "Saying routers route across the global Internet using MAC addresses rather than destination IP addresses.",
        },
      ],
    },
  ],
  challenge: [
    {
      id: "hardware-architecture-ch-q01",
      kind: "short",
      difficulty: "challenge",
      guideRef: "von-neumann-fde",
      question:
        "Trace **three** consecutive FDE cycles on a Von Neumann CPU. Initially `PC = 80` and `ACC = 4`. RAM contains:\n- `80`: `ADD 90` (add value at `90` to `ACC`)\n- `81`: `STORE 91` (copy `ACC` into memory address `91`)\n- `82`: `ADD 91` (add value at `91` to `ACC`)\n- `90`: `11`\n- `91`: `99`\n\nWhat integer value is stored in **`ACC`** right after all **three** instructions finish executing?",
      answer: { type: "number", value: 30 },
      traps: [
        {
          spec: { type: "number", value: 114 },
          feedback: "Watch cycle 2 (`STORE 91`)! It overwrote the old `99` at address `91` with `15`, so cycle 3 adds `15 + 15 = 30`, NOT `15 + 99 = 114`!",
        },
        {
          spec: { type: "number", value: 15 },
          feedback: "`15` is in `ACC` after cycle 1 (`4 + 11 = 15`) and cycle 2 (`STORE 91`), before cycle 3 (`ADD 91`) doubles it to `30`!",
        },
      ],
      hints: [
        "Cycle 1 (`80: ADD 90`): `ACC` becomes `4 + 11 = 15`.",
        "Cycle 2 (`81: STORE 91`): `ACC` (`15`) is written into RAM address `91`, **overwriting** the old `99`! (`ACC` itself still holds `15`.)",
        "Cycle 3 (`82: ADD 91`): adds the *new* value at address `91` (`15`) to `ACC` (`15`).",
      ],
      solution: [
        "Cycle 1 (`ADD 90`): `ACC ← 4 + 11 = 15` (`PC → 81`).",
        "Cycle 2 (`STORE 91`): RAM[`91`] `← 15` (overwriting `99`); `ACC` remains `15` (`PC → 82`).",
        "Cycle 3 (`ADD 91`): `ACC ← 15 + RAM[91] = 15 + 15 = 30` (`PC → 83`).",
      ],
      commonError: "Using the stale initial value `99` at address `91` after `STORE 91` has already overwritten it with `15`.",
    },
    {
      id: "hardware-architecture-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "von-neumann-fde",
      question:
        "A custom 32-bit microprocessor has a **20-bit unidirectional Address Bus** and a **32-bit bidirectional Data Bus**. Each addressable memory location holds **`4 bytes`** (`1` 32-bit word, rather than `1` byte). What is the **maximum directly addressable RAM capacity in MiB**? (Use CIE IEC `1 MiB = 1024 KiB = 1,048,576 bytes`.) Give your answer as a single integer.",
      answer: { type: "number", value: 4 },
      traps: [
        {
          spec: { type: "number", value: 1 },
          feedback: "There are {{2^20}} `= 1,048,576` *locations*, and each location holds **`4 bytes`**, not `1 byte` (`1,048,576 × 4 bytes = 4 MiB`)!",
        },
        {
          spec: { type: "number", value: 32 },
          feedback: "`32` bits = `4 bytes` per word. Multiply {{2^20}} locations by `4 bytes`, then divide by {{2^20}} bytes/MiB!",
        },
      ],
      hints: [
        "First find the number of addressable locations from the 20-bit Address Bus: {{2^20}} locations.",
        "Multiply by `4 bytes` per location: total bytes = {{2^20}} `× 4` bytes.",
        "Since `1 MiB = 1024 × 1024 =` {{2^20}} bytes, the {{2^20}} factors cancel cleanly!",
      ],
      solution: [
        "Number of addressable locations = {{2^20}}.",
        "Total bytes = {{2^20}} `× 4` bytes.",
        "Convert to MiB (`1 MiB =` {{2^20}} bytes): `(`{{2^20}} `× 4) ÷` {{2^20}} `= 4 MiB`.",
      ],
    },
    {
      id: "hardware-architecture-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "von-neumann-fde",
      question:
        "A benchmark program consists of **50% strictly sequential code** (must run on 1 core) and **50% perfectly parallelisable code** (splits evenly across all cores with zero communication delay). If the whole program takes **`12 seconds`** on a **1-core** CPU at `3 GHz`, what is the theoretical **minimum execution time** on a **4-core** CPU at the same `3 GHz` clock speed?",
      options: [
        "`3.0 seconds`",
        "`6.0 seconds`",
        "`7.5 seconds`",
        "`9.0 seconds`",
      ],
      answerIndex: 2,
      hints: [
        "Split the `12` seconds into its two halves: `6 s` sequential + `6 s` parallelisable.",
        "How long does the `6 s` sequential part still take on 4 cores? (`6 s`!)",
        "How long does the `6 s` parallel part take split evenly across `4` cores? (`6 ÷ 4 = 1.5 s`.) Now add them!",
      ],
      explanation:
        "The sequential half still takes **`6.0 s`** on 1 core, while the parallel half divides across `4` cores in `6.0 ÷ 4 =` **`1.5 s`**, giving `6.0 + 1.5 =` **`7.5 seconds`** (illustrating Amdahl's Law — why 4× cores never gives 4× speedup on mixed code!).",
    },
    {
      id: "hardware-architecture-ch-q04",
      kind: "written",
      difficulty: "challenge",
      guideRef: "input-output-sensors",
      marks: 5,
      question:
        "An autonomous warehouse robot uses **two different sensor systems**:\n1. It stops and steers around unexpected human workers walking across an aisle.\n2. It alerts maintenance staff on a dashboard whenever warehouse air dampness exceeds `75%`, without switching on any dehumidifier.\n\nIdentify a suitable CIE sensor for each task, classify Task 1 and Task 2 as **monitoring** or **control**, and justify the difference.",
      modelAnswer:
        "Task 1 uses an infra-red or proximity sensor in a control system because microprocessor signals drive wheel motor actuators to brake and steer, physically altering position and future readings. Task 2 uses a humidity sensor in a monitoring system because it only sends dashboard warnings without actuators changing the air.",
      markScheme: [
        {
          point: "Task 1 sensor: infra-red (active/passive) OR proximity sensor.",
          keywords: ["infra-red", "infrared", "proximity"],
        },
        {
          point: "Task 2 sensor: humidity sensor (for air dampness).",
          keywords: ["humidity"],
        },
        {
          point: "Classifies Task 1 as control AND Task 2 as monitoring.",
          keywords: ["control", "monitoring"],
        },
        {
          point: "Justifies Task 1: actuators (motors/brakes) alter robot movement/environment, creating feedback.",
          keywords: ["actuator", "actuators", "motors", "feedback"],
        },
        {
          point: "Justifies Task 2: only displays/warns on dashboard with no actuator changing the air dampness.",
          keywords: ["no actuator", "without actuators", "only sends", "warnings"],
        },
      ],
      hints: [
        "Task 1 detects nearby obstacles/body heat (`infra-red` or `proximity`); Task 2 measures air water vapour (`humidity`).",
        "Check which task triggers **actuators** (motors/brakes) that change the next sensor reading.",
        "State explicitly why Task 1 is **control** (feedback loop via actuators) and Task 2 is **monitoring** (warning only, no actuators).",
      ],
    },
    {
      id: "hardware-architecture-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "primary-secondary-storage",
      question:
        "A media archive stores `64` uncompressed studio master albums (`512 MiB` each) plus `2048` high-resolution booklet scans (`8 MiB` each). What is the **minimum number of single-layer `25 GiB` Blu-ray discs** needed to archive all files? (Use CIE IEC `1 GiB = 1024 MiB`, and remember you cannot buy a fraction of a disc!) Give your answer as a single integer.",
      answer: { type: "number", value: 2 },
      traps: [
        {
          spec: { type: "number", value: 1 },
          feedback: "Total data is `32 GiB + 16 GiB = 48 GiB`, which exceeds `1` single-layer `25 GiB` Blu-ray disc!",
        },
        {
          spec: { type: "number", value: 48 },
          feedback: "`48` is the total size in **GiB** — divide by `25 GiB` per Blu-ray disc and round UP to whole discs!",
        },
      ],
      hints: [
        "Albums in GiB: `64 × 512 MiB = 32,768 MiB ÷ 1024 = 32 GiB`.",
        "Scans in GiB: `2048 × 8 MiB = 16,384 MiB ÷ 1024 = 16 GiB`.",
        "Total = `32 + 16 = 48 GiB`. How many `25 GiB` discs are needed to hold `48 GiB`?",
      ],
      solution: [
        "Albums = `(64 × 512) ÷ 1024 = 32 GiB`.",
        "Booklet scans = `(2048 × 8) ÷ 1024 = 16 GiB`.",
        "Total = `32 + 16 = 48 GiB`. One `25 GiB` Blu-ray is too small (`48 > 25`), while `2` discs hold `50 GiB ≥ 48 GiB`, so **`2`** discs are required.",
      ],
    },
    {
      id: "hardware-architecture-ch-q06",
      kind: "short",
      difficulty: "challenge",
      guideRef: "virtual-cloud-networking",
      question:
        "A laptop has **`8 GiB` of physical RAM**. Currently running in RAM are the OS (`2.5 GiB`) and active pages (`5.5 GiB` — RAM is 100% full). The user launches a CAD renderer requiring **`3 GiB` of active RAM**, where each virtual-memory page is **`4 MiB`**. What is the **minimum number of `4 MiB` inactive pages** the OS must swap out of RAM to SSD virtual memory so the `3 GiB` CAD renderer fits in physical RAM? (Use `1 GiB = 1024 MiB`.) Give your answer as a single integer.",
      answer: { type: "number", value: 768 },
      traps: [
        {
          spec: { type: "number", value: 750 },
          feedback: "CIE IEC Trap! Use `1 GiB = 1024 MiB` (`3 × 1024 ÷ 4 = 768`), NOT `1000` (`3000 ÷ 4 = 750`)!",
        },
        {
          spec: { type: "number", value: 3072 },
          feedback: "`3072` is the total **MiB** to free (`3 × 1024`) — divide by `4 MiB` per page to count the **pages**!",
        },
      ],
      hints: [
        "Because physical RAM (`8 GiB`) is already completely full (`2.5 + 5.5 = 8.0 GiB`), the OS must free `3 GiB` in RAM.",
        "Convert `3 GiB` to `MiB` using CIE IEC `1024`: `3 × 1024 = 3072 MiB`.",
        "Divide `3072 MiB` by `4 MiB` per page!",
      ],
      solution: [
        "RAM needed = `3 GiB = 3 × 1024 = 3072 MiB`.",
        "Number of `4 MiB` pages to swap out = `3072 ÷ 4 = 768` pages.",
      ],
    },
    {
      id: "hardware-architecture-ch-q07",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "virtual-cloud-networking",
      question:
        "A laptop on a home LAN (`MAC = A0:B1:C2:D3:E4:F5`, private `IP = 192.168.1.25`) sends a packet through its home router to a remote web server (`IP = 198.51.100.42`) five router hops away across the Internet. Which statement is **true** as the packet travels from hop to hop?",
      options: [
        "The destination IP address (`198.51.100.42`) in the packet header stays aimed at the web server across Internet routers, whereas link-layer MAC framing only identifies hardware on each local hop.",
        "Every Internet router overwrites `198.51.100.42` with the laptop's `A0:B1:C2:D3:E4:F5` MAC address inside the packet payload.",
        "The remote web server in London uses the laptop's local `192.168.1.25` private LAN address without the home router performing any translation.",
        "Internet core routers ignore IP addresses completely and look up every laptop's factory MAC serial number in a single global table.",
      ],
      answerIndex: 0,
      hints: [
        "MAC addresses only identify NIC hardware on a **local network link (LAN)**.",
        "Private LAN addresses like `192.168.1.25` are translated at the home router, while the remote server's public destination IP stays in the packet header.",
        "Core Internet routers consult routing tables using the **destination IP address** (`198.51.100.42`) — never a global table of MAC serial numbers!",
      ],
      explanation:
        "Core Internet **routers** route packets between networks by inspecting the **destination IP address (`198.51.100.42`)** in the packet header via their routing tables, while **MAC addresses** only identify physical NIC interfaces on each immediate local hop.",
    },
    {
      id: "hardware-architecture-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "primary-secondary-storage",
      marks: 4,
      question:
        "An engineer designs an ultra-compact smartwatch. Explain why the smartwatch contains **all three** of `ROM`, `SRAM`, and `NAND Flash` (solid-state storage) even though two of them are non-volatile.",
      modelAnswer:
        "ROM is non-volatile primary memory directly addressed at power-on to run the immutable bootstrap firmware. SRAM is ultra-fast volatile flip-flop cache inside the CPU core so instructions execute without refresh delays. NAND flash provides high-capacity non-volatile solid-state storage with zero moving parts for watchOS apps and music.",
      markScheme: [
        {
          point: "ROM is non-volatile primary memory holding the immutable bootstrap / start-up firmware at power-on.",
          keywords: ["bootstrap", "start-up", "power-on", "firmware"],
        },
        {
          point: "SRAM is ultra-fast volatile flip-flop memory used for CPU cache (no refresh needed).",
          keywords: ["cache", "flip-flop", "flip-flops", "no refresh", "ultra-fast"],
        },
        {
          point: "NAND flash provides larger-capacity non-volatile secondary storage for the OS, apps, and user data.",
          keywords: ["apps", "secondary storage", "larger-capacity", "high-capacity"],
        },
        {
          point: "Solid-state NAND has zero moving parts (shockproof on a moving wrist and low power).",
          keywords: ["no moving parts", "zero moving parts", "shockproof"],
        },
      ],
      hints: [
        "Explain what `ROM` uniquely provides right at **power-on** (immutable primary bootstrap).",
        "Explain why `SRAM` (fast volatile flip-flop cache) is still needed even with flash storage.",
        "Explain why `NAND Flash` (high-density non-volatile secondary storage with **zero moving parts**) stores apps/music on a moving wrist.",
      ],
    },
  ],
};
