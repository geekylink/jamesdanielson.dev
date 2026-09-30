// Content checks shared by the build (index.js) and `npm run validate`.
// Pure JavaScript with no framework imports so it can run in plain Node.
import { categories } from './categories.js';

const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const MONTH = /^\d{4}-(0[1-9]|1[0-2])$/;
const URLISH = /^(https?:\/\/|\/)/;

/** @param {any[]} items @param {(item:any)=>string[]} check @param {(item:any)=>string} name */
function run(items, check, name) {
  const problems = [];
  for (const item of items) {
    for (const p of check(item)) problems.push(`${name(item)}: ${p}`);
  }
  return problems;
}

function checkLinks(links = []) {
  const out = [];
  links.forEach((l, i) => {
    if (!l || !l.label) out.push(`links[${i}] needs a label`);
    if (!l || !URLISH.test(l.url || '')) out.push(`links[${i}] needs a url starting with http(s):// or /`);
  });
  return out;
}

/** @param {import('./types.js').Project[]} projects */
export function validateProjects(projects) {
  const problems = run(
    projects,
    (p) => {
      const out = [];
      if (!p.slug || !SLUG.test(p.slug)) out.push('slug must be lowercase-with-dashes');
      if (!p.title) out.push('missing title');
      if (!categories[p.category]) out.push(`unknown category "${p.category}" (known: ${Object.keys(categories).join(', ')})`);
      if (!p.summary) out.push('missing summary');
      out.push(...checkLinks(p.links));
      (p.blocks ?? []).forEach((b, i) => {
        if (b.type === 'text') {
          if (!b.body || (Array.isArray(b.body) && !b.body.length)) out.push(`blocks[${i}] (text) needs a body`);
        } else if (b.type === 'images') {
          if (!Array.isArray(b.items) || !b.items.length) out.push(`blocks[${i}] (images) needs items`);
          else b.items.forEach((im, j) => { if (!im.src || !im.alt) out.push(`blocks[${i}].items[${j}] needs src and alt`); });
        } else if (b.type === 'video') {
          if (!b.youtube || !b.title) out.push(`blocks[${i}] (video) needs youtube and title`);
        } else out.push(`blocks[${i}] has unknown type "${b.type}" (use text, images or video)`);
      });
      return out;
    },
    (p) => `project "${p.slug ?? p.title ?? '?'}"`
  );
  const seen = new Set();
  for (const p of projects) {
    if (seen.has(p.slug)) problems.push(`duplicate project slug "${p.slug}"`);
    seen.add(p.slug);
  }
  return problems;
}

/** @param {import('./types.js').Job[]} jobs */
export function validateJobs(jobs) {
  const problems = run(
    jobs,
    (j) => {
      const out = [];
      for (const f of ['id', 'company', 'location', 'role']) if (!j[f]) out.push(`missing ${f}`);
      if (!MONTH.test(j.start || '')) out.push('start must look like "2021-11"');
      if (j.end !== null && !MONTH.test(j.end || '')) out.push('end must look like "2021-11", or null for a current job');
      if (!Array.isArray(j.description) || !j.description.length) out.push('description must be a non-empty array of paragraphs');
      return out;
    },
    (j) => `job "${j.id ?? j.company ?? '?'}"`
  );
  const seen = new Set();
  for (const j of jobs) {
    if (seen.has(j.id)) problems.push(`duplicate job id "${j.id}"`);
    seen.add(j.id);
  }
  return problems;
}
