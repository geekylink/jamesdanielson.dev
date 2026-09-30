<script>
  import { base } from '$app/paths';
  import { categories } from '$lib/data/categories.js';
  import SEO from '$lib/components/SEO.svelte';
  import Window from '$lib/components/Window.svelte';
  import Prose from '$lib/components/Prose.svelte';

  let { data } = $props();
  const project = $derived(data.project);
  const cat = $derived(categories[project.category]);

  /** @param {string} src */
  const img = (src) => (src.startsWith('/') ? `${base}${src}` : src);
</script>

<SEO title={project.title} description={project.summary} />

<p class="back"><a href="{base}/projects">&lt; Back to projects</a></p>

<div class="head" style="--cat: {cat.color}">
  <h1>{project.title}</h1>
  <p class="meta">
    <span class="chip kind">{cat.singular}</span>
    {#if project.period}<span class="period">{project.period}</span>{/if}
    {#if project.status}<span class="chip status">{project.status}</span>{/if}
  </p>
  <p class="summary">{project.summary}</p>
  {#if project.links?.length}
    <p class="links">
      {#each project.links as link (link.url)}
        <a class="btn" href={link.url} target="_blank" rel="noopener noreferrer">{link.label}<span class="sr-only"> (opens in a new tab)</span></a>
      {/each}
    </p>
  {/if}
  {#if project.tags?.length}
    <ul class="tags">
      {#each project.tags as tag}<li>{tag}</li>{/each}
    </ul>
  {/if}
</div>

<div class="stack">
  {#each project.blocks ?? [] as block}
    {#if block.type === 'text'}
      <Window title={block.heading ?? 'Details'}>
        <Prose text={block.body} />
      </Window>
    {:else if block.type === 'images'}
      <Window title={block.heading ?? 'Screenshots'}>
        <ul class="shots">
          {#each block.items as item (item.src)}
            <li>
              <figure>
                <a href={img(item.src)} target="_blank" rel="noopener noreferrer">
                  <img src={img(item.src)} alt={item.alt} loading="lazy" />
                </a>
                {#if item.caption}<figcaption>{item.caption}</figcaption>{/if}
              </figure>
            </li>
          {/each}
        </ul>
      </Window>
    {:else if block.type === 'video'}
      <div class="video">
        <iframe
          src="https://www.youtube-nocookie.com/embed/{block.youtube}"
          title={block.title}
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    {/if}
  {/each}

  {#if data.next}
    <p class="next"><a class="btn" href="{base}/projects/{data.next.slug}">Next: {data.next.title}</a></p>
  {/if}
</div>

<style>
  .back { margin: 0 0 1.2rem; }
  .head { margin-bottom: 1.8rem; border-left: 10px solid var(--cat); padding-left: 1rem; }
  .meta { display: flex; flex-wrap: wrap; align-items: center; gap: 0.6rem 0.9rem; margin: 0.8rem 0 0.6rem; }
  .kind { color: var(--cat); }
  .status { color: var(--muted); }
  .period { color: var(--warn); }
  .summary { max-width: 62ch; margin: 0 0 1rem; }
  .links { display: flex; flex-wrap: wrap; gap: 0.9rem; margin: 0 0 0.4rem; }

  .stack { display: grid; gap: 1.6rem; }

  .shots { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 1rem; }
  .shots li { flex: 1 1 14rem; max-width: 22rem; }
  figure { margin: 0; }
  .shots img { display: block; width: 100%; border: 2px solid var(--line); background: var(--bg-deep); }
  figcaption { color: var(--muted); font-size: 1.15rem; margin-top: 0.3rem; }

  .video { aspect-ratio: 16 / 9; max-width: 720px; border: 3px solid var(--line); background: var(--bg-deep); box-shadow: 6px 6px 0 var(--bg-deep); }
  .video iframe { width: 100%; height: 100%; border: 0; display: block; }

  .next { margin: 0; }
</style>
