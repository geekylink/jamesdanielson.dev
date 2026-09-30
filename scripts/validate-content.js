#!/usr/bin/env node
// Checks every project and job for mistakes (typos in field names, duplicate slugs, bad dates...).
// Runs automatically before `npm run build`. You can also run it any time: `npm run validate`
import { readdirSync } from 'node:fs';
import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';
import { validateProjects, validateJobs } from '../src/lib/data/validate.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const projectsDir = path.join(root, 'src/lib/data/projects');

const files = readdirSync(projectsDir).filter((f) => f.endsWith('.js') && !f.startsWith('_'));
const projects = [];
for (const f of files) {
  const mod = await import(pathToFileURL(path.join(projectsDir, f)).href);
  if (!mod.default) {
    console.error(`x ${f}: missing "export default { ... }"`);
    process.exit(1);
  }
  projects.push(mod.default);
}
const { jobs } = await import(pathToFileURL(path.join(root, 'src/lib/data/jobs.js')).href);

const problems = [...validateProjects(projects), ...validateJobs(jobs)];
if (problems.length) {
  console.error('\nContent problems found:\n');
  for (const p of problems) console.error(`  x ${p}`);
  console.error('');
  process.exit(1);
}
const hidden = projects.filter((p) => p.hidden).length;
console.log(`Content OK: ${projects.length} projects (${hidden} hidden), ${jobs.length} jobs.`);
