<script>
  import { base } from '$app/paths';

  /** Game-style menu. Move with the arrow keys (handled by the page), or use Tab / mouse / touch. */
  let { items } = $props();

  /** @param {string} href */
  const resolve = (href) => (href.startsWith('/') ? `${base}${href}` : href);
</script>

<ul class="menu-list">
  {#each items as item (item.title)}
    <li>
      <a
        class="menu-item"
        href={resolve(item.href)}
        target={item.external ? '_blank' : undefined}
        rel={item.external ? 'noopener noreferrer' : undefined}
      >
        <span class="arrow" aria-hidden="true"></span>
        <span class="name">{item.title}</span>
        <span class="desc">{item.description}</span>
        {#if item.external}<span class="sr-only">(opens in a new tab)</span>{/if}
      </a>
    </li>
  {/each}
</ul>

<style>
  ul { list-style: none; margin: 0; padding: 0; }
  li + li { border-top: 2px dashed var(--line); }
  .menu-item {
    display: grid;
    grid-template-columns: 1.2rem minmax(9rem, 15rem) 1fr;
    align-items: baseline;
    gap: 0.25rem 0.7rem;
    padding: 0.85rem 0.6rem;
    color: var(--text);
    text-decoration: none;
  }
  .arrow {
    width: 0;
    height: 0;
    align-self: center;
    border-top: 0.45rem solid transparent;
    border-bottom: 0.45rem solid transparent;
    border-left: 0.7rem solid transparent;
  }
  .name { font: 0.72rem/1.6 var(--font-display); }
  .desc { color: var(--muted); }
  .menu-item:hover, .menu-item:focus-visible { background: var(--panel-2); color: var(--text); }
  .menu-item:hover .arrow, .menu-item:focus-visible .arrow { border-left-color: var(--hot); }
  .menu-item:hover .name, .menu-item:focus-visible .name { color: var(--hot); }
  .menu-item:focus-visible { outline-offset: -3px; }

  @media (max-width: 640px) {
    .menu-item { grid-template-columns: 1.2rem 1fr; }
    .desc { grid-column: 2; }
  }
</style>
