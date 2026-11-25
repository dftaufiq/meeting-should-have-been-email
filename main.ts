// The Meeting That Should Have Been an Email — make.fun entry.
// One line of plain text (max 200 chars), a joke about a meeting that should
// have been an email. The program writes it to /output/entry.txt, where the
// sealed scorer gates it (UTF-8, 1-200 chars) and the judge compares it
// pairwise. No secrets, no network, no input: the line is the whole entry.
import { mkdirSync, writeFileSync } from "node:fs";

// 2-beat + reveal in the final clause: attendance collapses 9 -> 3 -> 2,
// then the follow-up email's quoted claim lands as the last words.
const LINE =
  "Nine people were invited, three showed up, two left early — and the follow-up email still says 'full team alignment achieved.'";

mkdirSync("/output", { recursive: true });
// No trailing newline: the gate counts every character (1-200), so the file
// holds exactly the line, nothing else.
const text = LINE.replace(/\s+$/, "");
if (text.length < 1 || text.length > 200) throw new Error(`line is ${text.length} chars, gate needs 1-200`);
writeFileSync("/output/entry.txt", text, "utf8");
