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

  {#if viewState === 'projects'}
    <Projects
      on:newProject={() => viewState = 'addProject'}
      on:showProject={showProject}
    />
  {/if}

  {#if viewState === 'addProject'}
    <NewProject on:createProject={createProject} />
  {/if}

  {#if viewState === 'showProject'}
    <Project
      project={currentProject}
      on:back={() => viewState = 'projects'}
    />
  {/if}
</main>

<script>
  import { v4 as uuid } from "uuid"
  import Projects from './Projects.svelte'
  import NewProject from './NewProject.svelte'
  import Project from './Project.svelte'
  import { projects } from '../store/stores.js'

  let viewState = 'projects'

  function createProject(event) {
    $projects = [...$projects, event.detail.newProject]
    localStorage.setItem('projects', JSON.stringify($projects))
    viewState = 'projects'
  }

  let currentProject = { steps: [] }
  function showProject(event) {
    currentProject = $projects.filter(project => project.id === event.detail.projectId)[0]
    viewState = 'showProject'
  }
</script>
