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

<h3 class="text-md sm:text-lg font-bold text-coral">Steps</h3>
<ul class="text-sky-50">
  {#each project.steps as step, index}
    <li>
      {#if project.currentStep > index}
        ✅
      {/if}
      {step.description}
    </li>
  {/each}
</ul>

<h3 class="text-md sm:text-lg font-bold text-coral">Current Step</h3>

{#if project.currentStep >= project.steps.length}
  <p class="text-sky-50">Done!</p>
{:else}
  <p class="text-sky-50">{project.steps[project.currentStep].description}</p>
{/if}

<button
  class="px-6 py-3 bg-sky-800 text-sky-50 rounded-lg"
  on:click={previousStep}
>
  Previous
</button>
<button
  class="px-6 py-3 bg-sky-800 text-sky-50 rounded-lg"
  on:click={nextStep}
>
  Done
</button>

<script>
  import { createEventDispatcher } from 'svelte'
  import { projects } from '../store/stores.js'

  export let project
  
  const dispatch = createEventDispatcher()

  function previousStep() {
    $projects.map(p => {
      if (p.id === project.id) {
        project.currentStep = p.currentStep <= 0 ? 0 : p.currentStep - 1
        p.currentStep = project.currentStep
      }
    })
    localStorage.setItem('projects', JSON.stringify($projects))
  }

  function nextStep() {
    $projects.map(p => {
      if (p.id === project.id) {
        project.currentStep = p.currentStep >= p.steps.length ? p.steps.length : p.currentStep + 1
        p.currentStep = project.currentStep
      }
    })
    localStorage.setItem('projects', JSON.stringify($projects))
  }

  function deleteProject(id) {
    if (window.confirm(`Are you sure you want to delete ${project.name}?`)) {
      $projects = $projects.filter(p => p.id !== id)
      localStorage.setItem('projects', JSON.stringify($projects))
      dispatch('back')
    }
  }
</script>
