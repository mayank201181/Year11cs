import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "hardware-architecture-m1",
    title: "Paper 1: Core CPU, Sensors, Storage & Network Essentials",
    questions: [
      {
        id: "hardware-architecture-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "von-neumann-fde",
        question:
          "In Von Neumann architecture, what is the exact role of the **Program Counter (`PC`)**?",
        options: [
          "It counts the total number of instructions executed since the computer booted.",
          "It holds the memory address of the next instruction to be fetched from RAM.",
          "It holds the current instruction while the Control Unit decodes its opcode.",
          "It temporarily stores intermediate results produced by the Arithmetic and Logic Unit.",
        ],
        answerIndex: 1,
        hints: [
          "Despite its name, `PC` stores a memory address rather than a running tally.",
          "Distinguish `PC` (next address) from `CIR` (current instruction).",
        ],
        explanation:
          "The **Program Counter (`PC`)** stores the **memory address of the next instruction** to be fetched. `CIR` holds the current instruction being decoded, `ACC` holds intermediate ALU results, and no CPU register counts total instructions since boot.",
      },
      {
        id: "hardware-architecture-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "von-neumann-fde",
        question:
          "Which statement accurately describes the **directions** of the three system buses in a Von Neumann computer?",
        options: [
          "Address Bus is unidirectional; Data Bus and Control Bus are bidirectional.",
          "Address Bus is bidirectional; Data Bus and Control Bus are unidirectional.",
          "Address Bus and Control Bus are unidirectional; Data Bus is bidirectional.",
          "All three system buses (Address, Data, and Control) are bidirectional.",
        ],
        answerIndex: 0,
        hints: [
          "Only the CPU initiates memory addresses by placing them in `MAR`.",
          "Devices send interrupt and acknowledgement signals back to the `CU` along the Control Bus.",
        ],
        explanation:
          "Only the **Address Bus** is **unidirectional** (`CPU → Memory/I/O`). Both the **Data Bus** (reading/writing data) and the **Control Bus** (timing, read/write, and hardware interrupt/acknowledgement signals) are **bidirectional**.",
      },
      {
        id: "hardware-architecture-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "von-neumann-fde",
        question:
          "Which device below is a true example of an **embedded system** according to CIE 0478?",
        options: [
          "An anti-lock braking system (ABS) controller built inside a car.",
          "A lightweight touchscreen tablet used for web browsing, gaming, and spreadsheets.",
          "A desktop gaming PC fitted with a dedicated graphics card.",
          "A general-purpose laptop running a multi-user operating system.",
        ],
        answerIndex: 0,
        hints: [
          "An embedded system performs **one dedicated task** inside a larger mechanical or electrical system.",
          "Devices where users freely install diverse apps are general-purpose computers.",
        ],
        explanation:
          "An **ABS braking controller** combines a dedicated microprocessor and firmware to perform **one specific function** inside a vehicle. Tablets, laptops, and desktop PCs are **general-purpose** computers, never embedded systems.",
      },
      {
        id: "hardware-architecture-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "von-neumann-fde",
        question:
          "During the **Fetch** stage of the Fetch–Decode–Execute cycle, which register receives the instruction directly from the **Data Bus** before copying it into the `CIR`?",
        options: [
          "Accumulator (`ACC`)",
          "Memory Data Register (`MDR`)",
          "Program Counter (`PC`)",
          "Memory Address Register (`MAR`)",
        ],
        answerIndex: 1,
        hints: [
          "`MAR` holds the location's *address*, not its contents.",
          "Which register acts as the buffer for data or instructions arriving from RAM?",
        ],
        explanation:
          "RAM places the fetched binary instruction onto the **Data Bus**, which delivers it directly into the **Memory Data Register (`MDR`)**, from where it is copied into `CIR`. `MAR` only holds the memory address.",
      },
      {
        id: "hardware-architecture-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "input-output-sensors",
        question:
          "Why must an **Analogue-to-Digital Converter (`ADC`)** be placed between a temperature sensor and a microprocessor?",
        options: [
          "The ADC amplifies digital signals so they can drive heavy electric motors directly.",
          "Microprocessors only accept analogue voltages, whereas sensors output digital packets.",
          "Sensors output continuous analogue voltages, whereas microprocessors only process discrete binary data.",
          "Sensors output binary data too quickly for the microprocessor's system clock to read.",
        ],
        answerIndex: 2,
        hints: [
          "What kind of physical signal does a real-world temperature sensor produce?",
          "What is the only representation a digital microprocessor's logic gates understand?",
        ],
        explanation:
          "Physical quantities like temperature produce **continuous analogue** electrical signals, whereas microprocessors only process **digital binary** (`0`s and `1`s). Converting digital back to analogue to drive variable-speed actuators is the job of a **DAC**, not an ADC.",
      },
      {
        id: "hardware-architecture-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "input-output-sensors",
        question:
          "A surgeon wearing thick sterile rubber gloves needs to operate an operating-theatre monitor touchscreen. Which touchscreen technology will **fail** to register the gloved touch?",
        options: [
          "Capacitive touchscreen",
          "Pressure-plate resistive membrane",
          "Resistive touchscreen",
          "Infrared (IR) beam-grid touchscreen",
        ],
        answerIndex: 0,
        hints: [
          "Which touchscreen relies on an **electrostatic field** disturbed by an electrical conductor?",
          "Rubber gloves are electrical insulators, though they can still exert pressure or block light beams.",
        ],
        explanation:
          "**Capacitive touchscreens** detect changes in electrostatic charge caused by a **conductive** bare finger (or special conductive stylus), so insulating rubber gloves fail. **Resistive** screens respond to physical pressure and **Infrared** screens respond to any object breaking the LED beam grid.",
      },
      {
        id: "hardware-architecture-m1-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "input-output-sensors",
        question:
          "What is the defining difference between a **monitoring system** and a **control system**?",
        options: [
          "Control systems require human operators to press a button every time a sensor reading changes.",
          "Control systems use actuators whose physical output alters the environment and affects the next sensor reading.",
          "Monitoring systems do not require an ADC, whereas control systems always require an ADC.",
          "Monitoring systems only run for a few minutes, whereas control systems run continuously.",
        ],
        answerIndex: 1,
        hints: [
          "Both monitoring and control systems run continuously and use sensors + ADCs.",
          "Think about **feedback loops** and **actuators**.",
        ],
        explanation:
          "In a **control system**, microprocessor signals drive **actuators** (heaters, valves, motors) that physically alter the environment, creating a **feedback loop** that changes subsequent sensor readings. **Monitoring systems** also use ADCs and run continuously, but only log data or sound alarms without changing the measured variable.",
      },
      {
        id: "hardware-architecture-m1-q08",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "input-output-sensors",
        question:
          "An automated farm measures the **water content inside the soil** around tomato roots and the **acidity** of the soil. Which pair of CIE sensors should be used?",
        options: [
          "Humidity sensor and gas sensor",
          "Level sensor and flow sensor",
          "Moisture sensor and pH sensor",
          "Proximity sensor and pressure sensor",
        ],
        answerIndex: 2,
        hints: [
          "Careful: *humidity* measures water vapour in the *air*, not water inside soil!",
          "Which chemical scale measures acidity vs alkalinity?",
        ],
        explanation:
          "A **moisture sensor** measures water content in soil, and a **pH sensor** measures soil acidity/alkalinity. A **humidity sensor** measures water vapour in the *air*, which is a classic CIE distractor.",
      },
      {
        id: "hardware-architecture-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "primary-secondary-storage",
        question:
          "Which statement accurately contrasts **RAM** and **ROM** on CIE 0478?",
        options: [
          "RAM is read-only during normal use; ROM can be both read from and written to at gigahertz speeds.",
          "RAM is volatile and stores currently running programs and data; ROM is non-volatile and stores the bootstrap/BIOS.",
          "RAM is secondary storage connected via USB; ROM is virtual memory on the hard disk.",
          "RAM is non-volatile and stores user documents permanently; ROM is volatile and stores CPU cache.",
        ],
        answerIndex: 1,
        hints: [
          "Which memory loses its contents when power is switched off (**volatile**)?",
          "Where is the permanent start-up firmware (**bootstrap loader / BIOS**) kept?",
        ],
        explanation:
          "**RAM** is **volatile**, read/write primary memory storing the **currently running OS, active programs, and data in use**. **ROM** is **non-volatile**, read-only primary memory storing the **bootstrap loader / BIOS** needed to start up the computer.",
      },
      {
        id: "hardware-architecture-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "primary-secondary-storage",
        question:
          "Why is **SRAM** chosen for **CPU cache** instead of **DRAM**?",
        options: [
          "SRAM uses capacitors that are much cheaper per GiB and denser than DRAM.",
          "SRAM stores data magnetically on microscopic spinning platters inside the ALU.",
          "SRAM is non-volatile, so the CPU keeps its cache contents when the laptop is unplugged.",
          "SRAM uses transistor flip-flops that do not need constant refreshing, giving much faster access times.",
        ],
        answerIndex: 3,
        hints: [
          "Which type of RAM leaks charge from capacitors and needs constant refreshing?",
          "Cache sits right next to CPU cores and needs nanosecond speed.",
        ],
        explanation:
          "**SRAM** builds each bit from **transistor flip-flops** that hold state without needing refresh cycles, making it **significantly faster** than capacitor-based **DRAM** (though too expensive and bulky for multi-GiB main RAM). Both SRAM and DRAM are volatile.",
      },
      {
        id: "hardware-architecture-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "primary-secondary-storage",
        question:
          "How does a **Solid-State Drive (`SSD`)** physically store binary data without power?",
        options: [
          "Capacitors are recharged thousands of times per second by a dedicated motherboard battery.",
          "A 405 nm blue-violet laser burns microscopic pits and lands along a single spiral track.",
          "Electrons are forced onto and trapped inside insulated floating-gate transistors controlled by control gates.",
          "Electromagnets magnetise north–south domains along concentric tracks on spinning platters.",
        ],
        answerIndex: 2,
        hints: [
          "SSDs have **zero moving parts** — rule out platters and spinning optical tracks!",
          "Recall the two transistor gates in NAND flash memory.",
        ],
        explanation:
          "**SSDs** use **NAND/NOR flash memory** with **zero moving parts**, applying voltage across a **control gate** so **electrons tunnel onto an insulated floating gate** and remain trapped when power is removed. Platters describe HDDs, and spiral pits/lands describe Blu-ray discs.",
      },
      {
        id: "hardware-architecture-m1-q12",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "primary-secondary-storage",
        question:
          "Why can a single-layer **Blu-ray** disc (`~25 GiB`) store roughly five times as much data as a single-layer **DVD** (`~4.7 GiB`) of the exact same physical diameter?",
        options: [
          "Blu-ray uses a shorter-wavelength blue-violet laser (405 nm) instead of a red laser (650 nm), allowing smaller, more tightly packed pits and lands.",
          "Blu-ray stores binary charges inside microscopic floating-gate NAND transistors embedded within the polycarbonate plastic disc.",
          "Blu-ray organises its surface into concentric magnetic tracks divided into sectors rather than using a single optical spiral track.",
          "Blu-ray drives spin discs in reverse using twin magnetic read/write actuator heads on both surfaces simultaneously.",
        ],
        answerIndex: 0,
        hints: [
          "Compare the colour and **wavelength** of light used in DVD vs Blu-ray drives.",
          "A narrower laser spot can read much smaller pits along a tighter spiral.",
        ],
        explanation:
          "Blu-ray's **`405 nm` blue-violet laser** has a **shorter wavelength** than DVD's **`650 nm` red laser**, focusing to a smaller spot so **pits and lands can be made smaller and packed closer together**.",
      },
      {
        id: "hardware-architecture-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "virtual-cloud-networking",
        question:
          "What happens during **virtual memory** operation when physical RAM becomes completely full?",
        options: [
          "The CPU switches its Address Bus directly to the hard disk and executes programs straight from magnetic platters.",
          "Active pages are permanently deleted from RAM so the operating system never slows down.",
          "Inactive pages of data are moved from RAM to swap space on secondary storage, and swapped back into RAM when needed by the CPU.",
          "Extra volatile space is unlocked inside the motherboard's ROM chip to hold overflowing user apps.",
        ],
        answerIndex: 2,
        hints: [
          "Remember: the CPU can **only** execute instructions and read data directly from primary memory (`RAM`).",
          "Where are **inactive pages** parked temporarily, and what happens when the CPU needs one again?",
        ],
        explanation:
          "The OS moves **inactive pages** from full **RAM** into dedicated **swap space** on **secondary storage (HDD/SSD)**, freeing RAM for active tasks, and **swaps pages back into RAM** whenever the CPU needs them again.",
      },
      {
        id: "hardware-architecture-m1-q14",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "virtual-cloud-networking",
        question:
          "Which statement accurately describes a **MAC (Media Access Control) address**?",
        options: [
          "A 32-bit denary address assigned temporarily by a DHCP server each time you join Wi-Fi.",
          "A 128-bit hexadecimal logical routing address separated into 8 groups by colons.",
          "An encrypted password used by cloud servers to compress files before transmission.",
          "A 48-bit hexadecimal hardware identifier hardcoded into the NIC, split into a 24-bit manufacturer ID and a 24-bit device serial number.",
        ],
        answerIndex: 3,
        hints: [
          "MAC addresses have `6` pairs of hex digits (`6 × 8` bits).",
          "What do the first `3` pairs vs the last `3` pairs identify?",
        ],
        explanation:
          "A **MAC address** is a **48-bit hexadecimal** physical address (`6` pairs of hex digits) stored in the **NIC**: the first `24` bits identify the **manufacturer** and the second `24` bits are the **unique device serial number**. `32`-bit denary is IPv4 and `128`-bit hex is IPv6.",
      },
      {
        id: "hardware-architecture-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "virtual-cloud-networking",
        question:
          "Which of the following is a **valid IPv4 address**?",
        options: [
          "`192.168.256.10`",
          "`10.0.14.99.2`",
          "`00:1A:2B:3C:4D:5E`",
          "`172.16.254.1`",
        ],
        answerIndex: 3,
        hints: [
          "An IPv4 address consists of **exactly 4** denary octets separated by dots.",
          "Each 8-bit octet must lie between `0` and `255` inclusive!",
        ],
        explanation:
          "`172.16.254.1` has **4 denary numbers**, all within **`0–255`**, separated by dots (`32` bits total). `192.168.256.10` is invalid because **`256 > 255`**, `10.0.14.99.2` has 5 numbers instead of 4, and `00:1A:2B:3C:4D:5E` is a 48-bit MAC address.",
      },
    ],
  },
  {
    id: "hardware-architecture-m2",
    title: "Paper 2: CIE 0478 Exam Application & Register Tracing",
    questions: [
      {
        id: "hardware-architecture-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "von-neumann-fde",
        question:
          "At the start of an FDE cycle, `PC = 104` and `ACC = 20`. Memory location `104` holds the instruction `ADD 110`, and memory location `110` holds the denary value `7`. What are the contents of `PC` and `ACC` immediately after this single FDE cycle finishes?",
        options: [
          "`PC = 105`, `ACC = 27`",
          "`PC = 105`, `ACC = 130`",
          "`PC = 104`, `ACC = 27`",
          "`PC = 110`, `ACC = 27`",
        ],
        answerIndex: 0,
        hints: [
          "During Fetch, `PC` increments by `1` to point to the next sequential instruction.",
          "`ADD 110` adds the *contents* stored at address `110` (`7`) to `ACC` (`20`), not the address `110` itself!",
        ],
        explanation:
          "During Fetch, `PC` increments from `104` to **`105`**. During Execute, the value `7` at address `110` is fetched via `MAR`/`MDR` and added to `ACC`: `20 + 7 =` **`27`**. Adding the address `110` (`20 + 110 = 130`) confuses the operand address with its stored value.",
      },
      {
        id: "hardware-architecture-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "von-neumann-fde",
        question:
          "A student upgrades a laptop from a **2-core 3.0 GHz** CPU to a **4-core 3.0 GHz** CPU (same cache size), expecting a single-threaded Python script to finish in **half the time**. Why does execution time barely change?",
        options: [
          "Adding extra processor cores cuts the physical width of the unidirectional Address Bus in half, halving addressable main RAM.",
          "A 4-core processor automatically halves each core's clock frequency to 1.5 GHz whenever all four cores are powered simultaneously.",
          "Sequential instructions in a single-threaded script depend on earlier steps and cannot be split across cores, plus inter-core overhead.",
          "Additional processor cores only accelerate non-volatile ROM bootstrap checks and cannot execute instructions fetched from RAM.",
        ],
        answerIndex: 2,
        hints: [
          "Can Core 2 calculate step 2 if step 2 needs the output that Core 1 hasn't finished computing in step 1?",
          "Also recall the coordination overhead between cores.",
        ],
        explanation:
          "Software that is **not written for parallel processing** (where each instruction depends on the previous result) runs on a **single core**, and even multi-threaded tasks spend time **communicating/synchronising between cores** via channels.",
      },
      {
        id: "hardware-architecture-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "von-neumann-fde",
        question:
          "Which risk is directly caused by **overclocking** a CPU beyond its manufacturer-rated clock frequency?",
        options: [
          "Instructions execute out of sync before the previous operation finishes (causing crashes/corruption) alongside dangerous overheating.",
          "Capacitor-based DRAM permanently transforms into SRAM flip-flops and cuts the computer's main memory capacity in half.",
          "The unidirectional Address Bus reverses electrical direction and continuously overwrites the Program Counter (`PC`) register.",
          "Non-volatile ROM loses its permanent firmware retention and erases the bootstrap loader whenever clock speed exceeds 4 GHz.",
        ],
        answerIndex: 0,
        hints: [
          "What happens if the next clock pulse fires *before* signals have finished travelling through the ALU?",
          "Faster switching of billions of transistors also dissipates much more thermal energy.",
        ],
        explanation:
          "**Overclocking** triggers the next clock tick before transistor pathways finish settling — causing **unsynchronised operations (system crashes / corrupted data)** — and generates excessive heat (**overheating**) that can permanently damage CPU hardware.",
      },
      {
        id: "hardware-architecture-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "von-neumann-fde",
        question:
          "An embedded controller has a **14-bit unidirectional Address Bus**, and each addressable memory location holds `1 byte`. How many **KiB** of primary memory can this CPU directly address? (Use CIE IEC `1 KiB = 1024 bytes`.)",
        options: [
          "`4 KiB`",
          "`14 KiB`",
          "`64 KiB`",
          "`16 KiB`",
        ],
        answerIndex: 3,
        hints: [
          "A 14-bit Address Bus addresses {{2^14}} byte locations.",
          "Since `1 KiB = 1024 =` {{2^10}} bytes, divide {{2^14}} by {{2^10}} using laws of indices!",
        ],
        explanation:
          "Total locations = {{2^14}} `= 16,384` bytes. Dividing by `1024` ({{2^10}}) gives {{2^4}} **`= 16 KiB`**. (`64 KiB` would require a `16`-bit Address Bus, and `4 KiB` would come from a `12`-bit bus.)",
      },
      {
        id: "hardware-architecture-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "input-output-sensors",
        question:
          "How does a **DLP (Digital Light Processing)** projector create a colour image on a classroom wall?",
        options: [
          "Dichroic mirrors split white light into separate red, green, and blue beams passing through three liquid-crystal panels and a prism.",
          "Three separate coloured lasers scan line-by-line across a photosensitive toner drum.",
          "Self-emissive organic LEDs mounted on the wall glow when struck by infrared beams.",
          "Millions of microscopic tilting mirrors on a DMD chip reflect white light through a spinning RGB colour wheel toward the lens.",
        ],
        answerIndex: 3,
        hints: [
          "DLP stands for *Digital Light Processing* and uses a **DMD** (Digital Micromirror Device) chip.",
          "Dichroic mirrors + 3 monochrome panels + prism is the mechanism of an **LCD** projector!",
        ],
        explanation:
          "A **DLP projector** uses millions of tiny **tilting micro-mirrors** (`ON`/`OFF` tilt angles control brightness/greyscale) paired with a **spinning RGB colour wheel**. Splitting light with dichroic mirrors into 3 panels + a prism describes an **LCD projector**.",
      },
      {
        id: "hardware-architecture-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "input-output-sensors",
        question:
          "In a **laser printer**, what is the exact function of the heated **fuser** rollers near the paper exit?",
        options: [
          "They apply a uniform positive electrostatic charge across the photosensitive drum before the laser scans.",
          "They melt and press the powdered toner permanently into the fibres of the paper so it does not smudge.",
          "They vaporise liquid ink into tiny bubbles inside the moving printhead nozzles.",
          "They slice a 3D CAD file into 0.1 mm horizontal layers of molten plastic.",
        ],
        answerIndex: 1,
        hints: [
          "Laser printers use dry **powdered toner**, not liquid ink.",
          "After toner transfers from the drum onto oppositely charged paper, it is only sitting loosely on the surface until the final step!",
        ],
        explanation:
          "The **heated fuser rollers** apply heat and pressure to **melt the dry powdered toner permanently onto the paper**. Vaporising liquid ink into bubbles is a **thermal bubble inkjet** mechanism.",
      },
      {
        id: "hardware-architecture-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "input-output-sensors",
        question:
          "Which statement accurately describes two genuine technical advantages of **QR codes** over traditional **1D barcodes** at an airport boarding gate?",
        options: [
          "QR codes store binary domains magnetically in metallic ink so scanners can still read them in complete darkness without any optical camera.",
          "QR codes contain microscopic volatile DRAM cells embedded inside boarding-pass paper to update departure gate numbers automatically.",
          "QR codes hold thousands of characters directly without a database lookup and include built-in error correction if partially damaged.",
          "QR codes require a specialized 650 nm red laser barcode wand and can only decode successfully when held strictly upright.",
        ],
        answerIndex: 2,
        hints: [
          "A 1D barcode holds ~`30` digits; how much data fits in a 2D QR matrix?",
          "Why can a crumpled or smudged QR code still scan cleanly from any angle?",
        ],
        explanation:
          "**QR codes** store **far more data** (~`4,000+` characters vs ~`30` digits), feature **3 corner alignment squares** so smartphone cameras can scan them from **any orientation** without a laser, and include **error-correction** redundancy so smudged codes still decode.",
      },
      {
        id: "hardware-architecture-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "input-output-sensors",
        question:
          "A car's anti-lock braking system (`ABS`) detects whether one wheel is locking up and skidding by measuring changes in a toothed iron ring rotating past the axle. Which sensor is most suitable?",
        options: [
          "Humidity sensor",
          "Magnetic field sensor",
          "Gas sensor",
          "pH sensor",
        ],
        answerIndex: 1,
        hints: [
          "As iron teeth pass a magnet on the wheel hub, which physical field fluctuates?",
          "CIE 0478 explicitly lists ABS wheel-speed detection as a classic application of this sensor!",
        ],
        explanation:
          "A **magnetic field sensor** detects the changing magnetic flux as the toothed ferromagnetic wheel hub spins, allowing the ABS microprocessor to spot a locking wheel immediately.",
      },
      {
        id: "hardware-architecture-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "primary-secondary-storage",
        question:
          "Which row correctly matches **Magnetic HDD** and **Optical Disc** track geometries?",
        options: [
          "Magnetic HDD: Concentric circular tracks divided into sectors | Optical Disc: Single spiral track of pits and lands",
          "Magnetic HDD: Concentric tracks without sectors | Optical Disc: Dual electromagnetic platters",
          "Magnetic HDD: Single spiral track | Optical Disc: Concentric circular tracks",
          "Magnetic HDD: Floating-gate matrix | Optical Disc: Magnetic sectors",
        ],
        answerIndex: 0,
        hints: [
          "Think of a vinyl record / CD playing continuously from the hub outward vs an HDD head jumping between rings.",
          "HDD platters divide rings into wedge-shaped **sectors**.",
        ],
        explanation:
          "A **Magnetic HDD** organises spinning platters into **concentric circular tracks** subdivided into **sectors**. An **Optical Disc** (`CD`/`DVD`/`Blu-ray`) uses **one continuous spiral track** of **pits and lands** starting from the centre.",
      },
      {
        id: "hardware-architecture-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "primary-secondary-storage",
        question:
          "A student brings an **ultrabook laptop** onto a bumpy school bus every morning. Why is an **SSD** strongly preferred over a **magnetic HDD** inside this laptop?",
        options: [
          "An SSD uses a 405 nm blue laser that ignores bus vibrations.",
          "An SSD has zero moving parts so vibrations cannot cause a mechanical head crash, plus it boots faster and uses less battery power.",
          "An SSD is cheaper per TiB than an HDD and has unlimited write/erase cycles forever.",
          "An SSD is primary memory directly connected to the CPU's `MAR` so no RAM is needed.",
        ],
        answerIndex: 1,
        hints: [
          "What happens to a spinning HDD platter if the read/write head touches the surface during a jolt?",
          "Check cost per GiB and write endurance — those are HDD advantages, not SSD advantages!",
        ],
        explanation:
          "Because an **SSD** uses solid-state NAND flash transistors with **no moving mechanical parts**, bus bumps cannot cause a **head crash**, while giving **much faster boot/load speeds**, silent operation, lighter weight, and lower battery drain.",
      },
      {
        id: "hardware-architecture-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "primary-secondary-storage",
        question:
          "When you press the power button on a completely switched-off PC, what is the **very first software** executed by the CPU, and where is it stored?",
        options: [
          "The full Windows/macOS graphical desktop stored in volatile DRAM.",
          "User application code stored inside the CPU's SRAM L1 cache.",
          "The bootstrap loader / BIOS firmware stored in non-volatile ROM.",
          "A swap page stored in virtual memory on the magnetic hard drive.",
        ],
        answerIndex: 2,
        hints: [
          "At the instant power turns on, volatile DRAM and SRAM cache are completely empty!",
          "Which non-volatile **primary** memory chip can the CPU address immediately?",
        ],
        explanation:
          "Because RAM and cache are volatile (empty at power-on), the CPU immediately fetches the **bootstrap loader / BIOS** from **non-volatile ROM**, which runs hardware checks and loads the operating system from secondary storage into RAM.",
      },
      {
        id: "hardware-architecture-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "virtual-cloud-networking",
        question:
          "A user opens 25 heavy browser tabs and a 3D renderer on a PC with only `4 GiB` of RAM. The hard drive activity light stays solid red and every mouse click takes 10 seconds to respond. What is this phenomenon called, and what is the most effective hardware upgrade to stop it?",
        options: [
          "Disk thrashing — install more physical RAM so fewer pages need constant swapping to secondary storage.",
          "Packet collision — assign a static IPv6 address on the router.",
          "Data skew — replace parallel internal buses with a serial USB cable.",
          "Clock overclocking — lower the CPU clock speed in the BIOS.",
        ],
        answerIndex: 0,
        hints: [
          "When RAM is tiny compared to open apps, the OS spends almost 100% of its time swapping pages in and out of virtual memory.",
          "What CIE 0478 term describes that constant page-swapping bottleneck?",
        ],
        explanation:
          "Excessive, continuous swapping of pages between full RAM and much slower HDD/SSD virtual memory is called **disk thrashing**. Installing **more physical RAM** keeps working pages in fast DRAM and eliminates the constant swapping.",
      },
      {
        id: "hardware-architecture-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "virtual-cloud-networking",
        question:
          "A hospital stores strictly confidential patient X-rays on remote servers owned, hosted, and ring-fenced **exclusively for that hospital** behind its own enterprise firewall, while using a third-party cloud vendor only for public appointment brochures. Which cloud deployment model is the hospital using overall?",
        options: [
          "Offline optical storage",
          "Local volatile cache",
          "Hybrid cloud",
          "Public cloud only",
        ],
        answerIndex: 2,
        hints: [
          "Dedicated single-organisation cloud = **Private cloud**; shared multi-tenant provider = **Public cloud**.",
          "What do we call combining both models?",
        ],
        explanation:
          "A **Hybrid cloud** keeps confidential data on a dedicated **private cloud** while leveraging a cost-effective **public cloud** for non-sensitive workloads.",
      },
      {
        id: "hardware-architecture-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "virtual-cloud-networking",
        question:
          "Why must a company's public **e-commerce web server** use a **static IP address** rather than a dynamic IP address leased from DHCP?",
        options: [
          "Because static IP addresses double the bandwidth of fibre-optic cables.",
          "So DNS records and customers can reliably reach the server at the same unchanging network address without connection failures when leases renew.",
          "Because dynamic IP addresses are 48-bit MAC addresses that only work on wired Ethernet cables.",
          "Because routers block all packets sent from dynamic IP addresses onto the Internet.",
        ],
        answerIndex: 1,
        hints: [
          "What would happen if the web server's IP address changed every 12 hours while DNS servers still pointed to yesterday's IP?",
          "Dynamic IPs work fine on the Internet for client laptops, just not for servers people need to find!",
        ],
        explanation:
          "A **static IP** never changes, ensuring **DNS servers** and external clients always locate the web/FTP/email server reliably without downtime caused by changing DHCP leases.",
      },
      {
        id: "hardware-architecture-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "virtual-cloud-networking",
        question:
          "When a **router** receives a data packet arriving from a home LAN destined for an overseas web server, how does it decide where to send the packet next?",
        options: [
          "It converts continuous analogue telephone tones into digital binary packets without inspecting any header IP addresses.",
          "It opens and reads the payload's HTML text and broadcasts identical copies of the packet to every device on the LAN.",
          "It permanently overwrites the sender's factory-assigned 48-bit NIC MAC address inside ROM before forwarding the packet.",
          "It inspects the destination IP address in the header and consults its routing table to forward the packet to the best next hop.",
        ],
        answerIndex: 3,
        hints: [
          "Which part of a packet carries routing addresses — header, payload, or trailer?",
          "What internal table does a router check to pick the optimal next hop?",
        ],
        explanation:
          "A **router** reads the **destination IP address** inside the **packet header** and looks up its **routing table** to forward the packet along the optimal next network hop toward its destination.",
      },
    ],
  },
  {
    id: "hardware-architecture-m3",
    title: "Paper 3: Grade 9 Stretch, Edge Cases & Examiner Traps",
    questions: [
      {
        id: "hardware-architecture-m3-q01",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "von-neumann-fde",
        question:
          "Trace **two consecutive** FDE cycles carefully. Initially `PC = 50` and `ACC = 10`. Memory holds:\n- Address `50`: `LOAD 60` (load value at address `60` into `ACC`)\n- Address `51`: `ADD 61` (add value at address `61` to `ACC`)\n- Address `60`: `25`\n- Address `61`: `8`\n\nWhat are the values in `MAR`, `MDR`, `PC`, and `ACC` right after **both** cycles finish?",
        options: [
          "`MAR = 61`, `MDR = 8`, `PC = 52`, `ACC = 43`",
          "`MAR = 61`, `MDR = 8`, `PC = 51`, `ACC = 33`",
          "`MAR = 61`, `MDR = 8`, `PC = 52`, `ACC = 33`",
          "`MAR = 51`, `MDR = ADD 61`, `PC = 52`, `ACC = 43`",
        ],
        answerIndex: 2,
        hints: [
          "Careful: `LOAD 60` *replaces* `ACC` (`10` is overwritten by `25`, NOT added!).",
          "During the Execute phase of cycle 2 (`ADD 61`), operand `61` is placed in `MAR` and `8` is read into `MDR` while `PC` already incremented to `52` during Fetch.",
        ],
        explanation:
          "Cycle 1 (`LOAD 60`): `PC → 51`, `ACC` becomes `25` (overwriting `10`!). Cycle 2 (`ADD 61`): Fetch increments `PC →` **`52`**; Execute puts operand address **`61`** in `MAR`, fetches **`8`** into `MDR`, and computes `25 + 8 =` **`33`** in `ACC`.",
      },
      {
        id: "hardware-architecture-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "von-neumann-fde",
        question:
          "During execution of a conditional branch instruction `JMP 400` stored at address `212`, `PC` was incremented to `213` during the **Fetch** stage. If the branch condition is **TRUE**, what happens during the **Execute** stage?",
        options: [
          "`MAR` automatically increments `213` to `214` and discards the target address `400` without branching.",
          "The bidirectional Data Bus becomes unidirectional so the literal operand `400` can be added directly into `ACC`.",
          "The address `400` is written into `PC` (overwriting `213`), so the next Fetch cycle reads from address `400`.",
          "`CIR` is cleared to `0` immediately while `PC` stays fixed at `213` for the rest of the running program.",
        ],
        answerIndex: 2,
        hints: [
          "How does a CPU jump to a non-sequential part of a program (like a `WHILE` loop or `IF` branch)?",
          "Whichever address is in `PC` at the start of the *next* Fetch cycle is the instruction that runs next!",
        ],
        explanation:
          "Normally `PC` increments by `1` during Fetch (`212 → 213`), assuming sequential execution. When a jump/branch executes, it **overwrites `PC` with the target address (`400`)**, redirecting the next Fetch cycle to `400`.",
      },
      {
        id: "hardware-architecture-m3-q03",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "von-neumann-fde",
        question:
          "A CPU designer widens the **Address Bus** from `20` bits to `24` bits and widens the **Data Bus** from `16` bits to `32` bits. What is the exact combined hardware effect?",
        options: [
          "Addressable memory locations increase by a factor of `4`, and `2` bytes (`16` bits) are transferred per memory bus read.",
          "Addressable memory locations increase by a factor of `16` ({{2^4}}), and twice as many bits (`32` vs `16`) transfer per memory operation.",
          "Addressable memory locations increase by a factor of `2`, and the bidirectional Control Bus becomes strictly unidirectional.",
          "Addressable memory locations increase by only `+4` extra bytes, while the CPU system clock speed doubles automatically.",
        ],
        answerIndex: 1,
        hints: [
          "Adding `4` extra address wires multiplies addressable locations by {{2^4}}, NOT by `4`!",
          "Data Bus width determines word size transferred in parallel per read/write.",
        ],
        explanation:
          "Increasing Address Bus width by `4` bits multiplies addressable locations by {{2^24 / 2^20}} = {{2^4}} **`= 16` times**, while doubling the Data Bus from `16` to `32` bits lets **twice as many bits** travel in parallel per cycle.",
      },
      {
        id: "hardware-architecture-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "von-neumann-fde",
        question:
          "Which statement best defines a CPU's **instruction set**?",
        options: [
          "The complete list of binary machine-code commands (opcodes) that a specific CPU model can decode and execute natively.",
          "The user manual printed inside a motherboard box explaining how to install RAM sticks.",
          "The collection of IPv4 addresses stored in a home router's routing table.",
          "A high-level Python script written by the user and saved on an external SSD.",
        ],
        answerIndex: 0,
        hints: [
          "Think about what the Control Unit (`CU`) looks up when decoding the binary opcode inside `CIR`.",
          "Why won't `x86` machine code run directly on an `ARM` chip without translation/emulation?",
        ],
        explanation:
          "An **instruction set** is the complete set of **machine-code operations (opcodes + addressing modes)** built into a processor family's hardware decoder (`CU`).",
      },
      {
        id: "hardware-architecture-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "input-output-sensors",
        question:
          "A smart street-lamp controller turns lamps ON when ambient dusk light falls below `50 lux` and OFF above `80 lux`. A student claims: *'Because the street lamp shines light into the street, it is a monitoring system, not a control system.'* Which critique is **most accurate** on CIE 0478?",
        options: [
          "The student is wrong because automated street lamps rely on pH and humidity sensors rather than ambient light sensors.",
          "The student is right because analogue light sensors transmit digital lux values directly to the CPU without needing an ADC.",
          "The student is right because street lamps switch solid-state LEDs electronically rather than moving mechanical electric motors.",
          "The student is wrong: the microprocessor triggers a relay/switch actuator to turn the lamp ON/OFF from light-sensor comparisons.",
        ],
        answerIndex: 3,
        hints: [
          "Does the microprocessor automatically switch hardware output ON/OFF without human intervention?",
          "Why is the light sensor mounted on *top* of the lamp pointing at the sky?",
        ],
        explanation:
          "Automatic street lighting is a **control system**: a **light sensor + ADC** feeds a microprocessor that compares lux against preset thresholds and triggers a **switch/relay actuator** to control the lamp (mounting the sensor on top avoids false feedback from the lamp's own bulb!).",
      },
      {
        id: "hardware-architecture-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "input-output-sensors",
        question:
          "How do **thermal bubble** and **piezoelectric** inkjet printheads differ in the way they eject microscopic droplets of ink?",
        options: [
          "Thermal bubble heats a tiny resistor to vaporise ink into an expanding bubble; piezoelectric applies voltage to flex a crystal behind the nozzle.",
          "Thermal bubble freezes liquid ink droplets using Peltier coolers; piezoelectric melts solid coloured wax sticks onto the page.",
          "Thermal bubble scans a negatively charged laser drum; piezoelectric projects white light through a spinning RGB colour wheel.",
          "Thermal bubble exposes an entire A4 page in a single UV flash; piezoelectric fuses dry powdered toner onto the paper with heated rollers.",
        ],
        answerIndex: 0,
        hints: [
          "*Thermal* = heat creating a vapour bubble.",
          "*Piezoelectric* = a crystal flexing mechanically when voltage is applied.",
        ],
        explanation:
          "**Thermal bubble** printheads heat tiny resistors to vaporise ink into an expanding gas bubble that forces a droplet out; **piezoelectric** printheads apply voltage to a **piezo crystal** so it flexes/vibrates, ejecting ink without heating it.",
      },
      {
        id: "hardware-architecture-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "input-output-sensors",
        question:
          "An outdoor bank ATM in a snowy city needs a touchscreen that **works with thick winter gloves**, **supports multi-touch**, and **keeps working even if the thick glass front gets scratched**. Which touchscreen technology best meets all three criteria?",
        options: [
          "Thermal inkjet screen",
          "Standard 2-layer resistive plastic touchscreen",
          "Capacitive touchscreen",
          "Infrared (IR) touchscreen",
        ],
        answerIndex: 3,
        hints: [
          "Capacitive fails with thick ordinary winter gloves.",
          "Standard resistive has a soft plastic top layer that scratches easily and lacks standard multi-touch.",
        ],
        explanation:
          "An **Infrared (IR) touchscreen** projects an invisible X–Y LED beam grid across durable glass: **any gloved finger** breaks the beams, it supports **multi-touch**, and minor surface scratches do not break an electrical membrane.",
      },
      {
        id: "hardware-architecture-m3-q08",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "input-output-sensors",
        question:
          "A chemical plant maintains a reaction vat strictly at `pH 7.0` and `65 °C`. Which statement would **lose marks** in a CIE 0478 6-mark control-system explanation?",
        options: [
          "\"Signals are sent to valve and heater actuators to adjust conditions in a continuous feedback loop.\"",
          "\"An acid sensor and heat sensor send readings directly to the CPU, which turns on the acid tap and heater.\"",
          "\"The microprocessor compares incoming digital values against stored preset thresholds for pH 7.0 and 65 °C.\"",
          "\"pH and temperature sensors send analogue signals to an ADC, which converts them into digital data for the microprocessor.\"",
        ],
        answerIndex: 1,
        hints: [
          "Spot **three** classic CIE mark-scheme blunders packed into one sentence!",
          "Check the sensor names (*acid/heat* vs *pH/temperature*), missing *ADC*, and missing *preset comparison / actuator*.",
        ],
        explanation:
          "Writing *'acid sensor'* and *'heat sensor'* instead of **pH sensor** and **temperature sensor**, claiming sensors connect *directly* to the CPU **without an ADC**, and omitting **stored preset comparison** and **actuators** loses nearly every mark on CIE 0478!",
      },
      {
        id: "hardware-architecture-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "primary-secondary-storage",
        question:
          "Why must **DRAM** cells be **refreshed** thousands of times every second, whereas **SSD NAND flash** cells retain data for years with the power completely off?",
        options: [
          "DRAM stores each bit as charge on a tiny leaky capacitor that discharges rapidly, whereas SSD floating gates are surrounded by an insulating oxide layer that traps electrons.",
          "DRAM uses volatile 650 nm red optical lasers that fade when power drops, whereas SSDs permanently align magnetic north–south domains with electromagnets.",
          "DRAM stores binary bits on spinning glass platters that slow down due to air friction, whereas SSDs rely on battery-backed SRAM flip-flops.",
          "DRAM is external secondary storage exposed directly to room air, whereas SSD flash memory chips are sealed permanently inside the CPU's ALU.",
        ],
        answerIndex: 0,
        hints: [
          "What electrical component holds the charge in a `1T1C` DRAM cell, and why does it lose that charge in milliseconds?",
          "What keeps electrons from escaping an SSD's **floating gate**?",
        ],
        explanation:
          "Each **DRAM** cell uses a microscopic **capacitor** whose charge leaks away within milliseconds, requiring constant recharge (**refresh**) cycles. In **SSD NAND flash**, electrons tunnel through a dielectric **oxide insulator** onto a **floating gate**, staying trapped without power.",
      },
      {
        id: "hardware-architecture-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "primary-secondary-storage",
        question:
          "Inside solid-state flash memory, some embedded systems use **NOR** flash rather than **NAND** flash to execute boot code. How does **NOR** flash compare to **NAND** flash?",
        options: [
          "NOR flash is volatile primary memory that loses all stored boot firmware immediately whenever the computer shuts down.",
          "NOR flash stores bits magnetically on spinning platters and therefore costs significantly less per GiB than NAND flash.",
          "NOR flash wires cells in parallel for faster random byte-level reads, but costs more per GiB and has lower density than NAND.",
          "NOR flash uses a 650 nm red optical laser to read microscopic pits and lands along a single continuous spiral track.",
        ],
        answerIndex: 2,
        hints: [
          "NAND stacks cells in series (like a NAND gate) for high density and low cost in SSDs.",
          "NOR connects cells in parallel for fast random code execution, at higher cost.",
        ],
        explanation:
          "**NOR flash** provides **faster random read access** (great for executing firmware/BIOS code), whereas **NAND flash** achieves much **higher density and lower cost per GiB** (making NAND standard for high-capacity SSDs, USB drives, and SD cards).",
      },
      {
        id: "hardware-architecture-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "primary-secondary-storage",
        question:
          "A school server backs up `32` classroom virtual-machine images, each `16 GiB` in size, plus `1024` student folders, each `512 MiB` in size. What is the **exact total backup size in TiB**? (Use CIE IEC `1 TiB = 1024 GiB` and `1 GiB = 1024 MiB`.)",
        options: [
          "`2 TiB`",
          "`1 TiB`",
          "`1.024 TiB`",
          "`0.5 TiB`",
        ],
        answerIndex: 1,
        hints: [
          "Calculate the VM images in GiB first: `32 × 16 GiB`.",
          "Convert the student folders into GiB: `1024 × 512 MiB ÷ 1024`, then add both and divide by `1024 GiB/TiB`!",
        ],
        explanation:
          "VM images = `32 × 16 = 512 GiB`. Student folders = `1024 × 512 MiB ÷ 1024 = 512 GiB`. Total = `512 + 512 = 1024 GiB =` **`1 TiB`**.",
      },
      {
        id: "hardware-architecture-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "virtual-cloud-networking",
        question:
          "Examine these four network strings carefully:\n1. `2001:0db8:85a3:0000:0000:8a2e:0370:7334`\n2. `3C:22:FB:A9:04:11`\n3. `192.168.0.255`\n4. `FE80:0000:0000:0000:0202:B3FF:FE1E:832G`\n\nWhich string is **completely invalid**, and why?",
        options: [
          "String 1 (`2001:0db8:...`), because IPv6 only allows 4 groups of digits.",
          "String 2 (`3C:22:FB:A9:04:11`), because MAC addresses cannot contain both letters and numbers.",
          "String 3 (`192.168.0.255`), because `255` exceeds the 8-bit maximum.",
          "String 4 (`...832G`), because hexadecimal only uses digits `0–9` and letters `A–F`, so `G` is not a valid hex digit.",
        ],
        answerIndex: 3,
        hints: [
          "Is `255` valid in 8 bits (`2⁸ − 1 = 255`)? Yes!",
          "Check every character in String 4 against valid base-16 hexadecimal symbols (`0–9`, `A–F`).",
        ],
        explanation:
          "Hexadecimal only uses **`0–9` and `A–F`**, so the trailing **`G`** in String 4 makes it **invalid**! String 1 is a valid 128-bit IPv6 address (`8` groups of `4` hex digits), String 2 is a valid 48-bit MAC address (`6` hex pairs), and `255` (`11111111₂`) is the valid maximum of an 8-bit IPv4 octet.",
      },
      {
        id: "hardware-architecture-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "virtual-cloud-networking",
        question:
          "You carry your laptop from your **home Wi-Fi** in Singapore to a **hotel Wi-Fi** in Tokyo without changing any hardware settings. How do your laptop's **MAC address** and **public/local IP address** behave?",
        options: [
          "The NIC's 48-bit MAC address remains unchanged, while the Tokyo hotel's DHCP server assigns a new dynamic IP address for the hotel network.",
          "Both the MAC address and the IP address stay identical in Tokyo.",
          "Both the MAC address and IP address are erased when the laptop sleeps on the flight.",
          "The MAC address changes via DHCP in Tokyo, while the home IP address stays hardcoded in the NIC.",
        ],
        answerIndex: 0,
        hints: [
          "Which address is **physical hardware identity** burned into the WNIC?",
          "Which address is **logical network location** leased by the local router's DHCP server?",
        ],
        explanation:
          "Your WNIC's **48-bit MAC address** is a **static physical hardware identifier** that stays with the laptop, whereas the **IP address** is a **logical location identifier** dynamically reassigned by the hotel's **DHCP** server so packets route to Tokyo instead of Singapore.",
      },
      {
        id: "hardware-architecture-m3-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "virtual-cloud-networking",
        question:
          "A student says: *'When RAM fills up, virtual memory speeds up the computer because SSDs hold 1 TiB whereas RAM only holds 8 GiB.'* Why is this statement **wrong**?",
        options: [
          "Virtual memory can only swap inactive pages onto removable optical CD-ROM discs rather than internal solid-state drives.",
          "Virtual memory is actually allocated inside the CPU's L1 SRAM cache, which holds far less data than main physical RAM.",
          "Virtual memory prevents crashes when RAM fills up, but it is always slower than physical RAM because secondary storage has higher latency.",
          "Virtual memory works by permanently deleting parts of the operating system kernel from primary RAM to free up space.",
        ],
        answerIndex: 2,
        hints: [
          "Compare DRAM nanosecond access speed on the memory bus against SSD/HDD swap transfers.",
          "Virtual memory solves *capacity crashes*, never *speed*!",
        ],
        explanation:
          "Virtual memory **prevents 'out of memory' crashes** when physical RAM is full, but swapping pages to/from **secondary storage (SSD/HDD)** is **much slower** than keeping everything in physical DRAM — and heavy use causes **disk thrashing**.",
      },
      {
        id: "hardware-architecture-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "virtual-cloud-networking",
        question:
          "How many **more bits** does an **IPv6** address contain than a **MAC** address, and how many **more bits** than an **IPv4** address?",
        options: [
          "`16` more bits than a MAC address, and `32` more bits than an IPv4 address.",
          "`80` more bits than a MAC address, and `96` more bits than an IPv4 address.",
          "`96` more bits than a MAC address, and `80` more bits than an IPv4 address.",
          "`64` more bits than a MAC address, and `64` more bits than an IPv4 address.",
        ],
        answerIndex: 1,
        hints: [
          "Recall exact bit lengths: `IPv4 = 32`, `MAC = 48`, `IPv6 = 128`.",
          "Subtract carefully: `128 − 48` and `128 − 32`!",
        ],
        explanation:
          "`IPv6 = 128` bits, `MAC = 48` bits (`128 − 48 =` **`80`** more bits), and `IPv4 = 32` bits (`128 − 32 =` **`96`** more bits).",
      },
    ],
  },
];
