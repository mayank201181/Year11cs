EP = dict(
    topic="python-arrays-sql",
    logline="Dad builds a Python and SQL database for the neighbourhood curry club, loses everyone's phone zeroes, loops forever, slices names in half, and triggers a total database meltdown.",
)

DIAG_DIV_MOD = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="8" y="8" width="764" height="334" rx="14" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>'
    '<text x="390" y="54" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#f8fafc">Phone = STRING ("07700") | 29 ÷ 6</text>'
    '<rect x="24" y="84" width="356" height="236" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2.5"/>'
    '<text x="202" y="142" text-anchor="middle" font-family="monospace" font-size="32" font-weight="bold" fill="#6ee7b7">29 DIV 6 = 4</text>'
    '<text x="202" y="212" text-anchor="middle" font-family="monospace" font-size="28" fill="#cbd5e1">Python: 29 // 6</text>'
    '<text x="202" y="280" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#94a3b8">Whole quotient</text>'
    '<rect x="400" y="84" width="356" height="236" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="2.5"/>'
    '<text x="578" y="142" text-anchor="middle" font-family="monospace" font-size="32" font-weight="bold" fill="#fcd34d">29 MOD 6 = 5</text>'
    '<text x="578" y="212" text-anchor="middle" font-family="monospace" font-size="28" fill="#cbd5e1">Python: 29 % 6</text>'
    '<text x="578" y="280" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#94a3b8">Remainder</text>'
    '</svg>'
)

DIAG_SUBSTRING = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="8" y="8" width="764" height="334" rx="14" fill="#0f172a" stroke="#a855f7" stroke-width="2.5"/>'
    '<text x="390" y="48" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#f8fafc">"COMPUTER": CIE (1-idx) vs Python (0-idx)</text>'
    '<text x="110" y="102" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#60a5fa">1</text>'
    '<text x="190" y="102" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#60a5fa">2</text>'
    '<text x="270" y="102" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#60a5fa">3</text>'
    '<text x="350" y="102" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#4ade80">4</text>'
    '<text x="430" y="102" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#4ade80">5</text>'
    '<text x="510" y="102" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#4ade80">6</text>'
    '<text x="590" y="102" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#60a5fa">7</text>'
    '<text x="670" y="102" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#60a5fa">8</text>'
    '<rect x="74" y="118" width="72" height="72" fill="#1e293b" stroke="#64748b" stroke-width="2"/><text x="110" y="166" text-anchor="middle" font-family="monospace" font-size="34" font-weight="bold" fill="#f8fafc">C</text>'
    '<rect x="154" y="118" width="72" height="72" fill="#1e293b" stroke="#64748b" stroke-width="2"/><text x="190" y="166" text-anchor="middle" font-family="monospace" font-size="34" font-weight="bold" fill="#f8fafc">O</text>'
    '<rect x="234" y="118" width="72" height="72" fill="#1e293b" stroke="#64748b" stroke-width="2"/><text x="270" y="166" text-anchor="middle" font-family="monospace" font-size="34" font-weight="bold" fill="#f8fafc">M</text>'
    '<rect x="314" y="118" width="72" height="72" fill="#14532d" stroke="#4ade80" stroke-width="3"/><text x="350" y="166" text-anchor="middle" font-family="monospace" font-size="34" font-weight="bold" fill="#86efac">P</text>'
    '<rect x="394" y="118" width="72" height="72" fill="#14532d" stroke="#4ade80" stroke-width="3"/><text x="430" y="166" text-anchor="middle" font-family="monospace" font-size="34" font-weight="bold" fill="#86efac">U</text>'
    '<rect x="474" y="118" width="72" height="72" fill="#14532d" stroke="#4ade80" stroke-width="3"/><text x="510" y="166" text-anchor="middle" font-family="monospace" font-size="34" font-weight="bold" fill="#86efac">T</text>'
    '<rect x="554" y="118" width="72" height="72" fill="#1e293b" stroke="#64748b" stroke-width="2"/><text x="590" y="166" text-anchor="middle" font-family="monospace" font-size="34" font-weight="bold" fill="#f8fafc">E</text>'
    '<rect x="634" y="118" width="72" height="72" fill="#1e293b" stroke="#64748b" stroke-width="2"/><text x="670" y="166" text-anchor="middle" font-family="monospace" font-size="34" font-weight="bold" fill="#f8fafc">R</text>'
    '<text x="110" y="232" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#fbbf24">0</text>'
    '<text x="190" y="232" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#fbbf24">1</text>'
    '<text x="270" y="232" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#fbbf24">2</text>'
    '<text x="350" y="232" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#4ade80">3</text>'
    '<text x="430" y="232" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#4ade80">4</text>'
    '<text x="510" y="232" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#4ade80">5</text>'
    '<text x="590" y="232" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#f87171">6</text>'
    '<text x="670" y="232" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#fbbf24">7</text>'
    '<text x="390" y="308" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#e2e8f0">SUBSTRING(W,4,3)="PUT" | w[3:6]</text>'
    '</svg>'
)

DIAG_SQL = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="8" y="8" width="764" height="334" rx="14" fill="#0f172a" stroke="#22c55e" stroke-width="2.5"/>'
    '<text x="390" y="48" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">ClubMembers (PK = MemberID)</text>'
    '<text x="34" y="102" font-family="monospace" font-size="28" font-weight="bold" fill="#fcd34d">ID  | Name  | Club   | Fee | Paid</text>'
    '<text x="34" y="148" font-family="monospace" font-size="28" fill="#f8fafc">M01 | Tara  | Coding | 20  | TRUE</text>'
    '<text x="34" y="194" font-family="monospace" font-size="28" font-weight="bold" fill="#86efac">M02 | Zain  | Robots | 35  | TRUE</text>'
    '<text x="34" y="240" font-family="monospace" font-size="28" fill="#f8fafc">M03 | Chloe | Coding | 20  | FALSE</text>'
    '<rect x="24" y="266" width="732" height="58" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>'
    '<text x="390" y="305" text-anchor="middle" font-family="monospace" font-size="28" font-weight="bold" fill="#38bdf8">SELECT Name WHERE Paid=TRUE ORDER BY Fee DESC</text>'
    '</svg>'
)

# --- COLD OPEN ---
scene("kitchen", [("dad", 260), ("tara", 560), ("mum", 860)], "Sunday Afternoon · Dad's 'Automated' Curry Club App")
L("dad", "Behold my masterpiece! I coded a Python and database system for our street's Friday Curry Club!", mood="excited", shot="wide", prop="tablet")
L("mum", "Really? Because Auntie Priya just rang asking why your app chopped the first zero off her mobile number!", mood="deadpan", shot="two", prop="phone")
L("dad", "Impossible! Digits are numbers, so I stored her phone number inside an integer!", mood="smug", shot="close")
L("tara", "Give me that tablet, Dad. Oh dear. Integer phone numbers, an infinite repeat until loop, and a query reading select star from chaos!", mood="shock", shot="two", prop="tablet")
L("mum", "And why is our receipt printer spitting out poppadom vouchers across the kitchen floor?", mood="worried", shot="wide")
sfx("buzzer")
freeze("SELECT * FROM CHAOS")

title()

# --- SCENE 1: DATA TYPES, DIV & MOD ---
scene("living", [("dad", 240), ("tara", 530), ("centi", 840)], "Living Room · Holo-Board Debugging Session")
sfx("poof")
L("centi", "Did someone store a phone number with a leading zero inside an integer? My silicon circuits are weeping!", mood="annoyed", shot="wide")
L("dad", "Wait — why is a phone number a string when every character is a digit?", mood="worried", shot="two")
L("tara", "Because an integer deletes leading zeroes immediately, Dad, and you never add or divide two phone numbers!", mood="teach", shot="two")
L("centi", "Memorise the five Cambridge primitive data types: integer, real, char, string, and boolean.", mood="teach", shot="wide", boardClear=True, board="STRING: '07700 900123' (keeps 0!)", diagram=DIAG_DIV_MOD)
L("dad", "Okay, what about my samosa packer? Twenty nine samosas into boxes of six gave me ugly decimals!", mood="sad", shot="two")
L("centi", "Use integer division and modulo! Twenty nine D I V six gives four whole boxes, discarding the fraction.", mood="excited", shot="close", board="29 DIV 6 = 4  |  29 MOD 6 = 5")
L("tara", "And twenty nine M O D six gives the remainder of five loose samosas! In Python, D I V is double slash and M O D is the percent operator.", mood="happy", shot="two", board="Python: 29 // 6 == 4, 29 % 6 == 5")
L("dad", "Wait — what if I only have four samosas and boxes of six?", mood="thinking", shot="close")
L("centi", "Then four D I V six is zero full boxes, and four M O D six leaves all four samosas as the remainder!", mood="teach", shot="two")

challenge(
    1,
    "Evaluate 47 MOD 8 (and 47 % 8 in Python)",
    "7",
    "8 x 5 = 40, remainder 47 - 40 = 7",
    "Pause and calculate! What remainder do you get from forty seven M O D eight?",
    "Eight times five is forty, leaving a remainder of seven! Answer seven.",
)

# --- SCENE 2: LOOPS & REPEAT..UNTIL ---
L("dad", "Next mystery! Why did my poppadom loop print forever?", mood="worried", shot="two")
L("tara", "You wrote repeat, add one poppadom, until count is greater than zero — no, you wrote until count is less than zero while adding one!", mood="eyeroll", shot="two", boardClear=True, board="WHILE Cond DO -> stops on FALSE")
L("centi", "Watch the stopping polarity! A while loop tests at the top, runs zero or more times, and stops when its condition is false.", mood="teach", shot="close", board="REPEAT..UNTIL Cond -> stops on TRUE!")
L("tara", "Whereas repeat until tests at the bottom! It always runs its body at least once, and stops the moment its condition becomes true!", mood="determined", shot="two", board="CIE FOR 1 TO 5 (5x) vs range(1,5) (4x)")
L("dad", "And why did my Python for loop skip table five?", mood="shock", shot="close")
L("centi", "Because Cambridge pseudocode for one to five includes five, whereas Python range from one comma five stops right before five!", mood="teach", shot="two", board="Python needs range(1, 6) for 1..5!")
L("tara", "And for your spice menu choices one, two, or three, replace those messy nested ifs with case of and otherwise!", mood="happy", shot="two")

# --- SCENE 3: SUBSTRING vs PYTHON SLICING, SUBROUTINES, ARRAYS & FILES ---
confess("dad", "Dad's Confession · String Indexing")
L("dad", "I only wanted the three middle letters of COMPUTER for our club code. Why did Python give me one letter when pseudocode gave me three?!", mood="worried", shot="close")

scene("living", [("dad", 240), ("tara", 530), ("centi", 840)])
L("centi", "This is the most famous Paper Two trap! In Cambridge pseudocode, substring starts at position one, and the third argument is length!", mood="teach", shot="wide", boardClear=True, board="SUBSTRING('COMPUTER', 4, 3) -> 'PUT'", diagram=DIAG_SUBSTRING)
L("tara", "Count from one on COMPUTER: C, O, M, P! Position four is P, and length three grabs P U T!", mood="excited", shot="two", board="Python 0-idx: word[3:6] -> 'PUT'")
L("centi", "In Python, indexing starts at zero, and the second slice number is the exclusive stop index! Index three is P, stopping before six!", mood="teach", shot="close", board="CALL Proc() vs Ans <- Func()")
L("dad", "Uh oh. I also wrote call calculate total before my function, and stored all club bookings in a two dimensional RAM array without a file!", mood="worried", shot="two")
L("tara", "Never put call in front of a function! Only procedures use call; functions return a value into an expression.", mood="teach", shot="two", boardClear=True, board="Local vars stay safe inside module")
L("centi", "Keep subroutine variables local so other modules cannot overwrite them, and index two dimensional arrays row first, column second!", mood="teach", shot="close", board="2D Array: Seats[Row, Col]")
L("tara", "And because RAM is volatile, write bookings to disk using openfile for write, writefile, and closefile!", mood="determined", shot="two", board='OPENFILE "c.txt" FOR WRITE -> CLOSEFILE')
L("dad", "What happens if I skip closefile?", mood="thinking", shot="close")
L("centi", "Buffered data can be lost or corrupted, and the file stays locked!", mood="annoyed", shot="two")
L("tara", "Plus Python's with open block closes the file automatically so even Dad cannot forget it!", mood="smug", shot="close")
L("dad", "Hey! I also added comments and meaningful variable names like CustomerOrder instead of x!", mood="determined", shot="two")

challenge(
    2,
    'CIE output of SUBSTRING("DATABASE", 5, 4)',
    "BASE",
    "1:D 2:A 3:T 4:A 5:B -> 4 chars from pos 5 = BASE",
    "Your turn! In Cambridge pseudocode, what four-letter word is returned by substring of DATABASE, starting at position five, with length four?",
    "Counting from one, D, A, T, A puts B at position five, and taking four characters spells B A S E, base!",
)

# --- SCENE 4: DATABASES, SQL & EXAMINER MARK-SCHEME TRAP ---
scene("hawker", [("dad", 250), ("tara", 550), ("centi", 780), ("uncle", 1000)], "Uncle's Hawker Stall · Live Club Database Audit")
L("uncle", "Your Curry Club table made FirstName the primary key, so when two neighbours named Maya joined, the whole system crashed!", mood="annoyed", shot="wide", prop="plate")
L("dad", "How was I supposed to know two Mayas love Madras curry?!", mood="sad", shot="close")
L("tara", "Each horizontal row is a record, each vertical column is a field, and a primary key like Member I D must be unique for every record!", mood="teach", shot="two", boardClear=True, board="Field = Column | Record = Row", diagram=DIAG_SQL)
L("centi", "And follow strict SQL clause order: Some Frogs Wear Overcoats — select, from, where, and finally order by ascending or descending!", mood="excited", shot="wide", board="COUNT = rows | SUM = total value")

card("EXAMINER MARK-SCHEME TRAP", "Never drop the field name after OR — and watch quotes!", dur=3.0)
sfx("scratch")
L("dad", "Read my SQL query: select star from ClubMembers where Club is single quote Coding or single quote Chess, and Fee is above single quote twenty!", mood="smug", shot="close", prop="tablet")
L("centi", "Triple penalty! First, never write select star when an exam question asks only for specific fields like Name and Fee!", mood="shock", shot="two", boardClear=True, board="BAD: WHERE Club = 'Coding' OR 'Chess'")
L("tara", "Second, never omit the field name after or! Write where Club equals single quote Coding, or Club equals single quote Chess!", mood="teach", shot="two", board="GOOD: Club = 'Coding' OR Club = 'Chess'")
L("centi", "Third, put single quotes around text literals only — never quote numbers like twenty or booleans like true and false!", mood="teach", shot="close", board="Text: 'Coding' | Num/Bool: 20, TRUE")
L("uncle", "And stop confusing count with sum! Count tells me how many members paid, while sum tells me the total cash collected!", mood="determined", shot="wide", prop="plate")

challenge(
    3,
    "Coding fees are 20 and 20; Robotics is 35. Find SUM(Fee) WHERE Club = 'Coding'",
    "40",
    "Matching Coding rows: 20 + 20 = 40",
    "Final challenge! Two Coding members each have a fee of twenty, and one Robotics member has thirty five. What does select sum of Fee from ClubMembers where Club equals Coding return?",
    "Count would return two rows, but sum of Fee adds twenty and twenty to give forty!",
)

L("dad", "Member I D primary key added, meaningful identifiers, comments, clean indentation, and closefile in place!", mood="happy", shot="wide")
sfx("ding")
L("mum", "Hold on, I just walked in — my phone number still starts with zero and my naan order actually worked!", mood="happy", shot="wide", offstage=True)
L("uncle", "Zero runtime errors and sorted descending by spice! Samosas on the house!", mood="excited", shot="wide", prop="plate")
L("tara", "Now that is what I call select delicious from dinner where bugs equal zero!", mood="excited", shot="two")

end_card()
