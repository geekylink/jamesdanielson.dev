<script>
  /** A retro window: title bar on top, content below. */
  let { title, meta = '', children } = $props();
</script>

<section class="window">
  <header class="bar">
    <h2>{title}</h2>
    {#if meta}<span class="meta">{meta}</span>{/if}
  </header>
  <div class="body">
    {@render children?.()}
  </div>
</section>

<style>
  .window {
    border: 3px solid var(--line);
    background: var(--panel);
    box-shadow: 6px 6px 0 var(--bg-deep);
    min-width: 0;
  }
  .bar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    gap: 0.25rem 1rem;
    background: var(--line);
    padding: 0.6rem 0.9rem;
  }
  h2 {
    font-size: 0.72rem;
    color: var(--text);
  }
  .meta {
    color: var(--warn);
    font-size: 1.2rem;
  }
  .body {
    padding: 1rem 1.1rem 1.2rem;
  }
</style>
