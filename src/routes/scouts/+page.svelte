<script>
  import { base } from '$app/paths';
  import { scouts } from '$lib/data/education.js';
  import SEO from '$lib/components/SEO.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
  import Window from '$lib/components/Window.svelte';
  import Prose from '$lib/components/Prose.svelte';

  /** Hide the photo (and its caption) if the file has not been copied into /static yet. */
  function hideFigure(/** @type {Event} */ e) {
    const fig = /** @type {HTMLElement} */ (e.currentTarget).closest('figure');
    if (fig) fig.hidden = true;
  }
</script>

<SEO title="Scouts" description="James Danielson's Boy Scouts experience: Eagle Scout, Order of the Arrow, Den Chief, and his Eagle project." />

<PageHeader title="James's Boy Scout experience" lead="An overview of my scouting experience." />

<div class="stack">
  <Window title="Eagle Scout">
    <Prose text={scouts.intro} />
  </Window>

  <Window title="Eagle project">
    <Prose text={scouts.eagleProject} />
    <figure>
      <img src="{base}{scouts.photo.src}" alt={scouts.photo.alt} width="360" loading="lazy" onerror={hideFigure} />
      <figcaption>{scouts.photo.caption}</figcaption>
    </figure>
  </Window>
</div>

<style>
  .stack { display: grid; gap: 1.6rem; }
  figure { margin: 1.4rem 0 0; max-width: 360px; }
  img { display: block; width: 100%; border: 3px solid var(--line); background: var(--bg-deep); }
  figcaption { color: var(--muted); font-size: 1.15rem; margin-top: 0.4rem; }
</style>
