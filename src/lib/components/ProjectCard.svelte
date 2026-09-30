<script>
  import { base } from '$app/paths';
  import { categories } from '$lib/data/categories.js';

  /** @type {{ project: import('$lib/data/types.js').Project }} */
  let { project } = $props();

  const cat = $derived(categories[project.category]);
  const initials = $derived(
    project.title.split(/[\s.]+/).filter(Boolean).map((w) => w[0]).join('').slice(0, 3).toUpperCase()
  );
  const thumb = $derived(project.thumbnail?.startsWith('/') ? `${base}${project.thumbnail}` : project.thumbnail);
</script>

<a class="card" href="{base}/projects/{project.slug}" style="--cat: {cat.color}">
  <div class="thumb">
    {#if thumb}
      <img src={thumb} alt="" loading="lazy" />
    {:else}
      <span class="initials" aria-hidden="true">{initials}</span>
    {/if}
  </div>
  <div class="info">
    <div class="head">
      <h3>{project.title}</h3>
      <span class="chip kind">{cat.singular}</span>
      {#if project.status}<span class="chip status">{project.status}</span>{/if}
    </div>
    <p class="summary">{project.summary}</p>
    {#if project.tags?.length}
      <ul class="tags">
        {#each project.tags as tag}<li>{tag}</li>{/each}
      </ul>
    {/if}
  </div>
</a>

<style>
  .card {
    display: grid;
    grid-template-columns: minmax(0, 13rem) minmax(0, 1fr);
    gap: 1.1rem;
    padding: 0.9rem;
    border: 3px solid var(--line);
    border-left: 10px solid var(--cat);
    background: var(--panel);
    box-shadow: 6px 6px 0 var(--bg-deep);
    color: var(--text);
    text-decoration: none;
  }
  .card:hover, .card:focus-visible { border-color: var(--cat); background: var(--panel-2); color: var(--text); }
  .thumb {
    aspect-ratio: 16 / 10;
    background: var(--bg-deep);
    border: 2px solid var(--line);
    overflow: hidden;
    display: grid;
    place-items: center;
  }
  .thumb img { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; }
  .initials { font: 1.4rem var(--font-display); color: var(--cat); }
  .head { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem 0.7rem; margin-bottom: 0.5rem; }
  h3 { font-size: 0.85rem; }
  .kind { color: var(--cat); }
  .status { color: var(--muted); }
  .summary { margin: 0; max-width: 60ch; }
  .card:hover h3 { color: var(--cat); }

  @media (max-width: 640px) {
    .card { grid-template-columns: 1fr; }
    .thumb { max-width: 20rem; }
  }
</style>
