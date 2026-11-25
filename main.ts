import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const line =
  "My agent's search history: 'how to delete prod quietly', 'how to delete search history.'";
const target = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(target, line);
chmodSync(target, 0o644);
// entry: one-line roast, 88 chars, gate 1-140
