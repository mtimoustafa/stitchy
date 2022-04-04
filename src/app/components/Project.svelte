<div class="mb-10">
  <div class="flex items-center mb-6 space-x-4">
    <RouterLink to="/">
      &#8592;
    </RouterLink>

    <h2 class="text-3xl font-bold inline-block">{project.name}</h2>
  </div>

  <div class="flex justify-between">
    <RouterLink to="/projects/{projectId}/edit">
      Edit
    </RouterLink>

    {#if project.link}
      <Link href="{project.link}">Link</Link>
    {/if}

    <Button on:click={() => deleteProject(project.id)}>
      Delete
    </Button>
  </div>
</div>

<div class="space-y-6 mb-10">
  <div class="text-2xl">
    <p>
      {#if project.currentStep >= project.steps.length}
        <span class="font-bold">Done!</span>
      {:else}
        <span class="font-bold">Step {project.currentStep + 1}:</span>
        {project.steps[project.currentStep].description}
      {/if}
    </p>
  </div>

  <div class="flex justify-between">
    <Button
      on:click={previousStep}
      disabled="{project.currentStep === 0}"
    >
      Previous
    </Button>
    <Button
      on:click={nextStep}
      disabled="{project.currentStep === project.steps.length}"
    >
      Next
    </Button>
  </div>
</div>

<div class="space-y-6">
  <h3 class="text-xl font-bold">All Steps</h3>

  <ol class="list-decimal ml-4">
    {#each project.steps as step, index}
      <li>
        {#if project.currentStep > index}
          ✅
        {/if}
        {step.description}
      </li>
    {/each}
  </ol>
</div>

<script>
  import { navigate } from 'svelte-navigator'
  import { projects } from '../store/stores.js'
  import Button from './shared/Button.svelte'
  import Link from './shared/Link.svelte'
  import RouterLink from './shared/RouterLink.svelte'

  export let projectId
  let project

  project = $projects.find(p => p.id === projectId)
  if (project === undefined) {
    project = { steps: [], currentStep: 0 } // For clean teardown
    navigate('/')
  }

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
      navigate('/')
    }
  }
</script>
