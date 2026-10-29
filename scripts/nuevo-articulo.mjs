// Crea un artículo nuevo en borrador:  npm run nuevo -- "Título del artículo"
import { existsSync, writeFileSync } from "node:fs";

const title = process.argv.slice(2).join(" ").trim();
if (!title) {
  console.error('Uso: npm run nuevo -- "Título del artículo"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/ñ/g, "n")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");
const file = `src/content/blog/${slug}.md`;

if (existsSync(file)) {
  console.error(`Ya existe: ${file}`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
writeFileSync(file, `---
title: "${title.replace(/"/g, '\\"')}"
description: "Resumen de una o dos frases que aparece en la tarjeta del artículo."
date: ${today}
tags: []
draft: true
---

Escribe aquí tu artículo en Markdown.

## Un subtítulo

\`\`\`sql
SELECT 1;
\`\`\`
`);

console.log(`Creado ${file} (borrador). Cambia "draft: true" a "draft: false" para publicarlo.`);
