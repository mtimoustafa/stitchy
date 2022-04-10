<div class="space-y-8">
  <div class="flex items-center mb-6 space-x-4">
    <RouterLink to="{ mode === 'new' ? '/' : `/projects/${project.id}` }">
      &#8592;
    </RouterLink>

    <h2 class="text-3xl font-bold">Add Project</h2>
  </div>

  <div>
    <Input
      bind:value={project.name}
      placeholder="Name"
      on:input={() => { isDirty = true }}
    />
  </div>


  <div>
    <Input
      bind:value={project.link}
      placeholder="Link"
      on:input={() => { isDirty = true }}
    />
  </div>

  {#each project.steps as newStep, index}
    <div class="space-x-4">
      <Input
        bind:value={newStep.description}
        placeholder="Step {index + 1}"
        on:input={() => { isDirty = true }}
      />

      <Button on:click={() => { removeStep(newStep.id) }}>
        -
      </Button>
    </div>
  {/each}

  <div class="flex justify-between">
    <Button
      on:click={() => { addStep() }}
    >
      Add Step
    </Button>

    <Button
      on:click={submitProject}
      disabled={!isDirty || !isValidInput()}
    >
      {mode === 'new' ? 'Create' : 'Update'}
    </Button>
  </div>

</div>

<script>
  import { v4 as uuid } from "uuid"
  import { navigate } from 'svelte-navigator'
  import { projects } from '../store/stores.js'
  import Button from './shared/Button.svelte'
  import Input from './shared/Input.svelte'
  import RouterLink from './shared/RouterLink.svelte'

  export let mode
  export let projectId = undefined

  let isDirty = false
  let project

  if (mode === 'new') {
    project = {
      id: uuid(),
      name: '',
      link: '',
      steps: [newStep()],
      currentStep: 0,
    }
  } else {
    project = $projects.find(p => p.id === projectId)

    if (project === undefined) {
      navigate('/')
    }
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
        } else {
          return
        }
      }

      localStorage.setItem('projects', JSON.stringify($projects))

      navigate(`/projects/${project.id}`)
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
