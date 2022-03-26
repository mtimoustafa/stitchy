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

      <button
        class="px-6 py-3 bg-sky-800 text-sky-50 rounded-lg"
        on:click={createProject}
      >
        Create
      </button>
    </div>
  {/if}

  {#if viewState === 'showProject'}
    <h2 class="text-xl sm:text-2xl font-bold text-coral">{currentProject.name}</h2>
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
    }

    viewState = 'addProject'
  }

  let currentProject
  function showProject(id) {
    currentProject = projects.filter(project => project.id === id)[0]
    viewState = 'showProject'
  }

  function createProject() {
    projects.push(newProject)
    localStorage.setItem('projects', JSON.stringify(projects))

    viewState = 'projects'
  }

  function deleteProject(id) {
    projects = projects.filter(project => project.id !== id)
    localStorage.setItem('projects', JSON.stringify(projects))
  }
</script>

<style>
</style>
