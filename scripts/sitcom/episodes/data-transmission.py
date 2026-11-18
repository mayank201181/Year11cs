# Season 3 · Episode 3 — Data Transmission & Error Detection ("Lost In The Packet Switch")
EP = dict(
    topic="data-transmission",
    logline="Dad tapes eight coat-hangers together as a thirty-metre parallel printer cable, talks over Mum on a walkie-talkie, and learns packet switching, USB, parity blocks, ISBN check digits and ARQ.",
)

SVG_PKT = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 175">'
    '<rect x="8" y="12" width="158" height="90" rx="10" fill="#1e3a8a" stroke="#7dd3fc" stroke-width="2.5"/>'
    '<text x="87" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="#7dd3fc">HEADER</text>'
    '<text x="87" y="58" text-anchor="middle" font-size="12" fill="#f8fafc">Sender &amp; Dest IP</text>'
    '<text x="87" y="76" text-anchor="middle" font-size="12" fill="#fde047">Packet # (Sequence)</text>'
    '<text x="87" y="94" text-anchor="middle" font-size="11" fill="#cbd5e1">Hop Counter (TTL)</text>'
    '<rect x="174" y="12" width="172" height="90" rx="10" fill="#14532d" stroke="#86efac" stroke-width="2.5"/>'
    '<text x="260" y="38" text-anchor="middle" font-size="15" font-weight="700" fill="#86efac">PAYLOAD</text>'
    '<text x="260" y="64" text-anchor="middle" font-size="13" font-family="monospace" fill="#f8fafc">~64 KiB Data</text>'
    '<text x="260" y="86" text-anchor="middle" font-size="11" fill="#dcfce7">Actual message slice</text>'
    '<rect x="354" y="12" width="158" height="90" rx="10" fill="#78350f" stroke="#fde047" stroke-width="2.5"/>'
    '<text x="433" y="36" text-anchor="middle" font-size="15" font-weight="700" fill="#fde047">TRAILER</text>'
    '<text x="433" y="60" text-anchor="middle" font-size="12" fill="#f8fafc">End-of-Packet Flag</text>'
    '<text x="433" y="82" text-anchor="middle" font-size="12" fill="#fca5a5">CRC Error Check</text>'
    '<text x="260" y="132" text-anchor="middle" font-size="13" font-weight="700" fill="#c4b5fd">Routers read Dest IP in Header -&gt; pick best route per packet!</text>'
    '<text x="260" y="156" text-anchor="middle" font-size="12" fill="#86efac">Arrive out of order -&gt; Receiver sorts by Header Packet #</text>'
    '</svg>'
)

SVG_MODES = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 185">'
    '<rect x="10" y="10" width="240" height="165" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>'
    '<text x="130" y="32" text-anchor="middle" font-size="14" font-weight="700" fill="#7dd3fc">Serial vs Parallel</text>'
    '<text x="130" y="58" text-anchor="middle" font-size="12" fill="#86efac">Serial: 1 wire, 1 bit at a time</text>'
    '<line x1="35" y1="72" x2="225" y2="72" stroke="#86efac" stroke-width="3"/>'
    '<text x="130" y="92" text-anchor="middle" font-size="11" fill="#dcfce7">Long distance, ZERO skew!</text>'
    '<text x="130" y="118" text-anchor="middle" font-size="12" fill="#fca5a5">Parallel: 8+ wires AT ONCE</text>'
    '<line x1="35" y1="130" x2="225" y2="130" stroke="#fde047" stroke-width="2"/>'
    '<line x1="35" y1="140" x2="225" y2="140" stroke="#fde047" stroke-width="2"/>'
    '<line x1="35" y1="150" x2="225" y2="150" stroke="#fde047" stroke-width="2"/>'
    '<text x="130" y="167" text-anchor="middle" font-size="11" fill="#fca5a5">Short CPU bus OK; skews long!</text>'
    '<rect x="264" y="10" width="246" height="165" rx="10" fill="#0f172a" stroke="#c084fc" stroke-width="2"/>'
    '<text x="387" y="32" text-anchor="middle" font-size="14" font-weight="700" fill="#c4b5fd">Direction Modes</text>'
    '<text x="387" y="64" text-anchor="middle" font-size="12" fill="#7dd3fc">Simplex: A ----&gt; B (1 way)</text>'
    '<text x="387" y="104" text-anchor="middle" font-size="12" fill="#fde047">Half-Duplex: Both, TURNS</text>'
    '<text x="387" y="144" text-anchor="middle" font-size="12" font-weight="700" fill="#86efac">Full-Duplex: Both AT ONCE!</text>'
    '</svg>'
)

SVG_PARITY = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 185">'
    '<rect x="10" y="10" width="500" height="165" rx="10" fill="#0f172a" stroke="#fde047" stroke-width="2"/>'
    '<text x="260" y="32" text-anchor="middle" font-size="14" font-weight="700" fill="#fde047">2D Even Parity Block Pinpoints Exact Flipped Bit</text>'
    '<text x="175" y="58" text-anchor="middle" font-size="13" font-family="monospace" fill="#86efac">B1:  1  0  1  0   (2 ones OK)</text>'
    '<rect x="34" y="68" width="286" height="24" rx="4" fill="#7f1d1d"/>'
    '<text x="175" y="85" text-anchor="middle" font-size="13" font-family="monospace" font-weight="700" fill="#fca5a5">B2:  0  1 [1] 1   (3 ones BAD!)</text>'
    '<text x="175" y="112" text-anchor="middle" font-size="13" font-family="monospace" fill="#86efac">B3:  1  1  0  0   (2 ones OK)</text>'
    '<text x="175" y="138" text-anchor="middle" font-size="13" font-family="monospace" fill="#7dd3fc">PB:  0  0  1  1   (2 ones OK)</text>'
    '<text x="175" y="162" text-anchor="middle" font-size="12" font-family="monospace" fill="#fca5a5">Col: OK OK BAD OK -&gt; (Row 2, Col 3)</text>'
    '<rect x="336" y="56" width="160" height="104" rx="8" fill="#14532d" stroke="#86efac" stroke-width="2"/>'
    '<text x="416" y="84" text-anchor="middle" font-size="13" font-weight="700" fill="#86efac">Intersection!</text>'
    '<text x="416" y="108" text-anchor="middle" font-size="12" fill="#f8fafc">Byte 2 + Col 3</text>'
    '<text x="416" y="130" text-anchor="middle" font-size="12" fill="#fde047">Flip 1 -&gt; 0 fixed!</text>'
    '</svg>'
)

# ---------------- COLD OPEN ----------------
scene("living", [("dad", 300), ("mum", 620), ("tara", 920)], "THE RAO LIVING ROOM · CABLE NIGHTMARE")
L("dad", "Behold my genius! Why use one boring USB cord when I taped eight copper coat-hangers side by side out the window to the printer?", mood="excited", shot="wide", prop="paintroller")
L("mum", "Rajesh, that thirty-metre coat-hanger ribbon is buzzing, and the printer just spat out alien hieroglyphics!", mood="shock", shot="two")
L("dad", "Hold on, let me radio Uncle Hock on my walkie-talkie while he talks back at the exact same moment! KEEP TALKING, UNCLE!", mood="determined", prop="phone")
sfx("buzzer")
L("tara", "Dad, walkie-talkies cannot talk both ways at once, and your eight-wire ribbon scrambled every byte with data skew!", mood="eyeroll", prop="book")
L("dad", "Data stew? Are we having data stew for dinner?", mood="thinking")
freeze("DATA SKEW DISASTER!", narrator="Eight wires, thirty metres, zero clue.")

title()

# ---------------- ACT 1: TRANSMISSION MODES & USB ----------------
scene("living", [("dad", 260), ("tara", 560), ("mum", 1020)], "SERIAL, PARALLEL, DUPLEX · USB")
poof("centi", 800)
sfx("poof")
L("centi", "Step away from the coat-hangers, Rajesh, and look at my holo-board!", mood="teach", shot="wide", board="Wire Count + Direction = 2 Choices", boardClear=True)
L("centi", "Serial transmission sends one bit at a time sequentially along a single wire.", mood="teach", board="Serial: 1 bit at a time, 1 wire ✔", diagram=SVG_MODES)
L("tara", "Because bits queue in single file on one wire, they never overtake each other over long distances — zero data skew and minimal crosstalk!", mood="happy", shot="two")
L("centi", "Parallel transmission sends multiple bits simultaneously across several wires. Over millimetres inside a CPU bus, parallel is super fast.", mood="teach", board="Parallel: many bits AT ONCE (short CPU)")
L("mum", "Yet over thirty metres, tiny speed differences between wires make bits arrive unsynchronised — that is data skew!", mood="smug")
L("dad", "Fine, coat-hangers retired! What went wrong with my walkie-talkie duet?", mood="annoyed", shot="two")
L("centi", "Direction modes! Simplex travels in one direction only, like a keyboard to a CPU.", mood="teach", board="Simplex: 1 way | Half: 2 ways, turns", boardClear=True)
L("tara", "Half-duplex goes both directions, NOT at the same time — like walkie-talkies taking turns!", mood="teach")
L("mum", "And full-duplex goes both directions simultaneously, like fibre broadband or a telephone call.", mood="happy", board="Full-Duplex: 2 ways SIMULTANEOUSLY ✔")
L("dad", "So what does a Universal System Bus cable use?", mood="thinking")
sfx("scratch")
L("tara", "Universal SERIAL Bus, Dad! The middle word is Serial!", mood="excited", board="USB = Universal SERIAL Bus (max ~5m)")
L("tara", "A shielded USB cable carries red five-volt power, black ground, and two asynchronous serial data wires, up to five metres per passive cable.", mood="teach")
L("centi", "Know the three plug-and-play steps too! First, a small voltage change detects the device.", mood="teach", board="USB: Voltage -> Recognise -> Driver ✔")
L("centi", "Second, the device is automatically recognised. Third, the operating system loads the matching device driver — or prompts you to install it!", mood="happy")

confess("dad", "DAD · UNPLUGGING COAT-HANGERS")
L("dad", "Five volts of USB power charges a mouse nicely, whereas my coat-hangers nearly toasted the curtains.", mood="worried")

# ---------------- ACT 2: PACKETS, PACKET SWITCHING & EXAMINER TRAP ----------------
scene("megacity", [("dad", 250), ("tara", 540), ("centi", 830), ("mum", 1060)], "NETWORK CORE · PACKET SWITCHING")
sfx("whoosh")
L("centi", "Welcome to the Internet! Big files are split into packets holding roughly sixty-four kibibytes of payload.", mood="excited", shot="wide", board="Packet = Header + Payload + Trailer", boardClear=True, diagram=SVG_PKT)
L("tara", "The Header holds sender IP, destination IP, packet sequence number, total packets, and hop counter.", mood="teach", board="Header: IPs + Packet # + Hop Count")
L("mum", "The Payload carries the user data, while the Trailer holds the end-of-packet marker and a Cyclic Redundancy Check — C R C!", mood="happy", board="Trailer: End Marker + CRC Check ✔")
L("centi", "In packet switching, routers read the destination IP and independently steer each packet down the least congested route.", mood="teach", shot="two")
L("dad", "Wait — if Packet Two takes a shortcut and arrives before Packet One, won't my photo arrive inside-out?", mood="shock")
L("tara", "Never! The receiver reads the packet sequence numbers in the headers and reorders them!", mood="smug", board="Out of order -> Sorted by Packet # ✔", boardClear=True)
L("centi", "And every router subtracts one from the hop counter, discarding any lost packet that hits zero.", mood="teach")

challenge(
    1,
    "Split a 4 MiB file into 64 KiB payload packets (1 MiB = 1024 KiB). How many packets?",
    "64 packets",
    "4 × 1024 = 4096 KiB;  4096 ÷ 64 = 64",
    "Pause Challenge One! A four mebibyte file is split into sixty four kibibyte payload packets, with one thousand and twenty four kibibytes per mebibyte. How many packets are created?",
    "Four times one thousand and twenty four is four thousand and ninety six kibibytes. Divide by sixty four to get sixty four packets!",
)

card(
    "EXAMINER MARK-SCHEME TRAP",
    "❌ Never write: 'CRC in Header' or 'Full-duplex = 2 ways'  →  ✅ Write: 'CRC in Trailer' + 'Simultaneously'",
    dur=3.2,
)

scene("classroom", [("dad", 280), ("tara", 580), ("centi", 880)], "MOCK PAPER · RED PEN TIME")
L("dad", "Read my mock answer: The header checks errors with C R C, and full-duplex goes in two directions! Full marks?", mood="smug", prop="tablet", board="✘ 'CRC in Header' (0 marks!)", boardClear=True)
sfx("buzzer")
L("centi", "Zero marks, Rajesh! IPs and sequence numbers live in the header; C R C error checking lives in the trailer!", mood="annoyed", shot="two", board="✘ 'Full-duplex = 2 ways' (0 marks!)")
L("tara", "And half-duplex goes in two directions too! For full-duplex you MUST write both directions simultaneously!", mood="determined", board="✔ Trailer=CRC | Full=SIMULTANEOUSLY")

# ---------------- ACT 3: PARITY BLOCKS, CHECKSUM, ECHO, CHECK DIGITS & ARQ ----------------
scene("checkout", [("dad", 240), ("tara", 490), ("centi", 740), ("cashier", 1000)], "SUPERMARKET TILL · ERROR HUNTING")
L("cashier", "Welcome to Byte Mart! Interference hit our network, and someone smudged this book barcode.", mood="worried", shot="wide")
L("dad", "Easy! Stick one Even Parity bit on every byte so total ones stay even. Foolproof!", mood="smug", board="Even Parity: total 1s is EVEN", boardClear=True)
L("tara", "Not if TWO bits flip in the same byte, Dad! Any even number of bit flips keeps the count even and fools single-byte parity!", mood="teach", shot="two", board="Trap: 2 bit flips keep parity EVEN!")
L("centi", "Instead, a two-dimensional Parity Block adds a bottom Parity Byte checking every column!", mood="excited", board="Parity Block -> (Bad Row, Bad Col) ✔", diagram=SVG_PARITY)
L("centi", "When one bit flips, both its row and its column fail parity — pinpointing the exact intersection!", mood="teach")

challenge(
    2,
    "Complete _1101011 using EVEN Parity (parity bit on the left).",
    "11101011",
    "1101011 has five 1s (odd) -> prepend 1 -> six 1s (even)",
    "Pause Challenge Two! Seven data bits one one zero one zero one one need an Even Parity bit on the left. Give the eight bit byte!",
    "Five ones is odd, so prepend a one on the left to make six ones: one one one zero one zero one one!",
)

scene("checkout", [("dad", 240), ("tara", 490), ("centi", 740), ("cashier", 1000)], "CHECKSUM, ECHO CHECK, ISBN & ARQ")
L("centi", "For a Checksum, the sender computes a block summary value; the receiver recalculates it with the same algorithm and compares.", mood="teach", board="Checksum: recalculate on byte block", boardClear=True)
L("tara", "An Echo Check bounces all the data back to the sender — doubling traffic, and you cannot tell if corruption happened outward or returning!", mood="eyeroll", board="Echo Check: outward or return error?!")
L("cashier", "And this thirteen-digit book barcode?", mood="thinking", shot="two")
L("centi", "That final digit is a Check Digit! Check Digits validate human data entry and scanning — catching wrong digits, adjacent transpositions, omitted digits, and phonetic slips!", mood="teach", board="Check Digit = human entry / barcode ✔")
L("tara", "In I S B N thirteen, sum odd positions plus three times even positions, take modulo ten, and subtract non-zero remainders from ten!", mood="happy", board="ISBN-13: (Odd + 3xEven) MOD 10")
L("dad", "And when C R C or a checksum spots a bad network packet, how is it resent?", mood="thinking")
L("centi", "Automatic Repeat Query — A R Q! The sender transmits a packet and starts a timeout timer.", mood="excited", board="ARQ: ACK/NAK + Timeout + Retransmit ✔")
L("tara", "Clean packet brings a positive acknowledgement; bad packet brings a negative acknowledgement.", mood="teach")
L("centi", "On a negative acknowledgement OR if the timeout expires first, the sender automatically retransmits until a positive acknowledgement arrives or a retry limit is hit!", mood="happy")
sfx("ding")

challenge(
    3,
    "In ISBN-13, the 12-digit weighted sum is 100. What is the 13th check digit?",
    "0",
    "100 MOD 10 = 0 -> check digit is 0 (NEVER 10!)",
    "Pause Challenge Three! The first twelve digits of an I S B N thirteen give a weighted sum of one hundred. What is the thirteenth check digit?",
    "One hundred modulo ten is zero! When the remainder is zero, the check digit is zero — never ten!",
)

scene("living", [("dad", 300), ("mum", 640), ("tara", 960)], "BACK HOME · PROPER USB CABLE")
L("mum", "One shielded four-metre USB cable, driver loaded in two seconds, crisp recipes printing cleanly!", mood="happy", shot="wide", prop="plate")
L("dad", "Positive acknowledgement! Though if dinner misses my stomach timeout, I am automatically retransmitting!", mood="excited")
sfx("trombone")
L("tara", "Retry limit reached, Dad — kitchen router discarded your packet!", mood="happy")

end_card()
