<div class="flex justify-between">
  <h2 class="text-xl sm:text-2xl font-bold text-coral">Projects</h2>

  <button
    class="px-6 py-3 bg-sky-800 text-sky-50 rounded-lg"
    on:click={() => dispatch('newProject')}
  >
    + New Project
  </button>
</div>

<ul class="text-sky-50">
  {#each $projects as project}
    <li>
      <button
        class="px-6 py-3 bg-sky-800 text-sky-50 rounded-lg"
        on:click={() => dispatch('showProject', { projectId: project.id })}
      >
        { project.name }
      </button>
    </li>
  {/each}
</ul>

<script>
  import { createEventDispatcher } from 'svelte'
  import { projects } from '../store/stores.js'

  const dispatch = createEventDispatcher()
</script>
