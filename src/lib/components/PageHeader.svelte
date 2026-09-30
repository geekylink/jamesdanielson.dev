<script>
  let { title, lead = '' } = $props();
</script>

<div class="head">
  <h1><span class="prompt" aria-hidden="true">&gt;</span> {title}</h1>
  {#if lead}<p class="lead">{lead}</p>{/if}
</div>

<style>
  .head { margin: 0.5rem 0 1.6rem; }
  .prompt { color: var(--accent); margin-right: 0.3em; }
  h1 { color: var(--text); }
  .lead { margin: 0.7rem 0 0; color: var(--muted); font-size: 1.5rem; }
</style>
