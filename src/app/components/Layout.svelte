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

  {#if viewState === 'addProject' || viewState === 'editProject'}
    <ProjectForm
      mode="{viewState === 'addProject' ? 'new' : 'edit' }"
      on:createProject={createProject}
      on:updateProject={updateProject}
      on:back={() => viewState = (viewState === 'addProject') ? 'projects' : 'showProject'}
    />
  {/if}

  {#if viewState === 'showProject'}
    <Project
      project={$currentProject}
      on:back={() => viewState = 'projects'}
      on:editProject={() => viewState = 'editProject'}
    />
  {/if}
</main>

<script>
  import { v4 as uuid } from "uuid"
  import Projects from './Projects.svelte'
  import ProjectForm from './ProjectForm.svelte'
  import Project from './Project.svelte'
  import { currentProject, projects } from '../store/stores.js'

  let viewState = 'projects'

  function createProject() {
    viewState = 'projects'
  }
  function updateProject(event) {
    $currentProject = event.detail.project
    viewState = 'showProject'
  }

  function showProject(event) {
    $currentProject = $projects.filter(project => project.id === event.detail.projectId)[0]
    viewState = 'showProject'
  }
</script>
