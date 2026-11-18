import type { Drill } from "./types.ts";
import { clean, roundTo } from "./helpers.ts";

export const drills: Drill[] = [
  {
    id: "hardware-architecture.fde-trace",
    topicId: "hardware-architecture",
    title: "Von Neumann FDE Register & Bus Tracer",
    level: 1,
    guideRef: "von-neumann-fde",
    generate(rng, tier) {
      if (tier === 1) {
        const mode = rng.int(0, 1);
        if (mode === 0) {
          const pcStart = rng.int(100, 480);
          const opAddr = pcStart + rng.int(10, 40);
          const accStart = rng.int(5, 60);
          const val = rng.int(2, 45);
          const isAdd = rng.bool();
          const finalAcc = isAdd ? accStart + val : accStart - val;
          const instr = isAdd ? `ADD ${opAddr}` : `SUB ${opAddr}`;
          const askPc = rng.bool(0.35);
          if (askPc) {
            return {
              prompt: `At the start of an FDE cycle, \`PC = ${pcStart}\` and \`ACC = ${accStart}\`. RAM[\`${pcStart}\`] holds \`${instr}\` and RAM[\`${opAddr}\`] holds \`${val}\`. What integer address is stored in **\`PC\`** right after this single cycle completes?`,
              answer: { type: "number", value: pcStart + 1 },
              traps: [
                {
                  spec: { type: "number", value: opAddr },
                  feedback: `\`${opAddr}\` is the operand address placed in \`MAR\` during Execute — \`PC\` simply incremented by \`1\` to \`${pcStart + 1}\`!`,
                },
                {
                  spec: { type: "number", value: pcStart },
                  feedback: `Remember that \`PC\` increments by \`1\` during Fetch (\`${pcStart} + 1 = ${pcStart + 1}\`).`,
                },
              ],
              hint: "During Fetch, `PC` increments by `1` so it points to the next sequential instruction.",
              solution: [
                `\`PC\` starts at \`${pcStart}\`.`,
                `During Fetch, \`PC\` increments by \`1\` to **\`${pcStart + 1}\`** (there is no jump instruction).`,
              ],
            };
          }
          return {
            prompt: `At the start of an FDE cycle, \`PC = ${pcStart}\` and \`ACC = ${accStart}\`. RAM[\`${pcStart}\`] holds \`${instr}\` and RAM[\`${opAddr}\`] holds \`${val}\`. What integer value is stored in **\`ACC\`** after execution completes?`,
            answer: { type: "number", value: finalAcc },
            traps: [
              {
                spec: { type: "number", value: isAdd ? accStart + opAddr : accStart - opAddr },
                feedback: `Use the *data value* \`${val}\` stored inside RAM[\`${opAddr}\`], NOT the memory address \`${opAddr}\` itself!`,
              },
              {
                spec: { type: "number", value: isAdd ? accStart - val : accStart + val },
                feedback: `Check the opcode: \`${isAdd ? "ADD" : "SUB"}\` means ${isAdd ? "addition" : "subtraction"} (\`${accStart} ${isAdd ? "+" : "−"} ${val}\`).`,
              },
            ],
            hint: `Fetch \`${instr}\`, read the value \`${val}\` at address \`${opAddr}\`, and compute \`${accStart} ${isAdd ? "+" : "−"} ${val}\`.`,
            solution: [
              `Fetch loads \`${instr}\` from address \`${pcStart}\` into \`CIR\` (\`PC → ${pcStart + 1}\`).`,
              `Execute reads \`${val}\` from RAM[\`${opAddr}\`] via \`MAR\`/\`MDR\` and computes \`${accStart} ${isAdd ? "+" : "−"} ${val} = ${finalAcc}\` in \`ACC\`.`,
            ],
          };
        }
        // Address bus width in bytes or KiB
        const bits = rng.int(4, 15);
        if (bits >= 10) {
          const kib = 2 ** (bits - 10);
          return {
            prompt: `A microcontroller has a **\`${bits}\`-bit unidirectional Address Bus** (` +
              `\`1 byte\` per memory location). How many **KiB** of memory can it directly address? (Use CIE IEC \`1 KiB = 1024 bytes\`.)`,
            answer: { type: "number", value: kib },
            traps: [
              {
                spec: { type: "number", value: 2 ** bits },
                feedback: `\`${2 ** bits}\` is the number of *bytes* — divide by \`1024\` (\`2¹⁰\`) to convert to **KiB**!`,
              },
            ],
            hint: `Compute {{2^${bits} / 2^10}} = {{2^${bits - 10}}} KiB.`,
            solution: [
              `Total byte locations = {{2^${bits}}} = \`${2 ** bits}\` bytes.`,
              `Divide by \`1024\` bytes/KiB: \`${2 ** bits} ÷ 1024 = ${kib} KiB\`.`,
            ],
          };
        }
        const locs = 2 ** bits;
        return {
          prompt: `A tiny CPU test circuit has a **\`${bits}\`-bit unidirectional Address Bus**. How many distinct memory locations can it directly address? Give your answer as a single integer.`,
          answer: { type: "number", value: locs },
          traps: [
            {
              spec: { type: "number", value: bits * 2 },
              feedback: `Addressable locations equal {{2^${bits}}}, NOT \`2 × ${bits}\`!`,
            },
          ],
          hint: `An \`n\`-bit Address Bus addresses {{2^n}} unique binary locations.`,
          solution: [
            `With \`${bits}\` address wires, total locations = {{2^${bits}}} = **\`${locs}\`**.`,
          ],
        };
      }

      if (tier === 2) {
        // 2-cycle trace or MAR/MDR state at end of Execute
        const pc0 = rng.int(200, 600);
        const a1 = pc0 + rng.int(10, 30);
        const a2 = a1 + rng.int(1, 15);
        const v1 = rng.int(10, 50);
        const v2 = rng.int(3, 35);
        const isAdd = rng.bool();
        const finalAcc = isAdd ? v1 + v2 : v1 - v2;
        const askReg = rng.pick(["ACC", "MAR", "MDR", "PC"] as const);
        const expected =
          askReg === "ACC" ? finalAcc : askReg === "MAR" ? a2 : askReg === "MDR" ? v2 : pc0 + 2;
        return {
          prompt:
            `Trace **two** FDE cycles starting with \`PC = ${pc0}\` and \`ACC = 99\`:\n` +
            `- RAM[\`${pc0}\`]: \`LOAD ${a1}\` (overwrite \`ACC\` with value at \`${a1}\`)\n` +
            `- RAM[\`${pc0 + 1}\`]: \`${isAdd ? "ADD" : "SUB"} ${a2}\`\n` +
            `- RAM[\`${a1}\`]: \`${v1}\`, RAM[\`${a2}\`]: \`${v2}\`\n\n` +
            `What integer value is inside **\`${askReg}\`** right after **both** cycles complete?`,
          answer: { type: "number", value: expected },
          traps:
            askReg === "ACC"
              ? [
                  {
                    spec: { type: "number", value: 99 + (isAdd ? v1 + v2 : v1 - v2) },
                    feedback: `\`LOAD ${a1}\` *replaces* \`99\` in \`ACC\` with \`${v1}\` (it does NOT add to \`99\`)!`,
                  },
                ]
              : askReg === "MAR"
                ? [
                    {
                      spec: { type: "number", value: pc0 + 1 },
                      feedback: `\`${pc0 + 1}\` was in \`MAR\` during Cycle 2's *Fetch*, then \`MAR\` was updated to operand address \`${a2}\` during *Execute*!`,
                    },
                  ]
                : [],
          hint:
            `Cycle 1 sets \`ACC = ${v1}\`, \`PC = ${pc0 + 1}\`. Cycle 2 fetches \`${isAdd ? "ADD" : "SUB"} ${a2}\` (\`PC → ${pc0 + 2}\`), puts \`${a2}\` in \`MAR\`, reads \`${v2}\` into \`MDR\`, and updates \`ACC\`.`,
          solution: [
            `Cycle 1 (\`LOAD ${a1}\`): \`PC → ${pc0 + 1}\`, \`ACC ← ${v1}\` (overwriting \`99\`).`,
            `Cycle 2 (\`${isAdd ? "ADD" : "SUB"} ${a2}\`): Fetch increments \`PC → ${pc0 + 2}\`; Execute places \`${a2}\` in \`MAR\`, reads \`${v2}\` into \`MDR\`, and sets \`ACC ← ${v1} ${isAdd ? "+" : "−"} ${v2} = ${finalAcc}\`.`,
            `Final \`${askReg} = ${expected}\`.`,
          ],
        };
      }

      // Tier 3: 3-cycle trace with STORE overwriting a RAM location OR word-addressed bus capacity in MiB
      if (rng.bool(0.65)) {
        const pc0 = rng.int(50, 300);
        const a1 = pc0 + rng.int(15, 40);
        const a2 = a1 + rng.int(2, 12);
        const acc0 = rng.int(4, 25);
        const v1 = rng.int(6, 30);
        const stale = rng.int(50, 95);
        const mid = acc0 + v1;
        const finalAcc = mid + mid;
        return {
          prompt:
            `Trace **three** FDE cycles starting with \`PC = ${pc0}\` and \`ACC = ${acc0}\`:\n` +
            `- \`${pc0}\`: \`ADD ${a1}\` | \`${pc0 + 1}\`: \`STORE ${a2}\` | \`${pc0 + 2}\`: \`ADD ${a2}\`\n` +
            `- Initially RAM[\`${a1}\`] = \`${v1}\` and RAM[\`${a2}\`] = \`${stale}\`\n\n` +
            `What integer is in **\`ACC\`** after all **three** cycles finish?`,
          answer: { type: "number", value: finalAcc },
          traps: [
            {
              spec: { type: "number", value: mid + stale },
              feedback: `Watch Cycle 2 (\`STORE ${a2}\`)! It overwrote the old \`${stale}\` in RAM[\`${a2}\`] with \`${mid}\`, so Cycle 3 adds \`${mid} + ${mid} = ${finalAcc}\`!`,
            },
          ],
          hint: `Cycle 1 gives \`ACC = ${mid}\`. Cycle 2 writes \`${mid}\` into RAM[\`${a2}\`] (replacing \`${stale}\`). Cycle 3 adds RAM[\`${a2}\`] to \`ACC\`.`,
          solution: [
            `Cycle 1 (\`ADD ${a1}\`): \`ACC ← ${acc0} + ${v1} = ${mid}\`.`,
            `Cycle 2 (\`STORE ${a2}\`): RAM[\`${a2}\`] \`← ${mid}\` (overwriting \`${stale}\`).`,
            `Cycle 3 (\`ADD ${a2}\`): \`ACC ← ${mid} + ${mid} = ${finalAcc}\`.`,
          ],
        };
      }
      const addrBits = rng.int(20, 25);
      const dataBytes = rng.pick([1, 2, 4, 8] as const);
      const dataBits = dataBytes * 8;
      const mib = clean(2 ** (addrBits - 20) * dataBytes);
      return {
        prompt:
          `A processor has a **\`${addrBits}\`-bit Address Bus** and a **\`${dataBits}\`-bit Data Bus**, where each addressable location stores one full **\`${dataBits}\`-bit word** (\`${dataBytes} byte${dataBytes > 1 ? "s" : ""}\`). What is the maximum directly addressable memory in **MiB**? (\`1 MiB = 2²⁰ bytes\`.)`,
        answer: { type: "number", value: mib },
        traps:
          dataBytes > 1
            ? [
                {
                  spec: { type: "number", value: 2 ** (addrBits - 20) },
                  feedback: `Each of the {{2^${addrBits}}} locations holds **\`${dataBytes} bytes\`**, so multiply \`${2 ** (addrBits - 20)} MiB\` by \`${dataBytes}\`!`,
                },
              ]
            : [],
        hint: `Locations = {{2^${addrBits}}}. Multiply by \`${dataBytes}\` bytes/location, then divide by {{2^20}} bytes/MiB.`,
        solution: [
          `Total bytes = {{2^${addrBits}}} \`× ${dataBytes}\` bytes.`,
          `Divide by \`1 MiB =\` {{2^20}} bytes: {{2^${addrBits - 20}}} \`× ${dataBytes} = ${mib} MiB\`.`,
        ],
      };
    },
  },
  {
    id: "hardware-architecture.sensors-io",
    topicId: "hardware-architecture",
    title: "Sensors, ADC Resolution & Control Loops",
    level: 2,
    guideRef: "input-output-sensors",
    generate(rng, tier) {
      const scenarios = [
        {
          place: "automated tomato greenhouse",
          qty: "water content inside the soil",
          sensor: "moisture",
          wrong: "humidity",
          wrongWhy: "Humidity measures water vapour in *air*; soil dampness uses a **moisture** sensor!",
          unit: "%",
          minVal: 25,
          maxVal: 65,
        },
        {
          place: "tropical orchid conservatory",
          qty: "water vapour percentage in the air",
          sensor: "humidity",
          wrong: "moisture",
          wrongWhy: "Moisture measures water in *soil*; airborne water vapour uses a **humidity** sensor!",
          unit: "%",
          minVal: 55,
          maxVal: 85,
        },
        {
          place: "pharmaceutical fermentation vat",
          qty: "acidity / alkalinity of the liquid",
          sensor: "pH",
          wrong: "chemical",
          wrongWhy: "'Chemical sensor' is not accepted on CIE 0478 — acidity/alkalinity requires a **pH** sensor!",
          unit: "pH",
          minVal: 6,
          maxVal: 8,
        },
        {
          place: "underground water main",
          qty: "rate of liquid moving per minute through the pipe",
          sensor: "flow",
          wrong: "level",
          wrongWhy: "A level sensor measures tank height, whereas moving liquid rate uses a **flow** sensor!",
          unit: "L/min",
          minVal: 40,
          maxVal: 120,
        },
        {
          place: "hospital neonatal incubator",
          qty: "oxygen concentration inside the chamber",
          sensor: "gas",
          wrong: "air",
          wrongWhy: "'Air sensor' scores 0 on CIE 0478 — oxygen/CO₂ levels use a **gas** sensor!",
          unit: "%",
          minVal: 21,
          maxVal: 35,
        },
        {
          place: "chemical storage tank",
          qty: "height of liquid remaining in the tank",
          sensor: "level",
          wrong: "flow",
          wrongWhy: "Flow measures moving rate in a pipe; liquid height in a tank uses a **level** sensor!",
          unit: "cm",
          minVal: 30,
          maxVal: 180,
        },
        {
          place: "automatic street lighting pole",
          qty: "ambient brightness at dusk",
          sensor: "light",
          wrong: "solar",
          wrongWhy: "Use the standard CIE 0478 name: **light** sensor!",
          unit: "lux",
          minVal: 40,
          maxVal: 90,
        },
        {
          place: "industrial boiler pipe",
          qty: "internal steam force per unit area",
          sensor: "pressure",
          wrong: "temperature",
          wrongWhy: "Force per unit area on pipe walls is measured by a **pressure** sensor!",
          unit: "kPa",
          minVal: 110,
          maxVal: 240,
        },
      ] as const;

      if (tier === 1) {
        const sc = rng.pick(scenarios);
        const reading = rng.int(10, 200);
        return {
          prompt:
            `At this facility (**${sc.place}**, current reading \`${reading} ${sc.unit}\`), which official CIE 0478 sensor measures the **${sc.qty}**? Give the exact sensor type (e.g. \`moisture\`, \`humidity\`, \`pH\`, \`flow\`, \`level\`, \`gas\`, \`light\`, \`pressure\`).`,
          answer: {
            type: "text",
            accept: [sc.sensor, `${sc.sensor} sensor`],
            display: `${sc.sensor} sensor`,
          },
          traps: [
            {
              spec: { type: "text", accept: [sc.wrong, `${sc.wrong} sensor`] },
              feedback: sc.wrongWhy,
            },
          ],
          hint: `Match "${sc.qty}" to the official CIE 0478 sensor list.`,
          solution: [
            `Measuring **${sc.qty}** in a ${sc.place} requires a **${sc.sensor} sensor**.`,
          ],
        };
      }

      if (tier === 2) {
        // ADC bit-resolution discrete levels OR Monitoring vs Control classification with numeric readings
        if (rng.bool()) {
          const bits = rng.int(4, 12);
          const vMax = rng.pick([5, 10, 12, 24] as const);
          const levels = 2 ** bits;
          return {
            prompt:
              `A temperature sensor outputs \`0 V\` to \`${vMax} V\` into a **\`${bits}\`-bit ADC** for a microprocessor. How many distinct digital binary values (quantisation levels, including \`0\`) can this \`${bits}\`-bit ADC represent? Give your answer as a single integer.`,
            answer: { type: "number", value: levels },
            traps: [
              {
                spec: { type: "number", value: levels - 1 },
                feedback: `\`${levels - 1}\` is the *maximum value* starting from \`0\` — including \`0\`, there are {{2^${bits}}} = \`${levels}\` distinct digital values!`,
              },
              {
                spec: { type: "number", value: bits * vMax },
                feedback: `The number of discrete binary combinations from a \`${bits}\`-bit ADC is {{2^${bits}}}, independent of \`${vMax} V\`!`,
              },
            ],
            hint: `A \`b\`-bit binary converter produces {{2^b}} distinct digital patterns (from \`0\` up to {{2^b - 1}}).`,
            solution: [
              `Each bit doubles the number of binary patterns: {{2^${bits}}} = **\`${levels}\`** distinct digital values.`,
            ],
          };
        }
        const sc = rng.pick(scenarios);
        const isControl = rng.bool();
        const preset = rng.int(sc.minVal, sc.maxVal);
        const actionText = isControl
          ? `automatically signals an **actuator** (valve/motor) whenever the reading crosses \`${preset} ${sc.unit}\`, physically adjusting the ${sc.place}`
          : `logs readings every \`${rng.int(2, 15)}\` seconds and flashes a red screen warning if it crosses \`${preset} ${sc.unit}\`, with **no actuators** attached`;
        return {
          prompt:
            `A microprocessor system at a facility (**${sc.place}**) uses a ${sc.sensor} sensor + ADC and ${actionText}. Is this a \`monitoring\` system or a \`control\` system? Type \`monitoring\` or \`control\`.`,
          answer: {
            type: "text",
            accept: isControl ? ["control", "control system"] : ["monitoring", "monitoring system"],
            display: isControl ? "control" : "monitoring",
          },
          traps: [
            {
              spec: {
                type: "text",
                accept: isControl ? ["monitoring", "monitoring system"] : ["control", "control system"],
              },
              feedback: isControl
                ? "Because an **actuator** physically alters the environment (affecting the next sensor reading), it is a **control** system!"
                : "Warnings/screens do NOT physically alter the measured variable — with **no environment-changing actuator**, it is **monitoring**!",
            },
          ],
          hint: "Ask: does an **actuator** physically alter the environment so the output changes the next sensor reading?",
          solution: [
            isControl
              ? "Because microprocessor output drives an **actuator** in a closed **feedback loop** that alters future readings, this is a **control** system."
              : "Because the microprocessor only logs/warns with **no actuators** changing the physical variable, this is a **monitoring** system.",
          ],
        };
      }

      // Tier 3: Hysteresis dual-threshold control trace over 3 sensor readings — count how many readings keep the actuator ON
      const low = rng.int(16, 22);
      const high = low + rng.int(3, 6);
      const r1 = low - rng.int(1, 4); // < low => turns ON (1)
      const r2 = rng.bool() ? low + 1 : high + rng.int(1, 3); // if low+1 (between low and high) => stays ON! if > high => turns OFF!
      const stateAfter2 = r2 <= high;
      const r3 = rng.bool() ? low + 1 : stateAfter2 ? high + 2 : low - 2;
      const on1 = true;
      const on2 = r2 <= high;
      const on3 = r3 < low ? true : r3 > high ? false : on2;
      const totalOn = (on1 ? 1 : 0) + (on2 ? 1 : 0) + (on3 ? 1 : 0);
      return {
        prompt:
          `A greenhouse heater actuator starts **OFF** and uses two preset thresholds to prevent rapid switching:\n` +
          `- Switch heater **ON** when temperature \`< ${low} °C\`\n` +
          `- Switch heater **OFF** when temperature \`> ${high} °C\`\n` +
          `- Leave heater **unchanged** when \`${low} °C ≤ temperature ≤ ${high} °C\`\n\n` +
          `Across three consecutive ADC readings — **\`${r1} °C\`**, then **\`${r2} °C\`**, then **\`${r3} °C\`** — after how many of those three checks (` +
          `\`0\`, \`1\`, \`2\`, or \`3\`) is the heater **ON**?`,
        answer: { type: "number", value: totalOn },
        hint: `Trace carefully: when a reading lands *between* \`${low}\` and \`${high}\` inclusive, the heater keeps whatever state (\`ON\` or \`OFF\`) it had on the previous step!`,
        solution: [
          `Reading 1 (\`${r1} °C < ${low} °C\`): heater switches **ON**.`,
          `Reading 2 (\`${r2} °C\`): ${r2 > high ? `\`> ${high} °C\`, so heater switches **OFF**` : `inside \`[${low}, ${high}]\`, so heater stays **ON**`}.`,
          `Reading 3 (\`${r3} °C\`): ${r3 < low ? `\`< ${low} °C\`, heater **ON**` : r3 > high ? `\`> ${high} °C\`, heater **OFF**` : `inside \`[${low}, ${high}]\`, stays **${on2 ? "ON" : "OFF"}**`}.`,
          `Total checks ending with heater ON = **\`${totalOn}\`**.`,
        ],
      };
    },
  },
  {
    id: "hardware-architecture.storage-calc",
    topicId: "hardware-architecture",
    title: "IEC Storage Capacity & Media Sizing",
    level: 2,
    guideRef: "primary-secondary-storage",
    generate(rng, tier) {
      if (tier === 1) {
        // Clean power-of-2 files in KiB -> MiB or MiB -> GiB
        const unitPair = rng.pick([
          { small: "KiB", big: "MiB" },
          { small: "MiB", big: "GiB" },
          { small: "GiB", big: "TiB" },
        ] as const);
        const fileExp = rng.int(4, 9); // 16 .. 512
        const countExp = rng.int(11 - fileExp, 14 - fileExp);
        const fileSize = 2 ** fileExp;
        const count = 2 ** countExp;
        const ans = 2 ** (fileExp + countExp - 10);
        const trap1000 = roundTo((count * fileSize) / 1000, 3);
        return {
          prompt:
            `A user saves **\`${count}\`** files onto an SSD, each **\`${fileSize} ${unitPair.small}\`** in size. What is the exact total storage used in **${unitPair.big}**? (Use CIE IEC \`1 ${unitPair.big} = 1024 ${unitPair.small}\`.) Give your answer as a single integer.`,
          answer: { type: "number", value: ans },
          traps:
            trap1000 !== ans
              ? [
                  {
                    spec: { type: "number", value: trap1000 },
                    feedback: `CIE Trap! Divide by **\`1024\`** for \`${unitPair.big}\`, never by \`1000\`!`,
                  },
                  {
                    spec: { type: "number", value: count * fileSize },
                    feedback: `\`${count * fileSize}\` is the total in **${unitPair.small}** — divide by \`1024\` to convert to **${unitPair.big}**!`,
                  },
                ]
              : [],
          hint: `Multiply \`${count} × ${fileSize}\` in ${unitPair.small}, then divide by \`1024\` (use powers of 2: \`${count} = 2^${countExp}\`, \`${fileSize} = 2^${fileExp}\`, \`1024 = 2^10\`).`,
          solution: [
            `Total in ${unitPair.small} = \`${count} × ${fileSize} = ${count * fileSize} ${unitPair.small}\`.`,
            `Divide by \`1024\`: \`${count * fileSize} ÷ 1024 = ${ans} ${unitPair.big}\`.`,
          ],
        };
      }

      if (tier === 2) {
        // How many files fit on a drive OR remaining free space in GiB
        const driveGiB = rng.pick([4, 8, 16, 32, 64, 128] as const);
        const fileMiB = rng.pick([16, 32, 64, 128, 256, 512] as const);
        if (rng.bool()) {
          const maxFiles = (driveGiB * 1024) / fileMiB;
          const trap1000 = Math.floor((driveGiB * 1000) / fileMiB);
          return {
            prompt:
              `How many **\`${fileMiB} MiB\`** uncompressed audio recordings can be stored on an empty **\`${driveGiB} GiB\`** solid-state USB flash drive? (\`1 GiB = 1024 MiB\`.) Give your answer as a single integer.`,
            answer: { type: "number", value: maxFiles },
            traps:
              trap1000 !== maxFiles
                ? [
                    {
                      spec: { type: "number", value: trap1000 },
                      feedback: `Convert \`${driveGiB} GiB\` using \`× 1024\` (\`${driveGiB * 1024} MiB\`), NOT \`× 1000\`!`,
                    },
                  ]
                : [],
            hint: `Convert \`${driveGiB} GiB\` into \`MiB\` (\`${driveGiB} × 1024\`), then divide by \`${fileMiB} MiB\`.`,
            solution: [
              `Drive capacity = \`${driveGiB} × 1024 = ${driveGiB * 1024} MiB\`.`,
              `Number of files = \`${driveGiB * 1024} ÷ ${fileMiB} = ${maxFiles}\`.`,
            ],
          };
        }
        const usedFiles = rng.int(1, Math.min(12, Math.floor((driveGiB * 1024) / (fileMiB * 4)))) * 4;
        const usedGiB = clean((usedFiles * fileMiB) / 1024);
        const freeGiB = clean(driveGiB - usedGiB);
        return {
          prompt:
            `An empty **\`${driveGiB} GiB\`** SD card stores **\`${usedFiles}\`** video clips of **\`${fileMiB} MiB\`** each. How many **GiB of free space** remain on the SD card? (\`1 GiB = 1024 MiB\`.)`,
          answer: { type: "number", value: freeGiB },
          traps:
            usedGiB !== freeGiB
              ? [
                  {
                    spec: { type: "number", value: usedGiB },
                    feedback: `\`${usedGiB} GiB\` is the space *used* — subtract from \`${driveGiB} GiB\` to find the **free space remaining**!`,
                  },
                ]
              : [],
          hint: `Calculate used space in GiB: \`(${usedFiles} × ${fileMiB}) ÷ 1024\`, then subtract from \`${driveGiB} GiB\`.`,
          solution: [
            `Used space = \`(${usedFiles} × ${fileMiB} MiB) ÷ 1024 = ${usedGiB} GiB\`.`,
            `Remaining free space = \`${driveGiB} − ${usedGiB} = ${freeGiB} GiB\`.`,
          ],
        };
      }

      // Tier 3: Minimum optical/USB media count (ceiling division) combining two file types
      const media = rng.pick([
        { name: "single-layer 25 GiB Blu-ray discs", capGiB: 25 },
        { name: "dual-layer 50 GiB Blu-ray discs", capGiB: 50 },
        { name: "16 GiB USB flash drives", capGiB: 16 },
        { name: "32 GiB SD cards", capGiB: 32 },
      ] as const);
      const c1 = rng.pick([16, 32, 64, 128] as const);
      const s1 = rng.pick([256, 512] as const); // MiB
      const c2 = rng.pick([256, 512, 1024] as const);
      const s2 = rng.pick([8, 16, 32] as const); // MiB
      const g1 = (c1 * s1) / 1024;
      const g2 = (c2 * s2) / 1024;
      const totalGiB = g1 + g2;
      const discs = Math.ceil(totalGiB / media.capGiB);
      return {
        prompt:
          `An archive backs up **\`${c1}\`** project videos (\`${s1} MiB\` each) plus **\`${c2}\`** RAW images (\`${s2} MiB\` each) onto **${media.name}**. What is the **minimum whole number** of ${media.name} required? (\`1 GiB = 1024 MiB\`.)`,
        answer: { type: "number", value: discs },
        traps:
          totalGiB % media.capGiB !== 0 && discs > 1
            ? [
                {
                  spec: { type: "number", value: discs - 1 },
                  feedback: `\`${discs - 1}\` × \`${media.capGiB} GiB = ${(discs - 1) * media.capGiB} GiB\`, which is not enough for \`${totalGiB} GiB\` — always round UP to whole media!`,
                },
                {
                  spec: { type: "number", value: totalGiB },
                  feedback: `\`${totalGiB}\` is the total size in **GiB** — divide by \`${media.capGiB} GiB\` and round up!`,
                },
              ]
            : [],
        hint: `Convert videos (\`${c1} × ${s1} ÷ 1024\`) and images (\`${c2} × ${s2} ÷ 1024\`) to GiB, sum them, divide by \`${media.capGiB} GiB\`, and round **up**!`,
        solution: [
          `Videos = \`(${c1} × ${s1}) ÷ 1024 = ${g1} GiB\`; Images = \`(${c2} × ${s2}) ÷ 1024 = ${g2} GiB\`.`,
          `Total = \`${g1} + ${g2} = ${totalGiB} GiB\`.`,
          `\`${totalGiB} ÷ ${media.capGiB} = ${roundTo(totalGiB / media.capGiB, 2)}\` → requires **\`${discs}\`** whole ${media.name}.`,
        ],
      };
    },
  },
  {
    id: "hardware-architecture.network-vm",
    topicId: "hardware-architecture",
    title: "Virtual Memory Paging & MAC / IPv4 / IPv6 Inspector",
    level: 3,
    guideRef: "virtual-cloud-networking",
    generate(rng, tier) {
      const hexChar = () => rng.pick(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"] as const);
      const hexPair = () => `${hexChar()}${hexChar()}`;
      const hexQuad = () => `${hexPair()}${hexPair()}`;

      if (tier === 1) {
        const kind = rng.int(0, 2);
        if (kind === 0) {
          const mac = `${hexPair()}:${hexPair()}:${hexPair()}:${hexPair()}:${hexPair()}:${hexPair()}`;
          const askMfg = rng.bool();
          return {
            prompt:
              `Inspect the NIC address \`${mac}\`. How many **bits** make up ${askMfg ? "strictly the **Manufacturer ID** (first half)" : "the **entire MAC address**"}? Give your answer as a single integer.`,
            answer: { type: "number", value: askMfg ? 24 : 48 },
            traps: [
              {
                spec: { type: "number", value: askMfg ? 48 : 24 },
                feedback: askMfg
                  ? "`48` bits is the *entire* MAC address — the Manufacturer ID is the **first half** (`24` bits)!"
                  : "`24` bits is only half the MAC address — all `6` hex pairs total `48` bits!",
              },
              {
                spec: { type: "number", value: askMfg ? 6 : 12 },
                feedback: `Multiply hexadecimal digits by \`4\` bits per hex digit!`,
              },
            ],
            hint: `Each hex digit = \`4\` bits (\`1\` hex pair = \`8\` bits). ${askMfg ? "Count the first 3 pairs (`3 × 8`)." : "Count all 6 pairs (`6 × 8`)."}`,
            solution: [
              askMfg
                ? `The first \`3\` hex pairs (\`6\` hex digits) identify the manufacturer: \`6 × 4 = 24\` bits.`
                : `All \`6\` hex pairs (\`12\` hex digits) total \`12 × 4 = 48\` bits.`,
            ],
          };
        }
        if (kind === 1) {
          const ip = `${rng.int(10, 223)}.${rng.int(0, 255)}.${rng.int(0, 255)}.${rng.int(1, 254)}`;
          return {
            prompt: `How many **bits** are used to store the IPv4 address \`${ip}\`? Give your answer as a single integer.`,
            answer: { type: "number", value: 32 },
            traps: [
              { spec: { type: "number", value: 48 }, feedback: "`48` bits is a MAC address! IPv4 uses `4 × 8 = 32` bits." },
              { spec: { type: "number", value: 128 }, feedback: "`128` bits is IPv6! IPv4 uses `32` bits." },
            ],
            hint: "An IPv4 address has `4` octets of `8` bits each (`4 × 8`).",
            solution: ["4 denary octets × 8 bits per octet = **32** bits."],
          };
        }
        const ipv6 = `${hexQuad()}:${hexQuad()}:0000:0000:${hexQuad()}:${hexQuad()}:${hexQuad()}:${hexQuad()}`;
        return {
          prompt: `How many **bits** are used to store the IPv6 address \`${ipv6}\`? Give your answer as a single integer.`,
          answer: { type: "number", value: 128 },
          traps: [
            { spec: { type: "number", value: 32 }, feedback: "`32` bits is IPv4 (`32` hex digits in IPv6 × `4` bits each = `128` bits)!" },
            { spec: { type: "number", value: 48 }, feedback: "`48` bits is a MAC address! IPv6 has `8` groups × `16` bits = `128` bits." },
          ],
          hint: "`8` groups × `4` hex digits × `4` bits per hex digit.",
          solution: ["`8 × 4 = 32` hexadecimal digits; `32 × 4 bits =` **128** bits."],
        };
      }

      if (tier === 2) {
        // Virtual memory GiB swapped OR spotting invalid IPv4 octet
        if (rng.bool()) {
          const ramGiB = rng.pick([4, 8, 16] as const);
          const osGiB = rng.pick([1.5, 2, 2.5, 3] as const);
          const appsGiB = ramGiB - osGiB + rng.pick([1.5, 2, 2.5, 3, 4, 5] as const);
          const swapGiB = clean(osGiB + appsGiB - ramGiB);
          return {
            prompt:
              `A laptop has **\`${ramGiB} GiB\` of physical RAM**. The active OS uses \`${osGiB} GiB\` and open applications require \`${appsGiB} GiB\`. At minimum, how many **GiB** of inactive data must the OS move into **virtual memory swap space** on the SSD?`,
            answer: { type: "number", value: swapGiB },
            traps: [
              {
                spec: { type: "number", value: clean(osGiB + appsGiB) },
                feedback: `\`${clean(osGiB + appsGiB)} GiB\` is the *total* memory demand — subtract the \`${ramGiB} GiB\` that fits inside physical RAM!`,
              },
            ],
            hint: `Total memory required = \`${osGiB} + ${appsGiB}\` GiB; subtract physical RAM (\`${ramGiB} GiB\`).`,
            solution: [
              `Total memory demanded = \`${osGiB} + ${appsGiB} = ${clean(osGiB + appsGiB)} GiB\`.`,
              `Minimum overflow swapped to SSD virtual memory = \`${clean(osGiB + appsGiB)} − ${ramGiB} = ${swapGiB} GiB\`.`,
            ],
          };
        }
        const badIdx = rng.int(0, 3);
        const badVal = rng.int(256, 399);
        const octs = [rng.int(10, 223), rng.int(0, 250), rng.int(0, 250), rng.int(1, 254)];
        octs[badIdx] = badVal;
        return {
          prompt:
            `A student types the IPv4 address \`${octs.join(".")}\`, which is rejected as **invalid**. Write down the **exact invalid number** inside that address that violates the 8-bit octet limit.`,
          answer: { type: "number", value: badVal },
          traps: [
            {
              spec: { type: "number", value: 255 },
              feedback: "`255` is the maximum *valid* value — enter the specific invalid octet from the address!",
            },
          ],
          hint: "Every IPv4 octet must be between `0` and `255` inclusive (`8` bits). Which octet exceeds `255`?",
          solution: [
            `Each 8-bit IPv4 octet can only hold \`0\` to \`255\`.`,
            `The number **\`${badVal}\`** exceeds \`255\`, making the IPv4 address invalid.`,
          ],
        };
      }

      // Tier 3: Virtual memory exact page-count calculation with IEC 1024
      const ramGiB = rng.pick([8, 16, 32] as const);
      const freeGiB = rng.pick([0.5, 1, 1.5, 2] as const);
      const usedGiB = clean(ramGiB - freeGiB);
      const newAppGiB = freeGiB + rng.pick([1, 2, 3, 4] as const);
      const pageMiB = rng.pick([4, 8, 16] as const);
      const neededGiB = clean(newAppGiB - freeGiB);
      const pages = (neededGiB * 1024) / pageMiB;
      const trap1000 = (neededGiB * 1000) / pageMiB;
      return {
        prompt:
          `A workstation has **\`${ramGiB} GiB\`** of RAM, with **\`${usedGiB} GiB\`** already occupied (` +
          `\`${freeGiB} GiB\` free). Opening a 3D simulation requires **\`${newAppGiB} GiB\`** in physical RAM, and each virtual-memory page is **\`${pageMiB} MiB\`**. What is the **minimum number of \`${pageMiB} MiB\` inactive pages** that must be swapped out to SSD virtual memory? (\`1 GiB = 1024 MiB\`.)`,
        answer: { type: "number", value: pages },
        traps: [
          ...(Number.isInteger(trap1000) && trap1000 !== pages
            ? [
                {
                  spec: { type: "number" as const, value: trap1000 },
                  feedback: `Use CIE IEC \`1 GiB = 1024 MiB\` (\`${neededGiB} × 1024 ÷ ${pageMiB} = ${pages}\`), NOT \`1000\`!`,
                },
              ]
            : []),
          {
            spec: { type: "number", value: (newAppGiB * 1024) / pageMiB },
            feedback: `\`${freeGiB} GiB\` of RAM was already free! Only \`${newAppGiB} − ${freeGiB} = ${neededGiB} GiB\` needs to be swapped out.`,
          },
        ],
        hint: `First subtract already-free RAM: \`${newAppGiB} − ${freeGiB} = ${neededGiB} GiB\` must be freed. Convert to MiB (\`× 1024\`) and divide by \`${pageMiB} MiB\`.`,
        solution: [
          `Free RAM available = \`${ramGiB} − ${usedGiB} = ${freeGiB} GiB\`.`,
          `Extra RAM to free via paging = \`${newAppGiB} − ${freeGiB} = ${neededGiB} GiB = ${neededGiB * 1024} MiB\`.`,
          `Pages swapped out = \`${neededGiB * 1024} ÷ ${pageMiB} = ${pages}\` pages.`,
        ],
      };
    },
  },
];
