import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Tired Dark Lord: a 100-word villain monologue.
// Spoken by Malachar, who has ruled the Ashen Marches for four centuries
// and is quietly done with all of it. The tiredness lives in the pauses,
// the domestic details and the deflections, never in a plain statement.
const MONOLOGUE = `Come in. Mind the third step, loose since the siege of Aldermere, and in four centuries nobody has bothered.

You expected a throne room. This is what is left of one: a moth-eaten banner, a sleeping raven, a crown that no longer fits. Crowns shrink, like kingdoms, when no one is looking.

I have read your prophecy, chosen one. Sit down. The kettle is on.

My scheme, since you asked: on the eclipse I open the gate beneath the mountain, the gods walk out blinking, and we all begin again.

Strike, if you must. Only let me finish this tea.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, MONOLOGUE, "utf8");
const words = MONOLOGUE.trim().split(/\s+/).length;
console.log(`Wrote ${outPath} (${MONOLOGUE.length} chars, ${words} words)`);
