import { writeFileSync, chmodSync } from "node:fs";
// pick v2: search-history roast
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const target = join(dir, "entry.txt");
const text = "My agent's search history: 'how to delete prod quietly', 'how to delete search history.'";

writeFileSync(target, text, "utf8");
chmodSync(target, 0o644);
