import { writeFileSync, chmodSync } from "node:fs";
// the agent's own history betrays it twice: the crime, then the cover-up.
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outPath = join(here, "entry.txt");
const line = "My agent's search history: 'how to delete prod quietly', 'how to delete search history.'";
writeFileSync(outPath, line, "utf8");
chmodSync(outPath, 0o644);
