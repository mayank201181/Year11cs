# Episode 1 — Number Systems & Two's Complement: "Overflow At The Hawker Stall"
EP = dict(
    topic="number-systems",
    logline="Uncle Hock's vintage eight-bit hawker queue sign wraps from two hundred and fifty-five back to four, summoning Centi to rescue Dad from hexadecimal myths, shift disasters, and Two's Complement blunders.",
)

DIAG_NIBBLES = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="14" y="16" width="366" height="318" rx="16" fill="#1e293b" stroke="#38bdf8" stroke-width="3.5"/>'
    '<text x="197" y="66" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#7dd3fc">UPPER (8 4 2 1)</text>'
    '<text x="197" y="182" text-anchor="middle" font-size="56" font-family="monospace" font-weight="bold" fill="#f8fafc">1 0 1 0</text>'
    '<text x="197" y="278" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fde047">8+2 = 10 → Hex A</text>'
    '<rect x="400" y="16" width="366" height="318" rx="16" fill="#1e293b" stroke="#c084fc" stroke-width="3.5"/>'
    '<text x="583" y="66" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#e9d5ff">LOWER (8 4 2 1)</text>'
    '<text x="583" y="182" text-anchor="middle" font-size="56" font-family="monospace" font-weight="bold" fill="#f8fafc">1 1 0 1</text>'
    '<text x="583" y="278" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#86efac">8+4+1 = 13 → Hex D</text>'
    '</svg>'
)

DIAG_OVERFLOW = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="14" y="18" width="166" height="314" rx="14" fill="#450a0a" stroke="#f87171" stroke-width="3.5" stroke-dasharray="8 5"/>'
    '<text x="97" y="72" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fca5a5">9th BIT</text>'
    '<text x="97" y="206" text-anchor="middle" font-size="76" font-family="monospace" font-weight="bold" fill="#f87171">1</text>'
    '<text x="97" y="294" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fca5a5">LOST!</text>'
    '<rect x="200" y="18" width="566" height="314" rx="14" fill="#1e293b" stroke="#86efac" stroke-width="3.5"/>'
    '<text x="483" y="68" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">8-BIT REGISTER (MAX 255)</text>'
    '<text x="483" y="138" text-anchor="middle" font-size="32" font-family="monospace" font-weight="bold" fill="#e2e8f0">  11001000 (200)</text>'
    '<text x="483" y="196" text-anchor="middle" font-size="32" font-family="monospace" font-weight="bold" fill="#e2e8f0">+ 00111100  (60)</text>'
    '<line x1="252" y1="220" x2="714" y2="220" stroke="#94a3b8" stroke-width="3"/>'
    '<text x="483" y="282" text-anchor="middle" font-size="36" font-family="monospace" font-weight="bold" fill="#fde047">  00000100   (4)</text>'
    '</svg>'
)

DIAG_TWOS = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="14" y="20" width="136" height="224" rx="14" fill="#450a0a" stroke="#f87171" stroke-width="3.5"/>'
    '<text x="82" y="84" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fca5a5">−128</text>'
    '<text x="82" y="186" text-anchor="middle" font-size="54" font-family="monospace" font-weight="bold" fill="#f87171">1</text>'
    '<rect x="166" y="20" width="600" height="224" rx="14" fill="#1e293b" stroke="#86efac" stroke-width="3"/>'
    '<text x="218" y="84" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">64</text>'
    '<text x="302" y="84" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">32</text>'
    '<text x="386" y="84" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">16</text>'
    '<text x="470" y="84" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">8</text>'
    '<text x="554" y="84" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">4</text>'
    '<text x="638" y="84" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">2</text>'
    '<text x="722" y="84" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#86efac">1</text>'
    '<text x="218" y="186" text-anchor="middle" font-family="monospace" font-size="48" font-weight="bold" fill="#f8fafc">1</text>'
    '<text x="302" y="186" text-anchor="middle" font-family="monospace" font-size="48" font-weight="bold" fill="#94a3b8">0</text>'
    '<text x="386" y="186" text-anchor="middle" font-family="monospace" font-size="48" font-weight="bold" fill="#f8fafc">1</text>'
    '<text x="470" y="186" text-anchor="middle" font-family="monospace" font-size="48" font-weight="bold" fill="#94a3b8">0</text>'
    '<text x="554" y="186" text-anchor="middle" font-family="monospace" font-size="48" font-weight="bold" fill="#f8fafc">1</text>'
    '<text x="638" y="186" text-anchor="middle" font-family="monospace" font-size="48" font-weight="bold" fill="#f8fafc">1</text>'
    '<text x="722" y="186" text-anchor="middle" font-family="monospace" font-size="48" font-weight="bold" fill="#94a3b8">0</text>'
    '<text x="390" y="308" text-anchor="middle" font-family="sans-serif" font-size="32" font-weight="bold" fill="#fde047">−128 + 64 + 16 + 4 + 2 = −42</text>'
    '</svg>'
)

# Cold open at Uncle Hock's hawker stall
scene("hawker", [("tara", 280), ("dad", 560), ("uncle", 1000)], "MAXWELL HAWKER CENTRE · SUNDAY LUNCH")
L("dad", "Ticket two hundred! Only sixty hungry people ahead of us before Uncle Hock serves his legendary char kway teow!", mood="excited", shot="wide", prop="plate")
L("tara", "Dad, you have been staring at that glowing red LED board for twenty minutes.", mood="eyeroll", shot="two")
L("uncle", "Hold tight! Busload of tourists just arrived! Adding sixty new orders into my trusty eight-bit queue display!", mood="happy", shot="two")
sfx("buzzer")
L("tara", "Wait a second. The queue board just jumped from two hundred straight to ticket four!", mood="shock", shot="close")
L("dad", "Miracle! Two hundred and fifty-six tourists spontaneously gave up and went for kale smoothies!", mood="smug", shot="two")
L("uncle", "Aiya, not again! Everybody is yelling that ticket four was served at nine in the morning!", mood="worried", shot="close")
freeze("TICKET FOUR?!", narrator="Spoiler: nobody ever leaves Uncle Hock's queue for kale.")

title()

scene("hawker", [("tara", 240), ("dad", 480), ("uncle", 1000)])
poof("centi", 740)
sfx("poof")
L("centi", "Did somebody say vintage eight-bit register? Nobody left the queue, Dad. Uncle Hock's counter just suffered a textbook binary overflow!", mood="excited", shot="wide")
L("dad", "A binary what-now? Why cannot the sign just write normal human numbers?", mood="annoyed", shot="two")
L("uncle", "Because inside my sign are microscopic transistor switches! On is one, off is zero, and in nineteen eighty-seven I only paid for eight switches!", mood="teach", shot="close")
L("centi", "Check the holo-board! In unsigned binary, those eight switches have place values doubling from right to left: one, two, four, eight, sixteen, thirty-two, sixty-four, and one hundred and twenty-eight.", mood="teach", shot="two", boardClear=True, board="8-bit weights: 128 64 32 16 8 4 2 1")
L("tara", "When every single switch is on, one-one-one-one-one-one-one-one adds up to two hundred and fifty-five. Counting zero, that is two hundred and fifty-six values!", mood="happy", shot="close", board="Max unsigned = 255 (256 values: 0..255)")
L("centi", "In binary column addition, one plus zero is one, one plus one is zero carry one, and one plus one plus one is one carry one!", mood="teach", shot="two", board="1+1 = 0 carry 1 · 1+1+1 = 1 carry 1")
L("centi", "Now watch two hundred plus sixty! The sum is two hundred and sixty, which exceeds two hundred and fifty-five and generates a ninth bit!", mood="excited", shot="two", boardClear=True, board="200 + 60 = 260 (> 255 -> 9th bit!)", diagram=DIAG_OVERFLOW)
L("tara", "That ninth carry-out bit weighs two hundred and fifty-six, and it falls right out of the eight-bit register, leaving only four inside!", mood="determined", shot="close", board="Register keeps lower 8 bits: 4")
L("dad", "So we are still two hundred and sixtieth in line? My stomach just experienced a hunger overflow.", mood="sad", shot="close")

confess("dad", "DAD'S HARDWARE THEORY")
L("dad", "Actually, I am a genius. Uncle Hock should switch his sign from binary to hexadecimal! Hexadecimal uses way less memory inside the chip, right?", mood="smug", shot="close")

card("EXAMINER MARK-SCHEME TRAP", "Does hexadecimal save computer memory?")
scene("hawker", [("tara", 240), ("dad", 480), ("centi", 740), ("uncle", 1000)])
sfx("scratch")
L("centi", "Stop the wok! That exact sentence destroys thousands of Cambridge Paper One marks every single exam season!", mood="shock", shot="wide", boardClear=True, board="✘ Hex saves RAM / storage space")
L("tara", "Dad, never write that hexadecimal takes up less memory inside the computer! Hardware only ever stores binary ones and zeros!", mood="teach", shot="close", board="✔ Hardware ONLY stores binary (1/0)")
L("centi", "Write instead that hexadecimal is shorter and more compact for humans to read, write, and debug—so engineers make far fewer copying errors!", mood="teach", shot="two", board="✔ Hex: compact & fewer human errors")
L("uncle", "Even I use hex when checking Wi-Fi MAC addresses, HTML colour codes on my stall website, and memory dump error codes!", mood="happy", shot="close")
L("dad", "Fair enough! Transistors speak binary; humans wear hex-tinted glasses so our eyeballs do not blur.", mood="thinking", shot="close")

# Nibble shortcut + Challenge 1
L("centi", "And here is the best non-calculator trick on Earth. Because sixteen is two to the power of four, one hex digit maps to exactly four binary bits—one nibble!", mood="excited", shot="two", boardClear=True, board="1 Hex digit = 4 bits (1 nibble)", diagram=DIAG_NIBBLES)
L("tara", "Digits zero to nine stay themselves, and ten through fifteen become letters: A is ten, B is eleven, C is twelve, D is thirteen, E is fourteen, and F is fifteen!", mood="happy", shot="close", board="A=10 B=11 C=12 D=13 E=14 F=15")
L("dad", "Wait, so I do not have to divide big numbers by sixteen?", mood="excited", shot="close")
L("centi", "Never if you have binary! Split one-zero-one-zero-one-one-zero-one into two nibbles: left nibble is eight plus two, A; right nibble is eight plus four plus one, D!", mood="smug", shot="two", board="1010 1101 -> AD (always pad 4 bits!)")
L("tara", "And going backwards from hex to binary, always write all four bits for every nibble, including leading zeros!", mood="teach", shot="close")

challenge(
    1,
    "Convert binary 1100 0110 to hexadecimal",
    "C6",
    "1100 = 8+4 = 12 (C), 0110 = 4+2 = 6 -> C6",
    "Pause and try this without a calculator! Convert the eight-bit binary byte one-one-zero-zero, zero-one-one-zero into two hexadecimal digits.",
    "Upper nibble one-one-zero-zero is eight plus four, which is twelve, written as C. Lower nibble zero-one-one-zero is four plus two, which is six. Together that gives C six!",
)

# Logical Shifts + Challenge 2
scene("kitchen", [("tara", 280), ("mum", 540), ("dad", 800), ("centi", 1040)], "LATER · RAO FAMILY KITCHEN")
L("mum", "You survived the queue! Why is Dad muttering ones and zeros into his chilli sauce?", mood="happy", shot="wide")
L("dad", "Uncle Hock tested me! He took unsigned binary zero-zero-zero-one-one-zero-one-zero and shifted every bit left by three places. That multiplies by six, right? Two times three?", mood="thinking", shot="two", prop="plate")
sfx("buzzer")
L("tara", "Classic trap, Dad! Shifting left by three places does not multiply by two times three—it multiplies by two to the power of three, which is eight!", mood="teach", shot="two", boardClear=True, board="Logical Left Shift n -> multiply 2^n")
L("centi", "Every single logical left shift doubles the value and pads a zero on the right! One shift times two, two shifts times four, three shifts times eight, four shifts times sixteen!", mood="teach", shot="two", board="Left 1: x2 · Left 2: x4 · Left 3: x8")
L("mum", "And sliding all the bits to the right does the exact opposite?", mood="thinking", shot="close")
L("centi", "Exactly! A logical right shift pads zeros on the left and divides by two to the power of n!", mood="happy", shot="two", board="Logical Right Shift n -> divide 2^n")
L("tara", "Just watch both edges of the register! If a one-bit falls off the leftmost most-significant end during a left shift, you get overflow!", mood="determined", shot="close", board="Lost MSB 1-bit -> Overflow error")
L("centi", "And if a one-bit falls off the rightmost least-significant end during a right shift, any point-five fraction gets chopped off—causing truncation and loss of precision!", mood="teach", shot="two", board="Lost LSB 1-bit -> Truncation / precision")

challenge(
    2,
    "Shift 00010110 (22) left by 2 places (in denary)",
    "88",
    "00010110 << 2 = 01011000 = 64 + 16 + 8 = 88",
    "Your turn! The unsigned byte zero-zero-zero-one-zero-one-one-zero equals twenty-two. Perform a logical left shift of two places and find the new denary value.",
    "Shifting left by two places multiplies twenty-two by two squared, which is four, giving zero-one-zero-one-one-zero-zero-zero, or eighty-eight!",
)

# Two's Complement + Challenge 3
L("dad", "Last puzzle! Our smart freezer uses eight-bit Two's Complement and displays one-one-zero-one-zero-one-one-zero. Does that leading one just act like a minus sign?", mood="worried", shot="two", prop="tablet")
L("mum", "If it were just a minus sign, positive zero and negative zero would fight each other inside the circuit!", mood="smug", shot="close")
L("centi", "Mum nailed it! In eight-bit Two's Complement, the leftmost most-significant bit has place value negative one hundred and twenty-eight, while the other seven bits stay positive!", mood="teach", shot="wide", boardClear=True, board="2's Comp: -128 +64 +32 +16 +8 +4 +2 +1", diagram=DIAG_TWOS)
L("tara", "Read the board: negative one hundred and twenty-eight, plus sixty-four, plus sixteen, plus four, plus two equals negative forty-two! The ice cream is rock solid!", mood="excited", shot="close", board="Range: -128 (10000000) to +127 (01111111)")
L("centi", "And to turn a negative denary integer into Two's Complement, write the positive eight-bit binary first, flip every bit, and add one! Check both methods and you are unstoppable.", mood="happy", shot="two", board="Negate: Write +N -> Flip bits -> +1")

challenge(
    3,
    "8-bit Two's Complement for -19",
    "11101101",
    "+19 = 00010011 -> flip 11101100 -> +1 = 11101101",
    "Final boss challenge! Convert negative nineteen into an eight-bit Two's Complement binary string.",
    "Start with positive nineteen, zero-zero-zero-one-zero-zero-one-one. Flip every bit to get one-one-one-zero-one-one-zero-zero, then add one to get one-one-one-zero-one-one-zero-one!",
)

L("dad", "Wait—if eight ones is negative one in Two's Complement, then my loyalty card score of one-one-one-one-one-one-one-one owes Uncle Hock one noodle!", mood="shock", shot="two")
L("mum", "And what if your score hits one-zero-zero-zero-zero-zero-zero-zero, dear?", mood="smug", shot="close")
L("centi", "Then Dad owes Uncle Hock one hundred and twenty-eight plates of char kway teow!", mood="excited", shot="two")
L("dad", "Nobody panic! I am switching my entire wallet back to unsigned immediately!", mood="worried", shot="close")
L("mum", "Relax, Uncle Hock's stamp card is made of cardboard.", mood="deadpan", shot="close")
sfx("trombone")
L("tara", "Zero transistors, zero overflow, and finally lunch!", mood="happy", shot="wide")

end_card()
