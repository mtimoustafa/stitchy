<div class="space-y-8">
  <button
    class="px-6 py-3 bg-sky-800 text-sky-50 rounded-lg"
    on:click={() => dispatch('back')}
  >
    Back
  </button>

  <input
    bind:value={project.name}
    class="block"
  />

  {#each project.steps as newStep}
    <input
      bind:value={newStep.description}
      class="block"
    />
  {/each}

  <button
    class="px-6 py-3 bg-sky-800 text-sky-50 rounded-lg"
    on:click={() => { addStep(); project = project; }}
  >
    Add Step
  </button>

  <button
    class="px-6 py-3 bg-sky-800 text-sky-50 rounded-lg"
    on:click={submitProject}
  >
    {mode === 'new' ? 'Create' : 'Update'}
  </button>
</div>

<script>
  import { v4 as uuid } from "uuid"
  import { createEventDispatcher } from 'svelte'
  import { currentProject, projects } from '../store/stores.js'

  export let mode

  const dispatch = createEventDispatcher()

  let project
  if (mode === 'new') {
    project = {
      id: uuid(),
      name: 'New Project',
      link: '',
      steps: [],
      rowCount: 0,
      currentStep: 0,
    }
    addStep()
  } else {
    project = $currentProject
  }
  console.log(project)

  function addStep() {
    project.steps = [...project.steps, {
      id: uuid(),
      description: '',
    }]
  }

  function submitProject() {
    sanitizeInput()
    if (isValidInput()) {
      if (mode === 'new') {
        $projects = [...$projects, project]
      } else {
        $projects.forEach(p => {
          if (p.id === project.id) {
            p = project
          }
        })
      }

      localStorage.setItem('projects', JSON.stringify($projects))

      if (mode === 'new') {
        dispatch('createProject')
      } else {
        dispatch('updateProject', { project })
      }
    }
  }

  function isValidInput() {
    console.log(project.name.length > 0, project.steps.every(s => s.description.length > 0))
    return project.name.length > 0
      && project.steps.every(s => s.description.length > 0)
  }

  function sanitizeInput() {
    project.name = project.name.trim()
    project.steps.forEach((step, i, steps) => steps[i].description = step.description.trim())
  }
</script>
