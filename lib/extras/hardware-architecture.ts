import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Right now, as your eyes scan this sentence, the processor inside your device has already completed **over three billion Fetch–Decode–Execute cycles** — shuttling binary opcodes from RAM through registers smaller than a virus while trapping electrons inside floating silicon gates!",
  didYouKnow: [
    "In **1956**, IBM's `305 RAMAC` — the world's first commercial magnetic hard disk drive — weighed **over one metric ton**, used fifty `24-inch` spinning platters, had to be loaded onto cargo planes with a forklift, and stored just **`5 megabytes`** (less than one smartphone photo today)!",
    "An SSD stores `0`s and `1`s using **quantum tunnelling**: electrons literally teleport across an insulating silicon-dioxide barrier thinner than `10` atoms wide onto a **floating gate**, where they can stay trapped without power for a decade.",
    "Why is it spelled **Blu-ray** without an `'e'`? Because ordinary words like *'Blue-ray'* couldn't easily be registered as a global trademark — even though the physics comes straight from its **`405 nm` blue-violet laser**!",
    "Your network card's **48-bit MAC address** reveals who made your device: look up the first three hex pairs (`OUI`) of any phone or laptop on your home Wi-Fi and you can spot Apple, Intel, Samsung, or Raspberry Pi hardware instantly.",
    "The Apollo 11 Guidance Computer that landed astronauts on the Moon in 1969 ran at just **`2.048 MHz`** with **`2 KiB` of erasable RAM** and **`36 KiB` of hand-woven copper-wire ROM** ('core rope memory') — roughly a million times slower than the chip in your pocket!",
  ],
  activities: [
    {
      title: "Human Fetch–Decode–Execute Tabletop Roleplay",
      emoji: "🏃",
      materials: [
        "7 sticky notes labelled PC, MAR, MDR, CIR, ACC, CU, and ALU",
        "6 index cards numbered 100 to 105 laid out across a desk as RAM",
        "A pen and scrap paper",
      ],
      steps: [
        "Write a mini program on RAM cards `100–102`: Card `100` = `LOAD 104`, Card `101` = `ADD 105`, Card `102` = `STORE 103`, Card `104` = `17`, Card `105` = `25`, Card `103` = `0`.",
        "Start `PC` at `100` and `ACC` at `0`. Physically pass addresses from `PC → MAR`, walk one-way along the 'Address Bus' to the matching RAM card, and bring its text back two-way on the 'Data Bus' to `MDR → CIR`.",
        "Increment `PC` by `1` *before* decoding `CIR`! Then execute each instruction and verify Card `103` ends up holding `42` while `PC` finishes at `103`.",
      ],
      maths:
        "Acting out the bus transfers makes it impossible to forget why `MAR` holds *addresses* (`100`, `104`, `101`, `105`, `102`, `103`) while `MDR` holds *contents* (`LOAD 104`, `17`, `ADD 105`, `25`, `STORE 103`, `42`) — and why only the Address Bus is one-way!",
    },
    {
      title: "Inspect Your Own NIC's 48-Bit MAC & Dynamic IP",
      emoji: "🔍",
      materials: [
        "Any laptop, iPad, or smartphone connected to Wi-Fi",
      ],
      steps: [
        "Open Wi-Fi details (on macOS: Option-click the Wi-Fi icon or run `ifconfig en0` in Terminal; on iPad/iPhone: Settings → Wi-Fi → tap `(i)` next to your network).",
        "Locate your **IPv4 Address** (e.g. `192.168.1.x` — confirm there are `4` denary numbers all between `0` and `255`) and your **Router** address (usually `.1` or `.254`).",
        "Locate the **Hardware / Wi-Fi MAC Address** (`6` pairs of hex digits `0–9`, `A–F`). Multiply `12` hex digits × `4` bits to verify `48` bits, and notice whether privacy 'Private Wi-Fi Address' (`LAA`) is toggled on!",
      ],
      maths:
        "Every hex pair (`00` to `FF`) equals `1 byte` (`8 bits`), so `6` pairs = `48 bits` = `2⁴⁸` (`281.5 trillion`) possible physical hardware addresses worldwide.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Memory Speed vs Capacity Pyramid",
      svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Memory hierarchy pyramid from fastest smallest CPU Registers at top down through SRAM Cache, DRAM Main Memory, Solid-State SSD, to largest slowest Magnetic HDD and Cloud at base"><polygon points="280,16 330,60 230,60" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/><text x="280" y="50" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="bold" fill="#713f12">Registers</text><polygon points="230,64 330,64 375,106 185,106" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/><text x="280" y="90" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#7c2d12">CPU Cache (SRAM)</text><polygon points="185,110 375,110 420,152 140,152" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><text x="280" y="136" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e3a8a">Main RAM (DRAM) + ROM</text><polygon points="140,156 420,156 465,196 95,196" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><text x="280" y="181" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#14532d">Solid-State SSD (NAND Flash)</text><polygon points="95,200 465,200 505,232 55,232" fill="#f3e8ff" stroke="#7c3aed" stroke-width="2"/><text x="280" y="221" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="bold" fill="#4c1d95">Magnetic HDD / Optical / Cloud Servers</text><line x1="34" y1="224" x2="34" y2="26" stroke="#dc2626" stroke-width="2.5"/><polygon points="34,20 28,30 40,30" fill="#dc2626"/><text x="34" y="14" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#b91c1c">Faster &amp; $/GiB</text><line x1="526" y1="24" x2="526" y2="222" stroke="#2563eb" stroke-width="2.5"/><polygon points="526,228 520,218 532,218" fill="#2563eb"/><text x="526" y="14" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="bold" fill="#1d4ed8">Capacity (TiB)</text></svg>',
      caption:
        "Climbing up the pyramid: access speed and cost per byte skyrocket (volatile CPU registers & SRAM cache at the peak). Moving down: non-volatile TiB capacity expands dramatically.",
    },
    {
      title: "Capacitive vs Resistive vs Infrared Touchscreens",
      svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three side-by-side diagrams showing Capacitive electrostatic glass screen, Resistive two-layer pressure membrane screen, and Infrared X-Y LED beam grid screen"><rect x="12" y="14" width="170" height="192" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/><text x="97" y="36" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a">Capacitive</text><rect x="30" y="96" width="134" height="16" rx="3" fill="#93c5fd" stroke="#1d4ed8"/><ellipse cx="97" cy="78" rx="14" ry="18" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/><text x="97" y="134" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#1e3a8a">Electrostatic charge</text><text x="97" y="150" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#166534" font-weight="bold">Multi-touch, crisp</text><text x="97" y="168" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#b91c1c">No thick gloves!</text><rect x="195" y="14" width="170" height="192" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/><text x="280" y="36" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#92400e">Resistive</text><path d="M 214 88 Q 280 112 346 88" fill="none" stroke="#b45309" stroke-width="3"/><line x1="214" y1="106" x2="346" y2="106" stroke="#78350f" stroke-width="3"/><text x="280" y="134" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#92400e">2 layers pressed</text><text x="280" y="150" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#166534" font-weight="bold">Gloves &amp; stylus OK</text><text x="280" y="168" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#b91c1c">No multi-touch</text><rect x="378" y="14" width="170" height="192" rx="10" fill="#f5f3ff" stroke="#7c3aed" stroke-width="2"/><text x="463" y="36" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="bold" fill="#4c1d95">Infrared (IR)</text><rect x="402" y="54" width="122" height="62" fill="#ede9fe" stroke="#6d28d9"/><line x1="402" y1="74" x2="524" y2="74" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,2"/><line x1="402" y1="96" x2="524" y2="96" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,2"/><line x1="442" y1="54" x2="442" y2="116" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,2"/><line x1="484" y1="54" x2="484" y2="116" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,2"/><circle cx="463" cy="85" r="9" fill="#dc2626"/><text x="463" y="134" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#4c1d95">Breaks X-Y LED grid</text><text x="463" y="150" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#166534" font-weight="bold">Gloves + Multi-touch</text><text x="463" y="168" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#b91c1c">Expensive (kiosks)</text></svg>',
      caption:
        "CIE 0478 touchscreen trio: Capacitive (phones), Resistive (cheap industrial/gloved panels), and Infrared (rugged outdoor ATMs & ticket kiosks).",
    },
  ],
  history: {
    title: "The 1945 Train Ride That Designed Every Modern Computer",
    story:
      "During World War II, engineers J. Presper Eckert and John Mauchly built **ENIAC** to calculate artillery tables — an astonishing 30-ton vacuum-tube giant with one maddening flaw: changing its program meant unplugging hundreds of heavy cables by hand for up to three days. Mathematician **John von Neumann** joined their discussions and, while riding a train to Los Alamos in June 1945, drafted the *First Draft of a Report on the EDVAC*. His breakthrough — treating **instructions themselves as binary numbers stored in the exact same memory as data**, fetched sequentially by a **Control Unit** and processed by an **Arithmetic Unit** — became universal **Von Neumann architecture**. Eighty years later, whether you open an iPad, a car's ABS controller, or a cloud supercomputer, `PC → MAR → MDR → CIR` still beats at its heart.",
  },
};
