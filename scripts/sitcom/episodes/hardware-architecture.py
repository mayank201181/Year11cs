# Episode 4 — CPU Architecture, Hardware & Storage: "Fetch, Decode, Disaster"
EP = dict(
    topic="hardware-architecture",
    logline="Dad tries to overclock the kitchen microwave and upgrade his laptop by taping a Blu-ray disc to the Wi-Fi router, forcing Centi and Tara to rescue him through Von Neumann registers, sensor loops, NAND flash, and MAC versus IP addresses.",
)

DIAG_FDE = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="10" y="12" width="424" height="326" rx="14" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>'
    '<text x="222" y="50" text-anchor="middle" fill="#38bdf8" font-family="sans-serif" font-size="28" font-weight="bold">VON NEUMANN CPU</text>'
    '<rect x="24" y="70" width="174" height="114" rx="10" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>'
    '<text x="111" y="116" text-anchor="middle" fill="#fbbf24" font-family="sans-serif" font-size="28" font-weight="bold">CU</text>'
    '<text x="111" y="160" text-anchor="middle" fill="#fde68a" font-family="sans-serif" font-size="28">Decodes</text>'
    '<rect x="24" y="202" width="174" height="118" rx="10" fill="#0f172a" stroke="#4ade80" stroke-width="2"/>'
    '<text x="111" y="250" text-anchor="middle" fill="#4ade80" font-family="sans-serif" font-size="28" font-weight="bold">ALU+ACC</text>'
    '<text x="111" y="294" text-anchor="middle" fill="#bbf7d0" font-family="sans-serif" font-size="28">Maths</text>'
    '<rect x="212" y="70" width="208" height="54" rx="8" fill="#334155"/><text x="316" y="107" text-anchor="middle" fill="#f8fafc" font-family="monospace" font-size="28" font-weight="bold">PC (Next)</text>'
    '<rect x="212" y="134" width="208" height="54" rx="8" fill="#334155"/><text x="316" y="171" text-anchor="middle" fill="#f8fafc" font-family="monospace" font-size="28" font-weight="bold">MAR Addr</text>'
    '<rect x="212" y="198" width="208" height="54" rx="8" fill="#334155"/><text x="316" y="235" text-anchor="middle" fill="#f8fafc" font-family="monospace" font-size="28" font-weight="bold">MDR Data</text>'
    '<rect x="212" y="262" width="208" height="54" rx="8" fill="#334155"/><text x="316" y="299" text-anchor="middle" fill="#f8fafc" font-family="monospace" font-size="28" font-weight="bold">CIR Curr</text>'
    '<line x1="434" y1="106" x2="612" y2="106" stroke="#f87171" stroke-width="5"/>'
    '<text x="523" y="92" text-anchor="middle" fill="#fca5a5" font-family="sans-serif" font-size="28" font-weight="bold">Addr (1→)</text>'
    '<line x1="434" y1="196" x2="612" y2="196" stroke="#38bdf8" stroke-width="5"/>'
    '<text x="523" y="182" text-anchor="middle" fill="#bae6fd" font-family="sans-serif" font-size="28" font-weight="bold">Data (↔)</text>'
    '<line x1="434" y1="286" x2="612" y2="286" stroke="#a78bfa" stroke-width="5"/>'
    '<text x="523" y="272" text-anchor="middle" fill="#ddd6fe" font-family="sans-serif" font-size="28" font-weight="bold">Ctrl (↔)</text>'
    '<rect x="618" y="34" width="150" height="282" rx="14" fill="#1e1b4b" stroke="#a78bfa" stroke-width="2.5"/>'
    '<text x="693" y="114" text-anchor="middle" fill="#e9d5ff" font-family="sans-serif" font-size="32" font-weight="bold">RAM</text>'
    '<text x="693" y="190" text-anchor="middle" fill="#c4b5fd" font-family="sans-serif" font-size="28">Active</text>'
    '<text x="693" y="242" text-anchor="middle" fill="#c4b5fd" font-family="sans-serif" font-size="28">Data</text>'
    '</svg>'
)

DIAG_SENSOR = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="8" y="8" width="764" height="334" rx="14" fill="#0f172a" stroke="#60a5fa" stroke-width="2.5"/>'
    '<rect x="26" y="48" width="144" height="96" rx="12" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2.5"/>'
    '<text x="98" y="106" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="28" font-weight="bold">Sensor</text>'
    '<line x1="170" y1="96" x2="212" y2="96" stroke="#60a5fa" stroke-width="4"/>'
    '<rect x="214" y="48" width="114" height="96" rx="12" fill="#78350f" stroke="#fbbf24" stroke-width="2.5"/>'
    '<text x="271" y="106" text-anchor="middle" fill="#fef08a" font-family="sans-serif" font-size="28" font-weight="bold">ADC</text>'
    '<line x1="328" y1="96" x2="370" y2="96" stroke="#fbbf24" stroke-width="4"/>'
    '<rect x="372" y="40" width="184" height="112" rx="12" fill="#3b0764" stroke="#c084fc" stroke-width="2.5"/>'
    '<text x="464" y="88" text-anchor="middle" fill="#f3e8ff" font-family="sans-serif" font-size="28" font-weight="bold">CPU / μP</text>'
    '<text x="464" y="130" text-anchor="middle" fill="#d8b4fe" font-family="sans-serif" font-size="28">vs Preset</text>'
    '<line x1="556" y1="96" x2="598" y2="96" stroke="#4ade80" stroke-width="4"/>'
    '<rect x="600" y="48" width="154" height="96" rx="12" fill="#14532d" stroke="#4ade80" stroke-width="2.5"/>'
    '<text x="677" y="106" text-anchor="middle" fill="#dcfce7" font-family="sans-serif" font-size="28" font-weight="bold">Actuator</text>'
    '<path d="M 677 144 L 677 286 L 98 286 L 98 152" fill="none" stroke="#f87171" stroke-width="4" stroke-dasharray="10,7"/>'
    '<text x="390" y="254" text-anchor="middle" fill="#fca5a5" font-family="sans-serif" font-size="28" font-weight="bold">Feedback Loop (Alters Next Reading!)</text>'
    '</svg>'
)

DIAG_STORAGE = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="12" y="16" width="242" height="318" rx="14" fill="#1e293b" stroke="#60a5fa" stroke-width="2.5"/>'
    '<text x="133" y="64" text-anchor="middle" fill="#93c5fd" font-family="sans-serif" font-size="28" font-weight="bold">Magnetic HDD</text>'
    '<text x="133" y="140" text-anchor="middle" fill="#e2e8f0" font-family="sans-serif" font-size="28">Platters</text>'
    '<text x="133" y="210" text-anchor="middle" fill="#e2e8f0" font-family="sans-serif" font-size="28">Tracks/Sectors</text>'
    '<text x="133" y="282" text-anchor="middle" fill="#fca5a5" font-family="sans-serif" font-size="28">Moving heads</text>'
    '<rect x="269" y="16" width="242" height="318" rx="14" fill="#1e293b" stroke="#c084fc" stroke-width="2.5"/>'
    '<text x="390" y="64" text-anchor="middle" fill="#d8b4fe" font-family="sans-serif" font-size="28" font-weight="bold">Optical Disc</text>'
    '<text x="390" y="140" text-anchor="middle" fill="#e2e8f0" font-family="sans-serif" font-size="28">Spiral track</text>'
    '<text x="390" y="210" text-anchor="middle" fill="#e2e8f0" font-family="sans-serif" font-size="28">Pits &amp; lands</text>'
    '<text x="390" y="282" text-anchor="middle" fill="#93c5fd" font-family="sans-serif" font-size="28">Blue laser</text>'
    '<rect x="526" y="16" width="242" height="318" rx="14" fill="#1e293b" stroke="#4ade80" stroke-width="2.5"/>'
    '<text x="647" y="64" text-anchor="middle" fill="#86efac" font-family="sans-serif" font-size="28" font-weight="bold">Solid-State</text>'
    '<text x="647" y="140" text-anchor="middle" fill="#e2e8f0" font-family="sans-serif" font-size="28">Floating gate</text>'
    '<text x="647" y="210" text-anchor="middle" fill="#e2e8f0" font-family="sans-serif" font-size="28">Traps electrons</text>'
    '<text x="647" y="282" text-anchor="middle" fill="#86efac" font-family="sans-serif" font-size="28">No moving pts</text>'
    '</svg>'
)

# --- COLD OPEN ---
scene("kitchen", [("dad", 300), ("tara", 620), ("mum", 920)], "Kitchen — Sunday Morning")
L("dad", "Stand back everyone, I am installing video games onto our microwave oven because it has a microprocessor inside!", mood="excited", prop="tablet", shot="wide")
L("tara", "Dad, please put the screwdriver down before our porridge achieves orbital launch.", mood="worried", shot="two")
L("mum", "Why is my laptop taped to the Wi-Fi router with three shiny movie discs wedged underneath?", mood="shock", shot="two")
L("dad", "Easy! My laptop ran out of memory, so I gave it extra optical cache and pointed the router straight at the ceiling!", mood="smug", shot="close")
sfx("scratch")
freeze("HARDWARE CRIME SCENE")

title()

# --- SCENE 1: VON NEUMANN & FDE CYCLE ---
scene("living", [("dad", 260), ("tara", 580)], "Living Room — Emergency Silicon Intervention")
poof("centi", 900)
sfx("poof")
L("centi", "Did somebody just call a microwave oven a general-purpose gaming rig? My registers are trembling!", mood="shock", shot="wide")
L("tara", "Save him, Centi! Start with why the microwave cannot run spreadsheets.", mood="happy", shot="two")
L("centi", "A microwave is an embedded system: a microprocessor paired with dedicated firmware for one specific job inside a larger machine.", mood="teach", board="Embedded: 1 dedicated task + firmware", boardClear=True)
L("dad", "Wait, so my smartphone is an embedded system too because it fits in my pocket?", mood="thinking", shot="two")
L("tara", "No! Phones and laptops are general-purpose computers because you install any app you want.", mood="determined", board="Laptop/Phone = General-purpose computer")
L("centi", "Inside your laptop sits a Von Neumann CPU, where both instructions and data live together in RAM.", mood="teach", diagram=DIAG_FDE, boardClear=True, board="PC -> MAR -> MDR -> CIR; PC + 1")
L("centi", "Watch the Fetch stage closely: the Program Counter holds the address of the next instruction to be fetched.", mood="teach")
L("tara", "That address copies into the Memory Address Register and travels down the unidirectional Address Bus to RAM!", mood="excited", board="Address Bus = Unidirectional (1-way)")
L("centi", "Meanwhile the Control Unit sends a read signal on the bidirectional Control Bus, and RAM returns the instruction on the bidirectional Data Bus to the Memory Data Register.", mood="teach", board="Data & Control Buses = Bidirectional")
L("tara", "Then it copies into the Current Instruction Register to be decoded, while the Program Counter increments by one!", mood="happy")
L("dad", "And where do results go when the Arithmetic and Logic Unit finishes?", mood="thinking")
L("centi", "Into the Accumulator! Push clock speed too far by overclocking and operations fall out of sync while silicon overheats.", mood="teach")
L("dad", "What if I upgrade from two cores to four — will every program run twice as fast?", mood="excited")
L("tara", "No — cores spend time communicating, and sequential steps cannot split across cores.", mood="teach")

challenge(
    1,
    "PC = 200, ACC = 15. RAM[200] = ADD 205, RAM[205] = 9. Final ACC?",
    "24",
    "Fetch ADD 205 (PC->201); Execute reads 9 at 205: 15 + 9 = 24",
    "Pause and trace! The Program Counter starts at two hundred and the Accumulator holds fifteen. Address two hundred holds Add two hundred and five, and address two hundred and five stores nine. What value finishes in the Accumulator?",
    "Twenty four! Fetch loads Add two hundred and five into the Current Instruction Register and increments the Program Counter to two hundred and one. Execute reads nine from address two hundred and five and adds fifteen plus nine to get twenty four!",
)

# --- EXAMINER MARK-SCHEME TRAP ---
card("EXAMINER MARK-SCHEME TRAP", "❌ Never write vagueness → ✅ Write exact CIE register & RAM roles!")
scene("classroom", [("dad", 280), ("tara", 600), ("centi", 920)], "Holo-Classroom — Examiner Roast")
L("dad", "Okay, mock exam answer: the Program Counter counts how many instructions ran, the Control Bus is one-way, and RAM stores all my holiday photos!", mood="smug", shot="wide", boardClear=True)
sfx("buzzer")
L("centi", "Triple zero marks! Examiners weep into their mark schemes every June over those exact three blunders!", mood="annoyed", board="NEVER: PC counts instructions")
L("tara", "Write this instead: the Program Counter holds the address of the next instruction, and the Control Bus is bidirectional!", mood="determined", board="WRITE: PC = NEXT address | Ctrl = 2-way")
L("centi", "And never say RAM stores your saved files! Volatile RAM stores the currently running operating system, active programs, and data currently in use.", mood="teach", board="WRITE: RAM = active OS, programs & data")
L("tara", "While non-volatile ROM stores the permanent bootstrap loader and BIOS firmware that wakes the computer at startup!", mood="happy", board="WRITE: ROM = non-volatile BIOS/bootstrap")

# --- SCENE 2: INPUT, OUTPUT & SENSORS ---
scene("mall", [("dad", 260), ("tara", 580), ("centi", 900)], "Tech Mall — Touchscreens & Sensor Loops")
L("dad", "Look at this winter kiosk! Why did my smartphone touchscreen ignore my thick wool gloves outside, yet this ticket screen works fine?", mood="thinking", shot="wide", boardClear=True)
L("tara", "Your phone uses a capacitive touchscreen that needs a conductive bare finger to draw charge from an electrostatic layer.", mood="teach", board="Capacitive: bare finger, multi-touch")
L("centi", "Resistive screens press two flexible layers together, while infrared screens detect any gloved finger breaking an invisible beam grid!", mood="teach", board="Resistive: 2 layers | IR: beam grid")
L("dad", "Should I buy an inkjet or a laser printer to print five hundred booklets tonight?", mood="happy")
L("tara", "Laser! Inkjets spray droplets line by line for photos; laser printers fuse powdered toner onto whole pages fast.", mood="teach", board="Inkjet: droplets | Laser: toner + fuser")
L("dad", "Nice! Now, my greenhouse wires a water sensor and heat sensor straight to the CPU!", mood="excited")
sfx("buzzer")
L("tara", "Never write water sensor or heat sensor — use moisture for soil, humidity for air, and temperature!", mood="annoyed", diagram=DIAG_SENSOR, boardClear=True, board="Soil = Moisture | Air = Humidity")
L("centi", "Sensors output analogue signals, so an Analogue to Digital Converter turns them into binary for the microprocessor.", mood="teach", board="Analogue -> ADC -> Digital vs Preset")
L("tara", "Monitoring systems like heart monitors only log data or sound warnings without changing the environment.", mood="teach")
L("centi", "Control systems drive actuators whose physical action changes the next sensor reading in a feedback loop!", mood="teach", board="Control = Actuator + Feedback Loop")

challenge(
    2,
    "Which 3-letter component converts analogue sensor data to binary?",
    "ADC",
    "Analogue-to-Digital Converter sits between sensor and CPU",
    "Quick check! Which three-letter hardware component sits between an analogue temperature sensor and a digital microprocessor?",
    "A D C, the Analogue to Digital Converter! Without it, the microprocessor cannot compare the continuous physical reading against its stored preset value.",
)

# --- SCENE 3: STORAGE, VIRTUAL MEMORY & NETWORKING ---
scene("living", [("dad", 240), ("tara", 540), ("mum", 820), ("centi", 1040)], "Living Room — SSDs, Thrashing & Routers")
L("mum", "Now explain why Dad's shiny discs and full memory brought my laptop to a standstill!", mood="annoyed", shot="wide", diagram=DIAG_STORAGE, boardClear=True)
L("centi", "Inside RAM, main memory uses DRAM capacitors that need constant refreshing, while fast CPU cache uses SRAM flip-flops that never need refreshing.", mood="teach", board="DRAM = refresh | SRAM = fast cache")
L("tara", "For permanent secondary storage, magnetic hard drives use spinning platters and electromagnets, while optical Blu-ray discs read a single spiral of pits and lands with a short-wavelength blue laser.", mood="teach", board="SSD: zero moving parts, traps electrons")
L("centi", "Best for laptops is a Solid-State Drive: zero moving parts, using control-gate and floating-gate transistors to trap electrons safely against bumps!", mood="happy")
L("dad", "Then why was my hard drive clicking non-stop when I opened thirty tabs on tiny RAM?", mood="worried", boardClear=True)
L("tara", "Virtual memory! When RAM fills up, the operating system swaps inactive pages out to hard drive swap space and swaps them back into RAM when needed.", mood="teach", board="Virtual Memory: swaps inactive pages")
L("centi", "Constant swapping back and forth is called disk thrashing — cure it by installing more physical RAM!", mood="teach", board="Too much swapping = Disk Thrashing!")
L("dad", "Fine, I will upload everything to cloud storage so my files float safely in the sky without any hard drives!", mood="smug")
L("tara", "Cloud storage still uses real physical servers in remote data centres — great for access anywhere, provided your Internet stays connected!", mood="teach", board="Cloud: remote servers, needs Internet")
L("mum", "And please rescue my poor Wi-Fi router from Dad's sticky tape.", mood="eyeroll", boardClear=True)
L("centi", "Every device has a Network Interface Card holding a permanent forty-eight-bit hexadecimal MAC address: manufacturer code first, unique serial second.", mood="teach", board="MAC = 48-bit hex in NIC (physical)")
L("tara", "Meanwhile a DHCP server leases logical IP addresses: thirty-two-bit dotted denary for I P version four, or one hundred and twenty-eight-bit hex with colons for I P version six!", mood="excited", board="IPv4 = 32-bit | IPv6 = 128-bit")
L("centi", "Your router reads the destination IP address inside each packet header and checks its routing table to forward packets between your home LAN and the Internet!", mood="teach", board="Router reads Dest IP -> Routing Table")

challenge(
    3,
    "How many bits are in a MAC address vs an IPv6 address?",
    "48 and 128",
    "MAC = 6 hex pairs (48 bits); IPv6 = 8x16 hex bits (128 bits)",
    "Final boss challenge! How many bits make up a hardware MAC address, and how many bits make up an I P version six address?",
    "Forty eight bits for a MAC address and one hundred and twenty eight bits for I P version six! Six hexadecimal pairs give forty eight bits, while eight groups of four hexadecimal digits give one hundred and twenty eight bits.",
)

confess("dad", "Dad's Hardware Confession")
L("dad", "I took the Blu-ray discs off the router, bought extra DRAM sticks to stop disk thrashing, and let the microwave stick to heating soup!", mood="happy", shot="close")
sfx("ding")

end_card()
