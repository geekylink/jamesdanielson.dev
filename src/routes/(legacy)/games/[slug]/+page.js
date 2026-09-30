import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';
import { projects } from '$lib/data/index.js';

// Old URLs like /games/merge and /games/santaschallenge redirect to /projects/<same slug>.
export const entries = () => projects.filter((p) => p.category === 'game').map((p) => ({ slug: p.slug }));

export function load({ params }) {
  redirect(308, `${base}/projects/${params.slug}`);
}
