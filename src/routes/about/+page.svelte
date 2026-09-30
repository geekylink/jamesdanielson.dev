<script>
  import { about } from '$lib/data/about.js';
  import { site } from '$lib/data/site.js';
  import SEO from '$lib/components/SEO.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
  import Window from '$lib/components/Window.svelte';
  import Prose from '$lib/components/Prose.svelte';
  import PixelAvatar from '$lib/components/PixelAvatar.svelte';
</script>

<SEO title="About" description="A brief autobiography of James Danielson, software developer, with over ten years of experience." />

<PageHeader title="So who is James?" lead="A brief autobiography of James Danielson." />

<div class="stack">
  <Window title="Intro">
    <div class="intro">
      <PixelAvatar size={140} />
      <Prose text={about.intro} />
    </div>
  </Window>
  <Window title="Background">
    <Prose text={about.background} />
  </Window>
  <Window title="Travel">
    <Prose text={about.travel} />
  </Window>
  <p class="more">
    <a class="btn" href="{site.links.linkedin}" target="_blank" rel="noopener noreferrer">Contact me on LinkedIn</a>
  </p>
</div>

<style>
  .stack { display: grid; gap: 1.6rem; }
  .intro { display: flex; flex-wrap: wrap; gap: 1.2rem 1.6rem; align-items: flex-start; }
  .intro :global(.prose) { flex: 1 1 22rem; }
  .more { margin: 0; }
</style>
