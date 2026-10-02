<script>
  import { jobs } from '$lib/data/index.js';
  import { formatRange } from '$lib/utils/dates.js';
  import SEO from '$lib/components/SEO.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
  import Window from '$lib/components/Window.svelte';
  import Prose from '$lib/components/Prose.svelte';
</script>

<SEO title="Experience" description="Work history of James Danielson: Six Nines IT, NIKSUN, Pine River Mines, Microsoft, J.P. Morgan and more." />

<PageHeader title="Job history" lead="An overview of the many different jobs I've had." />

<Window title="Looking for more?">
  <Prose text="You can also check out my [educational experience](/education)." />
</Window>

<ol class="timeline">
  {#each jobs as job (job.id)}
    <li>
      <Window title={job.company} meta={formatRange(job.start, job.end)}>
        <p class="role">{job.role}</p>
        <p class="place">{job.location}</p>
        <Prose text={job.description} />
        {#if job.tags?.length}
          <ul class="tags">
            {#each job.tags as tag}<li>{tag}</li>{/each}
          </ul>
        {/if}
      </Window>
    </li>
  {/each}
</ol>

<style>
  .timeline {
    list-style: none;
    margin: 1.6rem 0 0;
    padding: 0 0 0 2rem;
    position: relative;
    display: grid;
    gap: 1.6rem;
  }
  /* The line and squares are real information: the order of jobs over time. */
  .timeline::before {
    content: '';
    position: absolute;
    left: 0.45rem;
    top: 0.6rem;
    bottom: 0.6rem;
    width: 4px;
    background: var(--line);
  }
  .timeline > li { position: relative; min-width: 0; }
  .timeline > li::before {
    content: '';
    position: absolute;
    left: -2rem;
    top: 0.75rem;
    width: 1rem;
    height: 1rem;
    background: var(--accent);
    border: 3px solid var(--bg);
  }
  .role { margin: 0; color: var(--warn); font-size: 1.6rem; }
  .place { margin: 0 0 0.9rem; color: var(--muted); }

  @media (max-width: 520px) {
    .timeline { padding-left: 1.5rem; }
    .timeline > li::before { left: -1.5rem; }
    .timeline::before { left: 0.2rem; }
  }
</style>
