<script>
  import { settings, THEMES } from '$lib/stores/settings.svelte.js';
</script>

<div class="settings" role="group" aria-label="Display settings">
  <div class="group" role="group" aria-label="Monitor color">
    <span class="label">Monitor</span>
    {#each THEMES as t (t.id)}
      <button type="button" aria-pressed={settings.theme === t.id} onclick={() => settings.setTheme(t.id)}>
        <span class="swatch" style="background: {t.color}" aria-hidden="true"></span>{t.label}
      </button>
    {/each}
  </div>
  <button type="button" aria-pressed={settings.crt} onclick={() => settings.toggleCrt()}>
    Scanlines {settings.crt ? 'on' : 'off'}
  </button>
</div>

<style>
  .settings { display: flex; flex-wrap: wrap; align-items: center; gap: 0.6rem 1.5rem; }
  .group { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem; }
  .label { color: var(--muted); margin-right: 0.3rem; }
  button {
    font: inherit;
    color: var(--text);
    background: transparent;
    border: 2px solid var(--line);
    padding: 0.1rem 0.7rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }
  button:hover { border-color: var(--accent); }
  button[aria-pressed='true'] { border-color: var(--accent); background: var(--panel-2); }
  .swatch { width: 0.8rem; height: 0.8rem; display: inline-block; }
</style>
