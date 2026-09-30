<script>
  import { page } from '$app/state';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';
  import Window from '$lib/components/Window.svelte';

  const notFound = $derived(page.status === 404);
</script>

<SEO title={notFound ? 'Level not found' : 'Error'} />

<Window title={notFound ? 'Game over' : `Error ${page.status}`}>
  <p class="big">{page.status}</p>
  {#if notFound}
    <p>That level doesn't exist. The page may have moved, or the link may be mistyped.</p>
  {:else}
    <p>{page.error?.message ?? 'Something went wrong.'}</p>
  {/if}
  <p><a class="btn" href="{base}/">Back to the main menu</a></p>
</Window>

<style>
  .big { font: 2rem var(--font-display); color: var(--hot); margin-bottom: 0.8rem; }
</style>
