// Loads and validates all content. Import from here in pages: `import { projects, jobs } from '$lib/data/index.js'`.
import { categories } from './categories.js';
import { validateProjects, validateJobs } from './validate.js';
import { jobs as rawJobs } from './jobs.js';

// Every .js file in ./projects becomes a project (files starting with "_" are ignored).
const modules = import.meta.glob(['./projects/*.js', '!./projects/_*.js'], { eager: true });
/** @type {import('./types.js').Project[]} */
const all = Object.values(modules).map((m) => /** @type {any} */ (m).default);

const problems = [...validateProjects(all), ...validateJobs(rawJobs)];
if (problems.length) {
  throw new Error(`Content problems:\n - ${problems.join('\n - ')}`);
}

export { categories };

/** Visible projects, lowest `order` first. */
export const projects = all
  .filter((p) => !p.hidden)
  .sort((a, b) => (a.order ?? 100) - (b.order ?? 100) || a.title.localeCompare(b.title));

/** Jobs, newest first. */
export const jobs = [...rawJobs].sort((a, b) => b.start.localeCompare(a.start));

/** @param {string} slug */
export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}

/** The project after this one (wraps around). Returns undefined if there is only one project. */
export function getNextProject(/** @type {string} */ slug) {
  if (projects.length < 2) return undefined;
  const i = projects.findIndex((p) => p.slug === slug);
  const next = projects[(i + 1) % projects.length];
  return { slug: next.slug, title: next.title };
}
