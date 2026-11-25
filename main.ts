// The Long Roast: Lawmakers and the File They Cannot Convert
// make.fun entry — program/v1, Node 22, standard library only.
// Writes one satirical sentence to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "He chairs the committee writing the rules for artificial intelligence and still forwards Word files to his staff with the subject line 'please make PDF'.";

// The gate allows 1 to 320 Unicode code points; this line is 153.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 320) {
  throw new Error(`entry is ${codePoints} code points, outside the 1-320 gate`);
}

// /output is a mount point in the grader: create it if missing, never delete it.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
