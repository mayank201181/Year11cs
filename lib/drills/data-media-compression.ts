import type { Drill, Rng } from "./types.ts";
import type { Trap } from "../types.ts";

export const drills: Drill[] = [
  {
    id: "data-media-compression.ascii-unicode",
    topicId: "data-media-compression",
    title: "ASCII Codes & Character-Set Storage",
    level: 1,
    guideRef: "text-ascii-unicode",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const isLower = rng.bool(0.5);
        const offset = rng.int(1, 25);
        const baseChar = isLower ? "a" : "A";
        const baseCode = isLower ? 97 : 65;
        const targetChar = String.fromCharCode(baseCode + offset);
        const targetCode = baseCode + offset;
        return {
          prompt: `In ASCII, \`'${baseChar}'\` has denary code \`${baseCode}\`. What is the **denary** ASCII code for \`'${targetChar}'\`?`,
          answer: { type: "number", value: targetCode },
          hint: `Count how many alphabet steps \`'${targetChar}'\` sits after \`'${baseChar}'\` (\`+${offset}\`) and add to \`${baseCode}\`.`,
          traps: [
            { spec: { type: "number", value: targetCode + 1 }, feedback: `Off by 1! \`'${targetChar}'\` is \`${offset}\` steps after \`'${baseChar}'\`, so \`${baseCode} + ${offset} = ${targetCode}\`.` },
          ],
          solution: [
            `\`'${targetChar}'\` sits \`${offset}\` positions after \`'${baseChar}'\`.`,
            `\`${baseCode} + ${offset} = ${targetCode}\`.`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.int(0, 1);
        if (mode === 0) {
          const isLower = rng.bool(0.5);
          const offset = rng.int(1, 24);
          const baseChar = isLower ? "a" : "A";
          const baseCode = isLower ? 97 : 65;
          const targetChar = String.fromCharCode(baseCode + offset);
          const code = baseCode + offset;
          const bin = code.toString(2).padStart(8, "0");
          const wrongCase = (code ^ 32).toString(2).padStart(8, "0");
          return {
            prompt: `Given that \`'${baseChar}'\` has ASCII denary code \`${baseCode}\`, give the **8-bit binary** ASCII code for \`'${targetChar}'\`.`,
            answer: { type: "text", accept: [bin, `${bin.slice(0, 4)} ${bin.slice(4)}`], display: bin },
            hint: `First find the denary code \`${baseCode} + ${offset} = ${code}\`, then convert \`${code}\` into 8-bit binary.`,
            traps: [{ spec: { type: "text", accept: [wrongCase] }, feedback: `Watch the case bit (32s column): \`'${targetChar}'\` has denary code \`${code} = ${bin}\`.` }],
            solution: [
              `Denary code for \`'${targetChar}'\` = \`${baseCode} + ${offset} = ${code}\`.`,
              `In 8-bit binary: \`${bin}\`.`,
            ],
          };
        }
        const kBlocks = rng.int(2, 60);
        const chars = kBlocks * 1024;
        const bitsPerChar = rng.pick([8, 16, 32] as const);
        const bytesPerChar = bitsPerChar / 8;
        const kib = kBlocks * bytesPerChar;
        return {
          prompt: `A plain-text file contains \`${chars}\` characters encoded using **${bitsPerChar}-bit** ${bitsPerChar === 8 ? "Extended ASCII" : "Unicode"}. Calculate the exact raw text size in **KiB**.`,
          answer: { type: "number", value: kib },
          hint: `${bitsPerChar} bits = ${bytesPerChar} byte(s) per character, and \`${chars} ÷ 1024 = ${kBlocks}\`.`,
          traps: [
            { spec: { type: "number", value: kib * 8 }, feedback: "Don't forget to divide bits by **`8`** to convert to bytes!" },
          ],
          solution: [
            `Each character uses \`${bitsPerChar} ÷ 8 = ${bytesPerChar}\` byte(s).`,
            `\`KiB = (${chars} × ${bytesPerChar}) ÷ 1024 = ${kBlocks} × ${bytesPerChar} = ${kib} KiB\`.`,
          ],
        };
      }

      // tier === 3: Increase in KiB when switching from 8-bit ASCII to 16-bit or 32-bit Unicode
      const kBlocks = rng.int(3, 64);
      const chars = kBlocks * 1024;
      const uniBits = rng.pick([16, 32] as const);
      const oldKiB = kBlocks;
      const newKiB = kBlocks * (uniBits / 8);
      const diff = newKiB - oldKiB;
      return {
        prompt: `A \`${chars}\`-character document is converted from **8-bit Extended ASCII** to **${uniBits}-bit Unicode**. By how many **KiB** does the raw character storage **increase**?`,
        answer: { type: "number", value: diff },
        hint: `Find the old size (\`${oldKiB} KiB\`) and new size (\`${newKiB} KiB\`), then subtract to find the increase!`,
        traps: [
          { spec: { type: "number", value: newKiB }, feedback: `\`${newKiB} KiB\` is the *new total* size — subtract the original \`${oldKiB} KiB\` to find the **increase** (\`${diff} KiB\`)!` },
        ],
        solution: [
          `8-bit ASCII size = \`${chars} ÷ 1024 = ${oldKiB} KiB\`.`,
          `${uniBits}-bit Unicode size = \`(${chars} × ${uniBits / 8}) ÷ 1024 = ${newKiB} KiB\`.`,
          `Increase = \`${newKiB} − ${oldKiB} = ${diff} KiB\`.`,
        ],
      };
    },
  },
  {
    id: "data-media-compression.bitmap-sizing",
    topicId: "data-media-compression",
    title: "Bitmap Colour Depth & File-Size Maths",
    level: 2,
    guideRef: "bitmap-images",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        // Colours -> min bits or bits -> max colours (with varied sprite contexts!)
        const depth = rng.int(1, 12);
        const maxCols = 1 << depth;
        const askBits = rng.bool(0.6);
        const item = rng.pick(["icon", "map", "sprite", "logo", "badge", "banner", "tile", "diagram"] as const);
        if (askBits) {
          const exact = rng.bool(0.5);
          const cols = exact ? maxCols : (depth >= 3 ? rng.int((1 << (depth - 1)) + 1, maxCols - 1) : maxCols);
          return {
            prompt: `A bitmap ${item} requires \`${cols}\` distinct colours. What is the **minimum colour depth** in bits per pixel?`,
            answer: { type: "number", value: depth },
            hint: "Find the smallest integer `n` such that `2^n ≥` the required number of colours.",
            traps: cols !== depth ? [{ spec: { type: "number", value: cols }, feedback: `\`${cols}\` is the number of *colours* — find the exponent \`n\` where \`2^n ≥ ${cols}\` (\`${depth}\` bits)!` }] : [],
            solution: [
              depth > 1 ? `\`2^${depth - 1} = ${1 << (depth - 1)}\` (too few if \`< ${cols}\`), while \`2^${depth} = ${maxCols} ≥ ${cols}\`.` : "`2^1 = 2` colours.",
              `Minimum colour depth = \`${depth}\` bit${depth > 1 ? "s" : ""} per pixel.`,
            ],
          };
        }
        return {
          prompt: `A bitmap ${item} uses a colour depth of \`${depth}\` bit${depth > 1 ? "s" : ""} per pixel. What is the **maximum number of distinct colours** it can represent?`,
          answer: { type: "number", value: maxCols },
          hint: `Compute \`2^${depth}\` (never \`2 × ${depth}\`!).`,
          traps:
            2 * depth !== maxCols
              ? [{ spec: { type: "number", value: 2 * depth }, feedback: `Compute \`2^${depth} = ${maxCols}\`, NOT \`2 × ${depth}\`!` }]
              : [],
          solution: [`With \`${depth}\` bits per pixel, maximum colours = \`2^${depth} = ${maxCols}\`.`],
        };
      }

      if (tier === 2) {
        // Width x Height with colours or bit depth -> exact KiB
        const widths = [64, 128, 256, 512, 1024] as const;
        const heights = [64, 128, 256, 512] as const;
        const depths = [1, 2, 4, 8, 16, 24] as const;
        const w = rng.pick(widths);
        const h = rng.pick(heights);
        const d = rng.pick(depths);
        // Ensure exact integer KiB: (w * h * d) % 8192 === 0 (always true since min w*h = 4096, wait if w=64,h=64,d=1 -> 4096/8192 = 0.5, still clean! Let's ensure integer KiB by checking d >= 2 when w=64 && h=64)
        const dSafe = w === 64 && h === 64 && d === 1 ? 2 : d;
        const kib = (w * h * dSafe) / (8 * 1024);
        const giveColours = dSafe <= 8 && rng.bool(0.6);
        const colours = 1 << dSafe;
        const traps: Trap[] = [
          { spec: { type: "number", value: kib * 8 }, feedback: "Don't forget to divide bits by **`8`** to convert to bytes!" },
        ];
        if (giveColours && (w * h * colours) / (8 * 1024) !== kib) {
          traps.push({
            spec: { type: "number", value: (w * h * colours) / (8 * 1024) },
            feedback: `Exam trap! \`${colours}\` colours require \`${dSafe}\` bits per pixel (\`2^${dSafe} = ${colours}\`) — never multiply by \`${colours}\`!`,
          });
        }
        return {
          prompt: giveColours
            ? `Calculate the exact uncompressed size in **KiB** of a \`${w} × ${h}\` pixel bitmap that uses \`${colours}\` colours.`
            : `Calculate the exact uncompressed size in **KiB** of a \`${w} × ${h}\` pixel bitmap with a \`${dSafe}\`-bit colour depth.`,
          answer: { type: "number", value: kib },
          hint: giveColours
            ? `First convert \`${colours}\` colours to \`${dSafe}\` bits/pixel (\`2^${dSafe} = ${colours}\`), then compute \`(${w} × ${h} × ${dSafe}) ÷ (8 × 1024)\`.`
            : `Compute \`(${w} × ${h} × ${dSafe}) ÷ (8 × 1024)\` by cancelling factors of 2 first!`,
          traps,
          solution: [
            giveColours ? `\`${colours}\` colours → \`2^${dSafe} = ${colours}\` → colour depth = \`${dSafe}\` bits/pixel.` : `Colour depth = \`${dSafe}\` bits/pixel.`,
            `\`KiB = (${w} × ${h} × ${dSafe}) ÷ (8 × 1024) = ${kib} KiB\`.`,
          ],
        };
      }

      // tier === 3: Multi-photo batch in MiB
      const count = rng.pick([2, 4, 8, 12, 16, 24, 32] as const);
      const w = rng.pick([512, 1024, 2048] as const);
      const h = rng.pick([512, 1024] as const);
      const d = rng.pick([8, 16, 24, 32] as const);
      // Ensure exact integer MiB
      const effCount = (count * w * h * (d / 8)) % (1024 * 1024) === 0 ? count : count * 4;
      const mib = (effCount * w * h * (d / 8)) / (1024 * 1024);
      return {
        prompt: `A photographer shoots \`${effCount}\` uncompressed bitmaps, each \`${w} × ${h}\` pixels with \`${d}\`-bit colour depth. Calculate the total storage required in **MiB**.`,
        answer: { type: "number", value: mib },
        hint: `Write \`(${effCount} × ${w} × ${h} × ${d}) ÷ (8 × 1024 × 1024)\` and cancel \`1024\` factors before multiplying!`,
        traps: [
          { spec: { type: "number", value: mib * 8 }, feedback: "Remember to divide bits by **`8`** to convert to bytes!" },
          { spec: { type: "number", value: mib * 1024 }, feedback: `\`${mib * 1024}\` is in \`KiB\` — divide by \`1024\` once more for **MiB**!` },
        ],
        solution: [
          `Each pixel uses \`${d} ÷ 8 = ${d / 8}\` byte(s).`,
          `\`MiB = (${effCount} × ${w} × ${h} × ${d / 8}) ÷ (1024 × 1024) = ${mib} MiB\`.`,
        ],
      };
    },
  },
  {
    id: "data-media-compression.sound-sampling",
    topicId: "data-media-compression",
    title: "Sound Sampling File-Size Calculations",
    level: 2,
    guideRef: "sound-representation",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        // Mono in bytes
        const rate = rng.pick([1000, 2000, 4000, 8000, 10000, 16000, 20000] as const);
        const res = rng.pick([8, 16, 24] as const);
        const secs = rng.int(2, 15);
        const bytes = (rate * res * secs) / 8;
        return {
          prompt: `A **mono** audio clip is sampled at \`${rate} Hz\` with a sample resolution of \`${res} bits\` for \`${secs} seconds\`. Calculate the uncompressed file size in **bytes**.`,
          answer: { type: "number", value: bytes },
          hint: "Compute `(Sample Rate × Sample Resolution × Seconds) ÷ 8`.",
          traps: [
            { spec: { type: "number", value: bytes * 8 }, feedback: "That is the size in **bits** — divide by `8` to convert to **bytes**!" },
          ],
          solution: [
            `\`Bytes = (${rate} × ${res} × ${secs}) ÷ 8\`.`,
            `\`= ${rate} × ${res / 8} × ${secs} = ${bytes}\` bytes.`,
          ],
        };
      }

      if (tier === 2) {
        // Mono or Stereo in KiB using clean 1024-multiples!
        const kMult = rng.pick([4, 8, 10, 16, 20, 32] as const);
        const rate = kMult * 1024;
        const res = rng.pick([8, 16, 24] as const);
        const secs = rng.int(3, 25);
        const stereo = rng.bool(0.5);
        const ch = stereo ? 2 : 1;
        const kib = kMult * (res / 8) * secs * ch;
        const traps: Trap[] = [
          { spec: { type: "number", value: kib * 8 }, feedback: "Don't forget to divide bits by **`8`** to reach bytes!" },
        ];
        if (stereo) {
          traps.push({ spec: { type: "number", value: kib / 2 }, feedback: "The recording is **stereo** — multiply by **`2` channels**!" });
        }
        return {
          prompt: `A **${stereo ? "stereo (2-channel)" : "mono"}** recording has sample rate \`${rate} Hz\`, sample resolution \`${res} bits\`, and lasts \`${secs} seconds\`. Calculate its exact uncompressed size in **KiB**.`,
          answer: { type: "number", value: kib },
          hint: `Notice \`${rate} ÷ 1024 = ${kMult}\` and \`${res} ÷ 8 = ${res / 8}\`! Multiply \`${kMult} × ${res / 8} × ${secs} × ${ch}\`.`,
          traps,
          solution: [
            `\`KiB = (${rate} × ${res} × ${secs} × ${ch}) ÷ (8 × 1024)\`.`,
            `Cancel factors: \`${kMult} × ${res / 8} × ${secs} × ${ch} = ${kib} KiB\`.`,
          ],
        };
      }

      // tier === 3: Minutes -> Seconds + Stereo/Mono in KiB or MiB
      const kMult = rng.pick([8, 16, 32] as const);
      const rate = kMult * 1024;
      const res = rng.pick([16, 24] as const);
      const mins = rng.int(1, 5);
      const secs = mins * 60;
      const stereo = rng.bool(0.6);
      const ch = stereo ? 2 : 1;
      const kib = kMult * (res / 8) * secs * ch;
      const traps: Trap[] = [
        { spec: { type: "number", value: kMult * (res / 8) * mins * ch }, feedback: `Convert \`${mins}\` minute(s) into **\`${secs}\` seconds** (\`× 60\`) before applying the formula!` },
      ];
      if (stereo) {
        traps.push({ spec: { type: "number", value: kib / 2 }, feedback: "Remember to multiply by **`2`** for **stereo** audio!" });
      }
      return {
        prompt: `A **${stereo ? "stereo" : "mono"}** track is recorded at \`${rate} Hz\` with \`${res}\`-bit resolution for **\`${mins}\` minute${mins > 1 ? "s" : ""}**. Calculate its exact uncompressed size in **KiB**.`,
        answer: { type: "number", value: kib },
        hint: `First convert \`${mins}\` minute(s) to \`${secs}\` seconds${stereo ? " and include × 2 for stereo" : ""}, then cancel \`${rate} ÷ 1024 = ${kMult}\`.`,
        traps,
        solution: [
          `Duration = \`${mins} × 60 = ${secs}\` seconds; channels = \`${ch}\`.`,
          `\`KiB = (${rate} ÷ 1024) × (${res} ÷ 8) × ${secs} × ${ch} = ${kMult} × ${res / 8} × ${secs} × ${ch} = ${kib} KiB\`.`,
        ],
      };
    },
  },
  {
    id: "data-media-compression.iec-units",
    topicId: "data-media-compression",
    title: "IEC Binary Storage Unit Conversions (1024)",
    level: 2,
    guideRef: "iec-storage-units",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const units = [
          ["Bytes", "KiB"],
          ["KiB", "MiB"],
          ["MiB", "GiB"],
          ["GiB", "TiB"],
          ["TiB", "PiB"],
        ] as const;
        const [small, big] = rng.pick(units);
        const n = rng.int(2, 25);
        const goDown = rng.bool(0.5);
        if (goDown) {
          const ans = n * 1024;
          return {
            prompt: `Convert \`${n} ${big}\` into **${small}** using the CIE IEC standard.`,
            answer: { type: "number", value: ans },
            hint: `1 ${big} = 1,024 ${small} (never 1,000!).`,
            traps: [{ spec: { type: "number", value: n * 1000 }, feedback: `Exam trap! Multiply by **1,024** (not 1,000) when converting IEC \`${big}\` to \`${small}\`!` }],
            solution: [`\`${n} × 1,024 = ${ans} ${small}\`.`],
          };
        }
        const totalSmall = n * 1024;
        return {
          prompt: `Convert \`${totalSmall} ${small}\` into **${big}**.`,
          answer: { type: "number", value: n },
          hint: `Divide \`${totalSmall}\` by \`1,024\`.`,
          solution: [`\`${totalSmall} ÷ 1,024 = ${n} ${big}\`.`],
        };
      }

      if (tier === 2) {
        // Bits <-> KiB or how many files fit
        const mode = rng.int(0, 1);
        if (mode === 0) {
          const kib = rng.int(2, 40);
          const bits = kib * 1024 * 8;
          return {
            prompt: `Convert \`${bits} bits\` into **KiB**.`,
            answer: { type: "number", value: kib },
            hint: "First divide bits by `8` to get bytes, then divide bytes by `1,024` to get `KiB`.",
            traps: [{ spec: { type: "number", value: kib * 8 }, feedback: "You divided by `1,024`, now don't forget to divide by **`8`** to convert bits into bytes!" }],
            solution: [
              `\`Bytes = ${bits} ÷ 8 = ${kib * 1024}\` bytes.`,
              `\`KiB = ${kib * 1024} ÷ 1,024 = ${kib} KiB\`.`,
            ],
          };
        }
        const capMiB = rng.int(4, 64);
        const fileKiB = rng.pick([128, 256, 512] as const);
        const perMiB = 1024 / fileKiB;
        const count = capMiB * perMiB;
        return {
          prompt: `How many \`${fileKiB} KiB\` files can fit onto a completely empty \`${capMiB} MiB\` flash drive?`,
          answer: { type: "number", value: count },
          hint: `Find how many \`${fileKiB} KiB\` files fit in \`1 MiB\` (\`1024 ÷ ${fileKiB} = ${perMiB}\`), then multiply by \`${capMiB}\`.`,
          solution: [
            `\`1 MiB = 1,024 KiB\`, which holds \`1,024 ÷ ${fileKiB} = ${perMiB}\` files.`,
            `Total files = \`${capMiB} × ${perMiB} = ${count}\`.`,
          ],
        };
      }

      // tier === 3: GiB drive partially used in MiB, filled with KiB/MiB items
      const driveGiB = rng.int(1, 8);
      const usedMiB = rng.pick([128, 256, 512, 768] as const);
      const freeMiB = driveGiB * 1024 - usedMiB;
      const itemSizeMiB = rng.pick([2, 4, 8, 16, 32] as const);
      const count = freeMiB / itemSizeMiB;
      return {
        prompt: `A \`${driveGiB} GiB\` storage card already contains \`${usedMiB} MiB\` of operating-system files. How many \`${itemSizeMiB} MiB\` recordings can be saved in the remaining free space?`,
        answer: { type: "number", value: count },
        hint: `Convert \`${driveGiB} GiB\` to \`${driveGiB * 1024} MiB\` first, subtract \`${usedMiB} MiB\`, then divide by \`${itemSizeMiB} MiB\`.`,
        solution: [
          `Total capacity = \`${driveGiB} × 1,024 = ${driveGiB * 1024} MiB\`.`,
          `Free space = \`${driveGiB * 1024} − ${usedMiB} = ${freeMiB} MiB\`.`,
          `Recordings = \`${freeMiB} ÷ ${itemSizeMiB} = ${count}\`.`,
        ],
      };
    },
  },
  {
    id: "data-media-compression.rle-compression",
    topicId: "data-media-compression",
    title: "Run-Length Encoding (RLE) & Compression Savings",
    level: 3,
    guideRef: "lossless-lossy-compression",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const palette = ["R", "G", "B", "W", "Y"];
      if (tier === 1) {
        const c1 = palette[rng.int(0, 4)];
        let c2 = palette[(palette.indexOf(c1) + rng.int(1, 4)) % 5];
        const c3 = rng.bool(0.5) ? c1 : palette[(palette.indexOf(c2) + 1) % 5];
        if (c3 === c2) c2 = palette[(palette.indexOf(c2) + 2) % 5];
        const n1 = rng.int(3, 8);
        const n2 = rng.int(2, 7);
        const n3 = rng.int(2, 7);
        const raw = `${c1.repeat(n1)}${c2.repeat(n2)}${c3.repeat(n3)}`;
        const encoded = `${n1}${c1} ${n2}${c2} ${n3}${c3}`;
        const compact = `${n1}${c1}${n2}${c2}${n3}${c3}`;
        const traps: Trap[] =
          c1 === c3
            ? [{ spec: { type: "text", accept: [`${n1 + n3}${c1} ${n2}${c2}`, `${n1 + n3}${c1}${n2}${c2}`] }, feedback: "Never combine separated runs — keep the three consecutive runs in order!" }]
            : [];
        return {
          prompt: `Encode the string \`${raw}\` using Run-Length Encoding in the format \`${n1}${c1} ${n2}${c2} ${n3}${c3}\`.`,
          answer: { type: "text", accept: [encoded, compact], display: encoded },
          hint: "Count each consecutive run of identical characters from left to right without merging separated runs.",
          traps,
          solution: [`The consecutive runs are \`${n1}\` × \`${c1}\`, \`${n2}\` × \`${c2}\`, and \`${n3}\` × \`${c3}\` → \`${encoded}\`.`],
        };
      }

      if (tier === 2) {
        // Bytes saved by RLE on 4 runs
        const runs = rng.int(3, 5);
        const chars: string[] = [];
        const counts: number[] = [];
        let prev = "";
        for (let i = 0; i < runs; i++) {
          const opts = palette.filter((p) => p !== prev);
          const ch = rng.pick(opts);
          prev = ch;
          chars.push(ch);
          counts.push(rng.int(3, 8));
        }
        const rawStr = chars.map((c, i) => c.repeat(counts[i])).join("");
        const rawBytes = rawStr.length;
        const rleBytes = runs * 2;
        const saved = rawBytes - rleBytes;
        return {
          prompt: `A \`${rawBytes}\`-byte pixel row \`${rawStr}\` (\`1\` byte per pixel) is compressed with RLE where each \`(count, colour)\` pair takes \`2\` bytes. How many **bytes are saved**?`,
          answer: { type: "number", value: saved },
          hint: `Count the consecutive runs (\`${runs}\`), multiply by \`2\` bytes for the compressed size (\`${rleBytes}\`), and subtract from \`${rawBytes}\`!`,
          traps:
            rleBytes !== saved
              ? [{ spec: { type: "number", value: rleBytes }, feedback: `\`${rleBytes}\` bytes is the *compressed size* — subtract from \`${rawBytes}\` to find the **bytes saved** (\`${saved}\`)!` }]
              : [],
          solution: [
            `Raw size = \`${rawBytes}\` bytes; number of runs = \`${runs}\`.`,
            `RLE size = \`${runs} × 2 = ${rleBytes}\` bytes.`,
            `Bytes saved = \`${rawBytes} − ${rleBytes} = ${saved}\` bytes.`,
          ],
        };
      }

      // tier === 3: Percentage size reduction after compression
      const rawKiB = rng.pick([200, 400, 500, 800, 1000, 1200, 1600, 2000] as const);
      const pctSaved = rng.pick([25, 35, 40, 55, 60, 65, 75, 80, 85, 90] as const);
      const compKiB = (rawKiB * (100 - pctSaved)) / 100;
      return {
        prompt: `Compressing a \`${rawKiB} KiB\` media file shrinks its size to \`${compKiB} KiB\`. By what **percentage** was the file size **reduced**? (Give just the number without \`%\`.)`,
        answer: { type: "number", value: pctSaved },
        hint: `Compute \`((${rawKiB} − ${compKiB}) ÷ ${rawKiB}) × 100\`.`,
        traps:
          100 - pctSaved !== pctSaved
            ? [{ spec: { type: "number", value: 100 - pctSaved }, feedback: `\`${100 - pctSaved}%\` is the fraction *remaining* — percentage **reduction** is \`(${rawKiB - compKiB} ÷ ${rawKiB}) × 100 = ${pctSaved}%\`!` }]
            : [],
        solution: [
          `Amount saved = \`${rawKiB} − ${compKiB} = ${rawKiB - compKiB} KiB\`.`,
          `Percentage reduction = \`(${rawKiB - compKiB} ÷ ${rawKiB}) × 100 = ${pctSaved}%\`.`,
        ],
      };
    },
  },
];
