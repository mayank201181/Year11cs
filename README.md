# Year 11 Cambridge IGCSE Computer Science (`0478`) — Vanishree's Hub

Interactive zero-login study guide, exam marks-saver vault, procedural skill drill engine, mock exam hub, and narrated animated sitcom season for **Cambridge IGCSE Computer Science (`0478`)** at Tanglin Trust School.

## Features
- **Zero-Login Open Access + Automatic iPad `localStorage` Persistence** (`y11cs.*`, default learner `"Vanishree"`).
- **Persistent Bottom Navigation Dock** across mobile, iPad, and desktop (`Home · Topics · Watch · Sitcom · Daily 5 · Review · Progress`).
- **8 Complete CIE `0478` Topics**:
  - *Paper 1 — Computer Systems*: `number-systems`, `data-media-compression`, `data-transmission`, `hardware-architecture`, `software-security-ai`
  - *Paper 2 — Algorithms, Programming & Logic*: `logic-gates`, `algorithms-testing`, `python-arrays-sql`
- **🎯 CIE 0478 Exam Traps, Pseudocode & SQL Vault (`/formulas`)**: *"Never Write This ❌ → Write This Instead ✅"* mark-scheme phrasing, Examiner Warnings, Official CIE Pseudocode vs Python rules, and SQL cheat-sheet.
- **Interactive Explorables (`components/widgets/`)**: 8-bit Binary/Hex/Two's Complement bit-flipper, Image/Sound file-size calculator, Packet/Parity simulator, Von Neumann FDE register stepper, Cyber/Encryption lab, Interactive Logic Circuit & Truth-Table builder, Bubble-Sort & Trace-Table stepper, and Live SQL Query sandbox.
- **Procedural Skill Drills (`lib/drills/`) & 60s Fluency Sprint (`/sprint`)** across 3 difficulty tiers.
- **4 Full Non-Calculator Mock Papers (`lib/exam/`)**: 2 Paper 1 + 2 Paper 2 cross-topic mocks.
- **8 Narrated Animated Sitcom Episodes (`public/videos/*.mp4`)**: *Totally Raotional: Runtime Error* with Examiner Mark-Scheme Trap roasts and 3 pause challenges per episode.

## Scripts
```bash
npm run gen        # regenerate content, drill, exam & widget registries
npm run validate   # validate all 8 topics, 200-seed drills & 4 mock exam papers
npm test           # run grader, sprint, learning, content & sync unit tests
npm run lint       # ESLint check
npm run build      # Next.js 16 production build
```
