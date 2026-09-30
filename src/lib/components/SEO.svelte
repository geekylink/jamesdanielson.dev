<script>
  import { site } from '$lib/data/site.js';

  let { title = '', description = site.description } = $props();
  const full = $derived(title ? `${title} | ${site.name}` : `${site.name} - ${site.tagline}`);
</script>

<svelte:head>
  <title>{full}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={full} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content={site.name} />
</svelte:head>
