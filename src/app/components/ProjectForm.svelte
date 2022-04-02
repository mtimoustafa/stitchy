<div class="space-y-8">
  <Button
    on:click={() => dispatch('back')}
  >
    Back
  </Button>

  <input
    bind:value={project.name}
    on:input={() => { isDirty = true }}
    class="block text-black"
  />

  <input
    bind:value={project.link}
    on:input={() => { isDirty = true }}
    class="block text-black"
  />

  {#each project.steps as newStep}
    <div>
      <input
        class="text-black"
        bind:value={newStep.description}
        on:input={() => { isDirty = true }}
      />

      <Button
        on:click={() => { removeStep(newStep.id) }}
      >
        Remove Step
      </Button>
    </div>
  {/each}

  <div>
    <Button
      on:click={() => { addStep() }}
    >
      Add Step
    </Button>
  </div>

  <Button
    on:click={submitProject}
    disabled={!isDirty || !isValidInput()}
  >
    {mode === 'new' ? 'Create' : 'Update'}
  </Button>
</div>

<script>
  import { v4 as uuid } from "uuid"
  import { createEventDispatcher } from 'svelte'
  import { currentProject, projects } from '../store/stores.js'
  import Button from './shared/Button.svelte'

  export let mode

  const dispatch = createEventDispatcher()
  let isDirty = false
  let project

  if (mode === 'new') {
    project = {
      id: uuid(),
      name: 'New Project',
      link: '',
      steps: [newStep()],
      currentStep: 0,
    }
  } else {
    project = $currentProject
  }

  function newStep() {
    return {
      id: uuid(),
        description: '',
    }
  }

  function addStep() {
    project.steps = [...project.steps, newStep()]
    isDirty = true
  }

  function removeStep(stepId) {
    if (project.steps.length === 1) {
      project.steps[0].description = ''
    } else {
      project.steps = project.steps.filter(p => p.id !== stepId)
    }
    isDirty = true
  }

  function submitProject() {
    sanitizeInput()
    if (isValidInput()) {
      if (mode === 'new') {
        $projects = [...$projects, project]
      } else {
        if (window.confirm(`Updating ${project.name} will reset your step tracking. Update still?`)) {
          project.currentStep = 0
          $projects.forEach(p => {
            if (p.id === project.id) {
              p = project
            }
          })
        }
      }

      localStorage.setItem('projects', JSON.stringify($projects))

      if (mode === 'new') {
        dispatch('createProject')
      } else {
        dispatch('updateProject', { project })
      }
    }
  }

  $: isValidInput = function() {
    return project.name.length > 0
      && project.steps.every(s => s.description.length > 0)
  }

  function sanitizeInput() {
    project.name = project.name.trim()
    project.steps.forEach((step, i, steps) => steps[i].description = step.description.trim())
  }
</script>
