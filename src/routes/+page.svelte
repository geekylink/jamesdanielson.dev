<script>
  import { site } from '$lib/data/site.js';
  import SEO from '$lib/components/SEO.svelte';
  import Window from '$lib/components/Window.svelte';
  import BootSequence from '$lib/components/BootSequence.svelte';
  import MenuList from '$lib/components/MenuList.svelte';
  import PixelAvatar from '$lib/components/PixelAvatar.svelte';

  const [first, ...rest] = site.name.split(' ');

  /** Up / Down arrows move through the main menu, like a game. Enter follows the focused link. */
  function onkeydown(/** @type {KeyboardEvent} */ e) {
    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    const items = /** @type {HTMLElement[]} */ ([...document.querySelectorAll('.menu-list .menu-item')]);
    if (!items.length) return;
    e.preventDefault();
    const i = items.indexOf(/** @type {HTMLElement} */ (document.activeElement));
    const next = e.key === 'ArrowDown' ? (i + 1) % items.length : i <= 0 ? items.length - 1 : i - 1;
    items[next].focus();
  }
</script>

<svelte:window {onkeydown} />

<SEO />

<div class="hero">
  <div class="intro">
    <h1>
      <span class="first">{first}</span>
      <span class="last">{rest.join(' ')}</span>
    </h1>
    <p class="tagline">{site.tagline}</p>
    <Window title="jamesdanielson@dev:~$">
      <BootSequence lines={site.boot} />
    </Window>
  </div>

  <Window title="Player 1">
    <div class="player">
      <PixelAvatar />
      <dl class="stats">
        {#each site.stats as stat (stat.label)}
          <div>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        {/each}
      </dl>
    </div>
  </Window>
</div>

<div class="menu">
  <Window title="Main menu">
    <p class="hint">Welcome to my portfolio. Pick a destination.<span class="keys"> Use the up and down arrow keys, then Enter.</span></p>
    <MenuList items={site.homeMenu} />
  </Window>
</div>

<style>
  .hero {
    display: grid;
    grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
    gap: 1.6rem;
    align-items: start;
  }
  .intro { display: grid; gap: 1.2rem; }

  h1 {
    font-size: clamp(1.5rem, 6.5vw, 2.7rem);
    line-height: 1.35;
    color: var(--text);
    text-shadow: 4px 4px 0 var(--hot);
  }
  h1 span { display: block; }
  .tagline { margin: -0.4rem 0 0; font-size: 1.8rem; color: var(--accent); }

  .player { display: grid; gap: 1.1rem; justify-items: start; }
  .stats { margin: 0; display: grid; gap: 0.55rem; width: 100%; }
  .stats div { display: grid; grid-template-columns: 7.5rem 1fr; gap: 0.6rem; align-items: baseline; }
  dt { color: var(--muted); }
  dd { margin: 0; }

  .menu { margin-top: 2rem; }
  .hint { margin: 0 0 0.6rem; color: var(--muted); }

  @media (max-width: 820px) {
    .hero { grid-template-columns: minmax(0, 1fr); }
  }
  @media (pointer: coarse) {
    .keys { display: none; }
  }
</style>
