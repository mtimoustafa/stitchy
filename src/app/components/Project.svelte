<div class="flex justify-between">
  <div class="inline-block space-x-6">
    <button
      class="px-6 py-3 bg-sky-800 text-sky-50 rounded-lg"
      on:click={() => dispatch('back')}
    >
      Back
    </button>

    <h2 class="text-xl sm:text-2xl font-bold inline-block">{project.name}</h2>

    <button
      class="px-6 py-3 bg-sky-800 text-sky-50 rounded-lg"
      on:click={() => dispatch('editProject')}
    >
      Edit
    </button>

    {#if project.link}
      <a
        class="px-6 py-3 bg-sky-800 text-sky-50 rounded-lg"
        href="{project.link}"
        target="_blank"
        rel="noreferrer noopener"
      >
        Link
      </a>
    {/if}
  </div>

  <button
    class="px-6 py-3 bg-sky-800 text-sky-50 rounded-lg"
    on:click={() => deleteProject(project.id)}
  >
    Delete
  </button>
</div>

<h3 class="text-md sm:text-lg font-bold">Steps</h3>
<ol class="list-decimal text-sky-50 ml-4">
  {#each project.steps as step, index}
    <li>
      {#if project.currentStep > index}
        ✅
      {/if}
      {step.description}
    </li>
  {/each}
</ol>

<h3 class="text-md sm:text-lg font-bold">Current Step</h3>

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
