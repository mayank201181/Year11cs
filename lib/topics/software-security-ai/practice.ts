import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  quiz: [
    {
      id: "software-security-ai-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      guideRef: "system-app-interrupts",
      question:
        "Which type of software translates generic Operating System input/output commands into specific instructions understood by a newly connected laser printer?",
      options: [
        "Device driver",
        "Session cookie",
        "Spreadsheet application",
        "Inference engine",
      ],
      answerIndex: 0,
      hints: [
        "Every hardware peripheral needs this system-software translator to communicate with the OS.",
      ],
      explanation:
        "A **device driver** is system software enabling the Operating System to communicate with and control a specific hardware peripheral such as a printer.",
    },
    {
      id: "software-security-ai-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      guideRef: "system-app-interrupts",
      question:
        "Give the 3-letter abbreviation (or full name) of the routine executed by the CPU to handle a hardware or software interrupt after saving current register contents to the stack.",
      answer: {
        type: "text",
        accept: ["ISR", "Interrupt Service Routine", "interrupt handler"],
        display: "ISR (Interrupt Service Routine)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["MAR", "MDR", "CIR"] },
          feedback: "MAR, MDR, and CIR are CPU registers — what is the software routine that services the interrupt?",
        },
      ],
      hints: [
        "It stands for Interrupt Service R______.",
      ],
      solution: [
        "After finishing the current FDE cycle and pushing registers onto the RAM stack, the CPU loads the **Interrupt Service Routine (ISR)** into the Program Counter.",
      ],
      commonError: "Confusing CPU register names (like CIR or MAR) with the Interrupt Service Routine (ISR).",
    },
    {
      id: "software-security-ai-quiz-q03",
      kind: "short",
      difficulty: "core",
      guideRef: "languages-translators-ide",
      question:
        "Name the specific type of language translator that converts **Assembly Language** mnemonics (such as `LDA` and `ADD`) into binary machine code.",
      answer: {
        type: "text",
        accept: ["assembler", "an assembler"],
        display: "Assembler",
      },
      traps: [
        {
          spec: { type: "text", accept: ["compiler"] },
          feedback: "A compiler translates high-level languages — Assembly language uses its own dedicated translator!",
        },
        {
          spec: { type: "text", accept: ["interpreter"] },
          feedback: "An interpreter translates high-level languages line by line — Assembly language uses an assembler.",
        },
      ],
      hints: [
        "Compilers and interpreters translate High-Level Languages; which translator matches Assembly Language?",
        "Its name comes directly from the word 'Assembly'.",
      ],
      solution: [
        "Assembly language uses low-level mnemonics and is translated 1-to-1 into machine code by an **assembler**.",
      ],
      commonError: "Writing 'compiler' instead of 'assembler' for low-level assembly mnemonics.",
    },
    {
      id: "software-security-ai-quiz-q04",
      kind: "mcq",
      difficulty: "core",
      guideRef: "languages-translators-ide",
      question:
        "Which statement is true of an **interpreter** but **NOT** true of a **compiler**?",
      options: [
        "It produces a standalone binary executable file that runs without the translator installed",
        "It translates and executes source code line by line, stopping immediately when it encounters the first error",
        "It translates low-level binary opcodes back into English prose",
        "It hides the original high-level source code when software is sold to customers",
      ],
      answerIndex: 1,
      hints: [
        "Think about why programmers love using an interpreter while actively debugging.",
        "Which translator stops on the exact line of the first bug without creating a `.exe` file?",
      ],
      explanation:
        "An **interpreter** translates and runs high-level code **statement by statement**, halting at the first error and producing no standalone executable. Producing standalone executables that hide source code is the job of a **compiler**.",
    },
    {
      id: "software-security-ai-quiz-q05",
      kind: "short",
      difficulty: "warmup",
      guideRef: "internet-web-protocols",
      question:
        "What is the 3-letter acronym (or full name) of the Internet service whose servers translate human-readable domain names (like `www.school.edu`) into numerical IP addresses?",
      answer: {
        type: "text",
        accept: ["DNS", "Domain Name System", "Domain Name Server"],
        display: "DNS (Domain Name System)",
      },
      traps: [
        {
          spec: { type: "text", accept: ["URL"] },
          feedback: "URL is the web address typed into the browser — which server system looks up the domain's IP address?",
        },
        {
          spec: { type: "text", accept: ["ISP"] },
          feedback: "ISP is your Internet Service Provider — the lookup database service itself is DNS (Domain Name System).",
        },
      ],
      hints: [
        "Stands for Domain Name S______.",
      ],
      solution: [
        "A **DNS (Domain Name System)** server maintains a database mapping domain names to their corresponding IP addresses.",
      ],
      commonError: "Writing URL or HTTP instead of DNS (Domain Name System).",
    },
    {
      id: "software-security-ai-quiz-q06",
      kind: "short",
      difficulty: "core",
      guideRef: "internet-web-protocols",
      question:
        "Which type of cookie (`session` or `persistent`) is stored in temporary RAM and automatically deleted as soon as the user closes their web browser?",
      answer: {
        type: "text",
        accept: ["session", "session cookie", "session cookies"],
        display: "Session cookie",
      },
      traps: [
        {
          spec: { type: "text", accept: ["persistent", "persistent cookie", "permanent", "permanent cookie"] },
          feedback: "Persistent cookies are saved on secondary storage (SSD/HDD) and survive closing the browser!",
        },
      ],
      hints: [
        "Compare temporary single-visit memory (RAM) with long-term disk storage across visits.",
        "Choose between `session` and `persistent`.",
      ],
      solution: [
        "**Session cookies** live only in volatile **RAM** for the duration of an active browsing session and vanish when the browser closes.",
      ],
      commonError: "Confusing session cookies (RAM, deleted on close) with persistent cookies (SSD/HDD, retained until expiry).",
    },
    {
      id: "software-security-ai-quiz-q07",
      kind: "short",
      difficulty: "core",
      guideRef: "cyber-threats-encryption",
      question:
        "Name the specific type of malware that **encrypts** a victim's files on their drive and demands a sum of money in exchange for the decryption key.",
      answer: {
        type: "text",
        accept: ["ransomware"],
        display: "Ransomware",
      },
      traps: [
        {
          spec: { type: "text", accept: ["spyware", "keylogger"] },
          feedback: "Spyware secretly monitors user activity/keystrokes — malware that locks files and demands payment is ransomware!",
        },
        {
          spec: { type: "text", accept: ["adware"] },
          feedback: "Adware displays unwanted pop-up adverts rather than encrypting files for a ransom.",
        },
      ],
      hints: [
        "Its name comes from holding your encrypted data hostage for a financial payment.",
        "One word ending in `-ware`.",
      ],
      solution: [
        "**Ransomware** scrambles victim files into unreadable ciphertext and demands a ransom payment for the decryption key.",
      ],
      commonError: "Writing generic 'malware' or 'virus' when the question describes encrypting files for a ransom.",
    },
    {
      id: "software-security-ai-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      guideRef: "cyber-threats-encryption",
      question:
        "Leo wants to send a secret design blueprint to Maya using **asymmetric encryption**. Which key must Leo use to **encrypt** the blueprint so that only Maya can read it?",
      options: [
        "Leo's private key",
        "Leo's public key",
        "Maya's public key",
        "Maya's private key",
      ],
      answerIndex: 2,
      hints: [
        "Maya never shares her secret private key with anyone — not even Leo!",
        "Which key belonging to Maya is published openly so anyone can lock messages exclusively for Maya?",
      ],
      explanation:
        "Leo encrypts the plaintext using **Maya's Public Key** (openly available). Only **Maya's matching Private Key** can decrypt the ciphertext.",
    },
    {
      id: "software-security-ai-quiz-q09",
      kind: "short",
      difficulty: "core",
      guideRef: "automated-robotics-ai",
      question:
        "In an AI Expert System, which two-word component stores the conditional `IF ... THEN ...` logical statements used by the inference engine?",
      answer: {
        type: "text",
        accept: ["rule base", "the rule base"],
        display: "Rule base",
      },
      traps: [
        {
          spec: { type: "text", accept: ["knowledge base", "the knowledge base"] },
          feedback: "The knowledge base stores domain facts/objects — conditional IF...THEN statements live in the rule base!",
        },
        {
          spec: { type: "text", accept: ["inference engine"] },
          feedback: "The inference engine *applies* the IF...THEN rules, whereas the store holding those rules is the rule base.",
        },
      ],
      hints: [
        "Recall the four Expert System parts: User Interface, Inference Engine, Knowledge Base, and R___ B___.",
        "`IF ... THEN ...` statements are logical inference *rules*.",
      ],
      solution: [
        "Conditional `IF ... THEN ...` inference statements are stored in the **Rule Base**, while domain facts sit in the **Knowledge Base**.",
      ],
      commonError: "Mixing up the Knowledge Base (facts) with the Rule Base (IF...THEN rules).",
    },
    {
      id: "software-security-ai-quiz-q10",
      kind: "written",
      difficulty: "core",
      guideRef: "cyber-threats-encryption",
      marks: 2,
      question:
        "Explain why encrypting data on a corporate network does **not** stop a cybercriminal from intercepting packets, yet still protects confidentiality. [2]",
      modelAnswer:
        "Packet sniffers can still capture the transmitted data packets in transit, but encryption scrambles the plaintext into unreadable ciphertext that cannot be understood without the secret decryption key.",
      markScheme: [
        {
          point: "Data packets can still be captured / stolen / intercepted during transmission",
          keywords: ["capture", "captured", "still", "sniff", "sniffer", "stolen"],
        },
        {
          point: "Scrambles plaintext into unreadable/meaningless ciphertext unless the attacker has the decryption key",
          keywords: ["ciphertext", "unreadable", "meaningless", "decryption key", "understood"],
        },
      ],
      hints: [
        "State clearly what happens on the wire/Wi-Fi first: can packets still be captured?",
        "Then use the exact CIE terms `plaintext`, `ciphertext`, and `decryption key`.",
      ],
      commonError: "Claiming encryption blocks hackers or packet sniffers from capturing packets off the network.",
    },
  ],

  papers: [
    {
      id: "software-security-ai-p1",
      title: "Paper 1 Practice Set A — OS, Translators, Web Protocols & Defences",
      questions: [
        {
          id: "software-security-ai-p1-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "system-app-interrupts",
          question:
            "State the generic category of software (`system software` or `application software`) that includes operating systems, utility programs, and device drivers.",
          answer: {
            type: "text",
            accept: ["system software", "system"],
            display: "System software",
          },
          traps: [
            {
              spec: { type: "text", accept: ["application software", "application"] },
              feedback: "Application software performs end-user tasks (like word processing); OS, utilities, and drivers manage hardware as system software.",
            },
          ],
          hints: [
            "Does this software manage the computer's hardware or perform end-user document tasks?",
          ],
          solution: [
            "Operating systems, utility programs, translators, and device drivers manage hardware resources, so they belong to **system software**.",
          ],
          commonError: "Classifying anti-virus or backup utilities as application software instead of system software.",
        },
        {
          id: "software-security-ai-p1-q02",
          kind: "short",
          difficulty: "warmup",
          guideRef: "system-app-interrupts",
          question:
            "What single CIE term describes the non-volatile startup software (such as BIOS or UEFI bootloader) stored permanently in ROM that loads the Operating System into RAM?",
          answer: {
            type: "text",
            accept: ["firmware", "bootloader", "bootstrap", "bootstrap loader", "BIOS", "UEFI"],
            display: "Firmware (BIOS / bootloader)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["freeware", "shareware", "malware"] },
              feedback: "Check the prefix: software permanently etched into ROM hardware chips is called *firmware*!",
            },
          ],
          hints: [
            "Sits halfway between 'hardware' and 'software' inside non-volatile ROM.",
          ],
          solution: [
            "**Firmware** (specifically the BIOS/UEFI **bootstrap loader**) resides in non-volatile ROM to initialise hardware and load the OS kernel into RAM.",
          ],
          commonError: "Confusing firmware with freeware or claiming the full OS lives permanently inside ROM on a desktop PC.",
        },
        {
          id: "software-security-ai-p1-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "system-app-interrupts",
          question:
            "Classify the following event as either a `hardware` interrupt or a `software` interrupt: *a running program attempts to divide a number by zero*. Give a one-word answer (`hardware` or `software`).",
          answer: {
            type: "text",
            accept: ["software", "software interrupt"],
            display: "Software",
          },
          traps: [
            {
              spec: { type: "text", accept: ["hardware", "hardware interrupt"] },
              feedback: "Hardware interrupts come from physical peripherals (keyboard press, printer paper jam); division-by-zero comes from executing instructions!",
            },
          ],
          hints: [
            "Did an external peripheral trigger this signal, or did an arithmetic instruction inside a running program cause it?",
            "Choose between `hardware` and `software`.",
          ],
          solution: [
            "Division by zero is generated by an executing program instruction rather than an external device, so it is a **software** interrupt.",
          ],
          commonError: "Assuming ALU arithmetic exceptions are hardware interrupts.",
        },
        {
          id: "software-security-ai-p1-q04",
          kind: "written",
          difficulty: "core",
          guideRef: "system-app-interrupts",
          marks: 4,
          question:
            "A user presses keys on a keyboard while a spreadsheet is recalculating. Describe step-by-step how the microprocessor uses an interrupt mechanism to process the keystrokes and return to the spreadsheet. [4]",
          modelAnswer:
            "1. The CPU finishes its current Fetch-Decode-Execute cycle and checks the priority of the incoming interrupt in the interrupt queue.\n2. Because the interrupt has higher priority, the current contents of CPU registers (such as PC and ACC) are saved onto a stack in RAM.\n3. The address of the keyboard Interrupt Service Routine (ISR) is loaded into the Program Counter and executed to read the keystroke.\n4. Once the ISR finishes, the saved register values are restored from the stack so the CPU resumes executing the interrupted task.",
          markScheme: [
            {
              point: "CPU completes its current Fetch–Decode–Execute (FDE) cycle and checks interrupt priority",
              keywords: ["current", "fde", "fetch", "priority"],
            },
            {
              point: "Saves current contents of CPU registers (PC / ACC) onto a stack in memory (RAM)",
              keywords: ["registers", "stack", "pc", "saved"],
            },
            {
              point: "Loads and executes the Interrupt Service Routine (ISR)",
              keywords: ["isr", "interrupt service routine", "service routine"],
            },
            {
              point: "Restores saved register contents from the stack to resume the original task",
              keywords: ["restored", "restore", "resume", "resumes"],
            },
          ],
          hints: [
            "Never say the CPU halts mid-instruction — state what cycle finishes first and what priority check happens!",
            "Name where `PC` and `ACC` are saved, name the `ISR`, and state how registers are restored at the end.",
          ],
          commonError: "Omitting 'finishes the current FDE cycle' or forgetting to save and restore CPU registers via the stack.",
        },
        {
          id: "software-security-ai-p1-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "languages-translators-ide",
          question:
            "What single CIE term names the short, human-readable instruction codes (such as `INP`, `LDA`, `ADD`, `STO`) used in **Assembly Language**?",
          answer: {
            type: "text",
            accept: ["mnemonics", "mnemonic"],
            display: "Mnemonics",
          },
          traps: [
            {
              spec: { type: "text", accept: ["opcodes", "binary"] },
              feedback: "Machine code uses raw binary opcodes; Assembly represents them with short alphabetical memory-aid codes called *mnemonics*!",
            },
          ],
          hints: [
            "Starts with silent letter sequence `mn...` (meaning memory-aid abbreviation).",
            "Examples include `LDA` for Load Accumulator and `STO` for Store.",
          ],
          solution: [
            "Assembly language replaces raw binary opcodes with short alphabetical **mnemonics** such as `LDA`, `ADD`, and `STO`.",
          ],
          commonError: "Misspelling 'mnemonics' beyond recognition or writing 'variables'.",
        },
        {
          id: "software-security-ai-p1-q06",
          kind: "short",
          difficulty: "warmup",
          guideRef: "languages-translators-ide",
          question:
            "Name the IDE feature that applies **colour-coding** to reserved keywords/strings and **automatic indentation** to make source code visually clear.",
          answer: {
            type: "text",
            accept: ["prettyprinting", "pretty printing", "prettyprint", "pretty-printing"],
            display: "Prettyprinting",
          },
          traps: [
            {
              spec: { type: "text", accept: ["auto-completion", "autocompletion"] },
              feedback: "Auto-completion suggests variable/function names and closes brackets — colour-coding and auto-indentation is *prettyprinting*!",
            },
          ],
          hints: [
            "One compound word on the CIE 0478 syllabus containing 'pretty' and 'printing'.",
          ],
          solution: [
            "**Prettyprinting** formats code inside an IDE editor using syntax colour-coding and automatic indentation.",
          ],
          commonError: "Thinking prettyprinting prints pages on a physical printer.",
        },
        {
          id: "software-security-ai-p1-q07",
          kind: "written",
          difficulty: "core",
          guideRef: "languages-translators-ide",
          marks: 4,
          question:
            "A developer uses an **interpreter** while writing a game in Python, then uses a **compiler** before selling the finished game. Explain two advantages of using the interpreter during development and two advantages of compiling before release. [4]",
          modelAnswer:
            "Interpreter during development: 1) Translates and executes line by line, stopping immediately at the first error so bugs are easy to locate and fix. 2) Edits can be tested straight away without waiting to recompile the whole program.\nCompiler for release: 3) Produces a standalone executable file in machine code that executes much faster without needing a translator installed on the customer's PC. 4) Customers do not receive the original source code, protecting intellectual property from copying or modification.",
          markScheme: [
            {
              point: "Interpreter executes line by line and stops at the first error, making debugging easier",
              keywords: ["line by line", "first error", "debugging", "stops"],
            },
            {
              point: "Interpreter runs edits immediately without recompiling the whole program each test",
              keywords: ["immediately", "recompil", "whole program"],
            },
            {
              point: "Compiler produces a standalone machine-code executable that runs faster without needing the translator installed",
              keywords: ["executable", "standalone", "runs faster", "executes faster", "installed"],
            },
            {
              point: "Compiler hides/protects original source code so customers cannot view or edit it",
              keywords: ["source code", "protect", "hides", "modify", "view"],
            },
          ],
          hints: [
            "Give two distinct debugging/speed-of-iteration wins for the interpreter first.",
            "Then give two commercial distribution wins (standalone fast executable + hidden source code) for the compiler.",
          ],
          commonError: "Giving vague claims like 'compiler is better' without mentioning standalone executables, speed, line-by-line halting, or hidden source code.",
        },
        {
          id: "software-security-ai-p1-q08",
          kind: "short",
          difficulty: "warmup",
          guideRef: "internet-web-protocols",
          question:
            "In the URL `https://www.weather-lab.org/asia/singapore.html`, write down **only the protocol** (without `://`).",
          answer: {
            type: "text",
            accept: ["https", "https://"],
            display: "https",
          },
          traps: [
            {
              spec: { type: "text", accept: ["www.weather-lab.org"] },
              feedback: "`www.weather-lab.org` is the domain name — the protocol sits right at the start before `://`!",
            },
          ],
          hints: [
            "A URL has the form `protocol://domain_name/path`.",
          ],
          solution: [
            "Before `://` sits `https` (Hypertext Transfer Protocol Secure), which is the **protocol**.",
          ],
          commonError: "Writing the domain name instead of `https`.",
        },
        {
          id: "software-security-ai-p1-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "internet-web-protocols",
          question:
            "What 4-letter markup language is interpreted and rendered by a web browser to structure and display web pages on screen?",
          answer: {
            type: "text",
            accept: ["HTML", "Hypertext Markup Language"],
            display: "HTML",
          },
          traps: [
            {
              spec: { type: "text", accept: ["HTTP", "HTTPS"] },
              feedback: "HTTP/HTTPS is the transfer *protocol* over the network — the page markup language itself is **HTML**!",
            },
          ],
          hints: [
            "Don't confuse the transfer protocol (`HTTP`) with the page markup language (`H___`).",
            "Stands for Hypertext Markup Language.",
          ],
          solution: [
            "Web servers transmit **HTML (Hypertext Markup Language)** documents, which the web browser parses and renders visually.",
          ],
          commonError: "Confusing HTTP (communication protocol) with HTML (markup language rendered by the browser).",
        },
        {
          id: "software-security-ai-p1-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "cyber-threats-encryption",
          question:
            "Name the cyber attack in which thousands of malware-infected computers ('bots' in a botnet) flood a target web server with simultaneous requests so legitimate users cannot access it. Give the 4-letter acronym or full name.",
          answer: {
            type: "text",
            accept: ["DDoS", "DDoS attack", "Distributed Denial of Service", "Distributed Denial of Service attack"],
            display: "DDoS (Distributed Denial of Service)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["brute force", "brute-force", "brute force attack"] },
              feedback: "Brute force guesses passwords — flooding a server from a distributed botnet to block genuine users is **DDoS**!",
            },
          ],
          hints: [
            "Because requests come from *many* infected zombie machines at once, it is *Distributed*...",
            "4-letter acronym starting with `DD`.",
          ],
          solution: [
            "Flooding a web server simultaneously from a distributed botnet of infected computers is a **DDoS (Distributed Denial of Service)** attack.",
          ],
          commonError: "Forgetting the first 'D' (*Distributed*) when a botnet of multiple machines attacks simultaneously.",
        },
        {
          id: "software-security-ai-p1-q11",
          kind: "short",
          difficulty: "core",
          guideRef: "cyber-threats-encryption",
          question:
            "Which network intermediary sits in front of a web server to cache frequently visited pages and **filter/absorb DDoS traffic** before it reaches the web server?",
          answer: {
            type: "text",
            accept: ["proxy server", "proxy", "a proxy server"],
            display: "Proxy server",
          },
          traps: [
            {
              spec: { type: "text", accept: ["DNS server", "DNS"] },
              feedback: "A DNS server translates domain names to IP addresses — caching web pages and absorbing DDoS floods is the job of a *proxy server*!",
            },
          ],
          hints: [
            "Two words: `_____ server` (acts as a middleman on behalf of clients/servers).",
            "It caches web pages AND shields web servers against DDoS floods.",
          ],
          solution: [
            "A **proxy server** sits between external requests and the web server, caching pages and absorbing/blocking DDoS floods.",
          ],
          commonError: "Writing 'DNS server' instead of 'proxy server'.",
        },
        {
          id: "software-security-ai-p1-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "cyber-threats-encryption",
          question:
            "In encryption terminology, what single word names the **scrambled, unreadable output** produced after plaintext has been processed by an encryption algorithm and key?",
          answer: {
            type: "text",
            accept: ["ciphertext", "cipher text", "cyphertext"],
            display: "Ciphertext",
          },
          traps: [
            {
              spec: { type: "text", accept: ["plaintext", "plain text"] },
              feedback: "Plaintext is the original *readable* message before encryption — the scrambled output is *ciphertext*!",
            },
          ],
          hints: [
            "Original readable message = `plaintext`.",
            "Scrambled encrypted message = `______text` (starts with `cipher`).",
          ],
          solution: [
            "Encryption transforms readable **plaintext** into scrambled, unreadable **ciphertext**.",
          ],
          commonError: "Swapping plaintext (before encryption) and ciphertext (after encryption).",
        },
        {
          id: "software-security-ai-p1-q13",
          kind: "written",
          difficulty: "core",
          guideRef: "internet-web-protocols",
          marks: 4,
          question:
            "Describe how a **DNS server** and **SSL/TLS digital certificate** are used together when a user loads an `https://` banking page in their browser. [4]",
          modelAnswer:
            "1. The browser sends the domain name from the URL to a DNS server, which looks it up in its database and returns the matching IP address.\n2. The browser contacts the web server at that IP address and requests a secure connection.\n3. The web server sends its digital certificate (containing its public key) and the browser verifies that the certificate is authentic and trusted.\n4. Browser and server agree encrypted session keys so all subsequent HTML and banking data are transmitted encrypted.",
          markScheme: [
            {
              point: "Browser sends domain name to DNS server, which returns the matching IP address",
              keywords: ["ip address", "returns", "lookup", "looks up", "matches"],
            },
            {
              point: "Browser connects to the web server IP and requests secure identification",
              keywords: ["web server", "secure", "identif", "connects"],
            },
            {
              point: "Web server sends its digital certificate (with public key) and browser verifies its authenticity",
              keywords: ["verif", "authentic", "public key", "trusted"],
            },
            {
              point: "Session keys are agreed and data/HTML is transmitted encrypted",
              keywords: ["session key", "encrypted", "encrypt"],
            },
          ],
          hints: [
            "Cover DNS resolution first (domain → IP address).",
            "Then trace the TLS handshake: server sends certificate/public key → browser verifies authenticity → encrypted session traffic.",
          ],
          commonError: "Jumping straight to HTML rendering without mentioning IP lookup or verifying certificate authenticity.",
        },
        {
          id: "software-security-ai-p1-q14",
          kind: "short",
          difficulty: "core",
          guideRef: "automated-robotics-ai",
          question:
            "In an automated greenhouse, sensors send analogue temperature voltages to the microprocessor. What 3-letter hardware component must convert those analogue sensor signals into digital binary data first?",
          answer: {
            type: "text",
            accept: ["ADC", "Analogue to Digital Converter", "Analog to Digital Converter"],
            display: "ADC (Analogue-to-Digital Converter)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["DAC", "Digital to Analogue Converter"] },
              feedback: "DAC converts digital microprocessor outputs *to* analogue actuators — sensors feeding *into* the microprocessor need an **ADC**!",
            },
          ],
          hints: [
            "Direction matters: **A**nalogue sensor → **D**igital microprocessor.",
            "3-letter abbreviation.",
          ],
          solution: [
            "Microprocessors process binary digits only, so an **ADC (Analogue-to-Digital Converter)** converts analogue sensor readings into digital values.",
          ],
          commonError: "Reversing ADC (sensor → CPU) and DAC (CPU → analogue actuator).",
        },
        {
          id: "software-security-ai-p1-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "automated-robotics-ai",
          marks: 3,
          question:
            "State the **three** defining characteristics that a machine must possess to be classified as a **robot** on CIE 0478. [3]",
          modelAnswer:
            "1. It must have a physical mechanical structure or framework (such as gears, motors, and actuators).\n2. It must contain electrical components (such as sensors, a microprocessor, and circuitry).\n3. It must be programmable so a controller can execute stored instructions.",
          markScheme: [
            {
              point: "Mechanical structure or physical framework (gears, motors, actuators, limbs)",
              keywords: ["mechanical", "framework", "gears", "actuators"],
            },
            {
              point: "Electrical components (sensors, microprocessor, power supply, circuitry)",
              keywords: ["electrical", "sensors", "circuitry", "microprocessor"],
            },
            {
              point: "Programmable (controlled by a program/instructions)",
              keywords: ["programmable", "programmed"],
            },
          ],
          hints: [
            "Think: Body (physical movement), Nervous system (electronics), and Brain instructions (code).",
            "Use the three exact CIE syllabus phrases!",
          ],
          commonError: "Writing 'looks human' or 'thinks for itself' instead of mechanical structure, electrical components, and programmable.",
        },
      ],
    },
    {
      id: "software-security-ai-p2",
      title: "Paper 1 Practice Set B — Malware, Encryption, Automated Systems & AI",
      questions: [
        {
          id: "software-security-ai-p2-q01",
          kind: "short",
          difficulty: "warmup",
          guideRef: "system-app-interrupts",
          question:
            "Give the 3-letter abbreviation (`CLI` or `GUI`) for the Operating System interface that uses **WIMP** (*Windows, Icons, Menus, Pointers*).",
          answer: {
            type: "text",
            accept: ["GUI", "Graphical User Interface"],
            display: "GUI",
          },
          traps: [
            {
              spec: { type: "text", accept: ["CLI", "Command Line Interface"] },
              feedback: "CLI is text-command only — WIMP belongs to a **GUI** (Graphical User Interface)!",
            },
          ],
          hints: [
            "WIMP is visual/graphical rather than typed commands.",
          ],
          solution: [
            "A **GUI (Graphical User Interface)** uses Windows, Icons, Menus, and Pointers (WIMP) for intuitive visual interaction.",
          ],
          commonError: "Swapping CLI and GUI.",
        },
        {
          id: "software-security-ai-p2-q02",
          kind: "short",
          difficulty: "core",
          guideRef: "system-app-interrupts",
          question:
            "When an interrupt is serviced, onto what data structure in RAM does the CPU push the current contents of registers like `PC` and `ACC` so it can restore them later?",
          answer: {
            type: "text",
              accept: ["stack", "a stack", "RAM stack", "memory stack"],
            display: "Stack",
          },
          traps: [
            {
              spec: { type: "text", accept: ["ROM", "SSD", "hard drive"] },
              feedback: "ROM is read-only and SSD is slow secondary storage — register snapshots are pushed onto a **stack** in RAM!",
            },
          ],
          hints: [
            "A Last-In-First-Out structure in primary memory that supports nested interrupts cleanly.",
            "One 5-letter word starting with `s`.",
          ],
          solution: [
            "The CPU pushes current register values (`PC`, `ACC`, flags) onto a **stack** in RAM before jumping to the ISR.",
          ],
          commonError: "Saying registers are saved to ROM or secondary storage during an interrupt.",
        },
        {
          id: "software-security-ai-p2-q03",
          kind: "short",
          difficulty: "core",
          guideRef: "languages-translators-ide",
          question:
            "Which type of language (`high-level` or `low-level`) is **portable** across different CPU architectures and uses English-like statements such as `WHILE Count < 10 DO`?",
          answer: {
            type: "text",
            accept: ["high-level", "high level", "high-level language", "high level language", "HLL"],
            display: "High-level language",
          },
          traps: [
            {
              spec: { type: "text", accept: ["low-level", "low level", "assembly", "machine code"] },
              feedback: "Low-level languages (Assembly and Machine Code) are tied to one specific CPU architecture and are NOT portable!",
            },
          ],
          hints: [
            "Portable + English-like = `high-level` or `low-level`?",
            "Think of Python, Java, or C#.",
          ],
          solution: [
            "**High-level languages** abstract away hardware registers, making code English-like, easy to debug, and **portable** across CPU types.",
          ],
          commonError: "Claiming assembly language is portable across different microprocessor families.",
        },
        {
          id: "software-security-ai-p2-q04",
          kind: "short",
          difficulty: "core",
          guideRef: "internet-web-protocols",
          question:
            "In the URL `https://archive.cie-exams.org/2026/paper1_ms.pdf`, write down **only the domain name**.",
          answer: {
            type: "text",
            accept: ["archive.cie-exams.org"],
            display: "archive.cie-exams.org",
          },
          traps: [
            {
              spec: { type: "text", accept: ["https", "https://"] },
              feedback: "`https` is the protocol — extract the host server name between `://` and `/2026/...`!",
            },
            {
              spec: { type: "text", accept: ["/2026/paper1_ms.pdf", "paper1_ms.pdf"] },
              feedback: "That is the file path/filename — the domain name is `archive.cie-exams.org`.",
            },
          ],
          hints: [
            "Split the URL into `protocol://domain_name/path/filename`.",
            "Take the host name right between `https://` and the first single forward slash `/`.",
          ],
          solution: [
            "`https` = protocol; `archive.cie-exams.org` = **domain name**; `/2026/paper1_ms.pdf` = path and filename.",
          ],
          commonError: "Including `https://` or `/2026/paper1_ms.pdf` inside the domain name.",
        },
        {
          id: "software-security-ai-p2-q05",
          kind: "short",
          difficulty: "core",
          guideRef: "internet-web-protocols",
          question:
            "Which type of cookie (`session` or `persistent`) is stored on the user's SSD/hard drive with an expiry date to remember saved login usernames and language preferences across future visits?",
          answer: {
            type: "text",
            accept: ["persistent", "persistent cookie", "persistent cookies", "permanent", "permanent cookie"],
            display: "Persistent cookie",
          },
          traps: [
            {
              spec: { type: "text", accept: ["session", "session cookie"] },
              feedback: "Session cookies stay in RAM and are wiped as soon as the browser closes!",
            },
          ],
          hints: [
            "Contrast temporary RAM cookies (`session`) against long-term disk cookies.",
            "Because it *persists* on secondary storage until its expiry date or manual deletion, it is called a `__________` cookie.",
          ],
          solution: [
            "**Persistent cookies** are stored on secondary storage (SSD/HDD) until their expiry date or manual deletion, preserving preferences across visits.",
          ],
          commonError: "Calling persistent cookies 'ROM cookies' (cookies are stored on SSD/HDD, never ROM).",
        },
        {
          id: "software-security-ai-p2-q06",
          kind: "short",
          difficulty: "core",
          guideRef: "cyber-threats-encryption",
          question:
            "Name the type of malware that **attaches itself to a legitimate host file/program** and requires **human action** (such as opening or running that file) to replicate and corrupt files.",
          answer: {
            type: "text",
            accept: ["virus", "computer virus", "a virus"],
            display: "Virus",
          },
          traps: [
            {
              spec: { type: "text", accept: ["worm", "a worm"] },
              feedback: "A worm is standalone and self-replicates automatically across networks *without* needing a host file or human action!",
            },
            {
              spec: { type: "text", accept: ["trojan", "trojan horse"] },
              feedback: "A Trojan disguises itself as useful software and does *not* self-replicate by attaching to host files!",
            },
          ],
          hints: [
            "Distinguish the Big Three: Worm = standalone network self-replicator; Trojan = fake software disguise; Host-file + human trigger = ?",
            "5-letter word.",
          ],
          solution: [
            "A **virus** attaches malicious code to an existing host file/program and relies on human action (running/sharing the host) to execute and replicate.",
          ],
          commonError: "Blurring viruses and worms — examiners strictly require 'host file + human action' for a virus.",
        },
        {
          id: "software-security-ai-p2-q07",
          kind: "short",
          difficulty: "core",
          guideRef: "cyber-threats-encryption",
          question:
            "Name the specific type of spyware that secretly **records every physical keystroke** pressed by a user in order to harvest passwords and PINs.",
          answer: {
            type: "text",
            accept: ["keylogger", "key logger", "keylogging spyware", "key-logger"],
            display: "Keylogger",
          },
          traps: [
            {
              spec: { type: "text", accept: ["adware"] },
              feedback: "Adware displays pop-up adverts — recording physical keystrokes is a *keylogger*!",
            },
          ],
          hints: [
            "What do you press on a physical keyboard, and what do we call software that logs them?",
            "Compound word combining `key` + `logger`.",
          ],
          solution: [
            "A **keylogger** (keylogging spyware) captures physical keyboard presses and sends the recorded log to an attacker.",
          ],
          commonError: "Forgetting the specific term 'keylogger' when explaining how on-screen keyboards protect banking logins.",
        },
        {
          id: "software-security-ai-p2-q08",
          kind: "written",
          difficulty: "core",
          guideRef: "cyber-threats-encryption",
          marks: 4,
          question:
            "Contrast **phishing** and **pharming** by explaining how each attack lures or directs a victim to a fraudulent website. [4]",
          modelAnswer:
            "Phishing sends a legitimate-looking email (impersonating a trusted bank or company) containing a link; the victim must actively click that link to be taken to the fake website.\nPharming installs malicious code on the user's computer or corrupts a DNS server so that typing a genuine URL automatically redirects the browser to the fake website without clicking any email link.",
          markScheme: [
            {
              point: "Phishing uses fraudulent legitimate-looking emails impersonating a trusted organisation",
              keywords: ["email", "emails", "legitimate-looking", "impersonat"],
            },
            {
              point: "Phishing requires the user to click a link inside the message to reach the fake site",
              keywords: ["click", "link"],
            },
            {
              point: "Pharming installs malicious code on the user's device or poisons a DNS server",
              keywords: ["malicious code", "dns", "installed"],
            },
            {
              point: "Pharming automatically redirects a genuine typed URL without the user clicking a link",
              keywords: ["redirect", "redirects", "automatically", "genuine"],
            },
          ],
          hints: [
            "Explain **how Phishing starts** (fake email) and **what user action is needed** (clicking a link).",
            "Explain **where Pharming sits** (device / DNS server) and **why it's stealthier** (automatic redirect on a genuine URL with zero clicks).",
          ],
          commonError: "Saying both attacks work via fake emails — Pharming involves NO email link click!",
        },
        {
          id: "software-security-ai-p2-q09",
          kind: "short",
          difficulty: "core",
          guideRef: "cyber-threats-encryption",
          question:
            "Which type of encryption (`symmetric` or `asymmetric`) uses the **exact same single secret key** to both encrypt plaintext and decrypt ciphertext?",
          answer: {
            type: "text",
            accept: ["symmetric", "symmetric encryption"],
            display: "Symmetric encryption",
          },
          traps: [
            {
              spec: { type: "text", accept: ["asymmetric", "asymmetric encryption"] },
              feedback: "Asymmetric encryption uses two *different* mathematically linked keys (Public + Private); using one identical key on both ends is *symmetric*!",
            },
          ],
          hints: [
            "Compare single-key encryption against public/private paired-key encryption.",
            "'Sym-' means 'same on both sides' (encryption side = decryption side).",
          ],
          solution: [
            "**Symmetric encryption** uses one shared secret key for both encryption and decryption.",
          ],
          commonError: "Confusing symmetric (1 shared key) with asymmetric (2 paired public/private keys).",
        },
        {
          id: "software-security-ai-p2-q10",
          kind: "short",
          difficulty: "core",
          guideRef: "cyber-threats-encryption",
          question:
            "Zara encrypts a confidential file using **Noah's Public Key** and emails the ciphertext to Noah. Whose **Private Key** is the ONLY key capable of decrypting that file? Give the person's name (`Zara` or `Noah`).",
          answer: {
            type: "text",
            accept: ["Noah", "Noah's", "Noahs", "Noah's private key", "Noah private key"],
            display: "Noah (Noah's Private Key)",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Zara", "Zara's", "Zaras", "Zara's private key"] },
              feedback: "Zara's private key pairs only with Zara's public key! Because Zara locked it with *Noah's* public key, only *Noah's* private key unlocks it.",
            },
          ],
          hints: [
            "Public and Private keys come in mathematically matched pairs belonging to the *same* owner.",
            "Since **Noah's** Public Key locked it, whose Private Key matches it?",
          ],
          solution: [
            "Data encrypted with **Noah's Public Key** can ONLY be decrypted using **Noah's matching Private Key**.",
          ],
          commonError: "Thinking the sender's private key can unlock data encrypted with the recipient's public key.",
        },
        {
          id: "software-security-ai-p2-q11",
          kind: "written",
          difficulty: "core",
          guideRef: "cyber-threats-encryption",
          marks: 3,
          question:
            "Explain three distinct tasks carried out by a **firewall** to keep a home or office network secure. [3]",
          modelAnswer:
            "1. Examines incoming and outgoing network traffic against preset security rules and criteria.\n2. Blocks unauthorised packets, closed ports, or connections from blocklisted IP addresses.\n3. Maintains a security log of allowed and blocked traffic attempts to alert the administrator to hacking or malware activity.",
          markScheme: [
            {
              point: "Inspects/monitors incoming and outgoing traffic against preset rules/criteria",
              keywords: ["incoming", "outgoing", "criteria", "rules"],
            },
            {
              point: "Blocks unauthorised packets, ports, or blocklisted IP addresses",
              keywords: ["blocks", "block", "unauthorised", "ip address", "ports"],
            },
            {
              point: "Logs traffic / maintains allowlists and blocklists / alerts user to suspicious connections",
              keywords: ["log", "logs", "allowlist", "blocklist", "whitelist", "blacklist", "alert"],
            },
          ],
          hints: [
            "Mention traffic direction (`incoming and outgoing`) + checking against `rules/criteria`.",
            "Mention `blocking` unauthorised ports/IPs + keeping a `log` or `allowlist/blocklist`.",
          ],
          commonError: "Writing 'a firewall deletes viruses on a USB stick' — removing malware files is anti-virus software, whereas firewalls inspect and filter network traffic!",
        },
        {
          id: "software-security-ai-p2-q12",
          kind: "short",
          difficulty: "core",
          guideRef: "cyber-threats-encryption",
          question:
            "Fingerprint scanning, iris/retina scanning, and facial recognition are examples of what single CIE authentication category based on unique biological characteristics?",
          answer: {
            type: "text",
            accept: ["biometrics", "biometric", "biometric authentication"],
            display: "Biometrics",
          },
          traps: [
            {
              spec: { type: "text", accept: ["encryption", "firewall"] },
              feedback: "Unique biological human traits used to verify identity are called *biometrics*!",
            },
          ],
          hints: [
            "Authentication comes in three forms: something you know (passwords), something you have (tokens), and something you *are*.",
            "`Bio-` (life) + `-metrics` (measurement).",
          ],
          solution: [
            "**Biometrics** authenticates users via unique biological/physical traits such as fingerprints, retina/iris patterns, face geometry, or voice.",
          ],
          commonError: "Writing 'sensors' instead of the authentication method 'biometrics'.",
        },
        {
          id: "software-security-ai-p2-q13",
          kind: "short",
          difficulty: "core",
          guideRef: "automated-robotics-ai",
          question:
            "In an AI Expert System, which two-word component is the **database of domain facts** collected from human specialists?",
          answer: {
            type: "text",
            accept: ["knowledge base", "the knowledge base"],
            display: "Knowledge base",
          },
          traps: [
            {
              spec: { type: "text", accept: ["rule base", "the rule base"] },
              feedback: "The rule base stores conditional `IF...THEN` statements — domain facts collected from specialists sit in the *knowledge base*!",
            },
            {
              spec: { type: "text", accept: ["inference engine"] },
              feedback: "The inference engine is the reasoning processor — the repository of facts itself is the *knowledge base*.",
            },
          ],
          hints: [
            "Separate the four Expert System parts: User Interface, Inference Engine, Rule Base, and K________ B___.",
            "Facts = `Knowledge base`; `IF...THEN` conditions = `Rule base`.",
          ],
          solution: [
            "Domain facts and specialist data are stored in the **Knowledge Base** of an Expert System.",
          ],
          commonError: "Swapping Knowledge Base (facts) and Rule Base (IF...THEN rules).",
        },
        {
          id: "software-security-ai-p2-q14",
          kind: "short",
          difficulty: "core",
          guideRef: "automated-robotics-ai",
          question:
            "What two-word branch of Artificial Intelligence uses training data so algorithms **automatically adapt their own models/processes from experience** without being explicitly reprogrammed?",
          answer: {
            type: "text",
            accept: ["machine learning", "ML"],
            display: "Machine learning",
          },
          traps: [
            {
              spec: { type: "text", accept: ["expert system", "expert systems"] },
              feedback: "Classic Expert Systems use fixed human-authored rules — adapting models automatically from training data is *Machine Learning*!",
            },
          ],
          hints: [
            "Contrasts directly with static rule-based Expert Systems in CIE Chapter 6.",
            "Two words abbreviated `ML`.",
          ],
          solution: [
            "**Machine Learning** trains algorithms on data so they automatically adjust internal weights/processes to improve performance from experience.",
          ],
          commonError: "Writing generic 'robotics' instead of 'Machine Learning'.",
        },
        {
          id: "software-security-ai-p2-q15",
          kind: "written",
          difficulty: "core",
          guideRef: "automated-robotics-ai",
          marks: 4,
          question:
            "An underground metro line replaces human train drivers with a fully **automated train control system** using track/proximity sensors, microprocessors, and braking/throttle actuators. Give **two advantages** and **two disadvantages** of this automated system. [4]",
          modelAnswer:
            "Advantages: 1) Microprocessors react much faster than human drivers to obstacle sensor signals, improving passenger safety. 2) Trains run consistently 24/7 with optimal spacing and energy efficiency without human fatigue or distraction.\nDisadvantages: 3) Very high initial capital cost to purchase, install, and test all track sensors, computers, and actuators. 4) Vulnerable to cyberattacks or unusual unprogrammed track emergencies, plus expensive specialist maintenance.",
          markScheme: [
            {
              point: "Faster reaction times to hazards/obstacles than humans, improving safety",
              keywords: ["faster reaction", "react faster", "reaction time", "reaction", "safety"],
            },
            {
              point: "Consistent 24/7 operation with no human fatigue/distraction (or optimised efficiency)",
              keywords: ["fatigue", "consistent", "24/7", "distraction", "efficiency"],
            },
            {
              point: "High initial setup / purchase / installation cost (or expensive specialist maintenance)",
              keywords: ["expensive", "initial", "cost", "maintenance"],
            },
            {
              point: "Vulnerable to cyberattacks OR struggles with unforeseen/unprogrammed scenarios (or driver job losses)",
              keywords: ["cyber", "unforeseen", "unprogrammed", "unusual", "job"],
            },
          ],
          hints: [
            "Give two distinct benefits (reaction speed + zero fatigue / consistency).",
            "Give two distinct drawbacks (initial setup/maintenance cost + cyberattack risk or unforeseen scenarios).",
          ],
          commonError: "Repeating 'it is cheaper' and 'saves money on wages' as two separate points — always diversify across safety/speed, consistency, setup cost, and cyber/unforeseen risks!",
        },
      ],
    },
  ],

  challenge: [
    {
      id: "software-security-ai-ch-q01",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "system-app-interrupts",
      question:
        "Consider three interrupts arriving during the same millisecond while a user's music app is playing (Priority 1 = lowest, Priority 10 = highest):\n- Mouse moved slightly (`Priority 3`)\n- Keyboard key pressed (`Priority 5`)\n- Thermal overheat shutdown warning (`Priority 10`)\n\nAssuming the music app runs at `Priority 1`, in what order are the routines completed once the current FDE cycle finishes?",
      options: [
        "Thermal ISR (10) → Keyboard ISR (5) → Mouse ISR (3) → Resume Music App (1)",
        "Mouse ISR (3) → Keyboard ISR (5) → Thermal ISR (10) → Wipe Music App",
        "Music App finishes entire 4-minute song first → Mouse ISR → Keyboard ISR → Thermal ISR",
        "All three ISRs execute simultaneously inside a single Accumulator register",
      ],
      answerIndex: 0,
      hints: [
        "Step 1: At the end of the current FDE cycle, the interrupt controller inspects the interrupt queue sorted by **priority**.",
        "Step 2: Which interrupt has the highest priority (`10` vs `5` vs `3`)?",
        "Step 3: After each ISR finishes, the CPU checks whether another queued interrupt still outranks the interrupted music app (`Priority 1`).",
      ],
      explanation:
        "At the end of the current FDE cycle, the highest-priority queued interrupt (**Thermal Overheat, 10**) runs first, followed by **Keyboard (5)**, then **Mouse (3)**, before popping the original registers to **resume the Music App (1)**.",
    },
    {
      id: "software-security-ai-ch-q02",
      kind: "short",
      difficulty: "challenge",
      guideRef: "languages-translators-ide",
      question:
        "A 10-line program prints `'OK'` inside a `FOR` loop from `1 TO 5`, EXCEPT line 9 (placed *after* the loop ends) has a **syntax error**: `OUTPUTT \"Done\"`.\n\nHow many times is `'OK'` printed on screen when the file is processed by a **compiler**? Give your answer as a single integer.",
      answer: {
        type: "number",
        value: 0,
      },
      traps: [
        {
          spec: { type: "number", value: 5 },
          feedback: "5 times is what a pure line-by-line *interpreter* would print before halting at line 9! A *compiler* translates the entire program BEFORE executing anything — if line 9 has a syntax error, NO executable is produced and 0 lines run!",
        },
      ],
      hints: [
        "Read carefully: is the translator a **compiler** or an **interpreter**?",
        "Does a compiler execute line 1 before checking line 9 for syntax errors?",
        "If a compiler finds even ONE syntax error anywhere in the file, is an executable created or run?",
      ],
      solution: [
        "A **compiler** scans and translates the **entire source program** before any execution takes place.",
        "Because line 9 contains a syntax error (`OUTPUTT`), compilation fails, an error report is generated, no executable is created, and `'OK'` is printed **0** times.",
      ],
      commonError: "Answering 5 by confusing a compiler (whole-file translation before execution) with a line-by-line interpreter.",
    },
    {
      id: "software-security-ai-ch-q03",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "cyber-threats-encryption",
      question:
        "Suppose Alice mistakenly encrypts a secret business bid using **Alice's OWN Private Key** instead of **Bob's Public Key**, and sends the ciphertext across the Internet to Bob. Why has **confidentiality completely failed**?",
      options: [
        "Because Alice's Private Key leaves the message in unscrambled plaintext",
        "Because ANY eavesdropper on the Internet can obtain Alice's openly published Public Key and decrypt the ciphertext immediately",
        "Because Private Keys only work on persistent cookies",
        "Because Bob's firewall automatically deletes any packet over 8 bits",
      ],
      answerIndex: 1,
      hints: [
        "Remember how a mathematically linked key pair works: whatever one key in Alice's pair locks, the *other* key in Alice's pair unlocks.",
        "Who has access to **Alice's Public Key**? Literally everyone!",
        "Therefore, what can an eavesdropper Eve do using Alice's Public Key?",
      ],
      explanation:
        "Encrypting with **Alice's Private Key** creates a digital signature (proving Alice sent it), NOT confidentiality — because **anyone** with **Alice's openly shared Public Key** can unlock and read it! For confidentiality, Alice MUST encrypt with **Bob's Public Key**.",
    },
    {
      id: "software-security-ai-ch-q04",
      kind: "written",
      difficulty: "challenge",
      guideRef: "cyber-threats-encryption",
      marks: 4,
      question:
        "A bank customer types the genuine URL `https://www.metrobank.co.uk` without clicking any email, yet a **pharming** attack on a poisoned DNS server sends their browser to a criminal server IP. Explain how **HTTPS (SSL/TLS)** can still alert the customer BEFORE they type their password. [4]",
      modelAnswer:
        "1. During the HTTPS handshake, the browser asks the criminal web server to identify itself with a valid digital certificate for metrobank.co.uk.\n2. The criminal server cannot produce a genuine digital certificate signed by a trusted Certificate Authority matching metrobank.co.uk (because it does not possess Metrobank's secret private key).\n3. The browser fails the certificate authenticity verification check.\n4. The browser blocks the page or displays a prominent full-screen security warning (missing padlock) alerting the user before credentials are entered.",
      markScheme: [
        {
          point: "Browser requests the server's digital certificate during the SSL/TLS handshake",
          keywords: ["handshake", "requests", "identify"],
        },
        {
          point: "Criminal server lacks a valid certificate signed by a trusted Certificate Authority (or lacks the bank's private key)",
          keywords: ["certificate authority", "private key", "genuine", "valid"],
        },
        {
          point: "Browser verification of certificate authenticity / domain match fails",
          keywords: ["verif", "authenticity", "fails", "mismatch"],
        },
        {
          point: "Browser displays a security warning / blocks connection / removes padlock before login",
          keywords: ["warning", "alert", "padlock", "blocks"],
        },
      ],
      hints: [
        "Step 1: Pharming fooled DNS (returning a fake IP), so the browser connects to the attacker's IP over `https://`.",
        "Step 2: What document must the web server present in the SSL/TLS handshake, and why can't the attacker forge the bank's Certificate-Authority-signed certificate & private key?",
        "Step 3: What does the browser show the user when certificate verification fails?",
      ],
      commonError: "Saying 'HTTPS fixes the DNS server' — HTTPS does not repair DNS, it catches the imposter server during **digital certificate verification**!",
    },
    {
      id: "software-security-ai-ch-q05",
      kind: "short",
      difficulty: "challenge",
      guideRef: "cyber-threats-encryption",
      question:
        "Five coworkers (`Alice, Ben, Chloe, Dan, Eva`) want to communicate privately in pairs so every possible pair of coworkers has its own **unique shared symmetric key** (nobody else shares that pair's key).\n\nHow many distinct symmetric keys are needed in total across all pairs of the 5 coworkers? Give a single integer.",
      answer: {
        type: "number",
        value: 10,
      },
      traps: [
        {
          spec: { type: "number", value: 5 },
          feedback: "5 keys would mean each person only has 1 key — count every unique pair among 5 people: 4 + 3 + 2 + 1!",
        },
        {
          spec: { type: "number", value: 20 },
          feedback: "20 counts (Alice, Ben) and (Ben, Alice) twice — symmetric encryption shares ONE key per pair, so divide 5 × 4 by 2!",
        },
      ],
      hints: [
        "Alice needs a separate symmetric key with Ben, Chloe, Dan, and Eva (4 keys).",
        "Ben already has a key with Alice, so Ben needs new keys with Chloe, Dan, and Eva (3 more keys).",
        "Sum `4 + 3 + 2 + 1` (or compute `5 × 4 ÷ 2`) to see why symmetric key management explodes as networks grow!",
      ],
      solution: [
        "Each unique pair of the 5 coworkers shares 1 symmetric key.",
        "Number of pairs = `4 + 3 + 2 + 1 = 10` (or `5 × 4 ÷ 2 = 10` keys).",
      ],
      commonError: "Forgetting to divide `5 × 4` by 2 because symmetric keys are bidirectional per pair.",
    },
    {
      id: "software-security-ai-ch-q06",
      kind: "written",
      difficulty: "challenge",
      guideRef: "automated-robotics-ai",
      marks: 4,
      question:
        "Trace the **Rule Base** below for a greenhouse **Expert System** when sensor facts in memory are `SoilMoisture = 22`, `SunlightLux = 8500`, and `RainForecast = FALSE`:\n- **Rule 1**: `IF SoilMoisture < 30 AND RainForecast = FALSE THEN ValveRequest ← TRUE`\n- **Rule 2**: `IF SunlightLux > 8000 THEN ShadeBlind ← TRUE`\n- **Rule 3**: `IF ValveRequest = TRUE AND ShadeBlind = TRUE THEN MistingMode ← \"COOL_IRRIGATE\"`\n\nExplain how the **Inference Engine**, **Knowledge Base**, and **Rule Base** interact to deduce `MistingMode`, stating the final value deduced. [4]",
      modelAnswer:
        "1. The Knowledge Base holds the domain facts and thresholds alongside the current sensor facts (SoilMoisture 22, SunlightLux 8500, RainForecast FALSE).\n2. The Inference Engine evaluates the conditional IF-THEN rules stored in the Rule Base against those facts.\n3. Rule 1 fires (22 < 30 and RainForecast is FALSE) setting ValveRequest to TRUE, and Rule 2 fires (8500 > 8000) setting ShadeBlind to TRUE.\n4. Chaining those deduced facts into Rule 3 sets MistingMode to COOL_IRRIGATE, which is output via the User Interface.",
      markScheme: [
        {
          point: "Knowledge Base provides stored domain facts/thresholds combined with current input facts",
          keywords: ["knowledge base", "facts", "thresholds"],
        },
        {
          point: "Inference Engine applies/evaluates the IF–THEN conditions from the Rule Base",
          keywords: ["inference engine", "evaluates", "applies"],
        },
        {
          point: "Both Rule 1 (ValveRequest = TRUE) and Rule 2 (ShadeBlind = TRUE) evaluate to TRUE",
          keywords: ["rule 1", "rule 2", "true"],
        },
        {
          point: "Forward-chains into Rule 3 to deduce MistingMode = COOL_IRRIGATE",
          keywords: ["cool_irrigate", "rule 3"],
        },
      ],
      hints: [
        "Name the role of the **Knowledge Base** and **Inference Engine** explicitly.",
        "Check Rule 1 (`22 < 30 AND NOT RainForecast`) and Rule 2 (`8500 > 8000`) step by step.",
        "Feed those two deduced `TRUE` values into Rule 3 to state the final `MistingMode` string.",
      ],
      commonError: "Stating `COOL_IRRIGATE` without explaining the distinct roles of the Inference Engine and Knowledge Base.",
    },
    {
      id: "software-security-ai-ch-q07",
      kind: "mcq",
      difficulty: "challenge",
      guideRef: "cyber-threats-encryption",
      question:
        "A corporate security audit implements **four controls**:\n1. Junior clerks have read-only view of payroll tables (cannot edit salaries).\n2. Laptops install OS security patches every night at 02:00.\n3. Staff log in with a password plus a biometric thumbprint.\n4. An intermediary server hides staff internal IP addresses and blocks social-media domains.\n\nMatch `1 → 2 → 3 → 4` to their exact CIE 0478 defence names:",
      options: [
        "1: Firewalls, 2: Prettyprinting, 3: Verification, 4: Session cookies",
        "1: Encryption, 2: Defragmentation, 3: Validation, 4: DNS caching",
        "1: Access levels, 2: Automatic software updates, 3: Two-factor authentication (2FA), 4: Proxy server",
        "1: Pharming, 2: Bootstrapping, 3: Symmetric keys, 4: Assembler",
      ],
      answerIndex: 2,
      hints: [
        "Control 1 restricts user permissions by job role (`Access levels`).",
        "Control 3 combines something you *know* (password) + something you *are* (biometric thumbprint) = `2FA`.",
        "Control 4 masks internal IP addresses and filters web domains = `Proxy server`.",
      ],
      explanation:
        "Role-based read/write permissions = **Access levels** (1); scheduled security patching = **Automatic software updates** (2); password + biometric = **Two-factor authentication (2FA)** (3); masking internal IPs & filtering websites = **Proxy server** (4).",
    },
    {
      id: "software-security-ai-ch-q08",
      kind: "written",
      difficulty: "challenge",
      guideRef: "automated-robotics-ai",
      marks: 4,
      question:
        "A smart warehouse uses **autonomous shelf-carrying robots** that also improve their warehouse routing over months as order patterns change. Explain why each unit qualifies as a **physical robot** AND how **Machine Learning** improves their routing over time. [4]",
      modelAnswer:
        "1. Each unit has a physical mechanical structure with wheels, motors, and lifting actuators to carry shelves.\n2. It contains electrical components (proximity/LiDAR sensors, battery, microprocessor) and is programmable.\n3. Machine Learning algorithms analyse historical order and congestion training data from warehouse runs.\n4. The system automatically adapts its internal routing model from experience to reduce travel time without engineers manually reprogramming fixed path rules.",
      markScheme: [
        {
          point: "Possesses a mechanical structure/framework with motors/wheels/actuators",
          keywords: ["mechanical", "wheels", "motors", "actuators", "framework"],
        },
        {
          point: "Contains electrical components (sensors/microprocessor) AND is programmable",
          keywords: ["electrical", "sensors", "programmable"],
        },
        {
          point: "Machine Learning trains on historical warehouse traffic / order data",
          keywords: ["training data", "historical", "congestion", "patterns"],
        },
        {
          point: "Automatically adapts its routing model/parameters from experience without explicit reprogramming",
          keywords: ["adapts", "adapt", "experience", "reprogram"],
        },
      ],
      hints: [
        "First hit all 3 CIE robot criteria concisely across two mark points (mechanical structure + electrical sensors + programmable).",
        "Next state what training data the ML algorithm observes.",
        "Finish with the golden CIE ML phrase: *automatically adapts its model/processes from experience without explicit reprogramming*!",
      ],
      commonError: "Forgetting the 3 physical robot criteria or failing to mention adapting from data without explicit reprogramming.",
    },
  ],
};
