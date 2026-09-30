#!/usr/bin/env node
// Creates a new project file from the template.
//   npm run new:project -- my-slug "My Project Title" game
// category is one of: game, website, tool (see src/lib/data/categories.js)
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { categories } from '../src/lib/data/categories.js';

const [slug, title, category = 'game'] = process.argv.slice(2);
const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/lib/data/projects');

if (!slug || !title) {
  console.error('Usage: npm run new:project -- <slug> "<Title>" [game|website|tool]');
  process.exit(1);
}
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
  console.error('The slug must be lowercase letters, numbers and dashes, e.g. "my-cool-app".');
  process.exit(1);
}
if (!categories[category]) {
  console.error(`Unknown category "${category}". Use one of: ${Object.keys(categories).join(', ')}`);
  process.exit(1);
}
const target = path.join(dir, `${slug}.js`);
if (existsSync(target)) {
  console.error(`${path.relative(process.cwd(), target)} already exists.`);
  process.exit(1);
}

const template = readFileSync(path.join(dir, '_template.js'), 'utf8')
  .replace("slug: 'my-project'", `slug: '${slug}'`)
  .replace("title: 'My Project'", `title: ${JSON.stringify(title)}`)
  .replace("category: 'game'", `category: '${category}'`);

writeFileSync(target, template);
console.log(`Created ${path.relative(process.cwd(), target)}\nFill in the summary, links and blocks, then run "npm run dev".`);
