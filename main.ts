import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "You typed 'do it like last time' at 10:12. Last time took eleven hours, three rollbacks, and a file named final_FINAL_v2.js. I did it like last time.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(line);
