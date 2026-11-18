import type { Drill, Rng } from "./types.ts";

function bitsToStr(bits: number[]): string {
  return bits.join("");
}

function makeParityBlock(rng: Rng, oddParity: boolean, dataRows: number) {
  const cols = 8;
  // Note: for (dataRows + 1) rows and 8 cols to ALL satisfy oddParity,
  // (dataRows + 1) * oddParity and 8 * oddParity must have the same parity mod 2!
  // Since 8 is even, (dataRows + 1) MUST be even whenever oddParity is true (i.e. dataRows = 3 or 5).
  const grid: number[][] = [];
  for (let r = 0; r < dataRows; r++) {
    const row: number[] = [];
    let ones = 0;
    for (let c = 0; c < cols - 1; c++) {
      const b = rng.int(0, 1);
      row.push(b);
      ones += b;
    }
    const wantOdd = oddParity ? 1 : 0;
    const pBit = ones % 2 === wantOdd ? 0 : 1;
    row.push(pBit);
    grid.push(row);
  }
  const parityRow: number[] = [];
  for (let c = 0; c < cols; c++) {
    let colOnes = 0;
    for (let r = 0; r < dataRows; r++) colOnes += grid[r][c];
    const wantOdd = oddParity ? 1 : 0;
    parityRow.push(colOnes % 2 === wantOdd ? 0 : 1);
  }
  grid.push(parityRow);
  const badR = rng.int(0, dataRows - 1);
  const badC = rng.int(0, cols - 1);
  const originalByte = [...grid[badR]];
  grid[badR][badC] = 1 - grid[badR][badC];
  return { grid, badRow1: badR + 1, badCol1: badC + 1, originalByte };
}

export const drills: Drill[] = [
  {
    id: "data-transmission.packet-math",
    topicId: "data-transmission",
    title: "Packet Splitting, Hop Counters & Overhead Maths",
    level: 1,
    guideRef: "packets-packet-switching",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const pktKiB = rng.pick([16, 32, 64] as const);
        const mib = rng.int(1, 12);
        const totalKiB = mib * 1024;
        const packets = totalKiB / pktKiB;
        const trapSi = Math.round((mib * 1000) / pktKiB);
        return {
          prompt: `A \`${mib} MiB\` file is split into data packets that each carry \`${pktKiB} KiB\` of payload (\`1 MiB = 1024 KiB\`). How many packets are created? Give a single whole number.`,
          answer: { type: "number", value: packets },
          traps:
            trapSi !== packets
              ? [
                  {
                    spec: { type: "number", value: trapSi },
                    feedback: `Use CIE IEC units: \`1 MiB = 1024 KiB\`, so \`${mib} × 1024 = ${totalKiB} KiB\`, not \`${mib * 1000} KiB\`!`,
                  },
                ]
              : [],
          hint: `Convert \`${mib} MiB\` to \`KiB\` via \`${mib} × 1024 = ${totalKiB} KiB\`, then divide by \`${pktKiB}\`.`,
          solution: [
            `Convert file size: \`${mib} × 1024 = ${totalKiB} KiB\`.`,
            `Divide by payload per packet: \`${totalKiB} ÷ ${pktKiB} = ${packets}\` packets.`,
          ],
        };
      }
      if (tier === 2) {
        if (rng.bool(0.5)) {
          const startHop = rng.int(16, 64);
          const routers = rng.int(3, startHop - 2);
          const left = startHop - routers;
          return {
            prompt: `A packet leaves a sender with its **hop number** initialised to \`${startHop}\`. Each router decrements the hop number by \`1\`. After passing through \`${routers}\` routers to reach its destination, what value remains in the hop number?`,
            answer: { type: "number", value: left },
            traps:
              routers !== left
                ? [
                    {
                      spec: { type: "number", value: routers },
                      feedback: `\`${routers}\` is the number of routers visited — subtract \`${routers}\` from \`${startHop}\`!`,
                    },
                  ]
                : [],
            hint: `Subtract \`1\` per router: \`${startHop} − ${routers}\`.`,
            solution: [
              `Starting hop number = \`${startHop}\`.`,
              `After \`${routers}\` routers: \`${startHop} − ${routers} = ${left}\`.`,
            ],
          };
        }
        const pktCount = rng.pick([16, 24, 32, 40, 48, 64, 80, 96, 128] as const);
        const hdrBytes = rng.pick([32, 40, 48, 64] as const);
        const trlBytes = rng.pick([16, 24, 32] as const);
        const ovhPerPkt = hdrBytes + trlBytes;
        const totalOvhBytes = pktCount * ovhPerPkt;
        return {
          prompt: `A message is split into \`${pktCount}\` packets. Every packet adds a \`${hdrBytes}-byte\` header and a \`${trlBytes}-byte\` trailer around its payload. Calculate the **total header + trailer overhead** across all \`${pktCount}\` packets, in **bytes**.`,
          answer: { type: "number", value: totalOvhBytes },
          traps: [
            {
              spec: { type: "number", value: pktCount * hdrBytes },
              feedback: `Don't forget to include the \`${trlBytes}-byte\` trailer as well as the \`${hdrBytes}-byte\` header on each packet!`,
            },
          ],
          hint: `Add \`${hdrBytes} + ${trlBytes} = ${ovhPerPkt} bytes\` per packet, then multiply by \`${pktCount}\`.`,
          solution: [
            `Overhead per packet = \`${hdrBytes} + ${trlBytes} = ${ovhPerPkt} bytes\`.`,
            `Total overhead = \`${pktCount} × ${ovhPerPkt} = ${totalOvhBytes} bytes\`.`,
          ],
        };
      }
      const pktMax = rng.pick([512, 1024] as const);
      const ovh = rng.pick([32, 64, 128] as const);
      const payloadPerPkt = pktMax - ovh;
      const numPackets = rng.int(4, 32);
      const fileBytes = payloadPerPkt * numPackets;
      const hdr = (ovh * 3) / 4;
      const trl = ovh - hdr;
      const naive = Math.ceil(fileBytes / pktMax);
      return {
        prompt: `Each network packet has a **maximum total size of \`${pktMax} bytes\`**, including a \`${hdr}-byte\` header and a \`${trl}-byte\` trailer. How many packets are required to transmit a \`${fileBytes}-byte\` file? Give a single whole number.`,
        answer: { type: "number", value: numPackets },
        traps:
          naive !== numPackets
            ? [
                {
                  spec: { type: "number", value: naive },
                  feedback: `Subtract the \`${hdr} + ${trl} = ${ovh} bytes\` of header+trailer from \`${pktMax}\` first — each packet carries \`${payloadPerPkt} bytes\` of payload!`,
                },
              ]
            : [],
        hint: `Usable payload per packet = \`${pktMax} − (${hdr} + ${trl}) = ${payloadPerPkt} bytes\`. Now divide \`${fileBytes} ÷ ${payloadPerPkt}\`.`,
        solution: [
          `Header + trailer = \`${hdr} + ${trl} = ${ovh} bytes\`.`,
          `Payload capacity per packet = \`${pktMax} − ${ovh} = ${payloadPerPkt} bytes\`.`,
          `Packets needed = \`${fileBytes} ÷ ${payloadPerPkt} = ${numPackets}\`.`,
        ],
      };
    },
  },
  {
    id: "data-transmission.bus-throughput",
    topicId: "data-transmission",
    title: "Serial vs Parallel Throughput & Transfer Timing",
    level: 2,
    guideRef: "transmission-methods",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const wires = rng.pick([8, 16, 32, 64] as const);
        const cycles = rng.int(2, 25);
        const totalBits = wires * cycles;
        return {
          prompt: `An internal \`${wires}\`-wire **parallel** data bus transfers \`${wires}\` bits simultaneously on every clock pulse. How many **bits** are transferred in \`${cycles}\` clock pulses?`,
          answer: { type: "number", value: totalBits },
          traps: [
            {
              spec: { type: "number", value: cycles },
              feedback: `\`${cycles}\` bits would be a \`1\`-wire serial link — multiply by \`${wires}\` parallel wires!`,
            },
          ],
          hint: `Multiply \`${wires}\` bits/pulse by \`${cycles}\` pulses.`,
          solution: [
            `Parallel bits per clock pulse = \`${wires}\`.`,
            `Total bits in \`${cycles}\` pulses = \`${wires} × ${cycles} = ${totalBits}\` bits.`,
          ],
        };
      }
      if (tier === 2) {
        const wires = rng.pick([8, 16, 32] as const);
        const parMHz = rng.pick([50, 100, 125, 200, 250] as const);
        const mult = rng.pick([2, 4, 5, 8] as const);
        const serMHz = parMHz * mult;
        const parRate = wires * parMHz;
        const serRate = serMHz;
        const diff = parRate - serRate;
        return {
          prompt: `Over a short PCB trace, a \`${wires}\`-bit **parallel** bus runs at \`${parMHz} MHz\` (\`${wires}\` bits per cycle), while a single-lane **serial** link runs at \`${serMHz} MHz\` (\`1\` bit per cycle). By how many **Mbit/s** does the parallel bus's bit rate exceed the serial link's bit rate?`,
          answer: { type: "number", value: diff },
          traps: [
            {
              spec: { type: "number", value: parRate },
              feedback: `\`${parRate} Mbit/s\` is the parallel bus rate — subtract the serial link's \`${serRate} Mbit/s\`!`,
            },
          ],
          hint: `Parallel rate = \`${wires} × ${parMHz} = ${parRate} Mbit/s\`; Serial rate = \`1 × ${serMHz} = ${serRate} Mbit/s\`. Find \`${parRate} − ${serRate}\`.`,
          solution: [
            `Parallel throughput = \`${wires} × ${parMHz} = ${parRate} Mbit/s\`.`,
            `Serial throughput = \`1 × ${serMHz} = ${serRate} Mbit/s\`.`,
            `Difference = \`${parRate} − ${serRate} = ${diff} Mbit/s\`.`,
          ],
        };
      }
      const kib = rng.pick([8, 16, 32, 64, 128, 256] as const);
      const rateKbps = rng.pick([64, 128, 256, 512, 1024] as const);
      // Use clean IEC: rate in KiB/s or Kibit/s -> state clearly "kibibits per second (1 Kibit = 1024 bits, 1 KiB = 8 Kibit)"
      const totalKibits = kib * 8;
      const secs = totalKibits / rateKbps;
      if (!Number.isInteger(secs)) {
        const cleanKib = rateKbps / 8 * rng.int(2, 12);
        const cleanKibits = cleanKib * 8;
        const cleanSecs = cleanKibits / rateKbps;
        return {
          prompt: `A full-duplex **serial** link transmits data in each direction at \`${rateKbps} Kibit/s\` (\`1 KiB = 8 Kibit\`). How many **seconds** does it take to upload a \`${cleanKib} KiB\` file while simultaneously downloading another \`${cleanKib} KiB\` file?`,
          answer: { type: "number", value: cleanSecs },
          traps: [
            {
              spec: { type: "number", value: cleanSecs * 2 },
              feedback: `Full-duplex transmits in **both directions simultaneously**, so upload and download happen at the same time (don't double the time — that would be half-duplex)!`,
            },
            {
              spec: { type: "number", value: cleanKib / rateKbps },
              feedback: `Convert \`${cleanKib} KiB\` from bytes to bits first (\`× 8\`)!`,
            },
          ],
          hint: `Convert \`${cleanKib} KiB × 8 = ${cleanKibits} Kibit\`, divide by \`${rateKbps} Kibit/s\`, and remember **full-duplex** runs both ways simultaneously!`,
          solution: [
            `File size in kibibits = \`${cleanKib} × 8 = ${cleanKibits} Kibit\`.`,
            `Upload time = \`${cleanKibits} ÷ ${rateKbps} = ${cleanSecs} s\`.`,
            `Because **full-duplex** sends and receives **simultaneously**, total elapsed time is **\`${cleanSecs}\` s** (not \`${cleanSecs * 2}\` s).`,
          ],
        };
      }
      return {
        prompt: `A **half-duplex** serial radio link transmits at \`${rateKbps} Kibit/s\` (\`1 KiB = 8 Kibit\`). Station A sends a \`${kib} KiB\` report to Station B, and then Station B sends a \`${kib} KiB\` reply back to Station A. How many **seconds** does the complete two-way exchange take?`,
        answer: { type: "number", value: secs * 2 },
        traps: [
          {
            spec: { type: "number", value: secs },
            feedback: `\`${secs} s\` is one way — in **half-duplex**, Station B must wait until Station A finishes before replying, so double it!`,
          },
        ],
        hint: `One-way size = \`${kib} × 8 = ${totalKibits} Kibit\` (\`${secs} s\`). In **half-duplex**, directions cannot overlap, so add both legs!`,
        solution: [
          `One-way data = \`${kib} × 8 = ${totalKibits} Kibit\`.`,
          `One-way time = \`${totalKibits} ÷ ${rateKbps} = ${secs} s\`.`,
          `Half-duplex alternates turns (never simultaneous): \`${secs} + ${secs} = ${secs * 2} s\`.`,
        ],
      };
    },
  },
  {
    id: "data-transmission.usb-transfer",
    topicId: "data-transmission",
    title: "USB Cable Spans, +5V Power & Serial Framing",
    level: 1,
    guideRef: "usb-interface",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const dist = rng.int(6, 49);
        const segments = Math.ceil(dist / 5);
        const repeaters = segments - 1;
        return {
          prompt: `A standard passive **USB** cable has a maximum recommended length of \`5\` metres. If a studio camera is positioned \`${dist}\` metres along a cable run from the host computer, what is the **minimum number of powered USB hubs / active repeaters** required between \`5\`-metre cable segments to bridge the \`${dist}\` metres?`,
          answer: { type: "number", value: repeaters },
          traps: [
            {
              spec: { type: "number", value: segments },
              feedback: `\`${segments}\` is the number of \`5 m\` cable segments — you only place a repeater at the \`${repeaters}\` join(s) **between** those segments!`,
            },
          ],
          hint: `Divide \`${dist} ÷ 5\` and round up to \`${segments}\` cable segments; \`N\` segments need \`N − 1\` hubs between them.`,
          solution: [
            `Each passive USB cable spans up to \`5 m\`, so \`${dist} m\` needs \`⌈${dist} ÷ 5⌉ = ${segments}\` cable segments.`,
            `Joining \`${segments}\` segments end-to-end requires \`${segments} − 1 = ${repeaters}\` powered hub(s)/repeater(s).`,
          ],
        };
      }
      if (tier === 2) {
        const mouseMa = rng.pick([50, 80, 100, 120] as const);
        const kbMa = rng.pick([100, 120, 150, 180] as const);
        const micMa = rng.pick([150, 200, 250, 300] as const);
        const portLimit = rng.pick([500, 900] as const);
        const used = mouseMa + kbMa + micMa;
        const spare = portLimit - used;
        return {
          prompt: `An unpowered USB hub draws all power from a single host USB port rated at \`+5V\` and \`${portLimit} mA\` maximum current. Three USB peripherals drawing \`${mouseMa} mA\`, \`${kbMa} mA\`, and \`${micMa} mA\` are plugged in (ignoring hub overhead). Calculate the remaining current budget in \`mA\` (may be negative if overloaded!).`,
          answer: { type: "number", value: spare },
          traps:
            used !== spare
              ? [
                  {
                    spec: { type: "number", value: used },
                    feedback: `\`${used} mA\` is the total current drawn — subtract it from the \`${portLimit} mA\` port limit!`,
                  },
                ]
              : [],
          hint: `Sum the three device currents (\`${mouseMa} + ${kbMa} + ${micMa}\`) and subtract from \`${portLimit}\`.`,
          solution: [
            `Total peripheral draw = \`${mouseMa} + ${kbMa} + ${micMa} = ${used} mA\`.`,
            `Remaining budget = \`${portLimit} − ${used} = ${spare} mA\`.`,
          ],
        };
      }
      const mib = rng.pick([15, 30, 45, 60, 75, 90, 120, 150, 180, 240] as const);
      const speedMibS = rng.pick([15, 30] as const);
      const secs = mib / speedMibS;
      const overheadBitsPerByte = rng.pick([2, 3] as const); // e.g. start+stop asynchronous framing
      const rawBitsPerByte = 8 + overheadBitsPerByte;
      const chars = rng.int(10, 60) * 10;
      const totalSerialBits = chars * rawBitsPerByte;
      if (rng.bool(0.6)) {
        return {
          prompt: `An **asynchronous serial** link frames each \`8\`-bit data byte with \`1\` start bit and \`${overheadBitsPerByte - 1}\` stop bit(s) (\`${rawBitsPerByte}\` bits sent per byte in total). How many **bits in total** travel down the serial wire to transmit \`${chars}\` bytes?`,
          answer: { type: "number", value: totalSerialBits },
          traps: [
            {
              spec: { type: "number", value: chars * 8 },
              feedback: `\`${chars * 8}\` counts only the \`8\` data bits — include the \`${overheadBitsPerByte}\` start/stop framing bits per byte (\`× ${rawBitsPerByte}\`)!`,
            },
          ],
          hint: `Each byte takes \`8 + ${overheadBitsPerByte} = ${rawBitsPerByte}\` serial bits; multiply by \`${chars}\` bytes.`,
          solution: [
            `Bits per framed byte = \`8 + 1 + ${overheadBitsPerByte - 1} = ${rawBitsPerByte}\` bits.`,
            `Total bits for \`${chars}\` bytes = \`${chars} × ${rawBitsPerByte} = ${totalSerialBits}\` bits.`,
          ],
        };
      }
      return {
        prompt: `A USB 2.0 flash drive achieves a sustained serial payload write speed of \`${speedMibS} MiB/s\` (\`1 GiB = 1024 MiB\`). How many **seconds** are needed to copy \`${mib} MiB\` of backup files onto the drive, plus an extra \`2\` seconds for initial USB voltage-detection & driver handshake?`,
        answer: { type: "number", value: secs + 2 },
        traps: [
          {
            spec: { type: "number", value: secs },
            feedback: `Don't forget to add the \`2\` seconds of initial USB detection & driver handshake!`,
          },
        ],
        hint: `Transfer time = \`${mib} ÷ ${speedMibS} = ${secs} s\`, then add \`2 s\`.`,
        solution: [
          `Payload transfer time = \`${mib} ÷ ${speedMibS} = ${secs} s\`.`,
          `Including \`2 s\` handshake: \`${secs} + 2 = ${secs + 2} s\`.`,
        ],
      };
    },
  },
  {
    id: "data-transmission.parity-bytes",
    topicId: "data-transmission",
    title: "Even/Odd Parity Bytes & 2D Parity Block Fault Finder",
    level: 2,
    guideRef: "parity-checksum-echo",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const odd = rng.bool(0.5);
        const leftMost = rng.bool(0.7);
        const data: number[] = [];
        let ones = 0;
        for (let i = 0; i < 7; i++) {
          const b = rng.int(0, 1);
          data.push(b);
          ones += b;
        }
        const pBit = (ones % 2 === (odd ? 1 : 0)) ? 0 : 1;
        const full = leftMost ? [pBit, ...data] : [...data, pBit];
        const wrongParity = leftMost ? [1 - pBit, ...data] : [...data, 1 - pBit];
        const dataStr = bitsToStr(data);
        const fullStr = bitsToStr(full);
        const posLabel = leftMost ? "leftmost (MSB)" : "rightmost (LSB)";
        const pattern = leftMost ? `_${dataStr}` : `${dataStr}_`;
        return {
          prompt: `Complete the \`8\`-bit byte for the \`7\` data bits \`${dataStr}\` using **${odd ? "Odd" : "Even"} Parity**, placing the parity bit in the **${posLabel}** position (\`${pattern}\`). Give the full \`8\`-bit binary string.`,
          answer: { type: "text", accept: [fullStr, `${fullStr.slice(0, 4)} ${fullStr.slice(4)}`], display: fullStr },
          traps: [
            {
              spec: { type: "text", accept: [bitsToStr(wrongParity)] },
              feedback: `Check **${odd ? "Odd" : "Even"} Parity**: \`${dataStr}\` has \`${ones}\` ones, so the parity bit must be \`${pBit}\`!`,
            },
          ],
          hint: `\`${dataStr}\` contains \`${ones}\` one(s). Choose \`0\` or \`1\` in the ${posLabel} slot so total \`1\`s is **${odd ? "odd" : "even"}**.`,
          solution: [
            `Count \`1\`s in \`${dataStr}\`: \`${ones}\`.`,
            `For **${odd ? "Odd" : "Even"} Parity**, set the ${posLabel} parity bit to \`${pBit}\` (total \`${ones + pBit}\` ones).`,
            `Complete byte: **\`${fullStr}\`**.`,
          ],
        };
      }
      if (tier === 2) {
        const odd = rng.bool(0.4);
        const { grid, badRow1, badCol1 } = makeParityBlock(rng, odd, 3);
        const table =
          "| Row | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |\n" +
          "|---|---|---|---|---|---|---|---|---|\n" +
          grid
            .map((r, idx) => `| ${idx < 3 ? `Byte ${idx + 1}` : "Parity"} | ${r.join(" | ")} |`)
            .join("\n");
        return {
          prompt:
            `Three data bytes and an **${odd ? "Odd" : "Even"} Parity** byte are received (columns \`1\` to \`8\`):\n\n` +
            `${table}\n\n` +
            `Give the corrupted **Byte number** (\`1–3\`) followed by the corrupted **Bit column** (\`1–8\`), separated by a comma (e.g. \`2, 5\`).`,
          answer: { type: "list", values: [badRow1, badCol1], ordered: true, display: `${badRow1}, ${badCol1}` },
          traps:
            badRow1 !== badCol1
              ? [
                  {
                    spec: { type: "list", values: [badCol1, badRow1], ordered: true },
                    feedback: `Write the **Byte row** (\`${badRow1}\`) first, then the **Bit column** (\`${badCol1}\`)!`,
                  },
                ]
              : [],
          hint: `Find the single row and single column whose count of \`1\`s fails **${odd ? "Odd" : "Even"} Parity**.`,
          solution: [
            `Row parity check (${odd ? "Odd" : "Even"} Parity): **Byte ${badRow1}** fails.`,
            `Column parity check across all \`4\` rows: **Column ${badCol1}** fails.`,
            `Intersection = **\`${badRow1}, ${badCol1}\`**.`,
          ],
        };
      }
      const odd = rng.bool(0.4);
      const { grid, badRow1, badCol1, originalByte } = makeParityBlock(rng, odd, 3);
      const origStr = bitsToStr(originalByte);
      const badStr = bitsToStr(grid[badRow1 - 1]);
      const table =
        "| Row | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |\n" +
        "|---|---|---|---|---|---|---|---|---|\n" +
        grid
          .map((r, idx) => `| ${idx < 3 ? `Byte ${idx + 1}` : "Parity"} | ${r.join(" | ")} |`)
          .join("\n");
      return {
        prompt:
          `Three data bytes and an **${odd ? "Odd" : "Even"} Parity** byte are received:\n\n` +
          `${table}\n\n` +
          `Locate the single corrupted bit in \`Byte ${badRow1}\` and write down the **corrected \`8\`-bit binary string** for \`Byte ${badRow1}\`.`,
        answer: { type: "text", accept: [origStr, `${origStr.slice(0, 4)} ${origStr.slice(4)}`], display: origStr },
        traps: [
          {
            spec: { type: "text", accept: [badStr] },
            feedback: `\`${badStr}\` is the corrupted byte as received — flip column \`${badCol1}\` to fix it!`,
          },
        ],
        hint: `Check columns \`1..8\` (including the Parity row) under **${odd ? "Odd" : "Even"} Parity** to find faulty Column \`${badCol1}\`, then flip bit \`${badCol1}\` of \`Byte ${badRow1}\`.`,
        solution: [
          `\`Byte ${badRow1}\` and **Column ${badCol1}** both fail **${odd ? "Odd" : "Even"} Parity**.`,
          `Flip bit \`${badCol1}\` of \`Byte ${badRow1}\` (\`${badStr}\` → **\`${origStr}\`**).`,
        ],
      };
    },
  },
  {
    id: "data-transmission.check-digits",
    topicId: "data-transmission",
    title: "ISBN-13, Modulo-11 Check Digits & ARQ Timing",
    level: 3,
    guideRef: "check-digits-arq",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      if (tier === 1) {
        const d = [9, 7, rng.pick([8, 9])];
        for (let i = 3; i < 12; i++) d.push(rng.int(0, 9));
        let oddSum = 0;
        let evenSum = 0;
        for (let i = 0; i < 12; i++) {
          if (i % 2 === 0) oddSum += d[i];
          else evenSum += d[i];
        }
        const total = oddSum + 3 * evenSum;
        const rem = total % 10;
        const check = rem === 0 ? 0 : 10 - rem;
        const traps =
          rem !== 0 && rem !== check
            ? [
                {
                  spec: { type: "number" as const, value: rem },
                  feedback: `\`${rem}\` is \`Total MOD 10\` — remember to subtract from \`10\` (\`10 − ${rem} = ${check}\`)!`,
                },
              ]
            : rem === 0
              ? [
                  {
                    spec: { type: "number" as const, value: 10 },
                    feedback: `When \`Total MOD 10 = 0\`, the ISBN-13 check digit is **\`0\`** (never \`10\`)!`,
                  },
                ]
              : [];
        return {
          prompt: `Using the CIE **ISBN-13** check-digit rule (\`odd-position sum + 3 × even-position sum\`, remainder \`r = Total MOD 10\`, check digit = \`0\` if \`r = 0\` else \`10 − r\`), find the \`13\`th check digit for \`${d.join(" ")}\`.`,
          answer: { type: "number", value: check },
          traps,
          hint: `Odd positions (\`1,3,5,7,9,11\`) sum to \`${oddSum}\`; even positions (\`2,4,6,8,10,12\`) sum to \`${evenSum}\` (\`×3 = ${evenSum * 3}\`).`,
          solution: [
            `Odd-position sum = \`${oddSum}\`.`,
            `Even-position sum = \`${evenSum}\`; multiply by \`3\`: \`${evenSum} × 3 = ${evenSum * 3}\`.`,
            `Total = \`${oddSum} + ${evenSum * 3} = ${total}\`; \`${total} MOD 10 = ${rem}\`.`,
            `Check digit = ${rem === 0 ? "`0` (since remainder is 0)" : `\`10 − ${rem} = ${check}\``}.`,
          ],
        };
      }
      if (tier === 2) {
        let digits: number[] = [];
        let sum = 0;
        let rem = 1;
        while (rem === 1) {
          digits = [rng.int(1, 9), rng.int(0, 9), rng.int(0, 9), rng.int(0, 9)];
          sum = digits[0] * 5 + digits[1] * 4 + digits[2] * 3 + digits[3] * 2;
          rem = sum % 11;
        }
        const check = rem === 0 ? 0 : 11 - rem;
        return {
          prompt: `Calculate the **Modulo-11** check digit for the \`4\`-digit code \`${digits.join(" ")}\`: multiply from left to right by weights \`5, 4, 3, 2\`, sum the products, find \`r = Sum MOD 11\`, and output \`0\` if \`r = 0\` else \`11 − r\`.`,
          answer: { type: "number", value: check },
          traps:
            rem !== 0 && rem !== check
              ? [
                  {
                    spec: { type: "number", value: rem },
                    feedback: `\`${rem}\` is the remainder \`${sum} MOD 11\` — subtract it from \`11\` (\`11 − ${rem} = ${check}\`)!`,
                  },
                ]
              : [],
          hint: `Compute \`${digits[0]}×5 + ${digits[1]}×4 + ${digits[2]}×3 + ${digits[3]}×2 = ${sum}\`, then take \`${sum} MOD 11\`.`,
          solution: [
            `Weighted sum = \`${digits[0] * 5} + ${digits[1] * 4} + ${digits[2] * 3} + ${digits[3] * 2} = ${sum}\`.`,
            `\`${sum} MOD 11 = ${rem}\`.`,
            `Check digit = ${rem === 0 ? "`0`" : `\`11 − ${rem} = ${check}\``}.`,
          ],
        };
      }
      const oneWay = rng.pick([15, 20, 25, 30, 35, 40, 45] as const);
      const timeout = oneWay * 2 + rng.pick([20, 30, 40, 50] as const);
      const failedAttempts = rng.pick([1, 2] as const);
      const totalMs = failedAttempts * timeout + 2 * oneWay;
      return {
        prompt: `In an **ARQ** transfer, one-way travel takes \`${oneWay} ms\` in each direction (\`0 ms\` processing) and the sender's **timeout** is \`${timeout} ms\` from the start of each send. The first \`${failedAttempts}\` attempt(s) vanish in transit, and Attempt \`${failedAttempts + 1}\` (sent immediately when the previous timeout expires) succeeds with its positive ACK returning cleanly. Find the total elapsed time in \`ms\`.`,
        answer: { type: "number", value: totalMs },
        traps: [
          {
            spec: { type: "number", value: failedAttempts * timeout + oneWay },
            feedback: `Include the \`${oneWay} ms\` return journey for the final positive ACK to reach the sender!`,
          },
        ],
        hint: `Each vanished attempt costs a full \`${timeout} ms\` timeout wait, plus \`2 × ${oneWay} = ${2 * oneWay} ms\` for the final successful round trip.`,
        solution: [
          `Time spent on \`${failedAttempts}\` lost attempt(s) = \`${failedAttempts} × ${timeout} = ${failedAttempts * timeout} ms\`.`,
          `Successful attempt + returning positive ACK = \`${oneWay} + ${oneWay} = ${2 * oneWay} ms\`.`,
          `Total time = \`${failedAttempts * timeout} + ${2 * oneWay} = ${totalMs} ms\`.`,
        ],
      };
    },
  },
];
