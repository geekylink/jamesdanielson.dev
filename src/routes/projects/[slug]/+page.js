import { error } from '@sveltejs/kit';
import { projects, getProject, getNextProject } from '$lib/data/index.js';

// Tells the static build which /projects/<slug> pages to generate.
export const entries = () => projects.map((p) => ({ slug: p.slug }));

export function load({ params }) {
  const project = getProject(params.slug);
  if (!project) error(404, 'Project not found');
  return { project, next: getNextProject(params.slug) };
}
