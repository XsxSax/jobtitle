// jobtitle: the weirdest job title I could invent, squeezed into a single
// line of at most 60 characters. Writes the title to /output/entry.txt.
// Node 22, standard library only.
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const title = "Vice President of Apologizing to the Printer";
writeFileSync(join(outDir, "entry.txt"), title);
