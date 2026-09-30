<script>
  import { onMount } from 'svelte';

  /** @type {{ lines: { kind: 'cmd' | 'out', text: string }[] }} */
  let { lines } = $props();

  // Server-rendered (and no-JS) output shows everything. On mount, the first visit of a session
  // clears it and types it out. Any key or click skips. Reduced motion skips the animation.
  let typed = $state(lines.map((l) => l.text));
  let current = $state(-1);
  let done = $state(true);
  let cancelled = false;

  const sleep = (/** @type {number} */ ms) => new Promise((r) => setTimeout(r, ms));

  function finish() {
    typed = lines.map((l) => l.text);
    current = -1;
    done = true;
    cancelled = true;
    try { sessionStorage.setItem('boot-seen', '1'); } catch { /* ignore */ }
  }

  async function run() {
    for (let i = 0; i < lines.length; i++) {
      if (cancelled) return;
      current = i;
      const line = lines[i];
      if (line.kind === 'cmd') {
        for (let c = 1; c <= line.text.length; c++) {
          if (cancelled) return;
          typed[i] = line.text.slice(0, c);
          await sleep(35);
        }
        await sleep(220);
      } else {
        typed[i] = line.text;
        await sleep(160);
      }
    }
    if (!cancelled) finish();
  }

  onMount(() => {
    const html = document.documentElement;
    const animate = html.dataset.boot === 'animate';
    html.removeAttribute('data-boot'); // un-hides the terminal (see the :global rule below)
    if (!animate) return;
    typed = lines.map(() => '');
    done = false;
    run();
    return () => { cancelled = true; };
  });

  function skip() {
    if (!done) finish();
  }
</script>

<svelte:window onkeydown={skip} onpointerdown={skip} />

<div class="boot">
  {#each lines as line, i}
    <p class="line {line.kind}">
      {#if line.kind === 'cmd'}<span class="prompt" aria-hidden="true">&gt;</span>{/if}
      {typed[i]}{#if current === i}<span class="cursor" aria-hidden="true"></span>{/if}
    </p>
  {/each}
  <p class="line cmd">
    <span class="prompt" aria-hidden="true">&gt;</span>
    {#if done}<span class="cursor" aria-hidden="true"></span>{/if}
  </p>
  {#if !done}<p class="hint">press any key to skip</p>{/if}
</div>

<style>
  .boot { min-height: 12.5rem; }
  /* app.html sets data-boot="animate" on <html> before first paint, so the full text never flashes before typing starts. */
  :global(html[data-boot='animate']) .boot { visibility: hidden; }
  .line { margin: 0 0 0.25rem; min-height: 1.35em; }
  .cmd { color: var(--text); }
  .out { color: var(--muted); padding-left: 1.3rem; }
  .prompt { color: var(--accent); margin-right: 0.6rem; }
  .hint { margin: 0.8rem 0 0; color: var(--warn); font-size: 1.1rem; }
</style>
