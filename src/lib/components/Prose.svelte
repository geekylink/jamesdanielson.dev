<script>
  import { renderInline } from '$lib/utils/inline.js';

  /** One paragraph or several. Supports [links](url) and **bold**. */
  let { text } = $props();
  const paragraphs = $derived(Array.isArray(text) ? text : [text]);
</script>

<div class="prose">
  {#each paragraphs as p}
    <p>{@html renderInline(p)}</p>
  {/each}
</div>
