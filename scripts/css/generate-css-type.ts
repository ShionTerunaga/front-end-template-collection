import fs from "fs";
import path from "path";

const dtsPath = require.resolve("csstype/index.d.ts");
const outputPath = path.resolve(__dirname, "../template/css-types.ts");

const content = fs.readFileSync(dtsPath, "utf-8");

const match = content.match(/interface Properties[^]*?\{([^]*?)^\}/m);
if (!match) {
  throw new Error("❌ Could not extract CSS.Properties interface.");
}

const body = match[1];

const propertyNames = Array.from(
  body.matchAll(/^\s{2,}(['"])?([\w-]+)\1?\??:/gm)
).map(([, , name]) => name);

const uniqueProps = Array.from(new Set(propertyNames));

const lines = [
  `// This file is auto-generated. Do not edit manually.`,
  `import type * as CSS from 'csstype';`,
  ``,
  ...uniqueProps.map((prop) => {
    const camelCase = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    const typeName = camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
    return `export type ${typeName} = CSS.Properties['${camelCase}'];`;
  }),
  ``,
];

const dir = path.dirname(outputPath);
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

fs.writeFileSync(outputPath, lines.join("\n"), "utf-8");
console.log(`✅ Generated ${outputPath} with ${uniqueProps.length} properties`);
