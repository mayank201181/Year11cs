# Episode 7: "Bubble Sort Your Life Out" — CIE 0478 Topic 7: Algorithms, Validation, Testing & Trace Tables
EP = dict(
    topic="algorithms-testing",
    logline="Dad tries to Bubble Sort Mum's spice rack without a Temp jar and builds a suitcase app that thinks validation proves accuracy, until Centi deploys trace tables and boundary pairs.",
)

DIAG_PDLC_FLOW = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="8" y="8" width="764" height="334" rx="14" fill="#0f172a"/>'
    '<rect x="26" y="34" width="224" height="68" rx="34" fill="#dc2626"/>'
    '<text x="138" y="78" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fff">START / STOP</text>'
    '<polygon points="292,34 494,34 470,102 268,102" fill="#2563eb"/>'
    '<text x="381" y="78" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fff">IN / OUT</text>'
    '<rect x="514" y="34" width="242" height="68" rx="8" fill="#16a34a"/>'
    '<text x="635" y="78" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#fff">Sum←Sum+X</text>'
    '<polygon points="185,134 315,212 185,290 55,212" fill="#d97706"/>'
    '<text x="185" y="222" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fff">Swap?</text>'
    '<text x="332" y="220" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">Yes</text>'
    '<text x="185" y="328" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fca5a5">No</text>'
    '<rect x="444" y="168" width="312" height="88" rx="8" fill="#7c3aed"/>'
    '<line x1="468" y1="168" x2="468" y2="256" stroke="#ddd6fe" stroke-width="3"/>'
    '<line x1="732" y1="168" x2="732" y2="256" stroke="#ddd6fe" stroke-width="3"/>'
    '<text x="600" y="222" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fff">Subroutine</text>'
    '</svg>'
)

DIAG_BUBBLE = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="8" y="8" width="764" height="334" rx="14" fill="#0f172a"/>'
    '<text x="390" y="54" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde68a">Bubble Sort Pass 1 on [30, 12, 24, 8]</text>'
    '<rect x="34" y="92" width="100" height="80" rx="10" fill="#dc2626"/>'
    '<text x="84" y="144" text-anchor="middle" font-family="monospace" font-size="34" font-weight="bold" fill="#fff">12</text>'
    '<rect x="150" y="92" width="100" height="80" rx="10" fill="#2563eb"/>'
    '<text x="200" y="144" text-anchor="middle" font-family="monospace" font-size="34" font-weight="bold" fill="#fff">24</text>'
    '<rect x="266" y="92" width="100" height="80" rx="10" fill="#2563eb"/>'
    '<text x="316" y="144" text-anchor="middle" font-family="monospace" font-size="34" font-weight="bold" fill="#fff">8</text>'
    '<rect x="382" y="92" width="100" height="80" rx="10" fill="#16a34a"/>'
    '<text x="432" y="144" text-anchor="middle" font-family="monospace" font-size="34" font-weight="bold" fill="#fff">30</text>'
    '<rect x="514" y="92" width="234" height="80" rx="10" fill="#b45309"/>'
    '<text x="631" y="142" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#fff">Temp←A[i]</text>'
    '<text x="390" y="242" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#93c5fd">30 swaps 3× to lock at end; Last − 1!</text>'
    '<text x="390" y="302" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">Swap = FALSE on clean pass stops early!</text>'
    '</svg>'
)

DIAG_TESTDATA = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="8" y="8" width="764" height="334" rx="14" fill="#0f172a"/>'
    '<text x="390" y="50" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#f8fafc">Valid Marks: 1 to 100 Inclusive</text>'
    '<text x="206" y="106" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde68a">Boundary: 0, 1</text>'
    '<text x="574" y="106" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde68a">Boundary: 100, 101</text>'
    '<rect x="24" y="128" width="164" height="72" rx="10" fill="#991b1b"/>'
    '<text x="106" y="174" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#fecaca">Rej: 0</text>'
    '<rect x="198" y="128" width="384" height="72" rx="10" fill="#166534"/>'
    '<text x="390" y="174" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#bbf7d0">Accept: 1..45..100</text>'
    '<rect x="592" y="128" width="164" height="72" rx="10" fill="#991b1b"/>'
    '<text x="674" y="174" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#fecaca">Rej:101</text>'
    '<text x="390" y="258" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">Extreme = 1 &amp; 100 ONLY (Accepted!)</text>'
    '<text x="390" y="314" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fca5a5">Validation=Sensible · Verify=Accurate</text>'
    '</svg>'
)

# --- COLD OPEN ---
scene("kitchen", [("dad", 360), ("tara", 680), ("mum", 960)], "Kitchen · Spice Rack Sorting Emergency")
L("dad", "Stand back, ladies! I am algorithmically sorting the kitchen spice rack into ascending scoville heat order!", mood="excited", shot="wide", prop="plate")
L("mum", "Why is all my sweet cinnamon mixed into the fiery chilli powder jar?", mood="shock", shot="two")
L("dad", "Well, chilli beat cinnamon, so I poured cinnamon straight into the chilli jar before emptying the chilli jar!", mood="worried", shot="two")
L("tara", "Dad! You overwrote your variable without a temporary jar! Now both jars hold spicy cinnamon!", mood="eyeroll", shot="close")
L("mum", "My apple pie tonight is going to set off the smoke alarm!", mood="annoyed", shot="two")
sfx("trombone")
freeze("NO TEMP VARIABLE!")

title()

# --- ACT 1: ABSTRACTION, DECOMPOSITION, PDLC & FLOWCHARTS ---
scene("kitchen", [("dad", 300), ("tara", 620), ("mum", 940)])
sfx("poof")
poof("centi", 460)
L("centi", "Did someone commit an unbuffered destructive assignment before breakfast?", mood="smug", shot="wide")
L("dad", "Centi! Even worse — I coded a family holiday packing app, jumped straight to typing Python, and nothing works!", mood="annoyed", shot="two", prop="tablet")
L("centi", "Because you skipped the Program Development Life Cycle: Analysis, Design, Coding, and Testing, run iteratively!", mood="teach", shot="two",
  boardClear=True, board="PDLC: Analysis -> Design -> Coding -> Test")
L("tara", "In Analysis we apply abstraction and decomposition to agree the requirements specification, right?", mood="thinking", shot="two")
L("centi", "Spot on! Abstraction keeps essential details, like suitcase weight, while filtering out irrelevant clutter like sock colours.", mood="teach", shot="close",
  board="Abstraction: keep essentials, drop clutter")
L("dad", "Like how the MRT transit map keeps station connections and ignores every curve in the road!", mood="happy", shot="two")
L("centi", "Exactly! And decomposition breaks a complex system into smaller modules on a top-down structure diagram during Design!", mood="teach", shot="two",
  board="Decomposition -> Structure Diagram")
L("mum", "Why split the app into smaller modules instead of one giant script?", mood="neutral", shot="two")
L("tara", "Because separate programmers can code and test modules in parallel without breaking everything else!", mood="excited", shot="two")
L("centi", "And Design also produces flowcharts and CIE pseudocode! Watch the five standard flowchart shapes.", mood="teach", shot="wide",
  boardClear=True, diagram=DIAG_PDLC_FLOW, board="Oval: Start/Stop · Parallelogram: I/O")
L("tara", "Rectangles for processes, double-barred boxes for subroutines, and diamonds for decisions!", mood="happy", shot="two",
  board="Diamond: ALWAYS label Yes and No!")
L("centi", "Never forget to label both exit arrows on every decision diamond, and use two angle brackets for not equal in CIE pseudocode!", mood="determined", shot="close",
  board="CIE Not Equal: <>  ·  Assign: <-")

# --- ACT 2: LINEAR SEARCH, MIN/MAX & BUBBLE SORT ---
confess("dad", "Dad's Confession")
L("dad", "To find our lightest suitcase, I initialised Minimum Weight to zero. Somehow every bag weighed more than zero, so my app claims our lightest bag weighs zero!", mood="deadpan", shot="close")

scene("living", [("dad", 300), ("centi", 600), ("tara", 900)], "Living Room · Standard Algorithms Lab")
L("tara", "Dad, positive weights are never smaller than zero! Initialise Minimum and Maximum to the first item in the array!", mood="teach", shot="two",
  boardClear=True, board="Safe Min/Max: use List[1] or huge/tiny")
L("centi", "Or set Minimum to a huge number like nine thousand nine hundred and ninety nine so the first real input beats it!", mood="teach", shot="close")
L("dad", "What if Mum's passport is buried inside an unsorted array of bags?", mood="worried", shot="two")
L("centi", "Run a Linear Search! Start at index one with a Found boolean flag set to false, checking items one by one until Found becomes true or the array ends.", mood="teach", shot="two",
  board="Linear Search: works on unsorted lists")
L("dad", "And how do I sort my spice jars properly without inventing chilli-cinnamon?", mood="thinking", shot="two")
L("centi", "Use Bubble Sort! Compare adjacent pairs, and swap out-of-order neighbours using three lines with Temp!", mood="excited", shot="wide",
  boardClear=True, diagram=DIAG_BUBBLE, board="Temp <- A[i]; A[i] <- A[i+1]; A[i+1] <- Temp")
L("tara", "Look! On four items — thirty, twelve, twenty four, eight — thirty bubbles right past all three smaller numbers in Pass One!", mood="excited", shot="two",
  board="Optimise 1: Swap flag · 2: Last <- Last - 1")
L("centi", "Plus two CIE optimisations: shrink Last by one each pass because the tail is locked, and reset Swap to false so a zero-swap pass stops early!", mood="smug", shot="close")
L("dad", "Wait — so even if Pass One finishes sorting everything, it still runs one quick zero-swap pass to confirm Swap stays false?", mood="thinking", shot="two")
L("tara", "Yes! The computer cannot magically peek ahead without running one clean check pass!", mood="happy", shot="two")

challenge(
    1,
    "Pass 1 of ascending Bubble Sort on [25, 10, 18, 6]: how many swaps?",
    "3",
    "25 > 10 (swap 1), 25 > 18 (swap 2), 25 > 6 (swap 3)",
    "Pause challenge one! During Pass One of an ascending Bubble Sort on twenty five, ten, eighteen, six, how many swaps occur?",
    "Three swaps! Twenty five compares and swaps past ten, then eighteen, then six to lock at the end.",
)

# --- ACT 3: VALIDATION VS VERIFICATION & TEST DATA TRAP ---
scene("checkout", [("dad", 300), ("tara", 620), ("cashier", 1000)], "Airport Bag Drop · Validation Showdown")
sfx("poof")
poof("centi", 460)
L("cashier", "Sir, your pre-booked baggage form says you are checking in eighty two suitcases instead of two!", mood="shock", shot="wide", prop="phone")
L("dad", "Impossible! I put a range check from one to one hundred on that form! Validation proves my data is completely accurate!", mood="annoyed", shot="two")
sfx("buzzer")

card("EXAMINER MARK-SCHEME TRAP", "❌ Never write: Validation checks data is accurate · Extreme = 0, 101  →  ✅ Write: Validation checks reasonableness · Extreme = 1, 100 (Accepted!)")

L("centi", "Buzzer of doom! Never write that validation checks data is correct, accurate, or valid — that scores zero marks!", mood="shock", shot="close",
  boardClear=True, diagram=DIAG_TESTDATA, board="NEVER write: validation checks accuracy!")
L("tara", "Validation is an automated check that data is reasonable and sensible, using Range, Length, Type, Presence, Format, or Check Digit!", mood="teach", shot="two",
  board="Range · Length · Type · Presence · Format")
L("centi", "Eighty two sits comfortably inside one to one hundred, so validation accepts it! Catching a copying typo requires verification!", mood="teach", shot="two",
  board="Verification: Double Entry & Visual Check")
L("cashier", "Verification checks data was copied accurately — either typing it twice in Double Entry, or reading the screen in a Visual Check!", mood="happy", shot="two")
L("dad", "Fine! At least I tested my one-to-one-hundred range check with extreme data: zero and one hundred and one!", mood="smug", shot="two")
sfx("buzzer")
L("tara", "Second mark-scheme trap! Extreme data must be ACCEPTED values right on the limits — one and one hundred ONLY!", mood="annoyed", shot="close")
L("centi", "Whereas boundary test data comes in pairs straddling each limit: zero rejected with one accepted, or one hundred accepted with one hundred and one rejected!", mood="teach", shot="wide")
L("dad", "Aha! Boundary pairs catch off-by-one bugs when someone writes strict less-than instead of less-than-or-equal-to!", mood="excited", shot="two")

challenge(
    2,
    "Valid integer range 10..50 inclusive: what is the largest EXTREME value?",
    "50",
    "Extreme = largest & smallest ACCEPTED values (10 and 50)",
    "Pause challenge two! A rule accepts whole numbers from ten to fifty inclusive. What is the largest item of extreme test data?",
    "Fifty! Extreme values sit right on the edge and must be accepted. Fifty and fifty one together would be the upper boundary pair.",
)

# --- ACT 4: TRACE TABLES & BUG HUNTING ---
scene("living", [("dad", 280), ("tara", 580), ("centi", 860), ("mum", 1060)], "Living Room · Trace Table Finale")
L("dad", "One mystery left! Why did my invalid-age filter, IF Age less than one AND Age greater than one hundred, never reject negative five?", mood="worried", shot="wide", prop="calculator")
L("tara", "Because no number in the universe is below one AND above one hundred simultaneously! Rejecting out-of-range inputs needs OR!", mood="determined", shot="two",
  boardClear=True, board="Valid: X >= 1 AND X <= 100")
L("centi", "Accepting inside a range uses AND; rejecting outside a range uses OR! And to catch bugs fast, dry-run a CIE trace table!", mood="teach", shot="two",
  board="Reject: X < 1 OR X > 100")
L("centi", "Write initialisations on the top row, leave unchanged columns blank, and fill OUTPUT only when an OUTPUT instruction runs!", mood="teach", shot="close",
  board="Trace Table: record ONLY changed cells")
L("mum", "And never put Total assigned zero inside your loop, unless you want to erase your running total every single turn!", mood="smug", shot="two",
  board="REPEAT..UNTIL stops when condition is TRUE")
L("tara", "Ready for one final dry-run before anyone touches Mum's new cinnamon jar?", mood="happy", shot="two")

challenge(
    3,
    "X <- 20, Steps <- 0. REPEAT X <- X - 6; Steps <- Steps + 1 UNTIL X < 5. Output Steps?",
    "3",
    "20 -> 14 (1) -> 8 (2) -> 2 (3); 2 < 5 is TRUE -> Steps = 3",
    "Final pause challenge! X starts at twenty and Steps at zero. Inside a REPEAT loop, X drops by six and Steps rises by one UNTIL X is less than five. What is Steps?",
    "Three! Twenty drops to fourteen, then eight, then two on step three. Two is less than five, making the UNTIL condition true!",
)

L("dad", "Three steps, one temporary mug, reasonable validation, and paired boundary tests! My spice rack is officially certified!", mood="happy", shot="wide")
L("mum", "I am still running Double Entry verification before you season dinner!", mood="happy", shot="two")
L("tara", "And Centi is grading your trace table in permanent marker!", mood="smug", shot="two")
sfx("ding")
end_card()
