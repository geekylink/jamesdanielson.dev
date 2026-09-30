<script>
  import '@fontsource/press-start-2p';
  import '@fontsource/vt323';
  import '../app.css';
  import { onMount } from 'svelte';
  import { page } from '$app/state';
  import { base } from '$app/paths';
  import { site } from '$lib/data/site.js';
  import { settings } from '$lib/stores/settings.svelte.js';
  import SettingsBar from '$lib/components/SettingsBar.svelte';

  let { children } = $props();

  onMount(() => settings.init());

  /** @param {string} href */
  function isActive(href) {
    const path = page.url.pathname.replace(/\/$/, '') || '/';
    const target = base + href;
    return path === target || path.startsWith(`${target}/`);
  }
</script>

<a class="skip" href="#main">Skip to content</a>

<div class="shell">
  <header class="top">
    <a class="brand" href="{base}/" aria-label="{site.name}, home">
      james@danielson:~$<span class="cursor" aria-hidden="true"></span>
    </a>
    <nav aria-label="Main">
      <ul>
        {#each site.nav as item (item.href)}
          <li>
            <a
              href="{base}{item.href}"
              aria-current={!item.external && isActive(item.href) ? 'page' : undefined}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
            >{item.label}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </header>

  <main id="main" tabindex="-1">
    {@render children()}
  </main>

  <footer>
    <SettingsBar />
    <p class="links">
      <a href={site.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href={site.links.siteRepo} target="_blank" rel="noopener noreferrer">Source for this site</a>
    </p>
    <p class="copy">&copy; {new Date().getFullYear()} {site.name}</p>
  </footer>
</div>

<style>
  .skip {
    position: absolute;
    left: 0.5rem;
    top: -4rem;
    z-index: 200;
    background: var(--accent);
    color: var(--bg-deep);
    padding: 0.5rem 0.9rem;
  }
  .skip:focus { top: 0.5rem; }

  .shell { max-width: 1000px; margin: 0 auto; padding: 1rem 1rem 3rem; }

  .top {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.9rem 1.5rem;
    padding: 0.4rem 0 1rem;
    margin-bottom: 1.4rem;
    border-bottom: 3px solid var(--line);
  }
  .brand { font: 0.7rem/1.6 var(--font-display); color: var(--accent); text-decoration: none; }
  .brand:hover { color: var(--accent); }

  nav ul { list-style: none; display: flex; flex-wrap: wrap; gap: 0.4rem; margin: 0; padding: 0; }
  nav a {
    display: block;
    font: 0.62rem/1.5 var(--font-display);
    padding: 0.55rem 0.7rem;
    color: var(--text);
    text-decoration: none;
    border: 2px solid transparent;
  }
  nav a:hover { border-color: var(--hot); color: var(--hot); }
  nav a[aria-current='page'] { background: var(--accent); color: var(--bg-deep); }

  main { outline: none; }

  footer {
    margin-top: 3rem;
    padding-top: 1.2rem;
    border-top: 3px solid var(--line);
    display: grid;
    gap: 0.9rem;
    color: var(--muted);
  }
  footer p { margin: 0; }
  .links { display: flex; flex-wrap: wrap; gap: 0.4rem 1.4rem; }
  .copy { font-size: 1.15rem; }
</style>
