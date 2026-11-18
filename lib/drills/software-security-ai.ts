import type { Drill, Rng } from "./types.ts";

const PEOPLE = [
  "Alice",
  "Bob",
  "Priya",
  "Tariq",
  "Maya",
  "Leo",
  "Zara",
  "Noah",
  "Chen",
  "Sofia",
  "Kiran",
  "Elena",
] as const;

const SUBDOMAINS = ["www", "portal", "shop", "learn", "api", "docs", "cloud", "vault"] as const;
const SLD = [
  "greenhouse-ai",
  "tanglin-cs",
  "cyberlab",
  "medexpert",
  "robocore",
  "skyweather",
  "ecofarm",
  "smartgrid",
  "cityrail",
  "oceanprobe",
] as const;
const TLD = ["org", "edu", "sg", "co.uk", "net", "io"] as const;
const PATHS = [
  "/login/auth.html",
  "/revision/paper1.pdf",
  "/sensors/status.json",
  "/cart/basket.html",
  "/courses/security.html",
  "/reports/annual_2026.pdf",
  "/account/settings.html",
  "/ai/rules.html",
] as const;

export const drills: Drill[] = [
  {
    id: "software-security-ai.os-interrupts",
    topicId: "software-security-ai",
    title: "OS, Software Types & Interrupt Classifier",
    level: 1,
    guideRef: "system-app-interrupts",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const items: Array<{
          desc: string;
          ans: "system" | "application";
          why: string;
        }> = [
          { desc: "a disk defragmentation utility reorganising HDD sectors", ans: "system", why: "Utilities maintain hardware storage, so they are system software." },
          { desc: "a printer device driver translating OS print jobs", ans: "system", why: "Device drivers let the OS control hardware peripherals (system software)." },
          { desc: "an Operating System kernel managing RAM partitions", ans: "system", why: "The OS manages hardware and provides a platform (system software)." },
          { desc: "a high-level language compiler building machine code", ans: "system", why: "Translators (compilers, interpreters, assemblers) are system software." },
          { desc: "an anti-virus utility scanning incoming files", ans: "system", why: "Security/maintenance utilities belong to system software." },
          { desc: "a backup utility copying changed sectors nightly", ans: "system", why: "Backup utilities maintain the computer system (system software)." },
          { desc: "a word processor used to write a history essay", ans: "application", why: "Word processors perform end-user document tasks (application software)." },
          { desc: "a spreadsheet package calculating club accounts", ans: "application", why: "Spreadsheets perform end-user modelling tasks (application software)." },
          { desc: "a web browser rendering news websites", ans: "application", why: "Web browsers perform user web-viewing tasks (application software)." },
          { desc: "a photo-editing suite retouching bitmap portraits", ans: "application", why: "Photo editors perform user creative tasks (application software)." },
          { desc: "a video-editing program splicing holiday clips", ans: "application", why: "Video editors serve direct user tasks (application software)." },
          { desc: "database software storing a library's book catalogue", ans: "application", why: "User database applications perform end-user data tasks." },
        ];
        const item = rng.pick(items);
        const context = rng.pick(["school laptop", "office workstation", "clinic desktop", "studio computer"]);
        const other = item.ans === "system" ? "application" : "system";
        return {
          prompt: `On a ${context}, classify **${item.desc}** as \`system\` software or \`application\` software. (Write \`system\` or \`application\`.)`,
          answer: {
            type: "text",
            accept: [item.ans, `${item.ans} software`],
            display: `${item.ans[0].toUpperCase()}${item.ans.slice(1)} software`,
          },
          traps: [
            {
              spec: { type: "text", accept: [other, `${other} software`] },
              feedback: `Remember: **system software** manages/maintains hardware (OS, utilities, drivers, translators); **application software** performs end-user tasks!`,
            },
          ],
          hint: "Ask: does this manage/maintain the computer's hardware, or carry out a task directly for the human user?",
          solution: [item.why],
        };
      }

      if (tier === 2) {
        const events: Array<{ ev: string; kind: "hardware" | "software"; why: string }> = [
          { ev: "a user pressing the Enter key on a keyboard", kind: "hardware", why: "Physical peripheral input triggers a hardware interrupt." },
          { ev: "an inkjet printer running out of paper mid-job", kind: "hardware", why: "External printer fault signals are hardware interrupts." },
          { ev: "moving an optical mouse across the desk", kind: "hardware", why: "External pointing-device movement generates a hardware interrupt." },
          { ev: "a paper jam sensor tripping inside a laser printer", kind: "hardware", why: "Peripheral status alerts are hardware interrupts." },
          { ev: "unplugging a USB flash drive alert from the port controller", kind: "hardware", why: "Port voltage-change signals come from hardware." },
          { ev: "a running calculation attempting to divide an integer by 0", kind: "software", why: "Arithmetic exceptions inside executing code trigger software interrupts." },
          { ev: "two processes attempting to access the exact same protected RAM address", kind: "software", why: "Memory-access conflicts between running processes are software interrupts." },
          { ev: "a program attempting to open a required data file that does not exist", kind: "software", why: "Missing-file runtime exceptions in a running program trigger software interrupts." },
          { ev: "an executing program requesting an array index outside its declared bounds", kind: "software", why: "Out-of-bounds runtime exceptions come from executing software." },
        ];
        const e = rng.pick(events);
        const app = rng.pick(["playing audio", "rendering a 3D model", "recalculating a spreadsheet", "downloading updates", "compressing an archive"]);
        const other = e.kind === "hardware" ? "software" : "hardware";
        return {
          prompt: `While a CPU is ${app}, an interrupt is triggered by **${e.ev}**. Classify this interrupt as \`hardware\` or \`software\`.`,
          answer: {
            type: "text",
            accept: [e.kind, `${e.kind} interrupt`],
            display: `${e.kind[0].toUpperCase()}${e.kind.slice(1)} interrupt`,
          },
          traps: [
            {
              spec: { type: "text", accept: [other, `${other} interrupt`] },
              feedback: "External peripherals (keyboard, mouse, printer) generate **hardware** interrupts; executing program exceptions (div-by-zero, missing file, memory clash) generate **software** interrupts!",
            },
          ],
          hint: "Did a physical peripheral send the signal, or did an instruction inside a running program cause an exception?",
          solution: [e.why],
        };
      }

      // Tier 3: Priority interrupt queue ordering & ISR register/stack mechanics
      const lowP = rng.int(1, 3);
      const midP = rng.int(4, 6);
      const highP = rng.int(7, 10);
      const askFirst = rng.bool();
      const lowDev = rng.pick(["background indexing", "mouse movement", "clock widget refresh"]);
      const midDev = rng.pick(["keyboard keypress", "USB data arrival", "audio buffer refill"]);
      const highDev = rng.pick(["power-fail alert", "CPU overheat alarm", "disk write-fault"]);
      if (askFirst) {
        return {
          prompt:
            `Three interrupts wait in the interrupt queue at the end of the current FDE cycle (higher number = higher priority):\n` +
            `- ${lowDev} (Priority ${lowP})\n` +
            `- ${highDev} (Priority ${highP})\n` +
            `- ${midDev} (Priority ${midP})\n\n` +
            `What is the **priority number** of the interrupt whose ISR executes **first**?`,
          answer: { type: "number", value: highP },
          traps: [
            {
              spec: { type: "number", value: lowP },
              feedback: `Priority ${lowP} is the *lowest* priority here — the interrupt controller services the **highest** priority (${highP}) first!`,
            },
          ],
          hint: "Once the current FDE cycle finishes, the CPU services the queued interrupt with the highest priority first.",
          solution: [
            `Comparing priorities ${lowP}, ${highP}, and ${midP}, **${highDev}** has the highest priority (**${highP}**), so its ISR runs first after saving registers to the RAM stack.`,
          ],
        };
      }
      const nestedCount = rng.int(2, 5);
      const regsPerSnap = rng.pick([4, 5, 6]);
      const totalSaved = nestedCount * regsPerSnap;
      return {
        prompt:
          `Each time an interrupt preempts the CPU, the OS pushes a snapshot of **${regsPerSnap} registers** (including \`PC\` and \`ACC\`) onto the RAM stack. If **${nestedCount} nested interrupts** occur (each higher priority than the previous one before any ISR finishes), how many register values are currently sitting on the stack in total?`,
        answer: { type: "number", value: totalSaved },
        traps: [
          {
            spec: { type: "number", value: regsPerSnap },
            feedback: `Each nested preemption pushes its own ${regsPerSnap}-register snapshot onto the LIFO stack so none overwrite each other! Multiply ${nestedCount} × ${regsPerSnap}.`,
          },
        ],
        hint: "Every nested preemption pushes an independent snapshot onto the stack before jumping to the new ISR.",
        solution: [
          `${nestedCount} nested interrupt levels × ${regsPerSnap} registers per snapshot = **${totalSaved}** saved register values on the stack.`,
        ],
      };
    },
  },

  {
    id: "software-security-ai.translators-ide",
    topicId: "software-security-ai",
    title: "Compiler vs Interpreter Execution & IDE Fluency",
    level: 1,
    guideRef: "languages-translators-ide",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const qa: Array<{ q: string; a: string[]; disp: string; trap: string; tfb: string; why: string }> = [
          {
            q: "Which translator converts an **entire** high-level program into a standalone binary executable file before running?",
            a: ["compiler", "a compiler"],
            disp: "Compiler",
            trap: "interpreter",
            tfb: "An interpreter runs line by line with NO standalone executable — a **compiler** builds the executable!",
            why: "A **compiler** translates the whole high-level source file into a standalone machine-code executable.",
          },
          {
            q: "Which translator translates and executes high-level source code **line by line**, stopping immediately at the first error?",
            a: ["interpreter", "an interpreter"],
            disp: "Interpreter",
            trap: "compiler",
            tfb: "A compiler translates the entire file first and reports all errors at the end — **interpreter** runs line by line!",
            why: "An **interpreter** executes high-level statements one at a time and halts on the first error.",
          },
          {
            q: "Which translator converts low-level **Assembly Language** mnemonics (like `LDA`, `STO`) into machine code?",
            a: ["assembler", "an assembler"],
            disp: "Assembler",
            trap: "compiler",
            tfb: "Compilers translate high-level languages; Assembly mnemonics require an **assembler**!",
            why: "An **assembler** translates low-level assembly mnemonics 1-to-1 into binary machine code.",
          },
          {
            q: "Which IDE feature applies **syntax colour-coding** and **automatic indentation** to make source code readable?",
            a: ["prettyprinting", "pretty printing", "pretty-printing"],
            disp: "Prettyprinting",
            trap: "auto-completion",
            tfb: "Auto-completion suggests variable names; syntax colour-coding and auto-indentation is **prettyprinting**!",
            why: "**Prettyprinting** colour-codes keywords/strings and auto-indents code blocks on screen.",
          },
        ];
        const picked = rng.pick(qa);
        const lang = rng.pick(["Python", "Java", "C#", "Visual Basic", "Pascal", "microcontroller", "desktop", "game"]);
        return {
          prompt: `[${lang} project] ${picked.q}`,
          answer: { type: "text", accept: picked.a, display: picked.disp },
          traps: [{ spec: { type: "text", accept: [picked.trap] }, feedback: picked.tfb }],
          hint: "Distinguish Compiler (whole HLL → .exe), Interpreter (HLL line-by-line), Assembler (Assembly → binary), and Prettyprinting (IDE colour/indent).",
          solution: [picked.why],
        };
      }

      // Tier 2 & 3: Exact line/output count under Compiler vs Interpreter when a syntax error sits on line E!
      const totalLines = tier === 2 ? rng.int(12, 30) : rng.int(30, 80);
      const errLine = rng.int(4, totalLines - 2);
      const printsBeforeErr = tier === 2 ? errLine - 1 : rng.int(2, errLine - 1);
      const useCompiler = rng.bool();
      const translatorName = useCompiler ? "compiler" : "interpreter";
      const ans = useCompiler ? 0 : printsBeforeErr;
      const trapVal = useCompiler ? printsBeforeErr : 0;

      return {
        prompt:
          `A sequential ${totalLines}-line high-level script contains **${printsBeforeErr}** valid \`OUTPUT\` statements across lines 1 to ${errLine - 1}, followed by a **syntax error** on line **${errLine}**.\n\n` +
          `How many outputs are printed on screen when this script is processed by a pure **${translatorName}**? Give a single integer.`,
        answer: { type: "number", value: ans },
        traps: [
          {
            spec: { type: "number", value: trapVal },
            feedback: useCompiler
              ? `Careful! A **compiler** checks all ${totalLines} lines *before* executing anything — because line ${errLine} has a syntax error, compilation fails and **0** outputs are printed!`
              : `Careful! A pure line-by-line **interpreter** translates and executes lines 1 to ${errLine - 1} *before* hitting line ${errLine}, so **${printsBeforeErr}** outputs print before it halts!`,
          },
        ],
        hint: useCompiler
          ? "Does a compiler run ANY lines if there is a syntax error anywhere in the source file?"
          : `An interpreter runs line 1, line 2, ... one at a time until it reaches line ${errLine}.`,
        solution: useCompiler
          ? [
              `A **compiler** scans the entire ${totalLines}-line file before execution.`,
              `Line ${errLine} fails syntax checking, so no executable is generated and **0** outputs appear.`,
            ]
          : [
              `An **interpreter** translates and executes statement by statement.`,
              `Lines 1 to ${errLine - 1} run normally (printing **${printsBeforeErr}** outputs), then execution halts immediately at line ${errLine}.`,
            ],
      };
    },
  },

  {
    id: "software-security-ai.url-dns-cookies",
    topicId: "software-security-ai",
    title: "URL Dissector, DNS & Cookie Drill",
    level: 2,
    guideRef: "internet-web-protocols",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const proto = rng.pick(["https", "http"] as const);
      const dom = `${rng.pick(SUBDOMAINS)}.${rng.pick(SLD)}.${rng.pick(TLD)}`;
      const path = rng.pick(PATHS);
      const url = `${proto}://${dom}${path}`;

      if (tier === 1) {
        const askDomain = rng.bool(0.65);
        if (askDomain) {
          return {
            prompt: `Examine the URL \`${url}\`.\n\nWrite down **only the domain name**.`,
            answer: { type: "text", accept: [dom], display: dom },
            traps: [
              {
                spec: { type: "text", accept: [proto, `${proto}://`] },
                feedback: `\`${proto}\` is the protocol — the domain name sits between \`://\` and the first single \`/\`!`,
              },
              {
                spec: { type: "text", accept: [path] },
                feedback: `\`${path}\` is the file path/filename — the domain name is \`${dom}\`.`,
              },
            ],
            hint: "Split `protocol://domain_name/path/filename`.",
            solution: [`Protocol = \`${proto}\`, Domain name = **\`${dom}\`**, Path/filename = \`${path}\`.`],
          };
        }
        return {
          prompt: `Examine the URL \`${url}\`.\n\nWrite down **only the protocol** (without \`://\`).`,
          answer: { type: "text", accept: [proto, `${proto}://`], display: proto },
          traps: [
            {
              spec: { type: "text", accept: [dom] },
              feedback: `\`${dom}\` is the domain name — the protocol sits before \`://\`!`,
            },
          ],
          hint: "Look before `://` at the very start of the URL.",
          solution: [`The protocol before \`://\` is **\`${proto}\`**.`],
        };
      }

      if (tier === 2) {
        const isSession = rng.bool();
        const scenario = isSession
          ? rng.pick([
              "holding 3 textbooks in an unlogged-in shopping basket only until the browser window closes",
              "storing a temporary wizard step ID in RAM that vanishes as soon as the browser exits",
              "keeping a single-visit flight seat selection in volatile memory until the user closes the browser",
            ])
          : rng.pick([
              "remembering dark-mode and currency preferences on SSD for 90 days across separate visits",
              "storing a 'Remember my username' token on the hard drive with an expiry date next month",
              "tracking returning visitor preferences across weeks until manually deleted from storage",
            ]);
        const ans = isSession ? "session" : "persistent";
        const other = isSession ? "persistent" : "session";
        return {
          prompt: `A website at \`${dom}\` sets a cookie for **${scenario}**.\n\nIs this a \`session\` cookie or a \`persistent\` cookie?`,
          answer: {
            type: "text",
            accept: isSession ? ["session", "session cookie"] : ["persistent", "persistent cookie", "permanent", "permanent cookie"],
            display: `${ans[0].toUpperCase()}${ans.slice(1)} cookie`,
          },
          traps: [
            {
              spec: { type: "text", accept: [other, `${other} cookie`] },
              feedback: "Session cookies live in RAM and vanish when the browser closes; persistent cookies live on SSD/HDD until expiry or manual deletion!",
            },
          ],
          hint: "Check where it lives and whether closing the browser deletes it immediately.",
          solution: [
            isSession
              ? "Stored in **RAM** and deleted automatically on browser close → **Session cookie**."
              : "Stored on **SSD/HDD** with an expiry date across visits → **Persistent cookie**.",
          ],
        };
      }

      // Tier 3: Path extraction or DNS + TLS step identification
      return {
        prompt: `Examine the URL \`${url}\`.\n\nWrite down **only the file path and filename** (starting with \`/\`).`,
        answer: {
          type: "text",
          accept: [path, path.slice(1)],
          display: path,
        },
        traps: [
          {
            spec: { type: "text", accept: [dom] },
            feedback: `\`${dom}\` is the domain name (sent to the DNS server); the path/filename starts after \`${dom}\`!`,
          },
        ],
        hint: `Everything after the domain name \`${dom}\` forms the file path and filename.`,
        solution: [`Protocol: \`${proto}\` | Domain: \`${dom}\` | Path & filename: **\`${path}\`**.`],
      };
    },
  },

  {
    id: "software-security-ai.threats-encryption",
    topicId: "software-security-ai",
    title: "Asymmetric Keys, Cipher Shift & Cyber Threats",
    level: 2,
    guideRef: "cyber-threats-encryption",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const [sender, receiver] = rng.shuffle(PEOPLE).slice(0, 2);
        const askEncrypt = rng.bool();
        if (askEncrypt) {
          return {
            prompt: `**${sender}** wants to send a confidential message to **${receiver}** using **asymmetric encryption**.\n\nWhose **Public Key** must ${sender} use to **encrypt** the plaintext? Give ONLY the person's name (\`${sender}\` or \`${receiver}\`).`,
            answer: {
              type: "text",
              accept: [receiver, `${receiver}'s`, `${receiver}'s public key`, `${receiver} public key`],
              display: `${receiver} (${receiver}'s Public Key)`,
            },
            traps: [
              {
                spec: { type: "text", accept: [sender, `${sender}'s`, `${sender}'s public key`] },
                feedback: `If ${sender} encrypted with ${sender}'s public key, only ${sender} could decrypt it! Encrypt confidential messages with the **recipient's (${receiver}'s)** Public Key.`,
              },
            ],
            hint: "For confidentiality, always lock with the RECIPIENT'S openly shared Public Key.",
            solution: [
              `${sender} encrypts the plaintext using **${receiver}'s Public Key** so that only **${receiver}'s Private Key** can decrypt it.`,
            ],
          };
        }
        return {
          prompt: `**${sender}** encrypts a confidential report using **${receiver}'s Public Key** and sends the ciphertext across the Internet.\n\nWhose **Private Key** is the ONLY key that can **decrypt** it? Give ONLY the person's name (\`${sender}\` or \`${receiver}\`).`,
          answer: {
            type: "text",
            accept: [receiver, `${receiver}'s`, `${receiver}'s private key`, `${receiver} private key`],
            display: `${receiver} (${receiver}'s Private Key)`,
          },
          traps: [
            {
              spec: { type: "text", accept: [sender, `${sender}'s`, `${sender}'s private key`] },
              feedback: `${sender}'s private key does NOT match ${receiver}'s public key! Only **${receiver}'s** Private Key unlocks data encrypted with ${receiver}'s Public Key.`,
            },
          ],
          hint: "Public and Private keys belong in matched pairs to the same owner.",
          solution: [
            `Because it was encrypted with **${receiver}'s Public Key**, only **${receiver}'s matching Private Key** can decrypt the ciphertext.`,
          ],
        };
      }

      if (tier === 2) {
        // Caesar shift symmetric cipher drill (non-calculator clean 3-4 letter words!)
        const words = ["DATA", "SAFE", "CODE", "LOCK", "HASH", "HOST", "NODE", "PORT", "PING", "BYTE", "USER", "FILE"] as const;
        const word = rng.pick(words);
        const shift = rng.int(1, 5);
        const encryptMode = rng.bool();
        const shifted = word
          .split("")
          .map((ch) => String.fromCharCode(((ch.charCodeAt(0) - 65 + shift) % 26) + 65))
          .join("");
        if (encryptMode) {
          return {
            prompt:
              `A simple **symmetric shift cipher** shifts each uppercase letter **forward by +${shift}** places in the alphabet (\`A=1 .. Z=26\`, wrapping \`Z → A\`).\n\n` +
              `Encrypt the plaintext **\`${word}\`** using key \`+${shift}\`. Give the 4-letter ciphertext.`,
            answer: { type: "text", accept: [shifted], display: shifted },
            traps: [
              {
                spec: {
                  type: "text",
                  accept: [
                    word
                      .split("")
                      .map((ch) => String.fromCharCode(((ch.charCodeAt(0) - 65 - shift + 26) % 26) + 65))
                      .join(""),
                  ],
                },
                feedback: `You shifted *backwards* by ${shift} instead of *forwards* by +${shift}!`,
              },
            ],
            hint: `Move each letter of \`${word}\` forward ${shift} steps down the alphabet.`,
            solution: [
              word
                .split("")
                .map((c, i) => `\`${c}\` (+${shift}) → \`${shifted[i]}\``)
                .join(", "),
              `Ciphertext = **\`${shifted}\`**.`,
            ],
          };
        }
        return {
          prompt:
            `A **symmetric shift cipher** encrypted a 4-letter word by shifting each letter **forward by +${shift}** places. You receive the ciphertext **\`${shifted}\`** and hold the shared secret key \`+${shift}\`.\n\n` +
            `Decrypt **\`${shifted}\`** back into its original 4-letter **plaintext**.`,
          answer: { type: "text", accept: [word], display: word },
          traps: [
            {
              spec: {
                type: "text",
                accept: [
                  shifted
                    .split("")
                    .map((ch) => String.fromCharCode(((ch.charCodeAt(0) - 65 + shift) % 26) + 65))
                    .join(""),
                ],
              },
              feedback: `To *decrypt* ciphertext shifted forward by +${shift}, shift each letter **backwards by ${shift}**!`,
            },
          ],
          hint: `Symmetric decryption reverses encryption: shift each letter of \`${shifted}\` backwards by ${shift} places.`,
          solution: [
            shifted
              .split("")
              .map((c, i) => `\`${c}\` (−${shift}) → \`${word[i]}\``)
              .join(", "),
            `Original plaintext = **\`${word}\`**.`,
          ],
        };
      }

      // Tier 3: Symmetric pairwise key explosion n(n-1)/2 vs Asymmetric 2n keys!
      const n = rng.int(6, 24);
      const symKeys = (n * (n - 1)) / 2;
      const org = rng.pick(["security analysts", "hospital clinics", "bank branches", "research labs"]);
      const askSym = rng.bool(0.55);
      if (askSym) {
        return {
          prompt:
            `A network of **${n} ${org}** wants every unique pair to share a **separate secret symmetric key** that no third party knows.\n\n` +
            `How many distinct symmetric keys must be generated in total across all pairs of the ${n} ${org}?`,
          answer: { type: "number", value: symKeys },
          traps: [
            {
              spec: { type: "number", value: n * (n - 1) },
              feedback: `${n * (n - 1)} counts (A, B) and (B, A) twice! Symmetric encryption uses the SAME single key in both directions, so divide ${n} × ${n - 1} by 2.`,
            },
            {
              spec: { type: "number", value: 2 * n },
              feedback: `${2 * n} is the total keys in *asymmetric* encryption (1 public + 1 private per node). For pairwise symmetric keys, compute ${n} × ${n - 1} ÷ 2!`,
            },
          ],
          hint: `Each of the ${n} ${org} pairs with ${n - 1} others, and each pair shares 1 symmetric key: compute ${n} × ${n - 1} ÷ 2.`,
          solution: [
            `Number of unique pairs among ${n} ${org} = \`${n} × ${n - 1} ÷ 2\` = **${symKeys}** symmetric keys.`,
          ],
        };
      }
      return {
        prompt:
          `A network of **${n} ${org}** switches to **asymmetric encryption**, where each node generates its own Public Key and Private Key pair.\n\n` +
          `How many keys (counting every Public Key and every Private Key) exist in total across the ${n} ${org}?`,
        answer: { type: "number", value: 2 * n },
        traps: [
          {
            spec: { type: "number", value: n },
            feedback: `Each node has a *pair* of 2 keys (1 Public Key + 1 Private Key), so multiply ${n} by 2!`,
          },
          {
            spec: { type: "number", value: symKeys },
            feedback: `${symKeys} is for pairwise *symmetric* keys — in asymmetric encryption each node just needs 1 Public + 1 Private key (2 × ${n})!`,
          },
        ],
        hint: "In asymmetric encryption, every participant needs just 1 Public Key + 1 Private Key regardless of group size.",
        solution: [
          `${n} ${org} × 2 keys per node (1 Public + 1 Private) = **${2 * n}** keys total.`,
        ],
      };
    },
  },

  {
    id: "software-security-ai.robotics-expert-ai",
    topicId: "software-security-ai",
    title: "Expert System Rule Tracer & AI/Robotics Drill",
    level: 3,
    guideRef: "automated-robotics-ai",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const items: Array<{ desc: string; ans: string[]; disp: string; trap: string; tfb: string; why: string }> = [
          {
            desc: "the reasoning processor in an Expert System that applies `IF...THEN` rules to facts to deduce conclusions",
            ans: ["inference engine", "the inference engine"],
            disp: "Inference engine",
            trap: "knowledge base",
            tfb: "The knowledge base stores domain facts — the reasoning processor itself is the **inference engine**!",
            why: "The **Inference Engine** applies rules from the Rule Base to facts in the Knowledge Base.",
          },
          {
            desc: "the repository of specialist domain facts and objects inside an Expert System",
            ans: ["knowledge base", "the knowledge base"],
            disp: "Knowledge base",
            trap: "rule base",
            tfb: "The rule base stores conditional `IF...THEN` rules — domain facts sit in the **knowledge base**!",
            why: "Domain facts gathered from human experts are stored in the **Knowledge Base**.",
          },
          {
            desc: "the store of conditional `IF ... THEN ...` logical inference statements in an Expert System",
            ans: ["rule base", "the rule base"],
            disp: "Rule base",
            trap: "knowledge base",
            tfb: "The knowledge base holds facts; `IF...THEN` inference statements live in the **rule base**!",
            why: "Conditional `IF...THEN` statements form the **Rule Base**.",
          },
          {
            desc: "the Expert System component that asks the user Yes/No symptom questions and displays the final diagnosis",
            ans: ["user interface", "the user interface", "UI"],
            disp: "User interface",
            trap: "inference engine",
            tfb: "The inference engine performs internal reasoning — communicating questions and outputs to the human is the **user interface**!",
            why: "The **User Interface** handles all dialogue with the human user.",
          },
          {
            desc: "the AI subset whose algorithms train on data and automatically adapt their own models from experience without explicit reprogramming",
            ans: ["machine learning", "ML"],
            disp: "Machine learning",
            trap: "expert system",
            tfb: "Static Expert Systems rely on fixed human rules — self-adapting from training data is **Machine Learning**!",
            why: "**Machine Learning** adapts internal parameters from training data/experience without explicit reprogramming.",
          },
        ];
        const it = rng.pick(items);
        const domain = rng.pick(["medical diagnosis", "plant disease", "jet-turbine fault", "mineral prospecting", "credit-risk", "weather analysis"]);
        return {
          prompt: `[${domain} AI] Name **${it.desc}**.`,
          answer: { type: "text", accept: it.ans, display: it.disp },
          traps: [{ spec: { type: "text", accept: [it.trap] }, feedback: it.tfb }],
          hint: "Choose from: `User interface`, `Inference engine`, `Knowledge base`, `Rule base`, or `Machine learning`.",
          solution: [it.why],
        };
      }

      // Tier 2 & 3: Live forward-chaining Expert System Rule Base trace!
      const tempLimit = rng.pick([25, 30, 35, 40]);
      const moistLimit = rng.pick([30, 40, 50]);
      const tempVal = tempLimit + rng.pick([-6, -3, 4, 8]);
      const moistVal = moistLimit + rng.pick([-10, -5, 5, 12]);
      const r1 = tempVal > tempLimit;
      const r2 = moistVal < moistLimit;

      if (tier === 2) {
        const outCode = r1 && r2 ? "MIST_COOL" : r1 ? "VENT_ONLY" : r2 ? "DRIP_WATER" : "STANDBY";
        const wrongAndOr = r1 || r2 ? "MIST_COOL" : "STANDBY";
        return {
          prompt:
            `An automated greenhouse **Expert System** evaluates its **Rule Base** for ` +
            `\`Temp = ${tempVal}\` and \`Moisture = ${moistVal}\`:\n` +
            `- **Rule 1**: \`IF Temp > ${tempLimit} AND Moisture < ${moistLimit} THEN Action ← "MIST_COOL"\`\n` +
            `- **Rule 2**: \`ELSE IF Temp > ${tempLimit} THEN Action ← "VENT_ONLY"\`\n` +
            `- **Rule 3**: \`ELSE IF Moisture < ${moistLimit} THEN Action ← "DRIP_WATER"\`\n` +
            `- **Rule 4**: \`ELSE Action ← "STANDBY"\`\n\n` +
            `What exact \`Action\` string does the **Inference Engine** deduce?`,
          answer: { type: "text", accept: [outCode], display: outCode },
          traps:
            wrongAndOr !== outCode
              ? [
                  {
                    spec: { type: "text", accept: [wrongAndOr] },
                    feedback: `Check BOTH conditions carefully: \`${tempVal} > ${tempLimit}\` is ${r1 ? "TRUE" : "FALSE"}, and \`${moistVal} < ${moistLimit}\` is ${r2 ? "TRUE" : "FALSE"}!`,
                  },
                ]
              : undefined,
          hint: `Evaluate \`${tempVal} > ${tempLimit}\` and \`${moistVal} < ${moistLimit}\` first, then pick the first matching rule.`,
          solution: [
            `Check conditions: \`Temp > ${tempLimit}\` (\`${tempVal} > ${tempLimit}\`) is **${r1 ? "TRUE" : "FALSE"}**; \`Moisture < ${moistLimit}\` (\`${moistVal} < ${moistLimit}\`) is **${r2 ? "TRUE" : "FALSE"}**.`,
            `Therefore the Inference Engine selects **\`${outCode}\`**.`,
          ],
        };
      }

      // Tier 3: 3-rule forward-chaining integer risk score in an Expert System
      const vibration = rng.int(40, 95);
      const vibThresh = rng.pick([60, 70]);
      const oilTemp = rng.int(80, 130);
      const oilThresh = rng.pick([100, 110]);
      const hours = rng.pick([200, 600, 900]);
      let risk = 10;
      const fired: string[] = ["Base Risk starts at 10"];
      if (vibration >= vibThresh) {
        risk += 30;
        fired.push(`Rule 1 (\`${vibration} >= ${vibThresh}\` TRUE) adds +30 → ${risk}`);
      } else {
        fired.push(`Rule 1 (\`${vibration} >= ${vibThresh}\` FALSE) adds 0`);
      }
      if (oilTemp > oilThresh) {
        risk += 40;
        fired.push(`Rule 2 (\`${oilTemp} > ${oilThresh}\` TRUE) adds +40 → ${risk}`);
      } else {
        fired.push(`Rule 2 (\`${oilTemp} > ${oilThresh}\` FALSE) adds 0`);
      }
      if (hours >= 500 && risk >= 40) {
        risk += 20;
        fired.push(`Rule 3 (\`${hours} >= 500 AND Risk >= 40\` TRUE) adds +20 → ${risk}`);
      } else {
        fired.push(`Rule 3 (\`${hours} >= 500 AND Risk >= 40\` FALSE) adds 0`);
      }

      return {
        prompt:
          `A turbine fault **Expert System** starts with \`Risk ← 10\` and applies all three independent rules in order for \`Vibration = ${vibration}\`, \`OilTemp = ${oilTemp}\`, \`RunHours = ${hours}\`:\n` +
          `1. \`IF Vibration >= ${vibThresh} THEN Risk ← Risk + 30\`\n` +
          `2. \`IF OilTemp > ${oilThresh} THEN Risk ← Risk + 40\`\n` +
          `3. \`IF RunHours >= 500 AND Risk >= 40 THEN Risk ← Risk + 20\`\n\n` +
          `What final integer value of \`Risk\` does the **Inference Engine** output?`,
        answer: { type: "number", value: risk },
        traps: [
          {
            spec: { type: "number", value: risk - 10 },
            feedback: "Don't forget `Risk` starts initialised at **10** before Rule 1 runs!",
          },
        ],
        hint: "Start at Risk = 10, test Rule 1, test Rule 2, then use the UPDATED Risk when testing Rule 3!",
        solution: [...fired, `Final deduced \`Risk\` = **${risk}**.`],
      };
    },
  },
];
