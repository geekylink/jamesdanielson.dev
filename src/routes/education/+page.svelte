<script>
  import { education } from '$lib/data/education.js';
  import { skills } from '$lib/data/skills.js';
  import { jobs } from '$lib/data/index.js';
  import { renderInline } from '$lib/utils/inline.js';
  import { formatRange } from '$lib/utils/dates.js';
  import SEO from '$lib/components/SEO.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
  import Window from '$lib/components/Window.svelte';
  import Prose from '$lib/components/Prose.svelte';

  const teachingJobs = jobs.filter((j) => j.alsoTeaching);
</script>

<SEO title="Education" description="Education, teaching experience and computer skills of James Danielson: University of Michigan, JiaoTong University, Python, C/C++ and more." />

<PageHeader title="James's education" lead="An overview of my experience in education." />

<div class="stack">
  <Window title="Looking for more?">
    <Prose text="You can also check out my [job experience](/experience)." />
  </Window>

  <Window title="Pre-university">
    <Prose text={education.preUniversity} />
  </Window>

  <Window title="University">
    {#each education.university as school}
      <div class="school">
        <h3><a href={school.url} target="_blank" rel="noopener noreferrer">{school.school}</a></h3>
        <p class="place">{school.location}</p>
        <dl class="facts">
          {#each school.details as d}
            <div><dt>{d.label}</dt><dd>{d.value}</dd></div>
          {/each}
        </dl>
        <p class="courses-label">{school.coursesLabel}</p>
        <ul class="tags">
          {#each school.courses as c}<li>{c}</li>{/each}
        </ul>
      </div>
    {/each}
  </Window>

  <Window title="Teaching experience">
    {#each teachingJobs as job (job.id)}
      <div class="teach">
        <h3>{job.company}</h3>
        <p class="place">{job.location}</p>
        <p class="role">{job.role}, {formatRange(job.start, job.end)}</p>
        <Prose text={job.description} />
      </div>
    {/each}
    {#each education.teaching as t (t.name)}
      <div class="teach">
        <h3>{t.name}</h3>
        {#if t.place}<p class="place">{t.place}</p>{/if}
        <p class="role">{t.role}</p>
        <Prose text={t.description} />
      </div>
    {/each}
  </Window>

  <Window title="Computer skills">
    <p class="intro">I've used a lot of programming languages on a bunch of different projects.</p>

    <h3>Programming languages</h3>
    <p class="order">Roughly most experience to least.</p>
    <ol class="slots">
      {#each skills.languages as s, i}<li><span class="rank">{i + 1}</span>{s}</li>{/each}
    </ol>

    <p class="intro">{@html renderInline(skills.systemsNote)}</p>

    <h3>Distros I've used</h3>
    <p class="order">Roughly most experience to least.</p>
    <ol class="slots">
      {#each skills.distros as s, i}<li><span class="rank">{i + 1}</span>{s}</li>{/each}
    </ol>

    <h3>Other software experience</h3>
    <ul class="tags">
      {#each skills.other as s}<li>{s}</li>{/each}
    </ul>
  </Window>

  <Window title="Other">
    <ul class="plain">
      {#each education.other as item}<li>{item}</li>{/each}
    </ul>

    <h3 class="sub">Languages</h3>
    <ul class="plain">
      {#each education.languages.studied as item}<li>{item}</li>{/each}
      <li>Duolingo user since {education.languages.duolingoSince}. Languages I've studied on it:</li>
    </ul>
    <ul class="tags">
      {#each education.languages.duolingo as l (l.name)}<li>{l.name}{l.note ? ` (${l.note})` : ''}</li>{/each}
    </ul>
  </Window>
</div>

<style>
  .stack { display: grid; gap: 1.6rem; }
  h3 { margin: 1.4rem 0 0.4rem; color: var(--accent); }
  h3:first-child { margin-top: 0; }
  .sub { margin-top: 1.6rem; }
  .place { margin: 0 0 0.6rem; color: var(--muted); }
  .role { margin: 0 0 0.6rem; color: var(--warn); }

  .school + .school, .teach + .teach { margin-top: 1.8rem; padding-top: 1.4rem; border-top: 2px dashed var(--line); }
  .facts { margin: 0 0 0.8rem; display: grid; gap: 0.3rem; }
  .facts div { display: grid; grid-template-columns: 8.5rem 1fr; gap: 0.6rem; }
  .facts dt { color: var(--muted); }
  .facts dd { margin: 0; }
  .courses-label { margin: 0; color: var(--muted); }

  .intro { max-width: 68ch; margin: 0 0 1rem; }
  .order { margin: 0 0 0.6rem; color: var(--muted); }

  .slots { list-style: none; margin: 0 0 1.2rem; padding: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(11.5rem, 1fr)); gap: 0.5rem; }
  .slots li { display: flex; align-items: baseline; gap: 0.7rem; border: 2px solid var(--line); padding: 0.25rem 0.6rem; background: var(--bg-deep); }
  .rank { color: var(--warn); min-width: 1.5ch; text-align: right; }

  .plain { margin: 0 0 0.8rem; padding-left: 1.4rem; }
  .plain li { margin-bottom: 0.3rem; }
</style>
