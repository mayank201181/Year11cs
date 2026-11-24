# Episode 2 — Text, Sound, Images & Compression: "Divide By Ten Twenty Four"
EP = dict(
    topic="data-media-compression",
    logline="Dad buys a giant memory card at the mall, divides everything by a thousand, and tries to save Tara's Python homework as a lossy JPEG before Centi intervenes.",
)

DIAG_IEC = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="8" y="8" width="764" height="334" rx="14" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>'
    '<rect x="26" y="84" width="118" height="104" rx="14" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>'
    '<text x="85" y="148" text-anchor="middle" font-family="sans-serif" font-size="32" font-weight="bold" fill="#f8fafc">bits</text>'
    '<text x="184" y="148" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#f87171">÷8▶</text>'
    '<rect x="224" y="84" width="136" height="104" rx="14" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>'
    '<text x="292" y="148" text-anchor="middle" font-family="sans-serif" font-size="32" font-weight="bold" fill="#f8fafc">Bytes</text>'
    '<text x="415" y="128" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047">÷1024</text>'
    '<text x="415" y="168" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047">▶</text>'
    '<rect x="470" y="84" width="104" height="104" rx="14" fill="#14532d" stroke="#86efac" stroke-width="3"/>'
    '<text x="522" y="148" text-anchor="middle" font-family="sans-serif" font-size="32" font-weight="bold" fill="#86efac">KiB</text>'
    '<text x="615" y="128" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047">÷1024</text>'
    '<text x="615" y="168" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047">▶</text>'
    '<rect x="658" y="84" width="100" height="104" rx="14" fill="#14532d" stroke="#86efac" stroke-width="3"/>'
    '<text x="708" y="148" text-anchor="middle" font-family="sans-serif" font-size="32" font-weight="bold" fill="#86efac">MiB</text>'
    '<text x="390" y="282" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="bold" fill="#fca5a5">CIE 0478: ALWAYS 1024 (2¹⁰) for KiB / MiB!</text>'
    '</svg>'
)

DIAG_MEDIA = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="14" y="16" width="366" height="318" rx="14" fill="#1e293b" stroke="#c084fc" stroke-width="3"/>'
    '<text x="197" y="66" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#e9d5ff">BITMAP IMAGE</text>'
    '<text x="197" y="138" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#f8fafc">W × H × Depth</text>'
    '<text x="197" y="208" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047">256 col → 8 bits!</text>'
    '<text x="197" y="280" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#86efac">(2⁸=256 · 1 B/px)</text>'
    '<rect x="400" y="16" width="366" height="318" rx="14" fill="#1e293b" stroke="#38bdf8" stroke-width="3"/>'
    '<text x="583" y="66" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#7dd3fc">SOUND SAMPLING</text>'
    '<text x="583" y="138" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#f8fafc">Rate × Res × s × Ch</text>'
    '<text x="583" y="208" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047">Mono=1 · Stereo=2</text>'
    '<text x="583" y="280" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#86efac">ADC samples wave</text>'
    '</svg>'
)

DIAG_RLE = (
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 350">'
    '<rect x="14" y="24" width="752" height="106" rx="14" fill="#1e293b" stroke="#94a3b8" stroke-width="2.5"/>'
    '<text x="390" y="88" text-anchor="middle" font-size="30" font-family="monospace" font-weight="bold" fill="#f8fafc">W W W W W W  B B  W W W W (12 B)</text>'
    '<text x="390" y="184" text-anchor="middle" font-family="sans-serif" font-size="28" font-weight="bold" fill="#fde047">▼ Lossless Run-Length Encoding (RLE) ▼</text>'
    '<rect x="34" y="216" width="712" height="106" rx="14" fill="#14532d" stroke="#86efac" stroke-width="3.5"/>'
    '<text x="390" y="282" text-anchor="middle" font-size="32" font-family="monospace" font-weight="bold" fill="#86efac">(6,W) (2,B) (4,W) → 6 Bytes!</text>'
    '</svg>'
)

# Cold open at checkout
scene("checkout", [("tara", 280), ("dad", 580), ("cashier", 1000)], "ORCHARD ELECTRONICS MART")
L("dad", "Step aside, everyone! I brought my notepad to calculate how many photos fit on this memory card!", mood="smug", shot="wide", prop="book")
L("cashier", "Sir, the card says four mebibytes right on the sticker.", mood="bored", shot="close")
L("tara", "Please just tap your card so we can go home, Dad.", mood="eyeroll", shot="two")
L("dad", "Never rush a mathematician! A sixty-four by sixty-four icon with two hundred and fifty-six colours...", mood="thinking", shot="close")
L("dad", "...is sixty-four, times sixty-four, times two hundred and fifty-six, divided by one thousand!", mood="excited", shot="two")
L("tara", "Dad, you just committed three separate computer science felonies in one sentence.", mood="shock", shot="close")
sfx("buzzer")
L("cashier", "Security, we have an illegal division by one thousand at register three.", mood="deadpan", shot="close")
freeze("DIVIDE BY WHAT?!", narrator="Somewhere in Cambridge, a senior examiner just dropped their teacup.")

title()

# ASCII vs Unicode first, then IEC + Trap!
scene("checkout", [("tara", 240), ("dad", 480), ("cashier", 1000)])
poof("centi", 740)
sfx("poof")
L("centi", "Put down the pencil, Dad! Let us start with text, because every letter on that receipt uses a character set!", mood="excited", shot="wide")
L("dad", "A character set? Like the cast of my favourite detective drama?", mood="thinking", shot="close")
L("tara", "A character set is a defined list of characters where every symbol maps to a unique binary number!", mood="teach", shot="two", boardClear=True, board="Character set: symbol -> unique binary")
L("tara", "Seven-bit Standard ASCII holds one hundred and twenty-eight characters, and eight-bit Extended ASCII holds two hundred and fifty-six.", mood="happy", shot="close", board="7-bit ASCII: 128 · 8-bit ASCII: 256")
L("centi", "And ASCII codes run in order! Uppercase A is sixty-five, B is sixty-six, and lowercase a is ninety-seven—thirty-two higher!", mood="teach", shot="two", board="'0'=48 · 'A'=65 · 'a'=97 (+32)")
L("cashier", "Then how does my receipt printer print Mandarin characters, Tamil script, and rocket emojis?", mood="thinking", shot="close")
L("centi", "Unicode! Sixteen-bit and thirty-two-bit Unicode unlock billions of codes for every world language and emoji!", mood="happy", shot="two", board="Unicode: 16/32-bit -> world languages")
L("tara", "The only trade-off is storage: Unicode uses sixteen to thirty-two bits per character instead of seven or eight!", mood="teach", shot="close", board="Trade-off: 2 to 4 bytes per character")

# Examiner Mark-Scheme Trap on 1024 and 256 colours!
confess("dad", "DAD'S FILE-SIZE SHORTCUT")
L("dad", "Fine, Unicode uses more bits! Still, kilo means a thousand on my flour bag, so I divide bytes by a thousand!", mood="smug", shot="close")

card("EXAMINER MARK-SCHEME TRAP", "1024 vs 1000 — and Colours vs Bits!")
scene("checkout", [("tara", 240), ("dad", 480), ("centi", 740), ("cashier", 1000)])
sfx("scratch")
L("centi", "Red alert! On Cambridge IGCSE Computer Science, kibibytes, mebibytes, gibibytes, and tebibytes strictly use one thousand and twenty-four!", mood="shock", shot="wide", boardClear=True, board="✘ KiB = Bytes / 1000", diagram=DIAG_IEC)
L("tara", "Never divide by one thousand for KiB or MiB! Divide bits by eight for bytes, then by one thousand and twenty-four per step!", mood="teach", shot="close", board="✔ Bits / 8 -> Bytes / 1024 -> KiB")
L("centi", "And crime number two: never multiply pixels by two hundred and fifty-six colours! Two to the power of eight is two hundred and fifty-six, so colour depth is eight bits!", mood="teach", shot="two", board="✔ 256 colours = 8 bits (1 byte/px)")
L("cashier", "Eight bits is just one byte per pixel. Even I can do that without a calculator.", mood="smug", shot="close")
L("dad", "Wait—sixty-four times sixty-four times one byte is four thousand and ninety-six bytes!", mood="thinking", shot="close")
L("dad", "Divided by one thousand and twenty-four, that cancels cleanly to four kibibytes! Genius!", mood="excited", shot="two")

challenge(
    1,
    "Size in KiB of 512 x 256 image with 256 colours",
    "128 KiB",
    "256 colours = 8b = 1B; (512 x 256) / 1024 = 128 KiB",
    "Pause and cancel factors without a calculator! Find the uncompressed size in kibibytes of a five-hundred-and-twelve by two-hundred-and-fifty-six pixel bitmap using two hundred and fifty-six colours.",
    "Two hundred and fifty-six colours means eight bits, which is one byte per pixel! Five hundred and twelve divided by one thousand and twenty-four is one half, times two hundred and fifty-six gives one hundred and twenty-eight kibibytes!",
)

# Bitmap vs Sound Sampling + Challenge 2
scene("living", [("tara", 260), ("mum", 540), ("dad", 800), ("centi", 1040)], "BACK HOME · RAO LIVING ROOM")
L("mum", "Tara, your cousin sent a voice recording of his violin solo, and the uncompressed file is enormous!", mood="worried", shot="wide", prop="phone")
L("centi", "Let us inspect both media formulas side by side! A microphone feeds an Analogue-to-Digital Converter, an ADC, which measures the wave's amplitude at regular intervals.", mood="teach", shot="two", boardClear=True, board="ADC samples amplitude regularly", diagram=DIAG_MEDIA)
L("tara", "Sample rate is how many amplitude samples are taken per second, measured in Hertz! Sample resolution is how many bits store each sample!", mood="happy", shot="close", board="Rate (Hz) · Resolution (bits/sample)")
L("dad", "Wait—if we crank up both sample rate and sample resolution, what happens?", mood="thinking", shot="two")
L("centi", "Higher sample rate and higher sample resolution shrink quantisation error so the audio matches the original wave much more closely—but file size shoots up!", mood="teach", shot="two", board="Higher rate/res -> better sound & bigger")
L("mum", "Just like increasing bitmap image resolution and colour depth makes photos sharper with millions of shades, while making files heavier!", mood="happy", shot="close")
L("dad", "Hold on—where does the computer keep the image width, height, and colour depth so it knows how to draw the grid?", mood="thinking", shot="close")
L("centi", "Inside the image's metadata header! Metadata stores width, height, colour depth, and file format right alongside the pixels!", mood="teach", shot="two", boardClear=True, board="Metadata: width, height, colour depth")
L("tara", "And watch out for two sneaky exam traps on sound: convert minutes into seconds by multiplying by sixty, and multiply by two if the recording is stereo!", mood="determined", shot="close")

challenge(
    2,
    "Mono 8192 Hz, 16-bit, 10 s audio size in KiB",
    "160 KiB",
    "(8192 x 16 x 10) / (8 x 1024) = 8 x 2 x 10 = 160 KiB",
    "Try this audio puzzle! A mono clip is sampled at eight thousand one hundred and ninety-two Hertz, sixteen-bit resolution, for ten seconds. Find its exact size in kibibytes.",
    "Eight thousand one hundred and ninety-two divided by one thousand and twenty-four is eight! Sixteen bits divided by eight is two bytes! Eight times two times ten gives one hundred and sixty kibibytes!",
)

# Lossless (RLE) vs Lossy + Challenge 3
L("dad", "No problem! I will shrink your cousin's violin track AND Tara's Python coursework by saving both of them with lossy compression!", mood="excited", shot="two", prop="tablet")
sfx("scratch")
L("tara", "Dad, do not touch my Python file! Lossy compression permanently deletes data that can never be recovered!", mood="shock", shot="close")
L("centi", "For music, lossy MP three is brilliant! Perceptual music shaping removes frequencies outside human hearing and quiet sounds masked by simultaneous louder sounds.", mood="teach", shot="two", boardClear=True, board="Lossy (MP3/JPEG): permanent deletion")
L("mum", "And lossy JPEG blends nearly identical pixel shades in photographs so web pages load super fast!", mood="happy", shot="close", board="Much smaller files for audio/photos")
L("tara", "Whereas Python code, text documents, and spreadsheets must use lossless compression like ZIP or Run-Length Encoding—because losing one bit breaks the whole file!", mood="determined", shot="two", board="Lossless (ZIP/PNG/RLE): exact restore")
L("centi", "Look at Run-Length Encoding on the holo-board! Six W's, two B's, then four W's compress into three count-value pairs: six bytes instead of twelve, and never merge separated runs!", mood="teach", shot="wide", boardClear=True, board="RLE groups ADJACENT runs only!", diagram=DIAG_RLE)

challenge(
    3,
    "Bytes for RLE of AAAAABBBCCCC (2 bytes/pair)",
    "6 bytes",
    "3 runs: (5,A) (3,B) (4,C) -> 3 x 2 = 6 bytes",
    "Last challenge! A twelve-byte string has five A's, three B's, and four C's. If each Run-Length Encoding pair uses two bytes, what is the compressed size in bytes?",
    "There are three consecutive runs: five A, three B, and four C. Three pairs times two bytes per pair equals six bytes—cutting the file size right in half with zero data lost!",
)

L("dad", "Wait—what if I run RLE on my checkered picnic shirt: white, black, white, black, white, black?", mood="smug", shot="two")
L("tara", "Think about it, Dad: how long is each consecutive run on a checkerboard?", mood="thinking", shot="close")
L("dad", "Just one square at a time... wait a minute!", mood="worried", shot="close")
L("centi", "Every single run has length one, so RLE sticks an extra count byte onto every square and doubles your shirt's file size!", mood="excited", shot="two")
L("mum", "And what if you want to compress a long English essay with no repeated rows of A's?", mood="thinking", shot="close")
L("centi", "Use lossless dictionary compression! It stores repeated words like 'the' and 'computer' once in a table and swaps in tiny index tokens!", mood="teach", shot="two", board="Dictionary: repeated words -> index")
L("dad", "Okay, new family rule: divide by one thousand and twenty-four, convert colours to bits, and keep JPEG away from Python!", mood="determined", shot="two")
sfx("trombone")
L("mum", "Stick to ironing the checkered shirt, dear, and leave the compression to Tara.", mood="smug", shot="wide")

end_card()
