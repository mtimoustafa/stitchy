<div class="flex justify-between items-center mb-10">
  <h2 class="text-3xl font-bold">Projects</h2>

  <Button
    on:click={() => dispatch('newProject')}
    alt="New Project"
  >
    +
  </Button>
</div>

<ul class="text-sky-50 space-y-8">
  {#each $projects as project}
    <li>
      <Button
        on:click={() => dispatch('showProject', { projectId: project.id })}
      >
        { project.name }
      </Button>
    </li>
  {/each}
</ul>

<script>
  import { createEventDispatcher } from 'svelte'
  import { projects } from '../store/stores.js'
  import Button from './shared/Button.svelte'

  const dispatch = createEventDispatcher()
</script>
