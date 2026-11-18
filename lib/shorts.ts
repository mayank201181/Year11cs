// Auto-generated concept Shorts manifest for Year 11 IGCSE Computer Science (0478) — do not edit by hand.
export interface ShortCaption {
  t: number;
  who: string;
  text: string;
}

export interface ShortPart {
  src: string;
  start: number;
  duration: number;
}

export interface ShortClip {
  id: string;
  topicId: string;
  topicTitle: string;
  topicShort: string;
  topicIcon: string;
  strand: string;
  episodeTitle: string;
  index: number;
  totalInTopic: number;
  title: string;
  summary: string;
  startSec: number;
  endSec: number;
  durationSec: number;
  src?: string;
  parts?: ShortPart[];
  poster?: string;
  embedHref?: string;
  chapterId?: string;
  captions: ShortCaption[];
}

export const SHORTS: ShortClip[] = [
  {
    "id": "number-systems-s01",
    "topicId": "number-systems",
    "topicTitle": "Number Systems",
    "topicShort": "Number Systems",
    "topicIcon": "🔢",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Overflow At The Hawker Stall",
    "index": 1,
    "totalInTopic": 4,
    "title": "Overflow At The Hawker Stall — Cold Open Hook",
    "summary": "Ticket two hundred! Only sixty hungry people ahead of us before Uncle Hock serves his legendary char kway teow!",
    "startSec": 0.0,
    "endSec": 42.4,
    "durationSec": 42.4,
    "src": "/videos/number-systems.mp4",
    "poster": "/videos/posters/number-systems.jpg",
    "captions": [
      {
        "t": 1.22,
        "who": "Dad",
        "text": "Ticket two hundred! Only sixty hungry people ahead of us before Uncle Hock serves his legendary char kway teow!"
      },
      {
        "t": 9.43,
        "who": "Tara",
        "text": "Dad, you have been staring at that glowing red LED board for twenty minutes."
      },
      {
        "t": 14.1,
        "who": "Uncle",
        "text": "Hold tight! Busload of tourists just arrived! Adding sixty new orders into my trusty eight-bit queue display!"
      },
      {
        "t": 22.37,
        "who": "Tara",
        "text": "Wait a second. The queue board just jumped from two hundred straight to ticket four!"
      },
      {
        "t": 26.93,
        "who": "Dad",
        "text": "Miracle! Two hundred and fifty-six tourists spontaneously gave up and went for kale smoothies!"
      },
      {
        "t": 33.94,
        "who": "Uncle",
        "text": "Aiya, not again! Everybody is yelling that ticket four was served at nine in the morning!"
      }
    ]
  },
  {
    "id": "number-systems-s02",
    "topicId": "number-systems",
    "topicTitle": "Number Systems",
    "topicShort": "Number Systems",
    "topicIcon": "🔢",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Overflow At The Hawker Stall",
    "index": 2,
    "totalInTopic": 4,
    "title": "Overflow At The Hawker Stall — Core Concept",
    "summary": "Did somebody say vintage eight-bit register? Nobody left the queue, Dad. Uncle Hock's counter just suffered a textbook binary overflow!",
    "startSec": 47.9,
    "endSec": 138.9,
    "durationSec": 91.0,
    "src": "/videos/number-systems.mp4",
    "poster": "/videos/posters/number-systems.jpg",
    "captions": [
      {
        "t": 49.18,
        "who": "Centi",
        "text": "Did somebody say vintage eight-bit register? Nobody left the queue, Dad. Uncle Hock's counter just suffered a textbook binary overflow!"
      },
      {
        "t": 57.93,
        "who": "Dad",
        "text": "A binary what-now? Why cannot the sign just write normal human numbers?"
      },
      {
        "t": 63.3,
        "who": "Uncle",
        "text": "Because inside my sign are microscopic transistor switches! On is one, off is zero, and in nineteen eighty-seven I only paid for eight switches!"
      },
      {
        "t": 74.37,
        "who": "Centi",
        "text": "Check the holo-board! In unsigned binary, those eight switches have place values doubling from right to left: one, two, four, eight, sixteen, thirty-two, sixty-four, and one hundred and twenty-eight."
      },
      {
        "t": 87.01,
        "who": "Tara",
        "text": "When every single switch is on, one-one-one-one-one-one-one-one adds up to two hundred and fifty-five. Counting zero, that is two hundred and fifty-six values!"
      },
      {
        "t": 96.75,
        "who": "Centi",
        "text": "In binary column addition, one plus zero is one, one plus one is zero carry one, and one plus one plus one is one carry one!"
      },
      {
        "t": 105.98,
        "who": "Centi",
        "text": "Now watch two hundred plus sixty! The sum is two hundred and sixty, which exceeds two hundred and fifty-five and generates a ninth bit!"
      },
      {
        "t": 114.9,
        "who": "Tara",
        "text": "That ninth carry-out bit weighs two hundred and fifty-six, and it falls right out of the eight-bit register, leaving only four inside!"
      },
      {
        "t": 123.0,
        "who": "Dad",
        "text": "So we are still two hundred and sixtieth in line? My stomach just experienced a hunger overflow."
      },
      {
        "t": 130.55,
        "who": "Dad",
        "text": "Actually, I am a genius. Uncle Hock should switch his sign from binary to hexadecimal! Hexadecimal uses way less memory inside the chip, right?"
      }
    ]
  },
  {
    "id": "number-systems-s03",
    "topicId": "number-systems",
    "topicTitle": "Number Systems",
    "topicShort": "Number Systems",
    "topicIcon": "🔢",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Overflow At The Hawker Stall",
    "index": 3,
    "totalInTopic": 4,
    "title": "Overflow At The Hawker Stall — CIE 0478 Examiner Trap",
    "summary": "Actually, I am a genius. Uncle Hock should switch his sign from binary to hexadecimal! Hexadecimal uses way less memory inside the chip, right?",
    "startSec": 138.9,
    "endSec": 229.9,
    "durationSec": 91.0,
    "src": "/videos/number-systems.mp4",
    "poster": "/videos/posters/number-systems.jpg",
    "captions": [
      {
        "t": 138.9,
        "who": "Dad",
        "text": "Actually, I am a genius. Uncle Hock should switch his sign from binary to hexadecimal! Hexadecimal uses way less memory inside the chip, right?"
      },
      {
        "t": 144.0,
        "who": "Centi",
        "text": "Stop the wok! That exact sentence destroys thousands of Cambridge Paper One marks every single exam season!"
      },
      {
        "t": 151.77,
        "who": "Tara",
        "text": "Dad, never write that hexadecimal takes up less memory inside the computer! Hardware only ever stores binary ones and zeros!"
      },
      {
        "t": 160.19,
        "who": "Centi",
        "text": "Write instead that hexadecimal is shorter and more compact for humans to read, write, and debug—so engineers make far fewer copying errors!"
      },
      {
        "t": 169.68,
        "who": "Uncle",
        "text": "Even I use hex when checking Wi-Fi MAC addresses, HTML colour codes on my stall website, and memory dump error codes!"
      },
      {
        "t": 179.8,
        "who": "Dad",
        "text": "Fair enough! Transistors speak binary; humans wear hex-tinted glasses so our eyeballs do not blur."
      },
      {
        "t": 187.09,
        "who": "Centi",
        "text": "And here is the best non-calculator trick on Earth. Because sixteen is two to the power of four, one hex digit maps to exactly four binary bits—one nibble!"
      },
      {
        "t": 197.6,
        "who": "Tara",
        "text": "Digits zero to nine stay themselves, and ten through fifteen become letters: A is ten, B is eleven, C is twelve, D is thirteen, E is fourteen, and F is fifteen!"
      },
      {
        "t": 208.03,
        "who": "Dad",
        "text": "Wait, so I do not have to divide big numbers by sixteen?"
      },
      {
        "t": 212.19,
        "who": "Centi",
        "text": "Never if you have binary! Split one-zero-one-zero-one-one-zero-one into two nibbles: left nibble is eight plus two, A; right nibble is eight plus four plus one, D!"
      },
      {
        "t": 223.22,
        "who": "Tara",
        "text": "And going backwards from hex to binary, always write all four bits for every nibble, including leading zeros!"
      },
      {
        "t": 230.16,
        "who": "Centi",
        "text": "Pause and try this without a calculator! Convert the eight-bit binary byte one-one-zero-zero, zero-one-one-zero into two hexadecimal digits."
      }
    ]
  },
  {
    "id": "number-systems-s04",
    "topicId": "number-systems",
    "topicTitle": "Number Systems",
    "topicShort": "Number Systems",
    "topicIcon": "🔢",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Overflow At The Hawker Stall",
    "index": 4,
    "totalInTopic": 4,
    "title": "Overflow At The Hawker Stall — Pause Challenge Round",
    "summary": "Pause and try this without a calculator! Convert the eight-bit binary byte one-one-zero-zero, zero-one-one-zero into two hexadecimal digits.",
    "startSec": 229.9,
    "endSec": 471.0,
    "durationSec": 241.1,
    "src": "/videos/number-systems.mp4",
    "poster": "/videos/posters/number-systems.jpg",
    "captions": [
      {
        "t": 230.16,
        "who": "Centi",
        "text": "Pause and try this without a calculator! Convert the eight-bit binary byte one-one-zero-zero, zero-one-one-zero into two hexadecimal digits."
      },
      {
        "t": 246.24,
        "who": "Centi",
        "text": "Upper nibble one-one-zero-zero is eight plus four, which is twelve, written as C. Lower nibble zero-one-one-zero is four plus two, which is six. Together that gives C six!"
      },
      {
        "t": 259.62,
        "who": "Mum",
        "text": "You survived the queue! Why is Dad muttering ones and zeros into his chilli sauce?"
      },
      {
        "t": 264.4,
        "who": "Dad",
        "text": "Uncle Hock tested me! He took unsigned binary zero-zero-zero-one-one-zero-one-zero and shifted every bit left by three places. That multiplies by six, right? Two times three?"
      },
      {
        "t": 278.17,
        "who": "Tara",
        "text": "Classic trap, Dad! Shifting left by three places does not multiply by two times three—it multiplies by two to the power of three, which is eight!"
      },
      {
        "t": 287.91,
        "who": "Centi",
        "text": "Every single logical left shift doubles the value and pads a zero on the right! One shift times two, two shifts times four, three shifts times eight, four shifts times sixteen!"
      },
      {
        "t": 299.92,
        "who": "Mum",
        "text": "And sliding all the bits to the right does the exact opposite?"
      },
      {
        "t": 303.48,
        "who": "Centi",
        "text": "Exactly! A logical right shift pads zeros on the left and divides by two to the power of n!"
      },
      {
        "t": 310.14,
        "who": "Tara",
        "text": "Just watch both edges of the register! If a one-bit falls off the leftmost most-significant end during a left shift, you get overflow!"
      },
      {
        "t": 318.68,
        "who": "Centi",
        "text": "And if a one-bit falls off the rightmost least-significant end during a right shift, any point-five fraction gets chopped off—causing truncation and loss of precision!"
      },
      {
        "t": 329.34,
        "who": "Centi",
        "text": "Your turn! The unsigned byte zero-zero-zero-one-zero-one-one-zero equals twenty-two. Perform a logical left shift of two places and find the new denary value."
      },
      {
        "t": 346.55,
        "who": "Centi",
        "text": "Shifting left by two places multiplies twenty-two by two squared, which is four, giving zero-one-zero-one-one-zero-zero-zero, or eighty-eight!"
      },
      {
        "t": 356.83,
        "who": "Dad",
        "text": "Last puzzle! Our smart freezer uses eight-bit Two's Complement and displays one-one-zero-one-zero-one-one-zero. Does that leading one just act like a minus sign?"
      },
      {
        "t": 368.45,
        "who": "Mum",
        "text": "If it were just a minus sign, positive zero and negative zero would fight each other inside the circuit!"
      },
      {
        "t": 374.49,
        "who": "Centi",
        "text": "Mum nailed it! In eight-bit Two's Complement, the leftmost most-significant bit has place value negative one hundred and twenty-eight, while the other seven bits stay positive!"
      },
      {
        "t": 385.52,
        "who": "Tara",
        "text": "Read the board: negative one hundred and twenty-eight, plus sixty-four, plus sixteen, plus four, plus two equals negative forty-two! The ice cream is rock solid!"
      },
      {
        "t": 395.85,
        "who": "Centi",
        "text": "And to turn a negative denary integer into Two's Complement, write the positive eight-bit binary first, flip every bit, and add one! Check both methods and you are unstoppable."
      },
      {
        "t": 407.25,
        "who": "Centi",
        "text": "Final boss challenge! Convert negative nineteen into an eight-bit Two's Complement binary string."
      },
      {
        "t": 419.74,
        "who": "Centi",
        "text": "Start with positive nineteen, zero-zero-zero-one-zero-zero-one-one. Flip every bit to get one-one-one-zero-one-one-zero-zero, then add one to get one-one-one-zero-one-one-zero-one!"
      },
      {
        "t": 432.83,
        "who": "Dad",
        "text": "Wait—if eight ones is negative one in Two's Complement, then my loyalty card score of one-one-one-one-one-one-one-one owes Uncle Hock one noodle!"
      },
      {
        "t": 443.56,
        "who": "Mum",
        "text": "And what if your score hits one-zero-zero-zero-zero-zero-zero-zero, dear?"
      },
      {
        "t": 448.26,
        "who": "Centi",
        "text": "Then Dad owes Uncle Hock one hundred and twenty-eight plates of char kway teow!"
      },
      {
        "t": 453.19,
        "who": "Dad",
        "text": "Nobody panic! I am switching my entire wallet back to unsigned immediately!"
      },
      {
        "t": 458.74,
        "who": "Mum",
        "text": "Relax, Uncle Hock's stamp card is made of cardboard."
      },
      {
        "t": 462.59,
        "who": "Tara",
        "text": "Zero transistors, zero overflow, and finally lunch!"
      }
    ]
  },
  {
    "id": "data-media-compression-s01",
    "topicId": "data-media-compression",
    "topicTitle": "Data & Compression",
    "topicShort": "Data & Compression",
    "topicIcon": "🗜️",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Divide By Ten Twenty Four",
    "index": 1,
    "totalInTopic": 4,
    "title": "Divide By Ten Twenty Four — Cold Open Hook",
    "summary": "Step aside, everyone! I brought my notepad to calculate how many photos fit on this memory card!",
    "startSec": 0.0,
    "endSec": 41.8,
    "durationSec": 41.8,
    "src": "/videos/data-media-compression.mp4",
    "poster": "/videos/posters/data-media-compression.jpg",
    "captions": [
      {
        "t": 1.22,
        "who": "Dad",
        "text": "Step aside, everyone! I brought my notepad to calculate how many photos fit on this memory card!"
      },
      {
        "t": 8.48,
        "who": "Cashier",
        "text": "Sir, the card says four mebibytes right on the sticker."
      },
      {
        "t": 11.53,
        "who": "Tara",
        "text": "Please just tap your card so we can go home, Dad."
      },
      {
        "t": 14.57,
        "who": "Dad",
        "text": "Never rush a mathematician! A sixty-four by sixty-four icon with two hundred and fifty-six colours..."
      },
      {
        "t": 22.36,
        "who": "Dad",
        "text": "...is sixty-four, times sixty-four, times two hundred and fifty-six, divided by one thousand!"
      },
      {
        "t": 29.37,
        "who": "Tara",
        "text": "Dad, you just committed three separate computer science felonies in one sentence."
      },
      {
        "t": 34.84,
        "who": "Cashier",
        "text": "Security, we have an illegal division by one thousand at register three."
      }
    ]
  },
  {
    "id": "data-media-compression-s02",
    "topicId": "data-media-compression",
    "topicTitle": "Data & Compression",
    "topicShort": "Data & Compression",
    "topicIcon": "🗜️",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Divide By Ten Twenty Four",
    "index": 2,
    "totalInTopic": 4,
    "title": "Divide By Ten Twenty Four — Core Concept",
    "summary": "Put down the pencil, Dad! Let us start with text, because every letter on that receipt uses a character set!",
    "startSec": 47.3,
    "endSec": 104.8,
    "durationSec": 57.5,
    "src": "/videos/data-media-compression.mp4",
    "poster": "/videos/posters/data-media-compression.jpg",
    "captions": [
      {
        "t": 48.58,
        "who": "Centi",
        "text": "Put down the pencil, Dad! Let us start with text, because every letter on that receipt uses a character set!"
      },
      {
        "t": 55.57,
        "who": "Dad",
        "text": "A character set? Like the cast of my favourite detective drama?"
      },
      {
        "t": 60.39,
        "who": "Tara",
        "text": "A character set is a defined list of characters where every symbol maps to a unique binary number!"
      },
      {
        "t": 66.55,
        "who": "Tara",
        "text": "Seven-bit Standard ASCII holds one hundred and twenty-eight characters, and eight-bit Extended ASCII holds two hundred and fifty-six."
      },
      {
        "t": 74.72,
        "who": "Centi",
        "text": "And ASCII codes run in order! Uppercase A is sixty-five, B is sixty-six, and lowercase a is ninety-seven—thirty-two higher!"
      },
      {
        "t": 83.53,
        "who": "Cashier",
        "text": "Then how does my receipt printer print Mandarin characters, Tamil script, and rocket emojis?"
      },
      {
        "t": 88.85,
        "who": "Centi",
        "text": "Unicode! Sixteen-bit and thirty-two-bit Unicode unlock billions of codes for every world language and emoji!"
      },
      {
        "t": 96.6,
        "who": "Tara",
        "text": "The only trade-off is storage: Unicode uses sixteen to thirty-two bits per character instead of seven or eight!"
      },
      {
        "t": 104.2,
        "who": "Dad",
        "text": "Fine, Unicode uses more bits! Still, kilo means a thousand on my flour bag, so I divide bytes by a thousand!"
      }
    ]
  },
  {
    "id": "data-media-compression-s03",
    "topicId": "data-media-compression",
    "topicTitle": "Data & Compression",
    "topicShort": "Data & Compression",
    "topicIcon": "🗜️",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Divide By Ten Twenty Four",
    "index": 3,
    "totalInTopic": 4,
    "title": "Divide By Ten Twenty Four — CIE 0478 Examiner Trap",
    "summary": "Fine, Unicode uses more bits! Still, kilo means a thousand on my flour bag, so I divide bytes by a thousand!",
    "startSec": 104.8,
    "endSec": 162.2,
    "durationSec": 57.4,
    "src": "/videos/data-media-compression.mp4",
    "poster": "/videos/posters/data-media-compression.jpg",
    "captions": [
      {
        "t": 104.8,
        "who": "Dad",
        "text": "Fine, Unicode uses more bits! Still, kilo means a thousand on my flour bag, so I divide bytes by a thousand!"
      },
      {
        "t": 115.57,
        "who": "Centi",
        "text": "Red alert! On Cambridge IGCSE Computer Science, kibibytes, mebibytes, gibibytes, and tebibytes strictly use one thousand and twenty-four!"
      },
      {
        "t": 124.81,
        "who": "Tara",
        "text": "Never divide by one thousand for KiB or MiB! Divide bits by eight for bytes, then by one thousand and twenty-four per step!"
      },
      {
        "t": 133.42,
        "who": "Centi",
        "text": "And crime number two: never multiply pixels by two hundred and fifty-six colours! Two to the power of eight is two hundred and fifty-six, so colour depth is eight bits!"
      },
      {
        "t": 144.21,
        "who": "Cashier",
        "text": "Eight bits is just one byte per pixel. Even I can do that without a calculator."
      },
      {
        "t": 149.28,
        "who": "Dad",
        "text": "Wait—sixty-four times sixty-four times one byte is four thousand and ninety-six bytes!"
      },
      {
        "t": 155.85,
        "who": "Dad",
        "text": "Divided by one thousand and twenty-four, that cancels cleanly to four kibibytes! Genius!"
      },
      {
        "t": 162.5,
        "who": "Centi",
        "text": "Pause and cancel factors without a calculator! Find the uncompressed size in kibibytes of a five-hundred-and-twelve by two-hundred-and-fifty-six pixel bitmap using two hundred and fifty-six colours."
      }
    ]
  },
  {
    "id": "data-media-compression-s04",
    "topicId": "data-media-compression",
    "topicTitle": "Data & Compression",
    "topicShort": "Data & Compression",
    "topicIcon": "🗜️",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Divide By Ten Twenty Four",
    "index": 4,
    "totalInTopic": 4,
    "title": "Divide By Ten Twenty Four — Pause Challenge Round",
    "summary": "Pause and cancel factors without a calculator! Find the uncompressed size in kibibytes of a five-hundred-and-twelve by two-hundred-and-fifty-six pixel bitmap using two hundred and fifty-six colours.",
    "startSec": 162.2,
    "endSec": 447.4,
    "durationSec": 285.2,
    "src": "/videos/data-media-compression.mp4",
    "poster": "/videos/posters/data-media-compression.jpg",
    "captions": [
      {
        "t": 162.5,
        "who": "Centi",
        "text": "Pause and cancel factors without a calculator! Find the uncompressed size in kibibytes of a five-hundred-and-twelve by two-hundred-and-fifty-six pixel bitmap using two hundred and fifty-six colours."
      },
      {
        "t": 181.47,
        "who": "Centi",
        "text": "Two hundred and fifty-six colours means eight bits, which is one byte per pixel! Five hundred and twelve divided by one thousand and twenty-four is one half, times two hundred and fifty-six gives one hundred and twenty-eight kibibytes!"
      },
      {
        "t": 197.77,
        "who": "Mum",
        "text": "Tara, your cousin sent a voice recording of his violin solo, and the uncompressed file is enormous!"
      },
      {
        "t": 203.74,
        "who": "Centi",
        "text": "Let us inspect both media formulas side by side! A microphone feeds an Analogue-to-Digital Converter, an ADC, which measures the wave's amplitude at regular intervals."
      },
      {
        "t": 215.05,
        "who": "Tara",
        "text": "Sample rate is how many amplitude samples are taken per second, measured in Hertz! Sample resolution is how many bits store each sample!"
      },
      {
        "t": 223.89,
        "who": "Dad",
        "text": "Wait—if we crank up both sample rate and sample resolution, what happens?"
      },
      {
        "t": 229.26,
        "who": "Centi",
        "text": "Higher sample rate and higher sample resolution shrink quantisation error so the audio matches the original wave much more closely—but file size shoots up!"
      },
      {
        "t": 239.89,
        "who": "Mum",
        "text": "Just like increasing bitmap image resolution and colour depth makes photos sharper with millions of shades, while making files heavier!"
      },
      {
        "t": 247.58,
        "who": "Dad",
        "text": "Hold on—where does the computer keep the image width, height, and colour depth so it knows how to draw the grid?"
      },
      {
        "t": 254.97,
        "who": "Centi",
        "text": "Inside the image's metadata header! Metadata stores width, height, colour depth, and file format right alongside the pixels!"
      },
      {
        "t": 263.68,
        "who": "Tara",
        "text": "And watch out for two sneaky exam traps on sound: convert minutes into seconds by multiplying by sixty, and multiply by two if the recording is stereo!"
      },
      {
        "t": 273.95,
        "who": "Centi",
        "text": "Try this audio puzzle! A mono clip is sampled at eight thousand one hundred and ninety-two Hertz, sixteen-bit resolution, for ten seconds. Find its exact size in kibibytes."
      },
      {
        "t": 291.56,
        "who": "Centi",
        "text": "Eight thousand one hundred and ninety-two divided by one thousand and twenty-four is eight! Sixteen bits divided by eight is two bytes! Eight times two times ten gives one hundred and sixty kibibytes!"
      },
      {
        "t": 305.53,
        "who": "Dad",
        "text": "No problem! I will shrink your cousin's violin track AND Tara's Python coursework by saving both of them with lossy compression!"
      },
      {
        "t": 315.19,
        "who": "Tara",
        "text": "Dad, do not touch my Python file! Lossy compression permanently deletes data that can never be recovered!"
      },
      {
        "t": 321.86,
        "who": "Centi",
        "text": "For music, lossy MP three is brilliant! Perceptual music shaping removes frequencies outside human hearing and quiet sounds masked by simultaneous louder sounds."
      },
      {
        "t": 333.39,
        "who": "Mum",
        "text": "And lossy JPEG blends nearly identical pixel shades in photographs so web pages load super fast!"
      },
      {
        "t": 340.25,
        "who": "Tara",
        "text": "Whereas Python code, text documents, and spreadsheets must use lossless compression like ZIP or Run-Length Encoding—because losing one bit breaks the whole file!"
      },
      {
        "t": 350.93,
        "who": "Centi",
        "text": "Look at Run-Length Encoding on the holo-board! Six W's, two B's, then four W's compress into three count-value pairs: six bytes instead of twelve, and never merge separated runs!"
      },
      {
        "t": 363.85,
        "who": "Centi",
        "text": "Last challenge! A twelve-byte string has five A's, three B's, and four C's. If each Run-Length Encoding pair uses two bytes, what is the compressed size in bytes?"
      },
      {
        "t": 380.48,
        "who": "Centi",
        "text": "There are three consecutive runs: five A, three B, and four C. Three pairs times two bytes per pair equals six bytes—cutting the file size right in half with zero data lost!"
      },
      {
        "t": 392.82,
        "who": "Dad",
        "text": "Wait—what if I run RLE on my checkered picnic shirt: white, black, white, black, white, black?"
      },
      {
        "t": 399.64,
        "who": "Tara",
        "text": "Think about it, Dad: how long is each consecutive run on a checkerboard?"
      },
      {
        "t": 404.1,
        "who": "Dad",
        "text": "Just one square at a time... wait a minute!"
      },
      {
        "t": 407.43,
        "who": "Centi",
        "text": "Every single run has length one, so RLE sticks an extra count byte onto every square and doubles your shirt's file size!"
      },
      {
        "t": 415.44,
        "who": "Mum",
        "text": "And what if you want to compress a long English essay with no repeated rows of A's?"
      },
      {
        "t": 420.12,
        "who": "Centi",
        "text": "Use lossless dictionary compression! It stores repeated words like 'the' and 'computer' once in a table and swaps in tiny index tokens!"
      },
      {
        "t": 428.99,
        "who": "Dad",
        "text": "Okay, new family rule: divide by one thousand and twenty-four, convert colours to bits, and keep JPEG away from Python!"
      },
      {
        "t": 438.39,
        "who": "Mum",
        "text": "Stick to ironing the checkered shirt, dear, and leave the compression to Tara."
      }
    ]
  },
  {
    "id": "data-transmission-s01",
    "topicId": "data-transmission",
    "topicTitle": "Data Transmission",
    "topicShort": "Data Transmission",
    "topicIcon": "📡",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Lost In The Packet Switch",
    "index": 1,
    "totalInTopic": 4,
    "title": "Lost In The Packet Switch — Cold Open Hook",
    "summary": "Behold my genius! Why use one boring USB cord when I taped eight copper coat-hangers side by side out the window to the printer?",
    "startSec": 0.0,
    "endSec": 38.2,
    "durationSec": 38.2,
    "src": "/videos/data-transmission.mp4",
    "poster": "/videos/posters/data-transmission.jpg",
    "captions": [
      {
        "t": 1.22,
        "who": "Dad",
        "text": "Behold my genius! Why use one boring USB cord when I taped eight copper coat-hangers side by side out the window to the printer?"
      },
      {
        "t": 10.57,
        "who": "Mum",
        "text": "Rajesh, that thirty-metre coat-hanger ribbon is buzzing, and the printer just spat out alien hieroglyphics!"
      },
      {
        "t": 16.79,
        "who": "Dad",
        "text": "Hold on, let me radio Uncle Hock on my walkie-talkie while he talks back at the exact same moment! KEEP TALKING, UNCLE!"
      },
      {
        "t": 25.39,
        "who": "Tara",
        "text": "Dad, walkie-talkies cannot talk both ways at once, and your eight-wire ribbon scrambled every byte with data skew!"
      },
      {
        "t": 32.31,
        "who": "Dad",
        "text": "Data stew? Are we having data stew for dinner?"
      }
    ]
  },
  {
    "id": "data-transmission-s02",
    "topicId": "data-transmission",
    "topicTitle": "Data Transmission",
    "topicShort": "Data Transmission",
    "topicIcon": "📡",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Lost In The Packet Switch",
    "index": 2,
    "totalInTopic": 4,
    "title": "Lost In The Packet Switch — Core Concept",
    "summary": "Step away from the coat-hangers, Rajesh, and look at my holo-board!",
    "startSec": 43.7,
    "endSec": 119.4,
    "durationSec": 75.7,
    "src": "/videos/data-transmission.mp4",
    "poster": "/videos/posters/data-transmission.jpg",
    "captions": [
      {
        "t": 45.39,
        "who": "Centi",
        "text": "Step away from the coat-hangers, Rajesh, and look at my holo-board!"
      },
      {
        "t": 50.15,
        "who": "Centi",
        "text": "Serial transmission sends one bit at a time sequentially along a single wire."
      },
      {
        "t": 55.96,
        "who": "Tara",
        "text": "Because bits queue in single file on one wire, they never overtake each other over long distances — zero data skew and minimal crosstalk!"
      },
      {
        "t": 64.92,
        "who": "Centi",
        "text": "Parallel transmission sends multiple bits simultaneously across several wires. Over millimetres inside a CPU bus, parallel is super fast."
      },
      {
        "t": 74.79,
        "who": "Mum",
        "text": "Yet over thirty metres, tiny speed differences between wires make bits arrive unsynchronised — that is data skew!"
      },
      {
        "t": 81.95,
        "who": "Dad",
        "text": "Fine, coat-hangers retired! What went wrong with my walkie-talkie duet?"
      },
      {
        "t": 87.18,
        "who": "Centi",
        "text": "Direction modes! Simplex travels in one direction only, like a keyboard to a CPU."
      },
      {
        "t": 93.45,
        "who": "Tara",
        "text": "Half-duplex goes both directions, NOT at the same time — like walkie-talkies taking turns!"
      },
      {
        "t": 99.4,
        "who": "Mum",
        "text": "And full-duplex goes both directions simultaneously, like fibre broadband or a telephone call."
      },
      {
        "t": 105.44,
        "who": "Dad",
        "text": "So what does a Universal System Bus cable use?"
      },
      {
        "t": 109.79,
        "who": "Tara",
        "text": "Universal SERIAL Bus, Dad! The middle word is Serial!"
      },
      {
        "t": 113.41,
        "who": "Tara",
        "text": "A shielded USB cable carries red five-volt power, black ground, and two asynchronous serial data wires, up to five metres per passive cable."
      }
    ]
  },
  {
    "id": "data-transmission-s03",
    "topicId": "data-transmission",
    "topicTitle": "Data Transmission",
    "topicShort": "Data Transmission",
    "topicIcon": "📡",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Lost In The Packet Switch",
    "index": 3,
    "totalInTopic": 4,
    "title": "Lost In The Packet Switch — CIE 0478 Examiner Trap",
    "summary": "A shielded USB cable carries red five-volt power, black ground, and two asynchronous serial data wires, up to five metres per passive cable.",
    "startSec": 119.4,
    "endSec": 195.0,
    "durationSec": 75.6,
    "src": "/videos/data-transmission.mp4",
    "poster": "/videos/posters/data-transmission.jpg",
    "captions": [
      {
        "t": 119.4,
        "who": "Tara",
        "text": "A shielded USB cable carries red five-volt power, black ground, and two asynchronous serial data wires, up to five metres per passive cable."
      },
      {
        "t": 123.23,
        "who": "Centi",
        "text": "Know the three plug-and-play steps too! First, a small voltage change detects the device."
      },
      {
        "t": 129.56,
        "who": "Centi",
        "text": "Second, the device is automatically recognised. Third, the operating system loads the matching device driver — or prompts you to install it!"
      },
      {
        "t": 139.17,
        "who": "Dad",
        "text": "Five volts of USB power charges a mouse nicely, whereas my coat-hangers nearly toasted the curtains."
      },
      {
        "t": 147.72,
        "who": "Centi",
        "text": "Welcome to the Internet! Big files are split into packets holding roughly sixty-four kibibytes of payload."
      },
      {
        "t": 154.47,
        "who": "Tara",
        "text": "The Header holds sender IP, destination IP, packet sequence number, total packets, and hop counter."
      },
      {
        "t": 161.31,
        "who": "Mum",
        "text": "The Payload carries the user data, while the Trailer holds the end-of-packet marker and a Cyclic Redundancy Check — C R C!"
      },
      {
        "t": 168.66,
        "who": "Centi",
        "text": "In packet switching, routers read the destination IP and independently steer each packet down the least congested route."
      },
      {
        "t": 176.63,
        "who": "Dad",
        "text": "Wait — if Packet Two takes a shortcut and arrives before Packet One, won't my photo arrive inside-out?"
      },
      {
        "t": 184.22,
        "who": "Tara",
        "text": "Never! The receiver reads the packet sequence numbers in the headers and reorders them!"
      },
      {
        "t": 189.29,
        "who": "Centi",
        "text": "And every router subtracts one from the hop counter, discarding any lost packet that hits zero."
      }
    ]
  },
  {
    "id": "data-transmission-s04",
    "topicId": "data-transmission",
    "topicTitle": "Data Transmission",
    "topicShort": "Data Transmission",
    "topicIcon": "📡",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Lost In The Packet Switch",
    "index": 4,
    "totalInTopic": 4,
    "title": "Lost In The Packet Switch — Pause Challenge Round",
    "summary": "And every router subtracts one from the hop counter, discarding any lost packet that hits zero.",
    "startSec": 195.0,
    "endSec": 422.6,
    "durationSec": 227.6,
    "src": "/videos/data-transmission.mp4",
    "poster": "/videos/posters/data-transmission.jpg",
    "captions": [
      {
        "t": 195.0,
        "who": "Centi",
        "text": "And every router subtracts one from the hop counter, discarding any lost packet that hits zero."
      },
      {
        "t": 195.32,
        "who": "Centi",
        "text": "Pause Challenge One! A four mebibyte file is split into sixty four kibibyte payload packets, with one thousand and twenty four kibibytes per mebibyte. How many packets are created?"
      },
      {
        "t": 212.82,
        "who": "Centi",
        "text": "Four times one thousand and twenty four is four thousand and ninety six kibibytes. Divide by sixty four to get sixty four packets!"
      },
      {
        "t": 226.66,
        "who": "Dad",
        "text": "Read my mock answer: The header checks errors with C R C, and full-duplex goes in two directions! Full marks?"
      },
      {
        "t": 235.09,
        "who": "Centi",
        "text": "Zero marks, Rajesh! IPs and sequence numbers live in the header; C R C error checking lives in the trailer!"
      },
      {
        "t": 243.0,
        "who": "Tara",
        "text": "And half-duplex goes in two directions too! For full-duplex you MUST write both directions simultaneously!"
      },
      {
        "t": 250.81,
        "who": "Cashier",
        "text": "Welcome to Byte Mart! Interference hit our network, and someone smudged this book barcode."
      },
      {
        "t": 256.02,
        "who": "Dad",
        "text": "Easy! Stick one Even Parity bit on every byte so total ones stay even. Foolproof!"
      },
      {
        "t": 262.61,
        "who": "Tara",
        "text": "Not if TWO bits flip in the same byte, Dad! Any even number of bit flips keeps the count even and fools single-byte parity!"
      },
      {
        "t": 270.14,
        "who": "Centi",
        "text": "Instead, a two-dimensional Parity Block adds a bottom Parity Byte checking every column!"
      },
      {
        "t": 276.13,
        "who": "Centi",
        "text": "When one bit flips, both its row and its column fail parity — pinpointing the exact intersection!"
      },
      {
        "t": 282.79,
        "who": "Centi",
        "text": "Pause Challenge Two! Seven data bits one one zero one zero one one need an Even Parity bit on the left. Give the eight bit byte!"
      },
      {
        "t": 297.78,
        "who": "Centi",
        "text": "Five ones is odd, so prepend a one on the left to make six ones: one one one zero one zero one one!"
      },
      {
        "t": 305.98,
        "who": "Centi",
        "text": "For a Checksum, the sender computes a block summary value; the receiver recalculates it with the same algorithm and compares."
      },
      {
        "t": 314.22,
        "who": "Tara",
        "text": "An Echo Check bounces all the data back to the sender — doubling traffic, and you cannot tell if corruption happened outward or returning!"
      },
      {
        "t": 322.57,
        "who": "Cashier",
        "text": "And this thirteen-digit book barcode?"
      },
      {
        "t": 324.86,
        "who": "Centi",
        "text": "That final digit is a Check Digit! Check Digits validate human data entry and scanning — catching wrong digits, adjacent transpositions, omitted digits, and phonetic slips!"
      },
      {
        "t": 336.75,
        "who": "Tara",
        "text": "In I S B N thirteen, sum odd positions plus three times even positions, take modulo ten, and subtract non-zero remainders from ten!"
      },
      {
        "t": 346.65,
        "who": "Dad",
        "text": "And when C R C or a checksum spots a bad network packet, how is it resent?"
      },
      {
        "t": 352.7,
        "who": "Centi",
        "text": "Automatic Repeat Query — A R Q! The sender transmits a packet and starts a timeout timer."
      },
      {
        "t": 359.29,
        "who": "Tara",
        "text": "Clean packet brings a positive acknowledgement; bad packet brings a negative acknowledgement."
      },
      {
        "t": 365.17,
        "who": "Centi",
        "text": "On a negative acknowledgement OR if the timeout expires first, the sender automatically retransmits until a positive acknowledgement arrives or a retry limit is hit!"
      },
      {
        "t": 376.45,
        "who": "Centi",
        "text": "Pause Challenge Three! The first twelve digits of an I S B N thirteen give a weighted sum of one hundred. What is the thirteenth check digit?"
      },
      {
        "t": 391.68,
        "who": "Centi",
        "text": "One hundred modulo ten is zero! When the remainder is zero, the check digit is zero — never ten!"
      },
      {
        "t": 400.27,
        "who": "Mum",
        "text": "One shielded four-metre USB cable, driver loaded in two seconds, crisp recipes printing cleanly!"
      },
      {
        "t": 406.58,
        "who": "Dad",
        "text": "Positive acknowledgement! Though if dinner misses my stomach timeout, I am automatically retransmitting!"
      },
      {
        "t": 413.88,
        "who": "Tara",
        "text": "Retry limit reached, Dad — kitchen router discarded your packet!"
      }
    ]
  },
  {
    "id": "hardware-architecture-s01",
    "topicId": "hardware-architecture",
    "topicTitle": "CPU & Storage",
    "topicShort": "CPU & Storage",
    "topicIcon": "🖥️",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Fetch, Decode, Disaster",
    "index": 1,
    "totalInTopic": 4,
    "title": "Fetch, Decode, Disaster — Cold Open Hook",
    "summary": "Stand back everyone, I am installing video games onto our microwave oven because it has a microprocessor inside!",
    "startSec": 0.0,
    "endSec": 31.0,
    "durationSec": 31.0,
    "src": "/videos/hardware-architecture.mp4",
    "poster": "/videos/posters/hardware-architecture.jpg",
    "captions": [
      {
        "t": 1.22,
        "who": "Dad",
        "text": "Stand back everyone, I am installing video games onto our microwave oven because it has a microprocessor inside!"
      },
      {
        "t": 9.97,
        "who": "Tara",
        "text": "Dad, please put the screwdriver down before our porridge achieves orbital launch."
      },
      {
        "t": 14.91,
        "who": "Mum",
        "text": "Why is my laptop taped to the Wi-Fi router with three shiny movie discs wedged underneath?"
      },
      {
        "t": 20.33,
        "who": "Dad",
        "text": "Easy! My laptop ran out of memory, so I gave it extra optical cache and pointed the router straight at the ceiling!"
      }
    ]
  },
  {
    "id": "hardware-architecture-s02",
    "topicId": "hardware-architecture",
    "topicTitle": "CPU & Storage",
    "topicShort": "CPU & Storage",
    "topicIcon": "🖥️",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Fetch, Decode, Disaster",
    "index": 2,
    "totalInTopic": 4,
    "title": "Fetch, Decode, Disaster — Core Concept",
    "summary": "Did somebody just call a microwave oven a general-purpose gaming rig? My registers are trembling!",
    "startSec": 36.5,
    "endSec": 86.0,
    "durationSec": 49.5,
    "src": "/videos/hardware-architecture.mp4",
    "poster": "/videos/posters/hardware-architecture.jpg",
    "captions": [
      {
        "t": 38.8,
        "who": "Centi",
        "text": "Did somebody just call a microwave oven a general-purpose gaming rig? My registers are trembling!"
      },
      {
        "t": 45.61,
        "who": "Tara",
        "text": "Save him, Centi! Start with why the microwave cannot run spreadsheets."
      },
      {
        "t": 50.21,
        "who": "Centi",
        "text": "A microwave is an embedded system: a microprocessor paired with dedicated firmware for one specific job inside a larger machine."
      },
      {
        "t": 59.6,
        "who": "Dad",
        "text": "Wait, so my smartphone is an embedded system too because it fits in my pocket?"
      },
      {
        "t": 65.27,
        "who": "Tara",
        "text": "No! Phones and laptops are general-purpose computers because you install any app you want."
      },
      {
        "t": 71.15,
        "who": "Centi",
        "text": "Inside your laptop sits a Von Neumann CPU, where both instructions and data live together in RAM."
      },
      {
        "t": 78.77,
        "who": "Centi",
        "text": "Watch the Fetch stage closely: the Program Counter holds the address of the next instruction to be fetched."
      },
      {
        "t": 85.62,
        "who": "Tara",
        "text": "That address copies into the Memory Address Register and travels down the unidirectional Address Bus to RAM!"
      }
    ]
  },
  {
    "id": "hardware-architecture-s03",
    "topicId": "hardware-architecture",
    "topicTitle": "CPU & Storage",
    "topicShort": "CPU & Storage",
    "topicIcon": "🖥️",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Fetch, Decode, Disaster",
    "index": 3,
    "totalInTopic": 4,
    "title": "Fetch, Decode, Disaster — CIE 0478 Examiner Trap",
    "summary": "That address copies into the Memory Address Register and travels down the unidirectional Address Bus to RAM!",
    "startSec": 86.0,
    "endSec": 135.4,
    "durationSec": 49.4,
    "src": "/videos/hardware-architecture.mp4",
    "poster": "/videos/posters/hardware-architecture.jpg",
    "captions": [
      {
        "t": 86.0,
        "who": "Tara",
        "text": "That address copies into the Memory Address Register and travels down the unidirectional Address Bus to RAM!"
      },
      {
        "t": 92.57,
        "who": "Centi",
        "text": "Meanwhile the Control Unit sends a read signal on the bidirectional Control Bus, and RAM returns the instruction on the bidirectional Data Bus to the Memory Data Register."
      },
      {
        "t": 104.6,
        "who": "Tara",
        "text": "Then it copies into the Current Instruction Register to be decoded, while the Program Counter increments by one!"
      },
      {
        "t": 111.28,
        "who": "Dad",
        "text": "And where do results go when the Arithmetic and Logic Unit finishes?"
      },
      {
        "t": 116.24,
        "who": "Centi",
        "text": "Into the Accumulator! Push clock speed too far by overclocking and operations fall out of sync while silicon overheats."
      },
      {
        "t": 124.38,
        "who": "Dad",
        "text": "What if I upgrade from two cores to four — will every program run twice as fast?"
      },
      {
        "t": 130.15,
        "who": "Tara",
        "text": "No — cores spend time communicating, and sequential steps cannot split across cores."
      }
    ]
  },
  {
    "id": "hardware-architecture-s04",
    "topicId": "hardware-architecture",
    "topicTitle": "CPU & Storage",
    "topicShort": "CPU & Storage",
    "topicIcon": "🖥️",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Fetch, Decode, Disaster",
    "index": 4,
    "totalInTopic": 4,
    "title": "Fetch, Decode, Disaster — Pause Challenge Round",
    "summary": "No — cores spend time communicating, and sequential steps cannot split across cores.",
    "startSec": 135.4,
    "endSec": 482.6,
    "durationSec": 347.2,
    "src": "/videos/hardware-architecture.mp4",
    "poster": "/videos/posters/hardware-architecture.jpg",
    "captions": [
      {
        "t": 135.4,
        "who": "Tara",
        "text": "No — cores spend time communicating, and sequential steps cannot split across cores."
      },
      {
        "t": 135.72,
        "who": "Centi",
        "text": "Pause and trace! The Program Counter starts at two hundred and the Accumulator holds fifteen. Address two hundred holds Add two hundred and five, and address two hundred and five stores nine. What value finishes in the Accumulator?"
      },
      {
        "t": 156.18,
        "who": "Centi",
        "text": "Twenty four! Fetch loads Add two hundred and five into the Current Instruction Register and increments the Program Counter to two hundred and one. Execute reads nine from address two hundred and five and adds fifteen plus nine to get twenty four!"
      },
      {
        "t": 175.51,
        "who": "Dad",
        "text": "Okay, mock exam answer: the Program Counter counts how many instructions ran, the Control Bus is one-way, and RAM stores all my holiday photos!"
      },
      {
        "t": 187.32,
        "who": "Centi",
        "text": "Triple zero marks! Examiners weep into their mark schemes every June over those exact three blunders!"
      },
      {
        "t": 194.42,
        "who": "Tara",
        "text": "Write this instead: the Program Counter holds the address of the next instruction, and the Control Bus is bidirectional!"
      },
      {
        "t": 201.78,
        "who": "Centi",
        "text": "And never say RAM stores your saved files! Volatile RAM stores the currently running operating system, active programs, and data currently in use."
      },
      {
        "t": 212.55,
        "who": "Tara",
        "text": "While non-volatile ROM stores the permanent bootstrap loader and BIOS firmware that wakes the computer at startup!"
      },
      {
        "t": 220.85,
        "who": "Dad",
        "text": "Look at this winter kiosk! Why did my smartphone touchscreen ignore my thick wool gloves outside, yet this ticket screen works fine?"
      },
      {
        "t": 229.94,
        "who": "Tara",
        "text": "Your phone uses a capacitive touchscreen that needs a conductive bare finger to draw charge from an electrostatic layer."
      },
      {
        "t": 237.62,
        "who": "Centi",
        "text": "Resistive screens press two flexible layers together, while infrared screens detect any gloved finger breaking an invisible beam grid!"
      },
      {
        "t": 246.02,
        "who": "Dad",
        "text": "Should I buy an inkjet or a laser printer to print five hundred booklets tonight?"
      },
      {
        "t": 251.79,
        "who": "Tara",
        "text": "Laser! Inkjets spray droplets line by line for photos; laser printers fuse powdered toner onto whole pages fast."
      },
      {
        "t": 259.62,
        "who": "Dad",
        "text": "Nice! Now, my greenhouse wires a water sensor and heat sensor straight to the CPU!"
      },
      {
        "t": 266.28,
        "who": "Tara",
        "text": "Never write water sensor or heat sensor — use moisture for soil, humidity for air, and temperature!"
      },
      {
        "t": 272.7,
        "who": "Centi",
        "text": "Sensors output analogue signals, so an Analogue to Digital Converter turns them into binary for the microprocessor."
      },
      {
        "t": 280.57,
        "who": "Tara",
        "text": "Monitoring systems like heart monitors only log data or sound warnings without changing the environment."
      },
      {
        "t": 287.65,
        "who": "Centi",
        "text": "Control systems drive actuators whose physical action changes the next sensor reading in a feedback loop!"
      },
      {
        "t": 295.2,
        "who": "Centi",
        "text": "Quick check! Which three-letter hardware component sits between an analogue temperature sensor and a digital microprocessor?"
      },
      {
        "t": 308.83,
        "who": "Centi",
        "text": "A D C, the Analogue to Digital Converter! Without it, the microprocessor cannot compare the continuous physical reading against its stored preset value."
      },
      {
        "t": 320.31,
        "who": "Mum",
        "text": "Now explain why Dad's shiny discs and full memory brought my laptop to a standstill!"
      },
      {
        "t": 325.36,
        "who": "Centi",
        "text": "Inside RAM, main memory uses DRAM capacitors that need constant refreshing, while fast CPU cache uses SRAM flip-flops that never need refreshing."
      },
      {
        "t": 336.33,
        "who": "Tara",
        "text": "For permanent secondary storage, magnetic hard drives use spinning platters and electromagnets, while optical Blu-ray discs read a single spiral of pits and lands with a short-wavelength blue laser."
      },
      {
        "t": 348.8,
        "who": "Centi",
        "text": "Best for laptops is a Solid-State Drive: zero moving parts, using control-gate and floating-gate transistors to trap electrons safely against bumps!"
      },
      {
        "t": 359.17,
        "who": "Dad",
        "text": "Then why was my hard drive clicking non-stop when I opened thirty tabs on tiny RAM?"
      },
      {
        "t": 365.91,
        "who": "Tara",
        "text": "Virtual memory! When RAM fills up, the operating system swaps inactive pages out to hard drive swap space and swaps them back into RAM when needed."
      },
      {
        "t": 376.5,
        "who": "Centi",
        "text": "Constant swapping back and forth is called disk thrashing — cure it by installing more physical RAM!"
      },
      {
        "t": 383.4,
        "who": "Dad",
        "text": "Fine, I will upload everything to cloud storage so my files float safely in the sky without any hard drives!"
      },
      {
        "t": 391.48,
        "who": "Tara",
        "text": "Cloud storage still uses real physical servers in remote data centres — great for access anywhere, provided your Internet stays connected!"
      },
      {
        "t": 400.6,
        "who": "Mum",
        "text": "And please rescue my poor Wi-Fi router from Dad's sticky tape."
      },
      {
        "t": 404.4,
        "who": "Centi",
        "text": "Every device has a Network Interface Card holding a permanent forty-eight-bit hexadecimal MAC address: manufacturer code first, unique serial second."
      },
      {
        "t": 415.29,
        "who": "Tara",
        "text": "Meanwhile a DHCP server leases logical IP addresses: thirty-two-bit dotted denary for I P version four, or one hundred and twenty-eight-bit hex with colons for I P version six!"
      },
      {
        "t": 428.32,
        "who": "Centi",
        "text": "Your router reads the destination IP address inside each packet header and checks its routing table to forward packets between your home LAN and the Internet!"
      },
      {
        "t": 439.35,
        "who": "Centi",
        "text": "Final boss challenge! How many bits make up a hardware MAC address, and how many bits make up an I P version six address?"
      },
      {
        "t": 453.7,
        "who": "Centi",
        "text": "Forty eight bits for a MAC address and one hundred and twenty eight bits for I P version six! Six hexadecimal pairs give forty eight bits, while eight groups of four hexadecimal digits give one hundred and twenty eight bits."
      },
      {
        "t": 468.72,
        "who": "Dad",
        "text": "I took the Blu-ray discs off the router, bought extra DRAM sticks to stop disk thrashing, and let the microwave stick to heating soup!"
      }
    ]
  },
  {
    "id": "software-security-ai-s01",
    "topicId": "software-security-ai",
    "topicTitle": "Software, Security & AI",
    "topicShort": "Software, Security & AI",
    "topicIcon": "🛡️",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Phishing For Compliments",
    "index": 1,
    "totalInTopic": 4,
    "title": "Phishing For Compliments — Cold Open Hook",
    "summary": "Stand back everyone! Your father just won Most Handsome Online Banking Customer of the Year!",
    "startSec": 0.0,
    "endSec": 27.7,
    "durationSec": 27.7,
    "src": "/videos/software-security-ai.mp4",
    "poster": "/videos/posters/software-security-ai.jpg",
    "captions": [
      {
        "t": 1.22,
        "who": "Dad",
        "text": "Stand back everyone! Your father just won Most Handsome Online Banking Customer of the Year!"
      },
      {
        "t": 7.82,
        "who": "Tara",
        "text": "Dad, look at the sender domain. Royal Dash Bank Dash Totally Legit Dot Biz?"
      },
      {
        "t": 13.0,
        "who": "Dad",
        "text": "It asked me to click a shiny blue link to confirm my PIN, and gifted me a free Super Wallpaper app!"
      },
      {
        "t": 20.38,
        "who": "Mum",
        "text": "You clicked a mystery email link AND installed an unknown app before breakfast?"
      }
    ]
  },
  {
    "id": "software-security-ai-s02",
    "topicId": "software-security-ai",
    "topicTitle": "Software, Security & AI",
    "topicShort": "Software, Security & AI",
    "topicIcon": "🛡️",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Phishing For Compliments",
    "index": 2,
    "totalInTopic": 4,
    "title": "Phishing For Compliments — Core Concept",
    "summary": "Hands off that keyboard before a keylogger steals your secret biscuit recipe!",
    "startSec": 33.2,
    "endSec": 78.4,
    "durationSec": 45.2,
    "src": "/videos/software-security-ai.mp4",
    "poster": "/videos/posters/software-security-ai.jpg",
    "captions": [
      {
        "t": 35.45,
        "who": "Centi",
        "text": "Hands off that keyboard before a keylogger steals your secret biscuit recipe!"
      },
      {
        "t": 40.91,
        "who": "Dad",
        "text": "Relax, Centi! My wallpaper app sits on the screen, so it counts as system software, right?"
      },
      {
        "t": 47.49,
        "who": "Tara",
        "text": "Wrong category, Dad. Application software performs user tasks, like a word processor, spreadsheet, or web browser."
      },
      {
        "t": 55.23,
        "who": "Centi",
        "text": "And never write brand names on the exam! System software manages hardware: the Operating System, utilities, device drivers, and translators."
      },
      {
        "t": 65.35,
        "who": "Dad",
        "text": "Wait — when power first turns on and volatile RAM is empty, how does the Operating System wake up?"
      },
      {
        "t": 73.01,
        "who": "Centi",
        "text": "Non-volatile ROM stores firmware — the BIOS or bootloader — which checks hardware and loads the Operating System into RAM!"
      }
    ]
  },
  {
    "id": "software-security-ai-s03",
    "topicId": "software-security-ai",
    "topicTitle": "Software, Security & AI",
    "topicShort": "Software, Security & AI",
    "topicIcon": "🛡️",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Phishing For Compliments",
    "index": 3,
    "totalInTopic": 4,
    "title": "Phishing For Compliments — CIE 0478 Examiner Trap",
    "summary": "Non-volatile ROM stores firmware — the BIOS or bootloader — which checks hardware and loads the Operating System into RAM!",
    "startSec": 78.4,
    "endSec": 123.7,
    "durationSec": 45.3,
    "src": "/videos/software-security-ai.mp4",
    "poster": "/videos/posters/software-security-ai.jpg",
    "captions": [
      {
        "t": 78.4,
        "who": "Centi",
        "text": "Non-volatile ROM stores firmware — the BIOS or bootloader — which checks hardware and loads the Operating System into RAM!"
      },
      {
        "t": 81.84,
        "who": "Tara",
        "text": "Then the OS runs memory management, multitasking, file and user management, peripheral drivers, and your interface: WIMP GUI or fast text CLI!"
      },
      {
        "t": 92.18,
        "who": "Dad",
        "text": "What if my printer jams mid-task? Does the CPU freeze halfway through decoding an instruction?"
      },
      {
        "t": 99.13,
        "who": "Centi",
        "text": "Never mid-cycle! The CPU finishes its current Fetch-Decode-Execute cycle first, then checks the interrupt's priority."
      },
      {
        "t": 107.35,
        "who": "Tara",
        "text": "Keypresses and paper jams are hardware interrupts; dividing by zero is a software interrupt!"
      },
      {
        "t": 113.53,
        "who": "Centi",
        "text": "If higher priority, the CPU pushes registers like PC and ACC onto a RAM stack, runs the Interrupt Service Routine, then restores them!"
      },
      {
        "t": 123.97,
        "who": "Centi",
        "text": "Quick check! What three letter abbreviation names the routine run by the C P U to service an interrupt after saving registers?"
      }
    ]
  },
  {
    "id": "software-security-ai-s04",
    "topicId": "software-security-ai",
    "topicTitle": "Software, Security & AI",
    "topicShort": "Software, Security & AI",
    "topicIcon": "🛡️",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Phishing For Compliments",
    "index": 4,
    "totalInTopic": 4,
    "title": "Phishing For Compliments — Pause Challenge Round",
    "summary": "Quick check! What three letter abbreviation names the routine run by the C P U to service an interrupt after saving registers?",
    "startSec": 123.7,
    "endSec": 463.2,
    "durationSec": 339.5,
    "src": "/videos/software-security-ai.mp4",
    "poster": "/videos/posters/software-security-ai.jpg",
    "captions": [
      {
        "t": 123.97,
        "who": "Centi",
        "text": "Quick check! What three letter abbreviation names the routine run by the C P U to service an interrupt after saving registers?"
      },
      {
        "t": 138.64,
        "who": "Centi",
        "text": "I S R — the Interrupt Service Routine! Afterwards, saved registers pop off the stack so the original program resumes."
      },
      {
        "t": 147.88,
        "who": "Dad",
        "text": "Right, I am coding my own cyber shield! Let me load pink rose-scented paper into the printer for IDE prettyprinting."
      },
      {
        "t": 156.85,
        "who": "Tara",
        "text": "Put the paper down, Dad! Prettyprinting in an IDE means syntax colour-coding and automatic indentation on screen!"
      },
      {
        "t": 164.41,
        "who": "Centi",
        "text": "An IDE also gives you a code editor, error diagnostics, auto-completion, translators, and a runtime debugger with breakpoints."
      },
      {
        "t": 173.63,
        "who": "Dad",
        "text": "Why three translators though? Can one button not translate everything?"
      },
      {
        "t": 178.67,
        "who": "Tara",
        "text": "High-level languages are portable and English-like, whereas low-level Assembly uses mnemonics for fast, direct register control."
      },
      {
        "t": 187.23,
        "who": "Centi",
        "text": "An Assembler translates Assembly into binary machine code. For high-level code during debugging, use an Interpreter!"
      },
      {
        "t": 195.2,
        "who": "Tara",
        "text": "An Interpreter runs line by line and stops right on the first error, with no executable file."
      },
      {
        "t": 201.28,
        "who": "Centi",
        "text": "When releasing finished software, a Compiler translates the whole program into a fast standalone executable, listing all errors and hiding source code!"
      },
      {
        "t": 211.44,
        "who": "Dad",
        "text": "I bought forty sheets of lavender card stock for prettyprinting. Nobody tell Tara's teacher."
      },
      {
        "t": 218.45,
        "who": "Mum",
        "text": "Now explain how that fake bank page loaded on our network!"
      },
      {
        "t": 222.19,
        "who": "Centi",
        "text": "First: the Internet is the global physical network infrastructure, while the World Wide Web is the collection of web pages accessed over it!"
      },
      {
        "t": 231.29,
        "who": "Tara",
        "text": "A URL has protocol, domain name, and file path. Your browser sends the domain name to a DNS server to get its IP address!"
      },
      {
        "t": 240.3,
        "who": "Centi",
        "text": "Under HTTPS, the web server sends an SSL or TLS digital certificate with its public key. The browser verifies it and renders encrypted HTML."
      },
      {
        "t": 252.16,
        "who": "Dad",
        "text": "And cookies! Are cookies tiny viruses hiding on my hard drive?"
      },
      {
        "t": 256.99,
        "who": "Mum",
        "text": "Never! Cookies are plain-text data files, never viruses! Session cookies sit in RAM for an active shopping basket and vanish when the browser closes."
      },
      {
        "t": 266.07,
        "who": "Tara",
        "text": "While persistent cookies stay on your SSD until expiry to remember logins, preferences, and user tracking!"
      },
      {
        "t": 273.04,
        "who": "Centi",
        "text": "Now compare the twin traps: clicking a link inside a fake email is Phishing."
      },
      {
        "t": 278.4,
        "who": "Tara",
        "text": "Whereas malicious code on a computer or DNS server that automatically redirects a genuine typed URL with zero clicks is Pharming!"
      },
      {
        "t": 287.47,
        "who": "Centi",
        "text": "And distinguish malware: a Virus needs a host file and human action, a Worm self-replicates standalone across networks, and a Trojan disguises itself as a legitimate app!"
      },
      {
        "t": 299.11,
        "who": "Dad",
        "text": "While Spyware keyloggers record keystrokes, Ransomware encrypts files for money, Firewalls filter packet criteria, and Proxy servers absorb DDoS floods!"
      },
      {
        "t": 310.75,
        "who": "Centi",
        "text": "Challenge two! Which attack uses malicious code on a device or D N S server to redirect a genuine typed web address without clicking any email link?"
      },
      {
        "t": 327.25,
        "who": "Centi",
        "text": "Pharming! Phishing needs you to click a fake email link, whereas pharming redirects genuine addresses automatically."
      },
      {
        "t": 338.9,
        "who": "Dad",
        "text": "Watch me ace encryption: Encryption stops hackers intercepting Wi-Fi packets, and Alice hides a message to Bob using Alice's private key!"
      },
      {
        "t": 349.27,
        "who": "Centi",
        "text": "Double mark-losing disaster! Never write that encryption stops interception! Sniffers still capture packets, but ciphertext is meaningless without the decryption key!"
      },
      {
        "t": 359.63,
        "who": "Tara",
        "text": "And Symmetric encryption shares one secret key, risking interception during key exchange."
      },
      {
        "t": 365.43,
        "who": "Centi",
        "text": "In Asymmetric encryption, if Alice locked data with Alice's private key, anyone holding Alice's public key could read it!"
      },
      {
        "t": 373.65,
        "who": "Tara",
        "text": "Always name the owner: Alice encrypts with BOB'S PUBLIC KEY, so ONLY BOB'S PRIVATE KEY can decrypt it!"
      },
      {
        "t": 382.18,
        "who": "Dad",
        "text": "Incredible! Hey, my phone voice chatbot tells weather jokes — is that chatbot a robot?"
      },
      {
        "t": 388.41,
        "who": "Tara",
        "text": "Zero marks! Every CIE robot must have three traits: a mechanical structure with actuators, electrical components like sensors, and programmability!"
      },
      {
        "t": 398.79,
        "who": "Centi",
        "text": "Automated systems link sensors, an ADC, a microprocessor, and actuators in a fast feedback loop — fast and tireless, though costly to set up."
      },
      {
        "t": 408.72,
        "who": "Tara",
        "text": "Finally, inside AI, an Expert System has four core parts: User Interface, Inference Engine, Knowledge Base of facts, and Rule Base of IF-THEN rules!"
      },
      {
        "t": 419.2,
        "who": "Centi",
        "text": "While Machine Learning trains on data so algorithms automatically adapt their own models from experience without explicit reprogramming!"
      },
      {
        "t": 427.97,
        "who": "Centi",
        "text": "Final challenge! Which two-word component of an Expert System stores the conditional IF THEN rules used by the inference engine?"
      },
      {
        "t": 442.55,
        "who": "Centi",
        "text": "The Rule Base! Facts live in the Knowledge Base, IF THEN rules live in the Rule Base, and the Inference Engine connects them."
      },
      {
        "t": 451.06,
        "who": "Dad",
        "text": "Offline backups done, two-factor biometric login active, and lavender paper returned to Mum!"
      }
    ]
  },
  {
    "id": "logic-gates-s01",
    "topicId": "logic-gates",
    "topicTitle": "Logic Gates",
    "topicShort": "Logic Gates",
    "topicIcon": "⚡",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Exclusive Or Nothing",
    "index": 1,
    "totalInTopic": 4,
    "title": "Exclusive Or Nothing — Cold Open Hook",
    "summary": "Behold! I wired a Boolean smart-switch for the hallway lamp and a sensor lock on the fridge to guard my durian puffs.",
    "startSec": 0.0,
    "endSec": 45.0,
    "durationSec": 45.0,
    "src": "/videos/logic-gates.mp4",
    "poster": "/videos/posters/logic-gates.jpg",
    "captions": [
      {
        "t": 1.22,
        "who": "Dad",
        "text": "Behold! I wired a Boolean smart-switch for the hallway lamp and a sensor lock on the fridge to guard my durian puffs."
      },
      {
        "t": 9.47,
        "who": "Mum",
        "text": "Is that why the hallway bulb has been blazing since Tuesday even though we flipped both wall switches?"
      },
      {
        "t": 15.09,
        "who": "Dad",
        "text": "Switch A is one, Switch B is one, and I soldered an OR gate! In English, tea or coffee means picking both gets you nothing, right?"
      },
      {
        "t": 24.07,
        "who": "Tara",
        "text": "Dad! In Boolean logic, OR is inclusive! One OR one equals one! Your lamp can never turn off while both switches are up!"
      },
      {
        "t": 31.76,
        "who": "Mum",
        "text": "And why is the fridge siren howling when the fridge is stone cold?"
      },
      {
        "t": 35.5,
        "who": "Dad",
        "text": "Sensor T outputs zero when safe and one when warm, so I wired T straight into the unlock gate!"
      }
    ]
  },
  {
    "id": "logic-gates-s02",
    "topicId": "logic-gates",
    "topicTitle": "Logic Gates",
    "topicShort": "Logic Gates",
    "topicIcon": "⚡",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Exclusive Or Nothing",
    "index": 2,
    "totalInTopic": 4,
    "title": "Exclusive Or Nothing — Core Concept",
    "summary": "Did somebody confuse inclusive OR with exclusive OR? Step away from the soldering iron and check the Cambridge syllabus!",
    "startSec": 50.5,
    "endSec": 76.2,
    "durationSec": 25.7,
    "src": "/videos/logic-gates.mp4",
    "poster": "/videos/posters/logic-gates.jpg",
    "captions": [
      {
        "t": 52.81,
        "who": "Centi",
        "text": "Did somebody confuse inclusive OR with exclusive OR? Step away from the soldering iron and check the Cambridge syllabus!"
      },
      {
        "t": 60.53,
        "who": "Centi",
        "text": "Logic circuits run on two binary states: zero for false, and one for true. Meet the three core gates."
      },
      {
        "t": 67.86,
        "who": "Tara",
        "text": "First is the NOT gate, the inverter! It is the only syllabus gate with a single input wire."
      },
      {
        "t": 73.83,
        "who": "Centi",
        "text": "Draw a triangle pointing right plus an inversion bubble on its nose. Omit that bubble and you lose the mark!"
      }
    ]
  },
  {
    "id": "logic-gates-s03",
    "topicId": "logic-gates",
    "topicTitle": "Logic Gates",
    "topicShort": "Logic Gates",
    "topicIcon": "⚡",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Exclusive Or Nothing",
    "index": 3,
    "totalInTopic": 4,
    "title": "Exclusive Or Nothing — CIE 0478 Examiner Trap",
    "summary": "Draw a triangle pointing right plus an inversion bubble on its nose. Omit that bubble and you lose the mark!",
    "startSec": 76.2,
    "endSec": 101.8,
    "durationSec": 25.6,
    "src": "/videos/logic-gates.mp4",
    "poster": "/videos/posters/logic-gates.jpg",
    "captions": [
      {
        "t": 76.2,
        "who": "Centi",
        "text": "Draw a triangle pointing right plus an inversion bubble on its nose. Omit that bubble and you lose the mark!"
      },
      {
        "t": 81.2,
        "who": "Dad",
        "text": "Okay, and the middle gate looks just like a capital D!"
      },
      {
        "t": 85.33,
        "who": "Tara",
        "text": "Exactly! AND ends in a capital D, so draw a flat vertical back. It outputs one only when both A and B are one."
      },
      {
        "t": 92.91,
        "who": "Centi",
        "text": "Meanwhile OR has a curved back and pointed shield. Standard OR outputs one whenever at least one input is one: zero, one, one, one!"
      }
    ]
  },
  {
    "id": "logic-gates-s04",
    "topicId": "logic-gates",
    "topicTitle": "Logic Gates",
    "topicShort": "Logic Gates",
    "topicIcon": "⚡",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Exclusive Or Nothing",
    "index": 4,
    "totalInTopic": 4,
    "title": "Exclusive Or Nothing — Pause Challenge Round",
    "summary": "Meanwhile OR has a curved back and pointed shield. Standard OR outputs one whenever at least one input is one: zero, one, one, one!",
    "startSec": 101.8,
    "endSec": 425.7,
    "durationSec": 323.9,
    "src": "/videos/logic-gates.mp4",
    "poster": "/videos/posters/logic-gates.jpg",
    "captions": [
      {
        "t": 101.8,
        "who": "Centi",
        "text": "Meanwhile OR has a curved back and pointed shield. Standard OR outputs one whenever at least one input is one: zero, one, one, one!"
      },
      {
        "t": 102.11,
        "who": "Centi",
        "text": "Pause and solve! From zero zero down to one one, what is the four-bit output column for X equals NOT A, AND B?"
      },
      {
        "t": 115.95,
        "who": "Centi",
        "text": "Flip A first to get one, one, zero, zero. Now AND that with B, zero, one, zero, one. Only row zero one has two ones, giving zero one zero zero!"
      },
      {
        "t": 127.64,
        "who": "Dad",
        "text": "Hold on, Centi. If OR stays one on one one, which gate actually runs a two-way staircase light?"
      },
      {
        "t": 134.55,
        "who": "Centi",
        "text": "Meet NAND, NOR, and the hero your hallway needed: XOR!"
      },
      {
        "t": 138.69,
        "who": "Tara",
        "text": "NAND and NOR just add an output bubble onto AND and OR. Compute the base gate first, then flip every bit!"
      },
      {
        "t": 145.67,
        "who": "Centi",
        "text": "So NAND gives one one one zero, outputting zero only on one one. NOR gives one zero zero zero, outputting one only on zero zero."
      },
      {
        "t": 155.33,
        "who": "Dad",
        "text": "And XOR has that extra curved line on the input side with no bubble at the tip!"
      },
      {
        "t": 161.72,
        "who": "Tara",
        "text": "XOR means Exclusive OR: output one when A and B differ, and zero when they match! Zero, one, one, zero!"
      },
      {
        "t": 169.23,
        "who": "Centi",
        "text": "Chip makers also love universal NAND gates: tie both inputs together to wire A, and A NAND A builds NOT A!"
      },
      {
        "t": 177.18,
        "who": "Tara",
        "text": "Does XOR do anything else inside a real processor?"
      },
      {
        "t": 180.86,
        "who": "Centi",
        "text": "Inside the Arithmetic Logic Unit, one XOR gate finds the Sum bit while one AND gate finds the Carry bit — a Half Adder!"
      },
      {
        "t": 189.5,
        "who": "Dad",
        "text": "Because binary one plus one is one zero: Carry one from AND, Sum zero from XOR!"
      },
      {
        "t": 196.17,
        "who": "Tara",
        "text": "Whoa, Dad actually nailed one! Mark the calendar!"
      },
      {
        "t": 199.84,
        "who": "Dad",
        "text": "I drew bubbles on my XOR gates too because they looked like tapioca pearls. Turns out that makes XNOR and locks your snacks forever."
      },
      {
        "t": 209.58,
        "who": "Centi",
        "text": "Now for four-mark Paper Two truth tables. With three inputs A, B, and C, how many rows do we need, Dad?"
      },
      {
        "t": 216.8,
        "who": "Dad",
        "text": "Three inputs times two states... six rows?"
      },
      {
        "t": 220.68,
        "who": "Tara",
        "text": "Powers of two, Dad! Two cubed equals eight rows, counting in binary from zero zero zero to one one one!"
      },
      {
        "t": 228.06,
        "who": "Centi",
        "text": "Never juggle four gates in your head. Label internal wires P and Q, and write rough helper columns in the margin!"
      },
      {
        "t": 235.74,
        "who": "Tara",
        "text": "Notice shared wire B splitting at that dot: P is A NAND B, and Q is B NOR C, using the exact same B bit!"
      },
      {
        "t": 243.29,
        "who": "Centi",
        "text": "Fill column P vertically, fill column Q vertically, then combine P and Q with XOR. Fast, calm, full four marks!"
      },
      {
        "t": 252.14,
        "who": "Dad",
        "text": "What if a question gives X equals one and asks me to work backwards?"
      },
      {
        "t": 257.2,
        "who": "Tara",
        "text": "Use the strict gates! NOR equals one forces both inputs to zero, and AND equals one forces both inputs to one!"
      },
      {
        "t": 264.96,
        "who": "Centi",
        "text": "Spot on! Working backwards from NOR equals one or NAND equals zero slices any puzzle in half."
      },
      {
        "t": 271.59,
        "who": "Centi",
        "text": "Your turn! In X equals open bracket A NAND B close bracket XOR C, what is X when A is one, B is one, and C is one?"
      },
      {
        "t": 286.62,
        "who": "Centi",
        "text": "First find wire P: one NAND one flips one AND one to zero! Next feed zero and C equals one into XOR. Zero XOR one equals one!"
      },
      {
        "t": 301.3,
        "who": "Centi",
        "text": "Red alert! Every year on Paper Two, marks vanish into three classic traps. Let us audit Dad's fridge lock!"
      },
      {
        "t": 308.96,
        "who": "Tara",
        "text": "Trap one: sensor zero states! Guard shut is G equals one, override is M equals one, but safe cold temperature is T equals zero!"
      },
      {
        "t": 318.4,
        "who": "Dad",
        "text": "Oh! When the fridge was cold, T sent zero, so my AND gate saw zero and locked me out!"
      },
      {
        "t": 324.67,
        "who": "Centi",
        "text": "Whenever a required state is zero in the table, you must write NOT T so safe zero flips to true one!"
      },
      {
        "t": 331.21,
        "who": "Tara",
        "text": "Trap two: never invent a three-input gate symbol! Cascade two standard two-input AND gates in series instead."
      },
      {
        "t": 338.36,
        "who": "Centi",
        "text": "Trap three: precedence! Without brackets, evaluate NOT first, then AND, then OR — Naughty Ants Order — and always write brackets!"
      },
      {
        "t": 346.35,
        "who": "Dad",
        "text": "Can I write algebra dots, or write NOT A, AND NOT B when I mean A NAND B?"
      },
      {
        "t": 352.29,
        "who": "Tara",
        "text": "Never! Write uppercase words NOT, AND, OR, NAND, NOR, XOR on Cambridge papers!"
      },
      {
        "t": 358.19,
        "who": "Centi",
        "text": "And NOT A, AND NOT B gives one zero zero zero — that is A NOR B by De Morgan's Law, never NAND!"
      },
      {
        "t": 365.26,
        "who": "Dad",
        "text": "Compute AND first, then flip at the bubble. Tattooed on my brain!"
      },
      {
        "t": 370.27,
        "who": "Centi",
        "text": "Final check! In X equals open bracket G AND NOT T close bracket OR M, what is X when G is one, T is one meaning overheated, and M is zero?"
      },
      {
        "t": 387.18,
        "who": "Centi",
        "text": "Since T is one, NOT T flips to zero! One AND zero gives zero, and zero OR zero gives zero. The hot vault stays locked!"
      },
      {
        "t": 397.74,
        "who": "Dad",
        "text": "Rewired! Hallway on XOR, fridge lock on G AND NOT T, OR manual override M!"
      },
      {
        "t": 404.38,
        "who": "Mum",
        "text": "Lovely. And what happens when manual override M equals one into that final OR gate?"
      },
      {
        "t": 409.64,
        "who": "Tara",
        "text": "Anything OR one equals one! Mum holds the override key, Dad — Boolean law says we get the durian puffs!"
      },
      {
        "t": 416.68,
        "who": "Dad",
        "text": "Wait, I meant AND M! Hand back my soldering iron!"
      }
    ]
  },
  {
    "id": "algorithms-testing-s01",
    "topicId": "algorithms-testing",
    "topicTitle": "Algorithms & Testing",
    "topicShort": "Algorithms & Testing",
    "topicIcon": "🧭",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Bubble Sort Your Life Out",
    "index": 1,
    "totalInTopic": 4,
    "title": "Bubble Sort Your Life Out — Cold Open Hook",
    "summary": "Stand back, ladies! I am algorithmically sorting the kitchen spice rack into ascending scoville heat order!",
    "startSec": 0.0,
    "endSec": 32.2,
    "durationSec": 32.2,
    "src": "/videos/algorithms-testing.mp4",
    "poster": "/videos/posters/algorithms-testing.jpg",
    "captions": [
      {
        "t": 1.22,
        "who": "Dad",
        "text": "Stand back, ladies! I am algorithmically sorting the kitchen spice rack into ascending scoville heat order!"
      },
      {
        "t": 8.51,
        "who": "Mum",
        "text": "Why is all my sweet cinnamon mixed into the fiery chilli powder jar?"
      },
      {
        "t": 12.77,
        "who": "Dad",
        "text": "Well, chilli beat cinnamon, so I poured cinnamon straight into the chilli jar before emptying the chilli jar!"
      },
      {
        "t": 19.89,
        "who": "Tara",
        "text": "Dad! You overwrote your variable without a temporary jar! Now both jars hold spicy cinnamon!"
      },
      {
        "t": 25.98,
        "who": "Mum",
        "text": "My apple pie tonight is going to set off the smoke alarm!"
      }
    ]
  },
  {
    "id": "algorithms-testing-s02",
    "topicId": "algorithms-testing",
    "topicTitle": "Algorithms & Testing",
    "topicShort": "Algorithms & Testing",
    "topicIcon": "🧭",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Bubble Sort Your Life Out",
    "index": 2,
    "totalInTopic": 4,
    "title": "Bubble Sort Your Life Out — Core Concept",
    "summary": "Did someone commit an unbuffered destructive assignment before breakfast?",
    "startSec": 37.8,
    "endSec": 123.4,
    "durationSec": 85.6,
    "src": "/videos/algorithms-testing.mp4",
    "poster": "/videos/posters/algorithms-testing.jpg",
    "captions": [
      {
        "t": 39.02,
        "who": "Centi",
        "text": "Did someone commit an unbuffered destructive assignment before breakfast?"
      },
      {
        "t": 44.17,
        "who": "Dad",
        "text": "Centi! Even worse — I coded a family holiday packing app, jumped straight to typing Python, and nothing works!"
      },
      {
        "t": 52.06,
        "who": "Centi",
        "text": "Because you skipped the Program Development Life Cycle: Analysis, Design, Coding, and Testing, run iteratively!"
      },
      {
        "t": 59.7,
        "who": "Tara",
        "text": "In Analysis we apply abstraction and decomposition to agree the requirements specification, right?"
      },
      {
        "t": 66.52,
        "who": "Centi",
        "text": "Spot on! Abstraction keeps essential details, like suitcase weight, while filtering out irrelevant clutter like sock colours."
      },
      {
        "t": 74.62,
        "who": "Dad",
        "text": "Like how the MRT transit map keeps station connections and ignores every curve in the road!"
      },
      {
        "t": 81.67,
        "who": "Centi",
        "text": "Exactly! And decomposition breaks a complex system into smaller modules on a top-down structure diagram during Design!"
      },
      {
        "t": 89.99,
        "who": "Mum",
        "text": "Why split the app into smaller modules instead of one giant script?"
      },
      {
        "t": 94.18,
        "who": "Tara",
        "text": "Because separate programmers can code and test modules in parallel without breaking everything else!"
      },
      {
        "t": 100.05,
        "who": "Centi",
        "text": "And Design also produces flowcharts and CIE pseudocode! Watch the five standard flowchart shapes."
      },
      {
        "t": 107.3,
        "who": "Tara",
        "text": "Rectangles for processes, double-barred boxes for subroutines, and diamonds for decisions!"
      },
      {
        "t": 113.51,
        "who": "Centi",
        "text": "Never forget to label both exit arrows on every decision diamond, and use two angle brackets for not equal in CIE pseudocode!"
      },
      {
        "t": 122.43,
        "who": "Dad",
        "text": "To find our lightest suitcase, I initialised Minimum Weight to zero. Somehow every bag weighed more than zero, so my app claims our lightest bag weighs zero!"
      }
    ]
  },
  {
    "id": "algorithms-testing-s03",
    "topicId": "algorithms-testing",
    "topicTitle": "Algorithms & Testing",
    "topicShort": "Algorithms & Testing",
    "topicIcon": "🧭",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Bubble Sort Your Life Out",
    "index": 3,
    "totalInTopic": 4,
    "title": "Bubble Sort Your Life Out — CIE 0478 Examiner Trap",
    "summary": "To find our lightest suitcase, I initialised Minimum Weight to zero. Somehow every bag weighed more than zero, so my app claims our lightest bag weighs zero!",
    "startSec": 123.4,
    "endSec": 209.1,
    "durationSec": 85.7,
    "src": "/videos/algorithms-testing.mp4",
    "poster": "/videos/posters/algorithms-testing.jpg",
    "captions": [
      {
        "t": 123.4,
        "who": "Dad",
        "text": "To find our lightest suitcase, I initialised Minimum Weight to zero. Somehow every bag weighed more than zero, so my app claims our lightest bag weighs zero!"
      },
      {
        "t": 133.75,
        "who": "Tara",
        "text": "Dad, positive weights are never smaller than zero! Initialise Minimum and Maximum to the first item in the array!"
      },
      {
        "t": 141.29,
        "who": "Centi",
        "text": "Or set Minimum to a huge number like nine thousand nine hundred and ninety nine so the first real input beats it!"
      },
      {
        "t": 148.76,
        "who": "Dad",
        "text": "What if Mum's passport is buried inside an unsorted array of bags?"
      },
      {
        "t": 153.98,
        "who": "Centi",
        "text": "Run a Linear Search! Start at index one with a Found boolean flag set to false, checking items one by one until Found becomes true or the array ends."
      },
      {
        "t": 164.73,
        "who": "Dad",
        "text": "And how do I sort my spice jars properly without inventing chilli-cinnamon?"
      },
      {
        "t": 170.18,
        "who": "Centi",
        "text": "Use Bubble Sort! Compare adjacent pairs, and swap out-of-order neighbours using three lines with Temp!"
      },
      {
        "t": 176.88,
        "who": "Tara",
        "text": "Look! On four items — thirty, twelve, twenty four, eight — thirty bubbles right past all three smaller numbers in Pass One!"
      },
      {
        "t": 184.84,
        "who": "Centi",
        "text": "Plus two CIE optimisations: shrink Last by one each pass because the tail is locked, and reset Swap to false so a zero-swap pass stops early!"
      },
      {
        "t": 195.0,
        "who": "Dad",
        "text": "Wait — so even if Pass One finishes sorting everything, it still runs one quick zero-swap pass to confirm Swap stays false?"
      },
      {
        "t": 203.99,
        "who": "Tara",
        "text": "Yes! The computer cannot magically peek ahead without running one clean check pass!"
      },
      {
        "t": 209.36,
        "who": "Centi",
        "text": "Pause challenge one! During Pass One of an ascending Bubble Sort on twenty five, ten, eighteen, six, how many swaps occur?"
      }
    ]
  },
  {
    "id": "algorithms-testing-s04",
    "topicId": "algorithms-testing",
    "topicTitle": "Algorithms & Testing",
    "topicShort": "Algorithms & Testing",
    "topicIcon": "🧭",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Bubble Sort Your Life Out",
    "index": 4,
    "totalInTopic": 4,
    "title": "Bubble Sort Your Life Out — Pause Challenge Round",
    "summary": "Pause challenge one! During Pass One of an ascending Bubble Sort on twenty five, ten, eighteen, six, how many swaps occur?",
    "startSec": 209.1,
    "endSec": 439.4,
    "durationSec": 230.3,
    "src": "/videos/algorithms-testing.mp4",
    "poster": "/videos/posters/algorithms-testing.jpg",
    "captions": [
      {
        "t": 209.36,
        "who": "Centi",
        "text": "Pause challenge one! During Pass One of an ascending Bubble Sort on twenty five, ten, eighteen, six, how many swaps occur?"
      },
      {
        "t": 223.19,
        "who": "Centi",
        "text": "Three swaps! Twenty five compares and swaps past ten, then eighteen, then six to lock at the end."
      },
      {
        "t": 232.51,
        "who": "Cashier",
        "text": "Sir, your pre-booked baggage form says you are checking in eighty two suitcases instead of two!"
      },
      {
        "t": 237.99,
        "who": "Dad",
        "text": "Impossible! I put a range check from one to one hundred on that form! Validation proves my data is completely accurate!"
      },
      {
        "t": 249.54,
        "who": "Centi",
        "text": "Buzzer of doom! Never write that validation checks data is correct, accurate, or valid — that scores zero marks!"
      },
      {
        "t": 257.52,
        "who": "Tara",
        "text": "Validation is an automated check that data is reasonable and sensible, using Range, Length, Type, Presence, Format, or Check Digit!"
      },
      {
        "t": 266.49,
        "who": "Centi",
        "text": "Eighty two sits comfortably inside one to one hundred, so validation accepts it! Catching a copying typo requires verification!"
      },
      {
        "t": 275.45,
        "who": "Cashier",
        "text": "Verification checks data was copied accurately — either typing it twice in Double Entry, or reading the screen in a Visual Check!"
      },
      {
        "t": 283.29,
        "who": "Dad",
        "text": "Fine! At least I tested my one-to-one-hundred range check with extreme data: zero and one hundred and one!"
      },
      {
        "t": 291.9,
        "who": "Tara",
        "text": "Second mark-scheme trap! Extreme data must be ACCEPTED values right on the limits — one and one hundred ONLY!"
      },
      {
        "t": 299.44,
        "who": "Centi",
        "text": "Whereas boundary test data comes in pairs straddling each limit: zero rejected with one accepted, or one hundred accepted with one hundred and one rejected!"
      },
      {
        "t": 310.52,
        "who": "Dad",
        "text": "Aha! Boundary pairs catch off-by-one bugs when someone writes strict less-than instead of less-than-or-equal-to!"
      },
      {
        "t": 318.22,
        "who": "Centi",
        "text": "Pause challenge two! A rule accepts whole numbers from ten to fifty inclusive. What is the largest item of extreme test data?"
      },
      {
        "t": 332.91,
        "who": "Centi",
        "text": "Fifty! Extreme values sit right on the edge and must be accepted. Fifty and fifty one together would be the upper boundary pair."
      },
      {
        "t": 342.95,
        "who": "Dad",
        "text": "One mystery left! Why did my invalid-age filter, IF Age less than one AND Age greater than one hundred, never reject negative five?"
      },
      {
        "t": 353.01,
        "who": "Tara",
        "text": "Because no number in the universe is below one AND above one hundred simultaneously! Rejecting out-of-range inputs needs OR!"
      },
      {
        "t": 361.51,
        "who": "Centi",
        "text": "Accepting inside a range uses AND; rejecting outside a range uses OR! And to catch bugs fast, dry-run a CIE trace table!"
      },
      {
        "t": 370.52,
        "who": "Centi",
        "text": "Write initialisations on the top row, leave unchanged columns blank, and fill OUTPUT only when an OUTPUT instruction runs!"
      },
      {
        "t": 379.04,
        "who": "Mum",
        "text": "And never put Total assigned zero inside your loop, unless you want to erase your running total every single turn!"
      },
      {
        "t": 385.68,
        "who": "Tara",
        "text": "Ready for one final dry-run before anyone touches Mum's new cinnamon jar?"
      },
      {
        "t": 391.0,
        "who": "Centi",
        "text": "Final pause challenge! X starts at twenty and Steps at zero. Inside a REPEAT loop, X drops by six and Steps rises by one UNTIL X is less than five. What is Steps?"
      },
      {
        "t": 408.95,
        "who": "Centi",
        "text": "Three! Twenty drops to fourteen, then eight, then two on step three. Two is less than five, making the UNTIL condition true!"
      },
      {
        "t": 417.48,
        "who": "Dad",
        "text": "Three steps, one temporary mug, reasonable validation, and paired boundary tests! My spice rack is officially certified!"
      },
      {
        "t": 426.55,
        "who": "Mum",
        "text": "I am still running Double Entry verification before you season dinner!"
      },
      {
        "t": 430.68,
        "who": "Tara",
        "text": "And Centi is grading your trace table in permanent marker!"
      }
    ]
  },
  {
    "id": "python-arrays-sql-s01",
    "topicId": "python-arrays-sql",
    "topicTitle": "Python, Arrays & SQL",
    "topicShort": "Python, Arrays & SQL",
    "topicIcon": "🐍",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Select Star From Chaos",
    "index": 1,
    "totalInTopic": 4,
    "title": "Select Star From Chaos — Cold Open Hook",
    "summary": "Behold my masterpiece! I coded a Python and database system for our street's Friday Curry Club!",
    "startSec": 0.0,
    "endSec": 35.7,
    "durationSec": 35.7,
    "src": "/videos/python-arrays-sql.mp4",
    "poster": "/videos/posters/python-arrays-sql.jpg",
    "captions": [
      {
        "t": 1.22,
        "who": "Dad",
        "text": "Behold my masterpiece! I coded a Python and database system for our street's Friday Curry Club!"
      },
      {
        "t": 8.44,
        "who": "Mum",
        "text": "Really? Because Auntie Priya just rang asking why your app chopped the first zero off her mobile number!"
      },
      {
        "t": 13.94,
        "who": "Dad",
        "text": "Impossible! Digits are numbers, so I stored her phone number inside an integer!"
      },
      {
        "t": 19.56,
        "who": "Tara",
        "text": "Give me that tablet, Dad. Oh dear. Integer phone numbers, an infinite repeat until loop, and a query reading select star from chaos!"
      },
      {
        "t": 28.36,
        "who": "Mum",
        "text": "And why is our receipt printer spitting out poppadom vouchers across the kitchen floor?"
      }
    ]
  },
  {
    "id": "python-arrays-sql-s02",
    "topicId": "python-arrays-sql",
    "topicTitle": "Python, Arrays & SQL",
    "topicShort": "Python, Arrays & SQL",
    "topicIcon": "🐍",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Select Star From Chaos",
    "index": 2,
    "totalInTopic": 4,
    "title": "Select Star From Chaos — Core Concept",
    "summary": "Did someone store a phone number with a leading zero inside an integer? My silicon circuits are weeping!",
    "startSec": 41.2,
    "endSec": 73.7,
    "durationSec": 32.5,
    "src": "/videos/python-arrays-sql.mp4",
    "poster": "/videos/posters/python-arrays-sql.jpg",
    "captions": [
      {
        "t": 42.8,
        "who": "Centi",
        "text": "Did someone store a phone number with a leading zero inside an integer? My silicon circuits are weeping!"
      },
      {
        "t": 49.59,
        "who": "Dad",
        "text": "Wait — why is a phone number a string when every character is a digit?"
      },
      {
        "t": 54.53,
        "who": "Tara",
        "text": "Because an integer deletes leading zeroes immediately, Dad, and you never add or divide two phone numbers!"
      },
      {
        "t": 61.2,
        "who": "Centi",
        "text": "Memorise the five Cambridge primitive data types: integer, real, char, string, and boolean."
      },
      {
        "t": 67.92,
        "who": "Dad",
        "text": "Okay, what about my samosa packer? Twenty nine samosas into boxes of six gave me ugly decimals!"
      }
    ]
  },
  {
    "id": "python-arrays-sql-s03",
    "topicId": "python-arrays-sql",
    "topicTitle": "Python, Arrays & SQL",
    "topicShort": "Python, Arrays & SQL",
    "topicIcon": "🐍",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Select Star From Chaos",
    "index": 3,
    "totalInTopic": 4,
    "title": "Select Star From Chaos — CIE 0478 Examiner Trap",
    "summary": "Okay, what about my samosa packer? Twenty nine samosas into boxes of six gave me ugly decimals!",
    "startSec": 73.7,
    "endSec": 106.2,
    "durationSec": 32.5,
    "src": "/videos/python-arrays-sql.mp4",
    "poster": "/videos/posters/python-arrays-sql.jpg",
    "captions": [
      {
        "t": 73.7,
        "who": "Dad",
        "text": "Okay, what about my samosa packer? Twenty nine samosas into boxes of six gave me ugly decimals!"
      },
      {
        "t": 75.7,
        "who": "Centi",
        "text": "Use integer division and modulo! Twenty nine D I V six gives four whole boxes, discarding the fraction."
      },
      {
        "t": 83.54,
        "who": "Tara",
        "text": "And twenty nine M O D six gives the remainder of five loose samosas! In Python, D I V is double slash and M O D is the percent operator."
      },
      {
        "t": 93.84,
        "who": "Dad",
        "text": "Wait — what if I only have four samosas and boxes of six?"
      },
      {
        "t": 98.39,
        "who": "Centi",
        "text": "Then four D I V six is zero full boxes, and four M O D six leaves all four samosas as the remainder!"
      }
    ]
  },
  {
    "id": "python-arrays-sql-s04",
    "topicId": "python-arrays-sql",
    "topicTitle": "Python, Arrays & SQL",
    "topicShort": "Python, Arrays & SQL",
    "topicIcon": "🐍",
    "strand": "IGCSE CS 0478 Short",
    "episodeTitle": "Select Star From Chaos",
    "index": 4,
    "totalInTopic": 4,
    "title": "Select Star From Chaos — Pause Challenge Round",
    "summary": "Then four D I V six is zero full boxes, and four M O D six leaves all four samosas as the remainder!",
    "startSec": 106.2,
    "endSec": 414.0,
    "durationSec": 307.8,
    "src": "/videos/python-arrays-sql.mp4",
    "poster": "/videos/posters/python-arrays-sql.jpg",
    "captions": [
      {
        "t": 106.2,
        "who": "Centi",
        "text": "Then four D I V six is zero full boxes, and four M O D six leaves all four samosas as the remainder!"
      },
      {
        "t": 106.54,
        "who": "Centi",
        "text": "Pause and calculate! What remainder do you get from forty seven M O D eight?"
      },
      {
        "t": 117.62,
        "who": "Centi",
        "text": "Eight times five is forty, leaving a remainder of seven! Answer seven."
      },
      {
        "t": 123.08,
        "who": "Dad",
        "text": "Next mystery! Why did my poppadom loop print forever?"
      },
      {
        "t": 127.03,
        "who": "Tara",
        "text": "You wrote repeat, add one poppadom, until count is greater than zero — no, you wrote until count is less than zero while adding one!"
      },
      {
        "t": 135.49,
        "who": "Centi",
        "text": "Watch the stopping polarity! A while loop tests at the top, runs zero or more times, and stops when its condition is false."
      },
      {
        "t": 143.82,
        "who": "Tara",
        "text": "Whereas repeat until tests at the bottom! It always runs its body at least once, and stops the moment its condition becomes true!"
      },
      {
        "t": 151.88,
        "who": "Dad",
        "text": "And why did my Python for loop skip table five?"
      },
      {
        "t": 155.74,
        "who": "Centi",
        "text": "Because Cambridge pseudocode for one to five includes five, whereas Python range from one comma five stops right before five!"
      },
      {
        "t": 164.15,
        "who": "Tara",
        "text": "And for your spice menu choices one, two, or three, replace those messy nested ifs with case of and otherwise!"
      },
      {
        "t": 171.34,
        "who": "Dad",
        "text": "I only wanted the three middle letters of COMPUTER for our club code. Why did Python give me one letter when pseudocode gave me three?!"
      },
      {
        "t": 180.26,
        "who": "Centi",
        "text": "This is the most famous Paper Two trap! In Cambridge pseudocode, substring starts at position one, and the third argument is length!"
      },
      {
        "t": 188.91,
        "who": "Tara",
        "text": "Count from one on COMPUTER: C, O, M, P! Position four is P, and length three grabs P U T!"
      },
      {
        "t": 195.69,
        "who": "Centi",
        "text": "In Python, indexing starts at zero, and the second slice number is the exclusive stop index! Index three is P, stopping before six!"
      },
      {
        "t": 205.16,
        "who": "Dad",
        "text": "Uh oh. I also wrote call calculate total before my function, and stored all club bookings in a two dimensional RAM array without a file!"
      },
      {
        "t": 215.54,
        "who": "Tara",
        "text": "Never put call in front of a function! Only procedures use call; functions return a value into an expression."
      },
      {
        "t": 222.71,
        "who": "Centi",
        "text": "Keep subroutine variables local so other modules cannot overwrite them, and index two dimensional arrays row first, column second!"
      },
      {
        "t": 231.65,
        "who": "Tara",
        "text": "And because RAM is volatile, write bookings to disk using openfile for write, writefile, and closefile!"
      },
      {
        "t": 238.74,
        "who": "Dad",
        "text": "What happens if I skip closefile?"
      },
      {
        "t": 241.77,
        "who": "Centi",
        "text": "Buffered data can be lost or corrupted, and the file stays locked!"
      },
      {
        "t": 246.17,
        "who": "Tara",
        "text": "Plus Python's with open block closes the file automatically so even Dad cannot forget it!"
      },
      {
        "t": 252.25,
        "who": "Dad",
        "text": "Hey! I also added comments and meaningful variable names like CustomerOrder instead of x!"
      },
      {
        "t": 259.56,
        "who": "Centi",
        "text": "Your turn! In Cambridge pseudocode, what four-letter word is returned by substring of DATABASE, starting at position five, with length four?"
      },
      {
        "t": 274.73,
        "who": "Centi",
        "text": "Counting from one, D, A, T, A puts B at position five, and taking four characters spells B A S E, base!"
      },
      {
        "t": 284.02,
        "who": "Uncle",
        "text": "Your Curry Club table made FirstName the primary key, so when two neighbours named Maya joined, the whole system crashed!"
      },
      {
        "t": 292.31,
        "who": "Dad",
        "text": "How was I supposed to know two Mayas love Madras curry?!"
      },
      {
        "t": 296.44,
        "who": "Tara",
        "text": "Each horizontal row is a record, each vertical column is a field, and a primary key like Member I D must be unique for every record!"
      },
      {
        "t": 305.49,
        "who": "Centi",
        "text": "And follow strict SQL clause order: Some Frogs Wear Overcoats — select, from, where, and finally order by ascending or descending!"
      },
      {
        "t": 317.81,
        "who": "Dad",
        "text": "Read my SQL query: select star from ClubMembers where Club is single quote Coding or single quote Chess, and Fee is above single quote twenty!"
      },
      {
        "t": 328.52,
        "who": "Centi",
        "text": "Triple penalty! First, never write select star when an exam question asks only for specific fields like Name and Fee!"
      },
      {
        "t": 336.78,
        "who": "Tara",
        "text": "Second, never omit the field name after or! Write where Club equals single quote Coding, or Club equals single quote Chess!"
      },
      {
        "t": 344.64,
        "who": "Centi",
        "text": "Third, put single quotes around text literals only — never quote numbers like twenty or booleans like true and false!"
      },
      {
        "t": 352.39,
        "who": "Uncle",
        "text": "And stop confusing count with sum! Count tells me how many members paid, while sum tells me the total cash collected!"
      },
      {
        "t": 360.72,
        "who": "Centi",
        "text": "Final challenge! Two Coding members each have a fee of twenty, and one Robotics member has thirty five. What does select sum of Fee from ClubMembers where Club equals Coding return?"
      },
      {
        "t": 378.29,
        "who": "Centi",
        "text": "Count would return two rows, but sum of Fee adds twenty and twenty to give forty!"
      },
      {
        "t": 384.28,
        "who": "Dad",
        "text": "Member I D primary key added, meaningful identifiers, comments, clean indentation, and closefile in place!"
      },
      {
        "t": 392.83,
        "who": "Mum",
        "text": "Hold on, I just walked in — my phone number still starts with zero and my naan order actually worked!"
      },
      {
        "t": 398.83,
        "who": "Uncle",
        "text": "Zero runtime errors and sorted descending by spice! Samosas on the house!"
      },
      {
        "t": 404.72,
        "who": "Tara",
        "text": "Now that is what I call select delicious from dinner where bugs equal zero!"
      }
    ]
  }
];
