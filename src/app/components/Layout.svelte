<main
  class="
    container
    mx-auto

    px-10
    py-16
    sm:py-20
    md:py-24
    lg:py-36

    space-y-8
  "
>
  <h1 class="text-3xl sm:text-4xl font-bold text-coral">Stitchy</h1>

  <div class="flex justify-between">
    <h2 class="text-xl sm:text-2xl font-bold text-coral">Projects</h2>

    <button
      class="px-6 py-3 bg-sky-800 text-sky-50 rounded-lg"
      on:click={addProject}
    >
      + New Project
    </button>
  </div>

  {#if viewState === 'projects'}
    <ul class="text-sky-50">
      {#each projects as project}
        <li>
          <button
            class="px-6 py-3 bg-sky-800 text-sky-50 rounded-lg"
            on:click={showProject(project.id)}
          >
            { project.name }
          </button>
        </li>
      {/each}
    </ul>
  {/if}

  {#if viewState === 'addProject'}
    <div class="space-y-8">
      <input
        bind:value={newProject.name}
        class="block"
      >

      {#each newProject.steps as newStep}
        <input
          bind:value={newStep.description}
          class="block"
        >
      {/each}
      <button
        class="px-6 py-3 bg-sky-800 text-sky-50 rounded-lg"
        on:click={() => addStep(newProject)}
      >
        Add Step
      </button>

      <button
        class="px-6 py-3 bg-sky-800 text-sky-50 rounded-lg"
        on:click={createProject}
      >
        Create
      </button>
    </div>
  {/if}

  {#if viewState === 'showProject'}
    <div class="flex justify-between">
      <h2 class="text-xl sm:text-2xl font-bold text-coral">{currentProject.name}</h2>

      <button
        class="px-6 py-3 bg-sky-800 text-sky-50 rounded-lg"
        on:click={deleteProject(currentProject.id)}
      >
        Delete
      </button>
    </div>

    <h3 class="text-md sm:text-lg font-bold text-coral">Row Counter</h3>
    <p class="text-sky-50">{currentProject.rowCount}</p>
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
      {#each currentProject.steps as step}
        <li>
          {step.description}
        </li>
      {/each}
    </ul>
  {/if}
</main>

<script>
  import { v4 as uuid } from "uuid"

  let viewState = 'projects'

  let projects = JSON.parse(localStorage.getItem('projects')) || []

  let newProject
  function addProject() {
    newProject = {
      id: uuid(),
      name: 'New Project',
      link: '',
      steps: [],
      rowCount: 0,
    }
    addStep(newProject)

    viewState = 'addProject'
  }

  function addStep(project) {
    project.steps = [...project.steps, {
      id: uuid(),
      description: '',
    }]
  }

  let currentProject

  function increaseRowCount() {
    projects.map(project => {
      if (project.id === currentProject.id) {
        currentProject.rowCount += 1
        project.rowCount = currentProject.rowCount
      }
    })
    localStorage.setItem('projects', JSON.stringify(projects))
  }

  function decreaseRowCount() {
    projects.map(project => {
      if (project.id === currentProject.id) {
        currentProject.rowCount = project.rowCount <= 0 ? 0 : project.rowCount - 1
        project.rowCount = currentProject.rowCount
      }
    })
    localStorage.setItem('projects', JSON.stringify(projects))
  }

  function showProject(id) {
    currentProject = projects.filter(project => project.id === id)[0]
    viewState = 'showProject'
  }

  function createProject() {
    projects = [...projects, newProject]
    localStorage.setItem('projects', JSON.stringify(projects))

    viewState = 'projects'
  }

  function deleteProject(id) {
    projects = projects.filter(project => project.id !== id)
    currentProject = null
    localStorage.setItem('projects', JSON.stringify(projects))

    viewState = 'projects'
  }
</script>

<style>
</style>
