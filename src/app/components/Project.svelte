<div class="flex justify-between">
  <h2 class="text-xl sm:text-2xl font-bold text-coral">{project.name}</h2>

  <button
    class="px-6 py-3 bg-sky-800 text-sky-50 rounded-lg"
    on:click={() => dispatch('deleteProject', { projectId: project.id })}
    on:click={() => deleteProject(project.id)}
  >
    Delete
  </button>
</div>

<h3 class="text-md sm:text-lg font-bold text-coral">Row Counter</h3>
<p class="text-sky-50">{project.rowCount}</p>
<button
  class="px-6 py-3 bg-sky-800 text-sky-50 rounded-lg"
  on:click={decreaseRowCount}
>
  -
</button>
<button
  class="px-6 py-3 bg-sky-800 text-sky-50 rounded-lg"
  on:click={increaseRowCount}
>
  +
</button>

<h3 class="text-md sm:text-lg font-bold text-coral">Steps</h3>
<ul class="text-sky-50">
  {#each project.steps as step}
    <li>
      {step.description}
    </li>
  {/each}
</ul>

<script>
  import { createEventDispatcher } from 'svelte'
  import { projects } from '../store/stores.js'

  export let project
  
  const dispatch = createEventDispatcher()

  function increaseRowCount() {
    $projects.map(p => {
      if (p.id === project.id) {
        project.rowCount += 1
        p.rowCount = project.rowCount
      }
    })
    localStorage.setItem('projects', JSON.stringify($projects))
  }

  function decreaseRowCount() {
    $projects.map(p => {
      if (p.id === project.id) {
        project.rowCount = p.rowCount <= 0 ? 0 : p.rowCount - 1
        p.rowCount = project.rowCount
      }
    })
    localStorage.setItem('projects', JSON.stringify($projects))
  }

  function deleteProject(id) {
    $projects = $projects.filter(p => p.id !== id)
    localStorage.setItem('projects', JSON.stringify($projects))
    dispatch('back')
  }
</script>
