import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "hardware-architecture",
  title: "CPU Architecture, Hardware & Storage",
  strand: "Paper 1: Computer Systems",
  icon: "🖥️",
  summary:
    "Inside the Von Neumann CPU: registers, buses, the Fetch–Decode–Execute cycle, sensors in monitoring vs control loops, RAM/ROM, HDD/SSD/Optical storage, virtual memory, and MAC/IP networking.",
  intro:
    "Every action on your phone or laptop — tapping a touchscreen, loading an app, or streaming a packet across Wi-Fi — comes down to billion-per-second pulses inside a **Von Neumann processor** paired with layered memory, storage, sensors, and network interfaces. Mastering CIE 0478 Chapter 3 means knowing the **exact job of every CPU register and bus**, distinguishing **monitoring** from **control** systems, explaining **how electrons or lasers physically store bits**, and contrasting **MAC**, **IPv4**, and **IPv6** addresses with surgical precision.",
  guide: [
    {
      id: "von-neumann-fde",
      heading: "Von Neumann CPU, FDE Cycle, Performance & Embedded Systems",
      discovery: {
        problem:
          "Early 1940s computers like ENIAC had to be physically rewired with plugboards every time engineers wanted to run a different calculation — a job taking days. How could one fixed circuit run *any* program instantly without touching a single wire?",
        idea:
          "In 1945, John von Neumann proposed the **stored-program concept**: store **both program instructions and data in the same primary memory (RAM)** as binary numbers! The CPU simply fetches an instruction from a memory address, decodes its binary opcode, executes it on data, and increments a counter to fetch the next instruction.",
      },
      body: `### 1. The Stored-Program Concept & Von Neumann Components

In **Von Neumann architecture**, program instructions and the data they process share **one common primary memory (RAM)** and travel across the same **system buses**.

| Component | Full Name | Exact CIE 0478 Role |
|---|---|---|
| **CU** | Control Unit | Fetches, decodes, and coordinates execution of instructions by sending timing and **control signals** along the Control Bus to all other components. Contains the system clock. |
| **ALU** | Arithmetic & Logic Unit | Carries out **arithmetic operations** (\`+\`, \`−\`, shifting) and **logical comparisons** (\`AND\`, \`OR\`, \`NOT\`, \`=\`, \`<\`, \`>\`). |
| **PC** | Program Counter | Holds the **memory address of the next instruction** to be fetched from RAM. |
| **MAR** | Memory Address Register | Holds the **memory address currently being read from or written to** in RAM. |
| **MDR** | Memory Data Register | Holds the **actual data or instruction just fetched from** memory, or **waiting to be written to** memory. |
| **CIR** | Current Instruction Register | Holds the **current instruction** (split into **opcode** + **operand**) while the CU decodes and executes it. |
| **ACC** | Accumulator | Built into/paired with the ALU to **temporarily store intermediate results** of arithmetic and logic calculations. |

### 2. The Three System Buses (Direction Matters!)

Buses are parallel wire pathways connecting the CPU, RAM, and Input/Output controllers:

| System Bus | Direction | What Travels Along It |
|---|---|---|
| **Address Bus** | **Unidirectional** (one-way: CPU → Memory / I/O) | Carries memory addresses from \`MAR\` to RAM or I/O controllers. An *n*-bit address bus can address {{2^n}} memory locations. |
| **Data Bus** | **Bidirectional** (two-way: CPU ↔ Memory / I/O) | Carries binary instructions and data both ways between \`MDR\`, RAM, and I/O devices. Wider data bus = larger word size transferred per pulse. |
| **Control Bus** | **Bidirectional** (two-way: CPU ↔ Memory / I/O) | Carries control signals (read, write, clock pulses, interrupt requests, bus grant) both ways between the \`CU\` and hardware components. |

### 3. Step-by-Step Fetch–Decode–Execute (FDE) Cycle

Memorise this exact register-transfer sequence for 4–6 mark CIE questions:

1. **Fetch — Copy Address**: The address of the next instruction stored in \`PC\` is copied into \`MAR\`.
2. **Fetch — Send Signals**: The address in \`MAR\` is sent to RAM along the **Address Bus**, while the \`CU\` sends a **read signal** along the **Control Bus**.
3. **Fetch — Transfer Instruction**: RAM places the contents of that memory location onto the **Data Bus**, copying it into \`MDR\`.
4. **Fetch — Load CIR & Increment PC**: The instruction in \`MDR\` is copied into \`CIR\`, and \`PC\` is **incremented by 1** so it points to the next instruction in sequence (unless a jump/branch later overwrites \`PC\`).
5. **Decode**: The \`CU\` decodes the instruction inside \`CIR\` (separating **opcode** = what operation to perform from **operand** = data or address) using the CPU's **instruction set**.
6. **Execute**: The \`CU\` sends control signals to carry out the instruction — e.g. fetching an operand via \`MAR\`/\`MDR\`, performing arithmetic in the \`ALU\` (storing the result in \`ACC\`), or writing \`ACC\` back to RAM. Then the cycle repeats!

### 4. Factors Affecting CPU Performance & Overclocking

- **Clock Speed (GHz)**: Number of FDE cycles/pulses per second (\`1 GHz = 1 billion pulses/second\`, \`3.5 GHz = 3.5 billion pulses/second\`). Higher clock speed processes more instructions per second. **Overclocking** pushes the clock beyond its factory rating — risking **unsynchronised operations (crashes/data corruption)** and **severe overheating** that can permanently damage silicon.
- **Number of Cores**: Each core is an independent processing unit (\`CU\` + \`ALU\` + registers). Dual-core (\`2\`) or quad-core (\`4\`) CPUs run multiple instructions simultaneously (**parallel processing / multitasking**). *Exam nuance*: doubling cores does **not** double speed because cores spend extra overhead **communicating with each other via channels**, and **sequential programs** where step 2 depends on step 1 cannot be split across cores!
- **Cache Size**: Ultra-fast **SRAM** built right onto/inside the CPU die (\`L1\`, \`L2\`, \`L3\`) storing frequently used instructions and data. Larger cache means more **cache hits** and fewer slow trips across the system bus to main DRAM.

### 5. Instruction Sets & Embedded Systems

- **Instruction Set**: The complete list of **machine-code binary commands** (opcodes) that a specific CPU architecture (\`x86\`, \`ARM\`) is physically wired to decode and execute. Software compiled for one instruction set will not run natively on another.
- **Embedded System**: A combination of **microprocessor/microcontroller hardware and dedicated firmware** (stored in ROM/flash) designed to perform **one specific task** inside a larger mechanical or electrical system — e.g. ABS car brakes, washing machines, microwave ovens, robotic vacuum cleaners, smart thermostats, vending machines.
  - **Pros**: Low power consumption, small physical size, low mass-production cost, fast real-time response to sensors.
  - **Cons**: Difficult or impossible to upgrade/reprogram firmware (some require specialist equipment or replacing the whole board); limited memory; if internet-connected (IoT), vulnerable to hacking if not patched.`,
      diagram:
        '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Von Neumann CPU architecture showing CU, ALU, ACC, PC, MAR, MDR, CIR connected to RAM via unidirectional Address Bus and bidirectional Data and Control Buses"><rect x="8" y="10" width="290" height="240" rx="12" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="20" y="32" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e3a8a">CPU (Microprocessor)</text><rect x="20" y="44" width="125" height="62" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/><text x="82" y="68" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a">Control Unit (CU)</text><text x="82" y="85" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1e40af">Decodes &amp; Clock</text><rect x="20" y="116" width="125" height="82" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/><text x="82" y="138" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#14532d">ALU</text><text x="82" y="153" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#166534">Arithmetic &amp; Logic</text><rect x="34" y="162" width="97" height="26" rx="5" fill="#bbf7d0" stroke="#15803d"/><text x="82" y="179" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#14532d">ACC</text><rect x="160" y="44" width="124" height="36" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/><text x="222" y="66" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#92400e">PC (Next Addr)</text><rect x="160" y="88" width="124" height="36" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/><text x="222" y="110" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#92400e">MAR (Curr Addr)</text><rect x="160" y="132" width="124" height="36" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/><text x="222" y="154" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#92400e">MDR (Data/Instr)</text><rect x="160" y="176" width="124" height="36" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/><text x="222" y="198" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#92400e">CIR (Decode)</text><rect x="430" y="30" width="120" height="200" rx="12" fill="#f3e8ff" stroke="#7c3aed" stroke-width="2"/><text x="490" y="56" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#4c1d95">RAM</text><text x="490" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#5b21b6">Instructions</text><text x="490" y="88" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#5b21b6">&amp; Data</text><rect x="446" y="102" width="88" height="22" rx="4" fill="#ede9fe" stroke="#8b5cf6"/><text x="490" y="117" text-anchor="middle" font-family="monospace" font-size="10" fill="#4c1d95">100: LOAD 104</text><rect x="446" y="130" width="88" height="22" rx="4" fill="#ede9fe" stroke="#8b5cf6"/><text x="490" y="145" text-anchor="middle" font-family="monospace" font-size="10" fill="#4c1d95">101: ADD 105</text><rect x="446" y="158" width="88" height="22" rx="4" fill="#ede9fe" stroke="#8b5cf6"/><text x="490" y="173" text-anchor="middle" font-family="monospace" font-size="10" fill="#4c1d95">104: 00001100</text><line x1="284" y1="106" x2="424" y2="106" stroke="#dc2626" stroke-width="3"/><polygon points="428,106 418,100 418,112" fill="#dc2626"/><text x="356" y="98" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#b91c1c">Address Bus (→)</text><line x1="292" y1="150" x2="422" y2="150" stroke="#0284c7" stroke-width="3"/><polygon points="428,150 418,144 418,156" fill="#0284c7"/><polygon points="286,150 296,144 296,156" fill="#0284c7"/><text x="356" y="142" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0369a1">Data Bus (↔)</text><line x1="292" y1="224" x2="422" y2="224" stroke="#4f46e5" stroke-width="3"/><polygon points="428,224 418,218 418,230" fill="#4f46e5"/><polygon points="286,224 296,218 296,230" fill="#4f46e5"/><text x="356" y="216" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#4338ca">Control Bus (↔)</text></svg>',
      diagramCaption:
        "Von Neumann architecture: only the Address Bus is unidirectional (CPU → RAM/I/O); both the Data Bus and Control Bus are bidirectional.",
      workedExamples: [
        {
          title: "Tracing Registers Across One FDE Cycle",
          problem:
            "At the start of a Fetch–Decode–Execute cycle, `PC = 200` and `ACC = 15`. Memory address `200` holds the instruction `ADD 205`, and memory address `205` holds the data value `9`. State the final values of `PC`, `CIR`, `MAR`, `MDR`, and `ACC` right after this instruction finishes executing.",
          steps: [
            "**Fetch**: `PC` (`200`) is copied to `MAR` (`200`). RAM sends `ADD 205` to `MDR`, which copies into `CIR` (`ADD 205`). `PC` increments by `1` to **`201`**.",
            "**Decode**: `CU` decodes `CIR` (`ADD 205`) — it needs to fetch the data stored at operand address `205` and add it to `ACC`.",
            "**Execute**: Operand address `205` is placed in **`MAR`** (`205`). RAM reads value `9` into **`MDR`** (`9`). The `ALU` calculates `15 + 9 = 24` and stores **`24`** in **`ACC`**.",
          ],
          answer: "`PC = 201`, `CIR = ADD 205`, `MAR = 205`, `MDR = 9`, `ACC = 24`.",
          yourTurn: {
            question:
              "At the start of a cycle, `PC = 310` and `ACC = 40`. Address `310` holds `SUB 320` (subtract value at address `320` from `ACC`), and address `320` holds `12`. What numerical value is stored in `ACC` after execution completes? Give your answer as a single integer.",
            answer: { type: "number", value: 28 },
            solution:
              "Fetch loads `SUB 320` into `CIR` and increments `PC` to `311`. Execute fetches `12` from address `320` via `MAR`/`MDR` and computes `40 − 12 = 28` in the `ALU`, storing `28` in `ACC`.",
          },
        },
        {
          title: "Address Bus Width & Addressable Locations",
          problem:
            "An embedded microcontroller upgrades its unidirectional Address Bus from `12` wires to `16` wires (each memory location stores `1 byte`). How many KiB of memory can it now directly address?",
          steps: [
            "With `16` address lines, total addressable byte locations = {{2^16}} = `65,536` bytes.",
            "Convert bytes to CIE IEC `KiB` by dividing by `1024` (`2¹⁰`): `65,536 ÷ 1024 = 64 KiB` (or simply {{2^16 / 2^10}} = {{2^6}} = `64 KiB`).",
          ],
          answer: "`64 KiB`",
        },
      ],
      keyPoints: [
        "**Stored-program concept**: instructions and data reside together in the same primary memory (**RAM**).",
        "`PC` holds the **next** instruction's address; `MAR` holds the address **currently** accessed; `MDR` holds fetched/written data or instructions; `CIR` holds the **current** instruction being decoded; `ACC` holds **intermediate ALU results**.",
        "**Address Bus** = **unidirectional**; **Data Bus** = **bidirectional**; **Control Bus** = **bidirectional**.",
        "CPU speed scales with **clock speed (GHz)**, **core count** (limited by inter-core communication & non-parallel code), and **SRAM cache size**.",
        "**Embedded systems** pair a microprocessor with dedicated firmware for **one specific function** inside a larger device (NOT general-purpose laptops or smartphones!).",
      ],
      whyItWorks:
        "Using exponents of 2 explains why register and bus widths rule memory limits: adding just 1 extra wire to the Address Bus doubles the number of unique binary addresses (`2ⁿ → 2ⁿ⁺¹`), while widening the Data Bus from 32 bits to 64 bits lets the CPU pull twice as many bits into `MDR` on every single clock tick.",
      strategies: [
        "**Next vs Current Register Check**: Before writing `PC` or `CIR`, check whether the question asks for the *address of the next instruction* (`PC`) or the *instruction currently being decoded* (`CIR`).",
        "**Bus Direction Filter**: Only the **Address Bus** is one-way (`CPU → Memory`); both **Data** and **Control** are two-way.",
      ],
      thinkDeeper:
        "If instructions and data share the same Data Bus in Von Neumann architecture, why can't the CPU fetch the next instruction at the exact same instant it reads data for the current instruction? (Look up the **Von Neumann bottleneck** and why **Harvard architecture** separates instruction and data buses in digital signal processors!)",
    },
    {
      id: "input-output-sensors",
      heading: "Input/Output Devices & Sensors (Monitoring vs Control)",
      discovery: {
        problem:
          "A hospital ICU heart-rate monitor beeps loudly when a patient's pulse drops below `50 bpm`, whereas an automated greenhouse opens roof vents and turns on a heater to keep temperature at `24 °C`. Both use sensors and microprocessors — so what single architectural difference separates them?",
        idea:
          "The ICU monitor is a **monitoring system**: it only measures, logs, and triggers warnings — its output **never changes the patient's heart rate**. The greenhouse is a **control system**: its microprocessor sends signals to **actuators** (motors/heaters) that physically alter the environment, creating a **closed feedback loop** where the output directly changes the next sensor reading!",
      },
      body: `### 1. Core CIE 0478 Input Devices

- **Barcode Scanner**: Red laser/LED illuminates dark and light parallel bars; **dark bars absorb light** and **white spaces reflect light** back to a light sensor (photodiode), generating a binary waveform converted to digits to look up \`ItemID\`/price in a stock database.
- **QR (Quick Response) Code Scanner**: Camera captures a 2D matrix of dark/light squares (\`3\` large corner alignment squares fix orientation); decoded by app software into URLs, boarding passes, or Wi-Fi credentials. Holds **thousands of characters** (vs ~\`30\` digits in 1D barcodes), has **built-in error correction** (readable even if partially smudged), and needs no laser — just any smartphone camera.
- **2D vs 3D Scanners**: 2D scanners shine a bright light bar across flat documents onto a CCD/CMOS array (paired with **OCR** software to convert scanned images into editable text). 3D scanners use lasers, X-rays, or white light across multiple angles to record \`(x, y, z)\` coordinates, producing a digital 3D CAD model for 3D printing.
- **Touchscreen Technologies (Classic CIE Comparison!)**:

| Touchscreen Type | How Touch Is Detected | Key Pros | Key Cons |
|---|---|---|---|
| **Capacitive** | Glass coated with transparent conductive layer storing an **electrostatic field**. Touching with a bare finger (conductor) draws charge, changing capacitance; corner sensors calculate \`(x, y)\`. | Crisp visibility, supports **multi-touch** (pinch/zoom), durable glass. | **Does NOT work with thick ordinary gloves** or non-conductive plastic stylus. |
| **Resistive** | Two flexible conductive layers separated by a tiny air/dot gap. Pressing **physically pushes the top polyester layer onto the bottom glass layer**, completing a circuit (voltage divider). | Cheap, works with **gloved hands, fingernails, or any stylus**, resistant to surface dust/water. | Poor sunlight visibility, **no multi-touch**, flexible top plastic scratches easily. |
| **Infrared (IR)** | Grid of **invisible IR LED beams and photodetectors** across the bezel. Any finger or object **breaks the X and Y beams** at the exact touch coordinates. | Works with **gloves/stylus**, supports multi-touch, ultra-durable glass (works even if cracked). | Expensive; dust, dirt, or bright ambient IR can block sensors on large kiosks/ATMs. |

- **Other Input Devices**: **Keyboard** (switches press down onto a conductive circuit matrix mapping keystrokes to ASCII/Unicode scan codes), **Optical Mouse** (red LED + CMOS sensor captures thousands of surface images per second to track \`(Δx, Δy)\` without moving balls), **Microphone** (sound waves vibrate a diaphragm moving a coil near a magnet, inducing an analogue current converted by an **ADC**), **Digital Camera** (light passes through lens onto a **CCD/CMOS** grid of millions of photodiodes; ADC converts charge per pixel into RGB values).

### 2. Core CIE 0478 Output Devices

- **Actuator**: Electromechanical output device (solenoid valve, electric motor, relay, pump, piston) driven by a microprocessor (often via a **DAC**) to produce **physical movement** in the real world.
- **Inkjet vs Laser vs 3D Printers**:
  - **Inkjet**: Moving printhead sprays tiny liquid ink droplets onto paper line-by-line using **thermal bubble** (tiny resistor vaporises ink into an expanding bubble) or **piezoelectric** (crystal vibrates when charged) nozzles. Low upfront cost, vivid photo printing, small ink cartridges & paper trays → best for **low-volume colour photos**.
  - **Laser**: Laser beam scans a positively charged **revolving photosensitive drum**, neutralising charge where text/images go; charged powdered **toner** sticks to the latent image, transfers to paper, and passes through heated **fuser rollers** that melt toner permanently onto the page. Prints **whole pages at once** quickly with large toner/paper capacity → best for **high-volume office documents**.
  - **3D Printer**: **Additive manufacturing** building solid objects layer-by-layer (\`0.1 mm\` slices) from a CAD file using heated plastic filament (**direct 3D printing**) or binding powder with glue/laser (**binder 3D printing**). Used for prosthetics, aerospace prototypes, custom dental implants.
- **DLP vs LCD Projectors**:
  - **DLP (Digital Light Processing)**: Uses a **DMD chip** covered in millions of microscopic tilting **micro-mirrors** (\`ON\` tilts toward lens, \`OFF\` tilts away for greyscale shades) shining white light through a **spinning RGB colour wheel**. Higher contrast, compact, quiet, sealed optics resist dust.
  - **LCD (Liquid Crystal Display) Projector**: Splits white beam using **dichroic mirrors** into separate **Red, Green, and Blue** paths, passes each through its own **monochrome LCD panel**, and recombines them in a **prism** onto the screen. Sharper colour saturation & energy-efficient, but LCD panels degrade (yellowing) over years and collect dust.
- **LED vs LCD Screens & Speakers**: **LCD screens** require a backlight (modern ones use an array of LEDs behind liquid-crystal pixels that twist to block/pass polarised light), whereas true **OLED/LED screens** use self-emissive organic diodes (thinner, deeper blacks because \`OFF\` pixels emit zero light, lower power). **Speakers** pass digital audio through a **DAC** and amplifier to drive a coil in a magnetic field, vibrating a cone to create longitudinal sound waves.

### 3. Sensors & The 6-Step Microprocessor Feedback Loop

CIE 0478 expects you to choose the **exact named sensor** (never write *"water sensor"* or *"heat sensor"*!):
- **Temperature** (chemical process, central heating, greenhouse) · **Moisture** (soil water content in agriculture) · **Humidity** (water vapour in air — greenhouses, server rooms) · **Light** (automatic street lamps, phone screen brightness) · **Infra-red (active/passive)** (automatic supermarket doors, burglar alarms detecting body heat) · **Pressure** (burglar pads, industrial pipes, vehicle weighbridges) · **Acoustic / Sound** (detecting footsteps or leaking pipe noise) · **Gas** (\`CO₂\`, \`O₂\`, methane levels in mines or incubators) · **pH** (acidity/alkalinity of soil or chemical vats) · **Magnetic field** (anti-lock braking wheel speed, cell phones, car park bays) · **Accelerometer** (phone screen rotation, car airbag crash detection) · **Proximity** (turning phone screen off near ear, robot collision avoidance) · **Flow** (rate of liquid/gas in hospital drips or fuel pipes) · **Level** (petrol tank or chemical vat liquid height).

**Universal 6-Step CIE Exam Template for Control Systems**:
1. The **named sensor** continuously measures the **analogue** physical variable.
2. An **ADC (Analogue-to-Digital Converter)** converts the analogue voltage into **digital binary data** for the microprocessor.
3. The **microprocessor compares** the incoming digital reading against **stored preset / threshold values**.
4. If the value is outside the acceptable range, the microprocessor sends control signals (via a **DAC** if variable speed/analogue voltage is required) to an **actuator**.
5. The **actuator physically alters the environment** (e.g. opens a valve, switches on a heater/pump/motor).
6. **Continuous feedback loop**: the action changes the physical conditions, altering the **next sensor reading**, and the process repeats continuously.`,
      diagram:
        '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Closed-loop microprocessor control system showing Sensor to ADC to Microprocessor comparing preset to Actuator altering Physical Environment and feeding back to Sensor"><rect x="18" y="34" width="112" height="60" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><text x="74" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a">1. Sensor</text><text x="74" y="77" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1e40af">Analogue reading</text><line x1="130" y1="64" x2="164" y2="64" stroke="#2563eb" stroke-width="2.5"/><polygon points="170,64 160,58 160,70" fill="#2563eb"/><rect x="172" y="40" width="76" height="48" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="210" y="62" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#92400e">2. ADC</text><text x="210" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#b45309">Analogue→Dig</text><line x1="248" y1="64" x2="282" y2="64" stroke="#d97706" stroke-width="2.5"/><polygon points="288,64 278,58 278,70" fill="#d97706"/><rect x="290" y="26" width="140" height="76" rx="10" fill="#f3e8ff" stroke="#7c3aed" stroke-width="2"/><text x="360" y="50" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#4c1d95">3. Microprocessor</text><text x="360" y="67" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#5b21b6">Compares digital value</text><text x="360" y="82" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#5b21b6">with Stored Preset</text><line x1="430" y1="64" x2="462" y2="64" stroke="#16a34a" stroke-width="2.5"/><polygon points="468,64 458,58 458,70" fill="#16a34a"/><rect x="470" y="34" width="78" height="60" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><text x="509" y="58" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#14532d">4. Actuator</text><text x="509" y="74" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#166534">Motor/Heater</text><line x1="509" y1="94" x2="509" y2="184" stroke="#16a34a" stroke-width="2.5"/><line x1="509" y1="184" x2="386" y2="184" stroke="#16a34a" stroke-width="2.5"/><polygon points="380,184 390,178 390,190" fill="#16a34a"/><rect x="180" y="156" width="198" height="58" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/><text x="279" y="181" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#991b1b">5. Physical Environment</text><text x="279" y="198" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#b91c1c">Output changes next reading!</text><line x1="180" y1="184" x2="74" y2="184" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><line x1="74" y1="184" x2="74" y2="100" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4"/><polygon points="74,94 68,104 80,104" fill="#dc2626"/><text x="128" y="232" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#991b1b">6. Feedback Loop (Control ONLY — absent in Monitoring)</text></svg>',
      diagramCaption:
        "In a Control system, actuators physically change the environment, feeding back into the next sensor reading. Monitoring systems stop at logging/alarms with NO environment-altering feedback loop.",
      workedExamples: [
        {
          title: "Choosing Sensors & Explaining Monitoring vs Control",
          problem:
            "A farmer builds an automated irrigation system that waters crops whenever soil dryness drops below `30%`, and a weather station that records hourly air water-vapour levels to a spreadsheet. Name the exact CIE sensor for each, and identify which is **monitoring** and which is **control**.",
          steps: [
            "Soil water content is measured by a **moisture sensor** (never write 'water sensor'). Because the microprocessor signals a **pump/valve actuator** to add water — changing soil moisture for the next reading — irrigation is a **control system**.",
            "Water vapour in the air is measured by a **humidity sensor**. Because the weather station only logs data without changing the weather, it is a **monitoring system**.",
          ],
          answer:
            "Irrigation = **Moisture sensor** (**Control**); Weather station = **Humidity sensor** (**Monitoring**).",
          yourTurn: {
            question:
              "Which converter component changes the continuous analogue voltage from a temperature sensor into binary data that a microprocessor can process? Give the 3-letter abbreviation.",
            answer: {
              type: "text",
              accept: ["ADC", "Analogue to Digital Converter", "Analogue-to-Digital Converter", "Analog to Digital Converter"],
              display: "ADC",
            },
            solution:
              "Sensors measure continuous **analogue** physical quantities, whereas microprocessors only process **digital** binary (`0`s and `1`s), so an **ADC** (Analogue-to-Digital Converter) sits between the sensor and microprocessor.",
          },
        },
      ],
      keyPoints: [
        "**Capacitive** touchscreens detect electrostatic charge changes from a conductive bare finger; **Resistive** screens press two flexible layers together (works with gloves); **Infrared** screens break an LED beam grid.",
        "**Inkjet** sprays liquid droplets line-by-line (thermal bubble / piezoelectric); **Laser** fuses powdered toner onto whole pages using a charged drum + fuser.",
        "**DLP** projectors tilt millions of micro-mirrors through a spinning RGB wheel; **LCD** projectors split light via dichroic mirrors through three RGB LCD panels + a prism.",
        "Always include **ADC**, **comparison with stored preset**, **actuator**, and **continuous feedback** in 6-mark CIE control questions.",
        "**Monitoring** only observes/logs/warns (no actuators changing the measured variable); **Control** uses actuators whose output alters the next sensor reading.",
      ],
      whyItWorks:
        "Real-world physics (temperature, pressure, light intensity) varies smoothly across infinitely many values (**analogue**), whereas transistor logic gates inside a CPU only switch `ON` (`1`) or `OFF` (`0`). That hardware boundary is why an **ADC** is non-negotiable on the input side and a **DAC**/actuator driver sits on the output side.",
      strategies: [
        "**Sensor Naming Precision**: Check your sensor name against the official CIE list (`moisture` for soil, `humidity` for air, `pH` for acidity, `acoustic` for sound, `infra-red` for body heat/beams).",
        "**The 6-Bullet Control Checklist**: Sensor → ADC → Microprocessor compares to preset → Signal to Actuator → Physical change → Continuous loop.",
      ],
      thinkDeeper:
        "Why do automated heating systems use an **upper and lower threshold** (e.g. heater ON below `19 °C`, heater OFF above `21 °C` — called *hysteresis*) instead of a single exact threshold of `20.0 °C`? Think about what happens to the boiler relay if the temperature hovers around `19.99 °C` and `20.01 °C` every second!",
    },
    {
      id: "primary-secondary-storage",
      heading: "Primary (RAM/ROM) & Secondary Storage (Magnetic, Optical, SSD)",
      discovery: {
        problem:
          "Your laptop has a huge `1 TiB` SSD that remembers your files with the power off, yet it still needs `16 GiB` of expensive RAM that forgets everything at shutdown AND a tiny `ROM` chip soldered to the motherboard. Why can't the CPU just run everything straight off the `1 TiB` SSD?",
        idea:
          "Even a fast SSD is **hundreds to thousands of times slower** than CPU registers and SRAM/DRAM, and cannot be addressed byte-by-byte at CPU clock speeds! The CPU needs **Primary Memory** directly on the memory bus: **ROM** (non-volatile) so it knows how to wake up when power is first switched on, and **RAM** (volatile, fast read/write) to hold the active OS, running apps, and open data.",
      },
      body: `### 1. Primary Memory: RAM vs ROM (Directly Accessible by the CPU!)

**Primary memory** is the *only* storage directly addressed by the CPU's Address and Data Buses:

| Feature | RAM (Random Access Memory) | ROM (Read-Only Memory) |
|---|---|---|
| **Volatility** | **Volatile** — contents are **lost** when power is turned off. | **Non-volatile** — contents are **retained** permanently without power. |
| **Read / Write** | Can be **both read from and written to** continuously at high speed. | **Read-only** during normal operation (cannot be overwritten by user programs). |
| **What It Stores (Exact CIE Wording!)** | **Currently running operating system, programs, and data currently in use** (plus active portions of virtual memory). | **Bootstrap loader / BIOS / start-up firmware** that runs POST hardware checks and loads the OS kernel from secondary storage into RAM. |
| **Capacity** | Gigabytes (\`8 GiB\` – \`64 GiB\`), easily upgraded in desktops. | Megabytes (\`4 MiB\` – \`32 MiB\`) soldered chip on motherboard. |

### 2. Inside RAM: DRAM vs SRAM

| Property | DRAM (Dynamic RAM) | SRAM (Static RAM) |
|---|---|---|
| **Cell Circuitry** | **1 capacitor + 1 transistor** per bit (capacitor holds charge = \`1\`, no charge = \`0\`). | **Flip-flop latch** made of **4–6 transistors** per bit. |
| **Refreshing?** | **Must be constantly refreshed** thousands of times per second because capacitors leak charge! | **Does NOT need refreshing** as long as power stays on. |
| **Speed, Cost & Power** | Slower access, **much cheaper per GiB**, higher density, lower idle power per bit. | **Much faster access**, expensive per MiB, physically bulkier, higher power at high speed. |
| **Main Use** | **Main system RAM** (\`16 GiB\` sticks). | **CPU Cache memory** (\`L1\`, \`L2\`, \`L3\`) & registers. |

### 3. Secondary Storage: Non-Volatile Long-Term Storage

**Secondary storage** is **not directly addressable by the CPU** (data must be copied into RAM first) and is **non-volatile**, storing the OS, installed software, and user files permanently across three physical technologies:

| Technology | How Bits (\`0\` & \`1\`) Are Physically Stored & Read | Pros & Typical Uses | Cons |
|---|---|---|---|
| **Magnetic (HDD)** | Stack of **spinning magnetic platters** divided into **concentric tracks** and wedge-shaped **sectors**. **Read/write heads** on an actuator arm use **electromagnets** to magnetise tiny iron-oxide regions (\`North–South\` vs \`South–North\` = \`0\`/\`1\`). | Very **low cost per TiB**, huge capacities (\`4–20 TiB\`), high read/write longevity for archival servers & NAS backups. | **Moving mechanical parts** → fragile if dropped, slower **seek/latency** time, noisy, heavier, higher power draw, suffers file fragmentation. |
| **Optical (CD / DVD / Blu-ray)** | **Single spiral track** running from the **centre hub outward** on a polycarbonate disc. Data is burned/pressed as microscopic **pits** and flat **lands**. A laser shines onto the spinning track; **lands reflect light strongly** to a photodiode (\`1\`), while **pits scatter light** (\`0\` or pit–land transitions). | Very cheap per disc, lightweight/portable for distributing movies, games, or offline backups; immune to magnetic fields. | Slowest read/write speeds, low capacity (\`700 MiB\` CD, \`4.7 GiB\` single-layer DVD, \`25 GiB\` single-layer Blu-ray), easily scratched. |
| **Solid-State (SSD / USB Flash / SD)** | **NAND** (or faster, pricier **NOR**) flash memory matrix with **ZERO moving parts**. Each cell uses two gates: a **Control Gate** and an insulated **Floating Gate** transistor. Applying voltage forces **electrons to tunnel onto and stay trapped in the Floating Gate** even without power, altering threshold voltage to represent \`0\` vs \`1\`. | **Very fast access** (near-zero seek latency), silent, lightweight, **shockproof** when dropped, low power → ideal for laptops, phones, OS boot drives. | Higher cost per GiB than HDD; **limited write/erase endurance** (oxide insulation degrades after thousands of program/erase cycles). |

### 4. Why Blu-ray Holds So Much More Than DVD & CD

- **CD (\`~700 MiB\`)**: \`780 nm\` **red/infrared laser**, single polycarbonate layer.
- **DVD (\`~4.7 GiB\` single / \`8.5 GiB\` dual-layer)**: \`650 nm\` **red laser**, tighter spiral track + optional **dual polycarbonate layers**.
- **Blu-ray (\`~25 GiB\` single / \`50 GiB\` dual-layer)**: **\`405 nm\` blue-violet laser**! Because blue light has a **much shorter wavelength** than red light, the laser spot focuses much smaller, allowing **smaller pits and lands packed far closer together** along a tighter spiral track (plus native encryption).`,
      diagram:
        '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of Magnetic HDD concentric tracks and sectors, Optical disc single spiral track of pits and lands, and SSD NAND floating-gate transistor trapping electrons"><rect x="12" y="16" width="170" height="228" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="97" y="38" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a">Magnetic (HDD)</text><circle cx="97" cy="118" r="56" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/><circle cx="97" cy="118" r="38" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,2"/><circle cx="97" cy="118" r="14" fill="#93c5fd" stroke="#1e40af"/><line x1="97" y1="62" x2="97" y2="104" stroke="#1d4ed8" stroke-width="1.5"/><line x1="136" y1="78" x2="107" y2="108" stroke="#1d4ed8" stroke-width="1.5"/><line x1="158" y1="162" x2="112" y2="124" stroke="#dc2626" stroke-width="3"/><circle cx="158" cy="162" r="5" fill="#dc2626"/><text x="97" y="194" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1e3a8a">Concentric tracks &amp; sectors</text><text x="97" y="210" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1e40af">Electromagnet R/W head</text><text x="97" y="226" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#b91c1c">Moving platters!</text><rect x="195" y="16" width="170" height="228" rx="10" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2"/><text x="280" y="38" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#4c1d95">Optical (CD/DVD/BD)</text><circle cx="280" cy="112" r="52" fill="#ede9fe" stroke="#6d28d9" stroke-width="2"/><circle cx="280" cy="112" r="12" fill="#ffffff" stroke="#6d28d9"/><path d="M 292 112 A 14 14 0 1 1 266 112 A 24 24 0 1 1 304 112 A 34 34 0 1 1 246 112 A 44 44 0 1 1 322 112" fill="none" stroke="#7c3aed" stroke-width="1.5"/><rect x="218" y="172" width="24" height="8" fill="#6d28d9"/><rect x="242" y="176" width="20" height="4" fill="#a78bfa"/><rect x="262" y="172" width="26" height="8" fill="#6d28d9"/><rect x="288" y="176" width="20" height="4" fill="#a78bfa"/><rect x="308" y="172" width="24" height="8" fill="#6d28d9"/><text x="280" y="196" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#4c1d95">Single spiral: Pits &amp; Lands</text><text x="280" y="212" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#5b21b6">405 nm blue vs 650 nm red</text><text x="280" y="228" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#6d28d9">Laser reflection</text><rect x="378" y="16" width="170" height="228" rx="10" fill="#ecfdf5" stroke="#059669" stroke-width="2"/><text x="463" y="38" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#064e3b">Solid-State (SSD)</text><rect x="413" y="62" width="100" height="24" rx="4" fill="#34d399" stroke="#047857" stroke-width="1.5"/><text x="463" y="78" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#064e3b">Control Gate</text><rect x="405" y="90" width="116" height="44" rx="4" fill="#d1fae5" stroke="#059669" stroke-dasharray="3,2"/><rect x="418" y="98" width="90" height="28" rx="4" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/><text x="463" y="116" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#854d0e">Floating Gate (e−)</text><rect x="398" y="140" width="38" height="24" rx="4" fill="#a7f3d0" stroke="#059669"/><text x="417" y="156" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#064e3b">Source</text><rect x="490" y="140" width="38" height="24" rx="4" fill="#a7f3d0" stroke="#059669"/><text x="509" y="156" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#064e3b">Drain</text><text x="463" y="194" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#064e3b">NAND Flash transistors</text><text x="463" y="210" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#047857">Traps electrons in oxide</text><text x="463" y="226" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#059669">Zero moving parts!</text></svg>',
      diagramCaption:
        "Three physical storage mechanisms: HDD concentric magnetic tracks/sectors, Optical spiral pits & lands read by laser, and SSD floating-gate transistors trapping electrons.",
      workedExamples: [
        {
          title: "Storage Backup Capacity Calculation (IEC Units)",
          problem:
            "A photography student shoots `128` uncompressed RAW photos, each `32 MiB` in size. Calculate the total size in **GiB**, and explain whether a single-layer DVD (`4.7 GiB`) or a `16 GiB` USB flash drive is better suited for carrying them on a field trip.",
          steps: [
            "Total size in MiB = `128 × 32 MiB = 4096 MiB`.",
            "Convert MiB to GiB using CIE IEC factor `1024`: `4096 ÷ 1024 = 4 GiB`.",
            "Although `4 GiB` fits on both, a **USB flash drive (solid-state)** has **no moving parts** (cannot be scratched like an optical DVD on a field trip), reads/writes much faster, and plugs directly into any laptop USB port without needing an optical drive.",
          ],
          answer: "`4 GiB` — best stored on the `16 GiB` solid-state USB flash drive.",
          yourTurn: {
            question:
              "A video surveillance system records `8` clips, each `512 MiB` in size. What is the total storage required in **GiB**? (Remember `1 GiB = 1024 MiB`.) Give your answer as a single integer.",
            answer: { type: "number", value: 4 },
            solution: "`8 × 512 MiB = 4096 MiB`. Divide by `1024`: `4096 ÷ 1024 = 4 GiB`.",
          },
        },
      ],
      keyPoints: [
        "**Primary memory** (`RAM` + `ROM`) is **directly accessible by the CPU**; **Secondary storage** (`HDD`, `SSD`, `Optical`) is **not**.",
        "**RAM** is **volatile** and holds the *currently running OS, programs, and data in use*; **ROM** is **non-volatile** and holds the *bootstrap loader / BIOS / firmware*.",
        "**DRAM** uses **capacitors + transistors** and **needs constant refreshing** (main RAM); **SRAM** uses **flip-flops**, needs **no refreshing**, and is faster/pricier (CPU cache).",
        "**HDD** = spinning platters, electromagnets, concentric tracks & sectors; **Optical** = single spiral track of pits & lands read by red (`CD`/`DVD`) or shorter-wavelength blue (`Blu-ray`) laser; **SSD** = NAND/NOR floating-gate & control-gate transistors trapping electrons with **zero moving parts**.",
      ],
      whyItWorks:
        "Quantum tunnelling through an ultra-thin silicon dioxide insulator lets an SSD's **floating gate** hold trapped electrons for years without electricity — giving non-volatile persistence at electronic nanosecond speeds instead of waiting milliseconds for a mechanical platter to spin around to a read/write head.",
      strategies: [
        "**Never Say 'RAM Stores Files'**: On CIE 0478, write that RAM stores **currently running programs, OS, and data currently in use**; permanent user files live on secondary storage!",
        "**Gate Pair Check for SSDs**: Always name **both** the **control gate** and **floating gate** (and mention **trapping electrons** + **no moving parts**) for full 4-mark SSD explanations.",
      ],
      thinkDeeper:
        "If SRAM is so much faster than DRAM and never needs refreshing, why don't laptop manufacturers build `16 GiB` of main memory entirely out of SRAM instead of DRAM?",
    },
    {
      id: "virtual-cloud-networking",
      heading: "Virtual Memory, Cloud Storage & Network Hardware (NIC, MAC, IP, Routers)",
      discovery: {
        problem:
          "You have `8 GiB` of physical RAM, yet your OS (`3 GiB`), video editor (`4 GiB`), and web browser (`3 GiB`) total `10 GiB` — and nothing crashes! Why does the computer keep running smoothly at first, yet grind to a crawl if you open five more heavy apps?",
        idea:
          "The OS carves out a **swap space** on your secondary storage (HDD/SSD) called **Virtual Memory**, moving fixed-size **pages** of inactive data out of full RAM and swapping them back in when needed. Push it too far, though, and the system spends more time swapping pages back and forth than executing instructions — a bottleneck called **disk thrashing**!",
      },
      body: `### 1. Virtual Memory & Disk Thrashing

When physical **RAM becomes full** because too many programs/data are open simultaneously:
1. The OS divides data into fixed-size blocks called **pages**.
2. **Inactive pages** not immediately needed by the CPU are moved from **RAM** into dedicated **virtual memory (swap space / pagefile)** on **secondary storage (HDD or SSD)**.
3. This frees physical RAM space for the active pages currently needed by the CPU.
4. When an inactive page on secondary storage is needed again, the OS **swaps** another inactive page out of RAM to secondary storage and loads the needed page back into **RAM** (because the CPU **cannot** execute directly from secondary storage!).

- **Main Benefit**: Gives the illusion of more RAM so large programs/multitasking can continue **without an 'Out of Memory' crash**.
- **Disk Thrashing (Thrashing Point)**: When RAM is so overcommitted that pages are swapped between RAM and HDD/SSD almost continuously. Execution slows dramatically, HDD mechanical heads wear rapidly, and SSD write endurance degrades faster. Fix: **install more physical RAM** (or switch HDD swap to SSD to reduce latency).

### 2. Cloud Storage (Public, Private & Hybrid)

**Cloud storage** stores data on **remote physical servers** (vast arrays of HDDs/SSDs in data centres across the globe, often mirrored across multiple sites for **data redundancy**) managed by a third-party hosting provider and accessed over the Internet.

- **Public Cloud**: Client and cloud provider are different companies; server infrastructure is shared across many customers (e.g. Google Drive, iCloud, Dropbox).
- **Private Cloud**: Dedicated servers behind a company's own firewall used **exclusively by one organisation** for tighter control and compliance.
- **Hybrid Cloud**: Sensitive data stays on a **private cloud**, while less-sensitive workloads scale onto a **public cloud**.

| Advantages of Cloud Storage | Disadvantages of Cloud Storage |
|---|---|
| Access files from **any device anywhere** with Internet; easy real-time collaboration. | **Cannot access files without an Internet connection**; uploading/downloading huge files is slow on low bandwidth. |
| **No upfront hardware cost** for buying/maintaining local servers; **virtually unlimited scalable capacity** on demand. | Ongoing **recurring subscription costs** can exceed local drives for large TiB volumes. |
| Provider handles **automatic off-site backups & disaster recovery** (data survives if your laptop is stolen or catches fire). | **Security & privacy concerns**: trusting a third party against breaches, hacking, or sudden company closure. |

### 3. Network Interface Card (NIC) & MAC Addresses

- **NIC (Network Interface Card / Controller)** (wired Ethernet or **WNIC** wireless): Hardware component allowing a device to connect to a network, converting binary data into electrical/radio signals and carrying a **hardcoded unique MAC address** assigned at the factory.
- **MAC (Media Access Control) Address**:
  - **48-bit** (\`6 bytes\`) identifier written as **6 pairs of hexadecimal digits** separated by colons or hyphens, e.g. \`00:1C:B3:4F:2A:09\` (\`12\` hex digits total).
  - **First half (24 bits / first 3 hex pairs)** = **Manufacturer ID** (OUI — e.g. Apple, Intel, Samsung).
  - **Second half (24 bits / last 3 hex pairs)** = **Unique serial number** of that specific NIC.
  - **Physical & Static**: Identifies the exact **physical hardware device on the local network (LAN)** and normally **does not change** when you move between Wi-Fi networks (\`UAA\` = Universally Administered Address; rarely temporarily overridden in software as \`LAA\` = Locally Administered Address).

### 4. IP Addresses (IPv4 vs IPv6, Static vs Dynamic) & Routers

An **IP (Internet Protocol) address** is a **logical** address assigned by the network/ISP (often automatically via a **DHCP** — Dynamic Host Configuration Protocol — server) identifying a device's **location on a network** so packets can be routed globally.

| Feature | IPv4 | IPv6 |
|---|---|---|
| **Bit Length** | **32-bit** ({{2^32}} ≈ \`4.3 billion\` addresses) | **128-bit** ({{2^128}} ≈ \`3.4 × 10³⁸\` addresses — solves IPv4 exhaustion!) |
| **Format & Base** | **4 denary numbers (\`0–255\`)** separated by **dots (\`.\`)** | **8 groups of 4 hexadecimal digits (\`0000–FFFF\`)** separated by **colons (\`:\`)** |
| **Valid Example** | \`192.168.1.254\` (\`8\` bits per octet × \`4\` = \`32\` bits) | \`2001:0db8:85a3:0000:0000:8a2e:0370:7334\` (\`16\` bits per group × \`8\` = \`128\` bits) |

- **Static IP**: Permanently assigned — never changes. Essential for **web servers, DNS servers, FTP servers, and remote-access CCTV/printers** so clients always find them at a fixed address; slightly easier to track/target with DDoS.
- **Dynamic IP**: Temporarily leased by a **DHCP server** each time a device joins a network or reconnects to an ISP. Greater **privacy** and efficient reuse of limited IPv4 pools, though slight reconnection hiccups can disrupt live VoIP/gaming if a lease changes mid-session.
- **Router**: Connects two or more **different networks** together (e.g. a home **LAN** to the **WAN / Internet** via a modem). It inspects the **destination IP address** in each **packet header**, consults its **routing table** to calculate the fastest, least-congested next hop, and forwards the packet toward its destination (and assigns local private IPs on a LAN via built-in DHCP/NAT).`,
      diagram:
        '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of 48-bit MAC address structure and Router forwarding packets between LAN and Internet using IPv4 and IPv6 addresses"><rect x="12" y="14" width="536" height="92" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="280" y="34" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#92400e">48-Bit MAC Address (6 Hex Pairs = 12 Hex Digits inside NIC)</text><rect x="38" y="44" width="230" height="34" rx="6" fill="#fde68a" stroke="#b45309" stroke-width="1.5"/><text x="153" y="66" text-anchor="middle" font-family="monospace" font-size="14" font-weight="bold" fill="#78350f">00 : 1C : B3</text><text x="153" y="94" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#92400e">24 bits: Manufacturer ID (OUI)</text><rect x="292" y="44" width="230" height="34" rx="6" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/><text x="407" y="66" text-anchor="middle" font-family="monospace" font-size="14" font-weight="bold" fill="#713f12">4F : 2A : 09</text><text x="407" y="94" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#854d0e">24 bits: Unique Device Serial</text><rect x="12" y="124" width="154" height="120" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><text x="89" y="146" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a">Home LAN</text><text x="89" y="166" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1e40af">NIC + Static MAC</text><text x="89" y="184" text-anchor="middle" font-family="monospace" font-size="10" fill="#1e3a8a">192.168.1.14</text><text x="89" y="202" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#1d4ed8">(DHCP local IPv4)</text><text x="89" y="222" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#1e3a8a">32-bit denary dots</text><line x1="166" y1="184" x2="204" y2="184" stroke="#2563eb" stroke-width="3"/><polygon points="210,184 200,178 200,190" fill="#2563eb"/><rect x="212" y="124" width="142" height="120" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><text x="283" y="146" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#14532d">Router</text><text x="283" y="166" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#166534">Reads Dest IP in</text><text x="283" y="182" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#166534">Packet Header</text><text x="283" y="202" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#15803d">Routing Table</text><text x="283" y="222" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#166534">Picks fastest hop</text><line x1="354" y1="184" x2="392" y2="184" stroke="#16a34a" stroke-width="3"/><polygon points="398,184 388,178 388,190" fill="#16a34a"/><rect x="400" y="124" width="148" height="120" rx="10" fill="#f3e8ff" stroke="#7c3aed" stroke-width="2"/><text x="474" y="146" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#4c1d95">WAN / Internet</text><text x="474" y="166" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#5b21b6">Web Server Static IP</text><text x="474" y="184" text-anchor="middle" font-family="monospace" font-size="10" fill="#4c1d95">203.0.113.80</text><text x="474" y="204" text-anchor="middle" font-family="monospace" font-size="9" fill="#6d28d9">2001:0db8:...:7334</text><text x="474" y="222" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#4c1d95">IPv6 = 128-bit hex</text></svg>',
      diagramCaption:
        "MAC addresses (48-bit hex burned into the NIC) identify physical hardware on a LAN, while Routers inspect logical IPv4 (32-bit) or IPv6 (128-bit) destination addresses to forward packets across networks.",
      workedExamples: [
        {
          title: "Distinguishing Valid MAC, IPv4, and IPv6 Addresses",
          problem:
            "Classify each identifier below as **valid MAC**, **valid IPv4**, **valid IPv6**, or **invalid** (giving the reason): (a) `192.168.300.12`  (b) `A4:83:E7:19:0B:5C`  (c) `2001:0db8:0000:0042:0000:8a2e:0370:7334`",
          steps: [
            "(a) `192.168.300.12` has 4 dot-separated denary numbers, **but `300 > 255`** (an 8-bit octet only holds `0` to `255`), so it is **invalid**!",
            "(b) `A4:83:E7:19:0B:5C` has **6 pairs of valid hex digits** (`0–9`, `A–F`), `6 × 8 = 48` bits → **valid MAC address**.",
            "(c) `2001:0db8:0000:0042:0000:8a2e:0370:7334` has **8 groups of 4 hex digits** separated by colons (`8 × 16 = 128` bits) → **valid IPv6 address**.",
          ],
          answer: "(a) Invalid (`300 > 255`); (b) Valid 48-bit MAC; (c) Valid 128-bit IPv6.",
          yourTurn: {
            question:
              "How many bits long is a standard IPv6 address? Give your answer as a single integer.",
            answer: { type: "number", value: 128 },
            solution:
              "An IPv6 address consists of `8` groups of `4` hexadecimal digits. Each hex digit is `4` bits, so `8 × 4 × 4 = 128` bits.",
          },
        },
      ],
      keyPoints: [
        "**Virtual memory** swaps **inactive pages** from full RAM to HDD/SSD swap space and back; excessive swapping causes **disk thrashing**.",
        "**Cloud storage** stores files on remote servers managed by a third party (accessible anywhere with Internet, automatic backups, but requires bandwidth and raises third-party security/cost trade-offs).",
        "**MAC address**: **48-bit hexadecimal** (`6` hex pairs: `24`-bit Manufacturer ID + `24`-bit device serial) stored in the **NIC** — physical & static.",
        "**IPv4**: **32-bit** (`4` denary octets `0–255` separated by dots); **IPv6**: **128-bit** (`8` groups of `4` hex digits separated by colons); **DHCP** assigns dynamic IPs.",
        "A **Router** reads the **destination IP address** in a packet header and uses a **routing table** to forward packets between different networks (e.g. LAN to Internet).",
      ],
      whyItWorks:
        "Networks need **both** IP and MAC addresses for the same reason post offices need both a **post code / street address** (IP — changes if you move house, lets routers sort mail across countries) and your **passport number / name** (MAC — stays tied to you personally so the final Wi-Fi access point hands the frame to the exact right laptop).",
      strategies: [
        "**Bit-Count Sanity Check**: `IPv4 = 32` (`4 × 8`), `MAC = 48` (`6 × 8`), `IPv6 = 128` (`8 × 16`). Check any octet `> 255` or hex letter `> F` (`G–Z`) to spot fake exam distractors immediately!",
        "**Virtual Memory Direction Check**: Always mention **both directions** — moving inactive pages *out* of full RAM to HDD/SSD, **and** swapping pages *back into RAM* when needed by the CPU.",
      ],
      thinkDeeper:
        "When your laptop in Singapore sends a packet to a web server in London, does the **destination IP address** in the packet header change at each router hop along the way, or does the **frame's MAC address** change at each hop? Why?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "What is the exact role of the Program Counter (`PC`)?",
        back: "Holds the **memory address of the next instruction** to be fetched from primary memory (RAM).",
      },
      {
        front: "Contrast `MAR` and `MDR`.",
        back: "`MAR` holds the **memory address** currently being read from or written to; `MDR` holds the **actual data or instruction** just fetched from or waiting to be written to memory.",
      },
      {
        front: "What is stored in `CIR` and `ACC`?",
        back: "`CIR` holds the **current instruction** while it is being decoded and executed by the `CU`. `ACC` (in the `ALU`) **temporarily stores intermediate arithmetic and logic results**.",
      },
      {
        front: "State the direction of the Address Bus, Data Bus, and Control Bus.",
        back: "**Address Bus** = **Unidirectional** (`CPU → Memory/I/O`). **Data Bus** = **Bidirectional**. **Control Bus** = **Bidirectional**.",
      },
      {
        front: "Why doesn't switching from a 2-core CPU to a 4-core CPU double processing speed?",
        back: "1) Cores spend time **communicating/synchronising with each other** via channels; 2) **Sequential software** where later instructions depend on earlier results cannot be split across cores.",
      },
      {
        front: "Define an Embedded System and give two true examples.",
        back: "A dedicated **microprocessor + firmware** built into a larger mechanical/electrical system to perform **one specific function** (e.g. car ABS braking controller, washing machine controller — *never* a laptop or smartphone!).",
      },
      {
        front: "How do Capacitive, Resistive, and Infrared touchscreens differ?",
        back: "**Capacitive**: bare finger draws charge from electrostatic layer (no thick gloves, multi-touch). **Resistive**: pressure pushes two conductive layers together (works with gloves, no multi-touch). **Infrared**: finger breaks invisible X-Y LED beam grid.",
      },
      {
        front: "Distinguish a Monitoring system from a Control system.",
        back: "**Monitoring** only measures, logs, or displays warnings (no actuators alter the environment). **Control** sends signals to **actuators** whose physical output changes the environment and alters the **next sensor reading** (closed feedback loop).",
      },
      {
        front: "What is the exact difference between RAM and ROM on CIE 0478?",
        back: "**RAM**: **volatile**, read/write, stores **currently running OS, programs, and data in use**. **ROM**: **non-volatile**, read-only, stores **bootstrap loader / BIOS / start-up firmware**.",
      },
      {
        front: "Contrast DRAM and SRAM.",
        back: "**DRAM** uses capacitors + transistors, **must be constantly refreshed**, cheaper/denser → **main RAM**. **SRAM** uses transistor **flip-flops**, **needs no refreshing**, much faster/pricier → **CPU cache**.",
      },
      {
        front: "How does Solid-State (SSD) NAND flash store data?",
        back: "Uses a matrix of **control-gate and floating-gate transistors** with **no moving parts**; voltage forces **electrons onto the insulated floating gate** where they stay trapped without power.",
      },
      {
        front: "Why can a Blu-ray disc store ~5× more data per layer than a DVD?",
        back: "Blu-ray uses a **405 nm blue-violet laser** with a **much shorter wavelength** than DVD's **650 nm red laser**, allowing smaller pits and lands packed on a tighter spiral track.",
      },
      {
        front: "What is Virtual Memory and what causes Disk Thrashing?",
        back: "**Virtual memory** moves **inactive pages** from full RAM to swap space on HDD/SSD and swaps them back into RAM when needed. **Disk thrashing** occurs when excessive constant page swapping slows the system to a crawl.",
      },
      {
        front: "Compare MAC, IPv4, and IPv6 addresses.",
        back: "**MAC**: **48-bit hex** (`6` pairs: manufacturer ID + serial) burned into the **NIC** (physical/static). **IPv4**: **32-bit** (`4` denary octets `0–255` with dots). **IPv6**: **128-bit** (`8` groups of `4` hex digits with colons).",
      },
    ],
    mustKnow: [
      "Trace every register (`PC`, `MAR`, `MDR`, `CIR`, `ACC`) and bus (`Address`, `Data`, `Control`) step-by-step through the Fetch–Decode–Execute cycle.",
      "State clearly that ONLY the **Address Bus** is **unidirectional**, whereas **Data** and **Control** buses are **bidirectional**.",
      "Explain how **clock speed (GHz)**, **number of cores**, and **SRAM cache size** improve CPU performance — and the risks of **overclocking**.",
      "Explain how **barcode/QR scanners**, **capacitive/resistive/infrared touchscreens**, **inkjet/laser/3D printers**, and **DLP/LCD projectors** operate internally.",
      "Write the complete 6-step **sensor → ADC → microprocessor preset comparison → actuator → physical change → continuous feedback loop** explanation.",
      "Contrast **RAM vs ROM** and **DRAM vs SRAM** with exact CIE terminology.",
      "Explain the physical storage mechanisms of **Magnetic HDD** (platters, electromagnets, concentric tracks/sectors), **Optical** (spiral track, pits/lands, laser reflection), and **SSD** (control/floating gates trapping electrons, zero moving parts).",
      "Explain **Virtual Memory** page swapping and **disk thrashing**, plus **Public/Private/Hybrid Cloud** pros and cons.",
      "Identify valid **48-bit MAC**, **32-bit IPv4**, and **128-bit IPv6** addresses, **DHCP** dynamic vs static IPs, and how a **Router** forwards packets between networks.",
    ],
    misconceptions: [
      {
        wrong: "Never Write This: 'The Program Counter (PC) counts how many instructions have been executed or holds the current instruction.'",
        right: "Write This Instead: 'The PC holds the memory address of the NEXT instruction to be fetched; CIR holds the CURRENT instruction being decoded and executed.'",
      },
      {
        wrong: "Never Write This: 'The Control Bus is unidirectional because only the Control Unit sends signals.'",
        right: "Write This Instead: 'The Address Bus is unidirectional; both the Data Bus AND the Control Bus are bidirectional (hardware sends interrupt/acknowledgement signals back to the CU).'",
      },
      {
        wrong: "Never Write This: 'A laptop, tablet, or smartphone is an example of an embedded system because it is small.'",
        right: "Write This Instead: 'Laptops and smartphones are general-purpose computers! Embedded systems perform ONE dedicated function inside a larger device (e.g. microwave oven, car ABS brakes, washing machine).'",
      },
      {
        wrong: "Never Write This: 'RAM stores the user's saved files, photos, and installed apps, while ROM stores data you cannot edit.'",
        right: "Write This Instead: 'Volatile RAM stores the currently running OS, active programs, and data currently in use; non-volatile ROM stores the bootstrap loader / BIOS / start-up firmware.'",
      },
      {
        wrong: "Never Write This: 'A water sensor or heat sensor sends data straight to the CPU, which turns on the heater.'",
        right: "Write This Instead: 'A MOISTURE (or HUMIDITY) sensor / TEMPERATURE sensor sends analogue data to an ADC, which converts it to digital for the microprocessor to compare against a stored preset before signalling an ACTUATOR.'",
      },
      {
        wrong: "Never Write This: 'In virtual memory, the CPU executes inactive programs directly from the hard disk when RAM is full.'",
        right: "Write This Instead: 'The CPU can ONLY access RAM directly! Virtual memory moves inactive pages from full RAM to HDD/SSD swap space, and MUST swap pages back into RAM before the CPU can use them.'",
      },
      {
        wrong: "Never Write This: 'Cloud storage stores your files floating wireless in the sky without physical hard drives.'",
        right: "Write This Instead: 'Cloud storage stores data on remote physical servers (containing large arrays of HDDs/SSDs) in third-party data centres accessed via the Internet.'",
      },
    ],
    examMistakes: [
      "Writing vague sensor names like *'water sensor'*, *'heat sensor'*, or *'movement sensor'* instead of CIE-accepted **moisture / level / flow**, **temperature**, and **infra-red / accelerometer / proximity**.",
      "Forgetting to mention the **ADC** (Analogue-to-Digital Converter) and **comparison against a stored preset value** in 6-mark microprocessor sensor questions — losing 2 easy marks every time.",
      "Confusing **optical discs** (*single spiral track* of pits and lands) with **magnetic HDDs** (*concentric circular tracks* divided into sectors).",
      "Saying SSDs 'have fewer moving parts' instead of stating explicitly that SSDs have **NO moving parts** and trap electrons in **floating-gate / control-gate transistors**.",
      "Mixing up **MAC address** (`48-bit` hex, physical NIC hardware ID on LAN) with **IPv4** (`32-bit` denary `0–255` dots) and **IPv6** (`128-bit` hex colons, logical routing address).",
      "Claiming doubling CPU cores from 2 to 4 'doubles the computer's speed' without noting inter-core communication overhead and sequential code limits.",
      "Calling a Wi-Fi access point or modem a router's primary job — on CIE 0478, a **router** inspects **destination IP addresses in packet headers** and uses a **routing table** to forward packets between **different networks**.",
    ],
    mnemonics: [
      {
        topic: "FDE Fetch Register Order",
        device: "Please Make My Coffee Immediately → PC → MAR → MDR → CIR (+ Increment PC!)",
        explanation:
          "During Fetch: `PC` copies address to `MAR` → RAM sends instruction into `MDR` → copies into `CIR` while `PC` increments by `1`.",
      },
      {
        topic: "Bus Directions",
        device: "A-One, D-Two, C-Two (Address = 1-way, Data = 2-way, Control = 2-way)",
        explanation:
          "Only the **A**ddress Bus is **unidirectional** (`1`-way); **D**ata and **C**ontrol Buses are both **bidirectional** (`2`-way).",
      },
      {
        topic: "Network Address Bit Lengths",
        device: "IPv4 = 32 · MAC = 48 · IPv6 = 128",
        explanation:
          "`4` octets × `8` bits = `32`-bit IPv4; `6` hex pairs × `8` bits = `48`-bit MAC; `8` groups × `16` bits = `128`-bit IPv6.",
      },
    ],
    realWorld: [
      {
        emoji: "📱",
        title: "Why Ski Gloves Fail on iPhones",
        detail:
          "Smartphones use **capacitive** glass screens that rely on the human body's electrical conductivity to distort an electrostatic field. Thick wool ski gloves are insulators — unless woven with conductive silver thread at the fingertips!",
      },
      {
        emoji: "🚗",
        title: "Dozens of Embedded Systems in One Car",
        detail:
          "A modern electric or hybrid car contains over `50` separate **embedded microcontrollers**: one dedicated purely to ABS anti-lock wheel magnetic-field sensors, another to airbag accelerometers, and another to battery thermal control.",
      },
      {
        emoji: "💿",
        title: "PlayStation Discs & Laser Physics",
        detail:
          "PS1 used `700 MiB` CDs (`780 nm` infrared laser), PS2 switched to `4.7 GiB` DVDs (`650 nm` red laser), and PS3–PS5 jumped to `25–100 GiB` Blu-ray discs (`405 nm` blue-violet laser) — shrinking pit size via shorter light wavelength!",
      },
      {
        emoji: "🌐",
        title: "Why the World Needed IPv6",
        detail:
          "32-bit IPv4 only provides `2³² ≈ 4.29 billion` public addresses — fewer than the smartphones, laptops, and smart TVs alive today! 128-bit IPv6 supplies `3.4 × 10³⁸` addresses: enough to give every grain of sand on Earth billions of IPs.",
      },
    ],
    videos: [
      {
        title: "CIE IGCSE CS 0478 — Von Neumann Architecture & Fetch-Decode-Execute Cycle",
        channel: "Craig'n'Dave / IGCSE CS",
        url: "https://www.youtube.com/results?search_query=CIE+IGCSE+Computer+Science+0478+Von+Neumann+Fetch+Decode+Execute",
      },
      {
        title: "CIE IGCSE CS 0478 — Sensors in Monitoring and Control Systems",
        channel: "Cambridge IGCSE CS Revision",
        url: "https://www.youtube.com/results?search_query=IGCSE+Computer+Science+0478+sensors+monitoring+and+control+ADC",
      },
      {
        title: "CIE IGCSE CS 0478 — Primary vs Secondary Storage (DRAM, SRAM, HDD, SSD, Optical)",
        channel: "James Gan / IGCSE CS",
        url: "https://www.youtube.com/results?search_query=IGCSE+Computer+Science+0478+DRAM+SRAM+magnetic+optical+solid+state+storage",
      },
      {
        title: "CIE IGCSE CS 0478 — Virtual Memory, Cloud Storage, MAC, IPv4, IPv6 & Routers",
        channel: "IGCSE Computer Science",
        url: "https://www.youtube.com/results?search_query=IGCSE+Computer+Science+0478+virtual+memory+MAC+address+IPv4+IPv6+router",
      },
    ],
    formulas: [
      {
        name: "Addressable Memory Locations",
        formula: "Locations = {{2^n}} (for an n-bit unidirectional Address Bus)",
        note: "E.g. a 16-bit Address Bus addresses {{2^16}} = 65,536 locations (64 KiB if 1 byte per location).",
      },
      {
        name: "Clock Speed Definition",
        formula: "1 GHz = {{10^9}} (1 billion) clock pulses / FDE cycles per second",
        note: "Overclocking beyond design limits causes unsynchronised operations (crashes) and overheating.",
      },
      {
        name: "FDE Fetch Register Sequence",
        formula: "PC → MAR → (Address Bus + Read Signal) → RAM → Data Bus → MDR → CIR; PC ← PC + 1",
        note: "Memorise exact register arrow order for 4-mark Paper 1 trace questions.",
      },
      {
        name: "Sensor Control Loop Formula",
        formula: "Sensor (Analogue) → ADC (Digital) → Microprocessor vs Preset → Actuator → Environment Feedback",
        note: "Monitoring omits the environment-changing actuator feedback loop.",
      },
      {
        name: "DRAM vs SRAM Architecture",
        formula: "DRAM = Capacitor + Transistor (needs constant refresh) | SRAM = Transistor Flip-Flops (no refresh, CPU cache)",
        note: "Both are volatile primary RAM.",
      },
      {
        name: "SSD NAND Flash Cell",
        formula: "Control Gate + Floating Gate Transistor → traps electrons (0 moving parts)",
        note: "Non-volatile secondary storage; fast & shockproof, finite write/erase cycles.",
      },
      {
        name: "Virtual Memory & Thrashing",
        formula: "Full RAM → swap inactive pages to HDD/SSD → swap back to RAM when needed (excessive swaps = Disk Thrashing)",
        note: "CPU never executes directly from secondary storage.",
      },
      {
        name: "MAC Address Structure",
        formula: "48 bits = 6 hex pairs (XX:XX:XX:YY:YY:YY) → 24-bit Manufacturer ID + 24-bit Serial Number",
        note: "Hardcoded in NIC; physical & static hardware identifier on a LAN.",
      },
      {
        name: "IPv4 Address Structure",
        formula: "32 bits = 4 denary octets (0–255) separated by dots, e.g. 192.168.1.254",
        note: "Any number > 255 makes an IPv4 address invalid!",
      },
      {
        name: "IPv6 Address Structure",
        formula: "128 bits = 8 groups of 4 hex digits (0000–FFFF) separated by colons",
        note: "Provides {{2^128}} logical network addresses; assigned statically or dynamically via DHCP.",
      },
    ],
  },
};
