import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "data-media-compression-m1",
    title: "Paper 1 — Core Foundations",
    questions: [
      {
        id: "data-media-compression-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "text-ascii-unicode",
        question: "How many distinct characters can be represented by **7-bit Standard ASCII**?",
        options: ["64", "256", "128", "65536"],
        answerIndex: 2,
        hints: ["With `n` bits you can represent {{2^n}} distinct binary codes."],
        explanation:
          "7-bit Standard ASCII provides {{2^7 = 128}} character codes (`0` to `127`). `256` ({{2^8}}) is 8-bit Extended ASCII, and `65536` ({{2^16}}) is 16-bit Unicode.",
      },
      {
        id: "data-media-compression-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "text-ascii-unicode",
        question: "In 8-bit ASCII, the uppercase letter `'A'` has denary code `65` (`01000001`). What is the 8-bit ASCII binary code for `'D'`?",
        options: ["01000100", "01000101", "01000011", "01100100"],
        answerIndex: 0,
        hints: ["ASCII letter codes are consecutive: `'A'=65, 'B'=66, 'C'=67, 'D'=68`."],
        explanation:
          "`'D'` has denary code `68 = 64 + 4`, which in 8-bit binary is `01000100`. `01000011` (`67`) is `'C'`, and `01100100` (`100`) is lowercase `'d'`.",
      },
      {
        id: "data-media-compression-m1-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "text-ascii-unicode",
        question: "Which statement accurately compares **Unicode** with **ASCII**?",
        options: [
          "Unicode uses fewer bits per character than ASCII so text files are smaller",
          "Unicode only represents emojis and cannot represent standard English letters",
          "ASCII and Unicode both use a fixed 7 bits per character",
          "Unicode represents world languages and emojis, but requires more bits per character than ASCII",
        ],
        answerIndex: 3,
        hints: [
          "Compare `7–8` bits per character in ASCII with `16–32` bits per character in Unicode.",
          "Why did global computing move beyond ASCII?",
        ],
        explanation:
          "Unicode uses `16` to `32` bits (`2–4` bytes; `1–4` in UTF-8) to encode millions/billions of characters across all world scripts and emojis, at the cost of larger storage per character than 7/8-bit ASCII.",
      },
      {
        id: "data-media-compression-m1-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "sound-representation",
        question: "What is meant by **sample rate** when converting an analogue sound wave into digital form?",
        options: [
          "The total number of bits transmitted per second",
          "The number of amplitude samples taken per second, measured in Hertz (Hz)",
          "The number of bits used to store each individual sample",
          "The duration of the audio recording in seconds",
        ],
        answerIndex: 1,
        hints: ["Distinguish *how often* you measure the wave (`Hz`) from *how many bits* each measurement uses."],
        explanation:
          "**Sample rate** is the number of amplitude measurements taken per second (`Hz`). The number of bits per sample is **sample resolution**, and bits per second is **bit rate**.",
      },
      {
        id: "data-media-compression-m1-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sound-representation",
        question: "A **mono** audio alert is sampled at `8,000 Hz` with a sample resolution of `8 bits` for `10 seconds`. What is its uncompressed size in **bytes**?",
        options: ["640,000 bytes", "80,000 bytes", "8,000 bytes", "10,000 bytes"],
        answerIndex: 1,
        hints: [
          "Calculate `File size (bits) = Rate × Resolution × Time × 1`.",
          "Divide bits by `8` to convert to **bytes**!",
        ],
        explanation:
          "`Bytes = (8000 × 8 × 10) ÷ 8 = 80,000 bytes`. `640,000` forgot to divide bits by `8` to convert to bytes!",
      },
      {
        id: "data-media-compression-m1-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sound-representation",
        question: "Increasing an audio recorder's **sample resolution** from `8` bits to `16` bits increases the number of distinct amplitude levels from `256` to:",
        options: ["512", "1,024", "65,536", "16,777,216"],
        answerIndex: 2,
        hints: [
          "`n` bits encode {{2^n}} distinct quantisation levels.",
          "Calculate {{2^16}} (recall {{2^10 = 1024}} and {{2^6 = 64}}).",
        ],
        explanation:
          "Adding `8` extra bits multiplies the number of levels by `2⁸ = 256` (`256 × 256 = 65,536 = 2¹⁶`), NOT by `2` (`512`)!",
      },
      {
        id: "data-media-compression-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "bitmap-images",
        question: "A bitmap logo uses exactly `16` distinct colours. What is the **minimum colour depth** required per pixel?",
        options: ["4 bits", "16 bits", "2 bits", "8 bits"],
        answerIndex: 0,
        hints: ["Find `n` such that {{2^n = 16}}."],
        explanation:
          "Since {{2^4 = 16}}, `4` bits per pixel (`0000` to `1111`) uniquely identify `16` colours. `16` bits would support `65,536` colours!",
      },
      {
        id: "data-media-compression-m1-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bitmap-images",
        question: "An uncompressed bitmap icon has dimensions `64 × 64` pixels and uses `256` colours. What is its image data size in **KiB**?",
        options: ["128 KiB", "4 KiB", "4.096 KiB", "32 KiB"],
        answerIndex: 1,
        hints: [
          "First convert `256` colours to colour depth: {{2^8 = 256}} → `8` bits (`1` byte) per pixel!",
          "Then divide `64 × 64` bytes by `1024` (NEVER by `1000`!).",
        ],
        explanation:
          "`256` colours = `8` bits (`1` byte) per pixel. Total bytes = `64 × 64 × 1 = 4096` bytes. Dividing by `1024` bytes/KiB gives `4096 ÷ 1024 = 4 KiB`. (`4.096` divided by `1000` by mistake, and `128 KiB` multiplied by `256` instead of `8` bits!)",
      },
      {
        id: "data-media-compression-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "iec-storage-units",
        question: "According to the CIE `0478` IEC binary standard, how many **bytes** are in `1 KiB` (one kibibyte)?",
        options: ["8,192 bytes", "1,000 bytes", "1,024 bytes", "512 bytes"],
        answerIndex: 2,
        hints: ["IEC binary prefixes (`KiB, MiB, GiB`) scale by {{2^10}}."],
        explanation:
          "`1 KiB = 2¹⁰ = 1,024 bytes` (`8,192` is the number of *bits* in `1 KiB`, and `1,000` bytes is the SI decimal `1 kB`).",
      },
      {
        id: "data-media-compression-m1-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "iec-storage-units",
        question: "Which list shows IEC storage units in strictly **ascending** order from smallest to largest?",
        options: [
          "Byte, KiB, MiB, GiB, TiB, PiB",
          "Bit, Byte, Nibble, KiB, MiB, GiB",
          "Byte, KiB, MiB, TiB, GiB, EiB",
          "Byte, MiB, KiB, GiB, TiB, PiB",
        ],
        answerIndex: 0,
        hints: [
          "Check `Nibble` (`4` bits) vs `Byte` (`8` bits).",
          "Check `KiB < MiB < GiB < TiB < PiB < EiB`.",
        ],
        explanation:
          "Each IEC step multiplies by `1,024`: `Byte < KiB < MiB < GiB < TiB < PiB < EiB` (and a `4`-bit nibble is smaller than an `8`-bit byte).",
      },
      {
        id: "data-media-compression-m1-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "iec-storage-units",
        question: "How many **KiB** are equal to `3 MiB`?",
        options: ["3,000 KiB", "24,576 KiB", "3,072 KiB", "384 KiB"],
        answerIndex: 2,
        hints: [
          "`1 MiB = 1,024 KiB`.",
          "Multiply `3 × 1,024`.",
        ],
        explanation:
          "`3 MiB × 1,024 KiB/MiB = 3,072 KiB`. `3,000` wrongly multiplies by `1,000`.",
      },
      {
        id: "data-media-compression-m1-q12",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "lossless-lossy-compression",
        question: "Which file **must** be compressed using a **lossless** compression algorithm rather than a lossy one?",
        options: [
          "A Python source code file for a banking system",
          "A live action movie trailer streamed on a phone",
          "A pop song streamed to wireless earbuds",
          "A holiday snapshot uploaded to social media",
        ],
        answerIndex: 0,
        hints: ["In which file would permanently deleting or changing a single byte break everything?"],
        explanation:
          "Source code, executables, text documents, and financial spreadsheets require **100% bit-for-bit reconstruction** (**lossless**), because even one altered character causes syntax errors or corrupted balances.",
      },
      {
        id: "data-media-compression-m1-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "lossless-lossy-compression",
        question: "How does Run-Length Encoding (RLE) encode the 12-character string `BBBBWWBBBBBB`?",
        options: [
          "`B4 W2 B6` with the `W`s deleted",
          "`4B 2W 6B`",
          "`10B 2W`",
          "`12B`",
        ],
        answerIndex: 1,
        hints: [
          "Count each **consecutive** run of identical characters separately from left to right.",
          "Never merge two `B` runs separated by `WW`!",
        ],
        explanation:
          "RLE encodes consecutive runs in exact sequence so the original order can be losslessly restored: four `B`s, two `W`s, then six `B`s → `4B 2W 6B`. Merging into `10B 2W` would destroy where the `WW` sat!",
      },
      {
        id: "data-media-compression-m1-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "lossless-lossy-compression",
        question: "How does the **`MP3`** format achieve up to a `90%` reduction in audio file size?",
        options: [
          "It uses lossless Run-Length Encoding so every single sample is restored identically",
          "It converts all stereo music into 1-bit monochrome text codes",
          "It deletes every second second of music and plays the remaining half at half speed",
          "Perceptual music shaping permanently removes frequencies outside human hearing and quiet sounds masked by louder sounds",
        ],
        answerIndex: 3,
        hints: [
          "Is `MP3` lossy or lossless?",
          "Think about psychoacoustics / human ear limitations (`20 Hz–20 kHz` and auditory masking).",
        ],
        explanation:
          "`MP3` is a **lossy** format using **perceptual music shaping** to permanently discard frequencies humans cannot hear and quiet sounds masked by simultaneous louder sounds.",
      },
      {
        id: "data-media-compression-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "iec-storage-units",
        question: "A **stereo** (`2`-channel) sound recording has a sample rate of `16,384 Hz`, a sample resolution of `16 bits`, and lasts `16 seconds`. What is its exact uncompressed size in **KiB**?",
        options: ["512 KiB", "1,000 KiB", "8,192 KiB", "1,024 KiB"],
        answerIndex: 3,
        hints: [
          "Write `(16384 × 16 × 16 × 2) ÷ (8 × 1024)` before multiplying!",
          "Notice `16384 ÷ 1024 = 16` and `(16 × 16 × 2) ÷ 8 = 64`.",
        ],
        explanation:
          "`KiB = (16384 × 16 × 16 × 2) ÷ (8 × 1024) = 16 × (512 ÷ 8) = 16 × 64 = 1,024 KiB` (`1 MiB`). `512 KiB` forgot the `× 2` stereo factor!",
      },
    ],
  },
  {
    id: "data-media-compression-m2",
    title: "Paper 2 — Non-Calculator Media Maths & RLE",
    questions: [
      {
        id: "data-media-compression-m2-q01",
        kind: "mcq",
        difficulty: "core",
        guideRef: "text-ascii-unicode",
        question: "In 8-bit ASCII, the digit character `'0'` has denary code `48` (`00110000`). What is the 8-bit ASCII binary code for the character `'5'`?",
        options: ["00110110", "00000101", "00110101", "01010000"],
        answerIndex: 2,
        hints: [
          "Digit characters are consecutive in ASCII (`'0'=48 .. '5'=53`).",
          "Convert `53` (`32 + 16 + 4 + 1`) to 8-bit binary.",
        ],
        explanation:
          "As text, `'5'` is stored using its ASCII code `48 + 5 = 53 = 00110101` — NOT the raw integer `5` (`00000101`)!",
      },
      {
        id: "data-media-compression-m2-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "text-ascii-unicode",
        question: "A plain-text file containing exactly `1,024` characters is converted from **8-bit Extended ASCII** to **32-bit UTF-32 Unicode**. By how many **KiB** does the raw character data increase?",
        options: ["24 KiB", "3 KiB", "4 KiB", "2 KiB"],
        answerIndex: 1,
        hints: [
          "In 8-bit ASCII (`1` byte/char), `1,024` characters occupy `1 KiB`.",
          "In 32-bit UTF-32 (`4` bytes/char), `1,024` characters occupy `4 KiB`. Find the *increase*!",
        ],
        explanation:
          "8-bit ASCII size = `1,024 B = 1 KiB`; 32-bit Unicode size = `4,096 B = 4 KiB`. The increase is `4 − 1 = 3 KiB` (`4 KiB` is the new total, not the increase).",
      },
      {
        id: "data-media-compression-m2-q03",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sound-representation",
        question: "What is the role of an **Analogue-to-Digital Converter (ADC)** when recording sound through a microphone?",
        options: [
          "It samples the continuous analogue electrical signal at regular intervals and quantises each amplitude into binary",
          "It converts binary numbers from RAM into sound waves for loudspeakers",
          "It amplifies digital packets across Wi-Fi routers",
          "It compresses MP3 files into ZIP archives automatically",
        ],
        answerIndex: 0,
        hints: [
          "Look at the direction in the name: **Analogue → Digital**.",
          "Converting binary back to analogue for speakers is done by a **DAC**, not an ADC.",
        ],
        explanation:
          "An **ADC** measures (samples) the continuous analogue microphone signal at fixed time intervals and converts each amplitude into a discrete binary value. Outputting to speakers uses a **DAC**.",
      },
      {
        id: "data-media-compression-m2-q04",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sound-representation",
        question: "A **mono** podcast segment is recorded at `32,768 Hz` with `16`-bit resolution for **`1` minute**. What is its exact uncompressed size in **KiB**?",
        options: ["1,920 KiB", "30,720 KiB", "64 KiB", "3,840 KiB"],
        answerIndex: 3,
        hints: [
          "Convert `1 minute` to **`60` seconds** first!",
          "Cancel `32768 ÷ 1024 = 32` and `16 ÷ 8 = 2`, then multiply `32 × 2 × 60`.",
        ],
        explanation:
          "`KiB = (32768 × 16 × 60) ÷ (8 × 1024) = 32 × 2 × 60 = 3,840 KiB`. `64 KiB` forgot to convert `1` minute into `60` seconds!",
      },
      {
        id: "data-media-compression-m2-q05",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "sound-representation",
        question: "A studio upgrades a **mono** `8`-bit recording to **stereo**, **doubles** the sample rate, and raises sample resolution to **`24` bits** (for the same duration). The uncompressed file size is multiplied by:",
        options: ["8", "6", "12", "16"],
        answerIndex: 2,
        hints: [
          "Find the multiplier for each factor independently: channels (`1 → 2`), rate (`× 2`), resolution (`8 → 24`).",
          "Multiply the three scale factors together.",
        ],
        explanation:
          "Channels scale by `× 2` (mono → stereo), sample rate by `× 2`, and resolution by `24 ÷ 8 = × 3`. Overall multiplier = `2 × 2 × 3 = 12`.",
      },
      {
        id: "data-media-compression-m2-q06",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bitmap-images",
        question: "Which set of details is stored inside a bitmap image's **metadata**?",
        options: [
          "Only the lossy MP3 auditory masking table",
          "The CPU's Fetch-Decode-Execute clock speed",
          "The user's router routing table",
          "Pixel dimensions (width and height), colour depth, and file format",
        ],
        answerIndex: 3,
        hints: [
          "Metadata means 'data about the data' needed to display the image properly.",
          "How does an image viewer know where each row of pixels wraps to the next line?",
        ],
        explanation:
          "Without **metadata** specifying the image **width, height, colour depth**, and format (plus optional EXIF camera/date info), a viewer could not slice the raw binary stream into pixels and rows.",
      },
      {
        id: "data-media-compression-m2-q07",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bitmap-images",
        question: "What happens visually when a low-resolution `32 × 32` bitmap image is enlarged to fill a large poster?",
        options: [
          "Its file size shrinks by 1024 times",
          "Individual pixels become large visible coloured squares (pixelation)",
          "Its colour depth automatically upgrades from 8-bit to 24-bit",
          "New sharp detail is mathematically generated from vector equations",
        ],
        answerIndex: 1,
        hints: [
          "A `32 × 32` bitmap only stores `1,024` fixed squares of colour.",
          "Stretching those squares across a poster makes the grid visible.",
        ],
        explanation:
          "Bitmaps store a fixed grid of pixels rather than mathematical curves, so enlarging stretches each pixel into a visible blocky square (**pixelation**).",
      },
      {
        id: "data-media-compression-m2-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bitmap-images",
        question: "Calculate the uncompressed image data size in **KiB** of a `512 × 256` bitmap with `256` colours.",
        options: ["128 KiB", "1,024 KiB", "32,768 KiB", "131.072 KiB"],
        answerIndex: 0,
        hints: [
          "`256` colours → colour depth = **`8` bits** (`1` byte) per pixel!",
          "Compute `(512 × 256 × 1) ÷ 1024` using `512 ÷ 1024 = 0.5`.",
        ],
        explanation:
          "Since `2⁸ = 256`, each pixel uses `8 bits = 1 byte`. `KiB = (512 × 256) ÷ 1024 = 0.5 × 256 = 128 KiB` (`1,024 KiB` forgot `÷ 8`, and `32,768 KiB` multiplied by `256` instead of `8` bits!).",
      },
      {
        id: "data-media-compression-m2-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "bitmap-images",
        question: "A meteorological map requires `50` distinct colour shades. What is the **minimum** whole number of bits per pixel (`colour depth`) needed?",
        options: ["7 bits", "6 bits", "5 bits", "50 bits"],
        answerIndex: 1,
        hints: [
          "Test powers of `2`: {{2^5 = 32}} vs {{2^6 = 64}}.",
          "`32` shades are not enough for `50` shades!",
        ],
        explanation:
          "`5` bits only provide `2⁵ = 32` colours (`< 50`), whereas `6` bits provide `2⁶ = 64` colours (`≥ 50`), so at least **`6` bits** per pixel are required.",
      },
      {
        id: "data-media-compression-m2-q10",
        kind: "mcq",
        difficulty: "core",
        guideRef: "iec-storage-units",
        question: "Which expression gives the exact uncompressed size in **MiB** of a `1200 × 800` photograph with `24`-bit colour depth?",
        options: [
          "`(1200 × 800 × 24) ÷ (8 × 1024)`",
          "`(1200 × 800 × 8) ÷ (24 × 1024 × 1024)`",
          "`(1200 × 800 × 24) ÷ (8 × 1024 × 1024)`",
          "`(1200 × 800 × 24) ÷ (1000 × 1000)`",
        ],
        answerIndex: 2,
        hints: [
          "Numerator in bits = `1200 × 800 × 24`.",
          "Denominator converts `bits → Bytes (÷ 8) → KiB (÷ 1024) → MiB (÷ 1024)`.",
        ],
        explanation:
          "Total bits `1200 × 800 × 24` must be divided by `8` (for bytes), `1024` (for `KiB`), and `1024` again (for `MiB`).",
      },
      {
        id: "data-media-compression-m2-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "iec-storage-units",
        question: "How many individual **bits** are in `2 KiB`?",
        options: ["16,384 bits", "2,048 bits", "16,000 bits", "8,192 bits"],
        answerIndex: 0,
        hints: [
          "`2 KiB = 2 × 1,024 = 2,048` **bytes**.",
          "Multiply bytes by **`8`** to obtain bits!",
        ],
        explanation:
          "`2 × 1,024 bytes × 8 bits/byte = 16,384 bits` (`2,048` stopped at bytes, and `16,000` used `1,000` instead of `1,024`).",
      },
      {
        id: "data-media-compression-m2-q12",
        kind: "mcq",
        difficulty: "core",
        guideRef: "lossless-lossy-compression",
        question: "Which statement accurately distinguishes **lossy** compression from **lossless** compression?",
        options: [
          "Lossy compression allows the exact original file to be restored when decompressed",
          "Lossy compression is ideal for zipping executable `.exe` programs",
          "Lossless compression permanently removes quiet audio frequencies",
          "Lossy compression permanently deletes perceptually redundant data to achieve much smaller file sizes than lossless",
        ],
        answerIndex: 3,
        hints: [
          "Can deleted data in `JPEG` or `MP3` ever be recovered?",
          "Why use lossy at all if data is lost?",
        ],
        explanation:
          "Lossy compression achieves **far greater size reductions** (`70–95%`) than lossless by permanently discarding data human senses barely notice, whereas lossless guarantees exact bit-for-bit restoration.",
      },
      {
        id: "data-media-compression-m2-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "lossless-lossy-compression",
        question: "A `24`-pixel row `RRRRRRRRGGGGGGGGBBBBBBBB` (`1` byte per pixel) is compressed with Run-Length Encoding using `2` bytes per `(count, colour)` pair. How many bytes are **saved**?",
        options: ["12 bytes", "18 bytes", "21 bytes", "6 bytes"],
        answerIndex: 1,
        hints: [
          "Raw size = `24` bytes; RLE encodes `3` runs (`8R, 8G, 8B`) × `2` bytes/pair = `6` bytes.",
          "Read carefully: the question asks for bytes **saved** (`raw − compressed`)!",
        ],
        explanation:
          "Raw size is `24` bytes and RLE size is `3 × 2 = 6` bytes, so `24 − 6 = 18` bytes are **saved** (`6` bytes is the compressed size, not the saving!).",
      },
      {
        id: "data-media-compression-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "lossless-lossy-compression",
        question: "An alternating 10-byte pattern `WBWBWBWBWB` (`1` byte per character) is fed into a naive Run-Length Encoder that outputs a `2`-byte `(count, value)` pair for every run. What happens?",
        options: [
          "The output stays 10 bytes",
          "RLE switches to lossy mode and deletes all `B` characters",
          "The output doubles to 20 bytes because every single character is a separate run of length 1",
          "The output shrinks to 4 bytes (`5W 5B`)",
        ],
        answerIndex: 2,
        hints: [
          "How many consecutive runs of identical letters are in `W|B|W|B|W|B|W|B|W|B`?",
          "Multiply the number of runs (`10`) by `2` bytes per pair.",
        ],
        explanation:
          "Because adjacent characters always differ, there are `10` runs of length `1` (`1W 1B ...`), occupying `10 × 2 = 20` bytes — proving RLE actually **expands** high-variation data lacking repeated runs!",
      },
      {
        id: "data-media-compression-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "iec-storage-units",
        question: "A camera has an `8 MiB` high-speed RAM buffer. Each uncompressed burst frame is `1024 × 512` pixels with `16`-bit colour depth. How many complete frames fit in the buffer?",
        options: ["8 frames", "4 frames", "64 frames", "16 frames"],
        answerIndex: 0,
        hints: [
          "Find the size of **1 frame** in `MiB`: `(1024 × 512 × 16) ÷ (8 × 1024 × 1024)`.",
          "`16 ÷ 8 = 2`, and `512 × 2 = 1024`, so 1 frame = `1 MiB`!",
        ],
        explanation:
          "One frame occupies `(1024 × 512 × 2 bytes) ÷ (1024 × 1024) = 1 MiB`. Therefore an `8 MiB` buffer holds exactly `8 ÷ 1 = 8` frames.",
      },
    ],
  },
  {
    id: "data-media-compression-m3",
    title: "Paper 3 — Exam-Standard Challenge",
    questions: [
      {
        id: "data-media-compression-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "text-ascii-unicode",
        question: "How many bits per character are used by **Extended ASCII** (`256` characters)?",
        options: ["7 bits", "16 bits", "32 bits", "8 bits"],
        answerIndex: 3,
        hints: ["Standard ASCII uses `7` bits (`128` chars); Extended ASCII adds 1 bit to double capacity to `256`."],
        explanation:
          "Extended ASCII uses `8` bits (`1` byte) per character, giving {{2^8 = 256}} characters.",
      },
      {
        id: "data-media-compression-m3-q02",
        kind: "mcq",
        difficulty: "core",
        guideRef: "text-ascii-unicode",
        question: "In ASCII, `'B'` = `66` and `'b'` = `98`. Given that uppercase `'M'` has ASCII denary code `77`, what is the ASCII denary code for lowercase `'m'`?",
        options: ["107", "45", "109", "110"],
        answerIndex: 2,
        hints: [
          "Find the constant offset between uppercase and lowercase: `98 − 66 = 32`.",
          "Add `32` to `77`.",
        ],
        explanation:
          "Every lowercase ASCII letter sits `32` (`00100000₂`) above its uppercase counterpart, so `'m' = 77 + 32 = 109`.",
      },
      {
        id: "data-media-compression-m3-q03",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "text-ascii-unicode",
        question: "How many **bytes** are needed to store the string `\"CIE CS 0478!\"` (without the surrounding quotes, and ignoring any file header) using fixed **16-bit Unicode**?",
        options: ["12 bytes", "24 bytes", "20 bytes", "192 bytes"],
        answerIndex: 1,
        hints: [
          "Count EVERY character including both **spaces** and the **`!`**: `C-I-E-_-C-S-_-0-4-7-8-!` (`12` characters).",
          "Multiply by `2` bytes (`16` bits) per character.",
        ],
        explanation:
          "There are `12` characters (`9` letters/digits + `2` spaces + `1` exclamation mark). At `16 bits = 2 bytes` per character, `12 × 2 = 24 bytes` (`20` forgot the spaces, and `192` gave bits instead of bytes!).",
      },
      {
        id: "data-media-compression-m3-q04",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "sound-representation",
        question: "Which pair of adjustments will **both** make a digital audio recording match the original analogue wave more accurately?",
        options: [
          "Increasing sample rate and decreasing sample resolution",
          "Increasing sample rate and increasing sample resolution",
          "Using lossy MP3 compression at 32 kbps and mono channel",
          "Decreasing sample rate and decreasing sample resolution",
        ],
        answerIndex: 1,
        hints: ["More frequent measurements in time AND finer steps in amplitude both shrink rounding gaps."],
        explanation:
          "A higher **sample rate** captures fast wave changes with smaller time gaps, and a higher **sample resolution** reduces amplitude rounding (quantisation error).",
      },
      {
        id: "data-media-compression-m3-q05",
        kind: "mcq",
        difficulty: "core",
        guideRef: "sound-representation",
        question: "Why does reducing **sample resolution** to `4` bits make music sound noticeably grainy and distorted?",
        options: [
          "Each sample amplitude is rounded to only 16 coarse levels, introducing large quantisation errors",
          "Stereo channels swap left and right every 4 seconds",
          "Frequencies above 4 Hz are blocked by the microphone",
          "Only 4 samples are recorded across the entire song",
        ],
        answerIndex: 0,
        hints: [
          "`4`-bit sample resolution allows only {{2^4 = 16}} vertical amplitude steps.",
          "Every true wave height must snap to the nearest of those 16 steps.",
        ],
        explanation:
          "With only `2⁴ = 16` possible binary amplitude values, the digital waveform becomes a coarse staircase with large rounding gaps (**quantisation error / noise**).",
      },
      {
        id: "data-media-compression-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "sound-representation",
        question: "An uncompressed **mono** audio clip lasting `32 seconds` was sampled at `8,192 Hz` and has an exact file size of `256 KiB`. What **sample resolution** (in bits) was used?",
        options: ["16 bits", "24 bits", "4 bits", "8 bits"],
        answerIndex: 3,
        hints: [
          "Total file size in bytes = `256 × 1024` bytes.",
          "Total number of samples = `8192 × 32 = (8 × 1024) × 32 = 256 × 1024` samples!",
        ],
        explanation:
          "There are `8,192 × 32 = 256 × 1,024` samples occupying `256 × 1,024` bytes, which is exactly **`1` byte = `8` bits** per sample!",
      },
      {
        id: "data-media-compression-m3-q07",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "bitmap-images",
        question: "How many distinct colours can be represented by **`24`-bit True Colour** (`8` bits each for Red, Green, and Blue)?",
        options: ["24", "65,536", "16,777,216", "256"],
        answerIndex: 2,
        hints: ["Compute {{2^24 = 256 * 256 * 256}}."],
        explanation:
          "`2²⁴ = 2⁸ × 2⁸ × 2⁸ = 256 × 256 × 256 = 16,777,216` (~16.7 million colours).",
      },
      {
        id: "data-media-compression-m3-q08",
        kind: "mcq",
        difficulty: "core",
        guideRef: "bitmap-images",
        question: "An e-reader icon buffer holds a `256 × 128` **monochrome (`1`-bit black-and-white)** bitmap. What is its exact size in **KiB**?",
        options: ["8 KiB", "32 KiB", "0.5 KiB", "4 KiB"],
        answerIndex: 3,
        hints: [
          "Monochrome `2`-colour images use **`1` bit** per pixel.",
          "Compute `(256 × 128 × 1) ÷ (8 × 1024)` (`128 ÷ 8 = 16`, and `256 × 16 = 4096`).",
        ],
        explanation:
          "`Bits = 256 × 128 × 1`. `Bytes = 256 × 16 = 4,096` bytes. `KiB = 4,096 ÷ 1,024 = 4 KiB` (`32 KiB` forgot `÷ 8`!).",
      },
      {
        id: "data-media-compression-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "bitmap-images",
        question: "An uncompressed `1024 × 1024` pixel bitmap occupies exactly `2 MiB` (excluding metadata). What is the **maximum number of colours** supported by its colour depth?",
        options: ["65,536 colours", "16 colours", "16,777,216 colours", "256 colours"],
        answerIndex: 0,
        hints: [
          "`1024 × 1024` pixels occupying `2 × 1024 × 1024` bytes means each pixel uses **`2` bytes = `16` bits**!",
          "Now convert `16`-bit colour depth into **number of colours** ({{2^16}}).",
        ],
        explanation:
          "`2 MiB ÷ (1024 × 1024 pixels) = 2 bytes/pixel = 16 bits/pixel` colour depth. A `16`-bit colour depth supports {{2^16 = 65536}} colours!",
      },
      {
        id: "data-media-compression-m3-q10",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "iec-storage-units",
        question: "In the IEC binary storage hierarchy, `1,024 TiB` is equal to:",
        options: ["1 EiB", "1 GiB", "1 PiB", "1 PB"],
        answerIndex: 2,
        hints: ["Recall the order `KiB → MiB → GiB → TiB → PiB → EiB`."],
        explanation:
          "`1,024 TiB = 1 PiB` (one **pebibyte**; `1 EiB` is `1,024 PiB`, and `1 PB` is the SI decimal `1,000 TB`).",
      },
      {
        id: "data-media-compression-m3-q11",
        kind: "mcq",
        difficulty: "core",
        guideRef: "iec-storage-units",
        question: "A steady connection downloads data at `512 KiB` per second. How many seconds does it take to download a `4 MiB` file?",
        options: ["4 seconds", "8 seconds", "7.81 seconds", "16 seconds"],
        answerIndex: 1,
        hints: [
          "Convert `4 MiB` into `KiB` using `× 1,024`: `4 × 1,024 = 4,096 KiB`.",
          "Divide `4,096` by `512` (`1,024 ÷ 512 = 2`).",
        ],
        explanation:
          "`4 MiB = 4 × 1,024 KiB`. Dividing by `512 KiB/s` gives `4 × (1,024 ÷ 512) = 4 × 2 = 8 seconds` (`7.81` wrongly used `4,000 ÷ 512`!).",
      },
      {
        id: "data-media-compression-m3-q12",
        kind: "mcq",
        difficulty: "warmup",
        guideRef: "lossless-lossy-compression",
        question: "Which group contains **only** lossy compression formats?",
        options: [
          "`ZIP`, `PNG`, `FLAC`",
          "`MP3`, `JPEG`, `MP4`",
          "`JPEG`, `PNG`, `MP3`",
          "`RLE`, `MP4`, `TXT`",
        ],
        answerIndex: 1,
        hints: ["`PNG`, `FLAC`, `ZIP`, and `RLE` are all **lossless**!"],
        explanation:
          "`MP3` (audio), `JPEG` (still images), and `MP4` (video) are classic **lossy** formats, whereas `PNG`, `FLAC`, and `ZIP` are lossless.",
      },
      {
        id: "data-media-compression-m3-q13",
        kind: "mcq",
        difficulty: "core",
        guideRef: "lossless-lossy-compression",
        question: "How does **dictionary-based lossless compression** reduce the file size of a long English novel?",
        options: [
          "It permanently deletes adjectives and adverbs that readers can guess",
          "It rounds every ASCII character code to the nearest multiple of 16",
          "It stores frequently repeated words/substrings once in a lookup table and replaces every occurrence with a short binary index",
          "It only compresses runs of 10 or more identical consecutive letters like `AAAAAAAAAA`",
        ],
        answerIndex: 2,
        hints: [
          "English prose rarely has `AAAAAAAAAA` (so RLE helps little), yet words like `'the'`, `'and'`, `'tion'` appear thousands of times!",
          "Remember it must be **100% lossless**.",
        ],
        explanation:
          "Dictionary compression builds an index table of repeated words/phrases and substitutes short binary reference tokens, shrinking text dramatically with **zero data lost**.",
      },
      {
        id: "data-media-compression-m3-q14",
        kind: "mcq",
        difficulty: "core",
        guideRef: "lossless-lossy-compression",
        question: "Why does an e-commerce website store product photographs as **lossy `JPEG`** rather than uncompressed `24`-bit `BMP`?",
        options: [
          "Much smaller file sizes load faster for shoppers and consume far less server storage and mobile bandwidth with negligible visible difference",
          "JPEG increases image resolution beyond the camera's original pixel count",
          "Uncompressed BMP files cannot display colour on web browsers",
          "JPEG lets the original uncompressed raw sensor bits be recovered later",
        ],
        answerIndex: 0,
        hints: [
          "Think about page download time, bandwidth, and storage space.",
          "Does human vision notice the subtle colour details discarded by `JPEG`?",
        ],
        explanation:
          "`JPEG` shrinks photo sizes by `80–90%` by discarding subtle colour variations human eyes barely perceive, slashing page load times and bandwidth costs.",
      },
      {
        id: "data-media-compression-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        guideRef: "lossless-lossy-compression",
        question: "A `6 × 4` bitmap (`1` byte per pixel, `24` bytes raw) has rows:\n- Row 1: `W W W W W W`\n- Row 2: `W B B B B W`\n- Row 3: `W B B B B W`\n- Row 4: `W W W W W W`\nIf each row is compressed independently using RLE (`2` bytes per `(count, colour)` pair), what is the **compressed size in bytes**?",
        options: ["16 bytes", "4 bytes", "8 bytes", "12 bytes"],
        answerIndex: 0,
        hints: [
          "Count the consecutive runs in each row separately: Row 1 has `1` run (`6W`); Row 2 has `3` runs (`1W, 4B, 1W`).",
          "Sum the runs across all 4 rows (`1 + 3 + 3 + 1 = 8` runs) and multiply by `2` bytes per pair!",
        ],
        explanation:
          "Row 1 = `1` run, Row 2 = `3` runs, Row 3 = `3` runs, Row 4 = `1` run → `8` runs in total. At `2` bytes per `(count, colour)` pair, the RLE data takes `8 × 2 = 16` bytes (saving `8` bytes out of `24`).",
      },
    ],
  },
];
