# Episode 6: Boolean Logic & Logic Circuits — "Exclusive Or Nothing"
EP = dict(
    topic="logic-gates",
    logline="Dad wires the kitchen hallway and his secret durian-puff vault with homemade logic gates, forcing Centi and Tara to rescue the house with truth tables, XOR switches, and CIE sensor expressions.",
)

DIAG_BASIC = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 190">'
    '<rect x="6" y="6" width="508" height="178" rx="12" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>'
    # NOT
    '<text x="90" y="32" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#38bdf8">NOT (1 Input)</text>'
    '<line x1="28" y1="82" x2="62" y2="82" stroke="#e2e8f0" stroke-width="2.5"/>'
    '<polygon points="62,60 62,104 106,82" fill="#0c4a6e" stroke="#38bdf8" stroke-width="2.5"/>'
    '<circle cx="112" cy="82" r="5" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>'
    '<line x1="117" y1="82" x2="148" y2="82" stroke="#4ade80" stroke-width="2.5"/>'
    '<text x="90" y="132" text-anchor="middle" font-family="monospace" font-size="12" fill="#f8fafc">0→1 | 1→0</text>'
    '<text x="90" y="154" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#94a3b8">Triangle + Bubble</text>'
    # AND
    '<text x="260" y="32" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#4ade80">AND (anD)</text>'
    '<line x1="196" y1="70" x2="232" y2="70" stroke="#e2e8f0" stroke-width="2.5"/>'
    '<line x1="196" y1="94" x2="232" y2="94" stroke="#e2e8f0" stroke-width="2.5"/>'
    '<path d="M232,58 L258,58 A24,24 0 0,1 258,106 L232,106 Z" fill="#14532d" stroke="#4ade80" stroke-width="2.5"/>'
    '<line x1="282" y1="82" x2="316" y2="82" stroke="#4ade80" stroke-width="2.5"/>'
    '<text x="260" y="132" text-anchor="middle" font-family="monospace" font-size="12" fill="#f8fafc">Col: 0001</text>'
    '<text x="260" y="154" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#94a3b8">Flat vertical back</text>'
    # OR
    '<text x="430" y="32" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fbbf24">OR (Inclusive)</text>'
    '<line x1="366" y1="70" x2="404" y2="70" stroke="#e2e8f0" stroke-width="2.5"/>'
    '<line x1="366" y1="94" x2="404" y2="94" stroke="#e2e8f0" stroke-width="2.5"/>'
    '<path d="M396,58 Q412,82 396,106 Q432,106 456,82 Q432,58 396,58 Z" fill="#78350f" stroke="#fbbf24" stroke-width="2.5"/>'
    '<line x1="456" y1="82" x2="490" y2="82" stroke="#fbbf24" stroke-width="2.5"/>'
    '<text x="430" y="132" text-anchor="middle" font-family="monospace" font-size="12" fill="#f8fafc">Col: 0111</text>'
    '<text x="430" y="154" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#94a3b8">Curved shield</text>'
    '</svg>'
)

DIAG_DERIVED = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 190">'
    '<rect x="6" y="6" width="508" height="178" rx="12" fill="#0f172a" stroke="#c084fc" stroke-width="2"/>'
    # NAND
    '<text x="90" y="32" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#c084fc">NAND</text>'
    '<line x1="26" y1="70" x2="58" y2="70" stroke="#e2e8f0" stroke-width="2.5"/>'
    '<line x1="26" y1="94" x2="58" y2="94" stroke="#e2e8f0" stroke-width="2.5"/>'
    '<path d="M58,58 L84,58 A24,24 0 0,1 84,106 L58,106 Z" fill="#3b0764" stroke="#c084fc" stroke-width="2.5"/>'
    '<circle cx="114" cy="82" r="5" fill="#0f172a" stroke="#c084fc" stroke-width="2.5"/>'
    '<line x1="119" y1="82" x2="148" y2="82" stroke="#c084fc" stroke-width="2.5"/>'
    '<text x="90" y="132" text-anchor="middle" font-family="monospace" font-size="12" fill="#f8fafc">Col: 1110</text>'
    '<text x="90" y="154" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#94a3b8">D-shape + Bubble</text>'
    # NOR
    '<text x="260" y="32" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#f472b6">NOR</text>'
    '<line x1="194" y1="70" x2="230" y2="70" stroke="#e2e8f0" stroke-width="2.5"/>'
    '<line x1="194" y1="94" x2="230" y2="94" stroke="#e2e8f0" stroke-width="2.5"/>'
    '<path d="M222,58 Q238,82 222,106 Q258,106 280,82 Q258,58 222,58 Z" fill="#500724" stroke="#f472b6" stroke-width="2.5"/>'
    '<circle cx="286" cy="82" r="5" fill="#0f172a" stroke="#f472b6" stroke-width="2.5"/>'
    '<line x1="291" y1="82" x2="318" y2="82" stroke="#f472b6" stroke-width="2.5"/>'
    '<text x="260" y="132" text-anchor="middle" font-family="monospace" font-size="12" fill="#f8fafc">Col: 1000</text>'
    '<text x="260" y="154" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#94a3b8">Curved + Bubble</text>'
    # XOR
    '<text x="430" y="32" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#38bdf8">XOR (Diff)</text>'
    '<line x1="364" y1="70" x2="398" y2="70" stroke="#e2e8f0" stroke-width="2.5"/>'
    '<line x1="364" y1="94" x2="398" y2="94" stroke="#e2e8f0" stroke-width="2.5"/>'
    '<path d="M392,58 Q408,82 392,106" fill="none" stroke="#38bdf8" stroke-width="2.5"/>'
    '<path d="M400,58 Q416,82 400,106 Q436,106 460,82 Q436,58 400,58 Z" fill="#0c4a6e" stroke="#38bdf8" stroke-width="2.5"/>'
    '<line x1="460" y1="82" x2="492" y2="82" stroke="#38bdf8" stroke-width="2.5"/>'
    '<text x="430" y="132" text-anchor="middle" font-family="monospace" font-size="12" fill="#fde047">Col: 0110</text>'
    '<text x="430" y="154" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#94a3b8">Double input curve!</text>'
    '</svg>'
)

DIAG_CIRCUIT = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 200">'
    '<rect x="6" y="6" width="508" height="188" rx="12" fill="#0f172a" stroke="#4ade80" stroke-width="2"/>'
    '<text x="260" y="28" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fde047">3-Input Trace: X = (A NAND B) XOR (B NOR C)</text>'
    '<text x="30" y="64" font-family="monospace" font-size="13" font-weight="bold" fill="#f8fafc">A</text>'
    '<text x="30" y="96" font-family="monospace" font-size="13" font-weight="bold" fill="#f8fafc">B</text>'
    '<text x="30" y="156" font-family="monospace" font-size="13" font-weight="bold" fill="#f8fafc">C</text>'
    '<line x1="46" y1="59" x2="132" y2="59" stroke="#c084fc" stroke-width="2.5"/>'
    '<line x1="46" y1="91" x2="132" y2="91" stroke="#4ade80" stroke-width="2.5"/>'
    '<circle cx="92" cy="91" r="4" fill="#4ade80"/>'
    '<path d="M92,91 L92,128 L136,128" fill="none" stroke="#4ade80" stroke-width="2.5"/>'
    '<line x1="46" y1="151" x2="136" y2="151" stroke="#f472b6" stroke-width="2.5"/>'
    # P = A NAND B
    '<path d="M132,51 L158,51 A24,24 0 0,1 158,99 L132,99 Z" fill="#3b0764" stroke="#c084fc" stroke-width="2.2"/>'
    '<circle cx="187" cy="75" r="4.5" fill="#0f172a" stroke="#c084fc" stroke-width="2.2"/>'
    '<path d="M192,75 L270,75 L270,100 L322,100" fill="none" stroke="#c084fc" stroke-width="2.5"/>'
    '<text x="234" y="68" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#c084fc">Wire P</text>'
    # Q = B NOR C
    '<path d="M128,116 Q144,140 128,164 Q164,164 186,140 Q164,116 128,116 Z" fill="#500724" stroke="#f472b6" stroke-width="2.2"/>'
    '<circle cx="192" cy="140" r="4.5" fill="#0f172a" stroke="#f472b6" stroke-width="2.2"/>'
    '<path d="M197,140 L270,140 L270,122 L322,122" fill="none" stroke="#f472b6" stroke-width="2.5"/>'
    '<text x="234" y="158" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#f472b6">Wire Q</text>'
    # X = P XOR Q
    '<path d="M316,88 Q332,111 316,134" fill="none" stroke="#38bdf8" stroke-width="2.5"/>'
    '<path d="M324,88 Q340,111 324,134 Q360,134 384,111 Q360,88 324,88 Z" fill="#0c4a6e" stroke="#38bdf8" stroke-width="2.5"/>'
    '<line x1="384" y1="111" x2="438" y2="111" stroke="#fde047" stroke-width="3"/>'
    '<text x="466" y="116" text-anchor="middle" font-family="monospace" font-size="15" font-weight="bold" fill="#fde047">X</text>'
    '<text x="260" y="182" text-anchor="middle" font-family="monospace" font-size="11" fill="#e2e8f0">2^3 = 8 rows (000..111) · Fill P, then Q, then X!</text>'
    '</svg>'
)

DIAG_CONTROL = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 190">'
    '<rect x="6" y="6" width="508" height="178" rx="12" fill="#0f172a" stroke="#fbbf24" stroke-width="2"/>'
    '<text x="260" y="28" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="bold" fill="#fbbf24">Vault Safety Rule: X = (G AND NOT T) OR M</text>'
    '<text x="24" y="64" font-family="monospace" font-size="12" fill="#4ade80">G=1 Guard Shut</text>'
    '<text x="24" y="108" font-family="monospace" font-size="12" fill="#38bdf8">T=0 Temp Safe!</text>'
    '<text x="24" y="154" font-family="monospace" font-size="12" fill="#fbbf24">M=1 Override</text>'
    # NOT on T
    '<line x1="138" y1="104" x2="168" y2="104" stroke="#38bdf8" stroke-width="2.5"/>'
    '<polygon points="168,88 168,120 202,104" fill="#0c4a6e" stroke="#38bdf8" stroke-width="2.2"/>'
    '<circle cx="207" cy="104" r="4.5" fill="#0f172a" stroke="#38bdf8" stroke-width="2.2"/>'
    # AND on G and NOT T
    '<path d="M138,60 L238,60 L238,72 L258,72" fill="none" stroke="#4ade80" stroke-width="2.5"/>'
    '<path d="M212,104 L238,104 L238,92 L258,92" fill="none" stroke="#38bdf8" stroke-width="2.5"/>'
    '<path d="M258,60 L282,60 A22,22 0 0,1 282,104 L258,104 Z" fill="#14532d" stroke="#4ade80" stroke-width="2.2"/>'
    # OR with M
    '<path d="M304,82 L346,82 L346,112 L374,112" fill="none" stroke="#4ade80" stroke-width="2.5"/>'
    '<path d="M138,150 L346,150 L346,132 L374,132" fill="none" stroke="#fbbf24" stroke-width="2.5"/>'
    '<path d="M366,100 Q382,122 366,144 Q402,144 426,122 Q402,100 366,100 Z" fill="#78350f" stroke="#fbbf24" stroke-width="2.2"/>'
    '<line x1="426" y1="122" x2="466" y2="122" stroke="#4ade80" stroke-width="3"/>'
    '<text x="484" y="126" text-anchor="middle" font-family="monospace" font-size="14" font-weight="bold" fill="#4ade80">X</text>'
    '<text x="260" y="174" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#fde047">Precedence: NOT first → AND second → OR last (Always bracket!)</text>'
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
