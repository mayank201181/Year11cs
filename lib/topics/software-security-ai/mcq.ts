import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "software-security-ai-m1",
    title: "Software, Cyber Security & AI — MCQ Paper 1 (Core Foundations)",
    questions: [
      {
        id: "software-security-ai-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "system-app-interrupts",
        question:
          "Which of the following is an example of **system software** rather than application software?",
        options: [
          "A disk defragmentation utility",
          "A photo-editing program",
          "A spreadsheet package used for household budgets",
          "A web browser used to view news articles",
        ],
        answerIndex: 0,
        hints: [
          "System software maintains or controls the computer's hardware, whereas application software performs everyday tasks directly for the user.",
        ],
        explanation:
          "A disk defragmentation utility reorganises blocks on magnetic storage to maintain hardware performance, making it **system software**. Spreadsheets, photo editors, and web browsers perform user-oriented tasks, so they are **application software**.",
      },
      {
        id: "software-security-ai-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "system-app-interrupts",
        question:
          "When a desktop computer is first switched on and RAM is completely empty, what is the immediate role of the **firmware (BIOS / bootloader)** stored in ROM?",
        options: [
          "To translate domain names into IP addresses before the screen turns on",
          "To compile all high-level user programs into machine code",
          "To permanently store the user's word-processing documents",
          "To run hardware startup checks and copy the Operating System kernel from secondary storage into RAM",
        ],
        answerIndex: 3,
        hints: [
          "Think about why ROM must be non-volatile when power is first applied and where the Operating System normally lives while power is off.",
        ],
        explanation:
          "At power-on, volatile RAM holds nothing, so the CPU executes non-volatile **firmware (BIOS/UEFI bootloader)** in ROM, which checks hardware (POST) and loads part of the **Operating System** from SSD/HDD into RAM. Firmware does not compile user apps, resolve DNS, or store user documents.",
      },
      {
        id: "software-security-ai-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "system-app-interrupts",
        question:
          "A network technician prefers a **Command Line Interface (CLI)** over a Graphical User Interface (GUI) when configuring a remote server. Which statement gives a valid CIE reason for choosing a CLI?",
        options: [
          "The technician does not need to learn or type any exact command syntax",
          "A CLI uses WIMP icons and pointers so novices can click menus intuitively",
          "A CLI requires less memory/processing power and gives direct, unrestricted text control over system settings",
          "A CLI prevents any software interrupts from occurring on the server",
        ],
        answerIndex: 2,
        hints: [
          "Compare what a CLI displays (plain text prompts) against a GUI (windows, icons, menus, pointers).",
          "Which interface uses far less RAM and lets an expert script or access settings not exposed in GUI menus?",
        ],
        explanation:
          "A **CLI** uses minimal RAM and CPU overhead because no graphical WIMP elements are rendered, and it allows technicians direct command-level control. Memorising exact syntax is a *disadvantage* of CLI, WIMP belongs to a **GUI**, and neither interface disables software interrupts.",
      },
      {
        id: "software-security-ai-m1-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "languages-translators-ide",
        question:
          "Which statement accurately describes **Assembly Language**?",
        options: [
          "It is a portable high-level language that runs unchanged on every CPU architecture",
          "It is written purely in binary 1s and 0s and requires no translator before CPU execution",
          "It is a low-level language using mnemonics that allows direct manipulation of CPU registers and is translated by an assembler",
          "Each single statement translates into dozens of machine-code instructions via an interpreter",
        ],
        answerIndex: 2,
        hints: [
          "Recall the three language tiers: High-Level Language, Assembly Language, and Machine Code.",
          "Assembly sits just above binary machine code and uses short codes like `LDA` and `STO`.",
        ],
        explanation:
          "**Assembly language** is a low-level language using human-readable **mnemonics** (1-to-1 with machine instructions) that gives direct access to hardware registers and is translated by an **assembler**. Pure binary needing no translator is **machine code**, while portable 1-to-many languages are **high-level languages**.",
      },
      {
        id: "software-security-ai-m1-q05",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "languages-translators-ide",
        question:
          "In an Integrated Development Environment (IDE), what does the feature **prettyprinting** do?",
        options: [
          "Sends source code to a physical laser printer with decorative page borders and coloured headers",
          "Applies colour-coding to syntax keywords/strings and automatic indentation to make source code easier to read",
          "Encrypts variable names and comments into ciphertext so hackers cannot read the source code",
          "Translates high-level source code into a standalone binary machine-code executable file for distribution",
        ],
        answerIndex: 1,
        hints: [
          "Don't fall for the word 'printing' — in an IDE this happens entirely on the screen inside the code editor!",
        ],
        explanation:
          "**Prettyprinting** formats code visually inside the IDE editor using **syntax colour-coding** and **automatic indentation** so structure and reserved words stand out clearly. It has nothing to do with physical paper printers, compiling executables, or encryption.",
      },
      {
        id: "software-security-ai-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "languages-translators-ide",
        question:
          "A student is still writing and debugging a new Python program and wants execution to pause on the exact line of the very first syntax error. Which translator is best suited for this stage, and why?",
        options: [
          "An interpreter, because it translates and executes code line by line, stopping immediately at the first error",
          "An assembler, because it converts English loops directly into HTML",
          "A device driver, because it manages syntax buffers in RAM",
          "A compiler, because it executes every error-free line after the bug and produces a standalone executable anyway",
        ],
        answerIndex: 0,
        hints: [
          "High-level languages use either a compiler or an interpreter.",
          "Which one translates statement-by-statement and halts right where the first error sits?",
        ],
        explanation:
          "An **interpreter** translates and executes high-level code **line by line**, halting immediately when it hits the first error — making live debugging rapid. A **compiler** scans the whole program first and refuses to build an executable if any syntax error exists.",
      },
      {
        id: "software-security-ai-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "internet-web-protocols",
        question:
          "Consider the URL `https://www.greenhouse-tech.org/sensors/guide.html`. Which part is the **domain name**?",
        options: [
          "guide.html",
          "www.greenhouse-tech.org",
          "/sensors/guide.html",
          "https",
        ],
        answerIndex: 1,
        hints: [
          "Split the URL into `protocol://domain_name/path/filename`.",
        ],
        explanation:
          "In `https://www.greenhouse-tech.org/sensors/guide.html`, `https` is the **protocol**, `www.greenhouse-tech.org` is the **domain name** (web server host), and `/sensors/guide.html` is the **path and filename**.",
      },
      {
        id: "software-security-ai-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "internet-web-protocols",
        question:
          "What is the primary distinction between **the Internet** and **the World Wide Web (WWW)**?",
        options: [
          "The Internet is a web browser program, whereas the WWW is a search engine",
          "They are identical terms for wireless Wi-Fi connections",
          "The WWW is a physical network of undersea cables, whereas the Internet is a collection of HTML files",
          "The Internet is the global physical infrastructure of interconnected networks, whereas the WWW is the collection of web pages accessed over the Internet",
        ],
        answerIndex: 3,
        hints: [
          "One is hardware/network infrastructure (routers, cables, TCP/IP); the other is a service of linked HTML documents running on top of it.",
          "Email and file transfer also use the physical network without being web pages.",
        ],
        explanation:
          "**The Internet** is the worldwide physical infrastructure of interconnected networks (routers, switches, fibre cables, servers), whereas **the World Wide Web (WWW)** is the collection of HTTP/HTTPS web pages and multimedia resources accessed *over* that infrastructure.",
      },
      {
        id: "software-security-ai-m1-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "internet-web-protocols",
        question:
          "A shopper adds three books to an online basket without logging into an account, then accidentally closes the entire web browser. When they reopen the site, the basket is empty. Which mechanism stored the basket items?",
        options: [
          "A session cookie stored temporarily in RAM and deleted when the browser closed",
          "A hardware interrupt stored inside the CPU accumulator",
          "A persistent cookie stored permanently in non-volatile ROM",
          "A Trojan horse installed by the DNS server",
        ],
        answerIndex: 0,
        hints: [
          "Websites use two kinds of cookies: one survives closing the browser and one disappears immediately when the session ends.",
          "Where is temporary session data kept while the browser is open?",
        ],
        explanation:
          "**Session cookies** are stored in temporary memory (**RAM**) and are automatically deleted as soon as the web browser is closed, which clears an unlogged-in shopping basket. **Persistent cookies** are saved to secondary storage (SSD/HDD, never ROM) and survive browser restarts.",
      },
      {
        id: "software-security-ai-m1-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "cyber-threats-encryption",
        question:
          "Which cyber threat relies on sending **legitimate-looking emails** containing a **link** that tricks the recipient into clicking through to a fake website to steal personal details?",
        options: [
          "Brute-force attack",
          "Distributed Denial of Service (DDoS)",
          "Pharming",
          "Phishing",
        ],
        answerIndex: 3,
        hints: [
          "Think of 'casting a bait email hook' that requires the user to click a link.",
        ],
        explanation:
          "**Phishing** uses fraudulent emails impersonating trusted organisations with a clickable link to a bogus site. **Pharming** redirects genuine typed URLs automatically via malicious code on a device or DNS server *without* needing an email click.",
      },
      {
        id: "software-security-ai-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cyber-threats-encryption",
        question:
          "How does a **worm** differ from a **computer virus**?",
        options: [
          "A worm is a standalone self-replicating program that spreads automatically across networks without needing a host file or human action",
          "A worm requires a spreadsheet host file and a user double-click to spread, whereas a virus spreads without any host file",
          "A worm is hardware firmware stored in ROM, whereas a virus is stored in cache",
          "A worm only displays harmless pop-up adverts, whereas a virus encrypts data for Bitcoin",
        ],
        answerIndex: 0,
        hints: [
          "Ask two questions: Does it attach itself to an existing host program? Does a human have to open that file to trigger replication?",
          "A virus needs both; how does a worm spread across a LAN or the Internet?",
        ],
        explanation:
          "A **worm** is standalone malware that self-replicates automatically across network connections exploiting security flaws, needing **no host program and no human action**. A **virus** attaches itself to a legitimate host file and requires human action (running/opening the host) to execute and spread.",
      },
      {
        id: "software-security-ai-m1-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cyber-threats-encryption",
        question:
          "What is the **exact security effect** of encrypting sensitive data before transmitting it across a public Wi-Fi network?",
        options: [
          "It physically blocks wireless packet sniffers and eavesdroppers from capturing any radio waves over Wi-Fi",
          "It automatically scans for and permanently deletes spyware or ransomware stored on the sender's internal SSD",
          "It scrambles plaintext into unreadable ciphertext so intercepted packets cannot be understood without the decryption key",
          "It prevents distributed botnets from flooding the Wi-Fi router with millions of fake DDoS connection requests",
        ],
        answerIndex: 2,
        hints: [
          "Remember the classic CIE 0478 mark-scheme trap about encryption and interception!",
          "Can an eavesdropper on Wi-Fi still capture the encrypted packets?",
        ],
        explanation:
          "**Encryption does NOT stop interception** — an eavesdropper can still capture the transmitted packets, but because plaintext has been scrambled into **ciphertext**, the data is meaningless without the matching decryption key.",
      },
      {
        id: "software-security-ai-m1-q13",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "automated-robotics-ai",
        question:
          "Which three core components work together in a continuous feedback loop inside an **automated greenhouse control system**?",
        options: [
          "Compilers, cookies, and web browsers",
          "Sensors, a microprocessor, and actuators",
          "Assemblers, persistent cookies, and optical discs",
          "Keyloggers, firewalls, and proxy servers",
        ],
        answerIndex: 1,
        hints: [
          "One component measures temperature/moisture, one compares readings to preset limits, and one physically opens vents or water valves.",
        ],
        explanation:
          "Every CIE **automated system** combines **sensors** (to capture physical readings via an ADC), a **microprocessor** (to compare readings against stored preset values), and **actuators** (motors/valves/heaters to carry out physical actions).",
      },
      {
        id: "software-security-ai-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "automated-robotics-ai",
        question:
          "A student claims that a customer-service **chatbot running purely on a cloud server** is a 'robot'. Why would a CIE 0478 examiner award zero marks for calling the chatbot a physical robot?",
        options: [
          "Because physical robots are strictly mechanical devices that are never allowed to contain electrical components",
          "Because robots must operate purely from fixed mechanical gears and cannot be programmed using computer code",
          "Because a robot must have a physical mechanical framework with actuators in addition to electrical components and programmability",
          "Because customer-service chatbots can only be written in low-level assembly language rather than Python",
        ],
        answerIndex: 2,
        hints: [
          "Recall the 3 mandatory CIE characteristics of a robot.",
          "Check: Mechanical structure? Electrical components? Programmable?",
        ],
        explanation:
          "On CIE 0478, a **robot** must have all three characteristics: **1) a mechanical structure/framework**, **2) electrical components** (sensors, microprocessor, actuators), and **3) programmability**. A pure software chatbot has no mechanical body or actuators to move physically.",
      },
      {
        id: "software-security-ai-m1-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "automated-robotics-ai",
        question:
          "In an AI **Expert System** used for medical diagnosis, which component acts as the 'reasoning brain' that applies `IF...THEN` rules to stored medical facts and patient answers?",
        options: [
          "The user interface",
          "The inference engine",
          "The knowledge base",
          "The bootstrap loader",
        ],
        answerIndex: 1,
        hints: [
          "Separate the four Expert System parts: facts live in the Knowledge Base, `IF...THEN` rules live in the Rule Base, prompts appear on the User Interface.",
          "Which engine combines those rules and facts to deduce a diagnosis?",
        ],
        explanation:
          "The **inference engine** is the reasoning processor of an Expert System: it applies logical rules from the **rule base** to domain facts in the **knowledge base** and user inputs gathered via the **user interface**.",
      },
    ],
  },
  {
    id: "software-security-ai-m2",
    title: "Software, Cyber Security & AI — MCQ Paper 2 (Mechanisms & Contrasts)",
    questions: [
      {
        id: "software-security-ai-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "system-app-interrupts",
        question:
          "Which of the following events triggers a **software interrupt** rather than a hardware interrupt?",
        options: [
          "A user presses the Escape key on a USB keyboard",
          "A running calculation attempts to divide an integer by zero",
          "A user clicks the left button on an optical mouse",
          "A laser printer runs out of toner and signals a paper-tray halt",
        ],
        answerIndex: 1,
        hints: [
          "Hardware interrupts originate from physical external peripheral devices; software interrupts originate from an executing program or OS instruction exception.",
          "Check which option is caused by code execution inside the CPU rather than a peripheral.",
        ],
        explanation:
          "**Division by zero** (alongside two processes accessing the same memory address or a missing-file exception) is generated by executing code, making it a **software interrupt**. Key presses, mouse clicks, and printer faults are **hardware interrupts**.",
      },
      {
        id: "software-security-ai-m2-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "system-app-interrupts",
        question:
          "A CPU is halfway through decoding an instruction when a high-priority keyboard interrupt arrives. What does the CPU do **next**?",
        options: [
          "Ignores the incoming keyboard interrupt completely until the user manually restarts the Operating System",
          "Finishes the current FDE cycle, saves CPU register contents onto a stack in RAM, and loads the ISR address into the PC",
          "Abandons the current instruction immediately mid-decode and permanently resets all CPU registers back to zero",
          "Transfers the keyboard device driver from volatile RAM permanently into read-only ROM before resuming execution",
        ],
        answerIndex: 1,
        hints: [
          "Does a Von Neumann CPU ever stop halfway through a single Fetch–Decode–Execute cycle?",
          "Once the current cycle finishes, how does it remember where to resume after running the ISR?",
        ],
        explanation:
          "The CPU **always completes its current Fetch–Decode–Execute cycle** first. It then checks interrupt priority, pushes current register contents (`PC`, `ACC`, flags) onto a **stack in RAM**, runs the **ISR**, and restores the registers afterwards.",
      },
      {
        id: "software-security-ai-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "system-app-interrupts",
        question:
          "Why does an Operating System require a **device driver** whenever a new model of graphics tablet is plugged into the computer?",
        options: [
          "To convert high-voltage alternating current mains electricity into regulated +5V DC power for the USB port",
          "To act as a hardware packet-filtering firewall blocking incoming network requests on encrypted HTTPS port 443",
          "To translate generic Operating System requests into the specific binary control instructions understood by that hardware device",
          "To compress raw stylus bitmap drawings automatically using lossy JPEG compression before saving to the SSD",
        ],
        answerIndex: 2,
        hints: [
          "The OS cannot natively know the proprietary register commands of millions of different peripherals.",
          "Think of a device driver as a bilingual translator between the OS and one specific peripheral.",
        ],
        explanation:
          "A **device driver** is system software that translates generic OS input/output commands into the exact hardware-specific signals and protocols required by a peripheral device (and vice versa).",
      },
      {
        id: "software-security-ai-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "languages-translators-ide",
        question:
          "A software company has finished testing its commercial accounting package and wants to sell it to customers so it runs quickly and customers **cannot view or modify the original high-level source code**. Which translator should they use before distribution?",
        options: [
          "A compiler",
          "A prettyprinter",
          "An interpreter",
          "An assembler",
        ],
        answerIndex: 0,
        hints: [
          "The code is written in a high-level language, ruling out an assembler.",
          "Which translator produces a standalone binary executable file that runs without shipping the source code?",
        ],
        explanation:
          "A **compiler** translates the entire high-level program into a standalone machine-code **executable file**. Customers run the executable rapidly without needing a translator installed and without receiving the proprietary source code.",
      },
      {
        id: "software-security-ai-m2-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "languages-translators-ide",
        question:
          "A 200-line high-level program contains syntax errors on lines 15, 80, and 140. Contrast what happens when it is processed by a **compiler** versus an **interpreter**.",
        options: [
          "Both translators ignore syntax errors completely, execute lines 1–200 in sequence, and produce a standalone executable file anyway",
          "The compiler automatically repairs all three syntax errors before running; the interpreter skips and deletes line 15 during execution",
          "The compiler checks all 200 lines without running and reports errors on lines 15, 80, and 140; the interpreter runs lines 1–14 and halts at line 15",
          "The compiler stops at line 15 after executing lines 1–14; the interpreter scans all 200 lines and lists all three errors before running line 1",
        ],
        answerIndex: 2,
        hints: [
          "Does a compiler execute any lines before finishing translation of the entire file?",
          "What does a line-by-line interpreter do on lines 1–14 before reaching the syntax error on line 15?",
        ],
        explanation:
          "A **compiler** checks the entire source program first without executing it, producing a complete report of all syntax errors (15, 80, 140) and refusing to generate an executable. An **interpreter** translates and runs lines 1–14 one by one, then stops immediately upon hitting line 15.",
      },
      {
        id: "software-security-ai-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "languages-translators-ide",
        question:
          "During debugging inside an IDE, a programmer wants execution to pause automatically at line 42 so they can inspect the current values of `Total` and `Count` in a watch window. Which IDE feature are they setting on line 42?",
        options: [
          "Auto-completion in the code editor",
          "Firmware bootstrapping",
          "A breakpoint inside the runtime debugger",
          "Prettyprinting syntax colouration",
        ],
        answerIndex: 2,
        hints: [
          "Which runtime debugger tool deliberately pauses execution at a chosen line number so variables can be inspected?",
          "Contrast pausing execution with typing assistance (auto-completion) or formatting (prettyprinting).",
        ],
        explanation:
          "A **breakpoint** in an IDE's runtime environment/debugger pauses program execution at a designated line so the developer can inspect variable values and step forward one statement at a time.",
      },
      {
        id: "software-security-ai-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "internet-web-protocols",
        question:
          "Place the following events in the correct chronological order when a user visits `https://www.library.edu/index.html`:\n1. Web server sends encrypted HTML files to the browser\n2. Browser sends the domain name `www.library.edu` to a DNS server\n3. Browser verifies the web server's SSL/TLS digital certificate\n4. DNS server returns the matching IP address to the browser",
        options: [
          "2 → 4 → 3 → 1",
          "4 → 2 → 1 → 3",
          "2 → 1 → 4 → 3",
          "3 → 2 → 4 → 1",
        ],
        answerIndex: 0,
        hints: [
          "Can the browser contact the web server to check its SSL certificate before knowing the web server's IP address?",
          "Find the DNS lookup pair first (2 → 4), then handshake vs encrypted transfer (3 → 1).",
        ],
        explanation:
          "First the browser queries the **DNS server** with the domain name (**2**), receiving the **IP address** back (**4**). Next it initiates the HTTPS connection and **verifies the server's SSL/TLS digital certificate** (**3**), after which **encrypted HTML** is transmitted (**1**): **2 → 4 → 3 → 1**.",
      },
      {
        id: "software-security-ai-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "internet-web-protocols",
        question:
          "Which statement about **persistent cookies** is true?",
        options: [
          "They are saved on secondary storage (SSD/HDD) until expiry or manual deletion, remembering preferences and logins across visits",
          "They replace the need for DNS servers by storing the IPv4 and IPv6 addresses of every website on the World Wide Web",
          "They are stored exclusively inside volatile RAM and are automatically deleted the instant a browser tab or window closes",
          "They are standalone executable binary programs capable of self-replicating across a Local Area Network like a worm",
        ],
        answerIndex: 0,
        hints: [
          "Contrast 'session' (temporary RAM) with 'persistent' (long-term across visits).",
          "Remember that cookies are plain text data files, never executable code.",
        ],
        explanation:
          "**Persistent cookies** are small text files saved on secondary storage (**SSD/HDD**) carrying an expiry date so websites remember user preferences, language choices, and saved login usernames across separate sessions.",
      },
      {
        id: "software-security-ai-m2-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cyber-threats-encryption",
        question:
          "A user carefully types the exact, correctly spelled URL `https://www.citybank.com` directly into their browser address bar without clicking any email link, yet their browser silently loads a fake replica website controlled by criminals. Which attack has occurred?",
        options: [
          "Phishing",
          "Brute-force password guessing",
          "Adware pop-up flooding",
          "Pharming",
        ],
        answerIndex: 3,
        hints: [
          "Did the user click a link in a fake email, or was a genuine typed URL redirected automatically?",
          "Malicious code modifying the user's hosts file or poisoning a DNS server causes this redirect.",
        ],
        explanation:
          "**Pharming** uses malicious code installed on the victim's computer or on a **DNS server** to automatically redirect a genuinely typed URL to a fraudulent website — requiring **zero email clicks**.",
      },
      {
        id: "software-security-ai-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cyber-threats-encryption",
        question:
          "Many online banking portals ask users to enter random digits of their PIN by clicking buttons on an **on-screen virtual keyboard** whose number positions shuffle each visit. Which specific threat is this designed to defeat?",
        options: [
          "Spyware (specifically keyloggers) recording physical keyboard keystrokes",
          "Distributed Denial of Service (DDoS) floods from a botnet",
          "SQL injection on the bank's database server",
          "Lossy compression of bank statements",
        ],
        answerIndex: 0,
        hints: [
          "If you click shuffled on-screen buttons with a mouse instead of pressing physical keys, what data does a keystroke-recording program miss?",
          "Why are the button positions shuffled each time too?",
        ],
        explanation:
          "**Keylogging spyware** intercepts physical keyboard presses to steal passwords/PINs. Clicking a randomised **on-screen virtual keyboard** (or drop-down menus) produces zero keyboard scan codes and prevents mouse-coordinate guessing.",
      },
      {
        id: "software-security-ai-m2-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "cyber-threats-encryption",
        question:
          "Amira wants to send a confidential contract to Tariq using **asymmetric encryption** so that **only Tariq** can read the message. Which keys must be used?",
        options: [
          "Amira encrypts with Amira's public key; Tariq decrypts with Tariq's public key",
          "Amira encrypts with Amira's private key; Tariq decrypts with Amira's public key",
          "Amira encrypts with Tariq's public key; Tariq decrypts with Tariq's private key",
          "Amira encrypts with Tariq's private key; Tariq decrypts with Tariq's public key",
        ],
        answerIndex: 2,
        hints: [
          "Ask: Does Amira have access to Tariq's secret private key? Never! Only Tariq has Tariq's private key.",
          "What happened if Amira encrypted with *Amira's* private key? Anyone in the world holding Amira's public key could unlock it!",
        ],
        explanation:
          "For confidentiality, the sender (**Amira**) encrypts the plaintext using the **recipient's (Tariq's) Public Key**, which is openly available. Only **Tariq's mathematically paired Private Key** (kept secret by Tariq) can decrypt the resulting ciphertext.",
      },
      {
        id: "software-security-ai-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cyber-threats-encryption",
        question:
          "Which network component sits between client browsers and a company's main web server to **cache frequently requested web pages**, **hide internal IP addresses**, and **absorb/filter DDoS traffic floods**?",
        options: [
          "A session cookie",
          "A proxy server",
          "A floating-gate transistor",
          "An assembler",
        ],
        answerIndex: 1,
        hints: [
          "This intermediary acts on behalf of ('by proxy for') clients or web servers.",
          "Unlike a plain packet firewall, it specifically caches web pages in memory and shields web servers from DDoS request floods.",
        ],
        explanation:
          "A **proxy server** acts as a middleman between users and web servers: it caches popular web pages for faster responses, masks internal client IP addresses, enforces web filtering, and absorbs/blocks **DDoS** request floods before they hit the origin web server.",
      },
      {
        id: "software-security-ai-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cyber-threats-encryption",
        question:
          "A hospital's patient files are suddenly locked into unreadable ciphertext by malware demanding payment in cryptocurrency within 48 hours. Which malware struck, and what is the **most reliable prior preparation** allowing recovery without paying?",
        options: [
          "Trojan horse — solved by switching the hospital servers from a GUI to a CLI",
          "Adware — solved by enabling automatic prettyprinting inside an IDE editor",
          "Phishing — solved by clearing temporary session cookies stored in volatile RAM",
          "Ransomware — solved by restoring clean data from regular offline/disconnected backups",
        ],
        answerIndex: 3,
        hints: [
          "Name the malware that encrypts files and demands a ransom.",
          "Why must the backup be kept *offline* or air-gapped rather than permanently mounted as a network drive?",
        ],
        explanation:
          "**Ransomware** encrypts victim files and demands payment for the decryption key. Maintaining regular **offline (disconnected) backups** allows the hospital to wipe infected machines, patch vulnerabilities, and restore clean data without paying criminals.",
      },
      {
        id: "software-security-ai-m2-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "automated-robotics-ai",
        question:
          "In an Expert System designed to identify mineral ores for geologists, what is the difference between the **Knowledge Base** and the **Rule Base**?",
        options: [
          "The Knowledge Base displays menus on the monitor, whereas the Rule Base powers mechanical robot motors",
          "The Knowledge Base stores expert domain facts (mineral densities, hardness, crystal data), whereas the Rule Base stores conditional `IF...THEN` inference rules",
          "The Knowledge Base contains Python loops, whereas the Rule Base contains HTML tags",
          "The Knowledge Base encrypts user passwords, whereas the Rule Base resolves DNS addresses",
        ],
        answerIndex: 1,
        hints: [
          "Both are data stores queried by the Inference Engine, but one holds *facts/objects* and the other holds *logical conditions*.",
          "Look for domain facts vs `IF...THEN` statements.",
        ],
        explanation:
          "In a CIE **Expert System**, the **Knowledge Base** is a repository of domain-specific **facts** gathered from human specialists, while the **Rule Base** holds the `IF...THEN` **inference rules** that the Inference Engine applies to those facts.",
      },
      {
        id: "software-security-ai-m2-q15",
        kind: "mcq",
        difficulty: "core",
        guideRef: "automated-robotics-ai",
        question:
          "An email service deploys an AI spam detector that analyses millions of messages marked 'spam' or 'not spam' by users, gradually improving its accuracy on brand-new scam formats **without programmers rewriting its rules**. Which branch of AI is this?",
        options: [
          "Symmetric key exchange",
          "Assembly mnemonic translation",
          "A static rule-only Expert System with no learning capability",
          "Machine Learning",
        ],
        answerIndex: 3,
        hints: [
          "Which subset of AI trains on large datasets and automatically adapts its own internal model/weights from experience?",
          "Contrast fixed human-coded `IF...THEN` rules against self-adapting statistical models.",
        ],
        explanation:
          "**Machine Learning (ML)** uses algorithms trained on data so the system **automatically adapts its own processes/models from experience** to improve performance over time without explicit reprogramming.",
      },
    ],
  },
  {
    id: "software-security-ai-m3",
    title: "Software, Cyber Security & AI — MCQ Paper 3 (Exam Scenarios & Mark-Scheme Traps)",
    questions: [
      {
        id: "software-security-ai-m3-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "system-app-interrupts",
        question:
          "Four programs are open simultaneously on a single-core laptop: a music player, a code editor, an anti-virus scan, and a web browser. How does the Operating System achieve **multitasking** on that single CPU core?",
        options: [
          "It loads and runs all four applications simultaneously inside non-volatile ROM without allocating any primary RAM",
          "It compiles all four open applications into a single combined HTML document that executes in one browser thread",
          "It rapidly switches the CPU between processes using short time slices prioritized by the scheduler, creating the illusion of simultaneous execution",
          "It physically divides the single silicon Arithmetic Logic Unit into four independent hardware sub-cores on demand",
        ],
        answerIndex: 2,
        hints: [
          "A single Von Neumann core can only execute one instruction at any exact nanosecond.",
          "How does time-slicing make four apps feel simultaneous to a human?",
        ],
        explanation:
          "In **multitasking**, the OS scheduler allocates tiny **CPU time slices** to each process in RAM according to priority, switching context thousands of times per second so all four programs appear to run concurrently.",
      },
      {
        id: "software-security-ai-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "system-app-interrupts",
        question:
          "While the CPU is already executing the **Interrupt Service Routine (ISR)** for a mouse movement (low priority), a critical **power-supply failure interrupt** (very high priority) arrives. What happens in a priority-driven interrupt system?",
        options: [
          "After the current FDE cycle, the CPU pushes the mouse ISR's registers onto the stack, runs the power ISR first, then pops back to finish",
          "Both hardware interrupts cancel each other out on the control bus and immediately force a cold reboot into the ROM BIOS",
          "The power-supply interrupt is permanently discarded because only one interrupt signal can ever be queued inside RAM at once",
          "The lower-priority mouse ISR must finish every remaining buffered peripheral task before any higher-priority interrupt is checked",
        ],
        answerIndex: 0,
        hints: [
          "Why are saved register states stored on a Last-In-First-Out **stack** in RAM rather than a single fixed slot?",
          "Compare the priority of a critical power failure against a routine mouse movement.",
        ],
        explanation:
          "Because saved registers use a **stack**, **nested interrupts** work cleanly: when a higher-priority interrupt arrives, the CPU finishes its current FDE cycle, pushes the lower-priority ISR's registers onto the stack, executes the urgent ISR, and then pops states in reverse order.",
      },
      {
        id: "software-security-ai-m3-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "system-app-interrupts",
        question:
          "Which Operating System management task specifically prevents **Program X** from accidentally reading or overwriting the RAM addresses currently allocated to **Program Y**?",
        options: [
          "Optical disc defragmentation",
          "Memory management",
          "Domain Name System resolution",
          "Prettyprinting",
        ],
        answerIndex: 1,
        hints: [
          "Which OS function tracks which blocks of primary memory belong to each active process?",
          "Isolating process address spaces prevents crashes and security leaks.",
        ],
        explanation:
          "OS **memory management** allocates and tracks separate RAM partitions/pages for each running process and enforces memory protection boundaries so one process cannot overwrite another's data.",
      },
      {
        id: "software-security-ai-m3-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "languages-translators-ide",
        question:
          "Which feature of an IDE underlines `prnit(\"Hello\")` in red with a syntax warning **while the programmer is still typing**, before they even click 'Run'?",
        options: [
          "Asymmetric public-key decryption",
          "Assembler mnemonic opcode mapping",
          "Session cookie browser caching",
          "Dynamic syntax checking / error diagnostics",
        ],
        answerIndex: 3,
        hints: [
          "Look at the 7 CIE IDE features: which one detects and highlights syntax mistakes in real time?",
          "Note that `prnit` was flagged as an unrecognised identifier rather than silently rewritten.",
        ],
        explanation:
          "**Error diagnostics** (dynamic syntax checking) in an IDE continuously analyses code as it is typed, highlighting syntax errors and undeclared identifiers with line numbers before translation.",
      },
      {
        id: "software-security-ai-m3-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "languages-translators-ide",
        question:
          "Why is **High-Level Language** code described as **portable**, whereas **Assembly Language** code is **not portable**?",
        options: [
          "High-level source files are always smaller than 1 byte so they fit easily on portable USB flash drives",
          "High-level source code executes directly inside any CPU's ALU hardware with zero compiler or interpreter translation",
          "Assembly source files can only be stored on stationary magnetic hard drives and cannot be copied onto portable SSDs",
          "High-level code is abstracted from hardware for different CPUs, whereas Assembly maps directly to one CPU architecture's instruction set",
        ],
        answerIndex: 3,
        hints: [
          "Think about an Intel x86 laptop CPU versus an ARM smartphone CPU — do they share the same binary instruction set and registers?",
          "Why can the same Python or C program run on both once re-translated?",
        ],
        explanation:
          "**High-level languages** are **machine-independent (portable)**: the same source code runs on x86, ARM, or RISC-V processors using a matching compiler/interpreter. **Assembly language** is tied 1-to-1 to one processor family's specific registers and instruction set.",
      },
      {
        id: "software-security-ai-m3-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "internet-web-protocols",
        question:
          "During an **HTTPS (SSL/TLS)** handshake between a user's browser and an online store's web server, what does the web server send to prove its identity, and what key is inside it?",
        options: [
          "An ARP broadcast containing the browser's MAC address",
          "A digital certificate (signed by a Certificate Authority) containing the web server's public key",
          "A persistent cookie containing the user's home Wi-Fi password",
          "A Python interpreter containing the server's private key",
        ],
        answerIndex: 1,
        hints: [
          "Would a web server EVER transmit its secret *private* key across the Internet? Never!",
          "What official electronic document binds a domain name to a server's public key?",
        ],
        explanation:
          "In SSL/TLS, the web server sends its **digital certificate**, digitally signed by a trusted Certificate Authority and containing the server's **public key**. The browser verifies the certificate's authenticity and uses it to safely establish encrypted session keys.",
      },
      {
        id: "software-security-ai-m3-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "internet-web-protocols",
        question:
          "A student says: *'A web browser's main job is to store all the world's websites on your laptop's hard drive.'* Which correction accurately states the main function of a **web browser**?",
        options: [
          "It acts as the physical undersea fibre-optic cable infrastructure linking web servers across continents",
          "It samples continuous analogue microphone sound waves and quantises them into digital binary audio files",
          "It requests web resources from remote web servers via HTTP/HTTPS and interprets/renders HTML to display web pages on screen",
          "It translates low-level assembly mnemonics one-to-one into binary machine code for the laptop's processor",
        ],
        answerIndex: 2,
        hints: [
          "Web servers host websites; what software on the client computer fetches and displays them?",
          "Look for HTTP/HTTPS retrieval plus interpreting/rendering HTML onto the screen.",
        ],
        explanation:
          "A **web browser** retrieves web pages from web servers using HTTP/HTTPS and **renders HTML** (alongside CSS/scripts) into visual pages, while managing tabs, history, bookmarks, and cookies.",
      },
      {
        id: "software-security-ai-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cyber-threats-encryption",
        question:
          "A user downloads a free 'PDF Wallpaper Pack' from an untrusted forum. The wallpaper app appears to work normally, does **not** copy itself to other files, yet secretly opens a backdoor allowing a remote attacker access to the PC. Which type of malware is this?",
        options: [
          "A worm",
          "A Trojan horse",
          "A session cookie",
          "A parity check",
        ],
        answerIndex: 1,
        hints: [
          "Notice two clues: it disguised itself as useful/legitimate software, and it does *not* self-replicate.",
          "Think of the wooden horse of Troy!",
        ],
        explanation:
          "A **Trojan horse** disguises itself as legitimate, desirable software to trick the user into installing it, does not self-replicate, and secretly carries a malicious payload such as a remote-access backdoor or spyware.",
      },
      {
        id: "software-security-ai-m3-q09",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cyber-threats-encryption",
        question:
          "An attacker calls a company helpdesk pretending to be the Chief Financial Officer rushing to catch a flight, pressuring a junior clerk into resetting an admin password over the phone. Which umbrella cyber threat category does this attack exemplify?",
        options: [
          "Packet switching",
          "Social engineering",
          "Symmetric encryption",
          "Disk thrashing",
        ],
        answerIndex: 1,
        hints: [
          "No code exploit was used here — the attacker manipulated human emotions (authority + urgency).",
          "What CIE term describes manipulating people into breaking security procedures or divulging confidential info?",
        ],
        explanation:
          "**Social engineering** exploits human psychology — such as authority, urgency, fear, trust, or curiosity — to manipulate victims into revealing confidential credentials or bypassing security controls.",
      },
      {
        id: "software-security-ai-m3-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cyber-threats-encryption",
        question:
          "Which combination represents true **Two-Factor Authentication (2FA)**?",
        options: [
          "Entering a secret password (something you know) plus a one-time phone code or fingerprint (something you have or are)",
          "Validating that a newly created account password contains at least 12 characters using an automated length check",
          "Entering a public username followed by entering two separate secret text passwords recalled purely from memory",
          "Typing the exact same text password twice into two boxes during account registration for double-entry verification",
        ],
        answerIndex: 0,
        hints: [
          "Two passwords are just two items from the *same* category ('something you know').",
          "Double entry is verification, and length check is validation — what requires two *independent* authentication categories?",
        ],
        explanation:
          "**Two-Factor Authentication (2FA)** requires evidence from **two distinct factor categories**: something you **know** (password/PIN), something you **have** (phone/authenticator token receiving a one-time code), or something you **are** (**biometrics** like a fingerprint).",
      },
      {
        id: "software-security-ai-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "cyber-threats-encryption",
        question:
          "Why is **symmetric encryption** vulnerable when two strangers communicate over the Internet for the first time, and how does **asymmetric encryption** solve that exact weakness?",
        options: [
          "Symmetric uses one shared secret key that can be intercepted in transit; asymmetric encrypts with a public key so the private key never travels",
          "Symmetric encryption requires a physical robotic actuator to scramble data; asymmetric encryption relies solely on a high-level compiler",
          "Symmetric encryption can only scramble alphabetic text strings; asymmetric encryption is restricted strictly to integer numbers",
          "Symmetric encryption keys expire after encrypting a single byte; asymmetric public and private keys are stored inside RAM session cookies",
        ],
        answerIndex: 0,
        hints: [
          "Identify the 'key-exchange problem' of symmetric encryption.",
          "In asymmetric encryption, does the decryption key (the private key) ever leave its owner's device?",
        ],
        explanation:
          "**Symmetric encryption** uses the same key to encrypt and decrypt, so sending that secret key over an untrusted network lets an eavesdropper steal it (**key-exchange problem**). **Asymmetric encryption** shares only the **Public Key** while the **Private Key** never leaves the recipient.",
      },
      {
        id: "software-security-ai-m3-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "cyber-threats-encryption",
        question:
          "How does a **firewall** protect a school's Local Area Network (LAN) connected to the Internet?",
        options: [
          "It converts continuous analogue light-sensor readings from school corridors into digital temperature values via an ADC",
          "It translates high-level Python scripts written by students into standalone binary machine-code executables for the LAN",
          "It monitors server rack temperatures and physically cools overheated network CPUs using liquid cooling fans",
          "It inspects incoming and outgoing network packets against security rules/criteria and blocks unauthorised traffic, ports, or blocklisted IP addresses",
        ],
        answerIndex: 3,
        hints: [
          "Think of a security checkpoint examining traffic in *both* directions between the internal LAN and the external Internet.",
          "It compares packet headers/ports against preset criteria and blocks unauthorized or blocklisted IPs.",
        ],
        explanation:
          "A **firewall** (hardware or software) monitors **incoming and outgoing traffic**, checks packets against preset rules/criteria (ports, protocols, IP allowlists/blocklists), blocks unauthorised connections, and logs attempts.",
      },
      {
        id: "software-security-ai-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "automated-robotics-ai",
        question:
          "Compare a **surgeon-guided robotic surgical arm** in an operating theatre with an **autonomous Mars rover** navigating craters on its own. How does CIE 0478 classify these two robots?",
        options: [
          "The surgical arm is an independent autonomous robot; the Mars rover is classified as a dependent human-guided robot",
          "Neither machine can be programmed with computer software, so neither device meets the CIE definition of a robot",
          "The surgical arm is a dependent robot (human-guided); the Mars rover is an independent/autonomous robot (no direct human control)",
          "Both machines are pure cloud-based Expert Systems running software rules with no physical mechanical frameworks",
        ],
        answerIndex: 2,
        hints: [
          "Which robot relies on continuous direct human guidance/interaction, and which makes decisions autonomously via sensors?",
          "CIE 0478 contrasts `dependent` robots (human-guided/interfaced) with `independent` (autonomous) robots.",
        ],
        explanation:
          "A **dependent robot** interfaces directly with and supplements a human operator (such as a surgeon guiding a precision surgical robot), whereas an **independent (autonomous) robot** operates without direct human intervention using sensors and onboard control.",
      },
      {
        id: "software-security-ai-m3-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "automated-robotics-ai",
        question:
          "An automated car-manufacturing paint booth uses robotic arms 24 hours a day instead of human spray-painters. Which option correctly pairs **one valid advantage** and **one valid disadvantage** for the manufacturer?",
        options: [
          "Advantage: robotic arms require zero electrical power to run; Disadvantage: human workers are exposed to more toxic paint fumes",
          "Advantage: factory robots autonomously invent brand-new car designs unprompted; Disadvantage: paint takes much longer to dry",
          "Advantage: consistent 24/7 precision while keeping humans out of toxic fumes; Disadvantage: high initial setup and maintenance cost",
          "Advantage: zero initial purchase or installation cost for the factory; Disadvantage: robotic arms suffer fatigue after two hours",
        ],
        answerIndex: 2,
        hints: [
          "Think of CIE's standard balanced evaluation of industrial robotics: quality/safety/endurance vs setup cost/maintenance/flexibility.",
          "Eliminate false claims like zero purchase cost, robots getting tired, or zero electricity.",
        ],
        explanation:
          "Industrial robots deliver **consistent, tireless 24/7 precision** and remove humans from **hazardous environments** (toxic paint vapour), balanced against **expensive initial purchase/installation** and **specialist maintenance**.",
      },
      {
        id: "software-security-ai-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "automated-robotics-ai",
        question:
          "A bank uses an AI fraud detector that flags unusual credit-card transactions in milliseconds. Over six months, fraudsters invent new spending patterns, and the AI updates its internal weights from newly labelled fraud cases so detection stays accurate **without engineers writing new `IF...THEN` rules**. Why is this **Machine Learning** rather than a traditional static **Expert System**?",
        options: [
          "Machine Learning adapts its own models from training data and experience, whereas a static Expert System relies on fixed human-coded rules",
          "Machine Learning executes completely without electrical components or processors, whereas Expert Systems require multi-core CPUs",
          "Expert Systems can only be implemented using low-level assembly mnemonics, whereas Machine Learning runs directly on raw HTML",
          "Expert Systems cannot store domain facts in a Knowledge Base or interact with bank staff through a User Interface",
        ],
        answerIndex: 0,
        hints: [
          "How does a traditional Expert System get new rules? A human knowledge engineer must manually edit the Rule Base.",
          "How does Machine Learning improve when fed new labelled examples?",
        ],
        explanation:
          "The defining mark-scheme feature of **Machine Learning** is its ability to **automatically adapt its own models/processes from training data (experience)** to improve performance without explicit reprogramming, whereas a traditional **Expert System** only knows the static facts and `IF...THEN` rules entered into its Knowledge Base and Rule Base.",
      },
    ],
  },
];
