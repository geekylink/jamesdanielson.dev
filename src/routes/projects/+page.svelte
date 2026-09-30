<script>
  import { projects, categories } from '$lib/data/index.js';
  import { site } from '$lib/data/site.js';
  import SEO from '$lib/components/SEO.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
  import Window from '$lib/components/Window.svelte';
  import Prose from '$lib/components/Prose.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';

  let filter = $state('all');

  const tabs = $derived([
    { id: 'all', label: 'All', count: projects.length },
    ...Object.entries(categories)
      .map(([id, c]) => ({ id, label: c.label, count: projects.filter((p) => p.category === id).length }))
      .filter((t) => t.count > 0)
  ]);
  const visible = $derived(filter === 'all' ? projects : projects.filter((p) => p.category === filter));
</script>

<SEO title="Projects" description="Games, websites and tools built by James Danielson, from fintech and cyber security to devops and game modding." />

<PageHeader title="So what does James do?" lead="An overview of projects I've worked on." />

<div class="stack">
  <Window title="About these projects">
    <Prose
      text={[
        "I've worked on a bunch of different kinds of projects, and developed many tools for everything from fintech to cyber security and devops. Also, I like to make games and used to run a website for game modding.",
        `If you just want to look through the code, you can explore my various public projects on my personal [GitHub](${site.links.github}). You can also learn more about my [background](/about).`
      ]}
    />
  </Window>

  <div class="filters" role="group" aria-label="Filter projects">
    {#each tabs as t (t.id)}
      <button type="button" aria-pressed={filter === t.id} onclick={() => (filter = t.id)}>
        {t.label} ({t.count})
      </button>
    {/each}
  </div>

  <h2 class="sr-only">Project list</h2>
  <ul class="list">
    {#each visible as project (project.slug)}
      <li><ProjectCard {project} /></li>
    {/each}
  </ul>
</div>

<style>
  .stack { display: grid; gap: 1.6rem; }
  .filters { display: flex; flex-wrap: wrap; gap: 0.6rem; }
  .filters button {
    font: 0.62rem/1.5 var(--font-display);
    color: var(--text);
    background: transparent;
    border: 3px solid var(--line);
    padding: 0.6rem 0.8rem;
    cursor: pointer;
  }
  .filters button:hover { border-color: var(--hot); color: var(--hot); }
  .filters button[aria-pressed='true'] { background: var(--accent); border-color: var(--accent); color: var(--bg-deep); }
  .list { list-style: none; margin: 0; padding: 0; display: grid; gap: 1.6rem; }
</style>
