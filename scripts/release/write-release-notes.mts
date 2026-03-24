import fs from "node:fs";

const version = process.env.VERSION;
const outputPath = process.env.OUTPUT_PATH ?? "release-notes.md";

if (!version) {
    console.error("VERSION is required.");
    process.exit(1);
}

const changelog = fs.readFileSync("CHANGELOG.md", "utf8");
const escapedVersion = version.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const sectionPattern = new RegExp(`^## ${escapedVersion}\\n([\\s\\S]*?)(?=^## |\\Z)`, "m");
const match = changelog.match(sectionPattern);

if (!match) {
    console.error(`Could not find CHANGELOG entry for version ${version}.`);
    process.exit(1);
}

const notes = `## ${version}\n${match[1].trim()}\n`;
fs.writeFileSync(outputPath, notes);
