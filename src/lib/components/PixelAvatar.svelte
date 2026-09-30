<script>
  import { base } from '$app/paths';
  import { site } from '$lib/data/site.js';

  let { size = 160 } = $props();
  let src = $state(`${base}${site.avatar}`);
  const fallback = `${base}${site.avatarFallback}`;

  function useFallback() {
    if (src !== fallback) src = fallback;
  }
</script>

<img class="avatar" {src} alt={site.name} width={size} height={size} onerror={useFallback} />

<style>
  .avatar {
    display: block;
    border: 3px solid var(--line);
    background: var(--bg-deep);
    object-fit: cover;
    image-rendering: auto;
  }
</style>
