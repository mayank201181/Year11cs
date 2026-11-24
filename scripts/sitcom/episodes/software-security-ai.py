# Episode 5: Software, Internet, Cyber Security & AI — "Phishing For Compliments"
EP = dict(
    topic="software-security-ai",
    logline="Dad clicks a 'Most Handsome Bank Customer' phishing email, loads rose-scented paper for IDE prettyprinting, and masters OS interrupts, DNS, encryption, and AI Expert Systems.",
)

DIAG_ISR = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect width="780" height="350" rx="14" fill="#0f172a"/>'
    '<rect x="18" y="18" width="362" height="148" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>'
    '<text x="199" y="74" fill="#38bdf8" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">1. Finish FDE Cycle</text>'
    '<text x="199" y="128" fill="#cbd5e1" font-family="sans-serif" font-size="28" text-anchor="middle">Check Priority Queue</text>'
    '<rect x="400" y="18" width="362" height="148" rx="12" fill="#1e293b" stroke="#a78bfa" stroke-width="2.5"/>'
    '<text x="581" y="74" fill="#c4b5fd" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">2. Push to Stack</text>'
    '<text x="581" y="128" fill="#cbd5e1" font-family="sans-serif" font-size="28" text-anchor="middle">Save PC &amp; ACC in RAM</text>'
    '<rect x="18" y="184" width="362" height="148" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="2.5"/>'
    '<text x="199" y="240" fill="#fcd34d" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">3. Run ISR Routine</text>'
    '<text x="199" y="294" fill="#cbd5e1" font-family="sans-serif" font-size="28" text-anchor="middle">Load ISR addr → PC</text>'
    '<rect x="400" y="184" width="362" height="148" rx="12" fill="#1e293b" stroke="#34d399" stroke-width="2.5"/>'
    '<text x="581" y="240" fill="#6ee7b7" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">4. Pop &amp; Resume</text>'
    '<text x="581" y="294" fill="#cbd5e1" font-family="sans-serif" font-size="28" text-anchor="middle">Restore PC &amp; ACC ✔</text>'
    '</svg>'
)

DIAG_TRANSLATORS = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect width="780" height="350" rx="14" fill="#0f172a"/>'
    '<rect x="12" y="16" width="242" height="318" rx="12" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2.5"/>'
    '<text x="133" y="64" fill="#93c5fd" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">Compiler</text>'
    '<text x="133" y="128" fill="#e2e8f0" font-family="sans-serif" font-size="28" text-anchor="middle">WHOLE file</text>'
    '<text x="133" y="186" fill="#e2e8f0" font-family="sans-serif" font-size="28" text-anchor="middle">Makes .exe</text>'
    '<text x="133" y="244" fill="#e2e8f0" font-family="sans-serif" font-size="28" text-anchor="middle">Lists ALL err</text>'
    '<text x="133" y="302" fill="#6ee7b7" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">Hides source</text>'
    '<rect x="269" y="16" width="242" height="318" rx="12" fill="#422006" stroke="#facc15" stroke-width="2.5"/>'
    '<text x="390" y="64" fill="#fde047" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">Interpreter</text>'
    '<text x="390" y="128" fill="#e2e8f0" font-family="sans-serif" font-size="28" text-anchor="middle">Line by line</text>'
    '<text x="390" y="186" fill="#e2e8f0" font-family="sans-serif" font-size="28" text-anchor="middle">No .exe file</text>'
    '<text x="390" y="244" fill="#fca5a5" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">Stops 1st err</text>'
    '<text x="390" y="302" fill="#fde047" font-family="sans-serif" font-size="28" text-anchor="middle">Best debug</text>'
    '<rect x="526" y="16" width="242" height="318" rx="12" fill="#064e3b" stroke="#34d399" stroke-width="2.5"/>'
    '<text x="647" y="64" fill="#6ee7b7" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">Assembler</text>'
    '<text x="647" y="128" fill="#e2e8f0" font-family="sans-serif" font-size="28" text-anchor="middle">Mnemonics</text>'
    '<text x="647" y="186" fill="#e2e8f0" font-family="monospace" font-size="28" font-weight="bold" text-anchor="middle">LDA/ADD</text>'
    '<text x="647" y="244" fill="#e2e8f0" font-family="sans-serif" font-size="28" text-anchor="middle">Low-level</text>'
    '<text x="647" y="302" fill="#6ee7b7" font-family="sans-serif" font-size="28" text-anchor="middle">→ Machine</text>'
    '</svg>'
)

DIAG_ASYM = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect width="780" height="350" rx="14" fill="#0f172a"/>'
    '<text x="390" y="48" fill="#f8fafc" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">Asymmetric: Alice Sends Secret to Bob</text>'
    '<rect x="14" y="72" width="242" height="258" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>'
    '<text x="135" y="122" fill="#38bdf8" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">Alice</text>'
    '<text x="135" y="178" fill="#e2e8f0" font-family="sans-serif" font-size="28" text-anchor="middle">Encrypts w/</text>'
    '<text x="135" y="232" fill="#6ee7b7" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">BOB PUBLIC</text>'
    '<text x="135" y="288" fill="#94a3b8" font-family="sans-serif" font-size="28" text-anchor="middle">(Open key)</text>'
    '<rect x="270" y="102" width="240" height="198" rx="12" fill="#3f1d2e" stroke="#f43f5e" stroke-width="2.5"/>'
    '<text x="390" y="156" fill="#fda4af" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">Ciphertext</text>'
    '<text x="390" y="214" fill="#fecdd3" font-family="sans-serif" font-size="28" text-anchor="middle">Unreadable</text>'
    '<text x="390" y="264" fill="#fecdd3" font-family="sans-serif" font-size="28" text-anchor="middle">if sniffed!</text>'
    '<rect x="524" y="72" width="242" height="258" rx="12" fill="#064e3b" stroke="#34d399" stroke-width="2.5"/>'
    '<text x="645" y="122" fill="#6ee7b7" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">Bob</text>'
    '<text x="645" y="178" fill="#e2e8f0" font-family="sans-serif" font-size="28" text-anchor="middle">Decrypts w/</text>'
    '<text x="645" y="232" fill="#fde047" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">BOB PRIVATE</text>'
    '<text x="645" y="288" fill="#a7f3d0" font-family="sans-serif" font-size="28" text-anchor="middle">(Secret!)</text>'
    '</svg>'
)

DIAG_EXPERT = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect width="780" height="350" rx="14" fill="#0f172a"/>'
    '<rect x="14" y="102" width="206" height="146" rx="12" fill="#1e293b" stroke="#818cf8" stroke-width="2.5"/>'
    '<text x="117" y="160" fill="#a5b4fc" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">User UI</text>'
    '<text x="117" y="212" fill="#cbd5e1" font-family="sans-serif" font-size="28" text-anchor="middle">Asks/Shows</text>'
    '<rect x="244" y="76" width="248" height="198" rx="14" fill="#311042" stroke="#e879f9" stroke-width="2.5"/>'
    '<text x="368" y="138" fill="#f5d0fe" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">Inference</text>'
    '<text x="368" y="182" fill="#f5d0fe" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">Engine</text>'
    '<text x="368" y="236" fill="#e2e8f0" font-family="sans-serif" font-size="28" text-anchor="middle">Rules→Facts</text>'
    '<rect x="516" y="22" width="250" height="142" rx="12" fill="#083344" stroke="#22d3ee" stroke-width="2.5"/>'
    '<text x="641" y="78" fill="#67e8f9" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">Knowledge</text>'
    '<text x="641" y="132" fill="#cbd5e1" font-family="sans-serif" font-size="28" text-anchor="middle">Domain Facts</text>'
    '<rect x="516" y="186" width="250" height="142" rx="12" fill="#451a03" stroke="#fbbf24" stroke-width="2.5"/>'
    '<text x="641" y="242" fill="#fde68a" font-family="sans-serif" font-size="28" font-weight="bold" text-anchor="middle">Rule Base</text>'
    '<text x="641" y="296" fill="#cbd5e1" font-family="monospace" font-size="28" font-weight="bold" text-anchor="middle">IF..THEN</text>'
    '</svg>'
)

# --- COLD OPEN ---
scene("kitchen", [("dad", 300), ("tara", 620), ("mum", 940)], "Sunday Morning — Dad's Laptop")
L("dad", "Stand back everyone! Your father just won Most Handsome Online Banking Customer of the Year!", mood="smug", shot="two", prop="tablet")
L("tara", "Dad, look at the sender domain. Royal Dash Bank Dash Totally Legit Dot Biz?", mood="worried", shot="two")
L("dad", "It asked me to click a shiny blue link to confirm my PIN, and gifted me a free Super Wallpaper app!", mood="happy", shot="close", prop="tablet")
L("mum", "You clicked a mystery email link AND installed an unknown app before breakfast?", mood="shock", shot="two")
sfx("buzzer")
freeze("PHISHING + TROJAN!", dur=2.6, s="scratch", narrator="Two cyber disasters before his toast even popped.")
title()

# --- ACT 1: SYSTEM VS APPLICATION SOFTWARE, FIRMWARE & INTERRUPTS ---
scene("living", [("tara", 260), ("dad", 880)], "Emergency Cyber Audit")
poof("centi", 570)
sfx("poof")
L("centi", "Hands off that keyboard before a keylogger steals your secret biscuit recipe!", mood="excited", shot="wide")
L("dad", "Relax, Centi! My wallpaper app sits on the screen, so it counts as system software, right?", mood="thinking", shot="two")
L("tara", "Wrong category, Dad. Application software performs user tasks, like a word processor, spreadsheet, or web browser.", mood="teach", shot="close")
L("centi", "And never write brand names on the exam! System software manages hardware: the Operating System, utilities, device drivers, and translators.", mood="teach", shot="close", boardClear=True, board="System SW: OS, utilities, drivers", diagram=DIAG_ISR)
L("dad", "Wait — when power first turns on and volatile RAM is empty, how does the Operating System wake up?", mood="thinking", shot="two")
L("centi", "Non-volatile ROM stores firmware — the BIOS or bootloader — which checks hardware and loads the Operating System into RAM!", mood="teach", shot="close", board="ROM Firmware -> loads OS into RAM")
L("tara", "Then the OS runs memory management, multitasking, file and user management, peripheral drivers, and your interface: WIMP GUI or fast text CLI!", mood="happy", shot="two")
L("dad", "What if my printer jams mid-task? Does the CPU freeze halfway through decoding an instruction?", mood="annoyed", shot="close")
L("centi", "Never mid-cycle! The CPU finishes its current Fetch-Decode-Execute cycle first, then checks the interrupt's priority.", mood="teach", shot="close", board="Finish FDE -> Priority -> Stack -> ISR")
L("tara", "Keypresses and paper jams are hardware interrupts; dividing by zero is a software interrupt!", mood="determined", shot="two")
L("centi", "If higher priority, the CPU pushes registers like PC and ACC onto a RAM stack, runs the Interrupt Service Routine, then restores them!", mood="teach", shot="close")

challenge(
    1,
    "What 3-letter routine handles an interrupt after registers are pushed to the stack?",
    "ISR",
    "Finish FDE -> Save PC/ACC to Stack -> Run ISR -> Restore",
    "Quick check! What three letter abbreviation names the routine run by the C P U to service an interrupt after saving registers?",
    "I S R — the Interrupt Service Routine! Afterwards, saved registers pop off the stack so the original program resumes.",
)

# --- ACT 2: LANGUAGES, TRANSLATORS & IDE PRETTYPRINTING ---
scene("living", [("tara", 260), ("centi", 570), ("dad", 880)], "Translators & The Rose-Scented Printer")
L("dad", "Right, I am coding my own cyber shield! Let me load pink rose-scented paper into the printer for IDE prettyprinting.", mood="excited", shot="two", prop="book")
sfx("trombone")
L("tara", "Put the paper down, Dad! Prettyprinting in an IDE means syntax colour-coding and automatic indentation on screen!", mood="eyeroll", shot="close")
L("centi", "An IDE also gives you a code editor, error diagnostics, auto-completion, translators, and a runtime debugger with breakpoints.", mood="teach", shot="close", boardClear=True, board="IDE: Editor, Debugger, Prettyprinting", diagram=DIAG_TRANSLATORS)
L("dad", "Why three translators though? Can one button not translate everything?", mood="bored", shot="two")
L("tara", "High-level languages are portable and English-like, whereas low-level Assembly uses mnemonics for fast, direct register control.", mood="teach", shot="two", board="Assembler: Assembly -> Machine Code")
L("centi", "An Assembler translates Assembly into binary machine code. For high-level code during debugging, use an Interpreter!", mood="teach", shot="close", board="Compiler: Whole -> .exe | Interp: 1x1")
L("tara", "An Interpreter runs line by line and stops right on the first error, with no executable file.", mood="happy", shot="two")
L("centi", "When releasing finished software, a Compiler translates the whole program into a fast standalone executable, listing all errors and hiding source code!", mood="smug", shot="close")

confess("dad", "Dad's Stationery Confession")
L("dad", "I bought forty sheets of lavender card stock for prettyprinting. Nobody tell Tara's teacher.", mood="worried", shot="close")

# --- ACT 3: INTERNET, DNS, HTTPS, COOKIES & CYBER THREATS ---
scene("living", [("tara", 220), ("centi", 490), ("dad", 760), ("mum", 1030)], "Tracing the Phishing & Pharming Trail")
L("mum", "Now explain how that fake bank page loaded on our network!", mood="determined", shot="wide")
L("centi", "First: the Internet is the global physical network infrastructure, while the World Wide Web is the collection of web pages accessed over it!", mood="teach", shot="close", boardClear=True, board="Internet = Infrastructure | WWW = Pages")
L("tara", "A URL has protocol, domain name, and file path. Your browser sends the domain name to a DNS server to get its IP address!", mood="teach", shot="two", board="URL -> DNS Server -> IP Address")
L("centi", "Under HTTPS, the web server sends an SSL or TLS digital certificate with its public key. The browser verifies it and renders encrypted HTML.", mood="teach", shot="close", board="HTTPS: Verify Cert -> Encrypted HTML")
L("dad", "And cookies! Are cookies tiny viruses hiding on my hard drive?", mood="shock", shot="close")
L("mum", "Never! Cookies are plain-text data files, never viruses! Session cookies sit in RAM for an active shopping basket and vanish when the browser closes.", mood="happy", shot="two", board="Session = RAM | Persistent = SSD/HDD")
L("tara", "While persistent cookies stay on your SSD until expiry to remember logins, preferences, and user tracking!", mood="happy", shot="two")
L("centi", "Now compare the twin traps: clicking a link inside a fake email is Phishing.", mood="determined", shot="close", boardClear=True, board="Phishing = Email Click | Pharming = DNS", diagram=DIAG_ASYM)
L("tara", "Whereas malicious code on a computer or DNS server that automatically redirects a genuine typed URL with zero clicks is Pharming!", mood="teach", shot="two")
L("centi", "And distinguish malware: a Virus needs a host file and human action, a Worm self-replicates standalone across networks, and a Trojan disguises itself as a legitimate app!", mood="teach", shot="close", board="Virus=Host | Worm=Auto | Trojan=Disguise")
L("dad", "While Spyware keyloggers record keystrokes, Ransomware encrypts files for money, Firewalls filter packet criteria, and Proxy servers absorb DDoS floods!", mood="happy", shot="two")

challenge(
    2,
    "Which attack redirects a genuine typed URL via infected device/DNS code with NO click?",
    "Pharming",
    "Email link = Phishing | DNS redirect = Pharming",
    "Challenge two! Which attack uses malicious code on a device or D N S server to redirect a genuine typed web address without clicking any email link?",
    "Pharming! Phishing needs you to click a fake email link, whereas pharming redirects genuine addresses automatically.",
)

# --- EXAMINER MARK-SCHEME TRAP BEAT ---
card("EXAMINER MARK-SCHEME TRAP", "❌ Encryption stops interception → ✅ Makes ciphertext unreadable", dur=3.2)
scene("living", [("tara", 260), ("centi", 570), ("dad", 880)], "Roasting Dad's Classic Paper 1 Blunder")
L("dad", "Watch me ace encryption: Encryption stops hackers intercepting Wi-Fi packets, and Alice hides a message to Bob using Alice's private key!", mood="smug", shot="close")
sfx("buzzer")
L("centi", "Double mark-losing disaster! Never write that encryption stops interception! Sniffers still capture packets, but ciphertext is meaningless without the decryption key!", mood="shock", shot="two", boardClear=True, board="TRAP 1: Ciphertext != No Interception", diagram=DIAG_ASYM)
L("tara", "And Symmetric encryption shares one secret key, risking interception during key exchange.", mood="annoyed", shot="two", board="TRAP 2: Use RECIPIENT Public Key!")
L("centi", "In Asymmetric encryption, if Alice locked data with Alice's private key, anyone holding Alice's public key could read it!", mood="teach", shot="close")
L("tara", "Always name the owner: Alice encrypts with BOB'S PUBLIC KEY, so ONLY BOB'S PRIVATE KEY can decrypt it!", mood="determined", shot="two", board="Bob Public Locks -> Bob Private Unlocks")

# --- ACT 4: AUTOMATED SYSTEMS, ROBOTICS & AI ---
scene("megacity", [("tara", 260), ("centi", 570), ("dad", 880)], "Holo-Tour: Automated Robots & AI")
sfx("whoosh")
L("dad", "Incredible! Hey, my phone voice chatbot tells weather jokes — is that chatbot a robot?", mood="excited", shot="wide")
L("tara", "Zero marks! Every CIE robot must have three traits: a mechanical structure with actuators, electrical components like sensors, and programmability!", mood="teach", shot="two", boardClear=True, board="Robot: Mechanical + Electrical + Code", diagram=DIAG_EXPERT)
L("centi", "Automated systems link sensors, an ADC, a microprocessor, and actuators in a fast feedback loop — fast and tireless, though costly to set up.", mood="teach", shot="close", board="Sensors -> Microprocessor -> Actuators")
L("tara", "Finally, inside AI, an Expert System has four core parts: User Interface, Inference Engine, Knowledge Base of facts, and Rule Base of IF-THEN rules!", mood="determined", shot="two", board="Expert: UI + Inference + KB + Rule Base")
L("centi", "While Machine Learning trains on data so algorithms automatically adapt their own models from experience without explicit reprogramming!", mood="happy", shot="close")

challenge(
    3,
    "Which Expert System component stores the conditional IF...THEN inference statements?",
    "Rule base",
    "Knowledge Base = Facts | Rule Base = IF...THEN rules",
    "Final challenge! Which two-word component of an Expert System stores the conditional IF THEN rules used by the inference engine?",
    "The Rule Base! Facts live in the Knowledge Base, IF THEN rules live in the Rule Base, and the Inference Engine connects them.",
)

L("dad", "Offline backups done, two-factor biometric login active, and lavender paper returned to Mum!", mood="happy", shot="wide")
sfx("ding")
end_card()
