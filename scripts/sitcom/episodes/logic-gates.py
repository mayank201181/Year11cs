# Episode 6: Boolean Logic & Logic Circuits — "Exclusive Or Nothing"
EP = dict(
    topic="logic-gates",
    logline="Dad wires the kitchen hallway and his secret durian-puff vault with homemade logic gates, forcing Centi and Tara to rescue the house with truth tables, XOR switches, and CIE sensor expressions.",
)

DIAG_BASIC = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="8" y="8" width="764" height="334" rx="14" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>'
    '<text x="135" y="56" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#38bdf8">NOT (1 in)</text>'
    '<line x1="42" y1="150" x2="92" y2="150" stroke="#e2e8f0" stroke-width="4"/>'
    '<polygon points="92,112 92,188 162,150" fill="#0c4a6e" stroke="#38bdf8" stroke-width="3.5"/>'
    '<circle cx="172" cy="150" r="8" fill="#0f172a" stroke="#38bdf8" stroke-width="3.5"/>'
    '<line x1="180" y1="150" x2="228" y2="150" stroke="#4ade80" stroke-width="4"/>'
    '<text x="135" y="250" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#f8fafc">0→1 | 1→0</text>'
    '<text x="135" y="308" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#94a3b8">Inverter</text>'
    '<text x="390" y="56" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#4ade80">AND (anD)</text>'
    '<line x1="292" y1="130" x2="344" y2="130" stroke="#e2e8f0" stroke-width="4"/>'
    '<line x1="292" y1="170" x2="344" y2="170" stroke="#e2e8f0" stroke-width="4"/>'
    '<path d="M344,110 L386,110 A40,40 0 0,1 386,190 L344,190 Z" fill="#14532d" stroke="#4ade80" stroke-width="3.5"/>'
    '<line x1="426" y1="150" x2="478" y2="150" stroke="#4ade80" stroke-width="4"/>'
    '<text x="390" y="250" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#f8fafc">0 0 0 1</text>'
    '<text x="390" y="308" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#94a3b8">Flat back</text>'
    '<text x="645" y="56" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fbbf24">OR (Incl.)</text>'
    '<line x1="548" y1="130" x2="604" y2="130" stroke="#e2e8f0" stroke-width="4"/>'
    '<line x1="548" y1="170" x2="604" y2="170" stroke="#e2e8f0" stroke-width="4"/>'
    '<path d="M594,110 Q618,150 594,190 Q652,190 688,150 Q652,110 594,110 Z" fill="#78350f" stroke="#fbbf24" stroke-width="3.5"/>'
    '<line x1="688" y1="150" x2="738" y2="150" stroke="#fbbf24" stroke-width="4"/>'
    '<text x="645" y="250" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#f8fafc">0 1 1 1</text>'
    '<text x="645" y="308" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#94a3b8">Curved</text>'
    '</svg>'
)

DIAG_DERIVED = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="8" y="8" width="764" height="334" rx="14" fill="#0f172a" stroke="#c084fc" stroke-width="2.5"/>'
    '<text x="135" y="56" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#c084fc">NAND</text>'
    '<line x1="36" y1="130" x2="84" y2="130" stroke="#e2e8f0" stroke-width="4"/>'
    '<line x1="36" y1="170" x2="84" y2="170" stroke="#e2e8f0" stroke-width="4"/>'
    '<path d="M84,110 L126,110 A40,40 0 0,1 126,190 L84,190 Z" fill="#3b0764" stroke="#c084fc" stroke-width="3.5"/>'
    '<circle cx="176" cy="150" r="8" fill="#0f172a" stroke="#c084fc" stroke-width="3.5"/>'
    '<line x1="184" y1="150" x2="228" y2="150" stroke="#c084fc" stroke-width="4"/>'
    '<text x="135" y="250" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#f8fafc">1 1 1 0</text>'
    '<text x="135" y="308" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#94a3b8">D + Bubble</text>'
    '<text x="390" y="56" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#f472b6">NOR</text>'
    '<line x1="290" y1="130" x2="344" y2="130" stroke="#e2e8f0" stroke-width="4"/>'
    '<line x1="290" y1="170" x2="344" y2="170" stroke="#e2e8f0" stroke-width="4"/>'
    '<path d="M332,110 Q356,150 332,190 Q390,190 426,150 Q390,110 332,110 Z" fill="#500724" stroke="#f472b6" stroke-width="3.5"/>'
    '<circle cx="436" cy="150" r="8" fill="#0f172a" stroke="#f472b6" stroke-width="3.5"/>'
    '<line x1="444" y1="150" x2="484" y2="150" stroke="#f472b6" stroke-width="4"/>'
    '<text x="390" y="250" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#f8fafc">1 0 0 0</text>'
    '<text x="390" y="308" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#94a3b8">OR + Bubble</text>'
    '<text x="645" y="56" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#38bdf8">XOR (Diff)</text>'
    '<line x1="544" y1="130" x2="594" y2="130" stroke="#e2e8f0" stroke-width="4"/>'
    '<line x1="544" y1="170" x2="594" y2="170" stroke="#e2e8f0" stroke-width="4"/>'
    '<path d="M584,110 Q608,150 584,190" fill="none" stroke="#38bdf8" stroke-width="3.5"/>'
    '<path d="M598,110 Q622,150 598,190 Q656,190 692,150 Q656,110 598,110 Z" fill="#0c4a6e" stroke="#38bdf8" stroke-width="3.5"/>'
    '<line x1="692" y1="150" x2="740" y2="150" stroke="#38bdf8" stroke-width="4"/>'
    '<text x="645" y="250" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#fde047">0 1 1 0</text>'
    '<text x="645" y="308" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#94a3b8">2x curve!</text>'
    '</svg>'
)

DIAG_CIRCUIT = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="8" y="8" width="764" height="334" rx="14" fill="#0f172a" stroke="#4ade80" stroke-width="2.5"/>'
    '<text x="390" y="48" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047">X = (A NAND B) XOR (B NOR C)</text>'
    '<text x="42" y="108" font-family="monospace" font-size="28" font-weight="bold" fill="#f8fafc">A</text>'
    '<text x="42" y="164" font-family="monospace" font-size="28" font-weight="bold" fill="#f8fafc">B</text>'
    '<text x="42" y="264" font-family="monospace" font-size="28" font-weight="bold" fill="#f8fafc">C</text>'
    '<line x1="74" y1="98" x2="200" y2="98" stroke="#c084fc" stroke-width="4"/>'
    '<line x1="74" y1="154" x2="200" y2="154" stroke="#4ade80" stroke-width="4"/>'
    '<circle cx="140" cy="154" r="6" fill="#4ade80"/>'
    '<path d="M140,154 L140,214 L206,214" fill="none" stroke="#4ade80" stroke-width="4"/>'
    '<line x1="74" y1="254" x2="206" y2="254" stroke="#f472b6" stroke-width="4"/>'
    '<path d="M200,84 L240,84 A42,42 0 0,1 240,168 L200,168 Z" fill="#3b0764" stroke="#c084fc" stroke-width="3.5"/>'
    '<circle cx="290" cy="126" r="8" fill="#0f172a" stroke="#c084fc" stroke-width="3.5"/>'
    '<path d="M298,126 L418,126 L418,166 L486,166" fill="none" stroke="#c084fc" stroke-width="4"/>'
    '<text x="364" y="112" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#c084fc">Wire P</text>'
    '<path d="M196,196 Q220,234 196,272 Q252,272 288,234 Q252,196 196,196 Z" fill="#500724" stroke="#f472b6" stroke-width="3.5"/>'
    '<circle cx="297" cy="234" r="8" fill="#0f172a" stroke="#f472b6" stroke-width="3.5"/>'
    '<path d="M305,234 L418,234 L418,200 L486,200" fill="none" stroke="#f472b6" stroke-width="4"/>'
    '<text x="364" y="274" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#f472b6">Wire Q</text>'
    '<path d="M476,144 Q500,183 476,222" fill="none" stroke="#38bdf8" stroke-width="3.5"/>'
    '<path d="M490,144 Q514,183 490,222 Q548,222 586,183 Q548,144 490,144 Z" fill="#0c4a6e" stroke="#38bdf8" stroke-width="3.5"/>'
    '<line x1="586" y1="183" x2="676" y2="183" stroke="#fde047" stroke-width="4.5"/>'
    '<text x="710" y="194" text-anchor="middle" font-family="monospace" font-size="34" font-weight="bold" fill="#fde047">X</text>'
    '<text x="390" y="324" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#e2e8f0">2³ = 8 rows (000..111): Fill P, Q, then X!</text>'
    '</svg>'
)

DIAG_CONTROL = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="8" y="8" width="764" height="334" rx="14" fill="#0f172a" stroke="#fbbf24" stroke-width="2.5"/>'
    '<text x="390" y="48" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fbbf24">Vault Rule: X = (G AND NOT T) OR M</text>'
    '<text x="26" y="114" font-family="monospace" font-size="28" font-weight="bold" fill="#4ade80">G=1 Shut</text>'
    '<text x="26" y="186" font-family="monospace" font-size="28" font-weight="bold" fill="#38bdf8">T=0 Safe</text>'
    '<text x="26" y="264" font-family="monospace" font-size="28" font-weight="bold" fill="#fbbf24">M=1 Over</text>'
    '<line x1="194" y1="178" x2="244" y2="178" stroke="#38bdf8" stroke-width="4"/>'
    '<polygon points="244,148 244,208 302,178" fill="#0c4a6e" stroke="#38bdf8" stroke-width="3.5"/>'
    '<circle cx="311" cy="178" r="7" fill="#0f172a" stroke="#38bdf8" stroke-width="3.5"/>'
    '<path d="M194,104 L366,104 L366,124 L394,124" fill="none" stroke="#4ade80" stroke-width="4"/>'
    '<path d="M318,178 L366,178 L366,158 L394,158" fill="none" stroke="#38bdf8" stroke-width="4"/>'
    '<path d="M394,104 L434,104 A36,36 0 0,1 434,176 L394,176 Z" fill="#14532d" stroke="#4ade80" stroke-width="3.5"/>'
    '<path d="M470,140 L526,140 L526,186 L568,186" fill="none" stroke="#4ade80" stroke-width="4"/>'
    '<path d="M194,254 L526,254 L526,220 L568,220" fill="none" stroke="#fbbf24" stroke-width="4"/>'
    '<path d="M558,166 Q582,203 558,240 Q616,240 654,203 Q616,166 558,166 Z" fill="#78350f" stroke="#fbbf24" stroke-width="3.5"/>'
    '<line x1="654" y1="203" x2="706" y2="203" stroke="#4ade80" stroke-width="4.5"/>'
    '<text x="734" y="214" text-anchor="middle" font-family="monospace" font-size="34" font-weight="bold" fill="#4ade80">X</text>'
    '<text x="390" y="324" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047">Order: NOT first → AND → OR (Bracket!)</text>'
    '</svg>'
)

# ---------------- COLD OPEN ----------------
scene("kitchen", [("dad", 280), ("mum", 620), ("tara", 940)], "Kitchen · Midnight Durian-Puff Crisis")
L("dad", "Behold! I wired a Boolean smart-switch for the hallway lamp and a sensor lock on the fridge to guard my durian puffs.", mood="smug", shot="wide", prop="calculator")
L("mum", "Is that why the hallway bulb has been blazing since Tuesday even though we flipped both wall switches?", mood="annoyed", shot="two")
L("dad", "Switch A is one, Switch B is one, and I soldered an OR gate! In English, tea or coffee means picking both gets you nothing, right?", mood="thinking", shot="close")
sfx("buzzer")
L("tara", "Dad! In Boolean logic, OR is inclusive! One OR one equals one! Your lamp can never turn off while both switches are up!", mood="shock", shot="two", prop="tablet")
L("mum", "And why is the fridge siren howling when the fridge is stone cold?", mood="eyeroll", shot="close")
L("dad", "Sensor T outputs zero when safe and one when warm, so I wired T straight into the unlock gate!", mood="worried", shot="close")
freeze("INCLUSIVE DISASTER!", dur=2.5, narrator="When everyday English meets silicon logic, the durian puffs pay the price.")

title()

# ---------------- ACT 1: NOT, AND, OR ----------------
scene("living", [("tara", 280), ("dad", 600)], "Living Room · Summoning the Holo-Board")
poof("centi", 940)
sfx("poof")
L("centi", "Did somebody confuse inclusive OR with exclusive OR? Step away from the soldering iron and check the Cambridge syllabus!", mood="teach", shot="wide")
L("centi", "Logic circuits run on two binary states: zero for false, and one for true. Meet the three core gates.", mood="teach", shot="two", boardClear=True, diagram=DIAG_BASIC, board="NOT: 1 input (0→1, 1→0)")
L("tara", "First is the NOT gate, the inverter! It is the only syllabus gate with a single input wire.", mood="happy", shot="close", board="AND: flat D-back (0001)")
L("centi", "Draw a triangle pointing right plus an inversion bubble on its nose. Omit that bubble and you lose the mark!", mood="teach", shot="close", board="OR: curved shield (0111)")
L("dad", "Okay, and the middle gate looks just like a capital D!", mood="excited", shot="two")
L("tara", "Exactly! AND ends in a capital D, so draw a flat vertical back. It outputs one only when both A and B are one.", mood="smug", shot="two")
L("centi", "Meanwhile OR has a curved back and pointed shield. Standard OR outputs one whenever at least one input is one: zero, one, one, one!", mood="teach", shot="wide")

challenge(
    1,
    "4-row column (00..11): X = (NOT A) AND B",
    "0100",
    "NOT A = 1100; 1100 AND 0101 = 0100",
    "Pause and solve! From zero zero down to one one, what is the four-bit output column for X equals NOT A, AND B?",
    "Flip A first to get one, one, zero, zero. Now AND that with B, zero, one, zero, one. Only row zero one has two ones, giving zero one zero zero!",
)

# ---------------- ACT 2: NAND, NOR, XOR ----------------
L("dad", "Hold on, Centi. If OR stays one on one one, which gate actually runs a two-way staircase light?", mood="thinking", shot="two", boardClear=True, diagram=DIAG_DERIVED, board="NAND = NOT(A AND B) → 1110")
L("centi", "Meet NAND, NOR, and the hero your hallway needed: XOR!", mood="excited", shot="wide", board="NOR  = NOT(A OR B)  → 1000")
L("tara", "NAND and NOR just add an output bubble onto AND and OR. Compute the base gate first, then flip every bit!", mood="teach", shot="close", board="XOR  = inputs differ → 0110")
L("centi", "So NAND gives one one one zero, outputting zero only on one one. NOR gives one zero zero zero, outputting one only on zero zero.", mood="teach", shot="close")
L("dad", "And XOR has that extra curved line on the input side with no bubble at the tip!", mood="happy", shot="two")
L("tara", "XOR means Exclusive OR: output one when A and B differ, and zero when they match! Zero, one, one, zero!", mood="excited", shot="two")
L("centi", "Chip makers also love universal NAND gates: tie both inputs together to wire A, and A NAND A builds NOT A!", mood="smug", shot="close")
L("tara", "Does XOR do anything else inside a real processor?", mood="thinking", shot="two")
L("centi", "Inside the Arithmetic Logic Unit, one XOR gate finds the Sum bit while one AND gate finds the Carry bit — a Half Adder!", mood="excited", shot="two")
L("dad", "Because binary one plus one is one zero: Carry one from AND, Sum zero from XOR!", mood="happy", shot="close")
L("tara", "Whoa, Dad actually nailed one! Mark the calendar!", mood="happy", shot="two")

confess("dad", "Dad · Self-Taught Gate Artist")
L("dad", "I drew bubbles on my XOR gates too because they looked like tapioca pearls. Turns out that makes XNOR and locks your snacks forever.", mood="deadpan", shot="close")

# ---------------- ACT 3: MULTI-GATE 3-INPUT CIRCUITS ----------------
scene("living", [("tara", 280), ("dad", 600), ("centi", 940)], "Living Room · Conquering 8-Row Truth Tables")
L("centi", "Now for four-mark Paper Two truth tables. With three inputs A, B, and C, how many rows do we need, Dad?", mood="teach", shot="wide", boardClear=True, diagram=DIAG_CIRCUIT, board="3 inputs → 2^3 = 8 rows")
L("dad", "Three inputs times two states... six rows?", mood="worried", shot="close")
sfx("buzzer")
L("tara", "Powers of two, Dad! Two cubed equals eight rows, counting in binary from zero zero zero to one one one!", mood="annoyed", shot="two", board="C flips every 1, B every 2, A every 4")
L("centi", "Never juggle four gates in your head. Label internal wires P and Q, and write rough helper columns in the margin!", mood="teach", shot="close", board="Trace P vertically, Q vertically, then X!")
L("tara", "Notice shared wire B splitting at that dot: P is A NAND B, and Q is B NOR C, using the exact same B bit!", mood="determined", shot="two")
L("centi", "Fill column P vertically, fill column Q vertically, then combine P and Q with XOR. Fast, calm, full four marks!", mood="happy", shot="wide")
L("dad", "What if a question gives X equals one and asks me to work backwards?", mood="thinking", shot="two")
L("tara", "Use the strict gates! NOR equals one forces both inputs to zero, and AND equals one forces both inputs to one!", mood="teach", shot="close")
L("centi", "Spot on! Working backwards from NOR equals one or NAND equals zero slices any puzzle in half.", mood="happy", shot="two")

challenge(
    2,
    "X = (A NAND B) XOR C at A=1, B=1, C=1",
    "1",
    "P = 1 NAND 1 = 0; X = 0 XOR 1 = 1",
    "Your turn! In X equals open bracket A NAND B close bracket XOR C, what is X when A is one, B is one, and C is one?",
    "First find wire P: one NAND one flips one AND one to zero! Next feed zero and C equals one into XOR. Zero XOR one equals one!",
)

# ---------------- ACT 4: EXAMINER TRAP & CONTROL PROBLEMS ----------------
card("EXAMINER MARK-SCHEME TRAP", "Sensor Zero-States, Sloppy Symbols & Missing Brackets", dur=3.0)

scene("living", [("tara", 280), ("dad", 600), ("centi", 940)], "Living Room · Roasting the Mark-Losing Blunders")
L("centi", "Red alert! Every year on Paper Two, marks vanish into three classic traps. Let us audit Dad's fridge lock!", mood="determined", shot="wide", boardClear=True, diagram=DIAG_CONTROL, board="❌ Safe T=0 written as T")
L("tara", "Trap one: sensor zero states! Guard shut is G equals one, override is M equals one, but safe cold temperature is T equals zero!", mood="teach", shot="close", board="✅ Safe T=0 MUST be NOT T!")
L("dad", "Oh! When the fridge was cold, T sent zero, so my AND gate saw zero and locked me out!", mood="shock", shot="close")
L("centi", "Whenever a required state is zero in the table, you must write NOT T so safe zero flips to true one!", mood="teach", shot="two", board="✅ Cascade 2-input gates (never 3-in!)")
L("tara", "Trap two: never invent a three-input gate symbol! Cascade two standard two-input AND gates in series instead.", mood="smug", shot="two")
L("centi", "Trap three: precedence! Without brackets, evaluate NOT first, then AND, then OR — Naughty Ants Order — and always write brackets!", mood="teach", shot="wide")
L("dad", "Can I write algebra dots, or write NOT A, AND NOT B when I mean A NAND B?", mood="worried", shot="two")
sfx("buzzer")
L("tara", "Never! Write uppercase words NOT, AND, OR, NAND, NOR, XOR on Cambridge papers!", mood="annoyed", shot="close")
L("centi", "And NOT A, AND NOT B gives one zero zero zero — that is A NOR B by De Morgan's Law, never NAND!", mood="teach", shot="two")
L("dad", "Compute AND first, then flip at the bubble. Tattooed on my brain!", mood="determined", shot="close")

challenge(
    3,
    "X = (G AND NOT T) OR M at G=1, T=1, M=0",
    "0",
    "NOT T = 0; (1 AND 0) OR 0 = 0",
    "Final check! In X equals open bracket G AND NOT T close bracket OR M, what is X when G is one, T is one meaning overheated, and M is zero?",
    "Since T is one, NOT T flips to zero! One AND zero gives zero, and zero OR zero gives zero. The hot vault stays locked!",
)

# ---------------- TAG SCENE ----------------
scene("kitchen", [("dad", 280), ("mum", 620), ("tara", 940)], "Kitchen · Boolean Justice")
sfx("ding")
L("dad", "Rewired! Hallway on XOR, fridge lock on G AND NOT T, OR manual override M!", mood="happy", shot="wide")
L("mum", "Lovely. And what happens when manual override M equals one into that final OR gate?", mood="smug", shot="two", prop="plate")
L("tara", "Anything OR one equals one! Mum holds the override key, Dad — Boolean law says we get the durian puffs!", mood="excited", shot="two")
L("dad", "Wait, I meant AND M! Hand back my soldering iron!", mood="sad", shot="close")
sfx("trombone")

end_card()
