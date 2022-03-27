<div class="space-y-8">
  <input
    bind:value={newProject.name}
    class="block"
  />

  {#each newProject.steps as newStep}
    <input
      bind:value={newStep.description}
      class="block"
    />
  {/each}

  <button
    class="px-6 py-3 bg-sky-800 text-sky-50 rounded-lg"
    on:click={() => { addStep(newProject); newProject = newProject; }}
  >
    Add Step
  </button>

  <button
    class="px-6 py-3 bg-sky-800 text-sky-50 rounded-lg"
    on:click={() => dispatch('createProject', { newProject })}
  >
    Create
  </button>
</div>

<script>
  import { v4 as uuid } from "uuid"
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  let newProject = {
    id: uuid(),
    name: 'New Project',
    link: '',
    steps: [],
    rowCount: 0,
    currentStep: 0,
  }
  addStep(newProject)

  function addStep(project) {
    project.steps = [...project.steps, {
      id: uuid(),
      description: '',
    }]
  }

</script>
